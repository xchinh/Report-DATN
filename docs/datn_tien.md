ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH
TRƯỜNG ĐẠI HỌC BÁCH KHOA
KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH
LUẬN VĂN TỐT NGHIỆP ĐẠI HỌC
Đề tài:
TÍCH HỢP CÁC QUY TRÌNH
QUẢN LÝ CÁN BỘ
VÀO CỔNG THÔNG TIN
NGÀNH: KHOA HỌC MÁY TÍNH
GVHD: ThS. Nguyễn Thanh Tùng
GVPB: ThS. Trần Quang
SVTH: Trần Tấn Tiến 1810582
Trương Công Thành 1810766
Nguyễn Hữu Kiệt 1812729
Thành phố Hồ Chí Minh, 05/2022

|     | Trường    | Đại học Bách | Khoa     | Tp.Hồ Chí | Minh |     |     |     |
| --- | --------- | ------------ | -------- | --------- | ---- | --- | --- | --- |
|     | Khoa Khoa | Học và       | Kỹ Thuật | Máy Tính  |      |     |     |     |
|     |           | LỜI          | CAM      |           | ĐOAN |     |     |     |
Chúng tôi xin cam đoan đây là công trình nghiên cứu và hiện thực của riêng nhóm chúng tôi dưới sự
hướng dẫn của ThS. Nguyễn Thanh Tùng. Mọi sao chép không hợp lệ, vi phạm quy chế đào tạo, chúng
| tôi hoàn | toàn chịu | trách nhiệm | và nhận | mọi hình thức | kỷ luật. |           |             |          |
| -------- | --------- | ----------- | ------- | ------------- | -------- | --------- | ----------- | -------- |
|          |           |             |         |               |          | NHÓM SINH | VIÊN THỰC   | HIỆN     |
|          |           |             |         |               |          |           | Trần        | Tấn Tiến |
|          |           |             |         |               |          |           | Trương Công | Thành    |
|          |           |             |         |               |          |           | Nguyễn      | Hữu Kiệt |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 3/160

|     | Trường    | Đại học | Bách Khoa   | Tp.Hồ Chí | Minh |     |     |     |
| --- | --------- | ------- | ----------- | --------- | ---- | --- | --- | --- |
|     | Khoa Khoa | Học     | và Kỹ Thuật | Máy Tính  |      |     |     |     |
|     |           |         | LỜI         | CẢM       |      | ƠN  |     |     |
Trước khi đi vào nội dung chi tiết của báo cáo, nhóm xin được dành hết lòng biết ơn của mình tới ThS.
Nguyễn Thanh Tùng - giảng viên khoa Khoa học và Kỹ thuật Máy tính trường Đại học Bách Khoa
TPHCM. Trong suốt khoảng thời gian vừa qua đã đưa ra đề tài, và tận tình hướng dẫn nhóm trong việc
định hướng đề tài. Chính nhờ sự tân tâm đó, nhóm thực hiện mới có thể hoàn thành được báo cáo luận
| văn tốt | nghiệp này | một cách | tốt nhất. |     |     |     |     |     |
| ------- | ---------- | -------- | --------- | --- | --- | --- | --- | --- |
Bên cạnh đó nhóm cũng xin chân gửi lời cảm ơn đến quý thầy cô hiện đã và đang công tác tại Khoa
Khoa Học và Kỹ Thuật Máy tính - Đại Học Bách Khoa TPHCM trong những năm qua đã dạy
dỗvàtruyềnđạtkiếnthức,kỹnăngđểnhómcóthểthựchiệnđềtàivớimộtnềntảngkiếnthứcbềnvững.
Cuối cùng, xin được gửi lời cảm ơn đến gia đình, bạn bè và những người đã cùng đồng hành với
nhóm trong quá trình thực hiện luận văn. Những lời tư vấn cũng như động viên là món quà quý báu
| nhất của | tất cả mọi | người dành | cho | nhóm! |     |           |             |          |
| -------- | ---------- | ---------- | --- | ----- | --- | --------- | ----------- | -------- |
|          |            |            |     |       |     | NHÓM SINH | VIÊN THỰC   | HIỆN     |
|          |            |            |     |       |     |           | Trần        | Tấn Tiến |
|          |            |            |     |       |     |           | Trương Công | Thành    |
|          |            |            |     |       |     |           | Nguyễn      | Hữu Kiệt |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 4/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
TÓM TẮT BÁO CÁO
Đề tài mà nhóm thực hiện là "Tích hợp các quy trình quản lý cán bộ vào cổng thông tin". Sau suốt
quá trình tìm hiểu và hiện thực, nhóm xin được trình bày báo cáo luận văn thông qua các nội dung sau
đây:
• Chương I: TỔNG QUAN
Giới thiệu, mục tiêu, ý nghĩa và giới hạn của đề tài.
• Chương II: CƠ SỞ LÝ THUYẾT
Mô hình phát triển web và công nghệ sử dụng.
• Chương III: PHÂN TÍCH HỆ THỐNG
Phân tích và chỉ ra yêu cầu hệ thống.
• Chương IV: THIẾT KẾ HỆ THỐNG
Tổng quát kiến trúc hệ thống, thiết kế chức năng và cơ sở dữ liệu.
• Chương V: HIỆN THỰC HỆ THỐNG
Quá trình hiện thực hệ thống.
• Chương VI: KIỂM THỬ HỆ THỐNG
Quá trình kiểm thử hệ thống.
• Chương VII: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN
Kết luận và hướng phát triển của hệ thống sau luận văn.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 5/160

Mục lục
1 TỔNG QUAN 15
1.1 Thực trạng - động lực . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
1.2 Khó khăn, thử thách . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
1.3 Phạm vi của đề tài . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
1.4 Mục tiêu của đề tài . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
1.5 Ý nghĩa của đề tài . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
1.5.1 Đối với cán bộ, viên chức, người lao động . . . . . . . . . . . . . . . . . . . . . . . 18
1.5.2 Đối với phòng quản lý cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
2 CƠ SỞ LÝ THUYẾT 20
2.1 Mô hình phát triển web . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
2.2 Front-end . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
2.2.1 ReactJS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
2.2.1.1 ReactJS là gì? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
2.2.1.2 Thành phần cơ bản của ReactJS . . . . . . . . . . . . . . . . . . . . . . . 24
2.2.1.3 Các kiến thức, khái niệm sâu hơn trong ReactJS . . . . . . . . . . . . . . 25
2.2.2 Redux . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30
2.2.2.1 Redux là gì? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30
2.2.2.2 Data-flow . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
2.2.3 Kết hợp giữa React và Redux . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32
2.3 Back-end . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33
2.3.1 NodeJS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34
2.3.1.1 NodeJS là gì? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34
2.3.1.2 Lợi thế của NodeJS: Non-blocking và Asynchronous . . . . . . . . . . . . 35
2.3.1.3 Ưu điểm - Nhược điểm . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36
2.3.2 ExpressJS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36
2.3.2.1 ExpressJS là gì? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36
2.3.2.2 Cài đặt . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37
2.3.2.3 Cấu trúc . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38
2.3.2.4 Định tuyến (Route) trong ExpressJS . . . . . . . . . . . . . . . . . . . . 38
2.4 Database . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39
2.4.1 So sánh SQL và NoSQL . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40
2.4.2 Oracle Database . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42
2.4.2.1 Oracle là gì? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42
2.4.2.2 Kiến trúc . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42
2.4.3 Các tính năng hỗ trợ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
2.4.4 Ưu điểm - Nhược điểm . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
3 PHÂN TÍCH HỆ THỐNG 45
3.1 Phân tích yêu cầu hệ thống . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46
3.1.1 Phân quyền người dùng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46
6

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
3.1.2 Hợp đồng lao động . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46
3.1.3 Hợp đồng Đơn vị trả lương - Trách nhiệm . . . . . . . . . . . . . . . . . . . . . . . 49
3.1.4 Hợp đồng làm việc (hợp đồng viên chức) . . . . . . . . . . . . . . . . . . . . . . . . 50
3.1.5 Trang quản lý hồ sơ cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51
3.1.6 Quản lý danh sách cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51
3.1.7 Quá trình chức vụ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52
3.1.8 Quá trình làm việc ngoài . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52
3.1.9 Quá trình công tác trong nước . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53
3.1.10 Quá trình đi nước ngoài . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53
3.1.11 Quá trình khen thưởng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54
3.1.12 Quá trình kỷ luật . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54
3.1.13 Nghỉ thai sản . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54
3.1.14 Nghỉ phép . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54
3.1.15 Các quá trình chuyên môn cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . 56
3.1.15.1 Sáng kiến . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56
3.1.15.2 Nghiên cứu khoa học . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56
3.1.15.3 Bằng phát minh . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56
3.1.15.4 Hướng dẫn luận văn, khoa học . . . . . . . . . . . . . . . . . . . . . . . . 56
3.1.15.5 Giải thưởng. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56
3.1.16 Quá trình đào tạo, bồi dưỡng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57
3.1.17 Quá trình học tập, công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57
3.1.18 Quá trình kéo dài công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57
3.1.19 Nghỉ việc . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
3.1.20 Các phần hỗ trợ cho Phòng TCCB . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
3.1.20.1 Yêu cầu hỗ trợ thông tin . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
3.1.20.2 Dashboard phòng TCCB . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
4 THIẾT KẾ HỆ THỐNG 59
4.1 Tổng quan kiến trúc thiết kế . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
4.2 Thiết kế luồng đăng nhập và phân quyền . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
4.2.1 Đăng nhập . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
4.2.2 Phân quyền, phân vai trò . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
4.2.3 Thiết kế các chức năng cho đối tượng người dùng . . . . . . . . . . . . . . . . . . . 61
4.2.3.1 Cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
4.2.3.2 Phòng Tổ chức Cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63
4.3 Thiết kế cơ sở dữ liệu cho hệ thống . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
4.3.1 Bảng dữ liệu tổ chức cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
4.3.2 Bảng dữ liệu đào tạo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
4.3.3 Bảng dữ liệu học tập, công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
4.3.4 Bảng dữ liệu chức vụ của cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
4.3.5 Bảng dữ liệu hợp đồng lao động . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72
4.3.6 Bảng dữ liệu hợp đồng làm việc (viên chức) . . . . . . . . . . . . . . . . . . . . . . 74
4.3.7 Bảng dữ liệu hợp đồng đơn vị trả lương - trách nhiêm . . . . . . . . . . . . . . . . 76
4.3.8 Bảng dữ liệu khen thưởng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
4.3.9 Bảng dữ liệu kỷ luật . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79
4.3.10 Bảng dữ liệu sáng kiến . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80
4.3.11 Bảng dữ liệu kéo dài công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
4.3.12 Bảng dữ liệu làm việc ngoài . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82
4.3.13 Bảng dữ liệu đi nước ngoài . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
4.3.14 Bảng dữ liệu công tác trong nước . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
4.3.15 Bảng dữ liệu nghỉ việc . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86
4.3.16 Bảng dữ liệu nghỉ thai sản. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 7/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
4.3.17 Bảng dữ liệu nghỉ phép . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88
4.3.18 Bảng dữ liệu nghiên cứu khoa học . . . . . . . . . . . . . . . . . . . . . . . . . . . 89
4.3.19 Bảng dữ liệu bài viết khoa học . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 90
4.3.20 Bảng dữ liệu bằng phát minh . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
4.3.21 Bảng dữ liệu giải thưởng. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92
4.3.22 Bảng dữ liệu hướng dẫn luận văn . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93
4.3.23 Bảng dữ liệu thông báo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 94
4.3.24 Bảng dữ liệu hỗ trợ thông tin . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 95
4.3.25 Bảng dữ liệu phản hồi hỗ trợ thông tin . . . . . . . . . . . . . . . . . . . . . . . . 96
4.4 Thiết kế công cụ hỗ trợ import dữ liệu . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97
4.4.1 Bài toán cơ bản. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97
4.4.2 Cách áp dụng bài toán . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 99
5 HIỆN THỰC HỆ THỐNG 100
5.1 Cán bộ. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101
5.1.1 Thông tin cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101
5.1.1.1 Thông tin cá nhân . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101
5.1.1.2 Quan hệ gia đình . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103
5.1.1.3 Thông tin công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104
5.1.1.4 Quá trình học tập, công tác . . . . . . . . . . . . . . . . . . . . . . . . . 104
5.1.1.5 Trình độ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105
5.1.1.6 Yêu cầu chỉnh sửa thông tin . . . . . . . . . . . . . . . . . . . . . . . . . 107
5.2 Đào tạo, bồi dưỡng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 108
5.2.1 Trang cá nhân . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 108
5.2.2 Tổ chức cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110
5.3 Đi nước ngoài . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112
5.3.1 Trang cá nhân . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112
5.3.2 Tổ chức cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114
5.4 Quá trình chức vụ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 117
5.4.1 Hiển thị chức vụ theo cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 119
5.4.2 Filter chức vụ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 119
5.5 Quá trình hơp đồng lao động . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
5.5.1 Trang tạo mới hợp đồng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
5.5.1.1 Thông tin hợp đồng và thông tin phía trường . . . . . . . . . . . . . . . . 121
5.5.1.2 Thông tin phía cán bộ. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
5.5.1.3 Điều khoản hợp đồng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 122
5.5.1.4 In hợp đồng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123
5.6 Quá trình hợp đồng làm việc (viên chức) . . . . . . . . . . . . . . . . . . . . . . . . . . . . 124
5.6.1 Tạo mới hợp đồng làm việc (viên chức) . . . . . . . . . . . . . . . . . . . . . . . . 125
5.6.1.1 Thông tin phía trường . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125
5.6.1.2 Thông tin phía cán bộ. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125
5.6.1.3 Điều khoản hợp đồng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 126
5.7 Quá trình hợp đồng trả lương - trách nhiệm . . . . . . . . . . . . . . . . . . . . . . . . . . 127
5.8 Quá trình khen thưởng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 128
5.9 Quá trình kỷ luật . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
5.10 Quá trình sáng kiến . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130
5.11 Xử lý yêu cầu thông tin . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 131
5.12 Quá trình nghiên cứu khoa học . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 132
5.13 Quá trình bằng phát minh . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133
5.14 Quá trình hướng dẫn luận văn . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 134
5.15 Danh sách bài viết khoa học. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
5.16 Danh sách giải thưởng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 136
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 8/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
5.17 Quá trình học tập công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137
5.18 Nghỉ thai sản . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138
5.19 Nghỉ phép . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 139
5.20 Quá trình nghỉ việc . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141
5.21 Quá trình kéo dài công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 142
5.22 Dashboard Phòng Tổ chức Cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144
6 KIỂM THỬ 147
6.1 Kiểm thử đơn vị - Unit Testing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 148
6.2 Kiểm thử tích hợp - Integration Testing . . . . . . . . . . . . . . . . . . . . . . . . . . . . 149
6.3 Kiểm thử hệ thống - System Testing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152
6.3.1 Quản lý thông tin cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152
6.3.1.1 Tạo mới cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152
6.3.2 Cập nhật cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153
6.3.3 Automation Testing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 155
6.4 Kiểm tra chấp nhận - Acceptance Testing . . . . . . . . . . . . . . . . . . . . . . . . . . . 156
7 KẾT LUẬN - HƯỚNG PHÁT TRIỂN 157
7.1 Kết quả đạt được . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 158
7.2 Ưu điểm . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 159
7.3 Nhược điểm . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 159
7.4 Hướng phát triển . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 159
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 9/160

Danh sách bảng
1.1 Thống kê thao tác của cán bộ và phòng TCCB trong các mảng . . . . . . . . . . . . . 18
2.1 Bảng phân tích ưu nhược điểm các framework . . . . . . . . . . . . . . . . . . . . . . 23
4.1 Bảng dữ liệu tổ chức cán bộ. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 67
4.2 Bảng dữ liệu đào tạo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
4.3 Bảng dữ liệu học tập công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
4.4 Bảng dữ liệu chức vụ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71
4.5 Bảng dữ liệu hợp đồng lao động . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
4.6 Bảng dữ liệu hợp đồng làm việc (viên chức) . . . . . . . . . . . . . . . . . . . . . . . . 75
4.7 Bảng dữ liệu hợp đồng đơn vị trả lương - trách nhiệm . . . . . . . . . . . . . . . . . . 77
4.8 Bảng dữ liệu khen thưởng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
4.9 Bảng dữ liệu kỷ luật . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79
4.10 Bảng dữ liệu sáng kiến. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80
4.11 Bảng dữ liệu kéo dài công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
4.12 Bảng dữ liệu làm việc ngoài . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82
4.13 Bảng dữ liệu đi nước ngoài . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84
4.14 Bảng dữ liệu công tác trong nước. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
4.15 Bảng dữ liệu nghỉ việc . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86
4.16 Bảng dữ liệu nghỉ thai sản . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
4.17 Bảng dữ liệu nghỉ phép . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88
4.18 Bảng dữ liệu nghiên cứu khoa học . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 89
4.19 Bảng dữ liệu bài viết khoa học . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 90
4.20 Bảng dữ liệu bằng phát minh . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
4.21 Bảng dữ liệu giải thưởng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92
4.22 Bảng dữ liệu hướng dẫn luận văn . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93
4.23 Bảng dữ liệu thông báo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 94
4.24 Bảng dữ liệu hỗ trợ thông tin . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 95
4.25 Bảng dữ liệu phản hồi hỗ trợ thông tin . . . . . . . . . . . . . . . . . . . . . . . . . . 96
7.1 Thời gian và nội dung bàn giao các mục . . . . . . . . . . . . . . . . . . . . . . . . . . 158
10

Danh sách hình vẽ
2.1 Luồng xử lý của mô hình MVC . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
2.2 MPA và SPA - API . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
2.3 RESTful API . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
2.4 ReactJS - thư viện do Facebook phát triển . . . . . . . . . . . . . . . . . . . . . . . . 24
2.5 Sự kết hợp của các component . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
2.6 Chỉ các thành phần khác biệt mới được React cập nhật lên DOM thực . . . . . . . . 25
2.7 Một ví dụ về quá trình truyền props . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26
2.8 Quá trình truyền dữ liệu vào một component . . . . . . . . . . . . . . . . . . . . . . . 26
2.10 Ví dụ về render một component . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27
2.11 Tạo component App với nhiều lần render component Welcome . . . . . . . . . . . . 28
2.12 Tách component Avatar trong component Comment . . . . . . . . . . . . . . . . . . 29
2.13 Logo của Redux . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30
2.14 Có Redux, trạng thái (state) của các component được quản lý chặt chẽ hơn rất nhiều 30
2.15 Actions trong Redux . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
2.16 Tạo store cho việc đăng nhập . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
2.17 Cấu trúc hướng điều kiển trong Redux. . . . . . . . . . . . . . . . . . . . . . . . . . . 32
2.18 Minh họa quá trình map dữ liệu của connect . . . . . . . . . . . . . . . . . . . . . . . 33
2.19 Cách connect một component với Redux store . . . . . . . . . . . . . . . . . . . . . . 33
2.20 NodeJS và ExpressJS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34
2.21 Các thành phần nổi bật của NodeJS . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34
2.22 So sánh thời gian thực thi 2 file của blocking và non-blocking . . . . . . . . . . . . . . 35
2.23 So sánh và mô tả về bất đồng bộ của NodeJS . . . . . . . . . . . . . . . . . . . . . . . 35
2.24 ExpressJS là gì mà lại phổ biến đến vậy? . . . . . . . . . . . . . . . . . . . . . . . . . 36
2.25 ExpressJScómặttrongcảhaicôngnghệpháttriểnwebappphổbiến:MERNvàMEAN 37
2.26 Cấu trúc của ExpressJS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38
2.27 Quá trình xử lý của ExpressJS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39
2.28 Điểm khác biệt trong tổ chức dữ liệu của 2 dạng database . . . . . . . . . . . . . . . . 40
2.29 Oracle Database . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42
3.1 Tạo mã thẻ/email mới cho cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46
3.2 Quá trình ký hợp đồng lao động . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47
3.3 Quá trình ký hợp đồng đơn vị trả lương - trách nhiệm . . . . . . . . . . . . . . . . . . 49
3.4 Quá trình ký hợp đồng làm việc . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50
3.5 Quá trình chức vụ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52
3.6 Quy trình xử lý đi nước ngoài . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53
3.7 Quá trình nghỉ phép . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55
3.8 Quá trình đào tạo, bồi dưỡng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57
4.1 Luồng xử lý đăng nhập . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
4.2 Usecase tổng quan của cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
4.3 Usecase tổng quan của phòng TCCB . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63
4.4 ERD của bảng tổ chức cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
11

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
4.5 ERD của bảng dữ liệu quá trình đào tạo. . . . . . . . . . . . . . . . . . . . . . . . . . 68
4.6 ERD của quá trình học tập công tác) . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
4.7 ERD của quá trình chức vụ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
4.8 ERD của quá trình hợp đồng lao động . . . . . . . . . . . . . . . . . . . . . . . . . . . 72
4.9 ERD của quá trình hợp đồng làm việc (viên chức) . . . . . . . . . . . . . . . . . . . . 74
4.10 ERD của quá trình hợp đồng đơn vị trả lương - trách nhiệm . . . . . . . . . . . . . . 76
4.11 ERD của quá trình khen thưởng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
4.12 ERD của quá trình kỷ luật . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79
4.13 ERD của quá trình sáng kiến . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80
4.14 ERD của quá trình kéo dài công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
4.15 ERD của quá trình làm việc ngoài . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82
4.16 ERD của quá trình đi nước ngoài. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
4.17 ERD của quá trình công tác trong nước . . . . . . . . . . . . . . . . . . . . . . . . . . 85
4.18 ERD của quá trình nghỉ việc . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86
4.19 ERD của quá trình nghỉ thai sản . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
4.20 ERD của quá trình nghỉ phép . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88
4.21 ERD của quá trình nghiên cứu khoa học. . . . . . . . . . . . . . . . . . . . . . . . . . 89
4.22 ERD của quá trình bài viết khoa học . . . . . . . . . . . . . . . . . . . . . . . . . . . 90
4.23 ERD của quá trình bằng phát minh . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
4.24 ERD của quá trình giải thưởng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92
4.25 ERD của quá trình hướng dẫn luận văn . . . . . . . . . . . . . . . . . . . . . . . . . . 93
4.26 ERD của bảng thông báo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 94
4.27 ERD của bảng hỗ trợ thông tin . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 95
4.28 ERD của bảng phản hồi hỗ trợ thông tin . . . . . . . . . . . . . . . . . . . . . . . . . 96
4.29 Bảng giá trị LCS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 98
5.1 Menu thông tin cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101
5.2 Modal tạo mới, chỉnh sửa tham gia tổ chức khác của cán bộ . . . . . . . . . . . . . . 101
5.3 Mục thông tin các nhân trong phần thông tin cán bộ . . . . . . . . . . . . . . . . . . 102
5.4 Giao điện phần quan hệ gia đình . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103
5.5 Modal tạo mới, chỉnh sửa quan hệ gia đình . . . . . . . . . . . . . . . . . . . . . . . . 103
5.6 Phần Thông tin công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104
5.7 Phần quá trình học tập, công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104
5.8 Phần thông tin trình độ cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105
5.9 Phần thông tin trình độ cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105
5.10 Modal đào tạo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 106
5.11 Modal thay đổi thông tin . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107
5.12 Menu đào tạo, bồi dưỡng ở trang cá nhân . . . . . . . . . . . . . . . . . . . . . . . . . 108
5.13 Modal khi tạo mới/cập nhật thông tin đào tạo . . . . . . . . . . . . . . . . . . . . . . 108
5.14 Trang cá nhân - thông tin đào tạo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109
5.15 Trang cá nhân - thông tin cán bộ - thông tin về trình độ . . . . . . . . . . . . . . . . 109
5.16 Menu đào tạo ở tổ chức cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110
5.17 Danh sách quá trình đào tạo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110
5.18 Hiển thị thông tin yêu cầu ở phòng TCCB . . . . . . . . . . . . . . . . . . . . . . . . 110
5.19 Phản hồi của phòng TCCB khi từ chối yêu cầu . . . . . . . . . . . . . . . . . . . . . . 111
5.20 Thông tin đào tạo của cán bộ yêu cầu duyệt khi gửi . . . . . . . . . . . . . . . . . . . 111
5.21 Menu đi nước ngoài ở trang cá nhân . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112
5.22 Danh sách đi nước ngoài ở trang cá nhân . . . . . . . . . . . . . . . . . . . . . . . . . 112
5.23 Thống kê mục đích đi nước ngoài ở trang cá nhân . . . . . . . . . . . . . . . . . . . . 112
5.24 Modal cập nhật báo cáo đi nước ngoài ở trang cá nhân . . . . . . . . . . . . . . . . . 113
5.25 Cập nhật báo cáo đi nước ngoài thành công . . . . . . . . . . . . . . . . . . . . . . . . 113
5.26 Kết quả báo cáo khi phòng TCCB phản hồi . . . . . . . . . . . . . . . . . . . . . . . . 114
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 12/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
5.27 Phản hồi đến từ phòng TCCB . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114
5.28 Menu đi nước ngoài ở tổ chức cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . 115
5.29 Trang đi nước ngoài ở tổ chức cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . 115
5.30 Nút tải danh sách đi nước ngoài . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 116
5.31 Modal phản hồi báo cáo đi nước ngoài, thêm mới tiếp nhận về nước của tổ chức cán bộ116
5.32 Menu quá trình chức vụ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 117
5.33 Trang quản lý quá trình chức vụ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 117
5.34 Modal tạo mới chức vụ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118
5.35 Chỉnh sửa thông tin chức vụ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118
5.36 Hiển thị chức vụ theo cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 119
5.37 Filter chức vụ. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 119
5.38 Menu hợp đồng lao động . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
5.39 Trang danh sách hợp đồng lao động . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
5.40 Thông tin hợp đồng và thông tin phía trường . . . . . . . . . . . . . . . . . . . . . . . 121
5.41 Thông tin phía cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
5.42 Điều khoản hợp đồng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 122
5.43 File hợp đồng khi in . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123
5.44 Menu hợp đồng viên chức . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 124
5.45 Trang danh sách hợp đồng viên chức . . . . . . . . . . . . . . . . . . . . . . . . . . . . 124
5.46 Thông tin phía trường . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125
5.47 Thông tin phía cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125
5.48 Điểu khoản hợp đồng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 126
5.49 Menu hợp đồng đơn vị trả lương - trách nhiệm . . . . . . . . . . . . . . . . . . . . . . 127
5.50 Trang danh sách hợp đồng đã ký . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
5.51 Menu quá trình khen thưởng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 128
5.52 Trang quản lý khen thưởng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 128
5.53 Menu quá trình kỷ luật . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
5.54 Trang quản lý kỷ luật . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
5.55 Menu quá trình sáng kiến . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130
5.56 Trang quản lý danh sách sáng kiến . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130
5.57 Menu xử lý yêu cầu thông tin . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 131
5.58 Giao diện trang yêu cầu thông tin . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 131
5.59 Menu quá trình nghiên cứu khoa học. . . . . . . . . . . . . . . . . . . . . . . . . . . . 132
5.60 Giao diện trang quản lý quá trình nghiên cứu khoa học . . . . . . . . . . . . . . . . . 132
5.61 Menu quá trình bằng phát minh . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133
5.62 Giao diện quá trình bằng phát minh . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133
5.63 Menu quá trình hướng dẫn luận văn . . . . . . . . . . . . . . . . . . . . . . . . . . . . 134
5.64 Giao diện quá trình hướng dẫn luận văn . . . . . . . . . . . . . . . . . . . . . . . . . . 134
5.65 Menu danh sách bài viết khoa học . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
5.66 Giao diện danh sách bài viết khoa học . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
5.67 Menu danh sách giải thưởng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 136
5.68 Giao diện giải thưởng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 136
5.69 Menu quá trình học tập công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137
5.70 Giao diện quá trình học tập công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . 137
5.71 Menu nghỉ thai sản . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138
5.72 Giao diện trang nghỉ thai sản . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138
5.73 Menu nghỉ phép . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 139
5.74 Giao diện trang nghỉ phép. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 139
5.75 Modal quá trình nghỉ phép . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 140
5.76 Menu quá trình nghỉ việc . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141
5.77 Trang quản lý danh sách nghỉ việc . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141
5.78 Menu quá trình kéo dài công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 142
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 13/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
5.79 Trang quản lý kéo dài công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 142
5.80 Trang tạo danh sách kéo dài công tác dự kiến . . . . . . . . . . . . . . . . . . . . . . . 142
5.81 Modal cập nhật số quyết định theo danh sách chính thức mỗi năm . . . . . . . . . . . 143
5.82 Trang quản lý kéo dài công tác sau khi cập nhật số quyết định . . . . . . . . . . . . . 143
5.83 Trang Dashboard (1). . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144
5.84 Trang Dashboard (2). . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 145
5.85 Trang Dashboard (3). . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 146
6.1 Kết quả unit test . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 148
6.2 Kết quả Integration test . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 151
6.3 Tạo mới cán bộ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152
6.4 Cập nhật học vị . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153
6.5 Kết quả sau cập nhật . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153
6.6 Yêu cầu thay đổi của cán bộ trong giao diện phòng TCCB . . . . . . . . . . . . . . . 154
6.7 Modal phản hồi từ chối . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 154
6.8 Kết quả sau khi chạy các kịch bản . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 155
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 14/160

Chương 1
TỔNG QUAN
Ở chương này, nhóm sẽ giới thiệu về đề tài thông qua thực trạng, động lực của các hệ thống giáo dục
hiện nay ở Việt Nam, từ đó mà đề tài có được mục tiêu và phạm vi cụ thể để hướng đến. Cuối cùng là
những ý nghĩa mang lại của việc tích hợp các quy trình quản lý cán bộ vào cổng thông tin.

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
1.1 Thực trạng - động lực
Trong các hệ thống giáo dục tại Việt Nam hiện nay, bên cạnh đối tượng là các học sinh, sinh viên
hay học viên - kèm theo các quy trình về đào tạo, học vụ, ... thì đội ngũ đảm nhiệm vai trò không kém
phần quan trọng trong hệ thống: cán bộ và người lao động.
Khixãhộingàycànghiệnđạivàpháttriển,kéotheocácvấnđềvềcôngtácgiáodụcvàquảnlýcũng
ngày càng mật thiết. Đối với một trường đại học Việt Nam hiện nay, quy trình quản lý cán bộ - người
laođộngđanglàmộttrongnhữngmảngtốiquantrọngtrongviệcvậnhànhvàpháttriểntrườngđạihọc
ấy.
Tất nhiên, những khó khăn cố hữu của thời đại phát triển hiện nay đặt ra các thách thức: Giải quyết
các vấn đề như khối lượng thông tin lớn, độ tin cậy, độ bảo mật, tính nhất quán và các kỹ thuật bổ
sung, chỉnh sửa, quản lý, ... Nếu như một hệ thống quản lý cán bộ chỉ xử lí thủ công sẽ mất rất nhiều
tài nguyên cá nhân nói riêng và tổ chức nói chung.
Cụ thể, nhóm đã chọn khảo sát Phòng Tổ chức cán bộ (TCCB) của trường Đại học Khoa học Xã hội
và Nhân Văn, ĐHQG-HCM (HCMUSSH). Thời điểm khảo sát thực tế, phòng vẫn sử dụng các công cụ
văn phòng truyền thống, riêng lẻ để quản lý các thông tin, quá trình của cán bộ: Excel, Words hay là
giấy tờ. Điều này gây ra một số khó khăn như:
• Dữ liệu không nhất quán, không đồng bộ do được lưu trữ riêng trong mỗi máy của chuyên viên
phòng TCCB dẫn tới sai sót thông tin.
• Thao tác rườm rà, tốn tài nguyên dẫn tới việc lưu trữ, chỉnh sửa, thêm mới hay trích xuất gặp
nhiều vấn đề.
• Giao tiếp giữa cán bộ và phòng TCCB không được liền mạch, không có minh chứng rõ ràng, còn
cảm tính.
• Cán bộ không xem được thông tin cá nhân, không chủ động đối với dữ liệu cá nhân dẫn tới công
việc bị đè nặng lên phòng TCCB.
Giải quyết các vấn đề trên cho toàn bộ khối lượng thông tin quá trình cán bộ là việc làm cần thiết
để giúp cho cán bộ cũng như phòng TCCB có được công cụ thao tác cho công việc trở nên dễ dàng hơn.
Trong từng giai đoạn, phòng TCCB phải thống kê số lượng, kiểm soát thông tin, đòi hỏi công cụ phải
có tính năng trích xuất dữ liệu, phục vụ cho các báo cáo thống kê hàng tháng, hàng năm, thống kê cho
ĐHQG hay cho ban giám hiệu...
Về hồ sơ cán bộ, phần lớn cán bộ muốn in hồ sơ có chữ ký và đóng mộc, phải lấy mẫu BNV-2C
2008 về tự nhập thông tin vào, in và gửi cho phòng TCCB để duyệt. Nếu xảy ra trường hợp dữ liệu
của phòng TCCB lưu và thông tin cán bộ khai trong hồ sơ không khớp, cán bộ lại phải trình bày
minh chứng, thay đổi, và có khi là chỉnh sửa một bản khác để phòng TCCB ký duyệt hồ sơ ấy. Trong
mẫu hồ sơ cán bộ, các quá trình công tác, trình độ chuyên môn hay lý lịch cá nhân cần phải thể hiện
rấtrõ.Vậynêncầnxâydựngmộthệthốngcơsởdữliệucánbộthốngnhấtvàràngbuộcchặtchẽvớinhau.
Vìvậy,cầncómộtnơiđểcánbộchủđộngvớilượngthôngtincủamình.Vàdĩnhiênkhốilượngthông
tin ấy sẽ được quản lý bởi phòng TCCB. Hai phía phối hợp thao tác và duyệt sẽ tạo nên quy trình quản
lý - thực hiện dữ liệu. Từ đó giúp cho cả đôi bên cùng có những lợi ích về thao tác, tận dụng công nghệ.
Yêu cầu về một "khu vực"quản lý chung, quản lý các vùng thông tin quan trọng như lương, chức vụ,
công tác, hợp đồng, ... từ "khu vực riêng"là cán bộ của phòng TCCB, tất cả gói gọn trong cổng thông
tin www.hcmussh.edu.vn cũng chính là nguồn động lực của nhóm để thực hiện đề tài.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 16/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
1.2 Khó khăn, thử thách
• Độ ổn định của hệ thống.
• Tính nhất quán và đúng đắn của dữ liệu. Nhất là dữ liệu cơ sở của cán bộ.
• Phân đúng quyền hạn sử dụng và thao tác.
• Giao diện và các thao tác phải gần gũi và dễ làm quen, thích nghi.
• Một hệ thống dùng cho cả hai phía cán bộ và phòng TCCB.
• Các kỹ thuật, kiến thức về công nghệ thông tin cũng như thao tác với hệ thống của cán bộ còn
chưa hoàn thiện.
Đó là những khó khăn mà nhóm đã gặp phải trong quá trình thực hiện luận văn. Đồng thời cũng là yêu
cầu phải giải quyết các thử thách ấy với hệ thống thực hiện.
1.3 Phạm vi của đề tài
Phạm vi của đề tài là Phòng Tổ chức cán bộ của trường Đại học Khoa học Xã hội và Nhân
văn, ĐHQG-HCM.Tuynhiên,tùytheođặcthùđơnvịmàcóthểđiềuchỉnhcácnộidungchophùhợp.
Các đối tượng sử dụng hệ thống:
• Cán bộ, viên chức, người lao động thuộc trường Đại học Khoa học Xã hội và Nhân văn, ĐHQG-
HCM.
• Bộ phận Tổ chức cán bộ trường Đại học Khoa học Xã hội và Nhân văn, ĐHQG-HCM, bao gồm
các bộ phận liên quan đến cán bộ, viên chức, người lao động.
1.4 Mục tiêu của đề tài
Mục tiêu của đề tài, sau khi nghiên cứu và khảo sát, là xây dựng hệ thống (cơ sở dữ liệu, website)
tích hợp các quy trình tổ chức, quản lý cán bộ và cổng thông tin của trường Đại học Khoa học Xã hội
và Nhân văn, ĐHQG-HCM với các tính năng tổng quát:
• Đối với cán bộ:
– Chỉnh sửa, quản lý hồ sơ cán bộ, trích xuất được hồ sơ cán bộ theo mẫu.
– Tạo mới, thay đổi, xóa các thông tin về các quá trình công tác, chuyên môn
• Đối với chuyên viên phòng TCCB:
– Chỉnh sửa, quản lý thông tin cán bộ, xét duyệt các quá trình quan trọng.
– Tạo mới, thay đổi, xóa các thông tin về các quá trình của cán bộ.
– Lọc và trích xuất dữ liệu phục vụ cho việc thống kê.
Từ những tính năng tổng quát ấy, nhóm thống kê thao tác cụ thể ứng với từng loại đối tượng:
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 17/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
Mảng Mảng thông tin Thao tác cán bộ Thao tác phòng TCCB
Lý lịch cá nhân Tạo mới
Quan hệ gia đình Chỉnh sửa Chỉnh sửa
Thông tin cán bộ
Quá trình công tác Xuất hồ sơ cán bộ Lọc và trích xuất
Trình độ chuyên môn Xuất hồ sơ cán bộ
Quá trình chức vụ
Diễn biến lương
Chỉ xem
Bảo hiểm xã hội
Công tác Quá trình kéo dài công tác
Quá trình làm việc ngoài
Chỉ xem
Quá trình công tác trong nước
Chỉnh sửa
Quá trình đi nước ngoài
Hợp đồng ĐVTL - TN Tạo mới
Hợp đồng Hợp đồng Lao động Chỉ xem Chỉnh sửa
Hợp đồng Làm việc Lọc và trích xuất
Quá trình khen thưởng
Khen thưởng
Quá trình kỷ luật Chỉ xem
Kỷ luật
Danh sách sáng kiến
Nghỉ thai sản
Nghỉ Nghỉ phép Chỉ xem
Nghỉ không lương
Nghiên cứu Khoa học
Bằng phát minh
Đào tạo, bồi dưỡng
Tạo mới
Chuyên môn Hướng dẫn luận văn Xem và trích xuất
Chỉnh sửa
Bài viết khoa học
Danh sách giải thưởng
Học tập, công tác
Bảng 1.1: Thống kê thao tác của cán bộ và phòng TCCB trong các mảng
Ngoài các mục tiêu về thao tác được thống kê trong bảng 1.1, còn có một số mục tiêu như:
• Quản lý và theo dõi được toàn bộ dữ liệu của 1 cá nhân cán bộ, viên chức hay người lao động từ
lúc được tuyển dụng vào Trường làm việc cho tới khi giải quyết nghỉ việc theo chế độ BHXH.
• Duyệt các thông tin mà cán bộ chỉnh sửa.
• Thống kê số liệu về cán bộ theo giai đoạn.
• Trang Dashboard trực quan về dữ liệu.
• Đảm bảo an toàn thông tin cho cán bộ.
1.5 Ý nghĩa của đề tài
1.5.1 Đối với cán bộ, viên chức, người lao động
• Có hệ thống các website quản lý thông tin cá nhân tường minh hơn.
• Dễ dàng hơn trong việc cập nhật dữ liệu cá nhân, xem các quá trình cá nhân, công tác, chuyên
môn, khen thưởng - kỷ luật.
• Tăng tương tác giữa cán bộ và phòng TCCB.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 18/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
1.5.2 Đối với phòng quản lý cán bộ
• Nắm bắt số lượng cán bộ, viên chức, người lao động. Từ đó quản lý thông tin tốt hơn.
• Quản lý danh sách cán bộ trực quan hơn, đầy đủ hơn. Đồng thời chỉnh sửa nếu như có sai sót từ
cán bộ.
• Quản lý các quá trình với các thao tác dễ hơn, có tích hợp theo quy trình quy định.
• Thu thập dữ liệu dễ dàng, không rườm rà.
• Tìm kiếm, trích xuất, tạo mới danh sách hay các file thông tin hồ sơ của cán bộ tự động, tránh
việc sai sót và thiếu đồng nhất.
• Quá trình làm việc với cán bộ về thông tin tường minh hơn.
• Tăng tính tự động hóa, hiện đại hóa trong quá trình làm việc.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 19/160

| Chương | 2     |        |
| ------ | ----- | ------ |
| CƠ     | SỞ LÝ | THUYẾT |
Trong phạm vi chương này, nhóm sẽ trình bày các công nghệ sử dụng trong quá trình hiện thực hệ
thống, cũng như phân tích các lý do để chọn các công nghệ ấy. Các phần chính sẽ thể hiện là mô hình
| phát triển | web, Front-end, Back-end, | Database. |
| ---------- | ------------------------- | --------- |

|     | Trường | Đại       | học Bách | Khoa     | Tp.Hồ | Chí  | Minh |     |
| --- | ------ | --------- | -------- | -------- | ----- | ---- | ---- | --- |
|     | Khoa   | Khoa Học  | và       | Kỹ Thuật | Máy   | Tính |      |     |
| 2.1 | Mô     | hình phát |          | triển    | web   |      |      |     |
Cổng thông tin hiện tại của trường Đại học Khoa học Xã hội và Nhân văn hiện đang theo mô
hình MVC. Đây là một mô hình kiến trúc được sử dụng rộng rãi bởi những lợi ích của nó mang lại: đơn
giản, dễ nâng cấp và bảo trì, ... Và đây cũng sẽ là mô hình mà nhóm chọn để hiên thực.
|     |     |              |        | Hình | 2.1: | Luồng | xử lý của | mô hình MVC |
| --- | --- | ------------ | ------ | ---- | ---- | ----- | --------- | ----------- |
| MVC | gồm | 3 thành phần | chính: |      |      |       |           |             |
•
M - Model: là "lớp đối tương". Đại diện cho dữ liệu và logic của một ứng dụng. Thông thường
nósẽchịutráchnhiệmvềlưutrữ,xóa,cậpnhậtdữliệuứngdụng.Controllerthôngquacáchàm,
| phương | thức | trong | model | để lấy | dữ liệu | cần | thiết và | gửi sang View. |
| ------ | ---- | ----- | ----- | ------ | ------- | --- | -------- | -------------- |
• V - View: là "lớp trình bày". Chịu trách nhiệm định dạng dữ liệu nhận được từ Controller.
Nói cách khác, là nơi chứa phần giao diện của ứng dụng và giúp người dùng tương tác với hệ thống
| thông | qua | Controller. |     |     |     |     |     |     |
| ----- | --- | ----------- | --- | --- | --- | --- | --- | --- |
• C - Controller: là "lớp điều khiển". Nhận những yêu cầu xử lý từ người dùng. Với các class và
function, Controller xử lý các chức năng logic giúp lấy đúng dữ liệu cần thiết từ Model và hiển
| thị | chúng | thông qua | View. |     |      |          |        |       |
| --- | ----- | --------- | ----- | --- | ---- | -------- | ------ | ----- |
|     |       |           |       |     | Hình | 2.2: MPA | và SPA | - API |
Thêm vào đó, công nghệ SPA cũng được tích hợp. Đây là công nghệ giúp cho trang web sử dụng
được mượt mà hơn và được sử dụng rộng rãi bởi các trang web lớn như Facebook, Google Mail, ... SPA
hay Single-page AppicationgomtấtcảdữliệuvềHTML,CSS,Javascript,sauđórenderchỉmộtlần.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 21/160

|     | Trường    | Đại học Bách | Khoa Tp.Hồ   | Chí  | Minh |
| --- | --------- | ------------ | ------------ | ---- | ---- |
|     | Khoa Khoa | Học và       | Kỹ Thuật Máy | Tính |      |
Sau đó Js sẽ chịu trách nhiệm cho ẩn hiện các phần, lấy dữ liệu và đưa vào trang mà không cần render
trang mới. SPA giúp tăng trải nghiệm người dùng nhờ việc có thể tránh load lại những phần không cần
thiết. Thế nên cụm từ Client-side Render là cốt lõi của SPA Ngược lại với công nghệ MPA, sử dụng
| Server-side | Render | sẽ render | lại trang mỗi | khi chuyển | trang khác. |
| ----------- | ------ | --------- | ------------- | ---------- | ----------- |
Và cũng theo đó, RESTful API là công cụ đắc lực cho công nghệ SPA này. Với việc front-end và
back-endđượctáchbiệthoàntoàn,RESTfulAPIphùhợpvìnócungcấpcácphươngthứcGET,POST,
PUT, DELETE dựa trên giao thức HTTP. Từ đó có thể sử dụng API như một cầu nối giữa back-end
| và front-end | một cách | hiệu quả. |     |     |     |
| ------------ | -------- | --------- | --- | --- | --- |
RESTful APIlàtiêuchuẩntrongviệcthiếtkếAPIchocácứngdụngwebđểquảnlýcáctàinguyên,
và hiện được sử dụng rất phổ biến. Sử dụng thiết kế kiểu REST (Representation State Transfer), và
thông qua các phương thức để trả về dữ liệu theo nhiều định dạng khác nhau như JSON, XML, ... So
với các phương pháp như SOAP, WSDL trước đây, rõ ràng RESTful API là một lợi thế với các điểm
| mạnh vừa | nêu trên. |     |      |              |     |
| -------- | --------- | --- | ---- | ------------ | --- |
|          |           |     | Hình | 2.3: RESTful | API |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 22/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
2.2 Front-end
Có 3 framework hỗ trợ SPA rất hiệu quả, và cũng được người trong giới ưu chuộng: ReactJS, VueJS
và AngularJS. Đối với cổng thông tin, nhóm quyết định sử dụng ReactJS bởi vì những phân tích trong
Bảng 2.1.
Framework Ưu điểm Nhược điểm
• Được ưu chuộng rộng rãi • Mấtnhiềuthờigianđểlàm
bậc nhất quen và thuần thục
• Nhiều thư viện, compo- • Mô hình web cần nhiều kỹ
nents hỗ trợ ... năng xử lý
• Mô hình web, các compo- • Cộng đồng phát triển còn
nents khá đơn giản nhỏ
• API trực quan, các tem- • Khôngcónhiềuthưviệnhỗ
plates dễ sử dụng ... trợ
• Sử dụng Virtual DOM • Định dạng JSX là một
khiến cho hiệu suất nhanh mixing giữa HTML và
hơn so với AngularJS Javascript có thể gây bối
rối cho người mới
• Dễ học, dễ tiếp cận và sử
dụng • Tài liệu hỗ trợ từ nhà phát
triển chưa sâu
• Cộng đồng phát triển khá
đáng kể ...
Bảng 2.1: Bảng phân tích ưu nhược điểm các framework
Bên cạnh đó, hệ thống cũng sử dụng Redux là một thư viện đắc lực trong việc quản lý trạng thái
của ứng dụng.
Sau đây chúng ta sẽ đi vào cụ thể chi tiết về ReactJS và Redux.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 23/160

|         | Trường  | Đại  | học    | Bách Khoa | Tp.Hồ | Chí  | Minh |     |     |
| ------- | ------- | ---- | ------ | --------- | ----- | ---- | ---- | --- | --- |
|         | Khoa    | Khoa | Học và | Kỹ Thuật  | Máy   | Tính |      |     |     |
| 2.2.1   | ReactJS |      |        |           |       |      |      |     |     |
| 2.2.1.1 | ReactJS |      | là gì? |           |       |      |      |     |     |
ReactJS (hay React, React.js) là một thư viện Javascript mã nguồn mở hỗ trợ xây dựng các thành
phầngiaodiệnnhanhgọnvàtiệnlợi.BìnhthườngcáclậptrìnhviênsẽnhúngjavascriptvàocodeHTML
thông qua các attribute như AngularJS nhưng với Reactjs làm việc như một thư viện cho phép nhúng
HTML vào javascript thông qua JSX. Qua đó chúng ta có thể dễ dàng lồng các đoạn HTML vào
| trong JSX | làm   | cho các | component | dễ      | hiểu    | và dễ | sử dụng | hơn.          |       |
| --------- | ----- | ------- | --------- | ------- | ------- | ----- | ------- | ------------- | ----- |
|           |       |         | Hình      | 2.4:    | ReactJS | - thư | viện do | Facebook phát | triển |
| 2.2.1.2   | Thành | phần    | cơ        | bản của | ReactJS |       |         |               |       |
Thành phần cơ bản của React được gọi là Component. Nói một cách đơn giản Component là một
thực thể độc lập, các component thường không phụ thuộc lẫn nhau để có thể tái sử dụng. Nó mô tả một
phầngiaodiệncủaứngdụngvàmỗicomponentsẽthựchiệncácnhiệmvụriêngmàkhôngcầnquantâm
| nó ảnh | hưởng | tới các | thành | phần khác | như  | nào.   |         |               |     |
| ------ | ----- | ------- | ----- | --------- | ---- | ------ | ------- | ------------- | --- |
|        |       |         |       | Hình      | 2.5: | Sự kết | hợp của | các component |     |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 24/160

|     | Trường    | Đại học | Bách  | Khoa Tp.Hồ | Chí  | Minh |     |     |
| --- | --------- | ------- | ----- | ---------- | ---- | ---- | --- | --- |
|     | Khoa Khoa | Học     | và Kỹ | Thuật Máy  | Tính |      |     |     |
Cũng vì lí do đó, lợi thế của ReactJS đến từ việc các component này có thể được tái sử dụng hoặc sử
| dụng kết | hợp với nhau | để  | tạo nên một | giao | diện | hoàn chỉnh. |     |     |
| -------- | ------------ | --- | ----------- | ---- | ---- | ----------- | --- | --- |
Với ReactJS, việc chỉnh sửa, quản lý, nâng cấp, bảo trì, mở rộng giao diện, hệ thống giờ đây được
giải quyết rất gọn. Bởi nó là hệ thống các component ghép lại với nhau nhưng hoạt động tách biệt và rõ
ràng.
Trong một chương trình thì có rất nhiều các component, để đơn giản việc quản lý các component đó,
người ta sử dụng redux, redux giống như 1 nhà kho chứa các component và khi dùng component
| nào thì | chỉ cần gọi | nó ra. |               |      |      |                     |                  |      |
| ------- | ----------- | ------ | ------------- | ---- | ---- | ------------------- | ---------------- | ---- |
|         | Hình        | 2.6:   | Chỉ các thành | phần | khác | biệt mới được React | cập nhật lên DOM | thực |
Virtual DOM không được tạo ra bởi ReactJS nhưng lại được sử dụng rất nhiều. Đây là một chuẩn
của W3C được dùng để truy xuất code HTML hoặc XML. Các Virtual DOM sẽ được tạo ra khi chạy
chương trình, đó là nơi chưa các component. Sử dụng DOM sẽ tiết kiệm được hiệu suất làm việc, khi
có thay đổi gì ReactJS đều tính toán trước và việc còn lại chỉ là thực hiện chúng lên DOM ảo. Sau
khi so sánh với DOM của trình duyệt, nó sẽ chỉ cập nhật điểm thay đổi này lên DOM của trình duyệt.
(Hình 2.6)
| 2.2.1.3 | Các kiến | thức, | khái niệm | sâu | hơn | trong ReactJS |     |     |
| ------- | -------- | ----- | --------- | --- | --- | ------------- | --- | --- |
•
Props
Props (tênđầyđủlàproperties)làkiểuđưadữliệuvàocomponentđầutiên.Props đượcchuyểnđến
component tương tự như cách một đối số được chuyển đến một hàm. Thực chất trong component
cũngcóthểcópropsmặcđịnh,dođónếucomponentkhôngtruyềnvàopropsnàothìnóvẫnsẽđược
thiếtlập.TómlạiProps cóthểđượctruyềntừcomponentchahoặclàcủachínhnó(defaultProps)
•
State
Cũng giống như props, state lưu trữ thông tin cho component. Chỉ khác là state thuộc sở hữu của
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 25/160

| Trường | Đại  | học Bách | Khoa     | Tp.Hồ | Chí   | Minh         |              |
| ------ | ---- | -------- | -------- | ----- | ----- | ------------ | ------------ |
| Khoa   | Khoa | Học và   | Kỹ Thuật | Máy   | Tính  |              |              |
|        |      | Hình     | 2.7:     | Một   | ví dụ | về quá trình | truyền props |
component, là thành phần của component, trong khi props lại được truyền từ bên ngoài vào. Khi
truyền state của component cha cho component con thì state này lại là props cho component con.
|             |                 | Hình | 2.8:  | Quá trình | truyền | dữ liệu        | vào một component |
| ----------- | --------------- | ---- | ----- | --------- | ------ | -------------- | ----------------- |
| • Phân loại | component       |      |       |           |        |                |                   |
| Để phân     | loại component, |      | chúng | ta thường |        | có 2 cách phân | loại chính:       |
- Theo kiểu component: Function component (Hàm) và class component (Lớp)
Tùythuộcvàomụcđíchsửdụngcomponentmàchúngtalựachọnkhaibáokiểuphùhợp.Với
class component (Hình ??), component có thể có state và áp dụng được lifecycle method cho
component,cònvớifunction component (Hình2.9b)thìcomponenthoàntoànkhôngcóstate,
| dữ liệu | chỉ | được truyền | vào | thông | qua | tham số hàm. |     |
| ------- | --- | ----------- | --- | ----- | --- | ------------ | --- |
- Theo state: Stateful Component (có chứa state) và Stateless component (không chứa state)
Mô hình trong react là theo hướng stateless component: giảm thiểu các stateful component
màcầnkếthợpcácstatelesscomponentlạivớinhau.Thôngthườngthìchỉcórootcomponent
trong cấu trúc dạng tree mới chứa state và truyền nó xuống các component con.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 26/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
(b) Component hàm
(a) Component lớp
• Render một component
Không giống như những element DOM của trình duyệt, React element là những “đối tượng đơn
giản” (plain object) và rất dễ để tạo ra. React DOM giữ vai trò cập nhật DOM để phù hợp với các
React element.
Các element này có thể biểu diễn bằng các DOM tags hoặc bằng chính các component do người
dùng định nghĩa.
KhiReactthấymộtelementlàmộtcomponentdongườidùngđịnhnghĩa,nósẽtruyềndữliệutheo
kiểu props dưới dạng object vào element này. Cụ thể theo ví dụ dưới đây:
Hình 2.10: Ví dụ về render một component
Trong ví dụ này, hãy cùng xem những gì đã diễn ra
1. ChúngtagọiReactDOM.render() với<Hellogreeting="Hello"firstName="Peter"/>element.
2. React gọi đến Hello component với {greeting: ’Hello’, firstName: ’Peter’ } là props.
3. Hello component của chúng ta trả về kết quả là <div>Hello Peter</div> element.
4. React DOM sẽ cập nhật DOM để hiển thị <div>Hello Peter</div>.
• Sử dụng kết hợp các component với nhau
Do tính chất đã đề cập ở trên, chúng ta có thể sử dụng kết hợp các component với nhau rất nhịp
nhàng. Tùy thuộc vào nhu cầu sử dụng, việc gộp (Hình 2.11) và tách (Hình 2.12) các component
thành lớn hay nhỏ sẽ giúp ích rất nhiều cho quá trình phát triển, cũng như cập nhật, bảo trì, nâng
cấp.
• Lifecycle (Vòng đời) Mỗi 1 component trong react có 1 vòng đời (lifecycle) của riêng nó. Vòng
đời component có 3 giai đoạn: mounting, updating, unmounting.
1. Mounting
Mounting là giai đoạn kết xuất JSX vào DOM, các hàm sau trong component sẽ tự chạy
theothứtự(nếucó):constructor(),componentWillMount(),render(),componentDidMount().
constructor() là hàm được chạy trước tiên , khi khởi tạo component. Đây là nơi chúng ta
dùng để gán các giá trị ban đầu cho state. Hàm constructor() có props là tham số. Trong
constructor, chúng ta phải có dùng lệnh super(props) để chạy constructor của React.
componentWillMount() là hàm được gọi nếu component được render lần đầu tiên. Thế
nênởtronghàmnàychúngtasẽchưatươngtácđượcvớiDOMbằngcáchàmnhưsetState().
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 27/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
Hình 2.11: Tạo component App với nhiều lần render component Welcome
render() trong component luôn được gọi khi mouting, trong hàm này chúng ta cho hiển thị
JSX vào DOM.
componentDidMount()trongcomponent–nếucó–cũngsẽđượcchạytựđộng1lầntrong
lifecycle, sau khi component được render xong.
2. Updating
Làgiaiđoạncomponentđanghoạtđộngvảprops/statecủanóbịthayđổi.Khiđổiprops/state,
3 hàm sau sẽ tuần tự chạy nếu có khai báo trong component: shouldComponentUpdate()
, render() , componentDidUpdate().
shouldComponentUpdate() là hàm chạy trước tiên khi có thay đổi props/state. Hàm này
mặcđịnhtrảvềtrue,chúngtacóthểtrảvềfalsenếukhôngmuốnchạy2hàmphíasau(render
và componentDidUpdate)
render() hàm này đã được chạy khi mount, nhưng khi có thay đổi props/state, nó sẽ tự chạy
lại, nhờ đó, các thay đổi sẽ tự động có kết quả trên trang web.
componentDidUpdate() là hàm chạy tự động sau cùng, sau hàm render khi có đổi
props/state.
3. Unmounting
Là lúc mà component được xoá khỏi DOM, kết thúc lifecycle của component, lúc này hàm
componentWillUnmount() sẽ tự động chạy nếu có định nghĩa trong component.
componentWillUnmount()sẽthựchiệntạiđâycácquátrìnhdọndẹpcầnthiếtnhưvôhiệu
bộ đếm thời gian, hủy yêu cầu network hoặc các đăng ký trong ComponentDidMount().
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 28/160

|     | Trường | Đại học     | Bách Khoa | Tp.Hồ | Chí Minh |     |
| --- | ------ | ----------- | --------- | ----- | -------- | --- |
|     | Khoa   | Khoa Học và | Kỹ Thuật  | Máy   | Tính     |     |
(b) Tạo component Avatar
| (a)   | Component | Comment    | khó thay | đổi do    | có nhiều           |                   |
| ----- | --------- | ---------- | -------- | --------- | ------------------ | ----------------- |
| thành | phần lồng | vào trong  |          |           |                    |                   |
|       |           |            |          | (c) Lồng  | Avatar vào Comment |                   |
|       |           | Hình 2.12: | Tách     | component | Avatar trong       | component Comment |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 29/160

|         | Trường    | Đại học | Bách Khoa | Tp.Hồ | Chí Minh             |
| ------- | --------- | ------- | --------- | ----- | -------------------- |
|         | Khoa Khoa | Học và  | Kỹ Thuật  | Máy   | Tính                 |
| 2.2.2   | Redux     |         |           |       |                      |
| 2.2.2.1 | Redux là  | gì?     |           |       |                      |
|         |           |         |           | Hình  | 2.13: Logo của Redux |
Redux (hay Redux js) là một thư viện Javascript giúp tạo ra thành một lớp quản lý trạng thái của
ứng dụng.
Redux được xây dựng dựa trên nền tảng tư tưởng của ngôn ngữ Elm và kiến trúc Flux do Facebook
giới thiệu.
Người trong nghề đánh giá React và Redux như một cặp bài trùng. Bởi Redux đánh vào đúng vấn
đề khó khăn nhất của React: quản lý trạng thái của component khi cứ gọi từ lớp này sang lớp khác, từ
| component | này sang | component | khác. |     |     |
| --------- | -------- | --------- | ----- | --- | --- |
Hình 2.14: Có Redux, trạng thái (state) của các component được quản lý chặt chẽ hơn rất nhiều
Cách Redux hoạt động rất đơn giản. Có một "store"trung tâm (Hình 2.14) chứa toàn bộ trạng thái
của ứng dụng. Mỗi thành phần có thể truy cập trạng thái được lưu trữ mà không phải gửi từ thành
| phần này | sang thành  | phần khác.     |        |     |           |
| -------- | ----------- | -------------- | ------ | --- | --------- |
| Có       | ba phần xây | dựng: actions, | store, | and | reducers. |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 30/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
Actions
Nói một cách đơn giản, action là sự kiện. Chúng là cách duy nhất chúng ta có thể gửi dữ liệu từ ứng
dụng của mình đến "store"Redux. Dữ liệu có thể là từ các tương tác của người dùng, các lệnh gọi API
hoặc là gửi form.
Các hành động được gửi bằng phương thức store.dispatch(). Các hành động là các đối tượng
JavaScriptđơngiảnvàchúngphảicóthuộctínhloạiđểchỉraloạihànhđộngsẽđượcthựchiện.Họcũng
phải cómột "payload"cóchứathông tincần được xửlý bằnghành động.Hànhđộng được tạothông qua
Action Creator.
(b) Ví dụ về Action Creator
(a) Ví dụ về action đăng nhập
Hình 2.15: Actions trong Redux
Reducers
Reducers là các hàm thuần túy lấy trạng thái hiện tại của ứng dụng, thực hiện một hành động và
trả về trạng thái mới. Các trạng thái này được lưu trữ dưới dạng đối tượng và chúng xác định trạng thái
của ứng dụng thay đổi như thế nào để đáp ứng với hành động được gửi đến "store".
Nó dựa trên hàm "reduce"trong JavaScript, trong đó một giá trị được tính từ nhiều giá trị sau khi
thực hiện chức năng gọi lại.
Store
Các"store"giữtrạngtháiứngdụng.Chỉcómột"store"trongbấtkỳứngdụngReduxnào.chúngtacó
thể truy cập trạng thái được lưu trữ, cập nhật trạng thái và đăng ký hoặc hủy đăng ký "listeners"thông
qua các phương thức trợ giúp.
Hình 2.16: Tạo store cho việc đăng nhập
2.2.2.2 Data-flow
Kiến trúc của Redux xoay quanh một luồng dữ liệu đơn hướng. Vậy nên tất cả dữ liệu sẽ tuân theo
một vòng đời (lifecycle) để logic và dễ kiểm soát hơn:
Ví dụ, một ứng dụng Todo list, chúng ta cần đẩy dữ liệu như "Read the Redux docs"hay "Marry like
article id(42)"vào.
1. Gọi store.dispatch(action).
2. Store gọi các hàm reducer đã viết từ trước. Store sẽ gửi 2 tham số tới reducer: state hiện tại và
action.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 31/160

|     | Trường    | Đại | học Bách | Khoa     | Tp.Hồ | Chí  | Minh |     |
| --- | --------- | --- | -------- | -------- | ----- | ---- | ---- | --- |
|     | Khoa Khoa | Học | và       | Kỹ Thuật | Máy   | Tính |      |     |
3. Reducer gốc (root) có thể kết hợp output của nhiều reducers thành một cây state (single state
tree).
4. Redux store lưu lại toàn bộ state tree được trả về bởi root reducer. State tree mới này sẽ là trạng
| thái | mới của | ứng dụng. |     |     |     |     |     |     |
| ---- | ------- | --------- | --- | --- | --- | --- | --- | --- |
Mỗi một listener được đăng ký với store.subscribe(listener) sẽ được gọi; Listenter có thể gọi
| store.getState() |     | để  | lấy trạng | thái | hiện | tại. |     |     |
| ---------------- | --- | --- | --------- | ---- | ---- | ---- | --- | --- |
Lúc này, UI đã có thể cập nhật trạng thái mới. Nếu như kết hợp với React, đây là lúc compo-
| nent.setState(newState) |         |      |       | được gọi. |          |            |                 |       |
| ----------------------- | ------- | ---- | ----- | --------- | -------- | ---------- | --------------- | ----- |
|                         |         |      | Hình  | 2.17:     | Cấu      | trúc hướng | điều kiển trong | Redux |
| 2.2.3                   | Kết hợp | giữa | React |           | và Redux |            |                 |       |
Sau khi Redux trả về một store có chứa state, React sẽ đón bằng Provider và Container.
1. Provider
Providerlàmộtcomponentthuộcthưviệnreact-redux,nócónhiệmvụnhậntấtcảdữliệutừstore
| và  | cung cấp | cho ứng | dụng. |     |     |     |     |     |
| --- | -------- | ------- | ----- | --- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 32/160

| Trường | Đại học     | Bách Khoa | Tp.Hồ | Chí Minh |     |
| ------ | ----------- | --------- | ----- | -------- | --- |
| Khoa   | Khoa Học và | Kỹ Thuật  | Máy   | Tính     |     |
2. Hàm connect
connect là hàm thuộc thư viện react-redux, nó cho phép chúng ta kết nối bất kỳ component nào
| đến trung tâm | của mọi | dữ liệu. |          |               |                     |
| ------------- | ------- | -------- | -------- | ------------- | ------------------- |
|               | Hình    | 2.18:    | Minh họa | quá trình map | dữ liệu của connect |
Bên cạnh đó nó còn có một số tính năng khác đi kèm, như giúp debug dễ hơn với Redux DevTools
cho phép kiểm tra mỗi khi state thay đổi, time-travel debug cho phép roll back lại state trước đó.
|     | Hình | 2.19: | Cách connect | một component | với Redux store |
| --- | ---- | ----- | ------------ | ------------- | --------------- |
BảnthâncomponentAvatarkhôngcógìkhácbiệtvớicomponentkhác,nósẽnhậnprops vàrender
ra như bình thường, hàm connect sẽ map state ở trong Redux store về thành props.
2.3 Back-end
Phần back-end của nhóm là sự kết hợp giữa NodeJS và ExpressJS - một sự kết hợp là lựa chọn phổ
biến của rất nhiều doanh nghiệp, tập đoàn lớn trên thế giới (Facebook, Google, Microsoft, ...)
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 33/160

| Trường    | Đại học | Bách Khoa   | Tp.Hồ | Chí    | Minh         |
| --------- | ------- | ----------- | ----- | ------ | ------------ |
| Khoa Khoa | Học     | và Kỹ Thuật | Máy   | Tính   |              |
|           |         | Hình        | 2.20: | NodeJS | và ExpressJS |
2.3.1 NodeJS
| 2.3.1.1 NodeJS | là gì? |     |     |     |     |
| -------------- | ------ | --- | --- | --- | --- |
Nodejs được xây dựng và phát triển từ năm 2009, bảo trợ bởi công ty Joyent, trụ sở tại California,
Hoa Kỳ.
Là một nền tảng (Platform) phát triển độc lập được xây dựng ở trên Javascript Runtime của Chrome
nên chúng ta có thể xây dựng được các ứng dụng mạng một cách nhanh chóng và dễ dàng mở rộng. Sử
dụng kỹ thuật điều khển theo sự kiện, nhập/xuất không đồng bộ để tối thiểu tổng chi phí và tối đại khả
năng mở rộng. NodeJS bao gồm có V8 JavaScript engine của Google, libUV, và vài thư viện khác.
|     |     | Hình 2.21: | Các | thành phần | nổi bật của NodeJS |
| --- | --- | ---------- | --- | ---------- | ------------------ |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 34/160

|         | Trường | Đại     | học Bách | Khoa         | Tp.Hồ | Chí  | Minh            |     |     |
| ------- | ------ | ------- | -------- | ------------ | ----- | ---- | --------------- | --- | --- |
|         | Khoa   | Khoa    | Học và   | Kỹ Thuật     | Máy   | Tính |                 |     |     |
| 2.3.1.2 | Lợi    | thế của | NodeJS:  | Non-blocking |       |      | và Asynchronous |     |     |
Trong một môi trường server điển hình LAMP (Linux-Apache-MySQL-PHP), chúng ta có một web
server là Apache hoặc NGINX nằm dưới, cùng với PHP chạy trên nó. Mỗi một kết nối tới server sẽ sinh
ra một thread mới, và điều này khiến ứng dụng nhanh chóng trở nên chậm chạp hoặc quá tải - cách
duy nhất để hỗ trợ nhiều người dùng hơn là bằng cách bổ sung thêm nhiều máy chủ. Đây là bất lợi của
| blocking: | tốc | độ xử | lí thấp và | khả năng | mở        | rộng | kém        |              |                 |
| --------- | --- | ----- | ---------- | -------- | --------- | ---- | ---------- | ------------ | --------------- |
|           |     | Hình  | 2.22: So   | sánh     | thời gian | thực | thi 2 file | của blocking | và non-blocking |
Ngược lại, với NodeJS, không có một máy chủ Apache lắng nghe các kết nối tới và trả về mã trạng
| thái HTTP, | chúng | ta  | sẽ phải tự | quản | lý kiến | trúc | lõi của máy | chủ đó. |     |
| ---------- | ----- | --- | ---------- | ---- | ------- | ---- | ----------- | ------- | --- |
JavaScript là một ngôn ngữ dựa trên sự kiện, vì vậy bất cứ thứ gì xảy ra trên server đều tạo ra một
sự kiện non-blocking. Mỗi kết nối mới sinh ra một sự kiện; dữ liệu nhận được từ một upload form sinh
ra một sự kiện data-received; việc truy vấn dữ liệu từ database cũng sinh ra một sự kiện. Trong thực
tế, điều này có nghĩa là một trang web Node.js sẽ chẳng bao giờ bị khóa (lock up) và có thể hỗ trợ cho
hàng chục nghìn user truy cập cùng lúc. Node.js đóng vai trò của server - Apache - và thông dịch mã
| ứng dụng | chạy | trên | nó. |     |     |     |     |     |     |
| -------- | ---- | ---- | --- | --- | --- | --- | --- | --- | --- |
Một khái niệm cốt lõi của Node.js đó là các function bất đồng bộ (asynchronous func-
tions). Do đó, tất cả chạy như các block thread thông thường thay vì chạy nền. Với hầu hết các ngôn
ngữ kịch bản máy chủ, chương trình phải đợi mỗi function thực thi xong trước khi có thể tiếp tục chạy
tiếp. Với Node.js, chúng ta xác định các function sẽ chạy để hoàn thành một tác vụ nào đó, trong khi
| phần còn | lại của | ứng | dụng vẫn | chạy  | đồng thời. |       |           |         |            |
| -------- | ------- | --- | -------- | ----- | ---------- | ----- | --------- | ------- | ---------- |
|          |         |     | Hình     | 2.23: | So sánh    | và mô | tả về bất | đồng bộ | của NodeJS |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 35/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
2.3.1.3 Ưu điểm - Nhược điểm
1. Ưu điểm
• IO hướng sự kiện không đồng bộ giúp xử lý nhiều yêu cầu đồng thời.
• Đáp ứng được những yêu cầu về thời gian thực.
• Có tốc độ cực rất nhanh, đáp ứng được nhu cầu sử dụng của khách truy cập ‘khổng lồ’ trong
thời gian ngắn.
• Sử dụng JavaScript, một ngôn ngữ lập trình rất dễ học.
• Chia sẻ cùng một đoạn mã với cả phía máy chủ và máy khách.
• Npm và các module rất mạnh mẽ và vẫn đang tiếp tục phát triển.
• Có một cộng đồng lớn mạnh, có nhiều mã được chia sẻ qua github
• Tương thích với nhiều thiết bị, nhiều hệ điều hành như MacOS, Window, Linux,...
2. Nhược điểm
• Mỗi lần sử dụng lệnh gọi lại sẽ kết thúc với rất nhiều lệnh gọi lại lồng vào nhau.
• Nếu không hiểu rõ về JavaScript, chúng ta sẽ gặp khó khăn với NodeJS.
• NodeJS không phù hợp với các tác vụ đòi hỏi nhiều CPU mà chỉ phù hợp với những I/O như
máy chủ web.
• Nếu chúng ta có một web hosting dùng chung, sẽ rất khó khăn nếu chúng ta tải lên một ứng
dụng NodeJS. VPS và Dedicated server là một sự lựa chọn tốt hơn nhiều.
2.3.2 ExpressJS
2.3.2.1 ExpressJS là gì?
Hình 2.24: ExpressJS là gì mà lại phổ biến đến vậy?
ExpressJS là một framework ứng dụng web có mã nguồn mở và miễn phí được xây dựng trên nền
tảng Node.js. ExpressJS được sử dụng để thiết kế và phát triển các ứng dụng web một cách nhanh
chóng. Để hiểu ExpressJS, người dùng chỉ cần phải biết JavaScript, do đó nên việc xây dựng các ứng
dụng web và API trở nên đơn giản hơn đối với các lập trình viên và nhà phát triển đã thành thạo
JavaScript trước đó.
Vì ExpressJS là một framework của Node.js nên hầu hết các mã đã được viết sẵn cho các lập trình viên
làm việc. Chúng ta có thể tạo các ứng dụng web cho một trang, nhiều trang hoặc kết hợp lại bằng cách
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 36/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
sử dụng ExpressJS. Framework này khá nhẹ, giúp tổ chức các ứng dụng web ở phía máy chủ thành một
kiến trúc MVC hoàn hảo hơn.
ExpressJS sẽ giúp Chúng ta tổ chức kiến trúc back-end của mình. Ở đó, ExpressJS đóng vai trò như
một “bộ não đằng sau một trang web”. Một vài trường hợp sử dụng của ExpressJS:
- Sử dụng cookie trên một trang web
- Triển khai xác thực
- Thêm thanh tìm kiếm vào một trang web
- Cung cấp các tệp tĩnh như hình ảnh
Hình 2.25: ExpressJS có mặt trong cả hai công nghệ phát triển web app phổ biến: MERN và MEAN
Tổng hợp một số chức năng chính của Express như:
- Cho phép thiết lập các lớp trung gian để trả về các HTTP request.
- ĐịnhnghĩaroutingcóthểđượcsửdụngvớicáchànhđộngkhácnhaudựatrênphươngthứcHTTP
và URL.
- Cho phép trả về các trang HTML dựa vào các tham số truyền vào đến template.
- Express hỗ trợ việc phát triển ứng dụng theo mô hình MVC, mô hình phổ biến cho việc lập trình
web hiện nay.
- Hỗ trợ REST API.
2.3.2.2 Cài đặt
Cài đặt ExpressJS trong thư mục ứng dụng NodeJS thông qua câu lệnh:
> npm install express --save
Lệnh trên sẽ lưu phần cài đặt trong thư mục node_modules và tạo thư mục express ngay bên trong
thư mục đó. Dưới đây là những module quan trọng được cài đặt cùng với express:
- body-parser: Đây là một lớp trung gian của Node.js có chức năng xử lý JSON, dữ liệu thô, text
và mã hóa URL.
> npm install body-parser --save
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 37/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
- cookie-parser: Dùng để chuyển đổi header của Cookie và phân bố đến các req.cookies.
> npm install cookie-parser --save
- multer:ĐâycũngmộtthànhphầntrunggiancótrongNode.jsdùngđểxửlýphầnmultipart/form-
data.
> npm install multer --save
2.3.2.3 Cấu trúc
Hình 2.26: Cấu trúc của ExpressJS
Như hình 2.26, cấu trúc của ExpressJS gồm:
- Root.
- app.js chứa các thông tin về cấu hình, khai báo, các định nghĩa,... để ứng dụng có thể chạy.
- package.json chứa các package cho ứng dụng chạy
- Folder routes: chứa các route có trong ứng dụng.
- Folder view: chứa view/template cho ứng dụng.
- Folder public chứa các file thư viện css, js, images,... cho ứng dụng.
2.3.2.4 Định tuyến (Route) trong ExpressJS
Route là một Object, có chức năng là bộ định tuyến để định danh ra các URL và hành động kèm
theo. Router hoạt động như một middleware nên chúng ta có thể dùng nó như một arguments. Hoặc
dùng nó như một arguments cho route khác.
Để sử dụng Route, chúng ta theo cú pháp sau:
app.method(path, handler)
Trong đó:
• app: biến mà khi chúng ta khởi tạo express framework.
• method: một trong các dạng HTTP method sau: get, post, put, delete, head, path.
• path: thành phần phía sau domain mà muốn xác định.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 38/160

| Trường | Đại học  | Bách Khoa   | Tp.Hồ | Chí  | Minh |
| ------ | -------- | ----------- | ----- | ---- | ---- |
| Khoa   | Khoa Học | và Kỹ Thuật | Máy   | Tính |      |
• handle là hành động sẽ thực thi khi danh path được gọi. handle ở đây là callback function. Với
req là biến chứa tất cả các thông số request mà người dùng gửi lên và res là biến chứa tất cả các
| thông số | mà server trả | về cho client. |       |           |                     |
| -------- | ------------- | -------------- | ----- | --------- | ------------------- |
|          |               | Hình           | 2.27: | Quá trình | xử lý của ExpressJS |
2.4 Database
Có nhiều loại hình cấu trúc cơ sở dữ liệu hiện nay, có thể kể một số điển hình như:
• Database dạng file: Đây là dạng dữ liệu được lưu trữ dưới dạng các file. Database dạng file
thường được sử dụng nhất là *.mdb Foxpro, một số định dạng file khác là text, ascii, *.dbf.
• Database quan hệ: Đây là dạng dữ liệu (thực thể) khác nhau được lưu trữ trong các bảng dữ
liệu. Giữa các thực thể này có mối liên hệ với nhau gọi là các quan hệ với nhau. Các hệ quản trị
hỗ trợ database quan hệ nổi tiếng có thể kể đến: MS SQL server, Oracle, MySQL...
• Database phi quan hệ: Sử dụng nhiều mô hình dữ liệu để truy cập và quản lý dữ liệu. Các loại
cơ sở dữ liệu này được tối ưu hóa dành riêng cho các ứng dụng yêu cầu mô hình dữ liệu linh hoạt
có lượng dữ liệu lớn và độ trễ thấp, có thể đạt được bằng cách giảm bớt một số hạn chế về tính
nhất quán của dữ liệu của các cơ sở dữ liệu khác. Nổi tiếng và phổ biến có MongoDB.
• Database hướng đối tượng: Đây là dạng dữ liệu cũng được lưu trữ trong các bảng dữ liệu. Điều
khác biệt là các bảng có bổ sung thêm các tính năng hướng đối tượng như lưu trữ thêm các hành
vi, nhằm thể hiện hành vi của đối tượng. Mỗi bảng xem như một lớp dữ liệu. Một dòng dữ liệu
trong bảng là một đối tượng. Các hệ quản trị có hỗ trợ database hướng đối tượng như: MS SQL
| server, Oracle, | Postgres | SQL |     |     |     |
| --------------- | -------- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 39/160

|     | Trường | Đại      | học Bách | Khoa     | Tp.Hồ | Chí  | Minh |     |     |     |
| --- | ------ | -------- | -------- | -------- | ----- | ---- | ---- | --- | --- | --- |
|     | Khoa   | Khoa Học | và       | Kỹ Thuật | Máy   | Tính |      |     |     |     |
• Database bán cấu trúc: Đây là dạng dữ liệu được lưu dưới định dạng XML, các thông tin mô
tả dữ liệu, đối tượng được trình bày trong các thẻ tag. Với ưu điểm lưu trữ được hầu hết các loại
dữ liệu khác nhau, database bán cấu trúc là hướng mới trong nghiên cứu và ứng dụng về cơ sở dữ
liệu.
Trong đó, ở hình thức web app, hai dạng quan hệ (SQL) và phi quan hệ (NoSQL) được sử dụng rộng
rãi nhất. Mỗi loại đều có ưu nhược điểm riêng về các mảng. Cụ thể được đề cập trong phần so sánh
|       |         | Hình | 2.28: | Điểm  | khác biệt | trong | tổ chức | dữ liệu của | 2 dạng database |     |
| ----- | ------- | ---- | ----- | ----- | --------- | ----- | ------- | ----------- | --------------- | --- |
| 2.4.1 | So sánh | SQL  | và    | NoSQL |           |       |         |             |                 |     |
| Mảng  |         | SQL  |       |       |           |       |         | NoSQL       |                 |     |
Định nghĩa Cơ sở dữ liệu SQL chủ yếu được gọi là CơsởdữliệuNoSQLchủyếuđược
RDBMS hoặc Cơ sở dữ liệu quan hệ gọilàcơsởdữliệukhôngliênquan
|     |     |     |     |     |     |     |     | hoặc | phân tán |     |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | --- |
Đối tượng RDBMStruyềnthốngsửdụngcúpháp HệthốngcơsởdữliệuNoSQLbaogồm
và truy vấn SQL để phân tích và lấy nhiều loại công nghệ cơ sở dữ liệu khác
dữ liệu để có thêm thông tin chi tiết. nhau. Các cơ sở dữ liệu này được phát
Chúng được sử dụng cho các hệ thống triển để đáp ứng nhu cầu trình bày cho
|     |     | OLAP. |     |     |     |     |     | sự phát | triển của ứng dụng | hiện đại. |
| --- | --- | ----- | --- | --- | --- | --- | --- | ------- | ------------------ | --------- |
Ngôn ngữ Structured query language (SQL) Không có ngôn ngữ query
Query
Kiểu SQLdatabaseslàcơsởdữliệudựatrên NoSQL databases có thể dựa trên tài
|     |     | bảng |     |     |     |     |     | liệu,cặpkhóa-giátrị,cơsởdữliệubiểu |     |     |
| --- | --- | ---- | --- | --- | --- | --- | --- | ---------------------------------- | --- | --- |
đồ
Schema SQLdatabasescólượcđồđượcxácđịnh NoSQLdatabasessửdụnglượcđồđộng
|     |     | trước |     |     |     |     |     | cho dữ | liệu phi cấu trúc. |     |
| --- | --- | ----- | --- | --- | --- | --- | --- | ------ | ------------------ | --- |
Khả năng SQL databases có thể mở rộng theo NoSQL databases có thể mở rộng theo
| mở  | rộng | chiều | dọc |     |     |     |     | chiều | ngang |     |
| --- | ---- | ----- | --- | --- | --- | --- | --- | ----- | ----- | --- |
Ví dụ Oracle, Postgres, and MS-SQL. MongoDB, Redis, , Neo4j, Cassandra,
Hbase.
Phù hợp cho Đây là 1 lựa chọn lý tưởng cho môi Không phù hợp với truy vấn phức tạp
|     |     | trường | truy | vấn phức | tạp |     |     |     |     |     |
| --- | --- | ------ | ---- | -------- | --- | --- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 40/160

|     | Trường | Đại học  | Bách Khoa   | Tp.Hồ Chí | Minh |     |     |     |
| --- | ------ | -------- | ----------- | --------- | ---- | --- | --- | --- |
|     | Khoa   | Khoa Học | và Kỹ Thuật | Máy Tính  |      |     |     |     |
Lưu trữ dữ SQL databases không thích hợp cho Phù hợp hơn cho kho lưu trữ dữ liệu
liệuphâncấp việc lưu trữ dữ liệu phân cấp. phân cấp vì nó hỗ trợ phương thức cặp
|     |     |     |     |     |     | khóa-giá | trị. |     |
| --- | --- | --- | --- | --- | --- | -------- | ---- | --- |
Variations Một loại có biến thể nhỏ Nhiều loại khác nhau bao gồm các kho
|     |     |     |     |     |     | khóa-giá   | trị, cơ sở dữ | liệu tài liệu và cơ |
| --- | --- | --- | --- | --- | --- | ---------- | ------------- | ------------------- |
|     |     |     |     |     |     | sở dữ liệu | đồ thị.       |                     |
Năm phát Nóđượcpháttriểnvàonhữngnăm1970 Được phát triển vào cuối những năm
triển để giải quyết các vấn đề với lưu trữ tệp 2000 để khắc phục các vấn đề và hạn
|             |     | phẳng  |             |          |        | chế của     | SQL databases. |     |
| ----------- | --- | ------ | ----------- | -------- | ------ | ----------- | -------------- | --- |
| Open-source |     | Một sự | kết hợp của | mã nguồn | mở như | Open-source |                |     |
Postgres&MySQL,vàthươngmạinhư
|     |     | Oracle | Database. |     |     |     |     |     |
| --- | --- | ------ | --------- | --- | --- | --- | --- | --- |
Tính nhất Nóphảiđượccấuhìnhchosựnhấtquán Nó phụ thuộc vào DBMS như một số
| quán |     | chặt chẽ. |     |     |     | cung cấp | tính nhất quán  | mạnh mẽ như |
| ---- | --- | --------- | --- | --- | --- | -------- | --------------- | ----------- |
|      |     |           |     |     |     | MongoDB, | trong khi những | người khác  |
cungcấpchỉcungcấpsựnhấtquáncuối
|     |     |     |     |     |     | cùng, như | Cassandra. |     |
| --- | --- | --- | --- | --- | --- | --------- | ---------- | --- |
Lựa chọn tốt RDBMSdatabaselàtùychọnthíchhợp NoSQL được sử dụng tốt nhất để giải
để giải quyết các vấn đề về ACID. quyết các vấn đề về tính khả dụng của
|     |     |     |     |     |     | dữ liệu |     |     |
| --- | --- | --- | --- | --- | --- | ------- | --- | --- |
Tầm quan Nó nên được sử dụng khi hiệu lực dữ Sử dụng khi nó quan trọng hơn để có
trọng liệu là siêu quan trọng dữ liệu nhanh hơn dữ liệu chính xác
Lựa chọn tốt Khi bạn cần hỗ trợ truy vấn động Sử dụng khi bạn cần mở rộng quy mô
| nhất |     |     |     |     |     | dựa trên | yêu cầu thay | đổi |
| ---- | --- | --- | --- | --- | --- | -------- | ------------ | --- |
Hardware Specialized DB hardware (Oracle Exa- Commodity hardware
|     |     | data, etc.) |     |     |     |     |     |     |
| --- | --- | ----------- | --- | --- | --- | --- | --- | --- |
Network Highly available network (Infiniband, Commodity network (Ethernet, etc.)
|     |     | Fabric Path, | etc.) |     |     |     |     |     |
| --- | --- | ------------ | ----- | --- | --- | --- | --- | --- |
Loại lưu trữ Highly Available Storage (SAN, RAID, Commodity drives storage (standard
|     |     | etc.) |     |     |     | HDDs, | JBOD) |     |
| --- | --- | ----- | --- | --- | --- | ----- | ----- | --- |
Tính năng Hỗ trợ đa nền tảng, Bảo mật và miễn Dễ sử dụng, hiệu suất cao và công cụ
| tốt | nhất | phí |     |     |     | linh hoạt. |     |     |
| --- | ---- | --- | --- | --- | --- | ---------- | --- | --- |
Mô hình ACID(Atomicity,nhấtquán,cáchlyvà Cơ bản (Về cơ bản có sẵn, trạng thái
ACID và độ bền) là một chuẩn cho RDBMS mềm, phù hợp cuối cùng) là một mô
| BASE |     |     |     |     |     | hình của | nhiều hệ thống | NoSQL |
| ---- | --- | --- | --- | --- | --- | -------- | -------------- | ----- |
Hiệu năng SQL hoạt động tốt và nhanh thì việc Nhanh hơn SQL NoSQL thì denormal-
desgintốtlàcựckìquantrọngvàngược izedchophépbạnlấyđượctấtcảthông
|     |     | lại. |     |     |     | tin về một | item cụ thể | với các codition |
| --- | --- | ---- | --- | --- | --- | ---------- | ----------- | ---------------- |
màkhôngcầnJOINliênquanhoặctruy
|     |     |     |     |     |     | vấn SQL | phức tạp. |     |
| --- | --- | --- | --- | --- | --- | ------- | --------- | --- |
Kết luận Dựánđãcóyêucầudữliệurõràngxác Phù hợp với những dự án yêu cầu dữ
địnhquanhệlogiccóthểđượcxácđịnh liệukhôngliênquan,khóxácđịnh,đơn
|     |     | trước. |     |     |     | giản mềm | dẻo khi đang | phát triển |
| --- | --- | ------ | --- | --- | --- | -------- | ------------ | ---------- |
Từ những so sánh trên, với đề tài là "Tích hợp quy trình quản lý cán bộ vào cổng thông tin", cần một
cơ sở dữ liệu khả năng lưu trữ lớn, có ràng buộc giữa các bảng với nhau. Ngoài ra, cũng cần một dạng
cơ sở dữ liệu hướng đối tượng, ở đây là các dòng data của một cán bộ trong các quá trình, ... Đồng thời
đảm bảo tính bảo mật về mặt dữ liệu. Vậy nên, trong đề tài này, nhóm quyết định sử dụng Oracle -
một hệ quản trị cơ sở dữ liệu vừa đáp ứng tính SQL, vừa đáp ứng được tính hướng đối tượng.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 41/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
2.4.2 Oracle Database
2.4.2.1 Oracle là gì?
Oracle là một hệ quản trị cơ sở dữ liệu quan hệ đa mô hình. Đây là một trong những lựa chọn hàng
đầu giúp doanh nghiệp xử lý linh hoạt và đưa ra những giải pháp tối ưu cho việc quản lý thông tin và
ứng dụng.
Ban đầu, Oracle với tên đầy đủ Oracle Systems Corporation, là công ty đầu tiên thương mại hóa nền
tảng hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) và trở thành nhà cung cấp cơ sở dữ liệu hàng đầu thế
giới. Đến năm 1995, Oracle Systems Corporation đổi thành Oracle Corporation và thường được gọi với
tên Oracle.
Hình 2.29: Oracle Database
Giống như các phần mềm khác, Oracle được xây dựng dựa trên SQL, một ngôn ngữ lập trình được
tiêu chuẩn hóa cho các nhà quản trị cơ sở dữ liệu, nhà phân tích dữ liệu và các chuyên gia về dữ liệu sử
dụng quản lý và truy vấn dữ liệu được lưu trữ.
2.4.2.2 Kiến trúc
Cụ thể, mô hình kiến trúc 3 lớp của Oracle là:
1. File systems: Chứa các tập tin dữ liệu mà đã được lưu trữ ở các khu vực đĩa cứng của các máy
chủ (hoặc một máy chủ).
Một số loại tập tin có trong OracleDB bao gồm:
• Init file (tập tin khởi đầu): chứa thông tin tên, vị trí, tham số của tập tin.
• Control file (tập tin điều khiển): chứa ngày - giờ, vị trí tạo CSDL.
• Database file (tập tin cơ sở dữ liệu): chứa dữ liệu thật sự của CSDL.
• Redo log file (tập tin lặp lại các thao tác): chứa những hành động như thêm, sửa, hủy của
người lập trình.
2. Background processes: Nhiệm vụ của lớp xử lý bên dưới là đảm bảo sự trùng khớp giữa chi tiết
hiển thị trong bộ nhớ với Oracle Database. Lớp này gồm 2 phần:
• Database writer: đọc và ghi những dòng dữ liệu có sự thay đổi khi dữ liệu này trên vùng
đệm bị đầy và giải phóng nó.
• Log writer: Những thông tin xảy ra trong khi thực thi giao tác thì sẽ được ghi nhận xuống
tập tin log giúp đảm bảo an toàn hơn cho dữ liệu.
3. Memory: hay System Global Area giúp tăng tốc độ xử lý của Oracle bằng việc lưu trữ dữ liệu
trên nhiều thành phần khác nhau. Cụ thể, các vùng đệm tiêu biểu bao gồm:
• Dictionary Cache: lưu trữ thông tin chung thường dùng.
• Database buffer cache: vùng đệm lưu trữ cơ sở dữ liệu.
• SQL Area: vùng đệm lưu trữ lệnh SQL.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 42/160

|         | Trường | Đại  | học    | Bách   | Khoa Tp.Hồ | Chí      | Minh |     |     |
| ------- | ------ | ---- | ------ | ------ | ---------- | -------- | ---- | --- | --- |
|         | Khoa   | Khoa | Học và | Kỹ     | Thuật      | Máy Tính |      |     |     |
| 2.4.3   | Các    | tính | năng   | hỗ trợ |            |          |      |     |     |
| 1. Tính | khả    | dụng |        |        |            |          |      |     |     |
Để hỗ trợ cho tính khả dụng của cơ sở dữ liệu, Oracle cung cấp tính năng Oracle Data Guard. Khi
sử dụng các tính năng này, cơ sở dữ liệu dự phòng thứ cấp được duy trì như một bản sao của cơ sở
dữ liệu chính và có thể sử dụng các lựa chọn thay thế trong quá trình chuyển đổi dự phòng.
| 2. Bảo | mật |     |     |     |     |     |     |     |     |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Tính năng Oracle Advanced Security cung cấp giải pháp bảo vệ thông tin nhạy cảm tại nguồn là
TDE(mãhóadữliệuthờigianthực)vàDataRedaction(chegiấudữliệu).Giảiphápnàychophép
mãhóadữliệutạinguồnvàđăngxuất.Ngoàira,Oraclecònpháttriểnthêmmộtsốtínhnăngbảo
| mật    | khác | để bảo | vệ quyền | lợi | cho người | dùng. |     |     |     |
| ------ | ---- | ------ | -------- | --- | --------- | ----- | --- | --- | --- |
| 3. Khả | năng | mở     | rộng     |     |           |       |     |     |     |
OracleRAClàđiểnhìnhchokhảnăngmởrộngcủaOracle,cungcấpkhảnăngnhưdichuyểnphiên
bản, thực hiện nâng cấp, truy trì tính liên tục của ứng dụng và quản lý chất lượng dịch vụ.
| 4. Hiệu | suất |     |     |     |     |     |     |     |     |
| ------- | ---- | --- | --- | --- | --- | --- | --- | --- | --- |
Oracle cung cấp các giải pháp nâng cao hiệu suất như Oracle Advanced Compression, Oracle
Database In- Memory,....nhằm tối ưu hiệu suất hoạt động của hệ thống ở mức tốt nhất.
| 5. Oracle | Analytics |      |      |              |     |        |           |      |     |
| --------- | --------- | ---- | ---- | ------------ | --- | ------ | --------- | ---- | --- |
| Ở         | các tính  | năng | phân | tích, Oracle | đưa | ra các | giải pháp | sau: |     |
•
OLAP (Oracle Analytics Processing) là triển khai của Oracle được sử dụng để phân tích dữ
|     | liệu | bằng | các thuận | toán | phức | tạp. |     |     |     |
| --- | ---- | ---- | --------- | ---- | ---- | ---- | --- | --- | --- |
• Oracle Advanced Analytics giúp người dùng xác định mô hình kinh doanh dự án bằng cách
|         | thực | hiện   | các khai | thác | dữ liệu | và văn | bản, tính toán | dữ liệu thống | kê. |
| ------- | ---- | ------ | -------- | ---- | ------- | ------ | -------------- | ------------- | --- |
| 6. Quản | lý   | Oracle |          |      |         |        |                |               |     |
Oracle Multitenant là một giải pháp được phát triển để quản lý các cơ sở dữ liệu với kiến trúc hợp
nhất của một cơ sở dữ liệu vùng chứa duy nhất và nhiều cơ sở dữ liệu được gắn thêm.
| 2.4.4 | Ưu   | điểm | - Nhược | điểm |     |     |     |     |     |
| ----- | ---- | ---- | ------- | ---- | --- | --- | --- | --- | --- |
| 1. Ưu | điểm |      |         |      |     |     |     |     |     |
•
Xác thực đối tượng cơ sở dữ liệu tự động: Sự chính xác của các chế độ và trình kích
hoạt đều được tích hợp sẵn. Điều này giúp giảm thiểu rủi ro khi sử dụng phần mềm bị trục
|     | trặc | và dễ | dàng chỉnh | sửa | khi gặp | vấn | đề. |     |     |
| --- | ---- | ----- | ---------- | --- | ------- | --- | --- | --- | --- |
•
Mô hình về khả năng lập trình phong phú: Oracle không chỉ hỗ trợ SQL phong phú mà
còn hỗ trợ cả PL/ SQL, sử dụng các công cụ dòng lệnh tốt giúp quản lý các thay đổi dễ dàng
|     | và mang | lại | hiệu quả | cao. |     |     |     |     |     |
| --- | ------- | --- | -------- | ---- | --- | --- | --- | --- | --- |
•
Khả năng lưu trữ dữ liệu mạnh mẽ: Hoạt động tốt với khả năng lưu trữ nền và cả đám
mây, cung cấp chức năng quản lý chế độ xem tự động hóa, chuỗi bảng, kiểu dữ liệu và SQL
|     | nâng | cao | dưới dạng | hàm | Windowing. |     |     |     |     |
| --- | ---- | --- | --------- | --- | ---------- | --- | --- | --- | --- |
•
An toàn bảo mật: Một trong những đặc điểm lớn nhất trong việc lựa chọn cơ sở dữ liệu
Oracle là tính năng bảo mật mà nó cung cấp, khả năng bảo mật thông tin của Oracle được
|          | đánh | giá cao | hơn | so với | các đối | thủ. |     |     |     |
| -------- | ---- | ------- | --- | ------ | ------- | ---- | --- | --- | --- |
| 2. Nhược | điểm |         |     |        |         |      |     |     |     |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 43/160

| Trường    | Đại học Bách | Khoa Tp.Hồ   | Chí Minh |
| --------- | ------------ | ------------ | -------- |
| Khoa Khoa | Học và       | Kỹ Thuật Máy | Tính     |
• Không có nhiều cú pháp được sử dụng trong PL/ SQL, dễ thay đổi khi làm việc bằng các
| ngôn ngữ | khác. |     |     |
| -------- | ----- | --- | --- |
•
Các lớp đào tạo không được đánh giá cao về độ hiệu quả, những hướng dẫn trái ngược với các
| nhu cầu | tìm hiểu và | sử dụng của | người dùng. |
| ------- | ----------- | ----------- | ----------- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 44/160

| Chương | 3    |          |
| ------ | ---- | -------- |
| PHÂN   | TÍCH | HỆ THỐNG |
Trong phần này, nhóm sẽ trình bày một cách trực quan tất cả nghiệp vụ, thao tác nhóm đã thu
thập, khảo sát thực tế phòng TCCB và các cán bộ của trường Đại học Khoa học Xã hội và Nhân văn,
ĐHQG-HCM. Từ đó, phân tích các yêu cầu của hệ thống để đáp ứng quy trình nghiệp vụ ấy.

|     | Trường | Đại  | học | Bách Khoa   | Tp.Hồ | Chí      | Minh |     |     |
| --- | ------ | ---- | --- | ----------- | ----- | -------- | ---- | --- | --- |
|     | Khoa   | Khoa | Học | và Kỹ Thuật |       | Máy Tính |      |     |     |
| 3.1 | Phân   | tích | yêu | cầu         | hệ    | thống    |      |     |     |
Nhóm sẽ trình bày các thao tác lần lượt từ khi một cán bộ ký mới hợp đồng cho tới khi cán bộ ấy
thôicôngtáctạitrường.Trongđósẽtrìnhbàycáchtổchứcdữliệucũngnhưthiếtkếcáctínhnăngtheo
| quy trình | thao | tác.  |     |            |     |     |     |     |     |
| --------- | ---- | ----- | --- | ---------- | --- | --- | --- | --- | --- |
| 3.1.1     | Phân | quyền |     | người dùng |     |     |     |     |     |
Dựa vào những yêu cầu thực tế của hệ thống cũng như khảo sát thực tế các cá nhân sẽ sử dụng hệ
| thống. | nhóm | đưa ra | hai vai | trò chủ | yếu là: |     |     |     |     |
| ------ | ---- | ------ | ------- | ------- | ------- | --- | --- | --- | --- |
• Cán bộ đang công tác tại trường Đại học Khoa học Xã hội và Nhân văn.
•
| Cán   | bộ, | chuyên | viên | thuộc phòng | Tổ  | chức | Cán bộ. |     |     |
| ----- | --- | ------ | ---- | ----------- | --- | ---- | ------- | --- | --- |
| 3.1.2 | Hợp | đồng   | lao  | động        |     |      |         |     |     |
Khi có một cán bộ mới ký hợp đồng, hoặc một cán bộ cũ ký hợp đồng mới, phòng TCCB sẽ tạo mới
| hợp đồng | và  | nhập các | vùng | thông tin: |       |     |     |     |     |
| -------- | --- | -------- | ---- | ---------- | ----- | --- | --- | --- | --- |
| • Bên    | A:  | Bên sử   | dụng | người lao  | động. |     |     |     |     |
Chỉ có 2 người có thẩm quyền ký: hiệu trưởng và trưởng phòng Tổ chức Cán bộ.
| • Bên | B:  | Người | lao động. |     |     |     |     |     |     |
| ----- | --- | ----- | --------- | --- | --- | --- | --- | --- | --- |
Nhập lý lịch cá nhân của cán bộ và thông tin hợp đồng tại lúc ký kết (theo các điều khoản trong
| mẫu   | hợp  | đồng) |     |       |     |     |     |     |     |
| ----- | ---- | ----- | --- | ----- | --- | --- | --- | --- | --- |
| • Các | điều | khoản | hợp | đồng. |     |     |     |     |     |
Nhập các trường thông tin như loại hợp đồng, đơn vị công tác, thời gian ký kết và tái ký, ngạch và
| hệ  | số, bậc | lương.  |     |      |      |        |           |         |        |
| --- | ------- | ------- | --- | ---- | ---- | ------ | --------- | ------- | ------ |
|     |         |         |     | Hình | 3.1: | Tạo mã | thẻ/email | mới cho | cán bộ |
| Đối | với cán | bộ mới: |     |      |      |        |           |         |        |
•
Khi chọn đơn vị và ngạch chức danh nghề nghiệp, cán bộ sẽ được cấp một mã thẻ cán bộ tự động.
| Mã  | thẻ | ấy sẽ là | riêng | biệt giữa | các cán | bộ trong |     | toàn trường. |     |
| --- | --- | -------- | ----- | --------- | ------- | -------- | --- | ------------ | --- |
•
Tạo mới cán bộ ấy trong bảng cán bộ (thông tin trong phần lý lịch đã nhập).
•
| Tạo | mới | hợp đồng | cho | cán bộ | ấy. |     |     |     |     |
| --- | --- | -------- | --- | ------ | --- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 46/160

|     | Trường    | Đại học | Bách Khoa   | Tp.Hồ | Chí  | Minh |     |
| --- | --------- | ------- | ----------- | ----- | ---- | ---- | --- |
|     | Khoa Khoa | Học     | và Kỹ Thuật | Máy   | Tính |      |     |
• Riêng về email, cán bộ ký hợp đồng (bên A) sẽ chọn email bất kỳ và phòng TCCB khi nhập hợp
đồng sẽ nhập vào trường email. Email được cho là hợp lệ nếu như nó không trùng với cán bộ nào
trong trường. Sau đó Tổ Công nghệ Thông tin của trường sẽ xác nhận và tạo email đó cho cán bộ
mới.
|     |            |            | Hình | 3.2: | Quá trình | ký  | hợp đồng lao động |
| --- | ---------- | ---------- | ---- | ---- | --------- | --- | ----------------- |
| Đối | với cán bộ | cũ ký mới: |      |      |           |     |                   |
• Hệ thống sẽ lấy dữ liệu cán bộ hiện tại, nếu có thay đổi phòng TCCB sẽ cập nhật lại các trường
| dữ    | liệu đấy |          |           |         |      |     |            |
| ----- | -------- | -------- | --------- | ------- | ---- | --- | ---------- |
| • Cập | nhật dữ  | liệu cán | bộ và tạo | mới hợp | đồng | cho | cán bộ ấy. |
Khi cập nhật dữ liệu hợp đồng, nếu là hợp đồng gần nhất của cán bộ sẽ cập nhật dữ liệu cán bộ
theo dữ liệu hợp đồng đó. Cán bộ sẽ thấy được thông tin về hợp đồng của mình tại trang hồ sơ cán
| nhân của | cán bộ. Và | dĩ nhiên | họ sẽ không |     | được chỉnh | sửa | vùng này. |
| -------- | ---------- | -------- | ----------- | --- | ---------- | --- | --------- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 47/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
Sau khi nhập và lưu hoàn tất hợp đồng, hệ thống phải có chức năng in ra hợp đồng theo mẫu đã
cung cấp để ký trực tiếp với cán bộ, giảm thiểu thời gian nhập liệu cũng như kiểm chứng thông tin.
Trong quá trình nhập liệu, các vùng như thời gian ký, thời gian kết thúc, các điều khoản của hợp
đồng cũng nên được tự động dò. Các dữ liệu về ngạch chức danh nghề nghiệp (giảng viên, chuyên viên,
...)haybậclương,hệsốlươngcũngphảiđảmbảođầyđủvàcókhảnăngcậpnhậtthayđổichophùhợp.
Tương tự là các vùng dữ liệu về quốc tịch, dân tộc, tôn giáo, ... hay cả địa chỉ đều yêu cầu các bảng dữ
liệu cũng như các trang web để thể hiện trực quan dữ liệu và cho phép phòng TCCB tạo mới, chỉnh sửa
hay xóa đi chúng.
Yêu cầu về một trang danh sách tổng hợp tất cả các hợp đồng lao động đã ký cũng phải được tích
hợp tính năng lọc, tìm kiếm theo các trường dữ liệu và trích xuất chúng dưới dạng danh sách bảng tính.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 48/160

|       | Trường    | Đại học | Bách  | Khoa Tp.Hồ | Chí  | Minh  |       |     |
| ----- | --------- | ------- | ----- | ---------- | ---- | ----- | ----- | --- |
|       | Khoa Khoa | Học     | và Kỹ | Thuật Máy  | Tính |       |       |     |
| 3.1.3 | Hợp đồng  | Đơn     | vị    | trả lương  | -    | Trách | nhiệm |     |
Hợp đồng Đơn vị trả lương - Trách nhiệm là loại hợp đồng ký ngắn hạn, ký với cán bộ quốc tịch
không ở Việt Nam hoặc cán bộ thỉnh giảng, có chức năng tạm thời. Quy trình vẫn tương tự quy trình
| của Hợp | đồng lao | động. |      |              |     |          |                      |       |
| ------- | -------- | ----- | ---- | ------------ | --- | -------- | -------------------- | ----- |
|         |          | Hình  | 3.3: | Quá trình ký | hợp | đồng đơn | vị trả lương - trách | nhiệm |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 49/160

|       | Trường    | Đại học | Bách  | Khoa Tp.Hồ | Chí  | Minh |       |
| ----- | --------- | ------- | ----- | ---------- | ---- | ---- | ----- |
|       | Khoa Khoa | Học     | và Kỹ | Thuật Máy  | Tính |      |       |
| 3.1.4 | Hợp đồng  | làm     | việc  | (hợp       | đồng | viên | chức) |
Tương tự đối với hợp đồng lao động và hợp đồng Đơn vị trả lương, hay hợp đồng Trách nhiệm, hợp
| đồng làm | việc (viên | chức) | cũng có | quy trình | ký mới    | theo | sơ đồ sau.        |
| -------- | ---------- | ----- | ------- | --------- | --------- | ---- | ----------------- |
|          |            |       | Hình    | 3.4:      | Quá trình | ký   | hợp đồng làm việc |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 50/160

|       | Trường | Đại  | học | Bách Khoa   | Tp.Hồ | Chí  | Minh |     |     |
| ----- | ------ | ---- | --- | ----------- | ----- | ---- | ---- | --- | --- |
|       | Khoa   | Khoa | Học | và Kỹ Thuật | Máy   | Tính |      |     |     |
| 3.1.5 | Trang  | quản | lý  | hồ sơ       | cán   | bộ   |      |     |     |
Sau khi ký hợp đồng với trường, tức cán bộ chính thức tham gia vào công tác tại trường. Cán bộ sẽ
đăng nhập bằng email được cấp với đuôi @hcmussh.edu.vn để vào hệ thống. Tại bước xác thực này, hệ
thống sẽ rà soát dữ liệu cán bộ và các quá trình của cán bộ để phân loại cán bộ: cán bộ bình thường,
cán bộ nữ, cán bộ có chức vụ là trưởng các đơn vị, là ban giám hiệu, ... để từ đó có các quyền hạn riêng
| biệt trong | hệ     | thống. |          |     |     |     |     |     |     |
| ---------- | ------ | ------ | -------- | --- | --- | --- | --- | --- | --- |
| Phần hồ    | sơ cán | bộ sẽ  | bao gồm: |     |     |     |     |     |     |
•
| Lý      | lịch    | cá nhân |       |           |         |       |               |                |     |
| ------- | ------- | ------- | ----- | --------- | ------- | ----- | ------------- | -------------- | --- |
| Họ      | và tên, | ngày    | tháng | năm sinh, | nơi     | sinh, | quê quán,     | ngày vào Đảng, | ... |
| • Thông | tin     | người   | thân  |           |         |       |               |                |     |
| Thông   | tin     | về quan | hệ    | gia đình  | của cán | bộ,   | phía chồng/vợ | của cán        | bộ. |
•
| Thông | tin | trình | độ  |     |     |     |     |     |     |
| ----- | --- | ----- | --- | --- | --- | --- | --- | --- | --- |
Trình độ phổ thông, trình độ ngoại ngữ, các quá trình đào tạo cử nhân, thạc sĩ, tiến sĩ, các chứng
| chỉ,    | ... |      |           |          |      |     |              |             |         |
| ------- | --- | ---- | --------- | -------- | ---- | --- | ------------ | ----------- | ------- |
| • Thông | tin | công | tác       |          |      |     |              |             |         |
| Ngày    | vào | công | tác, ngày | vào biên | chế, | hợp | đồng, ngạch, | lương, chức | vụ, ... |
Các trường thông tin trong trang này sẽ có chia làm 2 dạng: tự cập nhật và chỉ đọc (những trường
thông tin chỉ đọc này nếu cán bộ muốn điều chỉnh phải liên hệ và xác thực với Phòng TCCB để giải
quyết). Cụ thể về các trường thông tin nhóm sẽ trình bày trong phần thiết kế hệ thống.
Ngoài ra cán bộ có thể tự in hồ sơ của mình, sau đó trình cho phòng TCCB để có chữ ký và đóng
mộc.
| 3.1.6 | Quản | lý  | danh | sách cán | bộ  |     |     |     |     |
| ----- | ---- | --- | ---- | -------- | --- | --- | --- | --- | --- |
Phòng TCCB có toàn quyền với các thông tin về cán bộ. Trang quản lý danh sách cán bộ sẽ thể hiện
trực quan và tường minh một số trường thông tin dưới dạng bảng. Bộ lọc cho mỗi cột thông tin cũng là
cần thiết. Kèm theo đó là trích xuất dữ liệu nhằm thuận tiện cho phần thống kê.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 51/160

|       | Trường    | Đại học | Bách Khoa   | Tp.Hồ | Chí Minh |
| ----- | --------- | ------- | ----------- | ----- | -------- |
|       | Khoa Khoa | Học     | và Kỹ Thuật | Máy   | Tính     |
| 3.1.7 | Quá trình | chức    | vụ          |       |          |
Trong hệ thống tổ chức của Nhân Văn, chức vụ chính quyền được chia thành 2 loại: chính và kiêm
nhiệm.
|     |     |     |     | Hình | 3.5: Quá trình chức vụ |
| --- | --- | --- | --- | ---- | ---------------------- |
Khi tạo mới hay cập nhật một chức vụ, nếu như chọn đó là chức vụ chính của cán bộ, thì tất cả
những chức vụ còn lại sẽ trở thành chức vụ kiêm nhiệm. Trong trường hợp xóa đi chức vụ chính, chuyên
viên của phòng TCCB sẽ được cảnh báo đã xóa đi chức vụ chính của một cán bộ, và chuyên viên sẽ phải
| chọn chức | vụ khác | của cán | bộ ấy trở | thành | chức vụ chính. |
| --------- | ------- | ------- | --------- | ----- | -------------- |
Mật độ thống kê khá dày và chi tiết cũng yêu cầu hệ thống có khả năng lọc theo các trường và trích
xuất dữ liệu.
| 3.1.8 | Quá trình | làm | việc ngoài |     |     |
| ----- | --------- | --- | ---------- | --- | --- |
Cán bộ của trường rất thường xuyên nhận được lời mời tại các trung tâm, các trường đại học khác
làm thỉnh giảng, hướng dẫn hay tư vấn, ... Yêu cầu có một trang để phòng TCCB kiểm soát quá trình
này.
Về phía cán bộ, họ có thể tự chủ động quản lý quá trình này của bản thân. Nó sẽ phục vụ cho lý lịch
| khoa học | của cán bộ. |     |     |     |     |
| -------- | ----------- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 52/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
3.1.9 Quá trình công tác trong nước
Đây là quá trình có số quyết định, các công văn quy định nên cán bộ chỉ có thể xem thông tin của
quá trình công tác trong nước của mình.
Về mặt thao tác, phòng TCCB sau khi có công văn sẽ nhập vào trang quá trình để quản lý. Tính
năng lọc và trích xuất dữ liệu cũng cần thiết để kiểm soát cũng như thống kê quá trình này.
3.1.10 Quá trình đi nước ngoài
Về mặt hành chính, quá trình đi nước ngoài cũng được cấp mới dưới dạng số công văn quyết định.
Nhưng về mặt quản lý có những thao tác và quy trình chặt chẽ hơn nhiều.
Hình 3.6: Quy trình xử lý đi nước ngoài
Các thao tác chính của quá trình đi nước ngoài:
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 53/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
• Tạo mới quá trình đi nước ngoài.
Nếu như thời gian là dưới 30 ngày được quy định là đi ngắn hạn và không cần làm thủ tục Tiếp
nhận về nước.
• Tiếp nhận về nước.
Hệ thống sẽ tự tính toán dựa trên ngày bắt đầu và ngày kết thúc mà phòng TCCB nhập để xác
định có là đi ngắn hạn hay không. Nếu không phải đi ngắn hạn, khi cán bộ trở lại công tác tại
trường trước thời gian kết thúc, phòng TCCB sẽ nhập số quyết định tiếp nhận về nước cho cán bộ.
• Cập nhật quá hạn.
Nếukhôngphảiđiquáhạn,khihếtthờigiannhưngcánbộchưalàmthủtụcgia hạn đi nước ngoài.
Hệ thống sẽ tự động cập nhật quá trình thành quá hạn, và cán bộ sẽ bị xử lý kỷ luật.
• Trích xuất và lọc dữ liệu.
• Tải lên báo cáo.
Mỗi quá trình đi nước ngoài, cán bộ đều phải nộp báo cáo về quá trình để tránh bị kỷ luật. Vì vậy
cán bộ được phép tải lên báo cáo và phòng TCCB sẽ xét duyệt.
3.1.11 Quá trình khen thưởng
Khen thưởng ở Nhân Văn dành cho 4 loại đối tượng:
• Trường
• Đơn vị.
• Đơn vị thuộc khoa (bộ môn).
• Cá nhân.
Vì lượng lớn dữ liệu, ngoài các tính năng cơ bản, upload dữ liệu theo template excel cũng cần thiết
cho quá trình này.
3.1.12 Quá trình kỷ luật
Hệ thống cũng cần có trang quản lý quá trình kỷ luật của cán bộ với các trường dữ liệu như số quyết
định, ngày ra quyết định, hình thức kỷ luật và nội dung...
3.1.13 Nghỉ thai sản
Đối với các cán bộ nữ, nghỉ thai sản theo quy định của nhà nước cũng cần được quản lý. Cán bộ có
thể quản lý và chịu trách nhiệm về thông tin này của mình. Phòng TCCB sẽ quản lý danh sách.
3.1.14 Nghỉ phép
Tóm tắt phần công thức tính nghỉ phép cho cán bộ như sau:
Số ngày phép còn lại trong năm (A) = 12 + Số thâm niên - Số ngày phép đã sử dụng trong năm.
Tính kể từ thời gian bắt đầu công tác (thâm niên là 0), cứ mỗi 5 năm công tác sẽ tăng 1 thâm niên.
Ở mỗi lý do cụ thể sẽ được giảm đi số ngày tính phép (1). Cụ thể:
• Bản thân kết hôn: 3 ngày.
• Con cái kết hôn: 1 ngày.
• Tứ thân phụ mẫu, vợ chồng, con chết: 3 ngày.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 54/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
Từ công thức tính:
Số ngày xin nghỉ (2) = Kết thúc - Bắt đầu + 1 - Số ngày đặc biệt.
Trong đó ngày đặc biệt bao gồm thứ bảy, chủ nhật, các ngày lễ, và cả ngày nghỉ bù lễ.
Chúng ta có:
Số ngày tính phép (B) = Số ngày xin nghỉ (2) - Số ngày phép theo lý do cụ thể (1).
Vớitấtcảmỗilầnnghỉcủacánbộ,luônphảiđảmbảoB ≤A,tứclàsốngàytínhphéptrongkhoảng
xin nghỉ của cán bộ phải dưới cho phép là số ngày phép cán bộ còn trong năm. Đăng ký được cho là
không hợp lệ khi cán bộ đăng ký nhiều hơn số ngày phép còn lại của mình.
Trong trường hợp nghỉ liên năm (năm kết thúc = năm bắt đầu + 1), cần xử lý tách thành 2
đoạn của năm hiện tại và của năm sau. Sau đó:
• A và B tính như trên.
nămhiệntại nămhiệntại
• Ở năm sau, tính lại thâm niên vào ngày 01/01 để tính A .
nămsau
B = Số ngày xin nghỉ trong năm sau. (Tính từ ngày 01/01 đến ngày kết thúc)
nămsau
ĐốivớitrườnghợpnàyA ≥B vàA ≥B thìlàthõamảnvàđượcphép
nămhiệntại nămhiệntại nămsau nămsau
tạo mới, cập nhật.
Hình 3.7: Quá trình nghỉ phép
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 55/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
3.1.15 Các quá trình chuyên môn cán bộ
3.1.15.1 Sáng kiến
Các sáng kiến được ghi nhận sẽ được cấp số quyết định sáng kiến, và cần có trang để quản lý chúng
nhằm đánh giá cán bộ cuối năm.
3.1.15.2 Nghiên cứu khoa học
Cán bộ quản lý và chịu trách nhiệm về dữ liệu nghiên cứu khoa học của bản thân.
Sau khi nhập các trường dữ liệu, upload minh chứng, hệ thống sẽ lưu và chấp nhận cho cán bộ in nó
trong Lý lịch khoa học.
Phòng TCCB quản lý danh sách và không được thao tác gì.
3.1.15.3 Bằng phát minh
Tương tự với nghiên cứu khoa học.
3.1.15.4 Hướng dẫn luận văn, khoa học
Tương tự với nghiên cứu khoa học.
3.1.15.5 Giải thưởng
Các giải thưởng cá nhân (Không thuộc công tác giáo dục) cũng được tự cán bộ quản lý. Thêm vào
đó phòng TCCB cũng có thể thao tác.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 56/160

|        | Trường | Đại   | học | Bách Khoa   | Tp.Hồ     | Chí  | Minh |     |
| ------ | ------ | ----- | --- | ----------- | --------- | ---- | ---- | --- |
|        | Khoa   | Khoa  | Học | và Kỹ Thuật | Máy       | Tính |      |     |
| 3.1.16 | Quá    | trình | đào | tạo,        | bồi dưỡng |      |      |     |
Có thể mô tả quá trình đào tạo, bồi dưỡng của cán bộ như sau: Phần đào tạo, bồi dưỡng của cán bộ
|     |     |     |     | Hình | 3.8: | Quá trình | đào | tạo, bồi dưỡng |
| --- | --- | --- | --- | ---- | ---- | --------- | --- | -------------- |
bao gồm các loại văn bằng, bằng, chứng nhận, chứng chỉ đã đề cập trên hình. Phòng TCCB sẽ quản lý
| tất cả những |     | thông | tin này | và toàn | quyền | thao tác. |     |     |
| ------------ | --- | ----- | ------- | ------- | ----- | --------- | --- | --- |
Về phần cán bộ, cán bộ có thể truy cập những thông tin này tại phần thông tin cán bộ hoặc quá
trình đào tạo, bồi dưỡng của họ. Tuy nhiên, nếu có nhu cầu về tạo mới, cập nhật hay xóa, họ sẽ tạo yêu
| cầu và | gửi yêu | cầu đó | cho | Phòng TCCB. |     |     |     |     |
| ------ | ------- | ------ | --- | ----------- | --- | --- | --- | --- |
Trong trường hợp các loại trình độ là Cử nhân, Kỹ sư, Thạc sĩ, Tiến sĩ, hệ thống sẽ cập nhật học vị
| của cán | bộ theo | trình | độ cao | nhất. |     |     |     |     |
| ------- | ------- | ----- | ------ | ----- | --- | --- | --- | --- |
Và đối với các chứng chỉ tin học, lý luận chính trị, quản lý nhà nước, cán bộ khi in hồ sơ cán bộ sẽ
mặc định lấy quá trình đào tạo loại chứng chỉ ấy gần nhất với thời gian bấm in.
| 3.1.17 | Quá | trình | học | tập, | công | tác |     |     |
| ------ | --- | ----- | --- | ---- | ---- | --- | --- | --- |
Phần tiểu sử học tập, tiểu sử công tác của cán bộ được tự quản lý và chịu trách nhiệm trong phần
| thông tin | cán | bộ và | phòng | TCCB cũng | toàn | quyền | với các | thông tin này. |
| --------- | --- | ----- | ----- | --------- | ---- | ----- | ------- | -------------- |
| 3.1.18    | Quá | trình | kéo   | dài       | công | tác   |         |                |
Cán bộ là giảng viên với trình độ chuyên môn là tiến sĩ trở lên khi sắp nghỉ hưu sẽ được chọn lựa ở
lại trường công tác hay không. Nếu có, phòng TCCB sẽ ra quyết định Kéo dài công tác cho danh sách
cán bộ sẽ ở lại trường công tác nếu có thời gian nghỉ hưu trong năm đang xét. Tuổi nghỉ hưu của cán
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 57/160

|     | Trường |      | Đại học | Bách | Khoa     | Tp.Hồ | Chí  | Minh |     |
| --- | ------ | ---- | ------- | ---- | -------- | ----- | ---- | ---- | --- |
|     | Khoa   | Khoa | Học     | và   | Kỹ Thuật | Máy   | Tính |      |     |
bộ được tính theo nghị định 135CP-2020 (Phụ lục 1). Để trình bày một cách khái quát, độ tuổi nghỉ
| hưu của | cán   | bộ sẽ  | phụ thuộc | vào    | các   | yếu tố: |     |     |     |
| ------- | ----- | ------ | --------- | ------ | ----- | ------- | --- | --- | --- |
| • Ngày  | sinh. |        |           |        |       |         |     |     |     |
| • Giới  | tính. |        |           |        |       |         |     |     |     |
| • Trình | độ    | chuyên | môn       | - chức | danh. |         |     |     |     |
Xét 1 năm bất kỳ (không nhỏ hơn năm hiện tại), hệ thống sẽ hiện ra danh sách cán bộ sẽ nghỉ hưu
trong năm xét. Sau đó, cán bộ sẽ nhận được thông báo về việc chấp nhận kéo dài công tác hay nghỉ hưu
| theo đúng | kế  | hoạch. |     |     |     |     |     |     |     |
| --------- | --- | ------ | --- | --- | --- | --- | --- | --- | --- |
Sau khi chốt danh sách kéo dài công tác và danh sách nghỉ hưu, phòng TCCB sẽ nhập quyết định
| kéo dài  | công   | tác và | quyết       | định | nghỉ     | hưu cho | năm    | đang xét.         |       |
| -------- | ------ | ------ | ----------- | ---- | -------- | ------- | ------ | ----------------- | ----- |
| Các      | cán bộ | trong  | danh        | sách | nghỉ     | hưu sẽ  | được   | lưu vào dạng nghỉ | việc. |
| 3.1.19   | Nghỉ   | việc   |             |      |          |         |        |                   |       |
| Các      | lý do  | nghỉ   | việc, ngừng |      | công tác | tại     | trường | được quy định     | là:   |
| • Theo   | quyết  | định   | ngừng       | hợp  | đồng     | lao     | động   | với trường.       |       |
| • Nghỉ   | hưu.   |        |             |      |          |         |        |                   |       |
| • Chuyển |        | công   | tác.        |      |          |         |        |                   |       |
Phòng TCCB sẽ toàn quyền thao tác. Cán bộ đã nghỉ việc sẽ không được truy cập vào hệ thống nữa.
| 3.1.20   | Các | phần |     | hỗ trợ    | cho | Phòng |     | TCCB |     |
| -------- | --- | ---- | --- | --------- | --- | ----- | --- | ---- | --- |
| 3.1.20.1 | Yêu | cầu  | hỗ  | trợ thông |     | tin   |     |      |     |
Cán bộ có nhu cầu thay đổi thông tin trong thông tin cá nhân của bản thân sẽ tạo yêu cầu tạo mới,
| cập nhật, | xóa | sau đó | gửi | cho phòng | TCCB. |     |     |     |     |
| --------- | --- | ------ | --- | --------- | ----- | --- | --- | --- | --- |
Phòng TCCB xem thay đổi và duyệt yêu cầu hay từ chối nó. Nếu từ chối phải phản hồi cho cán bộ
| biết vì  | sao yêu   | cầu | của họ | bị từ | chối. |     |     |     |     |
| -------- | --------- | --- | ------ | ----- | ----- | --- | --- | --- | --- |
| 3.1.20.2 | Dashboard |     |        | phòng | TCCB  |     |     |     |     |
Đóng vai trò quan trọng trong quản lý và vận hành trường, phòng TCCB có nhiều cuộc họp và báo
cáo. Nhằm thuận tiện cho phòng, hệ thống cũng phải có phần Dashboard thể hiện các thống kê dưới
| dạng biểu | đồ  | trực quan. |     |     |     |     |     |     |     |
| --------- | --- | ---------- | --- | --- | --- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 58/160

| Chương | 4     |       |
| ------ | ----- | ----- |
| THIẾT  | KẾ HỆ | THỐNG |
Trongchươngnày,nhómsẽtrìnhbàycácthiếtkếcủahệthống:thiếtkếcácluồngvàchứcnăng,cũng
| như cơ sở dữ liệu. |     |     |
| ------------------ | --- | --- |

|     | Trường | Đại  | học | Bách Khoa   | Tp.Hồ | Chí Minh |     |
| --- | ------ | ---- | --- | ----------- | ----- | -------- | --- |
|     | Khoa   | Khoa | Học | và Kỹ Thuật | Máy   | Tính     |     |
| 4.1 | Tổng   | quan |     | kiến trúc   | thiết | kế       |     |
Kiến trúc của hệ thống dựa trên mô hình MVC với 3 phần: model, view, controller. Ngoài ra còn có
một lớp Redux được tách biệt để quản lý các function với state dễ dàng hơn, tối ưu hệ thống hơn.
Bởi vì hệ thống hướng đến 2 loại đối tượng, có một mục config để kiểm tra các permission, từ đó
| phân chia | menu  | cho  | đúng  | loại đối tượng. |            |            |       |
| --------- | ----- | ---- | ----- | --------------- | ---------- | ---------- | ----- |
| 4.2       | Thiết | kế   | luồng | đăng            | nhập       | và phân    | quyền |
| 4.2.1     | Đăng  | nhập |       |                 |            |            |       |
|           |       |      |       | Hình            | 4.1: Luồng | xử lý đăng | nhập  |
Mỗiquátrìnhđượcthiếtkếtrêngiaodiệnlàmộtmenu,mỗimenuđềucólistpermissioncủanó.Nếu
như cán bộ đăng nhập vào có permission thuộc menu nào thì sẽ thấy được menu ấy.
| 4.2.2 | Phân | quyền, |     | phân vai | trò |     |     |
| ----- | ---- | ------ | --- | -------- | --- | --- | --- |
Về cơ bản, cán bộ bình thường sẽ chỉ có quyền xem hoặc quản lý các vùng thông tin trong phạm vi
cho phép (như đã phân tích ở chương III). Phía các chuyên viên phòng TCCB, cũng là cán bộ và được
cungcấpthêmcácquyền.Hệthốngđãcótrangtạoracác"vaitrò"(roles),dựatrêndanhsáchemailcủa
các chuyên viên, cán bộ thuộc phòng TCCB, cần có một trang để phân vai trò cho họ cũng như các vai
| trò khác | về sau | này. |     |     |     |     |     |
| -------- | ------ | ---- | --- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 60/160

|         | Trường    | Đại học  | Bách Khoa | Tp.Hồ | Chí Minh  |            |
| ------- | --------- | -------- | --------- | ----- | --------- | ---------- |
|         | Khoa Khoa | Học và   | Kỹ Thuật  | Máy   | Tính      |            |
| 4.2.3   | Thiết kế  | các chức | năng      | cho   | đối tượng | người dùng |
| 4.2.3.1 | Cán bộ    |          |           |       |           |            |
Do các thao tác của cán bộ sau khi đăng nhập vào hệ thống bao gồm nhiều quá trình, và mỗi quá
trình có các thao tác chung và riêng với nhau, nhóm sẽ trình bày usecase một các tổng thể những hoạt
| động của | cán bộ. |     |      |              |           |            |
| -------- | ------- | --- | ---- | ------------ | --------- | ---------- |
|          |         |     | Hình | 4.2: Usecase | tổng quan | của cán bộ |
Sau khi đăng nhập vào, hệ thống sẽ mặc định hướng cán bộ vào mục trang cá nhân, tại đó có các
menu để phân chia các trang để thao tác với dữ liệu của cán bộ ấy. Cụ thể:
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 61/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
• Thông tin cán bộ.
Mục này được thiết kế dựa trên mẫu Hồ sơ cán bộ BNV-2C. Các phần lớn được chia như sau:
– Thông tin cá nhân:
Các trường thông tin như họ, tên, giới tính, địa chỉ, ...
– Quan hệ gia đình cán bộ:
Danh sách thành viên gia đình phía bên cán bộ và phía bên gia đình chồng, vợ của cán bộ.
Các trường thông tin như họ và tên, năm sinh, nơi ở và nghề nghiệp.
– Thông tin công tác:
Các trường thông tin về công tác tại trường của cán bộ: ngày bắt đầu công tác, chức vụ, hợp
đồng, thông tin về lương.
– Thông tin quá trình học tập, công tác:
Tóm tắt tiểu sử học tập, tiểu sử công tác của cán bộ.
– Thông tin trình độ:
Các trường thông tin về quá trình đào tạo cử nhân, thạc sĩ, tiến sĩ, chức danh, hay các chứng
chỉ, chứng nhận.
• Công tác trong nước:
Xem các lần đi công tác trong nước của bản thân.
• Đi nước ngoài:
Xem các lần đi nước ngoài của bản thân. Thêm vào đó, sau khi kết thúc đi nước ngoài, cán bộ sẽ
phải upload báo cáo lên và được phòng TCCB duyệt thì mới được xem là hoàn thành.
• Đăng ký nghỉ phép:
Gửi đăng ký nghỉ phép cho phòng TCCB và xem các lần nghỉ phép của bản thân.
• Khen thưởng:
Xem danh sách khen thưởng của bản thân.
• Kỷ luật:
Xem danh sách kỷ luật của bản thân.
• Đào tạo, bồi dưỡng:
Xem danh sách quá trình đào tạo, bồi dưỡng của bản thân. Gửi yêu cầu đăng ký nghỉ phép cho
phòng TCCB.
• Sáng kiến:
Xem danh sách các sáng kiến đã được ban hành quyết định của bản thân.
• Thông báo:
Xem danh sách thông báo của bản thân.
• Danh sách nhân sự đơn vị:
Nếu cán bộ có các chức vụ quản lý đơn vị, cán bộ sẽ có quyền xem danh sách nhân sự của đơn vị
mà mình quản lý. Riêng trưởng phòng TCCB sẽ xem được các thao tác gần nhất của chuyên viên,
cán bộ phòng trong hệ thống quản lý cán bộ.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 62/160

|         | Trường | Đại  | học      | Bách Khoa | Tp.Hồ   | Chí Minh  |                |
| ------- | ------ | ---- | -------- | --------- | ------- | --------- | -------------- |
|         | Khoa   | Khoa | Học và   | Kỹ Thuật  | Máy     | Tính      |                |
| 4.2.3.2 | Phòng  | Tổ   | chức Cán | bộ        |         |           |                |
|         |        |      |          | Hình 4.3: | Usecase | tổng quan | của phòng TCCB |
Phòng TCCB toàn quyền thao tác: đọc, tạo, xóa, sửa các quá trình sẽ được liệt kê sau đây. Ngoài ra
các giao diện của quá trình có tích hợp tìm kiếm, lọc nâng cao theo các trường dữ liệu và trích xuất dữ
liệu dưới dạng bảng tính. Và một vài thao tác, chức năng riêng biệt trong từng danh sách, quá trình:
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 63/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
• Danh sách cán bộ:
Quản lý danh sách thông tin cán bộ, các cột của danh sách này được phòng TCCB yêu cầu. Ngoài
ra phải có chức năng thống kê theo tháng.
• Quản lý trang thông tin cán bộ:
Toàn quyền với thông tin của cán bộ.
• Quá trình chức vụ.
• Hợp đồng lao động, đơn vị trả lương, trách nhiệm, làm việc:
Bốn loại hợp đồng này đều phải xuất hợp đồng dưới file docx.
• Quá trình công tác trong nước.
• Quá trình đi nước ngoài:
Tải về báo cáo mà cán bộ đã upload, xem xét và phản hồi hợp lệ hay không (kèm lý do) cho cán
bộ thực hiện lại việc nộp báo cáo hợp lệ. Ngoài ra còn phần thống kê số lượng quá trình đi nước
ngoài theo bộ lọc.
• Quá trình khen thưởng:
Import dữ liệu từ file template.
• Quá trình kỷ luật.
• Quá trình sáng kiến:
Import dữ liệu từ file template.
• Quá trình nghiên cứu khoa học: Chỉ xem và trích xuất.
• Danh sách bằng phát minh: Chỉ xem và trích xuất.
• Danh sách bài viết khoa học: Chỉ xem và trích xuất.
• Danh sách hướng dẫn đề tài: Chỉ xem.
• Danh sách giải thưởng.
• Quá trình học tập, công tác.
• Quá trình đào tạo, bồi dưỡng:
Tải về các minh chứng của quá trình đào tạo để xem hợp lệ hay không.
• Danh sách nghỉ phép, nghỉ thai sản.
• Xử lý yêu cầu thông tin:
Duyệt, phản hồi, từ chối yêu cầu cũng như xem những thay đổi nếu có yêu cầu cập nhật.
• Dashboard:
Hiện các biểu đồ trực quan, có lọc theo các khoảng giai đoạn thường thống kê của phòng TCCB.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 64/160

|       | Trường |      | Đại học | Bách Khoa   | Tp.Hồ | Chí  | Minh     |     |
| ----- | ------ | ---- | ------- | ----------- | ----- | ---- | -------- | --- |
|       | Khoa   | Khoa | Học     | và Kỹ Thuật | Máy   | Tính |          |     |
| 4.3   | Thiết  | kế   | cơ      | sở dữ       | liệu  | cho  | hệ thống |     |
| 4.3.1 | Bảng   | dữ   | liệu    | tổ chức     | cán   | bộ   |          |     |
Bảng dùng cho việc lưu trữ các thông tin cơ bản của cán bộ như, email, họ, tên, giới tính, ngày sinh,
địa chỉ, trình độ học vấn, chức danh khoa học, .... Kèm theo đó là các thông tin khi đang công tác tại
trường như mã thẻ cán bộ, đơn vị công tác, lương, bảo hiểm xã hội, biên chế .... Đây được xem là bảng
quan trọng nhất trong hệ thống vì hầu hết mọi quy trình liên quan đến cán bộ đều sử dụng một hoặc
| nhiều trường |     | dữ liệu | trong | bảng cán | bộ.  |     |                  |        |
| ------------ | --- | ------- | ----- | -------- | ---- | --- | ---------------- | ------ |
|              |     |         |       | Hình     | 4.4: | ERD | của bảng tổ chức | cán bộ |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 65/160

| Trường     | Đại học Bách | Khoa Tp.Hồ   | Chí Minh     |           |            |             |     |
| ---------- | ------------ | ------------ | ------------ | --------- | ---------- | ----------- | --- |
| Khoa Khoa  | Học và       | Kỹ Thuật Máy | Tính         |           |            |             |     |
| Tên trường |              |              | Kiểu dữ liệu | Chức năng |            |             |     |
| SHCC       |              |              | String       | Số hiệu   | mã thẻ cán | bộ          |     |
| HO         |              |              | String       | Họ cán    | bộ         |             |     |
| TEN        |              |              | String       | Tên đệm   | và tên cán | bộ          |     |
| PHAI       |              |              | ObjectId     | Giới tính |            |             |     |
| EMAIL      |              |              | String       | Email     |            |             |     |
| NGAY_SINH  |              |              | Number       | Ngày sinh |            |             |     |
| DAN_TOC    |              |              | ObjectId     | Danh mục  | dân tộc    | để xác định | tên |
dân tộc
| TON_GIAO |     |     | ObjectId | Danh mục | tôn giáo | để xác định | tên |
| -------- | --- | --- | -------- | -------- | -------- | ----------- | --- |
tôn giáo
| THUONG_TRU_MA_TINH  |     |     | ObjectId | Danh mục | tỉnh thành         | phố        | để xác |
| ------------------- | --- | --- | -------- | -------- | ------------------ | ---------- | ------ |
|                     |     |     |          | định tên | địa chỉ cấp        | tỉnh-thành | phố    |
| THUONG_TRU_MA_HUYEN |     |     | ObjectId | Danh mục | quận huyện         | để xác     | định   |
|                     |     |     |          | tên địa  | chỉ cấp quận-huyện |            |        |
| THUONG_TRU_MA_XA    |     |     | ObjectId | Danh mục | phường             | xã để xác  | định   |
|                     |     |     |          | tên địa  | chỉ cấp phường-xã  |            |        |
| THUONG_TRU_SO_NHA   |     |     | String   | Số nhà   | địa chỉ thường     | trú        |        |
| HIEN_TAI_MA_TINH    |     |     | ObjectId | Danh mục | tỉnh thành         | phố        | để xác |
|                     |     |     |          | định tên | địa chỉ cấp        | tỉnh-thành | phố    |
| HIEN_TAI_MA_HUYEN   |     |     | ObjectId | Danh mục | quận huyện         | để xác     | định   |
|                     |     |     |          | tên địa  | chỉ cấp quận-huyện |            |        |
| HIEN_TAI_MA_XA      |     |     | ObjectId | Danh mục | phường             | xã để xác  | định   |
|                     |     |     |          | tên địa  | chỉ cấp phường-xã  |            |        |
| HIEN_TAI_SO_NHA     |     |     | String   | Số nhà   | địa chỉ nơi        | ở hiện tại |        |
| CMND                |     |     | String   | Chứng    | minh nhân          | dân / Căn  | cước   |
công dân
| CMND_NGAY_CAP |     |     | Number   | Ngày cấp | CMND/CCCD |             |     |
| ------------- | --- | --- | -------- | -------- | --------- | ----------- | --- |
| CMND_NOI_CAP  |     |     | String   | Nơi cấp  | CMND/CCCD |             |     |
| QUOC_GIA      |     |     | ObjectId | Danh mục | quốc gia  | để xác định | tên |
quốc gia
| TRINH_DO_PHO_THONG |     |     | String   | Trình độ | giáo dục     | phổ thông   |         |
| ------------------ | --- | --- | -------- | -------- | ------------ | ----------- | ------- |
| HOC_VI             |     |     | ObjectId | Danh mục | trình độ     | để xác định | tên     |
|                    |     |     |          | trình độ | chuyên môn   | cao nhất    |         |
| CHUYEN_NGANH       |     |     | String   | Chuyên   | ngành học    | ở bậc trình | độ      |
|                    |     |     |          | chuyên   | môn cao nhất |             |         |
| NAM_HOC_VI         |     |     | Number   | Năm đạt  | được trình   | độ tiến     | sĩ-tiến |
sĩ khoa học
| CHUC_DANH |     |     | ObjectId | Danh mục | chức danh | khoa | học để |
| --------- | --- | --- | -------- | -------- | --------- | ---- | ------ |
xácđịnhtênchứcdanhkhoahọccao
nhất
CHUYEN_NGANH_CHUC_DANH String Chuyên ngành học ở bậc chức danh
|               |     |     |        | khoa học | cao nhất  |           |     |
| ------------- | --- | --- | ------ | -------- | --------- | --------- | --- |
| NAM_CHUC_DANH |     |     | Number | Năm đạt  | được chức | danh khoa | học |
cao nhất
| MA_DON_VI     |     |     | ObjectId | Mã đơn     | vị công tác   |        |     |
| ------------- | --- | --- | -------- | ---------- | ------------- | ------ | --- |
| NGAY_BIEN_CHE |     |     | Number   | Ngày vào   | biên chế      |        |     |
| NGAY_NGHI     |     |     | Number   | Ngày nghỉ  | việc ở trường |        |     |
| NGACH         |     |     | ObjectId | Ngạch chức | danh nghề     | nghiệp |     |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 66/160

| Trường      | Đại học | Bách Khoa Tp.Hồ | Chí Minh |             |             |
| ----------- | ------- | --------------- | -------- | ----------- | ----------- |
| Khoa Khoa   | Học và  | Kỹ Thuật Máy    | Tính     |             |             |
| BAC_LUONG   |         |                 | Number   | Bậc trong   | ngạch lương |
| HE_SO_LUONG |         |                 | Number   | Hệ số lương |             |
| SO_BHXH     |         |                 | String   | Số bảo hiểm | xã hội      |
| MA_THE_BHYT |         |                 | String   | Số bảo hiểm | y tế        |
NOI_KHAM_CHUA_BENH_BAN_DAU ObjectId Danhmụcbệnhviệnđểxácđịnhtên
bệnh viện
|     |     | Bảng 4.1: | Bảng dữ liệu tổ chức | cán bộ |     |
| --- | --- | --------- | -------------------- | ------ | --- |
Bảng dữ liệu cán bộ được thiết kế như trên đê có thể đáp ứng nhu cầu làm hồ sơ lý lịch của cán bộ,
kèm theo đó một số trường dữ liệu sẽ phải dùng trong các quá trình liên quan đến cán bộ.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 67/160

|       | Trường | Đại  | học      | Bách Khoa | Tp.Hồ | Chí  | Minh |     |     |     |
| ----- | ------ | ---- | -------- | --------- | ----- | ---- | ---- | --- | --- | --- |
|       | Khoa   | Khoa | Học và   | Kỹ Thuật  | Máy   | Tính |      |     |     |     |
| 4.3.2 | Bảng   | dữ   | liệu đào | tạo       |       |      |      |     |     |     |
Bảng dữ liệu dùng để lưu trữ các quá trình đào tạo của cán bộ viên chức đi học ở các trường hay các
| trung tâm     | đào | tạo. |      |      |     |          |              |               |               |               |
| ------------- | --- | ---- | ---- | ---- | --- | -------- | ------------ | ------------- | ------------- | ------------- |
|               |     |      | Hình | 4.5: | ERD | của bảng | dữ liệu quá  | trình đào tạo |               |               |
| Tên trường    |     |      |      |      |     |          | Kiểu dữ liệu | Chức năng     |               |               |
| SHCC          |     |      |      |      |     |          | ObjectId     | Bảng dữ       | liệu tổ chức  | cán bộ để xác |
|               |     |      |      |      |     |          |              | định cán      | bộ            |               |
| TEN_TRUONG    |     |      |      |      |     |          | String       | Tên trường    |               |               |
| CHUYEN_NGANH  |     |      |      |      |     |          | String       | Chuyên        | ngành học     |               |
| BAT_DAU       |     |      |      |      |     |          | Number       | Ngày bắt      | đầu           |               |
| BAT_DAU_TYPE  |     |      |      |      |     |          | String       | Định dạng     | ngày bắt đầu  |               |
| KET_THUC      |     |      |      |      |     |          | Number       | Ngày kết      | thúc          |               |
| KET_THUC_TYPE |     |      |      |      |     |          | String       | Định dạng     | ngày kết thúc |               |
| HINH_THUC     |     |      |      |      |     |          | ObjectId     | Danh mục      | hình thức     | đào tạo       |
| LOAI_BANG_CAP |     |      |      |      |     |          | ObjectId     | Danh mục      | bằng đào tạo  |               |
| TRINH_DO      |     |      |      |      |     |          | ObjectId     | Danh mục      | trình độ đào  | tạo           |
| KINH_PHI      |     |      |      |      |     |          | String       | Kinh phí      |               |               |
| MINH_CHUNG    |     |      |      |      |     |          | [String]     | Danh sách     | các chuỗi     | trong đó mỗi  |
|               |     |      |      |      |     |          |              | chuỗi là      | một đường dẫn | tới một file  |
minh chứng
|     |     |     |     | Bảng |     | 4.2: Bảng | dữ liệu đào | tạo |     |     |
| --- | --- | --- | --- | ---- | --- | --------- | ----------- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 68/160

|       | Trường |      | Đại học | Bách Khoa   | Tp.Hồ | Chí      | Minh |     |     |     |     |
| ----- | ------ | ---- | ------- | ----------- | ----- | -------- | ---- | --- | --- | --- | --- |
|       | Khoa   | Khoa | Học     | và Kỹ Thuật |       | Máy Tính |      |     |     |     |     |
| 4.3.3 | Bảng   | dữ   | liệu    | học tập,    | công  | tác      |      |     |     |     |     |
Bảng dữ liệu dùng để lưu trữ các quá trình học tập từ bậc tiểu học đến đại học, sau đại học và quá
| trình công    | tác | của | cán bộ | tại trường. |      |      |               |          |           |               |               |
| ------------- | --- | --- | ------ | ----------- | ---- | ---- | ------------- | -------- | --------- | ------------- | ------------- |
|               |     |     |        | Hình 4.6:   | ERD  | của  | quá trình học | tập công | tác)      |               |               |
| Tên trường    |     |     |        |             |      |      | Kiểu dữ       | liệu     | Chức năng |               |               |
| SHCC          |     |     |        |             |      |      | ObjectId      |          | Bảng dữ   | liệu tổ chức  | cán bộ để xác |
|               |     |     |        |             |      |      |               |          | định cán  | bộ            |               |
| NOI_DUNG      |     |     |        |             |      |      | String        |          | Nội dung  |               |               |
| BAT_DAU       |     |     |        |             |      |      | Number        |          | Ngày bắt  | đầu           |               |
| BAT_DAU_TYPE  |     |     |        |             |      |      | String        |          | Định dạng | ngày bắt đầu  |               |
| KET_THUC      |     |     |        |             |      |      | Number        |          | Ngày kết  | thúc          |               |
| KET_THUC_TYPE |     |     |        |             |      |      | String        |          | Định dạng | ngày kết thúc |               |
|               |     |     |        | Bảng        | 4.3: | Bảng | dữ liệu học   | tập công | tác       |               |               |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 69/160

|       | Trường    | Đại học Bách | Khoa     | Tp.Hồ   | Chí Minh |     |     |     |     |
| ----- | --------- | ------------ | -------- | ------- | -------- | --- | --- | --- | --- |
|       | Khoa Khoa | Học và       | Kỹ Thuật | Máy     | Tính     |     |     |     |     |
| 4.3.4 | Bảng dữ   | liệu chức    | vụ       | của cán | bộ       |     |     |     |     |
Bảng dùng để quản lí chức vụ của các cán bộ có chức vụ quản lí trong trường. Mỗi hàng trong bảng
sẽlưumãsốcánbộ,mãchứcvụcủacánbộ,đơnvịmàcánbộđóquảnlívàchứcvụđólàchứcvụchính
| hay là | chức vụ kiêm | nhiệm. |      |          |               |         |     |     |     |
| ------ | ------------ | ------ | ---- | -------- | ------------- | ------- | --- | --- | --- |
|        |              |        | Hình | 4.7: ERD | của quá trình | chức vụ |     |     |     |
Bảng dữ liệu chức vụ được thiết kế để lưu được quá trình nắm giữ các chức vụ quản lí của cán bộ.
Một cán bộ có thể có nhiều chức vụ nhưng chỉ có thể có một chức vụ chính duy nhất, các chức vụ khác
sẽ được tính là kiêm nhiệm. Khi tạo mới chức vụ, nếu đó là chức vụ chính thì chức vu chính hiện tại sẽ
được tự động chuyển về thành chức vụ kiêm nhiệm. Khi chỉnh sửa dữ liệu chức vụ, cán bộ của phòng tổ
chức cán bộ không thể chuyển chức vụ chính thành chức vụ kiêm nhiệm được mà phải chuyển từ kiêm
nhiệm thành chính. Lúc đó, chức vụ chính hiện tại sẽ tự động chuyển về thành chức vụ kiêm nhiệm.
| Tên trường |     |     |     |     | Kiểu dữ  | liệu Chức năng |         |          |        |
| ---------- | --- | --- | --- | --- | -------- | -------------- | ------- | -------- | ------ |
| STT        |     |     |     |     | Number   | Số thứ tự      | của     | record   |        |
| SHCC       |     |     |     |     | String   | Mã thẻ         | của cán | bộ       |        |
| MA_CHUC_VU |     |     |     |     | ObjectId | Mã chức        |         | vụ trong | bảng   |
|            |     |     |     |     |          | DM_CHUC_VU     |         | - Mã     | chức   |
|            |     |     |     |     |          | vụ của cán     | bộ      |          |        |
| MA_DON_VI  |     |     |     |     | ObjectId | Mã đơn         |         | vị trong | bảng   |
|            |     |     |     |     |          | DM_DON_VI      |         | - Mã     | đơn vị |
|            |     |     |     |     |          | mà cán         | bộ quản | lí       |        |
| MA_BO_MON  |     |     |     |     | ObjectId | Mã bộ          | môn     | trong    | bảng   |
|            |     |     |     |     |          | DM_BO_MON      |         | - Mã     | bộ môn |
|            |     |     |     |     |          | mà cán         | bộ quản | lí       |        |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 70/160

| Trường                | Đại học Bách | Khoa Tp.Hồ   | Chí Minh |                             |                 |                |
| --------------------- | ------------ | ------------ | -------- | --------------------------- | --------------- | -------------- |
| Khoa Khoa             | Học và       | Kỹ Thuật Máy | Tính     |                             |                 |                |
| SO_QD                 |              |              | String   | Số quyết                    | định bổ nhiệm   | chức vụ        |
| NGAY_RA_QUYET_DINH    |              |              | Number   | Ngày ra                     | quyết định      | bổ nhiệm       |
| CHUC_VU_CHINH         |              |              | Number   | Bằng 1                      | nếu đây là chức | vụ chính, 0    |
|                       |              |              |          | nếu là chức                 | vụ kiêm         | nhiệm          |
| THOI_CHUC_VU          |              |              | Number   | Bằng1nếucánbộđãthôikhônggiứ |                 |                |
|                       |              |              |          | chức vụ                     | này nữa, 0      | nếu cán bộ vẫn |
|                       |              |              |          | đang giữ                    | chức vụ         |                |
| SO_QUYET_THOI_CHUC_VU |              |              | String   | Số quyết                    | định thôi chức  | vụ             |
| NGAY_THOI_CHUC_VU     |              |              | Number   | Ngày thôi                   | chức vụ         |                |
NGAY_RA_QD_THOI_CHUC_VU Number Ngày ra quyết định thôi chức vụ
|     |     | Bảng | 4.4: Bảng dữ liệu chức | vụ  |     |     |
| --- | --- | ---- | ---------------------- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 71/160

|       | Trường    | Đại học  | Bách Khoa | Tp.Hồ | Chí Minh |     |     |     |     |     |
| ----- | --------- | -------- | --------- | ----- | -------- | --- | --- | --- | --- | --- |
|       | Khoa Khoa | Học và   | Kỹ Thuật  | Máy   | Tính     |     |     |     |     |     |
| 4.3.5 | Bảng dữ   | liệu hợp | đồng      | lao   | động     |     |     |     |     |     |
Bảng dùng để lưu thông tin về hợp đồng lao đồng được kí với cán bộ mới hoặc là hợp đồng mới với
cán bộ cũ.
|               |     | Hình | 4.8: | ERD của | quá trình | hợp đồng | lao động  |          |       |      |
| ------------- | --- | ---- | ---- | ------- | --------- | -------- | --------- | -------- | ----- | ---- |
| Tên trường    |     |      |      |         | Kiểu      | dữ liệu  | Chức năng |          |       |      |
| MA            |     |      |      |         | Number    |          | Mã hợp    | đồng     |       |      |
| LOAI_HOP_DONG |     |      |      |         | ObjectId  |          | Mã loại   | hợp đồng | trong | bảng |
DM_LOAI_HOP_DONG
| SO_HOP_DONG       |     |     |     |     | String |     | Số hợp đồng |               |          |          |
| ----------------- | --- | --- | --- | --- | ------ | --- | ----------- | ------------- | -------- | -------- |
| NGUOI_KY          |     |     |     |     | String |     | Mã số của   | cán bộ kí     | hợp đồng |          |
| CHUC_VU           |     |     |     |     | String |     | Mã chức     | vụ của cán    | bộ kí    | hợp đồng |
| NGUOI_DUOC_THUE   |     |     |     |     | String |     | Mã số của   | cán bộ được   | thuê     |          |
| BAT_DAU_LAM_VIEC  |     |     |     |     | Number |     | Ngày bắt    | đầu làm việc  |          |          |
| KET_THUC_HOP_DONG |     |     |     |     | Number |     | Ngày kết    | thúc hợp đồng |          |          |
NGAY_KY_HD_TIEP_THEO Number Ngày ký hợp đồng tiếp theo sau khi
|                   |     |     |     |     |          |     | hợp đồng  | hiện tại hết | hạn     |      |
| ----------------- | --- | --- | --- | --- | -------- | --- | --------- | ------------ | ------- | ---- |
| DIA_DIEM_LAM_VIEC |     |     |     |     | ObjectId |     | Mã đơn    | vị           | trong   | bảng |
|                   |     |     |     |     |          |     | DM_DON_VI | -            | nơi làm | việc |
|                   |     |     |     |     |          |     | của cán   | bộ           |         |      |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 72/160

| Trường               | Đại học Bách | Khoa Tp.Hồ   | Chí Minh |         |               |           |
| -------------------- | ------------ | ------------ | -------- | ------- | ------------- | --------- |
| Khoa Khoa            | Học và       | Kỹ Thuật Máy | Tính     |         |               |           |
| CHUC_DANH_CHUYEN_MON |              |              | ObjectId | Mã chức | danh chuyên   | môn trong |
|                      |              |              |          | bảng    | DM_CHUC_DANH_ |           |
CHUYEN_MON
| CONG_VIEC_DUOC_GIAO |     |     | String | Công việc   | được giao cho | cán bộ |
| ------------------- | --- | --- | ------ | ----------- | ------------- | ------ |
| CHIU_SU_PHAN_CONG   |     |     | String | Chiu sự     | phân công     |        |
| MA_NGACH            |     |     | String | Mã ngạch    | của cán bộ    |        |
| BAC                 |     |     | String | Bậc lương   |               |        |
| HE_SO               |     |     | Number | Hệ số lương |               |        |
| NGAY_KI_HOP_DONG    |     |     | Number | Ngày kí     | hợp đông      |        |
| PHAN_TRAM_HUONG     |     |     | String | Phần trăm   | hưởng lương   |        |
DUNG_CU_DUOC_CAP_PHAT String Dụng cụ được cấp phát cho cán bộ
PHUONG_TIEN_DI_LAI_LAM_VIEC String Phương tiện đi lại làm việc của cán
bộ
| HINH_THUC_TRA_LUONG    |     |                | String           | Hình thức  | trả lương cho | cán bộ |
| ---------------------- | --- | -------------- | ---------------- | ---------- | ------------- | ------ |
| CHE_DO_NGHI_NGOi       |     |                | String           | Chế độ     | nghỉ ngơi     |        |
| BOI_THUONG_VAT_CHAT    |     |                | String           | Bồi thường | vật chất      |        |
| NGAY_CAP_NHAT_HOP_DONG |     |                | Number           | Ngày cập   | nhật hợp đồng |        |
|                        |     | Bảng 4.5: Bảng | dữ liệu hợp đồng | lao động   |               |        |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 73/160

|       | Trường    | Đại học  | Bách Khoa | Tp.Hồ | Chí Minh   |       |     |     |
| ----- | --------- | -------- | --------- | ----- | ---------- | ----- | --- | --- |
|       | Khoa Khoa | Học và   | Kỹ Thuật  | Máy   | Tính       |       |     |     |
| 4.3.6 | Bảng dữ   | liệu hợp | đồng      | làm   | việc (viên | chức) |     |     |
Bảng dữ liệu dùng để lưu trữ hợp đồng làm việc (viên chức) được kí với cán bộ.
|               |     | Hình | 4.9: ERD | của quá | trình hợp đồng | làm việc (viên chức) |                |              |
| ------------- | --- | ---- | -------- | ------- | -------------- | -------------------- | -------------- | ------------ |
| Tên trường    |     |      |          |         | Kiểu dữ        | liệu Chức năng       |                |              |
| MA            |     |      |          |         | Number         | Mã hợp đồng          |                |              |
| LOAI_HOP_DONG |     |      |          |         | String         | Loại hợp             | đồng (gồm      | 3 giá trị là |
|               |     |      |          |         |                | không xác            | định thời hạn, | lần 1, lần   |
2)
| SO_QD              |     |     |     |     | String   | Số quyết      | định tuyển dụng  |            |
| ------------------ | --- | --- | --- | --- | -------- | ------------- | ---------------- | ---------- |
| NGAY_KI_QUYET_DINH |     |     |     |     | Number   | Ngày kí quyết | định tuyển       | dụng       |
| NOI_DÙNG           |     |     |     |     | String   | Nội dung      | quyết định tuyển | dụng       |
| NGUOI_KY           |     |     |     |     | String   | Mã số cán     | bộ kí            |            |
| NGUOI_DUỌC_THUE    |     |     |     |     | String   | Mã số cán     | bộ được thuê     |            |
| LOAI_HD            |     |     |     |     | ObjectId | Mã loại       | hợp đồng         | trong bảng |
DM_LOAI_HOP_DONG
| NGAY_BAT_DAU_LAM_VIEC  |     |     |     |     | Number   | Ngày bắt | đầu làm việc  |      |
| ---------------------- | --- | --- | --- | --- | -------- | -------- | ------------- | ---- |
| NGAY_KET_THUC_HOP_DONG |     |     |     |     | Number   | Ngày kết | thúc hợp đồng |      |
| NGAY_KY_HD_TIEP_THEO   |     |     |     |     | Number   | Ngày ký  | hơp đồng tiếp | theo |
| DIA_DIEM_LAM_VIEC      |     |     |     |     | ObjectId | Mã đơn   | vị trong      | bảng |
DM_DON_VI
| CHUC_DANH_CHUYEN_MON |     |     |     |     | ObjectId | Mã chức | danh chuyên   | môn trong |
| -------------------- | --- | --- | --- | --- | -------- | ------- | ------------- | --------- |
|                      |     |     |     |     |          | bẳng    | DM_CHUC_DANH_ |           |
CHUYEN_MON
| NHIEM_VU         |     |     |     |     | String | Nhiệm vụ | được giao |     |
| ---------------- | --- | --- | --- | --- | ------ | -------- | --------- | --- |
| NGAY_KY_HOP_DONG |     |     |     |     | Number | Ngày ký  | hợp đồng  |     |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 74/160

|          | Trường    | Đại học Bách | Khoa Tp.Hồ   | Chí Minh |     |          |            |
| -------- | --------- | ------------ | ------------ | -------- | --- | -------- | ---------- |
|          | Khoa Khoa | Học và       | Kỹ Thuật Máy | Tính     |     |          |            |
| MA_NGACH |           |              |              | String   | Mã  | ngạch    | của cán bộ |
| BAC      |           |              |              | String   | Bậc | lương    |            |
| HE_SO    |           |              |              | String   | Hệ  | số lương |            |
THOI_GIAN_XET_NANG_BAC_LUONG Number Thời gian xét nâng bậc lương
| SO_HOP_DONG |     |     |     | Number | Số  | hợp đồng |     |
| ----------- | --- | --- | --- | ------ | --- | -------- | --- |
NGHE_NGHIEP_TRUOC_TUYEN_DUNG String Nghề nghiệp trước tyển dụng
|     |     | Bảng | 4.6: Bảng dữ | liệu hợp đồng | làm việc (viên | chức) |     |
| --- | --- | ---- | ------------ | ------------- | -------------- | ----- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 75/160

|       | Trường | Đại  | học      | Bách Khoa | Tp.Hồ | Chí  | Minh      |         |       |     |     |     |
| ----- | ------ | ---- | -------- | --------- | ----- | ---- | --------- | ------- | ----- | --- | --- | --- |
|       | Khoa   | Khoa | Học và   | Kỹ Thuật  | Máy   | Tính |           |         |       |     |     |     |
| 4.3.7 | Bảng   | dữ   | liệu hợp | đồng      | đơn   | vị   | trả lương | - trách | nhiêm |     |     |     |
Bảng dữ liệu hợp đồng trả lương - trách nhiệm lưu hợp đồng đơn vị trả lương - trách nhiệm của cán
bộ
|               |     | Hình | 4.10: | ERD của | quá | trình | hợp đồng đơn | vị trả lương | - trách  | nhiệm     |     |      |
| ------------- | --- | ---- | ----- | ------- | --- | ----- | ------------ | ------------ | -------- | --------- | --- | ---- |
| Tên trường    |     |      |       |         |     |       | Kiểu dữ      | liệu Chức    | năng     |           |     |      |
| MA            |     |      |       |         |     |       | Number       | Mã           | hợp đồng |           |     |      |
| SO_HOP_DONG   |     |      |       |         |     |       | String       | Số           | hợp đồng |           |     |      |
| KIEU_HOP_DONG |     |      |       |         |     |       | String       | Kiểu         | hợp      | đồng (bao | gồm | DVTL |
hoặc TN)
| NGUOI_KY             |     |     |     |     |     |     | String   | Mã   | số của | cán bộ ký     | hợp đồng |      |
| -------------------- | --- | --- | --- | --- | --- | --- | -------- | ---- | ------ | ------------- | -------- | ---- |
| NGUOI_DUOC_THUE      |     |     |     |     |     |     | String   | Mã   | số của | cán bộ được   | thuê     |      |
| BAT_DAU_LAM_VIEC     |     |     |     |     |     |     | Number   | Ngày | bắt    | đầu làm việc  |          |      |
| KET_THUC_HOP_DONG    |     |     |     |     |     |     | Number   | Ngày | kết    | thúc hợp đồng |          |      |
| NGAY_KY_HD_TIEP_THEO |     |     |     |     |     |     | Number   | Ngày | ký     | hợp đồng tiếp | theo     |      |
| DIA_DIEM_LAM_VIEC    |     |     |     |     |     |     | ObjectId | Mã   | đơn    | vị            | trong    | bảng |
DM_DON_VI
| CHUC_DANH_CHUYEN_MON |     |     |     |     |     |     | Object Id | Mã   | chức | danh chuyên   | môn | trong |
| -------------------- | --- | --- | --- | --- | --- | --- | --------- | ---- | ---- | ------------- | --- | ----- |
|                      |     |     |     |     |     |     |           | bảng |      | DM_CHUC_DANH_ |     |       |
CHUYEN_MON
| CONG_VIEC_DUOC_GIAO |     |     |     |     |     |     | Stirng | Công | việc | được giao | cho cán | bộ kí |
| ------------------- | --- | --- | --- | --- | --- | --- | ------ | ---- | ---- | --------- | ------- | ----- |
hợp đồng
| CHIU_SU_PHAN_CONG |     |     |     |     |     |     | String   | Chịu | sự phân | công của     | ai  |        |
| ----------------- | --- | --- | --- | --- | --- | --- | -------- | ---- | ------- | ------------ | --- | ------ |
| DON_VI_TRA_LUONG  |     |     |     |     |     |     | ObjectId | Mã   | đơn vị  | sẽ trả lương | cho | cán bộ |
nếuloạihợpđồnglàđơnvịtrảlương
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 76/160

| Trường | Đại học Bách | Khoa Tp.Hồ   | Chí Minh |                             |     |     |
| ------ | ------------ | ------------ | -------- | --------------------------- | --- | --- |
| Khoa   | Khoa Học và  | Kỹ Thuật Máy | Tính     |                             |     |     |
| NGACH  |              |              | ObjectId | Mãngạchcủacủacánbộtrongbảng |     |     |
DM_NGACH_CDNN
| BAC               |           |              | Number              | Bậc lương     |             |      |
| ----------------- | --------- | ------------ | ------------------- | ------------- | ----------- | ---- |
| HE_SO             |           |              | Number              | Hệ số lương   |             |      |
| HIEU_LUC_HOP_DONG |           |              | Number              | Hiệu lưc      | hợp đồng    |      |
| NGAY_KY_HOP_DONG  |           |              | Number              | Ngày ký       | hợp đồng    |      |
| PHAN_TRAM_HUONG   |           |              | String              | Phần trăm     | hưởng lương |      |
| TIEN_LUONG        |           |              | Number              | Tiền lương    | cán bộ được | nhận |
|                   | Bảng 4.7: | Bảng dữ liệu | hợp đồng đơn vị trả | lương - trách | nhiệm       |      |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 77/160

|       | Trường | Đại  | học  | Bách Khoa   | Tp.Hồ | Chí  | Minh |     |     |     |     |
| ----- | ------ | ---- | ---- | ----------- | ----- | ---- | ---- | --- | --- | --- | --- |
|       | Khoa   | Khoa | Học  | và Kỹ Thuật | Máy   | Tính |      |     |     |     |     |
| 4.3.8 | Bảng   | dữ   | liệu | khen thưởng |       |      |      |     |     |     |     |
Bảng dữ liệu khen thưởng dùng để lưu trữ các quá trình khen thưởng từ cấp cơ sở đến cấp bộ của
| các cá         | nhân (cán | bộ) | và tập | thể (trường. | đơn   | vị,     | bộ môn)   |                |                  |           |       |
| -------------- | --------- | --- | ------ | ------------ | ----- | ------- | --------- | -------------- | ---------------- | --------- | ----- |
|                |           |     |        | Hình         | 4.11: | ERD của | quá trình | khen thưởng    |                  |           |       |
| Tên trường     |           |     |        |              |       |         | Kiểu dữ   | liệu Chức năng |                  |           |       |
| SO_QUYET_DINH  |           |     |        |              |       |         | String    | Số quyết       | định khen thưởng |           |       |
| LOAI_DOI_TUONG |           |     |        |              |       |         | ObjectId  | Danh mục       | loại đối         | tượng     | khen  |
|                |           |     |        |              |       |         |           | thưởng         | để xác định được | đối       | tượng |
|                |           |     |        |              |       |         |           | được xét       | khen thưởng.     |           |       |
| MA             |           |     |        |              |       |         | ObjectId  | - =-1 nếu      | loại đối tượng   | là trường |       |
|                |           |     |        |              |       |         |           | - Bảng         | tổ chức cán bộ   | nếu loại  | đối   |
|                |           |     |        |              |       |         |           | tượng là       | cán bộ           |           |       |
-Danhmụcđơnvịnếuloạiđốitượng
|              |     |     |     |      |      |      |              | là đơn vị                   |                   |          |     |
| ------------ | --- | --- | --- | ---- | ---- | ---- | ------------ | --------------------------- | ----------------- | -------- | --- |
|              |     |     |     |      |      |      |              | - Danh                      | mục bộ môn        | nếu loại | đối |
|              |     |     |     |      |      |      |              | tượng là                    | bộ môn            |          |     |
| NAM_DAT_DUOC |     |     |     |      |      |      | String       | Năm đạt                     | được              |          |     |
| THANH_TICH   |     |     |     |      |      |      | ObjectId     | Danh mục                    | ký hiệu khen      | thưởng   | để  |
|              |     |     |     |      |      |      |              | xác định                    | tên thành tích    | đạt được |     |
| CHU_THICH    |     |     |     |      |      |      | ObjectId     | Danhmụcchúthíchkhenthưởngđể |                   |          |     |
|              |     |     |     |      |      |      |              | xác định                    | tên chú thích     |          |     |
| DIEM_THI_DUA |     |     |     |      |      |      | Number       | Số điểm                     | thi đua được cộng |          |     |
|              |     |     |     | Bảng | 4.8: | Bảng | dữ liệu khen | thưởng                      |                   |          |     |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 78/160

|       | Trường    | Đại học | Bách Khoa   | Tp.Hồ | Chí Minh |     |     |     |     |
| ----- | --------- | ------- | ----------- | ----- | -------- | --- | --- | --- | --- |
|       | Khoa Khoa | Học     | và Kỹ Thuật | Máy   | Tính     |     |     |     |     |
| 4.3.9 | Bảng dữ   | liệu    | kỷ luật     |       |          |     |     |     |     |
Bảng dữ liệu kỷ luật dùng để lưu trữ các quá trình bị kỷ luật từ phía nhà trường của cán bộ .
|                 |     |     | Hình | 4.12:     | ERD của  | quá trình | kỷ luật    |                |               |
| --------------- | --- | --- | ---- | --------- | -------- | --------- | ---------- | -------------- | ------------- |
| Tên trường      |     |     |      |           | Kiểu     | dữ liệu   | Chức năng  |                |               |
| SO_QUYET_DINH   |     |     |      |           | String   |           | Số quyết   | định           |               |
| NGAY_QUYET_DINH |     |     |      |           | Number   |           | Ngày quyết | định           |               |
| SHCC            |     |     |      |           | ObjectId |           | Bảng dữ    | liệu tổ chức   | cán bộ để xác |
|                 |     |     |      |           |          |           | định cán   | bộ             |               |
| LY_DO_HINH_THUC |     |     |      |           | ObjectId |           | Danh mục   | kỷ luật để     | xác định tên  |
|                 |     |     |      |           |          |           | hình thức  | kỷ luật        |               |
| DIEM_THI_DUA    |     |     |      |           | Number   |           | Số điểm    | thi đua bị trừ |               |
|                 |     |     |      | Bảng 4.9: | Bảng dữ  | liệu kỷ   | luật       |                |               |
Cả hai bảng dữ liệu khen thưởng và kỷ luật được tạo ra nhằm phục vụ cho việc xét khen thưởng thi
| đua cán | bộ hàng năm. |     |     |     |     |     |     |     |     |
| ------- | ------------ | --- | --- | --- | --- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 79/160

|        | Trường | Đại học  | Bách Khoa   | Tp.Hồ | Chí  | Minh |     |     |     |
| ------ | ------ | -------- | ----------- | ----- | ---- | ---- | --- | --- | --- |
|        | Khoa   | Khoa Học | và Kỹ Thuật | Máy   | Tính |      |     |     |     |
| 4.3.10 | Bảng   | dữ liệu  | sáng kiến   |       |      |      |     |     |     |
Bảng dữ liệu sáng kiến dùng để lưu trữ danh sách các sáng kiến được công nhận của cán bộ trong
trường.
|               |     |     | Hình | 4.13: ERD | của     | quá trình | sáng kiến   |                |            |
| ------------- | --- | --- | ---- | --------- | ------- | --------- | ----------- | -------------- | ---------- |
| Tên trường    |     |     |      |           | Kiểu    | dữ liệu   | Chức năng   |                |            |
| ID            |     |     |      |           | Number  |           | Id của sáng | kiến           |            |
| SHCC          |     |     |      |           | String  |           | Mã số của   | cán bộ sở hữu  | sáng kiến  |
| MA_SO         |     |     |      |           | String  |           | Mã số sáng  | kiến           |            |
| TEN_SANG_KIEN |     |     |      |           | String  |           | Tên của     | sáng kiến      |            |
| SO_QUYET_DINH |     |     |      |           | String  |           | Số quyết    | định           |            |
| CAP_ANH_HUONG |     |     |      |           | Number  |           | Cấp ảnh     | hưởng của sáng | kiến (bằng |
|               |     |     |      |           |         |           | 1 là cấp    | bộ, bằng 2 là  | cấp cơ sở) |
|               |     |     | Bảng | 4.10:     | Bảng dữ | liệu sáng | kiến        |                |            |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 80/160

|        | Trường | Đại học  | Bách | Khoa     | Tp.Hồ | Chí  | Minh |     |     |     |
| ------ | ------ | -------- | ---- | -------- | ----- | ---- | ---- | --- | --- | --- |
|        | Khoa   | Khoa Học | và   | Kỹ Thuật | Máy   | Tính |      |     |     |     |
| 4.3.11 | Bảng   | dữ liệu  | kéo  | dài      | công  | tác  |      |     |     |     |
Bảng dữ liệu kéo dài công tác dùng để lưu trữ các quá trình kéo dài thời gian công tác của cán bộ tại
trường. Các cán bộ được phép kéo dài công tác là Giảng viên có trình độ chuyên môn từ Tiến sĩ trở lên
| và đã đủ      | tuổi về | hưu. |      |       |       |      |                 |              |               |               |
| ------------- | ------- | ---- | ---- | ----- | ----- | ---- | --------------- | ------------ | ------------- | ------------- |
|               |         |      | Hình | 4.14: | ERD   | của  | quá trình kéo   | dài công tác |               |               |
| Tên trường    |         |      |      |       |       |      | Kiểu dữ liệu    | Chức năng    |               |               |
| SHCC          |         |      |      |       |       |      | ObjectId        | Bảng dữ      | liệu tổ chức  | cán bộ để xác |
|               |         |      |      |       |       |      |                 | định cán     | bộ            |               |
| BAT_DAU       |         |      |      |       |       |      | Number          | Ngày bắt     | đầu           |               |
| BAT_DAU_TYPE  |         |      |      |       |       |      | String          | Định dạng    | ngày của ngày | bắt đầu       |
| KET_THUC      |         |      |      |       |       |      | Number          | Ngày kết     | thúc          |               |
| KET_THUC_TYPE |         |      |      |       |       |      | String          | Định dạng    | ngày của ngày | kết thúc      |
|               |         |      |      | Bảng  | 4.11: | Bảng | dữ liệu kéo dài | công tác     |               |               |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 81/160

|        | Trường | Đại học  | Bách Khoa   | Tp.Hồ | Chí  | Minh |     |     |     |
| ------ | ------ | -------- | ----------- | ----- | ---- | ---- | --- | --- | --- |
|        | Khoa   | Khoa Học | và Kỹ Thuật | Máy   | Tính |      |     |     |     |
| 4.3.12 | Bảng   | dữ liệu  | làm việc    | ngoài |      |      |     |     |     |
Bảng dữ liệu làm việc ngoài dùng để lưu trữ các quá trình cán bộ của trường nhận được lời mời tại
các trung tâm, các trường đại học khác làm thỉnh giảng, hướng dẫn hay tư vấn, ...
|               |     |     | Hình 4.15: | ERD   | của  | quá trình làm    | việc ngoài   |               |               |
| ------------- | --- | --- | ---------- | ----- | ---- | ---------------- | ------------ | ------------- | ------------- |
| Tên trường    |     |     |            |       |      | Kiểu dữ liệu     | Chức năng    |               |               |
| SHCC          |     |     |            |       |      | ObjectId         | Bảng dữ      | liệu tổ chức  | cán bộ để xác |
|               |     |     |            |       |      |                  | định cán     | bộ            |               |
| NOI_LAM_VIEC  |     |     |            |       |      | String           | Nơi làm việc |               |               |
| NOI_DUNG      |     |     |            |       |      | String           | Nội dung     |               |               |
| BAT_DAU       |     |     |            |       |      | Number           | Ngày bắt     | đầu           |               |
| BAT_DAU_TYPE  |     |     |            |       |      | String           | Định dạng    | ngày bắt đầu  |               |
| KET_THUC      |     |     |            |       |      | Number           | Ngày kết     | thúc          |               |
| KET_THUC_TYPE |     |     |            |       |      | String           | Định dạng    | ngày kết thúc |               |
|               |     |     | Bảng       | 4.12: | Bảng | dữ liệu làm việc | ngoài        |               |               |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 82/160

|        | Trường | Đại học  | Bách Khoa   | Tp.Hồ | Chí Minh |     |     |     |
| ------ | ------ | -------- | ----------- | ----- | -------- | --- | --- | --- |
|        | Khoa   | Khoa Học | và Kỹ Thuật | Máy   | Tính     |     |     |     |
| 4.3.13 | Bảng   | dữ liệu  | đi nước     | ngoài |          |     |     |     |
Bảng dữ liệu đi nước ngoài dùng để lưu trữ các quá trình đi công tác tại nước ngoài của cán bộ tại
trường.
|                 |     |     | Hình | 4.16: ERD | của quá trình đi | nước ngoài                  |              |               |
| --------------- | --- | --- | ---- | --------- | ---------------- | --------------------------- | ------------ | ------------- |
| Tên trường      |     |     |      |           | Kiểu dữ liệu     | Chức năng                   |              |               |
| SO_QUYET_DINH   |     |     |      |           | String           | Số quyết                    | định         |               |
| NGAY_QUYET_DINH |     |     |      |           | Number           | Ngày quyết                  | định         |               |
| SHCC            |     |     |      |           | ObjectId         | Bảng dữ                     | liệu tổ chức | cán bộ để xác |
|                 |     |     |      |           |                  | định cán                    | bộ           |               |
| QUOC_GIA        |     |     |      |           | [ObjectId]       | MỗiObjectIdlàmộtdanhmụcquốc |              |               |
gia
| MUC_DICH           |     |     |     |     | ObjectId | Danh mục   | mục đích đi    | nước ngoài   |
| ------------------ | --- | --- | --- | --- | -------- | ---------- | -------------- | ------------ |
| NOI_DUNG           |     |     |     |     | String   | Nội dung   |                |              |
| CHI_PHI            |     |     |     |     | String   | Chi phí    |                |              |
| NGAY_DI            |     |     |     |     | Number   | Ngày bắt   | đầu đi         |              |
| NGAY_DI_TYPE       |     |     |     |     | String   | Định dạng  | ngày của ngày  | đi           |
| NGAY_VE            |     |     |     |     | Number   | Ngày dự    | kiến về nước   |              |
| NGAY_VE_TYPE       |     |     |     |     | Number   | Định dạng  | ngày của ngày  | về           |
| SO_QD_TIEP_NHAN    |     |     |     |     | String   | Số quyết   | định tiếp nhận |              |
| NGAY_QD_TIEP_NHAN  |     |     |     |     | Number   | Ngày quyết | định tiếp      | nhận         |
| NOI_DUNG_TIEP_NHAN |     |     |     |     | String   | Nội dung   | tiếp nhận      |              |
| NGAY_VE_NUOC       |     |     |     |     | Number   | Ngày về    | nước           |              |
| BAO_CAO_TEN        |     |     |     |     | [String] | Danh sách  | các chuỗi      | trong đó mỗi |
|                    |     |     |     |     |          | chuỗi là   | một đường dẫn  | tới một file |
báo cáo
| BAO_CAO_TINH_TRANG |     |     |     |     | Number | Tình trạng | báo cáo |     |
| ------------------ | --- | --- | --- | --- | ------ | ---------- | ------- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 83/160

|                      | Trường    | Đại học | Bách Khoa  | Tp.Hồ Chí Minh |                    |               |
| -------------------- | --------- | ------- | ---------- | -------------- | ------------------ | ------------- |
|                      | Khoa Khoa | Học và  | Kỹ Thuật   | Máy Tính       |                    |               |
|                      |           |         |            |                | = 0: Chưa          | nộp báo cáo   |
|                      |           |         |            |                | = 1: Đang          | chờ duyệt     |
|                      |           |         |            |                | = 2: Báo cáo       | bị trả lại    |
|                      |           |         |            |                | = 3: Đã nộp        |               |
| BAO_CAO_LY_DO_TRA_VE |           |         |            | String         | Lý do báo          | cáo bị trả về |
|                      |           |         | Bảng 4.13: | Bảng dữ        | liệu đi nước ngoài |               |
Ban đầu, với mỗi quá trình đi nước ngoài thì sẽ có một quá trình tiếp nhận về nước tương ứng. Dự
định ban đầu của nhóm là tạo ra 2 bảng dữ liệu lưu 2 quá trình này, nhưng việc đó khiến cho việc tạo
mới, cập nhật dữ liệu ở 2 quá trình bị rời rạc dẫn đến khó khăn cho cán bộ thao tác cho nên nhóm đã
quyếtđịnhlàkếthợp2bảngdữliệulạithành1đểlàmchothaotácquátrìnhchocánbộphòngTổchức
| cán bộ | được dễ dàng | hơn. |     |     |     |     |
| ------ | ------------ | ---- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 84/160

|        | Trường | Đại      | học Bách  | Khoa     | Tp.Hồ | Chí  | Minh |     |     |     |
| ------ | ------ | -------- | --------- | -------- | ----- | ---- | ---- | --- | --- | --- |
|        | Khoa   | Khoa Học | và        | Kỹ Thuật | Máy   | Tính |      |     |     |     |
| 4.3.14 | Bảng   | dữ       | liệu công | tác      | trong |      | nước |     |     |     |
Bảng dữ liệu dùng để lưu trữ các quá trình đi công tác trong nước của cán bộ tại trường.
|                 |     |     | Hình | 4.17: | ERD | của | quá trình công | tác trong nước |              |               |
| --------------- | --- | --- | ---- | ----- | --- | --- | -------------- | -------------- | ------------ | ------------- |
| Tên trường      |     |     |      |       |     |     | Kiểu dữ liệu   | Chức năng      |              |               |
| SO_CV           |     |     |      |       |     |     | String         | Số công        | văn          |               |
| NGAY_QUYET_DINH |     |     |      |       |     |     | Number         | Ngày quyết     | định         |               |
| SHCC            |     |     |      |       |     |     | ObjectId       | Bảng dữ        | liệu tổ chức | cán bộ để xác |
|                 |     |     |      |       |     |     |                | định cán       | bộ           |               |
| NOI_DEN         |     |     |      |       |     |     | [ObjectId]     | Mỗi ObjectId   | là một danh  | mục tỉnh      |
thành phố
| VIET_TAT |     |     |     |     |     |     | ObjectId | Danh mục | mục đích công | tác trong |
| -------- | --- | --- | --- | --- | --- | --- | -------- | -------- | ------------- | --------- |
nước
| LY_DO         |     |     |      |     |            |     | String        | Lý do đi   |               |          |
| ------------- | --- | --- | ---- | --- | ---------- | --- | ------------- | ---------- | ------------- | -------- |
| KINH_PHI      |     |     |      |     |            |     | String        | Kinh phí   |               |          |
| BAT_DAU       |     |     |      |     |            |     | Number        | Ngày bắt   | đầu           |          |
| BAT_DAU_TYPE  |     |     |      |     |            |     | String        | Định dạng  | ngày của ngày | bắt đầu  |
| KET_THUC      |     |     |      |     |            |     | Number        | Ngày kết   | thúc          |          |
| KET_THUC_TYPE |     |     |      |     |            |     | String        | Định dạng  | ngày của ngày | kết thúc |
| GHI_CHU       |     |     |      |     |            |     | String        | Ghi chú    |               |          |
|               |     |     | Bảng |     | 4.14: Bảng | dữ  | liệu công tác | trong nước |               |          |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 85/160

|        | Trường | Đại học     | Bách Khoa | Tp.Hồ | Chí Minh |     |     |     |     |
| ------ | ------ | ----------- | --------- | ----- | -------- | --- | --- | --- | --- |
|        | Khoa   | Khoa Học và | Kỹ Thuật  | Máy   | Tính     |     |     |     |     |
| 4.3.15 | Bảng   | dữ liệu     | nghỉ việc |       |          |     |     |     |     |
Bảng dữ liệu nghỉ việc dùng để lưu trữ thông tin nghỉ việc của cán bộ tại trường.
|                 |     |     | Hình | 4.18: ERD | của      | quá trình | nghỉ việc                    |              |               |
| --------------- | --- | --- | ---- | --------- | -------- | --------- | ---------------------------- | ------------ | ------------- |
| Tên trường      |     |     |      |           | Kiểu     | dữ liệu   | Chức năng                    |              |               |
| SO_QUYET_DINH   |     |     |      |           | String   |           | Số quyết                     | định         |               |
| NGAY_QUYET_DINH |     |     |      |           | Number   |           | Ngày quyết                   | định         |               |
| SHCC            |     |     |      |           | ObjectId |           | Bảng dữ                      | liệu tổ chức | cán bộ để xác |
|                 |     |     |      |           |          |           | định cán                     | bộ           |               |
| NGAY_NGHI       |     |     |      |           | Number   |           | Ngày bắt                     | đầu nghỉ     |               |
| LY_DO_NGHI      |     |     |      |           | ObjectId |           | Danhmụcnghỉviệcđểxácđịnhloại |              |               |
|                 |     |     |      |           |          |           | nghỉ việc                    |              |               |
| NOI_DUNG        |     |     |      |           | String   |           | Nội dung                     | nghỉ         |               |
| DIEN_NGHI       |     |     |      |           | Number   |           | =1: Diện                     | biên chế     |               |
|                 |     |     |      |           |          |           | =2: Diện                     | hợp đồng     |               |
| GHI_CHU         |     |     |      |           | String   |           | Ghi chú                      |              |               |
|                 |     |     | Bảng | 4.15:     | Bảng dữ  | liệu nghỉ | việc                         |              |               |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 86/160

|        | Trường | Đại học  | Bách Khoa   | Tp.Hồ | Chí  | Minh |     |     |     |
| ------ | ------ | -------- | ----------- | ----- | ---- | ---- | --- | --- | --- |
|        | Khoa   | Khoa Học | và Kỹ Thuật | Máy   | Tính |      |     |     |     |
| 4.3.16 | Bảng   | dữ liệu  | nghỉ thai   | sản   |      |      |     |     |     |
Bảng dữ liệu nghỉ thai sản dùng để lưu trữ các quá trình nghỉ thai sản của cán bộ nữ tại trường.
|               |     |     | Hình | 4.19: | ERD của | quá trình nghỉ | thai sản  |               |               |
| ------------- | --- | --- | ---- | ----- | ------- | -------------- | --------- | ------------- | ------------- |
| Tên trường    |     |     |      |       |         | Kiểu dữ liệu   | Chức năng |               |               |
| SHCC          |     |     |      |       |         | ObjectId       | Bảng dữ   | liệu tổ chức  | cán bộ để xác |
|               |     |     |      |       |         |                | định cán  | bộ            |               |
| BAT_DAU       |     |     |      |       |         | Number         | Ngày bắt  | đầu           |               |
| BAT_DAU_TYPE  |     |     |      |       |         | String         | Định dạng | ngày của ngày | bắt đầu       |
| KET_THUC      |     |     |      |       |         | Number         | Ngày kết  | thúc          |               |
| KET_THUC_TYPE |     |     |      |       |         | String         | Định dạng | ngày của ngày | kết thúc      |
|               |     |     | Bảng | 4.16: | Bảng    | dữ liệu nghỉ   | thai sản  |               |               |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 87/160

|        | Trường | Đại học  | Bách Khoa   | Tp.Hồ | Chí  | Minh |     |     |     |
| ------ | ------ | -------- | ----------- | ----- | ---- | ---- | --- | --- | --- |
|        | Khoa   | Khoa Học | và Kỹ Thuật | Máy   | Tính |      |     |     |     |
| 4.3.17 | Bảng   | dữ liệu  | nghỉ phép   |       |      |      |     |     |     |
Bảng dữ liệu nghỉ phép dùng để lưu trữ các quá trình nghỉ phép của cán bộ tại trường.
|            |     |     | Hình | 4.20: ERD | của      | quá trình | nghỉ phép |              |                |
| ---------- | --- | --- | ---- | --------- | -------- | --------- | --------- | ------------ | -------------- |
| Tên trường |     |     |      |           | Kiểu     | dữ liệu   | Chức năng |              |                |
| SHCC       |     |     |      |           | ObjectId |           | Bảng dữ   | liệu tổ chức | cán bộ để xác  |
|            |     |     |      |           |          |           | định cán  | bộ           |                |
| LY_DO      |     |     |      |           | ObjectId |           | Danh mục  | nghỉ phép    | để xác định lý |
do nghỉ phép
| LY_DO_KHAC    |     |     |      |       | String  |           | Lý do khác |               |     |
| ------------- | --- | --- | ---- | ----- | ------- | --------- | ---------- | ------------- | --- |
| NOI_DEN       |     |     |      |       | String  |           | Nơi đến    |               |     |
| BAT_DAU       |     |     |      |       | Number  |           | Thời gian  | bắt đầu       |     |
| BAT_DAU_TYPE  |     |     |      |       | String  |           | Định dạng  | ngày bắt đầu  |     |
| KET_THUC      |     |     |      |       | Number  |           | Thời gian  | kết thúc      |     |
| KET_THUC_TYPE |     |     |      |       | String  |           | Định dạng  | ngày kết thúc |     |
| GHI_CHU       |     |     |      |       | String  |           | Ghi chú    |               |     |
|               |     |     | Bảng | 4.17: | Bảng dữ | liệu nghỉ | phép       |               |     |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 88/160

|        | Trường | Đại  | học Bách    | Khoa     | Tp.Hồ | Chí  | Minh |     |     |     |
| ------ | ------ | ---- | ----------- | -------- | ----- | ---- | ---- | --- | --- | --- |
|        | Khoa   | Khoa | Học và      | Kỹ Thuật | Máy   | Tính |      |     |     |     |
| 4.3.18 | Bảng   | dữ   | liệu nghiên |          | cứu   | khoa | học  |     |     |     |
Bảng dữ liệu dùng để lưu trữ các công trình nghiên cứu khoa học của cán bộ ở trường.
|                      |     |     | Hình | 4.21: | ERD | của | quá trình nghiên | cứu khoa học |               |               |
| -------------------- | --- | --- | ---- | ----- | --- | --- | ---------------- | ------------ | ------------- | ------------- |
| Tên trường           |     |     |      |       |     |     | Kiểu dữ liệu     | Chức năng    |               |               |
| TEN_DE_TAI           |     |     |      |       |     |     | String           | Tên đề       | tài           |               |
| MA_SO_CAP_QUAN_LY    |     |     |      |       |     |     | String           | Mã số cấp    | quản lý       |               |
| KINH_PHI             |     |     |      |       |     |     | String           | Kinh phí     |               |               |
| NGAY_NGHIEM_THU      |     |     |      |       |     |     | Number           | Ngày nghiệm  | thu           |               |
| NGAY_NGHIEM_THU_TYPE |     |     |      |       |     |     | String           | Định dạng    | ngày nghiệm   | thu           |
| KET_QUA              |     |     |      |       |     |     | String           | Kết quả      | nghiệm thu    |               |
| SHCC                 |     |     |      |       |     |     | ObjectId         | Bảng dữ      | liệu tổ chức  | cán bộ để xác |
|                      |     |     |      |       |     |     |                  | định cán     | bộ            |               |
| BAT_DAU              |     |     |      |       |     |     | Number           | Ngầy bắt     | đầu           |               |
| BAT_DAU_TYPE         |     |     |      |       |     |     | String           | Định dạng    | ngày bắt đầu  |               |
| KET_THUC             |     |     |      |       |     |     | Number           | Ngày kết     | thúc          |               |
| KET_THUC_TYPE        |     |     |      |       |     |     | String           | Định dạng    | ngày kết thúc |               |
| VAI_TRO              |     |     |      |       |     |     | String           | = CN:        | Chủ nhiệm     |               |
|                      |     |     |      |       |     |     |                  | # CN:        | Tham gia      |               |
| FILE_MINH_CHUNG      |     |     |      |       |     |     | [String]         | Danh sách    | các chuỗi     | trong đó mỗi  |
|                      |     |     |      |       |     |     |                  | chuỗi là     | một đường dẫn | tới một file  |
minh chứng
|     |     |     | Bảng | 4.18: | Bảng | dữ  | liệu nghiên | cứu khoa học |     |     |
| --- | --- | --- | ---- | ----- | ---- | --- | ----------- | ------------ | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 89/160

|        | Trường | Đại học  | Bách | Khoa     | Tp.Hồ | Chí  | Minh |     |     |     |
| ------ | ------ | -------- | ---- | -------- | ----- | ---- | ---- | --- | --- | --- |
|        | Khoa   | Khoa Học | và   | Kỹ Thuật | Máy   | Tính |      |     |     |     |
| 4.3.19 | Bảng   | dữ liệu  | bài  | viết     | khoa  | học  |      |     |     |     |
Bảng dữ liệu dùng để lưu trữ các bài viết khoa học của cán bộ ở trường được lên các tạp chí.
|              |     |     | Hình | 4.22: | ERD   | của  | quá trình bài    | viết khoa học |               |               |
| ------------ | --- | --- | ---- | ----- | ----- | ---- | ---------------- | ------------- | ------------- | ------------- |
| Tên trường   |     |     |      |       |       |      | Kiểu dữ liệu     | Chức năng     |               |               |
| SHCC         |     |     |      |       |       |      | ObjectId         | Bảng dữ       | liệu tổ chức  | cán bộ để xác |
|              |     |     |      |       |       |      |                  | định cán      | bộ            |               |
| TEN_TAC_GIA  |     |     |      |       |       |      | String           | Tên tác giả   |               |               |
| NAM_XUAT_BAN |     |     |      |       |       |      | Number           | Năm xuất      | bản           |               |
| TEN_BAI_VIET |     |     |      |       |       |      | String           | Tên bài viết  |               |               |
| TEN_TAP_CHI  |     |     |      |       |       |      | String           | Tên tạp chí   |               |               |
| SO_HIEU_ISSN |     |     |      |       |       |      | String           | Số hiệu ISSN  |               |               |
| SAN_PHAM     |     |     |      |       |       |      | String           | Mã sản phẩm   |               |               |
| DIEM_IF      |     |     |      |       |       |      | String           | Điểm Impact   | factor (IF)   |               |
| QUOC_TE      |     |     |      |       |       |      | Number           | Phạm vi       | xuất bản      |               |
|              |     |     |      |       |       |      |                  | = 0: Trong    | nước          |               |
|              |     |     |      |       |       |      |                  | = 1: Quốc     | tế            |               |
|              |     |     |      |       |       |      |                  | = 2: Trong    | và ngoài nước |               |
|              |     |     |      | Bảng  | 4.19: | Bảng | dữ liệu bài viết | khoa học      |               |               |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 90/160

|            | Trường |           | Đại học | Bách    | Khoa     | Tp.Hồ      | Chí      | Minh           |              |              |               |
| ---------- | ------ | --------- | ------- | ------- | -------- | ---------- | -------- | -------------- | ------------ | ------------ | ------------- |
|            | Khoa   | Khoa      | Học     | và Kỹ   | Thuật    | Máy        | Tính     |                |              |              |               |
| 4.3.20     | Bảng   |           | dữ liệu | bằng    | phát     | minh       |          |                |              |              |               |
| Bảng       | dữ     | liệu dùng | để      | lưu trữ | các bằng | phát       | minh     | của cán        | bộ ở trường. |              |               |
|            |        |           |         | Hình    | 4.23:    | ERD        | của quá  | trình bằng     | phát minh    |              |               |
| Tên trường |        |           |         |         |          |            | Kiểu     | dữ liệu        | Chức năng    |              |               |
| SHCC       |        |           |         |         |          |            | ObjectId |                | Bảng dữ      | liệu tổ chức | cán bộ để xác |
|            |        |           |         |         |          |            |          |                | định cán     | bộ           |               |
| TEN_BANG   |        |           |         |         |          |            | String   |                | Tên bằng     | phát minh    |               |
| SO_HIEU    |        |           |         |         |          |            | String   |                | Số hiệu bằng | phát minh    |               |
| NAM_CAP    |        |           |         |         |          |            | Number   |                | Năm cấp      |              |               |
| NOI_CAP    |        |           |         |         |          |            | String   |                | Nơi cấp      |              |               |
| TAC_GIA    |        |           |         |         |          |            | String   |                | Tên tác giả  |              |               |
| SAN_PHAM   |        |           |         |         |          |            | String   |                | Sản phẩm     |              |               |
| LOAI_BANG  |        |           |         |         |          |            | String   |                | Loại bằng    | phát minh    |               |
|            |        |           |         |         | Bảng     | 4.20: Bảng | dữ       | liệu bằng phát | minh         |              |               |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 91/160

|        | Trường | Đại học  | Bách Khoa   | Tp.Hồ | Chí Minh |     |     |     |     |
| ------ | ------ | -------- | ----------- | ----- | -------- | --- | --- | --- | --- |
|        | Khoa   | Khoa Học | và Kỹ Thuật | Máy   | Tính     |     |     |     |     |
| 4.3.21 | Bảng   | dữ liệu  | giải thưởng |       |          |     |     |     |     |
Bảng dữ liệu dùng để lưu trữ các giải thưởng của cán bộ khi còn đang công tác tại trường.
|                 |     |     | Hình | 4.24: ERD | của quá  | trình giải | thưởng          |              |               |
| --------------- | --- | --- | ---- | --------- | -------- | ---------- | --------------- | ------------ | ------------- |
| Tên trường      |     |     |      |           | Kiểu     | dữ liệu    | Chức năng       |              |               |
| SHCC            |     |     |      |           | ObjectId |            | Bảng dữ         | liệu tổ chức | cán bộ để xác |
|                 |     |     |      |           |          |            | định cán        | bộ           |               |
| TEN_GIAI_THUONG |     |     |      |           | String   |            | Tên giải thưởng |              |               |
| NOI_DUNG        |     |     |      |           | String   |            | Nội dung        |              |               |
| NOI_CAP         |     |     |      |           | String   |            | Nơi cấp         |              |               |
| NAM_CAP         |     |     |      |           | Number   |            | Năm cấp         |              |               |
|                 |     |     | Bảng | 4.21:     | Bảng dữ  | liệu giải  | thưởng          |              |               |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 92/160

|        | Trường | Đại  | học Bách   | Khoa     | Tp.Hồ | Chí  | Minh |     |     |     |
| ------ | ------ | ---- | ---------- | -------- | ----- | ---- | ---- | --- | --- | --- |
|        | Khoa   | Khoa | Học và     | Kỹ Thuật | Máy   | Tính |      |     |     |     |
| 4.3.22 | Bảng   | dữ   | liệu hướng |          | dẫn   | luận | văn  |     |     |     |
Bảng dữ liệu dùng để lưu trữ các quá trình hướng dẫn nghiên cứu, luận văn cho sinh viên của cán bộ
| là giảng       | viên tại | trường. |      |       |      |     |                 |              |                   |               |
| -------------- | -------- | ------- | ---- | ----- | ---- | --- | --------------- | ------------ | ----------------- | ------------- |
|                |          |         | Hình | 4.25: | ERD  | của | quá trình hướng | dẫn luận văn |                   |               |
| Tên trường     |          |         |      |       |      |     | Kiểu dữ liệu    | Chức năng    |                   |               |
| SHCC           |          |         |      |       |      |     | ObjectId        | Bảng dữ      | liệu tổ chức      | cán bộ để xác |
|                |          |         |      |       |      |     |                 | định cán     | bộ                |               |
| HO_TEN         |          |         |      |       |      |     | String          | Họ tên       | của các sinh viên |               |
| TEN_LUAN_VAN   |          |         |      |       |      |     | String          | Tên đề       | tài               |               |
| NAM_TOT_NGHIEP |          |         |      |       |      |     | Number          | Năm tốt      | nghiệp            |               |
| SAN_PHAM       |          |         |      |       |      |     | String          | Thông        | tin sản phẩm      |               |
| BAC_DAO_TAO    |          |         |      |       |      |     | String          | Bậc đào      | tạo               |               |
|                |          |         | Bảng | 4.22: | Bảng | dữ  | liệu hướng dẫn  | luận văn     |                   |               |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 93/160

|             | Trường |           | Đại học | Bách    | Khoa      | Tp.Hồ | Chí      | Minh        |            |                  |               |
| ----------- | ------ | --------- | ------- | ------- | --------- | ----- | -------- | ----------- | ---------- | ---------------- | ------------- |
|             | Khoa   | Khoa      | Học     | và Kỹ   | Thuật     | Máy   | Tính     |             |            |                  |               |
| 4.3.23      | Bảng   |           | dữ liệu | thông   | báo       |       |          |             |            |                  |               |
| Bảng        | dữ     | liệu dùng | để      | lưu trữ | các thông | báo   | được     | gửi đến cho | cán bộ.    |                  |               |
|             |        |           |         |         | Hình      | 4.26: | ERD của  | bảng thông  | báo        |                  |               |
| Tên trường  |        |           |         |         |           |       | Kiểu     | dữ liệu     | Chức năng  |                  |               |
| Email       |        |           |         |         |           |       | ObjectId |             | Bảng dữ    | liệu tổ chức     | cán bộ để xác |
|             |        |           |         |         |           |       |          |             | định cán   | bộ               |               |
| TITLE       |        |           |         |         |           |       | String   |             | Tiêu đề    | thông báo        |               |
| SUB_TITLE   |        |           |         |         |           |       | String   |             | Nội dung   | thông báo        |               |
| ICON        |        |           |         |         |           |       | String   |             | Icon thông | báo              |               |
| ICON_COLOR  |        |           |         |         |           |       | String   |             | Màu icon   |                  |               |
| TARGET_LINK |        |           |         |         |           |       | String   |             | Đường      | dẫn tới nội dung | thông báo     |
| READ        |        |           |         |         |           |       | Number   |             | = 1: Đã    | đọc              |               |
|             |        |           |         |         |           |       |          |             | = 0: Chưa  | đọc              |               |
| BUTTON_LINK |        |           |         |         |           |       | String   |             |            |                  |               |
| SEND_TIME   |        |           |         |         |           |       | Number   |             | Ngày gửi   |                  |               |
|             |        |           |         |         | Bảng      | 4.23: | Bảng dữ  | liệu thông  | báo        |                  |               |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 94/160

|        | Trường | Đại học  | Bách Khoa   | Tp.Hồ | Chí  | Minh |     |     |     |
| ------ | ------ | -------- | ----------- | ----- | ---- | ---- | --- | --- | --- |
|        | Khoa   | Khoa Học | và Kỹ Thuật | Máy   | Tính |      |     |     |     |
| 4.3.24 | Bảng   | dữ liệu  | hỗ trợ      | thông | tin  |      |     |     |     |
Khicánbộcầnhỗtrợnhưtạomới,cậpnhậtthôngtinliênquanđếnlýlịchcánbộhayquátrìnhđào
tạo thì cán bộ sẽ gửi yêu cầu phòng tổ chức cán bộ. Và với mỗi yêu cầu đó đều sẽ được ghi lại ở bảng dữ
| liệu hỗ       | trợ thông | tin. |      |           |          |         |                              |                |               |
| ------------- | --------- | ---- | ---- | --------- | -------- | ------- | ---------------------------- | -------------- | ------------- |
|               |           |      | Hình | 4.27: ERD | của bảng | hỗ trợ  | thông tin                    |                |               |
| Tên trường    |           |      |      |           | Kiểu     | dữ liệu | Chức năng                    |                |               |
| SHCC          |           |      |      |           | ObjectId |         | Bảng dữ                      | liệu tổ chức   | cán bộ để xác |
|               |           |      |      |           |          |         | định cán                     | bộ gửi yêu cầu |               |
| SHCC_ASSIGN   |           |      |      |           | Object   |         | Bảng dữ                      | liệu tổ chức   | cán bộ để xác |
|               |           |      |      |           |          |         | định cán                     | bộ duyệt yêu   | cầu           |
| DATA          |           |      |      |           | String   |         | Dữ liệu                      | cần duyệt      |               |
| MODIFIED_DATE |           |      |      |           | Number   |         | Ngày sửa                     | đổi cuối cùng  |               |
| TYPE          |           |      |      |           | String   |         | Loại yêu                     | cầu            |               |
|               |           |      |      |           |          |         | = create:                    | Tạo mới        |               |
|               |           |      |      |           |          |         | = update:                    | Cập nhật       |               |
| QT_ID         |           |      |      |           | ObjectId |         | Khóachínhcủaquátrìnhcầnhỗtrợ |                |               |
| APPROVED      |           |      |      |           | Number   |         | Trạng thái                   | hiện tại       |               |
|               |           |      |      |           |          |         | = -1: Từ                     | chối           |               |
|               |           |      |      |           |          |         | = 0: Chờ                     | duyệt          |               |
= 1: Đã duyệt
| QT        |     |     |      |            | String  |        | Tên quá   | trình   |     |
| --------- | --- | --- | ---- | ---------- | ------- | ------ | --------- | ------- | --- |
| SENT_DATE |     |     |      |            | Number  |        | Ngày gửi  | yêu cầu |     |
|           |     |     | Bảng | 4.24: Bảng | dữ liệu | hỗ trợ | thông tin |         |     |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 95/160

|        | Trường | Đại  | học Bách  | Khoa Tp.Hồ   | Chí Minh  |     |     |     |
| ------ | ------ | ---- | --------- | ------------ | --------- | --- | --- | --- |
|        | Khoa   | Khoa | Học và    | Kỹ Thuật Máy | Tính      |     |     |     |
| 4.3.25 | Bảng   | dữ   | liệu phản | hồi hỗ       | trợ thông | tin |     |     |
Bảngdữliệudùngđểlưutrữcácphảnhồicủacánbộduyệtyêucầutrongtrườnghợpyêucầuhỗtrợ
| bị vấn         | đề cần sửa | lại. |      |            |                   |                              |              |               |
| -------------- | ---------- | ---- | ---- | ---------- | ----------------- | ---------------------------- | ------------ | ------------- |
|                |            |      | Hình | 4.28: ERD  | của bảng phản hồi | hỗ trợ thông tin             |              |               |
| Tên trường     |            |      |      |            | Kiểu dữ           | liệu Chức năng               |              |               |
| MA_YEU_CAU     |            |      |      |            | ObjectId          | Bảngdữliệuhỗtrợthôngtinđểxác |              |               |
|                |            |      |      |            |                   | định yêu                     | cầu hỗ trợ   |               |
| NGUOI_PHAN_HOI |            |      |      |            | ObjectId          | Bảng dữ                      | liệu tổ chức | cán bộ để xác |
|                |            |      |      |            |                   | định cán                     | bộ           |               |
| THOI_GIAN      |            |      |      |            | Number            | Ngày gửi                     | phản hồi     |               |
| NOI_DUNG       |            |      |      |            | String            | Nội dung                     |              |               |
|                |            |      | Bảng | 4.25: Bảng | dữ liệu phản hồi  | hỗ trợ thông tin             |              |               |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 96/160

|     | Trường | Đại  | học  | Bách  | Khoa  | Tp.Hồ | Chí Minh |     |      |     |     |     |
| --- | ------ | ---- | ---- | ----- | ----- | ----- | -------- | --- | ---- | --- | --- | --- |
|     | Khoa   | Khoa | Học  | và Kỹ | Thuật | Máy   | Tính     |     |      |     |     |     |
| 4.4 | Thiết  | kế   | công | cụ    | hỗ    | trợ   | import   | dữ  | liệu |     |     |     |
Một vấn đề của cổng thông tin và hệ thống của trường nhân văn: Dữ liệu không đồng nhất với nhau
do từ nhiều nguồn khác nhau cung cấp. Khi nhóm nhận đề tài và bắt đầu hiện thực, có sự chênh lệch về
dữ liệu cán bộ hiện tại trong hệ thống và dữ liệu cán bộ phòng TCCB cung cấp.
Điều này gây ra một số khó khăn nhất định vì nếu dữ liệu cán bộ không đủ đúng đắn và cụ thể, kéo
theonhữngquátrình khác củacán bộ bịmấtliênkếtvớinhau.Do đónhóm đãđềra mộtgiảipháp: xây
dựng lại tất cả bảng dữ liệu liên quan đến cán bộ, kết hợp nền tảng sẵn có và xây dựng thêm các bảng
dữ liệu quá trình cán bộ, đảm bảo đúng theo danh sách của phòng TCCB cung cấp.
| 4.4.1 | Bài       | toán | cơ   | bản      |          |     |        |              |     |     |     |     |
| ----- | --------- | ---- | ---- | -------- | -------- | --- | ------ | ------------ | --- | --- | --- | --- |
| Dãy   | con chung |      | tăng | dài nhất | (Longest |     | Common | Subsequence) |     |     |     |     |
Cho 2 dãy X X ...X và Y Y ...Y . Yêu cầu cần tìm ra một dãy Z Z ...Z thỏa
|       |         | 1 2     | n       | 1   | 2 m |     |     |     |     | 1 2 k |     |     |
| ----- | ------- | ------- | ------- | --- | --- | --- | --- | --- | --- | ----- | --- | --- |
| • Dãy | Z là    | dãy     | con của | dãy | X   |     |     |     |     |       |     |     |
| • Dãy | Z là    | dãy     | con của | dãy | Y   |     |     |     |     |       |     |     |
| • k   | đạt giá | trị lớn | nhất    | có  | thể |     |     |     |     |       |     |     |
Note: Dãy A A ...A được gọi là dãy con của xâu B B ...B khi thỏa tất cả điều kiện sau:
|     | 1   | 2   | n   |     |     |     | 1   | 2 m |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
• n≤m
• Tồn tại dãy 1≤i <i <...<i ≤m thỏa A =B với mọi j từ 1 đến n.
|           |      |        | 1      | 2   | n       |         | j        | ij  |     |     |     |     |
| --------- | ---- | ------ | ------ | --- | ------- | ------- | -------- | --- | --- | --- | --- | --- |
| Ví dụ dãy | abce | thì sẽ | có các | dãy | con là: | ab, ac, | be, bce, | ... |     |     |     |     |
Ta có thể giải bài toán trên bằng phương pháp quy hoạch động: Gọi hàm LCS(X ,Y ) là giá trị k
i j
lớn nhất khi xét 2 dãy X 1 X 2 ...X i và Y 1 Y 2 ...Y j . Kết quả bài toán sẽ là LCS(X n ,Y m ).

|     |     |     |     |     | 0   |     |     |     |     | if i=0 | or j =0 (0) |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ------ | ----------- | --- |

| Công | thức: | LCS(X | ,Y  | )=  | LCS(X | ,Y  | )ˆ+1 |     |     | if i,j >0 | and x =y | (1) |
| ---- | ----- | ----- | --- | --- | ----- | --- | ---- | --- | --- | --------- | -------- | --- |
|      |       |       | i   | j   |       | i−1 | j−1  |     |     |           | i        | j   |
max{LCS(X
|     |        |     |           |      |       |           | ,Y ),LCS(X |         | ,Y    | )} if i,j >0 | and x ̸=y | (2) |
| --- | ------ | --- | --------- | ---- | ----- | --------- | ---------- | ------- | ----- | ------------ | --------- | --- |
|     |        |     |           |      |       |           | i j−1      |         | i−1 j |              | i         | j   |
| Cơ  | sở của | hàm | quy hoạch | động | chính | là trường | hợp        | (0) i=0 | or    | j =0         |           |     |
Ví dụ với X =XMJYAUZ and Y =MZJAWXU thì đây là bảng chứa giá trị LCS(X ,Y ).
i j
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 97/160

| Trường    | Đại học Bách | Khoa Tp.Hồ   | Chí Minh       |         |
| --------- | ------------ | ------------ | -------------- | ------- |
| Khoa Khoa | Học và       | Kỹ Thuật Máy | Tính           |         |
|           |              | Hình         | 4.29: Bảng giá | trị LCS |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 98/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
1 function LCSLength(X[1..n], Y[1..m])
2 C = array(0..n, 0..m)
3 for i := 0..n
4 C[i,0] = 0
5 for j := 0..m
6 C[0,j] = 0
7 for i := 1..n
8 for j := 1..m
9 if X[i] = Y[j]
10 C[i,j] := C[i-1,j-1] + 1
11 else
12 C[i,j] := max(C[i,j-1], C[i-1,j])
13 return C[n,m]
Listing 4.1: Mã giả tính hàm LCS
Hàm bên trên nhận như dãy đầu vào X[1..n] và Y[1..m], tính LCS giữa X[1..i] và Y[1..j] cho tất cả
1≤i≤n và 1≤j ≤m, và lưu trữ nó trong C[i,j]. C[n,m] chính là kết quả của LCX(X ,Y ).
n m
4.4.2 Cách áp dụng bài toán
Trong quá trình hiện thực, nhóm nhận ra rằng hầu hết các file dữ liệu excel được cung cấp đều thiếu
mã, nghĩa là chỉ có các tên, các chuỗi ký tự như các thông tin về: Họ và tên cán bộ, tên đơn vị, tên bộ
môn, địa chỉ ... Với mục tiêu tối ưu và thống nhất dữ liệu, tăng giao tiếp và sự phụ thuộc của các bảng
dữ liệu, các dữ liệu là chữ này nên có một mã đại diện.
Khi triển khai database và xây dựng công cụ hỗ trợ về import dữ liệu trên hệ thống của trường Đại
học Khoa học Xã hội và Nhân văn, các bảng sẵn có như dữ liệu tỉnh thành, quận huyện, ... hay dữ liệu
về đơn vị của trường đều đã có mã. Do đó nhóm đã xây dựng một giải pháp để từ các chuỗi ký tự, các
công cụ có thể xác định được mã để đưa dữ liệu được vào bảng với % chính xác là tối ưu trong phạm vi
chấp nhận được, khi đó phần % sai sót còn lại chúng ta có thể thực hiện điều chỉnh thủ công.
KhicómộtchuỗilàtênAvàcómộtdanhsáchcác(mã,tênB )củabảngdữliệu.Thìtasẽvậndụng
i
bài toán LCS trên để có thể tìm được cặp (mã, tên B ) tốt nhất bằng cây lựa chọn cặp (mã, tên B ) sao
i i
cho giá trị LCS(A, B ) là lớn nhất, nghĩa là LCS(A, B ) ≥ LCS(A, B ) với mọi j.
i i j
Hướng thực hiện trên đã giúp nhóm tìm ra được mã từ chuỗi ký tự trong nhiều trường hợp. Từ ấy
công tác hỗ trợ phần dữ liệu trên hệ thống của trường được giải quyết.
Nhóm cũng chấp hành nghiêm chỉnh các quy định về bảo mật và an toàn dữ liệu.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 99/160

| Chương | 5    |     |     |       |
| ------ | ---- | --- | --- | ----- |
| HIỆN   | THỰC |     | HỆ  | THỐNG |
Nhómsẽtrìnhbàycáckếtquảsauquátrìnhpháttriển,bàngiao,chỉnhsửatheophảnhồicủaphòng
| TCCB trường | Đại học Khoa | học Xã | hội và Nhân văn, | ĐHQG - HCM. |
| ----------- | ------------ | ------ | ---------------- | ----------- |

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
5.1 Cán bộ
5.1.1 Thông tin cán bộ
Hình 5.1: Menu thông tin cán bộ
Trang này sẽ giúp cán bộ kiểm soát thông tin của bản thân.
Cánbộtruycậpvàotrangnàysẽcócáctrườngthôngtinmàbảnthânđượcphépcậpnhật,hệthống
sẽ hiện lần lưu thay đổi cuối cùng của cán bộ.
Các trường thông tin chỉ đọc, chỉ có phòng TCCB mới có quyền thay đổi. Còn các thông tin khác,
cán bộ sẽ được phép chỉnh sửa và cập nhật sau đó lưu thay đổi. Hệ thống cũng được thiết kế một cách
thuận tiện nhất cho việc nhập liệu của cán bộ. Đa phần các mục đều là chọn hơn là gõ text.
5.1.1.1 Thông tin cá nhân
Các trường thông tin được hiện thực và sắp xếp một cách khoa học nhất cho toàn bộ cán bộ trường
Đại học Khoa học Xã hội và Nhân văn, ĐHQG - HCM. Ví dụ:
• Phần nơi ở hiện tại có thể giống với địa chỉ thường trú, nhóm đã thiết kế tính năng sao chép
nhanh địa chỉ để thao tác nhanh hơn. Tương tự với 2 phần điện thoại cá nhân và điện thoại
liên lạc.
• Đối với phần Đảng viên, Đoàn viên, Công đoàn viên, cán bộ nếu thuộc cái đối tượng trên khi
nhấn vào sẽ hiện các trường thông tin về ngày gia nhập và nơi gia nhập.
• Với phần tổ chức chính trị, xã hội nghề nghiệp khác, cán bộ có thể chủ động tạo mới, cập nhật
hoặc xóa thông tin.
Hình 5.2: Modal tạo mới, chỉnh sửa tham gia tổ chức khác của cán bộ
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 101/160

| Trường    | Đại học | Bách | Khoa       | Tp.Hồ      | Chí Minh       |               |     |        |
| --------- | ------- | ---- | ---------- | ---------- | -------------- | ------------- | --- | ------ |
| Khoa Khoa | Học     | và   | Kỹ Thuật   | Máy        | Tính           |               |     |        |
|           |         |      | (a)        | Các trường | thông tin      | cơ bản        |     |        |
|           |         | (b)  | Các trường | thông      | tin về các     | tổ chức chính | trị |        |
|           | Hình    | 5.3: | Mục thông  | tin        | các nhân trong | phần thông    | tin | cán bộ |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 102/160

| Trường          | Đại học  | Bách Khoa   | Tp.Hồ | Chí  | Minh |     |     |
| --------------- | -------- | ----------- | ----- | ---- | ---- | --- | --- |
| Khoa Khoa       | Học      | và Kỹ Thuật | Máy   | Tính |      |     |     |
| 5.1.1.2 Quan hệ | gia đình |             |       |      |      |     |     |
Tiếp nối phần thông tin cá nhân, cán bộ sẽ nhập thông tin gia đình của mình, gia đình bên chồng/vợ
của mình.
|     |      | Hình | 5.4: Giao | điện     | phần quan | hệ gia   | đình        |
| --- | ---- | ---- | --------- | -------- | --------- | -------- | ----------- |
|     | Hình | 5.5: | Modal     | tạo mới, | chỉnh     | sửa quan | hệ gia đình |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 103/160

|         | Trường    | Đại học | Bách  | Khoa Tp.Hồ | Chí  | Minh  |              |
| ------- | --------- | ------- | ----- | ---------- | ---- | ----- | ------------ |
|         | Khoa Khoa | Học     | và Kỹ | Thuật Máy  | Tính |       |              |
| 5.1.1.3 | Thông tin | công    | tác   |            |      |       |              |
|         |           |         |       | Hình 5.6:  | Phần | Thông | tin công tác |
Phần này thể hiện các thông tin liên quan đến công tác tại trường như chức danh nghề nghiệp, hợp
đồng, lương, BHYT, BHXH, ... Ngoài ra còn hiển thị các tình trạng của cán bộ.
| 5.1.1.4 | Quá trình | học | tập, công | tác       |     |       |                   |
| ------- | --------- | --- | --------- | --------- | --- | ----- | ----------------- |
|         |           |     | Hình      | 5.7: Phần | quá | trình | học tập, công tác |
Phần này thể hiện toàn bộ quá trình học tập và lịch sử công tác của cán bộ.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 104/160

|         | Trường    | Đại học | Bách  | Khoa Tp.Hồ | Chí        | Minh      |           |
| ------- | --------- | ------- | ----- | ---------- | ---------- | --------- | --------- |
|         | Khoa Khoa | Học     | và Kỹ | Thuật Máy  | Tính       |           |           |
| 5.1.1.5 | Trình độ  |         |       |            |            |           |           |
|         |           |         | Hình  | 5.8:       | Phần thông | tin trình | độ cán bộ |
Phần này thể hiện các học vị, chức danh, chứng chỉ và chứng nhận của cán bộ. Cán bộ có quyền gửi
| yêu cầu | cho phòng | TCCB về | tạo mới, | chỉnh | sửa,       | xóa thông | tin.      |
| ------- | --------- | ------- | -------- | ----- | ---------- | --------- | --------- |
|         |           |         | Hình     | 5.9:  | Phần thông | tin trình | độ cán bộ |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 105/160

| Trường    | Đại học Bách | Khoa Tp.Hồ   | Chí Minh |
| --------- | ------------ | ------------ | -------- |
| Khoa Khoa | Học và       | Kỹ Thuật Máy | Tính     |
Cán bộ có thể chỉnh sửa thông tin, gửi minh chứng lên để phòng TCCB duyệt.
|     |     | Hình | 5.10: Modal đào tạo |
| --- | --- | ---- | ------------------- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 106/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
5.1.1.6 Yêu cầu chỉnh sửa thông tin
Các trường thông tin chỉ đọc sẽ đôi khi nhầm lẫn, modal hình sẽ giúp cán bộ gửi yêu cầu chỉnh sửa
cho phòng TCCB xem xét và duyệt hoặc phản hồi và từ chối.
Hình 5.11: Modal thay đổi thông tin
Ngoài ra còn có nút để xuất ra hồ sơ cán bộ.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 107/160

|       | Trường    | Đại học | Bách  | Khoa Tp.Hồ | Chí Minh           |         |         |
| ----- | --------- | ------- | ----- | ---------- | ------------------ | ------- | ------- |
|       | Khoa Khoa | Học     | và Kỹ | Thuật Máy  | Tính               |         |         |
| 5.2   | Đào tạo,  | bồi     | dưỡng |            |                    |         |         |
| 5.2.1 | Trang cá  | nhân    |       |            |                    |         |         |
|       |           |         | Hình  | 5.12: Menu | đào tạo, bồi dưỡng | ở trang | cá nhân |
Trang này sẽ giúp cán bộ kiểm soát được những quá trình đào tạo, bồi dưỡng của bản thân.
Ở quá trình đào tạo, bồi dưỡng thì cán bộ có thể xem. Khi có nhu cầu cập nhật và thêm mới thì cán
bộ sẽ phải gửi yêu cầu đến cho phòng TCCB để quản lý quá trình và minh chứng.
|     |     | Hình | 5.13: | Modal | khi tạo mới/cập nhật | thông | tin đào tạo |
| --- | --- | ---- | ----- | ----- | -------------------- | ----- | ----------- |
Khi yêu cầu thành công thì dữ liệu sẽ phải chờ phòng TCCB duyệt thành công, lúc đó quá trình đào
| tạo mới | ghi nhận được | dữ  | liệu. |     |     |     |     |
| ------- | ------------- | --- | ----- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 108/160

|     | Trường | Đại  | học Bách | Khoa     | Tp.Hồ | Chí  | Minh |     |     |
| --- | ------ | ---- | -------- | -------- | ----- | ---- | ---- | --- | --- |
|     | Khoa   | Khoa | Học và   | Kỹ Thuật | Máy   | Tính |      |     |     |
Sau khi cán bộ phòng TCCB bấm duyệt yêu cầu thì dữ liệu sẽ được ghi vào quá trình đào tạo của
| cán bộ, | cũng như | là thông | tin   | cán bộ | phần    | thông   | tin về | trình độ       |                 |
| ------- | -------- | -------- | ----- | ------ | ------- | ------- | ------ | -------------- | --------------- |
|         |          |          | Hình  | 5.14:  | Trang   | cá      | nhân   | - thông tin    | đào tạo         |
|         |          | Hình     | 5.15: | Trang  | cá nhân | - thông | tin    | cán bộ - thông | tin về trình độ |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 109/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
5.2.2 Tổ chức cán bộ
Hình 5.16: Menu đào tạo ở tổ chức cán bộ
Trang này sẽ giúp cán bộ phòng TCCB quản lý được quá trình đào tạo của tất cả cán bộ trong
trường.
Khi cán bộ phòng TCCB vào trang này thì sẽ thấy được danh sách các quá trình đào tạo của mỗi
cán bộ. Cán bộ phòng TCCB có toàn quyền cập nhật, chỉnh sửa hay tạo mới quá trình và không phải
gửi yêu cầu giống như cán bộ.
Hình 5.17: Danh sách quá trình đào tạo
Khi cán bộ gửi yêu cầu cần tạo mới/cập nhật thông tin thì cán bộ phòng TCCB sẽ thấy được những
thông tin khi cán bộ gửi yêu cầu sang.
Hình 5.18: Hiển thị thông tin yêu cầu ở phòng TCCB
Nếu cán bộ phòng TCCB thấy thông tin trên là hợp lý thì cán bộ sẽ bấm duyệt, còn không thì sẽ từ
chối kèm theo đó là những phản hồi của mình giải thích những lý do từ chối yêu cầu duyệt. Khi đó cán
bộ sẽ biết và sẽ chỉnh sửa, gửi lại cho phòng TCCB.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 110/160

| Trường    | Đại học Bách | Khoa Tp.Hồ     | Chí Minh        |                  |         |
| --------- | ------------ | -------------- | --------------- | ---------------- | ------- |
| Khoa Khoa | Học và       | Kỹ Thuật Máy   | Tính            |                  |         |
|           | Hình         | 5.19: Phản hồi | của phòng TCCB  | khi từ chối      | yêu cầu |
|           | Hình 5.20:   | Thông tin      | đào tạo của cán | bộ yêu cầu duyệt | khi gửi |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 111/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
5.3 Đi nước ngoài
5.3.1 Trang cá nhân
Hình 5.21: Menu đi nước ngoài ở trang cá nhân
Trang này sẽ giúp cán bộ xem được những quá trình đi công tác nước ngoài của bản thân.
Hình 5.22: Danh sách đi nước ngoài ở trang cá nhân
Cán bộ có thể tự thống kê được lịch sử bản thân đi nước ngoài vì mục đích nào, tương ứng với mỗi
mục đích là số lần đi tương ứng.
Hình 5.23: Thống kê mục đích đi nước ngoài ở trang cá nhân
Ứng với mỗi quá trình thì cán bộ chỉ được quyền cập nhật thêm báo cáo khi sắp về nước.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 112/160

|     | Trường | Đại      | học Bách | Khoa     | Tp.Hồ | Chí      | Minh        |               |         |
| --- | ------ | -------- | -------- | -------- | ----- | -------- | ----------- | ------------- | ------- |
|     | Khoa   | Khoa Học | và       | Kỹ Thuật | Máy   | Tính     |             |               |         |
|     |        | Hình     | 5.24:    | Modal    | cập   | nhật báo | cáo đi nước | ngoài ở trang | cá nhân |
Sau khi cập nhật báo cáo xong thì tình trạng báo cáo sẽ chuyển sang Đang chờ duyệt và sẽ phải chờ
| cán bộ | phòng TCCB | duyệt | báo  | cáo.  |          |     |             |             |      |
| ------ | ---------- | ----- | ---- | ----- | -------- | --- | ----------- | ----------- | ---- |
|        |            |       | Hình | 5.25: | Cập nhật | báo | cáo đi nước | ngoài thành | công |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 113/160

|     | Trường    | Đại học | Bách  | Khoa  | Tp.Hồ | Chí  | Minh |     |     |
| --- | --------- | ------- | ----- | ----- | ----- | ---- | ---- | --- | --- |
|     | Khoa Khoa | Học     | và Kỹ | Thuật | Máy   | Tính |      |     |     |
Khi cán bộ TCCB xem xét báo cáo, nếu như cảm thấy báo cáo là hợp lý thì sẽ bấm duyệt và ngược
lại thì báo cáo sẽ bị trả về kèm theo đó là lý do mà cán bộ phòng TCCB phản hồi lại cho cán bộ giải
| thích tại | sao báo cáo | không | hợp lệ.    |     |     |         |           |           |     |
| --------- | ----------- | ----- | ---------- | --- | --- | ------- | --------- | --------- | --- |
|           |             |       | Hình 5.26: | Kết | quả | báo cáo | khi phòng | TCCB phản | hồi |
Đối với những báo cáo bị trả lại, thì cán bộ có thể vào xem phản hồi đến từ phòng TCCB để có thể
| cập nhật | chỉnh sửa | và gửi | lại cho | cán bộ | phòng | TCCB. |        |            |     |
| -------- | --------- | ------ | ------- | ------ | ----- | ----- | ------ | ---------- | --- |
|          |           |        | Hình    | 5.27:  | Phản  | hồi   | đến từ | phòng TCCB |     |
| 5.3.2    | Tổ chức   | cán    | bộ      |        |       |       |        |            |     |
Trang này sẽ giúp cán bộ phòng TCCB quản lý được quá trình đi công tác nước ngoài của tất cảc
| cán bộ | trong trường. |     |     |     |     |     |     |     |     |
| ------ | ------------- | --- | --- | --- | --- | --- | --- | --- | --- |
Ngoài việc tìm kiếm cơ bản trên thanh tìm kiếm, cán bộ phòng TCCB còn có thể tìm kiếm nâng cao,
| cụ thể | là có thể tìm | kiếm | qua các | thuộc | tính |     |     |     |     |
| ------ | ------------- | ---- | ------- | ----- | ---- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 114/160

| Trường | Đại  | học    | Bách Khoa  | Tp.Hồ | Chí  | Minh                 |        |
| ------ | ---- | ------ | ---------- | ----- | ---- | -------------------- | ------ |
| Khoa   | Khoa | Học và | Kỹ Thuật   | Máy   | Tính |                      |        |
|        |      |        | Hình 5.28: | Menu  | đi   | nước ngoài ở tổ chức | cán bộ |
|        |      |        | Hình 5.29: | Trang | đi   | nước ngoài ở tổ chức | cán bộ |
•
Thời gian:
| – Theo | ngày | đi         |     |      |     |     |     |
| ------ | ---- | ---------- | --- | ---- | --- | --- | --- |
| – Theo | ngày | về         |     |      |     |     |     |
| – Theo | ngày | quyết định |     |      |     |     |     |
| – Theo | ngày | quyết định | về  | nước |     |     |     |
•
Học vị
– Cử nhân
| – Thạc       | sĩ        |          |      |     |     |     |     |
| ------------ | --------- | -------- | ---- | --- | --- | --- | --- |
| – Tiến       | sĩ        |          |      |     |     |     |     |
| • Theo tình  | trạng     | công tác |      |     |     |     |     |
| – Đã         | tiếp nhận | về nước  |      |     |     |     |     |
| – Hết        | hạn và    | chưa về  | nước |     |     |     |     |
| – Đang       | ở nước    | ngoài    |      |     |     |     |     |
| – Chưa       | diễn      | ra       |      |     |     |     |     |
| • Tình trạng | báo       | cáo      |      |     |     |     |     |
| – Chưa       | nộp       |          |      |     |     |     |     |
| – Đang       | chờ       | duyệt    |      |     |     |     |     |
| – Báo        | cáo bị    | trả lại  |      |     |     |     |     |
– Đã nộp
| • Đơn vị công | tác |     |     |     |     |     |     |
| ------------- | --- | --- | --- | --- | --- | --- | --- |
• Cán bộ
•
| Mục đích | đi công | tác nước | ngoài |     |     |     |     |
| -------- | ------- | -------- | ----- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 115/160

|     | Trường    | Đại học | Bách Khoa   | Tp.Hồ | Chí  | Minh |     |
| --- | --------- | ------- | ----------- | ----- | ---- | ---- | --- |
|     | Khoa Khoa | Học     | và Kỹ Thuật | Máy   | Tính |      |     |
Ngoài tính năng thống kê mục đích giống như bên trang cá nhân thì ở tổ chức cán bộ còn có thể tải
danh sách dưới dạng file excel nhằm mục đích báo cáo hàng năm ở trường. Ở cả 2 tính năng này thì hệ
thống đều sẽ hiện thực theo tìm kiếm nâng cao tương ứng. Nghĩa là sau khi tìm kiếm nâng cao ta có
danh sách hiển thị như thế nào trên trang thì khi tải file excel hay thống kê mục đích sẽ theo danh sách
đó.
|     |     |     | Hình | 5.30: | Nút tải danh | sách đi nước | ngoài |
| --- | --- | --- | ---- | ----- | ------------ | ------------ | ----- |
Cán bộ phòng TCCB sẽ có toàn quyền cập nhật, tạo mới các quá trình. Khi cán bộ muốn tiếp nhận
về nước khi sắp kết thúc quá trình công tác ở nước ngoài và quá trình đi kéo dài trên 30 ngày thì cán
bộ sẽ yêu cầu phòng TCCB tạo mới quyết định tiếp nhận về nước, ngoài ra cán bộ phòng TCCB sẽ có
| trách nhiệm | duyệt | báo cáo | được gửi | đến từ | cán bộ. |     |     |
| ----------- | ----- | ------- | -------- | ------ | ------- | --- | --- |
Hình 5.31: Modal phản hồi báo cáo đi nước ngoài, thêm mới tiếp nhận về nước của tổ chức cán bộ
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 116/160

|     | Trường    | Đại học | Bách Khoa   | Tp.Hồ Chí  | Minh      |      |     |
| --- | --------- | ------- | ----------- | ---------- | --------- | ---- | --- |
|     | Khoa Khoa | Học     | và Kỹ Thuật | Máy Tính   |           |      |     |
| 5.4 | Quá trình | chức    | vụ          |            |           |      |     |
|     |           |         | Hình        | 5.32: Menu | quá trình | chức | vụ  |
Quá trình này giúp cho cán bộ phòng Tổ chức - Cán bộ có thể quả lí được chức vụ của các cán bộ
| quản lí | trong trường. |     |     |     |     |     |     |
| ------- | ------------- | --- | --- | --- | --- | --- | --- |
Menu chức vụ này chỉ có thể được nhìn thấy bởi cán bộ thuộc phòng tổ chức cán bộ.
|     |     |     | Hình | 5.33: Trang | quản lý quá | trình chức | vụ  |
| --- | --- | --- | ---- | ----------- | ----------- | ---------- | --- |
Mỗi hàng tương ứng là một chức vụ của cán bộ. Các thông tin của chức vụ bao gồm: họ tên, mã số
của cán bộ nắm giữ chức vụ, ngày sinh của cán bộ, chức danh nghề nghiệp của cán bộ, tên chức vụ, đơn
vị cấp trường và cấp khoa mà cán bộ quản lí (nếu chức vụ quản lí đơn vị cấp trường thì phần đơn vị cấp
khoa sẽ trống), hệ số phụ cấp, ngày ra và số quyết định bổ nhiệm, chức vụ đó là chức vụ chính hay là
kiêm nhiệm. Mỗi cán bộ bắt buộc có một chức vụ chính và có thể có thêm một hay nhiều chức vụ kiêm
nhiệm.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 117/160

|     | Trường    | Đại học | Bách Khoa | Tp.Hồ | Chí  | Minh |     |
| --- | --------- | ------- | --------- | ----- | ---- | ---- | --- |
|     | Khoa Khoa | Học và  | Kỹ Thuật  | Máy   | Tính |      |     |
Khi cán bộ muốn tạo mới một chức vụ thì sẽ nhấn nút tạo mới ở góc dưới bên phải màn hình sẽ hiện
lênmodalđểtạomớimộtchứcvụ.NếungườidùngnhấnnútOKđểxácnhậnthìchứcvụchínhmớicủa
|     |     |     | Hình | 5.34: | Modal | tạo | mới chức vụ |
| --- | --- | --- | ---- | ----- | ----- | --- | ----------- |
cán bộ sẽ được tạo đồng thời chức vụ chính hiện tại của cán bộ đó (nếu có) sẽ được tự động chuyền về
| thành chức | vụ kiêm | nhiệm. |     |     |     |     |     |
| ---------- | ------- | ------ | --- | --- | --- | --- | --- |
Khi người dùng nhấn vào nút chính sửa trên mỗi hàng để chỉnh sửa thông tin của chức vụ thì modal
| chỉnh sửa | sẽ được hiện | ra. |      |       |       |           |             |
| --------- | ------------ | --- | ---- | ----- | ----- | --------- | ----------- |
|           |              |     | Hình | 5.35: | Chỉnh | sửa thông | tin chức vụ |
Trong trường hợp chức vụ được chỉnh sửa là chức vụ chính thì nút chức vụ chính sẽ được chặn lại để
người dùng không chuyển chức vụ chính thành chức vụ phụ được. Ngược lại trong trường hợp chức vụ
được chỉnh sửa là chức vụ phụ thì nút chức vụ chính sẽ được mở ra. Nếu người dùng tick vào nút đó thì
| sẽ hiện | thông báo tương | tự như | khi | tạo mới | chức | vụ chính. |     |
| ------- | --------------- | ------ | --- | ------- | ---- | --------- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 118/160

|       | Trường    | Đại học | Bách Khoa | Tp.Hồ | Chí Minh |     |
| ----- | --------- | ------- | --------- | ----- | -------- | --- |
|       | Khoa Khoa | Học và  | Kỹ Thuật  | Máy   | Tính     |     |
| 5.4.1 | Hiển thị  | chức    | vụ theo   | cán   | bộ       |     |
Ở trang danh sách khi nhấn vào nút "Hiển thị theo cán bộ"thì sẽ bảng sẽ chuyển sang chế độ xem
| theo cán | bộ.         |     |      |       |               |                |
| -------- | ----------- | --- | ---- | ----- | ------------- | -------------- |
|          |             |     | Hình | 5.36: | Hiển thị chức | vụ theo cán bộ |
| 5.4.2    | Filter chức | vụ  |      |       |               |                |
|          |             |     |      | Hình  | 5.37: Filter  | chức vụ        |
Filter hỗ trợ người dùng có thể tìm kiếm và thực hiện các tác vụ liên quan tới thống kê các cán bộ
| có chức | vụ quản lí | trong trường. |     |     |     |     |
| ------- | ---------- | ------------- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 119/160

|     | Trường    | Đại học | Bách Khoa   | Tp.Hồ | Chí      | Minh          |     |
| --- | --------- | ------- | ----------- | ----- | -------- | ------------- | --- |
|     | Khoa Khoa | Học     | và Kỹ Thuật | Máy   | Tính     |               |     |
| 5.5 | Quá trình |         | hơp đồng    | lao   | động     |               |     |
|     |           |         | Hình        | 5.38: | Menu hợp | đồng lao động |     |
Quá trình hợp đồng lao động quản lí hợp đồng lao động mà cán bộ kí với trường Đại học Khoa học
| Xã hội | và Nhân văn. |     |     |     |     |     |     |
| ------ | ------------ | --- | --- | --- | --- | --- | --- |
Menu hợp đồng lao động chỉ có thể được nhìn thấy bởi cán bộ thuộc phòng Tổ chức - Cán bộ.
|     |     |     | Hình 5.39: | Trang | danh sách | hợp đồng | lao động |
| --- | --- | --- | ---------- | ----- | --------- | -------- | -------- |
Mỗi hàng tương ứng là một hợp đồng lao động. Các thông tin của hợp đồng được hiển thị bao gồm:
họ tên, mã số của cán bộ, số hợp đồng và ngày ký, thời gian hiệu lực của hợp đồng, ngày tái kí hợp đồng
| mới và | cán bộ ký hợp | đồng. |     |     |     |     |     |
| ------ | ------------- | ----- | --- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 120/160

|       | Trường | Đại  | học    | Bách Khoa | Tp.Hồ | Chí Minh |     |
| ----- | ------ | ---- | ------ | --------- | ----- | -------- | --- |
|       | Khoa   | Khoa | Học và | Kỹ Thuật  | Máy   | Tính     |     |
| 5.5.1 | Trang  | tạo  | mới    | hợp đồng  |       |          |     |
Khingườidùngnhấnvàonúttạomớihợpđồngtrêntrangthìsẽchuyểnsangtrangtạomớihợpđồng.
| 5.5.1.1 | Thông | tin | hợp đồng | và    | thông     | tin phía trường |                       |
| ------- | ----- | --- | -------- | ----- | --------- | --------------- | --------------------- |
|         |       |     | Hình     | 5.40: | Thông tin | hợp đồng và     | thông tin phía trường |
Trong phần này thì số hợp đồng sẽ được hệ thống tự động sinh ra dựa theo số thứ tự hợp đồng của
năm hiện tại. Ngày ký mặc định là ngày hiện tại. Đại diện kí chỉ có thể chọn được hai người là Hiệu
| trường  | và Trường | phòng | phòng    | Tổ chức | - Cán | bộ.            |        |
| ------- | --------- | ----- | -------- | ------- | ----- | -------------- | ------ |
| 5.5.1.2 | Thông     | tin   | phía cán | bộ      |       |                |        |
|         |           |       |          | Hình    | 5.41: | Thông tin phía | cán bộ |
Nếu cán bộ được kí hợp đồng là cán bộ mới thì cán bộ soạn hợp đồng sẽ chọn mục cán bộ mới và
điền thông tin của người được kí hợp đồng vào các mục tương ứng. Phần mã số cán bộ sẽ được hệ thống
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 121/160

|     | Trường    | Đại học | Bách  | Khoa Tp.Hồ | Chí Minh |     |
| --- | --------- | ------- | ----- | ---------- | -------- | --- |
|     | Khoa Khoa | Học     | và Kỹ | Thuật Máy  | Tính     |     |
sinh ra khi cán bộ soạn hợp đồng chọn địa điểm làm việc và ngạch ở phần điều khoản hợp đồng. Ngược
lại nếu là cán bộ cũ thì hệ thống sẽ tự động điền thông tin của cán bộ theo danh sách cán bộ vào từng
ô tương ứng.
| 5.5.1.3 | Điều khoản | hợp | đồng |            |            |          |
| ------- | ---------- | --- | ---- | ---------- | ---------- | -------- |
|         |            |     |      | Hình 5.42: | Điều khoản | hợp đồng |
Cán bộ soạn hợp đồng điền thông tin điều khoản hợp đồng, sau khi chọn địa điểm làm việc và ngạch
thì mã số cán bộ mới sẽ được hệ thống tự động sinh ra trên phần thông tin cán bộ hỗ trợ cho phần tạo
| hồ sơ cán | bộ cho cán | bộ  | mới. |     |     |     |
| --------- | ---------- | --- | ---- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 122/160

| Trường    | Đại học Bách | Khoa Tp.Hồ   | Chí Minh |     |
| --------- | ------------ | ------------ | -------- | --- |
| Khoa Khoa | Học và       | Kỹ Thuật Máy | Tính     |     |
5.5.1.4 In hợp đồng
Sau khi cán bộ soạn xong hợp đồng có thể nhấn nút in ở danh sách để in hợp đồng ra file word như
hình dưới.
|     |     | Hình | 5.43: File hợp đồng | khi in |
| --- | --- | ---- | ------------------- | ------ |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 123/160

|     | Trường    | Đại học | Bách | Khoa     | Tp.Hồ | Chí  | Minh     |             |     |
| --- | --------- | ------- | ---- | -------- | ----- | ---- | -------- | ----------- | --- |
|     | Khoa Khoa | Học     | và   | Kỹ Thuật | Máy   | Tính |          |             |     |
| 5.6 | Quá trình |         | hợp  | đồng     | làm   |      | việc     | (viên chức) |     |
|     |           |         |      | Hình     | 5.44: | Menu | hợp đồng | viên chức   |     |
Quá trình hợp đồng làm việc (viên chức) dùng để quản lí hợp đồng được kí với cán bộ sau khi thi
viên chức.
Menu hợp đồng làm việc (viên chức) chỉ được thấy bởi cán bộ thuộc phòng tổ chức cán bộ.
|     |     |     | Hình | 5.45: | Trang | danh | sách | hợp đồng | viên chức |
| --- | --- | --- | ---- | ----- | ----- | ---- | ---- | -------- | --------- |
Mỗi hàng tương ứng là một hợp đồng làm việc (viên chức) với các thông tin được hiển thị là cán bộ
được kí hợp đồng, số quyết định tuyển dụng và ngày ra quyết định tuyển dụng, thời gian hiệu lực của
| hợp đồng | và cán bộ | kí quyết | định | tuyển | dụng. |     |     |     |     |
| -------- | --------- | -------- | ---- | ----- | ----- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 124/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
5.6.1 Tạo mới hợp đồng làm việc (viên chức)
Khi nhấn nút tạo mới hợp đồng sẽ chuyển sang trang tạo mới hợp đồng.
5.6.1.1 Thông tin phía trường
Hình 5.46: Thông tin phía trường
Cán bộ soạn hợp đồng điền số quyết định tuyển dụng và chọn cán bộ đại diện ký hợp đồng.Cán bộ
đại diện kí hợp đồng chỉ có thể là Hiệu trưởng và Trưởng phòng Tổ chức - Cán bộ.
5.6.1.2 Thông tin phía cán bộ
Hình 5.47: Thông tin phía cán bộ
Cánbộsoạnhợpđồngnhậpthôngtintươngtụnhưphầnthôngtinphíacánbộởhợpđồnglaođộng.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 125/160

|         | Trường     | Đại học | Bách  | Khoa Tp.Hồ | Chí Minh   |          |
| ------- | ---------- | ------- | ----- | ---------- | ---------- | -------- |
|         | Khoa Khoa  | Học     | và Kỹ | Thuật Máy  | Tính       |          |
| 5.6.1.3 | Điều khoản | hợp     | đồng  |            |            |          |
|         |            |         |       | Hình 5.48: | Điểu khoản | hợp đồng |
Tương tự như hợp đồng lao động, cán bộ soạn hợp đồng sẽ nhập thông tin liên quan tới điều khoản
hợp đồng. Sau khi có thông tin về địa điểm làm việc và ngạch, hệ thống sẽ tự động sinh ra mã số cán bộ
| cho cán | bộ mới hỗ | trợ cho | việc tạo | mới hồ | sơ cán bộ. |     |
| ------- | --------- | ------- | -------- | ------ | ---------- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 126/160

|     | Trường    | Đại học | Bách  | Khoa Tp.Hồ | Chí   | Minh   |           |               |
| --- | --------- | ------- | ----- | ---------- | ----- | ------ | --------- | ------------- |
|     | Khoa Khoa | Học     | và Kỹ | Thuật Máy  | Tính  |        |           |               |
| 5.7 | Quá trình | hợp     | đồng  | trả        | lương |        | - trách   | nhiệm         |
|     |           | Hình    | 5.49: | Menu hợp   | đồng  | đơn vị | trả lương | - trách nhiệm |
Quá trình hợp đồng đơn vị trả lương - trách nhiệm dùng để quản lí hợp đồng đơn vị trả lương và hợp
| đồng trách | nhiệm được | kí  | với cán | bộ trong | trường. |     |     |     |
| ---------- | ---------- | --- | ------- | -------- | ------- | --- | --- | --- |
Menu của hợp đồng đơn vị trả lương - trách nhiệm chỉ được thấy bởi phòng TCCB.
|     |     |     | Hình | 5.50: | Trang | danh sách | hợp | đồng đã ký |
| --- | --- | --- | ---- | ----- | ----- | --------- | --- | ---------- |
Mỗi hàng trong bảng tương ứng với một hợp đồng với những thông tin được hiển thị như là họ tên,
mã số của cán bộ, số và ngày ký của hợp đồng, thời gian hiệu lực của hợp đồng, cán bộ duyệt hồ sơ.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 127/160

|     | Trường    | Đại học | Bách Khoa | Tp.Hồ Chí  | Minh                  |
| --- | --------- | ------- | --------- | ---------- | --------------------- |
|     | Khoa Khoa | Học và  | Kỹ Thuật  | Máy Tính   |                       |
| 5.8 | Quá trình | khen    | thưởng    |            |                       |
|     |           |         | Hình      | 5.51: Menu | quá trình khen thưởng |
Quá trình khen thưởng quản lí quá trình khen thưởng của các cá nhân và đơn vị trong trường.
|     |     |     | Hình | 5.52: Trang | quản lý khen thưởng |
| --- | --- | --- | ---- | ----------- | ------------------- |
Mỗi hàng tương ứng với một khen thưởng với những thông tin được hiển thị là loại đối tượng, tên cá
nhân, tên tập thể, năm đạt đươc, thành tích đạt được, số quyết định, điểm thi đua.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 128/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
5.9 Quá trình kỷ luật
Hình 5.53: Menu quá trình kỷ luật
Quá trình kỷ luật quản lí quá trình kỷ luật của các cá nhân trong trường.
Hình 5.54: Trang quản lý kỷ luật
Mỗi hàng tương ứng với mỗi quá trình kỷ luật với những thông tin được hiển thị như họ, tên mã số
cán bộ, hình thức kỷ luật, nội dung kỷ luật, số quyết định và ngày ra quyết định kỷ luật, điểm thi đua.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 129/160

|      | Trường | Đại   | học | Bách Khoa   | Tp.Hồ | Chí  | Minh      |      |      |
| ---- | ------ | ----- | --- | ----------- | ----- | ---- | --------- | ---- | ---- |
|      | Khoa   | Khoa  | Học | và Kỹ Thuật | Máy   | Tính |           |      |      |
| 5.10 | Quá    | trình |     | sáng kiến   |       |      |           |      |      |
|      |        |       |     | Hình        | 5.55: | Menu | quá trình | sáng | kiến |
Quá trình sáng kiến quản lí các sáng kiến đã được công nhận của cán bộ trong trường để hỗ trợ cho
| quá trình | xét | khen thưởng |     | hằng năm.  |       |      |         |           |      |
| --------- | --- | ----------- | --- | ---------- | ----- | ---- | ------- | --------- | ---- |
|           |     |             |     | Hình 5.56: | Trang | quản | lý danh | sách sáng | kiến |
Mỗi hàng tương ứng với một sáng kiến với các thông tin được hiển thị như là họ tên, mã số cán bộ,
học vị, chức danh nghề nghiệp, chức vụ, mã số của sáng kiến, tên sáng kiến, số quyết định công nhận
| sáng kiến, | cấp | ảnh hưởng |     | của sáng kiến. |     |     |     |     |     |
| ---------- | --- | --------- | --- | -------------- | --- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 130/160

|       | Trường   | Đại học  | Bách Khoa   | Tp.Hồ  | Chí      | Minh  |               |          |
| ----- | -------- | -------- | ----------- | ------ | -------- | ----- | ------------- | -------- |
|       | Khoa     | Khoa Học | và Kỹ Thuật | Máy    | Tính     |       |               |          |
| 5.11  | Xử       | lý yêu   | cầu thông   |        | tin      |       |               |          |
| Trang | này dùng | để xử    | lý các yêu  | cầu về | tạo mới, | cập   | nhật, xóa     | dữ liệu. |
|       |          |          | Hình        | 5.57:  | Menu     | xử lý | yêu cầu thông | tin      |
|       |          |          | Hình 5.58:  | Giao   | diện     | trang | yêu cầu thông | tin      |
Cán bộ sẽ thấy các yêu cầu của bản thân, còn phòng TCCB sẽ xử lý tất cả các yêu cầu mà cán bộ
gửi. Chấp nhận thì thực thi yêu cầu, từ chối thì phản hồi lý do cho cán bộ biết.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 131/160

|      | Trường | Đại học  | Bách   | Khoa Tp.Hồ | Chí  | Minh         |          |     |     |
| ---- | ------ | -------- | ------ | ---------- | ---- | ------------ | -------- | --- | --- |
|      | Khoa   | Khoa Học | và Kỹ  | Thuật Máy  | Tính |              |          |     |     |
| 5.12 | Quá    | trình    | nghiên | cứu        | khoa | học          |          |     |     |
|      |        |          | Hình   | 5.59: Menu | quá  | trình nghiên | cứu khoa | học |     |
Quá trình nghiên cứu khoa học quản lí các đề tài nghiên cứu khoa học của các cán bộ trong trường
Cán bộ phòng Tổ chức - Cán bộ chỉ có quyền được xem đối với quá trình này.
|     |     | Hình | 5.60: Giao | diện trang | quản | lý quá trình | nghiên | cứu khoa | học |
| --- | --- | ---- | ---------- | ---------- | ---- | ------------ | ------ | -------- | --- |
Mỗi hàng tương ứng là mỗi nghiên cứu với các thông tin được hiển thị như tên đề tài, cấp quản lí,
kinh phí, vai trò của cán bộ, họ tên, mã số của cán bộ thực hiện, thời gian nghiệm thu.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 132/160

|      | Trường | Đại   | học | Bách Khoa   | Tp.Hồ | Chí  | Minh                |      |
| ---- | ------ | ----- | --- | ----------- | ----- | ---- | ------------------- | ---- |
|      | Khoa   | Khoa  | Học | và Kỹ Thuật | Máy   | Tính |                     |      |
| 5.13 | Quá    | trình |     | bằng phát   |       | minh |                     |      |
|      |        |       |     | Hình        | 5.61: | Menu | quá trình bằng phát | minh |
Quá trình bằng phát minh quản lí những bằng phát minh của các cán bộ trong trường.
|     |     |     |     | Hình 5.62: | Giao | diện | quá trình bằng phát | minh |
| --- | --- | --- | --- | ---------- | ---- | ---- | ------------------- | ---- |
Mỗi hàng tương ứng với một bằng phát minh với những thông tin được hiển thị như tên bằng phát
| minh, số | hiệu, | năm | cấp, nơi | cấp, tên | tác giả, | họ  | tên cán bộ |     |
| -------- | ----- | --- | -------- | -------- | -------- | --- | ---------- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 133/160

|      | Trường | Đại   | học Bách | Khoa     | Tp.Hồ | Chí  | Minh            |          |
| ---- | ------ | ----- | -------- | -------- | ----- | ---- | --------------- | -------- |
|      | Khoa   | Khoa  | Học và   | Kỹ Thuật | Máy   | Tính |                 |          |
| 5.14 | Quá    | trình | hướng    |          | dẫn   | luận | văn             |          |
|      |        |       | Hình     | 5.63:    | Menu  | quá  | trình hướng dẫn | luận văn |
Quá trình hướng dẫn luận văn quản lí những luận văn các cán bộ trong trường mà các cán bộ trong
| trường | hướng | dẫn. |      |       |      |      |                 |              |
| ------ | ----- | ---- | ---- | ----- | ---- | ---- | --------------- | ------------ |
|        |       |      | Hình | 5.64: | Giao | diện | quá trình hướng | dẫn luận văn |
Mỗi hàng tương ứng với một luận văn mà cán bộ hướng dẫn với thông tin được hiển thị như họ tên
của những sinh viên thực hiện, tên luận văn, năm tốt nghiệp, bậc đào tạo, họ tên cán bộ hướng dẫn
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 134/160

|      | Trường | Đại      | học Bách | Khoa     | Tp.Hồ      | Chí  | Minh          |          |
| ---- | ------ | -------- | -------- | -------- | ---------- | ---- | ------------- | -------- |
|      | Khoa   | Khoa Học | và       | Kỹ Thuật | Máy        | Tính |               |          |
| 5.15 | Danh   | sách     | bài      | viết     | khoa       |      | học           |          |
|      |        |          |          | Hình     | 5.65: Menu | danh | sách bài viết | khoa học |
Danh sách bài viết khoa học quản lí những bài viết khoa học của cán bộ trong trường.
|     |     |     | Hình | 5.66: | Giao | diện | danh sách bài | viết khoa học |
| --- | --- | --- | ---- | ----- | ---- | ---- | ------------- | ------------- |
Mỗi hàng tương ứng với mộtbài viết khoa học với những thông tinđược hiển thị như tên tác giả, tên
| bài viết, | tên tạp | chí, số | hiệu ISSN, | năm | xuất | bản |     |     |
| --------- | ------- | ------- | ---------- | --- | ---- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 135/160

|      | Trường | Đại         | học Bách | Khoa     | Tp.Hồ | Chí    | Minh      |              |         |
| ---- | ------ | ----------- | -------- | -------- | ----- | ------ | --------- | ------------ | ------- |
|      | Khoa   | Khoa Học    | và       | Kỹ Thuật | Máy   | Tính   |           |              |         |
| 5.16 | Danh   | sách        | giải     | thưởng   |       |        |           |              |         |
|      |        |             |          | Hình     | 5.67: | Menu   | danh sách | giải thưởng  |         |
| Danh | sách   | giải thưởng | quản     | lí những | giải  | thưởng | của       | cán bộ trong | trường. |
|      |        |             |          | Hình     | 5.68: | Giao   | diện      | giải thưởng  |         |
Mỗi hàng tương ứng với một giải thưởng với các thông tin được hiển thị như họ và tên cán bộ, tên
| giải thưởng, | năm | đạt được, | nơi | cấp. |     |     |     |     |     |
| ------------ | --- | --------- | --- | ---- | --- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 136/160

|      | Trường | Đại   | học | Bách Khoa   | Tp.Hồ | Chí  | Minh              |          |
| ---- | ------ | ----- | --- | ----------- | ----- | ---- | ----------------- | -------- |
|      | Khoa   | Khoa  | Học | và Kỹ Thuật | Máy   | Tính |                   |          |
| 5.17 | Quá    | trình |     | học tập     | công  |      | tác               |          |
|      |        |       |     | Hình        | 5.69: | Menu | quá trình học tập | công tác |
Quá trình học tập công tác quản lí các quá trình học tập công tác của cán bộ trong trường.
|     |     |     |     | Hình 5.70: | Giao | diện | quá trình học | tập công tác |
| --- | --- | --- | --- | ---------- | ---- | ---- | ------------- | ------------ |
Mỗi hàng tương ứng với mỗi quá trình học tập công tác với những thông tin được hiển thị như họ
| tên cán | bộ, nội | dung | học tập, | công | tác, thời | gian | và tình trạng. |     |
| ------- | ------- | ---- | -------- | ---- | --------- | ---- | -------------- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 137/160

|      | Trường    | Đại học | Bách  | Khoa  | Tp.Hồ Chí | Minh |     |
| ---- | --------- | ------- | ----- | ----- | --------- | ---- | --- |
|      | Khoa Khoa | Học     | và Kỹ | Thuật | Máy Tính  |      |     |
| 5.18 | Nghỉ      | thai    | sản   |       |           |      |     |
Trang này dùng để xử lý các quá trình nghỉ thai sản của cán bộ nữ ở trường.
|     |     |     |      | Hình  | 5.71: | Menu nghỉ  | thai sản      |
| --- | --- | --- | ---- | ----- | ----- | ---------- | ------------- |
|     |     |     | Hình | 5.72: | Giao  | diện trang | nghỉ thai sản |
Cán bộ nữ sẽ xem những quá trình nghỉ thai sản của bản thân, còn phòng TCCB sẽ xem và xử lý tất
| cả các | quá trình nghỉ | thai | sản của | cán bộ | nữ trong | trường. |     |
| ------ | -------------- | ---- | ------- | ------ | -------- | ------- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 138/160

|      | Trường    | Đại học | Bách Khoa   | Tp.Hồ | Chí Minh |     |     |
| ---- | --------- | ------- | ----------- | ----- | -------- | --- | --- |
|      | Khoa Khoa | Học     | và Kỹ Thuật | Máy   | Tính     |     |     |
| 5.19 | Nghỉ      | phép    |             |       |          |     |     |
Trang này dùng để xử lý các quá trình nghỉ phép năm của cán bộ ở trường.
|     |     |     |      | Hình  | 5.73: Menu | nghỉ phép  |      |
| --- | --- | --- | ---- | ----- | ---------- | ---------- | ---- |
|     |     |     | Hình | 5.74: | Giao diện  | trang nghỉ | phép |
Đối với cán bộ thì có thể xem được những quá trình nghỉ phép của bản thân, và có thể tạo mới quá
trình, nhưng không thể cập nhật được quá trình do nó có thể ảnh hưởng đến số ngày phép năm của cán
bộ. Đối với cán bộ phòng TCCB thì toàn quyền cập nhật, tạo mới được quá trình, do đó nếu cán bộ
muốn cập nhật quá trình thì cán bộ phải liên hệ phòng TCCB để có thể cập nhật quá trình nghỉ.
Khi cán bộ, hay cán bộ phòng TCCB tạo mới/cập nhật quá trình thì phải đảm bảo điều kiện là số
ngày phép năm có thể sử dụng không được ít hơn số ngày tính phép của quá trình. Trong trường hợp
| quá trình | nghỉ phép | liên năm | thì phải | đảm | bảo điều kiện | trên ở cả | 2 năm. |
| --------- | --------- | -------- | -------- | --- | ------------- | --------- | ------ |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 139/160

|     | Trường | Đại học     | Bách Khoa | Tp.Hồ | Chí   | Minh      |           |
| --- | ------ | ----------- | --------- | ----- | ----- | --------- | --------- |
|     | Khoa   | Khoa Học và | Kỹ Thuật  | Máy   | Tính  |           |           |
|     |        |             | Hình      | 5.75: | Modal | quá trình | nghỉ phép |
Số ngày tính phép có thể được giảm tùy thuộc vào lý do nghỉ, cụ thể ứng với mỗi lý do nghỉ thì số
| ngày tính | phép    | được giảm tương      | ứng | là      |     |             |     |
| --------- | ------- | -------------------- | --- | ------- | --- | ----------- | --- |
| • Bản     | thân    | kết hôn: 3 ngày      |     |         |     |             |     |
| • Con     | cái kết | hôn: 1 ngày          |     |         |     |             |     |
| • Tứ      | thân    | phụ mẫu, vợ (chồng), |     | con cái | qua | đời: 3 ngày |     |
| • Khác:   | 0 ngày  |                      |     |         |     |             |     |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 140/160

|      | Trường | Đại       | học  | Bách Khoa    | Tp.Hồ | Chí  | Minh |                |         |
| ---- | ------ | --------- | ---- | ------------ | ----- | ---- | ---- | -------------- | ------- |
|      | Khoa   | Khoa      | Học  | và Kỹ Thuật  | Máy   | Tính |      |                |         |
| 5.20 | Quá    | trình     |      | nghỉ việc    |       |      |      |                |         |
|      |        |           |      | Hình         | 5.76: | Menu | quá  | trình nghỉ     | việc    |
| Quá  | trình  | nghỉ việc | quản | lí quá trình | nghỉ  | viêc | của  | cán bộ trong   | trường. |
|      |        |           |      | Hình 5.77:   | Trang | quản | lý   | danh sách nghỉ | việc    |
Mỗi hàng tương ứng với mỗi quá trình nghỉ việc với các thông tin được hiển thị như họ tên cán bộ,
| quyết định | nghỉ, | ngày | nghỉ, | nội dung. |     |     |     |     |     |
| ---------- | ----- | ---- | ----- | --------- | --- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 141/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
5.21 Quá trình kéo dài công tác
Hình 5.78: Menu quá trình kéo dài công tác
Quá trình sẽ quản lí những lần kéo dài thời gian công tác của cán bộ tại trường. Các cán bộ được
phép kéo dài công tác là Giảng viên có trình độ chuyên môn từ Tiến sĩ trở lên và đã đủ tuổi về hưu.
Hình 5.79: Trang quản lý kéo dài công tác
Mỗi hàng tương ứng với mỗi quá trình kéo dài công tác với các thông tin được hiển thị như họ tên
cán bộ, chức danh khoa học, trình độ chuyên môn, đơn vị công tác, số quyết định, ngày quyết định, thời
gian được kéo dài ....
Trên thực tế, cán bộ phòng TCCB sẽ thực hiện 2 công việc chính dưới đây.
• Tạo danh sách kéo dài công tác dự kiến ở năm tiếp theo
• Khi có danh sách chính thức kéo dài công tác của năm thì sẽ ra quyết định chính thức.
Dựa vào đó, hệ thống sẽ được hiện thực sao cho đáp ứng đủ 2 yêu cầu trên.
Hình 5.80: Trang tạo danh sách kéo dài công tác dự kiến
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 142/160

| Trường | Đại  | học Bách    | Khoa     | Tp.Hồ   | Chí     | Minh             |                   |         |
| ------ | ---- | ----------- | -------- | ------- | ------- | ---------------- | ----------------- | ------- |
| Khoa   | Khoa | Học và      | Kỹ Thuật | Máy     | Tính    |                  |                   |         |
|        | Hình | 5.81: Modal | cập      | nhật số | quyết   | định theo danh   | sách chính thức   | mỗi năm |
|        | Hình | 5.82: Trang | quản     | lý      | kéo dài | công tác sau khi | cập nhật số quyết | định    |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 143/160

|      | Trường    | Đại học Bách | Khoa Tp.Hồ   | Chí  | Minh |     |
| ---- | --------- | ------------ | ------------ | ---- | ---- | --- |
|      | Khoa Khoa | Học và       | Kỹ Thuật Máy | Tính |      |     |
| 5.22 | Dashboard | Phòng        | Tổ           | chức | Cán  | bộ  |
Trangnàysẽhiệncácbiểuđồtrựcquanthốngkêcácdữliệuhiệntạihoặctheocácgiaiđoạnđãđược
định nghĩa.
|     |     |     | Hình | 5.83: Trang | Dashboard | (1) |
| --- | --- | --- | ---- | ----------- | --------- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 144/160

| Trường    | Đại học Bách | Khoa Tp.Hồ   | Chí Minh              |     |
| --------- | ------------ | ------------ | --------------------- | --- |
| Khoa Khoa | Học và       | Kỹ Thuật Máy | Tính                  |     |
|           |              | Hình         | 5.84: Trang Dashboard | (2) |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 145/160

| Trường    | Đại học Bách | Khoa Tp.Hồ   | Chí Minh              |     |
| --------- | ------------ | ------------ | --------------------- | --- |
| Khoa Khoa | Học và       | Kỹ Thuật Máy | Tính                  |     |
|           |              | Hình         | 5.85: Trang Dashboard | (3) |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 146/160

| Chương | 6   |     |     |
| ------ | --- | --- | --- |
| KIỂM   | THỬ |     |     |
Chương kiểm thử nhóm sẽ liệt kê các phương pháp, kỹ thuật mà nhóm đã sử dụng, các kết quả kiểm
| thử trước | khi triển khai | hệ thống thực | tế  |
| --------- | -------------- | ------------- | --- |

|     | Trường | Đại  | học | Bách  | Khoa   | Tp.Hồ | Chí Minh |     |     |     |
| --- | ------ | ---- | --- | ----- | ------ | ----- | -------- | --- | --- | --- |
|     | Khoa   | Khoa | Học | và Kỹ | Thuật  | Máy   | Tính     |     |     |     |
| 6.1 | Kiểm   | thử  | đơn | vị    | - Unit |       | Testing  |     |     |     |
Nhóm sử dụng MOCHA Framework để tiến hành kiểm thử đơn vị. Kiểm thử đơn vị được tiến hành
trên các thư viện, hàm chức năng đơn lẻ. Cụ thể đoạn code sau đây kiểm thử các chức năng thao tác với
mảng (array).
| describe('@Array', |     |     | () => | {   |     |     |     |     |     |     |
| ------------------ | --- | --- | ----- | --- | --- | --- | --- | --- | --- | --- |
1
| describe('#Includes', |     |     |     | () => | {   |     |     |     |     |     |
| --------------------- | --- | --- | --- | ----- | --- | --- | --- | --- | --- | --- |
2
| 3   | it('Included', |                                 |     | function | ()  | {   |        |     |     |     |
| --- | -------------- | ------------------------------- | --- | -------- | --- | --- | ------ | --- | --- | --- |
| 4   |                | let array                       | =   | [1, 2,   | 3]; |     |        |     |     |     |
| 5   |                | assert.equal(array.includes(3), |     |          |     |     | true); |     |     |     |
| 6   | });            |                                 |     |          |     |     |        |     |     |     |
7
|     | it('Not | Included', |     | function |     | () { |     |     |     |     |
| --- | ------- | ---------- | --- | -------- | --- | ---- | --- | --- | --- | --- |
8
|     |     | let array | =   | [1, 2, | 3]; |     |     |     |     |     |
| --- | --- | --------- | --- | ------ | --- | --- | --- | --- | --- | --- |
9
|     |     | assert.equal(array.includes(4), |     |     |     |     | false); |     |     |     |
| --- | --- | ------------------------------- | --- | --- | --- | --- | ------- | --- | --- | --- |
10
})
11
12 });
13
describe('#Some',
| 14  |         |                              | ()  | => {     |     |      |         |     |            |     |
| --- | ------- | ---------------------------- | --- | -------- | --- | ---- | ------- | --- | ---------- | --- |
|     | it('Has | element',                    |     |          |     |      |         |     |            |     |
| 15  |         |                              |     | function |     | () { |         |     |            |     |
| 16  |         | let array                    | =   | [1, 2,   | 3]; |      |         |     |            |     |
|     |         | assert.equal(array.some(item |     |          |     |      | => item | ==  | 3), true); |     |
17
})
18
|     | it('Don\'t |     | has | element', | function |     | () { |     |     |     |
| --- | ---------- | --- | --- | --------- | -------- | --- | ---- | --- | --- | --- |
19
|     |     | let array | =   | [1, 2, | 3]; |     |     |     |     |     |
| --- | --- | --------- | --- | ------ | --- | --- | --- | --- | --- | --- |
20
| 21  |     | assert.equal(array.some(item |     |     |     |     | => item | ==  | 4), false); |     |
| --- | --- | ---------------------------- | --- | --- | --- | --- | ------- | --- | ----------- | --- |
| 22  | })  |                              |     |     |     |     |         |     |             |     |
23 })
24
describe('#Map',
| 25  |          |           | ()      | => {     |        |          |     |      |     |     |
| --- | -------- | --------- | ------- | -------- | ------ | -------- | --- | ---- | --- | --- |
|     | it('Each |           |         |          | 2',    |          |     |      |     |     |
| 26  |          |           | element | increase |        | function |     | () { |     |     |
|     |          | let array | =       | [1, 2,   | 3, 4]; |          |     |      |     |     |
27
assert.equal(JSON.stringify(array.map(item => item += 1)), JSON.stringify([2,
28
|     | 3, 4, 5])); |     |     |     |     |     |     |     |     |     |
| --- | ----------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
})
29
30 })
31
describe('#Filter',
| 32  |         |              |      | () =>               | {      |            |      |      |          |      |
| --- | ------- | ------------ | ---- | ------------------- | ------ | ---------- | ---- | ---- | -------- | ---- |
|     | it('Get |              |      |                     |        |            |      | 3',  |          |      |
| 33  |         | array        | with | element             |        | is smaller | than |      | function | () { |
| 34  |         | let array    | =    | [1, 2,              | 3, 4]; |            |      |      |          |      |
|     |         | let tmpArray |      | = array.filter(item |        |            | =>   | item | < 3);    |      |
35
|     |     | assert.equal(JSON.stringify(tmpArray), |     |     |     |     |     | JSON.stringify([1, |     | 2])); |
| --- | --- | -------------------------------------- | --- | --- | --- | --- | --- | ------------------ | --- | ----- |
36
})
37
})
38
39 })
| Thu | được kết | quả sau | khi | thực thi | mocha | test | như sau: |      |      |     |
| --- | -------- | ------- | --- | -------- | ----- | ---- | -------- | ---- | ---- | --- |
|     |          |         |     |          | Hình  | 6.1: | Kết quả  | unit | test |     |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 148/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
6.2 Kiểm thử tích hợp - Integration Testing
Mức kiểm thử tích hợp giúp nhóm phát hiện lỗi giao tiếp giữa các thành phần với nhau, cụ thể là
phần controller và model: các phương thức APIs. Vì độ phức tạp trong việc tích hợp model hệ thống với
việc kiểm thử, nhóm sẽ trình bày việc kiểm thử một vài thao tác ứng với thao tác của người dùng hệ
thống như sau:
1
2 describe('#Danh-sach-can-bo', () => {
3 it('Create a staff', function () {
4 chai.request(server)
5
.post('/api/staff')
6 .send({canBo: { shcc: '01.001', ho: 'TRAN', ten: 'TIEN', phai: '01', ngach: '
15.111', ngaySinh: new Date('30 12 2000').getTime(), cuNhan: 1, email: '123@hcmussh.
edu.vn'}})
7 .end((err, res) => {
8 assert.equal(res.body.item.email, '123@hcmussh.edu.vn');
9 assert.equal(res.body.error, null);
10
11 });
12 });
13
14 it('Get data of a staff', function () {
15 chai.request(server)
16
.get('/api/staff/edit/item/01.001')
17 .end((err, res) => {
18 let body = res.body;
19 res.should.have.status(200);
20 assert.equal(body.item.phai, '01');
21 assert.equal(body.item.ngach, '15.111');
22 assert.equal(body.item.email, '123@hcmussh.edu.vn');
23 assert.equal(body.item.ngaySinh, new Date('30 12 2000').getTime());
24
25 });
26 });
27
28 it('Update a staff', function () {
29 chai.request(server)
30
.put('/api/staff')
31 .send({ shcc: '01.001' , changes: { ten: 'BAO' }})
32 .end((err, res) => {
33 res.should.have.status(200);
34 assert.equal(res.body.error, null);
35 assert.equal(res.body.item.ten, 'BAO');
36
37 });
38 });
39 });
40
41 describe('#Di-nuoc-ngoai', () => {
42 it('Create for a staff', function () {
43 chai.request(server)
44
.post('/api/qua-trinh/di-nuoc-ngoai')
45 .send({ data: { shcc: '01.001', soQuyetDinh: '345', ngayQuyetDinh: new Date('
12 04 2022').getTime(), quocGia: 'TH', ngayDi: new Date('13 04 2022').getTime(),
ngayVe: new Date('13 05 2022').getTime(), mucDich: 15 }})
46 .end((err, res) => {
47 let item = res.body.item;
48 assert.equal(res.body.error, null);
49 assert.equal(item.soQuyetDinh, '345');
50 });
51 });
52
53 it('Get a page with filter #1', function () {
54 chai.request(server)
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 149/160

|     |     | Trường | Đại  | học | Bách  | Khoa  | Tp.Hồ | Chí Minh |     |     |     |     |
| --- | --- | ------ | ---- | --- | ----- | ----- | ----- | -------- | --- | --- | --- | --- |
|     |     | Khoa   | Khoa | Học | và Kỹ | Thuật | Máy   | Tính     |     |     |     |     |
.get('/api/user/qua-trinh/di-nuoc-ngoai/page/1/50')
55
|     |     |     | .query({ | filter: |     | { listShcc: |     | ['01.001']}}) |     |     |     |     |
| --- | --- | --- | -------- | ------- | --- | ----------- | --- | ------------- | --- | --- | --- | --- |
56
|     |     |     | .end((err, |     | res) => | {   |     |     |     |     |     |     |
| --- | --- | --- | ---------- | --- | ------- | --- | --- | --- | --- | --- | --- | --- |
57
| 58  |     |     | let                          | page | = res.body.page; |     |     |        |     |     |     |     |
| --- | --- | --- | ---------------------------- | ---- | ---------------- | --- | --- | ------ | --- | --- | --- | --- |
| 59  |     |     | assert.equal(res.body.error, |      |                  |     |     | null); |     |     |     |     |
'THAILAND');
| 60  |     |     | assert.equal(page.list[0].danhSachQuocGia, |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | ------------------------------------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- |
61
| 62  |     |     | }); |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
})
63
64
|     | it('Get |     | a page | with | filter | #2', | function | ()  | {   |     |     |     |
| --- | ------- | --- | ------ | ---- | ------ | ---- | -------- | --- | --- | --- | --- | --- |
65
chai.request(server)
66
| 67  |     |     | .get('/api/user/qua-trinh/di-nuoc-ngoai/page/1/50') |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --------------------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
68 .query({ filter: { fromYear: new Date('01 01 2001').getTime(), toYear: new
|     | Date('12 |     | 2022').getTime()                       |      |                  |     |     |        |        |     |     |     |
| --- | -------- | --- | -------------------------------------- | ---- | ---------------- | --- | --- | ------ | ------ | --- | --- | --- |
|     |          |     | 12                                     |      |                  | }   | })  |        |        |     |     |     |
| 69  |          |     | .end((err,                             |      | res) =>          | {   |     |        |        |     |     |     |
| 70  |          |     | let                                    | page | = res.body.page; |     |     |        |        |     |     |     |
| 71  |          |     | assert.equal(res.body.error,           |      |                  |     |     | null); |        |     |     |     |
|     |          |     | assert.equal(Array.isArray(page.list), |      |                  |     |     |        | true); |     |     |     |
72
assert.equal(page.list.some(item => item.shcc = '01.001'), true);
73
});
74
})
75
76
77 });
78
describe('#TCCB-support',
| 79  |     |     |     |     | ()  | => { |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | ---- | --- | --- | --- | --- | --- | --- |
'';
| 80  | let       | maYeuCau |      | =         |     |          |     |     |     |     |     |     |
| --- | --------- | -------- | ---- | --------- | --- | -------- | --- | --- | --- | --- | --- | --- |
|     | it('Staff |          | send | to TCCB', |     | function | ()  | {   |     |     |     |     |
81
chai.request(server)
82
.post('/api/tccb/support')
83
.send({ data: { ho: ' N G U Y N ', maDonVi: 2, biDanh: '' }, shcc: '01.001',
84
dataTccbSupport: { qtId: '01.001', qt: 'canBo', type: 'update' } })
| 85  |     |     | .end((err,                   |      | res) =>          | {   |     |        |     |     |     |     |
| --- | --- | --- | ---------------------------- | ---- | ---------------- | --- | --- | ------ | --- | --- | --- | --- |
| 86  |     |     | let                          | item | = res.body.item; |     |     |        |     |     |     |     |
| 87  |     |     | maYeuCau                     |      | = item.id;       |     |     |        |     |     |     |     |
| 88  |     |     | assert.equal(res.body.error, |      |                  |     |     | null); |     |     |     |     |
|     |     |     | assert.equal(item.approved,  |      |                  |     |     | 0);    |     |     |     |     |
89
assert.equal(item.data, JSON.stringify({ ho: ' N G U Y N ', maDonVi: 2,
90
|     | biDanh: |     | '' })); |     |     |     |     |     |     |     |     |     |
| --- | ------- | --- | ------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
});
91
92 });
93
|     | it('TCCB |                      |       | staff', |     |          |     |     |     |     |     |     |
| --- | -------- | -------------------- | ----- | ------- | --- | -------- | --- | --- | --- | --- | --- | --- |
| 94  |          |                      | reply | to      |     | function | ()  | {   |     |     |     |     |
| 95  |          | chai.request(server) |       |         |     |          |     |     |     |     |     |     |
.post('/api/tccb/support-reply')
96
|     |     |     |            |              |         |      |           |               | '424.0002', |     |          | '   |
| --- | --- | --- | ---------- | ------------ | ------- | ---- | --------- | ------------- | ----------- | --- | -------- | --- |
| 97  |     |     | .send({    | dataPhanHoi: |         | {    | maYeuCau, | nguoiPhanHoi: |             |     | noiDung: | n   |
|     | v   | c   | a t        | h y          | c ch    | a ng | ' }       | })            |             |     |          |     |
|     |     |     | .end((err, |              | res) => | {    |           |               |             |     |          |     |
98
|     |     |     | let | item | = res.body.item; |     |     |     |     |     |     |     |
| --- | --- | --- | --- | ---- | ---------------- | --- | --- | --- | --- | --- | --- | --- |
99
|     |     |     | assert.equal(res.body.error, |     |     |     |     | null); |     |     |     |     |
| --- | --- | --- | ---------------------------- | --- | --- | --- | --- | ------ | --- | --- | --- | --- |
100
| 101 |     |     | assert.equal(item.nguoiPhanHoi, |     |     |     |     |     | '424.0002'); |     |     |     |
| --- | --- | --- | ------------------------------- | --- | --- | --- | --- | --- | ------------ | --- | --- | --- |
| 102 |     |     | });                             |     |     |     |     |     |              |     |     |     |
103 })
104
|     | it('TCCB |     |        |     | staff', |          |     |      |     |     |     |     |
| --- | -------- | --- | ------ | --- | ------- | -------- | --- | ---- | --- | --- | --- | --- |
| 105 |          |     | accept | for |         | function |     | () { |     |     |     |     |
chai.request(server)
106
.put('/api/tccb/support-reply')
107
|     |     |     | .send({ | id: | maYeuCau, |     | dataTccbSupport: |     | { approved: | 1 } }) |     |     |
| --- | --- | --- | ------- | --- | --------- | --- | ---------------- | --- | ----------- | ------ | --- | --- |
108
|     |     |     | .end((err, |     | res) => | {   |     |     |     |     |     |     |
| --- | --- | --- | ---------- | --- | ------- | --- | --- | --- | --- | --- | --- | --- |
109
| 110 |     |     | let                          | item | = res.body.item; |     |     |        |     |     |     |     |
| --- | --- | --- | ---------------------------- | ---- | ---------------- | --- | --- | ------ | --- | --- | --- | --- |
| 111 |     |     | assert.equal(res.body.error, |      |                  |     |     | null); |     |     |     |     |
| 112 |     |     | assert.equal(item.approved,  |      |                  |     |     | 1);    |     |     |     |     |
| 113 |     |     | });                          |      |                  |     |     |        |     |     |     |     |
114 })
});
115
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 150/160

|          | Trường      | Đại học Bách | Khoa Tp.Hồ     | Chí Minh            |      |
| -------- | ----------- | ------------ | -------------- | ------------------- | ---- |
|          | Khoa Khoa   | Học và       | Kỹ Thuật Máy   | Tính                |      |
| Thu được | kết quả sau | khi thực     | thi mocha test | như sau:            |      |
|          |             |              | Hình 6.2:      | Kết quả Integration | test |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 151/160

|     | Trường |      | Đại học | Bách Khoa   | Tp.Hồ | Chí      | Minh    |     |     |
| --- | ------ | ---- | ------- | ----------- | ----- | -------- | ------- | --- | --- |
|     | Khoa   | Khoa | Học     | và Kỹ Thuật |       | Máy Tính |         |     |     |
| 6.3 | Kiểm   | thử  | hệ      | thống       | -     | System   | Testing |     |     |
Nhóm đã tiến hành thao tác với dữ liệu mẫu, từ khâu khởi tạo đến triển khai thực tế hệ thống. Cụ
| thể phần | này  | nhóm | sẽ thực | hiện kiểm | thử | quản lý | thông tin cán bộ. |     |     |
| -------- | ---- | ---- | ------- | --------- | --- | ------- | ----------------- | --- | --- |
| 6.3.1    | Quản | lý   | thông   | tin cán   | bộ  |         |                   |     |     |
| 6.3.1.1  | Tạo  | mới  | cán bộ  |           |     |         |                   |     |     |
PhòngTCCBsẽnhậpvàothêmmớinhằmthêmmớicánbộ.Hình6.3athểhiệngiaodiệnthêmthông
tin của cán bộ mới từ phần quản lý danh sách cán bộ với 2 phần là Thông tin cá nhân và thông tin công
tác.
|     |     | (a) Giao | diện | tạo mới | cán bộ |      |                |         |                    |
| --- | --- | -------- | ---- | ------- | ------ | ---- | -------------- | ------- | ------------------ |
|     |     |          |      |         |        |      | (b) Giao diện  | tạo mới | cán bộ từ hợp đồng |
|     |     |          |      |         | Hình   | 6.3: | Tạo mới cán bộ |         |                    |
Trong trường hợp cán bộ mới ấy ký hợp đồng, thì hệ thống cũng sẽ tạo cán bộ mới vào dữ liệu cán
| bộ, về | mặt giao | diện   | được   | thể hiện   | như hình | 6.3b    |      |     |     |
| ------ | -------- | ------ | ------ | ---------- | -------- | ------- | ---- | --- | --- |
| Cụ     | thể với  | ví dụ  | cán bộ | có dữ liệu | cơ       | bản như | sau: |     |     |
| • Họ   | tên:     | Nguyễn | Anh    |            |          |         |      |     |     |
•
| Bí    | danh: | Nguyễn    | A     |               |     |       |     |     |     |
| ----- | ----- | --------- | ----- | ------------- | --- | ----- | --- | --- | --- |
| • Đơn | vị    | công tác: | Báo   | chi và Truyền |     | thông |     |     |     |
| • Mã  | thẻ   | cán bộ:   | 01.01 |               |     |       |     |     |     |
•
| Ngày   | sinh: | 01/01/1980 |     |     |     |     |     |     |     |
| ------ | ----- | ---------- | --- | --- | --- | --- | --- | --- | --- |
| • Giới | tính: | Nữ         |     |     |     |     |     |     |     |
Và một số thông tin khác. Sau khi bấm tạo mới, hệ thống sẽ hiện ra cán bộ ngoài danh sách tổng. Cán
bộ sau khi truy cập vào hệ thống cũng sẽ xem được trang cá nhân của mình với các mục đã đề cập.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 152/160

|       | Trường    | Đại học Bách | Khoa     | Tp.Hồ | Chí Minh |     |
| ----- | --------- | ------------ | -------- | ----- | -------- | --- |
|       | Khoa Khoa | Học và       | Kỹ Thuật | Máy   | Tính     |     |
| 6.3.2 | Cập nhật  | cán bộ       |          |       |          |     |
Nếu như là phòng TCCB truy cập, họ sẽ có toàn quyền với các trường dữ liệu. Ví dụ dưới đây khi
| cập nhật | ngày kết | thúc cho quá | trình | đào tạo cử | nhân.       |          |
| -------- | -------- | ------------ | ----- | ---------- | ----------- | -------- |
|          |          |              |       | Hình 6.4:  | Cập nhật    | học vị   |
|          |          |              | Hình  | 6.5:       | Kết quả sau | cập nhật |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 153/160

| Trường    | Đại học Bách | Khoa Tp.Hồ | Chí Minh |     |     |
| --------- | ------------ | ---------- | -------- | --- | --- |
| Khoa Khoa | Học và       | Kỹ Thuật   | Máy Tính |     |     |
Về phía cán bộ, nếu có yêu cầu thay đổi thông tin, cụ thể ở đây là đổi thời gian kết thúc. Nếu bấm
duyệt sẽ cập nhật cho cán bộ. Nếu phản hồi sẽ từ chối yêu cầu của cán bộ.
|     | Hình 6.6: | Yêu cầu thay | đổi của cán bộ trong | giao diện phòng | TCCB |
| --- | --------- | ------------ | -------------------- | --------------- | ---- |
|     |           | Hình 6.7:    | Modal phản hồi       | từ chối         |      |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 154/160

|       | Trường     | Đại  | học | Bách Khoa   | Tp.Hồ | Chí  | Minh |     |     |
| ----- | ---------- | ---- | --- | ----------- | ----- | ---- | ---- | --- | --- |
|       | Khoa       | Khoa | Học | và Kỹ Thuật | Máy   | Tính |      |     |     |
| 6.3.3 | Automation |      |     | Testing     |       |      |      |     |     |
Selenium luôn là một công cụ hỗ trợ kiểm tra tự động. Hệ thống cần được kiểm tra tự động để tăng
độtincậyhơn.NhómđãsửdụngkếthợpSelenium,Chai,MochavàMochaawesomeđểkiểmthửtựđộng
| các tính | năng | của hệ | thống. |     |     |     |     |     |     |
| -------- | ---- | ------ | ------ | --- | --- | --- | --- | --- | --- |
Vì độphức tạpcũng nhưđể tránh dàidòng trongbáo cáo,nhóm sẽthể hiện4 kịch bảncho4 phương
| thức GET, | CREATE,                  |          | UPDATE,           | DELETE:      |           |          |         |          |              |
| --------- | ------------------------ | -------- | ----------------- | ------------ | --------- | -------- | ------- | -------- | ------------ |
| • Lấy     | trang                    | thông    | tin danh          | sách         | quá trình | đi       | nước    | ngoài.   |              |
| • Tìm     | kiếm                     | theo     | mã thẻ            | cán bộ,      | sau đó    | mở modal |         | cập nhật | lại dữ liệu. |
| • Tạo     | mới                      | dữ liệu  | quá               | trình sáng   | kiến cho  | 1 cán    | bộ.     |          |              |
| • Xóa     | dữ                       | liệu quá | trình             | sáng kiến    | cho 1     | cán bộ.  |         |          |              |
|           |                          |          |                   | Hình         | 6.8: Kết  | quả      | sau khi | chạy các | kịch bản     |
| Dưới      | đây là                   | đoạn     | code              | thiết kế cho | kịch      | bản thứ  | 2:      |          |              |
| 1 const   | result                   | = await  | driver.wait(async |              |           | function |         | () {     |              |
| await     | menuDiNuocNgoai.click(); |          |                   |              |           |          |         |          |              |
2
| await | driver.sleep(5000); |     |     |     |     |     |     |     |     |
| ----- | ------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
3
let searchBox = await driver.findElement(By.xpath(locator.searchBox));
4
| await | searchBox.sendKeys('01.01\n'); |     |     |     |     |     |     |     |     |
| ----- | ------------------------------ | --- | --- | --- | --- | --- | --- | --- | --- |
5
| 6 await | driver.sleep(2000); |     |     |     |     |     |     |     |     |
| ------- | ------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
7 let firstCell = await driver.findElement(By.xpath(locator.firstCell));
8 firstCell.click();
| 9 await | driver.sleep(1000); |     |     |     |     |     |     |     |     |
| ------- | ------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
10 let noiDungTextBox = await driver.findElement(By.xpath(locator.noiDungTextBox));
| 11 await | driver.sleep(1000);                 |     |     |     |     |     |     |     |     |
| -------- | ----------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
| await    | noiDungTextBox.sendKeys('Testing'); |     |     |     |     |     |     |     |     |
12
let saveButton = await driver.findElement(By.xpath(locator.saveButton));
13
| await | saveButton.click(); |     |     |     |     |     |     |     |     |
| ----- | ------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
14
| await | driver.sleep(2000); |     |     |     |     |     |     |     |     |
| ----- | ------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
15
16 let noiDungCell = await driver.findElement(By.xpath(locator.noiDungCell)).getText();
| 17 return | {        |     |                    |     |     |     |     |     |     |
| --------- | -------- | --- | ------------------ | --- | --- | --- | --- | --- | --- |
| 18        | message: |     | noiDungCell.trim() |     |     |     |     |     |     |
19 }
20 }, 5000);
expect(result.message).to.equal('Testing');
21
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 155/160

|     | Trường    | Đại học | Bách Khoa | Tp.Hồ Chí    | Minh |         |
| --- | --------- | ------- | --------- | ------------ | ---- | ------- |
|     | Khoa Khoa | Học và  | Kỹ Thuật  | Máy Tính     |      |         |
| 6.4 | Kiểm tra  | chấp    | nhận      | - Acceptance |      | Testing |
Kiểm thử chấp nhận nhằm kiểm tra độ chấp nhận của hệ thống. Mục tiêu là đánh giá sự tuân thủ
của hệ thống đối với các yêu cầu nghiệp vụ. Trong quá trình hiện thực hệ thống, nhóm và các chuyên
viên phòng TCCB đã phối hợp theo quy trình phát triển - phản hồi liên tục để có được hệ thống phù
hợp nhất và đảm bảo bám sát các quy trình quản lý của phòng TCCB trường Đại học Khoa học Xã hội
| và Nhân | văn, ĐHQG-HCM. |     |     |     |     |     |
| ------- | -------------- | --- | --- | --- | --- | --- |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 156/160

| Chương | 7    |     |         |      |
| ------ | ---- | --- | ------- | ---- |
| KẾT    | LUẬN |     | - HƯỚNG | PHÁT |
TRIỂN
Cuối cùng, nhóm sẽ trình bày kết luận sau thời gian hiện thực hệ thống cũng như hướng phát triển
| hậu luận | văn của hệ thống | quản lý | cán bộ. |     |
| -------- | ---------------- | ------- | ------- | --- |

|     |     | Trường    | Đại học | Bách | Khoa     | Tp.Hồ | Chí Minh |     |     |     |     |
| --- | --- | --------- | ------- | ---- | -------- | ----- | -------- | --- | --- | --- | --- |
|     |     | Khoa Khoa | Học     | và   | Kỹ Thuật | Máy   | Tính     |     |     |     |     |
| 7.1 |     | Kết quả   | đạt     | được |          |       |          |     |     |     |     |
Thông qua quá trình làm việc chung và trao đổi với phòng TCCB, nhóm đã xây dựng 1 hệ thống
| quản | lý  | cán bộ - quản | lý  | thông | tin cá nhân | với | tính năng | tổng quát | sau: |     |     |
| ---- | --- | ------------- | --- | ----- | ----------- | --- | --------- | --------- | ---- | --- | --- |
• Xây dựng được trang cá nhân cho cán bộ để quản lý các thông tin lý lịch cán bộ, các quá trình
|     | công | tác. |     |     |     |     |     |     |     |     |     |
| --- | ---- | ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
•
Xây dựng được hệ thống quản lý dữ liệu toàn bộ cán bộ toàn trường cho Phòng TCCB.
•
Xây dựng được kênh liên lạc giữa cán bộ và Phòng TCCB, góp phần giảm nghiệp vụ cũng như tạo
|     | thuận | tiện trong | công | tác | quản lý | cán bộ. |     |     |     |     |     |
| --- | ----- | ---------- | ---- | --- | ------- | ------- | --- | --- | --- | --- | --- |
• Xây dựng được các chức năng trích xuất, các biểu đồ cụ thể hỗ trợ cho công tác của phòng TCCB.
• Xây dựng hệ thống thông báo tăng tương tác với hệ thống hơn cho cán bộ sử dụng hệ thống.
Thời điểm bàn giao Bàn giao các phần của phòng TCCB Bàn giao các phần của cán bộ
|     | 16/03/2022 |     | Quá  | trình | chức    | vụ       |       |     | Trang lý  | lịch cá nhân |       |
| --- | ---------- | --- | ---- | ----- | ------- | -------- | ----- | --- | --------- | ------------ | ----- |
|     |            |     | Danh | sách  | cán     | bộ       |       |     |           |              |       |
|     | 23/03/2022 |     |      |       |         |          |       |     | Trang lý  | lịch cá nhân |       |
|     |            |     | Hợp  | đồng  | Lao     | động     |       |     |           |              |       |
|     |            |     | Hợp  | đồng  | Làm     | việc     |       |     |           |              |       |
|     | 30/03/2022 |     | Quá  | trình | khen    | thưởng   |       |     | Trang lý  | lịch cá nhân |       |
|     |            |     | Quá  | trình | kỷ luật |          |       |     |           |              |       |
|     |            |     | Quá  | trình | đào     | tạo, bồi | dưỡng |     | Quá trình | đào tạo, bồi | dưỡng |
06/04/2022 Quá trình học tập, công tác Quá trình học tập, công tác
|     |            |     | Quá       | trình | sáng      | kiến         |             |       | Quá trình    | sáng kiến        |        |
| --- | ---------- | --- | --------- | ----- | --------- | ------------ | ----------- | ----- | ------------ | ---------------- | ------ |
|     |            |     | Các       | quá   | trình     | chuyên môn   | cán         | bộ    |              |                  |        |
|     | 13/04/2022 |     |           |       |           |              |             |       | Các quá      | trình chuyên môn | cán bộ |
|     |            |     | Hợp       | đồng  | làm       | việc (viên   | chức)       |       |              |                  |        |
|     |            |     | Quá       | trình | đi nước   | ngoài        |             |       |              |                  |        |
|     |            |     |           |       |           |              |             |       | Quá trình    | đi nước ngoài    |        |
|     | 20/04/2022 |     | Quá       | trình | công      | tác trong    | nước        |       |              |                  |        |
|     |            |     |           |       |           |              |             |       | Quá trình    | công tác trong   | nước   |
|     |            |     | Hợp       | đồng  | đơn       | vị trả lương | - trách     | nhiệm |              |                  |        |
|     |            |     | Nghỉ      | thai  | sản       |              |             |       | Nghỉ thai    | sản              |        |
|     | 27/04/2022 |     | Nghỉ      | phép  |           |              |             |       | Nghỉ phép    |                  |        |
|     |            |     | Dashboard |       | Phòng     | TCCB         |             |       | Trang thông  | báo              |        |
|     | 04/05/2022 |     | Yêu       | cầu   | hỗ trợ    | thông tin    |             |       | Yêu cầu      | hỗ trợ thông tin |        |
|     | 11/05/2022 |     | Yêu       | cầu   | hỗ trợ    | thông tin    |             |       | Yêu cầu      | hỗ trợ thông tin |        |
|     |            |     |           | Bảng  | 7.1: Thời | gian         | và nội dung | bàn   | giao các mục |                  |        |
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 158/160

Trường Đại học Bách Khoa Tp.Hồ Chí Minh
Khoa Khoa Học và Kỹ Thuật Máy Tính
7.2 Ưu điểm
Với các tính năng đã thực hiện, hệ thống có các ưu điểm như:
• Hệthốngđãvàđangtriểnkhaitrênmáychủ,tíchhợpvớicổngthôngtincủatrườngĐạihọcKhoa
học Xã hội và Nhân văn, ĐHQG-HCM.
• Giao diện thân thiện và đặc trưng, các thao tác không rườm rà.
• Lượng người dùng lớn, bao gồm toàn bộ từ ban giám hiệu tới các nhân viên các phòng, các khoa.
• Được kiểm thử và phản hồi, góp ý trên dự án thực tế hơn 1000 cán bộ.
• Mã nguồn phía người dùng được tối ưu hóa.
7.3 Nhược điểm
Bên cạnh đó, hệ thống vẫn tồn tại những nhược điểm bên cạnh các chức năng và ưu điểm đã nêu:
• Quá trình kiểm thử gặp nhiều lỗi (bugs) vì hệ thống rất lớn và lượng đối tượng lớn, kèm theo đó
là nhiều tính năng giống và riêng biệt ở các phần.
• Tính thích ứng của hệ thống còn kém. Nhiều chức năng được hiện thực cứng nhắc, bởi do phần
nào yêu cầu nghiệp vụ khá riêng biệt.
• Phân chia công việc và thời gian chưa tốt, khối lượng nghiệp vụ lớn dẫn tới mất thời gian làm lại
từ đầu ở một số quá trình.
7.4 Hướng phát triển
• Xây dựng hệ thống hỗ trợ realtime và tích hợp các phần gợi ý thông minh cho các thao tác với hệ
thống.
• Xây dựng ứng dụng di động để các công việc được thực hiện một cách dễ dàng hơn. Hệ thống hiện
tại đang được xây dựng theo ReactJS nên chuyển sang React Native cũng không phải vấn đề khó.
• Tối ưu hệ thống để giảm thiểu thao tác thừa trong hiện thực, tính toán lại các quy trình để cắt
giảm, điều chỉnh sao cho tối ưu với phòng TCCB và cán bộ nhất.
Tích hợp các quy trình quản lý cán bộ vào cổng thông tin - Báo cáo luận văn tốt nghiệp Trang 159/160

| Tài | liệu | tham | khảo |     |
| --- | ---- | ---- | ---- | --- |
[1] Kenneth E. Kendall, Julie E. Kendall -Pearson (2013). Systems Analysis and Design, 9th Edition.
[2] LeonardRichardson,SamRuby,DavidHeinemeierHansson.(2007).RESTfulWebServices.O’Reilly
Media.
[3] R. Elmasri & S.B. Navathe, AddisonWesley, 2007. Fundamentals of Database Systems, 5th Edition.
[4] Klauzinski, Philip. (2016). Mastering JavaScript Single Page Application Development. Packt Pub-
lishing
| [5] Carlos | Santana | Roldán. (2018). | React Cookbook. | Packt |
| ---------- | ------- | --------------- | --------------- | ----- |
[6] Ethan Brown. (2014). Web Development with Node and Express: Leveraging the JavaScript Stack.
| O’Reilly  | Media, | 2014               |                 |                   |
| --------- | ------ | ------------------ | --------------- | ----------------- |
| [7] Shama | Hoque. | (2020). Full-Stack | React Projects. | Packt 2nd Edition |
[8] Steven Feuerstein, Bill Pribyl. (2014). Oracle PL/SQL Programming. O’Reilly
| [9] ReactJS  | Official                       | Page. https://reactjs.org.  |     |     |
| ------------ | ------------------------------ | --------------------------- | --- | --- |
| Truy         | cập: 12/03/2022                |                             |     |     |
| [10] VueJS   | Official                       | Page. https://vuejs.org.    |     |     |
| Truy         | cập: 12/05/2022                |                             |     |     |
| [11] Angular | Official                       | Page. https://angular.io.   |     |     |
| Truy         | cập: 12/05/2022                |                             |     |     |
| [12] Redux   | Official                       | Page. https://redux.js.org. |     |     |
| Truy         | cập: 12/05/2022                |                             |     |     |
| [13] Oracle  | Docs. https://docs.oracle.com. |                             |     |     |
| Truy         | cập: 12/05/2022                |                             |     |     |
| [14] Oracle  | Docs. https://docs.oracle.com. |                             |     |     |
| Truy         | cập: 13/05/2022                |                             |     |     |
[15] NodeJs Với Express FrameWork. https://viblo.asia/p/nodejs-voi-express-framework
| -rQOvPKVgkYj. |     | Truy cập: 11/05/2022 |     |     |
| ------------- | --- | -------------------- | --- | --- |
[16] Các mức kiểm thử. https://viblo.asia/p/cac-muc-kiem-thu-phan-mem-ORNZq9kMZ0n.
| Truy | cập: 11/05/2022 |     |     |     |
| ---- | --------------- | --- | --- | --- |
[17] NodeJs Với Express FrameWork. https://viblo.asia/p/di-mot-vong-voi-express-framework
| -eW65GWqx5DO. |     | Truy cập: 12/05/2022 |     |     |
| ------------- | --- | -------------------- | --- | --- |
160
