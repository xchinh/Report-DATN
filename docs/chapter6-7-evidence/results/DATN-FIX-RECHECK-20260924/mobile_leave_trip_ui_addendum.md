# Bổ sung kết quả kiểm tra giao diện nghỉ phép và công tác

- Nguồn: báo cáo thao tác và đối chiếu CSDL do nhóm cung cấp ngày 24/09/2026.
- Thiết bị: Realme RMX2151, Android 12; môi trường HRM thử nghiệm.
- Phân biệt với `leave_trip_e2e_limitations_recheck.md`: tài liệu trước kiểm tra nhiều nhánh qua API/CSDL; báo cáo này bổ sung những quan sát qua giao diện di động. Chưa có ảnh chụp hoặc log thô riêng của lượt này trong thư mục bằng chứng, nên không coi đây là một lần xác minh độc lập của người tổng hợp.

| Nhánh | Ghi nhận từ lượt thao tác UI mới | Giới hạn |
| --- | --- | --- |
| Nghỉ phép, tạo đơn `#304` | Giao diện cảnh báo trùng thời gian với đơn có sẵn, chặn lý do trống, sau đó tạo đơn hợp lệ; CSDL ghi trạng thái `GUI/TRUONG_DV` và một lịch cá nhân. | Chỉ kiểm tra khoảng ngày và kiểu lý do đã nêu. |
| Nghỉ phép, từ chối `#304` | Lý do toàn khoảng trắng bị chặn; lý do hợp lệ đưa phiếu sang `TU_CHOI`, lịch cá nhân không còn bản ghi; người lập thấy trạng thái và lịch sử từ chối trên mobile. | Không đồng nhất phiếu này với phép thử API trên phiếu `#303` ở biên bản trước. |
| Công tác, danh sách và lịch sử | Mobile hiển thị phiếu `#1063` đã kết thúc và phiếu `#1068` đã gửi lại; lịch sử trên mobile thể hiện chuỗi duyệt của `#1063` và gửi--trả lại--gửi lại của `#1068`. | Xem lịch sử không chứng minh toàn bộ các bước duyệt của `#1063` đã được thao tác trong lượt này. |
| Công tác, kiểm tra trước tạo mới | Giao diện chặn khoảng ngày trùng với `#1068`; khoảng ngày không trùng qua bước chọn thời gian nhưng backend từ chối tạo hồ sơ mới vì còn chuyến `#1077` chưa nộp báo cáo kết quả. | Đây là ràng buộc của backend hiện hữu, không phải bằng chứng mobile có chức năng nộp báo cáo. |
| Công tác, quyền thu hồi | Người lập và lãnh đạo đơn vị không thấy nút Thu hồi trên các phiếu đã xem; tài khoản TC-NS thấy nút trên một phiếu khác. | Khác phiếu và khác trạng thái; riêng việc hiện/ẩn nút không chứng minh ma trận quyền tổng quát. Phép thử API trên phiếu `#1076` là bằng chứng bổ trợ cho các vai trò đã thử. |
| Công tác, từ chối/thu hồi và phiếu nước ngoài | Báo cáo đối chiếu CSDL các phiếu `#1075`, `#1076`, `#1077`; phần này kế thừa biên bản API/CSDL trước. | Không được gọi cả ba nhánh là kiểm thử đầu--cuối qua mobile trong lượt mới. |

Không sử dụng nhận định “100% kết luận đã có bằng chứng UI”: vẫn còn nhánh khách tự điểm danh, tạo đề xuất hồ sơ kèm tệp trong WebView, duyệt đồng thời và các biến thể vai trò/phiếu chưa được xác minh đầy đủ.
