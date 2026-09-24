# KẾT QUẢ KIỂM THỬ: LEV-05

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `LEV-05` — Nhất quán số dư khi duyệt cuối đồng thời |
| Tiêu chí | `FR-LEV-04-B03` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | HRM BE port 6023 |
| Tester | Automated Concurrency Integration |
| Trạng thái | **Fail theo biên bản thực nghiệm** đối với số dư; **Pass** ở 11 unit test mô phỏng/in-memory, không phải kiểm thử tích hợp CSDL |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Kiểm tra mức tích hợp CSDL (Integration):**
   - Thiết lập số dư quỹ phép còn lại = 1 ngày. Chuẩn bị 2 đơn nghỉ phép khác nhau, mỗi đơn xin 1 ngày.
   - Gửi 2 yêu cầu phê duyệt cuối đồng thời tới backend.
   - Biên bản ghi nhận cả hai đơn được duyệt và số dư xuống `-1`. Thư mục này chưa lưu request song song, ID đơn và snapshot số dư trước–sau, nên không đủ căn cứ xác định chính xác cơ chế gây lỗi hoặc tái lập độc lập từ artifact hiện có.
2. **Kiểm tra unit test (`acquire_leave_lock.unit.test.ts`, `concurrency_race_condition.unit.test.ts`):**
   - Hai suite đạt 11/11 trên logic mô phỏng/in-memory; chúng không thực thi hai lần duyệt cuối đồng thời với CSDL thật và không xác nhận hay bác bỏ hiện tượng số dư âm.

---

## 2. Kết luận

- Giữ phát hiện **Fail theo biên bản**, nhưng chưa gọi đây là lỗi `Lost Update` hoặc quy nguyên nhân cho một cơ chế khóa cụ thể. Nếu muốn khẳng định kết quả thực nghiệm định lượng ở Chương 6, cần fixture cô lập, request đồng thời và snapshot số dư trước–sau có thể tái lập. Chương 7 chỉ nên nêu bất thường cần điều tra/khắc phục, không chọn sẵn giải pháp khóa khi chưa xác định nguyên nhân.
