# MỤC 3.2: CÔNG NGHỆ VÀ THƯ VIỆN PHÍA FRONTEND
*(Tài liệu chuyển thể từ `Chapter3/section2.tex` sang định dạng Markdown để phục vụ tra cứu và đọc nhanh)*

---

Phân hệ di động của hệ thống **MyHCMUT** là cổng giao tiếp tập trung của cán bộ, giảng viên và nhân viên với các dịch vụ số của Trường Đại học Bách khoa – ĐHQG-HCM. Flutter được xác định làm nền tảng phát triển của ứng dụng. Các giải pháp thành phần (quản lý trạng thái, điều hướng, giao tiếp mạng, lưu trữ cục bộ và các công cụ hỗ trợ) được nhóm nghiên cứu và lựa chọn dựa trên mức độ tương thích với kiến trúc monorepo và yêu cầu tích hợp đa backend của MyHCMUT.

Mục này trình bày phương pháp luận, các tiêu chí đánh giá, phân tích so sánh các giải pháp công nghệ cốt lõi và giới thiệu các thư viện hỗ trợ được áp dụng trong phân hệ Mobile Frontend.

---

## 3.2.1. Tiêu chí đánh giá và phương pháp luận lựa chọn công nghệ

Hệ thống MyHCMUT tích hợp nhiều phân hệ nghiệp vụ gồm Quản lý Nhân sự (HRM), Văn phòng điện tử (iOffice), Quản lý nhiệm vụ, Lịch công tác và Thông báo. Nhóm xác định các tiêu chí kỹ thuật cụ thể làm cơ sở lựa chọn công nghệ. Các tiêu chí không được sử dụng như một thang điểm chung cho mọi công nghệ; từng nhóm giải pháp được đánh giá theo các tiêu chí có liên quan trực tiếp đến trách nhiệm của thành phần đó:

* **Nền tảng phát triển (Platform):** Khả năng chia sẻ mã nguồn giữa Android và iOS, tính nhất quán của hệ thống thiết kế (Design System) và hiệu năng dựng hình (rendering performance).
* **Quản trị trạng thái (State Management):** Khả năng mô hình hóa và kiểm soát các tác vụ bất đồng bộ, tính tách biệt (decoupling) giữa logic nghiệp vụ và tầng giao diện, cùng tính thuận tiện khi thực hiện kiểm thử tự động (testability).
* **Định tuyến và điều hướng (Routing):** Khả năng hỗ trợ cấu trúc điều hướng đa tab lồng nhau (nested navigation stack) và cơ chế phân giải liên kết sâu (Deep Linking) từ thông báo đẩy FCM.
* **Truyền thông mạng (Networking):** Khả năng can thiệp chuỗi bộ chặn (Interceptors) để tự động xử lý xác thực đa miền, quản lý vòng đời của token và giám sát tiến trình truyền tải tệp tin.
* **Lưu trữ dữ liệu cục bộ (Local Storage):** Cấp độ bảo mật đối với dữ liệu xác thực, hiệu năng truy xuất theo đặc thù dữ liệu (cặp khóa–giá trị đơn giản so với dữ liệu quan hệ có cấu trúc).

---

## 3.2.2. Đánh giá và lựa chọn nền tảng phát triển ứng dụng di động

Trong phát triển ứng dụng di động hiện đại, ba hướng tiếp cận tiêu biểu gồm: phát triển ứng dụng bản địa (Native), sử dụng React Native và sử dụng Flutter. Bảng dưới đây so sánh ba hướng tiếp cận này theo các yêu cầu thực tế của đề tài:

### Bảng 3.1: So sánh các nền tảng phát triển ứng dụng di động

| Nền tảng | Ưu điểm | Hạn chế | Đánh giá tính phù hợp với MyHCMUT |
| :--- | :--- | :--- | :--- |
| **Native<br/>(Kotlin / Swift)** | • Khai thác trực tiếp các API và thành phần giao diện của từng hệ điều hành.<br/>• Cho phép tối ưu ứng dụng sâu theo đặc điểm của từng nền tảng phần cứng. | • Yêu cầu phát triển và duy trì hai cơ sở mã nguồn độc lập.<br/>• Chi phí đồng bộ nghiệp vụ và kiểm thử tăng cao khi hệ thống có nhiều phân hệ. | Trong khi MyHCMUT không yêu cầu các API nền tảng đặc thù đến mức phải duy trì hai implementation native độc lập, việc sử dụng hai codebase Kotlin và Swift sẽ làm tăng chi phí đồng bộ nghiệp vụ và kiểm thử mà không mang lại lợi ích tương ứng với yêu cầu hệ thống. |
| **React Native<br/>(JS / TS)** | • Tái sử dụng phần lớn mã nguồn giữa Android và iOS.<br/>• Hệ sinh thái thư viện phong phú từ cộng đồng React và JavaScript. | • Giao diện sử dụng các thành phần native thông qua tầng cầu nối (bridge) hoặc JSI.<br/>• Hành vi và hiển thị của một số thành phần có thể sai lệch giữa các phiên bản hệ điều hành. | Không lựa chọn do yêu cầu kiểm soát hệ thống thiết kế thống nhất và hành vi giao diện chặt chẽ giữa các phân hệ của MyHCMUT. |
| **Flutter<br/>(Dart)** | • Sử dụng hệ thống widget và pipeline dựng hình do framework tự quản lý (Impeller/Skia Engine).<br/>• Hỗ trợ biên dịch AOT sang mã máy và cơ chế an toàn kiểu dữ liệu với null (*sound null safety*). | • Kích thước gói cài đặt ban đầu lớn hơn so với ứng dụng native tối giản.<br/>• Cần làm quen với ngôn ngữ Dart và mô hình lập trình giao diện khai báo. | **Được lựa chọn.** Flutter giúp duy trì Design System và hành vi giao diện nhất quán giữa nhiều phân hệ nghiệp vụ, phù hợp với MyHCMUT nơi phần lớn khối lượng hiện thực nằm ở ứng dụng di động. |

👉 **Quyết định Kỹ thuật:** **Flutter** được lựa chọn không chỉ do khả năng chia sẻ mã nguồn giữa Android và iOS, mà còn do mô hình widget và pipeline dựng giao diện do framework kiểm soát giúp nhóm duy trì Design System và hành vi giao diện nhất quán giữa nhiều phân hệ nghiệp vụ. Điều này phù hợp với MyHCMUT, nơi phần lớn khối lượng hiện thực nằm ở ứng dụng di động và yêu cầu tái sử dụng các thành phần giao diện giữa HRM, iOffice, nhiệm vụ và lịch công tác.

---

## 3.2.3. Vai trò của ngôn ngữ lập trình Dart trong Mobile Stack

Ngôn ngữ lập trình Dart đóng vai trò cốt lõi trong toàn bộ hệ thống frontend của MyHCMUT, cung cấp nền tảng vững chắc về tính an toàn kiểu dữ liệu, khả năng xử lý bất đồng bộ và cơ chế thực thi đa luồng:

1. **Cơ chế Sound Null Safety và Hệ thống Kiểu tĩnh:** Dart áp dụng cơ chế sound null safety từ phiên bản 3.0, phân biệt rõ ràng giữa kiểu dữ liệu có thể null (`T?`) và không thể null (`T`). Tính năng này giúp loại trừ các lỗi tham chiếu null (*NullPointerException / Null Dereference*) ngay tại thời điểm biên dịch, đảm bảo tính toàn vẹn khi ánh xạ các cấu trúc dữ liệu JSON phức tạp từ các backend nghiệp vụ về các model nội bộ.
2. **Mô hình Lập trình Bất đồng bộ với Event Loop:** Dart thực thi mã nguồn trên mô hình đơn luồng dựa trên Event Loop với hai hàng đợi: *Microtask Queue* (xử lý các tác vụ nội bộ ưu tiên cao) và *Event Queue* (xử lý sự kiện I/O, timer, thao tác người dùng). Thông qua các kiểu dữ liệu trừu tượng `Future`, `Stream` cùng cú pháp `async/await`, ứng dụng dễ dàng phối hợp các luồng dữ liệu phản ứng và các yêu cầu HTTP mà không gây nghẽn luồng xử lý chính.
3. **Cơ chế Đa luồng với Dart Isolates:** Khác với mô hình chia sẻ bộ nhớ truyền thống (shared memory), Dart sử dụng mô hình *Isolates* – các luồng thực thi độc lập với không gian bộ nhớ riêng biệt, giao tiếp với nhau thông qua cơ chế truyền thông điệp (message passing). Đối với các tác vụ đòi hỏi năng lực tính toán lớn hoặc giải mã tập dữ liệu JSON danh bạ/bảng lương kích thước lớn, ứng dụng sử dụng `Isolate.run()` để chuyển việc xử lý sang luồng phụ, giúp giao diện người dùng luôn duy trì tốc độ khung hình 60–120 FPS ổn định mà không xảy ra hiện tượng giật khung hình (*jank*).

---

## 3.2.4. Đánh giá và lựa chọn giải pháp quản trị trạng thái

Quản trị trạng thái là thành phần trung tâm xử lý dữ liệu của ứng dụng Flutter, ảnh hưởng trực tiếp đến cấu trúc mã nguồn, khả năng bảo trì và khả năng kiểm thử tự động.

### Bảng 3.2: So sánh các giải pháp quản trị trạng thái trong Flutter

| Giải pháp | Ưu điểm | Hạn chế | Đánh giá tính phù hợp với MyHCMUT |
| :--- | :--- | :--- | :--- |
| **Provider** | • Cấu trúc đơn giản, dễ tiếp cận.<br/>• Được xây dựng dựa trên cơ chế `InheritedWidget` của Flutter và tích hợp tự nhiên với cây widget thông qua `BuildContext`. | • Phụ thuộc `BuildContext`, dễ phát sinh lỗi runtime nếu truy xuất ngoài cây widget.<br/>• Khó quản lý trạng thái tại các tầng logic độc lập hoặc service không có giao diện. | Không lựa chọn do khả năng quản lý trạng thái ngoài cây giao diện hạn chế, không tối ưu cho kiến trúc phân lớp Clean Architecture. |
| **GetX** | • Cú pháp ngắn gọn, cho phép truy xuất trạng thái không phụ thuộc `BuildContext`.<br/>• Tích hợp sẵn quản lý trạng thái, định tuyến và tiêm phụ thuộc trong cùng một thư viện. | • Cách tiếp cận tích hợp nhiều trách nhiệm giúp giảm mã cấu hình, nhưng nếu không quy định rõ ranh giới sử dụng có thể làm tăng mức độ phụ thuộc giữa các tầng trong ứng dụng lớn. | Không lựa chọn do thiếu tính phân tách rành mạch giữa các tầng kiến trúc trong dự án monorepo gồm nhiều module độc lập. |
| **BLoC / Cubit** | • Kiến trúc phân tách rõ ràng giữa giao diện và logic nghiệp vụ.<br/>• Luồng dữ liệu một chiều chuẩn mực, rất thuận lợi cho việc viết Unit Test. | • Với BLoC đầy đủ, việc mô hình hóa Event và State có thể làm tăng lượng mã cần duy trì; Cubit giảm đáng kể phần này nhưng vẫn yêu cầu tổ chức state và luồng cập nhật theo mô hình riêng. | Không lựa chọn do chi phí xây dựng và duy trì mã nguồn cao đối với các tác vụ truy xuất dữ liệu CRUD thông thường. |
| **Riverpod (3.x)** | • Cung cấp API có tính an toàn kiểu dữ liệu cao; khi kết hợp với code generation, nhiều sai sót liên quan đến kiểu dữ liệu và khai báo provider có thể được phát hiện sớm trong quá trình biên dịch.<br/>• Cung cấp cơ chế biểu diễn nhất quán các trạng thái loading, data và error thông qua `AsyncValue`.<br/>• Độc lập với `BuildContext`, tự động giải phóng tài nguyên qua `autoDispose`. | • Đòi hỏi người phát triển làm quen với mô hình lập trình hàm phản ứng (*reactive functional*).<br/>• Cần quản lý cấu hình các provider phụ thuộc lẫn nhau một cách chặt chẽ. | **Được lựa chọn.** Riverpod đáp ứng yêu cầu an toàn kiểu dữ liệu, cho phép quản lý logic nghiệp vụ tách biệt hoàn toàn khỏi widget tree và chuẩn hóa xử lý bất đồng bộ. |

👉 **Kết luận:** Nhóm lựa chọn **Riverpod 3.x (`flutter_riverpod`, `riverpod_annotation`)** kết hợp cùng bộ sinh mã `riverpod_generator` làm giải pháp quản trị trạng thái và tiêm phụ thuộc (Dependency Injection) cho toàn bộ ứng dụng.

---

## 3.2.5. Đánh giá và lựa chọn giải pháp điều hướng và liên kết sâu

Cơ chế điều hướng của MyHCMUT cần hỗ trợ cấu trúc thanh điều hướng đa tab lồng nhau và phân giải liên kết sâu từ thông báo đẩy FCM đến trực tiếp màn hình chi tiết nghiệp vụ.

### Bảng 3.3: So sánh các giải pháp điều hướng trong Flutter

| Giải pháp | Ưu điểm | Hạn chế | Đánh giá tính phù hợp với MyHCMUT |
| :--- | :--- | :--- | :--- |
| **Navigator thuần<br/>(1.0 & 2.0)** | • Tích hợp sẵn trong Flutter SDK, không phụ thuộc thư viện ngoài.<br/>• Phù hợp với các ứng dụng có luồng chuyển trang tuyến tính đơn giản. | • Navigator 1.0 mang tính mệnh lệnh (imperative), khó quản lý ngăn xếp phức tạp.<br/>• Navigator 2.0 yêu cầu cấu hình khai báo rườm rà (*RouterDelegate / RouteInformationParser*). | Không lựa chọn do chi phí hiện thực và bảo trì cơ chế điều hướng phân cấp cao. |
| **AutoRoute** | • Định tuyến khai báo mạnh mẽ thông qua sinh mã tự động (*code generation*).<br/>• Hỗ trợ cấu hình bộ bảo vệ tuyến đường (route guards) và điều hướng theo tab tốt. | • Phụ thuộc vào quá trình sinh mã cho mỗi thay đổi liên quan đến định tuyến.<br/>• Cấu hình chia sẻ định tuyến giữa các package độc lập trong monorepo kém linh hoạt. | Không lựa chọn vì làm tăng thời gian build do phụ thuộc sinh mã và cấu hình đa package phức tạp. |
| **GoRouter** | • Định tuyến khai báo theo cấu trúc URI rõ ràng và tích hợp sẵn cơ chế phân giải liên kết sâu linh hoạt.<br/>• `StatefulShellRoute` cho phép duy trì navigation stack độc lập của từng nhánh trong cấu trúc điều hướng đa tab. | • Cần lưu ý quản lý ngữ cảnh điều hướng khi hiển thị các hộp thoại (dialogs) lồng nhau.<br/>• Cú pháp chuyển đổi giữa các phiên bản lớn có sự thay đổi nhất định. | **Được lựa chọn.** GoRouter phù hợp với kiến trúc điều hướng đa tab và yêu cầu xử lý liên kết sâu từ thông báo FCM của MyHCMUT. |

👉 **Kết luận:** Thư viện **GoRouter** được lựa chọn để quản lý toàn bộ luồng điều hướng khai báo, kiểm soát quyền truy cập trang (Route Guards) và phân giải liên kết sâu từ thông báo đẩy FCM.

---

## 3.2.6. Đánh giá và lựa chọn thư viện truyền thông mạng

Tầng giao tiếp mạng của MyHCMUT cần tương tác đồng thời với 3 dịch vụ backend độc lập (`myhcmut-be`, `hrm-be`, `ioffice-be`), đòi hỏi thư viện hỗ trợ can thiệp luồng yêu cầu/phản hồi linh hoạt.

### Bảng 3.4: So sánh các thư viện truyền thông mạng trong Flutter

| Thư viện | Ưu điểm | Hạn chế | Đánh giá tính phù hợp với MyHCMUT |
| :--- | :--- | :--- | :--- |
| **package:http** | • Gói thư viện độc lập do Dart team phát triển trên pub.dev, cấu trúc gọn nhẹ và dễ tiếp cận.<br/>• Đáp ứng tốt các yêu cầu gửi nhận HTTP cơ bản. | • Không hỗ trợ sẵn hệ thống bộ chặn (*interceptors*) để can thiệp luồng dữ liệu.<br/>• Thiếu cơ chế hủy yêu cầu đang thực thi và phức tạp khi theo dõi tiến trình tải tệp. | Không lựa chọn do không đáp ứng thuận tiện cho việc can thiệp token xác thực đa miền và truyền nhận tệp đính kèm. |
| **Dio** | • Hệ thống bộ chặn đa tầng mạnh mẽ hỗ trợ tự động gắn token theo tên miền đích và xử lý lỗi tập trung.<br/>• Hỗ trợ `CancelToken` giúp hủy yêu cầu khi chuyển màn hình và cung cấp callback giám sát tiến trình truyền tệp. | • Cơ chế interceptor và retry cần được kiểm soát cẩn thận, đặc biệt khi thực hiện refresh token để tránh request lặp hoặc nhiều request đồng thời cùng kích hoạt quá trình refresh. | **Được lựa chọn.** Dio đáp ứng trực tiếp các yêu cầu giao tiếp mạng đa máy chủ, xử lý refresh token tự động và truyền tải tệp tin của hệ thống. |

*Lưu ý về tầng trừu tượng API:* Các giải pháp sinh API client như Chopper hay Retrofit không được áp dụng vì hệ thống hiện tại sử dụng mô hình Repository kết hợp Dio trực tiếp, không đặt yêu cầu sinh mã API client trung gian nhằm giảm bớt sự phụ thuộc vào `build_runner`.

---

## 3.2.7. Đánh giá và lựa chọn giải pháp lưu trữ dữ liệu cục bộ

Ứng dụng MyHCMUT xử lý nhiều loại dữ liệu cục bộ với yêu cầu bảo mật và cấu trúc khác nhau.

### Bảng 3.5: So sánh các giải pháp lưu trữ dữ liệu cục bộ trong Flutter

| Giải pháp | Cơ chế lưu trữ | Ưu điểm | Hạn chế | Định hướng áp dụng trong MyHCMUT |
| :--- | :--- | :--- | :--- | :--- |
| **SharedPreferences** | Khóa – giá trị (Key-Value) cục bộ. | • Cơ chế lưu trữ key–value cục bộ dành cho các giá trị cấu hình đơn giản.<br/>• Cài đặt và sử dụng thuận tiện. | • Không được thiết kế để lưu trữ dữ liệu nhạy cảm.<br/>• Không hỗ trợ truy vấn lọc có điều kiện phức tạp. | Được chọn để lưu trữ các cấu hình giao diện không nhạy cảm (ngôn ngữ, giao diện sáng/tối) và các cờ trạng thái phiên làm việc. |
| **Flutter Secure Storage** | Lưu trữ bảo mật dựa trên Keychain / Keystore của hệ điều hành. | • Sử dụng cơ chế lưu trữ bảo mật do hệ điều hành cung cấp (Keychain trên iOS và Keystore trên Android).<br/>• Đảm bảo an toàn cao cho dữ liệu định danh. | • Tốc độ đọc/ghi chậm hơn do trải qua quá trình mã hóa và giải mã.<br/>• Không tối ưu cho việc lưu trữ các tập dữ liệu có kích thước lớn. | Được chọn để lưu trữ an toàn các thông tin nhạy cảm như access token, refresh token và khóa bảo mật của người dùng. |
| **Hive** | Cơ sở dữ liệu NoSQL dạng khóa – giá trị nhị phân. | • Tốc độ đọc/ghi dữ liệu nhị phân rất nhanh.<br/>• Hỗ trợ lưu trữ trực tiếp đối tượng Dart thông qua bộ chuyển đổi (*TypeAdapter*). | • Khả năng xử lý quan hệ và truy vấn lọc đa điều kiện hạn chế.<br/>• Yêu cầu cấu hình bộ chuyển đổi dữ liệu thủ công. | Không lựa chọn vì không tối ưu bằng SQLite cho bài toán dữ liệu phân cấp có cấu trúc. |
| **SQLite (`sqflite`)** | Cơ sở dữ liệu quan hệ cục bộ nhúng trong ứng dụng. | • Hỗ trợ đầy đủ ngôn ngữ SQL, giao dịch (*transactions*) và lập chỉ mục (*indexing*).<br/>• Tối ưu việc lọc, tìm kiếm (`LIKE`) và phân trang (`LIMIT/OFFSET`) tập dữ liệu lớn. | • Yêu cầu định nghĩa cấu trúc bảng (*schema*) và câu lệnh truy vấn tường minh.<br/>• Tốn nhiều tài nguyên hơn cho việc khởi tạo và quản lý kết nối CSDL. | Được chọn để lưu trữ và lập chỉ mục dữ liệu cục bộ có cấu trúc cần truy vấn (như bộ đệm danh mục cán bộ, phòng ban). |

👉 **Kết luận:** Nhóm áp dụng chiến lược **Lưu trữ Cục bộ Phân tầng**: kết hợp `shared_preferences` (lưu cấu hình giao diện), `flutter_secure_storage` (lưu trữ an toàn token xác thực) và `sqflite` (lưu trữ cơ sở dữ liệu quan hệ cục bộ cho dữ liệu có cấu trúc cần truy vấn).

---

## 3.2.8. Kiến trúc Quản lý Dự án Monorepo với Melos

Để giải quyết bài toán phát triển đồng thời nhiều phân hệ nghiệp vụ lớn (HRM, iOffice, Nhiệm vụ, Lịch công tác) mà không làm phình to một gói mã nguồn nguyên khối (Monolithic), nhóm áp dụng mô hình **Modular Monorepo** được quản lý bởi công cụ **Melos**.

### Bảng 3.6: So sánh kiến trúc cấu trúc dự án Monorepo và Single Package

| Tiêu chí | Single Package (Nguyên khối) | Modular Monorepo với Melos (Được chọn) |
| :--- | :--- | :--- |
| **Cấu trúc Mã nguồn** | Toàn bộ mã nguồn nằm trong một thư mục `lib/` duy nhất. | Chia tách thành các Core Packages và Feature Modules riêng biệt. |
| **Tính Tái sử dụng** | Khó tái sử dụng Design System hoặc Network Client. | Gói `global_system` và `network` được chia sẻ nhất quán cho mọi module. |
| **Phụ thuộc vòng** | Dễ xảy ra import chéo, gây phụ thuộc vòng lộn xộn. | Phân tầng nghiêm ngặt: Feature Module chỉ phụ thuộc Core Packages, không phụ thuộc lẫn nhau. |
| **Tự động hóa CI/CD** | Phải chạy kiểm thử toàn bộ dự án dù chỉ chỉnh sửa một dòng mã. | Chạy phân tích tĩnh, định dạng và kiểm thử độc lập cho từng module bị ảnh hưởng. |

Việc áp dụng Melos mang lại các lợi ích kiến trúc rõ rệt:
* **Quản lý phụ thuộc tập trung:** Tự động liên kết các package nội bộ (local linking) trong quá trình phát triển mà không cần xuất bản lên pub.dev.
* **Tự động hóa tác vụ (Scripts Automation):** Thực thi đồng loạt các lệnh `build_runner`, phân tích tĩnh (`dart analyze`), định dạng mã (`dart format`) và chạy kiểm thử (`flutter test`) trên toàn bộ hoặc từng package riêng biệt.
* **Kiểm soát ranh giới module (Architectural Boundaries):** Ngăn chặn triệt để sự phụ thuộc chéo giữa các phân hệ nghiệp vụ độc lập, giúp dự án dễ dàng mở rộng thêm các phân hệ mới trong tương lai.

---

## 3.2.9. Các công nghệ và thư viện hỗ trợ tích hợp

Bên cạnh các công nghệ cốt lõi, ứng dụng MyHCMUT sử dụng một số thư viện hỗ trợ nhằm tối ưu hóa quy trình phát triển và nâng cao độ tin cậy của mã nguồn:

* **Freezed & json_serializable:** Bộ công cụ sinh mã giúp tạo các lớp dữ liệu bất biến (immutable data classes), hỗ trợ tính năng so sánh theo giá trị (value equality), hàm sao chép `copyWith`, cơ chế khớp mẫu (pattern matching / union types) và tự động hóa chuyển đổi JSON hai chiều an toàn với kiểu dữ liệu.
* **Firebase Cloud Messaging (FCM HTTP v1 API):** Tiếp nhận thông báo đẩy thời gian thực từ máy chủ Backend, hỗ trợ xử lý cả ba trạng thái của ứng dụng (Foreground, Background, Terminated). Tầng tiếp nhận thông báo trích xuất metadata nghiệp vụ và phối hợp với GoRouter để kích hoạt điều hướng liên kết sâu (Deep Linking).
* **flutter_secure_storage:** Thư viện bao bọc các dịch vụ lưu trữ bảo mật của hệ điều hành (Keychain trên iOS và Keystore trên Android), được sử dụng để lưu trữ an toàn cặp khóa định danh, Access Token và Refresh Token.

---

## 3.2.10. Tổng hợp các công nghệ và thư viện được lựa chọn

### Bảng 3.7: Bảng tổng hợp công nghệ và thư viện phía Mobile Frontend MyHCMUT

| Thành phần kỹ thuật | Thư viện / Công nghệ lựa chọn | Phiên bản thực tế | Vai trò cốt lõi trong hệ thống MyHCMUT |
| :--- | :--- | :---: | :--- |
| **Nền tảng di động** | **Flutter SDK** | $\ge 3.24.0$ | Khung phát triển ứng dụng di động đa nền tảng (Android & iOS) từ một cơ sở mã nguồn chung. |
| **Ngôn ngữ lập trình** | **Dart SDK** | $\ge 3.5.0$ | Ngôn ngữ phát triển chính với cơ chế an toàn kiểu dữ liệu với null (sound null safety), xử lý bất đồng bộ và Isolates. |
| **Quản trị trạng thái & DI** | **Riverpod** (`flutter_riverpod`, `riverpod_annotation`) | `^3.0.0` | Quản lý trạng thái bất đồng bộ (`AsyncValue`), vòng đời dữ liệu (`autoDispose`) và tiêm phụ thuộc (Dependency Injection) độc lập với UI. |
| **Định tuyến & Deep Linking** | **GoRouter** | `^16.2.4` | Định tuyến khai báo, duy trì trạng thái tab (`StatefulShellRoute`) và phân giải liên kết sâu từ thông báo FCM. |
| **Truyền thông mạng (HTTP)** | **Dio** | `^5.4.0` | Thực thi kết nối mạng, xử lý chuỗi bộ chặn xác thực đa miền, hỗ trợ `CancelToken` và giám sát tiến trình truyền tệp. |
| **Quản lý Monorepo** | **Melos** | `^6.0.0` | Quản lý đa package trong monorepo, liên kết cục bộ và tự động hóa quy trình kiểm thử/phân tích tĩnh. |
| **Mô hình dữ liệu bất biến** | **Freezed & json_serializable** | `^2.5.7` | Tự động sinh mã model bất biến, hỗ trợ union types và tuần tự hóa/giải tuần tự hóa JSON an toàn kiểu dữ liệu. |
| **Lưu trữ cấu hình & cờ** | **SharedPreferences** | `^2.3.3` | Lưu trữ cấu hình giao diện (chủ đề, ngôn ngữ, cờ trạng thái) và thông tin phiên làm việc cục bộ. |
| **Lưu trữ bảo mật Token** | **Flutter Secure Storage** | `^9.2.2` | Lưu trữ an toàn dựa trên cơ chế bảo mật hệ điều hành (Keychain/Keystore) cho access token và refresh token. |
| **Cơ sở dữ liệu cục bộ** | **Sqflite (SQLite)** | `^2.3.3+1` | Lưu trữ và lập chỉ mục dữ liệu cục bộ có cấu trúc cần truy vấn (danh mục cán bộ, phòng ban). |
| **Thông báo đẩy** | **Firebase Messaging (FCM)** | `^15.1.3` | Tiếp nhận thông báo đẩy nền tảng, trích xuất metadata phục vụ điều hướng liên kết sâu. |
