# RUN MANIFEST — DATN-PRO-02-20260922-2036

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `PRO-02` — Xử lý từng nội dung của đề xuất hồ sơ |
| Hành vi | `FR-PRO-03-B02`, `UC-PRO-03-B02`, `UC-PRO-03-B03` |
| Thời gian | 22/09/2026, 20:36 (`Asia/Ho_Chi_Minh`) |
| Hình thức | Kiểm thử API với hai request và ba detail cô lập |
| Auth | `7e687a6005ceb6264f3467072081c784a6f9c7bc` |
| HRM | `87e17bcd2bb8b3058e279e5ecb49d8bcedd5f20d` |
| Khôi phục | Request/detail/file/audit cục bộ còn `0`; giá trị hồ sơ không đổi |

Fixture chỉ ghi lại đúng giá trị email hiện có khi kiểm tra nhánh duyệt, nên hồ sơ không thay đổi về nội dung. Controller phát audit event bình thường qua Kafka; sự kiện mang marker của lần chạy có thể còn trong hệ thống audit thử nghiệm. Token, SHCC, email và payload hồ sơ không được lưu trong artifact.
