# HƯỚNG DẪN CHI TIẾT ĐỀ MỤC VÀ NỘI DUNG CẦN THỰC HIỆN CHO 8 CHƯƠNG ĐATN
**Đề tài:** Phát triển Ứng dụng Di động Phục vụ Nhân sự Trường Đại học (MyHCMUT)  
**Tỷ trọng Luận văn:** 70% Ứng dụng Di động (Mobile Client) – 30% Backend & Kiến trúc Tích hợp  
**Cơ sở cấu trúc:** Khung 8 Chương Chuẩn mực của Giảng viên Hướng dẫn ThS. Nguyễn Thanh Tùng (`HK252_297_DATN_Finish_2211620.pdf`).

---

## 📑 BẢNG TỔNG HỢP CẤU TRÚC 8 CHƯƠNG

| Chương | Tên Chương | Dung lượng Dự kiến | Tỷ trọng | Mục tiêu Trọng tâm |
| :---: | :--- | :---: | :---: | :--- |
| **Chương 1** | **Giới thiệu** | 6 – 8 trang | 10% | Đặt vấn đề, mục tiêu, phạm vi ranh giới (Scope Boundary), chức năng chính, ý nghĩa đề tài. |
| **Chương 2** | **Phân tích các hệ thống có liên quan trên thị trường** | 6 – 8 trang | 8% | Khảo sát App thương mại (SaaS), Hệ thống Web nội bộ ĐHBK; Đánh giá ưu/nhược và đề xuất giải pháp Cổng di động tập trung. |
| **Chương 3** | **Cơ sở lý thuyết và công nghệ** | 16 – 18 trang | 15% | Clean Architecture, Shared JWT Bridge; 4 Bảng so sánh Mobile Stack (Flutter, Riverpod, Melos, GoRouter); Backend Node.js, PostgreSQL, Kafka, FCM, Socket.IO. |
| **Chương 4** | **Phân tích yêu cầu hệ thống** | 10 – 12 trang | 12% | Xác định người dùng & Ma trận RBAC; Yêu cầu chức năng 5 phân hệ (HRM, iOffice, Tasks, Schedule, Notification); Yêu cầu phi chức năng. |
| **Chương 5** | **Đặc tả chi tiết các use-case và biểu đồ hoạt động** | 22 – 25 trang | 20% | Sơ đồ Use Case tổng thể; Bảng đặc tả 5 Use Cases cốt lõi (Lý lịch, Nghỉ phép, Đi công tác, Tasks, Điểm danh họp); 4 Activity Diagrams & 8 Sequence Diagrams. |
| **Chương 6** | **Phân tích và thiết kế hệ thống** | 18 – 20 trang | 18% | Targeted ERD & Từ điển dữ liệu 15 bảng; Kiến trúc Clean Architecture 3 tầng; MultiDomainAuthInterceptor; Notification Metadata; Sơ lược Backend & System Operation E2E. |
| **Chương 7** | **Kết quả hiện thực và kiểm thử** | 22 – 25 trang | 12% | Hiện thực UI/UX & Notifiers 5 phân hệ; Testing Pyramid (112 Unit tests, Coverage 81.4%, Widget, Integration, 4 E2E Scenarios); Benchmarks API, FCM Latency, RAM/FPS. |
| **Chương 8** | **Tổng kết và hướng phát triển** | 4 – 5 trang | 5% | Đối chiếu mục tiêu, ý nghĩa khoa học & thực tiễn cho Trường ĐHBK, hạn chế và định hướng (KHCN, Meetings WebRTC, AI Assistant). |

---

# CHI TIẾT ĐỀ MỤC VÀ HƯỚNG DẪN TỪNG CHƯƠNG

---

## 📘 CHƯƠNG 1: GIỚI THIỆU
- **1.1 Đặt vấn đề:** Bối cảnh chuyển đổi số giáo dục (Nghị quyết 131/QĐ-TTg); Thực trạng 4 "điểm nghẽn" tại ĐHBK (Web khó dùng trên mobile, trễ duyệt khi lãnh đạo vắng văn phòng, thiếu push notification tức thời, điểm danh họp thủ công).
- **1.2 Mục tiêu:** Mục tiêu tổng quát và 7 mục tiêu cụ thể.
- **1.3 Phạm vi đề tài:** Phân định 3 ranh giới kỹ thuật (*Student 100% Mobile* vs *Existing Systems* vs *External Services*).
- **1.4 Chức năng chính:** Tóm tắt 5 nhóm phân hệ (Auth, HRM, iOffice, Tasks/Missions, Schedule & Attendance).
- **1.5 Ý nghĩa đề tài & Bố cục báo cáo:** Ý nghĩa khoa học, giá trị thực tiễn và sơ lược 8 chương.

---

## 📗 CHƯƠNG 2: PHÂN TÍCH CÁC HỆ THỐNG CÓ LIÊN QUAN TRÊN THỊ TRƯỜNG
- **2.1 Nhóm ứng dụng di động doanh nghiệp và giáo dục đơn phân hệ:** Phân tích các app Base.vn, 1Office, Tanca (SaaS đóng gói, không tùy biến được quy chuẩn đại học công lập) và các app đơn lẻ (gây phân mảnh ứng dụng).
- **2.2 Nhóm hệ thống quản lý nhân sự và điều hành trên nền tảng Web:** Phân tích HRM Web và iOffice Web tại ĐHBK (đầy đủ quy chuẩn nhưng UI không tối ưu mobile, thiếu push notification).
- **2.3 Đánh giá chung và Đề xuất giải pháp:** Bảng 2.1 So sánh 3 nhóm giải pháp; Đề xuất mô hình Cổng giao tiếp Di động Tập trung (Unified Mobile Portal) MyHCMUT.

---

## 📙 CHƯƠNG 3: CƠ SỞ LÝ THUYẾT VÀ CÔNG NGHỆ
- **3.1 Cơ sở lý thuyết:**
  - 3.1.1 Mô hình Kiến trúc Phân lớp Sạch (Clean Architecture).
  - 3.1.2 Kiến trúc RESTful API và Giao thức HTTPS.
  - 3.1.3 Quản lý Phiên (Session Management) và Cơ chế Shared Secret JWT Bridge.
- **3.2 Công nghệ Frontend (Mobile Client Stack):**
  - 3.2.1 Flutter & Ngôn ngữ Dart (Bảng so sánh Flutter vs React Native vs Native).
  - 3.2.2 State Management: Riverpod 3 (Bảng so sánh Riverpod 3 vs BLoC vs Provider vs GetX).
  - 3.2.3 Điều hướng trong Flutter với `go_router` (Declarative Routing, Deep Linking).
  - 3.2.4 Kiến trúc Đa gói Modular Monorepo với Melos (Bảng so sánh Monorepo vs Monolith).
  - 3.2.5 Quản lý Yêu cầu HTTP và Bộ nhớ đệm (Dio Client, SQLite, Flutter Secure Storage).
- **3.3 Công nghệ Backend, Cơ sở dữ liệu và Tích hợp:**
  - 3.3.1 Công nghệ Backend Hiện hữu: Node.js, TypeScript, Express.js.
  - 3.3.2 Hệ quản trị Cơ sở dữ liệu: PostgreSQL & Sequelize ORM (ACID, JSONB).
  - 3.3.3 Công nghệ Hỗ trợ và Tích hợp: Apache Kafka (KRaft), Firebase Cloud Messaging (FCM), WebSocket (Socket.IO).

---

## 📕 CHƯƠNG 4: PHÂN TÍCH YÊU CẦU HỆ THỐNG
- **4.1 Xác định người dùng và Ma trận Phân quyền (RBAC Matrix):** Bảng 4.1 Ma trận phân quyền 5 tác nhân (Cán bộ/Giảng viên, Lãnh đạo Đơn vị, Ban Giám hiệu, Chuyên viên TCCB, Văn thư).
- **4.2 Yêu cầu Chức năng:** Phân tích chi tiết 5 phân hệ (Auth, HRM, iOffice, Tasks/Missions, Schedule & Attendance, Notification).
- **4.3 Yêu cầu Phi chức năng:** Hiệu năng (60 FPS, Cold start < 1.5s, API < 150ms), Độ trễ FCM < 2.0s, Bảo mật HTTPS & Token, Chịu lỗi ngoại tuyến (Offline Snackbar + Retry).

---

## 📕 CHƯƠNG 5: ĐẶC TẢ CHI TIẾT CÁC USE-CASE VÀ BIỂU ĐỒ HOẠT ĐỘNG
- **5.1 Sơ đồ Ca sử dụng Tổng thể Toàn hệ thống (Use Case Diagram).**
- **5.2 Bảng Đặc tả Chi tiết 5 Ca sử dụng Cốt lõi:**
  - Bảng 5.1: UC01 Tra cứu & Thẩm định Chỉnh sửa Lý lịch Cán bộ (Diff Viewer).
  - Bảng 5.2: UC02 Đăng ký Nghỉ phép (4 bước Wizard & Real-time Validation).
  - Bảng 5.3: UC03 Đăng ký & Phê duyệt Đi công tác (Business Trip).
  - Bảng 5.4: UC04 Quản lý & Giám sát Tiến độ Nhiệm vụ (Cây đầu việc & Báo cáo đợt).
  - Bảng 5.5: UC05 Điểm danh Cuộc họp Thời gian thực & Báo vắng.
- **5.3 Biểu đồ Hoạt động cho các Quy trình Nghiệp vụ Chính (4 Activity Diagrams):**
  - Activity 1: Quy trình Đăng ký & Phê duyệt Nghỉ phép.
  - Activity 2: Quy trình Đăng ký & Phê duyệt Đi công tác.
  - Activity 3: Quy trình Quản lý & Theo dõi Tiến độ Nhiệm vụ.
  - Activity 4: Quy trình Điểm danh Cuộc họp Thời gian thực.
- **5.4 Biểu đồ Tuần tự Tương tác Hệ thống (8 Sequence Diagrams):**
  - Sequence 1: Đăng nhập SSO & Phân phối Token Shared JWT.
  - Sequence 2: Đăng ký & Validate Nghỉ phép Thời gian thực.
  - Sequence 3: Phê duyệt Đơn Nghỉ phép Đa cấp.
  - Sequence 4: Đăng ký & Phê duyệt Đi công tác.
  - Sequence 5: Thẩm định So sánh Sai khác (Diff Viewer) Sửa Lý lịch.
  - Sequence 6: Quản lý Nhiệm vụ, Cây Đầu việc & Báo cáo Tiến độ.
  - Sequence 7: Điểm danh Cuộc họp qua WebSocket Socket.IO.
  - Sequence 8: Pipeline Thông báo Đẩy Bất đồng bộ (Kafka $\rightarrow$ FCM $\rightarrow$ Deep Link).

---

## 📕 CHƯƠNG 6: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG
- **6.1 Entity Relationship Diagram (ERD) và Thiết kế Dữ liệu:** Targeted Database ERD & Từ điển Dữ liệu 15 bảng phục vụ Mobile.
- **6.2 Kiến trúc Hệ thống Tổng thể:**
  - 6.2.1 Cấu trúc Phân tầng Clean Architecture Phía Client.
  - 6.2.2 Hệ thống Giao diện Material 3 Semantic Tokens (`global_system`).
  - 6.2.3 Thiết kế Bộ điều phối Token Đa miền (`MultiDomainAuthInterceptor`).
  - 6.2.4 Thiết kế Dữ liệu Thông báo Đẩy có Cấu trúc (Structured Metadata Routing).
- **6.3 Sơ lược Cấu trúc Backend Hiện hữu và Cơ chế Hoạt động Luồng Dữ liệu:**
  - 6.3.1 Sơ lược Cấu trúc 4 tầng Backend Hiện hữu.
  - 6.3.2 Mô hình Vận hành và Luồng Dữ liệu Tổng thể (System Operation Overview E2E 6 bước).

---

## 📓 CHƯƠNG 7: KẾT QUẢ HIỆN THỰC VÀ KIỂM THỬ
- **7.1 Kết quả Hiện thực Giao diện và Logic các Phân hệ:**
  - 7.1.1 Cấu trúc Dự án Modular Monorepo Melos.
  - 7.1.2 Hiện thực Phân hệ HRM Mobile (Lý lịch, Diff Viewer, Wizard Nghỉ phép, Đi công tác, Duyệt hàng loạt).
  - 7.1.3 Hiện thực Phân hệ iOffice Mobile (Văn bản đến/đi, Xem PDF, Chỉ đạo).
  - 7.1.4 Hiện thực Phân hệ Tasks/Missions (5 Tab lọc, 4 Tab chi tiết, Outlined-tree, Modals).
  - 7.1.5 Hiện thực Phân hệ Lịch & Điểm danh Cuộc họp Socket.IO (Check-in trước 1h).
  - 7.1.6 Hiện thực Trung tâm Thông báo FCM, Deep Linking & GitLab CI Pipeline.
- **7.2 Kiểm thử Hệ thống và Đánh giá Kết quả Thực nghiệm:**
  - 7.2.1 Chiến lược Kiểm thử Testing Pyramid.
  - 7.2.2 Kiểm thử Đơn vị & Độ phủ Mã nguồn (112 Unit Tests, Coverage 81.4%).
  - 7.2.3 Kiểm thử Giao diện (Widget Tests) & Kiểm thử Tích hợp (Silent Refresh, Offline Retry).
  - 7.2.4 Kiểm thử Luồng Nghiệp vụ Đầu-Cuối (4 Kịch bản E2E).
  - 7.2.5 Đo lường Định lượng Hiệu năng Thực nghiệm:
    - Bảng Benchmark 7 API Endpoints cốt lõi (< 150ms).
    - Bảng Phân rã Độ trễ Pipeline Thông báo Kafka $\rightarrow$ FCM $\approx 1.0$s.
    - Bảng Chỉ số Tiêu thụ Tài nguyên Mobile Client (Cold start 1.25s, RAM 95-145MB, FPS 60).

---

## 📓 CHƯƠNG 8: TỔNG KẾT VÀ HƯỚNG PHÁT TRIỂN
- **8.1 Nhận xét kết quả đạt được:** Đối chiếu mục tiêu ban đầu.
- **8.2 Ý nghĩa khoa học và Giá trị Thực tiễn:** Giá trị cho Nhà trường, cho cán bộ và ý nghĩa kiến trúc.
- **8.3 Những Hạn chế Còn tồn tại:** KHCN và Meetings dừng ở mức UI Mock; Chưa tích hợp Chữ ký số Viettel CA.
- **8.4 Hướng Phát triển Đề tài:** Tích hợp API KHCN, Phòng họp trực tuyến Meetings WebRTC, Trợ lý ảo AI (AI Agent).
