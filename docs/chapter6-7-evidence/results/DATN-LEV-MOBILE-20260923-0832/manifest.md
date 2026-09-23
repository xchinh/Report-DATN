# RUN MANIFEST — DATN-LEV-MOBILE-20260923-0832

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `LEV-01` (một phần), `LEV-02` |
| Thời điểm | 23/09/2026, khoảng 08:32–08:40 (`Asia/Ho_Chi_Minh`) |
| Hình thức | Thao tác thủ công trên Android thật, đối chiếu API danh sách đơn HRM trước/sau |
| Thiết bị | Realme RMX2151, Android 12/API 31, USB; Wi‑Fi cùng LAN với máy chạy dịch vụ |
| Phiên bản | Mobile `4fe5d9c`, Auth `7e687a6`, HRM backend `87e17bcd` |
| Vai trò | `CB-A`, chuyển từ phiên admin thử nghiệm |
| Dữ liệu | Ngày 06–07/10/2026, địa điểm Hà Nội, lý do “Khác”, ghi chú tổng hợp có mã chạy `DATN-LEV-MOB-20260923` |
| ID nháp | `287` (lần đầu), `288` (tạo lại cùng khoảng ngày) |
| Khôi phục | Cả hai nháp đã hủy trên mobile; API danh sách của `CB-A` trả `0` đơn sau mỗi lần hủy |

Ảnh `step1.png` và `step2.png` không chứa danh tính cán bộ, token hay dữ liệu nhân sự thực. Không lưu payload/log thô vì chúng có thể chứa thông tin định danh. Việc HRM khởi động trong đợt này đã kích hoạt tác vụ đồng bộ `StaffTinhTrang` trên 3836 bản ghi thuộc môi trường thử nghiệm.
