# KẾT QUẢ KIỂM THỬ: AUTH-01

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `AUTH-01` — Đăng nhập, gắn token và xử lý phiên không hợp lệ |
| Tiêu chí | `NFR-03-B01`, `NFR-03-B02` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | Mobile commit `7f90ac7`, Auth BE `7e687a6`, HRM BE `9e39ccc2`, iOffice BE `4bfdb23` |
| Tester | `CB-A` (User ID `287`, SHCC `003009`) |
| Trạng thái | **Pass** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Chưa đăng nhập:** Thử gọi API đọc HRM (`/api/state`) và iOffice (`/api/state`) không kèm token hoặc token sai chữ ký.
   - Kết quả: Bị từ chối truy cập. HRM trả `status: 401`, iOffice chặn với 401/404.
2. **Đăng nhập hợp lệ:** Đăng nhập tài khoản `CB-A` qua Auth BE.
   - Kết quả: Cấp Bearer JWT hợp lệ, chứa đầy đủ thông tin định danh và phân quyền.
3. **Gọi API đa miền qua `MultiDomainAuthInterceptor`:**
   - Ứng dụng tự động gắn Bearer token khi gọi các dịch vụ backend độc lập (HRM port 6023, iOffice port 3001).
   - Cả hai hệ thống đều phân giải người dùng thành công (`CB-A`, SHCC `003009`).
4. **Xử lý token lỗi / hết hạn (401 Handling):**
   - Khi token sai chữ ký được gửi đến HRM BE: HRM BE trả HTTP 200 kèm `{ status: 401, message: "Token hết hạn hoặc không hợp lệ" }`.
   - `MultiDomainAuthInterceptor` bắt mã 401 từ application payload/HTTP status, xóa token lưu cục bộ của domain tương ứng và chuyển tiếp lỗi để điều hướng người dùng đăng nhập lại an toàn.

---

## 2. Kết luận

- Kịch bản đạt trạng thái **Pass**.
- Cơ chế quản lý phiên đa dịch vụ hoạt động đúng cam kết; dữ liệu nhạy cảm được che chắn hoàn toàn.
