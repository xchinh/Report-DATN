# RUN MANIFEST — DATN-LEV-05-20260922-2205

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `LEV-05` — Nhất quán số dư khi duyệt cuối đồng thời |
| Hành vi | `FR-LEV-04-B03` |
| Thời gian | 22/09/2026, 22:05 (`Asia/Ho_Chi_Minh`) |
| Hình thức | Kiểm thử tích hợp hai request duyệt cuối gửi đồng thời |
| Auth | `7e687a6005ceb6264f3467072081c784a6f9c7bc` |
| HRM | `87e17bcd2bb8b3058e279e5ecb49d8bcedd5f20d` |
| Dữ liệu cô lập | Năm `2099`, tổng quỹ `1`, hai đơn tổng hợp mỗi đơn `1` ngày |
| Khôi phục | Đơn, dữ liệu nghỉ chính thức, lịch/quy trình và dòng quỹ phép thử nghiệm còn `0` |

Hai fixture được chuẩn bị trực tiếp ở bước duyệt cuối và gán cho một tài khoản thử nghiệm có quyền xử lý; kịch bản không chứng minh luồng duyệt qua mọi cấp trước đó. Token, SHCC, mật khẩu và dữ liệu định danh không được lưu. Đợt chạy dừng sau lần đầu phát hiện vi phạm bất biến để hạn chế thay đổi không cần thiết.
