# DATN-BTR-01-RERUN-20260923 — Artifact Manifest

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `BTR-01` — Đánh giá Wizard Đi công tác, validation, ràng buộc schema và minh chứng |
| Hành vi liên quan | `FR-BTR-02-B01` đến `B03`; `UC-BTR-02-B01` đến `B05` |
| Ngày thực thi | 23/09/2026, 14:00 (`Asia/Ho_Chi_Minh`) |
| Tester | `CB-A` (NGUYỄN THỊ NGỌC TÚ — SHCC `003009`, User ID `287`) |
| Thiết bị | Realme RMX2151, Android 12, API 31 |
| Mobile commit | `a6a1dc6` (chứa merge `feat/leaveRequest` & update schema `List<String?> quocGia/tinhThanh`) |
| HRM Backend | `87e17bcd` (port 6023) |
| Trạng thái trước | Blocked (sai lệch hợp đồng payload chuỗi vs DB JSONB array) |
| Trạng thái sau | **Pass** (Đã đồng bộ schema mảng, kiểm chứng validation backend và UI dialog khởi tạo) |
| Khôi phục fixture | Đã dọn dẹp toàn bộ fixture `#1058`, `#1059`, `#1060`, `#1061`, `#1062`, `#1063`, `#1064` (về 0) |

## Danh mục tệp bằng chứng

| Tệp | Mô tả |
| --- | --- |
| `01_btr_list_page.png` | Màn hình danh sách Đăng ký đi công tác trên Mobile — hiển thị thẻ công tác `#1063` của CB-A |
| `02_btr_create_date_dialog.png` | Hộp thoại khởi tạo Wizard đăng ký công tác ("Select business trip duration...") |
| `03_btr_list_cleaned.png` | Màn hình danh sách sau khi hoàn tất dọn dẹp fixture (`#1063` đã xóa sạch) |
| `result.md` | Biên bản phân tích kỹ thuật chi tiết đối chiếu hợp đồng dữ liệu, validation và kết quả thực thi |
