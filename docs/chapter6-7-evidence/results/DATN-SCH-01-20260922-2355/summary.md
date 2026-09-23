# TỔNG HỢP BẰNG CHỨNG SCH-01

| Hành vi | Kết quả |
| --- | --- |
| Người ngoài danh sách mời điểm danh | API trả `200/success`, tạo bản ghi điểm danh không liên kết bản ghi mời |
| Người trong danh sách mời điểm danh | API trả `200/success`, tạo bản ghi điểm danh liên kết đúng bản ghi mời |
| Khôi phục fixture | Không còn cuộc họp hoặc điểm danh thử nghiệm |

`SCH-01`: **Fail**. Backend cho phép người có quyền đọc lịch nhưng không thuộc danh sách mời điểm danh vào cuộc họp. Kết quả chỉ đánh giá ràng buộc danh sách mời ở API, không suy rộng sang toàn bộ chức năng lịch.
