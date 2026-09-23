# TỔNG HỢP SẴN SÀNG TÀI KHOẢN KIỂM THỬ

| Hạng mục | Kết quả |
| --- | --- |
| Môi trường | Ba CSDL thử nghiệm riêng của Auth, HRM và iOffice |
| Cơ chế phiên | Auth phát hành JWT dùng chung; HRM và iOffice xác minh được token Auth |
| Tài khoản âm tính | Một tài khoản tổng hợp không có quyền, vị trí, hồ sơ HRM hoặc đơn vị iOffice |
| `CB-A` | Có tài khoản hiện hữu hoạt động ở cả ba hệ thống, có hồ sơ HRM và đơn vị iOffice, không có quyền nghiệp vụ đặc biệt |
| `TCCB-A` | Có quyền xử lý đề xuất hồ sơ, nghỉ phép và đi công tác; không có quyền developer |
| `LD-DV-A` | Cùng đơn vị với `CB-A`, có quyền quản lý nghỉ phép và đi công tác cấp đơn vị; không có quyền developer |
| `BGH-A` | Có vai trò đầu mối BGH và quyền xử lý công tác tương ứng; không có quyền developer |
| `IOF-IN` / `IOF-OUT` | Tái sử dụng lần lượt `CB-A` và tài khoản âm tính; quyền trên tài liệu/cuộc họp vẫn phải được xác minh bằng fixture cụ thể |

## Xác minh runtime

Đăng nhập quản trị Auth thành công. Với bốn bí danh dương tính, thao tác `switch-user` và truy vấn `/api/state` đều trả HTTP 200, đồng thời username/SHCC trong phiên khớp bản ghi đã chọn. Luồng của tài khoản âm tính đã được xác minh riêng trước đó.

Không có tên, email, mật khẩu, JWT, cookie, SHCC thật hoặc thông tin nhân sự được lưu trong tài liệu này. Bảng ánh xạ nội bộ chỉ lưu Auth user ID, nằm ngoài Git và được giới hạn quyền đọc.

## Giới hạn còn lại

Kết quả này chỉ gỡ nút thắt về tài khoản. Các kịch bản PRO/LEV/BTR/OFF/SCH chưa được nâng thành Pass cho đến khi có fixture cô lập, snapshot trước/sau và cách khôi phục dữ liệu được xác nhận.
