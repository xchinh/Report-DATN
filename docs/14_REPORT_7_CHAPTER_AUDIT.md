# NỘI DUNG CẦN CHỈNH SỬA BÁO CÁO THEO CODEBASE HIỆN TẠI

> **Cập nhật kiểm thử 02/10:** Dùng [kết quả mới và quyết định nội dung](chapter6-7-evidence/14_retest_and_rewrite_gate_20261002.md) trước khi sửa tiếp. Các kết quả kiểm thử ngày 01/10 và trạng thái biên tập bên dưới giữ theo mốc riêng, không thay cho kiểm thử E2E mới.

> **Cập nhật sau pull `fix-v2`:** đã nhập commit `5a30312` vào `main` bằng merge `042fee4`. Xem **mục 9** để biết việc nào đã được sửa trong hình mới và việc nào vẫn còn; mục 7–8 là đối chiếu ở mốc trước lần nhập này. Các số kiểm thử ở phần đầu là snapshot đã ghi nhận, không phải phép thử mới của lượt pull.

> **Đối chiếu:** 01/10/2026; HRM `250274c`, iOffice `4ca9249`, mobile `61722ad`, cùng commit mobile `2ebf898` đã bổ sung hồ sơ native. Đã đọc diff và hiện thực; iOffice đạt 47/47 test backend, mobile đạt 64/64 test notification và phân tích tĩnh sạch ở 11 package; push Android thật đã nhận ở tổng hợp khi app mở/chạy nền. Chưa chạy toàn bộ test HRM/mobile hoặc kiểm chứng iOS/phát hành thật. Mốc đầy đủ xem [13_CURRENT_SOURCE_SNAPSHOT.md](13_CURRENT_SOURCE_SNAPSHOT.md).
>
> **Tiến độ thực hiện:** nội dung LaTeX đã được viết lại theo kế hoạch; xem mục 10. Các câu “chưa sửa LaTeX/PDF” trong các mốc trước là lịch sử. Theo yêu cầu mới, chỉ chỉnh sơ đồ sequence, giữ nguyên ảnh use case/activity và các hình khác.
>
> **Mục đích:** Cung cấp nội dung và căn cứ để người dùng viết lại báo cáo. Các tệp LaTeX, hình báo cáo và `main.pdf` chưa được sửa. Những đoạn dưới đây là đề xuất biên tập, không phải kết quả nghiệm thu mới.

## 1. Những thay đổi cần phản ánh

| Ưu tiên | Nội dung | Căn cứ và ranh giới |
| --- | --- | --- |
| P0 | Thay mô hình tái sử dụng biểu mẫu HRM Web bằng hồ sơ native | `2ebf898`: bộ editor, policy, gửi request/feedback và lịch sử hồ sơ. HRM giữ quyền và dữ liệu nguồn; chưa bao phủ mọi trường/editor của web |
| P0 | Bổ sung tạo cuộc họp từ lịch tổng hợp | Hiện thực trên HEAD có ba nhánh đơn vị/đăng ký Trường/Trường trực tiếp. `72e6c67` hoàn thiện tệp và thử lại; không mô tả commit này là lần đầu tạo mọi chức năng lịch |
| P0 | Phân biệt lưu lịch và phát hành | Trường trực tiếp lưu `TONG_HOP`; `6803b7b` cho người liên quan xem trước và gửi lời mời khi chuyển `HOAN_THANH` sau commit. Commit demo `96b21cf` bổ sung lời mời ngay sau tạo trực tiếp `TONG_HOP`; mobile chưa cung cấp luồng phát hành |
| P0 | Đổi căn cứ kiểm chứng hồ sơ từ WebView sang native | Biên bản nộp bằng web/trình duyệt ngày 24/09 không chứng minh nộp native. Test native đã có nhưng cần log và ảnh đúng phiên bản để nêu kết quả mới |
| P1 | Ghi kết quả push trên Android | `4ca9249`/`61722ad` sửa đồng bộ token và xử lý lỗi sender; đã nhận tại `TONG_HOP` khi app mở/chạy nền trên RMX2151. Bấm mở Lịch biểu, chưa mở thẳng chi tiết; bổ sung ảnh/biên bản Chương 6 |
| P1 | Cập nhật quản lý phiên | `72e6c67`: giữ AuthUser cache khi lỗi mạng/non-401, xóa khi 401/thiếu token/logout; không có silent refresh/replay ở interceptor hiện tại |
| P1 | Cập nhật điều hướng lịch và hiển thị văn bản | Lịch rút gọn mở đúng phiếu HRM; văn bản đến hiển thị phân công ngay cả khi danh bạ chưa tải, chỉ cho sửa khi đủ quyền/dữ liệu |
| P1 | Điều chỉnh đóng góp backend | HRM bảo toàn quyền cấp thủ công khi đồng bộ; iOffice thêm quyền xem lịch chờ, lời mời khi tạo trực tiếp ở tổng hợp để demo và lời mời khi phát hành. Không còn mô tả iOffice chỉ chỉnh metadata/SSO |
| P1 | Mô tả thông báo theo từng luồng | iOffice có hạ tầng outbox nhưng lời mời lịch mới là gửi sau commit, chưa có retry bền vững riêng; không khẳng định mọi sự kiện đều dùng outbox hoặc exactly-once |

## 2. Vị trí cần sửa theo chương

| Chương / tệp hiện tại | Nội dung cần sửa | Nội dung thay thế / bổ sung |
| --- | --- | --- |
| Chương 1 — `Chapter1/section1.tex` | Các câu tái sử dụng chức năng Web/WebView trong bối cảnh, mục tiêu và phạm vi | Phạm vi app là giao diện Flutter native kết nối backend; thêm sửa/gửi đề xuất/phản hồi/lịch sử hồ sơ và tạo cuộc họp theo quyền |
| Chương 2 — các mục khảo sát HRM/iOffice | Nếu dùng hạn chế mobile để biện minh cho nhúng biểu mẫu web | Giữ khảo sát hệ thống Web làm bối cảnh và nguồn nghiệp vụ; giải thích thiết kế biểu mẫu native cho tác vụ di động. Không tuyên bố thay toàn bộ web quản trị |
| Chương 3 — `Chapter3/section2.tex` | Mục “WebView và các thư viện tích hợp”, dòng `flutter_inappwebview`, lý do tái sử dụng biểu mẫu | Trình bày Flutter forms, policy theo trường, picker/bottom sheet, quản lý tệp, state/loading/error và mạng. Bỏ WebView khỏi công nghệ chính của chức năng hiện hành; giữ FCM, Socket.IO, SharedPreferences với phạm vi đúng |
| Chương 4 — `Chapter4/section2/profile/index.tex` | `FR-PRO-02` và sequence vẫn yêu cầu chuyển sang HRM Web | Biểu mẫu native chọn nhánh trực tiếp/yêu cầu/phản hồi, lấy policy, chọn minh chứng theo trường thay đổi và gửi HRM API. Bổ sung lịch sử hồ sơ; xem mẫu yêu cầu ở mục 3 |
| Chương 4 — `Chapter4/section2/ioffice_schedule/index.tex` | Mục tiêu, FR và UC mới chỉ có xem lịch/điểm danh | Thêm `UC-SCH-03` và `FR-SCH-03..07` ở [đặc tả lịch](06B_REQUIREMENT_PACK_SCHEDULE.md), ma trận quyền ba nhánh, lưu/tải tệp/gửi phiếu, quyền xem `TONG_HOP` và thời điểm lời mời |
| Chương 4 — `Chapter4/section1.tex` | Ma trận tác nhân chưa có tạo cuộc họp/lịch sử và phản hồi hồ sơ | Bổ sung thao tác theo quyền thực tế; không gán mặc định quyền tạo/phát hành cho tất cả cán bộ hoặc mọi người có cùng chức danh |
| Chương 5 — `Chapter5/section1.tex`, `section2.tex` | Topology và bảng đóng góp còn Mobile → HRM Web/WebView | Mobile gọi HRM/iOffice REST bằng giao diện native; HRM Web là hệ thống hiện hữu tham chiếu quy tắc, không là UI nhúng. Bổ sung editor/lịch sử native, quyền lịch chờ, lời mời và hoàn thiện đồng bộ role backend |
| Chương 5 — `Chapter5/section3.tex` | Mô hình dữ liệu chưa nối tính năng native mới với hợp đồng API | Giữ thực thể backend nguồn; bổ sung truy vết request/detail/file/log hồ sơ và register/item/assign/file lịch. Không tạo mô hình CSDL mobile mới chỉ vì thêm UI |
| Chương 5 — `Chapter5/section4.tex` | Phần tích hợp chủ yếu giải thích One-Time Ticket SSO và sơ đồ vé | Thay luồng chức năng hiện hành bằng Mobile → HRM policy/API → refresh hồ sơ, và Mobile → iOffice tạo/upload/gửi phiếu. Trình bày `includePending`, phạm vi quyền xem, thông báo sau commit và lỗi từng phần |
| Chương 6 — `Chapter6/section1.tex` | Ảnh/kết quả hồ sơ và lịch chủ yếu phiên bản cũ | Thêm editor native, lịch sử, tạo cuộc họp/chọn thành phần/tệp, nhãn chưa phát hành và điều hướng đúng nghiệp vụ; ảnh phải lấy đúng bản dựng mới và khử định danh |
| Chương 6 — `Chapter6/section2.tex` | Số `371/371`, `59/59`, `4/4` và kết luận WebView là bằng chứng hiện hành | Giữ các số như lịch sử hoặc thay bằng log mới gắn commit/môi trường. Bổ sung phạm vi test mới; không cộng kết quả audit nhiều thời điểm thành tổng HEAD |
| Chương 7 — `Chapter7/section1.tex` | Tổng kết tái sử dụng web, lỗi chọn tệp WebView và hướng phát triển hoàn thiện WebView | Tổng kết giao diện native, lịch sử hồ sơ và tạo lịch. Thay giới hạn bằng độ bao phủ trường native, E2E nộp/duyệt, thử lại sau mất phản hồi, giao nhận lời mời và nền tảng chưa kiểm chứng |

## 3. Đoạn và yêu cầu đề xuất để dùng khi viết lại

### Định vị ứng dụng — Chương 1 và Chương 5

> MyHCMUT Mobile cung cấp các giao diện Flutter native cho những tác vụ nhân sự và văn phòng số thuộc phạm vi đề tài. Ứng dụng trao đổi dữ liệu với các hệ thống HRM và iOffice thông qua API, trong khi quyền truy cập, quy trình xử lý và dữ liệu chính thức tiếp tục được quản lý tại backend nguồn. Người dùng có thể cập nhật hồ sơ theo chính sách từng trường, gửi đề xuất hoặc phản hồi, theo dõi lịch sử hồ sơ và tạo cuộc họp từ lịch tổng hợp theo quyền được cấp.

### Hồ sơ cá nhân — thay `FR-PRO-02`

> **FR-PRO-02 — Cập nhật hồ sơ native:** Người dùng chọn nhóm thông tin và thao tác phù hợp trên biểu mẫu Flutter. Ứng dụng lấy chính sách từ HRM để xác định trường được cập nhật trực tiếp, trường cần đề xuất và yêu cầu minh chứng; HRM kiểm tra lại quyền, dữ liệu và thực hiện xử lý theo quy tắc của từng endpoint.

Mã đã chốt khi thực hiện: `FR-PRO-04` **Gửi phản hồi hồ sơ** và `FR-PRO-05` **Xem lịch sử hồ sơ**; tương ứng `UC-PRO-04/05`. Mã đề xuất ban đầu được đồng bộ lại theo bảng hiện hành. Phản hồi phải có nội dung và tệp, không tự áp dụng dữ liệu vào hồ sơ. Lịch sử đọc yêu cầu/nhật ký từ backend và trình bày trạng thái, thời điểm, người xử lý, nội dung thay đổi theo dữ liệu trả về.

Khi viết UC/sequence hồ sơ, dùng chuỗi: chọn thao tác → chọn nhóm → tải policy/dữ liệu → nhập form native → kiểm tra field thay đổi/minh chứng → gửi API → backend cập nhật trực tiếp hoặc lưu yêu cầu → làm mới hồ sơ/danh sách duyệt và tải lịch sử khi mở màn hình. Gia đình và các editor chuyên biệt có hợp đồng riêng; không mô tả mọi nhóm đều dùng một policy và cùng bắt buộc tệp.

### Tạo cuộc họp — Chương 4 và Chương 6

> Từ lịch tổng hợp, người dùng có quyền có thể mở biểu mẫu native để tạo cuộc họp, chọn thành phần chủ trì, tham dự và thư ký, nhập thời gian, địa điểm, ghi chú và đính kèm tài liệu. Ứng dụng hỗ trợ lịch đơn vị, gửi phiếu đăng ký lịch Trường và tạo trực tiếp lịch Trường theo quyền tương ứng. Lịch Trường tạo trực tiếp được lưu ở bước tổng hợp; việc lưu không tự phát hành lịch chính thức. Người tạo và thành phần liên quan được xem lịch chưa phát hành theo kiểm tra quyền của iOffice.

### Tích hợp và độ tin cậy — Chương 5

> Sau khi lưu thành công một mục lịch và nhận định danh, ứng dụng tải các tệp đính kèm; với phiếu đăng ký lịch Trường, ứng dụng gửi phiếu sau khi hoàn tất các bước trước. Nếu một bước tiếp theo lỗi, ứng dụng giữ các định danh đã nhận và tệp đã tải trong phiên biểu mẫu để thử lại. Cơ chế này không tạo một transaction chung cho toàn bộ yêu cầu mạng và chưa bảo đảm chống trùng khi backend đã commit nhưng phản hồi tạo mới bị mất.

> iOffice bổ sung lịch Trường đang tổng hợp vào lịch cá nhân khi ứng dụng yêu cầu và người đăng nhập là người tạo hoặc thành phần được mời. Việc mời cả đơn vị được kiểm tra riêng với việc mời đích danh. Bản demo bổ sung gửi lời mời ngay sau tạo trực tiếp ở bước tổng hợp và commit thành công, qua API chung cho mobile/web. Đây là điều chỉnh phục vụ trình diễn, khác thời điểm phát hành theo nghiệp vụ. Luồng phát hành vẫn gửi thông báo nên người nhận có thể nhận thêm lần nữa. Việc gửi sớm xảy ra trước upload tệp riêng của mobile. Khi lịch chuyển sang hoàn thành, backend vẫn chỉ gọi gửi lời mời sau khi giao dịch commit thành công; người nhận được khử trùng từ các phân công có SHCC và tài khoản đang hoạt động. Cơ chế gửi này chưa bảo đảm phát lại bền vững nếu tiến trình dừng hoặc dịch vụ thông báo lỗi.

### Quản lý phiên — Chương 3/5

> Ứng dụng lưu dữ liệu người dùng xác thực trong bộ nhớ cục bộ và kiểm tra lại qua `/api/state`. Khi gặp lỗi mạng hoặc lỗi không phải 401, ứng dụng có thể dùng dữ liệu đã lưu để duy trì trạng thái hiển thị. Khi nhận 401, thiếu token hoặc đăng xuất, dữ liệu phiên liên quan được xóa. Cache không thay thế kiểm tra quyền tại backend; phiên bản hiện hành không tự refresh token và phát lại mọi request bị 401.

### Tổng kết và giới hạn — Chương 7

> Phiên bản hiện tại mở rộng giao diện native cho chỉnh sửa và theo dõi lịch sử hồ sơ, đồng thời hỗ trợ tạo cuộc họp từ lịch tổng hợp và hiển thị lịch chưa phát hành theo quyền. Mức hoàn thiện cần được đánh giá riêng theo phạm vi field/editor, các nhánh quy trình và bằng chứng trên thiết bị. Các nội dung cần tiếp tục kiểm chứng gồm nộp hồ sơ native kèm minh chứng và đối chiếu sau duyệt, tạo/gửi phiếu lịch qua đầy đủ các bước, giao nhận lời mời trên nhiều thiết bị/vai trò và khi phát hành (đã quan sát push tổng hợp trên một Android), phục hồi sau gián đoạn và vận hành trên iOS.

## 4. Hình và bảng cần làm lại khi sửa báo cáo

| Hiện có | Hướng chỉnh |
| --- | --- |
| Topology có Mobile → HRM Web; hình sequence SSO ticket | Topology native Mobile → HRM/iOffice; sequence policy/gửi hồ sơ và sequence lưu lịch/upload/gửi phiếu |
| Use case và activity hồ sơ | Thêm phản hồi/lịch sử, thay bước mở web bằng nhập form native |
| Use case lịch chỉ xem/điểm danh | Thêm tạo/đăng ký cuộc họp và quan hệ tới chọn thành phần/tệp; không đưa phát hành mobile vào sơ đồ |
| Bảng đóng góp thành phần | Ghi editor/lịch sử/lịch-create Flutter; backend quyền chờ/lời mời/role sync; phân biệt backend hiện hữu và phần chỉnh sửa |
| Bảng kiểm thử và ảnh Chương 6 | Tách baseline lịch sử và bản dựng mới; thêm ảnh native, trạng thái chờ, lỗi upload/thử lại và test quyền người ngoài |

## 5. Bằng chứng cần bổ sung trước khi kết luận mới

1. Hồ sơ native: trực tiếp/yêu cầu/phản hồi, chính sách theo vai trò, lý do/tệp, đọc lại hồ sơ/lịch sử sau xử lý. Test liên quan ở `modules/hrm/test/profile/`, gồm policy, branches, navigation, submission refresh và history.
2. Lịch: ba nhánh tạo, quyền upload, thời gian không hợp lệ, upload lỗi/thử lại, người tạo/người được mời/người ngoài và `TONG_HOP` so với `HOAN_THANH`.
3. Thông báo: đã có [minh chứng nhận push Android](chapter6-7-evidence/12_school_schedule_push_device_verification.md) ở tổng hợp và test backend commit/rollback. Bổ sung nhận nhiều tài khoản/vai trò, phát hành thật và iOS; bấm push hiện mở Lịch biểu, không mô tả là mở thẳng chi tiết cuộc họp.
4. Auth: khởi động lại với token/cache, lỗi mạng/non-401, 401, logout/đổi tài khoản và điều hướng splash. Không xem cache còn hiển thị là bằng chứng phiên server vẫn hợp lệ.
5. Văn bản/nhiệm vụ/đơn từ: dùng các test hồi quy mới để xác định phạm vi bảo vệ; cập nhật kết quả bằng log đúng commit, không suy từ tên test rằng toàn bộ hệ thống đã E2E.

**Cách dùng tài liệu cũ:** Các biên bản WebView ngày 22–24/09 và Gate 0 giữ giá trị lịch sử. Không đưa chúng làm kết quả hồ sơ native mới. `06_REQUIREMENT_PACK_SSO.md` lưu thiết kế trước đây; không dùng cầu nối WebView làm đóng góp chính của bản báo cáo viết lại. Mã WebView còn sót trong repository là thông tin kỹ thuật ở snapshot, không làm căn cứ để đưa lại luồng WebView vào phạm vi chức năng.

## 6. Đoạn kết quả thông báo đề xuất cho Chương 6

> Trên thiết bị Android 12 (RMX2151), nhóm đã thực hiện request tạo lịch Trường trực tiếp bằng API thật, dùng phiên đăng nhập của ứng dụng. Hai lịch demo vẫn ở bước tổng hợp và phát sinh thông báo sau lưu thành công. Điện thoại nhận được lời mời khi ứng dụng đang mở và khi chạy nền; thao tác bấm thông báo mở màn hình Lịch biểu. Kiểm chứng này xác nhận khả năng chuyển phát trong cấu hình demo đã dùng, không chứng minh mọi thiết bị luôn nhận, điều hướng thẳng vào chi tiết hay nghiệm thu đầy đủ biểu mẫu tạo lịch kèm tệp.

Nguồn: [biên bản thiết bị và ảnh](chapter6-7-evidence/12_school_schedule_push_device_verification.md). Mô tả việc đồng bộ token hai backend và xử lý lỗi khóa Firebase ở Chương 5; không đưa khóa/token hoặc định danh nhân sự vào báo cáo.

## 7. Đối chiếu báo cáo sau merge `fix-v2`

**Mốc báo cáo đã kiểm tra:** `main:ff762524af3d24caaca1c7455bd8a76bf3fdcb7a`, gồm `fix-v2:06bfc73`. Theo lựa chọn của người dùng, lượt này chỉ lập danh sách chỉnh sửa; chưa sửa LaTeX, Mermaid, ảnh hay PDF. Quy ước được người dùng xác nhận: tác nhân chung là **Nhân sự**; chức năng hiện tại dùng giao diện Flutter native, không đưa WebView trở lại phạm vi đồ án.

**Phạm vi bằng chứng:** đọc các chương và chuỗi `\input`, đối chiếu tài liệu hiện hành trong repo, xem trực tiếp các ảnh sequence, activity, use case, kiến trúc và hai hình lược đồ địa chỉ/gia đình. Không chạy lại ứng dụng/backend, kiểm thử nghiệp vụ hoặc build/render `main.pdf` trong lượt này. Kết quả về hiện thực dựa trên snapshot và biên bản được dẫn; các mâu thuẫn chưa được giải quyết được ghi riêng.

### 7.1. Kết luận và nguồn đối chiếu

Cả bảy chương đều có nội dung cần điều chỉnh, nhưng mức độ khác nhau: Chương 1–3 sửa định vị/công nghệ; Chương 4–5 sửa đặc tả và thiết kế; Chương 6–7 sửa kết quả, giới hạn và hướng phát triển. Thay tên tác nhân hoặc xóa riêng chữ “WebView” chưa đủ: các đoạn “chuyển tiếp phiên”, “tái sử dụng biểu mẫu Web”, ảnh cũ, FR/UC và kết quả kiểm thử phải cùng phản ánh phạm vi native.

Nguồn chính để thực hiện danh sách dưới đây:

- [Snapshot hiện hành](13_CURRENT_SOURCE_SNAPSHOT.md): hồ sơ native, lịch tạo mới, phiên đăng nhập và giới hạn kiểm chứng.
- [Đặc tả hồ sơ](03_REQUIREMENT_PACK_PROFILE.md), mục 1.2: trực tiếp/yêu cầu/phản hồi/lịch sử; phạm vi editor và policy.
- [Đặc tả lịch](06B_REQUIREMENT_PACK_SCHEDULE.md): ba nhánh tạo lịch, quyền, trạng thái, upload/thử lại và lời mời demo.
- [Biên bản push Android](chapter6-7-evidence/12_school_schedule_push_device_verification.md): kết quả mới có thể đưa vào Chương 6.
- [Quản trị tài liệu](DOCUMENTATION_GOVERNANCE.md): ưu tiên nguồn mới; pack SSO và kết quả WebView là lịch sử.

### 7.2. P0 — các hình sequence chưa đồng bộ với nguồn

| Hình báo cáo đang nạp | Phát hiện đã kiểm tra | Chỉnh sửa cần làm |
| --- | --- | --- |
| [Sequence hồ sơ PNG](../image/uml/seq_profile_request.png), nạp tại [đặc tả hồ sơ](../Chapter4/section2/profile/index.tex) | PNG vẫn ghi “Cán bộ/Giảng viên” và “Chuyên viên TCCB”; [nguồn Mermaid](../image/uml/seq_profile_request.mmd) đã ghi “Nhân sự” và “Chuyên viên TCNS”. Nguồn và ảnh đều còn luồng mở biểu mẫu qua SSO | Viết lại luồng native rồi xuất lại PNG; thống nhất tác nhân chung “Nhân sự” và vai trò xử lý “Chuyên viên TCNS” |
| [Sequence nghỉ phép PNG](../image/uml/seq_leave_submit.png), nạp tại [đặc tả nghỉ phép](../Chapter4/section2/leave/index.tex) | PNG vẫn ghi “Cán bộ/Giảng viên”; [Mermaid](../image/uml/seq_leave_submit.mmd) đã đổi sang “Nhân sự” | Xuất lại PNG từ nguồn đã đổi và kiểm tra hình được nạp |
| [Sequence công tác PNG](../image/uml/seq_trip_submit.png), nạp tại [đặc tả công tác có hiệu lực](../Chapter4/section2/hrm/business_trip.tex) | PNG vẫn ghi “Cán bộ/Giảng viên”; [Mermaid](../image/uml/seq_trip_submit.mmd) đã đổi sang “Nhân sự” | Xuất lại PNG; rà lại cùng tên tác nhân trong mô tả UC |
| [Sequence điểm danh](../image/uml/seq_attendance.png) và [Mermaid](../image/uml/seq_attendance.mmd) | Cả hai dùng “Đại biểu cuộc họp”, chưa theo quy ước tác nhân chung mới | Dùng “Nhân sự”; giữ điều kiện người tham dự/quyền/khung giờ trong mô tả và nhánh xử lý |

**Nguyên nhân:** diff `fix-v2` sửa ba tệp `.mmd` nhưng không cập nhật ba ảnh `.png`. LaTeX dùng `\includegraphics` để nạp PNG, nên thay Mermaid không tự đổi hình báo cáo.

Sequence hồ sơ cần thể hiện: Nhân sự → Mobile chọn thao tác/nhóm → tải dữ liệu và policy HRM → nhập biểu mẫu native/minh chứng → Mobile gửi HRM API → backend kiểm tra và cập nhật/lưu yêu cầu → Mobile làm mới dữ liệu. Nhánh phản hồi không tự ghi vào hồ sơ. Không để người dùng gửi trực tiếp tới HRM thay cho Mobile, hoặc biểu diễn CSDL là thành phần quyết định quyền nghiệp vụ. Đặc tả hiện tại cho phép xử lý trực tiếp và đề xuất trên các trường khác nhau trong cùng lần cập nhật; khi thiết kế lại phải tránh diễn đạt `alt` như hai kết quả luôn loại trừ nhau trên toàn phiếu.

Tên tác nhân còn cần đồng bộ trong [activity hồ sơ](../image/uml/profile_activity.png), [activity nghỉ phép](../image/uml/leave_activity.png), [activity công tác](../image/uml/bt_activity.png), [use case tổng thể](../image/usecase/UC-TQ.drawio.png) và [kiến trúc tổng thể](../image/architecture/architecture_overall.png). Các hình này vẫn có nhãn “Cán bộ” hoặc “Cán bộ/Giảng viên”. Giữ tên vai trò chuyên môn khi cần phân quyền; giữ “Giảng viên hướng dẫn” và thống kê giảng viên trong bối cảnh, vì chúng không phải tên tác nhân ứng dụng.

### 7.3. Danh sách chỉnh sửa theo chương

P0: mâu thuẫn phạm vi hiện tại hoặc làm báo cáo thể hiện sai chức năng. P1: bổ sung thiết kế/bằng chứng, đồng bộ thuật ngữ và xử lý mâu thuẫn tài liệu. P2: chỉnh cách trình bày.

| Chương / vị trí | Ưu tiên | Hiện tại | Hướng chỉnh và căn cứ |
| --- | --- | --- | --- |
| 1 — [section1.tex](../Chapter1/section1.tex), bài toán kỹ thuật, mục tiêu và dòng 81 | P0 | Còn tái sử dụng chức năng Web, chuyển tiếp giao diện và truy cập qua WebView | Định vị giao diện Flutter native gọi HRM/iOffice API; giữ backend sở hữu dữ liệu, quyền và quy trình |
| 1 — phạm vi hồ sơ/lịch và bảng đóng góp | P1 | Hồ sơ chưa nêu phản hồi/lịch sử; lịch mới xem tổng hợp/điểm danh | Bổ sung hồ sơ native và tạo/đăng ký cuộc họp theo quyền. Đối chiếu phân công thành viên trước khi ghi đóng góp mới; không tự suy từ tính năng ra tác giả |
| 2 — [section1.tex](../Chapter2/section1.tex), dòng 152 và 170 | P0 | Bảng so sánh còn chuyển tiếp phiên khi tái sử dụng Web; định hướng còn tái sử dụng chức năng Web | Thay bằng tích hợp xác thực/API và giao diện native. Giữ khảo sát HRM/iOffice Web vì đây là hệ thống nguồn; không cần viết lại toàn bộ chương |
| 2 — dòng 37 | P1 | Nói mobile hỗ trợ nộp báo cáo tiến độ | Mâu thuẫn với Chương 1 và Chương 6: phạm vi chỉ xem tiến độ/báo cáo đã có; nộp báo cáo ở iOffice Web. Đồng bộ theo phạm vi đang được đặc tả, không tự thêm chức năng |
| 3 — [section1.tex](../Chapter3/section1.tex), đoạn cuối JWT | P0 | Dẫn tới chuyển tiếp phiên sang Web ở Chương 5 | Dẫn tới xác thực API, quản lý phiên và xử lý lỗi trong luồng native |
| 3 — [section2.tex](../Chapter3/section2.tex), dòng 35 và mục từ dòng 102 | P0 | WebView nằm trong công nghệ tích hợp chính, có dòng `flutter_inappwebview` và lý do tái sử dụng biểu mẫu | Bỏ khỏi công nghệ của chức năng hiện hành; thay phần giải thích bằng biểu mẫu Flutter, validation, chọn danh mục/tệp và trạng thái tải/lỗi. Giữ FCM, Socket.IO và thư viện dữ liệu theo vai trò thực tế |
| 3 — [section3.tex](../Chapter3/section3.tex), dòng 11 | P0 | Redis được biện minh bằng vé SSO Mobile → Web | Bỏ lý do SSO khỏi phạm vi chức năng. Chỉ giữ mô tả Redis như hạ tầng backend nếu còn căn cứ cho vai trò đang trình bày |
| 3 — lưu cục bộ và phiên | P1 | Chưa phản ánh AuthUser cache và xử lý `/api/state` mới | Bổ sung cache khi lỗi mạng/non-401, xóa khi 401/thiếu token/logout; không mô tả tự refresh và replay mọi request |
| 3 — mục TypeScript, dòng 39 | P2 | Nhãn “Non-blocking I/O” đứng trước nội dung Interface/Class/Generics | Sửa nhãn để khớp nội dung. Là lỗi biên tập riêng, không cần đổi kiến trúc |
| 4 — [section1.tex](../Chapter4/section1.tex), ma trận tác nhân và tổng thể | P1 | Chưa có phản hồi/lịch sử hồ sơ và tạo cuộc họp | Bổ sung phạm vi theo quyền tài khoản; cập nhật use case tổng thể. Không gán quyền tạo/phát hành mặc định theo chức danh |
| 4 — [profile/index.tex](../Chapter4/section2/profile/index.tex), `FR-PRO-02`, bước 2 `UC-PRO-02`, phần sequence | P0 | Yêu cầu chuyển sang HRM Web không đăng nhập lại | Đổi thành form native lấy policy, nhập trường thực sự đổi và minh chứng theo endpoint/policy; HRM kiểm tra lại |
| 4 — bảng FR/UC hồ sơ và hình `UC_PROFILE.png` | P1 | Bảng chỉ có `FR-PRO-01..03`/`UC-PRO-01..03`; hình use case đã có “Gửi phản hồi” nhưng văn bản chưa đặc tả nhánh này; chưa có lịch sử | Bổ sung yêu cầu/UC hoặc luồng rõ ràng cho phản hồi và lịch sử. Mã `FR-PRO-04/05` ở mục 3 vẫn là đề xuất; lập mapping FR–UC trước khi chốt mã |
| 4 — [ioffice_schedule/index.tex](../Chapter4/section2/ioffice_schedule/index.tex), bảng FR/UC và `UC_IOFF.png` | P0 | Lịch chỉ có xem/điểm danh; còn “Nhân sự, Giảng viên” và “Nhân sự / Giảng viên” | Thống nhất “Nhân sự”; thêm `UC-SCH-03` và `FR-SCH-03..07` theo pack lịch, cùng quyền ba nhánh, thành phần/tệp, lịch `TONG_HOP` và điều hướng đúng nghiệp vụ |
| 4 — [section2/index.tex](../Chapter4/section2/index.tex), bảng phạm vi | P1 | Chỉ tóm tắt cập nhật hồ sơ và xem lịch/điểm danh | Đồng bộ bảng phạm vi sau khi bổ sung hồ sơ và tạo lịch; sửa cả hình use case/activity/sequence liên quan |
| 5 — [section1.tex](../Chapter5/section1.tex) và `architecture_overall.png` | P0 | Có WebView tích hợp, Mobile → HRM Web, vé SSO và Redis cho phiên Web | Làm lại topology chức năng native Mobile → Auth/HRM/iOffice; đổi nhãn người dùng thành “Nhân sự”. Giữ HRM Web như hệ thống nguồn/quản trị nếu cần, không nối như màn hình nhúng |
| 5 — [section2.tex](../Chapter5/section2.tex), mô tả backend và bảng `component_ownership_scope` | P0 | Mobile có WebView; HRM Web được ghi “không viết lại biểu mẫu bằng Flutter”; đóng góp backend còn tập trung SSO | Thay bằng editor/lịch sử/create lịch native; HRM policy/API và bảo toàn quyền thủ công; iOffice lịch chờ/lời mời/đăng ký thiết bị. Phân biệt phần kế thừa và phần bổ sung theo snapshot |
| 5 — [section3.tex](../Chapter5/section3.tex), mô hình hồ sơ/lịch | P1 | Có request/detail/file nhưng chưa nối tới phản hồi/lịch sử; lịch chưa giải thích đủ register/item/assign/file của luồng tạo mới | Bổ sung truy vết API–thực thể cho các tính năng native; không tạo CSDL mobile nghiệp vụ mới, không suy liên kết logic thành FK vật lý |
| 5 — [section4.tex](../Chapter5/section4.tex), mục chuyển tiếp HRM Web và `chapter5-sso-flow.png` | P0 | Toàn mục mô tả generate/consume ticket, Redis GETDEL, URL ticket và WebView | Thay bằng sequence cập nhật hồ sơ native và tạo/upload/gửi phiếu lịch. Phân biệt lưu, gửi tiếp nhận, tổng hợp, phát hành; trình bày lỗi từng phần/thử lại |
| 5 — thông báo và phiên ở section4 | P1 | Chưa có đồng bộ FCM token HRM/iOffice và ranh giới lời mời demo | Bổ sung đăng ký hai backend, lời mời sau commit ở `TONG_HOP` khi tạo trực tiếp để demo, lời mời khi phát hành; bấm push lịch hiện mở Lịch biểu. Không khẳng định mọi luồng dùng outbox hoặc chống trùng tuyệt đối |
| 6 — [section1.tex](../Chapter6/section1.tex), dòng 4 và 40–46 | P0 | Kết quả/ảnh hồ sơ vẫn là HRM Web trong WebView | Thay mô tả và ảnh bằng editor native, phản hồi và lịch sử đúng bản dựng; lấy ảnh thật đã khử định danh, không đổi caption ảnh Web thành native |
| 6 — phần lịch và thông báo | P1 | Chưa trình bày tạo/đăng ký cuộc họp, chọn thành phần/tệp và kết quả push mới | Thêm kết quả có bằng chứng; dùng biên bản push 01/10. Ghi rõ một Android, foreground/background, tạo bằng API thật và bấm mở Lịch biểu; không biến thành nghiệm thu đầy đủ form mobile hoặc iOS |
| 6 — [section2.tex](../Chapter6/section2.tex), bảng tự động | P1 | Có 371/371 mobile, 59/59 HRM, 4/4 iOffice nhưng chưa gắn mốc phiên bản trong bảng | Gắn ngày/commit/phạm vi các lượt cũ hoặc dùng log mới. 47/47 iOffice và 64/64 notification có biên bản 01/10; số notification không phải tổng mobile. Không cộng các lượt thành tổng HEAD |
| 6 — bảng luồng tích hợp và đoạn giới hạn hồ sơ | P0 | Lỗi chọn tệp WebView được trình bày như hạn chế phiên bản hiện tại | Chuyển thành kết quả lịch sử nếu cần lưu; với phạm vi mới ghi mức đã kiểm chứng của nộp hồ sơ native. Chưa có log E2E mới thì ghi chưa kiểm chứng, không đổi kết quả web cũ thành pass native |
| 7 — [section1.tex](../Chapter7/section1.tex), dòng 6, 19 và 30 | P0 | Kết quả tái sử dụng Web; hạn chế/hướng phát triển hoàn thiện tải tệp WebView | Tổng kết native/lịch sử/tạo lịch; thay hạn chế bằng editor chưa bao phủ toàn bộ trường, kiểm thử native, upload/thử lại, giao nhận push và iOS |
| 7 — định hướng phạm vi và kiểm thử | P1 | Chưa nối tới giới hạn của luồng tạo lịch mới | Thêm thử lại khi mất phản hồi tạo, kiểm chứng nhiều quyền/thiết bị và phát hành thật. Giữ giới hạn chưa đo hiệu năng/chưa khảo sát người dùng |

### 7.4. Mâu thuẫn và nội dung chưa đủ căn cứ để tự sửa

1. **Nghỉ phép khi duyệt cuối đồng thời:** `BR-LEV-11` trong [pack nghỉ phép](04_REQUIREMENT_PACK_LEAVE.md) khẳng định `FOR UPDATE` ngăn số dư âm, nhưng [biên bản 24/09](chapter6-7-evidence/10_e2e_audit_20260924.md) chưa xác nhận đã xử lý bất thường `LEV-05`; Chương 6–7 vẫn ghi lỗi. Khóa chống trùng lịch khi tạo/sửa và kiểm tra quỹ phép ở bước duyệt cuối là các đường xử lý khác nhau. Cần đối chiếu đúng backend/procedure và chạy lại kịch bản trên phiên bản chốt trước khi kết luận đã sửa; không xóa hạn chế chỉ vì tài liệu cũ nói “an toàn”.
2. **Tài liệu hồ sơ vẫn có đoạn cũ:** phần 1.2 của pack hồ sơ và snapshot xác định native, nhưng các mục lịch sử còn mô tả cũ và chỉ số chưa gắn phép đo hiện hành. Dùng snapshot/đoạn cập nhật làm chuẩn; không sao chép toàn pack như mô tả hiện trạng.
3. **Mã công tác trong tài liệu truy vết:** [section2/index.tex](../Chapter4/section2/index.tex) nạp `hrm/business_trip.tex` với `UC-BT`, không nạp `business_trip/index.tex` với `UC-BTR`. [Ma trận kiểm chứng](chapter6-7-evidence/01_uc_fr_implementation_matrix.md) đã ghi đúng tệp có hiệu lực ở đầu nhưng bảng xung đột phía cuối vẫn gọi bản `UC-BTR` là hiện hành. Cần đồng bộ ma trận theo tệp thực sự được nạp; tương tự `ioffice/incomming_docs.tex` không phải đặc tả đang vào báo cáo.
4. **Từ điển mới chưa hiển thị trong báo cáo:** `profile_addess.tex` và `profile_family.tex` có nội dung, nhưng không có `\input` trong chuỗi báo cáo; `profile_qtct.tex` rỗng. Đây là phần còn dang dở sau `fix-v2`, chưa phải bảng đã có trong PDF. Nếu cần các bảng này, sửa nội dung rồi mới nạp; nếu chỉ giữ lược đồ, xác định rõ giới hạn từ điển rút gọn.
5. **Từ điển và hình lược đồ không khớp:** [profile_family.tex](../Chapter5/data_dictionary/profile_family.tex) ghi tên bảng `tcns_ly_lich_cong_tac`, mô tả ID là “địa chỉ”, `ho_ten`/`nghe_nghiep` là `varchar(5)`; [hình gia đình](../image/erd/erd-llgd.png) ghi `tcns_ly_lich_gia_dinh`, `varchar(200)`/`varchar(1000)`, hai trường địa chỉ mới là `jsonb`. [profile_addess.tex](../Chapter5/data_dictionary/profile_addess.tex) ghi `son_ha` và `xa_phuong` kiểu `text`, trong khi [hình địa chỉ](../image/erd/erd-lldc.png) ghi `so_nha` và `varchar(5)`. Hình và từ điển là hai nguồn tài liệu đang mâu thuẫn; phải xác nhận schema nguồn rồi đồng bộ, không tự chọn hình là CSDL hiện hành. Cả hai bảng mới còn mô tả SHCC “liên kết đến quy trình”, cần sửa nghĩa thành liên kết nhân sự/hồ sơ sau đối chiếu.

### 7.5. Nội dung ngoài các chương và việc đã đúng

- [Tóm tắt](../abstraction/main.tex) còn câu tái sử dụng chức năng Web; [README](../README.md) còn “Xác thực và SSO”, chuyển WebView bằng vé dùng một lần và “Hồ sơ cán bộ”. Đồng bộ chúng khi sửa báo cáo.
- Các tài liệu/biên bản lịch sử có WebView vẫn có giá trị truy vết. Không xóa bằng chứng cũ hoặc đổi kết quả kiểm thử của phiên bản cũ; gắn rõ lịch sử và tránh dùng làm căn cứ nghiệm thu native.
- Giữ quy tắc backend quyết định quyền và dữ liệu; giữ phân biệt cache với dữ liệu chính thức, xem offline với ghi offline; giữ giới hạn chưa kiểm chứng iOS/chưa có phép đo hiệu năng.
- Nghỉ phép hiện đã ghi biểu mẫu **3 bước** ở Chương 4 và 6; không đưa lại mục “sửa wizard 4 thành 3 bước” từ backlog cũ.
- `Chapter4/section2/index.tex` hiện nạp bốn nhóm nghiệp vụ và không nạp phân hệ KHCN; không đưa việc bỏ phân hệ KHCN vào danh sách việc chưa làm. Vai trò Phòng KHCN trong một nhánh duyệt công tác là vai trò nghiệp vụ, khác một phân hệ KHCN độc lập.

### 7.6. Thứ tự sửa và kiểm tra khi thực hiện

1. Chốt FR/UC hồ sơ native và tạo lịch ở Chương 4; đồng bộ tên tác nhân, quyền và phạm vi Chương 1–2.
2. Sửa thiết kế Chương 5 và công nghệ Chương 3; viết lại sequence hồ sơ, xuất lại PNG và các hình liên quan. Nạp đúng ảnh mới vào LaTeX.
3. Cập nhật Chương 6 bằng log/ảnh đúng phiên bản, rồi viết lại kết luận Chương 7 và tóm tắt. Giải quyết mâu thuẫn schema/tài liệu truy vết riêng theo nguồn có thẩm quyền.
4. Khi có sửa LaTeX/hình: build đầy đủ, kiểm tra nhãn/tham chiếu/citation, xem trực tiếp các trang hình/bảng; rà cả mô tả ngầm của WebView, không chỉ tìm từ khóa. Lượt đối chiếu này chưa thực hiện các bước biên tập/build đó.

## 8. Bổ sung tạo lịch họp của chuyên viên BGH — đối chiếu trực tiếp codebase

### 8.1. Mốc và kết luận

Đã đọc mã hiện hành và diff các commit liên quan ở local: mobile `61722ad` (sạch), iOffice `4ca9249` (còn cấu hình `.env.local` và `AGENTS.md` local), HRM `250274c` (còn `.env.local`) và Auth/myhcmut-be `7e687a6` (còn cấu hình local). Các HEAD mobile/iOffice/HRM trùng snapshot đã có; yêu cầu mới ở lượt này làm rõ **chuyên viên BGH là người thực hiện tạo lịch**, không chứng minh có một commit mới hơn snapshot. Không sao chép giá trị cấu hình/secrets vào báo cáo.

GitNexus được dùng để tìm và xem context `ScheduleCreate` ở mobile. Chỉ mục mobile chậm hai commit và không có chỉ mục iOffice, nên kết luận bên dưới được xác nhận trực tiếp từ source/diff hiện hành, không dựa vào việc đồ thị thiếu caller. Không sửa mã nguồn ứng dụng hoặc backend.

**Đoạn định vị đề xuất:**

> Chuyên viên Ban Giám hiệu được cấp quyền có thể tạo trực tiếp lịch họp cấp Trường từ màn hình Lịch biểu trên MyHCMUT Mobile. Người tạo nhập nội dung, thời gian, địa điểm, lựa chọn chủ trì, thành phần tham dự, thư ký và tài liệu đính kèm bằng biểu mẫu Flutter. iOffice ghi nhận lịch ở bước tổng hợp, xác định người tạo theo phiên đăng nhập và tiếp tục quản lý quyền truy cập, quy trình phát hành và dữ liệu lịch. Thao tác tạo lịch trên mobile không tự phát hành lịch chính thức.

**Điểm phải giữ đúng:** mã kiểm tra permission, không kiểm tra riêng chức danh “chuyên viên BGH” tại endpoint tạo trực tiếp. Vì vậy, viết tác nhân nghiệp vụ là chuyên viên BGH **được cấp quyền**; không viết “chỉ chuyên viên BGH có thể tạo” nếu chưa có bằng chứng cấu hình quyền và kiểm thử tài khoản. Chú thích UI “Thư ký VP.BGH” cũng không phải ràng buộc phân quyền.

### 8.2. Truy vết luồng đã có trong mã

| Điểm kiểm tra | Source hiện hành | Nội dung có căn cứ để viết |
| --- | --- | --- |
| Điểm vào và lựa chọn tạo | [schedule_view.dart](../../myhcmut-mobile/modules/ioffice/lib/src/schedule/pages/schedule_view.dart), dòng 750–895 | Nút Tạo lịch cần `scheduleGeneral:read`; menu đơn vị, phiếu Trường và trực tiếp Trường. Nhánh trực tiếp hiển thị khi có `scheduleGeneral:write`, chọn `TRUONG_DIRECT` |
| Biểu mẫu native | [schedule_create_page.dart](../../myhcmut-mobile/modules/ioffice/lib/src/schedule/pages/schedule_create_page.dart), `_submit`, `build` và `_QuickAddAssignSheet` | Nhập tiêu đề, loại lịch, thời gian/cả ngày, địa điểm/ghi chú; tìm nhân sự theo tên, chọn mã do backend trả về cho chủ trì/tham dự/thư ký; chọn tệp theo quyền upload. Kiểm tra form và giờ kết thúc sau giờ bắt đầu ở client |
| Lưu và thử lại | [schedule_create_provider.dart](../../myhcmut-mobile/modules/ioffice/lib/src/schedule/providers/schedule_create_provider.dart), `createGeneral`, `_create`, `_uploadFiles`, `_run` | Gọi `POST /api/schedule/general-item/general/create`, nhận ID rồi upload `/api/schedule/general-files/general/upload`. Lưu ID và tệp đã upload trong phiên form, thử lại bằng cập nhật cùng mục; chặn gửi đồng thời |
| Quyền và trạng thái backend | [schedule-general-item.js](../../ioffice-be/modules/md-schedule/schedule-general/controller/schedule-general-item.js), dòng 471 và `generalItemCreate` dòng 530 | Endpoint kiểm tra `scheduleGeneral:write`; lấy `req.session.schedule`, ép `cap=TRUONG`, chọn quy trình đang hoạt động và bước `TONG_HOP`. Người tạo `shcc`/đơn vị được backend lấy từ phiên, có nhật ký tạo |
| Thành phần | [scheduleGeneralAssign.js](../../ioffice-be/modules/md-schedule/schedule-general/model/scheduleGeneralAssign.js), `updateAssignList` | Lưu phân công trong transaction; với lịch Trường, kiểm tra có thành phần thuộc các đơn vị `01`/`87`/`14`. Cần đối chiếu danh mục trước khi ghi tên đơn vị trong báo cáo; không mô tả mọi danh sách tùy ý đều được chấp nhận |
| Xem lịch trước phát hành | [schedule.dart](../../myhcmut-mobile/modules/ioffice/lib/src/schedule/providers/schedule.dart) và [scheduleGeneralItem.js](../../ioffice-be/modules/md-schedule/schedule-general/model/scheduleGeneralItem.js), `canViewPending`, `getPendingForUser` | Mobile tải `includePending=true`; quyền xem `TRUONG/TONG_HOP` theo người tạo, người được mời hoặc thành viên đơn vị được mời. Mời đích danh không mở lịch cho toàn bộ đồng nghiệp |
| Lời mời | Controller tạo trực tiếp và model trên, `notifyParticipants`, `sendInvitations` | Commit `96b21cf` gửi lời mời demo ngay sau lưu/commit ở tổng hợp. Khử trùng SHCC, ánh xạ tài khoản hoạt động; slot chỉ có đơn vị không tự mở rộng thành danh sách nhận push. Phát hành vẫn gửi theo luồng riêng |

**Phân biệt ba nhánh:** `DON_VI` tạo nội bộ theo `scheduleGeneral:read`; `TRUONG` gửi phiếu theo `scheduleRegister:write`; `TRUONG_DIRECT` tạo trực tiếp theo `scheduleGeneral:write`. `TRUONG_DIRECT` chỉ là lựa chọn của UI; dữ liệu backend là `TRUONG`. `cap=BGH` thuộc lịch hẹn/appointment khác, không suy từ chức danh của người tạo mà đổi cấp lịch thành `BGH`.

### 8.3. Phải viết thêm gì vào báo cáo?

| Vị trí | Nội dung bổ sung cụ thể |
| --- | --- |
| Chương 1 — mục tiêu, phạm vi, phân công | Thêm tạo lịch họp cấp Trường bằng native cho chuyên viên BGH được phân quyền; nêu chọn thành phần và tài liệu. Phân công đóng góp cần nhóm xác nhận, không tự phân tác giả theo commit |
| Chương 2 — khoảng trống và định hướng | Thêm nhu cầu chuẩn bị lịch họp khi sử dụng thiết bị di động và tích hợp vào lịch tổng hợp; giữ iOffice là nguồn xử lý, không mô tả chuyển sang WebView |
| Chương 3 — cơ sở công nghệ | Giải thích ngắn biểu mẫu Flutter, quản lý trạng thái bất đồng bộ và multipart upload. Endpoint, trạng thái và sequence để ở Chương 5 |
| Chương 4 — tác nhân/RBAC | Làm rõ “Chuyên viên BGH” trong nhóm chuyên viên; có quan hệ với tác nhân chung Nhân sự. Bổ sung dòng quyền tạo trực tiếp lịch Trường; tách khỏi BGH với vai trò lãnh đạo, chủ trì cuộc họp và người phát hành |
| Chương 4 — FR và `UC-SCH-03` | Dùng `FR-SCH-03..07` đã đề xuất, chỉ rõ tác nhân của nhánh tạo trực tiếp là chuyên viên BGH được cấp quyền. Đặc tả nhập thông tin, chọn thành phần/tệp, lưu, xem trạng thái chưa phát hành và thử lại; không cần thêm một UC trùng chỉ để đổi tên vai trò |
| Chương 4 — quy tắc nghiệp vụ | Quyền thực tế quyết định thao tác; backend xác định người tạo; tạo trực tiếp lưu ở tổng hợp; quyền xem lịch chờ giới hạn; quyền tạo không suy ra quyền phát hành; phân biệt thành phần được mời đích danh và theo đơn vị |
| Chương 4 — sơ đồ | Bổ sung liên kết chuyên viên BGH → Tạo lịch họp cấp Trường trong tổng thể/UC lịch; thêm activity tạo lịch có nhánh lưu lỗi, upload lỗi và thử lại. Sequence tạo riêng dùng tác nhân “Chuyên viên BGH”, vì đây là vai trò nghiệp vụ cụ thể; các sequence tác nhân chung vẫn dùng “Nhân sự” |
| Chương 5 — thành phần/dữ liệu | Thêm `ScheduleCreatePage` → Riverpod notifier → API iOffice; truy vết lịch tuần, mục lịch, thành phần, tệp và nhật ký. `schedule_register` phục vụ nhánh đăng ký, không phải bản ghi luôn được tạo trong nhánh trực tiếp |
| Chương 5 — sequence tích hợp | Chuyên viên BGH → Mobile → API tạo → transaction lưu mục/phân công/log → commit → phản hồi ID → upload tệp → làm mới lịch. Lời mời demo được kích hoạt sau commit, trước request upload riêng; không bắt buộc chờ upload xong mới gửi lời mời |
| Chương 5 — độ tin cậy/thông báo | Lỗi upload có thể để lại mục lịch đã lưu và lời mời đã gửi; giữ ID để thử lại trong phiên form. Không tuyên bố transaction xuyên mọi request, phục hồi form sau đóng app, idempotency tuyệt đối hoặc retry thông báo bền vững |
| Chương 6 — hiện thực | Thêm ảnh chuyên viên BGH thấy lựa chọn tạo trực tiếp, form chọn thành phần/tệp, lịch `TONG_HOP`/chưa phát hành và trang chi tiết. Chụp trên đúng bản dựng/tài khoản được cấp quyền; không lấy request API demo làm ảnh nghiệm thu đầy đủ form |
| Chương 6 — kiểm thử | Thêm bảng kịch bản quyền, trạng thái, lưu/tệp/thử lại, lịch chờ và lời mời; tách unit/widget/mock, API thật và thao tác trên thiết bị. Ghi ngày/commit/lệnh của từng lượt |
| Chương 7 — kết quả và giới hạn | Tổng kết thêm tạo lịch họp native của chuyên viên BGH; giữ phát hành ngoài mobile và các giới hạn E2E, mất phản hồi tạo, lỗi từng phần, iOS và nhận push nhiều thiết bị |
| Tóm tắt/README | Thêm tạo lịch họp theo quyền vào nhóm chức năng để không dừng ở xem lịch/điểm danh |

### 8.4. Nội dung liên quan từ các thay đổi ở những project khác

- **Mobile `2ebf898`, `72e6c67`:** hồ sơ native/lịch sử, tạo lịch kèm tệp/thử lại, điều hướng lịch đến đúng đơn nghỉ phép/phiếu công tác, cache trạng thái AuthUser và picker có tìm kiếm. Đây là nội dung Chương 3–6 đã liệt kê ở mục 7; không giữ WebView hoặc silent refresh/replay như hiện trạng.
- **iOffice `6803b7b`, `96b21cf`, `4ca9249` và mobile `61722ad`:** quyền xem lịch chờ, gửi lời mời sau commit, gửi sớm tại tổng hợp để demo, đăng ký token với cả hai backend và giữ token khi dịch vụ Firebase lỗi. Cần viết đồng thời thiết kế Chương 5 và kết quả Chương 6; bấm push lịch hiện mở Lịch biểu, chưa mở thẳng chi tiết ID.
- **HRM `250274c`:** đồng bộ quyền không xóa quyền cấp thủ công chỉ vì không còn khớp chức vụ tự động. Viết như cơ chế bảo toàn quyền ở Chương 5, không coi đó là bằng chứng HRM cấp quyền tạo lịch iOffice cho chuyên viên BGH.
- **HRM `f967a08`:** điều kiện chặn đăng ký chuyến mới do chưa báo cáo chỉ xét đợt công tác đã kết thúc theo mốc về thực tế hoặc ngày kết thúc. Cần rà câu “chuyến trước chưa báo cáo thì chặn mọi chuyến mới” ở Chương 4/6/7 và bổ sung điều kiện kết thúc, không suy ra mobile đã có form nộp báo cáo.
- **Auth/myhcmut-be `7e687a6`:** bổ sung `maDonVi` vào dữ liệu người dùng/payload; đây là hỗ trợ ngữ cảnh danh tính, không chứng minh mọi nghiệp vụ tin dữ liệu do client tự khai hoặc tự có quyền lịch. Commit này từ tháng 4, không ghi là đóng góp tạo lịch mới ngày 01/10.

### 8.5. Kiểm chứng thực hiện trong lượt này và phần còn thiếu

Đã chạy ở iOffice `4ca9249`:

```text
node --test test/schedule_publication_notifications.test.js test/schedule_pending_visibility.test.js
33 tests, 33 pass, 0 fail, 0 skipped
```

Các test kiểm tra quyền xem lịch chưa phát hành, người ngoài, slot đơn vị/đích danh, gửi sau commit, không gửi khi lưu/commit lỗi và luồng phát hành. Đây là test dùng mô phỏng/harness; **không phải** 33 kịch bản E2E của tài khoản chuyên viên BGH. Đã đọc test mobile cho tạo trực tiếp bằng API general với `cap=TRUONG`, chọn nhân sự và upload/thử lại; chưa chạy lại Flutter trong lượt này. Biên bản push 01/10 vẫn là chứng cứ trên thiết bị của lượt trước, không phải phép thử mới.

Trước khi kết luận nghiệm thu tính năng chuyên viên BGH, cần thêm:

1. Tài khoản chuyên viên BGH thật có quyền phù hợp, mở form và tạo lịch trên Android; đối chiếu người tạo, thành phần, tệp và `TONG_HOP` tại iOffice. Không đưa định danh cá nhân vào báo cáo.
2. Tài khoản thiếu quyền tạo không thấy lựa chọn trực tiếp và bị backend từ chối khi gọi API; nếu quy chế yêu cầu chỉ chuyên viên BGH được tạo, kiểm tra cấu hình cấp quyền và tổ hợp vai trò thực tế.
3. Mất quyền/phiên trong lúc nhập, dữ liệu không hợp lệ, upload lỗi/thử lại; xác định những trường hợp backend thực sự chặn, không suy validation server chỉ từ validation client.
4. Người tạo/người được mời xem lịch chưa phát hành, người ngoài không được xem; ghi rõ xem trước không cấp quyền phát hành hoặc điểm danh ngoài khung giờ.
5. Nhận lời mời trên thiết bị, thao tác mở từ push và ảnh form native. Giữ giới hạn: lời mời demo có thể tới trước tệp; backend phát hành vẫn có thể gửi thông báo tiếp theo.


## 9. Đối chiếu sau khi nhập `fix-v2` mới nhất (`5a30312`)

> **Đính chính sau kiểm tra lại theo phản hồi người dùng:** đã đổi ảnh use case trong LaTeX sang `UC_DOC.png`. Hai activity nghỉ phép/công tác có nhánh từ chối và duyệt cuối kết thúc đúng; nhận định lỗi đường nối ban đầu đã được sửa ở bảng 9.3. Những câu về ảnh chưa được nạp bên dưới mô tả thời điểm ngay sau merge, trước lần chỉnh này.

### 9.1. Kết quả cập nhật và phạm vi đối chiếu

Ngày 01/10/2026 đã fetch `origin/fix-v2`, nhận hai commit `7f398cc` (change diagram) và `5a30312` (change UC_DOC and UC_TQ), sau đó merge vào `main` bằng `042fee4`, không có xung đột. Hai tài liệu đối chiếu đang sửa local được giữ nguyên. Chưa push.

So với `06bfc73`, nhánh chỉ thay **10 ảnh PNG**: năm activity hồ sơ/nghỉ phép/công tác/văn bản/điểm danh và năm use case tổng thể/hồ sơ/nghỉ phép/công tác/văn bản. **Không thay nội dung LaTeX, sequence PNG, sequence Mermaid hoặc hình kiến trúc.** Do đó nhiều yêu cầu trong mục 7–8 vẫn chưa được đưa vào báo cáo.

Đã xem trực tiếp cả 10 ảnh mới và đối chiếu lệnh nạp ảnh trong LaTeX. HEAD các project vẫn là mobile `61722ad`, iOffice `4ca9249`, HRM `250274c`, Auth `7e687a6`; các kết luận về hiện thực ở mục 8 vẫn áp dụng. Lượt này pull nhánh báo cáo, không pull hay sửa các project ứng dụng/backend.

### 9.2. Những việc đã được sửa trong hình

- Activity hồ sơ, nghỉ phép, công tác và điểm danh đã dùng tác nhân/làn **Nhân sự**. Không tiếp tục liệt kê việc đổi tên các làn này như việc chưa làm.
- Use case hồ sơ/nghỉ phép/công tác hiện dùng **Nhân sự**; tổng thể cũng dùng Nhân sự và tên **TCNS**.
- `UC_DOC.png` đã thêm **Chuyên viên BGH → Tạo cuộc họp**. Đây là cải thiện đúng yêu cầu về tác nhân, nhưng ảnh này chưa được LaTeX nạp vào phần đặc tả lịch.
- Activity văn bản đã phân biệt nhánh thông tin và giao nhiệm vụ. Khi viết nội dung kèm hình, vẫn phải phân biệt tiếp nhận văn bản với hoàn tất nhiệm vụ và phạm vi thao tác mobile với toàn bộ quy trình iOffice.

### 9.3. Các điểm cần sửa trước tiên

| Ưu tiên | Điểm chưa đúng / chưa đồng bộ | Chỉnh sửa cần thực hiện |
| --- | --- | --- |
| Đã sửa sau đối chiếu | Nạp hình use case mới | [Đặc tả lịch](../Chapter4/section2/ioffice_schedule/index.tex), dòng 46, đã đổi từ `image/usecase/UC_IOFF.png` sang `image/usecase/UC_DOC.png` theo xác nhận của người dùng. Không đổi nhãn tham chiếu hình |
| P0 | Sequence xuất ra PNG còn tác nhân cũ | `seq_profile_request.png`, `seq_leave_submit.png`, `seq_trip_submit.png` vẫn có “Cán bộ/Giảng viên”; Mermaid tương ứng đã dùng Nhân sự. Đồng bộ source rồi xuất lại PNG. Sequence hồ sơ còn thẩm định TCCB thay vì TCNS; sequence điểm danh dùng “Đại biểu cuộc họp”, cần thống nhất tác nhân chung Nhân sự theo quy ước của báo cáo |
| P0 | Sequence hồ sơ vẫn mô tả mở biểu mẫu SSO | [Source sequence hồ sơ](../image/uml/seq_profile_request.mmd) vẫn có luồng “Mở biểu mẫu qua SSO”. Viết lại luồng form native → API HRM → kiểm tra quyền/chính sách → cập nhật trực tiếp hoặc lập đề xuất → phản hồi/lịch sử. Chỉ đổi tên tác nhân rồi xuất hình chưa giải quyết sai phạm vi |
| Đã kiểm tra lại — không cần sửa nhánh này | Activity nghỉ phép và công tác kết thúc đúng | Trong [nghỉ phép](../image/uml/leave_activity.png) và [công tác](../image/uml/bt_activity.png), Từ chối → Gửi thông báo từ chối → nút kết thúc. Duyệt → Gửi thông báo duyệt → `isEnd`: `true` đi thẳng tới nút kết thúc, `false` sang bước xử lý tiếp. Hai luồng chỉ dùng chung nút kết thúc, không nối duyệt sang thông báo từ chối. Nhận định trước đó là đọc nhầm đường nối; giữ nguyên hai hình |
| P0 | Activity điểm danh chưa thể hiện đúng các nhánh backend | [Activity điểm danh](../image/uml/attendant_activity.png) dễ hiểu rằng phải có trong danh sách mời; source cho phép khách với `assignId=null`. Bổ sung nhánh được mời/khách; cả có mặt và báo vắng đều có kiểm tra backend, nhưng khung thời gian khác nhau. Có mặt/hủy điểm danh từ một giờ trước bắt đầu đến hết ngày kết thúc; báo vắng đến hết ngày bắt đầu. Nhánh lỗi phải trả thông báo thay vì chỉ kết thúc im lặng |
| P0 | WebView vẫn là hiện trạng trong nhiều chương và kiến trúc | Viết lại hồ sơ native ở FR-PRO-02, UC cập nhật và thiết kế/kết quả/kết luận; thay hình kiến trúc còn WebView→HRM Web và ticket/Redis trong luồng mobile hiện tại. Giữ tài liệu SSO cũ dưới dạng lịch sử nếu cần truy vết, không mô tả là chức năng đang sử dụng |
| P0 | Có hình tạo họp nhưng chưa có đặc tả và thiết kế tương ứng | Bổ sung FR/UC, RBAC, activity/sequence và hiện thực theo mục 8. Tác nhân là **Chuyên viên BGH được cấp quyền**; nhánh trực tiếp cần `scheduleGeneral:write`, lưu `cap=TRUONG`, bước `TONG_HOP`; chưa phải phát hành chính thức, không đổi thành `cap=BGH` |
| P1 | Tổng thể chưa thống nhất với use case chi tiết | [UC tổng thể](../image/usecase/UC-TQ.drawio.png) còn tên “Hồ sơ cán bộ”, nên đổi “Hồ sơ nhân sự”. Làm rõ tác nhân chuyên viên BGH/tạo cuộc họp trong tổng thể hoặc giải thích phân rã từ Quản lý lịch trình, để tổng thể và đặc tả chi tiết truy vết được nhau |
| P1 | FR/UC hồ sơ thiếu phần chức năng native đã có | Bổ sung phản hồi và lịch sử vào phạm vi FR/UC phù hợp; activity đã có phản hồi nhưng bảng FR chỉ có tra cứu/cập nhật/thẩm định. Ghi rõ giới hạn trường/editor hỗ trợ, không khẳng định thay thế toàn bộ HRM Web |
| P1 | Kết quả kiểm thử vẫn đang mô tả bản WebView và hạn chế cũ | Giữ ngày/phiên bản của bằng chứng cũ; thêm kết quả native và tài khoản chuyên viên BGH thật nếu đã kiểm chứng. Backend hỗ trợ khách điểm danh không chứng minh UI/E2E đã đạt; không tự đổi kết quả “chưa thực hiện được” thành “đạt” |

Căn cứ điểm danh: [schedule-meeting-checkin.js](../../ioffice-be/modules/md-schedule/schedule-general/controller/schedule-meeting-checkin.js), endpoint có mặt, báo vắng và hủy. Căn cứ tạo lịch, quyền xem trước và lời mời: bảng truy vết mục 8.2. Đã kiểm tra lại trực tiếp hai ảnh activity nghỉ phép/công tác: nhánh duyệt cuối và nhánh từ chối dùng chung nút kết thúc; không có lỗi gửi thông báo từ chối sau phê duyệt như nhận định ban đầu.

### 9.4. Nội dung còn phải chỉnh theo từng chương

| Chương | Nội dung cần viết lại/bổ sung sau cập nhật hình |
| --- | --- |
| 1 — mục tiêu/phạm vi | Hồ sơ bằng giao diện native; tạo lịch họp cấp Trường cho chuyên viên BGH được cấp quyền; dùng Nhân sự làm tác nhân chung. Đồng bộ tóm tắt và phân công đã được nhóm xác nhận |
| 2 — khảo sát/định hướng | Định hướng khai thác API bằng native, nhu cầu tạo họp trên thiết bị di động. Phân biệt hệ thống Web có sẵn với chức năng ứng dụng thực sự dùng |
| 3 — công nghệ | Bỏ WebView/SSO khỏi vai trò công nghệ cốt lõi của luồng hồ sơ hiện tại; trình bày Flutter form, quản lý trạng thái, tải tệp và lưu cache theo source. Không bổ sung silent refresh/replay khi mã hiện tại chưa làm |
| 4 — yêu cầu và phân tích | Sửa FR-PRO-02/UC-PRO-02, bổ sung phản hồi/lịch sử; đặc tả tạo lịch, tác nhân/quyền/trạng thái và thử lại; đồng bộ ảnh thật sự được nạp. Rà activity điểm danh và sửa sequence; giữ nhánh duyệt/từ chối của activity nghỉ phép/công tác. Quy tắc chặn công tác mới vì thiếu báo cáo chỉ xét chuyến đã kết thúc |
| 5 — thiết kế | Viết lại [kiến trúc](../Chapter5/section1.tex), [ranh giới/đóng góp](../Chapter5/section2.tex) và [tích hợp](../Chapter5/section4.tex) còn WebView. Thêm luồng tạo mục lịch → commit → lời mời → upload riêng; lỗi upload có thể để lại lịch đã lưu. Không khẳng định mọi thông báo đều qua outbox/retry bền vững; đồng bộ schema thực tế như mục 7 |
| 6 — hiện thực/kiểm thử | Thay mô tả và ảnh biểu mẫu WebView bằng native đúng bản dựng; bổ sung ảnh form tạo họp, thành phần, tệp và trạng thái tổng hợp. Tách test mô phỏng/API/E2E; cập nhật push Android và điều hướng theo bằng chứng. Giữ rõ hạn chế chưa kiểm chứng, không suy kết quả từ source |
| 7 — kết luận/hướng phát triển | Tổng kết hồ sơ và tạo họp native; bỏ hướng “hoàn thiện upload WebView”. Nêu đúng phần phát hành ngoài mobile, giới hạn tải tệp/thử lại, iOS và kiểm thử thực tế còn thiếu |

Vị trí nổi bật chưa đổi: [FR/UC hồ sơ](../Chapter4/section2/profile/index.tex), [kết quả hiện thực](../Chapter6/section1.tex), [kiểm thử](../Chapter6/section2.tex), [kết luận](../Chapter7/section1.tex). Chi tiết nội dung thay thế và các mâu thuẫn tài liệu/schema xem mục 7–8; các thay đổi PNG không giải quyết các phần này.

### 9.5. Kiểm tra đã thực hiện và thứ tự làm tiếp

Đã kiểm tra staged scope trước merge commit: GitNexus không ghi nhận symbol/flow bị đổi, phù hợp với diff chỉ gồm ảnh nhị phân; tên và số lượng 10 ảnh được kiểm tra trực tiếp bằng Git. Đã xác nhận `origin/fix-v2` nằm trong lịch sử `main`, rà diff tài liệu và kiểm tra liên kết local. Không sửa LaTeX hoặc mã ứng dụng và chưa build lại PDF. Không chạy lại test backend/Flutter vì HEAD ứng dụng không đổi; 33 test ở mục 8.5 là kết quả lượt trước, không phải nghiệm thu mới.

Thứ tự đề xuất: (1) chốt FR/UC native và tạo lịch; (2) rà activity điểm danh, viết lại sequence/kiến trúc và kiểm tra hình được nạp; (3) bổ sung ảnh/log kiểm thử đúng phiên bản; (4) đồng bộ Chương 1–3 và 7; (5) build báo cáo và xem trực tiếp các trang hình/bảng để xác nhận bản PDF sử dụng nội dung mới.


## 10. Thực hiện kế hoạch viết lại — phạm vi mới nhất

Đã cập nhật bảy chương, tóm tắt, README và ma trận FR/UC theo hồ sơ native, phản hồi/lịch sử và tạo lịch của chuyên viên BGH được cấp quyền. Hồ sơ có mô tả riêng việc nhân sự quan sát dữ liệu trước/sau ở lịch sử yêu cầu và lịch sử thay đổi; không khẳng định có màn hình so sánh bắt buộc trước khi gửi vì source hiện tại chưa thể hiện bước đó.

**Ràng buộc bổ sung của người dùng:** giữ nguyên ảnh use case và activity, chỉnh sequence theo nghiệp vụ; không thêm sequence API native hoặc activity tạo lịch. Theo phản hồi tiếp theo, **giữ sơ đồ kiến trúc tổng thể ở Chương 5**: đã khôi phục figure/label và cập nhật hình thành Nhân sự → Mobile native → Auth/HRM/iOffice, hai CSDL nghiệp vụ, FCM và Socket.IO. Hình không còn nhánh WebView/HRM Web/ticket của luồng cũ. Nguồn chỉnh sửa được lưu tại `image/architecture/architecture_overall.mmd`. Các ảnh use case/activity/ERD vẫn giữ nguyên; từ điển địa chỉ/gia đình được đối chiếu với model và trình bày bằng bảng, không nạp lại hai hình bảng còn mâu thuẫn.

**Căn cứ schema:** HRM `250274c`, `staff_ly_lich_dia_chi.model.ts` và `staff_ly_lich_gia_dinh.model.ts`: tên bảng `staff_*`, `xa_phuong` varchar(10), `so_nha` varchar(200), giới tính gia đình varchar(10), nghề nghiệp varchar(1000), họ tên varchar(200), địa chỉ mới JSONB. Đây là đối chiếu model Sequelize, chưa kiểm tra trực tiếp schema triển khai. Các ERD tổng quan dùng thuật ngữ nghiệp vụ được ghi rõ là mô hình logic.

**Sequence thực hiện:** xuất lại hồ sơ/nghỉ phép/công tác/điểm danh; thêm sequence nghiệp vụ tạo lịch Trường. Nguồn `.mmd` đi cùng PNG, dùng `image/uml/mermaid-report-config.json` và cấu hình Puppeteer hiện có. Giữ nguyên `UC_DOC.png` đã được nạp ở đặc tả lịch.

**Bằng chứng giữ đúng phạm vi:** Chương 6 bổ sung ảnh push 01/10 đã có; không tạo ảnh form/editor hoặc kết quả E2E giả. Bảng N-PRO/N-SCH nêu các kịch bản còn cần log/ảnh thực tế. Các test 22–24/09 và 01/10 được phân biệt theo mốc/phạm vi, không cộng số. Chưa tự gán người thực hiện tính năng tạo lịch mới vào bảng phân công cá nhân.


**Kiểm tra biên tập:** toàn bộ 43 tệp trong chuỗi LaTeX có hiệu lực được rà ảnh/tham chiếu; ảnh có tồn tại hoặc nhánh fallback hợp lệ. Không có label trùng hoặc ref nghiệp vụ thiếu. `git diff --check` đạt. GitNexus `detect_changes(scope=all)` báo rủi ro thấp, không có execution flow bị ảnh hưởng; công cụ chỉ nhận diện một phần Markdown, không thay kiểm tra LaTeX/PNG trực tiếp. Build bằng `latexmk -pdf -interaction=nonstopmode -halt-on-error main.tex` thành công; các trang sequence, FR/UC, quyền, từ điển và bằng chứng được render bằng Poppler để kiểm tra. Đã sửa tràn chữ permission và chuyển bảng FR lịch thành bảng nhiều trang.

**Giới hạn bàn giao:** không sửa mã ứng dụng/backend, không chạy E2E nghiệp vụ mới, không kiểm tra CSDL triển khai và không tự phân công tác giả tính năng tạo lịch. Ảnh/editor/form mới chưa có được ghi rõ cần bổ sung; biên bản cũ vẫn giữ nguyên. Chưa commit/push. Các cảnh báo hbox của macro usecasespec còn có trong log; trang bảng đã kiểm tra trực tiếp, không thấy nội dung bị tràn do cảnh báo này.

**Mã đã chốt:** FR/UC-PRO-04 là phản hồi; FR/UC-PRO-05 là lịch sử và quan sát dữ liệu trước/sau. Mã proposal cũ không được dùng thay bảng FR/UC hiện hành.


**Điều chỉnh trình bày theo phản hồi mới nhất:** bỏ sequence API native khỏi Chương 5 và xóa hai tệp sequence đó do lượt biên tập tạo. Sequence tạo lịch được rút gọn về nghiệp vụ giữa chuyên viên BGH, Mobile và iOffice, có lời mời tới người tham dự. Không trình bày participant CSDL, mở transaction, commit/rollback, endpoint, ID hoặc notifier trong hình; giữ luồng thông tin, kiểm tra quyền, lưu tổng hợp, tài liệu/lỗi tệp và kết quả chưa phát hành. Các chi tiết kỹ thuật cần thiết vẫn nằm trong mô tả thiết kế, không đưa vào sequence nghiệp vụ.

### 10.1. Đối chiếu từng chương với kế hoạch sau khi khôi phục kiến trúc

| Chương | Nội dung đã đồng bộ trong bản LaTeX có hiệu lực | Phần còn thiếu hoặc giới hạn |
| --- | --- | --- |
| 1 | [Mục tiêu, phạm vi và đóng góp](../Chapter1/section1.tex): hồ sơ native, phản hồi/lịch sử, tạo họp cấp Trường theo quyền, phân biệt mobile và backend kế thừa | Chưa bổ sung người phụ trách tính năng tạo lịch vào phân công cá nhân khi chưa có xác nhận của nhóm |
| 2 | [Khảo sát và định hướng](../Chapter2/section1.tex): giữ khảo sát hệ thống Web nguồn, chuyển định hướng ứng dụng sang native/API, bổ sung nhu cầu tạo họp | Không thêm nghiệp vụ nộp báo cáo tiến độ trên mobile |
| 3 | [Công nghệ mobile](../Chapter3/section2.tex), [xác thực](../Chapter3/section1.tex), [backend](../Chapter3/section3.tex): biểu mẫu Flutter, Riverpod, Dio/multipart, cache và JWT API; bỏ WebView khỏi phạm vi công nghệ hiện hành | Không khẳng định có silent refresh hoặc tự phát lại request |
| 4 | [Hồ sơ](../Chapter4/section2/profile/index.tex): FR/UC-PRO-04 phản hồi, 05 lịch sử trước/sau; [lịch](../Chapter4/section2/ioffice_schedule/index.tex): FR-SCH-03..07, UC-SCH-03, quyền ba nhánh, tổng hợp khác phát hành. Đã sửa sequence hồ sơ/nghỉ phép/công tác/điểm danh và điều kiện thiếu báo cáo của chuyến đã kết thúc | Use case/activity giữ nguyên theo phạm vi người dùng; không kết luận mọi hình đã thể hiện toàn bộ các FR/UC bổ sung. Lịch sử hồ sơ được đặc tả bằng văn bản và truy vết |
| 5 | [Kiến trúc tổng thể có hình](../Chapter5/section1.tex), [thành phần](../Chapter5/section2.tex), [dữ liệu](../Chapter5/section3.tex), [tích hợp](../Chapter5/section4.tex), [tổng kết](../Chapter5/section5.tex): native/policy/history, tạo lịch, lời mời, upload riêng và thử lại; sequence tạo lịch ở mức nghiệp vụ | Từ điển địa chỉ/gia đình đối chiếu model, chưa xác minh schema triển khai; những ERD khác được giới hạn là mô hình logic |
| 6 | [Hiện thực](../Chapter6/section1.tex) và [kiểm thử](../Chapter6/section2.tex): mô tả editor, lịch sử trước/sau và form tạo họp; tách kết quả lịch sử, kiểm thử mô phỏng, API thật và push Android. Có bảng N-PRO/N-SCH và trạng thái chứng cứ | **Chưa hoàn tất thu thập bằng chứng**: thiếu ảnh form/editor/lịch sử mới, log E2E native và form chuyên viên BGH, thử thiếu quyền/upload lỗi/thử lại/quyền xem lịch chờ trên tài khoản thật |
| 7 | [Kết luận và hướng phát triển](../Chapter7/section1.tex): tổng kết native/tạo họp theo mức kiểm chứng, nêu hạn chế editor, E2E, tải tệp và phát hành ngoài mobile | Không suy ra đã sửa bất thường quỹ phép đồng thời; không khẳng định đã kiểm chứng iOS |

Tóm tắt, README và ma trận truy vết cũng đã được cập nhật. **Trạng thái bàn giao là hoàn tất phần biên tập có căn cứ, còn phần chứng cứ thực nghiệm ở công việc 7 và xác minh môi trường triển khai có điều kiện.** Việc bỏ hình kiến trúc ở lượt chỉnh trước là sai sót và đã được sửa; không xem việc bỏ sequence API native là yêu cầu bỏ kiến trúc tổng thể.

**Kiểm tra sau khôi phục:** build thành công `main.pdf` 167 trang; Hình 5.1 nằm ở trang in 81 (trang PDF 96), đã render và xem trực tiếp cùng trang mở đầu Chương 5. Đã kiểm tra lại 43 tệp LaTeX có hiệu lực, ảnh, label/ref, `UC_DOC`, sequence nghiệp vụ không chứa transaction/commit/endpoint và byte ảnh use case/activity so với HEAD. `git diff --check` đạt; không có tham chiếu/citation chưa định nghĩa hoặc bảng tràn dọc. Cảnh báo font T5 và hbox của template vẫn còn. HEAD bốn project nguồn không đổi so với mốc kế hoạch.

**Chốt phạm vi kiến trúc sau cùng:** người dùng yêu cầu giữ cấu trúc các tầng của hình gốc, thay WebView bằng SQLite trong tầng mobile, bỏ HRM Web và bổ sung CSDL Auth nối với Auth Service; **chỉ tạo mã Mermaid, không tạo ảnh**. Đã cập nhật `image/architecture/architecture_overall.mmd` theo mẫu `flowchart LR`/`classDef` người dùng cung cấp, bỏ Redis phục vụ phiên Web và kiểm tra cú pháp bằng `mermaid.parse` mà không render. PNG kiến trúc gốc được khôi phục đúng byte so với HEAD; chưa xuất PNG/PDF từ mã MMD mới. Mô tả kiểm tra hình/PDF ở trên thuộc lượt bàn giao trước khi chốt yêu cầu chỉ mã MMD. CSDL Auth dùng PostgreSQL theo dependency `pg`/Sequelize; bảng tài khoản là `fw_user` theo `modules/fw_user/model/fw_user.model.ts` (`fwUser` là tên truy cập model). Auth controller hiện có cấp access/refresh token; sơ đồ không khẳng định mobile tự động làm mới hoặc phát lại request.

**Đính chính Redis ngày 02/10:** việc bỏ toàn bộ Redis khi bỏ WebView là quá rộng. Source hiện hành vẫn khởi tạo Redis ở ba backend; `config/lib/io.ts` của Auth/HRM và `config/lib/io.js` của iOffice đều dùng Redis adapter cho Socket.IO. HRM `profile.controller.ts:getDanhMucList/getCachedTabDanhMuc` đọc/ghi cache danh mục với TTL 30 phút, có caller từ API danh mục hồ sơ native; HRM/iOffice còn có Redis session store. iOffice dùng Redis cho ánh xạ tạm khi mở tệp; riêng hạ tầng `countStatus/countStatusDrift` có mã nhưng đang bị comment tại `main.js:115–116`, chưa được ghi là luồng cache đang chạy. MMD đã bổ sung lại Redis tại tầng lưu trữ hỗ trợ, nối backend với nhãn cache/Pub/Sub, không nối Mobile trực tiếp và không suy rằng cả ba backend dùng chung một Redis instance. Đây là kiểm chứng mã nguồn, chưa kiểm tra kết nối Redis ở môi trường triển khai; không xuất ảnh.

### 10.2. Điều chỉnh vị trí thiết kế nghiệp vụ ngày 02/10/2026

Phần hồ sơ và tạo lịch mô tả thiết kế chức năng chính, nên đã chuyển khỏi mục tích hợp. Mục 5.2 được đổi thành **Thiết kế thành phần và chức năng nghiệp vụ**, giữ kiến trúc mobile và trách nhiệm backend, rồi trình bày hai chức năng được mở rộng.

| Nội dung | Vị trí trước điều chỉnh | Vị trí hiện hành |
| --- | --- | --- |
| Biểu mẫu native, policy, gửi thay đổi/phản hồi và lịch sử hồ sơ | 5.4.2 | [5.2.3 — Thiết kế chức năng quản lý hồ sơ](../Chapter5/section2.tex) |
| Thành phần tạo lịch, lưu/upload, lời mời, thử lại, trạng thái và quyền xem | 5.4.3 | [5.2.4 — Thiết kế chức năng tạo và đăng ký lịch họp](../Chapter5/section2.tex) |
| Sequence nghiệp vụ tạo trực tiếp lịch Trường | Chương 5 | [Mục Biểu đồ tuần tự của phân hệ iOffice, Chương 4](../Chapter4/section2/ioffice_schedule/index.tex), Hình 4.15 |

[Mục 5.4](../Chapter5/section4.tex) gồm 5.4.1 xác thực và giao tiếp API, 5.4.2 tích hợp thông báo FCM, 5.4.3 tổng hợp dữ liệu từ các API và đồng bộ Socket.IO. Nội dung tập trung vào cơ chế kết nối, đăng ký/ánh xạ thiết bị, phân phối thông báo, nguồn dữ liệu và làm mới trạng thái. Thời điểm tạo lời mời và kết quả lưu lịch được trình bày chính tại 5.2.4; các mục liên quan dẫn lại thay vì lặp toàn bộ quy trình.

Giữ các label đang được tham chiếu và cập nhật lời dẫn, mở đầu chương, README Chương 5 và ma trận truy vết. Chỉ di chuyển nơi nạp sequence; không sửa các tệp hình đang có trên workspace, use case hoặc activity trong lượt này. Hình kiến trúc tổng thể vẫn được nạp tại 5.1.

**Kiểm tra:** build `main.pdf` thành công, 166 trang; rà 43 tệp LaTeX có hiệu lực, không có label trùng hoặc ref nghiệp vụ thiếu; sequence tạo lịch chỉ được nạp một lần tại Chương 4. Đã xem trực tiếp mục lục, hai mục chức năng mới, mục tích hợp và trang sequence sau khi di chuyển. `git diff --check` đạt. Log cuối không có tham chiếu/citation chưa định nghĩa hoặc tràn dọc; các cảnh báo font và hbox hiện có của template vẫn còn. Không sửa source ứng dụng/backend, không bổ sung kết quả E2E, không commit/push.
