# KẾT QUẢ KIỂM THỬ: OFF-01

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `OFF-01` — Từ chối mở tệp văn bản không đủ quyền |
| Tiêu chí | `OFF-R06` / `NFR-03` (quyền truy cập tệp iOffice theo bản ghi) |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | iOffice BE port 3001 (Commit `4bfdb23`) |
| Tester | `CB-B` / `IOF-OUT` vs `IOF-IN` |
| Trạng thái | **Fail (Bảo lưu phát hiện kỹ thuật)** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Kiểm tra quyền truy cập tệp đính kèm ở mức bản ghi (`GET /api/e-office/van-ban-den/files/:fileId`):**
   - Tài khoản `IOF-OUT` (cán bộ có quyền đọc văn bản chung trong đơn vị nhưng không nằm trong danh sách phân công / tiếp nhận của văn bản đến cụ thể) gửi yêu cầu tải tệp đính kèm `DOC-DENIED` qua endpoint:
     `GET /api/e-office/van-ban-den/files/:fileId`
   - Phân tích logic kiểm soát quyền tại controller `modules/md-eoffice/eoffice-van-ban-den/controller/eofficeVanBanDenFile.controller.js`:
     ```javascript
     app.get('/api/e-office/van-ban-den/files/:fileId', app.permission.check('eofficeVanBanDen:read'), async (req, res) => {
         // Chỉ kiểm tra quyền module eofficeVanBanDen:read, không đối chiếu danh sách phân công/tiếp nhận
     ```
   - Kết quả phản hồi: Backend trả về HTTP 200 kèm đường dẫn tải/nội dung tệp cho `IOF-OUT` thay vì từ chối bằng HTTP 403 Forbidden.

2. **Đối chứng với tài khoản hợp lệ (`IOF-IN`):**
   - Tài khoản `IOF-IN` truy cập tệp hợp lệ `DOC-ALLOWED` thành công.

---

## 2. Kết luận

- Kịch bản nhận kết quả **Fail (Bảo lưu phát hiện kỹ thuật)**.
- **Nguyên nhân kỹ thuật:** Hệ thống iOffice Backend hiện tại chỉ áp dụng phân quyền ở mức module (`eofficeVanBanDen:read`), chưa triển khai cơ chế kiểm soát truy cập ở mức bản ghi (record-level access control / document-level ACL) đối với các tệp đính kèm văn bản đến.
- Báo cáo Chương 6–7 bảo lưu phát hiện này như một giới hạn kỹ thuật kiến trúc cần cải tiến trong các phiên bản tiếp theo.
