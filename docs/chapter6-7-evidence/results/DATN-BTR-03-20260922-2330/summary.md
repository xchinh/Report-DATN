# TỔNG HỢP BẰNG CHỨNG BTR-03

| Hành vi | Kết quả |
| --- | --- |
| Tài khoản ngoài quyền duyệt | API trả `401`, hồ sơ không đổi trạng thái |
| Lãnh đạo đơn vị duyệt hồ sơ trong nước/nước ngoài | Cả hai nhánh trả `200`, chuyển `TRUONG_DV` → `CV_TCNS` |
| Luân chuyển các cấp tiếp theo | `Blocked` tại `CV_TCNS`: các tài khoản bí danh đã chuẩn bị không đồng thời thỏa danh sách phân công và quyền endpoint |
| Từ chối với lý do trắng | API trả `200` và chuyển hồ sơ sang `TU_CHOI` |
| Từ chối với lý do hợp lệ | API trả `200`, chuyển `TU_CHOI` và lưu ghi chú |

`BTR-03`: **Fail** đối với yêu cầu bắt buộc lý do từ chối; **Pass phần backend** đối với chặn vượt quyền và bước duyệt cấp đơn vị; **Blocked** đối với việc xác minh toàn bộ luồng đa cấp. Chưa chạy giao diện mobile.
