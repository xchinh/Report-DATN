# TỔNG HỢP BẰNG CHỨNG OFF-01

| Hành vi | Kết quả |
| --- | --- |
| Tài khoản không được gán vào văn bản tải tệp | API trả `200/success` và trả dữ liệu tệp |
| Tài khoản được gán vào văn bản tải tệp | API trả `200/success`; checksum khớp tệp tổng hợp |
| Khôi phục fixture | Không còn văn bản, phân công hoặc liên kết tệp thử nghiệm |

`OFF-01`: **Fail**. Endpoint chỉ kiểm tra quyền đọc văn bản ở mức module, chưa chặn tài khoản không được gán vào văn bản cụ thể. Kết quả không đánh giá cơ chế phân loại tài liệu mật khác chưa được hiện thực trong fixture.
