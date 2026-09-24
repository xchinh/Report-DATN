# KẾT QUẢ KIỂM THỬ: LEV-03

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `LEV-03` — Quản lý nháp, chặn sửa/xóa sau gửi và gửi lại đơn bị trả lại |
| Tiêu chí | `LEV-R01`, `LEV-R02`, `LEV-R03` (Chương 4 hiệu chỉnh 23/09/2026) |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | Mobile APK build từ `a6a1dc6` (mã nguồn `7f90ac7`), HRM BE `9e39ccc2` |
| Tester | `CB-A` (User ID `287`, SHCC `003009`) |
| Trạng thái kịch bản theo quy tắc kế hoạch | **Pass có giới hạn phạm vi (Pass quản lý nháp và chặn xóa; Chưa chạy nhánh thử sửa đơn đã gửi và gửi lại đơn bị trả lại)** |

---

## 1. Kết quả chi tiết theo từng nhánh kịch bản

| Nhánh kiểm thử | Kỳ vọng kế hoạch | Kết quả thực tế | Trạng thái nhánh |
| --- | --- | --- | :---: |
| **Nhánh 1: Quản lý đơn Nháp (`NHAP`)** | Người lập được sửa, lưu và xóa đơn nháp của chính mình; dữ liệu bị xóa triệt để | Tạo đơn nháp `#293` (`isSend: 0`), sửa thành công; gọi `DELETE /api/tcns-nghi-phep/dang-ky/293` trả về HTTP 200 `{ status: 200, message: "Success" }`. Đơn nháp được xóa sạch khỏi CSDL | **Pass** |
| **Nhánh 2: Chặn xóa đơn đã gửi (`CHO_DUYET`)** | Người lập không được phép xóa đơn đã gửi vào quy trình duyệt; backend từ chối với HTTP 400; UI không cấp nút xóa/thu hồi | Tạo đơn đã nộp `#294` (`isSend: 1`), gọi `DELETE /api/tcns-nghi-phep/dang-ky/294` bằng chính người lập `CB-A` -> Backend từ chối `status: 400`, `message: "Trạng thái phiếu không được phép xoá"`. UI mobile chỉ hiển thị theo dõi tiến trình, không có action xóa/thu hồi | **Pass** |
| **Nhánh 3: Thử sửa đơn đã gửi (`CHO_DUYET`)** | Người lập thử gọi API cập nhật dữ liệu trên đơn đã gửi, backend phải từ chối | Giao diện mobile không cung cấp nút sửa cho đơn đã gửi; tuy nhiên **đợt rerun chưa ghi nhận một request probe thực tế kèm log phản hồi cụ thể gửi tới API cập nhật** cho trường hợp này | **Chưa chạy (Not Run)** |
| **Nhánh 4: Sửa và gửi lại đơn Bị trả lại (`TRA_LAI` / target `GUI_LAI`)** | Đơn bị trả lại nạp lại được form để sửa thông tin và gửi lại theo target `GUI_LAI` | Mã nguồn backend và mobile hỗ trợ luồng nộp lại; tuy nhiên **đợt rerun chưa có sẵn fixture đơn thực tế bị cấp duyệt trả lại (`TRA_LAI`) để thực hiện một chu trình sửa–nộp lại hoàn chỉnh có ID và trạng thái trước/sau cụ thể** | **Chưa chạy (Not Run)** |

---

## 2. Bằng chứng đính kèm

- `01_live_leave_detail_submitted.png`: Chi tiết đơn đã gửi `#289` trên thiết bị thật (không có nút chỉnh sửa hay thu hồi)
- `02_live_leave_workflow.png`: Tiến trình phê duyệt đơn đã gửi trên thiết bị thật

---

## 3. Ranh giới khẳng định & Kết luận

- **Phần đã chứng minh:** Xác thực vững chắc ranh giới kiểm soát trạng thái: Người lập toàn quyền thao tác trên bản Nháp (sửa, lưu, xóa) và bị chặn hoàn toàn khi cố tình xóa đơn đã gửi vào quy trình (HTTP 400), phù hợp đặc tả mới của Chương 4.
- **Giới hạn kết luận:** Nhánh probe thử gọi API sửa đơn đã gửi và nhánh thực nghiệm sửa–gửi lại trên fixture đơn bị trả lại thực tế chưa được chạy trong đợt này; khi viết Chương 6 chỉ kết luận đạt ở phạm vi quản lý nháp và chặn xóa đơn đã gửi.
