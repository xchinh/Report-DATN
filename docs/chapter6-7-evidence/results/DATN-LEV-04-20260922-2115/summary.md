# TỔNG HỢP BẰNG CHỨNG LEV-04

| Hành vi | Kết quả |
| --- | --- |
| Từ chối với lý do chỉ gồm khoảng trắng | Backend trả mã ứng dụng `200`, chuyển đơn sang `TU_CHOI` |
| Từ chối với lý do hợp lệ | Backend trả mã ứng dụng `200`, chuyển đơn sang `TU_CHOI` và lưu lý do |
| Validation phía mobile | Mã nguồn popup ghi rõ ghi chú là không bắt buộc và không kiểm tra rỗng trước khi gửi |

`LEV-04`: **Fail**. Phiên bản báo cáo không đáp ứng hành vi “bắt buộc nhập lý do từ chối” ở cả ranh giới mobile và backend. Nhánh từ chối có lý do vẫn hoạt động đúng trong phạm vi đã chạy. Toàn bộ fixture cục bộ đã được xóa sau kiểm thử.
