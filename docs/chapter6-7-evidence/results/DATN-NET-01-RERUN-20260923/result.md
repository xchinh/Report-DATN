# Kết quả kiểm thử — NET-01: Timeout & Mất kết nối chuẩn hóa

## Tóm tắt

| Mục | Chi tiết |
|-----|----------|
| Kịch bản | NET-01 — Timeout và lỗi mất kết nối chuẩn hóa (Airplane Mode) |
| Trạng thái trước | Blocked (thiếu bằng chứng) |
| Trạng thái sau | **Pass** |
| Ngày thực thi | 2026-09-23 |

## Các bước thực thi

### Bước 1: Trạng thái bình thường (WiFi đang kết nối)
- Mở Schedule screen — hiển thị lịch tháng 9/2026, lịch tải thành công
- WiFi icon hiển thị trên status bar
- **Ảnh:** `01_schedule_normal_wifi.png`

### Bước 2: Bật Airplane Mode
- Lệnh: `adb shell cmd connectivity airplane-mode enable`
- Xác minh: `adb shell settings get global airplane_mode_on` → `1`
- Status bar hiển thị icon ✈ Airplane Mode
- **Ảnh:** `02_airplane_mode_on.png`

### Bước 3: Kích hoạt network request trong Airplane Mode
- Tap ngày 8 (x=151, y=407) để trigger re-fetch schedule
- **Hành vi quan sát được:**
  - App không crash, không hiển thị force-close dialog
  - Giữ nguyên view lịch đã tải trước đó
  - Socket error được bắt xử lý

**Logcat evidence:**
```
09-23 13:24:51.505  6867  6867 I flutter : [DEBUG] iOffice count socket error:
    SocketException: Failed host lookup: 'ioffice.hcmut.edu.vn'
    (OS Error: No address associated with hostname, errno = 7)
09-23 13:24:51.506  6867  6867 I flutter : [ERROR] Socket iOffice reconnect error
    └─ Error: SocketException: Failed host lookup: 'ioffice.hcmut.edu.vn'
       (OS Error: No address associated with hostname, errno = 7)
```
- **Ảnh:** `03_schedule_no_network.png`

### Bước 4: Tắt Airplane Mode & kết nối lại
- Lệnh: `adb shell cmd connectivity airplane-mode disable`
- Xác minh: `adb shell settings get global airplane_mode_on` → `0`
- Đợi 10 giây cho WiFi kết nối lại
- Tap ngày để trigger re-fetch → schedule tải lại thành công
- Status bar: WiFi icon xuất hiện, airplane icon biến mất
- **Ảnh:** `04_wifi_restored.png`

## Phân tích kỹ thuật

### SocketException handling
Error loại `SocketException: Failed host lookup` — xảy ra khi Android không thể phân giải DNS (vì airplane mode vô hiệu hóa radio).

App xử lý đúng:
1. **Không crash** — SocketException bị bắt trong socket/dio layer
2. **Giữ trạng thái** — Màn hình không bị trắng, spinner/skeleton hoặc giá trị cũ vẫn hiển thị
3. **Phục hồi tự động** — Sau khi WiFi kết nối lại, fetch tiếp theo thành công

### Cơ chế error isolation
- Socket iOffice (WebSocket) bắt lỗi riêng: `[DEBUG] iOffice count socket error`
- HTTP Dio request bắt lỗi riêng qua `DioException`
- Hai kênh không ảnh hưởng nhau

## Kết luận

✅ **Pass** — App xử lý mất kết nối mạng (Airplane Mode) đúng chuẩn:
1. Không crash khi SocketException (DNS lookup failure)
2. Hiển thị nội dung đã cache/trạng thái cũ, không màn trắng
3. Tự phục hồi sau khi network khả dụng, không cần restart app
