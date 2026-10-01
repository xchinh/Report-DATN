# ĐẶC TẢ TẠO CUỘC HỌP NATIVE TỪ LỊCH TỔNG HỢP

> Đối chiếu 01/10/2026: mobile `72e6c67`, iOffice `96b21cf`. Các mã FR/UC bổ sung dưới đây là đề xuất đưa vào báo cáo khi viết lại; chưa sửa LaTeX. Nguồn và giới hạn kiểm chứng xem [snapshot](13_CURRENT_SOURCE_SNAPSHOT.md). Commit demo `96b21cf` đã push, gửi lời mời ngay sau tạo trực tiếp ở `TONG_HOP` và commit thành công.

## 1. Mục tiêu và phạm vi

Người dùng có quyền tạo cuộc họp ngay từ Lịch tổng hợp bằng biểu mẫu Flutter. Cuộc họp được lưu ở iOffice; lịch nghỉ phép/công tác HRM tiếp tục là các nguồn đọc của lịch tổng hợp. Việc tạo cuộc họp không tạo bản ghi HRM và không phải chức năng phòng họp trực tuyến WebRTC.

## 2. Yêu cầu chức năng đề xuất

| Mã | Chức năng | Tiêu chí và ranh giới |
| --- | --- | --- |
| `FR-SCH-03` | Tạo/đăng ký cuộc họp native | Từ nút Tạo lịch, chọn loại thao tác được cấp quyền, nhập thông tin và lưu hoặc gửi phiếu |
| `FR-SCH-04` | Chọn thành phần và đính kèm tài liệu | Tìm nhân sự theo tên, chọn chủ trì/tham dự/thư ký; chọn tệp và tải lên khi có quyền upload tương ứng |
| `FR-SCH-05` | Xem lịch chưa phát hành có liên quan | Hiển thị `TRUONG/TONG_HOP` trong lịch cá nhân của người tạo/người được mời hoặc đơn vị được mời; giữ nhãn chưa phát hành |
| `FR-SCH-06` | Mở đúng nghiệp vụ từ lịch tổng hợp | Lịch nghỉ phép mở đơn nghỉ phép, lịch công tác mở phiếu công tác, cuộc họp mở chi tiết lịch |
| `FR-SCH-07` | Tiếp nhận lời mời họp khi tạo trực tiếp ở tổng hợp | Bản demo gửi ngay sau tạo trực tiếp `TONG_HOP` và commit; phát hành vẫn gửi theo luồng cũ; không bảo đảm push luôn đến thiết bị |

## 3. Use case `UC-SCH-03` — Tạo và đăng ký cuộc họp

**Tác nhân:** Người dùng có quyền lịch tương ứng. Quyền thực tế của tài khoản quyết định thao tác, không chỉ chức danh.

**Tiền điều kiện:** Đã đăng nhập iOffice; có ngữ cảnh đơn vị/lịch và quy trình đang hoạt động. Mobile hiển thị nút Tạo lịch khi có `scheduleGeneral:read`.

**Luồng chính:**

1. Người dùng mở Lịch tổng hợp, chọn Tạo lịch và chọn loại tạo theo quyền.
2. Nhập tiêu đề, loại lịch từ danh mục, thời gian hoặc cả ngày, địa điểm và ghi chú; chọn thành phần theo vai trò.
3. Chọn tệp đính kèm nếu có nhu cầu và đủ quyền; ứng dụng kiểm tra form và giờ kết thúc sau giờ bắt đầu.
4. Ứng dụng gửi dữ liệu đến iOffice bằng REST; backend kiểm tra quyền, ngữ cảnh và quy trình rồi lưu bản ghi.
5. Ứng dụng tải tệp sau khi nhận ID mục lịch. Với đăng ký lịch Trường, chỉ gửi phiếu tiếp nhận sau khi lưu mục và tải tệp thành công.
6. Khi toàn bộ thao tác thành công, ứng dụng thông báo và làm mới lịch tổng hợp. Trạng thái hiển thị theo bước nghiệp vụ backend.

**Luồng thay thế và lỗi:**

- Dữ liệu không hợp lệ hoặc thiếu quyền: hiển thị lỗi, giữ form để sửa; backend vẫn kiểm tra quyền độc lập.
- Lưu đã thành công nhưng upload/gửi phiếu thất bại: giữ ID phiếu/mục và các tệp đã tải trong notifier, cho thử lại các bước còn thiếu trong cùng phiên form. Đóng form/app không có cơ chế phục hồi notifier này; bản nháp đã lưu vẫn có thể còn ở backend.
- POST commit nhưng mất phản hồi: không khẳng định chống trùng tuyệt đối vì client chưa nhận ID và backend chưa có khóa idempotency.
- Tạo lịch Trường trực tiếp: lưu ở `TONG_HOP`, không tự chuyển thành `HOAN_THANH`; người liên quan có thể xem trước phát hành theo kiểm tra quyền.

**Hậu điều kiện:** Bản ghi/phiếu được tạo theo nhánh đã chọn; dữ liệu nghiệp vụ thuộc iOffice. Không mô tả tất cả request lưu/tải tệp/gửi phiếu là một transaction duy nhất.

## 4. Quyền, API và trạng thái

| Nhánh | Quyền backend | API chính | Kết quả nghiệp vụ |
| --- | --- | --- | --- |
| Lịch đơn vị (`DON_VI`) | `scheduleGeneral:read` | `POST /api/schedule/general-item/don-vi/create` | Bắt đầu ở bước 1 của quy trình đang hoạt động; hoàn thành ngay chỉ khi cấu hình bước đầu là `HOAN_THANH` |
| Phiếu lịch Trường (`TRUONG`) | `scheduleRegister:write` | `POST /api/schedule/register/create`; `POST /api/schedule/general-item/register/create`; `POST /api/schedule/register/submit/item/:id` | Một phiếu tuần chứa một cuộc họp trong mỗi lượt tạo hiện tại; gửi tiếp nhận, chưa tự phát hành |
| Lịch Trường trực tiếp (`TRUONG_DIRECT` trên UI) | `scheduleGeneral:write` | `POST /api/schedule/general-item/general/create` | Backend ghi `cap=TRUONG` và bước `TONG_HOP`; phát hành là thao tác riêng |
| Tệp | `scheduleRegister:write` hoặc `scheduleGeneral:write` theo nhánh | `POST /api/schedule/general-files/register/upload` hoặc `/general/upload`, query `id`, field `scheduleFiles` | Upload tách biệt sau khi có ID; lịch đơn vị dùng endpoint upload `register`, nên không suy ra quyền tải tệp chỉ từ quyền tạo đơn vị |
| Tìm nhân sự/loại lịch | Theo kiểm tra của API danh mục | `GET /api/schedule/user/all`; `GET /api/schedule/dm-type/all` | Dùng mã do backend cung cấp; không gửi tên hiển thị thay cho mã |

## 5. Quy tắc nghiệp vụ và quyền xem

- Chỉ bổ sung lịch chưa phát hành khi `includePending=true` và đang xem `mySchedule`/SHCC chính người đăng nhập. Client cũ không truyền cờ giữ kết quả lịch chính thức.
- Lịch `TRUONG/TONG_HOP` được mở cho người tạo hoặc SHCC có phân công. Thành viên đơn vị được mở khi slot mời cả đơn vị không có SHCC; không tự mở cho mọi đồng nghiệp của người được mời đích danh.
- Không mở thêm lịch `NHAP`/`TIEP_NHAN` cho người được mời. Quyền xem không cấp quyền sửa hoặc phát hành; cảnh báo của lịch chưa phát hành không trả nội dung lịch riêng khác.
- Bản demo gửi lời mời ngay sau khi tạo trực tiếp lịch Trường tại `TONG_HOP` và commit thành công, qua API dùng chung cho mobile/web. Không tự phát hành lịch; gửi phiếu/tiếp nhận không kích hoạt lời mời sớm. Khi phát hành thành `HOAN_THANH`, luồng hiện có vẫn gửi thông báo, nên người nhận có thể nhận thêm lần nữa. Thông báo sớm xảy ra trước bước upload tệp riêng của mobile; upload lỗi không thu hồi lời mời. Với lịch đơn vị có bước đầu `HOAN_THANH`, lưu lịch là thời điểm gửi. Dùng SHCC phân công đã lưu, ánh xạ tài khoản hoạt động và khử trùng người nhận; không tự mở rộng slot chỉ có đơn vị ra toàn bộ nhân sự.
- Điểm danh tuân thủ kiểm tra hiện có của iOffice; không suy từ việc xem trước phát hành rằng mọi thời điểm đều được điểm danh.

## 6. Truy vết hiện thực và kiểm thử

| Nội dung | Mã nguồn / test |
| --- | --- |
| Điểm vào và biểu mẫu | Mobile `schedule/pages/schedule_view.dart`, `schedule_create_page.dart`; route trong `config/ioffice_features.dart` |
| Lưu, upload, thử lại | Mobile `schedule/providers/schedule_create_provider.dart`; `schedule_create_provider_test.dart`, `schedule_attachments_provider_test.dart`, `schedule_attachments_test.dart` |
| Mở đúng chi tiết | Mobile `schedule/utils/schedule_navigation.dart`; `schedule_navigation_test.dart` |
| Quyền lịch chờ | iOffice `schedule-general/controller/schedule-general.js`, `schedule-general-item.js`, `model/scheduleGeneralItem.js`; `test/schedule_pending_visibility.test.js` |
| Lời mời khi tạo trực tiếp và khi phát hành | Cùng model/controller iOffice; `test/schedule_publication_notifications.test.js` |
| Điểm danh trước phát hành | iOffice `test/schedule_meeting_checkin.test.js`; mobile `attendance_actions_provider_test.dart` |

Các đường dẫn mobile ở bảng thuộc `modules/ioffice/lib/src/` và `modules/ioffice/test/schedule/`; các controller/model iOffice thuộc `modules/md-schedule/`.

Audit mobile `docs/schedule-creation-audit.md` ghi nhận tạo một lịch Trường trực tiếp trên Android/backend thật và nguyên nhân trước sửa khiến không thấy lịch; đồng thời ghi giới hạn chưa thử gửi phiếu/phát hành thật và giao nhận lời mời. Đây không phải log E2E đầy đủ của cả ba HEAD. Trước khi đưa vào kết quả mới ở Chương 6, cần minh chứng tạo trực tiếp `TONG_HOP` → nhận/mở lời mời demo → hiện lịch → quyền người mời/người ngoài → upload/thử lại → phát hành → nhận/mở lời mời trên đúng bản dựng. Không thay số test cũ bằng tổng suy ra từ số file test.

## 7. Kiểm chứng backend cho bản demo — 01/10/2026

Mốc iOffice: `96b21cf88b73a55a1debd33c3b45206309119bc0`, nhánh `chinh-khang`, đã push.

| Kiểm tra | Kết quả | Phạm vi chứng minh |
| --- | --- | --- |
| `node --test test/*.test.js` | 39/39 đạt | Bốn tình huống mới: tạo thành công gửi sau commit, lưu lỗi không gửi, commit lỗi không gửi/không rollback lại, phân công bị loại không được mời; cùng kiểm thử lịch và quyền tệp hiện có |
| Vô hiệu hóa lệnh gửi sớm bằng bộ nạp test tạm | Test tạo thành công thất bại như dự kiến; chạy lại mã thật đạt | Test phát hiện được khi mất hành vi gửi ở tổng hợp; không sửa mã nguồn để thực hiện phép kiểm tra |
| `node --check modules/md-schedule/schedule-general/controller/schedule-general-item.js` | Đạt | Cú pháp controller |
| `git diff --check` và duyệt diff | Đạt | Commit chỉ chứa controller tạo lịch và file test thông báo; không kèm `AGENTS.md` cục bộ |

Các kiểm thử dùng mock cho lưu trữ và chuyển phát, không kết nối dịch vụ để gửi thông báo thật. Không có script lint/build trong `package.json`; không suy từ kiểm tra cú pháp ra toàn bộ ứng dụng đã build hoặc chạy tích hợp thành công. GitNexus chưa có chỉ mục iOffice; yêu cầu `detect_changes` không trả được phạm vi, nên đã đối chiếu trực tiếp diff và mã gọi.

Minh chứng thiết bị còn cần cho Chương 6: chạy backend chứa commit này, tạo lịch Trường trực tiếp từ app, xác nhận chủ trì/tham dự/thư ký nhận và mở đúng cuộc họp `TONG_HOP`; kiểm tra người ngoài không xem được và ghi nhận lần thông báo tiếp theo nếu phát hành.
