# TỔNG HỢP BẰNG CHỨNG BTR-01

Lần chạy theo đúng hợp đồng của commit mobile/backend bị chặn tại thao tác cập nhật: mobile định nghĩa `quocGia` và `tinhThanh` là chuỗi, nhưng CSDL thử nghiệm hiện tại có ràng buộc buộc hai cột JSONB này phải là mảng. Vì vậy lỗi `500` ban đầu là sai khác phiên bản schema, không được dùng làm kết quả Fail cho wizard.

Một lần chẩn đoán riêng với payload mảng tương thích schema cho thấy backend:

- lưu nháp và nộp hồ sơ trong nước thành công;
- từ chối hồ sơ nước ngoài thiếu tệp minh chứng;
- không tự từ chối khoảng ngày bắt đầu sau ngày kết thúc.

`BTR-01`: **Blocked** ở mức mobile–API. Kết quả chẩn đoán chỉ hỗ trợ phạm vi backend, không chứng minh wizard 5 bước, giữ state, tải tệp hoặc validation giao diện.
