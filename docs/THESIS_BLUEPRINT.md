# BẢN THIẾT KẾ ĐẶC TẢ BÁO CÁO TỐT NGHIỆP (THESIS BLUEPRINT)
*Phiên bản Chuẩn hóa Cấu trúc 7 Chương & Module hóa Chapter 4 (Ground Truth có điều kiện tái lập)*

> **Lưu ý bằng chứng:** Commit Gate 0 vẫn truy xuất được. Các chỉ số kiểm thử trong blueprint là kết quả Gate 0 đã ghi nhận; xem `12_BASELINE_REPRODUCIBILITY_AUDIT.md` để biết giới hạn tái lập hiện tại trước khi nêu chúng như kết quả vừa thực thi.

> **Tên Đề tài Đồ án Tốt nghiệp:** “Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học”  
> **Sinh viên thực hiện:** Vũ Xuân Chính (2210392) – Tống Duy Khang (2211467)  
> **Giảng viên Hướng dẫn:** ThS. Nguyễn Thanh Tùng  
> **Đơn vị đào tạo:** Khoa Khoa học & Kỹ thuật Máy tính – Trường Đại học Bách khoa – ĐHQG-HCM  
> **Định hướng Đóng góp:** Trọng tâm đóng góp của sinh viên là nghiên cứu, thiết kế và hiện thực hóa ứng dụng di động MyHCMUT Mobile đa nền tảng cùng các thành phần backend mở rộng (Mobile Adapters, SSO Ticket Service, API Validate) phục vụ tích hợp hệ sinh thái hiện hữu của Nhà trường.

---

## 1. Bản chất, Định vị và Tổng quan Tương tác Hệ thống
- **Thực trạng**: Trường Đại học Bách khoa – ĐHQG-HCM là cơ sở giáo dục đại học có quy mô hoạt động lớn với 1.061 viên chức và người lao động, trong đó có 667 giảng viên; quy mô đào tạo khoảng 28.000 học viên và sinh viên (theo thông tin chính thức được Nhà trường công bố năm 2026, hcmut.edu.vn). Các hệ thống quản trị nhân sự (HRM), văn phòng điện tử (iOffice), điều hành nhiệm vụ (Tasks) và lịch công tác hiện hữu của Nhà trường chủ yếu hoạt động trên nền tảng Web Desktop, gây bất tiện khi cán bộ di chuyển giữa 2 cơ sở (Quận 10 và Dĩ An - Thủ Đức) hoặc cần xử lý công việc tức thời ngoài văn phòng.
- **Mục tiêu cốt lõi của Đề tài**: Thiết kế và hiện thực **Ứng dụng di động đa nền tảng (MyHCMUT Mobile App)** phục vụ cán bộ, giảng viên và lãnh đạo nhà trường; đóng vai trò là một cổng giao tiếp di động tích hợp với các dịch vụ Backend hiện hữu của Nhà trường thông qua REST API, WebSocket và Event Streaming; đồng thời tích hợp WebApp Hybrid (In-App WebView với One-Time Ticket SSO) cho các biểu mẫu quản trị chuyên sâu.
- **Tổng quan Ma trận Tương tác Đa Dự án:**
  1. `myhcmut-mobile` (Flutter) $\leftrightarrow$ `myhcmut-be` (Port 4000): Xác thực CAS SSO / LDAP và tiếp nhận chuỗi Bearer JWT Token dùng chung (Shared JWT).
  2. `myhcmut-mobile` $\leftrightarrow$ `hrm-be` (Port 6023): Tra cứu các danh mục lý lịch do HRM cung cấp, kiểm tra điều kiện nghỉ phép, tạo/duyệt đơn nghỉ phép và đăng ký/phê duyệt đi công tác (`/api/tcns-di-cong-tac/*`); yêu cầu cấp vé One-Time Ticket SSO (TTL 60s trên Redis).
  3. `myhcmut-mobile` $\leftrightarrow$ `hrm-fe` (Port 6022): Mở giao diện In-App WebView nhúng WebApp sửa lý lịch; nhận tín hiệu `profile_updated` qua JavaScript Bridge để reload trạng thái trên mobile.
  4. `myhcmut-mobile` $\leftrightarrow$ `ioffice-be` (Port 3001): Tra cứu văn bản đến/đi (`eoffice_van_ban_den`, `eoffice_distribution`) và xem PDF trực tiếp; quản lý nhiệm vụ (Tasks) theo cây `outlined-tree`; theo dõi Lịch tuần và Lịch làm việc tổng hợp đa phân hệ (Unified Calendar Aggregation kết hợp lịch họp iOffice, lịch nghỉ phép và công tác HRM qua Adapter Pattern); cập nhật trạng thái điểm danh qua WebSocket (Socket.IO).
  5. `hrm-be` / `ioffice-be` $\rightarrow$ `Kafka` $\rightarrow$ `Google FCM` $\rightarrow$ `myhcmut-mobile`: Đường ống thông báo đẩy bất đồng bộ dựa trên 4 trường Metadata có cấu trúc (`type`, `targetId`, `route`, `action`) phục vụ Deep Linking.

---

## 2. Bản đồ Cấu trúc Dự án theo Thư mục (Codebase Folder Architecture)

```text
myhcmut-mobile/
├── apps/myhcmut/               <- Ứng dụng chính (GoRouter Root, Firebase Init, ShellRoute)
├── packages/
│   ├── core/
│   │   ├── global_system/      <- Material 3 Semantic Tokens, BeVietnamPro, Toastification (3 unit tests)
│   │   └── network/            <- Dio Client, MultiDomainAuthInterceptor, MultiDomainTokenManager
│   └── shared/
│       ├── auth/               <- AuthStateProvider, AuthUser DTO, One-Time Ticket SSO Client (2 unit tests)
│       └── localization/       <- Đa ngôn ngữ động Tiếng Việt / Tiếng Anh (shared_localization, 8 unit tests)
└── modules/
    ├── hrm/                    <- Phân hệ Quản trị Nhân sự (Lý lịch, Diff, Wizard Nghỉ phép 3 bước, Đi công tác; 233 unit & widget tests)
    ├── ioffice/                <- Phân hệ Văn phòng số, Nhiệm vụ và Lịch công tác (77 unit & widget tests)
    │   ├── lib/src/
    │   │   ├── document/       <- Tra cứu Văn bản đến/đi (eoffice_van_ban_den, eoffice_distribution), xem PDF trực tiếp
    │   │   ├── mission/        <- Quản lý Nhiệm vụ (3 nhóm, 5 tab lọc, 4 tab chi tiết, cây outlined-tree)
    │   │   └── schedule/       <- Lịch tuần, Lịch làm việc tổng hợp đa phân hệ, cập nhật trạng thái điểm danh qua WebSocket Socket.IO
    │   │       ├── mappers/    <- Unified Calendar Adapters: HrmLeaveScheduleMapper (-phieuId), HrmBusinessTripScheduleMapper (-(1000000+id)), ScheduleItemHelper
    │   │       ├── models/     <- ScheduleItemModel, AttendanceModel, ScheduleAttendanceStatus (none, attended, absent, notAttended)
    │   │       ├── providers/  <- Riverpod unifiedScheduleProvider (tổng hợp 3 nguồn iOffice, Nghỉ phép, Đi công tác)
    │   │       └── widgets/    <- CustomTableCalendar (căn giữa ngày, loại bỏ marker dots chống RenderFlex overflow), CompactScheduleView, ScheduleEventCardWidget (màu ngữ nghĩa #1E88E5, #FF9800, #1488DB)
    │   └── test/               <- 77 unit & widget tests (bao gồm 14 tests cho mappers & helper và 20 tests mới cho widgets: compact_schedule, custom_table_calendar, schedule_event_card)
    │       ├── schedule/
    │       │   ├── hrm_leave_schedule_mapper_test.dart        <- 5 tests kiểm tra chuyển đổi đơn nghỉ phép sang ScheduleItemModel
    │       │   ├── hrm_business_trip_schedule_mapper_test.dart<- 5 tests kiểm tra chuyển đổi công tác sang ScheduleItemModel
    │       │   ├── schedule_item_helper_test.dart             <- 4 tests kiểm tra helper phân loại và hỗ trợ UI
    │       │   ├── compact_schedule_view_test.dart            <- Widget tests hiển thị lịch thu gọn
    │       │   ├── custom_table_calendar_test.dart            <- Widget tests căn giữa ngày & không overflow marker dots
    │       │   └── schedule_event_card_test.dart              <- Widget tests thẻ sự kiện với semantic colors
    │       └── ... (các bài test khác cho mission, document và attendance)
    └── notification/           <- Phân hệ Thông báo đẩy FCM, Metadata Parser, Deep Linking (47 unit tests)
```

---

## 3. Ma trận Phân quyền Người dùng (RBAC Matrix)

| Tác nhân (Actor) | Quyền hệ thống (`permissions`) | Chức năng chính trên Mobile App |
| :--- | :--- | :--- |
| **Cán bộ / Giảng viên** | `cn:ly_lich`<br>`cn:nghi_phep`<br>`cn:di_cong_tac`<br>`iofficeMission:read`<br>`scheduleGeneral:read` | • Tra cứu các danh mục lý lịch cán bộ.<br>• Gửi đề xuất cập nhật lý lịch kèm ảnh minh chứng.<br>• Đăng ký nghỉ phép Form Wizard 3 bước kết hợp kiểm tra điều kiện; khi quá hạn, ứng dụng chỉ điều hướng đến điểm truy cập Giải trình, còn workflow Giải trình là hướng phát triển.<br>• Đăng ký chuyến đi công tác (địa điểm, kinh phí, đoàn công tác).<br>• Tra cứu văn bản đến được giao, xem tệp PDF trực tiếp.<br>• Xem danh sách nhiệm vụ, cây đầu việc, gửi báo cáo đợt.<br>• Xem lịch công tác, Lịch làm việc tổng hợp đa phân hệ (họp, nghỉ phép, công tác qua Unified Calendar), điểm danh họp hoặc báo vắng.<br>• Nhận thông báo đẩy và điều hướng sâu (Deep Link). |
| **Lãnh đạo Đơn vị** (Trưởng/Phó Khoa, Phòng) | `dv:nghi_phep:read/write`<br>`dv:di_cong_tac:read/write`<br>`eofficeVanBanDen:manage`<br>`iofficeMission:manage` | • Toàn bộ quyền của Cán bộ.<br>• Thẩm định & Phê duyệt/Từ chối đơn nghỉ phép đơn vị.<br>• Phê duyệt danh sách cán bộ đi công tác.<br>• Phân phối chỉ đạo văn bản đến kèm cán bộ xử lý và hạn chót (`eoffice_van_ban_den`, `eoffice_distribution`).<br>• Giám sát tiến độ nhiệm vụ đơn vị, duyệt báo cáo tiến độ.<br>• Tạo lịch họp nội bộ đơn vị. |
| **Lãnh đạo Trường** (Hiệu trưởng, Phó HT) | `tcns:quy_trinh:manage`<br>`eofficeVanBanDi:read`<br>`scheduleGeneral:manage` | • Xem xét văn bản đi cấp trường.<br>• Cho ý kiến chỉ đạo văn bản đến quan trọng.<br>• Theo dõi các nhiệm vụ trọng tâm toàn trường.<br>• Phê duyệt Lịch tuần trường chính thức. |
| **Chuyên viên TCCB** (Mã đơn vị `94`) | `tcns:ly_lich:manage`<br>`tcns:request_ly_lich:read`<br>`tcns:nghi_phep:write` | • Thẩm định hồ sơ so sánh sai khác (Diff Viewer) sửa lý lịch.<br>• Phê duyệt đơn nghỉ phép bước cuối & Cấp số quyết định.<br>• Quản lý quỹ phép năm cán bộ. |
| **Văn thư Trường/ĐV** | `eofficeVanBanDen:write`<br>`scheduleGeneral:write` | • Tiếp nhận, scan, nhập metadata văn bản đến.<br>• Theo dõi luân chuyển văn bản đi.<br>• Tổng hợp lịch công tác tuần trường. |

---

## 4. Cấu trúc Báo cáo Luận văn 7 Chương Chuẩn Mực

> **Quy chuẩn:** Soạn thảo hoàn toàn bằng **LaTeX** (thư mục `HK253_DATN_341_2211467_2210392/`).  
> **Phân định Cấu trúc Chương 4 và Chương 5:**  
> - **Chương 4:** Tập trung vào **Đặc tả Yêu cầu Nghiệp vụ**: Tác nhân, Ma trận RBAC, Sơ đồ Use Case tổng thể, Bảng đặc tả Use Case chi tiết, Quy tắc nghiệp vụ (Business Rules) và Sơ đồ Hoạt động (Activity Diagrams) theo từng phân hệ; cùng Yêu cầu chức năng và Phi chức năng (Chỉ tiêu Thiết kế Mục tiêu).  
> - **Chương 5:** Tập trung vào **Phân tích và Thiết kế Kỹ thuật**: Lược đồ CSDL quan hệ (Targeted ERD các bảng cốt lõi), Kiến trúc Clean Architecture 3 tầng phía Client, Sơ đồ Tuần tự Kỹ thuật (Technical Sequence Diagrams) cho các luồng tương tác, Bộ điều phối Token đa miền, Pipeline thông báo đẩy Kafka-FCM, Thiết kế Tích hợp Unified Calendar (Adapter Pattern), và Thiết kế Kiểm soát Tương tranh 2 Lớp (Advisory Lock).

```text
HK253_DATN_341_2211467_2210392/
├── Chapter1/  CHƯƠNG I: GIỚI THIỆU (10%)
│   ├── 1.1 Bối cảnh và vấn đề thực tế (Chuyển đổi số giáo dục ĐH theo QĐ 749/QĐ-TTg, 131/QĐ-TTg; số liệu công bố năm 2026: 1.061 viên chức và người lao động, 667 giảng viên, 28.000 học viên/sinh viên; 4 điểm nghẽn Web Desktop khi di chuyển giữa 2 cơ sở)
│   ├── 1.2 Bài toán đặt ra (5 nhóm vấn đề: Giao diện mobile tối ưu, Tích hợp đa hệ thống HRM & iOffice, Quy trình nghiệp vụ nhiều bước nghỉ phép & công tác, Tái sử dụng WebApp qua One-Time Ticket SSO không lộ token, Tiếp nhận và điều hướng thông báo có ngữ cảnh; Câu hỏi nghiên cứu trọng tâm)
│   ├── 1.3 Mục tiêu của đề tài (Mục tiêu tổng quát & 7 mục tiêu cụ thể: Nền tảng mobile đa phân hệ, Hồ sơ cán bộ, Quy trình nghỉ phép & Đi công tác, Nghiệp vụ văn phòng iOffice & Lịch công tác/Điểm danh, Trung tâm thông báo & Deep link, Cầu nối One-Time Ticket SSO, Kiểm thử tự động)
│   ├── 1.4 Đối tượng, phạm vi và ranh giới hệ thống:
│   │   ├── 1.4.1 Đối tượng sử dụng (Cán bộ/giảng viên, Lãnh đạo đơn vị, Lãnh đạo Trường, Chuyên viên TCCB/đơn vị/BGH, iOffice roles)
│   │   ├── 1.4.2 Phạm vi chức năng (7 nhóm nghiệp vụ chính: Hồ sơ, Nghỉ phép, Đi công tác, Văn bản, Nhiệm vụ, Lịch công tác/Điểm danh, Thông báo)
│   │   ├── 1.4.3 Ranh giới hệ thống (3 nguyên tắc: Backend-authoritative, Mobile-first interaction, Web-reuse qua In-App WebView)
│   │   ├── 1.4.4 Bảng phân công nhiệm vụ và đóng góp (Tỷ lệ 50/50 chuẩn mực):
│   │   │   • Vũ Xuân Chính (50%): Kiến trúc nền tảng MyHCMUT Mobile & package dùng chung (network, state, routing); Cơ chế cầu nối One-Time Ticket SSO; Phân hệ Hồ sơ cán bộ & Nghỉ phép (mobile & backend mở rộng); Phân hệ Lịch công tác, Điểm danh họp và Trung tâm Thông báo.
│   │   │   • Tống Duy Khang (50%): Phân hệ Quản lý Đi công tác (mô hình dữ liệu client, Wizard 5 bước, màn hình thẩm định/phê duyệt); Phân hệ Quản lý Nhiệm vụ iOffice (cây outlined-tree); Giao diện & xử lý luồng phê duyệt đa cấp; Phối hợp kiểm thử tích hợp luồng nghiệp vụ liên phân hệ và E2E.
│   │   ├── 1.4.5 Phương pháp thực hiện (Quy trình 6 bước từ khảo sát đến đánh giá)
│   │   └── 1.4.6 Đóng góp của nhóm (7 đóng góp chính & phân định minh bạch 4 nhóm thành phần)
│   └── 1.5 Ý nghĩa đề tài & Bố cục báo cáo 7 chương
│
├── Chapter2/  CHƯƠNG II: PHÂN TÍCH CÁC HỆ THỐNG CÓ LIÊN QUAN TRÊN THỊ TRƯỜNG (8%)
│   ├── 2.1 Các hệ thống nghiệp vụ hiện hữu của Nhà trường:
│   │   ├── 2.1.1 Hệ thống quản lý nhân sự HRM (Hồ sơ cán bộ, quy trình nghỉ phép, quy trình đi công tác)
│   │   ├── 2.1.2 Hệ thống văn phòng điện tử iOffice (Văn bản đến/đi, quản lý nhiệm vụ, lịch công tác tuần & điểm danh)
│   │   └── 2.1.3 Nhu cầu về một lớp tương tác Mobile (Kênh truy cập bổ sung, push notification, deep link)
│   ├── 2.2 Một số giải pháp có liên quan trên thị trường:
│   │   ├── 2.2.1 Hệ sinh thái Base HRM (Base Me / Mobile)
│   │   └── 2.2.2 Nền tảng quản trị doanh nghiệp Tanca
│   ├── 2.3 Tiêu chí phân tích và so sánh (5 tiêu chí khoa học: Self-service trên Mobile, Quy trình nghỉ phép & phê duyệt, Quy trình công tác & đoàn, Cơ chế thông báo & điều hướng ngữ cảnh, Tích hợp hệ thống & xác thực)
│   ├── 2.4 Bảng so sánh các giải pháp (Bảng 3 cột: HRM/iOffice hiện hữu vs Base HRM/Tanca vs MyHCMUT Mobile; phân tích luận cứ khoa học)
│   ├── 2.5 Khoảng trống và Hướng giải pháp của MyHCMUT Mobile (Gap Analysis):
│   │   ├── 2.5.1 Lớp tương tác Mobile thống nhất
│   │   ├── 2.5.2 Mobile hóa quy trình nghỉ phép và công tác
│   │   ├── 2.5.3 Tái sử dụng Web và tích hợp xác thực qua One-Time Ticket SSO
│   │   ├── 2.5.4 Tổng hợp Lịch làm việc Đa phân hệ (Unified Calendar Aggregation: tích hợp lịch họp iOffice, lịch nghỉ phép và lịch công tác HRM)
│   │   └── 2.5.5 Định vị giải pháp dựa trên 3 nguyên tắc cốt lõi (Backend-authoritative, Mobile-first, Web-reuse)
│   └── 2.6 Kết luận chương
│
├── Chapter3/  CHƯƠNG III: CƠ SỞ LÝ THUYẾT VÀ CÔNG NGHỆ (15%)
│   ├── 3.1 Cơ sở lý thuyết:
│   │   ├── 3.1.1 Mô hình Kiến trúc MVC (Model--View--Controller): ranh giới Route/Middleware, Controller, Service, Model và Mobile client
│   │   ├── 3.1.2 Kiến trúc Hướng Phân hệ (Modular Architecture): phân rã theo miền nghiệp vụ, high cohesion và loose coupling
│   │   ├── 3.1.3 Kiến trúc Giao tiếp RESTful API và Giao thức HTTPS: tài nguyên, HTTP/JSON, phi trạng thái và TLS
│   │   └── 3.1.4 Cơ chế Quản lý Phiên không trạng thái và Xác thực Thẻ bài (JWT): Bearer token, chữ ký, claims và vé SSO WebView
│   ├── 3.2 Kỹ thuật Frontend & Mẫu thiết kế Adapter cho Lịch làm việc:
│   │   ├── 3.2.1 Flutter và Dart (Sound Null Safety, Concurrency, Event Loop, Isolates; Bảng so sánh Native vs React Native vs Flutter)
│   │   ├── 3.2.2 Modular Monorepo và Melos (Quản trị đa gói, độc lập module và tái sử dụng hạ tầng dùng chung)
│   │   ├── 3.2.3 Quản lý trạng thái với Riverpod 3.x (Notifier, AsyncNotifier, AsyncValue, ref.watch)
│   │   ├── 3.2.4 Điều hướng ngữ cảnh tập trung với GoRouter (ShellRoute, Nested Routes, redirect guards, Deep Linking)
│   │   ├── 3.2.5 Giao tiếp mạng với Dio (Interceptors, MultiDomainAuthInterceptor, MultiDomainTokenManager, FormData multipart upload)
│   │   ├── 3.2.6 Lưu trữ cục bộ (Bảng so sánh SQLite lưu danh mục tham chiếu vs SharedPreferences cache nhẹ; Định hướng Secure Storage)
│   │   ├── 3.2.7 Tích hợp WebApp qua In-App WebView (flutter_inappwebview kết hợp JavaScript Bridge hai chiều)
│   │   └── 3.2.8 Mẫu thiết kế Adapter (Adapter Pattern) trong Tổng hợp Lịch làm việc Đa phân hệ (HrmLeaveScheduleMapper, HrmBusinessTripScheduleMapper, ScheduleItemHelper; Quy tắc gán ID âm -phieuId và -(1000000+id) tránh xung đột khóa chính)
│   └── 3.3 Nền tảng Backend hiện hữu và công nghệ tích hợp đa dịch vụ:
│       ├── Node.js Express & TypeScript REST API Service
│       ├── Hệ quản trị CSDL PostgreSQL & Kiểm soát tương tranh bằng PostgreSQL Advisory Lock (`pg_advisory_xact_lock`)
│       ├── Hàng đợi phân tán Apache Kafka (KRaft mode) xử lý sự kiện bất đồng bộ
│       ├── Google Firebase Cloud Messaging (FCM HTTP v1) cho đường ống thông báo đẩy
│       ├── Giao thức WebSocket Socket.IO phục vụ cập nhật trạng thái điểm danh cuộc họp
│       └── In-memory data store Redis lưu trữ vé xác thực One-Time Ticket SSO (TTL 60s, cơ chế atomic getDel)
│
├── Chapter4/  CHƯƠNG IV: PHÂN TÍCH VÀ ĐẶC TẢ YÊU CẦU HỆ THỐNG (25%)
│   ├── 4.1 Xác định người dùng, Ma trận phân quyền RBAC & Sơ đồ Use Case tổng thể (Phân định ranh giới cá nhân: Đi công tác và Nhiệm vụ do Tống Duy Khang; Hồ sơ, Nghỉ phép, Lịch công tác/Điểm danh và Thông báo do Vũ Xuân Chính)
│   ├── 4.2 Yêu cầu chức năng và Đặc tả chi tiết theo Từng Phân hệ Nghiệp vụ:
│   │   ├── section2/auth/           <- Module Xác thực: CAS SSO, Mật khẩu, Dual-Token, One-Time Ticket SSO (UC_AUTH_01, UC_AUTH_02)
│   │   ├── section2/hrm/            <- Module HRM: Tra cứu lý lịch 11 mục, Diff Viewer sửa lý lịch, Form Wizard 3 bước nghỉ phép (UC_LEV_01, UC_LEV_02, UC_LEV_03); Quy tắc nghiệp vụ BR-LEV-01..05 (BR-LEV-03: báo trước 2 ngày làm việc với nghỉ trong nước < 5 ngày, 3 ngày làm việc với nghỉ nước ngoài hoặc >= 5 ngày, trượt mốc giờ 8:00/11:00 theo tcns_setting); Bối cảnh Đi công tác kế thừa kiến trúc (CTX-BTR-01..04)
│   │   ├── section2/ioffice/        <- Module iOffice: Chuẩn hóa tên bảng CSDL eoffice_van_ban_den, eoffice_distribution, eoffice_van_ban_di; Quản lý nhiệm vụ phân cấp outlined-tree; Lịch công tác, Điểm danh họp Socket.IO (UC_SCHED_01) và thực thể trạng thái tham dự ScheduleAttendanceStatus; Đặc tả Lịch làm việc Tổng hợp Đa phân hệ (UC-SCH-02, CLM-SCH-01) cùng giải pháp CustomTableCalendar căn giữa ngày, loại bỏ marker dots chống RenderFlex overflow
│   │   └── section2/notification/   <- Module Thông báo: FCM HTTP v1, Phân tích 4 trường Metadata (type, targetId, route, action), Deep Link điều hướng chính xác màn hình nghiệp vụ (UC_NOTI_01, Activity Xử lý thông báo)
│   └── 4.3 Yêu cầu phi chức năng (tiêu chí nghiệm thu có thể đo; chỉ nêu số liệu khi có log thực nghiệm; yêu cầu an toàn tương tranh đa cấp)
│
├── Chapter5/  CHƯƠNG V: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG (18%)
│   ├── 5.1 Lược đồ Thực thể Quan hệ Dữ liệu (Targeted Database ERD) & Từ điển các Bảng cốt lõi:
│   │   ├── Nhóm bảng HRM: tcns_nhan_su, tcns_nghi_phep, tcns_phep_nam, tcns_di_cong_tac, tcns_setting
│   │   └── Nhóm bảng iOffice (chuẩn hóa tên bảng chính xác): eoffice_van_ban_den, eoffice_distribution, eoffice_van_ban_di, eoffice_mission, eoffice_lich_tuan, eoffice_diem_danh
│   ├── 5.2 Kiến trúc Hệ thống Tổng thể Phía Client:
│   │   ├── Clean Architecture 3 tầng (Presentation, Domain, Data)
│   │   ├── Hệ thống Material 3 Semantic Design Tokens (Color Schemes, Spacing, Typography BeVietnamPro)
│   │   └── Thành phần giao diện dùng chung đa phân hệ (AppBatchActionBar, ReviewDiffCard)
│   ├── 5.3 Thiết kế Các Luồng Kỹ thuật Trọng yếu (Sơ đồ Tuần tự Sequence Diagrams):
│   │   ├── Sơ đồ Tích hợp Unified Calendar: Mô hình Adapter Pattern chuyển đổi sự kiện HRM (LeaveDetailModel qua HrmLeaveScheduleMapper, BusinessTripDetailModel qua HrmBusinessTripScheduleMapper với quy tắc ID âm -phieuId và -(1000000+id)) sang ScheduleItemModel của iOffice, kết hợp qua unifiedScheduleProvider; mô hình hóa trạng thái điểm danh ScheduleAttendanceStatus (none, attended, absent, notAttended) và thiết kế giao diện CustomTableCalendar tối ưu căn giữa ngày, loại bỏ marker dots
│   │   ├── Xác thực SSO qua Vé dùng một lần (One-Time Ticket SSO Bridge, Redis getDel & Làm sạch URL bằng JS History API)
│   │   ├── Quy trình Nộp đơn Nghỉ phép 3 Giai đoạn Kỹ thuật (Tạo nháp -> Wizard Pre-validation -> Nộp duyệt chính thức)
│   │   ├── Quy trình Phê duyệt Đơn Nghỉ phép & Trừ Quỹ phép Năm (Per-Item Commit & Khóa bi quan SELECT FOR UPDATE)
│   │   ├── Điểm danh Họp (UX Gate 1h trên Mobile & Authoritative Backend Enforcement iOffice qua Socket.IO)
│   │   └── Pipeline Thông báo Đẩy Bất đồng bộ (Kafka Topic -> FCM v1 -> Metadata Deep Linking)
│   ├── 5.4 Bộ Điều phối Token Đa miền (MultiDomainAuthInterceptor & MultiDomainTokenManager)
│   └── 5.5 Thiết kế Kiến trúc Kiểm soát Tương tranh 2 Lớp (PostgreSQL Advisory Lock `pg_advisory_xact_lock` tầng backend & đề xuất Exclusion Constraints cấp CSDL)
│
├── Chapter6/  CHƯƠNG VI: KẾT QUẢ HIỆN THỰC VÀ KIỂM THỬ (18%)
│   ├── 6.1 Kết quả Hiện thực Giao diện và Logic các Phân hệ:
│   │   ├── Cấu trúc Dự án Modular Monorepo Melos
│   │   ├── HRM Mobile (các danh mục lý lịch, ReviewDiffCard, Wizard Nghỉ phép 3 bước, Đi công tác 5 bước, AppBatchActionBar dùng chung)
│   │   ├── Chuẩn hóa Giao diện Chéo phân hệ (Redesign các màn hình Approve và Missions theo Design Tokens)
│   │   ├── Schedule Mobile: Lịch tuần, Điểm danh họp WebSocket Socket.IO trước 1h với trạng thái ScheduleAttendanceStatus; Giao diện Lịch làm việc tổng hợp đa phân hệ hiển thị hợp nhất sự kiện họp, nghỉ phép, công tác; Tối ưu CustomTableCalendar căn giữa chữ số ngày, loại bỏ marker dots chống RenderFlex overflow, khôi phục dynamic eventColor và màu ngữ nghĩa (Meeting #1E88E5, Leave #FF9800/#D97706, Business Trip #1488DB)
│   │   └── Trung tâm Thông báo FCM, Deep Linking & Quy trình Kiểm thử Tự động Chạy Cục bộ
│   └── 6.2 Kiểm thử Hệ thống và Đánh giá Kết quả Thực nghiệm:
│       ├── Chiến lược Testing Pyramid (Unit tests, Widget tests, Integration tests, E2E)
│       ├── Kiểm thử Đơn vị & Widget Tests Tự động Chạy Cục bộ: 370 bài test Mobile (modules/hrm: 233, modules/notification: 47, modules/ioffice: 77 [bổ sung 14 tests mappers/helper và 20 tests mới cho widgets: compact_schedule, custom_table_calendar, schedule_event_card], packages/shared/localization: 8, packages/core/global_system: 3, packages/shared/auth: 2) + 57 bài test Backend (46 SSO + 11 Concurrency) = 427 bài test tự động (100% Pass Rate - 427/427 PASS); Minh bạch phân định Pass Rate 100% vs Core Logic Coverage ~70%
│       ├── Kiểm thử Tích hợp Thủ công Luồng Nghiệp vụ Đầu-Cuối (4 Kịch bản E2E trên thiết bị staging)
│       └── Đo lường Định lượng Hiệu năng Thực nghiệm (chỉ công bố chỉ số có log, môi trường và phương pháp đo đi kèm)
│
└── Chapter7/  CHƯƠNG VII: TỔNG KẾT VÀ HƯỚNG PHÁT TRIỂN (6%)
    ├── 7.1 Nhận xét kết quả đạt được (Đối chiếu 7 mục tiêu ban đầu từ Chương 1)
    ├── 7.2 Ý nghĩa khoa học và Giá trị thực tiễn đối với Trường ĐHBK (Cổng giao tiếp di động tập trung, tích hợp an toàn không cần xây dựng lại Web hiện hữu)
    ├── 7.3 Những hạn chế còn tồn tại (Phân hệ KHCN và Module ký số hcmut_sign chưa có dịch vụ backend và máy chủ PKI tập trung tương ứng trong hạ tầng Nhà trường nên dừng ở mức nghiên cứu định hướng; SharedPreferences thay vì nền tảng Secure Storage, Chưa có cơ chế thu hồi vé Backchannel Revocation, Quản lý vòng đời bản nháp chưa có tác vụ cron định kỳ)
    └── 7.4 Hướng phát triển đề tài (Tích hợp dịch vụ backend và CSDL đề tài cho phân hệ KHCN khi Nhà trường số hóa; Tích hợp hệ thống Ký số tập trung PKI/SmartCA; Hiện thực Exclusion Constraints cấp CSDL, Ràng buộc Unique điểm danh, Tác vụ Cron dọn nháp hết hạn, Mã hóa token cấp nền tảng Android Keystore / iOS Keychain)
```

---

## 5. Ma trận Ranh giới Kỹ thuật và Đối chiếu Thực nghiệm (Ground Truth Traceability Matrix)

### 5.1 Thống kê Kiểm thử Tự động Toàn Hệ thống (Automated Test Suite Breakdown)

| Tầng Hệ thống / Phân hệ | Số lượng Bài test | Tỷ lệ Vượt qua (Pass Rate) | Ghi chú Trọng tâm |
| :--- | :---: | :---: | :--- |
| **Mobile Client: `modules/hrm`** | 233 | 100% (233/233) | Kết quả Gate 0 đã ghi nhận cho Hồ sơ cán bộ, ReviewDiffCard, Wizard Nghỉ phép 3 bước, Đi công tác |
| **Mobile Client: `modules/ioffice`** | 77 | 100% (77/77) | Văn bản đến/đi, Nhiệm vụ outlined-tree, Điểm danh họp, 14 tests cho Unified Calendar Adapters & Helper, và **20 tests mới cho widgets (compact_schedule, custom_table_calendar, schedule_event_card)** |
| **Mobile Client: `modules/notification`** | 47 | 100% (47/47) | FCM Payload Parser, Metadata Extraction, Route Resolution & Deep Link Dispatcher |
| **Mobile Client: `packages/shared/localization`** | 8 | 100% (8/8) | Cơ chế chuyển đổi ngôn ngữ động Tiếng Việt / Tiếng Anh |
| **Mobile Client: `packages/core/global_system`** | 3 | 100% (3/3) | Material 3 Semantic Color Schemes, Theme Tokens & Typography |
| **Mobile Client: `packages/shared/auth`** | 2 | 100% (2/2) | One-Time Ticket SSO Client & Auth State Provider |
| **TỔNG CỘNG PHÍA MOBILE CLIENT** | **370** | **100% (370/370)** | **Baseline commit `myhcmut-mobile:4fe5d9c` (Thời gian thực thi ~21s)** |
| **Backend Services: `hrm-be` (SSO)** | 46 | 100% (46/46) | CAS SSO Integration, Ticket Issuer, Redis Bridge & Validation APIs |
| **Backend Services: `hrm-be` (Concurrency)** | 11 | 100% (11/11) | Advisory Lock `pg_advisory_xact_lock`, kiểm soát nộp đơn trùng và tranh chấp duyệt đơn vị |
| **TỔNG CỘNG TOÀN HỆ THỐNG** | **427** | **100% (427/427)** | **Kết quả Gate 0 đã ghi nhận; trạng thái tái lập xem `12_BASELINE_REPRODUCIBILITY_AUDIT.md`** |

### 5.2 Chuẩn hóa Danh xưng Bảng Cơ sở Dữ liệu Phân hệ iOffice

Nhằm phản ánh trung thực cấu trúc CSDL quan hệ thực tế tại `ioffice-be`, loại bỏ hoàn toàn các danh xưng không có thực:

1. **`eoffice_van_ban_den`**: Bảng lưu trữ văn bản đến được tiếp nhận vào cơ quan/đơn vị (thay thế triệt để các danh xưng không chuẩn xác trước đây).
2. **`eoffice_distribution`**: Bảng phân phối chỉ đạo, lưu vết cán bộ chủ trì, cán bộ phối hợp và thời hạn xử lý văn bản.
3. **`eoffice_van_ban_di`**: Bảng quản lý hồ sơ phát hành và luân chuyển văn bản đi.
4. **`eoffice_mission`**: Bảng lưu trữ nhiệm vụ, phân cấp cây đầu việc (`outlined-tree`).
5. **`eoffice_lich_tuan` & `eoffice_diem_danh`**: Nhóm bảng quản lý lịch họp tuần, cuộc họp đơn vị và sự kiện điểm danh.

### 5.3 Quy tắc Nghiệp vụ Báo trước Nghỉ phép (`BR-LEV-03`)

Căn cứ theo tham số cấu hình lưu trong bảng CSDL `tcns_setting`:
- **Nghỉ trong nước dưới 5 ngày**: Báo trước tối thiểu **2 ngày làm việc** (`ngayDKPhepTrongNuoc = 2`, `THRESHOLD_SHORT = 2`).
- **Nghỉ nước ngoài (`hinhThuc == 'NN'`) hoặc dài hạn từ 5 ngày trở lên**: Báo trước tối thiểu **3 ngày làm việc** (`ngayDKPhepNuocNgoai = 3`, `THRESHOLD_LONG = 3`).
- **Cơ chế dịch chuyển khung giờ làm việc (Hour Threshold Shifting)**:
  - Nộp trước `08:00`: Ngày làm việc hiện tại được tính trọn vẹn, tính từ buổi **Sáng**.
  - Nộp từ `08:00` đến trước `11:00`: Buổi sáng đã diễn ra, ngày bắt đầu sớm nhất tính từ buổi **Chiều**.
  - Nộp từ `11:00` trở đi: Hết nửa ngày làm việc đầu tiên, mốc bắt đầu sớm nhất bị đẩy lùi thêm 1 ngày làm việc:
    $$\text{threshold}_{\text{effective}} = \text{threshold} + 1$$
    và bắt đầu từ buổi **Sáng**.

### 5.4 Kiến trúc Tổng hợp Lịch làm việc Đa phân hệ (Unified Calendar Aggregation)

- **Vấn đề giải quyết**: Phân hệ Lịch công tác iOffice vốn chỉ lưu các sự kiện họp hành, trong khi lịch nghỉ phép và lịch đi công tác lại thuộc quyền quản lý của HRM backend.
- **Giải pháp thiết kế**: Áp dụng mô hình **Adapter Pattern** trực tiếp tại tầng Client (Mobile):
  - `HrmLeaveScheduleMapper`: Chuyển đổi dữ liệu `LeaveDetailModel` từ HRM sang đối tượng `ScheduleItemModel` của iOffice, gán ID âm duy nhất:
    $$\text{ID}_{\text{leave}} = -\text{phieuId}$$
  - `HrmBusinessTripScheduleMapper`: Chuyển đổi dữ liệu `BusinessTripDetailModel` sang `ScheduleItemModel`, gán ID âm duy nhất:
    $$\text{ID}_{\text{trip}} = -(1000000 + \text{id})$$
  - `ScheduleItemHelper`: Cung cấp hàm tiện ích phân loại sự kiện (họp, nghỉ phép, công tác) và định dạng hiển thị trực quan trên giao diện lịch tuần/ngày.
  - Riverpod State Aggregation: Provider `unifiedScheduleProvider` gọi bất đồng bộ 3 nguồn dữ liệu, chuẩn hóa qua các Mapper, hợp nhất thành danh sách duy nhất và sắp xếp theo trình tự thời gian bắt đầu.
- **Lợi ích kiến trúc**: Không phá vỡ ranh giới CSDL giữa hai backend độc lập (`hrm-be` và `ioffice-be`), bảo đảm tính toàn vẹn khóa chính nhờ cơ chế phân định ID âm, đồng thời mang lại trải nghiệm xem lịch "tất cả trong một" (All-in-One) cho cán bộ trên Mobile.

### 5.5 Mô hình Trạng thái Điểm danh và Tối ưu Hiển thị Lịch Tuần (CustomTableCalendar & Semantic Colors)

- **Domain Entity `ScheduleAttendanceStatus`**:
  - Quản lý trạng thái điểm danh cuộc họp trên mobile với 4 giá trị xác định:
    - `none`: Mặc định, cuộc họp chưa diễn ra hoặc người dùng chưa thực hiện thao tác điểm danh/báo vắng.
    - `attended`: Đã điểm danh thành công (thực hiện qua WebSocket Socket.IO hoặc xác thực trong khung giờ cho phép 1h trước giờ họp).
    - `absent`: Đã báo vắng có lý do (được ghi nhận hợp lệ trên hệ thống).
    - `notAttended`: Không tham dự / vắng mặt không lý do sau khi cuộc họp đã kết thúc.
- **Tối ưu Giao diện Lịch `CustomTableCalendar`**:
  - **Căn giữa ngày (Centered Day Layout)**: Chuẩn hóa căn chỉnh số ngày theo trục giữa các ô lưới lịch (cell), khắc phục độ lệch hiển thị giữa các kích thước màn hình thiết bị khác nhau.
  - **Loại bỏ Marker Dots chống tràn RenderFlex Overflow**: Thư viện `table_calendar` mặc định hiển thị các dấu chấm marker biểu thị số lượng sự kiện dưới số ngày; khi một ngày có nhiều sự kiện (họp, nghỉ phép, công tác trùng lặp), chiều cao ô vượt quá ràng buộc dọc gây lỗi `RenderFlex overflowed by ... pixels`. Giải pháp: Loại bỏ hoàn toàn marker dots trong builder ngày của `CustomTableCalendar`, chuyển toàn bộ thông tin trực quan hóa sự kiện sang danh sách thẻ chi tiết (`CompactScheduleView`, `ScheduleEventCardWidget`) bên dưới lịch.
  - **Khôi phục Dynamic `eventColor` & Hệ thống Màu sắc Ngữ nghĩa**:
    - **Cuộc họp (Meeting / iOffice)**: `#1E88E5` (Xanh dương nhận diện sự kiện hành chính, lịch họp đơn vị/trường).
    - **Nghỉ phép (Leave / HRM)**: `#FF9800` / `#D97706` (Vàng cam biểu thị trạng thái vắng mặt nghỉ phép).
    - **Đi công tác (Business Trip / HRM)**: `#1488DB` (Xanh da trời biểu thị sự kiện công tác ngoại viện).
