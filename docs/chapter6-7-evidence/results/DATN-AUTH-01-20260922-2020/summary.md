# TỔNG HỢP BẰNG CHỨNG AUTH-01

| Nhánh | HRM | iOffice |
| --- | --- | --- |
| Không có token | Chuyển hướng/từ chối với HTTP `302` | Từ chối với HTTP `401` |
| Token do Auth phát hành | Ánh xạ đúng danh tính; API đọc trả mã ứng dụng `200` | Ánh xạ đúng danh tính; API đọc trả `status=success` |
| Token sai chữ ký | Mã ứng dụng `401` | Có mã lỗi token và không chạy endpoint nghiệp vụ |

Chuỗi Auth → HRM/iOffice và việc từ chối token không hợp lệ đã được quan sát trực tiếp. `AUTH-01` vẫn **Blocked** ở cấp độ đầu–cuối vì chưa thực hiện đăng nhập/đăng xuất và gọi hai dịch vụ từ bản chạy mobile; phần interceptor mobile được chứng minh riêng bởi `DATN-AUTH-NET-20260922-1700`.
