# AUTH-01 — Kết quả kiểm thử mobile trực tiếp

| Hạng mục | Kết quả |
| --- | --- |
| Đăng nhập từ ứng dụng | Pass — ứng dụng vào màn hình chính sau khi Auth xác thực |
| Gọi HRM từ mobile | Pass — màn hình hồ sơ và nghỉ phép nhận phản hồi thành công từ HRM |
| Gọi iOffice từ mobile | Pass — màn hình văn bản đến tải thành công và hiển thị trạng thái rỗng của tài khoản thử nghiệm |
| Xử lý phiên không hợp lệ | Fail — ứng dụng vẫn giữ phiên và ở màn hình chính sau khi HRM từ chối chữ ký token |
| Trạng thái tổng | **Fail** |

## Cách tạo lỗi có kiểm soát

HRM được khởi động tạm thời với một JWT secret khác, trong khi token trên thiết bị không đổi. HRM ghi nhận lỗi xác minh chữ ký cho các request từ ứng dụng. Sau đó HRM được khôi phục ngay về secret đúng.

## Nguyên nhân đã đối chiếu

- HRM bắt lỗi xác thực trong `config/lib/session.ts` nhưng gửi HTTP `200` với trường `status: 401` trong body.
- `MultiDomainAuthInterceptor.onError` của mobile chỉ xóa token khi HTTP status thực tế là `401`.
- `ApiResponseInterceptor` không chuyển trường `status: 401` dạng số trong body thành lỗi HTTP tương ứng.

Do đó interceptor không nhận nhánh `401`, token vẫn còn trong SharedPreferences và ứng dụng không yêu cầu đăng nhập lại. Kết quả này chỉ chứng minh hành vi phiên không hợp lệ trên HRM; đăng nhập và hai đường gọi API hợp lệ vẫn hoạt động trong phạm vi đã chạy.

## Khôi phục

HRM đã chạy lại với JWT secret đúng. Không có fixture nghiệp vụ được tạo bởi kịch bản này.
