# KẾT QUẢ KIỂM THỬ: SCH-01

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `SCH-01` — Người ngoài danh sách mời không được điểm danh |
| Tiêu chí | `UC-SCH-01-B05` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | iOffice BE port 3001 (Commit `4bfdb23`) |
| Tester | `IOF-OUT` vs `IOF-IN` |
| Trạng thái | **Fail (Bảo lưu phát hiện kỹ thuật)** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Thực hiện điểm danh với người ngoài danh sách mời (`IOF-OUT`):**
   - Chuẩn bị fixture cuộc họp `MEETING-OUT` trong khung giờ điểm danh hợp lệ.
   - Tài khoản `IOF-OUT` (cán bộ có phiên đăng nhập hợp lệ nhưng hoàn toàn không nằm trong danh sách khách mời/thành viên được triệu tập của cuộc họp) gửi request điểm danh:
     `POST /api/schedule/general-item/:id/checkin`
   - Phân tích mã nguồn backend tại `modules/md-schedule/schedule-general/controller/schedule-meeting-checkin.js`:
     ```javascript
     const assignees = await getUserAssignees(app, itemId, user);
     const slots = assignees.length > 0 ? assignees.map(a => ({ id: a.id })) : [{ id: null }];
     ```
   - Khi cán bộ không thuộc danh sách phân công (`assignees.length === 0`), backend tự động gán slot rỗng `[{ id: null }]` và thực hiện tạo bản ghi tham dự (self-checkin / tự điểm danh ngoài danh sách):
     ```javascript
     const created = await app.model.scheduleMeetingAttendance.bulkCreate(...)
     ```
   - Kết quả phản hồi: Backend trả về HTTP 200 `{ checkin: display }` và ghi nhận bản ghi điểm danh thành công thay vì từ chối với lỗi 403 Forbidden.

2. **Khôi phục dữ liệu:**
   - Sử dụng endpoint quản trị để rollback bản ghi điểm danh thử nghiệm:
     `POST /api/schedule/general-item/:id/checkin/rollback`
   - Bản ghi attendance của `IOF-OUT` được dọn dẹp hoàn toàn khỏi cơ sở dữ liệu.

---

## 2. Kết luận

- Kịch bản nhận kết quả **Fail (Bảo lưu phát hiện kỹ thuật)**.
- **Nguyên nhân kỹ thuật:** Endpoint điểm danh của `ioffice-be` được thiết kế theo hướng mở, hỗ trợ tự điểm danh (self-checkin) cho bất kỳ cán bộ nào tham dự cuộc họp qua mã QR/link, dẫn tới không thực thi ràng buộc chặn người ngoài danh sách mời theo tiêu chí kiểm thử `UC-SCH-01-B05`.
- Phát hiện này được ghi nhận trung thực trong Chương 6–7 để làm cơ sở đề xuất hoàn thiện cơ chế cấu hình kiểm soát điểm danh (cho phép/không cho phép khách ngoài danh sách).
