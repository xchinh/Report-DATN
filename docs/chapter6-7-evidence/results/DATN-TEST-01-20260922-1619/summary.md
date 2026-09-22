# TỔNG HỢP ĐỢT THỰC HIỆN KẾ HOẠCH KIỂM THỬ

## 1. Phạm vi đã thực hiện

Đợt chạy ngày 22/09/2026 đã hoàn tất cổng sẵn sàng và thực hiện `TEST-01` trên các snapshot mã nguồn khóa. Không có kịch bản nghiệp vụ nào được chạy trên staging vì chưa có đủ điều kiện an toàn để xác thực vai trò và khôi phục dữ liệu.

| Trạng thái | Số kịch bản | Kịch bản |
| --- | ---: | --- |
| Pass | 0 | Không có |
| Fail | 1 | TEST-01 |
| Blocked | 17 | AUTH-01, AUTH-02, PRO-01, PRO-02, LEV-01, LEV-02, LEV-03, LEV-04, LEV-05, BTR-01, BTR-02, BTR-03, OFF-01, OFF-02, SCH-01, SCH-02, NET-01 |
| Not Run (P2 tùy chọn) | 3 | BTR-04, OFF-03, UI-01 |
| Invalid | 0 | Không có |

Tổng cộng: 21/21 kịch bản đã có trạng thái thực hiện; điều này **không có nghĩa 21 kịch bản đã được chạy**.

## 2. Blocker chung của 17 kịch bản tối thiểu

1. Không có URL/build ID staging được phê duyệt cho tổ hợp Auth, HRM và iOffice.
2. Không có bảng ánh xạ bí danh `CB-A`, `CB-B`, `TCCB-A`, `LD-DV-A`, `BGH-A`, `IOF-IN`, `IOF-OUT` sang tài khoản thử nghiệm được phép sử dụng.
3. Không có PostgreSQL test hoặc quyền tạo, đọc và khôi phục fixture nghiệp vụ.
4. Không có thiết bị Android/iOS được ghi nhận cho các luồng WebView, mở PDF và kiểm tra trạng thái giao diện.
5. Chưa xác nhận vị trí lưu log thô có kiểm soát truy cập cho bằng chứng chứa dữ liệu vận hành.

Các blocker trên là điều kiện tiên quyết của kế hoạch, không phải lỗi sản phẩm. Không được chuyển chúng thành Fail hoặc Pass theo suy luận.

## 3. Điều kiện mở Stage C tiếp theo

Người phụ trách cần cung cấp hoặc xác nhận:

- URL và build ID của staging cho từng dịch vụ;
- tài khoản thử nghiệm tương ứng bảy bí danh vai trò;
- dữ liệu fixture hoặc quyền tạo fixture có run ID;
- cơ chế cleanup/rollback được phép;
- ít nhất một thiết bị Android; thêm iOS nếu muốn kết luận cho cả hai nền tảng;
- nơi lưu raw artifact ngoài Git.

Không gửi mật khẩu, JWT, cookie hoặc token qua tài liệu Git. Chỉ cần xác nhận tài khoản đã được cấu hình trong môi trường thực thi an toàn.

## 4. Giới hạn kết luận hiện tại

- Có thể kết luận đã tái chạy trực tiếp các suite mục tiêu và phát hiện điều kiện tái lập còn thiếu.
- Không thể kết luận các luồng nghiệp vụ trọng tâm đã được kiểm chứng trên phiên bản báo cáo.
- Các kết quả Gate 0 cũ vẫn là baseline lịch sử; không được cộng với lần chạy này thành một tổng test mới.
- Chương 6–7 chưa được phép dùng các kịch bản Blocked làm bằng chứng đạt yêu cầu.
