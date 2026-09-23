# KẾT QUẢ KIỂM THỬ: PRO-01

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `PRO-01` — In-App WebView SSO & Cập nhật Hồ sơ |
| Tiêu chí | `FR-PRO-02-B01`, `FR-PRO-02-B02`, `UC-PRO-02-B01`, `UC-PRO-02-B02`, `UC-PRO-02-B03` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Thiết bị | Realme RMX2151, Android 12/API 31 |
| Đối tượng kiểm thử | Mobile commit `7f90ac7`, HRM FE `3ff464c9`, HRM BE `9e39ccc2` |
| Tester | `CB-A` (User ID `287`, SHCC `003009`, Phòng Hành chính) |
| Trạng thái | **Pass** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Mở hồ sơ Native:** Trên mobile, mở tab Profile hiển thị thông tin cán bộ `CB-A` (`01_profile_native.png`).
2. **Kích hoạt SSO:** Nhấn nút mở Web Profile -> Mobile gọi `POST /api/auth/sso/generate-ticket` nhận vé One-Time có thời hạn ngắn (TTL 60s).
3. **Tiêu thụ vé SSO trên WebView:** WebView nạp URL `http://192.168.1.13:6022/?ticket=...`. Frontend HRM tự động gọi `POST /api/auth/sso/consume-ticket`, thiết lập session cookie `hcmut-nhan-su`, và xóa `ticket` khỏi thanh địa chỉ.
4. **Vào thẳng hồ sơ cá nhân:** WebView hiển thị hồ sơ cá nhân của `003009` mà **không bị chuyển hướng** về trang Sign-in (`02_webview_loaded.png`).
5. **Xem lịch sử & Chỉnh sửa:**
   - Chuyển tab "Thông tin cá nhân" (`03_webview_personal_tab.png`).
   - Mở modal chỉnh sửa lý lịch (`04_webview_edit_form.png`).
6. **Kiểm tra chống Replay Attack:** Thử dùng lại vé SSO đã consume -> Backend từ chối với HTTP 401.

---

## 2. Bằng chứng đính kèm

- `01_profile_native.png`: Hồ sơ Native trên mobile
- `02_webview_loaded.png`: In-App WebView sau khi tiêu thụ SSO
- `03_webview_personal_tab.png`: Tab thông tin cá nhân
- `04_webview_edit_form.png`: Biểu mẫu chỉnh sửa thông tin

---

## 3. Kết luận

- Kịch bản đạt trạng thái **Pass** (chuyển đổi từ Fail ở snapshot cũ `83caf648` sang Pass trên working tree chốt `3ff464c9`).
