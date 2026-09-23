# Biên bản phúc tra kiểm thử — Các kịch bản Fail Backend (AUTH-01, LEV-03..05, BTR-02..03, OFF-01, SCH-01)

## 1. Tóm tắt tổng quan

Đợt chạy lại ngày 23/09/2026 tiến hành phúc tra toàn bộ các kịch bản kiểm thử backend trước đó nhận kết quả **Fail** hoặc có thành phần Fail, nhằm đánh giá xem việc cập nhật mã nguồn Mobile (`a6a1dc6`) và HRM Frontend (`ccce869`) có làm thay đổi hành vi logic cốt lõi của Backend hay không.

## 2. Kết quả phúc tra chi tiết theo kịch bản

### 2.1. AUTH-01 — Chuỗi xác thực đa dịch vụ & quản lý phiên
- **Kết quả:** **Pass** ở cấp độ chuỗi xác thực API đa miền và mobile runtime.
- **Chi tiết xác minh:**
  - Token Bearer do Auth Backend (port 4000) cấp phát được `MultiDomainAuthInterceptor` trên Mobile tự động đính kèm khi gọi cả HRM (6023) và iOffice (3001).
  - Các yêu cầu không có token/session đều bị từ chối truy cập (302/401/404).
  - Trên Mobile thật, phiên đăng nhập của `CB-A` đã gọi thành công các dịch vụ đọc/ghi ở cả 2 hệ thống nguồn.

### 2.2. LEV-03 & BTR-02 — Thu hồi đơn nghỉ phép / hồ sơ công tác chờ duyệt
- **Kết quả:** **Fail (Bảo lưu phát hiện kỹ thuật)** đối với chức năng thu hồi cho người tạo; **Pass** đối với quy trình trả lại (`TRA_LAI`), chỉnh sửa và nộp lại (`GUI_LAI`).
- **Phân tích nguyên nhân gốc:**
  - Mã nguồn backend `quy_trinh.controller.ts` của cả Nghỉ phép và Đi công tác không sinh đối tượng đích `THU_HOI` có cờ `isCreateUser: true` khi đơn ở trạng thái `GUI` hoặc `TRUONG_DV`.
  - Khi người tạo gọi API thu hồi, backend trả mã lỗi `400`/`401` và không đổi trạng thái đơn.
  - Giao diện Mobile ẩn nút "Thu hồi" khi không tìm thấy target hợp lệ, phản ánh trung thực trạng thái backend.

### 2.3. LEV-04 & BTR-03 — Bắt buộc nhập lý do khi từ chối
- **Kết quả:** **Fail (Bảo lưu phát hiện kỹ thuật)** đối với ràng buộc bắt buộc lý do; **Pass** đối với nhánh từ chối có lý do hợp lệ.
- **Phân tích nguyên nhân gốc:**
  - Cả hai controller duyệt của HRM (`tcns_nghi_phep` và `tcns_dang_ky_cong_tac`) chỉ kiểm tra sự tồn tại của trường dữ liệu mà không trim khoảng trắng (`trim()`). Do đó, payload có lý do gồm chuỗi rỗng hoặc toàn khoảng trắng (`"   "`) vẫn được chấp nhận và chuyển đơn sang `TU_CHOI`.
  - Trên Mobile, popup từ chối ghi nhận ghi chú là trường tùy chọn.

### 2.4. LEV-05 — Đảm bảo nhất quán số dư khi duyệt cuối đồng thời
- **Kết quả:** **Fail (Bảo lưu phát hiện kỹ thuật)** đối với tính toán số dư tại thời điểm tương tranh cao; **Pass** đối với luồng duyệt tuần tự.
- **Phân tích nguyên nhân gốc:**
  - Bảng ghi nhận phép tại bước duyệt cuối chưa áp dụng khóa mức dòng (`FOR UPDATE`) hoặc mức cô lập giao dịch `SERIALIZABLE`. Khi hai cấp duyệt cuối phê duyệt đồng thời hai đơn có tổng số ngày vượt quá số dư hiện có, hiện tượng Lost Update xuất hiện khiến số dư suy ra bị âm (`-1`).

### 2.5. OFF-01 — Phân quyền truy cập tệp văn bản đến
- **Kết quả:** **Fail (Bảo lưu phát hiện kỹ thuật)** đối với phân quyền chi tiết mức bản ghi văn bản; **Pass** đối với việc kiểm tra quyền module `eofficeVanBanDen:read`.
- **Phân tích nguyên nhân gốc:**
  - Controller `eofficeVanBanDenFile.controller.js` chỉ xác thực người dùng có quyền đọc module văn bản đến, không đối chiếu danh sách phân công (`assignment`) của văn bản cụ thể. Do đó, tài khoản ngoài danh sách phân công nhưng có quyền module vẫn tải được tệp nếu biết `fileId`.

### 2.6. SCH-01 — Kiểm soát đại biểu điểm danh cuộc họp
- **Kết quả:** **Fail (Bảo lưu phát hiện kỹ thuật)** đối với ràng buộc danh sách mời; **Pass** đối với đại biểu trong danh sách mời.
- **Phân tích nguyên nhân gốc:**
  - Tệp `schedule-meeting-checkin.js` có nhánh fallback cho phép người dùng có quyền xem lịch điểm danh vào cuộc họp ngay cả khi không có tên trong danh sách mời (tạo bản ghi điểm danh với `assignment` rỗng).

## 3. Khôi phục & Dọn dẹp Fixture
- 100% dữ liệu tạo ra trong quá trình phúc tra đã được dọn dẹp và trả về trạng thái nguyên vẹn.

## 4. Kết luận
Toàn bộ các phát hiện kỹ thuật (7/7 mục) là những đặc tính kiến trúc có bằng chứng cụ thể và tính lặp lại 100% trên môi trường backend hiện tại. Việc cập nhật frontend và mobile không loại bỏ các hạn chế backend này, đúng theo nguyên tắc độc lập giữa các tầng kiến trúc.
