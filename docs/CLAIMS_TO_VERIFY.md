# DANH MỤC CÁC TUYÊN BỐ ĐÃ ĐƯỢC XÁC THỰC (VERIFIED TECHNICAL CLAIMS)

> **Mục tiêu:** Lưu trữ chính thức kết quả rà soát và xác thực minh bạch về đóng góp kỹ thuật thực tế của nhóm sinh viên, đối chiếu với hệ thống hiện hữu của Nhà trường trước khi đưa vào Báo cáo Tốt nghiệp (LaTeX).

---

## 1. Bảng Tổng hợp Trạng thái Xác thực Đóng góp Kỹ thuật

| STT | Nội dung Thành phần Kỹ thuật | Trạng thái Xác thực | Kết quả Xác thực Chính thức từ Sinh viên & Git History | Phân loại Trình bày trong Báo cáo |
| :---: | :--- | :---: | :--- | :--- |
| **1** | **Ứng dụng Di động MyHCMUT (Flutter Monorepo)** | ✅ **XÁC NHẬN 100%** | Nhóm sinh viên trực tiếp thiết kế kiến trúc Monorepo Melos, Design System `global_system`, State Riverpod 3, UI/UX 4 phân hệ (HRM, iOffice, Tasks, Lịch & Điểm danh) và CI/CD. | **Student Developed (100% Student Work)** |
| **2** | **Bộ điều phối Token đa miền (MultiDomainAuthInterceptor)** | ✅ **XÁC NHẬN 100%** | Nhóm sinh viên thiết kế và hiện thực tại `packages/core/network` để tự động inject Token theo từng domain backend. | **Student Developed (100% Student Work)** |
| **3** | **Viết mới các API Mobile Lý lịch & Nghỉ phép trên `hrm-be`** | ✅ **XÁC NHẬN CÓ** | Sinh viên trực tiếp viết mới `staff_ly_lich_mobile.controller.ts`, API validate nghỉ phép 4 tầng (`tcns_nghi_phep/controller.ts`) trên branch `chinh-dev`. | **Student-developed Backend Extension** |
| **4** | **Bổ sung Structured Metadata Thông báo trên `ioffice-be`** | ✅ **XÁC NHẬN CÓ** | Sinh viên bổ sung các trường metadata có cấu trúc (`source`, `entityType`, `entityId`, `isApproval`) vào payload response của thông báo để Mobile App thực hiện Deep Linking trực tiếp và chính xác qua `NotificationRouteParser`. | **Student-developed Backend Extension** |
| **5** | **Bổ sung `maDonVi` vào JWT Payload trên `myhcmut-be`** | ✅ **XÁC NHẬN CÓ** | Sinh viên bổ sung `maDonVi` vào payload token (`dev/khang-chinh` commit `7e687a6`) phục vụ phân quyền đa miền trên Mobile. | **Student-developed Backend Extension** |
| **6** | **Phân hệ Quản lý Nhiệm vụ & Công việc Backend (`md-mission`)** | 🔍 **XÁC NHẬN TÍCH HỢP** | Backend Tasks là hệ thống có sẵn của Nhà trường; nhóm sinh viên **tích hợp và hiện thực toàn bộ client trên Mobile App** (5 tab lọc, 4 tab chi tiết, bottom sheet). | **Client: Student Developed<br>Backend: Existing University System** |
| **7** | **Hệ thống Backend Core & Cơ sở Dữ liệu PostgreSQL** | 🏛️ **HỆ THỐNG HIỆN HỮU** | HRM Core, iOffice Core, PostgreSQL 3 DBs là nền tảng hiện hữu của Trường ĐHBK; nhóm tích hợp thông qua REST API và WebSocket. | **Existing University Systems** |
| **8** | **Phân hệ KHCN và Họp trực tuyến (Meetings)** | ⚠️ **FUTURE SCOPE** | Mobile đã có UI mock; chưa có backend API chính thức. Xếp vào Hướng phát triển tương lai trong Chương 6. | **Future Work (Chương 6)** |

---

## 2. Thông tin Hành chính Còn Lại Cần Điền vào Trang Bìa LaTeX

- [ ] **Họ và tên sinh viên thực hiện:** ....................................................
- [ ] **Mã số sinh viên (MSSV):** ............................................................
- [ ] **Chuyên ngành đào tạo:** Khoa Khoa học & Kỹ thuật Máy tính – ĐHBK ĐHQG-HCM
- [ ] **Họ tên & Học hàm, học vị GVHD:** ...................................................
- [ ] **Tên đề tài chính thức theo Quyết định giao:** ....................................
