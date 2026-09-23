# LEV-01/LEV-02 — Quan sát wizard nghỉ phép trên Android thật

| Hành vi | Quan sát | Đánh giá |
| --- | --- | --- |
| Chọn khoảng ngày hợp lệ | Màn hình tạo nháp xuất hiện; API danh sách của `CB-A` có một đơn `NHAP` ID `287` | Pass |
| Bỏ trống trường bắt buộc ở bước Thông tin | Bấm “Next” không chuyển bước; UI báo thiếu địa điểm, lý do hoặc ghi chú | Pass cho nhánh validation đã thử |
| Điền địa điểm, lý do và ghi chú | Chuyển từ Thông tin sang Minh chứng; quay lại Thông tin vẫn giữ các giá trị vừa nhập | Pass cho giữ state khi đổi bước |
| Hủy từ wizard | Hộp thoại cảnh báo xóa nháp; xác nhận “Cancel request” trở về danh sách; API danh sách trả `0` đơn | Pass |
| Tạo lại cùng 06–07/10/2026 | Nháp ID `288` được tạo thành công; hủy lần nữa, API danh sách lại trả `0` đơn | Pass |

**LEV-02: Pass trong phạm vi đã thử trên Android.** Thao tác hủy và tạo lại cùng khoảng ngày đã chạy qua giao diện thật, bổ sung cho lần kiểm tra backend ngày 22/09 về việc dọn đơn, lịch và quy trình liên quan. Lần này không truy vấn lịch riêng sau hủy; kết luận dọn lịch dựa trên bằng chứng backend trước đó và việc tạo lại không bị xung đột.

**LEV-01: vẫn Blocked nếu xét toàn kịch bản.** Đã quan sát tạo nháp, validation và giữ state giữa hai bước. Chưa thử lưu nháp rồi mở lại, đính kèm PDF giả, bước Review, chọn người duyệt, nộp đơn và đọc lại trạng thái chờ duyệt từ mobile. Kết quả backend gửi đơn ngày 22/09 không thay thế cho các bước UI chưa chạy.

Không có đơn thử còn lại trong danh sách của `CB-A` sau hai lần hủy. Hai ảnh minh họa chỉ chứng minh màn hình đã hiển thị; trạng thái tạo/xóa nháp được đối chiếu bằng API thực tế.
