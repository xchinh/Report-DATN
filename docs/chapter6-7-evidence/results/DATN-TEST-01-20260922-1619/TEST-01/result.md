# TEST-01 — KẾT QUẢ TÁI LẬP BỘ KIỂM THỬ HIỆN CÓ

## 1. Kết luận

**Trạng thái: Fail đối với yêu cầu tái lập sạch trên snapshot báo cáo.**

Bộ mobile đạt tổng 370/370 sau khi bổ sung bước sinh mã bị thiếu khỏi fresh checkout. Bộ backend không đạt trên tổ hợp commit khóa: sau khi bổ sung các điều kiện import tối thiểu, kết quả là 52 Pass, 2 Fail và 3 Skipped trên 57 test.

Không được dùng lần chạy này để viết “427/427 test hiện tại đều Pass”. Con số 370 mobile chỉ là kết quả **có điều kiện sau code generation**; backend chưa Pass tại tổ hợp snapshot báo cáo.

## 2. Lệnh thực hiện

### Mobile

```bash
melos bootstrap

cd modules/hrm && flutter test --no-pub --reporter expanded
cd modules/notification && flutter test --no-pub --reporter expanded
cd modules/ioffice && flutter test --no-pub --reporter expanded
cd packages/shared/localization && flutter test --no-pub --reporter expanded
cd packages/shared/auth && flutter test --no-pub --reporter expanded
cd packages/core/global_system && flutter test --no-pub --reporter expanded
```

Sau khi `modules/ioffice` Fail vì thiếu tệp sinh tự động:

```bash
cd packages/core/hcmut_sign
dart run build_runner build --delete-conflicting-outputs
cd ../../../modules/ioffice
flutter test --no-pub --reporter expanded
```

### Backend

```bash
yarn install --frozen-lockfile
yarn vitest run \
  test/unit/sso_phase0.unit.test.ts \
  test/unit/sso_phase1.unit.test.ts \
  test/unit/sso_phase7.unit.test.ts \
  test/unit/tcns_nghi_phep/acquire_leave_lock.unit.test.ts \
  test/unit/tcns_nghi_phep/concurrency_race_condition.unit.test.ts
```

Backend được chạy lại sau khi thêm sibling worktree `ioffice-fe:bf27e36a` và dùng nội dung `config/databases/models.template.ts` làm tệp ignored `config/databases/models.ts` để các unit test có thể import cấu hình.

## 3. Kết quả mobile

| Package | Fresh run | Sau điều kiện bổ sung |
| --- | --- | --- |
| `modules/hrm` | 233 Pass | Không chạy lại |
| `modules/notification` | 47 Pass | Không chạy lại |
| `modules/ioffice` | Fail khi compile; 64 test đã Pass trước khi runner kết thúc với 2 lỗi tải test | 77/77 Pass sau code generation |
| `packages/shared/localization` | 8 Pass | Không chạy lại |
| `packages/shared/auth` | 2 Pass | Không chạy lại |
| `packages/core/global_system` | 3 Pass | Không chạy lại |
| **Tổng có điều kiện** | Không có tổng Pass sạch | **370/370 Pass** |

Nguyên nhân `ioffice` Fail ban đầu: snapshot không theo dõi các tệp `*.freezed.dart` và `*.g.dart` của `packages/core/hcmut_sign`, trong khi `melos bootstrap` không sinh các tệp này. Sau khi chạy `build_runner`, suite đạt 77/77.

## 4. Kết quả backend

### Lần chạy fresh đầu tiên

- 38 test được thực thi: 34 Pass, 4 Fail.
- Ba suite khác không tải được vì `config/databases/models.ts` là tệp sinh tự động bị ignore và không có trong fresh checkout.
- Hai test đọc `ioffice-fe` không chạy được vì repository này chưa được liệt kê trong snapshot của kế hoạch ban đầu.

### Lần chạy sau điều kiện import tối thiểu

| Suite | Kết quả |
| --- | --- |
| `sso_phase0.unit.test.ts` | 17 Pass, 1 Fail |
| `sso_phase1.unit.test.ts` | 19 Pass, 1 Fail |
| `sso_phase7.unit.test.ts` | 5 Pass, 3 Skipped; suite Fail tại `beforeAll` của nhóm iOffice cookie |
| `acquire_leave_lock.unit.test.ts` | Pass |
| `concurrency_race_condition.unit.test.ts` | Pass |
| **Tổng** | **52 Pass, 2 Fail, 3 Skipped / 57 test; 2/5 test files Pass** |

Ba điểm không tương thích với `ioffice-be:53f069a3`:

1. Cấu hình CORS tại snapshot không chứa các origin `localhost:6022`, `10.0.2.2:6022`, `localhost:3000`, `10.0.2.2:3000` mà test SSO yêu cầu.
2. `modules/init.js` chưa có `POST /api/auth/sso/consume-ticket` với Redis `getDel` như test Phase 1 mong đợi.
3. `config/lib/session.js` chưa export `getSessionCookieConfig`, làm nhóm test cookie iOffice bị skip sau lỗi `beforeAll`.

Đây là xung đột phiên bản giữa bộ test ở `hrm-be:87e17bcd` và snapshot `ioffice-be:53f069a3`; không phải bằng chứng cho thấy toàn bộ backend runtime hỏng.

## 5. Khôi phục và giới hạn kết luận

- Container Redis tạm đã được dừng và xóa.
- Không có dữ liệu nghiệp vụ hoặc tài khoản staging bị thay đổi.
- Generated files và `models.ts` chỉ tồn tại trong temporary worktree, không được commit vào repository sản phẩm.
- `NFR-05-B03` vẫn ở mức **Bằng chứng hạn chế**: có bằng chứng tái chạy trực tiếp, nhưng chưa có một lệnh clean-room duy nhất làm toàn bộ bộ test mục tiêu Pass trên tổ hợp commit báo cáo.
