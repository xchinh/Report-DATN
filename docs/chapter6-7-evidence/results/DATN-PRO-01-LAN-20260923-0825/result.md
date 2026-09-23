# PRO-01 — Chạy lại WebView qua LAN trên thiết bị thật

| Bước | Quan sát | Kết quả |
| --- | --- | --- |
| Mở hồ sơ native | Trang hồ sơ và ba tab hiển thị; HRM nhận các request hợp lệ | Pass |
| Chọn “Chỉnh sửa lý lịch qua Web” | HRM nhận `POST /api/auth/sso/generate-ticket`, trả thành công | Pass |
| Tải HRM frontend | WebView kết nối `192.168.1.13:6022`; Vite tải và chạy JavaScript | Pass |
| Chuyển tiếp phiên | WebView chuyển đến màn hình “Sign in”; HRM không ghi nhận `POST /api/auth/sso/consume-ticket` | **Fail** |
| Cập nhật hồ sơ, gửi đề xuất và ngoại lệ minh chứng | Không thực hiện được vì người dùng chưa vào được trang nghiệp vụ | Chưa chạy |

**Trạng thái kịch bản: Fail.** Lỗi màn hình trống khi thử bằng `127.0.0.1` hôm trước thuộc lần chạy `Invalid`; bản dựng LAN đã xác nhận WebView truy cập được frontend. Phần còn thiếu trong lần chạy hợp lệ là tiêu thụ vé SSO và tạo phiên Web.

Luồng cũng được thử lại với vai trò `CB-A`: vé được sinh nhưng WebView vẫn dừng ở màn hình “Sign in”. Do đó kết quả không chỉ xuất hiện ở tài khoản admin. Lần chạy này không chứng minh được thao tác cập nhật hồ sơ hoặc gửi đề xuất.

Đối chiếu mã nguồn tại commit frontend khóa: `src/app/authenticated-layout.tsx` chuyển khách chưa đăng nhập về `/staff/login`; tìm trong `src` không thấy lệnh gọi `/api/auth/sso/consume-ticket` hoặc đoạn xử lý tham số `ticket` của URL chuyển tiếp. Backend có endpoint consume ở `modules/_default/fw_auth/controller.ts`, nhưng frontend phiên bản này chưa gọi endpoint đó. Điều này phù hợp với quan sát runtime: có request sinh vé, tiếp theo là request `/api/state` của Web, rồi trang đăng nhập; không có request consume vé.

Ảnh `webview-login.png` chỉ chứng minh trạng thái WebView cuối cùng. Log request được đối chiếu trực tiếp trong phiên chạy và không lưu bản thô vì log debug chứa JWT và vé SSO.

**Khôi phục:** Không có thay đổi hồ sơ hoặc đề xuất; vé hết hạn theo TTL. Phiên đăng nhập trên thiết bị sẽ được kết thúc sau đợt kiểm thử.
