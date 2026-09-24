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
| Trạng thái kịch bản | **Pass có giới hạn phạm vi (Pass validation/xung đột/JSONB; Chưa chạy nhánh nộp hồ sơ qua đủ wizard)** |

---

## 1. Kết quả chi tiết theo từng nhánh kịch bản

| Nhánh kiểm thử | Kỳ vọng kế hoạch | Kết quả thực tế | Trạng thái nhánh |
| --- | --- | --- | :---: |
| **Nhánh 1: Tương thích định dạng Schema JSONB Array** | Payload mảng `quocGia` và `tinhThanh` gửi lên từ client tương thích hoàn toàn với PostgreSQL JSONB, không phát sinh HTTP 500 | Mã nguồn mobile mới (`a6a1dc6` / `7f90ac7`) đã chuẩn hóa thành `List<String?>`, loại bỏ triệt để lỗi casting schema | **Pass** |
| **Nhánh 2: Bắt buộc đính kèm minh chứng chuyến đi nước ngoài** | Đi công tác nước ngoài (`hinhThuc: 'NN'`) bắt buộc có thư mời/minh chứng, thiếu bị từ chối | Gửi hồ sơ nước ngoài không đính kèm tệp -> Backend từ chối với `status: 400`, `message: "Vui lòng thêm thư mời trước khi gửi duyệt"`; hồ sơ giữ nguyên trạng thái `NHAP` | **Pass** |
| **Nhánh 3: Kiểm tra chống xung đột trùng lịch** | Từ chối tạo chuyến đi có thời gian giao thoa với lịch công tác/nghỉ phép đã duyệt | Backend phát hiện chính xác khoảng thời gian giao thoa và chặn tạo mới với thông báo `"Trùng thời gian công tác"` | **Pass** |
| **Nhánh 4: Nộp hồ sơ công tác hợp lệ qua đủ 5 bước wizard** | Đi qua trọn vẹn 5 bước wizard trên mobile (Thông tin -> Lịch trình -> Thành viên -> Kinh phí -> Minh chứng) và gửi nộp thành công | Trên thiết bị thật mới thực hiện mở danh sách và hộp thoại chọn ngày khởi tạo (`01_live_btr_create_dialog.png`); **chưa thực hiện đi hết 5 bước wizard và nộp hồ sơ thành công vào quy trình** | **Chưa chạy (Not Run)** |

---

## 2. Bằng chứng đính kèm

- `01_live_btr_create_dialog.png`: Hộp thoại chọn thời gian khởi tạo chuyến công tác trên Realme 7
- `01_btr_list_page.png`: Danh sách hồ sơ công tác lọc theo năm
- `03_btr_list_cleaned.png`: Danh sách hồ sơ sau khi dọn dẹp fixture

---

## 3. Ranh giới khẳng định & Kết luận

- **Phạm vi đã chứng minh:** Các ràng buộc nghiệp vụ trọng yếu (validation bắt buộc minh chứng nước ngoài, chống trùng lịch) và khả năng tương thích tầng dữ liệu JSONB của module công tác đã được xác thực chính xác.
- **Giới hạn kết luận:** Nhánh nộp hồ sơ hợp lệ đi trọn vẹn qua 5 bước wizard trên ứng dụng di động chưa được thực thi trong đợt chạy này; do đó kịch bản chỉ kết luận Pass trong phạm vi validation, chống trùng lịch và cấu trúc payload.
