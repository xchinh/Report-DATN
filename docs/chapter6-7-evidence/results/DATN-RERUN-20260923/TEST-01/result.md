# KẾT QUẢ KIỂM THỬ: TEST-01

## 1. Thông tin kịch bản

| Thuộc tính | Giá trị |
| --- | --- |
| Mã kịch bản | `TEST-01` |
| Tiêu chí chất lượng | `NFR-05-B03` (Khả năng tái lập 100% các bộ kiểm thử tự động của dự án) |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026, 17:25–17:27 (`Asia/Ho_Chi_Minh`) |
| Phiên bản Mobile Test | Source tree `myhcmut-mobile` commit `7f90ac74b15ba59a1802c4021e35d793cd417096` (tách biệt với bản build APK cài đặt trên điện thoại được biên dịch từ `a6a1dc6`) |
| Phiên bản Backend Test | `hrm-be` nhánh `chinh-dev` commit `9e39ccc2515defab70c2f18ea88fb0a50b5fd1e0` |
| Môi trường runtime | Flutter `3.41.5`, Dart `3.11.3`, Node `v22.22.2`, Vitest `4.1.10`, Redis `6379` |
| Trạng thái | **Pass (trong phạm vi Bộ kiểm thử tự động Unit & Widget)** |

---

## 2. Kết quả kiểm thử chi tiết & Tệp log độc lập

### 2.1. Mobile Monorepo (`flutter test --no-pub`)
- **Tệp log stdout và exit code độc lập:** [`flutter_test_all_modules.log`](flutter_test_all_modules.log) (91 KB, Exit Code 0 trên cả 6 gói).

| Gói / Module | Đường dẫn | Số test Pass | Tỷ lệ | Exit Code | Ghi chú |
| --- | --- | ---: | ---: | :---: | --- |
| `packages/shared/auth` | `packages/shared/auth` | **2 / 2** | 100% | 0 | Serialization DTO, AuthUser |
| `packages/shared/localization` | `packages/shared/localization` | **8 / 8** | 100% | 0 | MultiLanguage fallback & lexical parser |
| `packages/core/global_system` | `packages/core/global_system` | **3 / 3** | 100% | 0 | AppBatchActionBar toggle |
| `modules/notification` | `modules/notification` | **47 / 47** | 100% | 0 | Danh sách thông báo, batch read/delete |
| `modules/hrm` | `modules/hrm` | **233 / 233** | 100% | 0 | Phép, wizard, lý lịch, timeline, gia đình |
| `modules/ioffice` | `modules/ioffice` | **77 / 77** | 100% | 0 | Lịch, điểm danh, compact schedule |
| **Tổng Mobile** | **6 gói cốt lõi** | **370 / 370** | **100%** | **0** | **Unit & Widget Test Suites** |

### 2.2. HRM Backend Vitest (`npx vitest run`)
- **Tệp log stdout và exit code độc lập:** [`hrm_backend_vitest.log`](hrm_backend_vitest.log) (1.9 KB, Exit Code 0 trên 5 file suite).

| Test Suite | Đường dẫn | Số test Pass | Tỷ lệ | Exit Code | Nghiệp vụ kiểm chứng |
| --- | --- | ---: | ---: | :---: | --- |
| `sso_phase0.unit.test.ts` | `test/unit/sso_phase0.unit.test.ts` | **18 / 18** | 100% | 0 | SSO Registry & validate domain |
| `sso_phase1.unit.test.ts` | `test/unit/sso_phase1.unit.test.ts` | **20 / 20** | 100% | 0 | Vé một lần (One-Time Ticket) & replay |
| `sso_phase7.unit.test.ts` | `test/unit/sso_phase7.unit.test.ts` | **8 / 8** | 100% | 0 | Session Cookie & truyền nhận phiên |
| `acquire_leave_lock.unit.test.ts` | `test/unit/tcns_nghi_phep/acquire_leave_lock.unit.test.ts` | **4 / 4** | 100% | 0 | Advisory Lock chống xung đột phép |
| `concurrency_race_condition.unit.test.ts` | `test/unit/tcns_nghi_phep/concurrency_race_condition.unit.test.ts` | **7 / 7** | 100% | 0 | Race condition kiểm tra trùng lịch |
| **Tổng Backend** | **5 file suite mục tiêu** | **57 / 57** | **100%** | **0** | **Vitest Unit Suites** |

---

## 3. Tổng hợp số liệu & Ranh giới kiểm thử

```text
================================================================================
KẾT QUẢ KIỂM THỬ TỰ ĐỘNG (TEST-01 RERUN - 23/09/2026)
================================================================================
Mobile Monorepo (Flutter Unit & Widget) : 370 / 370 Pass (Exit Code: 0)
HRM Backend (Vitest Unit Suites)        :  57 /  57 Pass (Exit Code: 0)
--------------------------------------------------------------------------------
TỔNG HỢP KIỂM THỬ TỰ ĐỘNG              : 427 / 427 Pass (100% bộ test nội tại)
================================================================================
```

### Ranh giới & Giới hạn khẳng định:
- **Phạm vi áp dụng:** 427 bài kiểm thử tự động này là các kiểm thử đơn vị (Unit test), kiểm thử mô hình dữ liệu (Data models), logic Provider (Riverpod/State) và giao diện thành phần (Widget test) độc lập.
- **Ranh giới tuyên bố:** Bộ test này **không phải là kiểm thử đầu–cuối (End-to-End / E2E) đa phân hệ** và **không chứng minh toàn bộ hệ thống tích hợp đạt 100% không có lỗi**. Các lỗi tích hợp thực tế (như sai khác ranh giới duyệt, lỗi ngoại lệ tiếng Anh trên giao diện hay âm số dư phép) cần được đối chiếu với kết quả của 22 kịch bản trong kế hoạch, trong đó 3 kịch bản P2 chưa chạy.

---

## 4. Kết luận

- Tiêu chí `NFR-05-B03` (Khả năng tái lập các bộ kiểm thử tự động nội bộ của dự án) đạt trạng thái **Pass**.
- Cả hai bộ test Mobile và Backend đều có tệp log độc lập, exit code `0` minh bạch, có thể kiểm chứng độc lập.
