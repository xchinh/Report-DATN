# Báo cáo kết quả kiểm thử tự động — TEST-01: Chạy lại toàn diện Mobile & Backend

## 1. Tóm tắt tổng quan

Đợt chạy lại ngày 23/09/2026 thực hiện tái lập toàn bộ bộ kiểm thử tự động của dự án sau khi đã kéo (pull) và hợp nhất (merge) các commit mới nhất trên Mobile (`a6a1dc6`) và cập nhật cấu hình Backend.

Kết quả đạt được: **427/427 bài kiểm thử đạt yêu cầu (Pass 100%)**, giải quyết triệt để các lỗi biên dịch và lỗi kiểm thử từng ghi nhận trước đó.

## 2. Chi tiết kết quả kiểm thử di động (Flutter Test Monorepo)

Toàn bộ 6 gói/module của mobile monorepo được thực thi trực tiếp bằng `flutter test --no-pub --reporter expanded`:

| Gói / Module | Loại kiểm thử | Số ca kiểm thử | Kết quả | Ghi chú |
| --- | --- | ---: | --- | --- |
| `packages/shared/auth` | Unit test | 2 / 2 | **Pass** | Kiểm tra AuthUser, LoginResponse serialization |
| `packages/shared/localization` | Unit test | 8 / 8 | **Pass** | MultiLanguage fallback, lexical parser dấu tiếng Việt |
| `packages/core/global_system` | Widget test | 3 / 3 | **Pass** | AppBatchActionBar toggle và rendering |
| `modules/notification` | Unit & Widget test | 47 / 47 | **Pass** | Quản lý danh sách thông báo, đa nguồn, batch read/delete |
| `modules/hrm` | Unit & Widget test | 233 / 233 | **Pass** | Quản lý nghỉ phép, wizard, timeline lý lịch, lương, gia đình |
| `modules/ioffice` | Unit, Provider & Widget test | 77 / 77 | **Pass** | Điểm danh, văn bản, lịch làm việc, compact schedule |
| **Tổng cộng Mobile** | | **370 / 370** | **Pass (100%)** | Toàn bộ 6/6 gói thành công |

## 3. Chi tiết kết quả kiểm thử Backend (Vitest Unit Suites)

Thực thi 5 tệp suite cốt lõi bằng `npx vitest run`:

| Tệp kiểm thử (Suite) | Số ca kiểm thử | Kết quả | Mô tả nghiệp vụ |
| --- | ---: | --- | --- |
| `test/unit/sso_phase0.unit.test.ts` | 18 / 18 | **Pass** | Cấu hình SSO Registry, URL discovery, validate domain |
| `test/unit/sso_phase1.unit.test.ts` | 20 / 20 | **Pass** | Sinh và tiêu thụ vé SSO một lần (One-Time Ticket), chống replay attack |
| `test/unit/sso_phase7.unit.test.ts` | 8 / 8 | **Pass** | Cơ chế Session Cookie và bảo mật truyền nhận phiên |
| `test/unit/tcns_nghi_phep/acquire_leave_lock.unit.test.ts` | 4 / 4 | **Pass** | Cơ chế Advisory Lock tránh xung đột lập đơn nghỉ phép |
| `test/unit/tcns_nghi_phep/concurrency_race_condition.unit.test.ts` | 7 / 7 | **Pass** | Kiểm soát tương tranh nộp trùng lịch, kiểm tra trùng lặp |
| **Tổng cộng Backend** | **57 / 57** | **Pass (100%)** | Toàn bộ 5/5 tệp suite thành công |

## 4. So sánh với đợt chạy trước

| Tiêu chí | Đợt chạy trước (22/09) | Đợt chạy lại (23/09) | Cải thiện |
| --- | --- | --- | --- |
| Mobile compilation | Thiếu generated code hcmut_sign | Sinh mã đầy đủ, compile sạch | Khắc phục hoàn toàn lỗi tải test |
| Mobile test pass | 370 / 370 (có điều kiện) | **370 / 370 (clean run)** | Đạt độ tin cậy cao |
| Backend test pass | 52 Pass, 2 Fail, 3 Skipped / 57 | **57 / 57 Pass** | Khắc phục 2 Fail và 3 Skipped |
| Tổng số test Pass | 422 / 427 | **427 / 427 (100%)** | Toàn bộ đạt Pass |

## 5. Kết luận
- **Trạng thái:** **Pass**
- Tiêu chí `NFR-05-B03` được nâng từ mức "Bằng chứng hạn chế / Fail" lên **Đủ bằng chứng / Pass hoàn toàn**.
