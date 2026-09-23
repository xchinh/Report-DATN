# RUN MANIFEST — DATN-AUTH-01-20260922-2020

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `AUTH-01` — Đăng nhập, gắn token và xử lý phiên không hợp lệ |
| Hành vi | `NFR-03-B01`; bổ trợ `NFR-03-B02` |
| Thời gian | 22/09/2026, 20:20 (`Asia/Ho_Chi_Minh`) |
| Hình thức | Tích hợp API trực tiếp Auth → HRM/iOffice; không chạy UI mobile |
| Auth | `7e687a6005ce` |
| HRM | `87e17bcd2bb8b3058e279e5ecb49d8bcedd5f20d` |
| iOffice | `53f069a366f7d465253b6fceedeea25a01bec176` |
| Dữ liệu nghiệp vụ | Chỉ đọc; không thay đổi |

Các dịch vụ dùng ba Redis tạm tách biệt. iOffice không kết nối được RabbitMQ cục bộ, nhưng hai endpoint đọc được chọn không phụ thuộc RabbitMQ và vẫn trả kết quả xác định. JWT, refresh token, cookie, mật khẩu, SHCC, email và nội dung hồ sơ không được lưu. Log đã khử dữ liệu nhạy cảm nằm ngoài Git tại `.superpowers/sdd/04_test_execution_plan/artifacts/AUTH-01/result.json`.
