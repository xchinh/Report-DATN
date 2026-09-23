# PRO-01 — Kết quả kiểm thử WebView SSO trên thiết bị thật

| Hạng mục | Kết quả |
| --- | --- |
| Mở hồ sơ cá nhân native | Pass — ba nhóm thông tin hồ sơ hiển thị và HRM trả dữ liệu thành công |
| Sinh vé SSO từ mobile | Pass — `POST /api/auth/sso/generate-ticket` trả thành công |
| Mở HRM Web không đăng nhập lại | Chưa xác minh — WebView trống trong bản dựng tạm dùng `127.0.0.1` |
| Cập nhật trực tiếp / tạo đề xuất / thiếu minh chứng | Không thực hiện được trong lần chạy này |
| Trạng thái lần chạy | **Invalid** — cấu hình URL không tương ứng với cấu hình LAN được dùng cho thiết bị thật |

## Nguyên nhân đã đối chiếu

`SsoUrlHelper.isAndroidEmulator()` trả `Platform.isAndroid`, nên URL local `127.0.0.1:6022` trong bản dựng thử đã bị đổi thành `10.0.2.2:6022`. Đây là nguyên nhân trực tiếp khiến lần thử với bản dựng đó không tải được trang.

`10.0.2.2` là địa chỉ cầu nối của Android emulator, không phải địa chỉ của máy chủ LAN mà thiết bị Realme thật truy cập. `.env` của dự án dùng địa chỉ `192.168.x.x`, nên lần thử trên bản dựng tạm `127.0.0.1` không đủ để kết luận chức năng WebView ở cấu hình dự án bị lỗi. Cần dựng lại với địa chỉ LAN thực tế và chạy lại bằng run ID mới.

Kết quả Pass của kiểm thử SSO backend trước đó vẫn giữ nguyên: vé có TTL ngắn và không dùng lại được khi được tiêu thụ qua API. Lần chạy mobile này chỉ xác nhận việc sinh vé, chưa xác nhận luồng WebView đầu–cuối.

## Khôi phục

Không có cập nhật hồ sơ hoặc đề xuất nào được tạo vì Web HRM chưa tải thành công. Vé hết hạn tự động theo TTL.
