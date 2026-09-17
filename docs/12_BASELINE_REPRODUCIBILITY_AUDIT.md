# KIỂM TOÁN KHẢ NĂNG TÁI LẬP BASELINE

## 1. Mục tiêu

Kiểm toán này xác nhận khả năng truy xuất commit, tính nhất quán giữa tài liệu chuẩn và mã nguồn, và khả năng tái chạy các lệnh kiểm thử đã công bố. Đây không phải là một lần nghiệm thu mới và không thay thế log kiểm thử gốc của Gate 0.

## 2. Snapshot được kiểm tra

| Repository | Commit tài liệu Gate 0 | Có thể truy xuất | Trạng thái HEAD lúc kiểm tra |
| --- | --- | --- | --- |
| `myhcmut-mobile` | `4fe5d9c` | Có | Trùng baseline |
| `hrm-be` | `38745a26` | Có | Đã có commit mới hơn |
| `hrm-fe` | `83caf648` | Có | Đã có commit mới hơn và working tree có thay đổi chưa commit |
| `ioffice-be` | `53f069a3` | Có | Đã có commit mới hơn và working tree có thay đổi chưa commit |
| `myhcmut-be` | `7e687a60` | Có | Trùng baseline |

Kết luận: các commit Gate 0 vẫn truy xuất được và là snapshot phù hợp để viết báo cáo. Không dùng HEAD của các repository khác làm “hệ thống hiện tại” cho báo cáo nếu chưa có baseline mới, vì chúng không đồng nhất và một số working tree đang bẩn.

## 3. Kết quả kiểm tra ngày 15/09/2026

### 3.1 Môi trường Mobile

`flutter --version` xác nhận Flutter `3.41.5`, Dart `3.11.3`; phù hợp thông số môi trường Gate 0. Sáu lệnh chạy riêng từng package trong working tree `myhcmut-mobile` tại commit `4fe5d9c` đều đạt tổng 370 test:

| Package | Kết quả |
| --- | --- |
| `modules/hrm` | 233 pass |
| `modules/notification` | 47 pass |
| `modules/ioffice` | 77 pass |
| `packages/shared/localization` | 8 pass |
| `packages/shared/auth` | 2 pass |
| `packages/core/global_system` | 3 pass |

Tuy nhiên, lệnh tổng quát được định nghĩa trong `melos.yaml` là `melos exec -- flutter test --no-pub`; lệnh này không phải lệnh tái lập hợp lệ cho toàn workspace. Trong fresh worktree tại đúng commit `4fe5d9c`, sau `melos bootstrap`, `melos run test` trả exit code 1 vì:

1. `network`, `hcmut_sign`, `news`, `khcn` và `myhcmut` không có thư mục `test`.
2. `hcmut_sign` có lỗi biên dịch kiểu `AuthToken`; lỗi này làm nhóm test `ioffice` thất bại trước khi hoàn tất.

Vì vậy, con số 370/370 là kết quả lịch sử có ghi nhận và có thể chạy theo sáu lệnh mục tiêu trong working tree đã chuẩn bị; nó chưa phải kết quả tái lập sạch bằng một lệnh duy nhất. Cần sửa script lọc package có test và sửa/làm rõ quan hệ biên dịch `hcmut_sign` trước khi tái chứng nhận.

### 3.2 Môi trường Backend

**Cập nhật 15/09/2026 (sau khi Redis sẵn sàng):** Chạy bốn tệp `sso_phase0`, `sso_phase1`, `sso_phase7` và `concurrency_race_condition` tại `hrm-be:9e39ccc` cho kết quả **53/53 pass**. Đây là kiểm chứng có điều kiện đối với nhóm test hiện có, không tái chứng nhận con số Gate 0 lịch sử 57 backend và không phải E2E WebView.

Các file test và mã tại `hrm-be:38745a26` chứa bằng chứng tĩnh cho `acquireLeaveLock`, `pg_advisory_xact_lock`, `GETDEL` và 57 test đã được liệt kê. Chưa có fresh worktree ở đúng commit này, với dependency và Redis, để xác nhận lại đúng bộ 57 test lịch sử.

## 4. Mâu thuẫn đã hiệu chỉnh trong tài liệu

1. `SYSTEM_OPERATION.md` từng gọi Advisory Lock là thiết kế đề xuất tại commit cũ `15a6e321`; tại baseline Gate 0 `38745a26`, mã và test đã có cơ chế này. Luồng cũ phải được định vị là lịch sử trước hardening.
2. `01_GATE0_EVIDENCE_INDEX.md` phải ghi chính xác phương thức tái lập: chạy sáu package mục tiêu, không dùng `melos run test` toàn workspace cho đến khi script được sửa.
3. Mọi bảng 427/427 phải ghi rõ “kết quả Gate 0 được ghi nhận”, không đồng nghĩa “đã chạy lại thành công ngày 15/09/2026”.

## 5. Điều kiện trước khi sửa báo cáo

- Giữ baseline Gate 0 hiện có cho các nội dung đã có chứng cứ tĩnh.
- Không dùng 53/53 thay thế số liệu Gate 0 hay mô tả nó là E2E; chỉ thêm số liệu kiểm thử vào báo cáo khi có log tái lập sạch ở đúng phạm vi được nêu.
- Trước khi chốt báo cáo, tạo script kiểm thử lọc sáu package có test; chuẩn bị Redis test cho backend; chạy trên fresh worktree và lưu log kết quả cùng commit hash.
