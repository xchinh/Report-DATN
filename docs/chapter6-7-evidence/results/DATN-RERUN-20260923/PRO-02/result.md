# KẾT QUẢ KIỂM THỬ: PRO-02

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `PRO-02` — Xử lý từng nội dung của đề xuất hồ sơ |
| Tiêu chí | `FR-PRO-03-B02`, `UC-PRO-03-B02`, `UC-PRO-03-B03` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | HRM BE port 6023 |
| Tester | Admin / `TCCB-A` |
| Trạng thái | **Pass** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Từ chối không có `detailId` / thiếu tham số bắt buộc:**
   - Gửi yêu cầu `PUT /api/staff/ly-lich/request/detail/reject` thiếu `detailId`.
   - Kết quả: Backend từ chối với `status: 400`, `message: "Thiếu detailId"`.
2. **Kiểm tra phân quyền xử lý đề xuất:**
   - Cán bộ không có `TCNS_REQUEST_LY_LICH.WRITE` gọi duyệt đề xuất -> Backend từ chối với 401/403.
3. **Xử lý nội dung hợp lệ:**
   - Cấp có thẩm quyền duyệt nội dung chi tiết (`/detail/approve`) và từ chối nội dung chi tiết (`/detail/reject`) với lý do hợp lệ -> Backend cập nhật trạng thái chi tiết của từng trường trong đề xuất.

---

## 2. Kết luận

- Kịch bản đạt trạng thái **Pass**.
- Quá trình thẩm định đề xuất hồ sơ đảm bảo tính nguyên tử ở cấp độ trường thông tin và thực thi kiểm tra tham số nghiêm ngặt.
