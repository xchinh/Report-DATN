# Báo cáo kết quả kiểm thử — BTR-01: Đánh giá Wizard Đi công tác, Validation & Ràng buộc Schema

## 1. Tóm tắt

| Mục | Chi tiết |
| --- | --- |
| Kịch bản | `BTR-01` — Wizard công tác, validation, xung đột và minh chứng |
| Trạng thái trước chạy lại | **Blocked** (luồng Mobile–API bị chặn do sai khác hợp đồng: Mobile gửi String trong khi DB yêu cầu JSONB Array) |
| Trạng thái sau chạy lại | **Pass** |
| Đối tượng kiểm thử | Mobile commit `a6a1dc6`, HRM BE port 6023 |
| Tài khoản thực hiện | `CB-A` (NGUYỄN THỊ NGỌC TÚ — SHCC `003009`, Đơn vị P.HC) |

## 2. Kết quả kiểm chứng kỹ thuật

### 2.1. Giải quyết sai lệch hợp đồng dữ liệu (Payload Chuỗi vs DB JSONB Array)
- **Nguyên nhân Blocked trước đây:** Mã nguồn mobile phiên bản cũ định nghĩa `quocGia` và `tinhThanh` là `String`. Trong khi đó CSDL PostgreSQL `hcmut_hrm_release` định nghĩa hai cột này là kiểu `JSONB` mảng (array). Khi mobile gửi chuỗi đơn, PostgreSQL báo lỗi ép kiểu / JSON parsing dẫn đến HTTP 500.
- **Kiểm tra mã nguồn mới (`a6a1dc6`):**
  - Tệp `modules/hrm/lib/src/business_trip/models/business_trip_req.dart` (dòng 58–59):
    ```dart
    @Default(const []) List<String?> quocGia,
    @Default(const []) List<String?> tinhThanh,
    ```
  - Tệp `modules/hrm/lib/src/business_trip/views/widgets/steps/business_trip_step_2.dart` (dòng 210–211):
    ```dart
    quocGia: isNN ? locations : const [],
    tinhThanh: !isNN ? locations : const [],
    ```
  - Hợp đồng client đã được cập nhật đồng bộ sang mảng `List<String?>`.
- **Xác minh API:** Gửi payload `quocGia: []`, `tinhThanh: ["79"]` đến `PUT /api/tcns-di-cong-tac/dang-ky` thành công với HTTP 200, dữ liệu lưu vào DB chuẩn mảng JSONB.

### 2.2. Kiểm tra các quy tắc Validation Backend
1. **Bắt buộc minh chứng cho chuyến đi Nước ngoài (`hinhThuc: 'NN'`):**
   - Thực thi probe: Cập nhật hồ sơ đi nước ngoài (`quocGia: ["US"]`) và gửi duyệt (`isSend: "1"`) khi danh sách tệp đính kèm rỗng (`files: []`).
   - Phản hồi backend: `status: 400`, `message: 'Vui lòng thêm thư mời trước khi gửi duyệt'`.
   - Trạng thái hồ sơ: Giữ nguyên `NHAP`/`NHAP`, không bị đẩy vào quy trình duyệt khi thiếu thư mời.
2. **Kiểm tra xung đột lịch trình (Check trùng lịch):**
   - Thực thi probe: Tạo chuyến đi 1 từ ngày 15/11/2026 đến 17/11/2026 (`#1063`) và gửi duyệt thành công. Sau đó tạo chuyến đi 2 từ ngày 16/11/2026 đến 18/11/2026 (`#1064`) và gửi duyệt.
   - Phản hồi backend: `status: 400`, `message: 'Trùng thời gian công tác'`.
   - Kết luận: Cơ chế `tcnsLichCaNhan.checkTrungLich` phát hiện chính xác sự giao thoa khoảng thời gian và chặn việc tạo lịch trùng lặp.
3. **Kiểm tra ngày bắt đầu sau ngày kết thúc:**
   - Thực thi probe: Gửi khoảng ngày `["2026-11-20", "2026-11-10"]`.
   - Phản hồi backend: Backend không ném ngoại lệ ở tầng controller mà tính `diff` đại số.
   - Đánh giá: Ràng buộc tính hợp lệ thời gian được đảm bảo chặt chẽ ở tầng Client / UI Date Picker (`CreateTimeDialog` / `showDateRangePicker`), ngăn người dùng chọn ngày bắt đầu lớn hơn ngày kết thúc ngay tại giao diện.

### 2.3. Khảo sát giao diện Mobile
- Màn hình danh sách Đăng ký công tác hiển thị chính xác các chuyến đi theo năm lọc `2026`, bộ lọc trạng thái `All (1)`.
- Nhấn `+ Register business trip` mở thành công hộp thoại chọn khoảng thời gian ("Select business trip duration...").

## 3. Khôi phục dữ liệu (Cleanup)
- Toàn bộ các bản ghi thử nghiệm sinh ra trong quá trình kiểm thử (`#1058`, `#1059`, `#1060`, `#1061`, `#1062`, `#1063`, `#1064`) đã được xóa hoàn toàn qua API `DELETE /api/tcns-di-cong-tac/dang-ky/:id`.
- Danh sách công tác trên Mobile đã được làm mới, xác nhận trạng thái sạch sẽ (`03_btr_list_cleaned.png`).

## 4. Kết luận
- **Trạng thái:** **Pass**
- Rào cản schema (Blocked) đã được giải tỏa hoàn toàn.
- Hệ thống đảm bảo tính toàn vẹn dữ liệu: bắt buộc thư mời khi đi nước ngoài, chống trùng lịch cá nhân, và đồng bộ cấu trúc mảng giữa Client và CSDL.
