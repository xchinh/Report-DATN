import { expect, test, vi } from 'vitest';

// Run as a temporary test/unit file in hrm-be; no DB or delivery is used.
// The real approval route executes against a forced two-reader interleaving.
const { app, routes } = vi.hoisted(() => {
    const routes = new Map<string, Function>();
    const register = (path: string, ...handlers: Function[]) => routes.set(path, handlers.at(-1)!);
    const app = { get: register, post: register, put: register, delete: register,
        wrap: (fn: Function) => fn, permissions: { check() {}, orCheck() {} },
        upload: { middlewareSave: () => [] }, model: {} as Record<string, any>,
    };
    return { app, routes };
});
vi.mock('@config/app', () => ({ app }));
vi.mock('@config/databases', () => ({ BkcoretechModel: {} }));
vi.mock('@config/lib/fs', () => ({ default: {} }));
vi.mock('@config/lib', () => ({ ValidationError: class extends Error {}, NotFoundError: class extends Error {} }));
vi.mock('@modules/md_staff/permission', () => ({ PERMISSIONS: {
    CN_NGHI_PHEP: { PERMISSION: 'cn:nghi_phep' },
    DV_NGHI_PHEP: { READ: { PERMISSION: 'dv:nghi_phep:read' }, MANAGE: { PERMISSION: 'dv:nghi_phep:manage' } },
    TCNS_NGHI_PHEP: { READ: { PERMISSION: 'tcns:nghi_phep:read' }, WRITE: { PERMISSION: 'tcns:nghi_phep:write' } },
} }));
vi.mock('@modules/md_tcns/tcns_quy_trinh/helper', () => ({
    requireRejectionReason() {}, sendQuyTrinhNotification() {}, handleSetFilter() {},
}));
vi.mock('@modules/md_tcns/tcns_nghi_phep/helper', () => ({}));

test('H01: two final approvals can both pass the same-record state check in the real handler', async () => {
    let readers = 0, release!: () => void;
    const barrier = new Promise<void>(resolve => { release = resolve; });
    const state = { id: 1, shcc: 'STAFF', maQuyTrinh: 'TRUONG_DV', trangThai: 'DUYET' };
    const updates: object[] = [], inserts: number[] = [], histories: object[] = [];
    app.model = {
        staffLyLich: { get: async () => ({ donVi: 'TEST' }) },
        tcnsQuyTrinhUser: { get: async () => ({}), fetchQuyTrinh: async () => ({ list: [] }), delete: async () => {} },
        tcnsQuyTrinhUserBoSung: { getAll: async () => [] },
        tcnsQuyTrinhHistory: { create: async (row: object) => { histories.push(row); } },
        tcnsNghiPhepDangKy: {
            get: async () => {
                const snapshot = { ...state };
                if (++readers === 2) release();
                await barrier;
                return snapshot;
            },
            update: async (where: object, patch: object) => { updates.push(where); Object.assign(state, patch); },
            insert: async (id: number) => { inserts.push(id); },
        },
    };
    await import('@modules/md_tcns/tcns_nghi_phep/controller');
    const approve = routes.get('/api/tcns-nghi-phep/duyet')!;
    let successes = 0;
    const req = (shcc: string) => ({ session: { user: { shcc } }, body: { data: {
        phieuId: 1, maQuyTrinhBefore: 'TRUONG_DV', maQuyTrinh: 'KET_THUC', trangThai: 'DUYET',
    } } });
    const res = { send() { successes++; } };
    await Promise.all([approve(req('APPROVER_A'), res), approve(req('APPROVER_B'), res)]);
    expect(successes).toBe(2);
    expect(histories).toHaveLength(2);
    expect(updates).toEqual([{ id: 1 }, { id: 1 }]);
    expect(inserts).toEqual([1, 1]);
    // Stored-procedure constraints/locking are not modeled: this is not a DB race result.
});
