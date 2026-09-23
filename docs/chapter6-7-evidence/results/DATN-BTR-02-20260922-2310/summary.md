# TỔNG HỢP BẰNG CHỨNG BTR-02

| Hành vi | Kết quả |
| --- | --- |
| Người tạo thu hồi hồ sơ đang chờ xử lý | API xử lý trả `401`, trạng thái hồ sơ không đổi; mobile không có action thu hồi cho danh sách cá nhân |
| Cấp đơn vị trả lại | API trả `200`, hồ sơ chuyển `HT_DV` / `TRA_LAI` |
| Người tạo sửa và nộp lại | API trả `200`, nội dung sửa được lưu, hồ sơ chuyển `TRUONG_DV` / `GUI_LAI` |

`BTR-02`: **Fail** đối với chức năng thu hồi; **Pass phần backend** đối với trả lại, chỉnh sửa và nộp lại. Chưa chạy thao tác và làm mới giao diện mobile.
