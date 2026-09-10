# ĐẶC TẢ RANH GIỚI VÀ PHẠM VI KIẾN TRÚC HỆ THỐNG (ARCHITECTURE SCOPE)
*Phiên bản Chuẩn hóa Cấu trúc Thư mục Codebase & Báo cáo 7 Chương (Folder-Based Edition)*

> **Đề tài Đồ án Tốt nghiệp:** “Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học”  
> **Định vị Đề tài:** Phát triển Ứng dụng Di động Đa nền tảng (Flutter) tích hợp và mở rộng các Hệ thống Dịch vụ Backend hiện hữu của Nhà trường (HRM và iOffice).  
> **Quy chuẩn Phân bổ Báo cáo:** Tập trung vào kiến trúc ứng dụng di động kết hợp với các dịch vụ mở rộng trên backend (Mobile Extension Services) và tích hợp API đa miền.

---

## 1. Bản đồ Cấu trúc Thư mục Mã nguồn Thực tế (Codebase Folder Mapping)

Hệ sinh thái ứng dụng được phân rã theo mô hình **Modular Feature-First Monorepo** do công cụ **Melos** quản lý, tương ứng chặt chẽ với các chương và mục trong báo cáo tốt nghiệp:

```text
myhcmut-mobile/
├── apps/
│   └── myhcmut/                               <- [TẦNG ỨNG DỤNG CHÍNH]
│       ├── lib/main.dart                      <- Điểm khởi chạy, cấu hình Firebase, Sentry
│       ├── lib/src/router/app_router.dart     <- Cấu hình GoRouter, ShellRoute Bottom Navigation
│       └── pubspec.yaml                       <- Tích hợp các module nghiệp vụ và packages
│
├── packages/
│   ├── core/                                  <- [CÁC THƯ VIỆN LÕI DÙNG CHUNG]
│   │   ├── global_system/                     <- Material 3 Semantic Tokens, BeVietnamPro font, AppBatchActionBar, Toastification
│   │   ├── network/                           <- Dio Client, MultiDomainAuthInterceptor, MultiDomainTokenManager (SharedPreferences + In-memory cache)
│   │   └── hcmut_sign/                        <- Module ký số mở rộng (PKI, local_auth sinh trắc học, XML-DSig)
│   │
│   └── shared/                                <- [CÁC TIỆN ÍCH DÙNG CHUNG]
│       ├── auth/                              <- AuthStateProvider, AuthUser DTO, One-Time Ticket SSO Client
│       └── localization/                      <- Đa ngôn ngữ động Tiếng Việt / Tiếng Anh (shared_localization)
│
└── modules/                                   <- [CÁC PHÂN HỆ NGHIỆP VỤ ĐỘC LẬP]
    ├── hrm/                                   <- Phân hệ Quản trị Nhân sự
    │   ├── lib/src/profile/                   <- Tra cứu lý lịch 11 danh mục, SQLite MasterDataDatabaseService (47 danh mục), SWR Cache [Vũ Xuân Chính]
    │   ├── lib/src/approve_profile/           <- Thẩm định Diff Viewer (ReviewDiffCard) sửa lý lịch [Vũ Xuân Chính]
    │   ├── lib/src/time_off/                  <- Đăng ký nghỉ phép Form Wizard 3 bước, Kiểm tra điều kiện đa giai đoạn [Vũ Xuân Chính]
    │   ├── lib/src/approve_time_off/          <- Duyệt nghỉ phép (Tống Duy Khang khởi tạo, Vũ Xuân Chính refactor UI & BatchActionBar)
    │   ├── lib/src/business_trip/             <- Đăng ký đi công tác Form Wizard 5 bước [Tống Duy Khang - OUT_OF_CHINH_SCOPE]
    │   └── lib/src/approve_business_trip/     <- Phê duyệt chuyến công tác [Tống Duy Khang - OUT_OF_CHINH_SCOPE]
    │
    ├── ioffice/                               <- Phân hệ Văn phòng số, Nhiệm vụ và Lịch công tác
    │   ├── lib/src/incoming_docs/             <- Sổ văn bản đến, Trình xem PDF (pdfrx), Phân phối chỉ đạo
    │   ├── lib/src/outgoing_docs/             <- Tra cứu sổ văn bản đi
    │   ├── lib/src/mission/                   <- Điều hành Nhiệm vụ (3 nhóm, 5 tab lọc, 4 tab chi tiết, cây outlined-tree) [Tống Duy Khang; Chính refactor UI]
    │   └── lib/src/schedule/                  <- Lịch tuần trường/đơn vị, Điểm danh họp thời gian thực qua WebSocket (Socket.IO) [Vũ Xuân Chính]
    │
    ├── notification/                          <- Phân hệ Trung tâm Thông báo [Vũ Xuân Chính]
    │   ├── lib/src/notification/services/     <- Firebase Messaging (FCM HTTP v1), Background & Foreground handlers
    │   ├── lib/src/notification/utils/        <- NotificationRouteParser (giải mã 4 trường metadata phục vụ Deep Linking)
    │   └── lib/src/notification/views/        <- Danh sách thông báo, Quản lý số đếm Badge icon theo hỗ trợ OEM (app_badge_plus)
    │
    └── khcn/                                  <- Phân hệ Khoa học Công nghệ (UI Prototype/Templates sẵn sàng tích hợp, ngoài phạm vi tích hợp BE thực tế)
```

---

## 2. Phân loại 3 Nhóm Ranh giới Hệ thống (System Boundary Classification)

```text
+----------------------------------------------------------------------------------------------------+
|                                    TỔNG THỂ RANH GIỚI HỆ THỐNG                                      |
+----------------------------------------------------------------------------------------------------+
|                                                                                                    |
|  [ 1. PHẦN SINH VIÊN PHÁT TRIỂN MỚI & TÍCH HỢP HỆ THỐNG HIỆN HỮU ]                                  |
|  ┌──────────────────────────────────────────────────────────────────────────────────────────────┐  |
|  │  A. Phân định Đóng góp Cá nhân Vũ Xuân Chính (IN_CHINH_SCOPE):                               │  |
|  │     • Tầng Nền tảng Monorepo & Kiến trúc Clean Architecture / Riverpod 3 / GoRouter.         │  |
|  │     • Tầng Giao diện & Design Tokens: packages/core/global_system (Material 3 Semantic).      │  |
|  │     • Thành phần Tái sử dụng: AppBatchActionBar (duyệt hàng loạt đa phân hệ), PopupButtons.  │  |
|  │     • Quản lý Phiên & Bộ lọc Interceptor: packages/core/network (MultiDomainAuthInterceptor). │  |
|  │     • Phân hệ Hồ sơ Cán bộ: modules/hrm/profile (11 danh mục), approve_profile (Diff Viewer). │  |
|  │     • Phân hệ Nghỉ phép: modules/hrm/time_off (Form Wizard 3 bước, kiểm định điều kiện).     │  |
|  │     • Phân hệ Lịch & Điểm danh: modules/ioffice/schedule (Lịch tuần, Socket.IO Check-in).    │  |
|  │     • Phân hệ Thông báo: modules/notification (FCM Service, NotificationRouteParser, Badge).  │  |
|  │     • Backend Mobile Extensions: staff_ly_lich_mobile.controller, validate nghỉ phép, SSO.   │  |
|  │     • Chuẩn hóa Giao diện Chéo Phân hệ (CROSS_MODULE_UI_REFACTOR) cho Approve và Missions.   │  |
|  │  B. Phân hệ do Sinh viên Tống Duy Khang Phụ trách Chính (OUT_OF_CHINH_SCOPE / TEAM_SCOPE):    │  |
|  │     • Phân hệ Đi công tác: modules/hrm/business_trip (Wizard 5 bước) & approve_business_trip.│  |
|  │     • Phân hệ Nhiệm vụ: modules/ioffice/mission (3 nhóm, 5 tab lọc, 4 tab chi tiết, tree).    │  |
|  │     • Luồng phê duyệt đơn sơ khởi cho nghỉ phép và công tác.                                 │  |
|  │  C. Bộ kiểm thử tự động Chạy cục bộ:                                                         │  |
|  │     • 335 tests Mobile (HRM: 232, Notification: 47, iOffice: 43, Core: 13), 46 tests BE SSO. │  |
|  │     • Phân hệ Đi công tác xác thực qua kiểm thử thủ công tích hợp (Manual Staging Testing).  │  |
|  └──────────────────────────────────────────────────────────────────────────────────────────────┘  |
|                                                                                                    |
|  [ 2. EXISTING UNIVERSITY SYSTEMS - HỆ THỐNG HIỆN HỮU CỦA NHÀ TRƯỜNG ]                             |
|  ┌──────────────────────────────────────────────────────────────────────────────────────────────┐  |
|  │  • HRM Backend Core (Port 6023): Nghiệp vụ Nhân sự, Dynamic Workflow Engine, Sổ phép năm     │  |
|  │  • iOffice Backend Core (Port 3001): Quản lý Văn bản, Quy số, Lịch công tác, Nhiệm vụ/Tasks  │  |
|  │  • Auth Service (myhcmut-be Port 4000): Quản lý tài khoản cán bộ, Cấp phát JWT              │  |
|  │  • Hệ thống Cơ sở Dữ liệu quan hệ PostgreSQL (tcns-dev, hcmut_hrm_release, hcmut_hanh_chinh) │  |
|  │  • Hệ thống Web Desktop quản trị nội bộ dành cho chuyên viên TCCB và Văn thư                 │  |
|  │  • Hạ tầng Message Broker Apache Kafka & Bộ nhớ đệm Redis nội bộ của Nhà trường              │  |
|  └──────────────────────────────────────────────────────────────────────────────────────────────┘  |
|                                                                                                    |
|  [ 3. EXTERNAL / THIRD-PARTY SERVICES - DỊCH VỤ BÊN THỨ BA TÍCH HỢP ]                              |
|  ┌──────────────────────────────────────────────────────────────────────────────────────────────┐  |
|  │  • HCMUT CAS Server (Central Authentication Service SSO của Trường ĐHBK)                      │  |
|  │  • HCMUT LDAP Directory Server (Máy chủ danh bạ nội bộ Port 389)                              │  |
|  │  • Google Firebase Cloud Messaging (Dịch vụ Push Notification đám mây HTTP v1)                │  |
|  └──────────────────────────────────────────────────────────────────────────────────────────────┘  |
+----------------------------------------------------------------------------------------------------+
```

---

## 3. Bản đồ Tương tác Đa Dự án trong Workspace (Multi-Project Workspace Topology)

Hệ sinh thái mã nguồn bao gồm 4 repository chính và cụm hạ tầng dịch vụ dùng chung trong workspace:

```text
                                  ┌───────────────────────────┐
                                  │   HCMUT CAS / LDAP SSO    │
                                  └─────────────┬─────────────┘
                                                │ (CAS Auth callback)
                                                ▼
                                  ┌───────────────────────────┐
                                  │  myhcmut-be (Port 4000)   │
                                  │   (Shared Token Issuer)   │
                                  └─────────────┬─────────────┘
                                                │ (Bearer JWT Token)
                                                ▼
 ┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
 │                                      myhcmut-mobile (Flutter Client)                                   │
 │  • Tầng Giao diện Native: Tra cứu lý lịch, Nghỉ phép Wizard, Văn bản PDF, Điểm danh Socket.IO          │
 │  • Tầng WebApp Hybrid: In-App WebView nhúng form sửa lý lịch hrm-fe                                   │
 │  • Tầng Network: Dio + MultiDomainAuthInterceptor tự động gắn Token & Refresh ngầm                      │
 └───────┬───────────────────────────────┬───────────────────────────────┬────────────────────────┬───────┘
         │                               │                               │                        │
         │ (REST: LyLich, Nghỉ phép,     │ (SSO: Ticket Request,         │ (In-App WebView:       │ (REST & WebSocket:
         │  Validate đa giai đoạn)       │  TTL tối đa 60s trên Redis)   │  hrm-fe:6022/sso       │  Docs, Tasks, Lịch &
         │                               │                               │  JS Bridge event)      │  Điểm danh Socket.IO)
         ▼                               ▼                               ▼                        ▼
 ┌───────────────────────────────────────────────┐               ┌───────────────┐        ┌───────────────┐
 │             hrm-be (Port 6023)                │               │    hrm-fe     │        │  ioffice-be   │
 │   • HRM SSO Ticket Issuer & Consumer          │◄──────────────┤  (Port 6022)  │        │  (Port 3001)  │
 │   • HRM Core API & Sổ phép năm                │ (Consume      │ (React/Vite)  │        │ • Docs/Tasks  │
 │   • Push Notification Service Consumer        │  Ticket SSO)  │ Form 11 mục   │        │ • Socket.IO   │
 └───────┬───────────────────────┬───────────────┘               └───────┬───────┘        └───────┬───────┘
         │                       │                                       │                        │
         │ (SETEX / getDel)      │ (Publish Event: SEND_NOTIFY_SERVICE)  │                        │ (Publish Event)
         ▼                       ▼                                       ▼                        ▼
 ┌───────────────┐       ┌────────────────────────────────────────────────────────────────────────────────┐
 │     REDIS     │       │                          APACHE KAFKA MESSAGE BROKER                           │
 │  (Port 6379)  │       └───────────────────────────────────────┬────────────────────────────────────────┘
 │ • SSO Tickets │                                               │
 │ • Web Sessions│                                               │ (Consume thông điệp thông báo)
 └───────────────┘                                               ▼
                                                 ┌───────────────────────────────┐
 ┌───────────────────────────────┐               │     FIREBASE CLOUD MESSAGING  │
 │     POSTGRESQL DATABASES      │               │         (Google FCM)          │
 │ • tcns-dev (Nhân sự)          │               └───────────────┬───────────────┘
 │ • hcmut_hanh_chinh (Văn phòng)│                               │ (Push Notification & Deep Linking)
 └───────────────────────────────┘                               ▼
                                                 ┌───────────────────────────────┐
                                                 │   MYHCMUT MOBILE (Device)     │
                                                 └───────────────────────────────┘
```

### Tóm tắt Trách nhiệm và Tương tác Giữa các Repository:
1. **`myhcmut-mobile`:** Ứng dụng di động Flutter. Giao tiếp với `myhcmut-be` để lấy Token xác thực; giao tiếp với `hrm-be` để lấy lý lịch, nộp/duyệt đơn nghỉ phép và sinh vé SSO; nhúng `hrm-fe` qua In-App WebView để người dùng sửa lý lịch; giao tiếp với `ioffice-be` để đọc văn bản, quản lý nhiệm vụ và điểm danh họp qua WebSocket; nhận thông báo đẩy từ Firebase FCM và thực hiện điều hướng sâu.
2. **`hrm-be` (Port 6023):** Dịch vụ Quản trị Nhân sự và Dịch vụ phát hành, tiêu thụ vé xác thực dùng một lần của HRM. Lưu trữ vé SSO trên Redis với TTL 60s, kiểm tra vé nguyên tử (`getDel`); thực thi kiểm tra điều kiện nghỉ phép đa giai đoạn; đẩy sự kiện thông báo vào Kafka topic `SEND_NOTIFY_SERVICE` và tiêu thụ để gửi FCM.
3. **`hrm-fe` (Port 6022):** Giao diện Web Quản trị Nhân sự (React). Tiếp nhận vé SSO qua URL, gọi `hrm-be` để tạo Web Session; hiển thị form sửa lý lịch 11 danh mục; sau khi lưu thành công, bắn sự kiện qua JS Bridge (`profile_updated`) về cho `myhcmut-mobile`.
4. **`ioffice-be` (Port 3001):** Dịch vụ Văn phòng điện tử và Điều hành nhiệm vụ. Cung cấp API văn bản đến/đi, tệp đính kèm PDF; cây đầu việc nhiệm vụ; cung cấp WebSocket Server (Socket.IO) phục vụ điểm danh cuộc họp thời gian thực.
5. **`myhcmut-be` (Port 4000):** Cổng xác thực người dùng tập trung. Xử lý đăng nhập CAS SSO / Mật khẩu nội bộ và cấp phát chuỗi Bearer JWT Token dùng chung cho toàn bộ hệ thống.

---

## 4. Bản đồ Ánh xạ từ Thư mục Codebase sang Cấu trúc Báo cáo 7 Chương

| Chương Báo cáo | Thư mục Mã nguồn LaTeX Tương ứng | Thư mục Codebase Tương ứng | Nội dung Trọng tâm |
| :--- | :--- | :--- | :--- |
| **Chương 1: Giới thiệu** | `Chapter1/` | Toàn bộ dự án | Bối cảnh 4 điểm nghẽn Web Desktop, mục tiêu, phân định phạm vi ranh giới hệ thống, tóm tắt 5 phân hệ. |
| **Chương 2: Khảo sát Hệ thống Liên quan** | `Chapter2/` | Nghiên cứu thị trường | So sánh App SaaS (Base, 1Office) vs Web nội bộ ĐHBK; đề xuất Cổng di động tập trung. |
| **Chương 3: Cơ sở Lý thuyết & Công nghệ** | `Chapter3/` | `pubspec.yaml`, `melos.yaml` | Lý thuyết Clean Architecture, Shared JWT, 6 Bảng Trade-off Mobile Stack (Flutter, Riverpod, GoRouter, Melos, Dio, SQLite), Backend Node.js, Kafka, FCM, Socket.IO. |
| **Chương 4: Phân tích và Đặc tả Yêu cầu** | `Chapter4/` | `modules/` & `packages/` | Ma trận RBAC, Sơ đồ Use Case tổng thể; Phân rã 5 phân hệ nghiệp vụ kết hợp Bảng đặc tả Use Case, Quy tắc nghiệp vụ (Business Rules), Sơ đồ Hoạt động (Activity Diagrams); Yêu cầu chức năng và Phi chức năng (Chỉ tiêu Thiết kế Mục tiêu). |
| **Chương 5: Phân tích và Thiết kế Hệ thống** | `Chapter5/` | `packages/core/` & Database | Targeted ERD 15 bảng, Clean Architecture 3 tầng, Sơ đồ Tuần tự Kỹ thuật (Technical Sequence Diagrams), MultiDomainAuthInterceptor, Notification Metadata Routing, Thiết kế Kiểm soát Tương tranh 2 Lớp (Advisory Lock). |
| **Chương 6: Kết quả Hiện thực và Kiểm thử** | `Chapter6/` | `apps/myhcmut`, `test/` | Giao diện các màn hình 5 phân hệ; Ma trận kiểm thử đơn vị & widget tự động chạy cục bộ (312 tests Mobile + 46 tests Backend SSO đạt 358/358 pass); 4 kịch bản tích hợp đầu-cuối thủ công trên staging; Đo lường định lượng thực nghiệm (đối chiếu Chỉ tiêu Thiết kế Mục tiêu). |
| **Chương 7: Tổng kết và Hướng phát triển** | `Chapter7/` | Đánh giá tổng thể | Nhận xét đối chiếu mục tiêu, giá trị thực tiễn cho ĐHBK, hạn chế và 6 hướng hoàn thiện kỹ thuật trọng tâm: (1) Khóa tương tranh PostgreSQL Advisory Lock & GIST; (2) Ràng buộc duy nhất UNIQUE/UPSERT điểm danh cuộc họp; (3) Tác vụ Cron tự động dọn dẹp bản nháp bỏ rơi và tệp rác; (4) Lưu trữ khóa an toàn phần cứng (Keystore/Keychain); (5) Mẫu hình Transactional Outbox & Idempotency cho Kafka/FCM; (6) Khung kiểm thử tự động E2E và đo độ bao phủ lcov toàn monorepo. |
