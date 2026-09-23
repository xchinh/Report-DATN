# KẾT QUẢ KIỂM THỬ: LEV-05

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `LEV-05` — Nhất quán số dư khi duyệt cuối đồng thời |
| Tiêu chí | `FR-LEV-04-B03` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | HRM BE port 6023 |
| Tester | Automated Concurrency Integration |
| Trạng thái | **Fail (Bảo lưu phát hiện kỹ thuật)** đối với tích hợp CSDL; **Pass** đối với cơ chế khóa Redis độc lập |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Kiểm tra mức tích hợp CSDL (Integration):**
   - Thiết lập số dư quỹ phép còn lại = 1 ngày. Chuẩn bị 2 đơn nghỉ phép khác nhau, mỗi đơn xin 1 ngày.
   - Gửi 2 yêu cầu phê duyệt cuối đồng thời tới backend.
   - Kết quả: Do bước ghi nhận phê duyệt cuối chưa áp dụng khóa mức dòng (`SELECT ... FOR UPDATE`) hoặc cô lập giao dịch `SERIALIZABLE`, xảy ra hiện tượng xung đột tương tranh (Lost Update) khiến cả hai đơn đều được duyệt thành công và số dư quỹ phép bị trừ thành `-1`.
2. **Kiểm tra cơ chế khóa Redis (`acquire_leave_lock.unit.test.ts`):**
   - Bộ unit test khóa phân tán trên Redis đạt 4/4 Pass và suite race condition đạt 7/7 Pass khi Redis hoạt động độc lập.

---

## 2. Kết luận

- Kịch bản giữ kết quả **Fail (Bảo lưu phát hiện kỹ thuật)** ở tầng CSDL nghiệp vụ thực tế, đóng góp kiến nghị bổ sung khóa bi quan (pessimistic lock) cho bước duyệt cuối trong Chương 7.
