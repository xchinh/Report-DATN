# TỔNG HỢP LẦN CHẠY MOBILE TRỰC TIẾP

| Kịch bản | Trạng thái trước | Kết quả mobile | Trạng thái mới |
| --- | --- | --- | --- |
| AUTH-01 | Blocked | Đăng nhập và gọi HRM/iOffice thành công; xử lý phiên sai chữ ký không xóa token do backend trả HTTP `200` kèm `status: 401` trong body | **Fail** |
| PRO-01 | Blocked | Bản dựng thử dùng `127.0.0.1`, khiến URL WebView đổi sang `10.0.2.2` trên thiết bị thật; khác cấu hình LAN trong `.env` của dự án | **Invalid cho lần chạy này; kịch bản vẫn Blocked chờ chạy lại** |

Ngày 23/09/2026, `PRO-01` được chạy lại với URL LAN của thiết bị thật và có kết quả **Fail** ở bước chuyển tiếp phiên SSO. Xem `results/DATN-PRO-01-LAN-20260923-0825/`; kết quả này thay thế trạng thái chờ chạy lại, nhưng không đổi nhãn `Invalid` của lần chạy `127.0.0.1` ở bảng trên.

Các luồng mobile còn lại chỉ được cập nhật sau khi thực hiện trực tiếp hoặc khi có trạng thái Blocked/Not Run được ghi rõ.
