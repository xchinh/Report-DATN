# BẰNG CHỨNG KIỂM THỬ TRỰC TIẾP TRÊN THIẾT BỊ DI ĐỘNG VẬT LÝ (LIVE MOBILE EXECUTION)

- **Mã đợt kiểm thử:** `DATN-RERUN-20260923-LIVE-MOBILE`
- **Thời gian thực thi trực tiếp:** `2026-09-23 16:23:00 - 16:55:00 (GMT+7)`
- **Thiết bị kiểm thử vật lý:** Realme 7 (`RMX2151`), Android 12 (API 31), Serial `IJROH6SCO7F6IFZ5`
- **Độ phân giải màn hình:** 1080 x 2400 pixels
- **Ứng dụng di động:** `MyHCMUT Mobile` (Package: `vn.edu.hcmut.myhcmut`)
- **Bản dựng APK thực tế:** `build/app/outputs/flutter-apk/app-release.apk`
- **Mã băm APK (SHA-256):** `cc0d7ea347432881fe2777ae344fc8fae6396e94998782f05a9686000c01b106`
- **Môi trường Backend:**
  - `myhcmut-be` (Auth Gateway): Port 4000 (Commit `7e687a6`)
  - `hrm-be` (Quản trị nhân sự): Port 6023 (Commit `9e39ccc2`)
  - `ioffice-be` (Văn phòng điện tử): Port 3001 (Commit `4bfdb23`)
  - `hrm-fe` (Web HRM): Port 6022 (Commit `3ff464c9`)

---

## 1. Mục Đích & Nguyên Tắc Thực Thi

Để đảm bảo tính **khách quan, trung thực và có thể kiểm chứng độc lập** của toàn bộ kết quả kiểm nghiệm trong đồ án tốt nghiệp, toàn bộ các kịch bản tương tác người dùng trên giao diện di động đã được kích hoạt và điều khiển trực tiếp trên chiếc điện thoại di động vật lý kết nối qua giao diện Android Debug Bridge (ADB).

Mọi thao tác chạm (touch tap), vuốt (swipe/pull-to-refresh), chuyển màn hình, kích hoạt Intent hệ điều hành và ngắt/phục hồi mạng (Airplane Mode) đều được ghi nhận theo thời gian thực trên màn hình máy thật.

---

## 2. Bảng Tổng Hợp Kịch Bản Đã Thực Thi Trực Tiếp Trên Thiết Bị Di Động

| Mã Kịch Bản | Phân Hệ / Tính Năng | Thao Tác Thực Thi Trên Thiết Bị Thật | Kết Quả Thực Tế Đạt Được | Trạng Thái | Ảnh Chụp Màn Hình Minh Chứng |
|---|---|---|---|---|---|
| **PRO-01** | Hồ sơ cán bộ & In-App WebView SSO | Từ Trang chủ → Chạm "Lý lịch" → Chạm nút bút chì sửa thông tin cá nhân → WebView mở `http://192.168.1.13:6022` mang theo vé SSO một lần. | WebView tải thành công Cổng Web HRM nội bộ, hiển thị đầy đủ lý lịch cán bộ "NGUYỄN THỊ NGỌC TÚ", SHCC `003009` mà không bị yêu cầu đăng nhập lại. | **PASS** | `screen_lylich_opened.png`, `screen_webview_loaded.png`, `screen_webview_tab_personal.png` |
| **LEV-01** | Quản lý nghỉ phép (Dashboard & Tra cứu) | Từ Trang chủ → Chạm "Nghỉ phép" → Tải bảng thống kê phép năm 2026 (15 tổng, 1.5 đã nghỉ, 13.5 còn lại) và danh sách đơn. | Giao diện hiển thị trực quan thông số phép năm, lọc theo năm 2026 và thẻ đơn nghỉ phép `#289`. | **PASS** | `screen_leave_list.png` |
| **LEV-03** | Tra cứu trạng thái đơn & Ranh giới bất biến | Chạm vào thẻ đơn `#289` (trạng thái "Gửi" / LÃNH ĐẠO ĐƠN VỊ) → Xem chi tiết đơn → Xem luồng quy trình. | Hiển thị chi tiết đơn; **tuyệt đối không hiển thị nút Thu hồi/Xóa đơn** đối với người nộp, tuân thủ đúng nghiệp vụ và ranh giới Chương 4. | **PASS** | `screen_leave_detail_opened.png`, `screen_leave_workflow.png` |
| **LEV-02** | Khởi tạo đơn & Hủy bỏ an toàn | Chạm `+ Tạo đơn nghỉ phép` → Hộp thoại Đăng Kí Nghỉ Phép mở lên → Chạm nút "Hủy". | Hộp thoại đóng mượt mà, trở lại màn hình danh sách; không tạo bản ghi rác/orphan draft trong hệ thống. | **PASS** | `screen_leave_wizard_step1.png`, `screen_dialog_dismissed.png` |
| **BTR-01** | Đăng ký công tác & Hủy hộp thoại | Từ Trang chủ → Chạm "Công tác" → Chạm `+ Đăng ký công tác` → Hộp thoại chọn thời gian mở lên → Chạm "Hủy". | Hộp thoại hiển thị bộ chọn ngày công tác và đóng an toàn khi bấm Hủy mà không phát sinh lỗi. | **PASS** | `screen_btr_create_dialog.png` |
| **BTR-02** | Theo dõi quy trình phê duyệt công tác | Tại màn hình công tác → Chạm thẻ chuyến đi `#1063` → Chuyển sang Tab "Quy trình". | Hiển thị chi tiết chuyến đi `#1063` và sơ đồ tiến trình phê duyệt 6 bước: Lãnh đạo đơn vị → P.TC-NS → Lãnh đạo P.TC-NS → VP. BGH → Ban Giám hiệu → Kết thúc; không có nút thu hồi trái thẩm quyền. | **PASS** | `screen_btr_opened.png`, `screen_btr_detail.png`, `screen_btr_workflow.png` |
| **OFF-02** | Văn bản đến & Xem tệp đính kèm | Từ Trang chủ → Chạm "Văn bản đến" → Xem danh mục văn bản (#23, #1737) → Chạm tệp `131ASSET.pdf`. | Ứng dụng tải tệp về vùng đệm an toàn và kích hoạt Android Chooser Intent (`application/pdf`), mở tệp trong trình đọc PDF chuyên dụng. | **PASS** | `screen_incoming_docs.png`, `screen_pdf_triggered.png`, `screen_pdf_opened.png` |
| **SCH-02** | Đồng bộ lịch & Quản lý ghim tính năng | Tại Trang chủ → Chạm chuyển ngày trên widget "Lịch của tôi" (chuyển sang ngày 25) → Chạm biểu tượng ghim (Pushpin) trên thanh tiêu đề. | Lịch cập nhật trạng thái chọn ngày theo Riverpod State; Modal ghim tính năng mở lên hiển thị tỷ lệ đã ghim (7/8 tính năng) cho phép cá nhân hóa lối tắt. | **PASS** | `screen_home_schedule.png`, `screen_schedule_day25.png`, `screen_pin_modal.png` |
| **NET-01** | Khả năng chịu lỗi mất kết nối & Phục hồi | Bật chế độ máy bay (`airplane-mode enable`) → Chạm vào phân hệ Nghỉ phép → Báo lỗi → Tắt chế độ máy bay (`airplane-mode disable`) → Kéo làm mới (pull-to-refresh). | Khi mất mạng: Ứng dụng chuyển từ Shimmer sang thông báo lỗi rõ ràng (`Failed to fetch all leave The connection errored...`). Khi có mạng trở lại: Dữ liệu tải lại đầy đủ ngay tức thì. | **PASS** | `screen_net_offline.png`, `screen_net_offline_timeout.png`, `screen_net_recovered.png`, `screen_net_loaded.png` |

---

## 3. Nhật Ký Chi Tiết Từng Bước (Interactive Command Log)

### Bước 1: PRO-01 (Hồ sơ cán bộ & In-App WebView SSO)
- **Tọa độ chạm:** Vào "Lý lịch" `(370, 870)`, nút bút chì chỉnh sửa `(936, 389)`.
- **Ghi nhận màn hình:**
  - WebView hiển thị thanh địa chỉ nội bộ `http://192.168.1.13:6022` chứa token xác thực.
  - Web HRM tự động đăng nhập không qua form nhập mật khẩu.
  - Dữ liệu định danh: Thầy/Cô "NGUYỄN THỊ NGỌC TÚ", SHCC `003009`, Đơn vị P.HC.

### Bước 2: LEV-01 & LEV-03 (Nghỉ phép & Trạng thái đơn)
- **Tọa độ chạm:** Chạm biểu tượng "Nghỉ phép" `(135, 870)`.
- **Ghi nhận màn hình:**
  - Thống kê phép năm 2026: Tổng phép = 15, Đã nghỉ = 1.5, Còn lại = 13.5.
  - Chạm thẻ đơn `#289` `(500, 1000)`: Chi tiết hiển thị trạng thái `Gửi` (Chờ duyệt đơn vị), 05/10/2026 - 06/10/2026 (1.5 ngày). Không có nút "Thu hồi" của cá nhân người nộp.

### Bước 3: LEV-02 (Hộp thoại đăng ký nghỉ phép & Hủy)
- **Tọa độ chạm:** Chạm `+ Tạo đơn nghỉ phép` `(734, 2106)`.
- **Ghi nhận màn hình:** Hộp thoại "Đăng Kí Nghỉ Phép" xuất hiện với các trường chọn loại phép, thời gian, lý do, địa điểm.
- **Tọa độ chạm:** Chạm "Hủy" `(304, 1351)`. Hộp thoại đóng lập tức, danh sách không bị thay đổi.

### Bước 4: BTR-01 & BTR-02 (Công tác & Tiến trình phê duyệt)
- **Tọa độ chạm:** Chạm biểu tượng "Công tác" `(630, 870)`.
- **Ghi nhận màn hình:**
  - Chạm thẻ `#1063` `(540, 675)`: Hiển thị chuyến đi của "NGUYỄN THỊ NGỌC TÚ", từ 15/11/2026 đến 17/11/2026 (3 ngày tại TP.HCM).
  - Chạm Tab "Quy trình" `(463, 347)`: Hiển thị cây quy trình phê duyệt tuần tự gồm 6 cấp:
    1. LÃNH ĐẠO ĐƠN VỊ (Đang xử lý)
    2. P.TC-NS (Chờ duyệt)
    3. LÃNH ĐẠO P.TC-NS (Chờ duyệt)
    4. VP. BGH (Chờ duyệt)
    5. BAN GIÁM HIỆU (Chờ duyệt)
    6. KẾT THÚC
  - Quay lại, chạm `+ Đăng ký công tác` `(743, 2106)`: Hộp thoại "Đăng ký đi công tác" mở ra. Chạm "Hủy" `(304, 1351)` để đóng an toàn.

### Bước 5: OFF-02 (Văn bản đến & PDF Intent Chooser)
- **Tọa độ chạm:** Chạm "Văn bản đến" `(679, 562)`.
- **Ghi nhận màn hình:**
  - Danh sách văn bản: Văn bản #23 ("Về việc QWer", hạn 20/05/2026, đính kèm `131ASSET.pdf`) và Văn bản #1737 ("Giới thiệu chức danh và chữ ký", đính kèm `4493.BGDDT_VP.pdf`).
  - Chạm vào `131ASSET.pdf` `(540, 1307)`: Hệ điều hành kích hoạt bộ chọn ứng dụng (Intent Chooser: PDF viewer).
  - Chọn "PDF viewer" `(165, 1960)`: Trình xem PDF hệ thống hiển thị tài liệu đính kèm đầy đủ.

### Bước 6: SCH-02 (Lịch cá nhân & Quản lý Ghim)
- **Tọa độ chạm:** Tại màn hình Home, chạm vào thứ Sáu ngày 25 `(640, 1370)`: Vùng chọn chuyển sang màu xanh dương đậm.
- **Tọa độ chạm:** Chạm nút Pushpin góc trên bên phải thanh "Truy cập nhanh" `(1000, 345)`.
- **Ghi nhận màn hình:** Modal kéo `HomePinManagementContent` mở lên hiển thị "Đã ghim: 7/8", liệt kê đầy đủ các danh mục chức năng: Cá nhân, Tin tức, Văn phòng điện tử.

### Bước 7: NET-01 (Chế độ máy bay & Phục hồi)
- **Lệnh điều khiển:** `adb shell cmd connectivity airplane-mode enable`.
- **Ghi nhận màn hình:**
  - Biểu tượng máy bay xuất hiện trên thanh trạng thái (16:50 - 16:52).
  - Mở "Quản lý nghỉ phép": Giao diện hiển thị Shimmer tải, sau đó báo lỗi đỏ:
    `Error Exception: Failed to fetch all leave The connection errored: Connection failed This indicates an error which most likely cannot be solved by the library.`
- **Lệnh điều khiển:** `adb shell cmd connectivity airplane-mode disable`.
- **Ghi nhận màn hình:**
  - Wi-Fi tái kết nối thành công lúc 16:54.
  - Vuốt kéo làm mới (pull-to-refresh): Dữ liệu nghỉ phép tái lập tức thì với đầy đủ thông số 15 / 1.5 / 13.5 và đơn `#289`.
