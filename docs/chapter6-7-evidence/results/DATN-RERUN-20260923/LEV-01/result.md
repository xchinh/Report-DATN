# KẾT QUẢ KIỂM THỬ: LEV-01

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `LEV-01` — Tạo, lưu nháp và nộp đơn nghỉ phép qua wizard |
| Tiêu chí | `FR-LEV-02-B01`, `UC-LEV-02-B02`, `UC-LEV-02-B03` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Thiết bị | Realme RMX2151, Android 12/API 31 |
| Đối tượng kiểm thử | Mobile commit `7f90ac7`, HRM BE `9e39ccc2` |
| Tester | `CB-A` (User ID `287`, SHCC `003009`, Phòng Hành chính) |
| Trạng thái | **Pass** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Bước 1 (Thông tin cơ bản):** Chọn loại nghỉ phép trong nước, địa điểm "Thành phố Hà Nội", khoảng ngày hợp lệ (> 72h), nhập lý do. Bấm Next (`01_step1_info.png`).
2. **Bước 2 (Minh chứng & Cam kết):** Giao diện hiển thị tính toán số dư ngày nghỉ (tổng 15 ngày, đơn này 1.5 ngày, còn lại 13.5 ngày). Bật công tắc cam kết. Bấm Next (`02_step2_attachment_commitment.png`).
3. **Bước 3 (Rà soát & Nộp):** Rà soát thông tin tổng hợp, bấm "Save & Send" và xác nhận trong popup Confirm (`03_step3_review.png`).
4. **Trang chi tiết & Danh sách:**
   - Ứng dụng điều hướng sang chi tiết đơn với badge `Submitted` màu xanh, hiển thị đầy đủ thông tin (`04_detail_submitted.png`).
   - Danh sách quản lý đơn trên Mobile cập nhật hiển thị đơn `#289` (`05_leave_list_updated.png`).
   - API `GET /api/tcns-nghi-phep/dang-ky/all` xác nhận đơn `#289` ở trạng thái `GUI` (`LÃNH ĐẠO ĐƠN VỊ`), `soNgayNghi: 1.5`.

---

## 2. Bằng chứng đính kèm

- `01_step1_info.png`: Giao diện Bước 1
- `02_step2_attachment_commitment.png`: Giao diện Bước 2
- `03_step3_review.png`: Giao diện Bước 3
- `04_detail_submitted.png`: Chi tiết đơn đã nộp
- `05_leave_list_updated.png`: Danh sách cập nhật

---

## 3. Kết luận

- Kịch bản đạt trạng thái **Pass** (chuyển đổi từ Blocked sang Pass).
