# MA TRẬN TRUY VẾT YÊU CẦU & SỔ ĐĂNG KÝ TUYÊN BỐ KỸ THUẬT
# (02_SCOPE_CLAIM_TRACEABILITY.md)

> **Dự án:** Ứng dụng di động MyHCMUT phục vụ Nhân sự Trường Đại học (MyHCMUT Mobile)  
> **Cơ quan chủ quản:** Trường Đại học Bách khoa – ĐHQG-HCM  
> **Sinh viên thực hiện:**  
> - Vũ Xuân Chính (MSSV: 2210392) — Core Mobile, SSO Ticket Bridge, Quản lý Nghỉ phép & Hồ sơ Cán bộ, FCM Notification Hub.  
> - Tống Duy Khang (MSSV: 2211467) — Phân hệ Văn phòng số iOffice (Văn bản đến/đi, PDF Viewer) & Quản lý Nhiệm vụ (Missions/Tasks).  
> **Giảng viên hướng dẫn:** ThS. Nguyễn Thanh Tùng  
> **Mốc đối chuẩn:** Gate 0 — Khóa Baseline Học thuật & Bằng chứng Kỹ thuật (Tháng 09/2026)  

---

## 1. SỔ ĐĂNG KÝ TUYÊN BỐ KỸ THUẬT (CLAIM REGISTER)

Sổ đăng ký này phân định rạch ròi 3 nhóm nhận định trong toàn bộ văn bản Đồ án Tốt nghiệp:
- **`VERIFIED` (Đã thẩm định):** Đã hiện thực trong mã nguồn và có bài kiểm thử tự động hoặc log thực nghiệm chứng minh trực tiếp.
- **`ASSUMPTION` (Tiền đề thiết kế):** Giả định nghiệp vụ kế thừa từ hệ thống Web HRM hiện hữu của Nhà trường.
- **`PROPOSED` (Đề xuất phát triển):** Giải pháp kiến trúc lý thuyết cho tương lai (Chương 7), chưa có mã nguồn kích hoạt trên môi trường sản xuất.

| Mã Claim | Nội dung tuyên bố kỹ thuật | Phân loại | Bằng chứng mã nguồn / Kiểm thử đối chiếu | Diễn đạt chuẩn mực trong báo cáo |
| :--- | :--- | :---: | :--- | :--- |
| **CLM-CON-01** | Kiểm soát tương tranh trùng lịch nộp đơn (`checkTrungLich`) bằng PostgreSQL Advisory Lock 2 thành phần. | **VERIFIED** | `hrm-be`: `helper.ts` (L11-31), `controller.ts` (L212, L287), `concurrency_race_condition.unit.test.ts` (7/7 pass). | "Cơ chế Advisory Lock kết hợp lan truyền transaction CSDL giúp tuần tự hóa các yêu cầu nộp đơn của cùng cán bộ trong các luồng ghi cùng tuân thủ giao thức khóa." |
| **CLM-CON-02** | Ngăn chặn hiện tượng gửi duyệt lặp (Idempotent State Guard) trên đường ghi cập nhật đơn. | **VERIFIED** | `hrm-be`: `controller.ts` (L328-335) mệnh đề `WHERE id = :id AND ma_quy_trinh = :currentMaQuyTrinh`, test Case 3 (pass). | "Mệnh đề cập nhật nguyên tử bảo đảm trạng thái đơn không bị ghi đè khi có nhiều yêu cầu gửi song song." |
| **CLM-CON-03** | Khóa mức dòng (`SELECT FOR UPDATE`) bảo vệ số dư quỹ phép năm tại bước phê duyệt cuối (`KET_THUC`). | **VERIFIED** | Stored Procedure `tcns_nghi_phep_dang_ky_insert` trên bảng `tcns_so_nghi_phep_nam`. | "Quỹ phép chỉ được trừ có thẩm quyền ở bước phê duyệt cuối cùng thông qua khóa mức dòng trên bản ghi quỹ phép." |
| **CLM-CON-04** | Toàn bộ các luồng ghi ngoài hệ thống đều bị chặn tương tranh bởi cơ sở dữ liệu. | **PROPOSED** | Kiến trúc đề xuất Chương 7: PostgreSQL Exclusion Constraint (`EXCLUDE USING gist`) trên `tcns_lich_ca_nhan`. | "Đề xuất thiết lập Exclusion Constraint cấp schema CSDL để bảo vệ toàn vẹn lịch cá nhân độc lập với tầng ứng dụng." |
| **CLM-CON-05** | Bản ghi quỹ phép năm `tcns_so_nghi_phep_nam` luôn tồn tại sẵn cho mọi cán bộ. | **ASSUMPTION** | Endpoint khởi tạo hàng loạt đầu năm `POST /api/so-nghi-phep-nam/init` (`tcnsSoNghiPhepNam.initData`). | "Dòng dữ liệu quỹ phép của năm hiện tại là tiền đề thiết kế nghiệp vụ (Design-time Invariant), kỳ vọng được chạy định kỳ hàng năm." |
| **CLM-LEV-01** | Quy trình nộp đơn nghỉ phép gồm 3 giai đoạn kỹ thuật rõ rệt. | **VERIFIED** | Giai đoạn 1: `POST /dang-ky-mobile`, Giai đoạn 2: Wizard & `POST /validate`, Giai đoạn 3: `PUT /dang-ky` (`isSend=0/1`). | "Quy trình nộp đơn tách biệt rõ giữa tạo nháp sơ bộ, kiểm tra hỗ trợ nhập liệu và chốt chặn phê duyệt có thẩm quyền." |
| **CLM-LEV-02** | Dọn dẹp bản nháp chủ động khi người dùng thoát phiên tạo mới trên Mobile. | **VERIFIED** | `myhcmut-mobile`: `leave_request_page.dart` (L50-100), cờ `isNewlyCreated` gọi `DELETE /api/tcns-nghi-phep/dang-ky/:id`. | "Cơ chế isNewlyCreated hỗ trợ dọn dẹp nháp ngay khi người dùng hủy thao tác, giảm thiểu các bản nháp mồ côi." |
| **CLM-LEV-03** | Tự động dọn sạch các bản nháp bị bỏ quên (Abandoned Drafts) khi ứng dụng bị tắt đột ngột. | **PROPOSED** | Kiến trúc đề xuất Chương 7: Scheduled Worker / Cron Job định kỳ quét và xóa các bản nháp quá hạn 30 ngày. | "Hệ thống hiện tại chưa có cron job dọn nháp bị bỏ quên; nhóm đề xuất triển khai worker định kỳ trong tương lai." |
| **CLM-SSO-01** | Chuyển tiếp xác thực sang Web HRM qua vé dùng một lần (Opaque Bearer Ticket) và Redis `GETDEL`. | **VERIFIED** | `hrm-be`: `fw_auth/controller.ts`, Redis `client.getDel()`, `sso_phase0.unit.test.ts`, `sso_phase1.unit.test.ts` (46/46 pass). | "Vé SSO 64 ký tự hex có TTL 60 giây, bị tiêu thụ và xóa nguyên tử bằng Redis GETDEL khi đổi sang Web Session Cookie." |
| **CLM-SSO-02** | Làm sạch URL thanh địa chỉ WebView sau khi tiêu thụ vé SSO. | **VERIFIED** | `hrm-fe`: `window.history.replaceState({}, document.title, window.location.pathname)`. | "Frontend Web bóc tách vé khỏi URL ngay sau khi đổi cookie, giảm thiểu lưu vết vé trong lịch sử duyệt web." |
| **CLM-SSO-03** | Vé SSO có cơ chế thu hồi phiên tức thì từ xa (Backchannel Revocation) nếu bị đánh cắp trước. | **PROPOSED** | Kiến trúc đề xuất Chương 7: Server-side Backchannel Session Revocation và PoP/Nonce binding. | "Hệ thống hiện hữu chưa hỗ trợ thu hồi phiên tức thời nếu vé bị kẻ xấu can thiệp tiêu thụ trước WebView hợp lệ." |
| **CLM-DAT-01** | Cơ sở dữ liệu SQLite trên thiết bị di động không lưu trữ thông tin lý lịch cá nhân nhạy cảm. | **VERIFIED** | `myhcmut-mobile`: `master_data_database_service.dart` chỉ lưu 47 bảng danh mục hành chính dùng chung (HRM Master Data). | "SQLite chỉ dùng để lưu trữ danh mục tham chiếu dùng chung; thông tin hồ sơ cán bộ được quản lý qua bộ nhớ đệm SWR." |
| **CLM-DAT-02** | Mã hóa an toàn cấp phần cứng cho Token và Hồ sơ trên mọi thiết bị di động. | **PROPOSED** | Kiến trúc đề xuất Chương 7: Tích hợp `flutter_secure_storage` (Android Keystore / iOS Keychain) thay cho SharedPreferences. | "Trong phiên bản tạo mẫu, token được lưu trong SharedPreferences; việc mã hóa phần cứng là hướng phát triển trước khi golive." |
| **CLM-NOT-01** | Tách rời phát tán sự kiện Kafka ra khỏi CSDL Transaction. | **VERIFIED** | `hrm-be`: `tcns_nghi_phep/controller.ts`, `app.messageQueue.send('SEND_NOTIFY_SERVICE')` chỉ gọi sau `transaction.commit()`. | "Sự kiện thông báo chỉ được đẩy sang Kafka sau khi giao dịch CSDL đã commit thành công, ngăn ngừa phát thông báo rác." |
| **CLM-NOT-02** | Hệ thống bảo đảm chuyển phát thông báo FCM chính xác một lần duy nhất (Exactly-Once Delivery). | **PROPOSED** | Kiến trúc đề xuất Chương 7: Bổ sung Transactional Outbox Pattern và ràng buộc `UNIQUE (event_id)` trên `fw_notification`. | "Do chưa có cơ chế Transactional Outbox, hệ thống có cửa sổ rủi ro mất hoặc trùng lặp thông báo nếu mạng gián đoạn." |
| **CLM-BTR-01** | Endpoint di động thực tế là `/api/tcns-di-cong-tac/dang-ky` và `/duyet`, không phải endpoint giả định `/create` hay `/approve`. | **VERIFIED** | `myhcmut-mobile`: `business_trip.dart` (L85, L127), `hrm-be`: `tcns_dang_ky_cong_tac/controller/dang_ky.controller.ts` (L70), `duyet.controller.ts` (L51). | "Các thao tác tạo mới, cập nhật và duyệt công tác sử dụng bộ endpoint RESTful chuẩn xác `/api/tcns-di-cong-tac/*`." |
| **CLM-BTR-02** | Vòng đời trạng thái đơn thực tế gồm: `NHAP`, `KET_THUC`, `TU_CHOI`, `THU_HOI`, `TRA_LAI` (các bước duyệt trung gian ánh xạ sang Chờ duyệt). | **VERIFIED** | `myhcmut-mobile`: `business_trip_model.dart` (L348-362), `hrm-be`: `quy_trinh.controller.ts` (L83-85). | "Hệ thống quản lý trạng thái hồ sơ công tác thông qua 5 trạng thái nghiệp vụ xác định kết hợp các bước luân chuyển trung gian." |
| **CLM-BTR-03** | Cơ chế kiểm tra trùng lịch dùng chung giữa Nghỉ phép và Công tác qua `checkTrungLich`. | **VERIFIED** | `hrm-be`: `tcns_dang_ky_cong_tac/controller/dang_ky.controller.ts` (L227), `tcns_lich_ca_nhan.model.ts` (L169). | "Thuật toán kiểm tra xung đột thời gian biểu cá nhân được chia sẻ dùng chung giữa phân hệ Nghỉ phép và Đi công tác." |
| **CLM-BTR-04** | Phân hệ Đi công tác trên mobile hiện chưa có bộ kiểm thử tự động (Unit/Widget Test) trong CI/CD. | **VERIFIED** | Thư mục `modules/hrm/test/` không chứa test script cho `business_trip`; xác thực qua Manual Staging. | "Phân hệ Đi công tác được kiểm thử tích hợp thủ công trên máy chủ staging; chưa có bộ test tự động trong monorepo." |

---

## 2. MA TRẬN TRUY VẾT YÊU CẦU PHÂN HỆ NGHỈ PHÉP (TRACEABILITY MATRIX)

Ma trận ánh xạ toàn diện **10 Use Cases (UC-LEV-01..10)** và **12 Business Rules (BR-LEV-01..12)** vào từng tệp mã nguồn, widget, service và tệp kiểm thử tự động tương ứng:

### 2.1. Ánh xạ 10 Use Cases Quản lý Nghỉ phép (UC-LEV-01 đến UC-LEV-10)

| Use Case ID | Tên Use Case & Tác tử (Actor) | Tệp Giao diện Di động (Mobile UI) | Bộ Quản lý Trạng thái & API Service | Endpoint & Tệp Xử lý Phía Máy chủ (Backend) | Tệp Kiểm thử Chứng minh (Test Evidence) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-LEV-01** | **Xem danh sách đơn & Quỹ phép tham khảo**<br>*Actor: Cán bộ* | `leave_management_screen.dart`<br>`vacation_balance_widget.dart`<br>`leave_card_widget.dart` | `leave_provider.dart`<br>`leaveRequestProvider`<br>`getLeaveSummaryProvider` | `GET /api/tcns-nghi-phep/danh-sach-mobile`<br>`GET /api/so-nghi-phep-nam/thong-tin`<br>(`tcns_nghi_phep/controller.ts`) | `leave_balance_and_late_test.dart`<br>`widget_badge_test.dart` (Mobile)<br>Manual Staging E2E Scen 1 |
| **UC-LEV-02** | **Khởi tạo đơn nháp**<br>*Actor: Cán bộ* | `create_time_dialog.dart`<br>`leave_management_screen.dart` | `leaveControllerProvider`<br>`createLeaveRequest` | `POST /api/upload/tcns-nghi-phep/dang-ky-mobile`<br>Sinh `phieuId`, tạo lịch `tcns_lich_ca_nhan` nháp<br>(`tcns_nghi_phep/controller.ts: L198-260`) | `riverpod_providers_test.dart` (Mobile)<br>`acquire_leave_lock.unit.test.ts` (Backend) |
| **UC-LEV-03** | **Hoàn thiện Wizard & Kiểm tra điều kiện**<br>*Actor: Cán bộ* | `leave_request_page.dart`<br>`leave_request_step1.dart`<br>`dropdown_form.dart` | `LeaveRequestStep1`<br>`checkIfTooLate`<br>`calculateLeaveDays` | `POST /api/tcns-nghi-phep/validate`<br>Pre-check trùng lịch, trả về `isTooLate`<br>(`tcns_nghi_phep/controller.ts: L82-130`) | `calculate_day_test.dart`<br>`check_overlap_test.dart`<br>`widget_form_validation_test.dart` (Mobile) |
| **UC-LEV-04** | **Tải lên & Quản lý minh chứng độc lập**<br>*Actor: Cán bộ* | `leave_request_step2.dart`<br>`file_card.dart` | `FilePicker`<br>`uploadAttachment`<br>`removeAttachment` | `POST /api/upload/tcns-nghi-phep/file?phieuId=...`<br>`DELETE /api/upload/tcns-nghi-phep/file/:id`<br>(`tcns_nghi_phep/controller.ts`) | `widget_form_validation_test.dart` (Mobile)<br>Manual Staging E2E Scen 1 |
| **UC-LEV-05** | **Lưu nháp hoặc Gửi duyệt chính thức**<br>*Actor: Cán bộ* | `leave_request_step3.dart`<br>`leave_request_page.dart` | `submitLeaveRequest`<br>`isSend = 0` (Lưu nháp)<br>`isSend = 1` (Gửi duyệt) | `PUT /api/upload/tcns-nghi-phep/dang-ky`<br>Atomic Guard `WHERE ma_quy_trinh='NHAP'`<br>(`tcns_nghi_phep/controller.ts: L280-358`) | `concurrency_race_condition.unit.test.ts`<br>(Case 3: Atomic Guard - Backend)<br>`leave_request_model_test.dart` (Mobile) |
| **UC-LEV-06** | **Hủy & Dọn dẹp đơn mới tạo khi thoát**<br>*Actor: Cán bộ* | `leave_request_page.dart`<br>(`_showExitWarningDialog`) | `_handleExit`<br>Cờ `isNewlyCreated = true`<br>`deleteLeave(phieuId)` | `DELETE /api/tcns-nghi-phep/dang-ky/:id`<br>Xóa phiếu, xóa lịch cá nhân trong Transaction<br>(`tcns_nghi_phep/controller.ts: L360-390`) | `leave_request_model_test.dart` (Mobile)<br>`acquire_leave_lock.unit.test.ts` (Backend) |
| **UC-LEV-07** | **Chỉnh sửa & Gửi lại đơn bị trả về**<br>*Actor: Cán bộ* | `leave_view_detail.dart`<br>`leave_request_page.dart` | `LeaveViewDetail`<br>`isNewlyCreated = false` | `PUT /api/upload/tcns-nghi-phep/dang-ky`<br>Loại trừ chính phiếu đang sửa trong `checkTrungLich`<br>(`tcns_lich_ca_nhan.model.ts: L173`) | `check_overlap_test.dart` (Mobile)<br>`concurrency_race_condition.unit.test.ts` (Case 1) |
| **UC-LEV-08** | **Thu hồi đơn khi đang chờ duyệt**<br>*Actor: Cán bộ* | `leave_view_detail.dart`<br>(Nút "Thu hồi đơn") | `cancelLeaveRequest`<br>`leaveControllerProvider` | `POST /api/tcns-nghi-phep/user-phase`<br>Cập nhật `trangThai = 'THU_HOI'`, xóa lịch cá nhân<br>(`tcns_nghi_phep/controller.ts: L392-417`) | `widget_badge_test.dart` (Mobile)<br>Manual Staging E2E Scen 1 |
| **UC-LEV-09** | **Phê duyệt hoặc Từ chối đơn nghỉ phép**<br>*Actor: Lãnh đạo / TCCB* | `leave_view_detail.dart`<br>`leave_status_badge.dart` | `approveLeaveRequest`<br>`rejectLeaveRequest` | `POST /api/tcns/quy-trinh/approved`<br>`POST /api/tcns/quy-trinh/rejected`<br>SP trừ quỹ phép bằng `SELECT FOR UPDATE` | `widget_badge_test.dart` (Mobile)<br>Manual Staging E2E Scen 1 |
| **UC-LEV-10** | **Phê duyệt nhiều đơn hàng loạt**<br>*Actor: Lãnh đạo đơn vị* | `app_batch_action_bar.dart`<br>`leave_management_screen.dart` | `batchApproveLeaves`<br>Refetch trên lỗi (Fail-Stop) | `POST /api/tcns/quy-trinh/approved`<br>Xử lý `Per-Item Commit (Fail-Stop)` vòng lặp `for`<br>(`tcns_quy_trinh/controller.ts`) | `app_batch_action_bar_test.dart` (Mobile Core)<br>Manual Staging E2E Scen 1 |

---

### 2.2. Ánh xạ 12 Business Rules Nghỉ phép (BR-LEV-01 đến BR-LEV-12)

| Rule ID | Tên Quy tắc Nghiệp vụ | Mô tả Kỹ thuật Chi tiết | Nguồn Cấu hình & Văn bản Gốc | Hiện thực Phía Mobile | Hiện thực Phía Backend | Bằng chứng Kiểm thử |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- |
| **BR-LEV-01** | Ràng buộc Ngày & Buổi hợp lệ | `ngayBatDau <= ngayKetThuc`. Nếu cùng ngày, không cho phép bắt đầu Chiều - kết thúc Sáng. | Quy chế làm việc ĐHBK | `calculate_day.dart`<br>`create_time_dialog.dart` | `tcns_nghi_phep/controller.ts`<br>(Validate khoảng ngày & buổi) | `calculate_day_test.dart` (Mobile) |
| **BR-LEV-02** | Tính số ngày làm việc thực tế | Trừ Thứ Bảy, Chủ Nhật, ngày Lễ và ngày nghỉ bù theo CSDL; buổi lẻ tính 0.5 ngày. | CSDL `dm_ngay_le`<br>Quy định Bộ Luật LĐ | `calculate_day.dart`<br>(`calculateLeaveDays`) | `dm_ngay_le.model.ts`<br>`helper.ts` (`isEffectiveWorkday`) | `calculate_day_test.dart` (Mobile) |
| **BR-LEV-03** | Thời hạn nộp đơn trước | Nghỉ trong nước: trước 2 ngày làm việc; Nghỉ nước ngoài hoặc $\ge 5$ ngày: trước 3 ngày. | Tham số hệ thống CSDL:<br>`tcns_setting.ngayDKPhepTrongNuoc`<br>`tcns_setting.ngayDKPhepNuocNgoai` | `leave_request_step1.dart`<br>(`checkIfTooLate`) | `tcns_nghi_phep/controller.ts`<br>`helper.ts` (`getEarliestAllowedStart`) | `leave_balance_and_late_test.dart`<br>`leave_request_model_test.dart` |
| **BR-LEV-04** | Xử lý nộp trễ hạn (Late Leave) | Mobile pre-check qua `/validate`; nếu `isTooLate=true`, bắt buộc điền giải trình lý do ở Bước 2. | Tiền đề nhập liệu HRM | `create_time_dialog.dart` (L501)<br>`leave_request_dto.dart` (L76) | `POST /api/tcns-nghi-phep/validate`<br>Trả về `{ isValid: true, isTooLate: true }` | `leave_request_model_test.dart`<br>(`validateWithLateCheck`) |
| **BR-LEV-05** | Kiểm tra trùng lịch tương tranh | Tuân thủ giao thức khóa PostgreSQL Advisory Lock `pg_advisory_xact_lock` theo SHCC. | Kiến trúc bảo vệ tương tranh | Hiển thị cảnh báo lỗi nếu API trả về `reason: 'TRUNG_LICH'` | `tcns_lich_ca_nhan.model.ts: L166`<br>`acquireLeaveLock` trong transaction | `concurrency_race_condition.unit.test.ts`<br>(Case 1 & Case 2: 7/7 pass) |
| **BR-LEV-06A** | Tải minh chứng độc lập | Tải lên từng tệp độc lập (`POST /file?phieuId=...`), liên kết qua metadata ID khi lưu đơn. | Kiến trúc lưu trữ tệp | `leave_request_step2.dart`<br>`file_card.dart` | `POST/DELETE /file`<br>Lưu trữ bảng `fw_file` và thư mục asset | `widget_form_validation_test.dart` (Mobile) |
| **BR-LEV-06B** | Dọn dẹp nháp chủ động khi thoát | Client gắn cờ `isNewlyCreated`; khi người dùng hủy form tạo mới, tự động gọi `DELETE` dọn dẹp. | Nguyên tắc toàn vẹn dữ liệu | `leave_request_page.dart: L50-100`<br>(`_handleExit`) | `DELETE /api/tcns-nghi-phep/dang-ky/:id`<br>Xóa phiếu và lịch trong transaction | `leave_request_model_test.dart` (Mobile)<br>`acquire_leave_lock.unit.test.ts` (Backend) |
| **BR-LEV-07** | Chống gửi duyệt lặp (Idempotency) | Cập nhật trạng thái nguyên tử `WHERE id=:id AND ma_quy_trinh='NHAP'`; trả về 0 dòng sẽ rollback. | Nguyên tắc thiết kế an toàn | Tránh gọi API đúp bằng trạng thái `isSubmitting` | `controller.ts: L328-335`<br>Atomic State Guard trên `PUT /dang-ky` | `concurrency_race_condition.unit.test.ts`<br>(Case 3: Atomic Guard) |
| **BR-LEV-08** | Bắt buộc ghi chú theo lý do | Mã lý do '00' (Khác) hoặc lý do cần thuyết minh bắt buộc nhập `ghiChu`; lý do chuẩn là tùy chọn. | Quy trình Nhân sự ĐHBK | `leave_request_step1.dart`<br>(Form validation logic) | `tcns_nghi_phep/controller.ts`<br>(Kiểm tra ghi chú theo loại lý do) | `widget_form_validation_test.dart` (Mobile) |
| **BR-LEV-09** | Thẩm quyền chỉnh sửa & Thu hồi | Chỉ chủ đơn mới được sửa khi ở `NHAP` hoặc `TRA_LAI`; chỉ thu hồi khi đơn chưa được duyệt. | Quy trình luân chuyển đơn | `leave_view_detail.dart`<br>(Ẩn/hiện nút theo trạng thái) | `checkPhieuOwnership` và kiểm tra `maQuyTrinh` trong `controller.ts` | `widget_badge_test.dart` (Mobile) |
| **BR-LEV-10** | Chuẩn hóa trạng thái từ chối | Chuẩn hóa cả hai mã `TU_CHOI` và `REJECTED` về trạng thái hiển thị "Từ chối" thống nhất. | Tiêu chuẩn giao diện người dùng | `leave_status_badge.dart`<br>`leave_status_select.dart` | Backend lưu trữ phân biệt quy trình nội bộ và quyết định hành chính | `widget_badge_test.dart` (Mobile) |
| **BR-LEV-11** | Khóa dòng trừ quỹ phép năm | Quỹ phép năm chỉ bị trừ ở bước cuối (`KET_THUC`) bởi chuyên viên TCCB qua `SELECT FOR UPDATE`. | Luật Cán bộ Viên chức | `vacation_balance_widget.dart`<br>(Hiển thị số dư tham khảo) | Stored Procedure `tcns_nghi_phep_dang_ky_insert`<br>Khóa dòng trên `tcns_so_nghi_phep_nam` | Manual Staging E2E Scen 1 |
| **BR-LEV-12** | Xóa đơn nháp nguyên tử | Xóa đồng thời bản ghi đơn, lịch cá nhân và quy trình trong CSDL Transaction bọc Advisory Lock. | Toàn vẹn dữ liệu hệ thống | `leaveControllerProvider`<br>(`deleteLeave`) | `DELETE /api/tcns-nghi-phep/dang-ky/:id`<br>Bọc trong `BkcoretechModel.transaction` | `acquire_leave_lock.unit.test.ts` (Backend) |

### 2.3. Ánh xạ 4 Ca sử dụng Bối cảnh Phân hệ Đi công tác (CTX-BTR-01 đến CTX-BTR-04)
*Ghi chú: Phân hệ thuộc phạm vi đề tài nhóm (`TEAM_SCOPE`) do sinh viên Tống Duy Khang phụ trách chính (`OUT_OF_CHINH_SCOPE`), được dùng làm cơ sở bối cảnh cho Chương 1, Chương 2, Mục 3.2 và Mục 4.1. Chi tiết xem tại `docs/06A_CONTEXT_PACK_BUSINESS_TRIP.md`.*

| Mã Truy vết (Trace ID) | Tên Nghiệp vụ Bối cảnh | Giao diện Di động (Mobile UI) | Bộ Quản lý Trạng thái (Provider) | Endpoint & Tệp Xử lý Phía Máy chủ (Backend) | Hiện trạng Kiểm thử (Test Evidence) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CTX-BTR-01** | **Khởi tạo tờ trình & Form Wizard 5 bước**<br>*Actor: Cán bộ* | `business_trip_list_page.dart`<br>`business_trip_step_1..5.dart`<br>`work_plan_list.dart` | `businessTripProvider`<br>`businessTripUpdateFormStateProvider` | `POST /api/tcns-di-cong-tac/dang-ky`<br>`PUT /api/tcns-di-cong-tac/dang-ky`<br>`POST /api/upload/tcns-di-cong-tac/file` | Manual Staging Testing<br>(Chưa có Unit Test mobile) |
| **CTX-BTR-02** | **Thẩm định xung đột lịch công tác**<br>*Actor: Hệ thống* | `business_trip_step_1.dart`<br>(Hiển thị cảnh báo trùng) | `businessTripProvider` | `tcnsLichCaNhan.checkTrungLich()`<br>(`tcns_dang_ky_cong_tac/controller/dang_ky.controller.ts: L227`) | Dùng chung thuật toán với Nghỉ phép |
| **CTX-BTR-03** | **Thẩm định & Phê duyệt đa cấp**<br>*Actor: Lãnh đạo / BGH* | `approve_btrip_list_page.dart`<br>`popup_workflow_buttons.dart`<br>`approve_action_fab.dart` | `approveBusinessTripProvider`<br>`danhMucProvider` | `POST /api/tcns-di-cong-tac/duyet`<br>`GET /api/tcns-di-cong-tac/page/:pageNumber/:pageSize`<br>(`duyet.controller.ts: L51`) | Manual Staging Testing |
| **CTX-BTR-04** | **Đồng bộ quá trình & Gửi thông báo**<br>*Actor: Hệ thống* | `notification_list_screen.dart`<br>`business_trip_detail_page.dart` | `notificationListProvider`<br>`NotificationRouteParser` | Ghi vào `tcnsQuaTrinhDiCongTac`<br>Phát event Kafka `SEND_NOTIFY_SERVICE`<br>FCM push tới thiết bị | Manual Staging Testing |

---

## 3. DANH MỤC CÁC NHẬN ĐỊNH BỊ LOẠI BỎ (NEGATIVE CLAIMS & AUDIT BOUNDARIES)

Nhằm bảo đảm tính trung thực tuyệt đối trong văn phong học thuật và tránh các câu hỏi chất vấn bất lợi từ Hội đồng chấm bảo vệ, **các nhận định sau đây bị loại bỏ hoàn toàn khỏi toàn bộ báo cáo ĐATN**:

```
╔═══════════════════════════════════════════════════════════════════════════════════════╗
║                      DANH SÁCH NHẬN ĐỊNH BỊ CẤM TUYỆT ĐỐI                             ║
╠═══════════════════════════════════════════════════════════════════════════════════════╣
║ 1. TUYỆT ĐỐI KHÔNG viện dẫn văn bản hành chính "135/QĐ-ĐHBK-TCCB".                    ║
║ 2. TUYỆT ĐỐI KHÔNG tuyên bố "triệt tiêu 100% rủi ro tương tranh trên toàn bộ CSDL".   ║
║ 3. TUYỆT ĐỐI KHÔNG tuyên bố "cơ chế SSO vé một lần an toàn tuyệt đối, không thể mất". ║
║ 4. TUYỆT ĐỐI KHÔNG tuyên bố "FCM bảo đảm phát tán tin cậy 100% (Exactly-once)".       ║
║ 5. TUYỆT ĐỐI KHÔNG tuyên bố "Badge icon luôn hiển thị đúng số lượng trên mọi thiết bị"║
║ 6. TUYỆT ĐỐI KHÔNG tuyên bố "SQLite mã hóa an toàn toàn bộ dữ liệu hồ sơ cá nhân".    ║
║ 7. TUYỆT ĐỐI KHÔNG tuyên bố "Phân hệ Công tác có bộ kiểm thử tự động trên Mobile".    ║
╚═══════════════════════════════════════════════════════════════════════════════════════╝
```

### 3.1. Loại bỏ văn bản hành chính giả định "135/QĐ-ĐHBK-TCCB"
- **Nhận định sai sót trước đây:** Một số tài liệu nháp sơ bộ viện dẫn quy định nộp phép trước 48h/72h căn cứ theo *"Quyết định số 135/QĐ-ĐHBK-TCCB"*.
- **Kết quả kiểm toán thực tế:** Cơ quan Phòng Tổ chức – Cán bộ không ban hành văn bản số hiệu 135 này. Quy tắc 2 ngày làm việc (trong nước) và 3 ngày làm việc (nước ngoài/dài ngày) là **các tham số cấu hình hệ thống thực tế được lưu trong bảng CSDL `tcns_setting`** (`ngayDKPhepTrongNuoc`, `ngayDKPhepNuocNgoai`). Chuỗi thông báo "48 giờ/72 giờ" chỉ là chuỗi văn bản kế thừa trong mã nguồn cũ.
- **Quy tắc biên soạn:** Chỉ giải thích quy tắc nộp trước dựa trên các trường cấu hình trong CSDL `tcns_setting` và tính toán ngày làm việc; tuyệt đối không trích dẫn văn bản 135.

### 3.2. Không dùng từ ngữ tuyệt đối hóa kiểm soát tương tranh ("Triệt tiêu 100%")
- **Nhận định cần chấn chỉnh:** *"Cơ chế Advisory Lock triệt tiêu 100% mọi xung đột tương tranh trong hệ thống CSDL."*
- **Giới hạn kỹ thuật thực tế:** PostgreSQL Advisory Lock chỉ tuần tự hóa hiệu quả giữa **các luồng ghi cùng tuân thủ giao thức lấy khóa này**. Nếu có một tiến trình ghi khác bên ngoài (ví dụ một script bảo trì hoặc Stored Procedure khác can thiệp trực tiếp vào bảng `tcns_lich_ca_nhan` mà không gọi `pg_advisory_xact_lock`), xung đột Check-then-Act vẫn có thể xảy ra.
- **Quy tắc biên soạn:** Trình bày chuẩn xác rằng Advisory Lock tuần tự hóa các yêu cầu nộp đơn trong phạm vi các luồng ghi của mô-đun; giải pháp bảo vệ độc lập cấp schema CSDL (Exclusion Constraint `EXCLUDE USING gist`) được định vị là đề xuất nghiên cứu nâng cấp tại Chương 7.

### 3.3. Không tuyên bố cơ chế SSO Opaque Bearer Ticket "An toàn tuyệt đối"
- **Nhận định cần chấn chỉnh:** *"Vé dùng một lần và lệnh Redis GETDEL bảo đảm phiên làm việc không bao giờ có thể bị đánh cắp."*
- **Giới hạn kỹ thuật thực tế:** Vé SSO là một chuỗi ngẫu nhiên (Opaque Bearer Credential) có thời hạn 60 giây. Nếu một kẻ tấn công chiếm quyền kiểm soát thiết bị hoặc proxy trung gian để can thiệp và gửi vé lên endpoint `POST /api/auth/sso/consume-ticket` trước khi WebView hợp lệ kịp nạp, kẻ đó sẽ sở hữu phiên làm việc Web hợp lệ. Hệ thống hiện tại chưa có cơ chế thu hồi phiên tức thời từ máy chủ (Backchannel Revocation).
- **Quy tắc biên soạn:** Phân tích minh bạch mô hình an ninh: Vé ngắn hạn kết hợp xóa nguyên tử giúp giảm thiểu nguy cơ rò rỉ JWT dài hạn trên URL, nhưng vẫn tồn tại rủi ro nếu vé bị đánh cắp trước khi tiêu thụ; giải pháp PoP (Proof-of-Possession) và Backchannel Revocation được dành cho Chương 7.

### 3.4. Không tuyên bố FCM và Kafka phát tán "Tin cậy 100% / Exactly-Once"
- **Nhận định cần chấn chỉnh:** *"Hệ thống thông báo đẩy bảo đảm 100% cán bộ luôn nhận được thông báo tức thì và không bao giờ mất tin nhắn."*
- **Giới hạn kỹ thuật thực tế:** Kiến trúc hiện tại phát sự kiện Kafka sau khi CSDL commit nhưng chưa áp dụng mẫu thiết kế Transactional Outbox Pattern; nếu broker Kafka gặp sự cố đúng lúc phát sự kiện, thông báo có thể bị thất lạc. Ngoài ra, giao thức đẩy qua mạng di động (FCM / APNs) hoạt động theo cơ chế At-Least-Once Delivery kết hợp Best-Effort, có thể gây ra việc nhận trùng hoặc trễ thông báo nếu thiết bị ở vùng sóng yếu.
- **Quy tắc biên soạn:** Trình bày trung thực luồng phát tán thông báo, ghi nhận rủi ro mất mát/lặp tin và đề xuất Outbox Pattern trong Chương 7.

### 3.5. Không khẳng định Badge Icon luôn hiển thị số lượng trên mọi thiết bị
- **Nhận định cần chấn chỉnh:** *"Hệ thống bảo đảm huy hiệu ứng dụng (App Badge) luôn hiển thị chính xác số lượng thông báo chưa đọc trên màn hình chính."*
- **Giới hạn kỹ thuật thực tế:** Hệ sinh thái Android có rất nhiều giao diện OEM Launcher khác nhau (Samsung OneUI, Xiaomi MIUI, Pixel Launcher...). Nhiều launcher chỉ hỗ trợ hiển thị dấu chấm (dot badge) hoặc hoàn toàn không cấp quyền cập nhật số lượng qua Intent ngoài hệ thống.
- **Quy tắc biên soạn:** Mô tả badge ứng dụng là dấu chấm hoặc số lượng tùy thuộc vào hệ điều hành và giao diện khởi chạy (launcher) của thiết bị người dùng.

### 3.6. Không ngộ nhận SQLite trên Mobile lưu trữ lý lịch cá nhân
- **Nhận định cần chấn chỉnh:** *"Dữ liệu hồ sơ lý lịch cán bộ được lưu trữ an toàn trong cơ sở dữ liệu SQLite mã hóa trên điện thoại."*
- **Giới hạn kỹ thuật thực tế:** File `master_data_database_service.dart` chỉ lưu trữ 47 bảng danh mục hành chính dùng chung (tỉnh thành, ngạch bậc, chức danh...). Dữ liệu lý lịch cá nhân nhạy cảm chỉ được lưu tạm thời qua cơ chế SWR Cache trong `SharedPreferences` và được xóa khi logout; thiết bị đã bị root vẫn tiềm ẩn nguy cơ bị trích xuất cache.
- **Quy tắc biên soạn:** Khẳng định rõ SQLite không lưu dữ liệu cá nhân; SWR cache chỉ là bộ đệm hiệu năng tạm thời và đề xuất cơ chế mã hóa phần cứng trong tương lai.

---
*Bản ma trận truy vết và sổ đăng ký tuyên bố này là chuẩn mực bắt buộc để kiểm tra chéo toàn bộ nội dung văn bản luận văn tốt nghiệp trước khi bàn giao.*
