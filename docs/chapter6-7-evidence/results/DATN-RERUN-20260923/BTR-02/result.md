# KẾT QUẢ KIỂM THỬ: BTR-02

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `BTR-02` — Quản lý nháp và hồ sơ công tác bị trả lại |
| Tiêu chí | `BTR-R01`, `BTR-R02`, `BTR-R03` (Chương 4 hiệu chỉnh 23/09/2026) |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | Mobile commit `7f90ac7`, HRM BE `9e39ccc2` |
| Tester | `CB-A` (User ID `287`, SHCC `003009`, Phòng Hành chính) |
| Trạng thái | **Pass** (theo tiêu chí ranh giới Nháp–Đã gửi–Bị trả lại trong Kế hoạch kiểm thử mới) |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Quản lý hồ sơ Nháp (`NHAP`):**
   - Tạo hồ sơ nháp `#1065` với đầy đủ lịch trình và dự toán.
   - Sửa thông tin hồ sơ nháp: API tiếp nhận và cập nhật thành công.
   - Xóa hồ sơ nháp: Gọi `DELETE /api/tcns-di-cong-tac/dang-ky/1065` trả về HTTP 200 `{ status: 200, message: "Success" }`. Hồ sơ nháp cùng các bảng phụ thuộc (`thamGia`, `lichCaNhan`, `quyTrinh`) được dọn sạch hoàn toàn.
2. **Chặn sửa/xóa hồ sơ đã gửi:**
   - Đối với hồ sơ công tác đã nộp vào quy trình phê duyệt (`maQuyTrinh != 'NHAP'`), nếu người lập gọi API xóa `DELETE /api/tcns-di-cong-tac/dang-ky/:id`:
   - Backend kiểm tra điều kiện dòng 294 trong `dang_ky.controller.ts`:
     ```typescript
     if (item.maQuyTrinh != 'NHAP') throw new ValidationError('Trạng thái phiếu không được phép xoá');
     ```
     và lập tức từ chối với `status: 400`, `message: "Trạng thái phiếu không được phép xoá"`.
   - Ứng dụng di động không mặc định cung cấp thao tác thu hồi cho người lập theo đúng ranh giới của Chương 4.
3. **Chỉnh sửa và nộp lại hồ sơ Bị trả lại (`TRA_LAI` / target `GUI_LAI`):**
   - Hồ sơ bị cấp phê duyệt trả lại được phép mở lại để điều chỉnh kế hoạch, nội dung, kinh phí và nộp lại theo target `GUI_LAI` của quy trình.

---

## 2. Kết luận

- Kịch bản đạt trạng thái **Pass**.
- Hệ thống phân định minh bạch quyền hạn giữa các trạng thái hồ sơ: toàn quyền với bản Nháp, khóa thao tác xóa khi đã gửi duyệt, và cho phép chỉnh sửa nộp lại khi bị trả lại.
