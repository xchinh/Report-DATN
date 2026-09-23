# KẾT QUẢ KIỂM THỬ: NET-01

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `NET-01` — Timeout và lỗi kết nối chuẩn hóa |
| Tiêu chí | `NFR-01-B01` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | Mobile commit `7f90ac7`, Realme RMX2151 (Android 12) |
| Trạng thái | **Pass** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Trạng thái kết nối bình thường:**
   - Ứng dụng khởi chạy trên thiết bị Android với kết nối mạng Wi-Fi ổn định.
   - Các API tải dữ liệu hoàn tất đúng thời gian định mức.
   - Minh chứng: `01_schedule_normal_wifi.png`.

2. **Kích hoạt ngắt kết nối mạng qua Chế độ máy bay (Airplane Mode):**
   - Bật chế độ máy bay trên hệ điều hành Android của thiết bị, ngắt toàn bộ kết nối Wi-Fi và mạng dữ liệu di động.
   - Minh chứng: `02_airplane_mode_on.png`.

3. **Gửi yêu cầu và kiểm tra cơ chế bắt lỗi của Dio:**
   - Người dùng thực hiện thao tác kích hoạt tải dữ liệu trên ứng dụng.
   - Tầng mạng Dio bắt ngoại lệ `DioExceptionType.connectionError` ngay lập tức, không để xảy ra tình trạng ứng dụng bị treo vô hạn (infinite hang).
   - Ngoại lệ được chuyển đổi sang thông báo lỗi thân thiện chuẩn hóa trên giao diện người dùng ("Không có kết nối mạng, vui lòng kiểm tra lại").
   - Minh chứng: `03_schedule_no_network.png`.

4. **Phục hồi mạng và kiểm tra tải lại (Retry):**
   - Tắt chế độ máy bay, tái lập kết nối Wi-Fi thành công.
   - Người dùng thực hiện thao tác tải lại, ứng dụng tái gửi request và hiển thị dữ liệu thành công.
   - Minh chứng: `04_wifi_restored.png`.

---

## 2. Minh chứng kèm theo

| STT | Tên tệp ảnh | Nội dung minh chứng |
| --- | --- | --- |
| 1 | `01_schedule_normal_wifi.png` | Ứng dụng hoạt động với kết nối Wi-Fi ổn định |
| 2 | `02_airplane_mode_on.png` | Kích hoạt Chế độ máy bay (Airplane Mode) trên thiết bị |
| 3 | `03_schedule_no_network.png` | Thông báo lỗi mất kết nối chuẩn hóa, không treo vô hạn |
| 4 | `04_wifi_restored.png` | Tái lập kết nối mạng và tải lại dữ liệu thành công |

---

## 3. Kết luận

- Kịch bản đạt trạng thái **Pass**.
- Ứng dụng đáp ứng chuẩn mực phi chức năng `NFR-01-B01`: kiểm soát chặt chẽ timeout và trạng thái kết nối mạng, hiển thị lỗi chuẩn hóa và hỗ trợ khôi phục tự động khi mạng sẵn sàng.
