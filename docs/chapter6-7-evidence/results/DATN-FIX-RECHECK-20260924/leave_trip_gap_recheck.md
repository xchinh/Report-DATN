# Kiểm tra bổ sung nhánh nghỉ phép và công tác trên Android

Ngày 24/09/2026 (UTC+7), điện thoại Realme RMX2151 chạy APK thử nghiệm, kết nối Auth/HRM staging. Dùng tài khoản quản trị chuyển phiên sang người lập `CB-A` và người duyệt cùng đơn vị `LD-DV-A`; không lưu mật khẩu hay token trong biên bản. Các phiếu dưới đây là dữ liệu thử nghiệm. Kết quả được đối chiếu bằng giao diện Android, phản hồi API cho các probe chỉ đọc hoặc bị chặn, và truy vấn CSDL chỉ đọc sau thao tác. Ảnh màn hình thô trong `/tmp` có dữ liệu định danh, không đưa trực tiếp vào báo cáo.

| Hành vi | Thực hiện và đối chiếu | Kết quả |
| --- | --- | --- |
| Nghỉ phép: chặn sửa đơn đã gửi (`LEV-R03`) | `CB-A` gọi `PUT /api/upload/tcns-nghi-phep/dang-ky` trên phiếu thử `#294` ở `TRUONG_DV/GUI`, giữ nguyên nội dung để tránh tác dụng ngoài. HRM trả wrapper `status=400`, thông báo “Trạng thái phiếu đăng ký không phù hợp”; bản ghi trước/sau không đổi. Nhánh chặn xóa đã có ở biên bản `LEV-03` ngày 23/09. | Pass cho thao tác sửa/xóa của người lập trên trạng thái đã gửi đã thử; không suy rộng sang mọi trạng thái. |
| Nghỉ phép: trả lại, sửa và gửi lại (`LEV-R02`) | `CB-A` lập/gửi phiếu `#299` qua biểu mẫu ba bước trên Android; HRM ở `TRUONG_DV/GUI`, năm 2026. `LD-DV-A` mở danh sách chờ duyệt và chọn **Trả lại** kèm ghi chú; HRM chuyển `HT_DV/TRA_LAI`. `CB-A` mở phiếu **Trả lại**, sửa ghi chú bằng biểu mẫu và chọn **Sửa & Gửi lại**; HRM lưu nội dung đã sửa và chuyển `TRUONG_DV/GUI_LAI`. Lịch sử lần lượt `1648` (`GUI`), `1649` (`TRA_LAI`), `1650` (`GUI_LAI`). | Pass cho chuỗi UI → HRM → trạng thái/lịch sử của phiếu này. Không kiểm chứng từ chối hay duyệt đồng thời. |
| Công tác: chặn xóa phiếu đã xử lý (`BTR-R03`) | `CB-A` gọi `DELETE /api/tcns-di-cong-tac/dang-ky/1063` trên phiếu thử đã kết thúc. HRM trả wrapper `status=400`, thông báo “Trạng thái phiếu không được phép xoá”; bản ghi trước/sau không đổi. | Pass cho nhánh xóa ở trạng thái đã kết thúc đã thử; không khẳng định mọi trạng thái chờ duyệt. |
| Công tác: năm bước, trả lại, sửa và gửi lại (`BTR-R05`, `BTR-R02`) | `CB-A` lập phiếu trong nước `#1068` trên Android, nhập đủ năm bước, gửi; HRM ở `TRUONG_DV/GUI`, năm 2026. `LD-DV-A` nhìn thấy phiếu trong danh sách chờ duyệt, chọn **Trả lại** kèm ghi chú; HRM chuyển `HT_DV/TRA_LAI`. `CB-A` mở lại phiếu, sửa nội dung công tác, đi qua biểu mẫu và chọn **Lưu & Gửi**; HRM lưu chuỗi nội dung có hậu tố `R2` và chuyển `TRUONG_DV/GUI_LAI`. Lịch sử `1651` (`GUI`), `1652` (`TRA_LAI`), `1653` (`GUI_LAI`). | Pass cho luồng năm bước và trả lại–gửi lại của phiếu trong nước này. Chưa thử nhánh nước ngoài, mọi cấu hình đoàn/kinh phí hoặc đính kèm thực. |

Hai phiếu mới `#299` và `#1068` hiện ở `GUI_LAI` trên CSDL thử nghiệm; không sửa SQL để hoàn nguyên lịch sử. Nếu cần chạy lại, tạo fixture riêng để không thay đổi bằng chứng trên. Những kết quả ở đây bổ sung cho biên bản ngày 23/09, không biến toàn bộ kịch bản nhiều nhánh thành Pass nếu các nhánh khác chưa thực hiện hoặc còn lỗi.

“Giải trình” trên mobile là đường dành cho **đăng ký nghỉ phép trễ hạn**: chọn ô Giải trình hiện hiển thị màn “Tính năng đang được phát triển”; HRM Backend có phân hệ giải trình riêng. Do đó không ghi nhận luồng giải trình hoàn chỉnh trên mobile. Bài kiểm thử Flutter về tính toán ngày/quy tắc trễ và model nghỉ phép (`28/28` đạt) là kiểm thử thành phần, không phải kiểm thử đầu--cuối của phiếu giải trình.

---

**Cập nhật kiểm thử đầu--cuối toàn diện cho các giới hạn (24/09/2026):**
Đã hoàn thành đợt kiểm thử xác minh toàn bộ các nhánh giới hạn còn lại trên các fixture độc lập mới:
- Phiếu nghỉ phép `#303`: Xác nhận nhánh từ chối bắt buộc lý do (`LEV-04`), trạng thái `TU_CHOI/HT_DV`, giải phóng lịch cá nhân và ghi lịch sử `#1669`.
- Phiếu công tác `#1075`: Xác nhận nhánh từ chối bắt buộc lý do (`BTR-03`), trạng thái `TU_CHOI/HT_DV`, giải phóng lịch cá nhân và ghi lịch sử `#1671`.
- Phiếu công tác `#1076`: Xác nhận thẩm quyền thu hồi (`FR-BTR-05`/`UC-BT-05`), người lập và đơn vị 93 bị chặn, chỉ Phòng TC-NS (đơn vị 94) được thu hồi, giải phóng lịch và quá trình công tác.
- Phiếu công tác nước ngoài `#1077`: Xác nhận ràng buộc bắt buộc thư mời đính kèm, đường duyệt 5 cấp qua BGH và tạo bản ghi quá trình công tác `#792`.
- Đối chiếu cơ chế duyệt đồng thời và nguyên nhân số dư âm (`LEV-05`), cùng nguyên nhân gốc của các trường "Chưa cập nhật" trên màn hình chi tiết.
Chi tiết xem tại [Biên bản kiểm thử đầu-cuối toàn bộ các giới hạn quy trình Nghỉ phép và Công tác](leave_trip_e2e_limitations_recheck.md).
