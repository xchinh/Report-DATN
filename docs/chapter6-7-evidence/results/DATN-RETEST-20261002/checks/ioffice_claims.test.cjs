const assert = require('node:assert/strict');
const { test } = require('node:test');
const path = require('node:path');
const root = process.env.IOFFICE_REPO;
if (!root) throw new Error('Set IOFFICE_REPO to the ioffice-be checkout');
const load = file => require(path.join(root, file));

// Real controllers/models; storage, middleware and delivery are mocked.
// These checks record discrepancies; PASS does not certify authorization.
function harness() {
    const routes = new Map(), calls = { rows: [], commits: 0 };
    const validation = { notEmpty() { return this; }, trim() { return this; },
        isString() { return this; }, isLength() { return this; }, withMessage() { return this; } };
    const item = { id: 1, cap: 'TRUONG', stepName: 'TONG_HOP', donVi: 'OWNER',
        shcc: 'OWNER', assign: [], startTime: Date.now() - 1000, endTime: Date.now() + 60000 };
    const app = {
        get(p, ...hs) { routes.set('GET ' + p, hs.at(-1)); },
        post(p, ...hs) { routes.set('POST ' + p, hs.at(-1)); }, put() {}, delete() {},
        permission: { check() {}, orCheck() {} },
        middleware: { validation() {}, validate: { body: () => validation } },
        database: { postgres: { sequelize: { transaction: async () => ({
            commit: async () => { calls.commits++; }, rollback: async () => {},
        }) } } },
        model: {
            scheduleGeneralItem: { get: async () => item, fetchItem: async () => ({ list: [item] }) },
            scheduleGeneralAssign: { getAll: async () => [] },
            scheduleMeetingAttendance: { getAll: async () => [], bulkCreate: async rows => {
                calls.rows.push(...rows); return rows;
            } },
            scheduleGeneralItemLog: { create: async () => {} },
            scheduleUser: { get: async ({ shcc }) => ({ shcc, fullName: 'TEST' }) },
            fwDonVi: { getAll: async () => [], get: async () => ({ tenVietTat: 'TEST' }) },
            eofficeVanBanDen: { get: async () => ({ id: 2, trangThai: 'NHAP', shcc: 'OWNER' }) },
            eofficeVanBanDenTask: { getAll: async () => [] },
            eofficeVanBanDenSoDen: { get: async () => ({}) },
            eofficeUser: { get: async () => ({ ho: 'TEST', ten: 'TEST' }) },
            eofficeVanBanDenPhieuGiaiQuyet: { get: async () => null, create: async row => {
                calls.rows.push(row); return { id: 3, ...row };
            } },
            eofficeVanBanDenLog: { create: async () => {} },
        },
        io: { to: () => ({ emit() {} }) },
        apiResponse: { send(req, res, data) { res.data = data; }, error(req, res, error) { res.error = error; } },
    };
    return { app, routes, calls };
}

test('I01: unrelated guest is denied pending detail but checkin handler accepts it', async () => {
    const { app, routes, calls } = harness();
    load('modules/md-schedule/schedule-general/model/scheduleGeneralItem')(app);
    load('modules/md-schedule/schedule-general/controller/schedule-general-item')(app);
    load('modules/md-schedule/schedule-general/controller/schedule-meeting-checkin')(app);
    const req = { params: { id: '1' }, session: {
        user: { shcc: 'GUEST', listDonVi: [{ maDonVi: 'OTHER' }], permissions: ['scheduleGeneral:read'] },
        schedule: { shcc: 'GUEST', maDonVi: 'OTHER' },
    } };
    const detail = {}, checkin = {};
    await routes.get('GET /api/schedule/general-item/details/:id')(req, detail);
    assert.ok(detail.error);
    await routes.get('POST /api/schedule/general-item/:id/checkin')(req, checkin);
    assert.equal(checkin.error, undefined);
    assert.equal(calls.rows.length, 1);
    assert.equal(calls.rows[0].assignId, null);
    assert.equal(calls.commits, 1);
});

test('I02: PGQ handler accepts assignment without checking actor ownership or receiver membership', async () => {
    const { app, routes, calls } = harness();
    load('modules/md-eoffice/eoffice-van-ban-den/controller/eofficeVanBanDenPGQ.controller')(app);
    const res = {};
    await routes.get('POST /api/e-office/van-ban-den/phieu-giai-quyet')({
        body: { data: { vanBanDenId: 2, maDonVi: 'TARGET', shcc: 'UNVERIFIED', thucHien: true } },
        session: { eoffice: { shcc: 'UNRELATED', maDonVi: 'OTHER', roles: [] },
            user: { permissions: ['eofficeVanBanDen:read'] } },
    }, res);
    assert.equal(res.error, undefined);
    assert.equal(calls.rows.length, 1);
    assert.equal(calls.rows[0].createdBy, 'UNRELATED');
    assert.equal(calls.rows[0].shcc, 'UNVERIFIED');
    assert.equal(calls.commits, 1);
});
