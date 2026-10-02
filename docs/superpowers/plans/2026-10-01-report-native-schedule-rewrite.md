# Kế hoạch viết lại báo cáo theo hồ sơ native và tạo lịch họp

> **Yêu cầu sau cùng 02/10:** kiểm thử trước khi sửa tiếp. Dùng [đợt kiểm thử mới](../../chapter6-7-evidence/14_retest_and_rewrite_gate_20261002.md); E2E còn phụ thuộc môi trường/fixture. Các bảng hoàn tất bên dưới chỉ mô tả đợt biên tập đã có, không phải nghiệm thu kiểm thử đợt mới.

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Thực hiện trực tiếp; không tự phân công sub-agent. Đây là kế hoạch biên tập báo cáo, không phải kế hoạch bổ sung chức năng ứng dụng.

> **Thực hiện và cập nhật phạm vi:** Người dùng đã yêu cầu triển khai và sau đó giới hạn thay đổi ở **sequence**, giữ nguyên use case/activity. Không thêm sequence API native; sequence tạo lịch chỉ thể hiện nghiệp vụ. Phản hồi tiếp theo yêu cầu giữ kiến trúc tổng thể Chương 5: đã khôi phục hình và đồng bộ native/API, không bỏ mục kiến trúc. Bản thực hiện bổ sung việc nhân sự xem dữ liệu trước–sau trong lịch sử yêu cầu/thay đổi; không khẳng định có preview bắt buộc trước gửi.

**Goal:** Đồng bộ bảy chương, sơ đồ và bằng chứng với codebase hiện hành, dùng tác nhân Nhân sự, hồ sơ native và tạo họp của chuyên viên BGH được cấp quyền.

**Architecture:** Chốt yêu cầu Chương 4 trước; dùng chúng để viết thiết kế Chương 5 và chọn bằng chứng Chương 6. Sau đó cập nhật nền tảng, mục tiêu và kết luận để cả báo cáo mô tả cùng một phiên bản; giữ backend làm nguồn dữ liệu, quyền và quy trình nghiệp vụ.

**Tech Stack:** LaTeX, ảnh PNG, Mermaid, latexmk; source Flutter/Dart và backend HRM/iOffice/Auth là căn cứ đối chiếu.

**Spec:** [Đối chiếu báo cáo](../../14_REPORT_7_CHAPTER_AUDIT.md), mục 8–9 và đính chính mới nhất; [snapshot](../../13_CURRENT_SOURCE_SNAPSHOT.md), [hồ sơ](../../03_REQUIREMENT_PACK_PROFILE.md), [lịch](../../06B_REQUIREMENT_PACK_SCHEDULE.md).

## Ràng buộc chung

- Mốc báo cáo: merge `042fee4`, đã nhập `fix-v2:5a30312`; có thay đổi local đổi ảnh được nạp sang `UC_DOC.png` và tài liệu đối chiếu.
- Mốc source: mobile `61722ad`, iOffice `4ca9249`, HRM `250274c`, Auth `7e687a6`. Nếu HEAD đổi khi thực hiện, rà diff liên quan trước khi sử dụng kế hoạch.
- Tác nhân chung là **Nhân sự**. Giữ vai trò chuyên môn cần phân quyền như Chuyên viên TCNS, Chuyên viên BGH; không thay máy móc mọi từ “giảng viên” trong khảo sát hoặc “giảng viên hướng dẫn”.
- Chức năng hồ sơ hiện hành dùng Flutter native. WebView/SSO không thuộc luồng được báo cáo là đang sử dụng; bằng chứng lịch sử được giữ và ghi phiên bản.
- Chuyên viên BGH **được cấp quyền** tạo trực tiếp lịch Trường. Source kiểm tra permission, chưa chứng minh ràng buộc chỉ duy nhất chức danh này được tạo.
- UI `TRUONG_DIRECT` lưu backend `cap=TRUONG`, bước `TONG_HOP`; tạo và phát hành là hai thao tác khác nhau. Không đổi thành `cap=BGH`.
- Giữ nguyên hai activity nghỉ phép/công tác về nhánh duyệt/từ chối: hình hiện tại đúng; nhận định lỗi trước đó đã được đính chính.
- `UC_DOC.png` đã được nạp thay `UC_IOFF.png`; kiểm tra kết quả PDF, không làm lại thay đổi này.
- Giữ văn phong học thuật và cấu trúc chương hiện có. Mỗi nội dung có một nơi trình bày chính, các chương khác tóm tắt và dẫn lại.
- Không sửa ứng dụng/backend, không suy đoán tác giả đóng góp, không đưa secrets hoặc định danh cá nhân vào báo cáo.
- Không chuyển kết quả kiểm thử phiên bản cũ thành kết quả native mới; không cộng các lượt test khác phiên bản thành tổng HEAD.

## Những điểm cần kiểm soát khi biên tập

1. **Quyền tạo lịch:** UI và backend có điều kiện khác nhau; Chương 4 phải nêu permission của từng nhánh, Chương 6 phải tách chứng cứ tài khoản có/thiếu quyền.
2. **Lỗi từng phần:** lưu lịch thành công nhưng upload thất bại; Chương 5 không mô tả một transaction xuyên hai request hoặc phục hồi bền vững sau đóng app.
3. **Hồ sơ theo trường:** cập nhật trực tiếp, đề xuất thẩm định và phản hồi không phải ba kết quả loại trừ trên toàn bộ hồ sơ; không khẳng định mọi editor HRM Web đã được hỗ trợ.
4. **Điểm danh khách/báo vắng:** quyền theo source, khung thời gian và kết quả E2E là ba vấn đề khác nhau; backend cho phép khách không tự chứng minh thao tác trên UI đã đạt.
5. **Mâu thuẫn schema/quỹ phép:** chưa có nguồn xác nhận thì giữ trạng thái chưa kết luận; không xóa hạn chế đồng thời chỉ vì tài liệu nói có khóa.

## Phân bố nội dung để tránh lặp

| Nội dung | Nơi trình bày chính | Nơi chỉ tóm tắt/dẫn lại |
| --- | --- | --- |
| Tác nhân, quyền, FR/UC, quy tắc nghiệp vụ | Chương 4 | Chương 1, 6, 7 |
| Công nghệ và lý do sử dụng | Chương 3 | Chương 5 |
| Thành phần, API, dữ liệu, sequence kỹ thuật, lỗi từng phần | Chương 5 | Chương 4 chỉ mô tả logic nghiệp vụ |
| Ảnh hiện thực, phép thử, kết quả và giới hạn chứng cứ | Chương 6 | Chương 7 tổng kết |
| Phạm vi và đóng góp | Chương 1; bảng ranh giới Chương 5 | Tóm tắt, README |

## Công việc 1 — Chốt bản biên tập và chuỗi tệp có hiệu lực

**Tệp:** `main.tex`, các `Chapter*/index.tex`, `Chapter4/section2/index.tex`; đọc, chưa sửa cấu trúc.

- [ ] Ghi mốc HEAD/source và thay đổi local; giữ các chỉnh sửa tài liệu đang có.
- [ ] Xác nhận báo cáo nạp `Chapter4/section2/hrm/business_trip.tex` (UC-BT), không nạp bản `business_trip/index.tex` (UC-BTR); nhóm văn bản/lịch dùng `ioffice_schedule/index.tex`.
- [ ] Lập bảng truy vết ngay trong tài liệu đối chiếu hiện có: chức năng → FR → UC → hình → API/thực thể → bằng chứng → trạng thái kiểm chứng. Dùng bảng này cho các công việc sau.
- [ ] Giữ mã hiện có; mã bổ sung phải được kiểm tra trùng trước khi đưa vào LaTeX. Không sửa các bản đặc tả không được nạp chỉ để tạo cảm giác đồng bộ.

**Hoàn tất khi:** xác định được vị trí hiệu lực của từng thay đổi và không có hai bộ UC cạnh tranh.

## Công việc 2 — Viết lại yêu cầu hồ sơ native ở Chương 4

**Sửa:** `Chapter4/section2/profile/index.tex`, `Chapter4/section2/index.tex`, phần tương ứng trong `Chapter4/section1.tex`.

- [ ] Sửa FR-PRO-02 và bước chuyển sang HRM Web trong UC-PRO-02 thành mở form native, tải dữ liệu/policy, sửa trường và chọn minh chứng.
- [ ] Giữ UC tra cứu và thẩm định; bổ sung yêu cầu phản hồi và xem lịch sử. Dự kiến dùng FR-PRO-04/05 và UC-PRO-04/05 sau kiểm tra mã: phản hồi, lịch sử.
- [ ] Với UC cập nhật, viết đủ tiền điều kiện, luồng chính, hậu điều kiện và nhánh lỗi: trường được cập nhật trực tiếp, trường cần đề xuất, dữ liệu/tệp không hợp lệ, thiếu quyền, lỗi mạng và kết quả backend từ chối.
- [ ] Mô tả quyết định ở mức trường theo policy; không diễn đạt rằng một phiếu chỉ có một loại kết quả khi source cho phép xử lý từng nội dung.
- [ ] Ghi phạm vi editor/danh mục thực sự hỗ trợ; dữ liệu và quyền cuối cùng do HRM xác nhận.
- [ ] Đồng bộ bảng phạm vi và hình UC_PROFILE với phản hồi/lịch sử; kiểm tra FR–UC–hình đủ liên kết.

**Hoàn tất khi:** phần hồ sơ không còn phụ thuộc WebView và không mô tả vượt phạm vi editor hiện hành.

## Công việc 3 — Bổ sung tạo cuộc họp và sửa phạm vi lịch ở Chương 4

**Sửa:** `Chapter4/section2/ioffice_schedule/index.tex`, `Chapter4/section1.tex`, `Chapter4/section2/index.tex`.

- [ ] Giữ FR-SCH-01/02 và UC xem lịch/điểm danh; bổ sung FR-SCH-03..07 theo pack lịch, UC-SCH-03 “Tạo và đăng ký cuộc họp”.
- [ ] Tác nhân chính của tạo trực tiếp là Chuyên viên BGH được cấp quyền; thể hiện thuộc nhóm Nhân sự, tách vai trò tạo với vai trò phát hành/chủ trì.
- [ ] Viết bảng ba nhánh: DON_VI (`scheduleGeneral:read`), đăng ký Trường (`scheduleRegister:write`), trực tiếp Trường (`scheduleGeneral:write`). Nhánh mới trọng tâm là trực tiếp Trường; hai nhánh còn lại trình bày vừa đủ phân biệt.
- [ ] Đặc tả thông tin họp, thời gian, địa điểm, chủ trì/tham dự/thư ký, tài liệu; lưu thành công, tải tệp lỗi/thử lại và làm mới danh sách.
- [ ] Nêu backend xác định người tạo từ phiên; lưu trực tiếp ở tổng hợp; quyền tạo không suy ra phát hành; người tạo/người được mời/đơn vị được mời xem trước theo điều kiện source.
- [ ] Phân biệt mời đích danh và theo đơn vị; lời mời demo sau tạo tổng hợp với lời mời theo phát hành. Không đưa bảo đảm nhận push vào hậu điều kiện lưu lịch.
- [ ] Kiểm tra hình UC_DOC đang nạp, bổ sung mô tả chức năng tạo trong đoạn giới thiệu và bảng FR/UC vốn chỉ nói xem lịch/điểm danh.

**Hoàn tất khi:** đọc riêng UC-SCH-03 vẫn phân biệt được tạo, đăng ký, tổng hợp và phát hành.

## Công việc 4 — Đồng bộ nghiệp vụ liên quan và sơ đồ Chương 4

**Sửa:** `Chapter4/section2/leave/index.tex`, `Chapter4/section2/hrm/business_trip.tex`, phần điểm danh; source/hình trong `image/uml/`, `image/usecase/`.

- [ ] Rà tác nhân chung trong bảng và mô tả; bỏ các tên ghép “Nhân sự, Giảng viên” khi cùng một tác nhân.
- [ ] Sửa quy tắc công tác: thiếu báo cáo chỉ chặn theo chuyến đã kết thúc; không viết rằng mọi chuyến chưa báo cáo đều chặn chuyến mới. Không thêm form nộp báo cáo nếu mobile chưa có.
- [ ] Giữ wizard nghỉ phép 3 bước và công tác 5 bước; giữ nhánh duyệt/từ chối đúng của hai activity hiện tại.
- [ ] Viết lại `seq_profile_request.mmd` theo native; đồng bộ tác nhân Nhân sự/Chuyên viên TCNS; xuất lại PNG.
- [ ] Đồng bộ `seq_leave_submit.mmd`, `seq_trip_submit.mmd`, `seq_attendance.mmd` và các PNG. Rà logic ngoài tên tác nhân, không chỉ xuất lại máy móc.
- [ ] Sửa activity/sequence điểm danh: được mời hoặc khách; có mặt/hủy từ một giờ trước bắt đầu đến hết ngày kết thúc, báo vắng đến hết ngày bắt đầu; trả lỗi rõ cho người dùng. Đối chiếu lại source trước khi chốt.
- [ ] Thêm activity tạo lịch với các nhánh lưu lỗi/upload lỗi/thử lại. Dùng Chuyên viên BGH cho nhánh trực tiếp; chỉ đưa nhánh khác nếu hình cần minh họa toàn UC.
- [ ] Trong UC tổng thể đổi “Hồ sơ cán bộ” thành “Hồ sơ nhân sự”; thể hiện hoặc giải thích phân rã tạo họp từ Quản lý lịch trình. Giữ vai trò chuyên môn đúng phạm vi.

**Hoàn tất khi:** FR/UC, mô tả hình, Mermaid và ảnh thực sự nạp vào PDF thống nhất; không phát sinh sửa hình đúng do nhận định đã rút lại.

## Công việc 5 — Viết lại thiết kế Chương 5

**Sửa:** `Chapter5/section1.tex`, `section2.tex`, `section3.tex`, `section4.tex`, `section5.tex`; hình kiến trúc/tích hợp trong `image/architecture/` và hình sequence tạo lịch mới.

- [ ] Kiến trúc: Nhân sự → Mobile native → Auth/HRM/iOffice API. HRM Web/iOffice Web có thể được giữ như hệ thống nguồn/quản trị, không nối thành màn hình nhúng hiện hành.
- [ ] Thành phần: thêm editor/policy/history hồ sơ và ScheduleCreatePage/notifier/API; sửa bảng kế thừa–phát triển mới dựa trên diff. Không ghi “không viết lại biểu mẫu bằng Flutter”.
- [ ] Thay mục “Chuyển tiếp phiên làm việc sang HRM Web” bằng “Tích hợp hồ sơ native”; trình bày tải policy/dữ liệu, cập nhật/đề xuất, minh chứng, phản hồi và lịch sử.
- [x] Thêm mục “Tạo và đăng ký lịch họp”: theo phạm vi đã chốt, sequence nghiệp vụ thể hiện nhập thông tin → kiểm tra quyền → ghi nhận lịch tổng hợp → lời mời → bổ sung tài liệu → cập nhật lịch. Chi tiết transaction/commit/ID nằm trong văn bản thiết kế khi cần giải thích lỗi từng phần, không nằm trong hình.
- [ ] Mô tả giữ ID/tệp đã tải trong phiên form để thử lại; không có bảo đảm khôi phục sau đóng app hoặc idempotency tuyệt đối khi mất phản hồi POST tạo.
- [ ] Mô hình dữ liệu: truy vết item/assign/file/log; register chỉ cho nhánh đăng ký. Nối hồ sơ với request/detail/file và nguồn phản hồi/lịch sử theo model thật.
- [ ] Thông báo: đăng ký FCM token hai backend, gửi lời mời sau commit, pending visibility, điều hướng lịch. Nêu outbox theo từng luồng, không gán cho mọi lời mời mới.
- [ ] Phiên: cache AuthUser khi lỗi mạng/non-401, xóa khi 401/thiếu token/logout; không thêm mô tả silent refresh/replay chưa có.
- [x] Viết tổng kết Chương 5 dẫn sang các phép kiểm chứng Chương 6, tránh tuyên bố nghiệm thu ở chương thiết kế.

**Hoàn tất khi:** thiết kế đủ giải thích những chức năng Chương 4 và cả lỗi từng phần đã biết.

## Công việc 6 — Xác minh và đồng bộ từ điển dữ liệu

**Sửa có điều kiện:** `Chapter5/data_dictionary/profile_addess.tex`, `profile_family.tex`, `profile_qtct.tex`, `Chapter5/section3.tex`; các ERD/schema liên quan.

- [ ] Đối chiếu schema/model/migration có thẩm quyền: tên bảng gia đình, kiểu/độ dài trường, `so_nha`, `xa_phuong`, SHCC và các trường địa chỉ.
- [ ] Sửa các mô tả sai do sao chép như ID địa chỉ ở bảng gia đình hoặc SHCC liên kết quy trình.
- [ ] Chỉ nạp từ điển địa chỉ/gia đình khi đã xác minh và hoàn thiện; không nạp bảng quá trình công tác đang rỗng. Nếu chưa có schema xác nhận, giữ từ điển rút gọn và ghi phạm vi mô hình logic.
- [ ] Phân biệt quan hệ logic với FK vật lý; đồng bộ ERD, từ điển và giải thích cùng một mốc nguồn.

**Hoàn tất khi:** các bảng được đưa vào PDF không mâu thuẫn hình/schema; mục chưa xác minh được đánh dấu thay vì đoán.

## Công việc 7 — Viết lại hiện thực và kiểm thử Chương 6

**Sửa:** `Chapter6/section1.tex`, `section2.tex`, ảnh `image/chapter6/`; dùng biên bản trong `docs/chapter6-7-evidence/`.

- [ ] Hồ sơ: thay ảnh/mô tả WebView bằng form native, minh chứng, phản hồi, lịch sử và thẩm định thực sự có; ảnh phải đúng bản dựng, khử định danh. Không đổi caption ảnh Web thành native.
- [ ] Lịch: thêm ảnh menu tạo trực tiếp của tài khoản được cấp quyền, form, chọn thành phần/tệp, trạng thái tổng hợp và chi tiết lịch. Ghi đúng ảnh minh họa hay ảnh từ phép thử.
- [ ] Lập bảng bằng chứng: mã kịch bản, ngày/commit, lớp kiểm thử, đầu vào, mong đợi, thực tế, kết quả, đường dẫn log/ảnh. Trạng thái “chưa kiểm chứng” là hợp lệ khi thiếu chứng cứ.
- [ ] Hồ sơ cần chứng cứ cho cập nhật trực tiếp, đề xuất, minh chứng, phản hồi, lịch sử, thiếu quyền và lỗi mạng; chỉ ghi đạt khi có kết quả tương ứng.
- [ ] Tạo họp cần chứng cứ cho có/thiếu quyền, lưu tổng hợp, người tạo từ phiên, thành phần/tệp, upload lỗi/thử lại, người liên quan/người ngoài xem lịch chờ và lời mời trên thiết bị.
- [ ] Tách 33 test backend mô phỏng đã chạy với thao tác E2E tài khoản chuyên viên BGH; gắn mốc cho các số 47/47, 64/64 và tổng lịch sử. Không cộng các lần chạy khác nhau.
- [ ] Dùng biên bản push Android 01/10 đúng phạm vi thiết bị/trạng thái đã thử; bấm push mở Lịch biểu, chưa khẳng định mở thẳng chi tiết hoặc đã kiểm chứng iOS.
- [ ] Đánh giá lại hạn chế: lỗi WebView là lịch sử; native thiếu chứng cứ thì ghi chưa xác nhận. Giữ hạn chế quỹ phép khi duyệt đồng thời cho đến khi có phép thử/backend xác nhận.

**Hoàn tất khi:** mọi câu “đã hoạt động/đã đạt” truy về được log hoặc ảnh đúng phiên bản. Thu thập chứng cứ còn thiếu là công việc có điều kiện, không giả lập kết quả để hoàn thiện văn bản.

## Công việc 8 — Đồng bộ Chương 1–3 với phạm vi đã chốt

**Sửa:** `Chapter1/section1.tex`, `Chapter2/section1.tex`, `Chapter3/section1.tex` đến `section5.tex`.

- [ ] Chương 1: viết lại bài toán/mục tiêu/phạm vi theo hồ sơ native và tạo họp; phân biệt đóng góp mobile với backend kế thừa/mở rộng. Phân công cá nhân chỉ cập nhật theo thông tin nhóm xác nhận.
- [ ] Chương 2: giữ khảo sát Web hiện hữu; sửa khoảng trống và định hướng sang native/API, bổ sung nhu cầu chuẩn bị họp trên mobile. Đồng bộ phạm vi nhiệm vụ: theo dõi báo cáo đã có, không tự thêm nộp báo cáo tiến độ.
- [ ] Chương 3: giữ Flutter, Riverpod, Dio, điều hướng, lưu cục bộ, FCM/Socket.IO theo vai trò thật. Thay mục WebView bằng biểu mẫu native, policy/validation, chọn danh mục và tải tệp.
- [ ] Sửa liên kết JWT sang quản lý phiên API; bỏ Redis làm căn cứ SSO mobile hiện hành. Redis chỉ giữ theo vai trò backend còn chứng minh được.
- [ ] Sửa nhãn “Non-blocking I/O” đang gắn với Interface/Class/Generics và các kết luận chương còn phản ánh phạm vi cũ.

**Hoàn tất khi:** mục tiêu, khảo sát và công nghệ giải thích đúng các chức năng đã đặc tả, không biến Chương 3 thành danh sách endpoint.

## Công việc 9 — Kết luận, tóm tắt và truy vết tài liệu

**Sửa:** `Chapter7/section1.tex`, `abstraction/main.tex`, `README.md`, `docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md`, phần hiện hành của các requirement pack/đối chiếu khi cần.

- [ ] Chương 7: tổng kết native, phản hồi/lịch sử và tạo họp theo mức kiểm chứng Chương 6; bỏ hướng hoàn thiện upload WebView.
- [ ] Hạn chế/hướng phát triển: độ bao phủ editor, kiểm chứng E2E, upload/thử lại, mất phản hồi tạo, phát hành ngoài mobile, iOS và phạm vi push; không tự tuyên bố lỗi nghiệp vụ cũ đã sửa.
- [ ] Đồng bộ tóm tắt/README bằng ngôn ngữ nghiệp vụ; bỏ quảng bá SSO/WebView như tính năng hiện hành.
- [ ] Cập nhật ma trận FR–UC–hiện thực–kiểm thử theo tệp UC-BT thực sự nạp và các mã bổ sung. Giữ biên bản lịch sử, thêm mốc thay thế thay vì xóa kết quả cũ.

**Hoàn tất khi:** tóm tắt và kết luận không rộng hơn yêu cầu/hiện thực/bằng chứng trong thân báo cáo.

## Công việc 10 — Kiểm tra toàn bộ và build bản báo cáo

**Kiểm tra:** các tệp đã sửa, `main.tex`, `main.pdf` và log build.

- [ ] Rà `WebView`, `Web View`, `SSO`, “chuyển tiếp”, “tái sử dụng biểu mẫu”, “Cán bộ/Giảng viên”, “Hồ sơ cán bộ”; phân loại hiện trạng sai với khảo sát/lịch sử hợp lệ, không thay tất cả tự động.
- [ ] Xác nhận các ảnh nạp tồn tại, đặc biệt UC_DOC; Mermaid và PNG đồng bộ; caption, label và FR/UC không trùng, không tham chiếu mã không có.
- [ ] Chạy `git diff --check`, rà diff bảo đảm không có sửa ứng dụng/backend, bí mật, đổi ảnh đúng ngoài phạm vi hoặc làm mất chỉnh sửa local trước đó.
- [ ] Build bằng `latexmk -pdf -interaction=nonstopmode -halt-on-error main.tex` theo hướng dẫn repo; xử lý lỗi build/tham chiếu mới do sửa, phân biệt cảnh báo có sẵn.
- [ ] Xem trực tiếp trang use case, sequence, activity, kiến trúc, bảng FR/RBAC/từ điển và ảnh Chương 6: chữ đọc được, không cắt hình, không tràn bảng, PDF thật sự dùng hình mới.
- [ ] Rà từng dòng ma trận truy vết; mọi phần chưa có bằng chứng được ghi rõ. Nếu commit, chạy GitNexus `detect_changes` trước commit theo AGENTS.md; không tự push.

**Hoàn tất khi:** PDF build được, các trang bị ảnh hưởng đã xem trực tiếp, truy vết thống nhất và không còn tuyên bố nghiệm thu thiếu căn cứ.

## Thứ tự bàn giao

| Đợt | Công việc | Sản phẩm có thể duyệt |
| --- | --- | --- |
| 1 | 1–4 | Phạm vi, FR/UC, tác nhân, quy tắc và sơ đồ Chương 4 |
| 2 | 5–6 | Kiến trúc, tích hợp, dữ liệu Chương 5; các điểm schema chưa xác minh được ghi rõ |
| 3 | 7 | Hiện thực và bảng bằng chứng Chương 6; danh sách ảnh/log còn thiếu |
| 4 | 8–9 | Chương 1–3, 7, tóm tắt và ma trận cùng phạm vi |
| 5 | 10 | PDF đã build/kiểm tra, danh sách giới hạn còn lại |

Các công việc viết có thể tiến hành với source hiện có. Chứng cứ tài khoản chuyên viên BGH thật, kết quả native E2E, schema không truy cập được và phân công cá nhân cần thông tin thực tế trước khi khẳng định; phần phụ thuộc đó phải được ghi riêng, không cản việc sửa những nội dung đã có căn cứ.


## Kết quả thực hiện

| Công việc | Trạng thái | Kết quả |
| --- | --- | --- |
| 1 | Hoàn tất | Chuỗi input có hiệu lực, UC-BT và UC_DOC; ma trận truy vết được cập nhật |
| 2 | Hoàn tất phần viết | Hồ sơ native, phản hồi/lịch sử; đối chiếu dữ liệu trước/sau theo từng trường |
| 3 | Hoàn tất phần viết | FR-SCH-03..07, UC-SCH-03, ba nhánh/quyền và tổng hợp khác phát hành |
| 4 | Hoàn tất theo phạm vi mới | Sequence hồ sơ/nghỉ phép/công tác/điểm danh; giữ nguyên use case/activity, không thêm activity tạo lịch |
| 5 | Hoàn tất phần viết và hình kiến trúc | Đã khôi phục kiến trúc tổng thể native/API; tích hợp native, sequence nghiệp vụ tạo lịch, pending, lời mời, lỗi từng phần và tổng kết |
| 6 | Hoàn tất phần được xác minh | Từ điển địa chỉ/gia đình theo model staff_*; không khẳng định schema DB triển khai, không nạp hình cũ mâu thuẫn |
| 7 | Hoàn tất biên tập; chưa đủ chứng cứ thực nghiệm | Bảng test theo mốc, ảnh push 01/10, bảng N-PRO/N-SCH còn cần E2E/ảnh form/editor/lịch sử thật |
| 8 | Hoàn tất | Chương 1–3 chuyển sang phạm vi native/API, sửa phạm vi báo cáo nhiệm vụ |
| 9 | Hoàn tất | Chương 7, tóm tắt, README và ma trận hiện hành |
| 10 | Đã build và review | Kiểm tra đường dẫn, label/ref, diff và các trang PDF bị ảnh hưởng; không commit/push |

Checklist phía trên giữ các yêu cầu gốc; các thay đổi phạm vi được ghi rõ trong phần mở đầu và các bước tương ứng. Bảng này là trạng thái thực hiện có hiệu lực. Không đánh dấu đã thu thập những bằng chứng chưa có. Đối chiếu từng chương và giới hạn còn lại xem mục 10.1 của tài liệu đối chiếu.


**Phạm vi trình bày được chốt tiếp:** không có sequence API native. Sequence tạo họp chỉ thể hiện luồng nghiệp vụ, không tách CSDL/transaction/commit/rollback hoặc các chi tiết endpoint, ID và notifier. Nội dung thiết kế kỹ thuật được giữ trong văn bản khi cần giải thích lỗi từng phần.

**Kiến trúc — yêu cầu sau cùng:** chỉ bàn giao `image/architecture/architecture_overall.mmd`, không xuất ảnh. Giữ cấu trúc các tầng của hình gốc; thay WebView bằng SQLite nối với Mobile; bỏ HRM Web/Redis phiên Web; thêm CSDL Auth nối với Auth Service. Đã kiểm tra cú pháp Mermaid. PNG gốc được khôi phục; trạng thái build/review PDF phía trên là lượt trước yêu cầu chỉ mã MMD, không phải bản render của mã mới.

**Đối chiếu Redis 02/10:** giữ Redis ở tầng lưu trữ hỗ trợ cho cache danh mục HRM và Socket.IO Pub/Sub của các backend. Bỏ luồng WebView/SSO không loại các vai trò này. Đã bổ sung lại node/edge Redis trong MMD theo source hiện hành; cache bộ đếm iOffice đang tắt ở bootstrap nên không gán nhãn đó vào sơ đồ. Không xuất ảnh.

**Điều chỉnh bố cục 02/10 theo phản hồi:** thiết kế hồ sơ và tạo lịch là chức năng nghiệp vụ, đã chuyển từ 5.4.2/5.4.3 sang 5.2.3/5.2.4. Mục 5.2 mang tên “Thiết kế thành phần và chức năng nghiệp vụ”; mục 5.4 giữ xác thực/API, FCM và tổng hợp API/đồng bộ Socket.IO. Sequence tạo lịch được nạp cùng sequence điểm danh trong mục “Biểu đồ tuần tự” Chương 4 (Hình 4.15), giữ nguyên nội dung hình. Các tham chiếu được cập nhật; không bỏ phần lịch sử hồ sơ, lỗi upload/thử lại hoặc quyền xem lịch chờ. Build cuối thành công 166 trang, đã kiểm tra mục lục và các trang bị ảnh hưởng. Chi tiết xem mục 10.2 của tài liệu đối chiếu; các giới hạn chứng cứ ở công việc 7 không thay đổi.
