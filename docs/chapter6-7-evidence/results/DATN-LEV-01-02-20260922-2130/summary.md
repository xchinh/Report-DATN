# TỔNG HỢP BẰNG CHỨNG LEV-01/LEV-02

| Hành vi | Kết quả |
| --- | --- |
| Tạo bản nháp | Tạo đơn `NHAP`, đồng thời có lịch cá nhân và cấu hình quy trình |
| Hủy bản nháp | API trả mã ứng dụng `200`; đơn, lịch và dữ liệu quy trình liên quan đều được xóa |
| Tạo lại cùng khoảng ngày | Thành công, không bị dữ liệu mồ côi chặn |
| Hoàn thiện và gửi bản nháp | API trả mã ứng dụng `200`; đơn rời trạng thái `NHAP` và đọc lại được qua endpoint chi tiết |

Phần backend của `LEV-01` và `LEV-02`: **Pass**. Kết quả tổng thể vẫn **chưa hoàn tất** vì chưa thực thi trực tiếp việc chuyển ba bước, giữ state, xác nhận hộp thoại hủy và làm mới UI trên ứng dụng mobile.
