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
| Trạng thái kịch bản | **Pass có giới hạn phạm vi (Pass nhánh tạo và nộp đơn trực tiếp qua wizard; Chưa chạy nhánh lưu nháp dở dang–mở lại)** |

---

## 1. Kết quả chi tiết theo từng nhánh kịch bản

| Nhánh kiểm thử | Kỳ vọng kế hoạch | Kết quả thực tế | Trạng thái nhánh |
| --- | --- | --- | :---: |
| **Nhánh 1: Nhập liệu wizard 3 bước và nộp đơn trực tiếp** | Đi qua 3 bước wizard (Thông tin -> Minh chứng/Cam kết -> Rà soát), tính số dư ngày phép, nộp đơn thành công và tạo bản ghi Chờ duyệt | Hoàn thành 3 bước trên máy thật Android; hệ thống tính đúng `1.5` ngày nghỉ; nộp đơn thành công tạo đơn `#289`; API backend xác nhận trạng thái `GUI` (`LÃNH ĐẠO ĐƠN VỊ`) | **Pass** |
| **Nhánh 2: Xác thực ràng buộc dữ liệu đầu vào** | Ngăn chuyển bước khi thiếu ngày hoặc lý do; kiểm tra quỹ phép | Wizard bắt buộc nhập lý do, địa điểm và xác nhận công tắc cam kết trước khi cho phép nộp | **Pass** |
| **Nhánh 3: Lưu nháp giữa quy trình, thoát và mở lại nháp** | Bấm lưu nháp ở bước 1 hoặc bước 2, thoát wizard; sau đó mở lại nháp để tiếp tục hoàn thiện và nộp | Đợt kiểm thử trên thiết bị thật **đi thẳng 3 bước và bấm nộp ngay**, chưa thực hiện thao tác lưu nháp giữa chừng, thoát ra màn hình chính rồi mở lại từ danh sách nháp | **Chưa chạy (Not Run)** |

---

## 2. Bằng chứng đính kèm

- `01_step1_info.png`: Bước 1 - Chọn loại nghỉ phép, địa điểm Hà Nội, khoảng ngày hợp lệ
- `02_step2_attachment_commitment.png`: Bước 2 - Số dư tự động tính toán (1.5 ngày) và công tắc cam kết
- `03_step3_review.png`: Bước 3 - Rà soát thông tin tổng hợp và xác nhận popup
- `04_detail_submitted.png`: Trang chi tiết đơn `#289` hiển thị badge `Submitted` màu xanh
- `05_leave_list_updated.png`: Danh sách đơn cập nhật đơn `#289` trên thiết bị

---

## 3. Ranh giới khẳng định & Kết luận

- **Phạm vi đã chứng minh:** Luồng wizard tạo mới và nộp đơn nghỉ phép trực tiếp trên ứng dụng di động hoạt động hoàn chỉnh, liên kết chính xác với backend HRM và cập nhật danh sách ngay lập tức trên máy thật Android.
- **Giới hạn kết luận:** Nhánh lưu nháp dở dang giữa các bước và mở lại từ danh sách nháp chưa được thực thi trong đợt chạy này, do đó kịch bản chỉ kết luận Pass trong phạm vi luồng tạo và nộp đơn trực tiếp.
