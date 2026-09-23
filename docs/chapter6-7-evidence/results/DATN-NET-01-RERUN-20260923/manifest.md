# DATN-NET-01-RERUN-20260923 — Artifact Manifest

| Field | Value |
|-------|-------|
| Test Case | NET-01 — Timeout & mất kết nối chuẩn hóa |
| Run Date | 2026-09-23 |
| Tester | CB-A (NGUYỄN THỊ NGỌC TÚ — SHCC 003009) |
| Device | Realme RMX2151, Android 12, API 31 |
| ADB Serial | IJROH6SCO7F6IFZ5 |
| Previous Status | Blocked |
| New Status | **Pass** |

## Files

| File | Description |
|------|-------------|
| `01_schedule_normal_wifi.png` | Schedule screen bình thường — kết nối WiFi, lịch tháng 9, ngày 7 selected |
| `02_airplane_mode_on.png` | Status bar hiển thị icon ✈ Airplane Mode — `settings get global airplane_mode_on = 1` |
| `03_schedule_no_network.png` | Schedule screen khi Airplane Mode bật — ứng dụng không crash, vẫn hiển thị lịch cũ |
| `04_wifi_restored.png` | WiFi kết nối lại — icon ✈ biến mất, icon WiFi xuất hiện; schedule tải lại tự động |
