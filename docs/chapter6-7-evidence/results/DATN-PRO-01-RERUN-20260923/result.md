# PRO-01 — Kết quả Chạy lại In-App WebView SSO & Cập nhật Hồ sơ

| Bước | Thao tác & Quan sát | Kết quả |
| --- | --- | --- |
| 1. Mở hồ sơ Native | Màn hình Profile hiển thị đầy đủ thông tin `CB-A` (SHCC 003009, Phòng Hành chính). | **Pass** |
| 2. Nhấn nút mở Web Profile | Tapped biểu tượng ngôn ngữ/web trên AppBar; ứng dụng gọi `POST /api/auth/sso/generate-ticket` thành công, mở In-App WebView điều hướng tới HRM FE kèm `?ticket=...`. | **Pass** |
| 3. Tải HRM FE & Tiêu thụ SSO | WebView nạp Vite frontend tại `192.168.1.13:6022`, frontend thực hiện `POST /api/auth/sso/consume-ticket`, thiết lập cookie phiên, xóa param `ticket` trên URL. | **Pass** |
| 4. Chuyển tiếp vào hồ sơ | WebView vào thẳng giao diện hồ sơ cán bộ mà **không bị chuyển hướng** về trang đăng nhập ("Sign in"). Hiển thị đúng tab "Lịch sử toàn diện", thông tin vị trí việc làm. | **Pass** |
| 5. Xem lịch sử thay đổi | Nhấn nút "Chỉnh sửa" -> Modal "Lịch sử thay đổi lý lịch" hiển thị chính xác log thay đổi trước/sau. | **Pass** |
| 6. Mở biểu mẫu Chỉnh sửa | Chuyển sang tab "Thông tin cá nhân", nhấn icon chỉnh sửa -> Modal "Chỉnh sửa thông tin" (Nhân thân, CCCD, Liên hệ...) mở trơn tru với cảnh báo duyệt qua TC-NS. | **Pass** |

## Kết luận & Phân tích nguyên nhân
- **Trạng thái kịch bản: Pass (chuyển đổi từ Fail ở snapshot commit `83caf648` sang Pass ở working tree `ccce869`).**
- **Nguyên nhân gốc rễ trước đó:** Ở bản dựng cũ `83caf648`, frontend thiếu logic bắt param `ticket` để gọi `/api/auth/sso/consume-ticket`, dẫn đến việc `authenticated-layout.tsx` tự động redirect về trang Sign-in.
- **Xác nhận bản vá:** Trên commit `ccce869`, logic SSO client-side đã hoạt động hoàn chỉnh, hoàn tất chu trình SSO từ Native App sang WebView mà không yêu cầu người dùng nhập lại tài khoản.
- **Bằng chứng đính kèm:**
  - `01_profile_native.png`: Giao diện hồ sơ Native trên thiết bị di động.
  - `02_webview_loaded.png`: Giao diện WebView tải thành công hồ sơ cán bộ qua SSO.
  - `03_webview_personal_tab.png`: Tab Thông tin cá nhân trên WebView.
  - `04_webview_edit_form.png`: Biểu mẫu chỉnh sửa thông tin nhân thân trên WebView.
