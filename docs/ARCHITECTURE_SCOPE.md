# ĐẶC TẢ RANH GIỚI VÀ PHẠM VI KIẾN TRÚC HỆ THỐNG (ARCHITECTURE SCOPE)
*Phiên bản Chuẩn hóa Cấu trúc Thư mục Codebase & Báo cáo 7 Chương (Folder-Based Edition)*

> **Đề tài Đồ án Tốt nghiệp:** “Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học”  
> **Định vị Đề tài:** Phát triển Ứng dụng Di động Đa nền tảng (Flutter) tích hợp với Hệ thống Dịch vụ Backend hiện hữu của Nhà trường thông qua kiến trúc tích hợp API (API-based Integration Architecture).  
> **Quy chuẩn Phân bổ Tỷ trọng Báo cáo:** **70% Ứng dụng Di động (Mobile Client)** – **30% Backend & Kiến trúc Tích hợp (Integration Architecture)**.

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
    │   ├── lib/src/profile/                   <- Tra cứu lý lịch 11 danh mục, SQLite MasterDataDatabaseService (47 danh mục), SWR Caching
    │   ├── lib/src/approve_profile/           <- Thẩm định Diff Viewer (ReviewDiffCard) sửa lý lịch
    │   ├── lib/src/time_off/                  <- Đăng ký nghỉ phép Form Wizard 4 bước, Validate 4 tầng thời gian thực, Duyệt đơn hàng loạt
    │   └── lib/src/business_trip/             <- Đăng ký và phê duyệt đoàn đi công tác
    │
    ├── ioffice/                               <- Phân hệ Văn phòng số, Nhiệm vụ và Lịch công tác
    │   ├── lib/src/incoming_docs/             <- Sổ văn bản đến, Trình xem PDF (pdfrx), Phân phối chỉ đạo
    │   ├── lib/src/outgoing_docs/             <- Tra cứu sổ văn bản đi
    │   ├── lib/src/mission/                   <- Điều hành Nhiệm vụ (3 nhóm, 5 tab lọc, 4 tab chi tiết, cây outlined-tree, Task/Report Modals)
    │   └── lib/src/schedule/                  <- Lịch tuần trường/đơn vị, Điểm danh họp thời gian thực qua WebSocket (Socket.IO checkin trước 1h)
    │
    ├── notification/                          <- Phân hệ Trung tâm Thông báo
    │   ├── lib/src/notification/services/     <- Firebase Messaging (FCM HTTP v1), Background & Foreground handlers
    │   ├── lib/src/notification/utils/        <- NotificationRouteParser (giải mã 4 trường metadata phục vụ Deep Linking)
    │   └── lib/src/notification/views/        <- Danh sách thông báo, Quản lý số đếm Badge icon (app_badge_plus)
    │
    └── khcn/                                  <- Phân hệ Khoa học Công nghệ (UI Mock Templates sẵn sàng tích hợp)
```

---

## 2. Phân loại 3 Nhóm Ranh giới Hệ thống (System Boundary Classification)

```text
+----------------------------------------------------------------------------------------------------+
|                                    TỔNG THỂ RANH GIỚI HỆ THỐNG                                      |
+----------------------------------------------------------------------------------------------------+
|                                                                                                    |
|  [ 1. STUDENT DEVELOPED - PHẦN SINH VIÊN TRỰC TIẾP THIẾT KẾ & PHÁT TRIỂN (100% Student Work) ]      |
|  ┌──────────────────────────────────────────────────────────────────────────────────────────────┐  |
|  │  A. Ứng dụng Di động MyHCMUT (Flutter Monorepo / Melos / Riverpod 3 / GoRouter):              │  |
|  │     • Tầng Giao diện & Design Tokens: packages/core/global_system (Material 3 Semantic)      │  |
|  │     • Quản lý Phiên & Bộ lọc Interceptor: packages/core/network (MultiDomainAuthInterceptor)  │  |
|  │     • Phân hệ Quản lý Nhân sự: modules/hrm (Lý lịch, Diff, Wizard Nghỉ phép, Đi công tác)   │  |
|  │     • Phân hệ Văn phòng số: modules/ioffice (Văn bản đến/đi, Đọc PDF, Phân phối chỉ đạo)     │  |
|  │     • Phân hệ Nhiệm vụ: modules/ioffice/mission (Nhiệm vụ 3 nhóm, Cây đầu việc, Báo cáo)     │  |
|  │     • Phân hệ Lịch & Điểm danh: modules/ioffice/schedule (Lịch tuần, Điểm danh Socket.IO)    │  |
|  │     • Phân hệ Thông báo: modules/notification (FCM Service, NotificationRouteParser, Badge)   │  |
|  │     • Bộ kiểm thử tự động (112 Unit Tests, Widget Tests) & Pipeline CI/CD (.gitlab-ci.yml).   │  |
|  │  B. Các Thành phần Backend Mobile Extensions (Sinh viên trực tiếp viết/sửa trên Backend):    │  |
|  │     • hrm-be (Branch chinh-dev): Controller lý lịch mobile (staff_ly_lich_mobile.controller), │  |
|  │       API validate nghỉ phép 4 tầng (POST /api/tcns-nghi-phep/validate), Cơ chế One-Time      │  |
|  │       Ticket SSO trên Redis phục vụ mở Web App phụ trợ an toàn không lộ token.               │  |
|  │     • ioffice-be: Bổ sung 4 trường metadata (source, entityType, entityId, isApproval)       │  |
|  │       vào response thông báo phục vụ Deep Linking chuẩn xác trên Mobile.                     │  |
|  │     • myhcmut-be (Branch dev/khang-chinh): Bổ sung maDonVi vào JwtPayload.                    │  |
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

## 3. Bản đồ Ánh xạ từ Thư mục Codebase sang Cấu trúc Báo cáo 7 Chương

| Chương Báo cáo | Thư mục Mã nguồn LaTeX Tương ứng | Thư mục Codebase Tương ứng | Nội dung Trọng tâm |
| :--- | :--- | :--- | :--- |
| **Chương 1: Giới thiệu** | `Chapter1/` | Toàn bộ dự án | Bối cảnh 4 điểm nghẽn Web Desktop, mục tiêu, ranh giới 70:30, tóm tắt 5 phân hệ. |
| **Chương 2: Khảo sát Hệ thống Liên quan** | `Chapter2/` | Nghiên cứu thị trường | So sánh App SaaS (Base, 1Office) vs Web nội bộ ĐHBK; đề xuất Cổng di động tập trung. |
| **Chương 3: Cơ sở Lý thuyết & Công nghệ** | `Chapter3/` | `pubspec.yaml`, `melos.yaml` | Lý thuyết Clean Architecture, Shared JWT, 6 Bảng Trade-off Mobile Stack (Flutter, Riverpod, GoRouter, Melos, Dio, SQLite), Backend Node.js, Kafka, FCM, Socket.IO. |
| **Chương 4: Phân tích và Đặc tả Yêu cầu** | `Chapter4/` | `modules/` & `packages/` | Ma trận RBAC, Sơ đồ Use Case tổng thể; Phân rã 5 module nghiệp vụ (`auth/`, `hrm/`, `ioffice/`, `notification/`, `khcn/`) kết hợp Bảng Use Case, Activity và Sequence Diagrams; Yêu cầu phi chức năng. |
| **Chương 5: Phân tích và Thiết kế Hệ thống** | `Chapter5/` | `packages/core/` & Database | Targeted ERD 15 bảng, Clean Architecture 3 tầng, MultiDomainAuthInterceptor, Notification Metadata Routing, Sơ lược Backend & System Operation E2E. |
| **Chương 6: Kết quả Hiện thực và Kiểm thử** | `Chapter6/` | `apps/myhcmut`, `test/` | Giao diện các màn hình 5 phân hệ, Testing Pyramid (112 Unit Tests, Widget Tests, Integration Tests, 4 Kịch bản E2E), Đo lường Benchmarks API, FCM Latency, RAM/FPS. |
| **Chương 7: Tổng kết và Hướng phát triển** | `Chapter7/` | Đánh giá tổng thể | Nhận xét đối chiếu mục tiêu, giá trị thực tiễn cho ĐHBK, hạn chế và hướng phát triển (KHCN, Meetings WebRTC, AI Agent). |
