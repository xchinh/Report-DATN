# KẾT QUẢ KIỂM THỬ: AUTH-02

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `AUTH-02` — Backend từ chối thao tác trái quyền |
| Tiêu chí | `NFR-03-B03` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | HRM BE port 6023, Auth BE port 4000 |
| Tester | `CB-B` (User ID `300` — Cán bộ thường, không có quyền quản lý/duyệt) |
| Trạng thái | **Pass theo biên bản; bằng chứng lưu còn hạn chế** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Thử duyệt nghỉ phép bằng tài khoản không có quyền:**
   - Gửi yêu cầu `POST /api/tcns-nghi-phep/duyet` với token của `CB-B`.
   - Kết quả: Backend từ chối ngay tại tầng phân quyền middleware với thông báo `"Request permissions"` (`status: 401/403`).
2. **Thử duyệt công tác bằng tài khoản không có quyền:**
   - Gửi yêu cầu `POST /api/tcns-di-cong-tac/duyet` với token của `CB-B`.
   - Kết quả: Backend từ chối với `"Request permissions"`.
3. **Thử can thiệp đề xuất hồ sơ:**
   - Gửi yêu cầu duyệt/từ chối lý lịch bằng tài khoản không có `TCNS_REQUEST_LY_LICH.WRITE`.
   - Kết quả: Backend từ chối thao tác.

---

## 2. Kết luận

- Biên bản ghi nhận các request trái quyền bị backend từ chối. Thư mục kịch bản hiện chỉ có `result.md`, chưa lưu raw response/status và ID fixture đã khử dữ liệu để kiểm chứng độc lập từng nhánh; bước 1 còn ghi mơ hồ `401/403`.
- Chỉ kết luận backend đã **được quan sát là từ chối các thao tác đại diện theo biên bản**, không kết luận toàn bộ phân quyền hệ thống đã được xác minh đầy đủ. Cần bổ sung artifact nếu muốn nâng thành Pass toàn diện có thể tái lập.
