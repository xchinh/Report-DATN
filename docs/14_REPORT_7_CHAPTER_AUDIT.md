# NỘI DUNG CẦN CHỈNH SỬA BÁO CÁO THEO CODEBASE HIỆN TẠI

> **Đối chiếu:** 01/10/2026; HRM `250274c`, iOffice `4ca9249`, mobile `61722ad`, cùng commit mobile `2ebf898` đã bổ sung hồ sơ native. Đã đọc diff và hiện thực; iOffice đạt 47/47 test backend, mobile đạt 64/64 test notification và phân tích tĩnh sạch ở 11 package; push Android thật đã nhận ở tổng hợp khi app mở/chạy nền. Chưa chạy toàn bộ test HRM/mobile hoặc kiểm chứng iOS/phát hành thật. Mốc đầy đủ xem [13_CURRENT_SOURCE_SNAPSHOT.md](13_CURRENT_SOURCE_SNAPSHOT.md).
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

Đề xuất bổ sung `FR-PRO-04` **Xem lịch sử hồ sơ** và `FR-PRO-05` **Gửi phản hồi về thông tin hồ sơ** (các mã chưa có trong bảng hiện tại). Phản hồi phải có nội dung và tệp, không tự áp dụng dữ liệu vào hồ sơ. Lịch sử đọc yêu cầu/nhật ký từ backend và trình bày trạng thái, thời điểm, người xử lý, nội dung thay đổi theo dữ liệu trả về.

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
