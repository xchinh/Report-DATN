# Đợt kiểm tra bổ sung DATN-FIX-RECHECK-20260924

Đây là **đợt kiểm tra riêng** sau khi sửa mã, không thay thế biên bản `DATN-RERUN-20260923` và không được cộng vào thống kê 22 kịch bản lịch sử. Thời gian quan sát trên Android: khoảng 02:19–02:24 ngày 24/09/2026 (UTC+7).

| Thành phần | Mốc kiểm tra |
| --- | --- |
| Mobile | `feat/leaveRequest`, nền `7f90ac7` **kèm thay đổi chưa commit** ở giao diện lỗi nghỉ phép/lịch và widget test |
| APK thực thi | Bản **debug** được cài bằng `make run-dev`, SHA-256 `fa77adf1c7ec56671e5c59c9c075b652515425c54657b023fb5346743996ab81`; không phải APK release `a6a1dc6` của đợt cũ |
| HRM Backend | `chinh-dev`, nền `9e39ccc` **kèm thay đổi chưa commit** ở kiểm tra lý do từ chối |
| iOffice Backend | `main`, nền `4bfdb23` **kèm thay đổi chưa commit** ở quyền tải tệp và điểm danh |
| Thiết bị | Realme RMX2151, Android 12, kết nối USB; Wi-Fi được ngắt/phục hồi có kiểm soát |
| Dữ liệu | Chỉ đọc màn hình/tệp đã được tài khoản hiện tại truy cập; không tạo hoặc duyệt hồ sơ trong đợt này |

Build release qua `make build-android-dev` **không thành công** vì thiếu `apps/myhcmut/android/upload-keystore.jks`. Vì vậy, không dùng đợt này để xác nhận bản release.

Ảnh lưu trong `screenshots/` chỉ gồm màn lỗi và lịch đã phục hồi, đã rà soát không chứa tên, mã nhân sự, email, token hoặc ticket. Ảnh màn danh sách nghỉ phép sau phục hồi và màn tệp văn bản có dữ liệu nhận diện được giữ ngoài báo cáo, không commit. Không chép log HTTP chứa Authorization/cookie vào thư mục này.

| Ảnh | SHA-256 |
| --- | --- |
| `screenshots/leave_offline_error.png` | `4460c918157df6c62d5b6ed6a151c24605951555bc78073d67f18765714ff0c0` |
| `screenshots/schedule_offline_error.png` | `11c99fe4e6d3c64e660325b8e57f1143e7834e8fa319b84a8e9a196b7a537208` |
| `screenshots/schedule_recovered.png` | `63607497765d343c84fd03f5c0bdac601209ae9848a75fa3404e3b0dbec30329` |
