# LEV-01 — Kết quả Chạy lại & Unblock Wizard Đăng ký Nghỉ phép trên Mobile

| Bước | Thao tác & Quan sát | Kết quả |
| --- | --- | --- |
| 1. Khởi tạo Wizard | Từ màn hình chính, nhấn icon "Leave", mở "Leave Management". Nhấn nút `+ New leave request`. | **Pass** |
| 2. Chọn khoảng ngày & buổi | Hộp thoại chọn ngày mở ra. Chọn ngày 05/10/2026 đến 06/10/2026 (> 72 giờ, tránh cảnh báo nộp trễ), buổi Sáng đến Chiều. Nhấn Ok. | **Pass** |
| 3. Điền thông tin Bước 1 (Info) | Điền loại nghỉ trong nước (Domestic), chọn địa điểm "Thành phố Hà Nội", chọn lý do "Khác", nhập ghi chú `Nghi phep ca nhan DATN retest`. Nhấn Next. | **Pass** |
| 4. Điền Bước 2 (Attachment & Commitment) | Hệ thống tự tính toán quỹ phép: Tổng 15 ngày, đơn này 1.5 ngày, còn lại 13.5 ngày. Gạt switch cam kết sang "Accept". Nhấn Next. | **Pass** |
| 5. Hoàn thành Bước 3 (Review & Submit) | Màn hình Summary rà soát lại toàn bộ dữ liệu. Nhấn `Save & Send`, popup xác nhận "Confirm" xuất hiện. Nhấn Confirm. | **Pass** |
| 6. Xác nhận chi tiết đơn | Ứng dụng chuyển ngay vào trang chi tiết đơn với badge `Submitted` màu xanh, hiển thị đầy đủ thông tin người nộp `NGUYỄN THỊ NGỌC TÚ` và lộ trình duyệt. | **Pass** |
| 7. Đối chiếu Backend & Danh sách | API `GET /api/tcns-nghi-phep/dang-ky/all` xác nhận phiếu mới được tạo với ID `#289`, trạng thái `GUI` (`LÃNH ĐẠO ĐƠN VỊ`), `soNgayNghi: 1.5`. Danh sách mobile cập nhật hiển thị thẻ đơn `#289`. | **Pass** |

## Kết luận
- **Trạng thái kịch bản: Pass (chuyển đổi từ Blocked sang Pass).**
- **Đánh giá nghiệp vụ:** Wizard hoạt động mượt mà, liên kết dữ liệu hoàn chỉnh giữa Flutter UI, tính toán thời gian nghỉ phép, quy trình phê duyệt tự động và API PostgreSQL.
- **Bằng chứng đính kèm:**
  - `01_step1_info.png`: Giao diện thông tin cơ bản Bước 1.
  - `02_step2_attachment_commitment.png`: Giao diện cam kết và tính toán ngày nghỉ Bước 2.
  - `03_step3_review.png`: Giao diện tổng quan rà soát Bước 3.
  - `04_detail_submitted.png`: Giao diện chi tiết đơn sau khi nộp thành công (`Submitted`).
  - `05_leave_list_updated.png`: Danh sách quản lý nghỉ phép hiển thị đơn `#289`.
