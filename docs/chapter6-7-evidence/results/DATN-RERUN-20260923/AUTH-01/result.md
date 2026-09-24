# KẾT QUẢ KIỂM THỬ: AUTH-01

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `AUTH-01` — Đăng nhập, gắn token và xử lý phiên không hợp lệ |
| Tiêu chí | `NFR-03-B01`, `NFR-03-B02` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | Mobile commit `7f90ac7`, Auth BE `7e687a6`, HRM BE `9e39ccc2`, iOffice BE `4bfdb23` |
| Tester | `CB-A` (User ID `287`, SHCC `003009`) |
| Trạng thái sau đối chiếu bổ sung | **Fail — nhánh xử lý phiên HRM; các nhánh đăng nhập/gắn token đã đạt trong phạm vi biên bản** |

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
   - Khi token sai chữ ký được gửi đến HRM BE: HRM BE trả HTTP 200 kèm `{ status: 401, message: "Token hết hạn hoặc không hợp lệ" }`. Kết quả chỉ đọc này được kiểm tra lại ở [biên bản bổ sung](../../DATN-TARGETED-RECHECK-20260923/result.md).
   - Tại mobile commit `7f90ac7`, `MultiDomainAuthInterceptor.onError` chỉ xóa token khi `err.response?.statusCode == 401`. Client HRM tạo `Dio` không bật chuyển đổi `status` trong body thành HTTP/Dio error. Vì vậy **không có bằng chứng interceptor xóa token hoặc điều hướng đăng nhập lại** cho phản hồi HTTP 200/body 401 này; theo luồng mã đã kiểm tra, điều kiện xử lý 401 của interceptor không được kích hoạt. Chưa thay token thật trên điện thoại để quan sát UI.

---

## 2. Kết luận

- Các nhánh đăng nhập và dùng JWT trên các backend đạt theo biên bản gốc; nhánh xử lý phiên không hợp lệ của HRM **không đạt hợp đồng giữa phản hồi backend và interceptor**, nên kịch bản tổng thể là **Fail** theo quy tắc Mục 7 của kế hoạch.
- Không kết luận toàn bộ phiên đa dịch vụ tự hết hạn/xóa token hoặc ứng dụng đã điều hướng đăng nhập lại. Hành vi UI thực tế khi gặp HTTP 200/body 401 còn cần kiểm thử client riêng nếu muốn mô tả chi tiết trong Chương 6.
