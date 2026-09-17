# RÀ SOÁT NỘI DUNG BÁO CÁO 7 CHƯƠNG

> **Phạm vi:** đánh giá nội dung hiện tại và danh mục chỉnh sửa đề xuất. Tài liệu này không thay đổi bất kỳ tệp LaTeX nào.
>
> **Nguồn đối chiếu:** `13_CURRENT_SOURCE_SNAPSHOT.md`, requirement packs và mã nguồn hiện hành.

## Các điểm cần sửa xuyên chương

| Mức | Vấn đề | Hướng xử lý khi được duyệt sửa LaTeX |
| --- | --- | --- |
| P0 | Wizard nghỉ phép được ghi 4 bước ở nhiều nơi, trong khi đặc tả/mã nguồn đối chiếu là 3 bước | Chuẩn hóa thành 3 bước; mô tả tải tệp hoặc nộp đơn là thao tác trong luồng, không tự biến thành bước thứ tư |
| P0 | Số liệu kiểm thử 392, 427, 370 và 57 xuất hiện không nhất quán | Chỉ giữ kết quả có lệnh, môi trường, log và mốc nguồn; các số Gate 0 phải gắn nhãn lịch sử |
| P0 | KHCN/PKI xuất hiện như phân hệ hoặc hiện thực | Loại khỏi yêu cầu/kết quả; chỉ giữ trong giới hạn hoặc hướng phát triển nếu cần |
| P1 | Có đoạn nói iOffice chưa có Transactional Outbox | Sửa theo source hiện hành: outbox có mặt trong iOffice; chưa suy diễn nó đã được chạy hay bao phủ toàn bộ nghiệp vụ |
| P1 | Chi tiết protocol/endpoint lẫn vào chương khảo sát và yêu cầu | Chuyển về Chương 5; Chương 2–4 chỉ giữ mức phù hợp học thuật/nghiệp vụ |

## Đánh giá theo chương

### Chương 1 — Giới thiệu

- **Giữ:** bối cảnh, vấn đề, mục tiêu, phạm vi, nhóm người dùng và đóng góp.
- **Bổ sung:** ranh giới rõ ràng: BE là nơi có thẩm quyền nghiệp vụ; mobile là lớp tương tác; FE là WebApp tích hợp khi cần biểu mẫu chuyên sâu.
- **Rút gọn:** số liệu tổ chức, tên công nghệ, cổng/kỹ thuật xác thực và mô tả endpoint nếu không có nguồn công bố hoặc không giúp xác định bài toán.

### Chương 2 — Hệ thống liên quan

- **Giữ:** khảo sát HRM/iOffice, tiêu chí so sánh, khoảng trống mobile và lý do tái sử dụng WebApp.
- **Bổ sung:** phương pháp so sánh, nguồn tham khảo và tiêu chí có thể quan sát (tác vụ di động, workflow, thông báo, tích hợp).
- **Rút gọn:** thuật toán SSO, adapter, Kafka, mô tả API và lời khẳng định giải pháp đã triển khai.

### Chương 3 — Cơ sở lý thuyết và công nghệ

- **Giữ:** nguyên lý Clean Architecture, REST, quản lý phiên, WebView, đồng thời, event delivery và các lựa chọn công nghệ có lý do.
- **Bổ sung:** phân biệt Bearer JWT cho API native với One-Time Ticket để thiết lập Web session; nêu giới hạn của từng cơ chế.
- **Rút gọn:** tên bảng, endpoint, TTL, lệnh Redis, sequence cụ thể và cam kết hiệu năng/bảo mật tuyệt đối; chuyển chúng sang thiết kế kỹ thuật.

### Chương 4 — Phân tích và đặc tả yêu cầu

- **Giữ:** tác nhân, use case, FR, BR, trạng thái nghiệp vụ và NFR.
- **Bổ sung:** đặc tả đi công tác (tạo, cập nhật, gửi, duyệt/từ chối/trả lại, quyền và trạng thái); ma trận vai trò × quyền × use case; danh mục BR có mã và truy vết; NFR có cách kiểm chứng.
- **Loại/sửa:** KHCN; Wizard nghỉ phép 4 bước; các activity/sequence thuần kỹ thuật; NFR không đo được hoặc không gắn điều kiện kiểm thử.

### Chương 5 — Phân tích và thiết kế

- **Giữ:** kiến trúc đa hệ thống, dữ liệu mục tiêu, thiết kế API/adapter, kiểm soát đồng thời, SSO/WebView, thông báo và outbox.
- **Bổ sung:** trạng thái kiểm chứng của mỗi phần; với outbox, mô tả ranh giới iOffice và không khái quát sang toàn bộ backend khi chưa có bằng chứng.
- **Rút gọn:** lặp lại use case, persona và quy tắc nghiệp vụ đã đặc tả ở Chương 4.

### Chương 6 — Kết quả hiện thực và kiểm thử

- **Giữ:** ảnh/chức năng hiện thực, mapping tới FR và test có log.
- **Bổ sung:** bảng truy vết FR → hiện thực → kiểm thử; điều kiện Redis/Kafka/FCM cho từng E2E; tách test tự động, kiểm thử thủ công và kết quả lịch sử.
- **Loại/sửa:** 392/427/370/57 không nhất quán; benchmark, FPS, RAM, độ trễ hoặc CI/CD nếu không có phương pháp và log tương ứng.

### Chương 7 — Tổng kết và hướng phát triển

- **Giữ:** đối chiếu mục tiêu, đóng góp, giới hạn và hướng phát triển.
- **Bổ sung:** giới hạn runtime hiện tại của SSO do Redis chưa được tái lập; giới hạn tích hợp xác minh theo từng hệ thống.
- **Loại/sửa:** KHCN như hiện thực mẫu; khẳng định thiếu outbox; các kết luận tuyệt đối về bảo mật, reliability hoặc hiệu năng.

## Trình tự sửa LaTeX khi được duyệt

1. Chuẩn hóa phạm vi và thuật ngữ ở Chương 1, sau đó loại mâu thuẫn KHCN/Wizard/test count xuyên chương.
2. Hoàn thiện yêu cầu Chương 4 trước; dùng nó làm chuẩn để tách nội dung kỹ thuật về Chương 5.
3. Đồng bộ Chương 6–7 chỉ bằng bằng chứng kiểm thử và source snapshot mới nhất.
4. Biên dịch PDF, kiểm tra tham chiếu chéo, bảng/hình và chạy quét cuối các thuật ngữ bị loại.
