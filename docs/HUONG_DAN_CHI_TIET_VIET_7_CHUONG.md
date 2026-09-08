# HƯỚNG DẪN CHI TIẾT ĐỀ MỤC VÀ NỘI DUNG CẦN THỰC HIỆN CHO 7 CHƯƠNG ĐATN
**Đề tài:** Phát triển Ứng dụng Di động Phục vụ Nhân sự Trường Đại học (MyHCMUT)  
**Tỷ trọng Luận văn:** 70% Ứng dụng Di động (Mobile Client) – 30% Backend & Kiến trúc Tích hợp  
**Cơ chế Module hóa:** Tích hợp trực tiếp Use Case, Activity Diagram và Sequence Diagram vào **Chapter 4 Section 2** theo từng thư mục module (`auth/`, `hrm/`, `ioffice/`, `notification/`, `khcn/`).

---

## 📑 BẢNG TỔNG HỢP CẤU TRÚC 7 CHƯƠNG

| Chương | Tên Chương | Thư mục Mã nguồn | Tỷ trọng | Mục tiêu Trọng tâm |
| :---: | :--- | :--- | :---: | :--- |
| **Chương 1** | **Giới thiệu** | `Chapter1/` | 10% | Đặt vấn đề (4 điểm nghẽn Web Desktop), mục tiêu, phạm vi ranh giới (Scope 70:30), tóm tắt chức năng, ý nghĩa đề tài. |
| **Chương 2** | **Phân tích các hệ thống có liên quan trên thị trường** | `Chapter2/` | 8% | Khảo sát App SaaS (Base, 1Office), Hệ thống Web nội bộ ĐHBK; Đánh giá ưu/nhược và đề xuất mô hình Cổng di động tập trung. |
| **Chương 3** | **Cơ sở lý thuyết và công nghệ** | `Chapter3/` | 15% | Clean Architecture, Shared JWT; 6 Bảng so sánh Mobile Stack (Flutter, Riverpod 3, Melos, GoRouter, Dio, SQLite); In-App Browser; Backend Node.js, PostgreSQL, Kafka, FCM, Socket.IO. |
| **Chương 4** | **Phân tích và đặc tả yêu cầu hệ thống** | `Chapter4/` | 25% | Xác định người dùng & Ma trận RBAC; Sơ đồ Use Case tổng thể; Phân rã 5 module độc lập (`auth/`, `hrm/`, `ioffice/`, `notification/`, `khcn/`) kết hợp đầy đủ Bảng Use Case, Activity và Sequence diagrams; Yêu cầu phi chức năng. |
| **Chương 5** | **Phân tích và thiết kế hệ thống** | `Chapter5/` | 18% | Targeted Database ERD 15 bảng; Kiến trúc Clean Architecture 3 tầng; MultiDomainAuthInterceptor; Notification Metadata; Sơ lược Backend & System Operation E2E. |
| **Chương 6** | **Kết quả hiện thực và kiểm thử** | `Chapter6/` | 18% | Hiện thực hóa UI/UX 5 phân hệ; Testing Pyramid 4 tầng (112 Unit tests, Coverage 81.4%, Widget, Integration, 4 kịch bản E2E); Đo lường định lượng Benchmarks (API, FCM Latency, RAM/FPS). |
| **Chương 7** | **Tổng kết và hướng phát triển** | `Chapter7/` | 6% | Đối chiếu mục tiêu ban đầu, ý nghĩa khoa học & giá trị thực tiễn cho ĐHBK, hạn chế và định hướng (KHCN, Meetings WebRTC, Trợ lý ảo AI). |

---

# CHI TIẾT ĐỀ MỤC TỪNG CHƯƠNG VÀ CẤU TRÚC THƯ MỤC CON

---

## 📘 CHƯƠNG 1: GIỚI THIỆU
*Tệp mã nguồn: `Chapter1/index.tex`, `Chapter1/section1.tex`*
- **1.1 Đặt vấn đề:** Bối cảnh chuyển đổi số giáo dục (Nghị quyết 131/QĐ-TTg); Thực trạng 4 "điểm nghẽn" tại ĐHBK (Web Desktop khó dùng trên mobile, trễ duyệt khi lãnh đạo vắng văn phòng, thiếu push notification tức thời, điểm danh họp thủ công).
- **1.2 Mục tiêu:** Mục tiêu tổng quát và 7 mục tiêu cụ thể.
- **1.3 Phạm vi đề tài:** Phân định 3 ranh giới kỹ thuật (*Student 100% Mobile* vs *Existing Systems* vs *External Services*).
- **1.4 Chức năng chính:** Tóm tắt 5 nhóm phân hệ (Auth, HRM, iOffice, Tasks/Missions, Schedule & Attendance).
- **1.5 Ý nghĩa đề tài & Bố cục báo cáo:** Ý nghĩa khoa học, giá trị thực tiễn và sơ lược 7 chương.

---

## 📗 CHƯƠNG 2: PHÂN TÍCH CÁC HỆ THỐNG CÓ LIÊN QUAN TRÊN THỊ TRƯỜNG
*Tệp mã nguồn: `Chapter2/index.tex`, `Chapter2/section1.tex`*
- **2.1 Nhóm ứng dụng di động doanh nghiệp và giáo dục đơn phân hệ:** Phân tích các app Base.vn, 1Office, Tanca (SaaS đóng gói, không tùy biến được quy chuẩn đại học công lập) và các app đơn lẻ (gây phân mảnh ứng dụng).
- **2.2 Nhóm hệ thống quản lý nhân sự và điều hành trên nền tảng Web:** Phân tích HRM Web và iOffice Web tại ĐHBK (đầy đủ quy chuẩn nhưng UI không tối ưu mobile, thiếu push notification).
- **2.3 Đánh giá chung và Đề xuất giải pháp:** Bảng so sánh 3 nhóm giải pháp; Đề xuất mô hình Cổng giao tiếp Di động Tập trung (*Unified Mobile Portal*) MyHCMUT.

---

## 📙 CHƯƠNG 3: CƠ SỞ LÝ THUYẾT VÀ CÔNG NGHỆ
*Tệp mã nguồn: `Chapter3/index.tex`, `Chapter3/section1.tex`, `Chapter3/section2.tex`, `Chapter3/section3.tex`*
- **3.1 Cơ sở lý thuyết:** Clean Architecture, RESTful API, Session Management & Shared Secret JWT Bridge.
- **3.2 Công nghệ và thư viện phía Frontend:**
  - 3.2.1 Tiêu chí đánh giá và phương pháp luận lựa chọn công nghệ.
  - 3.2.2 Đánh giá và lựa chọn nền tảng di động (Bảng so sánh Flutter vs React Native vs Native).
  - 3.2.3 Vai trò của ngôn ngữ Dart (Sound Null Safety, Event Loop, Isolates).
  - 3.2.4 Đánh giá và lựa chọn quản trị trạng thái (Bảng so sánh Riverpod 3 vs BLoC vs Provider vs GetX).
  - 3.2.5 Đánh giá và lựa chọn điều hướng (Bảng so sánh GoRouter vs Navigator 2.0 vs AutoRoute).
  - 3.2.6 Đánh giá và lựa chọn truyền thông mạng (Bảng so sánh Dio vs http).
  - 3.2.7 Đánh giá và lựa chọn lưu trữ cục bộ (Bảng so sánh SharedPreferences vs Secure Storage vs Hive vs SQLite).
  - 3.2.8 Kiến trúc quản lý dự án Monorepo với Melos (Bảng so sánh Monorepo vs Monolith).
  - 3.2.9 Thư viện hỗ trợ (Freezed, json_serializable, FCM, InAppWebView cho One-Time Ticket SSO).
  - 3.2.10 Bảng tổng hợp công nghệ và thư viện Frontend.
- **3.3 Công nghệ Backend, Cơ sở dữ liệu và Tích hợp:** Node.js Express, PostgreSQL & Sequelize ORM, Apache Kafka (KRaft), Firebase FCM, WebSocket (Socket.IO).

---

## 📕 CHƯƠNG 4: PHÂN TÍCH VÀ ĐẶC TẢ YÊU CẦU HỆ THỐNG
*Tệp mã nguồn: `Chapter4/index.tex`, `Chapter4/section1.tex`, `Chapter4/section2/index.tex`, `Chapter4/section3.tex`*
- **4.1 Xác định người dùng và Ma trận Phân quyền (RBAC Matrix):**
  - Bảng Ma trận phân quyền 5 tác nhân (Cán bộ/Giảng viên, Lãnh đạo Đơn vị, Ban Giám hiệu, Chuyên viên TCCB, Văn thư).
  - Sơ đồ Ca sử dụng Tổng thể Toàn hệ thống (*Overall System Use Case Diagram*).
- **4.2 Yêu cầu Chức năng và Đặc tả Chi tiết theo Từng Phân hệ Nghiệp vụ (Cấu trúc Folder con):**
  - **`Chapter4/section2/auth/` (Phân hệ Xác thực & Quản lý Phiên):**
    - Mô tả nghiệp vụ đăng nhập CAS SSO, Mật khẩu, Dual-Token.
    - Đặc tả UC_AUTH_01 (Đăng nhập & Quản lý Phiên), UC_AUTH_02 (One-Time Ticket SSO sang Web App).
    - Sequence Diagram: Đăng nhập & Phân phối Token dùng chung, Đổi vé One-Time Ticket SSO.
  - **`Chapter4/section2/hrm/` (Phân hệ Quản trị Nhân sự):**
    - Mô tả nghiệp vụ Lý lịch 11 danh mục, Thẩm định Diff sửa hồ sơ, Wizard nghỉ phép 4 bước + Validate 4 tầng, Đi công tác.
    - Đặc tả UC_HRM_01 (Tra cứu & Thẩm định Sửa Lý lịch), UC_HRM_02 (Đăng ký Nghỉ phép), UC_HRM_03 (Đi công tác).
    - Activity Diagrams: Quy trình Nghỉ phép, Quy trình Đi công tác.
    - Sequence Diagrams: Validate Nghỉ phép, Duyệt Nghỉ phép đa cấp, Đăng ký & Duyệt công tác, Thẩm định Diff sửa lý lịch.
  - **`Chapter4/section2/ioffice/` (Phân hệ Văn phòng số, Nhiệm vụ và Lịch công tác):**
    - Mô tả nghiệp vụ Văn bản đến/đi, Xem PDF trực tiếp, Phân phối chỉ đạo; Quản lý nhiệm vụ (3 nhóm, cây outlined-tree, báo cáo đợt); Lịch tuần & Điểm danh họp thời gian thực.
    - Đặc tả UC_IOFFICE_01 (Văn bản đến/đi & Bút phê chỉ đạo), UC_IOFFICE_02 (Quản lý Nhiệm vụ), UC_IOFFICE_03 (Điểm danh họp & Báo vắng).
    - Activity Diagrams: Quy trình Quản lý Nhiệm vụ, Quy trình Điểm danh họp.
    - Sequence Diagrams: Quản lý Nhiệm vụ và Cây đầu việc, Điểm danh họp qua WebSocket Socket.IO.
  - **`Chapter4/section2/notification/` (Phân hệ Trung tâm Thông báo Đẩy):**
    - Mô tả nghiệp vụ FCM Token, Phân tích 4 trường Metadata (`source`, `entityType`, `entityId`, `isApproval`), Deep Linking, Badge icon.
    - Đặc tả UC_NOTI_01 (Tiếp nhận Thông báo Đẩy và Điều hướng sâu).
    - Sequence Diagram: Pipeline Thông báo Đẩy Bất đồng bộ (Kafka $\rightarrow$ FCM $\rightarrow$ Mobile).
  - **`Chapter4/section2/khcn/` (Phân hệ Khoa học Công nghệ -- Phân hệ Mở rộng):**
    - Mô tả nghiệp vụ Kê khai đề tài NCKH, bài báo khoa học, sở hữu trí tuệ (UI Mock sẵn sàng tích hợp).
- **4.3 Yêu cầu Phi chức năng:** Hiệu năng (60 FPS, Cold start < 1.5s, API < 150ms), Độ trễ FCM $\approx 1.0$s, Bảo mật HTTPS & Mã hóa Token, Chịu lỗi ngoại tuyến (Offline Retry), Tối ưu RAM (95-145MB) và APK (< 30MB).

---

## 📕 CHƯƠNG 5: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG
*Tệp mã nguồn: `Chapter5/index.tex`, `Chapter5/section1.tex`, `Chapter5/section2.tex`, `Chapter5/section3.tex`*
- **5.1 Entity Relationship Diagram (ERD) và Thiết kế Dữ liệu:** Lược đồ Targeted Database ERD & Từ điển Dữ liệu 15 bảng phục vụ Mobile.
- **5.2 Kiến trúc Hệ thống Tổng thể:**
  - 5.2.1 Cấu trúc Phân tầng Clean Architecture Phía Client (Presentation, Domain, Data).
  - 5.2.2 Hệ thống Design System Material 3 Semantic Tokens (`global_system`).
  - 5.2.3 Thiết kế Bộ điều phối Token Đa miền (`MultiDomainAuthInterceptor`).
  - 5.2.4 Thiết kế Dữ liệu Thông báo Đẩy có Cấu trúc (Structured Metadata Routing).
- **5.3 Sơ lược Cấu trúc Backend Hiện hữu và Cơ chế Hoạt động Luồng Dữ liệu:**
  - 5.3.1 Sơ lược Cấu trúc 4 tầng Backend Hiện hữu.
  - 5.3.2 Mô hình Vận hành và Luồng Dữ liệu Tổng thể (*System Operation E2E 6 bước*).

---

## 📓 CHƯƠNG 6: KẾT QUẢ HIỆN THỰC VÀ KIỂM THỬ
*Tệp mã nguồn: `Chapter6/index.tex`, `Chapter6/section1.tex`, `Chapter6/section2.tex`*
- **6.1 Kết quả Hiện thực Giao diện và Logic các Phân hệ:**
  - 6.1.1 Cấu trúc Dự án Modular Monorepo Melos.
  - 6.1.2 Hiện thực Phân hệ HRM Mobile (Lý lịch, ReviewDiffCard, Wizard Nghỉ phép, Đi công tác, Duyệt hàng loạt).
  - 6.1.3 Hiện thực Phân hệ iOffice Mobile (Văn bản đến/đi, Xem PDF pdfrx, Bút phê chỉ đạo).
  - 6.1.4 Hiện thực Phân hệ Tasks/Missions (5 Tab lọc, 4 Tab chi tiết, Outlined-tree, Modals).
  - 6.1.5 Hiện thực Phân hệ Lịch & Điểm danh Cuộc họp Socket.IO (Check-in trước 1h).
  - 6.1.6 Hiện thực Trung tâm Thông báo FCM, Deep Linking & GitLab CI Pipeline.
- **6.2 Kiểm thử Hệ thống và Đánh giá Kết quả Thực nghiệm:**
  - 6.2.1 Chiến lược Kiểm thử Testing Pyramid 4 tầng.
  - 6.2.2 Kiểm thử Đơn vị & Độ phủ Mã nguồn (112 Unit Tests, Coverage 81.4%).
  - 6.2.3 Kiểm thử Giao diện (Widget Tests) & Kiểm thử Tích hợp (Silent Refresh, Offline Retry).
  - 6.2.4 Kiểm thử Luồng Nghiệp vụ Đầu-Cuối (4 Kịch bản E2E).
  - 6.2.5 Đo lường Định lượng Hiệu năng Thực nghiệm:
    - Bảng Benchmark 7 API Endpoints cốt lõi (< 150ms).
    - Bảng Phân rã Độ trễ Pipeline Thông báo Kafka $\rightarrow$ FCM $\approx 1.0$s.
    - Bảng Chỉ số Tiêu thụ Tài nguyên Mobile Client (Cold start 1.25s, RAM 95-145MB, FPS 60).

---

## 📓 CHƯƠNG 7: TỔNG KẾT VÀ HƯỚNG PHÁT TRIỂN
*Tệp mã nguồn: `Chapter7/index.tex`, `Chapter7/section1.tex`*
- **7.1 Nhận xét kết quả đạt được:** Đối chiếu các mục tiêu ban đầu đề ra.
- **7.2 Ý nghĩa khoa học và Giá trị Thực tiễn:** Giá trị cho Nhà trường, cho cán bộ và ý nghĩa kiến trúc tích hợp đa dịch vụ.
- **7.3 Những Hạn chế Còn tồn tại:** KHCN và Meetings dừng ở mức UI Mock; Chưa tích hợp Chữ ký số Viettel CA.
- **7.4 Hướng Phát triển Đề tài:** Tích hợp API KHCN chính thức, Phòng họp trực tuyến Meetings WebRTC, Trợ lý ảo AI Agent.
