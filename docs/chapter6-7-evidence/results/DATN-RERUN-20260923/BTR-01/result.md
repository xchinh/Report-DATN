# KẾT QUẢ KIỂM THỬ: BTR-01

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `BTR-01` — Wizard công tác, validation, xung đột và minh chứng |
| Tiêu chí | `BTR-R05` (`FR-BTR-02`, `UC-BT-01`, `UC-BT-02`) |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Thiết bị | Realme RMX2151, Android 12/API 31 |
| Đối tượng kiểm thử | Mobile commit `7f90ac7`, HRM BE `9e39ccc2` |
| Tester | `CB-A` (User ID `287`, SHCC `003009`, Phòng Hành chính) |
| Trạng thái | **Pass** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Gỡ bỏ rào cản Schema JSONB Array:**
   - Mã nguồn mobile mới (`a6a1dc6` / `7f90ac7`) đã chuẩn hóa `quocGia` và `tinhThanh` thành mảng `List<String?>`.
   - Payload gửi lên hoàn toàn tương thích với cột `JSONB` của PostgreSQL, loại bỏ triệt để lỗi HTTP 500 trước đây.
2. **Kiểm tra Validation bắt buộc minh chứng:**
   - Khi gửi hồ sơ đi nước ngoài (`hinhThuc: 'NN'`) mà không đính kèm thư mời (`files: []`), backend từ chối với `status: 400`, `message: "Vui lòng thêm thư mời trước khi gửi duyệt"`. Hồ sơ được giữ nguyên ở trạng thái `NHAP`.
3. **Kiểm tra chống trùng lịch:**
   - Tạo hai chuyến đi có thời gian giao thoa: backend phát hiện chính xác và từ chối tạo với thông báo `"Trùng thời gian công tác"`.
4. **Khảo sát giao diện Mobile:**
   - Màn hình danh sách công tác hiển thị thẻ công tác theo năm lọc `2026` (`01_btr_list_page.png`).
   - Mở dialog khởi tạo chọn thời gian công tác thành công (`02_btr_create_date_dialog.png`).
   - Sau khi dọn dẹp fixture, danh sách trở về trạng thái sạch sẽ (`03_btr_list_cleaned.png`).

---

## 2. Bằng chứng đính kèm

- `01_btr_list_page.png`: Danh sách công tác
- `02_btr_create_date_dialog.png`: Hộp thoại chọn thời gian
- `03_btr_list_cleaned.png`: Danh sách sau dọn dẹp fixture

---

## 3. Kết luận

- Kịch bản đạt trạng thái **Pass** (chuyển đổi từ Blocked sang Pass).
