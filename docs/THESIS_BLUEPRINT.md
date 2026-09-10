# BẢN THIẾT KẾ ĐẶC TẢ BÁO CÁO TỐT NGHIỆP (THESIS BLUEPRINT)
*Phiên bản Chuẩn hóa Cấu trúc 7 Chương & Module hóa Chapter 4 (Final Revised Edition)*

> **Tên Đề tài Đồ án Tốt nghiệp:** “Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học”  
> **Sinh viên thực hiện:** Vũ Xuân Chính (2210392) – Tống Duy Khang (2211467)  
> **Giảng viên Hướng dẫn:** ThS. Nguyễn Thanh Tùng  
> **Đơn vị đào tạo:** Khoa Khoa học & Kỹ thuật Máy tính – Trường Đại học Bách khoa – ĐHQG-HCM  
> **Định hướng Đóng góp:** Trọng tâm đóng góp của sinh viên là nghiên cứu, thiết kế và hiện thực hóa ứng dụng di động MyHCMUT Mobile đa nền tảng cùng các thành phần backend mở rộng (Mobile Adapters, SSO Ticket Service, API Validate) phục vụ tích hợp hệ sinh thái hiện hữu của Nhà trường.

---

## 1. Bản chất, Định vị và Tổng quan Tương tác Hệ thống
- **Thực trạng**: Trường Đại học Bách khoa – ĐHQG-HCM có quy mô hơn 1.000 cán bộ, giảng viên (theo Báo cáo Ba công khai hàng năm và Cổng thông tin điện tử Trường Đại học Bách khoa – ĐHQG-HCM, hcmut.edu.vn). Các hệ thống quản trị nhân sự (HRM), văn phòng điện tử (iOffice), điều hành nhiệm vụ (Tasks) và lịch công tác hiện hữu của Nhà trường chủ yếu hoạt động trên nền tảng Web Desktop, gây bất tiện khi cán bộ di chuyển giữa 2 cơ sở hoặc cần xử lý công việc tức thời ngoài văn phòng.
- **Mục tiêu cốt lõi của Đề tài**: Thiết kế và hiện thực **Ứng dụng di động đa nền tảng (MyHCMUT Mobile App)** phục vụ cán bộ, giảng viên và lãnh đạo nhà trường; đóng vai trò là một Cổng giao tiếp di động tập trung, tích hợp an toàn với các dịch vụ Backend hiện hữu của Nhà trường thông qua giao thức REST API, WebSocket và Event Streaming; đồng thời tích hợp giải pháp WebApp Hybrid (In-App WebView với One-Time Ticket SSO) cho các biểu mẫu quản trị chuyên sâu.
- **Tổng quan Ma trận Tương tác Đa Dự án:**
  1. `myhcmut-mobile` (Flutter) $\leftrightarrow$ `myhcmut-be` (Port 4000): Xác thực CAS SSO / LDAP và tiếp nhận chuỗi Bearer JWT Token dùng chung (Shared JWT).
  2. `myhcmut-mobile` $\leftrightarrow$ `hrm-be` (Port 6023): Tra cứu lý lịch 11 danh mục, kiểm tra điều kiện nghỉ phép đa giai đoạn, tạo/duyệt đơn nghỉ phép và đăng ký/phê duyệt đi công tác (`/api/tcns-di-cong-tac/*`); yêu cầu cấp vé One-Time Ticket SSO (TTL 60s trên Redis).
  3. `myhcmut-mobile` $\leftrightarrow$ `hrm-fe` (Port 6022): Mở giao diện In-App WebView nhúng WebApp sửa lý lịch; nhận tín hiệu `profile_updated` qua JavaScript Bridge để reload trạng thái trên mobile.
  4. `myhcmut-mobile` $\leftrightarrow$ `ioffice-be` (Port 3001): Tra cứu văn bản đến/đi và xem PDF trực tiếp; quản lý nhiệm vụ (Tasks) theo cây `outlined-tree`; điểm danh cuộc họp thời gian thực qua WebSocket (Socket.IO).
  5. `hrm-be` / `ioffice-be` $\rightarrow$ `Kafka` $\rightarrow$ `Google FCM` $\rightarrow$ `myhcmut-mobile`: Đường ống thông báo đẩy bất đồng bộ dựa trên 4 trường Metadata có cấu trúc phục vụ Deep Linking.

---

## 2. Bản đồ Cấu trúc Dự án theo Thư mục (Codebase Folder Architecture)

```text
myhcmut-mobile/
├── apps/myhcmut/               <- Ứng dụng chính (GoRouter Root, Firebase Init, ShellRoute)
├── packages/
│   ├── core/
│   │   ├── global_system/      <- Material 3 Semantic Tokens, BeVietnamPro, Toastification
│   │   ├── network/            <- Dio Client, MultiDomainAuthInterceptor, MultiDomainTokenManager
│   │   └── hcmut_sign/         <- Ký số PKI mở rộng & Sinh trắc học (local_auth)
│   └── shared/
│       ├── auth/               <- AuthStateProvider, AuthUser DTO, One-Time Ticket SSO Client
│       └── localization/       <- Đa ngôn ngữ động Tiếng Việt / Tiếng Anh (shared_localization)
└── modules/
    ├── hrm/                    <- Phân hệ Quản trị Nhân sự (Lý lịch, Diff, Wizard Nghỉ phép 3 bước, Đi công tác)
    ├── ioffice/                <- Phân hệ Văn phòng số, Nhiệm vụ và Lịch công tác
    │   ├── mission/            <- Quản lý Nhiệm vụ (3 nhóm, 5 tab lọc, 4 tab chi tiết, cây outlined-tree)
    │   └── schedule/           <- Lịch tuần, Điểm danh họp thời gian thực WebSocket Socket.IO
    ├── notification/           <- Phân hệ Thông báo đẩy FCM, Metadata Parser, Deep Linking
    └── khcn/                   <- Phân hệ KHCN (UI Mockup / Đề xuất tích hợp tương lai, ngoài phạm vi tích hợp BE)
```

---

## 3. Ma trận Phân quyền Người dùng (RBAC Matrix)

| Tác nhân (Actor) | Quyền hệ thống (`permissions`) | Chức năng chính trên Mobile App |
| :--- | :--- | :--- |
| **Cán bộ / Giảng viên** | `cn:ly_lich`<br>`cn:nghi_phep`<br>`cn:di_cong_tac`<br>`iofficeMission:read`<br>`scheduleGeneral:read` | • Tra cứu 11 phân mục lý lịch cán bộ.<br>• Gửi đề xuất cập nhật lý lịch kèm ảnh minh chứng.<br>• Đăng ký nghỉ phép Form Wizard 3 bước kết hợp kiểm tra điều kiện đa giai đoạn.<br>• Đăng ký chuyến đi công tác (địa điểm, kinh phí, đoàn công tác).<br>• Tra cứu văn bản đến được giao, xem tệp PDF trực tiếp.<br>• Xem danh sách nhiệm vụ, cây đầu việc, gửi báo cáo đợt.<br>• Xem lịch công tác, điểm danh họp trước giờ họp 1h hoặc báo vắng.<br>• Nhận thông báo đẩy và điều hướng sâu (Deep Link). |
| **Lãnh đạo Đơn vị** (Trưởng/Phó Khoa, Phòng) | `dv:nghi_phep:read/write`<br>`dv:di_cong_tac:read/write`<br>`eofficeVanBanDen:manage`<br>`iofficeMission:manage` | • Toàn bộ quyền của Cán bộ.<br>• Thẩm định & Phê duyệt/Từ chối đơn nghỉ phép đơn vị.<br>• Phê duyệt danh sách cán bộ đi công tác.<br>• Phân phối chỉ đạo văn bản đến kèm cán bộ xử lý và hạn chót.<br>• Giám sát tiến độ nhiệm vụ đơn vị, duyệt báo cáo tiến độ.<br>• Tạo lịch họp nội bộ đơn vị. |
| **Lãnh đạo Trường** (Hiệu trưởng, Phó HT) | `tcns:quy_trinh:manage`<br>`eofficeVanBanDi:read`<br>`scheduleGeneral:manage` | • Xem xét văn bản đi cấp trường.<br>• Cho ý kiến chỉ đạo văn bản đến quan trọng.<br>• Theo dõi các nhiệm vụ trọng tâm toàn trường.<br>• Phê duyệt Lịch tuần trường chính thức. |
| **Chuyên viên TCCB** (Mã đơn vị `94`) | `tcns:ly_lich:manage`<br>`tcns:request_ly_lich:read`<br>`tcns:nghi_phep:write` | • Thẩm định hồ sơ so sánh sai khác (Diff Viewer) sửa lý lịch.<br>• Phê duyệt đơn nghỉ phép bước cuối & Cấp số quyết định.<br>• Quản lý quỹ phép năm cán bộ. |
| **Văn thư Trường/ĐV** | `eofficeVanBanDen:write`<br>`scheduleGeneral:write` | • Tiếp nhận, scan, nhập metadata văn bản đến.<br>• Theo dõi luân chuyển văn bản đi.<br>• Tổng hợp lịch công tác tuần trường. |

---

## 4. Cấu trúc Báo cáo Luận văn 7 Chương Chuẩn Mực

> **Quy chuẩn:** Soạn thảo hoàn toàn bằng **LaTeX** (thư mục `HK253_DATN_341_2211467_2210392/`).  
> **Phân định Cấu trúc Chương 4 và Chương 5:**  
> - **Chương 4:** Tập trung vào **Đặc tả Yêu cầu Nghiệp vụ**: Tác nhân, Ma trận RBAC, Sơ đồ Use Case tổng thể, Bảng đặc tả Use Case chi tiết, Quy tắc nghiệp vụ (Business Rules) và Sơ đồ Hoạt động (Activity Diagrams) theo từng phân hệ; cùng Yêu cầu chức năng và Phi chức năng (Chỉ tiêu Thiết kế Mục tiêu).  
> - **Chương 5:** Tập trung vào **Phân tích và Thiết kế Kỹ thuật**: Lược đồ CSDL quan hệ (Targeted ERD 15 bảng cốt lõi), Kiến trúc Clean Architecture 3 tầng phía Client, Sơ đồ Tuần tự Kỹ thuật (Technical Sequence Diagrams) cho các luồng tương tác, Bộ điều phối Token đa miền, Pipeline thông báo đẩy Kafka-FCM, và Thiết kế Kiểm soát Tương tranh 2 Lớp (Advisory Lock).

```text
HK253_DATN_341_2211467_2210392/
├── Chapter1/  CHƯƠNG I: GIỚI THIỆU (10%)
│   ├── 1.1 Đặt vấn đề (Bối cảnh chuyển đổi số, quan sát thực tế và trao đổi 4 điểm nghẽn Web Desktop với cán bộ/giảng viên; quy mô hơn 1.000 CBVC)
│   ├── 1.2 Mục tiêu (Tổng quát & 7 nhiệm vụ cụ thể)
│   ├── 1.3 Phạm vi đề tài (Mô hình 2 trục: Ranh giới hệ thống toàn trường và Ranh giới phân công đóng góp cá nhân của 2 sinh viên)
│   ├── 1.4 Chức năng chính (5 nhóm phân hệ: Hồ sơ cán bộ, Nghỉ phép, Đi công tác, Lịch/Điểm danh, Thông báo; KHCN là UI Mockup)
│   └── 1.5 Ý nghĩa đề tài & Bố cục báo cáo 7 chương
│
├── Chapter2/  CHƯƠNG II: PHÂN TÍCH CÁC HỆ THỐNG CÓ LIÊN QUAN TRÊN THỊ TRƯỜNG (8%)
│   ├── 2.1 Nhóm ứng dụng di động doanh nghiệp và giáo dục đơn phân hệ (SaaS Base/1Office/Tanca)
│   ├── 2.2 Nhóm hệ thống quản lý nhân sự và điều hành trên nền tảng Web (HRM Web & iOffice Web)
│   └── 2.3 Đánh giá chung và Đề xuất giải pháp (Bảng so sánh 3 nhóm kèm tiêu chí quy trình công tác trường ĐH & Mô hình Cổng di động tập trung)
│
├── Chapter3/  CHƯƠNG III: CƠ SỞ LÝ THUYẾT VÀ CÔNG NGHỆ (15%)
│   ├── 3.1 Cơ sở lý thuyết (Clean Architecture, RESTful API, Session Management & Shared Secret JWT)
│   ├── 3.2 Công nghệ Frontend (Flutter, Dart, Riverpod 3, GoRouter, Melos, Dio, SQLite Master Data & SWR Profile Storage)
│   │   ├── 6 Bảng so sánh Trade-off (Platform, State, Routing, Network, Storage, Monorepo)
│   │   ├── Minh chứng tính tái sử dụng kiến trúc module hóa qua phân hệ Đi công tác (kế thừa Interceptor, Tokens, Auth)
│   │   ├── Phân tích chuyên sâu Dart: Sound Null Safety, Event Loop, Isolates
│   │   └── In-App Browser Engine (flutter_inappwebview) phục vụ One-Time Ticket SSO
│   └── 3.3 Công nghệ Backend Hiện hữu & Tích hợp Đa dịch vụ (Node.js Express, PostgreSQL, Kafka, FCM, Socket.IO)
│
├── Chapter4/  CHƯƠNG IV: PHÂN TÍCH VÀ ĐẶC TẢ YÊU CẦU HỆ THỐNG (25%)
│   ├── 4.1 Xác định người dùng, Ma trận phân quyền RBAC & Sơ đồ Use Case tổng thể (Ghi rõ ranh giới cá nhân đối với Đi công tác và Nhiệm vụ)
│   ├── 4.2 Yêu cầu chức năng và Đặc tả chi tiết theo Từng Phân hệ Nghiệp vụ (Cấu trúc Folder con):
│   │   ├── section2/auth/           <- Module Xác thực: CAS SSO, Mật khẩu, Dual-Token, One-Time Ticket SSO (UC_AUTH_01, UC_AUTH_02)
│   │   ├── section2/hrm/            <- Module HRM: Lý lịch 11 mục, Diff Viewer, Form Wizard 3 bước nghỉ phép; Bối cảnh Đi công tác kế thừa (CTX-BTR-01..04)
│   │   ├── section2/ioffice/        <- Module iOffice: Văn bản đến/đi, Lịch & Điểm danh họp Socket.IO (UC_SCHED_01); Phân định Nhiệm vụ do Tống Duy Khang phụ trách chính
│   │   ├── section2/notification/   <- Module Thông báo: FCM HTTP v1, Phân tích 4 trường Metadata, Deep Link (UC_NOTI_01, Activity Xử lý thông báo)
│   │   └── section2/khcn/           <- Module KHCN: Kê khai đề tài NCKH, bài báo (Giao diện UI Mockup / Prototype)
│   └── 4.3 Yêu cầu phi chức năng (Chỉ tiêu thiết kế mục tiêu: 60 FPS, Cold start < 1.5s, API < 150ms, FCM < 2.0s; Yêu cầu An toàn Tương tranh)
│
├── Chapter5/  CHƯƠNG V: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG (18%)
│   ├── 5.1 Lược đồ Thực thể Quan hệ Dữ liệu (Targeted Database ERD) & Từ điển các Bảng cốt lõi
│   ├── 5.2 Kiến trúc Hệ thống Tổng thể Phía Client (Clean Architecture 3 tầng, Material 3 Semantic Tokens, AppBatchActionBar)
│   ├── 5.3 Thiết kế Các Luồng Kỹ thuật Trọng yếu (Sơ đồ Tuần tự Sequence Diagrams):
│   │   ├── Xác thực SSO qua Vé dùng một lần (One-Time Ticket SSO Bridge, Redis getDel & Làm sạch URL)
│   │   ├── Quy trình Nộp đơn Nghỉ phép 3 Giai đoạn Kỹ thuật (Tạo nháp -> Wizard Pre-validation -> Nộp duyệt chính thức)
│   │   ├── Quy trình Phê duyệt Đơn Nghỉ phép & Trừ Quỹ phép Năm (Per-Item Commit & SELECT FOR UPDATE)
│   │   ├── Điểm danh Họp Thời gian thực (UX Gate 1h trên Mobile & Authoritative Backend Enforcement iOffice qua Socket.IO)
│   │   └── Pipeline Thông báo Đẩy Bất đồng bộ (Kafka Topic -> FCM v1 -> Metadata Deep Linking)
│   ├── 5.4 Bộ Điều phối Token Đa miền (MultiDomainAuthInterceptor & MultiDomainTokenManager)
│   └── 5.5 Thiết kế Kiến trúc Kiểm soát Tương tranh 2 Lớp (Advisory Lock tầng backend & Đề xuất Exclusion Constraints cấp CSDL)
│
├── Chapter6/  CHƯƠNG VI: KẾT QUẢ HIỆN THỰC VÀ KIỂM THỬ (18%)
│   ├── 6.1 Kết quả Hiện thực Giao diện và Logic các Phân hệ
│   │   ├── Cấu trúc Dự án Modular Monorepo Melos
│   │   ├── HRM Mobile (Lý lịch, ReviewDiffCard, Wizard Nghỉ phép 3 bước, AppBatchActionBar dùng chung)
│   │   ├── Chuẩn hóa Giao diện Chéo phân hệ (Redesign các màn hình Approve và Missions theo Design Tokens)
│   │   ├── Schedule Mobile (Lịch tuần, Điểm danh họp WebSocket Socket.IO trước 1h)
│   │   └── Trung tâm Thông báo FCM, Deep Linking & Quy trình Kiểm thử Tự động Chạy Cục bộ
│   └── 6.2 Kiểm thử Hệ thống và Đánh giá Kết quả Thực nghiệm
│       ├── Chiến lược Testing Pyramid
│       ├── Kiểm thử Đơn vị & Widget Tests Tự động Chạy Cục bộ (335 tests Mobile + 46 tests Backend SSO đạt 381/381 pass)
│       ├── Kiểm thử Tích hợp Thủ công Luồng Nghiệp vụ Đầu-Cuối (4 Kịch bản E2E trên thiết bị staging)
│       └── Đo lường Định lượng Hiệu năng Thực nghiệm (Đối chiếu với Chỉ tiêu Thiết kế Mục tiêu: API Benchmarks, FCM Latency, RAM/FPS)
│
└── Chapter7/  CHƯƠNG VII: TỔNG KẾT VÀ HƯỚNG PHÁT TRIỂN (6%)
    ├── 7.1 Nhận xét kết quả đạt được (Đối chiếu mục tiêu ban đầu)
    ├── 7.2 Ý nghĩa khoa học và Giá trị thực tiễn đối với Trường ĐHBK
    ├── 7.3 Những hạn chế còn tồn tại (KHCN UI Mock, Lưu trữ token bảo mật theo nền tảng, Backchannel Revocation, Quản lý vòng đời bản nháp)
    └── 7.4 Hướng phát triển đề tài (Hiện thực Exclusion Constraints, Ràng buộc Unique điểm danh, Tác vụ Cron dọn nháp, Mã hóa token cấp nền tảng)
```
