# KẾT QUẢ KIỂM THỬ: LEV-04

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `LEV-04` — Từ chối đơn bắt buộc có lý do |
| Tiêu chí | `UC-LEV-03-B05` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | HRM BE port 6023 |
| Tester | `LD-DV-A` |
| Trạng thái | **Fail (Bảo lưu phát hiện kỹ thuật)** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Từ chối với lý do khoảng trắng:**
   - Gửi yêu cầu từ chối đơn với chuỗi lý do chỉ chứa ký tự khoảng trắng (`lyDo: "   "`).
   - Backend chỉ kiểm tra sự tồn tại của trường dữ liệu mà không thực hiện hàm chuẩn hóa/loại bỏ khoảng trắng (`trim()`).
   - Do đó, yêu cầu từ chối được chấp nhận và đơn chuyển sang trạng thái `TU_CHOI` dù không có lý do thực chất.
2. **Từ chối với lý do hợp lệ:**
   - Khi có lý do hợp lệ, đơn chuyển sang `TU_CHOI` và ghi nhận lịch sử xử lý.

---

## 2. Kết luận

- Kịch bản nhận kết quả **Fail (Bảo lưu phát hiện kỹ thuật)** do thiếu validation `trim()` ở tầng Backend.
- Phát hiện này được phản ánh trung thực vào báo cáo như một đóng góp kỹ thuật về bảo toàn chất lượng nghiệp vụ.
