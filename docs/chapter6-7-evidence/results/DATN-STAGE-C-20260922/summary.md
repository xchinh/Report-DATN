# TỔNG HỢP TRẠNG THÁI STAGE C

> Bảng bên dưới là lịch sử kiểm thử trên các snapshot ngày 22–23/09, **không phải trạng thái của toàn bộ working tree hiện tại**. Kiểm tra mới dùng ba backend và HRM FE hiện tại (kể cả thay đổi chưa commit) được ghi riêng tại `../DATN-CURRENT-BRANCHES-20260923-0920/`: SSO trong trình duyệt sạch phiên đã Pass; Android WebView mới có xác nhận thủ công từ người dùng, chưa được kiểm chứng độc lập trong đợt mới.

## 1. Kết quả 18 kịch bản tối thiểu

| Kịch bản | Trạng thái | Phạm vi kết quả |
| --- | --- | --- |
| AUTH-01 | Fail | Chạy mobile bổ sung: đăng nhập và gọi HRM/iOffice thành công; phiên HRM sai chữ ký không được ứng dụng xóa do HTTP `200` chứa `status: 401` trong body |
| AUTH-02 | Pass | HRM chặn tài khoản không có quyền và cho phép tài khoản đúng quyền xử lý fixture tương đương |
| PRO-01 | Fail | Chạy lại trên thiết bị thật qua LAN ngày 23/09: WebView tải HRM frontend nhưng mở màn hình đăng nhập; frontend không tiêu thụ vé SSO |
| PRO-02 | Pass | Chặn vượt quyền, bắt buộc lý do từ chối và tổng hợp trạng thái từng nội dung hoạt động ở backend |
| LEV-01 | Blocked | Backend lưu/gửi/đọc lại đơn; trên Android đã tạo nháp, kiểm tra validation và giữ state giữa bước 1–2, nhưng chưa lưu/mở lại, đính kèm và nộp qua UI |
| LEV-02 | Pass | Trên Android đã hủy nháp `287`, tạo lại cùng ngày thành nháp `288`, hủy tiếp; API danh sách về `0`; kiểm tra backend trước đó xác nhận dọn lịch/quy trình liên quan |
| LEV-03 | Fail | Người tạo không thể thu hồi đơn chờ duyệt; nhánh trả lại, sửa và nộp lại hoạt động ở backend |
| LEV-04 | Fail | Backend chấp nhận lý do từ chối chỉ gồm khoảng trắng |
| LEV-05 | Fail | Hai duyệt cuối đồng thời cùng thành công và làm số dư phép thử nghiệm thành `-1` |
| BTR-01 | Blocked | Hợp đồng chuỗi của snapshot không tương thích ràng buộc mảng trong CSDL thử nghiệm; chỉ có chẩn đoán backend với payload tương thích schema |
| BTR-02 | Fail | Người tạo không thể thu hồi hồ sơ; nhánh trả lại, sửa và nộp lại hoạt động ở backend |
| BTR-03 | Fail | Backend chấp nhận lý do từ chối trắng; bước duyệt cấp đơn vị hoạt động nhưng toàn bộ luồng đa cấp bị chặn tại `CV_TCNS` |
| OFF-01 | Fail | Tài khoản có quyền đọc module nhưng không được phân công vào văn bản vẫn tải được tệp |
| OFF-02 | Blocked | Không có phiên mobile và ứng dụng mở PDF của hệ điều hành để xác minh cơ chế tải/mở thực tế |
| SCH-01 | Fail | Người có quyền đọc lịch nhưng không thuộc danh sách mời vẫn tạo được bản ghi điểm danh |
| SCH-02 | Blocked | Không có phiên mobile cùng proxy/mock lỗi có kiểm soát để xác minh thông báo và thao tác thử lại |
| NET-01 | Blocked | Đã kiểm tra cấu hình timeout; chưa kích hoạt lỗi connect/receive/mất mạng và quan sát ánh xạ lỗi, UI, retry |
| TEST-01 | Fail | Mobile đạt 370/370 sau code generation; backend đạt 52 Pass, 2 Fail, 3 Skipped trên 57, nên không tái lập sạch 427/427 |

| Trạng thái | Số lượng |
| --- | ---: |
| Pass | 3 |
| Fail | 10 |
| Blocked | 5 |
| Invalid | 0 |
| **Tổng tối thiểu** | **18** |

## 2. Ba kịch bản P2

| Kịch bản | Trạng thái | Quyết định |
| --- | --- | --- |
| BTR-04 | Not Run | Không chạy trong đợt này; giữ nguyên khoảng trống kiểm thử danh sách/chi tiết công tác |
| OFF-03 | Not Run | Không chạy trong đợt này; giữ nguyên baseline thủ công cho danh sách văn bản/nhiệm vụ |
| UI-01 | Not Run | Không tạo đánh giá UI/UX mới khi chưa có baseline ảnh và thiết bị được duyệt |

Tổng cộng 21/21 kịch bản đã có trạng thái hợp lệ. Điều này không có nghĩa mọi kịch bản đã Pass hoặc đã được chạy đầy đủ.

## 3. Khôi phục và giới hạn

- Fixture nghiệp vụ cục bộ của các lần chạy đã được xóa; các truy vấn kiểm tra theo run ID trả về `0` đối với dữ liệu còn lại đã kiểm tra.
- Worktree, tiến trình và container Redis tạm của từng cụm kiểm thử được dọn sau khi lấy bằng chứng; Kafka, Kafka UI và Redis do người dùng khởi động không bị dừng.
- `OFF-02`, `SCH-02` và `NET-01` vẫn chờ kịch bản mobile và fixture/lỗi mạng có kiểm soát; nay đã có thiết bị và build LAN phù hợp.
- `PRO-01` có hai lần chạy phải giữ tách biệt: cấu hình `127.0.0.1` ngày 22/09 là `Invalid`; cấu hình LAN ngày 23/09 là `Fail` ở bước tiêu thụ vé SSO.
- `LEV-02` đã được chạy bổ sung trên Android ngày 23/09; `LEV-01` chỉ có bằng chứng mobile một phần, không được tính Pass cho toàn luồng.
- Kết quả này chờ người dùng rà soát trước khi cập nhật Chương 6–7.
