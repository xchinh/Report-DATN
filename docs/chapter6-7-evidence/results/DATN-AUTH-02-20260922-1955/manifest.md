# RUN MANIFEST — DATN-AUTH-02-20260922-1955

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `AUTH-02` — Backend từ chối thao tác trái quyền |
| Hành vi | Một phần `NFR-03-B03` |
| Thời gian | 22/09/2026, 19:55 (`Asia/Ho_Chi_Minh`) |
| Hình thức | Kiểm thử API cục bộ với backend kết nối CSDL thử nghiệm |
| Snapshot HRM | `87e17bcd2bb8b3058e279e5ecb49d8bcedd5f20d` |
| Dịch vụ phụ thuộc | PostgreSQL thử nghiệm, Redis tạm, Kafka do người dùng cung cấp |
| Fixture | Một đề xuất hồ sơ cô lập ở trạng thái `PENDING`, tạo riêng cho lần chạy |
| Khôi phục | Đã xóa fixture; truy vấn kiểm tra sau cleanup còn `0` bản ghi |

Hai JWT ngắn hạn được ký trong bộ nhớ từ bí mật cấu hình hiện hành; token, SHCC, tên, email, mật khẩu và cookie không được ghi vào artifact. Fixture dùng ID và marker dành riêng cho lần chạy, được kiểm tra không tồn tại trước khi tạo và xóa theo cả ID lẫn marker. Log đã khử dữ liệu nhạy cảm nằm ngoài Git tại `.superpowers/sdd/04_test_execution_plan/artifacts/AUTH-02/result.json`.
