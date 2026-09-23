# KẾT QUẢ KIỂM THỬ: LEV-02

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `LEV-02` — Hủy quy trình và dọn dữ liệu nháp |
| Tiêu chí | `FR-LEV-03-B03`, `UC-LEV-02-B04` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Thiết bị | Realme RMX2151, Android 12/API 31 |
| Đối tượng kiểm thử | Mobile commit `7f90ac7`, HRM BE `9e39ccc2` |
| Tester | `CB-A` (User ID `287`, SHCC `003009`, Phòng Hành chính) |
| Trạng thái | **Pass** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Khởi tạo bản nháp & Hủy quy trình:**
   - Trên Mobile, tiến hành tạo đơn nháp nghỉ phép đến bước tạo bản ghi trên hệ thống.
   - Chọn thao tác hủy/thoát trên giao diện; xác nhận hộp thoại xác nhận hủy.
2. **Kiểm tra dọn dẹp dữ liệu:**
   - Kiểm tra API danh sách và lịch cá nhân: bản ghi nháp và sự kiện giữ chỗ được dọn sạch hoàn toàn khỏi CSDL.
3. **Thử tạo lại cùng khoảng ngày:**
   - Tạo lại đơn mới cùng khoảng ngày đã hủy: hệ thống tiếp nhận bình thường mà không báo lỗi xung đột do dữ liệu mồ côi.

---

## 2. Kết luận

- Kịch bản đạt trạng thái **Pass**.
- Quá trình hủy bỏ wizard thu hồi và dọn dẹp sạch sẽ tài nguyên trung gian, không để lại dữ liệu rác cản trở các thao tác tiếp theo.
