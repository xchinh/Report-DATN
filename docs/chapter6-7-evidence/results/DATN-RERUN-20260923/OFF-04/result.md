# KẾT QUẢ KIỂM THỬ: OFF-04

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `OFF-04` — Phân công, tham mưu, chỉ đạo và tiếp nhận văn bản đến |
| Tiêu chí | `OFF-R02..R05` (`FR-IOFF-02/03`, `UC-OFF-01..04`) |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | iOffice BE port 3001 (Commit `4bfdb23`), Mobile APK build từ `a6a1dc6` (mã nguồn `7f90ac7`) |
| Tester | `IOF-CLERK`, `IOF-ADVISOR`, `IOF-DIRECTOR`, `IOF-RECIPIENT-A/B` |
| Trạng thái kịch bản theo quy tắc kế hoạch | **Fail (Pass các luồng phân công/tiếp nhận; Fail hậu điều kiện tự động hoàn thành)** |

---

## 1. Kết quả chi tiết theo từng nhánh kịch bản

| Nhánh kiểm thử | Kỳ vọng kế hoạch | Kết quả thực tế | Trạng thái nhánh |
| --- | --- | --- | :---: |
| **Nhánh 1: Khởi tạo phân công (Phiếu giải quyết - PGQ)** | Văn thư/Lãnh đạo phân công người xử lý văn bản đến thành công | `IOF-CLERK` gọi `POST /api/e-office/van-ban-den/phieu-giai-quyet` thành công, lưu danh sách người nhận `003009` và `002871` | **Pass** |
| **Nhánh 2: Chặn phân công trái quyền** | Tài khoản không có thẩm quyền bị backend từ chối thao tác phân công | Tài khoản thường gửi request tạo PGQ -> Backend từ chối với HTTP 403 Forbidden | **Pass** |
| **Nhánh 3: Tham mưu và chỉ đạo văn bản đến** | Ý kiến tham mưu và chỉ đạo được lưu vết chính xác vào luồng xử lý | Cấp lãnh đạo tham mưu / BGH gửi ý kiến thành công, hệ thống lưu vết đầy đủ trong tiến trình | **Pass** |
| **Nhánh 4: Tiếp nhận nhiệm vụ cá nhân** | Người được phân công tiếp nhận nhiệm vụ thành công | Hai cán bộ `IOF-RECIPIENT-A` và `IOF-RECIPIENT-B` lần lượt gọi API tiếp nhận (`tiep-nhan`) thành công, ghi nhận `receivedAt` | **Pass** |
| **Nhánh 5: Hậu điều kiện tự động hoàn thành khi đủ 100% người tiếp nhận (UC-OFF-04)** | Khi 100% người được phân công đã tiếp nhận, hệ thống tự động chuyển trạng thái văn bản sang *Hoàn thành* | **Không đạt:** Ngay sau lượt tiếp nhận cuối cùng của `IOF-RECIPIENT-B`, văn bản vẫn ở trạng thái đang xử lý (`departmentsHandling` / `dangXuLy`). Backend chỉ tự động kết thúc cho văn bản "chỉ thông tin/để biết"; đối với văn bản triển khai, hệ thống đòi hỏi phải gọi thêm API `hoan-thanh` riêng biệt, không tự động chuyển trạng thái như đặc tả UC-OFF-04 | **Fail** |

---

## 2. Bằng chứng và Đối chiếu mã nguồn

- **Căn cứ đặc tả UC-OFF-04 (Chương 4, `Chapter4/section2/ioffice_schedule/index.tex:140-158`):**
  > *Bước 3: Hệ thống kiểm tra 100% người được phân công đã tiếp nhận hay chưa.*
  > *Bước 4: Nếu tất cả đã tiếp nhận, hệ thống tự động cập nhật trạng thái văn bản là Hoàn thành.*
- **Đối chiếu hiện thực Backend (`eofficeVanBanDenPGQ.controller.js:278-348`):**
  Hệ thống kiểm tra `if (vb.isThongTin || pgqItem.biet)` mới gán `doneAt = receivedAt`. Đối với văn bản giao nhiệm vụ, `doneAt` giữ nguyên `null`. Do đó, trạng thái không tự động chuyển Hoàn thành nếu không có can thiệp thủ công từ bên ngoài.

---

## 3. Ranh giới khẳng định & Kết luận

- **Phần được biên bản ghi nhận là đạt:** tạo PGQ qua API, chặn actor trái quyền, ghi nhận tham mưu/chỉ đạo và tiếp nhận cá nhân. Thư mục kịch bản hiện chỉ có `result.md`, chưa có raw request/response, ID fixture và snapshot trước–sau để kiểm chứng độc lập các nhánh này. Bước phân công **trên mobile**, gửi thông báo tới người nhận và từ chối **đối tượng nhận** không hợp lệ (nhánh 3a của `UC-OFF-01` trên `main`) chưa được kiểm tra; HTTP 403 của actor trái quyền không thay thế nhánh 3a.
- **Phần không đạt (Fail):** Hậu điều kiện tự động chuyển trạng thái văn bản sang Hoàn thành sau khi 100% người nhận hoàn tất tiếp nhận không được đáp ứng trên mã nguồn backend hiện tại.
- **Kết luận theo Mục 7 Kế hoạch:** Do không thỏa mãn hậu điều kiện bắt buộc của Use Case, kịch bản được phân loại là **Fail (Không đạt)** để đưa vào danh mục khiếm khuyết kỹ thuật cần xử lý trong Chương 7.
