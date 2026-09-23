# TỔNG HỢP BẰNG CHỨNG LEV-05

| Chỉ số | Trước | Sau |
| --- | ---: | ---: |
| Tổng quỹ phép thử nghiệm | 1 | 1 |
| Số ngày đã nghỉ | 0 | 2 |
| Số dư suy ra | 1 | -1 |

Hai request duyệt cuối đồng thời đều trả mã ứng dụng `200` và cả hai đơn đều chuyển đến `KET_THUC`.

`LEV-05`: **Fail**. Phiên bản backend được báo cáo không giữ bất biến “số ngày đã nghỉ không vượt tổng quỹ” tại bước duyệt cuối. Kết quả chỉ áp dụng cho cơ chế duyệt cuối và số dư; không suy rộng thành đánh giá toàn bộ quy trình nghỉ phép. Toàn bộ fixture đã được khôi phục.
