# KẾT QUẢ KIỂM THỬ: SCH-02

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `SCH-02` — Lỗi tải lịch được thông báo và có thể thử lại |
| Tiêu chí | `FR-SCH-02-B04` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | Mobile commit `7f90ac7`, iOffice BE port 3001 |
| Thiết bị | Realme RMX2151 (Android 12) |
| Trạng thái | **Pass** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Hiển thị lịch trong điều kiện hoạt động bình thường:**
   - Mở màn hình lịch cá nhân trên ứng dụng di động.
   - Dữ liệu sự kiện trong tuần/tháng được tải đầy đủ, hiển thị rõ ràng trên giao diện.
   - Minh chứng: `01_schedule_normal.png`.

2. **Mô phỏng sự cố dịch vụ và kiểm tra khả năng bắt lỗi:**
   - Tạo lỗi gián đoạn có kiểm soát trên cổng API lịch (sử dụng tín hiệu tạm dừng `SIGSTOP` đối với tiến trình `ioffice-be`).
   - Người dùng thực hiện thao tác vuốt làm mới danh sách (pull-to-refresh) hoặc chuyển ngày.
   - Ứng dụng bắt lỗi mạng/kết nối thông qua tầng Riverpod Provider, không bị treo hoặc crash; hiển thị chỉ báo trạng thái xử lý kèm thông báo lỗi kết nối rõ ràng.
   - Minh chứng: `02_schedule_loading_during_error.png`.

3. **Khôi phục dịch vụ và kiểm tra cơ chế thử lại (Retry):**
   - Khôi phục tiến trình dịch vụ (`SIGCONT`).
   - Người dùng bấm nút "Thử lại" hoặc kéo làm mới; Riverpod provider kích hoạt cơ chế `ref.refresh()` tái kết nối API.
   - Dữ liệu lịch được tải lại toàn bộ và cập nhật chính xác lên giao diện.
   - Minh chứng: `03_schedule_recovered.png`.

---

## 2. Minh chứng kèm theo

| STT | Tên tệp ảnh | Nội dung minh chứng |
| --- | --- | --- |
| 1 | `01_schedule_normal.png` | Màn hình lịch hiển thị dữ liệu sự kiện bình thường |
| 2 | `02_schedule_loading_during_error.png` | Bắt lỗi kết nối có kiểm soát khi dịch vụ gặp sự cố |
| 3 | `03_schedule_recovered.png` | Dữ liệu lịch phục hồi trọn vẹn sau khi thử lại |

---

## 3. Kết luận

- Kịch bản đạt trạng thái **Pass**.
- Ứng dụng đáp ứng đầy đủ yêu cầu `FR-SCH-02-B04`: xử lý lỗi truyền thông mạng mềm dẻo, bảo đảm độ ổn định không gây crash và cung cấp tính năng thử lại (retry) hoạt động chính xác.
