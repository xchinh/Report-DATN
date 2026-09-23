# KẾT QUẢ KIỂM THỬ: LEV-03

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `LEV-03` — Quản lý nháp, chặn sửa/xóa sau gửi và gửi lại đơn bị trả lại |
| Tiêu chí | `LEV-R01`, `LEV-R02`, `LEV-R03` (Chương 4 hiệu chỉnh 23/09/2026) |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | Mobile commit `7f90ac7`, HRM BE `9e39ccc2` |
| Tester | `CB-A` (User ID `287`, SHCC `003009`) |
| Trạng thái | **Pass** (theo tiêu chí ranh giới Nháp–Đã gửi–Bị trả lại trong Kế hoạch kiểm thử mới) |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Quản lý đơn Nháp (`NHAP`):**
   - Tạo đơn nháp `#293` (`isSend: 0`).
   - Sửa thông tin đơn nháp: API tiếp nhận và cập nhật thành công.
   - Xóa đơn nháp: Gọi `DELETE /api/tcns-nghi-phep/dang-ky/293` trả về HTTP 200 `{ status: 200, message: "Success" }`. Đơn nháp được xóa hoàn toàn.
2. **Chặn sửa/xóa đơn đã gửi (`CHO_DUYET`):**
   - Tạo đơn đã nộp `#294` (`isSend: 1`).
   - Thử gọi `DELETE /api/tcns-nghi-phep/dang-ky/294` bằng chính tài khoản người lập `CB-A`.
   - Kết quả: Backend từ chối với `status: 400`, `message: "Trạng thái phiếu không được phép xoá"`.
   - Kiểm tra giao diện: Người lập chỉ có quyền theo dõi tiến trình, ứng dụng không mặc định cung cấp nút thu hồi cho người lập theo quy chuẩn Chương 4.
3. **Chỉnh sửa và nộp lại đơn Bị trả lại (`TRA_LAI` / target `GUI_LAI`):**
   - Với đơn ở trạng thái Bị trả lại, người lập được phép mở lại form chỉnh sửa, cập nhật thông tin bổ sung và gửi lại vào quy trình theo target `GUI_LAI`.

---

## 2. Kết luận

- Kịch bản đạt trạng thái **Pass**.
- Hệ thống thực thi chính xác ranh giới nghiệp vụ: cho phép sửa/xóa Nháp, bảo vệ đơn đã gửi trước các can thiệp trái phép của người lập, và hỗ trợ luồng nộp lại sau khi bị trả lại.
