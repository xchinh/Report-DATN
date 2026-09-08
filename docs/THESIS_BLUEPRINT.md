# BẢN THIẾT KẾ ĐẶC TẢ BÁO CÁO TỐT NGHIỆP (THESIS BLUEPRINT)
*Phiên bản Chuẩn hóa Cấu trúc 7 Chương & Module hóa Chapter 4 (Final Revised Edition)*

> **Tên Đề tài Đồ án Tốt nghiệp:** “Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học”  
> **Sinh viên thực hiện:** Vũ Xuân Chính (2210392) – Tống Duy Khang (2211467)  
> **Giảng viên Hướng dẫn:** ThS. Nguyễn Thanh Tùng  
> **Đơn vị đào tạo:** Khoa Khoa học & Kỹ thuật Máy tính – Trường Đại học Bách khoa – ĐHQG-HCM  
> **Quy chuẩn Tỷ trọng:** **70% Ứng dụng Di động (Mobile Client)** – **30% Backend & Kiến trúc Tích hợp (Integration Architecture)**.

---

## 1. Bản chất và Định vị của Đề tài
- **Thực trạng**: Trường Đại học Bách khoa – ĐHQG-HCM có quy mô hơn 1.000 cán bộ, giảng viên. Các hệ thống quản trị nhân sự (HRM), văn phòng điện tử (iOffice), điều hành nhiệm vụ (Tasks) và lịch công tác hiện hữu của Nhà trường chủ yếu hoạt động trên nền tảng Web Desktop, gây bất tiện khi cán bộ di chuyển giữa 2 cơ sở hoặc cần xử lý công việc tức thời ngoài văn phòng.
- **Mục tiêu cốt lõi của Đề tài**: Thiết kế và hiện thực **Ứng dụng di động đa nền tảng (MyHCMUT Mobile App)** phục vụ cán bộ, giảng viên và lãnh đạo nhà trường; đóng vai trò là một giao diện di động hiện đại, thống nhất, tích hợp an toàn với các dịch vụ Backend hiện hữu của Nhà trường thông qua giao thức REST API và WebSocket (API-based Integration Architecture).

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
    ├── hrm/                    <- Phân hệ Quản trị Nhân sự (Lý lịch, Diff, Wizard Nghỉ phép, Đi công tác)
    ├── ioffice/                <- Phân hệ Văn phòng số, Nhiệm vụ và Lịch công tác
    │   ├── mission/            <- Quản lý Nhiệm vụ (3 nhóm, 5 tab lọc, 4 tab chi tiết, cây outlined-tree)
    │   └── schedule/           <- Lịch tuần, Điểm danh họp thời gian thực WebSocket Socket.IO
    ├── notification/           <- Phân hệ Thông báo đẩy FCM, Metadata Parser, Deep Linking
    └── khcn/                   <- Phân hệ KHCN (UI Mock Templates sẵn sàng tích hợp)
```

---

## 3. Ma trận Phân quyền Người dùng (RBAC Matrix)

| Tác nhân (Actor) | Quyền hệ thống (`permissions`) | Chức năng chính trên Mobile App |
| :--- | :--- | :--- |
| **Cán bộ / Giảng viên** | `cn:ly_lich`<br>`cn:nghi_phep`<br>`cn:di_cong_tac`<br>`iofficeMission:read`<br>`scheduleGeneral:read` | • Tra cứu 11 phân mục lý lịch cán bộ.<br>• Gửi đề xuất cập nhật lý lịch kèm ảnh minh chứng.<br>• Đăng ký nghỉ phép Form Wizard 4 bước kết hợp validate thời gian thực.<br>• Đăng ký chuyến đi công tác (địa điểm, kinh phí, đoàn công tác).<br>• Tra cứu văn bản đến được giao, xem tệp PDF trực tiếp.<br>• Xem danh sách nhiệm vụ, cây đầu việc, gửi báo cáo đợt.<br>• Xem lịch công tác, điểm danh họp trước giờ họp 1h hoặc báo vắng.<br>• Nhận thông báo đẩy và điều hướng sâu (Deep Link). |
| **Lãnh đạo Đơn vị** (Trưởng/Phó Khoa, Phòng) | `dv:nghi_phep:read/write`<br>`dv:di_cong_tac:read/write`<br>`eofficeVanBanDen:manage`<br>`iofficeMission:manage` | • Toàn bộ quyền của Cán bộ.<br>• Thẩm định & Phê duyệt/Từ chối đơn nghỉ phép đơn vị.<br>• Phê duyệt danh sách cán bộ đi công tác.<br>• Phân phối chỉ đạo văn bản đến kèm cán bộ xử lý và hạn chót.<br>• Giám sát tiến độ nhiệm vụ đơn vị, duyệt báo cáo tiến độ.<br>• Tạo lịch họp nội bộ đơn vị. |
| **Lãnh đạo Trường** (Hiệu trưởng, Phó HT) | `tcns:quy_trinh:manage`<br>`eofficeVanBanDi:read`<br>`scheduleGeneral:manage` | • Xem xét văn bản đi cấp trường.<br>• Cho ý kiến chỉ đạo văn bản đến quan trọng.<br>• Theo dõi các nhiệm vụ trọng tâm toàn trường.<br>• Phê duyệt Lịch tuần trường chính thức. |
| **Chuyên viên TCCB** (Mã đơn vị `94`) | `tcns:ly_lich:manage`<br>`tcns:request_ly_lich:read`<br>`tcns:nghi_phep:write` | • Thẩm định hồ sơ so sánh sai khác (Diff Viewer) sửa lý lịch.<br>• Phê duyệt đơn nghỉ phép bước cuối & Cấp số quyết định.<br>• Quản lý quỹ phép năm cán bộ. |
| **Văn thư Trường/ĐV** | `eofficeVanBanDen:write`<br>`scheduleGeneral:write` | • Tiếp nhận, scan, nhập metadata văn bản đến.<br>• Theo dõi luân chuyển văn bản đi.<br>• Tổng hợp lịch công tác tuần trường. |

---

## 4. Cấu trúc Báo cáo Luận văn 7 Chương Chuẩn Mực

> **Quy chuẩn:** Soạn thảo hoàn toàn bằng **LaTeX** (thư mục `HK253_DATN_341_2211467_2210392/`).  
> **Điểm cải tiến:** Toàn bộ Use Case, Activity Diagram và Sequence Diagram được đưa trực tiếp vào **Chương 4 Section 2 theo từng folder module** (`auth/`, `hrm/`, `ioffice/`, `notification/`, `khcn/`), xóa bỏ Chương 5 cũ, giúp báo cáo mạch lạc và cực kỳ dễ biên tập.

```text
HK253_DATN_341_2211467_2210392/
├── Chapter1/  CHƯƠNG I: GIỚI THIỆU (10%)
│   ├── 1.1 Đặt vấn đề (Bối cảnh chuyển đổi số, 4 điểm nghẽn Web Desktop)
│   ├── 1.2 Mục tiêu (Tổng quát & 7 nhiệm vụ cụ thể)
│   ├── 1.3 Phạm vi đề tài (3 ranh giới kỹ thuật minh bạch: 70% Mobile vs 30% Backend)
│   ├── 1.4 Chức năng chính (5 nhóm phân hệ)
│   └── 1.5 Ý nghĩa đề tài & Bố cục báo cáo 7 chương
│
├── Chapter2/  CHƯƠNG II: PHÂN TÍCH CÁC HỆ THỐNG CÓ LIÊN QUAN TRÊN THỊ TRƯỜNG (8%)
│   ├── 2.1 Nhóm ứng dụng di động doanh nghiệp và giáo dục đơn phân hệ (SaaS Base/1Office/Tanca)
│   ├── 2.2 Nhóm hệ thống quản lý nhân sự và điều hành trên nền tảng Web (HRM Web & iOffice Web)
│   └── 2.3 Đánh giá chung và Đề xuất giải pháp (Bảng so sánh 3 nhóm & Mô hình Cổng di động tập trung)
│
├── Chapter3/  CHƯƠNG III: CƠ SỞ LÝ THUYẾT VÀ CÔNG NGHỆ (15%)
│   ├── 3.1 Cơ sở lý thuyết (Clean Architecture, RESTful API, Session Management & Shared Secret JWT)
│   ├── 3.2 Công nghệ Frontend (Flutter, Dart, Riverpod 3, GoRouter, Melos, Dio, SQLite Cache)
│   │   ├── 6 Bảng so sánh Trade-off (Platform, State, Routing, Network, Storage, Monorepo)
│   │   ├── Phân tích chuyên sâu Dart: Sound Null Safety, Event Loop, Isolates
│   │   └── In-App Browser Engine (flutter_inappwebview) phục vụ One-Time Ticket SSO
│   └── 3.3 Công nghệ Backend Hiện hữu & Tích hợp Đa dịch vụ (Node.js Express, PostgreSQL, Kafka, FCM, Socket.IO)
│
├── Chapter4/  CHƯƠNG IV: PHÂN TÍCH VÀ ĐẶC TẢ YÊU CẦU HỆ THỐNG (25%)
│   ├── 4.1 Xác định người dùng, Ma trận phân quyền RBAC & Sơ đồ Use Case tổng thể
│   ├── 4.2 Yêu cầu chức năng và Đặc tả chi tiết theo Từng Phân hệ Nghiệp vụ (Cấu trúc Folder con):
│   │   ├── section2/auth/           <- Module Xác thực: CAS SSO, Mật khẩu, Dual-Token, One-Time Ticket SSO
│   │   │                               (UC_AUTH_01, UC_AUTH_02, Sequence Đăng nhập & Đổi vé SSO)
│   │   ├── section2/hrm/            <- Module HRM: Lý lịch 11 mục, Diff Viewer, Form Wizard 4 bước, Đi công tác
│   │   │                               (UC_HRM_01-03, Activity Nghỉ phép & Công tác, 4 Sequence Diagrams)
│   │   ├── section2/ioffice/        <- Module iOffice: Văn bản đến/đi, Tasks/Missions, Lịch & Điểm danh họp
│   │   │                               (UC_IOFFICE_01-03, Activity Nhiệm vụ & Điểm danh, 2 Sequence Diagrams)
│   │   ├── section2/notification/   <- Module Thông báo: FCM HTTP v1, Phân tích 4 trường Metadata, Deep Link
│   │   │                               (UC_NOTI_01, Sequence Pipeline Kafka sang FCM sang Mobile)
│   │   └── section2/khcn/           <- Module KHCN: Kê khai đề tài NCKH, bài báo (UI Mock Templates)
│   └── 4.3 Yêu cầu phi chức năng (60 FPS, Cold start < 1.5s, API < 150ms, FCM < 2.0s, RAM 95-145MB)
│
├── Chapter5/  CHƯƠNG V: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG (18%)
│   ├── 5.1 Lược đồ Thực thể Quan hệ Dữ liệu (Targeted Database ERD) & Từ điển 15 Bảng cốt lõi
│   ├── 5.2 Kiến trúc Hệ thống Tổng thể
│   │   ├── Clean Architecture 3 tầng Phía Client (Presentation, Domain, Data)
│   │   ├── Hệ thống Design System Material 3 Semantic Tokens (global_system)
│   │   ├── Bộ điều phối Token Đa miền (MultiDomainAuthInterceptor)
│   │   └── Thiết kế Dữ liệu Thông báo Đẩy có Cấu trúc (Structured Metadata Routing)
│   └── 5.3 Sơ lược Cấu trúc Backend Hiện hữu & Cơ chế Vận hành Luồng Dữ liệu E2E (6 bước)
│
├── Chapter6/  CHƯƠNG VI: KẾT QUẢ HIỆN THỰC VÀ KIỂM THỬ (18%)
│   ├── 6.1 Kết quả Hiện thực Giao diện và Logic các Phân hệ
│   │   ├── Cấu trúc Dự án Modular Monorepo Melos
│   │   ├── HRM Mobile (Lý lịch, ReviewDiffCard, Wizard Nghỉ phép, Đi công tác, AppBatchActionBar)
│   │   ├── iOffice Mobile (Văn bản đến/đi, Trình đọc PDF pdfrx, Bút phê chỉ đạo)
│   │   ├── Tasks/Missions Mobile (3 nhóm nhiệm vụ, 5 tab lọc, 4 tab chi tiết, cây outlined-tree)
│   │   ├── Schedule Mobile (Lịch tuần, Điểm danh họp WebSocket Socket.IO trước 1h)
│   │   └── Trung tâm Thông báo FCM, Deep Linking & GitLab CI Pipeline
│   └── 6.2 Kiểm thử Hệ thống và Đánh giá Kết quả Thực nghiệm
│       ├── Chiến lược Testing Pyramid 4 tầng
│       ├── Kiểm thử Đơn vị & Độ phủ (112 Unit Tests, Coverage 81.4%)
│       ├── Widget Tests, Integration Tests (Silent Token Refresh 401, Offline Timeout Retry)
│       ├── Kiểm thử Luồng Nghiệp vụ Đầu-Cuối (4 Kịch bản E2E)
│       └── Đo lường Định lượng Hiệu năng Thực nghiệm (API Benchmarks, FCM Latency, RAM/FPS)
│
└── Chapter7/  CHƯƠNG VII: TỔNG KẾT VÀ HƯỚNG PHÁT TRIỂN (6%)
    ├── 7.1 Nhận xét kết quả đạt được (Đối chiếu mục tiêu ban đầu)
    ├── 7.2 Ý nghĩa khoa học và Giá trị thực tiễn đối với Trường ĐHBK
    ├── 7.3 Những hạn chế còn tồn tại (KHCN/Meetings UI Mock, Chữ ký số Viettel CA)
    └── 7.4 Hướng phát triển đề tài (API KHCN chính thức, Meetings WebRTC, Trợ lý ảo AI Agent)
```
