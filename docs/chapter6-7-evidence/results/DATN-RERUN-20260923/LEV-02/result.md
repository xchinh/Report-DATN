# KẾT QUẢ KIỂM THỬ: LEV-02

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `LEV-02` — Hủy quy trình và dọn dữ liệu nháp |
| Tiêu chí | `FR-LEV-03-B03`, `UC-LEV-02-B04` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Thiết bị | Realme RMX2151, Android 12/API 31 |
| Đối tượng kiểm thử | Mobile commit `7f90ac7`, HRM BE `9e39ccc2` |
| Tester | `CB-A` (User ID `287`, SHCC `003009`, Phòng Hành chính) |
| Trạng thái kịch bản | **Pass có giới hạn phạm vi (Pass nhánh hủy trên UI Mobile; Bằng chứng hạn chế về đối chiếu CSDL trước–sau)** |

---

## 1. Kết quả chi tiết theo từng nhánh kịch bản

| Nhánh kiểm thử | Kỳ vọng kế hoạch | Kết quả thực tế | Trạng thái nhánh |
| --- | --- | --- | :---: |
| **Nhánh 1: Thao tác hủy và hộp thoại xác nhận trên UI** | Chọn thoát/hủy giữa wizard; hiển thị hộp thoại xác nhận; khi xác nhận thì đóng form và trở về màn hình trước | Trên máy thật Realme, bấm nút đóng wizard -> Modal xác nhận hủy hiển thị (`01_live_leave_wizard_modal.png`); xác nhận đóng -> Giao diện đóng an toàn, trở về danh sách (`02_live_leave_modal_dismissed.png`) | **Pass** |
| **Nhánh 2: Đối chiếu dọn dẹp bản ghi nháp và lịch cá nhân** | Xóa sạch bản ghi nháp và sự kiện giữ chỗ trong CSDL; không để lại dữ liệu rác | Dữ liệu lịch sử 22/09 (`results/DATN-LEV-01-02-20260922-2130/`) chứng minh backend xóa sạch bản ghi và giải phóng lịch; **tuy nhiên biên bản chạy lại ngày 23/09 chưa lưu mã Draft ID cụ thể và bảng đối chiếu CSDL trước–sau tương ứng** | **Bằng chứng hạn chế** |
| **Nhánh 3: Tạo lại đơn cùng khoảng ngày** | Cho phép tạo lại đơn mới cùng khoảng ngày vừa hủy mà không bị chặn bởi dữ liệu mồ côi | Hệ thống cho phép khởi tạo lại đơn mới cùng khoảng ngày trên thiết bị | **Pass** |

---

## 2. Bằng chứng đính kèm

- `01_live_leave_wizard_modal.png`: Hộp thoại xác nhận hủy thao tác tạo đơn trên điện thoại thật
- `02_live_leave_modal_dismissed.png`: Giao diện sau khi xác nhận hủy, form đóng hoàn toàn

---

## 3. Ranh giới khẳng định & Kết luận

- **Phạm vi đã chứng minh:** Luồng tương tác hủy tạo đơn và cơ chế xác nhận thoát trên giao diện di động hoạt động đúng thiết kế, bảo vệ người dùng không bị thoát nhầm và không làm ứng dụng rơi vào trạng thái lỗi.
- **Giới hạn kết luận:** Do đợt chạy này thiếu metadata định danh Draft ID và log đối chiếu trước–sau trực tiếp từ CSDL trong cùng phiên chạy, kết luận Pass được thu hẹp trong phạm vi thao tác hủy trên giao diện client; cần bổ sung bảng đối chiếu dữ liệu backend trước khi nghiệm thu tuyệt đối.
