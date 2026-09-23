# KẾT QUẢ KIỂM THỬ: TEST-01

## 1. Thông tin kịch bản

| Thuộc tính | Giá trị |
| --- | --- |
| Mã kịch bản | `TEST-01` |
| Tiêu chí chất lượng | `NFR-05-B03` (Khả năng tái lập 100% các bộ kiểm thử tự động của dự án) |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026, 15:54–15:56 (`Asia/Ho_Chi_Minh`) |
| Phiên bản Mobile | `feat/leaveRequest` commit `7f90ac74b15ba59a1802c4021e35d793cd417096` |
| Phiên bản Backend | `chinh-dev` commit `9e39ccc2515defab70c2f18ea88fb0a50b5fd1e0` |
| Môi trường runtime | Flutter `3.41.5`, Dart `3.11.3`, Node `v22.22.2`, Vitest `4.1.10`, Redis `6379` |
| Trạng thái | **Pass (100%)** |

---

## 2. Kết quả kiểm thử chi tiết

### 2.1. Mobile Monorepo (`flutter test --no-pub`)

| Gói / Module | Đường dẫn | Số test Pass | Tỷ lệ | Thời gian |
| --- | --- | ---: | ---: | --- |
| `packages/shared/auth` | `packages/shared/auth` | **2 / 2** | 100% | 00:03 |
| `packages/shared/localization` | `packages/shared/localization` | **8 / 8** | 100% | 00:04 |
| `packages/core/global_system` | `packages/core/global_system` | **3 / 3** | 100% | 00:02 |
| `modules/notification` | `modules/notification` | **47 / 47** | 100% | 00:05 |
| `modules/hrm` | `modules/hrm` | **233 / 233** | 100% | 00:15 |
| `modules/ioffice` | `modules/ioffice` | **77 / 77** | 100% | 00:05 |
| **Tổng Mobile** | **6 gói cốt lõi** | **370 / 370** | **100%** | |

### 2.2. HRM Backend Vitest (`npx vitest run`)

| Test Suite | Đường dẫn | Số test Pass | Tỷ lệ | Thời gian |
| --- | --- | ---: | ---: | --- |
| `sso_phase0.unit.test.ts` | `test/unit/sso_phase0.unit.test.ts` | **18 / 18** | 100% | 105ms |
| `sso_phase1.unit.test.ts` | `test/unit/sso_phase1.unit.test.ts` | **20 / 20** | 100% | 188ms |
| `sso_phase7.unit.test.ts` | `test/unit/sso_phase7.unit.test.ts` | **8 / 8** | 100% | 35ms |
| `acquire_leave_lock.unit.test.ts` | `test/unit/tcns_nghi_phep/acquire_leave_lock.unit.test.ts` | **4 / 4** | 100% | 8ms |
| `concurrency_race_condition.unit.test.ts` | `test/unit/tcns_nghi_phep/concurrency_race_condition.unit.test.ts` | **7 / 7** | 100% | 68ms |
| **Tổng Backend** | **5 file suite mục tiêu** | **57 / 57** | **100%** | **2.28s** |

---

## 3. Tổng hợp toàn hệ thống

```text
================================================================================
KẾT QUẢ KIỂM THỬ TỰ ĐỘNG TOÀN DIỆN (TEST-01 RERUN - 23/09/2026)
================================================================================
Mobile Monorepo (Flutter Test)  : 370 / 370 Pass (100%)
HRM Backend (Vitest Suites)      :  57 /  57 Pass (100%)
--------------------------------------------------------------------------------
TỔNG HỢP TOÀN HỆ THỐNG           : 427 / 427 Pass (100%)
================================================================================
```

## 4. Kết luận

- 100% các bài test tự động mục tiêu trên cả Mobile và Backend đều đạt kết quả Pass sạch mà không phát sinh lỗi biên dịch hay flaky test.
- Tiêu chí `NFR-05-B03` chính thức đạt trạng thái **Pass** trên phiên bản mã nguồn đã khóa.
