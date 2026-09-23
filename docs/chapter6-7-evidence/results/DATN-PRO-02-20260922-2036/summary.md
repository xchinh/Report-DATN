# TỔNG HỢP BẰNG CHỨNG PRO-02

| Hành vi | Kết quả |
| --- | --- |
| Tài khoản không có quyền duyệt detail | Mã ứng dụng `401`; toàn bộ detail giữ `PENDING` |
| Từ chối với lý do chỉ gồm khoảng trắng | Mã ứng dụng `400`; detail giữ `PENDING` |
| Duyệt một detail, detail khác chưa xử lý | Detail đầu `APPROVED`; request vẫn `PENDING` |
| Từ chối detail còn lại có lý do | Detail `REJECTED`, lý do được lưu; request chuyển `DONE` |
| Request có toàn bộ detail được duyệt | Detail `APPROVED`; request chuyển `DONE` |

`PRO-02`: **Pass** trong phạm vi API/backend đã đặc tả. Dữ liệu fixture trong HRM đã được xóa và hồ sơ nhân sự không đổi về giá trị.
