# KẾT QUẢ KIỂM THỬ: OFF-02

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `OFF-02` — Xem chi tiết và mở tệp PDF theo cơ chế thực tế |
| Tiêu chí | `OFF-R01` (chi tiết / tệp văn bản), `FR-IOFF-01` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | Mobile build commit `7f90ac7`, Realme RMX2151 (Android 12) |
| Tester | `IOF-IN` |
| Trạng thái | **Pass** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Xem chi tiết văn bản đến:**
   - Mở màn hình chi tiết văn bản đến trên thiết bị di động.
   - Thẻ văn bản hiển thị đầy đủ các thông tin: số hiệu, trích yếu, cơ quan ban hành, ngày đến và danh sách tệp đính kèm hợp lệ.
   - Minh chứng: `01_incoming_doc_card.png`.

2. **Kích hoạt mở tệp đính kèm qua OS Intent:**
   - Người dùng bấm vào tệp đính kèm định dạng PDF.
   - Ứng dụng Flutter sử dụng Dio tải tệp về thư mục lưu trữ cục bộ tạm thời của ứng dụng, sau đó gọi plugin `open_file` kích hoạt Android OS Intent Chooser.
   - Hệ điều hành hiển thị hộp thoại lựa chọn ứng dụng xử lý tài liệu bên ngoài (Intent Chooser: Drive PDF Viewer, WPS Office, v.v.).
   - Minh chứng: `02_os_intent_chooser.png`.

3. **Xem tệp toàn văn trên ứng dụng chuyên dụng của hệ thống:**
   - Người dùng chọn ứng dụng đọc tài liệu (WPS Office / Viewer hệ thống), tệp tài liệu được hiển thị toàn màn hình, hỗ trợ thu phóng và đọc nội dung đầy đủ.
   - Minh chứng: `03_external_pdf_viewer.png`.

4. **Quay trở lại ứng dụng MyHCMUT:**
   - Người dùng thao tác nút Back hoặc đóng ứng dụng đọc ngoài; hệ điều hành trả quyền điều khiển về lại ứng dụng MyHCMUT an toàn và liền mạch, không xảy ra xung đột hay mất trạng thái.
   - Minh chứng: `04_app_returned.png`.

---

## 2. Minh chứng kèm theo

| STT | Tên tệp ảnh | Nội dung minh chứng |
| --- | --- | --- |
| 1 | `01_incoming_doc_card.png` | Chi tiết thẻ văn bản đến và danh mục tệp đính kèm |
| 2 | `02_os_intent_chooser.png` | Hộp thoại Android OS Intent Chooser kích hoạt từ plugin `open_file` |
| 3 | `03_external_pdf_viewer.png` | Tệp PDF mở toàn văn trong ứng dụng chuyên dụng ngoài hệ thống |
| 4 | `04_app_returned.png` | Quay trở lại ứng dụng MyHCMUT sau khi đóng viewer ngoài |

---

## 3. Kết luận

- Kịch bản đạt trạng thái **Pass**.
- Cơ chế mở tệp văn bản iOffice hoạt động đúng như thiết kế: ủy quyền hiển thị cho ứng dụng ngoài thông qua hệ điều hành (khác với tài liệu lịch họp dùng viewer nhúng nội bộ `PDFViewerScreen`/`pdfrx`).
