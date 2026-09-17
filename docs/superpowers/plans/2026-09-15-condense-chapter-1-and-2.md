# Kế hoạch Tinh gọn và Rút ngắn Nội dung Chương 1 và Chương 2

> **Tài liệu:** Báo cáo Đồ án Tốt nghiệp - MyHCMUT Mobile  
> **Mục tiêu:** Tinh giản nội dung Chương 1 và Chương 2 nhằm loại bỏ các đoạn văn trùng lặp, cô đọng văn phong học thuật, giảm dung lượng từ 23 trang xuống khoảng 11-12 trang, tạo sự cân đối với các chương kỹ thuật và thực nghiệm (Chương 5, Chương 6).

---

## 1. Phân tích hiện trạng và Mục tiêu tinh gọn

| Nội dung | Hiện tại | Mục tiêu sau rút gọn | Trọng tâm điều chỉnh |
| :--- | :---: | :---: | :--- |
| **Chương 1 (Giới thiệu)** | 10 trang | ~5 – 6 trang | • Giữ nguyên Bảng 1.1 (Scope ranh giới) & Bảng 1.2 (Phân công 50/50).<br/>• Cô đọng 1.1 (Bối cảnh), 1.2 (Bài toán đặt ra), 1.3 (Mục tiêu).<br/>• Lược bỏ tiểu mục 1.4.6 (vì lặp lại nguyên văn 1.3.2 và Bảng 1.2).<br/>• Rút gọn 1.4.3 (Ranh giới hệ thống) và 1.4.5 (Phương pháp). |
| **Chương 2 (Hệ thống liên quan)** | 13 trang | ~5 – 6 trang | • Rút gọn 2.1 (HRM & iOffice hiện hữu) súc tích, tránh mô tả vụn vặt.<br/>• Gom mục 2.2 và 2.3: Nêu ngắn gọn Base HRM / Tanca và đưa trực tiếp vào Bảng 2.1 so sánh.<br/>• Tinh gọn mục 2.5: Tập trung vào 3 nguyên tắc kiến trúc cốt lõi; chuyển các chi tiết triển khai cụ thể sang Chương 4 & 5. |
| **Tổng cộng Ch1 + Ch2** | **23 trang** | **~11 – 12 trang** | **Giảm 50% độ dài**, khắc phục sự mất cân đối với Chương 6 (12 trang). |

---

## 2. Kế hoạch thực hiện từng bước

### Task 1: Tinh gọn Chương 1 (`Chapter1/section1.tex`)
- [ ] Rà soát và cô đọng Mục 1.1 (Bối cảnh): giữ QĐ 749, QĐ 131, quy mô ĐHBK 2026, đúc kết bài toán mobile.
- [ ] Rút gọn Mục 1.2 (Bài toán đặt ra): giữ 5 điểm mấu chốt nhưng viết cô đọng, giữ câu hỏi nghiên cứu trọng tâm.
- [ ] Rút gọn Mục 1.3 (Mục tiêu đề tài): tinh chỉnh 7 mục tiêu cụ thể rõ ràng, loại bỏ từ ngữ dư thừa.
- [ ] Tinh chỉnh Mục 1.4 (Phạm vi và ranh giới):
  - Giữ nguyên cấu trúc Bảng 1.1 (`tab:phamvi_hethong`) và Bảng 1.2 (`tab:donggop_thanhvien`).
  - Viết gọn mục 1.4.3 (Ranh giới hệ thống) và 1.4.5 (Phương pháp thực hiện).
  - Lược bỏ hoàn toàn mục 1.4.6 (Đóng góp của nhóm) vì đã trùng lặp 100% với mục 1.3.2 và Bảng 1.2, thay bằng 1 đoạn tóm lược ngắn gọn.
  - Mục 1.5 Bố cục báo cáo: giữ danh sách 7 chương ngắn gọn.

### Task 2: Tinh gọn Chương 2 (`Chapter2/section1.tex`)
- [ ] Tinh gọn Mục 2.1 (Hệ thống nghiệp vụ hiện hữu):
  - 2.1.1 HRM: Trình bày súc tích vai trò Single Source of Truth, 3 mảng nghiệp vụ (Hồ sơ, Nghỉ phép, Công tác đa cấp) và ràng buộc lịch cá nhân.
  - 2.1.2 iOffice: Văn bản đến/đi, Nhiệm vụ, Lịch công tác và điểm danh họp.
  - 2.1.3 Nhu cầu lớp tương tác di động: Viết trong 2 đoạn cô đọng.
- [ ] Hợp nhất và tinh gọn Mục 2.2, 2.3 và 2.4 (Khảo sát và so sánh):
  - Mô tả cô đọng Base HRM và Tanca (mô hình SaaS đóng gói cho doanh nghiệp tư nhân).
  - Tích hợp 5 tiêu chí so sánh trực tiếp vào Bảng 2.1 (`tab:compare_solutions`), bỏ 5 tiểu mục diễn giải dài dòng (2.3.1 đến 2.3.5).
  - Nêu bật luận cứ: Không thể dùng SaaS thương mại vì quy chuẩn ĐH công lập và hạ tầng CAS/LDAP sẵn có.
- [ ] Tinh gọn Mục 2.5 (Khoảng trống và định vị giải pháp):
  - Trình bày cô đọng 3 nguyên tắc định vị: (1) Cổng tương tác Mobile thống nhất & Hợp nhất lịch/thông báo; (2) Mobile-first, Backend-authoritative; (3) Tái sử dụng Web qua One-Time Ticket SSO.
  - Loại bỏ các đoạn mô tả thuật toán, Wizard 5 bước, Adapter cụ thể (để dành cho Chương 4 và Chương 5).
- [ ] Mục 2.6 (Kết luận chương): Đúc kết ngắn gọn trong 2 đoạn văn.

### Task 3: Biên dịch kiểm chuẩn và Đánh giá định lượng
- [ ] Biên dịch bằng `pdflatex -interaction=nonstopmode main.tex`.
- [ ] Kiểm tra số trang thực tế của Chương 1 và Chương 2 trong `main.toc` và file PDF.
- [ ] Đảm bảo không có lỗi biên dịch (fatal error, missing reference, broken table).
- [ ] Báo cáo kết quả định lượng cụ thể cho người dùng.
