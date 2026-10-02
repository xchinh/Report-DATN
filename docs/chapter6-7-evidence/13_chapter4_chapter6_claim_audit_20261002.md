# Audit Chương 4 ↔ Chương 6 ↔ hiện thực — 02/10/2026

> **Phân biệt mốc:** các mục 1–8 là audit tĩnh đầu đợt; kết quả kiểm thử chạy sau đó nằm trong [biên bản 14](14_retest_and_rewrite_gate_20261002.md) và cập nhật ở mục 9. Không dùng câu “không chạy test/API/thiết bị” của audit đầu đợt để mô tả cả ngày 02/10.

## 1. Phạm vi và mốc đối chiếu

Giữ cấu trúc 4.1–4.4 và phần nghiệp vụ quan trọng. Lượt này lập căn cứ sửa claim và cắt nội dung lặp; chưa sửa LaTeX, hình hay kết quả kiểm thử cũ.

Đặc tả có hiệu lực được xác định theo chuỗi `\input` của [Chương 4](../../Chapter4/index.tex) và [Mục 4.2](../../Chapter4/section2/index.tex):

| Nhóm | Tệp được nạp | Số FR | Số UC |
| --- | --- | ---: | ---: |
| Hồ sơ | `Chapter4/section2/profile/index.tex` | 5 | 5 |
| Nghỉ phép | `Chapter4/section2/leave/index.tex` | 4 | 3 |
| Công tác | `Chapter4/section2/hrm/business_trip.tex` | 5 | 5 |
| Văn bản, nhiệm vụ, lịch | `Chapter4/section2/ioffice_schedule/index.tex` | 11 | 7 |
| Tổng | | **25** | **20** |

Có thêm 5 NFR trong [Mục 4.3](../../Chapter4/section3.tex). `Chapter4/section2/business_trip/index.tex` và `ioffice/incomming_docs.tex` không được nạp; không lấy mã UC-BTR hoặc FR-OFF của các bản cũ để đếm bao phủ hiện tại. `OFF-01`, `BTR-03` trong biên bản là mã kịch bản kiểm thử, không tự ánh xạ thành UC cùng số.

| Nguồn | HEAD đối chiếu | Giới hạn |
| --- | --- | --- |
| Báo cáo | `042fee403d10c8e404eb1bd083f3fc276916fc03` + working tree | Đọc nội dung đang sửa; HEAD riêng không đại diện đầy đủ bản thảo |
| Mobile | `61722adcb66d0fb50deb6e529dd7a5a10103147d` | Working tree sạch |
| HRM | `250274cac7db8f2f4c2f188c9e4084b3e1e52308` | Có `.env.local` sửa cục bộ; không đọc nội dung cấu hình |
| iOffice | `4ca9249c2ab4a478ee62ea3d53d961ca5de8e2fb` | Có `.env.local` sửa và `AGENTS.md` chưa theo dõi; không dùng làm bằng chứng chức năng |

Các mốc source khớp [snapshot 01/10](../13_CURRENT_SOURCE_SNAPSHOT.md). GitNexus được dùng tìm đầu mối và quan hệ ở mobile/HRM; hai chỉ mục được dựng lại với `--index-only --force` sau lỗi FTS khi cập nhật tăng dần. Resource MCP vẫn báo metadata cũ sau dựng lại, nên tên/đường dẫn từ graph được kiểm tra lại bằng source hiện hành. iOffice chưa được đăng ký trong MCP; luồng của nó được đọc trực tiếp từ controller/model, không gán kết luận an toàn từ một graph không có sẵn.

Đây là audit tĩnh và đối chiếu biên bản đã có. Không chạy lại test, API ghi, thao tác thiết bị hoặc truy vấn CSDL triển khai. Các số test bên dưới thuộc lượt ghi trong nguồn dẫn, không phải kết quả mới ngày 02/10.

## 2. Kết luận cần xử lý trước

**FR-IOFF-02 có hiện thực mobile, nên giữ với phạm vi phân công xử lý văn bản đến.** `AssignmentCard` gọi provider tạo/sửa phiếu giải quyết, rồi gửi POST/PUT tới iOffice. Chức năng này khác tạo/phân công nhiệm vụ độc lập trên iOffice Web. Chương 6 đã phân biệt hai phạm vi, nhưng UC-OFF-01 còn hứa về người nhận hợp lệ và thông báo kịp thời vượt quá bằng chứng hiện có.

**Claim tương tranh cần bỏ.** Có advisory lock ở một số đường tạo/sửa/xóa đơn nghỉ phép; handler duyệt cuối hiện hành vẫn gọi `insert` qua đường khác. Kết quả LEV-05 lịch sử ghi nhận tổng quỹ 1 ngày, đã nghỉ 2 ngày, số dư suy ra −1. Chưa có lượt thử lại chứng minh bất thường này đã hết.

**Hai sai khác cụ thể ngoài nhận xét ban đầu:** phản hồi hồ sơ bắt buộc có minh chứng, trái câu “tệp liên quan nếu có” của UC-PRO-04; thoát biểu mẫu nghỉ phép chỉ reset dữ liệu client, trái nhánh “tự động dọn dẹp bản ghi nháp” của UC-LEV-02.

## 3. Danh sách claim và sai khác cần sửa

### A01 — P0: bảo đảm tương tranh và từ chối khi trạng thái đổi

Vị trí: [phần mở đầu nghỉ phép](../../Chapter4/section2/leave/index.tex), UC-LEV-03 ngoại lệ 4a; đối chiếu [Chương 6, phần kiểm thử](../../Chapter6/section2.tex).

- [HRM `acquireLeaveLock`][H-LOCK] sử dụng khóa advisory trong transaction; các lời gọi ở controller tập trung tại đường tạo, cập nhật và xóa.
- [Handler duyệt cuối][H-APPROVE] kiểm tra trạng thái và người được phân công, sau đó gọi `updateHistory` và `tcnsNghiPhepDangKy.insert`; không thấy sử dụng khóa này ở đường duyệt. `updateHistory` cập nhật theo `id`, không gắn điều kiện bước cũ vào chính câu update. Duyệt nhiều phiếu cũng có [endpoint riêng][H-MULTIPLE].
- [Biên bản LEV-05](results/DATN-LEV-05-20260922-2205/summary.md) chứng minh hai **phiếu khác nhau** duyệt cuối đồng thời đã vượt quỹ tại phiên bản thử. Nó không phải phép thử hai người cùng duyệt **một phiếu**. Biên bản phân tích CSDL ngày 24/09 cũng thuộc môi trường lúc đó; chưa kiểm tra lại thủ tục đang triển khai.

Thay câu mạnh bằng: “Các bước kiểm tra trên ứng dụng hỗ trợ nhập liệu; backend HRM thực hiện kiểm tra nghiệp vụ cuối cùng và xử lý việc chuyển trạng thái hồ sơ.”

Ngoại lệ trạng thái thay đổi vẫn có thể giữ như yêu cầu. Khi bảo vệ, không nói kiểm tra trạng thái trước xử lý tự chứng minh từ chối được mọi request đồng thời. Chương 6 đã công khai bất thường quỹ phép; giữ giới hạn này.

### A02 — P0: FR-IOFF-02 tồn tại, nhưng UC-OFF-01 cần thu hẹp claim

Vị trí: [FR-IOFF-02 và UC-OFF-01](../../Chapter4/section2/ioffice_schedule/index.tex), [phần Văn bản và nhiệm vụ Chương 6](../../Chapter6/section1.tex).

Chuỗi hiện thực đã xác nhận: trang chi tiết văn bản → [AssignmentCard][M-ASSIGN] → `addResolutionForm`/`updateResolutionForm` → [provider POST/PUT][M-PGQ] → [controller PGQ][I-PGQ]. Người dùng chọn đơn vị, cá nhân và vai trò xử lý. UI sử dụng `canEditResolutionForm` từ dữ liệu backend và chỉ bật sửa khi danh mục nhân sự sẵn sàng.

Giữ FR, đổi mô tả thành: “Phân công trách nhiệm xử lý văn bản đến cho đơn vị hoặc cá nhân trên phiếu giải quyết, theo quyền và trạng thái nghiệp vụ.” Dùng tên “Phân công xử lý văn bản đến” cho UC để tránh lẫn với phân hệ Nhiệm vụ.

Hai phần chưa đủ căn cứ:

- Ngoại lệ “đối tượng không có quyền nhận nhiệm vụ”: controller có permission ở đầu route, tra người/đơn vị, nhưng chưa xác nhận được một quy tắc kiểm tra đầy đủ **quyền của người nhận** như đặc tả. Không lấy kiểm tra quyền người thao tác thay bằng chứng này. Middleware POST/PUT PGQ đang dùng `eofficeVanBanDen:read`; không mô tả như đã chứng minh một permission phân công riêng ở API.
- “Gửi thông báo … kịp thời”: đường tạo PGQ phát `create-task` có điều kiện, chẳng hạn trạng thái `sentToDepartments` và action hợp lệ. Điều này không chứng minh mọi lần lưu PGQ đều tạo thông báo tới người nhận. Có test UI/provider với API giả; thiếu biên bản mobile → lưu PGQ → người nhận → hộp thư/push.

Hậu điều kiện nên chỉ khẳng định thông tin phân công được lưu khi iOffice chấp nhận. Nếu giữ yêu cầu thông báo/kiểm tra người nhận, đánh dấu chúng là các nhánh chưa kiểm chứng trong Chương 6.

### A03 — P0: UC-PRO-04 ghi minh chứng tùy chọn nhưng source bắt buộc

Vị trí: [UC-PRO-04, bước 2](../../Chapter4/section2/profile/index.tex).

[Mobile `submitFeedback`][M-FEEDBACK] trả `false` khi lý do trống hoặc danh sách tệp rỗng. [HRM][H-FEEDBACK] từ chối phản hồi không có ít nhất một minh chứng. Backend vẫn quyết định quy tắc; Flutter phản ánh nó trên biểu mẫu.

Đổi bước 2 thành: “Người dùng nhập nội dung phản hồi và đính kèm ít nhất một tài liệu minh chứng.” Nêu thiếu nội dung/minh chứng trong ngoại lệ hiện có. Không mở rộng các editor khác thành mặc định bắt buộc tệp: quy tắc này dành cho phản hồi đang xét.

### A04 — P0: UC-LEV-02 hứa xóa nháp khi thoát form

Vị trí: [UC-LEV-02, luồng 5a](../../Chapter4/section2/leave/index.tex).

[`LeaveRequestPage._handleExit`][M-LEAVE-EXIT] làm mới provider, gọi `close()` rồi thoát. [`LeaveRequest.close`][M-LEAVE-CLOSE] chỉ gán DTO rỗng. Không thấy gọi API `deleteLeave` trên đường thoát; đường xóa nháp nằm ở thao tác xóa riêng trong danh sách.

Đổi thành: “Người dùng xác nhận thoát biểu mẫu; các thay đổi chưa lưu trên ứng dụng bị bỏ. Bản ghi nháp đã tạo trên HRM không tự bị xóa.” Đây là sửa đặc tả theo hiện thực, không thêm chức năng dọn nháp.

### A05 — P0: điểm danh khách và quyền theo từng cuộc họp

Vị trí: FR-SCH-01, UC-SCH-01, đoạn mở đầu lịch và [sequence điểm danh](../../image/uml/seq_attendance.mmd).

[Handler iOffice][I-ATTENDANCE] đã xác nhận:

| Thao tác | Kiểm tra thời gian | Ghi nhận |
| --- | --- | --- |
| Có mặt / hoàn tác | Từ 1 giờ trước lúc bắt đầu đến hết ngày kết thúc | Dòng phân công phù hợp; nếu không có thì `assignId=null` theo người trong phiên |
| Báo vắng | Không quá hết ngày bắt đầu; lý do sau trim, dài 1–200 ký tự | Tạo dòng vắng nếu chưa có trạng thái trên slot tương ứng |
| Đổi vắng → có mặt | Trong cửa sổ có mặt | Cập nhật dòng đang vắng |

Các route có `scheduleGeneral:read`, kiểm tra SHCC phiên, lịch tồn tại/chưa xóa và thời gian. **Không thấy handler ghi gọi lại quy tắc quyền xem từng mục lịch** của [API chi tiết][I-DETAIL]. Cũng chưa thấy một điều kiện cấu hình bật/tắt điểm danh được thực thi trong các handler này. Vì vậy không trả lời rằng backend đã ngăn mọi người “không liên quan” chỉ bằng danh sách mời, trạng thái phát hành hoặc một flag cấu hình chưa chứng minh.

Đây là khác biệt xác nhận từ source giữa đường đọc chi tiết và đường ghi tham dự; khả năng khai thác với phiên trái quyền chưa được thử lại ở mốc hiện hành. [Biên bản 24/09](10_e2e_audit_20260924.md) chỉ chứng minh người được phân công thao tác thành công; khách không thấy lịch để thao tác trên Android. Giữ rule khách, giữ trạng thái chưa đủ E2E, và ghi rõ giới hạn kiểm chứng authorization trong Chương 6/NFR-03.

Phần mô tả hiện thực nên nói đúng các kiểm tra đã thấy: “iOffice kiểm tra phiên đăng nhập, quyền sử dụng phân hệ lịch, sự tồn tại của mục lịch và khung thời gian thao tác; người không có dòng phân công được ghi nhận riêng ở nhóm khách.” Quyền xem theo từng cuộc họp vẫn là yêu cầu cần đối chiếu/kiểm chứng; không coi câu diễn đạt này là xác nhận đã đáp ứng toàn bộ authorization.

### A06 — P1: UC-SCH-02 có nhánh chưa được hiện thực đầy đủ

Vị trí: [UC-SCH-02](../../Chapter4/section2/ioffice_schedule/index.tex).

- Đã có ba nguồn và điều hướng về nghiệp vụ. [Provider lịch][M-CALENDAR] gộp sự kiện iOffice, HRM nghỉ phép và HRM công tác; hai mapper có test riêng. Không suy ảnh một cuộc họp iOffice thành bằng chứng dữ liệu đủ cả ba nguồn.
- Luồng 3a hứa bật/tắt từng nguồn. Chưa tìm thấy điều khiển lọc nguồn hoặc trạng thái lựa chọn nguồn trong trang `schedule_view.dart` và các thành phần lịch hiện hành. Nhánh này chưa đủ bằng chứng **Implemented**, không chỉ thiếu E2E. Nếu không giữ như yêu cầu chưa hoàn thành, bỏ riêng nhánh 3a khỏi phạm vi phiên bản đồ án.
- Ngoại lệ 2a hứa thông báo khi tải thiếu dữ liệu. Provider ném lỗi iOffice, nhưng bắt và bỏ qua lỗi hai nguồn HRM rồi trả danh sách còn lại. UI không nhận thông tin lỗi nguồn HRM từ provider này. Cần ghi hiện thực một phần và giới hạn “chưa thông báo rõ khi thiếu nguồn HRM” trong Chương 6, không báo đạt toàn bộ nhánh lỗi tải lịch.
- “Đồng thời tải” chưa phản ánh thứ tự `await` của provider. Có thể diễn đạt trung tính là “Ứng dụng tải các nguồn lịch được phép xem”.

Đổi cả hai chỗ “toàn diện” thành “giúp người dùng theo dõi các loại lịch liên quan trên một giao diện” hoặc “các sự kiện đã tải được hiển thị trên giao diện lịch tổng hợp”.

### A07 — P1: các điều kiện văn bản cần bám trạng thái thực tế

UC-OFF-02 chỉ nêu phân công như một nhánh tùy quyền. [UI tham mưu][M-ADVISE] thực tế chặn gửi khi chưa có PGQ chỉ đạo và báo “Phải thêm người chỉ đạo để gửi tham mưu”. Nên nêu điều kiện đã có người chỉ đạo; nếu thiếu, người có quyền bổ sung trước khi gửi tham mưu. Tránh diễn đạt như tham mưu luôn chỉ cần nhập ý kiến.

UC-OFF-02/03 đang dùng “trạng thái nhiệm vụ” trong một số bước/hậu điều kiện dù đối tượng chính là văn bản đến. Sửa đúng đối tượng thành trạng thái/quy trình văn bản; nhiệm vụ liên kết là nhánh riêng.

Nhánh tạo nhiệm vụ liên kết trong UC-OFF-03 có source, nhưng có thêm điều kiện: [model `chiDaoV2`][I-DIRECTION] xét đủ người chỉ đạo/đồng chỉ đạo, bước triển khai tiếp theo, văn bản không phải thông tin và danh sách người thực hiện. Không mô tả chỉ cần một lần chỉ đạo văn bản “Triển khai nhiệm vụ” là luôn có nhiệm vụ mới ngay. Chưa có đối chứng E2E đầy đủ cho nhánh này.

Giữ phân biệt tiếp nhận với hoàn thành ở UC-OFF-04: [controller tiếp nhận][I-RECEIVE] ghi hoàn thành đồng thời ở nhánh thông tin/để biết; nhánh giao nhiệm vụ chỉ ghi tiếp nhận. Test/kịch bản OFF-04 cũ về “100% tiếp nhận tự hoàn thành” không nghiệm thu yêu cầu mới.

### A08 — P1: mã trạng thái và vai trò thu hồi công tác

Vị trí: [UC-BT-01/05, FR-BTR-05](../../Chapter4/section2/hrm/business_trip.tex).

LaTeX dùng `DRAFT`, `RETURNED`, `REVOKED`; API/biên bản đang dùng `NHAP`, `TRA_LAI`, `THU_HOI`. Nếu giữ mã kỹ thuật trong Chương 4, dùng đúng mã source hoặc ghi rõ đó chỉ là tên tiếng Anh minh họa.

[Handler thu hồi công tác][H-REVOKE] yêu cầu permission đầu route và điều kiện đơn vị TCNS (`94`) hoặc `roleKeys` có `clerical-president`. Không nói mọi tài khoản BGH đều được thu hồi. Diễn đạt tác nhân là “Nhân sự TCNS hoặc Văn phòng BGH được cấp quyền thu hồi”.

Giữ requirement từ chối/thu hồi/duyệt nước ngoài và các quy tắc đoàn, kinh phí. Chương 6 đã ghi đúng các nhánh được thử riêng qua API, chưa đầy đủ qua mobile. Sửa “khóa lịch trình” thành “ghi nhận khoảng thời gian công tác trong lịch cá nhân phục vụ kiểm tra xung đột” để tránh bị hiểu thành khóa transaction hoặc bảo đảm chống mọi tương tranh.

## 4. Ma trận hiện thực và mức kiểm chứng

Ba mức phải đọc độc lập:

- **Implemented:** đã đọc thấy đường UI/provider/API xử lý hành vi; không tự suy mọi ràng buộc trong FR đều đúng.
- **Component-tested:** có kết quả chạy trong biên bản, chỉ theo phạm vi và phiên bản lúc chạy. **Có test** chỉ nghĩa đã đọc thấy bài test tương ứng trong source, chưa đủ để báo test đạt tại HEAD.
- **E2E-tested:** thao tác từ UI mobile đến backend và dữ liệu nguồn được đối chứng cho nhánh cụ thể. **API+DB** là kiểm thử tích hợp backend; không gán thành E2E mobile. **Lịch sử** không nghiệm thu thay đổi mới.

Nguồn kết quả chính: [E24](10_e2e_audit_20260924.md), [R24](results/DATN-FIX-RECHECK-20260924/leave_trip_gap_recheck.md), [API24](results/DATN-FIX-RECHECK-20260924/leave_trip_e2e_limitations_recheck.md), [P01](12_school_schedule_push_device_verification.md), [ma trận đã hiệu chỉnh](01_uc_fr_implementation_matrix.md). Không dùng tiêu đề “đầu-cuối toàn diện” trong API24 thay cho phương thức thực thi của chính biên bản: nó ghi rõ các nhánh bổ sung chạy qua API.

### 4.1. Hồ sơ — 5 FR, 5 UC

| FR | UC | Implemented và đầu mối | Thành phần | E2E mobile / kết luận được phép |
| --- | --- | --- | --- | --- |
| FR-PRO-01 | UC-PRO-01 | Trang hồ sơ, provider, cache, API đọc | Model/provider có test; có kết quả bộ mobile lịch sử | E24 và các lượt tra cứu lịch sử; không đại diện nộp native |
| FR-PRO-02 | UC-PRO-02 | Editor native; `profile_edit_provider.dart`; backend policy và tách direct/request | Có test policy, nhánh editor, validation, minh chứng; lượt test trong tài liệu mobile có mốc khác nhau | Chưa đủ chuỗi nộp native → request/direct → hồ sơ nguồn cho các editor tại HEAD; kết quả Web cũ không thay thế |
| FR-PRO-03 | UC-PRO-03 | `approve_profile`, `request-review.controller.ts` | Có test model/diff; kết quả bộ mobile lịch sử | E24 có duyệt native cùng phiếu do Chrome tạo và đối chiếu nguồn; chưa phải E2E toàn luồng tạo native, chưa đủ mọi nhánh duyệt/từ chối từng phần |
| FR-PRO-04 | UC-PRO-04 | `submitFeedback`, `ProfileFeedbackPage`, HRM `isPhanHoi` | Có test lý do, minh chứng và multipart | Chưa có biên bản E2E phản hồi thật; sửa bắt buộc tệp theo A03 |
| FR-PRO-05 | UC-PRO-05 | `profile_history_provider.dart`, `profile_history_page.dart`, API hồ sơ | Có model/widget test before/after, feedback, audit log | Chưa đủ log E2E lịch sử trực tiếp/yêu cầu/đã duyệt tại HEAD; giữ mục tiêu và giới hạn |

[Backend policy][H-POLICY] lấy `SECTION_POLICY`; khi ghi, backend lọc lại `employeeDirectFields`/`employeeRequestFields` và có thể xử lý hai nhóm trong cùng request. Giữ phân biệt cập nhật trực tiếp/đề xuất theo trường, không chuyển quyền quyết định sang Flutter. Phạm vi editor vẫn theo danh mục được hỗ trợ.

### 4.2. Nghỉ phép — 4 FR, 3 UC

| FR | UC | Implemented và đầu mối | Thành phần | E2E mobile / kết luận được phép |
| --- | --- | --- | --- | --- |
| FR-LEV-01 | UC-LEV-01 | `LeaveManagementScreen`, provider quỹ/danh sách/chi tiết | Có test model, số dư, trạng thái | Tra cứu lịch sử; quỹ hiển thị tham khảo, không chứng minh bảo toàn quỹ khi đồng thời |
| FR-LEV-02 | UC-LEV-02 | Wizard 3 bước, tạo nháp, cập nhật/gửi, kiểm tra HRM | Test ngày, overlap, validation; R24 ghi 28/28 test thành phần ngày/model | R24 có lập/gửi và gửi lại trên Android; chưa đủ mọi minh chứng, hủy form, lỗi mạng; nhánh tự xóa nháp không khớp source (A04) |
| FR-LEV-03 | UC-LEV-01 | Sửa/xóa nháp, sửa gửi lại trả lại; backend kiểm tra người/trạng thái | Có test provider/workflow, không suy Pass chỉ từ source test | R24 có trả lại → sửa → gửi lại trên Android; nhánh chặn sửa/xóa có probe API riêng; không bao phủ mọi trạng thái |
| FR-LEV-04 | UC-LEV-03 | Trang duyệt, thao tác đơn và nhiều phiếu; HRM `/duyet`, `/duyet-multiple` | Bộ HRM lịch sử kiểm tra một số nhánh/quy tắc; có test UI/provider | E24 duyệt tuần tự đến cuối, R24 trả lại; API24 từ chối có lý do là API+DB. Chương 6 cần tránh để hàng tổng hợp khiến người đọc hiểu từ chối đã thử đầy đủ qua UI. Duyệt nhiều phiếu/stale-state chưa đủ E2E; LEV-05 Fail lịch sử chưa có retest |

### 4.3. Công tác — 5 FR, 5 UC

| FR | UC | Implemented và đầu mối | Thành phần | E2E mobile / kết luận được phép |
| --- | --- | --- | --- | --- |
| FR-BTR-01 | Không có UC tra cứu riêng; bước theo dõi trong UC-BT-02 | `business_trip_list_page.dart`, chi tiết, HRM đăng ký | Có test workflow/provider trong source mới; test mapper lịch không kiểm chứng wizard | E24 có mở phiếu/đối chiếu; không bao phủ mọi bộ lọc/biến thể |
| FR-BTR-02 | UC-BT-01, UC-BT-02 | Wizard 5 bước, lưu và gửi; API đăng ký/check-conflict | Có test workflow ghi payload; chưa dùng kết quả mapper làm kết quả công tác | R24 có tạo/gửi trong nước; nước ngoài bắt buộc thư mời và duyệt trong API24 là API+DB. Chưa đủ E2E đoàn/kinh phí/đính kèm mọi loại |
| FR-BTR-03 | UC-BT-01, UC-BT-03 | Sửa nháp/trả lại, xóa nháp; người lập không tự thu hồi | Có test workflow trong source | R24 có trả lại → sửa → gửi lại trên Android; biên bản sửa/xóa nháp có phép thử API, chưa nhận thành E2E mobile toàn UC-BT-03 |
| FR-BTR-04 | UC-BT-04 | `approve_business_trip`, HRM `duyet.controller.ts` | Có test workflow/provider trong source; test hiện diện chưa tự chứng minh Pass ở HEAD | E24 duyệt tuần tự trong nước trên Android; R24 trả lại; API24 từ chối/nước ngoài là API+DB; chưa đủ E2E các bước đoàn/KHCN/nhánh rút gọn |
| FR-BTR-05 | UC-BT-05 | Thu hồi theo permission và TCNS/Văn phòng BGH; giải phóng dữ liệu | Chưa xác nhận biên bản chạy test thành phần riêng đủ cho toàn nhánh | API24 có từ chối người lập/lãnh đạo thường và chấp nhận TCNS, đối chiếu trạng thái/lịch/quá trình công tác; chưa đủ chuỗi thu hồi qua mobile |

Các quy tắc BR-BT-01..06 cần giữ theo requirement, nhưng phép thử một chuyến trong nước hoặc nước ngoài không kiểm chứng hết quy trình đoàn nhiều đơn vị, kinh phí KHCN hay nhánh do Văn phòng BGH tạo. Nộp báo cáo chuyến đi chưa thuộc biểu mẫu mobile; không thêm requirement nộp báo cáo mobile để đáp ứng điều kiện backend về chuyến đã kết thúc.

### 4.4. Văn bản và nhiệm vụ — 4 FR, 4 UC

| FR | UC | Implemented và đầu mối | Thành phần | E2E mobile / kết luận được phép |
| --- | --- | --- | --- | --- |
| FR-IOFF-01 | Chưa có UC tra cứu riêng trong 4 UC văn bản hiện hành | Danh sách/chi tiết văn bản đến/đi; mission đọc | Có test văn bản/provider/mission ở source hiện hành; phát biểu cũ “không có test văn bản” đã lỗi thời | [OFF-02](results/DATN-OFF-02-RERUN-20260923/result.md) xác minh mở một tệp văn bản đến qua ứng dụng OS; chưa đủ mọi bộ lọc/văn bản đi/nhiệm vụ |
| FR-IOFF-02 | UC-OFF-01 | UI PGQ → provider POST/PUT → controller; khác phân công nhiệm vụ độc lập | Có test quyền hiển thị, payload, lỗi API với mock | Chưa đủ E2E phân công từ mobile, từ chối người nhận và thông báo người nhận; giữ FR, sửa claim theo A02 |
| FR-IOFF-03 | UC-OFF-02, UC-OFF-03, UC-OFF-04 | Có tham mưu/chỉ đạo/tiếp nhận; backend chuyển văn bản và tạo mission theo điều kiện | Có provider/UI test; không coi mock thành nghiệm thu workflow backend | Chưa đủ đối chứng nhiều vai trò/trạng thái, nhiệm vụ liên kết hoặc tiếp nhận → hoàn thành; đặc tả theo A07 |
| FR-IOFF-04 | Chưa có UC đọc nhiệm vụ riêng trong 4 UC hiện hành | Mission/task/detail/tree/report GET, màn hình đọc | Có model, định dạng và provider test | Có quan sát giao diện, chưa đủ đối chứng toàn cây/tiến độ/báo cáo tại HEAD. Chương 6 nên ghi “đã quan sát/đã hiện thực” thay câu gộp rằng toàn thông tin nhiệm vụ “hoạt động đúng” |

Không cần thêm nhiều UC đọc chỉ để lấp ma trận: ghi trực tiếp FR → màn hình/kịch bản đọc. [Provider nhiệm vụ][M-MISSION] trong phạm vi đối chiếu dùng GET để xem báo cáo đã có; tạo/phân công/nộp báo cáo thuộc iOffice Web theo Chương 1/6. FR-IOFF-01 có tên “văn bản và nhiệm vụ” nhưng mô tả hiện chỉ nói văn bản; có thể bổ sung rất ngắn “và tra cứu nhiệm vụ” hoặc sửa tên cho khớp FR-IOFF-04.

### 4.5. Lịch — 7 FR, 3 UC

| FR | UC | Implemented và đầu mối | Thành phần | E2E mobile / kết luận được phép |
| --- | --- | --- | --- | --- |
| FR-SCH-01 | UC-SCH-01 | Có mặt, hoàn tác, báo vắng; backend ghi assignment/guest | E24 ghi handler 2/2 và model/detail 15/15 tại lượt đó; source có thêm test action/widget | E24 xác minh ba thao tác người có phân công; khách chưa đủ E2E; quyền theo từng lịch/config chưa chứng minh (A05) |
| FR-SCH-02 | UC-SCH-02 | Có ba nguồn/map/lịch; nhánh lọc nguồn chưa tìm thấy, lỗi HRM không truyền lên UI | Có mapper/provider/widget test; không suy tất cả nhánh UC từ test mapper | Có quan sát lịch và lượt timeout/phục hồi lịch sử; chưa đủ dữ liệu cả ba nguồn, lọc nguồn hoặc thông báo thiếu HRM (A06) |
| FR-SCH-03 | UC-SCH-03 | Menu theo quyền, form, notifier cho đơn vị/đăng ký/direct | Có provider/widget test; tài liệu audit tạo lịch ghi các lượt test ở giai đoạn trước | Tài liệu mobile có quan sát nhập/lưu form trực tiếp tạo ID 380 trước đợt sửa hiển thị. P01 xác minh API tạo thật; chưa đủ nghiệm thu toàn form tại HEAD hoặc cả ba nhánh |
| FR-SCH-04 | UC-SCH-03 | Chọn chủ trì/tham dự/thư ký/tệp; upload riêng, giữ ID đã nhận để thử lại | Có test create/attachments/notifier; cần phân biệt test code với biên bản chạy đúng mốc | Chưa đủ log mobile → lưu thành phần/tệp → gây lỗi → retry cùng ID ở phiên bản chốt |
| FR-SCH-05 | UC-SCH-02 | `includePending`, `canViewPending`, `getPendingForUser` | P01 ghi 47/47 backend ở HEAD; lượt 33/33 publication/pending được Chương 6 dẫn riêng, có trùng bộ | Chưa đủ phép thử thật mọi nhóm người tạo/đích danh/đơn vị/người ngoài; quyền xem chờ không phải quyền phát hành |
| FR-SCH-06 | UC-SCH-02 | Điều hướng từ sự kiện về đúng loại nghiệp vụ | Có `schedule_navigation_test.dart` | Chưa đủ biên bản nhận/chọn sự kiện thật cho cả ba loại tại HEAD; không lấy test route parser của notification thay kiểm chứng điều hướng lịch |
| FR-SCH-07 | UC-SCH-03, bước lời mời | Sender sau commit tạo direct `TONG_HOP`, đăng ký FCM hai backend | P01: 47/47 iOffice, 64/64 notification; không cộng với 33/33 thành tổng mới | P01 có API thật → push → Android mở/chạy nền → bấm mở Lịch biểu. Không phải E2E form tạo, không mở thẳng chi tiết, chưa iOS/phát hành |

## 5. NFR và những nội dung nên giữ

| NFR | Đối chiếu Chương 4–6 | Cách kết luận |
| --- | --- | --- |
| NFR-01 | Ch4 là yêu cầu xử lý lỗi; Ch6 nêu phục hồi nghỉ phép/lịch trên trường hợp đã thử | Giữ; bổ sung giới hạn nguồn HRM lỗi bị bỏ qua (A06), không gọi toàn NFR đạt |
| NFR-02 | Ch4 dùng “cần”; Ch6 đã giới hạn một Android, chưa nghiên cứu usability | Giữ mục tiêu giao diện/biểu mẫu, không thêm “UX tốt” hoặc benchmark chưa đo |
| NFR-03 | Nguyên tắc backend thẩm quyền đúng; tổ hợp quyền và route ghi chưa được xác minh đầy đủ | Giữ nguyên tắc 4.1; không dùng nó làm kết luận tất cả handler đã authorization đúng; nêu A02/A05 |
| NFR-04 | Dữ liệu nguồn chính thức, client chỉ hỗ trợ; Ch6 còn bất thường quỹ phép | Giữ yêu cầu và giới hạn; không suy khóa tạo/sửa bảo đảm nhất quán tại duyệt cuối |
| NFR-05 | Tổ chức module hỗ trợ bảo trì/kiểm thử là mục tiêu thiết kế; Ch6 ghi chưa có metric | Giữ ở mức mục tiêu; không hứa “đảm bảo dễ bảo trì/mở rộng” |

Giữ câu ở đầu 4.2 rằng đặc tả không mặc nhiên là kết quả E2E. Giữ hồ sơ direct/request, quyền backend, phân biệt đề xuất chờ với dữ liệu đã hiệu lực. Giữ tạo lịch ở `TRUONG/TONG_HOP`, người tạo từ phiên, upload riêng và giới hạn mất phản hồi POST. Chương 1 đã ghi tạo lịch cấp Trường trong đóng góp của Chính, khớp phạm vi hiện tại; không cần mở rộng bảng đóng góp.

## 6. Cắt nội dung mà vẫn giữ nghiệp vụ

Theo `main.toc` bản dựng ngày 02/10, Chương 4 bắt đầu trang đánh số **33**, Chương 5 bắt đầu **78**: Chương 4 hiện chiếm **45 trang**. Đây là mốc bản dựng đã có, không phải kết quả biên dịch mới trong lượt audit; nhận xét trang 36–80 là ước lượng của bản khác.

Mục tiêu giảm 5–8 trang vẫn hợp lý để thử, nhưng chưa được chứng minh chỉ bằng bỏ câu dẫn. Không ghi đã giảm trang trước khi sửa, biên dịch và kiểm tra bố cục.

| Vị trí | Phần có thể cắt/gộp | Phần cần giữ |
| --- | --- | --- |
| 4.1 | Đoạn giải thích actor lặp bảng; hai đoạn mô tả/phân rã sơ đồ tổng thể | Actor khác nhau, backend quyết định quyền, ma trận và sơ đồ |
| Đầu 4.2 | Gộp giới thiệu nhóm và cách sử dụng biểu đồ thành một đoạn ngắn | Câu phân biệt requirement với E2E; bảng phạm vi |
| Hồ sơ | Câu “Bảng… tổng hợp…” và đoạn dẫn các bảng UC; đoạn giải thích activity lặp chính sách ở đầu mục | 5 FR/5 UC, policy theo trường, mixed direct/request, phản hồi/lịch sử và hình quan trọng |
| Nghỉ phép | Câu “trọn vẹn vòng đời”; đoạn giới thiệu UC/bảng/hình lặp nhau | Quỹ tham khảo, 3 bước, nháp/trả lại, trạng thái/quyền; sửa A01/A04 |
| Công tác | Gộp mục tiêu dài; bỏ câu dẫn hình mà caption đã thể hiện | 5 FR/5 UC, BR có tác động nghiệp vụ; không thêm nhánh mới |
| Văn bản/lịch | Gộp đoạn Unified Calendar; bỏ đoạn kể lại sequence điểm danh/tạo Trường | Rule guest có giới hạn, quyền, tổng hợp/chưa phát hành, upload lỗi từng phần |
| NFR/kết luận | Bỏ đoạn liệt kê lại 5 nhóm NFR trước/sau bảng | Bảng NFR ở mức yêu cầu và một đoạn kết nối Chương 5 |

Các bảng danh mục UC có thể gộp với tham chiếu FR khi nội dung lặp, sau khi kiểm tra nhãn/ref. Giữ bảng FR và các đặc tả/hình quan trọng. Chỉ điều chỉnh kích thước hình, khoảng trắng và `\newpage` sau khi render để tránh chữ quá nhỏ hoặc bảng bị cắt; không lấy thay đổi bố cục làm bằng chứng nội dung đã đúng.

Đã xem hình `UC_DOC.png` và `attendant_activity.png`. Hình UC có tạo cuộc họp cho chuyên viên BGH, khớp bổ sung UC-SCH-03. Hình activity điểm danh còn nhãn “Kiểm tra danh sách tham gia”; caption giới hạn người được phân công đã giảm hiểu nhầm, nhưng nên đổi nhãn thành kiểm tra điều kiện thời gian/tham dự và giữ chú thích nhánh khách. Nhánh báo vắng cũng cần thể hiện kiểm tra lý do/thời gian; sequence hiện đã phân biệt hai cửa sổ thời gian.

## 7. Phạm vi sửa đề xuất và kiểm chứng tiếp theo

Đợt sửa ngắn nhất: A01, A03, A04 là các thay câu cụ thể; A02 làm rõ phân công văn bản; A05/A06 nêu các nhánh chưa đáp ứng hoặc chưa kiểm chứng; A07/A08 chỉnh điều kiện/tên đối tượng/mã trạng thái. Giữ cấu trúc chương và kết quả lịch sử. Chương 6 chỉ cần sửa các câu gộp gây hiểu nhầm mức kiểm chứng và bổ sung giới hạn có căn cứ; không tăng số test/Pass.

| Phần chưa đủ | Bằng chứng tối thiểu trước khi nâng mức kết luận |
| --- | --- |
| PGQ phân công văn bản | UI tài khoản có quyền → lưu PGQ → đối chiếu dòng phân công; thử người thao tác/người nhận không hợp lệ theo policy đã xác nhận; nếu claim thông báo thì đối chiếu người nhận thực tế |
| Hồ sơ native | Chọn editor đại diện, direct và request có minh chứng; đối chiếu request/hồ sơ; phản hồi không thay hồ sơ và lịch sử đúng before/after |
| Nghỉ phép đồng thời | Thử riêng hai người duyệt một phiếu và hai phiếu duyệt cuối dùng chung quỹ; ghi commit, trạng thái, lịch sử và số dư trước/sau |
| Khách điểm danh | Có lối mở lịch hợp lệ trên mobile, ghi `assignId=null`; thử cửa sổ thời gian và quyền từng lịch bằng phiên phù hợp sau khi xác nhận policy |
| Tạo trực tiếp Trường | Form tài khoản có quyền → người tạo từ phiên → `TONG_HOP`/thành phần/tệp; lỗi upload và retry cùng ID; không gọi là phát hành |
| Lịch đa nguồn | Dữ liệu thật ba nguồn, điều hướng từng loại; lỗi riêng từng nguồn; không dùng dữ liệu mock hay ảnh một nguồn thay toàn tuyến |

Không thực hiện các phép thử ghi này trong lượt audit. Kết luận hoàn tất của lượt này chỉ là đã đối chiếu đủ danh mục và xác định claim/gap; không phải xác nhận mọi FR/UC hoặc NFR đã đạt.

## 8. Nguồn source chính

Các liên kết dưới đây trỏ tới workspace đã đối chiếu. Tên test chỉ là đầu mối hiện diện trong source nếu bảng không dẫn một biên bản chạy cụ thể.

- Hồ sơ mobile: [provider policy/submit][M-FEEDBACK], `profile_history_provider.dart`, `profile_history_page.dart`; test `profile_edit_policy_test.dart`, `profile_edit_branches_test.dart`, `profile_history_test.dart`, `profile_history_page_test.dart` trong `modules/hrm/test/profile/`.
- Hồ sơ backend: [policy][H-POLICY], [phản hồi][H-FEEDBACK], `request-review.controller.ts`; direct/request lấy từ `request.constants.ts` và được lọc lại khi ghi.
- Nghỉ phép: [thoát form][M-LEAVE-EXIT], [reset DTO][M-LEAVE-CLOSE], [khóa][H-LOCK], [duyệt][H-APPROVE], [duyệt nhiều phiếu][H-MULTIPLE].
- Văn bản: [AssignmentCard][M-ASSIGN], [PGQ provider][M-PGQ], [tham mưu UI][M-ADVISE], [PGQ backend][I-PGQ], [nhánh chỉ đạo][I-DIRECTION], [tiếp nhận][I-RECEIVE]; test `incoming_document_workflow_test.dart`, `incoming_document_actions_test.dart`, `incoming_document_detail_regression_test.dart`.
- Lịch: [provider đa nguồn][M-CALENDAR], [handler tham dự][I-ATTENDANCE], [quyền chi tiết][I-DETAIL]; test mapper nghỉ phép/công tác, `schedule_list_provider_test.dart`, `schedule_navigation_test.dart`, `schedule_create_provider_test.dart`, `schedule_create_page_test.dart`.
- Biên bản source mới: `myhcmut-mobile/docs/profile-edit-web-comparison.md`, `myhcmut-mobile/docs/schedule-creation-audit.md`. Chúng ghi nhiều giai đoạn trong cùng tệp; không cộng số test hoặc chuyển quan sát form ID 380 ở bản trước thành nghiệm thu toàn form HEAD.

[M-FEEDBACK]: /home/xchinh/workspace/myhcmut-mobile/modules/hrm/lib/src/profile/providers/profile_edit_provider.dart:119
[M-LEAVE-EXIT]: /home/xchinh/workspace/myhcmut-mobile/modules/hrm/lib/src/time_off/views/pages/leave_request_page.dart:89
[M-LEAVE-CLOSE]: /home/xchinh/workspace/myhcmut-mobile/modules/hrm/lib/src/time_off/providers/leave_request_provider.dart:102
[M-ASSIGN]: /home/xchinh/workspace/myhcmut-mobile/modules/ioffice/lib/src/incoming_document/views/widgets/assignment_card.dart:711
[M-PGQ]: /home/xchinh/workspace/myhcmut-mobile/modules/ioffice/lib/src/incoming_document/providers/incoming_docs_provider.dart:380
[M-ADVISE]: /home/xchinh/workspace/myhcmut-mobile/modules/ioffice/lib/src/incoming_document/views/widgets/workflow_action_fab.dart:228
[M-MISSION]: /home/xchinh/workspace/myhcmut-mobile/modules/ioffice/lib/src/mission/providers/mission_provider.dart:532
[M-CALENDAR]: /home/xchinh/workspace/myhcmut-mobile/modules/ioffice/lib/src/schedule/providers/schedule.dart:16
[H-LOCK]: /home/xchinh/workspace/hrm-be/modules/md_tcns/tcns_nghi_phep/helper.ts:11
[H-APPROVE]: /home/xchinh/workspace/hrm-be/modules/md_tcns/tcns_nghi_phep/controller.ts:503
[H-MULTIPLE]: /home/xchinh/workspace/hrm-be/modules/md_tcns/tcns_nghi_phep/controller.ts:582
[H-REVOKE]: /home/xchinh/workspace/hrm-be/modules/md_tcns/tcns_dang_ky_cong_tac/controller/duyet.controller.ts:72
[H-POLICY]: /home/xchinh/workspace/hrm-be/modules/md_staff/staff_ly_lich/controller/request.controller.ts:31
[H-FEEDBACK]: /home/xchinh/workspace/hrm-be/modules/md_staff/staff_ly_lich/controller/request.controller.ts:83
[I-PGQ]: /home/xchinh/workspace/ioffice-be/modules/md-eoffice/eoffice-van-ban-den/controller/eofficeVanBanDenPGQ.controller.js:25
[I-RECEIVE]: /home/xchinh/workspace/ioffice-be/modules/md-eoffice/eoffice-van-ban-den/controller/eofficeVanBanDenPGQ.controller.js:271
[I-DIRECTION]: /home/xchinh/workspace/ioffice-be/modules/md-eoffice/eoffice-van-ban-den/model/eofficeVanBanDen.manual.js:311
[I-ATTENDANCE]: /home/xchinh/workspace/ioffice-be/modules/md-schedule/schedule-general/controller/schedule-meeting-checkin.js:50
[I-DETAIL]: /home/xchinh/workspace/ioffice-be/modules/md-schedule/schedule-general/controller/schedule-general-item.js:28

## 9. Cập nhật sau kiểm thử Android và backend thật

- **Nghỉ phép/công tác:** đã tạo nháp, thoát/mở lại và xóa qua UI, đối chiếu API/DB; nghỉ phép còn có bổ sung thông tin/lưu nháp. Xóa xong không còn fixture #320/#1083 trong các bảng được kiểm tra. Thoát wizard không đồng nghĩa xóa nháp đã lưu. Chưa chạy gửi/duyệt/race HTTP mới.
- **Hồ sơ:** mở hồ sơ, hai tab lịch sử, menu sửa; policy thật trả trường direct/request. UI phản hồi có nội dung nhưng thiếu tệp không tạo request/log. Chưa ghi/duyệt thay đổi mới hoặc chứng minh before/after mới.
- **UC-SCH-03:** backend yêu cầu thành phần lịch `TRUONG` có ít nhất một đơn vị `01/87/14` (BGH/HĐT/VPĐU), theo [updateAssignList](/home/xchinh/workspace/ioffice-be/modules/md-schedule/schedule-general/model/scheduleGeneralAssign.js:18). Hai lượt UI thiếu thành phần bị HTTP 400, không lưu lịch. Bổ sung điều kiện này vào đặc tả; không coi lỗi chung “An error occurred” là chứng minh form đã tạo hợp lệ. [Controller](/home/xchinh/workspace/ioffice-be/modules/md-schedule/schedule-general/controller/schedule-general-item.js) truyền `{error: error.message}` trong khi helper response đọc `message/msg`, làm mất nguyên nhân cụ thể.
- **Actor/NFR:** đổi 7 tài khoản qua UI, state ba backend khớp; quyền thực tế của CV-TCNS không khớp ma trận tháng 9 ở tệp 09. [Route đổi user](/home/xchinh/workspace/myhcmut-be/modules/fw_auth/controller.ts:151) chỉ kiểm tra JWT; UI thực tế cho CB-A đổi về admin. Không viết chức năng này có guard admin hoặc toàn bộ ma trận quyền đã đạt kiểm thử. Cần xác định phạm vi công cụ đổi user trước khi claim NFR bảo mật.
- **FR-IOFF-02:** giữ theo source/test thành phần. Mở trang văn bản ở admin thấy danh sách chờ xử lý rỗng; không có ca UI lưu PGQ mới trong đợt này, không nâng mức kiểm chứng.

Artifact và danh sách nhánh còn **Not run** được dẫn ở biên bản 14. Nội dung LaTeX các chương đang nạp vẫn giữ nguyên để sửa sau khi chốt phạm vi bằng chứng.

**Lượt tiếp theo — tạo lịch/điểm danh theo yêu cầu người dùng:** [E-SCH-CREATE-ATTENDANCE-01](results/DATN-RETEST-20261002/e2e-school-create-attendance.json) ghi 11 ca với UI/API tách rõ. Mobile đã tạo lịch Trường #387 hợp lệ ở `TONG_HOP`, creator/người được mời mở chi tiết được; creator không có assign điểm danh guest, người được mời dùng assign, hoàn tác/báo vắng/đổi sang có mặt đều được đối chiếu DB. API thật chặn điểm danh trùng, quá sớm, hết ngày và lịch bị xóa. Native guest chỉ được chứng minh cho creator; các tài khoản không được mời khác dùng API trực tiếp.

Giới hạn I01 đã được kiểm tra thêm qua HTTP/CSDL thật: CV-TCNS khác đơn vị bị detail HTTP 400 nhưng POST checkin HTTP 200 vẫn tạo guest. Không mô tả backend tái kiểm tra quyền xem lịch trước ghi điểm danh. CB-A cùng đơn vị creator được đọc detail nhưng lịch không có trong relative list; đây là hành vi khác ca khác đơn vị, không được gộp thành từ chối detail. Thẻ thống kê trên UI đếm slot assign, không cộng guest. Lịch #387 đã xóa mềm, attendance còn 0; logs/assign giữ theo cơ chế hiện tại. Chưa nghiệm thu upload retry, giao push hoặc công bố chính thức ở lượt mới.
