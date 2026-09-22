# TỔNG HỢP BẰNG CHỨNG AUTH/NETWORK CỤC BỘ

| Kịch bản | Phần đã chạy | Kết quả phần đã chạy | Trạng thái toàn kịch bản |
| --- | --- | --- | --- |
| `AUTH-01` | Gắn token cho hai client, xóa token khi 401, không gắn header khi thiếu token | 3/3 Pass | Blocked |
| `NET-01` | Giá trị timeout mặc định và tùy chỉnh của `DioFactory` | 1/1 Pass | Blocked |

Đợt chạy bổ sung một hành vi có bằng chứng trực tiếp (`NFR-03-B02`) và thu hẹp khoảng trống của `NFR-01-B01`. Không có kịch bản đầu–cuối nào được nâng thành Pass; số lượng kịch bản ở tổng hợp Stage C trước đó không thay đổi.
