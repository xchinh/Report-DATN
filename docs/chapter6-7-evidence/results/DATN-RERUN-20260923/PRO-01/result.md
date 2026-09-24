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
| Trạng thái kịch bản | **Pass có giới hạn phạm vi (Pass nhánh SSO WebView; Chưa chạy nhánh cập nhật/đề xuất)** |

---

## 1. Kết quả chi tiết theo từng nhánh kịch bản

| Nhánh kiểm thử | Kỳ vọng kế hoạch | Kết quả thực tế | Trạng thái nhánh |
| --- | --- | --- | :---: |
| **Nhánh 1: Cơ chế SSO In-App WebView** | Mobile gọi API tạo vé SSO 60s, nạp In-App WebView vào thẳng hồ sơ không hỏi đăng nhập lại | Gọi `POST /api/auth/sso/generate-ticket` thành công; WebView nạp URL kèm ticket; HRM FE tiêu thụ vé, thiết lập cookie `hcmut-nhan-su`, hiển thị đúng hồ sơ cán bộ `003009` | **Pass** |
| **Nhánh 2: Chống tấn công phát lại (Replay Attack)** | Dùng lại vé đã consume hoặc vé hết hạn bị backend từ chối | Thử gọi lại API consume ticket với vé đã sử dụng -> Backend từ chối với HTTP 401 | **Pass** |
| **Nhánh 3: Cập nhật trực tiếp (`PRO-DIRECT`)** | Sửa trường được phép cập nhật trực tiếp trên Web, gửi và đọc lại giá trị mới | Mới mở biểu mẫu chỉnh sửa thông tin (`04_webview_edit_form.png`); **chưa thực hiện nộp dữ liệu và đối chiếu CSDL trước–sau** | **Chưa chạy (Not Run)** |
| **Nhánh 4: Tạo đề xuất thẩm định (`PRO-REVIEW`)** | Điều chỉnh trường cần thẩm định, đính kèm PDF giả và gửi tạo đề xuất | Mới mở form lý lịch; **chưa tải lên tệp PDF giả và chưa tạo bản ghi đề xuất thực nghiệm** | **Chưa chạy (Not Run)** |
| **Nhánh 5: Chặn gửi thiếu minh chứng** | Thử gửi trường cần thẩm định nhưng không đính kèm tệp, hệ thống phải chặn | **Chưa thực hiện kiểm thử nhánh này trên giao diện Web** | **Chưa chạy (Not Run)** |

---

## 2. Bằng chứng đính kèm

- `01_profile_native.png`: Màn hình hồ sơ Native trên thiết bị di động
- `02_webview_loaded.png`: Giao diện In-App WebView sau khi tiêu thụ vé SSO thành công
- `03_webview_personal_tab.png`: Điều hướng sang tab thông tin cá nhân trên Web HRM
- `04_webview_edit_form.png`: Mở biểu mẫu chỉnh sửa lý lịch trên Web HRM

---

## 3. Ranh giới khẳng định & Kết luận

- **Phạm vi đã chứng minh:** Cơ chế tạo vé SSO dùng một lần, tiêu thụ vé thiết lập phiên cookie trong WebView và khả năng chuyển tiếp mượt mà từ Mobile sang Web HRM trên môi trường mạng nội bộ (LAN) hoạt động ổn định trên Android.
- **Giới hạn kết luận:** Biên bản đợt chạy này **chưa chứng minh được luồng cập nhật trực tiếp hoặc gửi đề xuất thay đổi lý lịch kèm minh chứng** trên Web HRM. Khi viết Chương 6, chỉ kết luận thành công ở cơ chế tích hợp WebView SSO, không khẳng định đạt toàn diện toàn bộ quy trình cập nhật dữ liệu hồ sơ.
