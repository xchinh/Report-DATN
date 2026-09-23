# RUN MANIFEST — DATN-MOBILE-20260922-2300

| Thuộc tính | Giá trị |
| --- | --- |
| Phạm vi | Kiểm thử thủ công trực tiếp các kịch bản mobile đang bị chặn trong Stage C |
| Ngày thực hiện | 22/09/2026 (`Asia/Ho_Chi_Minh`) |
| Mobile | `4fe5d9cbd92e971f0b4b75ebfd308e7a8486d079` |
| Auth | `7e687a6005ceb6264f3467072081c784a6f9c7bc` |
| HRM | `87e17bcd2bb8b3058e279e5ecb49d8bcedd5f20d` |
| HRM frontend | `83caf6488be3f3f83eee783b8ec8ef832a8e02d0` |
| iOffice | `53f069a366f7d465253b6fceedeea25a01bec176` |
| Thiết bị | Realme RMX2151, Android 12 (API 31), arm64, thiết bị thật kết nối USB |
| APK | Debug APK dựng mới từ commit mobile khóa; cài bằng `adb install -r` với cùng debug certificate |
| Kết nối local | `adb reverse` cho các cổng Auth `4000`, iOffice `3001`, HRM API `6023`, HRM Web `6022`, iOffice Web `3000` |
| Môi trường | Dịch vụ local kết nối các CSDL thử nghiệm; Redis tạm riêng; Kafka do người dùng khởi động |
| Bí danh | Admin cho bước đăng nhập; `CB-A` cho các luồng nghiệp vụ cá nhân sau khi chuyển phiên có kiểm soát |

Không lưu JWT, cookie, mật khẩu, SHCC, tên hoặc dữ liệu hồ sơ thật trong artifact. Log mạng thô chứa header/ticket không được đưa vào Git; kết quả dưới đây chỉ ghi metadata và quan sát đã khử dữ liệu nhạy cảm.
