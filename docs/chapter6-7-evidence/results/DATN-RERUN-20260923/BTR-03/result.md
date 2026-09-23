# KẾT QUẢ KIỂM THỬ: BTR-03

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `BTR-03` — Phê duyệt, trả lại, từ chối và luân chuyển đa cấp |
| Tiêu chí | `BTR-R06` (`FR-BTR-04`/`UC-BT-04`), `BTR-R04` (`FR-BTR-05`/`UC-BT-05`) |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | HRM BE port 6023 |
| Tester | `LD-DV-A`, `TCCB-A`, `BGH-A` |
| Trạng thái | **Fail (Bảo lưu phát hiện kỹ thuật)** đối với ràng buộc lý do từ chối; **Pass** đối với phân tách thẩm quyền thu hồi TCNS/BGH |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Từ chối thiếu lý do / khoảng trắng:**
   - Gửi yêu cầu từ chối hồ sơ công tác với `lyDo: "   "`.
   - Backend chấp nhận mà không thực hiện kiểm tra `trim()`, chuyển hồ sơ sang trạng thái từ chối.
2. **Luân chuyển theo tính chất chuyến đi:**
   - Hồ sơ trong nước luân chuyển qua Lãnh đạo đơn vị và Phòng TCCB.
   - Hồ sơ nước ngoài hoặc của lãnh đạo bổ sung cấp phê duyệt Ban Giám hiệu.
3. **Quyền thu hồi theo thẩm quyền TCNS/BGH (`FR-BTR-05`):**
   - Người không có quyền gọi thu hồi -> Bị backend từ chối.
   - Người có thẩm quyền (TCNS / BGH) thực hiện thu hồi qua quy trình riêng -> Hệ thống tiếp nhận xử lý và giải phóng lịch cá nhân liên quan.

---

## 2. Kết luận

- Kịch bản giữ kết quả **Fail (Bảo lưu phát hiện kỹ thuật)** đối với nhánh từ chối khoảng trắng.
- Tách bạch rõ quyền thu hồi của cấp quản trị TCNS/BGH so với quyền của người tạo hồ sơ, khớp đúng thiết kế Chương 4.
