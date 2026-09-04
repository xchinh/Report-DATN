# ĐẶC TẢ RANH GIỚI VÀ PHẠM VI KIẾN TRÚC HỆ THỐNG (ARCHITECTURE SCOPE)
*Phiên bản Đã Xác thực Đóng góp Thực tế (Verified Edition)*

> **Đề tài Đồ án Tốt nghiệp:** “Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học”  
> **Định vị Đề tài:** Phát triển Ứng dụng Di động Đa nền tảng (Flutter) tích hợp với Hệ thống Dịch vụ Backend hiện hữu của Nhà trường thông qua kiến trúc tích hợp API (API-based Integration Architecture).  
> **Quy chuẩn Phân bổ Tỷ trọng Báo cáo:** **70% Ứng dụng Di động (Mobile Client)** – **30% Backend & Kiến trúc Tích hợp (Integration Architecture)**.

---

## 1. Phân loại 3 Nhóm Thành phần trong Hệ thống (Component Classification)

```text
+----------------------------------------------------------------------------------------------------+
|                                    TỔNG THỂ RANH GIỚI HỆ THỐNG                                      |
+----------------------------------------------------------------------------------------------------+
|                                                                                                    |
|  [ 1. STUDENT DEVELOPED - PHẦN SINH VIÊN TRỰC TIẾP THIẾT KẾ & PHÁT TRIỂN ]                         |
|  ┌──────────────────────────────────────────────────────────────────────────────────────────────┐  |
|  │  A. Ứng dụng Di động MyHCMUT (Flutter Monorepo / Riverpod 3 / GoRouter) [100% Student Work]:  │  |
|  │     • Tầng Giao diện & Design System: packages/core/global_system (Material 3 Semantic Tokens)│  |
|  │     • Quản lý Phiên & Đa miền: packages/core/network (MultiDomainAuthInterceptor, Storage)   │  |
|  │     • Phân hệ Quản lý Nhân sự (HRM): modules/hrm (Lý lịch 11 mục, Diff Viewer, Wizard Form) │  |
|  │     • Phân hệ Văn phòng số (iOffice): modules/ioffice (Văn bản đến/đi, Lọc danh mục)          │  |
|  │     • Phân hệ Nhiệm vụ (Missions/Tasks): modules/ioffice/mission (5 tab lọc, 4 tab chi tiết, │  |
|  │       TaskDetailBottomSheet, ReportBatchDetailBottomSheet tích hợp API Nhà trường)           │  |
|  │     • Phân hệ Lịch & Điểm danh: modules/ioffice/schedule (Lịch tuần, Check-in Socket.IO)     │  |
|  │     • Phân hệ Thông báo: modules/notification (FCM Service, NotificationRouteParser, Badge)   │  |
|  │     • Bộ kiểm thử tự động (Unit / Widget Tests) & Pipeline CI/CD (.gitlab-ci.yml).            │  |
|  │  B. Các Thành phần Backend Mobile Extensions (Sinh viên trực tiếp viết/sửa trên Backend):    │  |
|  │     • hrm-be (Branch chinh-dev): Viết mới Controller tra cứu lý lịch mobile                   │  |
|  │       (staff_ly_lich_mobile.controller.ts) và API validate nghỉ phép 4 tầng                   │  |
|  │       (POST /api/tcns-nghi-phep/validate kèm helper tính ngày/trùng lịch/trễ hạn).            │  |
|  │     • ioffice-be: Bổ sung các trường metadata có cấu trúc (source, entityType, entityId,      │  |
|  │       isApproval) vào payload response thông báo phục vụ Deep Linking chuẩn xác trên Mobile. │  |
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
|  │  • Google Firebase Cloud Messaging (Dịch vụ Push Notification đám mây)                        │  |
|  └──────────────────────────────────────────────────────────────────────────────────────────────┘  |
+----------------------------------------------------------------------------------------------------+
```

---

## 2. Mô hình Kiến trúc Tích hợp Thực tế (Integration Architecture Model)

```text
                         NGƯỜI DÙNG (CÁN BỘ / GIẢNG VIÊN / LÃNH ĐẠO)
                                              │
                                              ▼
               ┌─────────────────────────────────────────────────────────────┐
               │         ỨNG DỤNG DI ĐỘNG MYHCMUT (FLUTTER CLIENT)           │
               │         [ Sinh viên thiết kế & phát triển 100% ]            │
               │                                                             │
               │  ┌───────────────────────────────────────────────────────┐  │
               │  │ Presentation Layer (UI Pages, Widgets, Design System) │  │
               │  ├───────────────────────────────────────────────────────┤  │
               │  │ State Management Layer (Riverpod 3 AsyncNotifiers)    │  │
               │  ├───────────────────────────────────────────────────────┤  │
               │  │ Repository & Data Layer (DTOs, Freezed, SQLite Cache) │  │
               │  ├───────────────────────────────────────────────────────┤  │
               │  │ Network Layer (Dio Client, MultiDomainAuthInterceptor)│  │
               │  └───────────────────────────────────────────────────────┘  │
               └───────────────┬─────────────────────────────┬───────────────┘
                               │ HTTPS REST API              │ WebSocket
                               ▼                             ▼
+────────────────────────────────────────────────────────────────────────────────────────────+
|                        HỆ THỐNG DỊCH VỤ BACKEND HIỆN HỮU CỦA NHÀ TRƯỜNG                    |
|                                                                                            |
|   ┌────────────────────────┐  ┌────────────────────────┐  ┌─────────────────────────────┐  |
|   │     myhcmut-be         │  │        hrm-be          │  │         ioffice-be          │  |
|   │ (Auth & User Gateway)  │  │   (HRM Business Core)  │  │ (iOffice, Missions, Sched)  │  |
|   │  • CAS/LDAP Login      │  │  • Hồ sơ Lý lịch       │  │  • Văn bản đến / đi         │  |
|   │  • Shared JWT Issuance │  │  • Nghỉ phép / Đi CT   │  │  • Quản lý Nhiệm vụ/Tasks   │  |
|   │  • (SV thêm maDonVi)   │  │  • (SV viết Mobile API)│  │  • (SV thêm Deep Link URL)  │  |
|   └───────────┬────────────┘  └───────────┬────────────┘  └──────────────┬──────────────┘  |
|               │                           │                              │                 |
|               ▼                           ▼                              ▼                 |
|   ┌────────────────────────┐  ┌────────────────────────┐  ┌─────────────────────────────┐  |
|   │    PostgreSQL (Auth)   │  │    PostgreSQL (HRM)    │  │     PostgreSQL (iOffice)    │  |
|   │      [tcns-dev]        │  │  [hcmut_hrm_release]   │  │    [hcmut_hanh_chinh_dev]   │  |
|   └────────────────────────┘  └───────────┬────────────┘  └─────────────────────────────┘  |
|                                           │                                                |
|                                           ▼                                                |
|                       ┌────────────────────────────────────────┐                           |
|                       │  Apache Kafka Topic: SEND_NOTIFY_SERV  │                           |
|                       └───────────────────┬────────────────────┘                           |
+───────────────────────────────────────────┼────────────────────────────────────────────────+
                                            │ Firebase Admin SDK
                                            ▼
                       ┌────────────────────────────────────────┐
                       │  Google Firebase Cloud Messaging (FCM) │
                       └────────────────────┬───────────────────┘
                                            │ Push Notification
                                            ▼
                               [ Nhận Thông báo trên Mobile ]
```
