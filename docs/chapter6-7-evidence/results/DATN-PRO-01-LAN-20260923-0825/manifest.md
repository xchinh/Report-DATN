# RUN MANIFEST — DATN-PRO-01-LAN-20260923-0825

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `PRO-01`, nhánh mobile → WebView HRM |
| Thời điểm | 23/09/2026, khoảng 08:25–08:27 (`Asia/Ho_Chi_Minh`) |
| Mobile | `4fe5d9cbd92e971f0b4b75ebfd308e7a8486d079` |
| Auth | `7e687a6005ceb6264f3467072081c784a6f9c7bc` |
| HRM backend | `87e17bcd2bb8b3058e279e5ecb49d8bcedd5f20d` |
| HRM frontend | `83caf6488be3f3f83eee783b8ec8ef832a8e02d0` |
| Thiết bị | Realme RMX2151, Android 12/API 31, USB, Wi‑Fi `192.168.1.0/24` |
| Mạng thử | Máy chạy backend/frontend `192.168.1.13`; điện thoại `192.168.1.5`; tất cả URL trong APK dùng máy chủ LAN |
| Vai trò | Admin thử nghiệm, đăng nhập bằng giao diện mobile; sau đó chuyển sang `CB-A` bằng tính năng chuyển tài khoản để kiểm tra lại cùng luồng |
| Artifact | `webview-login.png` — ảnh đã kiểm tra, không chứa tài khoản, mật khẩu hoặc vé SSO |

Các dịch vụ local dùng CSDL thử nghiệm. HRM khởi động lại đã chạy tác vụ đồng bộ `StaffTinhTrang` trên 3836 bản ghi của môi trường thử nghiệm; không có thay đổi hồ sơ cá nhân do kịch bản PRO-01.
