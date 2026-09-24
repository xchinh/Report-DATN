# KẾT QUẢ KIỂM THỬ: NET-01

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `NET-01` — Timeout và lỗi kết nối chuẩn hóa |
| Tiêu chí | `NFR-01-B01` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | Mobile APK build từ `a6a1dc6` (mã nguồn `7f90ac7`), Realme RMX2151 (Android 12) |
| Trạng thái kịch bản theo quy tắc kế hoạch | **Fail (Pass tầng mạng không crash; Fail tầng giao diện để lộ ngoại lệ kỹ thuật thô)** |

---

## 1. Kết quả chi tiết theo từng nhánh kịch bản

| Nhánh kiểm thử | Kỳ vọng kế hoạch | Kết quả thực tế | Trạng thái nhánh |
| --- | --- | --- | :---: |
| **Nhánh 1: Bắt lỗi mất kết nối tầng mạng (Network Interceptor)** | Dio Interceptor chặn ngắt kết nối mạng an toàn, ứng dụng không crash hoặc treo vô hạn | Bật Airplane Mode: Tầng mạng bắt ngoại lệ kết nối an toàn, ứng dụng không bị crash | **Pass** |
| **Nhánh 2: Thông báo lỗi thân thiện chuẩn hóa trên giao diện** | Thay vì chuỗi kỹ thuật, UI phải hiển thị thông báo tiếng Việt chuẩn hóa, rõ nghĩa cho người dùng cuối | **Không đạt:** Màn hình thực tế (`screen_net_offline_timeout.png` / `02_live_airplane_mode_error.png`) hiển thị nguyên văn chuỗi ngoại lệ tiếng Anh thô: `Error Exception: Failed to fetch all leave The connection errored: Connection failed...`. Tầng UI thiếu bộ lọc `ErrorHandler` chuyển đổi mã lỗi | **Fail** |
| **Nhánh 3: Đo lường định lượng cấu hình Timeout** | Đo lường và trích xuất log độ trễ thực tế của `connectTimeout` và `receiveTimeout` | Chưa thiết lập kịch bản đo kiểm định lượng thời gian trễ timeout thực tế với log đếm giây tương ứng | **Chưa chạy (Not Run)** |
| **Nhánh 4: Tự động khôi phục dữ liệu sau khi có mạng lại** | Khôi phục kết nối, người dùng kéo làm mới và tải lại dữ liệu thành công | Tắt Airplane Mode, kéo làm mới: Ứng dụng tái gửi request và tải lại trọn vẹn dữ liệu (`screen_net_loaded.png` / `04_live_network_recovered.png`) | **Pass** |

---

## 2. Minh chứng kèm theo

| STT | Tên tệp ảnh | Nội dung minh chứng |
| --- | --- | --- |
| 1 | `01_schedule_normal_wifi.png` / `screen_final_home.png` | Ứng dụng hoạt động với kết nối Wi-Fi ổn định |
| 2 | `02_airplane_mode_on.png` / `screen_airplane_enabled.png` | Kích hoạt Chế độ máy bay (Airplane Mode) trên thiết bị thật |
| 3 | `screen_net_offline_timeout.png` / `02_live_airplane_mode_error.png` | **Minh chứng Fail:** Chuỗi ngoại lệ kỹ thuật tiếng Anh thô hiển thị trực tiếp trên UI |
| 4 | `screen_net_loaded.png` / `04_live_network_recovered.png` | Tái lập kết nối mạng và tải lại dữ liệu thành công qua pull-to-refresh |

---

## 3. Ranh giới khẳng định & Kết luận

- **Phần đạt:** Tầng mạng xử lý ngắt kết nối an toàn, không làm crash ứng dụng, khôi phục dữ liệu hoàn toàn sau khi tái lập mạng.
- **Phần không đạt (Fail):** Giao diện người dùng vi phạm yêu cầu thông báo thân thiện chuẩn hóa theo `NFR-01-B01` do để lộ chuỗi ngoại lệ kỹ thuật nội bộ của thư viện kết nối; thiếu log định lượng timeout.
- **Kết luận theo Mục 7 Kế hoạch:** Do có nhánh nghiệp vụ bắt buộc không đạt, kịch bản được phân loại là **Fail** để chuyển tiếp thành hạng mục cần khắc phục trong Chương 7.
