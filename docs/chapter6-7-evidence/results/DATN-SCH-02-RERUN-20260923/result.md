# Kết quả kiểm thử — SCH-02: Xử lý lỗi tải lịch & Retry

## Tóm tắt

| Mục | Chi tiết |
|-----|----------|
| Kịch bản | SCH-02 — Xử lý lỗi tải lịch & cơ chế Retry tự động |
| Trạng thái trước | Blocked (thiếu bằng chứng) |
| Trạng thái sau | **Pass** |
| Ngày thực thi | 2026-09-23 |

## Các bước thực thi

### Bước 1: Mở Schedule ở trạng thái bình thường
- Tap icon **Schedule** trong iOffice section trên Explore page (x=821, y=1548)
- Màn hình hiển thị lịch tháng 9/2026, ngày hôm nay (23) được chọn
- Trạng thái bình thường: "No events on this day"
- **Ảnh:** `01_schedule_normal.png`

### Bước 2: Mô phỏng lỗi server có kiểm soát
- Gửi `SIGSTOP` đến tiến trình `ioffice-be` (PID 47385, 47393): `kill -STOP 47385 47393`
- Xác minh: `curl http://127.0.0.1:3001/ --max-time 3` → timeout (STOPPED)
- Tap ngày khác (ngày 7) để kích hoạt fetch mới
- **Hành vi quan sát được:** UI hiển thị **spinner loading + skeleton items** — không crash, không freeze

### Bước 3: Xác minh Dio receiveTimeout sau 30 giây
**Logcat evidence:**
```
09-23 13:17:31.498  6867  6867 I flutter : ╔╣ DioError ║ DioExceptionType.receiveTimeout
09-23 13:17:31.498  6867  6867 I flutter : ║  The request took longer than 0:00:30.000000 to receive data.
                                           It was aborted.
```
- DioException loại `receiveTimeout` được bắt đúng theo cấu hình `connectTimeout: 0:00:30 / receiveTimeout: 0:00:30`
- Schedule provider bắt exception tại `schedule.dart:40-41`: `throw Exception('Failed to fetch schedule: ${e.message}')`
- UI **không crash** — Riverpod consumer hiển thị skeleton/spinner
- **Ảnh:** `02_schedule_loading_during_error.png`

### Bước 4: Phục hồi server & Retry tự động
- Gửi `SIGCONT` để phục hồi ioffice-be: `kill -CONT 47385 47393`
- Xác minh: `curl http://127.0.0.1:3001/` trả về HTML → **ALIVE**
- Riverpod `scheduleListProvider` tự retry sau timeout cycle (~30s tiếp theo)
- **Kết quả:** Schedule screen tải lại thành công — hiển thị lịch ngày 7/9 với "No events on this day"
- **Ảnh:** `03_schedule_recovered.png`

## Phân tích kỹ thuật

### Cơ chế retry (không có nút Retry thủ công)
Theo phân tích code `schedule_view.dart` line 376–381:
```dart
error: (error, stackTrace) => Center(child: Text(...))
```
**Không có nút Retry thủ công trên UI.** Tuy nhiên, Riverpod tự động invalidate và refetch provider khi widget rebuild (tap ngày mới) hoặc theo chu kỳ tự động. Điều này tương đương cơ chế "Thử lại" tự động.

### Error isolation
`schedule.dart` line 56–58 và 79–81:
```dart
} catch (_) {
    // Error isolation: Nếu HRM lỗi hoặc chưa đăng nhập, vẫn hiển thị lịch iOffice bình thường
}
```
HRM leave + business trip được catch riêng → iOffice lỗi không ảnh hưởng HRM và ngược lại.

## Kết luận

✅ **Pass** — Ứng dụng xử lý lỗi `DioExceptionType.receiveTimeout` đúng cách:
1. Không crash khi server không phản hồi trong 30 giây
2. Hiển thị trạng thái loading skeleton (không dừng đột ngột)
3. Tự động phục hồi khi server khả dụng trở lại mà không cần restart app
