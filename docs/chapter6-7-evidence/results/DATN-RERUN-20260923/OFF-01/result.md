# KẾT QUẢ KIỂM THỬ: OFF-01

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `OFF-01` — Từ chối mở tệp văn bản không đủ quyền |
| Tiêu chí | `OFF-R06`: chính sách quyền tệp đã được người dùng xác nhận; liên quan `NFR-03` ở mức backend kiểm tra quyền dữ liệu, **không phải `UC-OFF-01` trên `main`** |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | iOffice BE port 3001 (Commit `4bfdb23`) |
| Tester | `CB-B` / `IOF-OUT` vs `IOF-IN` |
| Trạng thái | **Fail — sai lệch chính sách quyền tệp đã được người phụ trách nghiệp vụ xác nhận** |

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

- Kịch bản nhận kết quả **Fail theo tiêu chí kiểm thử/chính sách đã xác nhận**: chỉ người được phân công hoặc cấp quyền trên văn bản cụ thể mới được tải tệp. Tài khoản chỉ có quyền đọc module nhưng không thuộc phạm vi văn bản không đáp ứng điều kiện này. Xem [biên bản xác nhận bổ sung](../../DATN-TARGETED-RECHECK-20260923/result.md); lượt bổ sung không gọi lại API.
- **Nguyên nhân kỹ thuật:** Hệ thống iOffice Backend hiện tại chỉ áp dụng phân quyền ở mức module (`eofficeVanBanDen:read`), chưa triển khai cơ chế kiểm soát truy cập ở mức bản ghi (record-level access control / document-level ACL) đối với các tệp đính kèm văn bản đến.
- `main:14fe1f6` chưa ghi rõ quy tắc tải tệp theo từng văn bản trong Chương 4; `UC-OFF-01` hiện hành là **Phân công trách nhiệm**. Khi viết Chương 6–7, có thể trình bày đây là sai khác với chính sách nghiệp vụ đã xác nhận và giới hạn của backend iOffice hiện tại, **không kết luận UC-OFF-01 thất bại** hoặc trích chính sách này như nguyên văn Chương 4.
