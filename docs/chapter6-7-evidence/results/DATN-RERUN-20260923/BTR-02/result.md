# KẾT QUẢ KIỂM THỬ: BTR-02

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `BTR-02` — Quản lý nháp và hồ sơ công tác bị trả lại |
| Tiêu chí | `BTR-R01`, `BTR-R02`, `BTR-R03` (Chương 4 hiệu chỉnh 23/09/2026) |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | Mobile APK build từ `a6a1dc6` (mã nguồn `7f90ac7`), HRM BE `9e39ccc2` |
| Tester | `CB-A` (User ID `287`, SHCC `003009`, Phòng Hành chính) |
| Trạng thái kịch bản theo quy tắc kế hoạch | **Pass có giới hạn phạm vi (Pass quản lý nháp và UI theo dõi; Chưa chạy probe chặn xóa API và gửi lại hồ sơ)** |

---

## 1. Kết quả chi tiết theo từng nhánh kịch bản

| Nhánh kiểm thử | Kỳ vọng kế hoạch | Kết quả thực tế | Trạng thái nhánh |
| --- | --- | --- | :---: |
| **Nhánh 1: Quản lý hồ sơ Nháp (`NHAP`)** | Người lập được sửa, lưu và xóa hồ sơ nháp; dọn dẹp sạch các bảng liên quan | Tạo hồ sơ nháp `#1065`, sửa thành công; gọi `DELETE /api/tcns-di-cong-tac/dang-ky/1065` trả về HTTP 200 `{ status: 200, message: "Success" }`. Hồ sơ và dữ liệu phụ thuộc được xóa triệt để | **Pass** |
| **Nhánh 2: Khảo sát giao diện hồ sơ đã gửi duyệt** | Giao diện mobile hiển thị chi tiết tiến trình; không cấp action thu hồi/xóa cho người lập | Trên máy thật, mở hồ sơ `#1063` (bước `LÃNH ĐẠO ĐƠN VỊ`): Giao diện hiển thị chi tiết và sơ đồ duyệt 6 bước (`02_live_btr_detail.png`, `03_live_btr_workflow.png`), không hiển thị nút thu hồi hay xóa | **Pass** |
| **Nhánh 3: Chặn xóa hồ sơ đã gửi qua API (`maQuyTrinh != 'NHAP'`)** | Gọi API xóa hồ sơ đã gửi vào quy trình duyệt, backend từ chối với HTTP 400 | Cơ chế chặn xóa có trong mã nguồn backend (`dang_ky.controller.ts:294`). Tuy nhiên, **đợt rerun chưa ghi nhận một probe thực nghiệm gửi DELETE trên ID hồ sơ đã gửi cụ thể để trích xuất HTTP response thực tế** | **Chưa chạy thực nghiệm (Not Run)** |
| **Nhánh 4: Sửa và gửi lại hồ sơ Bị trả lại (`TRA_LAI` / target `GUI_LAI`)** | Hồ sơ bị trả lại nạp lại form để chỉnh sửa và nộp lại vào quy trình theo target `GUI_LAI` | Mã nguồn hỗ trợ luồng nộp lại; tuy nhiên **đợt rerun chưa chạy trên một fixture hồ sơ công tác bị trả lại cụ thể để ghi nhận trạng thái trước và sau khi gửi lại** | **Chưa chạy thực nghiệm (Not Run)** |

---

## 2. Bằng chứng đính kèm

- `01_live_btr_list.png`: Màn hình danh sách hồ sơ công tác trên Realme 7
- `02_live_btr_detail.png`: Chi tiết hồ sơ đã gửi duyệt `#1063`
- `03_live_btr_workflow.png`: Tiến trình luân chuyển duyệt của hồ sơ đã gửi

---

## 3. Ranh giới khẳng định & Kết luận

- **Phần đã chứng minh:** Quyền quản lý toàn diện trên hồ sơ Nháp (sửa, lưu, xóa triệt để) và tính đúng đắn của giao diện di động trong việc bảo vệ ranh giới hồ sơ đã gửi (không cung cấp action thu hồi/xóa trái quyền).
- **Giới hạn kết luận:** Nhánh probe xóa trực tiếp qua API đối với hồ sơ đã nộp và nhánh nộp lại hồ sơ bị từ chối chưa có bản ghi chạy thực nghiệm trên fixture cụ thể trong đợt này; khi viết Chương 6 chỉ kết luận đạt ở phạm vi quản lý hồ sơ nháp và giao diện theo dõi.
