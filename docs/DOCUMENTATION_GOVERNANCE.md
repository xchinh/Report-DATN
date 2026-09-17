# QUY ƯỚC QUẢN TRỊ TÀI LIỆU VÀ BACKLOG ĐỒNG BỘ BÁO CÁO

## 1. Mục đích và phạm vi

Tài liệu này xác định nguồn thông tin chuẩn, cách phân loại tài liệu và backlog đồng bộ báo cáo. Nó không thay thế bằng chứng mã nguồn, không xác nhận một chức năng mới, và không sửa nội dung LaTex của báo cáo.

## 2. Nguồn chuẩn và thứ tự ưu tiên

| Mức ưu tiên | Nguồn | Dùng để xác nhận |
| --- | --- | --- |
| 1 | Working tree hiện tại của `hrm-be`, `ioffice-be`, `myhcmut-be` | Hành vi backend, API và giới hạn kỹ thuật hiện hành; xem snapshot nguồn ngày 15/09/2026 |
| 2 | `myhcmut-mobile`, `hrm-fe`, `ioffice-fe` hiện tại | Hành vi native và tích hợp WebApp; backend vẫn là nơi quyết định nghiệp vụ |
| 3 | `13_CURRENT_SOURCE_SNAPSHOT.md` | Mốc commit, thay đổi chưa commit, giới hạn snapshot và trạng thái phụ thuộc môi trường |
| 4 | `01_GATE0_EVIDENCE_INDEX.md`, `12_BASELINE_REPRODUCIBILITY_AUDIT.md` | Bằng chứng Gate 0 lịch sử và giới hạn tái lập |
| 5 | `02_SCOPE_CLAIM_TRACEABILITY.md`, `SYSTEM_OPERATION.md` | Ranh giới nghiệm thu và luồng vận hành đã đối chiếu |
| 6 | `ARCHITECTURE_SCOPE.md`, `THESIS_BLUEPRINT.md`, requirement pack `03` đến `06` | Quy hoạch báo cáo và đặc tả theo miền; phải sửa khi mâu thuẫn với nguồn ưu tiên cao hơn |

Gate 0 (`myhcmut-mobile:4fe5d9c`, `hrm-be:38745a26`) chỉ là mốc lịch sử. Nguồn đối chiếu hiện hành và các thay đổi chưa commit được khóa bằng manifest `13_CURRENT_SOURCE_SNAPSHOT.md`. Ngày 15/09/2026, nhóm SSO/concurrency hiện có đã chạy 53/53 pass khi Redis sẵn sàng; kết quả này không thay thế các số liệu Gate 0 427/427, 370 Mobile hoặc 57 Backend. Phạm vi nghiệm thu có hai miền nghiệp vụ lõi, HRM và iOffice; Auth/SSO là cơ chế xác thực/tích hợp, còn `modules/notification` là **cơ chế thông báo nghiệp vụ xuyên suốt**.

## 3. Phân loại tài liệu

| Nhóm | Tệp | Quy tắc sử dụng |
| --- | --- | --- |
| Chuẩn vận hành | `13_CURRENT_SOURCE_SNAPSHOT`, `01_GATE0`, `02_SCOPE`, `SYSTEM_OPERATION`, `ARCHITECTURE_SCOPE`, `THESIS_BLUEPRINT`, `12_BASELINE_REPRODUCIBILITY_AUDIT` | Cập nhật khi có bằng chứng mới; không suy diễn vượt quá bằng chứng |
| Đặc tả miền | `03_REQUIREMENT_PACK_PROFILE`, `04_REQUIREMENT_PACK_LEAVE`, `05_REQUIREMENT_PACK_NOTIFICATION`, `06_REQUIREMENT_PACK_SSO` | Nguồn chi tiết cho FR, UC, BR và tiêu chí kiểm chứng |
| Bản thảo/đánh giá lịch sử | `07` đến `10`, `09B`, `11_FINAL_CONSISTENCY_REVIEW`, `14_REPORT_7_CHAPTER_AUDIT` | Chỉ tham khảo lịch sử; không dùng làm nguồn duy nhất để khẳng định hiện trạng |

Các prompt, review và kế hoạch đã lỗi thời đã được loại bỏ để giữ tập tài liệu dễ đọc. Khi tài liệu bị thay thế, phải ghi rõ nguồn chuẩn thay thế và lý do thay thế.

## 4. Backlog đồng bộ báo cáo LaTex

| Ưu tiên | Vị trí báo cáo | Việc cần thực hiện khi được phê duyệt sửa báo cáo | Căn cứ |
| --- | --- | --- | --- |
| P0 | `Chapter4/section2/index.tex` | Bỏ KHCN khỏi chuỗi phân hệ đặc tả; chỉ nhắc ở Chương 7 như hướng phát triển. | KHCN bị loại trừ khỏi nghiệm thu trong `01_GATE0` và `02_SCOPE`. |
| P0 | `Chapter4/section3.tex` | Sửa “Wizard 4 bước” thành “Wizard 3 bước”. | `04_REQUIREMENT_PACK_LEAVE.md`, `SYSTEM_OPERATION.md`, `02_SCOPE`. |
| P1 | Chương 4 | Bổ sung đặc tả đi công tác: FR, UC, trạng thái, quyền, luồng trả lại/từ chối và giới hạn kiểm thử thủ công. | `02_SCOPE` CTX-BTR và `ARCHITECTURE_SCOPE`. |
| P1 | Chương 4 | Thêm ma trận RBAC vai trò × quyền × Use Case; thêm danh mục Business Rules có mã và truy vết tới Use Case. | `THESIS_BLUEPRINT.md`, requirement packs. |
| P1 | Chương 4 | Chuyển NFR thành yêu cầu có tiêu chí kiểm chứng hoặc ghi rõ là mục tiêu thiết kế nếu chưa có phép đo. | `01_GATE0` là nguồn duy nhất của số liệu kiểm thử. |
| P2 | Chương 2–3 | Giữ Chương 2 ở khảo sát/khoảng trống; Chương 3 ở cơ sở và lý do lựa chọn. Chuyển giao thức, endpoint, ERD và sequence kỹ thuật sang Chương 5. | Phân định Chương 4–5 trong `THESIS_BLUEPRINT.md`. |
| P2 | Biểu đồ hoạt động Chương 4 | Tại chuyển trạng thái nghiệp vụ thực sự, dùng nhãn “phát sinh sự kiện thông báo”; không dùng nhãn chung chung “gửi thông báo”. | Ranh giới giữa nghiệp vụ HRM/iOffice và cơ chế thông báo nghiệp vụ xuyên suốt. |

## 5. Quy tắc biên tập

1. Không mô tả KHCN, PKI CA hoặc WebRTC là chức năng đã triển khai hay được nghiệm thu.
2. Không dùng pass rate để suy ra code coverage hoặc chất lượng tuyệt đối.
3. Không ghi chỉ số hiệu năng, phiên bản hay khả năng bảo mật nếu không có nguồn hoặc phép đo tương ứng.
4. Khi nêu một cơ chế kỹ thuật, phải phân biệt rõ: đã kiểm chứng, giả định vận hành hay hướng phát triển.
5. Mỗi thay đổi báo cáo phải đối chiếu lại với `01_GATE0`, `02_SCOPE` và requirement pack liên quan.
6. Chỉ gọi một kết quả kiểm thử là “đã tái lập” khi có commit, lệnh, môi trường phụ thuộc và log đầu ra của chính lần chạy đó.
