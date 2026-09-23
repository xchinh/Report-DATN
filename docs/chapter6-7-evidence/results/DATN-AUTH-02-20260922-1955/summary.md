# TỔNG HỢP BẰNG CHỨNG AUTH-02

| Nhánh | Quyền hiệu lực | Kết quả gọi API duyệt | Trạng thái fixture |
| --- | --- | --- | --- |
| `CB-B` | Không có `tcns:request_ly_lich:write` | Bị middleware từ chối với mã ứng dụng `401` | Giữ nguyên `PENDING` |
| `TCCB-A` | Có quyền ghi và quyền duyệt danh mục fixture | API trả mã ứng dụng `200`, `success=true` | Chuyển sang `APPROVED` |

`AUTH-02`: **Pass** trong phạm vi endpoint HRM đã chọn. Kết quả trực tiếp chứng minh backend phân biệt hai tài khoản tại ranh giới quyền, chỉ cập nhật khi tài khoản có quyền phù hợp và không để lại fixture sau kiểm thử. Kết quả này không được suy rộng thành bằng chứng runtime cho mọi endpoint HRM hoặc iOffice.
