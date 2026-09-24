# KẾT QUẢ KIỂM THỬ: SCH-02

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `SCH-02` — Lỗi tải lịch được thông báo và có thể thử lại |
| Tiêu chí | `FR-SCH-02-B04` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | Mobile APK build từ `a6a1dc6` (mã nguồn `7f90ac7`), iOffice BE port 3001 |
| Thiết bị | Realme RMX2151 (Android 12) |
| Trạng thái kịch bản theo quy tắc kế hoạch | **Fail — thông báo lỗi thô trên UI; khả năng thử lại tại màn hình lỗi chưa được xác minh** |

---

## 1. Kết quả chi tiết theo từng nhánh kịch bản

| Nhánh kiểm thử | Kỳ vọng kế hoạch | Kết quả thực tế | Trạng thái nhánh |
| --- | --- | --- | :---: |
| **Nhánh 1: Tải và hiển thị lịch bình thường** | Màn hình lịch cá nhân/tuần hiển thị dữ liệu sự kiện, đồng bộ trạng thái khi chọn ngày | Dữ liệu lịch tải thành công; tương tác chọn ngày (chuyển sang ngày 25 `screen_schedule_day25.png`) cập nhật mượt mà theo Riverpod | **Pass** |
| **Nhánh 2: Xử lý an toàn khi mất kết nối / gián đoạn API** | Khi API lịch gián đoạn, ứng dụng không crash và cuối cùng cho biết trạng thái tải | Lượt bổ sung trên Android ghi nhận vòng tải sau khoảng 35 giây mất mạng, rồi màn hình hiện lỗi sau khi nối lại; ứng dụng không crash trong khoảng quan sát. Unit/provider test 3/3 đạt nhưng chỉ dùng phản hồi giả lập | **Pass trong khoảng quan sát; chưa đo timeout** |
| **Nhánh 3: Thông báo lỗi có thể hiểu được** | Theo UC-SCH-02, ứng dụng báo trạng thái lỗi và cho phép thực hiện lại thao tác; Chương 4 không bắt buộc nút riêng | Ảnh bổ sung `schedule_error_after_network_restored.png` ghi nhận chuỗi `Lỗi: Exception: Failed to fetch schedule...` bằng tiếng Anh thô. Không thấy hành động thử lại ngay tại vùng lỗi; một cử chỉ vuốt không làm hết lỗi nhưng chưa xác nhận đó là thao tác retry hợp lệ | **Fail ở thông báo lỗi; khả năng retry chưa xác minh** |
| **Nhánh 4: Phục hồi dữ liệu sau khi khôi phục dịch vụ** | Khôi phục kết nối, người dùng tải lại được dữ liệu lịch | Biên bản gốc có ảnh lịch được tải lại (`03_schedule_recovered.png`). Ở lượt bổ sung, màn hình vẫn lỗi sau một lần vuốt, nhưng khi rời màn hình và mở lại *Lịch biểu* với mạng đã phục hồi thì trạng thái tháng/ngày hiển thị bình thường. Điều này chỉ xác minh đường **mở lại màn hình**, chưa xác minh retry tại chỗ | **Đạt trong phạm vi mở lại màn hình; retry tại chỗ chưa xác minh** |

---

## 2. Minh chứng kèm theo

| STT | Tên tệp ảnh | Nội dung minh chứng |
| --- | --- | --- |
| 1 | `01_schedule_normal.png` / `screen_home_schedule.png` | Màn hình lịch hiển thị dữ liệu sự kiện bình thường |
| 2 | `02_schedule_loading_during_error.png` | Trạng thái ứng dụng khi API gián đoạn (chỉ hiện vòng xoay tải) |
| 3 | `03_schedule_recovered.png` / `screen_schedule_day25.png` | Dữ liệu lịch phục hồi trọn vẹn sau khi khôi phục mạng |
| 4 | [Biên bản bổ sung](../../DATN-TARGETED-RECHECK-20260923/result.md) và ba ảnh `schedule_*` tại đó | Vòng tải khi mất mạng, ngoại lệ thô sau nối lại và màn lỗi sau một lần vuốt |

---

## 3. Ranh giới khẳng định & Kết luận

- **Phần đạt:** Lịch tải được khi có mạng; ứng dụng không crash trong lần ngắt kết nối đã quan sát. Provider test 3/3 đạt trong phạm vi giả lập.
- **Phần không đạt (Fail):** Trên thiết bị thật, thông báo lỗi lịch để lộ chuỗi ngoại lệ kỹ thuật thô, không đạt tiêu chí thông báo trạng thái lỗi có thể hiểu được. Không xem việc thiếu nút Retry riêng là lỗi độc lập của Chương 4; đường thử lại/khôi phục chưa được xác minh nhất quán.
- **Kết luận theo Mục 7 Kế hoạch:** Do có nhánh bắt buộc không đạt, kịch bản được ghi nhận trạng thái **Fail** kèm phân tích chi tiết phạm vi kỹ thuật.
