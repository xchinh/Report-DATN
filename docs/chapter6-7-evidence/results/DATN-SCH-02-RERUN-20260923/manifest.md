# DATN-SCH-02-RERUN-20260923 — Artifact Manifest

| Field | Value |
|-------|-------|
| Test Case | SCH-02 — Xử lý lỗi tải lịch & Retry tự động |
| Run Date | 2026-09-23 |
| Tester | CB-A (NGUYỄN THỊ NGỌC TÚ — SHCC 003009) |
| Device | Realme RMX2151, Android 12, API 31 |
| ADB Serial | IJROH6SCO7F6IFZ5 |
| iOffice BE | port 3001, node PID 47113/47385/47393 |
| Previous Status | Blocked |
| New Status | **Pass** |

## Files

| File | Description |
|------|-------------|
| `01_schedule_normal.png` | Schedule screen ở trạng thái bình thường (13:13) — hiển thị lịch tháng 9/2026, ngày 23 đang chọn |
| `02_schedule_loading_during_error.png` | Schedule screen khi iOffice BE bị SIGSTOP — spinner loading + skeleton items, không crash |
| `03_schedule_recovered.png` | Schedule screen sau khi BE phục hồi — Riverpod tự retry, lịch tải lại thành công (ngày 7/9) |
