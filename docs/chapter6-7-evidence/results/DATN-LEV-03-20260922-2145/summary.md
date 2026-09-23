# TỔNG HỢP BẰNG CHỨNG LEV-03

| Hành vi | Kết quả |
| --- | --- |
| Thu hồi đơn đang chờ xử lý | Không có target `THU_HOI` dành cho người tạo; API trả mã ứng dụng `400`, đơn giữ trạng thái `GUI` |
| Hiển thị action thu hồi trên mobile | UI chỉ hiện nút khi có target trên; do đó fixture không có nút thu hồi theo logic phiên bản khóa |
| Trả lại đơn | API trả mã ứng dụng `200`, đơn chuyển sang `TRA_LAI`, lịch sử ghi nhận thao tác |
| Sửa và gửi lại | API trả mã ứng dụng `200`, dữ liệu sửa được lưu và đơn chuyển sang `GUI_LAI` |

`LEV-03`: **Fail** đối với hành vi thu hồi; **Pass phần backend** đối với trả lại, chỉnh sửa và gửi lại. Chưa chạy thao tác và làm mới giao diện trực tiếp trên mobile. Toàn bộ fixture cục bộ đã được xóa sau kiểm thử.
