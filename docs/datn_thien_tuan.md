ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH
TRƯỜNG ĐẠI HỌC BÁCH KHOA
KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH
BÁO CÁO
ĐỒ ÁN TỐT NGHIỆP (CO4337)
TÍCH HỢP CÁC CHỨC NĂNG QUẢN
LÝ PHÒNG HÀNH CHÍNH TRƯỜNG
ĐẠI HỌC VÀO ỨNG DỤNG QUẢN TRỊ
PHÒNG HÀNH CHÍNH
NGÀNH: KHOA HỌC MÁY TÍNH
HỘI ĐỒNG : KHOA HỌC MÁY TÍNH
GVHD : Ths. NGUYỄN THANH TÙNG
CTHĐ : TS. Phan Trọng Nhân
TKHĐ : ThS. Trần Thị Quế Nguyệt
————o0o———–
SVTH 1 : PHẠM MINH TUẤN - 2115186
SVTH 2 : ĐỒNG MINH THIỆN - 2110555
Thành phố Hồ Chí Minh, 12/2025

| CHỮ | KÝ GIẢNG | VIÊN | HƯỚNG | DẪN |
| --- | -------- | ---- | ----- | --- |
Ngày
| ThS. NGUYỄN | THANH       | TÙNG     |          |     |
| ----------- | ----------- | -------- | -------- | --- |
| KHOA        | KHOA HỌC VÀ | KỸ THUẬT | MÁY TÍNH |     |
i

| LỜI | CAM | ĐOAN |     |     |     |
| --- | --- | ---- | --- | --- | --- |
Chúng tôi xin cam đoan rằng đây là dự án nghiên cứu và triển khai thực
hiện của riêng nhóm chúng tôi dưới sự hướng dẫn của ThS. Nguyễn Thanh
Tùng tại Khoa Khoa học và Kỹ thuật Máy tính, Trường Đại học Bách Khoa
- ĐHQG-HCM. Nếu có bất kỳ trường hợp đạo văn nào, sao chép không hợp
lệ, vi phạm quy chế đào tạo, chúng tôi hoàn toàn chịu trách nhiệm và nhận
| mọi hình | thức kỷ luật. |     |           |              |            |
| -------- | ------------- | --- | --------- | ------------ | ---------- |
|          |               |     | Thành phố | Hồ Chí Minh, | 12/2025    |
|          |               |     | Nhóm      | sinh viên    | thực hiện, |
|          |               |     |           | Phạm         | Minh Tuấn  |
|          |               |     |           | Đồng Minh    | Thiện      |
i

| LỜI | CẢM | ƠN  |     |     |     |
| --- | --- | --- | --- | --- | --- |
Trước khi trình bày nội dung chính của báo cáo, nhóm xin được bày tỏ lòng
biết ơn chân thành và sâu sắc đến Thạc sĩ Nguyễn Thanh Tùng – giảng viên
Khoa Khoa học và Kỹ thuật Máy tính, Trường Đại học Bách Khoa – Đại học
Quốc gia TP.HCM. Trong suốt quá trình thực hiện đồ án, thầy đã luôn tận
tâm định hướng, hỗ trợ và tạo điều kiện thuận lợi để nhóm có thể phát triển
ý tưởng, triển khai nghiên cứu và hoàn thiện sản phẩm một cách hiệu quả.
Sự quan tâm chỉ dẫn tận tình, cùng với những góp ý chuyên môn quý báu từ
thầy, đã giúp nhóm tích lũy được nhiều kiến thức bổ ích và hoàn thành tốt
đồ án này.
|     |     |     | Thành phố | Hồ Chí Minh, | 12/2025    |
| --- | --- | --- | --------- | ------------ | ---------- |
|     |     |     | Nhóm      | sinh viên    | thực hiện, |
|     |     |     |           | Phạm         | Minh Tuấn  |
|     |     |     |           | Đồng Minh    | Thiện      |
ii

| TÓM      | TẮT    |           |       |           |           |           |            |       |          |             |
| -------- | ------ | --------- | ----- | --------- | --------- | --------- | ---------- | ----- | -------- | ----------- |
| Đề tài   | nhóm   | thực hiện |       |           |           |           |            |       |          |             |
|          |        |           | “Tích |           | hợp       | các chức  | năng       | quản  | lý phòng | Hành        |
| chính    | trường | đại       | học   | vào       | ứng       | dụng      | quản trị   | Phòng | Hành     | chính”      |
| được thể | hiện   | trong     | báo   | cáo này   | qua       | 7 chương  | sau:       |       |          |             |
|          |        | TỔNG      |       | QUAN      |           |           |            |       |          |             |
| CHƯƠNG   |        | 1:        |       |           |           |           |            |       |          |             |
|          |        | Giới      | thiệu | đề        | tài, phạm | vi        | và ý nghĩa | của   | đề tài.  |             |
| CHƯƠNG   |        | 2: CƠ     | SỞ    | LÝ THUYẾT |           |           |            |       |          |             |
|          |        | Trình     | bày   | nội       | dung      | lý thuyết | được       | ứng   | dụng để  | xây dựng đề |
tài.
| CHƯƠNG |     | 3: PHÂN |      | TÍCH   | YÊU | CẦU HỆ    | THỐNG |        |       |             |
| ------ | --- | ------- | ---- | ------ | --- | --------- | ----- | ------ | ----- | ----------- |
|        |     | Phân    | tích | nghiệp | vụ  | hệ thống, | yêu   | cầu từ | người | dùng, khách |
hàng.
| CHƯƠNG |     | 4: THIẾT |      | KẾ HỆ  | THỐNG   |             |               |        |           |           |
| ------ | --- | -------- | ---- | ------ | ------- | ----------- | ------------- | ------ | --------- | --------- |
|        |     | Phân     | tích | và     | thiết   | kế hệ thống | để giải       | quyết  | nghiệp    | vụ.       |
|        |     | HIỆN     | THỰC |        | HỆ      | THỐNG       |               |        |           |           |
| CHƯƠNG |     | 5:       |      |        |         |             |               |        |           |           |
|        |     | Trình    | bày  | một    | phần    | hệ thống    | đã hoàn       | thiện. |           |           |
|        |     | KIỂM     |      | THỬ HỆ | THỐNG   |             |               |        |           |           |
| CHƯƠNG |     | 6:       |      |        |         |             |               |        |           |           |
|        |     | Trình    | bày  | quy    | trình   | kiểm        | thử hệ thống. |        |           |           |
| CHƯƠNG |     | 7: KẾT   | LUẬN |        | - HƯỚNG | PHÁT        | TRIỂN         |        |           |           |
|        |     | Tổng     | kết  | quá    | trình   | làm, định   | hướng         | phát   | triển cho | hệ thống. |
iii

Mục lục
1 TỔNG QUAN 1
1.1 Thực trạng - Động lực . . . . . . . . . . . . . . . . . . . . . . 2
1.2 Mục tiêu . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
1.3 Phạm vi đề tài . . . . . . . . . . . . . . . . . . . . . . . . . . 3
1.4 Ý nghĩa của đề tài . . . . . . . . . . . . . . . . . . . . . . . . 3
2 CƠ SỞ LÝ THUYẾT 5
2.1 Mô hình phát triển . . . . . . . . . . . . . . . . . . . . . . . . 6
2.1.1 Mô hình MVC . . . . . . . . . . . . . . . . . . . . . . . 6
2.1.2 Ứng dụng SPA . . . . . . . . . . . . . . . . . . . . . . 7
2.1.3 RESTful API . . . . . . . . . . . . . . . . . . . . . . . 9
2.2 Front-end . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
2.2.1 ReactJs . . . . . . . . . . . . . . . . . . . . . . . . . . 9
2.2.2 React Query . . . . . . . . . . . . . . . . . . . . . . . . 12
2.2.3 Zustand . . . . . . . . . . . . . . . . . . . . . . . . . . 13
2.2.4 Vite . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14
2.2.5 Ant Design . . . . . . . . . . . . . . . . . . . . . . . . 15
2.2.6 Tailwind CSS . . . . . . . . . . . . . . . . . . . . . . . 15
2.3 Back-end . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
2.3.1 Node.js . . . . . . . . . . . . . . . . . . . . . . . . . . 16
2.3.2 Express.js . . . . . . . . . . . . . . . . . . . . . . . . . 17
2.4 Database . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
2.4.1 PostgreSQL . . . . . . . . . . . . . . . . . . . . . . . . 18
2.4.2 Redis . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20
iv

| 3 PHÂN | TÍCH | YÊU CẦU | HỆ THỐNG |     |     |     |     |     | 22  |
| ------ | ---- | ------- | -------- | --- | --- | --- | --- | --- | --- |
3.1 Lịch công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
3.1.1 Lịch công tác tuần . . . . . . . . . . . . . . . . . . . . 23
|     | 3.1.1.1 | Cấp trường | .    | . . . | . . . | . . . | . . . | . . . | . . . 23 |
| --- | ------- | ---------- | ---- | ----- | ----- | ----- | ----- | ----- | -------- |
|     | 3.1.1.2 | Cấp đơn    | vị . | . . . | . . . | . . . | . . . | . . . | . . . 24 |
3.1.2 Đăng ký đặt lịch với Ban Giám hiệu . . . . . . . . . . 29
3.2 Xử lý văn bản . . . . . . . . . . . . . . . . . . . . . . . . . . . 32
3.2.1 Tổng hợp góp ý dự thảo, thông tư, quyết định,... và các
loại góp ý liên quan . . . . . . . . . . . . . . . . . . . . 33
3.2.2 Tờ trình nội bộ . . . . . . . . . . . . . . . . . . . . . . 36
3.2.3 Phân phối văn bản . . . . . . . . . . . . . . . . . . . . 40
3.3 Báo cáo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
3.4 Công việc . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
3.5 Yêu cầu phi chức năng chung cho hệ thống . . . . . . . . . . . 53
| 4 THIẾT | KẾ HỆ | THỐNG |     |     |     |     |     |     | 54  |
| ------- | ----- | ----- | --- | --- | --- | --- | --- | --- | --- |
4.1 Tổng quan kiến trúc thiết kế . . . . . . . . . . . . . . . . . . . 55
4.2 Thiết kế chức năng . . . . . . . . . . . . . . . . . . . . . . . . 55
4.2.1 Phân quyền . . . . . . . . . . . . . . . . . . . . . . . . 55
4.2.2 Lịch công tác . . . . . . . . . . . . . . . . . . . . . . . 56
|     | 4.2.2.1 | Lịch công | tác tuần    |     | . . . | . . . | . . . | . . . | . . . 56 |
| --- | ------- | --------- | ----------- | --- | ----- | ----- | ----- | ----- | -------- |
|     | 4.2.2.2 | Đăng      | ký lịch hẹn | với | Ban   | Giám  | hiệu  | . .   | . . . 57 |
4.2.3 Xử lý văn bản . . . . . . . . . . . . . . . . . . . . . . . 58
|     | 4.2.3.1 | Tổnghợpgópýdựthảo,thôngtư,quyếtđịnh,... |          |        |       |       |       |         |        |
| --- | ------- | --------------------------------------- | -------- | ------ | ----- | ----- | ----- | ------- | ------ |
|     |         | và các                                  | loại góp | ý liên | quan  | . .   | . . . | . . . . | . . 58 |
|     | 4.2.3.2 | Tờ trình                                | nội bộ   | . . .  | . . . | . . . | . .   | . . . . | . . 59 |
|     | 4.2.3.3 | Phân                                    | phối văn | bản    | . . . | . . . | . . . | . . . . | . . 60 |
4.2.4 Báo cáo . . . . . . . . . . . . . . . . . . . . . . . . . . 61
4.2.5 Công việc . . . . . . . . . . . . . . . . . . . . . . . . . 62
4.3 Thiết kế cơ sở dữ liệu . . . . . . . . . . . . . . . . . . . . . . . 63
v

4.3.1 Bảng dữ liệu người dùng hệ thống và quyền . . . . . . 63
4.3.2 Bảng dữ liệu lịch công tác . . . . . . . . . . . . . . . . 65
|     | 4.3.2.1 | Bảng | dữ liệu quản | lý   | lịch công | tác   | .     | . . . . | . 65 |
| --- | ------- | ---- | ------------ | ---- | --------- | ----- | ----- | ------- | ---- |
|     | 4.3.2.2 | Bảng | dữ liệu chi  | tiết | lịch công | tác   | . .   | . . . . | . 69 |
|     | 4.3.2.3 | Bảng | dữ liệu khác | .    | . . .     | . . . | . . . | . . . . | . 73 |
4.3.3 Các bảng dữ liệu phân hệ Xử lý văn bản . . . . . . . . 75
|     | 4.3.3.1 | Các bảng | dữ liệu   | tổng     | hợp các  | góp   | ý dự    | thảo,   |      |
| --- | ------- | -------- | --------- | -------- | -------- | ----- | ------- | ------- | ---- |
|     |         | thông    | tư, quyết | định,... | .        | . . . | . . .   | . . . . | . 75 |
|     | 4.3.3.2 | Các bảng | dữ liệu   | của      | Tờ trình | nội   | bộ      | . . . . | . 79 |
|     | 4.3.3.3 | Các bảng | dữ liệu   | của      | Phân     | phối  | văn bản | . .     | . 85 |
4.3.4 Các bảng dữ liệu phân hệ Báo cáo . . . . . . . . . . . 87
|     | 4.3.4.1 | Các bảng | dữ liệu | của  | Cấu hình | mẫu   | báo | cáo     | . 87 |
| --- | ------- | -------- | ------- | ---- | -------- | ----- | --- | ------- | ---- |
|     | 4.3.4.2 | Các bảng | dữ liệu | của  | Cấu hình | khung |     | báo cáo | 88   |
|     | 4.3.4.3 | Các bảng | dữ liệu | của  | Nội dung | báo   | cáo | . .     | . 92 |
|     | 4.3.4.4 | Các bảng | dữ liệu | tính | năng     | khác  | . . | . . . . | . 96 |
4.3.5 Bảng dữ liệu phân hệ Công việc . . . . . . . . . . . . . 97
|        | 4.3.5.1 | Các bảng | dữ liệu | chính | của  | Công  | việc  | . . .   | . 97  |
| ------ | ------- | -------- | ------- | ----- | ---- | ----- | ----- | ------- | ----- |
|        | 4.3.5.2 | Các bảng | dữ liệu | thành | phần | Công  | việc  | . .     | . 100 |
|        | 4.3.5.3 | Các bảng | dữ liệu | khác  | . .  | . . . | . . . | . . . . | . 103 |
| 5 HIỆN | THỰC HỆ | THỐNG    |         |       |      |       |       |         | 106   |
5.1 Lịch công tác . . . . . . . . . . . . . . . . . . . . . . . . . . . 107
5.1.1 Phân quyền lịch công tác . . . . . . . . . . . . . . . . . 107
5.1.2 Quản lý phiếu đăng ký lịch . . . . . . . . . . . . . . . 107
5.1.3 Tạo và điều chỉnh lịch công tác . . . . . . . . . . . . . 109
5.1.4 Tổng hợp lịch công tác . . . . . . . . . . . . . . . . . . 109
5.1.5 Xem, liên kết và xuất lịch công tác . . . . . . . . . . . 110
5.1.6 Đăng ký lịch gặp gỡ Ban Giám hiệu . . . . . . . . . . . 112
5.2 Xử lý văn bản . . . . . . . . . . . . . . . . . . . . . . . . . . . 114
5.2.1 Phân quyền trong phân hệ Xử lý văn bản . . . . . . . 114
vi

5.2.2 Tổng hợp các góp ý dự thoả, thông tư, quyết định,... . 114
5.2.3 Tờ trình nội bộ . . . . . . . . . . . . . . . . . . . . . . 117
5.2.4 Phân phối văn bản . . . . . . . . . . . . . . . . . . . . 119
5.3 Báo cáo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
5.3.1 Phân quyền trong phân hệ Báo cáo . . . . . . . . . . . 121
5.3.2 Cấu hình khung . . . . . . . . . . . . . . . . . . . . . . 122
5.4 Công việc . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 126
6 KIỂM THỬ HỆ THỐNG 128
6.1 Kiểm thử đơn vị- Unit Testing . . . . . . . . . . . . . . . . . . 129
6.2 Kiểm thử hệ thống - System Testing . . . . . . . . . . . . . . 132
6.2.1 Cấu hình loại tờ trình . . . . . . . . . . . . . . . . . . 132
6.2.2 Khởi tạo tờ trình . . . . . . . . . . . . . . . . . . . . . 134
6.2.3 Duyệt tờ trình . . . . . . . . . . . . . . . . . . . . . . . 135
6.2.4 Xuất file tờ trình . . . . . . . . . . . . . . . . . . . . . 137
6.3 Automation Testing . . . . . . . . . . . . . . . . . . . . . . . . 138
6.4 Kiểm thử chấp nhận - Acceptance Testing . . . . . . . . . . . 141
7 KẾT LUẬN - HƯỚNG PHÁT TRIỂN 142
7.1 Kết quả đạt được . . . . . . . . . . . . . . . . . . . . . . . . . 143
7.2 Hạn chế . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144
7.3 Định hướng trong tương lai . . . . . . . . . . . . . . . . . . . 145
TÀI LIỆU THAM KHẢO 145
vii

Danh sách hình vẽ
Hình 2.1 Mô hình MVC . . . . . . . . . . . . . . . . . . . . . . . 7
Hình 2.2 So sánh giữa SPA (Single-Page Application) và MPA
(Multiple-Page Application) . . . . . . . . . . . . . . . . 8
Hình 2.3 RESTful API . . . . . . . . . . . . . . . . . . . . . . . . 9
Hình 2.4 ReactJS . . . . . . . . . . . . . . . . . . . . . . . . . . . 10
Hình 2.5 React Query . . . . . . . . . . . . . . . . . . . . . . . . 12
Hình 2.6 Zustand . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
Hình 2.7 VITE . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14
Hình 2.8 Ant Design . . . . . . . . . . . . . . . . . . . . . . . . . 15
Hình 2.9 Tailwind CSS . . . . . . . . . . . . . . . . . . . . . . . . 15
Hình 2.10 Mô hình non-blocking của Node.js . . . . . . . . . . . . 16
Hình 2.11 Luồng xử lý tác vụ của Node.js . . . . . . . . . . . . . . 17
Hình 2.12 Luồng xử lý của Express JS . . . . . . . . . . . . . . . . 18
Hình 2.13 Kiến trúc của PostgreSQL . . . . . . . . . . . . . . . . . 19
Hình 3.1 Usecase Quản lý lịch công tác tuần . . . . . . . . . . . . 25
Hình 3.2 Đặc tả Usecase Quản lý phiếu đăng ký lịch công tác trường 25
Hình 3.3 Đặc tả Usecase Quản lý lịch đăng ký công tác trường . . 26
Hình 3.4 Đặc tả Usecase Bổ sung thành phần tham dự lịch trường 26
Hình 3.5 Đặc tả Usecase Quản lý lịch đơn vị . . . . . . . . . . . . 27
Hình 3.6 Đặc tả Usecase Tiếp nhận đăng ký lịch công tác trường 27
Hình 3.7 Đặc tả Usecase Tổng hợp lịch công tác trường . . . . . . 28
Hình 3.8 Đặc tả Usecase Công bố lịch công tác trường . . . . . . 28
Hình 3.9 Đặc tả Usecase Xem lịch công tác . . . . . . . . . . . . 28
viii

Hình 3.10 Đặc tả Usecase Xuất lịch công tác . . . . . . . . . . . . 29
Hình 3.11 Đặc tả Usecase Liên kết lịch với Google Calendar . . . . 29
Hình 3.12 Usecase Đăng ký đặt lịch với Ban Giám hiệu . . . . . . 30
Hình 3.13 Đặc tả Usecase Tạo đăng ký lịch hẹn Ban Giám hiệu . . 31
Hình 3.14 Đặc tả Usecase Xác nhận tham dự lịch hẹn Ban Giám hiệu 31
Hình 3.15 Đặc tả Usecase Điều chỉnh lịch hẹn Ban Giám hiệu . . . 32
Hình 3.16 Đặc tả Usecase Chấp thuận đăng ký lịch hẹn Ban Giám
hiệu . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32
Hình 3.17 Usecase Tổng hợp góp ý dự thảo, thông tư, quyết định,...
và các loại góp ý liên quan . . . . . . . . . . . . . . . . 34
Hình 3.18 Đặc tả Usecase Khởi tạo phiếu thu thập góp ý . . . . . 34
Hình 3.19 Đặc tả Usecase Thực hiện góp ý dự thảo . . . . . . . . . 35
Hình 3.20 Đặc tả Usecase Phản hồi góp ý dự thảo . . . . . . . . . 35
Hình 3.21 Đặc tả Usecase Xuất báo cáo dự thảo thông tư . . . . . 36
Hình 3.22 Usecase Tờ trình nội bộ . . . . . . . . . . . . . . . . . . 37
Hình 3.23 Đặc tả Usecase Cấu hình loại tờ trình . . . . . . . . . . 37
Hình 3.24 Đặc tả Usecase Xuất báo cáo dự thảo thông tư . . . . . 38
Hình 3.25 Đặc tả Usecase Cấu hình quy trình duyệt tờ trình . . . 38
Hình 3.26 Đặc tả Usecase Điều chỉnh quy trình duyệt . . . . . . . 39
Hình 3.27 Đặc tả Usecase Góp ý phê duyệt . . . . . . . . . . . . . 39
Hình 3.28 Đặc tả Usecase Xuất tờ trình đã hoàn thành . . . . . . 40
Hình 3.29 Usecase Phân phối văn bản . . . . . . . . . . . . . . . . 41
Hình 3.30 Đặc tả Usecase Cấu hình danh sách phân phối . . . . . 41
Hình 3.31 Đặc tả Usecase Tạo văn bản phân phối nội bộ . . . . . . 42
Hình 3.32 Đặc tả Usecase Gửi phân phối nội bộ . . . . . . . . . . 42
Hình 3.33 Đặc tả Usecase Tiếp nhận phân phối . . . . . . . . . . . 43
Hình 3.34 Usecase Quản lý Báo cáo . . . . . . . . . . . . . . . . . 45
Hình 3.35 Đặc tả Usecase Khởi tạo báo cáo . . . . . . . . . . . . . 45
Hình 3.36 Đặc tả Usecase Cấu hình mẫu báo cáo . . . . . . . . . . 46
ix

Hình 3.37 Đặc tả Usecase Cấu hình khung báo cáo . . . . . . . . . 47
Hình 3.38 Đặc tả Usecase Thực hiện báo cáo . . . . . . . . . . . . 47
Hình 3.39 Đặc tả Usecase Xem lịch sử chỉnh sửa . . . . . . . . . . 48
Hình 3.40 Đặc tả Usecase Xem và xuất báo cáo . . . . . . . . . . . 48
Hình 3.41 Usecase Quản lý Công việc . . . . . . . . . . . . . . . . 49
Hình 3.42 Đặc tả Usecase Khởi tạo công việc . . . . . . . . . . . . 50
Hình 3.43 Đặc tả Usecase Cập nhật công việc . . . . . . . . . . . . 50
Hình 3.44 Đặc tả Usecase Xoá công việc . . . . . . . . . . . . . . . 51
Hình 3.45 Đặc tả Usecase Triển khai công việc . . . . . . . . . . . 51
Hình 3.46 Đặc tả Usecase Cập nhật tiến độ công việc . . . . . . . 52
Hình 3.47 Đặc tả Usecase Trao đổi công việc . . . . . . . . . . . . 52
Hình 4.1 Activity Diagram Quản lý lịch công tác tuần . . . . . . 56
Hình 4.2 Activity Diagram Đăng ký lịch hẹn với Ban Giám hiệu . 57
Hình 4.3 Activity Diagram quy trình Tổng hợp góp ý các văn bản
hành chính và các loại góp ý liên quan . . . . . . . . . . 58
Hình 4.4 Activity Diagram quy trình Tờ trình nội bộ . . . . . . . 59
Hình 4.5 Activity Diagram quy trình Phân phối văn bản . . . . . 60
Hình 4.6 Activity Diagram quy trình Quản lý Báo cáo . . . . . . 61
Hình 4.7 Activity Diagram quy trình Quản lý Công việc . . . . . 62
Hình 4.8 Các bảng dữ liệu người dùng và quyền . . . . . . . . . . 63
Hình 4.9 Các bảng dữ liệu quản lý lịch công tác . . . . . . . . . . 65
Hình 4.10 Các bảng dữ liệu chi tiết lịch công tác . . . . . . . . . . 69
Hình 4.11 Các bảng dữ liệu hỗ trợ liên kết Google Calendar . . . . 73
Hình 4.12 Các bảng dữ liệu của Tổng hợp các góp ý dự thảo, thông
tư, quyết định,... . . . . . . . . . . . . . . . . . . . . . . 75
Hình 4.13 Các bảng dữ liệu của Tờ trình nội bộ . . . . . . . . . . . 79
Hình 4.14 Các bảng dữ liệu của Phân phối văn bản . . . . . . . . . 85
Hình 4.15 Các bảng dữ liệu của Tổng hợp các góp ý dự thảo, thông
tư, quyết định,... . . . . . . . . . . . . . . . . . . . . . . 87
x

Hình 4.16 Các bảng dữ liệu của Cấu hình khung báo cáo . . . . . 88
Hình 4.17 Các bảng dữ liệu của Nội dung báo cáo . . . . . . . . . 92
Hình 4.18 Các bảng dữ liệu của Lịch sử chỉnh sửa báo cáo và Liên
kết Công việc . . . . . . . . . . . . . . . . . . . . . . . . 96
Hình 4.19 Các bảng dữ liệu của Tổng hợp các góp ý dự thảo, thông
tư, quyết định,... . . . . . . . . . . . . . . . . . . . . . . 97
Hình 4.20 Các bảng dữ liệu của Tổng hợp các góp ý dự thảo, thông
tư, quyết định,... . . . . . . . . . . . . . . . . . . . . . . 100
Hình 4.21 Các bảng dữ liệu của Tổng hợp các góp ý dự thảo, thông
tư, quyết định,... . . . . . . . . . . . . . . . . . . . . . . 103
Hình 5.1 Giao diện phân quyền trong phân hệ Lịch công tác . . . 107
Hình 5.2 Giao diện Quản lý phiếu đăng ký . . . . . . . . . . . . . 107
Hình 5.3 Biểu mẫu tạo phiếu mới . . . . . . . . . . . . . . . . . . 108
Hình 5.4 Giao diện Chi tiết phiếu đăng ký . . . . . . . . . . . . . 108
Hình 5.5 Giao diện Tiếp nhận đăng ký lịch . . . . . . . . . . . . . 108
Hình 5.6 Biểu mẫu tạo và chỉnh sửa lịch . . . . . . . . . . . . . . 109
Hình 5.7 Giao diện Quản lý tổng hợp lịch . . . . . . . . . . . . . 109
Hình 5.8 Biểu mẫu bổ sung thông tin thêm . . . . . . . . . . . . 110
Hình 5.9 Giao diện Quản lý Xem lịch công tác trường cùng bộ lọc
thời gian . . . . . . . . . . . . . . . . . . . . . . . . . . 110
Hình 5.10 Giao diện Quản lý Xem lịch công tác đơn vị cùng lựa
chọn xuất lịch . . . . . . . . . . . . . . . . . . . . . . . 111
Hình 5.11 Biểu mẫu thêm thành viên vào lịch cấp trường . . . . . 111
Hình 5.12 Giao diện xem và liên kết lịch cá nhân vào Google
Calendar . . . . . . . . . . . . . . . . . . . . . . . . . . 112
Hình 5.13 Giao diện Quản lý và bộ lọc danh sách đăng ký . . . . 112
Hình 5.14 Biểu mẫu tạo và chỉnh sửa đăng ký lịch . . . . . . . . . 113
Hình 5.15 Giao diện Xem và Chấp thuận đăng ký lịch . . . . . . . 113
Hình 5.16 Giao diện phân quyền trong Xử lý văn bản . . . . . . . 114
xi

Hình 5.17 Giao diện Quản lý phiếu thu thập góp ý . . . . . . . . . 114
Hình 5.18 Giao diện Cấu hình phiếu thu thập góp ý . . . . . . . . 115
Hình 5.19 Giao diện Thực hiện góp ý trên văn bản . . . . . . . . . 115
Hình 5.20 Các biểu mẫu góp ý . . . . . . . . . . . . . . . . . . . . 116
Hình 5.21 Cửa sổ xuất phiếu góp ý đã hoàn thành . . . . . . . . . 116
Hình 5.22 Giao diện Quản lý tờ trình nội bộ cùng bộ lọc trạng thái 117
Hình 5.23 Giao diện Cấu hình tờ trình nội bộ . . . . . . . . . . . . 117
Hình 5.24 Giao diện Phê duyệt tờ trình nội bộ . . . . . . . . . . . 118
Hình 5.25 Giao diện Xuất tờ trình nội bộ . . . . . . . . . . . . . . 118
Hình 5.26 Giao diện danh sách phân phối nội bộ . . . . . . . . . . 119
Hình 5.27 Biểu mẫu khởi tạo phân phối nội bộ . . . . . . . . . . . 119
Hình 5.28 Giao diện Cấu hình phân phối cho văn bản trình ký . . 120
Hình 5.29 Giao diện Xem và tiếp nhận các phân phối . . . . . . . 120
Hình 5.30 Cửa sổ xem và tiếp nhận phân phối . . . . . . . . . . . 121
Hình 5.31 Giao diện phân quyền trong Báo cáo . . . . . . . . . . . 121
Hình 5.32 Giao diện quản lý cấu hình mẫu báo cáo . . . . . . . . . 122
Hình 5.33 Giao diện cấu hình mẫu báo cáo . . . . . . . . . . . . . 122
Hình 5.34 Giao diện Quản lý các báo cáo hiện tại . . . . . . . . . . 122
Hình 5.35 Biểu mẫu tạo mới báo cáo . . . . . . . . . . . . . . . . . 123
Hình 5.36 Giao diện tổng quan cấu trúc báo cáo . . . . . . . . . . 123
Hình 5.37 Cửa sổ cấu hình khung báo cáo . . . . . . . . . . . . . . 124
Hình 5.38 Giao diện chi tiết thực hiện báo cáo . . . . . . . . . . . 124
Hình 5.39 Cửa sổ thực hiện nội dung báo cáo . . . . . . . . . . . . 125
Hình 5.40 Giao diện xem báo cáo . . . . . . . . . . . . . . . . . . . 125
Hình 5.41 Giao diện tổng quan quản lý công việc . . . . . . . . . . 126
Hình 5.42 Biểu mẫu tạo công việc mới . . . . . . . . . . . . . . . . 126
Hình 5.43 Giao diện chi tiết công việc . . . . . . . . . . . . . . . . 127
Hình 5.44 Biểu mẫu triển khai công tác . . . . . . . . . . . . . . . 127
Hình 6.1 Các hàm cần kiểm thử Unit Testing 1 . . . . . . . . . . 129
xii

Hình 6.2 Các hàm cần kiểm thử Unit Testing 2 . . . . . . . . . . 130
Hình 6.3 Kịch bản kiểm thử Unit Testing 1 . . . . . . . . . . . . 130
Hình 6.4 Kịch bản kiểm thử Unit Testing 2 . . . . . . . . . . . . 131
Hình 6.5 Kết quả kiểm thử Unit Testing . . . . . . . . . . . . . . 132
Hình 6.6 Danh sách các cấu hình loại tờ trình hiện có . . . . . . . 133
Hình 6.7 Tạo một loại tờ trình mới . . . . . . . . . . . . . . . . . 133
Hình 6.8 Cấu hình loại tờ trình . . . . . . . . . . . . . . . . . . . 133
Hình 6.9 Danh sách các tờ trình đang chỉnh sửa . . . . . . . . . . 134
Hình 6.10 Tạo một tờ trình mới . . . . . . . . . . . . . . . . . . . 134
Hình 6.11 Chi tiết tờ trình đang được chỉnh sửa . . . . . . . . . . 135
Hình 6.12 Chi tiết tờ trình đã được gửi . . . . . . . . . . . . . . . 135
Hình 6.13 Chi tiết tờ trình đang chuẩn bị được duyệt . . . . . . . 136
Hình 6.14 Chi tiết tờ trình đã chuẩn bị được duyệt . . . . . . . . . 136
Hình 6.15 Bản xem trước tờ trình chuẩn bị được xuất file . . . . . 137
Hình 6.16 File Pdf tờ trình đã được tải về máy . . . . . . . . . . . 138
Hình 6.17 Kịch bản kiểm thử Đăng ký Lịch công tác khi chạy
Playwright . . . . . . . . . . . . . . . . . . . . . . . . . 139
Hình 6.18 KếtquảkiểmthửĐăngkýLịchcôngtáckhichạyPlaywright
1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 140
Hình 6.19 KếtquảkiểmthửĐăngkýLịchcôngtáckhichạyPlaywright
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 140
xiii

| Danh | sách |     | bảng |     |     |     |     |     |     |
| ---- | ---- | --- | ---- | --- | --- | --- | --- | --- | --- |
Bảng 2.1 Ưu và Nhược điểm của PostgreSQL . . . . . . . . . . . 20
| Bảng 4.1 | Chú thích | bảng |     | . . | . . | . . . . | . . | . . . | . 63 |
| -------- | --------- | ---- | --- | --- | --- | ------- | --- | ----- | ---- |
schedule_user
| Bảng 4.2 | Chú thích | bảng |     |     |     | . . . . | . . | . . . | . 64 |
| -------- | --------- | ---- | --- | --- | --- | ------- | --- | ----- | ---- |
schedule_user_role
Bảng 4.3 Chú thích bảng schedule_don_vi . . . . . . . . . . . . 64
| Bảng 4.4 | Chú thích | bảng |     |     | . . | . . . | . . . | . . . | . 64 |
| -------- | --------- | ---- | --- | --- | --- | ----- | ----- | ----- | ---- |
schedule_chuc_vu
| Bảng 4.5 | Chú thích | bảng |     | . . | . . | . . . . | . . | . . . | . 64 |
| -------- | --------- | ---- | --- | --- | --- | ------- | --- | ----- | ---- |
schedule_role
Bảng 4.6 Chú thích bảng schedule_loai_don_vi . . . . . . . . . 65
| Bảng 4.7 | Chú thích | bảng |     |     | . . | . . . | . . . | . . . | . 66 |
| -------- | --------- | ---- | --- | --- | --- | ----- | ----- | ----- | ---- |
schedule_general
| Bảng 4.8 | Chú thích | bảng |     |     | .   | . . . | . . . | . . . | . 66 |
| -------- | --------- | ---- | --- | --- | --- | ----- | ----- | ----- | ---- |
schedule_register
Bảng 4.9 Chú thích bảng schedule_dm_type . . . . . . . . . . . . 67
| Bảng 4.10 | Chú thích | bảng |     |     |     |     | . . | . . . | . 67 |
| --------- | --------- | ---- | --- | --- | --- | --- | --- | ----- | ---- |
schedule_general_addition
| Bảng 4.11 | Chú thích | bảng |     |     |     | .   | . . . | . . . | . 68 |
| --------- | --------- | ---- | --- | --- | --- | --- | ----- | ----- | ---- |
schedule_general_item
Bảng 4.12 Chú thích bảng schedule_config_quy_trinh . . . . . . 69
| Bảng 4.13 | Chú thích | bảng |     |     |     |     |     | .   | . 70 |
| --------- | --------- | ---- | --- | --- | --- | --- | --- | --- | ---- |
schedule_config_quy_trinh_step
| Bảng 4.14 | Chú thích | bảng |     |     |     |     | . . . | . . . | . 70 |
| --------- | --------- | ---- | --- | --- | --- | --- | ----- | ----- | ---- |
schedule_general_assign
Bảng 4.15 Chú thích bảng schedule_general_files . . . . . . . . 71
| Bảng 4.16 | Chú thích | bảng |     |     | . . | . . . | . . . | . . . | . 71 |
| --------- | --------- | ---- | --- | --- | --- | ----- | ----- | ----- | ---- |
schedule_dm_cap
| Bảng 4.17 | Chú thích | bảng |     |     |     | . . . | . . . | . . . | . 71 |
| --------- | --------- | ---- | --- | --- | --- | ----- | ----- | ----- | ---- |
schedule_dm_vai_tro
Bảng 4.18 Chú thích bảng schedule_general_agenda . . . . . . . 72
| Bảng 4.19 | Chú thích | bảng |     |     |     |     |     |     | . 72 |
| --------- | --------- | ---- | --- | --- | --- | --- | --- | --- | ---- |
schedule_general_meeting_minutes
| Bảng 4.20 | Chú thích | bảng |     |     | . . . | . . . | . . . | . . . | . 73 |
| --------- | --------- | ---- | --- | --- | ----- | ----- | ----- | ----- | ---- |
schedule_token
Bảng 4.21 Chú thích bảng schedule_calendar_list . . . . . . . . 74
| Bảng 4.22 | Chú thích | bảng |     |     |     | . . | . . | . . . | . 74 |
| --------- | --------- | ---- | --- | --- | --- | --- | --- | ----- | ---- |
schedule_calendar_task
xiv

Bảng 4.23 Chú thích bảng draft_resolution_general . . . . . . 76
| Bảng 4.24 | Chú thích | bảng |     | .   | . . . | . . . | . 76 |
| --------- | --------- | ---- | --- | --- | ----- | ----- | ---- |
draft_resolution_user
Bảng 4.25 Chú thích bảng draft_resolution_file . . . . . . . . 77
Bảng 4.26 Chú thích bảng draft_resolution_comment . . . . . . 78
| Bảng 4.27 | Chú thích | bảng | .   | . . . | . . . | . . . . | . 79 |
| --------- | --------- | ---- | --- | ----- | ----- | ------- | ---- |
submission_type
Bảng 4.28 Chú thích bảng submission_general . . . . . . . . . . 80
Bảng 4.29 Chú thích bảng submission_dm_attribute . . . . . . . 80
| Bảng 4.30 | Chú thích | bảng |     | .   | . . . | . . . . | . 81 |
| --------- | --------- | ---- | --- | --- | ----- | ------- | ---- |
submission_attribute
Bảng 4.31 Chú thích bảng submission_data . . . . . . . . . . . . 81
Bảng 4.32 Chú thích bảng submission_file . . . . . . . . . . . . 82
| Bảng 4.33 | Chú thích | bảng |     | . . | . . . | . . . . | . 82 |
| --------- | --------- | ---- | --- | --- | ----- | ------- | ---- |
submission_comment
Bảng 4.34 Chú thích bảng submission_quy_trinh . . . . . . . . . 83
Bảng 4.35 Chú thích bảng submission_quy_trinh_history . . . . 84
| Bảng 4.36 | Chú thích | bảng |     |     | .   | . . . . | . 85 |
| --------- | --------- | ---- | --- | --- | --- | ------- | ---- |
submission_quy_trinh_user
Bảng 4.37 Chú thích bảng eoffice_van_ban_di_distribution . . 86
Bảng 4.38 Chú thích bảng report_config_template . . . . . . . . 87
| Bảng 4.39 | Chú thích | bảng |     | . . . | . . . | . . . | . 88 |
| --------- | --------- | ---- | --- | ----- | ----- | ----- | ---- |
report_config_frame
Bảng 4.40 Chú thích bảng report_monthly . . . . . . . . . . . . . 89
Bảng 4.41 Chú thích bảng report_monthly_quy_trinh_step . . . 89
| Bảng 4.42 | Chú thích | bảng |     |     |     | .   | . 89 |
| --------- | --------- | ---- | --- | --- | --- | --- | ---- |
report_monthly_dm_frame_column
Bảng 4.43 Chú thích bảng report_monthly_frame_column . . . . 90
| Bảng 4.44 | Chú thích | bảng |     | .   | . . . | . . . . | . 90 |
| --------- | --------- | ---- | --- | --- | ----- | ------- | ---- |
report_monthly_frame
| Bảng 4.45 | Chú thích | bảng |     | .   | . . . | . . . | . 91 |
| --------- | --------- | ---- | --- | --- | ----- | ----- | ---- |
report_monthly_assign
Bảng 4.46 Chú thích bảng report_user_role . . . . . . . . . . . . 91
| Bảng 4.47 | Chú thích | bảng |     |     |     |     | . 92 |
| --------- | --------- | ---- | --- | --- | --- | --- | ---- |
report_monthly_content_quy_trinh
Bảng 4.48 Chúthíchbảngreport_monthly_content_quy_trinh_step 93
Bảng 4.49 Chú thích bảng report_monthly_content . . . . . . . . 93
| Bảng 4.50 | Chú thích | bảng |     |     |     | . . . | . 94 |
| --------- | --------- | ---- | --- | --- | --- | ----- | ---- |
report_monthly_content_item
| Bảng 4.51 | Chú thích | bảng |     | . . . | . . . | . . . | . 94 |
| --------- | --------- | ---- | --- | ----- | ----- | ----- | ---- |
report_monthly_role
xv

Bảng 4.52 Chú thích bảng report_monthly_member . . . . . . . . 95
| Bảng 4.53 | Chú thích | bảng |     | .   | . . . . | . . . . . 96 |
| --------- | --------- | ---- | --- | --- | ------- | ------------ |
report_monthly_task
Bảng 4.54 Chú thích bảng task_type . . . . . . . . . . . . . . . . 98
Bảng 4.55 Chú thích bảng task_role . . . . . . . . . . . . . . . . 98
| Bảng 4.56 | Chú thích | bảng | . . | . . . | . . . . . | . . . . 99 |
| --------- | --------- | ---- | --- | ----- | --------- | ---------- |
task_general
Bảng 4.57 Chú thích bảng task_type_role . . . . . . . . . . . . . 99
Bảng 4.58 Chú thích bảng task_checklist . . . . . . . . . . . . . 100
| Bảng 4.59 | Chú thích | bảng | . . | . . . | . . . . | . . . . . 101 |
| --------- | --------- | ---- | --- | ----- | ------- | ------------- |
task_progress
Bảng 4.60 Chú thích bảng task_comment . . . . . . . . . . . . . . 101
Bảng 4.61 Chú thích bảng task_file . . . . . . . . . . . . . . . . 102
| Bảng 4.62 | Chú thích | bảng | . . . | . . . | . . . . | . . . . . 102 |
| --------- | --------- | ---- | ----- | ----- | ------- | ------------- |
task_member
Bảng 4.63 Chú thích bảng task_dm_loai . . . . . . . . . . . . . . 103
Bảng 4.64 Chú thích bảng task_source . . . . . . . . . . . . . . . 104
Bảng 4.65 Chú thích bảng . . . . . . . . . . . . . . . . . 104
task_log
Bảng 4.66 Chú thích bảng task_log_detail . . . . . . . . . . . . 105
Bảng 4.67 Chú thích bảng task_notification . . . . . . . . . . . 105
| Bảng 4.68 | Chú thích | bảng | .   | . . . | . . . . | . . . . . 105 |
| --------- | --------- | ---- | --- | ----- | ------- | ------------- |
task_reception
xvi

Chương 1
TỔNG QUAN
Chương đầu tiên sẽ trình bày thực trạng xử lý tác vụ hành chính ở các cơ sở
giáo dục hiện nay, từ đó phân tích động lực, mục tiêu và ý nghĩa của đề tài.
1

|     | Trường | Đại học  | Bách   | Khoa  | - ĐHQG-HCM |      |
| --- | ------ | -------- | ------ | ----- | ---------- | ---- |
|     | Khoa   | Khoa học | và Kỹ  | thuật | Máy        | Tính |
| 1.1 | Thực   | trạng    | - Động |       | lực        |      |
Hiện nay, công việc hành chính tại các trường đại học đang gia tăng không
| ngừng | cả về quy | mô và độ | phức | tạp. |     |     |
| ----- | --------- | -------- | ---- | ---- | --- | --- |
Số lượng cán bộ, giảng viên, sinh viên tăng trưởng hàng năm khiến khối lượng
công việc hành chính ngày càng lớn. Ngoài những tác vụ đơn giản, những quy
trình hành chính hiện đại còn bao gồm đa dạng các hoạt động phức tạp như
quản lý thông tin số, tổ chức lịch động, kiểm soát hoạt động ra vào trường,...
Bên cạnh đó, xu hướng số hóa toàn cầu cũng ảnh hưởng lớn đến khâu quản
lý hành chính trong giáo dục. Các trường đại học hàng đầu đều đang chuyển
dịch mạnh mẽ sang những mô hình quản trị thông minh, ứng dụng công nghệ
| để tối | ưu hiệu | suất. |     |     |     |     |
| ------ | ------- | ----- | --- | --- | --- | --- |
Hầu hết các cơ sở giáo dục tại Việt Nam vẫn đang sử dụng các quy trình thủ
công, hoặc một số công cụ thiếu tính chuyên biệt để xử lý các công việc hành
chính này. Điều này thoạt nhìn có thể là giải pháp tạm thời, tuy nhiên lại
trở thành khó khăn trong quá trình phát triển lâu dài, vì chúng thiếu tính hệ
thống, khó kiểm soát gây ra rủi ro lớn. Do đó, một hệ thống tích hợp hoàn
chỉnh các tính năng xử lý tác vụ hành chính là giải pháp hữu hiệu để giải
| quyết | bài toán | cấp thiết | trên. |     |     |     |
| ----- | -------- | --------- | ----- | --- | --- | --- |
| 1.2   | Mục      | tiêu      |       |     |     |     |
Với mong muốn không chỉ đáp ứng yêu cầu cơ bản trong quy trình xử lý tác
vụ phòng hành chính, mà còn giải quyết hiệu quả các vấn đề hiện tại, đề tài
| này được | xây dựng | hướng | đến những |     | mục tiêu | sau: |
| -------- | -------- | ----- | --------- | --- | -------- | ---- |
• Đẩy mạnh quá trình số hóa, thay thế những phương pháp thủ công bằng
hệ thống hiện đại, tích hợp các tính năng xử lý các quy trình nghiệp vụ
| trong | cơ sở | giáo dục. |     |     |     |     |
| ----- | ----- | --------- | --- | --- | --- | --- |
• Nâng cao hiệu suất, chất lượng công việc cũng như hỗ trợ tích cực cho
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang2/148

|     | Trường |      | Đại | học Bách  | Khoa  | - ĐHQG-HCM |      |     |     |
| --- | ------ | ---- | --- | --------- | ----- | ---------- | ---- | --- | --- |
|     | Khoa   | Khoa |     | học và Kỹ | thuật | Máy        | Tính |     |     |
người lao động trong cơ sở giáo dục giải quyết những tác vụ phức tạp
| nhanh |     | chóng | và thuận | tiện | hơn. |     |     |     |     |
| ----- | --- | ----- | -------- | ---- | ---- | --- | --- | --- | --- |
• Nỗ lực đóng góp vào tiến trình phát triển, chuyển dịch công nghệ trên
| toàn | cầu. |     |     |     |     |     |     |     |     |
| ---- | ---- | --- | --- | --- | --- | --- | --- | --- | --- |
Trên thực tế, các yêu cầu luôn ngày một thay đổi, cho nên ngoài việc đáp
ứng được nhu cầu hiện tại, đề tài còn hướng nhắm đến khả năng mở rộng và
nâng cấp sau này để có thể không ngừng cải thiện hiệu quả của công việc.
| 1.3 | Phạm |     | vi  | đề tài |     |     |     |     |     |
| --- | ---- | --- | --- | ------ | --- | --- | --- | --- | --- |
Phạm vi của dự án là tích hợp các tính năng quản lý phòng Hành chính tại
cơ sở giáo dục, và cụ thể sẽ được triển khai tại trường Đại học Bách Khoa -
| ĐHQG-TP.HCM. |     |     | Với các | đối tương |      | sử dụng | hệ thống | bao gồm: |     |
| ------------ | --- | --- | ------- | --------- | ---- | ------- | -------- | -------- | --- |
| • Lãnh       | đạo | cấp | trường  | là Ban    | Giám | hiệu.   |          |          |     |
• Lãnh đạo các cấp đơn vị tham gia vào quy trình quản trình quản lí của
| Phòng    |      | Hành     | chính.    |         |        |           |       |                 |          |
| -------- | ---- | -------- | --------- | ------- | ------ | --------- | ----- | --------------- | -------- |
| • Chuyên |      | viên     | tại phòng | Hành    | Chính. |           |       |                 |          |
| • Chuyên |      | viên     | các đơn   | vị liên | quan   | đến quy   | trình | quản lí.        |          |
| • Người  |      | lao động | toàn      | trường. |        |           |       |                 |          |
| 1.4      | Ý    | nghĩa    |           | của đề  | tài    |           |       |                 |          |
| •        |      |          |           |         |        |           | Góp   | phần chuyển đổi | số trong |
| Xây      | dựng |          | hệ thống  | quản    | lý     | hiện đại: |       |                 |          |
công tác hành chính của nhà trường, phù hợp với xu hướng giáo dục 4.0.
• Nâng cao hiệu quả quản lý: Giảm thiểu thời gian xử lý công việc thủ
công, hạn chế sai sót, tăng tính minh bạch trong quản lý hành chính.
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     | Trang3/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | ---------- |

|     | Trường | Đại  | học | Bách  | Khoa  | - ĐHQG-HCM |      |     |     |
| --- | ------ | ---- | --- | ----- | ----- | ---------- | ---- | --- | --- |
|     | Khoa   | Khoa | học | và Kỹ | thuật | Máy        | Tính |     |     |
• Tiết kiệm chi phí và nguồn lực: Giảm bớt giấy tờ, tài liệu vật lý, tận
dụng tối đa nguồn lực số để tiết kiệm thời gian và nhân công.
| •    |       |      |         |       |       | Nhân     | viên | và cán   | bộ quản lý dễ |
| ---- | ----- | ---- | ------- | ----- | ----- | -------- | ---- | -------- | ------------- |
| Cải  | thiện | trải | nghiệm  | người | dùng: |          |      |          |               |
| dàng | truy  | cập, | tra cứu | thông | tin,  | giảm bớt | thủ  | tục rườm | rà.           |
• Dễ dàng mở rộng và tích hợp: Ứng dụng có thể phát triển thêm các
module khác như quản lý đào tạo, quản lý sinh viên trong tương lai.
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     | Trang4/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | ---------- |

| Chương |     | 2   |        |
| ------ | --- | --- | ------ |
| CƠ     | SỞ  | LÝ  | THUYẾT |
Ở chương này, những công nghệ được nhóm sử dụng để hiện thực đề tài sẽ
được trình bày chi tiết về đặc điểm cũng như lý do lựa chọn giữa các công
| nghệ tương | tự. |     |     |
| ---------- | --- | --- | --- |
5

|       | Trường | Đại  | học  | Bách |       | Khoa -    | ĐHQG-HCM |     |
| ----- | ------ | ---- | ---- | ---- | ----- | --------- | -------- | --- |
|       | Khoa   | Khoa | học  | và   | Kỹ    | thuật Máy | Tính     |     |
| 2.1   | Mô     | hình | phát |      | triển |           |          |     |
| 2.1.1 | Mô     | hình | MVC  |      |       |           |          |     |
Mô hình MVC (Model-View-Controller) là một kiến trúc phần mềm phổ biến,
giúp phân tách ứng dụng thành 3 thành phần chính để dễ bảo trì, mở rộng
và quản lý code. MVC thường được sử dụng trong phát triển web, ứng dụng
| desktop   | và  | mobile.    |     |     |          |     |     |     |
| --------- | --- | ---------- | --- | --- | -------- | --- | --- | --- |
| Các thành |     | phần trong | MVC |     | bao gồm: |     |     |     |
• Model: Xử lý logic nghiệp vụ, tương tác với cơ sở dữ liệu, chứa dữ liệu
| và  | các | quy tắc | ứng | dụng. |     |     |     |     |
| --- | --- | ------- | --- | ----- | --- | --- | --- | --- |
• View: Hiển thị giao diện người dùng (UI), nhận dữ liệu từ Controller để
| biểu | diễn | các thành |     | phần | của | trang web, | ứng | dụng. |
| ---- | ---- | --------- | --- | ---- | --- | ---------- | --- | ----- |
• Controller: Điều phối giữa Model và View, xử lý yêu cầu (request) từ
| người | dùng, | gọi | Model | để  | lấy | dữ liệu và | truyền | cho View. |
| ----- | ----- | --- | ----- | --- | --- | ---------- | ------ | --------- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang6/148

|     | Trường | Đại  | học Bách  | Khoa  | - ĐHQG-HCM |      |     |
| --- | ------ | ---- | --------- | ----- | ---------- | ---- | --- |
|     | Khoa   | Khoa | học và Kỹ | thuật | Máy        | Tính |     |
|     |        |      | Hình 2.1: | Mô    | hình       | MVC  |     |
Mô hình MVC phù hợp với các framework hiện đại, giúp mã nguồn được tổ
chức rõ ràng, dễ tái sử dụng và phát triển nâng cao hệ thống.
| 2.1.2 | Ứng | dụng | SPA |     |     |     |     |
| ----- | --- | ---- | --- | --- | --- | --- | --- |
(Single-Page Application) là ứng dụng web tải một trang HTML duy
SPA
nhất ban đầu, sau đó cập nhật nội dung động thông qua JavaScript (thường
| sử dụng | API như | REST/GraphQL) |     | mà  | không | cần tải | lại trang. |
| ------- | ------- | ------------- | --- | --- | ----- | ------- | ---------- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang7/148

| Trường | Đại học  | Bách Khoa   | - ĐHQG-HCM |
| ------ | -------- | ----------- | ---------- |
| Khoa   | Khoa học | và Kỹ thuật | Máy Tính   |
Hình 2.2: So sánh giữa SPA (Single-Page Application) và MPA (Multiple-
Page Application)
Ngoài khả năng mang lại trải nghiệm mượt mà hơn cho người dùng, SPA còn
có tốc độ phản hồi nhanh, tiết kiệm băng thông và dễ dàng tích hợp với các
| framework hiện | đại. |     |     |
| -------------- | ---- | --- | --- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang8/148

|       | Trường  | Đại  | học Bách  | Khoa  | - ĐHQG-HCM |      |     |     |
| ----- | ------- | ---- | --------- | ----- | ---------- | ---- | --- | --- |
|       | Khoa    | Khoa | học và Kỹ | thuật | Máy        | Tính |     |     |
| 2.1.3 | RESTful |      | API       |       |            |      |     |     |
RESTful API (Representational State Transfer) là một kiến trúc phần mềm
dựa trên các nguyên tắc của Representation State Transfer), giúp xây
REST
dựng các dịch vụ web linh hoạt, dễ mở rộng và tương thích với nhiều nền tảng.
| RESTful | API         | sử dụng | HTTP       | methods      | (GET, | POST,         | PUT, DELETE) | để  |
| ------- | ----------- | ------- | ---------- | ------------ | ----- | ------------- | ------------ | --- |
| thao    | tác với tài | nguyên  | (resource) | thông        | qua   | các endpoint. |              |     |
|         |             |         | Hình       | 2.3: RESTful |       | API           |              |     |
Đối với hệ thống cần sự ổn định, tốc độ và khả năng mở rộng thì RESTful
API là lựa chọn nổi bật, nhờ vào sự đơn giản, linh hoạt trong truyền tải dữ
liệu (sử dụng JSON), cấu trúc rõ ràng với các endpoint cố định, cũng như
| tương | thích đa  | dạng | nền tảng. |     |     |     |     |     |
| ----- | --------- | ---- | --------- | --- | --- | --- | --- | --- |
| 2.2   | Front-end |      |           |     |     |     |     |     |
| 2.2.1 | ReactJs   |      |           |     |     |     |     |     |
ReactJS là một thư viện JavaScript mã nguồn mở, được phát triển bởi
Facebook, dùng để xây dựng giao diện người dùng (UI), đặc biệt là cho các
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     | Trang9/148 |     |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | ---------- | --- |

|     | Trường |      | Đại | học Bách | Khoa     | - ĐHQG-HCM |      |     |
| --- | ------ | ---- | --- | -------- | -------- | ---------- | ---- | --- |
|     | Khoa   | Khoa |     | học và   | Kỹ thuật | Máy        | Tính |     |
ứng dụng web có tính tương tác cao. Thư viện này cho phép lập trình viên
xây dựng các thành phần giao diện (components) có thể tái sử dụng, giúp tổ
| chức | mã nguồn | rõ  | ràng | và dễ bảo | trì. |         |     |     |
| ---- | -------- | --- | ---- | --------- | ---- | ------- | --- | --- |
|      |          |     |      | Hình      | 2.4: | ReactJS |     |     |
ReactJS hoạt động dựa trên cơ chế "Virtual DOM"– một bản sao ảo của DOM
thật trong trình duyệt. Khi có sự thay đổi về dữ liệu, React sẽ so sánh trạng
thái mới với bản Virtual DOM trước đó, sau đó chỉ cập nhật những phần
thực sự thay đổi trong DOM thật. Cơ chế này giúp tăng hiệu năng đáng kể
| so với | việc | cập nhật | toàn | bộ giao | diện. |     |     |     |
| ------ | ---- | -------- | ---- | ------- | ----- | --- | --- | --- |
ReactJs này sử dụng JSX (JavaScript XML), một cú pháp mở rộng cho phép
viết mã HTML trong JavaScript. JSX giúp mô tả UI một cách trực quan,
đồng thời tận dụng sức mạnh của JavaScript để xử lý logic hiển thị.
| Một số | khái | niệm | cơ bản | trong | React: |     |     |     |
| ------ | ---- | ---- | ------ | ----- | ------ | --- | --- | --- |
• Component: là khái niệm cốt lõi trong React, đại diện cho từng phần
tử giao diện riêng biệt trong một ứng dụng web. Mỗi component đóng vai
trò như một khối xây dựng độc lập, có thể tái sử dụng, quản lý trạng thái
riêng và chịu trách nhiệm hiển thị một phần cụ thể của giao diện người
| dùng. |     | Có hai | loại | component | chính | là    |           | và         |
| ----- | --- | ------ | ---- | --------- | ----- | ----- | --------- | ---------- |
|       |     |        |      |           |       | class | component | functional |
component.
– Class component là cách định nghĩa component trong React bằng
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     | Trang10/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | ----------- |

| Trường | Đại học  | Bách  | Khoa  | - ĐHQG-HCM |      |     |     |     |
| ------ | -------- | ----- | ----- | ---------- | ---- | --- | --- | --- |
| Khoa   | Khoa học | và Kỹ | thuật | Máy        | Tính |     |     |     |
cách sử dụng cú pháp lớp (class) của JavaScript. Nó cho phép sử
dụng các tính năng như state nội bộ và các phương thức vòng đời
| (lifecycle   | methods)  |     |              |     |      |      |            |     |
| ------------ | --------- | --- | ------------ | --- | ---- | ---- | ---------- | --- |
| – Functional | component |     | là component |     | được | định | nghĩa bằng | hàm |
JavaScript. Ban đầu chỉ dùng để hiển thị đơn giản, nhưng từ khi
React giới thiệu hooks, function component có thể quản lý state, xử
lý vòng đời và thực hiện hầu hết mọi chức năng như class component,
đồng thời với cú pháp ngắn gọn, dễ đọc và hiện đang được khuyến
| khích | sử dụng hơn. |     |     |     |     |     |     |     |
| ----- | ------------ | --- | --- | --- | --- | --- | --- | --- |
• Props: là một cách để truyền dữ liệu từ một thành phần cha xuống
thành phần con. Đây là cơ chế giúp các thành phần trong ứng dụng có
thể giao tiếp với nhau một chiều, từ trên xuống dưới. Dữ liệu này thường
bao gồm thông tin hiển thị, hành vi cần thực hiện hoặc các giá trị cấu
hình mà thành phần con cần sử dụng để hoạt động đúng trong từng ngữ
| cảnh cụ thể. |     |     |     |     |     |     |     |     |
| ------------ | --- | --- | --- | --- | --- | --- | --- | --- |
Props được thiết kế để không thể thay đổi từ bên trong thành phần nhận
nó, giúp đảm bảo tính ổn định và dễ kiểm soát trong luồng dữ liệu của
ứng dụng. Khi một thành phần nhận props mới, nó sẽ tự động được cập
| nhật để phản | ánh đúng | nội | dung | hoặc hành | vi  | tương | ứng. |     |
| ------------ | -------- | --- | ---- | --------- | --- | ----- | ---- | --- |
• là một kho lưu trữ dữ liệu nội bộ cho các component trong React,
State:
có thể thay đổi trong vòng đời của component. Khi state thay đổi, React
sẽ tự động cập nhật lại component liên quan, đảm bảo giao diện luôn
phản ánh đúng dữ liệu hiện tại. State thường được sử dụng cho các yếu
tố động như giá trị nhập liệu từ người dùng, trạng thái hiển thị của một
| phần tử giao                          | diện, hoặc | dữ  | liệu được | lấy | từ máy | chủ. |             |     |
| ------------------------------------- | ---------- | --- | --------- | --- | ------ | ---- | ----------- | --- |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |            |     |           |     |        |      | Trang11/148 |     |

|       | Trường |      | Đại   | học Bách | Khoa     | - ĐHQG-HCM |      |     |     |
| ----- | ------ | ---- | ----- | -------- | -------- | ---------- | ---- | --- | --- |
|       | Khoa   | Khoa |       | học và   | Kỹ thuật | Máy        | Tính |     |     |
| 2.2.2 | React  |      | Query |          |          |            |      |     |     |
React Query là một thư viện quản lý trạng thái máy chủ (server state) mạnh
mẽ cho các ứng dụng React. Thay vì quản lý dữ liệu từ API bằng các giải
pháp quản lý trạng thái chung như Redux hay Context API, React Query tập
trung vào việc đơn giản hóa quá trình tìm nạp (fetching), lưu trữ (caching),
đồng bộ hóa (synchronizing) và cập nhật dữ liệu máy chủ. Thư viện này giúp
giải quyết nhiều thách thức phổ biến khi làm việc với dữ liệu bất đồng bộ,
như quản lý trạng thái tải (loading), lỗi (error), dữ liệu cũ (stale data), và tối
| ưu hóa   | hiệu | suất. |     |       |            |          |     |     |     |
| -------- | ---- | ----- | --- | ----- | ---------- | -------- | --- | --- | --- |
|          |      |       |     | Hình  | 2.5: React | Query    |     |     |     |
| Các tính | năng | chính | của | React | Query      | bao gồm: |     |     |     |
• Caching: Tự động lưu trữ dữ liệu đã fetch và trả về ngay lập tức nếu
dữ liệu còn hợp lệ, giúp giảm số lượng request không cần thiết đến máy
chủ.
• Refetching on Focus/Reconnect: Tự động cập nhật dữ liệu khi người
dùng quay lại tab trình duyệt hoặc khi kết nối mạng được khôi phục, đảm
| bảo | dữ  | liệu luôn | mới | nhất. |     |     |     |     |     |
| --- | --- | --------- | --- | ----- | --- | --- | --- | --- | --- |
• Background Refetching: Cập nhật dữ liệu ngầm mà không làm gián
| đoạn       | trải | nghiệm |     | người    | dùng.    |     |          |             |      |
| ---------- | ---- | ------ | --- | -------- | -------- | --- | -------- | ----------- | ---- |
| •          |      |        |     |          |          | Hỗ  | trợ mạnh | mẽ cho việc | phân |
| Pagination |      |        | and | Infinite | Loading: |     |          |             |      |
trang và tải vô hạn, giúp quản lý dữ liệu lớn một cách hiệu quả.
• Mutations: Cung cấp các công cụ để dễ dàng gửi dữ liệu lên máy chủ
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     | Trang12/148 |     |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | ----------- | --- |

Trường Đại học Bách Khoa - ĐHQG-HCM
Khoa Khoa học và Kỹ thuật Máy Tính
(POST, PUT, DELETE) và quản lý trạng thái của các thao tác này, bao
gồm cả việc cập nhật UI lạc quan (optimistic updates).
• Devtools: Cung cấp công cụ phát triển mạnh mẽ để theo dõi và debug
các query, cache, và mutations.
2.2.3 Zustand
Zustand là một phương pháp quản lý trạng thái trang web (state) tinh gọn,
hiệu suất cao và có khả năng mở rộng.
Hình 2.6: Zustand
Zustand cho phép khởi tạo store một cách rất trực quan bằng hàm create, trả
vềmộthook(thườnglà useStore)đểcácReactComponentcóthểtruycậpvà
thay đổi state. Cú pháp đơn giản của Zustand giúp giảm đáng kể boilerplate
so với các giải pháp như Redux: thay vì định nghĩa action, reducer và store
riêng biệt, nhà phát triển chỉ cần mô tả state và các hàm thay đổi state trong
một nơi duy nhất. Ngoài ra, Zustand hỗ trợ các middleware hữu ích như
persist (lưu state vào localStorage), devtools (hỗ trợ debug và time-travel)
và tích hợp dễ dàng với immer để thao tác state theo kiểu bất biến.
Zustand còn cung cấp cơ chế selectors để chỉ chọn ra state cần thiết, giúp giảm
số lần re-render nhằm tối ưu hiệu năng. Nhờ API dựa trên hooks, Zustand
hoạt động mượt mà với function components và các hook React hiện đại, phù
hợp cả khi quản lý state cục bộ phức tạp hoặc làm state toàn cục trong ứng
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang13/148

|     | Trường | Đại học  | Bách  | Khoa - ĐHQG-HCM |      |
| --- | ------ | -------- | ----- | --------------- | ---- |
|     | Khoa   | Khoa học | và Kỹ | thuật Máy       | Tính |
dụng vừa và nhỏ, đồng thời có thể kết hợp linh hoạt với các giải pháp khác
| trong | ứng dụng | quy mô | lớn. |     |     |
| ----- | -------- | ------ | ---- | --- | --- |
| 2.2.4 | Vite     |        |      |     |     |
Vite là một công cụ xây dựng (build tool) hiện đại dùng để phát triển các
ứng dụng web, đặc biệt phổ biến trong các dự án sử dụng JavaScript và các
| framework | như | React,... |      |           |     |
| --------- | --- | --------- | ---- | --------- | --- |
|           |     |           | Hình | 2.7: VITE |     |
Điểm nổi bật của Vite nằm ở khả năng khởi động máy chủ phát triển gần như
tức thì, nhờ vào việc sử dụng mô-đun dạng ES (ES Modules) có sẵn trong
trình duyệt hiện đại. Thay vì biên dịch toàn bộ mã nguồn ngay từ đầu như
các công cụ truyền thống, Vite chỉ xử lý những phần cần thiết khi trình duyệt
yêu cầu, từ đó giảm đáng kể thời gian chờ mỗi khi thay đổi mã.
Bên cạnh tốc độ phát triển, Vite cũng cung cấp quy trình dựng (build) tối ưu
cho sản phẩm hoàn chỉnh. Khi xây dựng bản phân phối, Vite sử dụng công
cụ Rollup để gom gọn và tối ưu mã nguồn, đảm bảo hiệu suất tốt khi đưa lên
| môi trường | thực | tế. |     |     |     |
| ---------- | ---- | --- | --- | --- | --- |
Vite còn hỗ trợ sẵn nhiều tính năng tiện lợi như tự động làm mới giao diện
khi mã thay đổi, hỗ trợ TypeScript, CSS hiện đại, cấu hình đơn giản, cùng
khả năng mở rộng thông qua hệ thống plugin linh hoạt. Chính vì những ưu
điểm này, Vite ngày càng được ưa chuộng như một giải pháp thay thế nhẹ và
nhanh hơn cho các công cụ như Webpack trong việc phát triển các ứng dụng
| web hiện | đại. |     |     |     |     |
| -------- | ---- | --- | --- | --- | --- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang14/148

|       | Trường | Đại học  | Bách  | Khoa -          | ĐHQG-HCM |
| ----- | ------ | -------- | ----- | --------------- | -------- |
|       | Khoa   | Khoa học | và Kỹ | thuật           | Máy Tính |
| 2.2.5 | Ant    | Design   |       |                 |          |
|       |        |          | Hình  | 2.8: Ant Design |          |
Ant Design là một thư viện giao diện người dùng (UI library) được phát triển
bởi Ant Group, nhằm cung cấp một hệ thống thiết kế đầy đủ và nhất quán
cho các ứng dụng web hiện đại. Thư viện này bao gồm một tập hợp phong
phú các thành phần giao diện đã được thiết kế sẵn như nút bấm, biểu mẫu,
bảng dữ liệu, menu, cửa sổ thoại và nhiều thành phần nâng cao khác. Các
thành phần này đều tuân theo một hệ thống thiết kế trực quan, rõ ràng, và
có tính thẩm mỹ cao, phù hợp đặc biệt với các ứng dụng quản trị hoặc nền
| tảng  | doanh nghiệp. |     |      |               |     |
| ----- | ------------- | --- | ---- | ------------- | --- |
| 2.2.6 | Tailwind      | CSS |      |               |     |
|       |               |     | Hình | 2.9: Tailwind | CSS |
Tailwind CSS là một framework thiết kế giao diện theo hướng tiện ích, cho
phép lập trình viên xây dựng giao diện bằng cách kết hợp trực tiếp các lớp
CSS nhỏ gọn, mỗi lớp thực hiện một chức năng cụ thể như căn lề, màu sắc,
kích thước hoặc căn chỉnh. Việc này giúp tăng tốc quá trình phát triển, đồng
thời đảm bảo tính linh hoạt và nhất quán trong toàn bộ ứng dụng.
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang15/148

|       | Trường   |         | Đại học | Bách | Khoa     | -   | ĐHQG-HCM  |             |          |
| ----- | -------- | ------- | ------- | ---- | -------- | --- | --------- | ----------- | -------- |
|       | Khoa     | Khoa    | học     | và   | Kỹ thuật |     | Máy Tính  |             |          |
| 2.3   | Back-end |         |         |      |          |     |           |             |          |
| 2.3.1 | Node.js  |         |         |      |          |     |           |             |          |
|       | là       | một môi | trường  |      | mã nguồn | mở  | chạy trên | JavaScript, | cho phép |
Node.js
thực thi JavaScript phía server. Node.js đã cách mạng hóa cách phát triển
backend nhờ mô hình non-blocking, event-driven I/O, giúp xây dựng ứng
| dụng | thời | gian thực, | có    | tính mở | rộng              | và hiệu | suất cao. |         |     |
| ---- | ---- | ---------- | ----- | ------- | ----------------- | ------- | --------- | ------- | --- |
|      |      | Hình       | 2.10: | Mô      | hình non-blocking |         | của       | Node.js |     |
Khi gặp các tác vụ I/O (đọc file, gọi API, truy vấn database), sẽ
Node.js
không chờ đến khi tác vụ đó thực hiện xong mà sẽ chuyển sang thực hiện tác
vụ khác. Sau khi tác vụ I/O thực hiện xong mới trả về kết quả thông qua
callback/promise.
Node.js thực hiện xử lý các tác vụ bất đồng bộ thông qua việc sử dụng
Event Loop. Từng tác vụ sẽ lần lượt được đưa vào Event Queue để đi vào
|                                       |         | xử lý | ở các |        |        |     | thay vì | phải tạo nhiều | luồng cho   |
| ------------------------------------- | ------- | ----- | ----- | ------ | ------ | --- | ------- | -------------- | ----------- |
| Event                                 | Loop    |       |       | Worker | Thread |     |         |                |             |
| từng                                  | tác vụ. |       |       |        |        |     |         |                |             |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |         |       |       |        |        |     |         |                | Trang16/148 |

|     |     | Trường | Đại  | học   | Bách  | Khoa     | - ĐHQG-HCM |        |         |     |
| --- | --- | ------ | ---- | ----- | ----- | -------- | ---------- | ------ | ------- | --- |
|     |     | Khoa   | Khoa | học   | và    | Kỹ thuật | Máy        | Tính   |         |     |
|     |     |        | Hình | 2.11: | Luồng | xử       | lý tác     | vụ của | Node.js |     |
Đối với đề tài này, Node.js là một lựa chọn hiệu quả. Tuy nhiên đối với các
hệ thống khác với những tác vụ tính toán nặng (AI, xử lý ảnh, data mining)
| sẽ    | khiến | Event      | Loop | bị nghẽn, |     | làm chậm | toàn | bộ  | hệ thống. |     |
| ----- | ----- | ---------- | ---- | --------- | --- | -------- | ---- | --- | --------- | --- |
| 2.3.2 |       | Express.js |      |           |     |          |      |     |           |     |
Express.js là một framework web nhanh, gọn nhẹ và linh hoạt được xây
dựng trên nền tảng Node.js, cung cấp các tính năng mạnh mẽ để phát triển
ứng dụng web và API. Express.js đã trở thành framework backend phổ biến
nhất trong hệ sinh thái Node.js nhờ kiến trúc đơn giản, hiệu suất cao và khả
| năng       | mở  | rộng | dễ dàng. |     |      |        |     |     |           |             |
| ---------- | --- | ---- | -------- | --- | ---- | ------ | --- | --- | --------- | ----------- |
| Express.js |     | hoạt | động     | dựa | trên | cơ chế |     |     | - các hàm | có khả năng |
middleware
xử lý request và response theo chuỗi pipeline. Khi nhận request, Express.js
sẽ chuyển nó qua các middleware theo thứ tự, cho phép thực hiện nhiều thao
tác như xác thực, nén dữ liệu, ghi lại lịch sử trước khi trả về response.
| Express.js |     | kế  | thừa | toàn | bộ ưu | điểm của | Node.js |     | về mô hình |     |
| ---------- | --- | --- | ---- | ---- | ----- | -------- | ------- | --- | ---------- | --- |
non-blocking
|     | và  | event-driven, |     | đồng | thời | bổ sung: |     |     |     |     |
| --- | --- | ------------- | --- | ---- | ---- | -------- | --- | --- | --- | --- |
I/O
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     | Trang17/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

Trường Đại học Bách Khoa - ĐHQG-HCM
Khoa Khoa học và Kỹ thuật Máy Tính
Hình 2.12: Luồng xử lý của Express JS
• Hệ thống routing mạnh mẽ với cú pháp rõ ràng
• Hỗ trợ đa dạng template engine (Pug, EJS)
• Cơ chế middleware linh hoạt
• Tích hợp dễ dàng với các cơ sở dữ liệu và công nghệ khác
2.4 Database
2.4.1 PostgreSQL
PostgreSQL(hayPostgres)làmộthệquảntrịcơsởdữliệuquanhệ(RDBMS)
mã nguồn mở mạnh mẽ, nổi bật với:
• Tính ACID (Atomicity, Consistency, Isolation, Durability)
• Hỗ trợ SQL chuẩn và mở rộng
• Khả năng xử lý dữ liệu phức tạp và chịu tải cao
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang18/148

|      | Trường   |          | Đại            | học   | Bách  | Khoa   | -    | ĐHQG-HCM   |        |             |     |
| ---- | -------- | -------- | -------------- | ----- | ----- | ------ | ---- | ---------- | ------ | ----------- | --- |
|      | Khoa     |          | Khoa           | học   | và Kỹ | thuật  | Máy  | Tính       |        |             |     |
|      |          |          | Hình           | 2.13: | Kiến  | trúc   | của  | PostgreSQL |        |             |     |
| Kiến | trúc cốt | lõi      | của PostgreSQL |       |       | bao    | gồm  | các thành  | phần:  |             |     |
| •    |          | Manager: |                | Quản  |       | lý các | tiến | trình con  | (child | processes), | bao |
Process
| gồm | tiến | trình | xử  | lý truy | vấn | và  | tiến trình | quản | lý  | bộ nhớ. |     |
| --- | ---- | ----- | --- | ------- | --- | --- | ---------- | ---- | --- | ------- | --- |
• Shared Memory: Lưu trữ thông tin chung mà các tiến trình có thể truy
| cập, | ví  | dụ: | bộ đệm | cache | của | dữ  | liệu. |     |     |     |     |
| ---- | --- | --- | ------ | ----- | --- | --- | ----- | --- | --- | --- | --- |
• Storage Manager: Phụ trách lưu trữ và quản lý dữ liệu trên đĩa.
PostgreSQL sử dụng WAL(Write-Ahead Logging) để đảm bảo tính toàn
| vẹn | dữ  | liệu. |     |     |     |     |     |     |     |     |     |
| --- | --- | ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
• Query Processor: Xử lý các câu truy vấn SQL, tối ưu hóa và thực thi
chúng.
| •   |     |     | Processes: |     |     | Bao gồm | các | tiến | trình | chạy ngầm | để thực |
| --- | --- | --- | ---------- | --- | --- | ------- | --- | ---- | ----- | --------- | ------- |
Background
| hiện                                  | các | tác | vụ như | dọn | dẹp | log, | backup, | và auto-vacuum. |     |     |             |
| ------------------------------------- | --- | --- | ------ | --- | --- | ---- | ------- | --------------- | --- | --- | ----------- |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |        |     |     |      |         |                 |     |     | Trang19/148 |

|     | Trường | Đại  | học | Bách | Khoa     |       | - ĐHQG-HCM |      |     |     |     |
| --- | ------ | ---- | --- | ---- | -------- | ----- | ---------- | ---- | --- | --- | --- |
|     | Khoa   | Khoa | học | và   | Kỹ thuật |       | Máy        | Tính |     |     |     |
| Ưu  | điểm   |      |     |      |          | Nhược |            | điểm |     |     |     |
Hỗ trợ đầy đủ ACID (Atomicity, Yêu cầu tối ưu hóa thủ công các
| Consistency, |      | Isolation, |        | Durability) |       | tham | số    |       |       |            |       |
| ------------ | ---- | ---------- | ------ | ----------- | ----- | ---- | ----- | ----- | ----- | ---------- | ----- |
| Đa           | dạng | kiểu       |        | dữ          | liệu: | Tiêu | thụ   | nhiều |       | tài nguyên | RAM   |
| JSON/JSONB,  |      | GIS,       | Array, |             | UUID  |      |       |       |       |            |       |
| Hiệu         | suất | cao với    | cơ chế |             | và    | Khó  | scale |       | ngang | (sharding  | không |
MVCC
built-in)
| parallel |     | query |     |     |     |     |     |     |     |     |     |
| -------- | --- | ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Khả năng mở rộng: partitioning, Backup/Restore tốn thời gian với
| replication, |     | sharding | (qua | Citus) |     | database |     | lớn |     |     |     |
| ------------ | --- | -------- | ---- | ------ | --- | -------- | --- | --- | --- | --- | --- |
SQL mạnh mẽ: Window Functions, Không phù hợp cho truy vấn key-
| CTE,     | Full-Text | Search         |      |           |         | value | đơn | giản |     |     |     |
| -------- | --------- | -------------- | ---- | --------- | ------- | ----- | --- | ---- | --- | --- | --- |
| Mã nguồn |           | mở, cộng       | đồng | hỗ        | trợ lớn |       |     |      |     |     |     |
| Bảo      | mật       | tốt: Row-Level |      | Security, |         |       |     |      |     |     |     |
SSL encryption
|     |     | Bảng | 2.1: | Ưu và | Nhược | điểm | của | PostgreSQL |     |     |     |
| --- | --- | ---- | ---- | ----- | ----- | ---- | --- | ---------- | --- | --- | --- |
PostgreSQL là lựa chọn tốt cho các ứng dụng cần độ tin cậy cao và tính năng
mạnh mẽ. Đối với các hệ thống đơn giản hơn hay có scale lớn hơn, chúng ta
| nên cân                               | nhắc  | sử dụng | MySQL |     | hoặc | NoSQL | thay | cho | Postgres. |     |             |
| ------------------------------------- | ----- | ------- | ----- | --- | ---- | ----- | ---- | --- | --------- | --- | ----------- |
| 2.4.2                                 | Redis |         |       |     |      |       |      |     |           |     |             |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |       |         |       |     |      |       |      |     |           |     | Trang20/148 |

|     | Trường | Đại học  | Bách | Khoa     | - ĐHQG-HCM |      |     |     |
| --- | ------ | -------- | ---- | -------- | ---------- | ---- | --- | --- |
|     | Khoa   | Khoa học | và   | Kỹ thuật | Máy        | Tính |     |     |
Redis (Remote Dictionary Server) là hệ thống lưu trữ key-value in-memory
| mã nguồn | mở,       | nổi bật với     | các  | đặc điểm | như      |     |     |     |
| -------- | --------- | --------------- | ---- | -------- | -------- | --- | --- | --- |
| • Tốc    | độ cực    | nhanh (100,000+ |      | xử       | lý/giây) |     |     |     |
| • Hỗ     | trợ nhiều | kiểu dữ         | liệu | phức tạp |          |     |     |     |
| • Cơ     | chế lưu   | trữ dữ liệu     | trên | RAM      |          |     |     |     |
Redis hỗ trợ replication master-slave và clustering tự động sharding. Sử dụng
| mô hình |                 |     |       |      | để xử | lý tuần | tự các request, | lưu trữ |
| ------- | --------------- | --- | ----- | ---- | ----- | ------- | --------------- | ------- |
|         | single-threaded |     | event | loop |       |         |                 |         |
dữ liệu trong RAM với cơ chế hash table, Redis là giải pháp tối ưu cho hệ
thống cần tốc độ và độ trễ thấp như quản lý phiên (Session Management),
phântíchthờigianthực(Real-timeManagement),hàngđợitinnhắn(Message
Queue),...
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     | Trang21/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | ----------- |

| Chương |     | 3    |     |     |     |
| ------ | --- | ---- | --- | --- | --- |
| PHÂN   |     | TÍCH | YÊU | CẦU | HỆ  |
THỐNG
Trong phạm vi chương này, yêu cầu nghiệp vụ của các quy trình quản lý phòng
hành chính trường đại học sẽ được phân tích và tổng hợp, từ đó đưa ra thiết
| kế chi tiết | thành module | tương ứng | cho hệ thống. |     |     |
| ----------- | ------------ | --------- | ------------- | --- | --- |
22

|     | Trường |      | Đại học | Bách | Khoa     | - ĐHQG-HCM |      |
| --- | ------ | ---- | ------- | ---- | -------- | ---------- | ---- |
|     | Khoa   | Khoa | học     | và   | Kỹ thuật | Máy        | Tính |
| 3.1 | Lịch   | công |         | tác  |          |            |      |
Lịch công tác được kỳ vọng là phân hệ hỗ trợ người lao động toàn trường tối
ưu quá trình quản lý sự kiện, hoạt động của trường, đơn vị và cá nhân; đơn
| giản hoá | các | thao | tác khởi | tạo, | điều chỉnh, | xem | lịch. |
| -------- | --- | ---- | -------- | ---- | ----------- | --- | ----- |
tác:
| Yêu    | cầu phi | chức | năng  | chung | cho     | module | Lịch công |
| ------ | ------- | ---- | ----- | ----- | ------- | ------ | --------- |
| • Thời | gian    | tải  | trang | không | quá 2s. |        |           |
• Các thao tác đơn giản có thời gian phản hồi không vượt quá 500ms, riêng
thao tác thực hiện đồng loạt trên lượng lớn dữ liệu có thời gian phản hồi
| không | vượt | quá | 3s. |     |     |     |     |
| ----- | ---- | --- | --- | --- | --- | --- | --- |
• Giao diện đòi hỏi tính đơn giản nhưng vẫn đáp ứng tính năng cần thiết
| và      | thân | thiện  | với người | sử   | dụng. |     |     |
| ------- | ---- | ------ | --------- | ---- | ----- | --- | --- |
| 3.1.1   | Lịch | công   | tác       | tuần |       |     |     |
| 3.1.1.1 | Cấp  | trường |           |      |       |     |     |
Quy trình quản lý lịch công tác tuần phạm vi bắt đầu từ thao tác
trường
đăng ký lịch ở các đơn vị. Lịch đăng ký cần được hệ thống kiểm tra tính hợp
lệ và chuyển đến Văn phòng Ban Giám hiệu để thực hiện các thao tác bao
| gồm Điều | chỉnh,   |      | Tổng hợp | và Công | bố  | lịch đến | toàn trường. |
| -------- | -------- | ---- | -------- | ------- | --- | -------- | ------------ |
| Yêu      | cầu chức | năng |          |         |     |          |              |
• Chuyên viên đơn vị đăng ký lịch cấp trường, xem phiếu đăng ký theo
| từng | năm. |     |     |     |     |     |     |
| ---- | ---- | --- | --- | --- | --- | --- | --- |
• Khi đăng ký hoặc gửi đi, lịch cần được kiểm tra các thông tin để đảm
bảo tính đúng đắn (về mặt thời gian, địa điểm, nội dung, người tham dự,
v.v.).
| • Chuyên |     | viên | Văn phòng | Ban | Giám | hiệu | có thể: |
| -------- | --- | ---- | --------- | --- | ---- | ---- | ------- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang23/148

Trường Đại học Bách Khoa - ĐHQG-HCM
Khoa Khoa học và Kỹ thuật Máy Tính
– Phân loại lịch theo tuần hay trạng thái, tiếp nhận nhanh toàn bộ lịch
đã gửi hoặc tiếp nhận theo từng phiếu đăng ký.
– Thực hiện các thao tác điều chỉnh, phát hành, từ chối hoặc chuyển
thành lịch đơn vị ngay trên các lịch đã tiếp nhận.
• Lịch đã phát hành sẽ được hiển thị theo các phân cấp: Trường, Đơn vị,
Cá nhân. Bảo mật thông tin lịch bằng cách giới hạn hiển thị, chỉ cho
phép người dùng truy xuất đến các lịch liên quan.
• Cho phép xuất lịch trường nhằm phục vụ cho các quy trình thủ công
hoặc lưu trữ cục bộ.
• Cho phép liên kết lịch cá nhân với Google Calendar.
• Thao tác trên lịch được lưu lịch sử để phục vụ truy xuất.
3.1.1.2 Cấp đơn vị
Trong thời gian cho phép tạo lịch, lịch công tác phạm vi đơn vị sẽ do các
chuyên viên chủ động khởi tạo cho đơn vị của mình, và được tự động phát
hành đến toàn đơn vị sau khi khởi tạo. Lịch sau khởi tạo cũng cần được hiển
thị theo các phân cấp (Đơn vị và Cá nhân).
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang24/148

| Trường | Đại       | học Bách  | Khoa - ĐHQG-HCM |               |
| ------ | --------- | --------- | --------------- | ------------- |
| Khoa   | Khoa      | học và Kỹ | thuật Máy       | Tính          |
|        | Hình 3.1: | Usecase   | Quản lý lịch    | công tác tuần |
Hình 3.2: Đặc tả Usecase Quản lý phiếu đăng ký lịch công tác trường
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang25/148

| Trường | Đại học  | Bách Khoa   | - ĐHQG-HCM |
| ------ | -------- | ----------- | ---------- |
| Khoa   | Khoa học | và Kỹ thuật | Máy Tính   |
Hình 3.3: Đặc tả Usecase Quản lý lịch đăng ký công tác trường
Hình 3.4: Đặc tả Usecase Bổ sung thành phần tham dự lịch trường
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang26/148

| Trường | Đại  | học Bách    | Khoa - ĐHQG-HCM |                |
| ------ | ---- | ----------- | --------------- | -------------- |
| Khoa   | Khoa | học và Kỹ   | thuật Máy       | Tính           |
|        | Hình | 3.5: Đặc tả | Usecase Quản    | lý lịch đơn vị |
Hình 3.6: Đặc tả Usecase Tiếp nhận đăng ký lịch công tác trường
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang27/148

Trường Đại học Bách Khoa - ĐHQG-HCM
Khoa Khoa học và Kỹ thuật Máy Tính
Hình 3.7: Đặc tả Usecase Tổng hợp lịch công tác trường
Hình 3.8: Đặc tả Usecase Công bố lịch công tác trường
Hình 3.9: Đặc tả Usecase Xem lịch công tác
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang28/148

|       | Trường |       | Đại  | học Bách   | Khoa       | - ĐHQG-HCM |            |          |
| ----- | ------ | ----- | ---- | ---------- | ---------- | ---------- | ---------- | -------- |
|       | Khoa   |       | Khoa | học và     | Kỹ thuật   | Máy        | Tính       |          |
|       |        |       | Hình | 3.10: Đặc  | tả Usecase | Xuất       | lịch công  | tác      |
|       | Hình   | 3.11: | Đặc  | tả Usecase | Liên       | kết lịch   | với Google | Calendar |
| 3.1.2 | Đăng   |       | ký   | đặt lịch   | với        | Ban        | Giám hiệu  |          |
Giảng viên, Người lao động toàn trường có thể đăng ký gặp gỡ Ban Giám
hiệu với tính năng Đăng ký đặt lịch Ban Giám hiệu trong module Lịch công
tác.
| Yêu | cầu chức |     | năng |     |     |     |     |     |
| --- | -------- | --- | ---- | --- | --- | --- | --- | --- |
• Người dùng tạo và gửi được đăng ký lịch hẹn nhanh chóng (Tối thiểu chỉ
|     | cần nhập | nội | dung | cuộc hẹn). |     |     |     |     |
| --- | -------- | --- | ---- | ---------- | --- | --- | --- | --- |
• Các thao tác điều chỉnh thời gian, địa điểm hoặc người tham dự của lịch
cho phù hợp do Ban Giám hiệu hoặc cá nhân có quyền phù hợp thực hiện.
(Thao tác tiếp nhận và xử lý đăng ký có thể được đơn giản hoá trong quy
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang29/148

|     | Trường | Đại  | học | Bách  | Khoa  | - ĐHQG-HCM |      |     |
| --- | ------ | ---- | --- | ----- | ----- | ---------- | ---- | --- |
|     | Khoa   | Khoa | học | và Kỹ | thuật | Máy        | Tính |     |
trình bằng cách cho phép Chuyên viên Văn phòng Ban Giám hiệu thay
| mặt | Ban | Giám | hiệu | thực hiện.) |     |     |     |     |
| --- | --- | ---- | ---- | ----------- | --- | --- | --- | --- |
• Người đăng ký có thể xác nhận tham dự lịch sau điều chỉnh để hoàn thành
đặt lịch, hoặc từ chối hay gửi lại đăng ký nếu lịch điều chỉnh không phù
hợp.
• Lịch sau khi hoàn thành cần được tích hợp vào lịch công tác cá nhân của
người đăng ký và Ban Giám hiệu. Lịch được tích hợp có thể được truy
| cập                                   | dễ dàng | thông | qua     | liên | kết từ | trang    | đăng ký.     |             |
| ------------------------------------- | ------- | ----- | ------- | ---- | ------ | -------- | ------------ | ----------- |
|                                       | Hình    | 3.12: | Usecase | Đăng | ký     | đặt lịch | với Ban Giám | hiệu        |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |         |       |         |      |        |          |              | Trang30/148 |

| Trường     | Đại học  | Bách    | Khoa     | - ĐHQG-HCM  |          |      |
| ---------- | -------- | ------- | -------- | ----------- | -------- | ---- |
| Khoa       | Khoa học | và Kỹ   | thuật    | Máy Tính    |          |      |
| Hình 3.13: | Đặc tả   | Usecase | Tạo đăng | ký lịch hẹn | Ban Giám | hiệu |
Hình 3.14: Đặc tả Usecase Xác nhận tham dự lịch hẹn Ban Giám hiệu
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     | Trang31/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | ----------- |

|     | Trường |       | Đại | học Bách   | Khoa     | -     | ĐHQG-HCM     |           |
| --- | ------ | ----- | --- | ---------- | -------- | ----- | ------------ | --------- |
|     | Khoa   | Khoa  |     | học và     | Kỹ thuật |       | Máy Tính     |           |
|     | Hình   | 3.15: | Đặc | tả Usecase | Điều     | chỉnh | lịch hẹn Ban | Giám hiệu |
Hình 3.16: Đặc tả Usecase Chấp thuận đăng ký lịch hẹn Ban Giám hiệu
| 3.2 | Xử  | lý  | văn | bản |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
Xử lý văn bản là phân hệ đang hoạt động với các tính năng xử lý văn bản
đến, văn bản đi, trình ký, v.v. Một số tính năng khác được dự kiến phát triển
dưới đây với nhằm hỗ trợ thêm nhiều quy trình liên quan đến các văn bản
hành chính.
bản:
| Yêu | cầu phi | chức | năng | cho | module | Xử  | lý văn |     |
| --- | ------- | ---- | ---- | --- | ------ | --- | ------ | --- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang32/148

|        | Trường |      | Đại   | học   | Bách  | Khoa      | - ĐHQG-HCM |      |     |     |
| ------ | ------ | ---- | ----- | ----- | ----- | --------- | ---------- | ---- | --- | --- |
|        | Khoa   |      | Khoa  | học   | và Kỹ | thuật     | Máy        | Tính |     |     |
| • Thời | gian   | tải  | trang | không | quá   | 5s.       |            |      |     |     |
| • Thời | gian   | phản | hồi   | các   | thao  | tác không | vượt       | quá  | 1s. |     |
• Hiển thị dữ liệu tương đối chi tiết để hạn chế phải thao tác quá nhiều
khi cần xem thông tin, nhưng vẫn đảm bảo được tính logic và tối giản
| trong |      | thiết | kế.  |     |     |          |       |     |           |          |
| ----- | ---- | ----- | ---- | --- | --- | -------- | ----- | --- | --------- | -------- |
| 3.2.1 | Tổng |       | hợp  | góp | ý   | dự thảo, | thông |     | tư, quyết | định,... |
|       | và   | các   | loại | góp | ý   | liên     | quan  |     |           |          |
Tổng hợp góp ý dự thảo, thông tư, quyết định,... và các loại góp ý liên quan
là quy trình cho phép các đơn vị, cá nhân thực hiện nhận xét, đóng góp ý
| kiến, | đề xuất | thay | đổi  | đến các | văn | bản | hành | chính. |     |     |
| ----- | ------- | ---- | ---- | ------- | --- | --- | ---- | ------ | --- | --- |
| Yêu   | cầu     | chức | năng |         |     |     |      |        |     |     |
• Đơn vị khởi tạo được phiếu thu thập ý kiến đóng góp dự thảo, thông tư,
quyết định,... và các loại góp ý liên quan, với đính kèm bao gồm tập tin
| văn | bản | cần | góp | ý và tài | liệu | liên | quan. |     |     |     |
| --- | --- | --- | --- | -------- | ---- | ---- | ----- | --- | --- | --- |
• Các đơn vị liên quan khác thực hiện góp ý trực tiếp trên văn bản, cho
phép các thao tác chỉnh sửa, phản hồi hay xoá góp ý đã được tạo.
• Đơn vị khởi tạo xuất các phiếu góp ý đã hoàn thành để thuận tiện cho
| công | tác | đối | sánh | hoặc | lưu | trữ vật | lý. |     |     |     |
| ---- | --- | --- | ---- | ---- | --- | ------- | --- | --- | --- | --- |
• Khi xuất phiếu góp ý, đơn vị khởi tạo có thể lựa chọn, sắp xếp các ý kiến
| đóng                                  |     | góp cho | phù | hợp. |     |     |     |     |     |             |
| ------------------------------------- | --- | ------- | --- | ---- | --- | --- | --- | --- | --- | ----------- |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |         |     |      |     |     |     |     |     | Trang33/148 |

| Trường | Đại học  | Bách  | Khoa - | ĐHQG-HCM |     |     |
| ------ | -------- | ----- | ------ | -------- | --- | --- |
| Khoa   | Khoa học | và Kỹ | thuật  | Máy Tính |     |     |
Hình 3.17: Usecase Tổng hợp góp ý dự thảo, thông tư, quyết định,... và các
loại góp ý liên quan
| Hình | 3.18: Đặc | tả Usecase | Khởi tạo | phiếu thu | thập góp | ý   |
| ---- | --------- | ---------- | -------- | --------- | -------- | --- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang34/148

| Trường | Đại học   | Bách       | Khoa - ĐHQG-HCM |            |         |
| ------ | --------- | ---------- | --------------- | ---------- | ------- |
| Khoa   | Khoa học  | và Kỹ      | thuật Máy       | Tính       |         |
| Hình   | 3.19: Đặc | tả Usecase | Thực            | hiện góp ý | dự thảo |
| Hình   | 3.20: Đặc | tả Usecase | Phản            | hồi góp ý  | dự thảo |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang35/148

|       | Trường |       | Đại học | Bách       | Khoa  | -   | ĐHQG-HCM    |          |
| ----- | ------ | ----- | ------- | ---------- | ----- | --- | ----------- | -------- |
|       | Khoa   | Khoa  | học     | và Kỹ      | thuật | Máy | Tính        |          |
|       | Hình   | 3.21: | Đặc     | tả Usecase | Xuất  | báo | cáo dự thảo | thông tư |
| 3.2.2 | Tờ     | trình | nội     | bộ         |       |     |             |          |
Tờ trình nội bộ là một tính năng được sử dụng để trình bày các yêu cầu, đề
xuất cần phê chuẩn, chỉ đạo lên các cấp lãnh đạo trong phạm vi nhà trường.
| Yêu | cầu chức | năng |     |     |     |     |     |     |
| --- | -------- | ---- | --- | --- | --- | --- | --- | --- |
1. Người dùng tạo tờ trình, soạn thảo, định dạng được các mục nội dung,
| và  | có thể | đính | kèm | tài liệu | liên quan. |     |     |     |
| --- | ------ | ---- | --- | -------- | ---------- | --- | --- | --- |
2. Nội dung tờ trình có thể được lưu trữ ở trạng thái Nháp trước khi được
gửi đi. Thông tin trên tờ trình được lưu tự động để hạn chế tối đa tranh
| chấp | hay | mất | mát dữ | liệu. |     |     |     |     |
| ---- | --- | --- | ------ | ----- | --- | --- | --- | --- |
3. Các quy trình phê duyệt theo từng loại tờ trình được Phòng Hành chính
| thực | hiện | cấu | hình. |     |     |     |     |     |
| ---- | ---- | --- | ----- | --- | --- | --- | --- | --- |
4. Sau khi hoàn thành phê duyệt, người yêu cầu có thể xuất tờ trình.
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang36/148

| Trường |      | Đại học | Bách   | Khoa    | - ĐHQG-HCM |      |               |
| ------ | ---- | ------- | ------ | ------- | ---------- | ---- | ------------- |
| Khoa   | Khoa | học     | và Kỹ  | thuật   | Máy        | Tính |               |
|        |      | Hình    | 3.22:  | Usecase | Tờ trình   | nội  | bộ            |
|        | Hình | 3.23:   | Đặc tả | Usecase | Cấu        | hình | loại tờ trình |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang37/148

| Trường     | Đại học   | Bách       | Khoa  | - ĐHQG-HCM |        |            |          |
| ---------- | --------- | ---------- | ----- | ---------- | ------ | ---------- | -------- |
| Khoa       | Khoa học  | và Kỹ      | thuật | Máy        | Tính   |            |          |
| Hình       | 3.24: Đặc | tả Usecase | Xuất  | báo        | cáo dự | thảo thông | tư       |
| Hình 3.25: | Đặc tả    | Usecase    | Cấu   | hình quy   | trình  | duyệt      | tờ trình |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang38/148

| Trường | Đại   | học   | Bách       | Khoa       | - ĐHQG-HCM |       |       |       |
| ------ | ----- | ----- | ---------- | ---------- | ---------- | ----- | ----- | ----- |
| Khoa   | Khoa  | học   | và Kỹ      | thuật      | Máy        | Tính  |       |       |
| Hình   | 3.26: | Đặc   | tả Usecase |            | Điều chỉnh | quy   | trình | duyệt |
|        | Hình  | 3.27: | Đặc        | tả Usecase | Góp        | ý phê | duyệt |       |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang39/148

|       | Trường | Đại   | học | Bách       | Khoa     | - ĐHQG-HCM |       |         |       |     |
| ----- | ------ | ----- | --- | ---------- | -------- | ---------- | ----- | ------- | ----- | --- |
|       | Khoa   | Khoa  | học | và         | Kỹ thuật | Máy        | Tính  |         |       |     |
|       | Hình   | 3.28: | Đặc | tả Usecase |          | Xuất tờ    | trình | đã hoàn | thành |     |
| 3.2.3 | Phân   | phối  |     | văn        | bản      |            |       |         |       |     |
Phân phối văn bản là tính năng quản lý quá trình phân phối văn bản hành
| chính | cấp    |     | hoặc |     | đến | các đơn | vị  | liên quan. |         |      |
| ----- | ------ | --- | ---- | --- | --- | ------- | --- | ---------- | ------- | ---- |
|       | Trường |     |      | Đơn | vị  |         |     |            | Yêu cầu | chức |
năng
• Trong quy trình xử lý văn bản đi cấp trường, chuyên viên cần thực hiện
| được | các thao |     | tác: |     |     |     |     |     |     |     |
| ---- | -------- | --- | ---- | --- | --- | --- | --- | --- | --- | --- |
– Lựa chọn đơn vị để phân phối văn bản ở bước Nháp. Sau khi văn bản
hoàn thành xử lý, phân phối được gửi tự động đến các đơn vị theo
|     | cấu hình | đã  | chọn. |     |     |     |     |     |     |     |
| --- | -------- | --- | ----- | --- | --- | --- | --- | --- | --- | --- |
– Bổ sung thêm đơn vị được phân phối sau khi quy trình xử lý hoàn
thành.
|     | Hoàn | tác phân | phối, | phân | phối | lại hoặc | xoá | phân | phối đã gửi. |     |
| --- | ---- | -------- | ----- | ---- | ---- | -------- | --- | ---- | ------------ | --- |
–
| • Trong                               | phân | phối | văn | bản | cấp đơn | vị, chuyên |     | viên thực | hiện:       |     |
| ------------------------------------- | ---- | ---- | --- | --- | ------- | ---------- | --- | --------- | ----------- | --- |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |      |      |     |     |         |            |     |           | Trang40/148 |     |

| Trường | Đại  | học | Bách  | Khoa  | -   | ĐHQG-HCM |     |
| ------ | ---- | --- | ----- | ----- | --- | -------- | --- |
| Khoa   | Khoa | học | và Kỹ | thuật | Máy | Tính     |     |
– Tạo mới yêu cầu phân phối với đính kèm là văn bản cần phân phối,
| cấu hình | đơn | vị  | nhận phân | phối. |     |     |     |
| -------- | --- | --- | --------- | ----- | --- | --- | --- |
Bổ sung, hoàn tác phân phối, phân phối lại hoặc xoá phân phối đã
–
gửi.
|      | Hình  |     | 3.29: Usecase |     | Phân | phối văn | bản            |
| ---- | ----- | --- | ------------- | --- | ---- | -------- | -------------- |
| Hình | 3.30: | Đặc | tả Usecase    | Cấu | hình | danh     | sách phân phối |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang41/148

| Trường |       | Đại học | Bách       | Khoa    | - ĐHQG-HCM |               |        |
| ------ | ----- | ------- | ---------- | ------- | ---------- | ------------- | ------ |
| Khoa   | Khoa  | học     | và Kỹ      | thuật   | Máy        | Tính          |        |
| Hình   | 3.31: | Đặc     | tả Usecase | Tạo     | văn        | bản phân phối | nội bộ |
|        | Hình  | 3.32:   | Đặc tả     | Usecase | Gửi        | phân phối nội | bộ     |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang42/148

|     | Trường | Đại  | học   | Bách | Khoa       | - ĐHQG-HCM |           |      |     |
| --- | ------ | ---- | ----- | ---- | ---------- | ---------- | --------- | ---- | --- |
|     | Khoa   | Khoa | học   | và   | Kỹ thuật   | Máy        | Tính      |      |     |
|     |        | Hình | 3.33: | Đặc  | tả Usecase | Tiếp       | nhận phân | phối |     |
| 3.3 | Báo    | cáo  |       |      |            |            |           |      |     |
Báo cáo là phân hệ hỗ trợ người dùng trong quá trình soạn thảo, tổng hợp,
thống kê dữ liệu kết quả của các hoạt động; thay thế quá trình thủ công bằng
phần mềm số hoá nhằm tối ưu hiệu suất và chất lượng của công việc.
Các báo cáo được thực hiện theo quy trình bắt đầu với yêu cầu khởi tạo và
cấu hình khung báo cáo ở Văn phòng Ban Giám hiệu. Dựa trên khung báo
cáo, các đơn vị tiến hành nhập và điều chỉnh nội dung cho các phần trong
| báo cáo. | Báo    | cáo sau  | đó  | được |        |      | của Văn phòng | Ban Giám | hiệu |
| -------- | ------ | -------- | --- | ---- | ------ | ---- | ------------- | -------- | ---- |
|          |        |          |     |      | Chuyên | viên |               |          |      |
| tổng     | hợp và | công bố. |     |      |        |      |               |          |      |
Các báo cáo bao gồm nhiều loại, mỗi loại có cấu hình khung báo cáo riêng
| phù hợp                               | với | từng nhu | cầu      | chuyên | biệt:  |     |     |             |     |
| ------------------------------------- | --- | -------- | -------- | ------ | ------ | --- | --- | ----------- | --- |
| • Báo                                 | cáo | Hội đồng | Trường   |        |        |     |     |             |     |
| • Báo                                 | cáo | Hội nghị | VC/NLĐ   |        | Trường |     |     |             |     |
| • Báo                                 | cáo | tổng     | kết hoạt | động   | năm    |     |     |             |     |
| • Báo                                 | cáo | kế hoạch | hoạt     | động   | năm    |     |     |             |     |
| • Báo                                 | cáo | 6 tháng  | đầu      | năm    |        |     |     |             |     |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |          |          |        |        |     |     | Trang43/148 |     |

Trường Đại học Bách Khoa - ĐHQG-HCM
Khoa Khoa học và Kỹ thuật Máy Tính
• Báo cáo giao ban
Yêu cầu phi chức năng chung cho module Báo cáo:
• Thời gian tải trang không vượt quá 3s.
• Các thao tác đơn giản có thời gian phản hồi không vượt quá 500ms, riêng
thao tác thực hiện đồng loạt trên lượng lớn dữ liệu có thời gian phản hồi
không vượt quá 3s.
• Báo cáo phải có khả năng mở rộng, tích hợp và giao tiếp được với các
module khác, điển hình như Công việc.
Yêu cầu chức năng
• Chuyên viên Văn phòng Ban Giám hiệu thực hiện được các thao tác:
– Cấu hình mẫu khung báo cáo.
– Khởi tạo, cấu hình khung báo cáo mới.
– Chuyển tiếp trạng thái của báo cáo.
– Tổng hợp, điều chỉnh nội dung của báo cáo (khi cần thiết).
– Hoàn thành và xuất báo cáo.
• Đơn vị có thể thực hiện các thao tác:
– Chuyên viên soạn thảo nội dung báo cáo ở giai đoạn thực hiện.
– Trưởng đơn vị điều chỉnh, phê duyệt các nội dung trước giai đoạn
tổng hợp.
– Xem các báo cáo đã hoàn thành.
• Lịch sử chỉnh sửa báo cáo được lưu lại để thuận lợi cho quá trình truy
xuất.
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang44/148

| Trường | Đại  | học   | Bách          | Khoa       | -    | ĐHQG-HCM |         |
| ------ | ---- | ----- | ------------- | ---------- | ---- | -------- | ------- |
| Khoa   | Khoa | học   | và Kỹ         | thuật      |      | Máy Tính |         |
|        |      | Hình  | 3.34: Usecase |            | Quản | lý Báo   | cáo     |
|        | Hình | 3.35: | Đặc           | tả Usecase |      | Khởi tạo | báo cáo |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang45/148

| Trường | Đại học  | Bách   | Khoa - ĐHQG-HCM |              |     |
| ------ | -------- | ------ | --------------- | ------------ | --- |
| Khoa   | Khoa học | và Kỹ  | thuật Máy       | Tính         |     |
| Hình   | 3.36:    | Đặc tả | Usecase Cấu     | hình mẫu báo | cáo |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang46/148

| Trường | Đại        | học   | Bách       | Khoa    | - ĐHQG-HCM |       |     |     |
| ------ | ---------- | ----- | ---------- | ------- | ---------- | ----- | --- | --- |
| Khoa   | Khoa       | học   | và Kỹ      | thuật   | Máy        | Tính  |     |     |
|        | Hình 3.37: | Đặc   | tả Usecase |         | Cấu hình   | khung | báo | cáo |
|        | Hình       | 3.38: | Đặc tả     | Usecase | Thực       | hiện  | báo | cáo |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang47/148

|     | Trường | Đại  | học   | Bách   | Khoa    | - ĐHQG-HCM |         |           |     |
| --- | ------ | ---- | ----- | ------ | ------- | ---------- | ------- | --------- | --- |
|     | Khoa   | Khoa | học   | và Kỹ  | thuật   | Máy        | Tính    |           |     |
|     |        | Hình | 3.39: | Đặc tả | Usecase | Xem        | lịch sử | chỉnh sửa |     |
|     |        | Hình | 3.40: | Đặc tả | Usecase | Xem        | và xuất | báo cáo   |     |
| 3.4 | Công   | việc |       |        |         |            |         |           |     |
Phân hệ hỗ trợ người dùng thực hiện các thao tác chỉ định, bàn
|     | Công | việc |     |     |     |     |     |     |     |
| --- | ---- | ---- | --- | --- | --- | --- | --- | --- | --- |
giao công việc đến đơn vị, cá nhân; quản lý, theo dõi công việc cá nhân. Công
|                                       | còn được | liên kết | với | các module |     |       | bản, |           | tác,        |
| ------------------------------------- | -------- | -------- | --- | ---------- | --- | ----- | ---- | --------- | ----------- |
| việc                                  |          |          |     |            |     | Xử lý | văn  | Lịch công | Báo         |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |          |          |     |            |     |       |      |           | Trang48/148 |

|     | Trường |     | Đại học  | Bách  | Khoa  | - ĐHQG-HCM |      |
| --- | ------ | --- | -------- | ----- | ----- | ---------- | ---- |
|     | Khoa   |     | Khoa học | và Kỹ | thuật | Máy        | Tính |
cáo, v.v. để thuận tiện hơn cho người sử dụng trong quá trình theo dõi công
| việc giữa | các | phân | hệ khác | nhau. |     |     |     |
| --------- | --- | ---- | ------- | ----- | --- | --- | --- |
năng:
| Yêu | cầu chức |     |     |     |     |     |     |
| --- | -------- | --- | --- | --- | --- | --- | --- |
• Người dùng xem được công việc liên quan, sử dụng các bộ lọc trạng thái,
| hạn | hoàn | thành, | nguồn | công | việc, | v.v. |     |
| --- | ---- | ------ | ----- | ---- | ----- | ---- | --- |
• Lãnh đạo đơn vị tạo mới công việc cho nội bộ đơn vị hoặc liên phòng
(phối hợp thực hiện bởi nhiều phòng ban), điều phối nhân sự, đơn vị thực
| hiện | công | việc. |     |     |     |     |     |
| ---- | ---- | ----- | --- | --- | --- | --- | --- |
• Các đơn vị, cá nhân liên quan được phép giám sát công việc, cập nhật
tiến độ, thông tin, đính kèm v.v. , trao đổi với nhau về công việc trên hệ
thống.
• Gửi thông báo cho cá nhân khi có cập nhật về công việc liên quan hoặc
| công | việc | mới. |      |               |     |      |              |
| ---- | ---- | ---- | ---- | ------------- | --- | ---- | ------------ |
|      |      |      | Hình | 3.41: Usecase |     | Quản | lý Công việc |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang49/148

| Trường | Đại  | học Bách     | Khoa    | - ĐHQG-HCM |                |
| ------ | ---- | ------------ | ------- | ---------- | -------------- |
| Khoa   | Khoa | học và Kỹ    | thuật   | Máy        | Tính           |
|        | Hình | 3.42: Đặc tả | Usecase | Khởi       | tạo công việc  |
|        | Hình | 3.43: Đặc tả | Usecase | Cập        | nhật công việc |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang50/148

| Trường | Đại  | học   | Bách   | Khoa       | - ĐHQG-HCM |          |           |
| ------ | ---- | ----- | ------ | ---------- | ---------- | -------- | --------- |
| Khoa   | Khoa | học   | và Kỹ  | thuật      | Máy        | Tính     |           |
|        | Hình | 3.44: | Đặc    | tả Usecase |            | Xoá công | việc      |
|        | Hình | 3.45: | Đặc tả | Usecase    | Triển      | khai     | công việc |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang51/148

|     | Trường | Đại   | học   | Bách       | Khoa    | - ĐHQG-HCM |               |      |
| --- | ------ | ----- | ----- | ---------- | ------- | ---------- | ------------- | ---- |
|     | Khoa   | Khoa  | học   | và Kỹ      | thuật   | Máy        | Tính          |      |
|     | Hình   | 3.46: | Đặc   | tả Usecase |         | Cập nhật   | tiến độ công  | việc |
|     |        | Hình  | 3.47: | Đặc tả     | Usecase | Trao       | đổi công việc |      |
năng:
| Yêu    | cầu phi | chức      |     |           |     |     |     |     |
| ------ | ------- | --------- | --- | --------- | --- | --- | --- | --- |
| • Thời | gian    | tải trang |     | không quá | 1s. |     |     |     |
• Các thao tác đơn giản có thời gian phản hồi không vượt quá 500ms.
• Giao diện hiển thị chi tiết tối đa, hạn chế thao tác chuyển đổi giữa các
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     | Trang52/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | ----------- |

|     | Trường | Đại  | học Bách  | Khoa  | - ĐHQG-HCM |      |     |     |
| --- | ------ | ---- | --------- | ----- | ---------- | ---- | --- | --- |
|     | Khoa   | Khoa | học và Kỹ | thuật | Máy        | Tính |     |     |
giao diện, nhằm tiết kiệm thời gian duyệt trang hay xem cùng lúc nhiều
| công | việc. |     |          |      |     |       |        |       |
| ---- | ----- | --- | -------- | ---- | --- | ----- | ------ | ----- |
| 3.5  | Yêu   | cầu | phi chức | năng |     | chung | cho hệ | thống |
Ngoài các yêu cầu cho riêng từng module, hệ thống cần đáp ứng một số yêu
| cầu phi | chức | năng khác: |           |          |     |          |     |     |
| ------- | ---- | ---------- | --------- | -------- | --- | -------- | --- | --- |
| • Đảm   | bảo  | thời gian  | hoạt động | (Uptime) |     | đạt 99%. |     |     |
• Tốc độ xử lý ổn định cho số lượng người dùng lớn (tối đa 1000 truy cập
| cùng | lúc). |     |     |     |     |     |     |     |
| ---- | ----- | --- | --- | --- | --- | --- | --- | --- |
• Dữ liệu nhất quán giữa các module, hạn chế tối đa tranh chấp dữ liệu.
• Người dùng được xác thực và phân quyền, dữ liệu cá nhân được mã hoá
| khi | truyền | tải. |     |     |     |     |     |     |
| --- | ------ | ---- | --- | --- | --- | --- | --- | --- |
• Giao diện thân thiện với người dùng, tương tính với nhiều trình duyệt.
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     | Trang53/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | ----------- |

| Chương | 4   |     |       |
| ------ | --- | --- | ----- |
| THIẾT  | KẾ  | HỆ  | THỐNG |
Chương này sẽ thể hiện thiết kế của hệ thống bao gồm luồng thực thi của
chương trình và thiết kế cơ sở dữ liệu dựa trên các yêu cầu nghiệp vụ đã phân
tích.
54

|     | Trường |     | Đại  | học | Bách Khoa   | - ĐHQG-HCM |      |     |
| --- | ------ | --- | ---- | --- | ----------- | ---------- | ---- | --- |
|     | Khoa   |     | Khoa | học | và Kỹ thuật | Máy        | Tính |     |
| 4.1 | Tổng   |     | quan |     | kiến trúc   | thiết      |      | kế  |
Hệ thống được xây dựng theo mô hình MVC, bao gồm các module chức năng
tách biệt nhau. Ở view, các state được quản lý tối ưu bằng Zustand store.
Quản lý phân quyền ở người dùng được thiết kế và kiểm soát như sau:
• Lưu thông tin người dùng, chức vụ và quyền ở Redis. Người dùng truy
cập được cấp session id cho mỗi phiên hoạt động để sử dụng các quyền
| và  | tương | tác | với | hệ thống. |     |     |     |     |
| --- | ----- | --- | --- | --------- | --- | --- | --- | --- |
• Controller (Backend): Dựa vào quyền để kiểm soát các thao tác trên dữ
liệu.
• View (Frontend): Dựa vào quyền để quản lý khả năng truy cập vào các
| giao  | diện, | tính | năng  | của  | hệ thống. |     |     |     |
| ----- | ----- | ---- | ----- | ---- | --------- | --- | --- | --- |
| 4.2   | Thiết |      | kế    | chức | năng      |     |     |     |
| 4.2.1 | Phân  |      | quyền |      |           |     |     |     |
Quyền của mỗi cá nhân khi sử dụng hệ thống quyết định khả năng truy cập
| của cá | nhân | đó. |     |     |     |     |     |     |
| ------ | ---- | --- | --- | --- | --- | --- | --- | --- |
Người quản trị (Admin) sẽ tiến hành phân quyền cho người dùng trước khi
bắt đầu sử dụng hệ thống, và điều chỉnh, bổ sung các quyền khi hệ thống đã
| đi vào | hoạt | động. |     |     |     |     |     |     |
| ------ | ---- | ----- | --- | --- | --- | --- | --- | --- |
Bên cạnh đó, sau khi Admin đã phân cho chuyên viên quản lý cơ sở, chuyên
viên ấy tiếp tục phân các quyền giới hạn cho các chuyên viên cấp thấp hơn
| nhằm | xử lý, | quản | lý  | công việc | tốt hơn. |     |     |     |
| ---- | ------ | ---- | --- | --------- | -------- | --- | --- | --- |
Các thao tác truy cập, thay đổi đến dữ liệu trên hệ thống sẽ được kiểm tra
| quyền | trước | khi | thực | hiện để | đảm bảo | an toàn | thông | tin. |
| ----- | ----- | --- | ---- | ------- | ------- | ------- | ----- | ---- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang55/148

|                                       | Trường    | Đại học       | Bách    | Khoa - ĐHQG-HCM |                  |             |
| ------------------------------------- | --------- | ------------- | ------- | --------------- | ---------------- | ----------- |
|                                       | Khoa      | Khoa học      | và Kỹ   | thuật Máy       | Tính             |             |
| 4.2.2                                 | Lịch      | công tác      |         |                 |                  |             |
| 4.2.2.1                               | Lịch      | công tác      | tuần    |                 |                  |             |
|                                       | Hình      | 4.1: Activity | Diagram | Quản            | lý lịch công tác | tuần        |
| Một số                                | tính năng | khác được     | thiết   | kế bao gồm:     |                  |             |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |           |               |         |                 |                  | Trang56/148 |

|     | Trường | Đại  | học | Bách  | Khoa  | - ĐHQG-HCM |      |
| --- | ------ | ---- | --- | ----- | ----- | ---------- | ---- |
|     | Khoa   | Khoa | học | và Kỹ | thuật | Máy        | Tính |
• Tự động kiểm tra thông tin lịch trước khi gửi phiếu đăng ký.
• Tự động kiểm tra lịch trùng cho các thành phần tham dự trong lịch.
• Cho phép hoàn tác phiếu đăng ký đã gửi nếu chưa được tiếp nhận.
| • Chuyển | nhanh |     | chóng | lịch trường |     | thành lịch | đơn vị. |
| -------- | ----- | --- | ----- | ----------- | --- | ---------- | ------- |
| 4.2.2.2  | Đăng  | ký  | lịch  | hẹn với     | Ban | Giám       | hiệu    |
Hình 4.2: Activity Diagram Đăng ký lịch hẹn với Ban Giám hiệu
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang57/148

|       | Trường | Đại học  | Bách  | Khoa - ĐHQG-HCM |      |
| ----- | ------ | -------- | ----- | --------------- | ---- |
|       | Khoa   | Khoa học | và Kỹ | thuật Máy       | Tính |
| 4.2.3 | Xử     | lý văn   | bản   |                 |      |
4.2.3.1 Tổng hợp góp ý dự thảo, thông tư, quyết định,... và các
|     | loại | góp ý liên | quan |     |     |
| --- | ---- | ---------- | ---- | --- | --- |
Hình 4.3: Activity Diagram quy trình Tổng hợp góp ý các văn bản hành chính
| và các | loại góp | ý liên quan |     |     |     |
| ------ | -------- | ----------- | --- | --- | --- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang58/148

|         | Trường   | Đại học       | Bách    | Khoa - ĐHQG-HCM |          |        |
| ------- | -------- | ------------- | ------- | --------------- | -------- | ------ |
|         | Khoa     | Khoa học      | và Kỹ   | thuật Máy       | Tính     |        |
| 4.2.3.2 | Tờ trình | nội           | bộ      |                 |          |        |
|         | Hình     | 4.4: Activity | Diagram | quy trình       | Tờ trình | nội bộ |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang59/148

|         | Trường | Đại học       | Bách    | Khoa - ĐHQG-HCM |           |         |
| ------- | ------ | ------------- | ------- | --------------- | --------- | ------- |
|         | Khoa   | Khoa học      | và Kỹ   | thuật Máy       | Tính      |         |
| 4.2.3.3 | Phân   | phối văn      | bản     |                 |           |         |
|         | Hình   | 4.5: Activity | Diagram | quy trình       | Phân phối | văn bản |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang60/148

| Trường    | Đại học       | Bách    | Khoa - ĐHQG-HCM |             |     |
| --------- | ------------- | ------- | --------------- | ----------- | --- |
| Khoa      | Khoa học      | và Kỹ   | thuật Máy       | Tính        |     |
| 4.2.4 Báo | cáo           |         |                 |             |     |
| Hình      | 4.6: Activity | Diagram | quy trình       | Quản lý Báo | cáo |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang61/148

| Trường     | Đại học       | Bách Khoa | - ĐHQG-HCM |              |      |
| ---------- | ------------- | --------- | ---------- | ------------ | ---- |
| Khoa       | Khoa học      | và Kỹ     | thuật Máy  | Tính         |      |
| 4.2.5 Công | việc          |           |            |              |      |
| Hình       | 4.7: Activity | Diagram   | quy trình  | Quản lý Công | việc |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang62/148

|       | Trường |      | Đại         | học  | Bách    | Khoa | -     | ĐHQG-HCM   |            |             |
| ----- | ------ | ---- | ----------- | ---- | ------- | ---- | ----- | ---------- | ---------- | ----------- |
|       | Khoa   |      | Khoa        | học  | và      | Kỹ   | thuật | Máy Tính   |            |             |
| 4.3   | Thiết  |      | kế          | cơ   | sở      | dữ   | liệu  |            |            |             |
| 4.3.1 | Bảng   |      | dữ          | liệu | người   |      | dùng  | hệ         | thống và   | quyền       |
|       |        | Hình | 4.8:        | Các  | bảng    | dữ   | liệu  | người dùng | và quyền   |             |
| Tên   | trường |      | Kiểu        |      | dữ liệu |      | Chức  | năng       |            |             |
| shcc  |        |      | varchar(10) |      |         |      | Số    | hiệu công  | chức, khóa | chính trong |
bảng
| email                                 |     |     | varchar(255) |      |     |       | Email | cán           | bộ  |             |
| ------------------------------------- | --- | --- | ------------ | ---- | --- | ----- | ----- | ------------- | --- | ----------- |
| full_name                             |     |     | varchar(255) |      |     |       | Tên   | đầy đủ        |     |             |
| short_name                            |     |     | varchar(255) |      |     |       | Tên   | viết tắt      |     |             |
|                                       |     |     | Bảng         | 4.1: | Chú | thích | bảng  | schedule_user |     |             |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |              |      |     |       |       |               |     | Trang63/148 |

|            | Trường |      | Đại          | học | Bách  | Khoa  | - ĐHQG-HCM |           |                     |     |
| ---------- | ------ | ---- | ------------ | --- | ----- | ----- | ---------- | --------- | ------------------- | --- |
|            | Khoa   | Khoa |              | học | và Kỹ | thuật | Máy        | Tính      |                     |     |
| Tên        | trường |      | Kiểu         | dữ  | liệu  |       | Chức       | năng      |                     |     |
| shcc       |        |      | varchar(10)  |     |       |       | Khóa       | ngoại tới | bảng schedule_user  |     |
| role_key   |        |      | varchar(100) |     |       |       | Khóa       | ngoại tới | schedule_role       |     |
| ma_don_vi  |        |      | varchar(10)  |     |       |       | Khóa       | ngoại tới | schedule_don_vi     |     |
| ma_chuc_vu |        |      | varchar(10)  |     |       |       | Khóa       | ngoại tới | trong schedule_chuc |     |
_vu
| id          |        |      | uuid         |          |           |      | Mã định            | danh     | duy nhất, mặc | định |
| ----------- | ------ | ---- | ------------ | -------- | --------- | ---- | ------------------ | -------- | ------------- | ---- |
|             |        |      |              |          |           |      | sinh tự            | động     |               |      |
|             |        | Bảng | 4.2:         | Chú      | thích     | bảng | schedule_user_role |          |               |      |
| Tên         | trường |      | Kiểu         | dữ       | liệu      |      | Chức               | năng     |               |      |
| ma          |        |      | varchar(10)  |          |           |      | Mã đơn             | vị, khóa | chính         |      |
| name        |        |      | varchar(255) |          |           |      | Tên đơn            | vị đầy   | đủ            |      |
| short_name  |        |      | varchar(255) |          |           |      | Tên đơn            | vị viết  | tắt           |      |
| don_vi_type |        |      | varchar(255) |          |           |      | Loại đơn           | vị       |               |      |
|             |        | Bảng |              | 4.3:     | Chú thích | bảng | schedule_don_vi    |          |               |      |
| Tên         | trường |      | Kiểu         | dữ       | liệu      |      | Chức               | năng     |               |      |
| ma          |        |      | varchar(10)  |          |           |      | Mã chức            | vụ, khóa | chính         |      |
| name        |        |      | varchar(255) |          |           |      | Tên chức           | vụ       |               |      |
|             |        | Bảng |              | 4.4: Chú | thích     | bảng |                    |          |               |      |
schedule_chuc_vu
| Tên         | trường |     | Kiểu          | dữ  | liệu |     | Chức      | năng       |            |      |
| ----------- | ------ | --- | ------------- | --- | ---- | --- | --------- | ---------- | ---------- | ---- |
| role_key    |        |     | varchar(100)  |     |      |     | Mã quyền, | khóa       | chính      |      |
| role_name   |        |     | varchar(255)  |     |      |     | Tên quyền |            |            |      |
| permissions |        |     | varchar(1000) |     |      |     | Danh      | sách quyền | (JSON/text | phân |
cách)
|     |     |     | Bảng | 4.5: | Chú | thích | bảng |     |     |     |
| --- | --- | --- | ---- | ---- | --- | ----- | ---- | --- | --- | --- |
schedule_role
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     | Trang64/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

|                                       | Trường |      | Đại học      | Bách    | Khoa     | -                    | ĐHQG-HCM |           |           |             |
| ------------------------------------- | ------ | ---- | ------------ | ------- | -------- | -------------------- | -------- | --------- | --------- | ----------- |
|                                       | Khoa   | Khoa | học          | và      | Kỹ thuật | Máy                  |          | Tính      |           |             |
| Tên                                   | trường |      | Kiểu         | dữ liệu |          | Chức                 | năng     |           |           |             |
| ma                                    |        |      | varchar(2)   |         |          | Khóa                 | chính,   | mã loại   | đơn vị    |             |
| ten                                   |        |      | varchar(255) |         |          | Tên                  | loại đơn | vị        |           |             |
| kich_hoat                             |        |      | boolean      |         |          | Trạng                | thái     | kích hoạt | (mặc định | true)       |
|                                       |        | Bảng | 4.6: Chú     | thích   | bảng     | schedule_loai_don_vi |          |           |           |             |
| 4.3.2                                 | Bảng   |      | dữ liệu      | lịch    | công     | tác                  |          |           |           |             |
| 4.3.2.1                               | Bảng   |      | dữ liệu      | quản    | lý lịch  | công                 | tác      |           |           |             |
|                                       |        | Hình | 4.9: Các     | bảng    | dữ liệu  | quản                 | lý       | lịch công | tác       |             |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |        |      |              |         |          |                      |          |           |           | Trang65/148 |

|      | Trường |      | Đại          | học | Bách  | Khoa  | - ĐHQG-HCM |        |         |      |          |     |
| ---- | ------ | ---- | ------------ | --- | ----- | ----- | ---------- | ------ | ------- | ---- | -------- | --- |
|      | Khoa   | Khoa |              | học | và Kỹ | thuật | Máy        | Tính   |         |      |          |     |
| Tên  | trường |      | Kiểu         | dữ  | liệu  |       | Chức       | năng   |         |      |          |     |
| id   |        |      | serial       |     |       |       | Khóa       | chính, | tự tăng |      |          |     |
| name |        |      | varchar(255) |     |       |       | Tên đợt    | lịch   | hoặc    | tiêu | đề chung | của |
lịch
| note         |        |      | varchar(1000) |     |       |      | Ghi chú,         | mô     | tả chi    | tiết    |      |      |
| ------------ | ------ | ---- | ------------- | --- | ----- | ---- | ---------------- | ------ | --------- | ------- | ---- | ---- |
| update_time  |        |      | bigint        |     |       |      | Thời             | gian   | cập       | nhật    | gần  | nhất |
|              |        |      |               |     |       |      | (timestamp       |        | dạng      | số)     |      |      |
| start_time   |        |      | bigint        |     |       |      | Thời gian        |        | bắt đầu   |         |      |      |
| end_time     |        |      | bigint        |     |       |      | Thời gian        |        | kết thúc  |         |      |      |
| approve_shcc |        |      | varchar(10)   |     |       |      | Mã số            | cán    | bộ phê    | duyệt   |      |      |
| approve_name |        |      | varchar(255)  |     |       |      | Tên người        |        | phê duyệt |         |      |      |
|              |        | Bảng | 4.7:          | Chú | thích | bảng | schedule_general |        |           |         |      |      |
| Tên          | trường |      | Kiểu          | dữ  | liệu  |      | Chức             | năng   |           |         |      |      |
| id           |        |      | serial        |     |       |      | Khóa             | chính, | tự tăng   |         |      |      |
| name         |        |      | varchar(500)  |     |       |      | Tên đợt          | phiếu  | đăng      | ký      | lịch |      |
| note         |        |      | varchar(2000) |     |       |      | Ghi chú          | hoặc   | mô        | tả thêm |      |      |
| state        |        |      | varchar(20)   |     |       |      | Trạng            | thái   | phiếu     | đăng    | ký   |      |
| start_time   |        |      | bigint        |     |       |      | Thời gian        |        | bắt đầu   |         |      |      |
| end_time     |        |      | bigint        |     |       |      | Thời gian        |        | kết thúc  |         |      |      |
| don_vi       |        |      | varchar(10)   |     |       |      | Mã đơn           | vị     | tạo phiếu | đăng    | ký   |      |
| create_time  |        |      | bigint        |     |       |      | Thời gian        |        | tạo       |         |      |      |
| update_time  |        |      | bigint        |     |       |      | Thời gian        |        | cập nhật  | gần     | nhất |      |
| is_deleted   |        |      | boolean       |     |       |      | Đánh             | dấu    | đã xóa    |         |      |      |
| general_id   |        |      | integer       |     |       |      | Khóa             | ngoại  | liên      | kết     | đến  | bảng |
schedule_general
|     |     | Bảng | 4.8: | Chú | thích | bảng |     |     |     |     |     |     |
| --- | --- | ---- | ---- | --- | ----- | ---- | --- | --- | --- | --- | --- | --- |
schedule_register
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     |     | Trang66/148 |     |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- | --- |

Trường Đại học Bách Khoa - ĐHQG-HCM
Khoa Khoa học và Kỹ thuật Máy Tính
Tên trường Kiểu dữ liệu Chức năng
id varchar(100) Khóa chính, mã loại lịch
name varchar(255) Tên loại lịch
color varchar(20) Mã màu hiển thị loại lịch
attendable boolean Xác định loại lịch có cần điểm
danh/ghi nhận tham dự hay không
Bảng 4.9: Chú thích bảng schedule_dm_type
Tên trường Kiểu dữ liệu Chức năng
id serial Khóa chính, tự tăng
general_id integer Khóa ngoại liên kết đến bảng
schedule_general
title varchar(1000) Tiêu đề nội dung bổ sung
description varchar(1000) Mô tả hoặc nội dung chi tiết bổ sung
create_time bigint Thời gian tạo nội dung bổ sung
priority integer Thứ tự ưu tiên hiển thị
parent_id integer Tham chiếu đến nội dung cha (hỗ trợ
cấu trúc phân cấp)
Bảng 4.10: Chú thích bảng schedule_general_addition
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang67/148

|            | Trường | Đại  | học          | Bách | Khoa     | - ĐHQG-HCM |        |         |       |     |     |
| ---------- | ------ | ---- | ------------ | ---- | -------- | ---------- | ------ | ------- | ----- | --- | --- |
|            | Khoa   | Khoa | học          | và   | Kỹ thuật | Máy        | Tính   |         |       |     |     |
| Tên        | trường |      | Kiểu         | dữ   | liệu     | Chức       | năng   |         |       |     |     |
| id         |        |      | serial       |      |          | Khóa       | chính, | tự tăng |       |     |     |
| all_day    |        |      | boolean      |      |          | Sự kiện    | kéo    | dài cả  | ngày  |     |     |
| start_time |        |      | bigint       |      |          | Thời gian  | bắt    | đầu     |       |     |     |
| end_time   |        |      | bigint       |      |          | Thời gian  | kết    | thúc    |       |     |     |
| type       |        |      | varchar(100) |      |          | Loại       | sự     | kiện    | (liên | kết | đến |
schedule_dm_type)
| location   |     |     | varchar(1000) |     |     | Địa điểm |       |      |     |     |      |
| ---------- | --- | --- | ------------- | --- | --- | -------- | ----- | ---- | --- | --- | ---- |
| note       |     |     | varchar(1000) |     |     | Ghi chú  |       |      |     |     |      |
| general_id |     |     | integer       |     |     | Khóa     | ngoại | liên | kết | đến | bảng |
schedule_general
| name        |     |     | text    |     |     | Tên hoặc | tiêu | đề     | sự kiện |         |      |
| ----------- | --- | --- | ------- | --- | --- | -------- | ---- | ------ | ------- | ------- | ---- |
| is_deleted  |     |     | boolean |     |     | Đánh     | dấu  | đã xóa | (soft   | delete) |      |
| register_id |     |     | integer |     |     | Liên     |      | kết    | đến     |         | bảng |
schedule_register
| cap           |      |       | varchar(10)  |       |      | Cấp lịch | hoặc  | mã        | cấp quản   | lý      |          |
| ------------- | ---- | ----- | ------------ | ----- | ---- | -------- | ----- | --------- | ---------- | ------- | -------- |
| quy_trinh_id  |      |       | integer      |       |      | Mã quy   | trình | duyệt     | (workflow) |         |          |
| step_no       |      |       | integer      |       |      | Bước     | hiện  | tại trong | quy        | trình   | duyệt    |
| shcc          |      |       | varchar(10)  |       |      | Mã số    | cán   | bộ phụ    | trách      | hoặc    | người sở |
|               |      |       |              |       |      | hữu lịch |       |           |            |         |          |
| don_vi        |      |       | varchar(10)  |       |      | Mã đơn   | vị    | tạo hoặc  | quản       | lý lịch |          |
| render_text   |      |       | varchar(500) |       |      | Chuỗi    | hiển  | thị phân  | công       |         |          |
| expect_assign |      |       | integer      |       |      | Số lượng |       | phân      | công       | dự kiến | hoặc     |
|               |      |       |              |       |      | người    | tham  | gia mong  | đợi        |         |          |
|               | Bảng | 4.11: | Chú          | thích | bảng |          |       |           |            |         |          |
schedule_general_item
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     |     | Trang68/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

|             | Trường |       | Đại          | học   | Bách  | Khoa  | -    | ĐHQG-HCM |           |              |     |
| ----------- | ------ | ----- | ------------ | ----- | ----- | ----- | ---- | -------- | --------- | ------------ | --- |
|             | Khoa   | Khoa  |              | học   | và Kỹ | thuật |      | Máy      | Tính      |              |     |
| 4.3.2.2     |        | Bảng  | dữ liệu      | chi   | tiết  | lịch  | công | tác      |           |              |     |
|             |        | Hình  | 4.10:        | Các   | bảng  | dữ    | liệu | chi tiết | lịch công | tác          |     |
| Tên         | trường |       | Kiểu         | dữ    | liệu  |       | Chức | năng     |           |              |     |
| id          |        |       | serial       |       |       |       | Khóa | chính,   | tự tăng   |              |     |
| name        |        |       | varchar(255) |       |       |       | Tên  | quy      | trình     |              |     |
| description |        |       | varchar(255) |       |       |       | Mô   | tả ngắn  | về quy    | trình        |     |
| active      |        |       | boolean      |       |       |       | Xác  | định     | quy trình | có đang được | sử  |
|             |        |       |              |       |       |       | dụng | hay      | không     |              |     |
| cap         |        |       | varchar(10)  |       |       |       | Cấp  | của      | quy trình |              |     |
|             | Bảng   | 4.12: | Chú          | thích |       | bảng  |      |          |           |              |     |
schedule_config_quy_trinh
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     | Trang69/148 |     |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- | --- |

|              | Trường | Đại  | học     | Bách | Khoa | -     | ĐHQG-HCM |         |     |     |      |
| ------------ | ------ | ---- | ------- | ---- | ---- | ----- | -------- | ------- | --- | --- | ---- |
|              | Khoa   | Khoa | học     | và   | Kỹ   | thuật | Máy      | Tính    |     |     |      |
| Tên          | trường |      | Kiểu    | dữ   | liệu | Chức  | năng     |         |     |     |      |
| id           |        |      | integer |      |      | Khóa  | chính,   | tự tăng |     |     |      |
| quy_trinh_id |        |      | integer |      |      | Khóa  | ngoại    | liên    | kết | đến | bảng |
schedule_config_quy_trinh
| step_no                  |     |     | integer      |     |     | Thứ  | tự bước  | trong        | quy  | trình  |      |
| ------------------------ | --- | --- | ------------ | --- | --- | ---- | -------- | ------------ | ---- | ------ | ---- |
| step_name                |     |     | varchar(255) |     |     | Tên  | bước     | quy trình    |      |        |      |
| don_vi                   |     |     | varchar(10)  |     |     | Mã   | đơn      | vị thực hiện | bước |        |      |
| role_key                 |     |     | varchar(100) |     |     | Vai  | trò/khóa | định         | danh | người  | thực |
|                          |     |     |              |     |     | hiện | bước     | (role key)   |      |        |      |
| update_general_idboolean |     |     |              |     |     | Xác  | định     | bước         | này  | có cập | nhật |
|                          |     |     |              |     |     |      |          | hay không    |      |        |      |
general_id
|         | Bảng 4.13: | Chú | thích   | bảng | schedule_config_quy_trinh_step |      |        |         |     |     |      |
| ------- | ---------- | --- | ------- | ---- | ------------------------------ | ---- | ------ | ------- | --- | --- | ---- |
| Tên     | trường     |     | Kiểu    | dữ   | liệu                           | Chức | năng   |         |     |     |      |
| id      |            |     | serial  |      |                                | Khóa | chính, | tự tăng |     |     |      |
| item_id |            |     | integer |      |                                | Khóa | ngoại  | liên    | kết | đến | bảng |
schedule_general_item
| shcc      |     |     | varchar(10)  |     |     | Mã  | số cán | bộ được | phân | công |     |
| --------- | --- | --- | ------------ | --- | --- | --- | ------ | ------- | ---- | ---- | --- |
| full_name |     |     | varchar(255) |     |     | Họ  | và tên | đầy đủ  | cán  | bộ   |     |
short_name varchar(255) Tên rút gọn hoặc tên hiển thị của cán
bộ
| chuc_vu                               |      |       | varchar(10)  |       |      | Mã                      | chức    | vụ của cán | bộ    |          |             |
| ------------------------------------- | ---- | ----- | ------------ | ----- | ---- | ----------------------- | ------- | ---------- | ----- | -------- | ----------- |
| don_vi                                |      |       | varchar(10)  |       |      | Mã                      | đơn     | vị mà cán  | bộ    | thuộc về |             |
| vai_tro                               |      |       | varchar(100) |       |      | Vai                     | trò của | cán bộ     | trong | sự kiện  | hoặc        |
|                                       |      |       |              |       |      | nhiệm                   | vụ      |            |       |          |             |
| priority                              |      |       | integer      |       |      | Thứ                     | tự      | ưu tiên    | hoặc  | mức độ   | quan        |
|                                       |      |       |              |       |      | trọng                   | trong   | phân       | công  |          |             |
|                                       | Bảng | 4.14: | Chú          | thích | bảng | schedule_general_assign |         |            |       |          |             |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |      |       |              |       |      |                         |         |            |       |          | Trang70/148 |

|             | Trường | Đại  | học          | Bách | Khoa | -     | ĐHQG-HCM |                    |       |          |      |
| ----------- | ------ | ---- | ------------ | ---- | ---- | ----- | -------- | ------------------ | ----- | -------- | ---- |
|             | Khoa   | Khoa | học          | và   | Kỹ   | thuật | Máy      | Tính               |       |          |      |
| Tên         | trường |      | Kiểu         | dữ   | liệu | Chức  | năng     |                    |       |          |      |
| id          |        |      | serial       |      |      | Khóa  | chính,   | tự tăng            |       |          |      |
| file_name   |        |      | varchar(500) |      |      | Tên   | file     | tải lên            |       |          |      |
| file_path   |        |      | varchar(500) |      |      | Đường | dẫn      | lưu file           |       |          |      |
| upload_time |        |      | bigint       |      |      | Thời  | gian     | tải lên (timestamp |       | dạng     | số)  |
| upload_by   |        |      | varchar(10)  |      |      | Mã    | số cán   | bộ hoặc            | người | tải file | lên  |
| item_id     |        |      | integer      |      |      | Khóa  | ngoại    | liên               | kết   | đến      | bảng |
schedule_general_item
| is_deleted   |     |     | boolean     |     |     | Đánh      | dấu  | file đã   | xóa (soft | delete)   |      |
| ------------ | --- | --- | ----------- | --- | --- | --------- | ---- | --------- | --------- | --------- | ---- |
| type         |     |     | varchar(20) |     |     | Loại      | file | hoặc phân |           | loại file | (vd: |
|              |     |     |             |     |     | document, |      | image,    | ...)      |           |      |
| can_download |     |     | boolean     |     |     | Xác       | định | file có   | thể       | tải xuống | hay  |
không
| agenda_id |        |            | integer      |           |       | Khóa                   | ngoại           | liên kết | đến      | lịch/agenda |     |
| --------- | ------ | ---------- | ------------ | --------- | ----- | ---------------------- | --------------- | -------- | -------- | ----------- | --- |
|           |        |            |              |           |       | nếu                    | có              |          |          |             |     |
|           | Bảng   | 4.15:      | Chú          | thích     | bảng  | schedule_general_files |                 |          |          |             |     |
| Tên       | trường |            | Kiểu         | dữ        | liệu  | Chức                   | năng            |          |          |             |     |
| id        |        |            | varchar(10)  |           |       | Khóa                   | chính,          | mã cấp   | lịch     |             |     |
| name      |        |            | varchar(100) |           |       | Tên                    | cấp             | lịch     |          |             |     |
|           |        | Bảng       | 4.16:        | Chú       | thích | bảng                   | schedule_dm_cap |          |          |             |     |
| Tên       | trường |            | Kiểu         | dữ        | liệu  | Chức                   | năng            |          |          |             |     |
| id        |        |            | varchar(20)  |           |       | Khóa                   | chính,          | mã vai   | trò      |             |     |
| name      |        |            | varchar(100) |           |       | Tên                    | vai             | trò      |          |             |     |
| can_edit  |        |            | boolean      |           |       | Xác                    | định            | vai trò  | có quyền | chỉnh       | sửa |
|           |        |            |              |           |       | hay                    | không           |          |          |             |     |
|           |        | Bảng 4.17: |              | Chú thích |       | bảng                   |                 |          |          |             |     |
schedule_dm_vai_tro
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     | Trang71/148 |     |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- | --- |

|     | Trường | Đại  | học     | Bách | Khoa | -     | ĐHQG-HCM |        |     |          |      |
| --- | ------ | ---- | ------- | ---- | ---- | ----- | -------- | ------ | --- | -------- | ---- |
|     | Khoa   | Khoa | học     | và   | Kỹ   | thuật | Máy      | Tính   |     |          |      |
| Tên | trường |      | Kiểu    | dữ   | liệu | Chức  | năng     |        |     |          |      |
| id  |        |      | integer |      |      | Khóa  |          | chính, |     | tự       | tăng |
|     |        |      |         |      |      | (sử   |          | dụng   |     | sequence |      |
schedule-general-agenda_id_seq)
| start_time  |     |     | bigint  |     |     | Thời | gian   | bắt đầu  | agenda |     |      |
| ----------- | --- | --- | ------- | --- | --- | ---- | ------ | -------- | ------ | --- | ---- |
| end_time    |     |     | bigint  |     |     | Thời | gian   | kết thúc | agenda |     |      |
| description |     |     | varchar |     |     | Mô   | tả chi | tiết của | agenda |     |      |
| item_id     |     |     | integer |     |     | Khóa | ngoại  | liên     | kết    | đến | bảng |
schedule_general_item
| shcc        |        |       | varchar(10)  |       |      | Mã                      | số     | cán bộ   | thực hiện | hoặc      | phụ      |
| ----------- | ------ | ----- | ------------ | ----- | ---- | ----------------------- | ------ | -------- | --------- | --------- | -------- |
|             |        |       |              |       |      | trách                   | agenda |          |           |           |          |
| full_name   |        |       | varchar(255) |       |      | Họ                      | và tên | cán bộ   | thực      | hiện hoặc | phụ      |
|             |        |       |              |       |      | trách                   | agenda |          |           |           |          |
| completed   |        |       | boolean      |       |      | Trạng                   | thái   | hoàn     | thành     | agenda    |          |
|             | Bảng   | 4.18: | Chú          | thích | bảng | schedule_general_agenda |        |          |           |           |          |
| Tên         | trường |       | Kiểu         | dữ    | liệu | Chức                    | năng   |          |           |           |          |
| id          |        |       | serial       |       |      | Khóa                    | chính, | tự tăng  |           |           |          |
| shcc        |        |       | varchar(10)  |       |      | Mã                      | số cán | bộ tham  | dự        | hoặc ghi  | nhận     |
|             |        |       |              |       |      | biên                    | bản    |          |           |           |          |
| full_name   |        |       | varchar(255) |       |      | Họ                      | và tên | cán bộ   | (bắt      | buộc)     |          |
| description |        |       | varchar      |       |      | Nội                     | dung   | hoặc ghi | chú trong |           | biên bản |
họp
| item_id |     |     | integer |     |     | Khóa | ngoại | liên | kết | đến | bảng |
| ------- | --- | --- | ------- | --- | --- | ---- | ----- | ---- | --- | --- | ---- |
schedule_general_item
| time |            |     | bigint |      |     | Thời | gian | ghi nhận | biên | bản | họp |
| ---- | ---------- | --- | ------ | ---- | --- | ---- | ---- | -------- | ---- | --- | --- |
|      | Bảng 4.19: | Chú | thích  | bảng |     |      |      |          |      |     |     |
schedule_general_meeting_minutes
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     |     | Trang72/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

|               | Trường | Đại       | học   | Bách    | Khoa  | -       | ĐHQG-HCM |          |          |            |
| ------------- | ------ | --------- | ----- | ------- | ----- | ------- | -------- | -------- | -------- | ---------- |
|               | Khoa   | Khoa      | học   | và Kỹ   | thuật |         | Máy      | Tính     |          |            |
| 4.3.2.3       | Bảng   | dữ        | liệu  | khác    |       |         |          |          |          |            |
|               | Hình   | 4.11: Các | bảng  | dữ      | liệu  | hỗ trợ  | liên kết | Google   | Calendar |            |
| Tên           | trường |           | Kiểu  | dữ liệu |       | Chức    | năng     |          |          |            |
| email         |        |           | text  |         |       | Khóa    | chính,   | địa chỉ  | email    | dùng để    |
|               |        |           |       |         |       | định    | danh     |          |          |            |
| refresh_token |        |           | text  |         |       | Refresh | token    | dùng     | để       | lấy access |
|               |        |           |       |         |       | token   | mới      |          |          |            |
| access_token  |        |           | text  |         |       | Access  | token    | hiện tại |          |            |
|               |        | Bảng      | 4.20: | Chú     | thích | bảng    |          |          |          |            |
schedule_token
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     | Trang73/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

|                                       | Trường | Đại học      | Bách  | Khoa | -                      | ĐHQG-HCM |          |         |             |      |
| ------------------------------------- | ------ | ------------ | ----- | ---- | ---------------------- | -------- | -------- | ------- | ----------- | ---- |
|                                       | Khoa   | Khoa học     | và    | Kỹ   | thuật                  | Máy      | Tính     |         |             |      |
| Tên                                   | trường | Kiểu         | dữ    | liệu | Chức                   | năng     |          |         |             |      |
| key                                   |        | varchar(100) |       |      | Khóa                   | định     | danh tùy | chọn    |             |      |
| calendar_id                           |        | text         |       |      | Khóa                   | chính,   | ID       | của     | calendar    | trên |
|                                       |        |              |       |      | Google                 | Calendar |          |         |             |      |
|                                       | Bảng   | 4.21: Chú    | thích | bảng | schedule_calendar_list |          |          |         |             |      |
| Tên                                   | trường | Kiểu         | dữ    | liệu | Chức                   | năng     |          |         |             |      |
| id                                    |        | serial       |       |      | Khóa                   | chính,   | tự tăng  |         |             |      |
| email                                 |        | text         |       |      | Email                  | người    | dùng     |         |             |      |
| start_time                            |        | bigint       |       |      | Thời                   | gian     | bắt đầu  |         |             |      |
| end_time                              |        | bigint       |       |      | Thời                   | gian     | kết thúc |         |             |      |
| status                                |        | varchar(100) |       |      | Trạng                  | thái     |          |         |             |      |
| filter_option                         |        | jsonb        |       |      | Lưu                    | các tùy  | chọn     | để thực | hiện        |      |
|                                       | Bảng   | 4.22: Chú    | thích | bảng | schedule_calendar_task |          |          |         |             |      |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |        |              |       |      |                        |          |          |         | Trang74/148 |      |

|       | Trường | Đại học  | Bách Khoa   | - ĐHQG-HCM   |     |
| ----- | ------ | -------- | ----------- | ------------ | --- |
|       | Khoa   | Khoa học | và Kỹ thuật | Máy Tính     |     |
| 4.3.3 | Các    | bảng dữ  | liệu phân   | hệ Xử lý văn | bản |
4.3.3.1 Các bảng dữ liệu tổng hợp các góp ý dự thảo, thông tư,
|     | quyết | định,... |     |     |     |
| --- | ----- | -------- | --- | --- | --- |
Hình 4.12: Các bảng dữ liệu của Tổng hợp các góp ý dự thảo, thông tư, quyết
định,...
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     | Trang75/148 |
| ------------------------------------- | --- | --- | --- | --- | ----------- |

Trường Đại học Bách Khoa - ĐHQG-HCM
Khoa Khoa học và Kỹ thuật Máy Tính
Tên trường Kiểu dữ liệu Chức năng
id integer Khóa chính, tự động tăng
name text Tên phiếu thu thập góp ý
created_by varchar(10) Số hiệu công chức của cá nhân tạo
phiếu
created_at bigint Thời gian tạo phiếu
status varchar(10) Trạng thái của phiếu
ma_don_vi varchar(10) Mã đơn vị của cá nhân tạo phiếu
Bảng 4.23: Chú thích bảng draft_resolution_general
Tên trường Kiểu dữ liệu Chức năng
id integer Khóa chính, tự động tăng
draft_id integer Khóa ngoại tham chiếu đến bảng
draft_resolution_general
shcc varchar(10) Số hiệu công chức của cá nhân
tham gia góp ý
ho_ten varchar(100) Họ và tên cá nhân tham gia góp ý
ma_don_vi varchar(3) Mã đơn vị của cá nhân tham gia
góp ý
ten_viet_tat varchar(20) Tên đơn vị viết tắt của cá nhân
tham gia góp ý
created_at bigint Thời gian thêm cá nhân hiện tại
vào danh sách góp ý
created_by varchar(10) Số hiệu công chức của người thêm
cá nhân hiện tại vào danh sách
góp ý
Bảng 4.24: Chú thích bảng draft_resolution_user
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang76/148

|     | Trường | Đại  | học | Bách | Khoa     | - ĐHQG-HCM |      |     |     |     |
| --- | ------ | ---- | --- | ---- | -------- | ---------- | ---- | --- | --- | --- |
|     | Khoa   | Khoa | học | và   | Kỹ thuật | Máy        | Tính |     |     |     |
draft_resolution_user là bảng lưu thông tin của các cá nhân trong danh
| sách tham | gia    | góp ý | ở từng  | phiếu | thu  | thập (draft_id). |        |         |       |          |
| --------- | ------ | ----- | ------- | ----- | ---- | ---------------- | ------ | ------- | ----- | -------- |
| Tên       | trường |       | Kiểu    | dữ    | liệu | Chức             | năng   |         |       |          |
| id        |        |       | integer |       |      | Khóa             | chính, | tự động |       | tăng     |
| draft_id  |        |       | integer |       |      | Khóa             | ngoại  | tham    | chiếu | đến bảng |
draft_resolution_general
| file_name   |     |     | varchar(255) |     |     | Tên   | tập       | tin đính  | kèm     |            |
| ----------- | --- | --- | ------------ | --- | --- | ----- | --------- | --------- | ------- | ---------- |
| file_path   |     |     | varchar(255) |     |     | Đường | dẫn       | tập       | tin     |            |
| type        |     |     | varchar(50)  |     |     | Loại  | tập       | tinđính   | kèm     |            |
| uploaded_by |     |     | varchar(10)  |     |     | Số    | hiệu công | chức      | của     | người đăng |
|             |     |     |              |     |     | tải   | tập tin   |           |         |            |
| created_at  |     |     | bigint       |     |     | Thời  | gian      | đăng      | tải tập | tin        |
| deleted_at  |     |     | bigint       |     |     | Thời  | gian      | xóa tập   | tin     |            |
| deleted_by  |     |     | varchar(10)  |     |     | Số    | hiệu      | công chức | của     | người xóa  |
tập tin
|     | Bảng | 4.25: | Chú | thích | bảng | draft_resolution_file |     |     |     |     |
| --- | ---- | ----- | --- | ----- | ---- | --------------------- | --- | --- | --- | --- |
draft_resolution_file không chỉ là bảng lưu trữ các tập tin văn bản góp
ý, mà còn lưu trữ các tập tin đính kèm trong từng phiếu góp ý.
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     | Trang77/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

|          | Trường | Đại  | học     | Bách | Khoa     | - ĐHQG-HCM |        |         |       |      |      |
| -------- | ------ | ---- | ------- | ---- | -------- | ---------- | ------ | ------- | ----- | ---- | ---- |
|          | Khoa   | Khoa | học     | và   | Kỹ thuật | Máy        | Tính   |         |       |      |      |
| Tên      | trường |      | Kiểu    | dữ   | liệu     | Chức       | năng   |         |       |      |      |
| id       |        |      | integer |      |          | Khóa       | chính, | tự động |       | tăng |      |
| draft_id |        |      | integer |      |          | Khóa       | ngoại  | tham    | chiếu | đến  | bảng |
draft_resolution_general
| file_id |     |     | uuid |     |     | Khóa | ngoại | tham    | chiếu | đến   | tập  |
| ------- | --- | --- | ---- | --- | --- | ---- | ----- | ------- | ----- | ----- | ---- |
|         |     |     |      |     |     | tin  | văn   | bản cần | góp ý | trong | bảng |
draft_resolution_file
| message  |     |     | text  |     |     | Nội  | dung  | đề xuất    | chỉnh | sửa |         |
| -------- | --- | --- | ----- | --- | --- | ---- | ----- | ---------- | ----- | --- | ------- |
| location |     |     | jsonb |     |     | Toạ  | độ,   | kích thước | tổng  |     | thể của |
|          |     |     |       |     |     | phần | trích | dẫn        | trên  | tập | tin văn |
bản
| shcc |     |     | varchar(10) |     |     | Số  | hiệu | công chức | của | cá nhân | góp |
| ---- | --- | --- | ----------- | --- | --- | --- | ---- | --------- | --- | ------- | --- |
ý
| ma_don_vi                             |      |       | varchar(3)  |       |      | Mã                       | đơn   | vị của cá  | nhân    | góp         | ý     |
| ------------------------------------- | ---- | ----- | ----------- | ----- | ---- | ------------------------ | ----- | ---------- | ------- | ----------- | ----- |
| created_at                            |      |       | bigint      |       |      | Thời                     | gian  | góp ý      |         |             |       |
| parent_id                             |      |       | integer     |       |      | Khóa                     | ngoại | tham       | chiếu   | đến         | góp ý |
|                                       |      |       |             |       |      | khác                     | dành  | cho góp    | ý       | là phản     | hồi   |
| color                                 |      |       | varchar(50) |       |      | Màu                      | sắc   | của phần   | trích   | dẫn         | trên  |
|                                       |      |       |             |       |      | tập                      | tin   | góp ý      |         |             |       |
| content                               |      |       | text        |       |      | Nội                      | dung  | thô của    | trích   | dẫn         | trong |
|                                       |      |       |             |       |      | tập                      | tin   | góp ý      |         |             |       |
| rects                                 |      |       | jsonb       |       |      | Toạ                      | độ,   | kích thước |         | chi tiết    | của   |
|                                       |      |       |             |       |      | từng                     | phần  | trong      | trích   | dẫn         |       |
| dieu_khoan                            |      |       | text        |       |      | Điều,                    | khoản | văn        | bản     | của nội     | dung  |
|                                       |      |       |             |       |      | được                     | trích | dẫn        |         |             |       |
| ly_do                                 |      |       | text        |       |      | Lý                       | do đề | xuất chỉnh |         | sửa         |       |
| status                                |      |       | varchar(50) |       |      | Trạng                    | thái  | hiện       | tại của | đề          | xuất  |
| trich_dan                             |      |       | text        |       |      | Nội                      | dung  | trích dẫn  | trong   | văn         | bản   |
|                                       | Bảng | 4.26: | Chú         | thích | bảng | draft_resolution_comment |       |            |         |             |       |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |      |       |             |       |      |                          |       |            |         | Trang78/148 |       |

|         | Trường | Đại  | học   | Bách         | Khoa       | - ĐHQG-HCM      |      |              |
| ------- | ------ | ---- | ----- | ------------ | ---------- | --------------- | ---- | ------------ |
|         | Khoa   | Khoa | học   | và           | Kỹ thuật   | Máy             | Tính |              |
| 4.3.3.2 | Các    | bảng | dữ    | liệu         | của Tờ     | trình           | nội  | bộ           |
|         |        | Hình | 4.13: | Các bảng     | dữ         | liệu của        | Tờ   | trình nội bộ |
| Tên     | trường |      |       | Kiểu dữ      | liệu       | Chức            | năng |              |
| ma      |        |      |       | varchar(20)  |            | Mã              | loại | tờ trình     |
| name    |        |      |       | varchar(100) |            | Tên             | loại | từ trình     |
|         |        | Bảng | 4.27: | Chú          | thích bảng | submission_type |      |              |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang79/148

|       | Trường | Đại  | học         | Bách | Khoa     | - ĐHQG-HCM |        |       |         |      |       |
| ----- | ------ | ---- | ----------- | ---- | -------- | ---------- | ------ | ----- | ------- | ---- | ----- |
|       | Khoa   | Khoa | học         | và   | Kỹ thuật | Máy        | Tính   |       |         |      |       |
| Tên   | trường |      | Kiểu        |      | dữ liệu  | Chức       | năng   |       |         |      |       |
| id    |        |      | int         |      |          | Khóa       | chính, |       | tự động | tăng |       |
| title |        |      | text        |      |          | Tên        | tờ     | trình |         |      |       |
| type  |        |      | varchar(20) |      |          | Khóa       |        | ngoại |         | tham | chiếu |
submission_type.ma
| content    |     |     | text        |     |     | Nội   | dung | tờ   | trình |           |       |
| ---------- | --- | --- | ----------- | --- | --- | ----- | ---- | ---- | ----- | --------- | ----- |
| step_no    |     |     | int         |     |     | Bước  | hiện | tại  | của   | tờ trình  |       |
| status     |     |     | varchar(50) |     |     | Trạng | thái | hiện | tại   | của tờ    | trình |
| created_by |     |     | varchar(10) |     |     | Số    | hiệu | công | chức  | của người | tạo   |
tờ trình
| created_at |        |      | bigint       |     |            | Thời               | gian | tạo    | tờ trình |       |     |
| ---------- | ------ | ---- | ------------ | --- | ---------- | ------------------ | ---- | ------ | -------- | ----- | --- |
|            |        | Bảng | 4.28:        | Chú | thích bảng | submission_general |      |        |          |       |     |
| Tên        | trường |      | Kiểu         |     | dữ liệu    | Chức               | năng |        |          |       |     |
| key        |        |      | varchar(100) |     |            | Mã                 | kiểu | trường | dữ       | liệu  |     |
| type       |        |      | varchar(100) |     |            | Khoá               |      | ngoại  | tham     | chiếu | đến |
submission_type.ma
| label  |     |     | text    |     |     | Tên   | loại | trường | dữ   | liệu |        |
| ------ | --- | --- | ------- | --- | --- | ----- | ---- | ------ | ---- | ---- | ------ |
| active |     |     | boolean |     |     | Trạng | thái | kích   | hoạt | của  | trường |
dữ liệu
| priority |     |            | int |       |      | Thứ    | tự  | ưu      | tiên | mặc định | của |
| -------- | --- | ---------- | --- | ----- | ---- | ------ | --- | ------- | ---- | -------- | --- |
|          |     |            |     |       |      | trường |     | dữ liệu |      |          |     |
|          |     | Bảng 4.29: | Chú | thích | bảng |        |     |         |      |          |     |
submission_dm_attribute
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     |     | Trang80/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

|      | Trường | Đại  | học | Bách    |         | Khoa  | - ĐHQG-HCM |        |       |           |       |
| ---- | ------ | ---- | --- | ------- | ------- | ----- | ---------- | ------ | ----- | --------- | ----- |
|      | Khoa   | Khoa | học | và      | Kỹ      | thuật | Máy        | Tính   |       |           |       |
| Tên  | trường |      |     | Kiểu    | dữ liệu |       | Chức       | năng   |       |           |       |
| id   |        |      |     | integer |         |       | Khóa       | chính, | tự    | động tăng |       |
| type |        |      |     | varchar |         |       | Khóa       |        | ngoại | tham      | chiếu |
submission_type.ma
| key |     |     |     | varchar(100) |     |     | Khóa |     | ngoại | tham | chiếu |
| --- | --- | --- | --- | ------------ | --- | --- | ---- | --- | ----- | ---- | ----- |
submission_dm_attribute.key
| config        |        |      |              | jsonb   |       |      | Cấu                  | hình     | của     | trường dữ  | liệu      |
| ------------- | ------ | ---- | ------------ | ------- | ----- | ---- | -------------------- | -------- | ------- | ---------- | --------- |
| priority      |        |      |              | integer |       |      | Thứ                  | tự       | ưu tiên | của trường | dữ liệu   |
|               |        | Bảng | 4.30:        | Chú     | thích | bảng | submission_attribute |          |         |            |           |
| Tên           | trường |      | Kiểu         | dữ      | liệu  |      | Chức                 | năng     |         |            |           |
| id            |        |      | integer      |         |       |      | Khóa                 | chính,   | tự động | tăng       |           |
| key           |        |      | varchar(100) |         |       |      | Mã loại              | của      | trường  | dữ liệu    | trong nội |
|               |        |      |              |         |       |      | dung                 | tờ trình |         |            |           |
| value         |        |      | text         |         |       |      | Nội dung             | trường   |         | dữ liệu    |           |
| submission_id |        |      | integer      |         |       |      | Khóa                 |          | ngoại   | tham       | chiếu     |
submission_general.id
| config   |     |     | jsonb   |     |     |     | Cấu hình | của | trường | dữ liệu |            |
| -------- | --- | --- | ------- | --- | --- | --- | -------- | --- | ------ | ------- | ---------- |
| priority |     |     | integer |     |     |     | Thứ tự   | của | trường | dữ liệu | trong khối |
nội dung
| can_delete |     |     | boolean |     |     |     | Cho phép |     | người dùng | xoá | trường dữ |
| ---------- | --- | --- | ------- | --- | --- | --- | -------- | --- | ---------- | --- | --------- |
liệu
| label |     |      | text  |     |       |      | Tên trường |     | dữ liệu |     |     |
| ----- | --- | ---- | ----- | --- | ----- | ---- | ---------- | --- | ------- | --- | --- |
|       |     | Bảng | 4.31: | Chú | thích | bảng |            |     |         |     |     |
submission_data
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     |     | Trang81/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

|         | Trường | Đại  | học  | Bách | Khoa     | - ĐHQG-HCM |        |           |       |      |         |
| ------- | ------ | ---- | ---- | ---- | -------- | ---------- | ------ | --------- | ----- | ---- | ------- |
|         | Khoa   | Khoa | học  | và   | Kỹ thuật | Máy        | Tính   |           |       |      |         |
| Tên     | trường |      | Kiểu | dữ   | liệu     | Chức       | năng   |           |       |      |         |
| id      |        |      | int  |      |          | Khóa       | chính, | tự        | động  | tăng |         |
| file_id |        |      | uuid |      |          | Khóa       | ngoại  | tham      | chiếu |      | đến tập |
|         |        |      |      |      |          | tin        | văn    | bản trong | bảng  |      |         |
fw_file
|               |     |     |              |     |     | (Bảng | lưu  | tập        | trung | các     | tập tin |
| ------------- | --- | --- | ------------ | --- | --- | ----- | ---- | ---------- | ----- | ------- | ------- |
|               |     |     |              |     |     | trong | phân | hệ Xử      | lý    | văn     | bản)    |
| file_path     |     |     | varchar(255) |     |     | Đường |      | dẫn đến    | tập   | tin     |         |
| file_name     |     |     | varchar(255) |     |     | Tên   | tập  | tin        |       |         |         |
| uploaded_by   |     |     | varchar(10)  |     |     | Người | đăng | tải        | tập   | tin     |         |
| uploaded_at   |     |     | bigint       |     |     | Thời  | điểm | đăng       | tải   | tập tin |         |
| submission_id |     |     | int          |     |     | Khóa  |      | ngoại tham |       | chiếu   | đến     |
submission_general.id
|               |        | Bảng | 4.32:   | Chú | thích bảng | submission_file |       |       |      |     |       |
| ------------- | ------ | ---- | ------- | --- | ---------- | --------------- | ----- | ----- | ---- | --- | ----- |
| Tên           | trường |      | Kiểu    | dữ  | liệu       | Chức            | năng  |       |      |     |       |
| id            |        |      | integer |     |            | Khóa            | chính |       |      |     |       |
| submission_id |        |      | integer |     |            | Khóa            |       | ngoại | tham |     | chiếu |
submission_general.id
| ma_don_vi  |     |     | varchar(10) |     |     | Mã                         | đơn | vị của cá | nhân | tạo | ý kiến |
| ---------- | --- | --- | ----------- | --- | --- | -------------------------- | --- | --------- | ---- | --- | ------ |
| created_by |     |     | varchar(10) |     |     | Sốhiệucôngchứccủacánhântạo |     |           |      |     |        |
ý kiến
| content    |     |      | text        |           |      | Nội  | dung   | ý kiến   |      |     |        |
| ---------- | --- | ---- | ----------- | --------- | ---- | ---- | ------ | -------- | ---- | --- | ------ |
| created_at |     |      | bigint      |           |      | Thời | điểm   | tạo ý    | kiến |     |        |
| type       |     |      | varchar(20) |           |      | Loại | ý kiến | (Trao    | đổi, | Phê | duyệt, |
|            |     |      |             |           |      | Trả  | lại,   | Từ chối) |      |     |        |
|            |     | Bảng | 4.33:       | Chú thích | bảng |      |        |          |      |     |        |
submission_comment
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     |     | Trang82/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

|               | Trường | Đại  | học          | Bách | Khoa     | - ĐHQG-HCM                   |           |           |           |       |       |
| ------------- | ------ | ---- | ------------ | ---- | -------- | ---------------------------- | --------- | --------- | --------- | ----- | ----- |
|               | Khoa   | Khoa | học          | và   | Kỹ thuật | Máy                          | Tính      |           |           |       |       |
| Tên           | trường |      | Kiểu         | dữ   | liệu     | Chức                         | năng      |           |           |       |       |
| id            |        |      | int          |      |          | Khóa                         | chính,    | tự động   | tăng      |       |       |
| ma_don_vi     |        |      | varchar(3)   |      |          | Mã                           | đơn vị    | thực hiện | bước      | trong | quy   |
|               |        |      |              |      |          | trình                        | của       | tờ trình  |           |       |       |
| shcc          |        |      | varchar(10)  |      |          | Số                           | hiệu công | chức      | thực      | hiện  | bước  |
|               |        |      |              |      |          | trong                        | quy       | trình     |           |       |       |
| step_no       |        |      | int          |      |          | Số thứ                       | tự        | của bước  | trong     | quy   | trình |
| ten_viet_tat  |        |      | varchar(100) |      |          | Tênđơnvịviếttắtcủacánhânthực |           |           |           |       |       |
|               |        |      |              |      |          | hiện                         | bước      | trong     | quy trình |       |       |
| submission_id |        |      | int          |      |          | Khóa                         | ngoại     | tham      |           | chiếu | đến   |
submission_general.id
| can_edit                              |      |       | boolean      |       |      | Thể                  | hiện  | khả năng | chỉnh | sửa  | bước        |
| ------------------------------------- | ---- | ----- | ------------ | ----- | ---- | -------------------- | ----- | -------- | ----- | ---- | ----------- |
|                                       |      |       |              |       |      | trong                | quy   | trình    |       |      |             |
| ten_don_vi                            |      |       | varchar(500) |       |      | Tên                  | đơn   | vị thực  | hiện  | bước | trong       |
|                                       |      |       |              |       |      | quy                  | trình |          |       |      |             |
|                                       | Bảng | 4.34: | Chú          | thích | bảng | submission_quy_trinh |       |          |       |      |             |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |      |       |              |       |      |                      |       |          |       |      | Trang83/148 |

|            | Trường | Đại  | học         | Bách    | Khoa  | - ĐHQG-HCM |           |           |         |       |       |
| ---------- | ------ | ---- | ----------- | ------- | ----- | ---------- | --------- | --------- | ------- | ----- | ----- |
|            | Khoa   | Khoa | học         | và Kỹ   | thuật | Máy        | Tính      |           |         |       |       |
| Tên        | trường |      | Kiểu        | dữ liệu |       | Chức       | năng      |           |         |       |       |
| id         |        |      | int         |         |       | Khóa       | chính,    | tự động   | tăng    |       |       |
| step_no    |        |      | int         |         |       | Thứ tự     | của       | bước      | đã được | thực  | hiện  |
|            |        |      |             |         |       | trong      | quy trình |           |         |       |       |
| ma_don_vi  |        |      | varchar(3)  |         |       | Mã đơn     | vị        | đã thực   | hiện    | bước  | trong |
|            |        |      |             |         |       | quy trình  |           |           |         |       |       |
| shcc       |        |      | varchar(10) |         |       | Số hiệu    | công      | chức      | đảm     | nhận  | thực  |
|            |        |      |             |         |       | hiện bước  | trong     | quy       | trình   |       |       |
| created_at |        |      | bigint      |         |       | Thời       | điểm      | thực hiện | bước    | trong | quy   |
trình
| created_by |     |     | int |     |     | Số hiệu | công | chức | của  | cá        | nhân đã |
| ---------- | --- | --- | --- | --- | --- | ------- | ---- | ---- | ---- | --------- | ------- |
|            |     |     |     |     |     | thực    | hiện | bước | hiện | tại trong | quy     |
trình
| note          |     |     | text |     |     | Ghi chú | khi   | bước | được | thực | hiện  |
| ------------- | --- | --- | ---- | --- | --- | ------- | ----- | ---- | ---- | ---- | ----- |
| submission_id |     |     | int  |     |     | Khóa    | ngoại |      | tham |      | chiếu |
submission_general.id
| action_key |     |     | varchar(20) |     |     | Loại hành | động | thực | hiện | ở bước | hiện |
| ---------- | --- | --- | ----------- | --- | --- | --------- | ---- | ---- | ---- | ------ | ---- |
tại
|                                       | Bảng 4.35: | Chú | thích | bảng | submission_quy_trinh_history |     |     |     |     |     |             |
| ------------------------------------- | ---------- | --- | ----- | ---- | ---------------------------- | --- | --- | --- | --- | --- | ----------- |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |            |     |       |      |                              |     |     |     |     |     | Trang84/148 |

|               | Trường | Đại  | học  | Bách | Khoa     | -    | ĐHQG-HCM |       |         |      |       |
| ------------- | ------ | ---- | ---- | ---- | -------- | ---- | -------- | ----- | ------- | ---- | ----- |
|               | Khoa   | Khoa | học  | và   | Kỹ thuật |      | Máy      | Tính  |         |      |       |
| Tên           | trường |      | Kiểu | dữ   | liệu     | Chức |          | năng  |         |      |       |
| id            |        |      | int  |      |          | Khóa | chính,   |       | tự động | tăng |       |
| submission_id |        |      | int  |      |          | Khóa |          | ngoại |         | tham | chiếu |
submission_general.id
| shcc |     |     | varchar(10) |     |     | Số  | hiệu | công | chức của | người | tham |
| ---- | --- | --- | ----------- | --- | --- | --- | ---- | ---- | -------- | ----- | ---- |
gia
| created_at                            |      |       | bigint      |       |          | Thời                      | điểm | cá      | nhân     | được thêm | vào         |
| ------------------------------------- | ---- | ----- | ----------- | ----- | -------- | ------------------------- | ---- | ------- | -------- | --------- | ----------- |
|                                       |      |       |             |       |          | danh                      | sách |         |          |           |             |
| created_by                            |      |       | varchar(10) |       |          | Số                        | hiệu | công    | chức của | người     | thêm        |
|                                       |      |       |             |       |          | cá                        | nhân | hiện    | tại vào  |           |             |
| ma_don_vi                             |      |       | varchar(3)  |       |          | Mã                        | đơn  | vị của  | cá nhân  | được      | thêm        |
|                                       | Bảng | 4.36: | Chú         | thích | bảng     | submission_quy_trinh_user |      |         |          |           |             |
| 4.3.3.3                               | Các  | bảng  | dữ          | liệu  | của Phân |                           | phối | văn bản |          |           |             |
|                                       | Hình | 4.14: | Các         | bảng  | dữ       | liệu của                  | Phân | phối    | văn      | bản       |             |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |      |       |             |       |          |                           |      |         |          |           | Trang85/148 |

|            | Trường | Đại  | học | Bách    | Khoa  | - ĐHQG-HCM |      |        |          |       |     |
| ---------- | ------ | ---- | --- | ------- | ----- | ---------- | ---- | ------ | -------- | ----- | --- |
|            | Khoa   | Khoa | học | và Kỹ   | thuật | Máy        | Tính |        |          |       |     |
| Tên        | trường |      |     | Kiểu dữ | liệu  | Mô         | tả   |        |          |       |     |
| id         |        |      |     | int     |       | Khóa       |      | chính, | tự tăng. |       |     |
| van_ban_id |        |      |     | int     |       | Khóa       |      | ngoại  | tham     | chiếu | đến |
eoffice_van_ban_di.
| ma_don_vi |     |     |     | varchar(10) |     | Mã  | đơn | vị  | nhận | văn bản | (bắt |
| --------- | --- | --- | --- | ----------- | --- | --- | --- | --- | ---- | ------- | ---- |
buộc).
| ten_don_vi     |     |     |     | varchar(255) |     | Tên  | đơn  | vị   | nhận văn | bản.      |      |
| -------------- | --- | --- | --- | ------------ | --- | ---- | ---- | ---- | -------- | --------- | ---- |
| distributed_by |     |     |     | varchar(10)  |     | Số   | hiệu | công | chức     | của người | phân |
|                |     |     |     |              |     | phối | văn  | bản. |          |           |      |
distributed_by_name varchar(255) Tên người phân phối văn bản.
| distributed_at |     |     |     | bigint      |     | Thời  | gian | phân | phối,      | mặc      | định. |
| -------------- | --- | --- | --- | ----------- | --- | ----- | ---- | ---- | ---------- | -------- | ----- |
| status         |     |     |     | varchar(20) |     | Trạng |      | thái | phân phối. |          |       |
| viewed_at      |     |     |     | bigint      |     | Thời  | gian |      | người      | nhận xem | văn   |
bản.
| viewed_by |     |     |     | varchar(10) |     | Số    | hiệu | công  | chức       | của người | đã   |
| --------- | --- | --- | --- | ----------- | --- | ----- | ---- | ----- | ---------- | --------- | ---- |
|           |     |     |     |             |     | xem   | văn  | bản.  |            |           |      |
| note      |     |     |     | text        |     | Ghi   | chú  | thêm. |            |           |      |
| is_active |     |     |     | boolean     |     | Trạng |      | thái  | hoạt động, | mặc       | định |
true.
|                                       | Bảng 4.37: | Chú | thích | bảng | eoffice_van_ban_di_distribution |     |     |     |     |             |     |
| ------------------------------------- | ---------- | --- | ----- | ---- | ------------------------------- | --- | --- | --- | --- | ----------- | --- |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |            |     |       |      |                                 |     |     |     |     | Trang86/148 |     |

|         | Trường | Đại  | học | Bách | Khoa     | -    | ĐHQG-HCM |     |     |     |
| ------- | ------ | ---- | --- | ---- | -------- | ---- | -------- | --- | --- | --- |
|         | Khoa   | Khoa | học | và   | Kỹ thuật | Máy  | Tính     |     |     |     |
| 4.3.4   | Các    | bảng | dữ  | liệu | phân     | hệ   | Báo      | cáo |     |     |
| 4.3.4.1 | Các    | bảng | dữ  | liệu | của Cấu  | hình | mẫu      | báo | cáo |     |
Hình 4.15: Các bảng dữ liệu của Tổng hợp các góp ý dự thảo, thông tư, quyết
định,...
| Tên    | trường |       |     | Kiểu         | dữ liệu | Mô    | tả     |         |               |          |
| ------ | ------ | ----- | --- | ------------ | ------- | ----- | ------ | ------- | ------------- | -------- |
| id     |        |       |     | int          |         | Khóa  | chính, |         | tự động tăng. |          |
| title  |        |       |     | varchar(500) |         | Tiêu  | đề     | của mẫu | cấu hình      | báo cáo. |
| active |        |       |     | boolean      |         | Trạng | thái   | hoạt    | động.         |          |
|        | Bảng   | 4.38: | Chú | thích        | bảng    |       |        |         |               |          |
report_config_template
|     |     |     |     | là  | bảng lưu | trữ | các báo | cáo | mẫu để | người dùng |
| --- | --- | --- | --- | --- | -------- | --- | ------- | --- | ------ | ---------- |
report_config_template
phù hợp có thể tuỳ chỉnh và sử dụng để tạo nhanh các báo cáo.
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     | Trang87/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

|       | Trường | Đại  | học          | Bách | Khoa     | -    | ĐHQG-HCM |     |       |          |     |
| ----- | ------ | ---- | ------------ | ---- | -------- | ---- | -------- | --- | ----- | -------- | --- |
|       | Khoa   | Khoa | học          | và   | Kỹ thuật | Máy  | Tính     |     |       |          |     |
| Tên   | trường |      | Kiểu         | dữ   | liệu     | Mô   | tả       |     |       |          |     |
| id    |        |      | int          |      |          | Khóa | chính,   | tự  | động  | tăng.    |     |
| title |        |      | varchar(500) |      |          | Tiêu | đề       | của | khung | cấu hình | báo |
cáo.
| parent_id   |     |     | int |     |     | Khóa                    |      | ngoại | tham | chiếu | đến    |
| ----------- | --- | --- | --- | --- | --- | ----------------------- | ---- | ----- | ---- | ----- | ------ |
|             |     |     |     |     |     | report_config_frame.id, |      |       |      |       | hỗ trợ |
|             |     |     |     |     |     | cấu                     | trúc | phân  | cấp. |       |        |
| template_id |     |     | int |     |     | Khóa                    |      | ngoại | tham | chiếu | đến    |
report_config_template.id.
|     | Bảng | 4.39: |     | Chú thích | bảng |     |     |     |     |     |     |
| --- | ---- | ----- | --- | --------- | ---- | --- | --- | --- | --- | --- | --- |
report_config_frame
|     |     |     | là  | bảng | lưu trữ | các | khung | cấu hình | báo | cáo nằm | trong |
| --- | --- | --- | --- | ---- | ------- | --- | ----- | -------- | --- | ------- | ----- |
report_config_frame
| các báo                               | cáo mẫu. |       |     |      |         |      |          |       |     |             |     |
| ------------------------------------- | -------- | ----- | --- | ---- | ------- | ---- | -------- | ----- | --- | ----------- | --- |
| 4.3.4.2                               | Các      | bảng  | dữ  | liệu | của Cấu | hình | khung    | báo   | cáo |             |     |
|                                       | Hình     | 4.16: | Các | bảng | dữ liệu | của  | Cấu hình | khung | báo | cáo         |     |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |          |       |     |      |         |      |          |       |     | Trang88/148 |     |

|        | Trường | Đại  | học          | Bách | Khoa     | -     | ĐHQG-HCM |          |      |       |       |
| ------ | ------ | ---- | ------------ | ---- | -------- | ----- | -------- | -------- | ---- | ----- | ----- |
|        | Khoa   | Khoa | học          | và   | Kỹ thuật | Máy   |          | Tính     |      |       |       |
| Tên    | trường |      | Kiểu         | dữ   | liệu     | Mô    | tả       |          |      |       |       |
| id     |        |      | int          |      |          | Khóa  | chính,   | tự động  |      | tăng. |       |
| title  |        |      | varchar(500) |      |          | Tiêu  | đề       | báo cáo. |      |       |       |
| status |        |      | varchar(50)  |      |          | Trạng |          | thái báo | cáo, | tham  | chiếu |
đến quy_trinh_step.
| create_at |     |     | bigint      |     |     | Thời | gian | tạo báo   | cáo, | mặc   | định. |
| --------- | --- | --- | ----------- | --- | --- | ---- | ---- | --------- | ---- | ----- | ----- |
| create_by |     |     | varchar(10) |     |     | Số   | hiệu | công chức | của  | người | tạo   |
báo cáo.
| start_time |     |     | bigint |     |     | Thời | gian | bắt đầu | thực | hiện | báo |
| ---------- | --- | --- | ------ | --- | --- | ---- | ---- | ------- | ---- | ---- | --- |
cáo.
| end_time |     |     | bigint |     |     | Thời | gian | kết thúc | thực | hiện | báo |
| -------- | --- | --- | ------ | --- | --- | ---- | ---- | -------- | ---- | ---- | --- |
cáo.
| note |     |      | text  |     |       | Ghi  | chú | của báo | cáo. |     |     |
| ---- | --- | ---- | ----- | --- | ----- | ---- | --- | ------- | ---- | --- | --- |
|      |     | Bảng | 4.40: | Chú | thích | bảng |     |         |      |     |     |
report_monthly
| Tên      | trường |     | Kiểu        | dữ  | liệu | Mô   | tả     |            |     |       |      |
| -------- | ------ | --- | ----------- | --- | ---- | ---- | ------ | ---------- | --- | ----- | ---- |
| id       |        |     | int         |     |      | Khóa | chính, | tự động    |     | tăng. |      |
| step_key |        |     | varchar(20) |     |      | Mã   | của    | bước trong | quy | trình | quản |
lý báo cáo.
| step_name                             |            |           | varchar(100) |      |                                | Tên  | bước   | trong quy | trình.   |             |       |
| ------------------------------------- | ---------- | --------- | ------------ | ---- | ------------------------------ | ---- | ------ | --------- | -------- | ----------- | ----- |
| step_no                               |            |           | int          |      |                                | Thứ  | tự     | thực hiện | của      | bước.       |       |
|                                       | Bảng       | 4.41: Chú | thích        | bảng | report_monthly_quy_trinh_step  |      |        |           |          |             |       |
| Tên                                   | trường     |           | Kiểu         | dữ   | liệu                           | Mô   | tả     |           |          |             |       |
| ma                                    |            |           | varchar(20)  |      |                                | Khóa | chính, | mã        | loại cột | dữ          | liệu. |
| default_title                         |            |           | varchar(200) |      |                                | Tiêu | đề     | mặc định  | của      | cột.        |       |
|                                       | Bảng 4.42: | Chú       | thích        | bảng | report_monthly_dm_frame_column |      |        |           |          |             |       |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |            |           |              |      |                                |      |        |           |          | Trang89/148 |       |

Trường Đại học Bách Khoa - ĐHQG-HCM
Khoa Khoa học và Kỹ thuật Máy Tính
Tên trường Kiểu dữ liệu Mô tả
id int Khóa chính, tự động tăng.
title varchar(200) Tiêu đề hiển thị của cột trong báo
cáo.
column_key varchar(20) Khóa ngoại tham chiếu
dm_frame_column.ma.
priority int Thứ tự hiển thị của cột trong báo
cáo (Từ trái sang phải).
frame_id int Khóa ngoại tham chiếu
report_monthly_frame.id.
Bảng 4.43: Chú thích bảng report_monthly_frame_column
Tên trường Kiểu dữ liệu Mô tả
id int Khóa chính, tự động tăng.
title varchar(500) Tên tab/mục hiển thị của báo cáo.
report_id int Khóa ngoại tham chiếu
report_monthly.id.
parent_id int Khóa ngoại tham chiếu chính
tab/mục cha tạo cấu trúc phân
cấp.
priority int Thứ tự hiển thị của tab/mục trong
báo cáo (Từ trái sang phải).
Bảng 4.44: Chú thích bảng report_monthly_frame
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang90/148

|          | Trường | Đại  | học         | Bách | Khoa     | -                          | ĐHQG-HCM |               |          |          |         |
| -------- | ------ | ---- | ----------- | ---- | -------- | -------------------------- | -------- | ------------- | -------- | -------- | ------- |
|          | Khoa   | Khoa | học         | và   | Kỹ thuật | Máy                        |          | Tính          |          |          |         |
| Tên      | trường |      | Kiểu        | dữ   | liệu     | Mô                         | tả       |               |          |          |         |
| id       |        |      | int         |      |          | Khóa                       |          | chính, tự     | động     | tăng.    |         |
| shcc     |        |      | varchar(20) |      |          | Sốhiệucôngchứccủacánhânđảm |          |               |          |          |         |
|          |        |      |             |      |          | nhận                       | thực     | hiện          | mục      | báo cáo. |         |
| don_vi   |        |      | varchar(20) |      |          | Mã                         | đơn      | vị đảm        | nhận     | thực     | hiện    |
|          |        |      |             |      |          | mục                        | báo      | cáo.          |          |          |         |
| frame_id |        |      | int         |      |          | Khóa                       |          | ngoại tham    | chiếu    | đến      | mục     |
|          |        |      |             |      |          | báo                        | cáo      | report_frame. |          |          |         |
| role     |        |      | varchar(50) |      |          | Vai                        | trò      | của cá        | nhân/đơn |          | vị thực |
hiện.
|     |     | Bảng 4.45: | Chú | thích | bảng |     |     |     |     |     |     |
| --- | --- | ---------- | --- | ----- | ---- | --- | --- | --- | --- | --- | --- |
report_monthly_assign
| Tên    | trường |     | Kiểu        | dữ  | liệu | Mô   | tả   |           |      |      |       |
| ------ | ------ | --- | ----------- | --- | ---- | ---- | ---- | --------- | ---- | ---- | ----- |
| id     |        |     | uuid        |     |      | Khóa |      | chính.    |      |      |       |
| shcc   |        |     | varchar(20) |     |      | Số   | hiệu | công chức | của  | cá   | nhân. |
| don_vi |        |     | varchar(20) |     |      | Mã   | đơn  | vị mà cá  | nhân | đang | công  |
tác.
| chuc_vu  |     |     | varchar(20)  |     |     | Chức |      | vụ của cá | nhân | trong | đơn vị |
| -------- | --- | --- | ------------ | --- | --- | ---- | ---- | --------- | ---- | ----- | ------ |
|          |     |     |              |     |     | đang | công | tác.      |      |       |        |
| role_key |     |     | varchar(100) |     |     | Khóa |      | ngoại     | tham |       | chiếu  |
report_role.role_key.
|     |     | Bảng | 4.46: | Chú | thích bảng |     |     |     |     |     |     |
| --- | --- | ---- | ----- | --- | ---------- | --- | --- | --- | --- | --- | --- |
report_user_role
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     |     | Trang91/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

Trường Đại học Bách Khoa - ĐHQG-HCM
Khoa Khoa học và Kỹ thuật Máy Tính
4.3.4.3 Các bảng dữ liệu của Nội dung báo cáo
Hình 4.17: Các bảng dữ liệu của Nội dung báo cáo
Tên trường Kiểu dữ liệu Mô tả
id int Khóa chính, tự động tăng.
type varchar(20) Mã loại quy trình.
name varchar(50) Tên quy trình.
active boolean Trạng thái hoạt động.
Bảng 4.47: Chú thích bảng report_monthly_content_quy_trinh
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang92/148

|              | Trường | Đại  | học          | Bách | Khoa |       | - ĐHQG-HCM |        |         |            |       |
| ------------ | ------ | ---- | ------------ | ---- | ---- | ----- | ---------- | ------ | ------- | ---------- | ----- |
|              | Khoa   | Khoa | học          | và   | Kỹ   | thuật | Máy        | Tính   |         |            |       |
| Tên          | trường |      | Kiểu         | dữ   | liệu | Mô    | tả         |        |         |            |       |
| id           |        |      | int          |      |      | Khóa  |            | chính, | tự động | tăng.      |       |
| step_key     |        |      | varchar(20)  |      |      | Mã    | bước       | của    | quy     | trình.     |       |
| step_name    |        |      | varchar(100) |      |      | Tên   | bước       | thực   | hiện.   |            |       |
| step_no      |        |      | int          |      |      | Thứ   | tự         | bước   | trong   | quy trình. |       |
| quy_trinh_id |        |      | int          |      |      | Khóa  |            |        | ngoại   | tham       | chiếu |
content_quy_trinh.
| color |     |     | varchar(20) |     |     | Mã  | màu | hiển | thị | cho bước. |     |
| ----- | --- | --- | ----------- | --- | --- | --- | --- | ---- | --- | --------- | --- |
Bảng 4.48: Chú thích bảng report_monthly_content_quy_trinh_step
| Tên      | trường |     | Kiểu          | dữ  | liệu | Mô   | tả  |        |         |       |       |
| -------- | ------ | --- | ------------- | --- | ---- | ---- | --- | ------ | ------- | ----- | ----- |
| id       |        |     | int           |     |      | Khóa |     | chính, | tự động | tăng. |       |
| name     |        |     | varchar(1000) |     |      | Tên  | nội | dung   | báo     | cáo.  |       |
| frame_id |        |     | int           |     |      | Khóa |     |        | ngoại   | tham  | chiếu |
report_monthly_frame.id.
| shcc         |     |     | varchar(20) |     |     | Người                   |     | tạo   | nội dung. |      |        |
| ------------ | --- | --- | ----------- | --- | --- | ----------------------- | --- | ----- | --------- | ---- | ------ |
| don_vi       |     |     | varchar(20) |     |     | Đơn                     | vị  | của   | người     | tạo. |        |
| is_deleted   |     |     | boolean     |     |     | Trạngtháixóamềm,mặcđịnh |     |       |           |      | false. |
| type         |     |     | varchar(20) |     |     | Loại                    | nội | dung. |           |      |        |
| quy_trinh_id |     |     | int         |     |     | Khóa                    |     |       | ngoại     | tham | chiếu  |
content_quy_trinh.
| step_no   |      |       | int    |       |      | Bước | hiện |      | tại trong | quy trình. |     |
| --------- | ---- | ----- | ------ | ----- | ---- | ---- | ---- | ---- | --------- | ---------- | --- |
| key       |      |       | uuid   |       |      | Khóa |      | nhận | diện      | duy nhất.  |     |
| create_at |      |       | bigint |       |      | Thời | điểm |      | tạo.      |            |     |
|           | Bảng | 4.49: | Chú    | thích | bảng |      |      |      |           |            |     |
report_monthly_content
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     |     | Trang93/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

Trường Đại học Bách Khoa - ĐHQG-HCM
Khoa Khoa học và Kỹ thuật Máy Tính
Tên trường Kiểu dữ liệu Mô tả
id int Khóa chính, tự động tăng.
content_id int Khóa ngoại tham chiếu
report_monthly_content.id.
result varchar Kết quả thực hiện nội dung báo
cáo.
concern varchar Lưu ý, vấn đề còn tồn tại.
opinion varchar Ý kiến đề xuất.
progress int Mức độ hoàn thành (phần trăm).
duration varchar Thời gian thực hiện.
shcc varchar(20) Số hiệu công chức của người thực
hiện nội dung.
don_vi varchar(20) Mã đơn vị thực hiện nội dung báo
cáo.
Bảng 4.50: Chú thích bảng report_monthly_content_item
Tên trường Kiểu dữ liệu Mô tả
role_key varchar(20) Khóa chính.
role_name varchar(100) Tên vai trò.
active boolean Trạng thái hoạt động của vai trò.
priority int Thứ tự ưu tiên của vai trò.
Bảng 4.51: Chú thích bảng report_monthly_role
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang94/148

|         | Trường | Đại  | học  | Bách | Khoa     | - ĐHQG-HCM  |         |       |       |
| ------- | ------ | ---- | ---- | ---- | -------- | ----------- | ------- | ----- | ----- |
|         | Khoa   | Khoa | học  | và   | Kỹ thuật | Máy         | Tính    |       |       |
| Tên     | trường |      | Kiểu | dữ   | liệu     | Mô tả       |         |       |       |
| id      |        |      | int  |      |          | Khóa chính, | tự động | tăng. |       |
| item_id |        |      | int  |      |          | Khóa        | ngoại   | tham  | chiếu |
report_monthly_content_item.
| shcc                                  |      |       | varchar(20) |       |      | Số hiệu                    | công chức.   |               |             |
| ------------------------------------- | ---- | ----- | ----------- | ----- | ---- | -------------------------- | ------------ | ------------- | ----------- |
| don_vi                                |      |       | varchar(20) |       |      | Mã đơn                     | vị công tác. |               |             |
| role                                  |      |       | varchar(50) |       |      | Vai trò                    | trong nội    | dung báo cáo, | tham        |
|                                       |      |       |             |       |      | chiếu report_monthly_role. |              |               |             |
| create_at                             |      |       | bigint      |       |      | Thời điểm                  | tạo, mặc     | định.         |             |
| create_by                             |      |       | varchar(20) |       |      | Số hiệu                    | công chức    | của người     | thêm cá     |
|                                       |      |       |             |       |      | nhân vào                   | danh sách    | thành viên.   |             |
|                                       | Bảng | 4.52: | Chú         | thích | bảng | report_monthly_member      |              |               |             |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |      |       |             |       |      |                            |              |               | Trang95/148 |

|         | Trường | Đại  | học Bách | Khoa      | - ĐHQG-HCM |      |     |     |
| ------- | ------ | ---- | -------- | --------- | ---------- | ---- | --- | --- |
|         | Khoa   | Khoa | học và   | Kỹ thuật  | Máy        | Tính |     |     |
| 4.3.4.4 | Các    | bảng | dữ liệu  | tính năng | khác       |      |     |     |
Hình 4.18: Các bảng dữ liệu của Lịch sử chỉnh sửa báo cáo và Liên kết Công
việc
| Tên        | trường |     | Kiểu dữ | liệu | Chức | năng   |            |          |
| ---------- | ------ | --- | ------- | ---- | ---- | ------ | ---------- | -------- |
| id         |        |     | integer |      | Khóa | chính, | tự động    | tăng     |
| content_id |        |     | integer |      | Khóa | ngoại  | tham chiếu | đến bảng |
report_monthly_content
| item_id |     |     | integer |     | Khóa | ngoại | tham chiếu | đến bảng |
| ------- | --- | --- | ------- | --- | ---- | ----- | ---------- | -------- |
report_monthly_content_item
| task_id |     |     | integer |     | Khóa | ngoại | tham chiếu | đến bảng |
| ------- | --- | --- | ------- | --- | ---- | ----- | ---------- | -------- |
task_general
|                                       | Bảng | 4.53: | Chú thích | bảng | report_monthly_task |     |     |             |
| ------------------------------------- | ---- | ----- | --------- | ---- | ------------------- | --- | --- | ----------- |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |      |       |           |      |                     |     |     | Trang96/148 |

|     | Trường | Đại học  | Bách  | Khoa - ĐHQG-HCM |      |
| --- | ------ | -------- | ----- | --------------- | ---- |
|     | Khoa   | Khoa học | và Kỹ | thuật Máy       | Tính |
report_monthly_task là bảng dữ liệu lưu trữ thông tin liên kết giữa Công
với cáo, cho phép người dùng thực hiện tạo nhanh nội dung báo
| việc    | Báo      |           |            |          |      |
| ------- | -------- | --------- | ---------- | -------- | ---- |
| cáo từ  | các công | việc liên | quan.      |          |      |
| 4.3.5   | Bảng     | dữ liệu   | phân       | hệ Công  | việc |
| 4.3.5.1 | Các      | bảng dữ   | liệu chính | của Công | việc |
Hình 4.19: Các bảng dữ liệu của Tổng hợp các góp ý dự thảo, thông tư, quyết
định,...
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang97/148

|               | Trường | Đại  | học          | Bách | Khoa     | - ĐHQG-HCM |       |           |       |     |
| ------------- | ------ | ---- | ------------ | ---- | -------- | ---------- | ----- | --------- | ----- | --- |
|               | Khoa   | Khoa | học          | và   | Kỹ thuật | Máy        | Tính  |           |       |     |
| Tên           | trường |      | Kiểu         | dữ   | liệu     | Chức       | năng  |           |       |     |
| ma            |        |      | varchar(100) |      |          | Khóa       | chính | loại công | việc  |     |
| ten           |        |      | varchar(255) |      |          | Tên        | loại  | công việc |       |     |
| is_lien_phong |        |      | boolean      |      |          | Loại       | công  | việc liên | phòng | hay |
không
| active |     |     | boolean |     |     | Trạng | thái | hoạt động | của | loại công |
| ------ | --- | --- | ------- | --- | --- | ----- | ---- | --------- | --- | --------- |
việc
| mo_ta       |        |      | text        |       |           | Mô   | tả loại   | công việc     |           |      |
| ----------- | ------ | ---- | ----------- | ----- | --------- | ---- | --------- | ------------- | --------- | ---- |
| list_don_vi |        |      | jsonb       |       |           | Danh | sách      | đơn vị        | áp dụng   |      |
| create_at   |        |      | bigint      |       |           | Thời | gian      | tạo loại      | công      | việc |
| is_default  |        |      | boolean     |       |           | Có   | phải      | loại mặc định | không     |      |
|             |        | Bảng |             | 4.54: | Chú thích | bảng | task_type |               |           |      |
| Tên         | trường |      | Kiểu        | dữ    | liệu      | Chức | năng      |               |           |      |
| role_key    |        |      | varchar(20) |       |           | Khóa | chính     | của vai       | trò trong | phân |
hệ
|              |     |     |              |     |     | Công  |         | việc      |          |       |
| ------------ | --- | --- | ------------ | --- | --- | ----- | ------- | --------- | -------- | ----- |
| role_name    |     |     | varchar(255) |     |     | Tên   | vai     | trò       |          |       |
| permission   |     |     | text         |     |     | Danh  | sách    | quyền     | của vai  | trò   |
| active       |     |     | boolean      |     |     | Trạng | thái    | hoạt động |          |       |
| is_chi_dao   |     |     | boolean      |     |     | Giá   | trị cho | biết vai  | trò chỉ  | đạo.  |
| is_thuc_hien |     |     | boolean      |     |     | Giá   | trị cho | biết vai  | trò thực | hiện. |
| task_type    |     |     | varchar(100) |     |     | Khóa  | ngoại   | tham      | chiếu    | bảng  |
task_type
|     |     | Bảng |     | 4.55: | Chú thích | bảng |     |     |     |     |
| --- | --- | ---- | --- | ----- | --------- | ---- | --- | --- | --- | --- |
task_role
| Bảng |     | lưu | danh | sách | các loại | vai trò | trong | phân | hệ Công | việc. |
| ---- | --- | --- | ---- | ---- | -------- | ------- | ----- | ---- | ------- | ----- |
task_role
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     | Trang98/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

|                 | Trường | Đại  | học           | Bách    | Khoa  | - ĐHQG-HCM |              |           |           |            |       |
| --------------- | ------ | ---- | ------------- | ------- | ----- | ---------- | ------------ | --------- | --------- | ---------- | ----- |
|                 | Khoa   | Khoa | học           | và Kỹ   | thuật | Máy        | Tính         |           |           |            |       |
| Tên             | trường |      | Kiểu          | dữ      | liệu  | Chức       | năng         |           |           |            |       |
| id              |        |      | integer       |         |       | Khóa       | chính,       | tự        | động      | tăng.      |       |
| title           |        |      | text          |         |       | Tiêu       | đề công      | việc.     |           |            |       |
| parent_id       |        |      | integer       |         |       | Khóa       | ngoại        | tham      | chiếu     | công       | việc. |
| description     |        |      | varchar(1000) |         |       | Mô tả      | công         | việc.     |           |            |       |
| priority        |        |      | varchar(50)   |         |       | Mức độ     | ưu           | tiên.     |           |            |       |
| level           |        |      | varchar(50)   |         |       | Cấp độ     | công         | việc.     |           |            |       |
| status          |        |      | varchar(50)   |         |       | Trạng      | thái         | công      | việc.     |            |       |
| start_time      |        |      | bigint        |         |       | Thời       | gian         | bắt đầu   | .         |            |       |
| end_time        |        |      | bigint        |         |       | Thời       | gian         | kết thúc. |           |            |       |
| create_by       |        |      | varchar(50)   |         |       | Người      | tạo          | công      | việc.     |            |       |
| create_at       |        |      | bigint        |         |       | Thời       | gian         | tạo .     |           |            |       |
| progress        |        |      | numeric       |         |       | Tiến       | độ công      | việc      | (default: |            | 0).   |
| task_type       |        |      | varchar(100)  |         |       | Khóa       | ngoại        | tham      | chiếu     | task_type. |       |
| is_subtask_type |        |      | boolean       |         |       | Có phải    | công         | việc      | con.      |            |       |
| done_at         |        |      | bigint        |         |       | Thời       | gian         | hoàn      | thành.    |            |       |
|                 |        | Bảng | 4.56:         | Chú     | thích | bảng       | task_general |           |           |            |       |
| Tên             | trường |      | Kiểu          | dữ liệu | Chức  |            | năng         |           |           |            |       |
| task_type       |        |      | varchar(100)  |         | Khoá  | chính      |              | tham      | chiếu     | đến        |       |
task_type
| role_key |     |     | varchar(100) |     | Khóa | chính |     | tham | chiếu | đến |     |
| -------- | --- | --- | ------------ | --- | ---- | ----- | --- | ---- | ----- | --- | --- |
task_role
role_name varchar(255) Tên vai trò áp dụng cho loại công việc
| permission   |     |      | text    |     | Quyền |      | áp dụng    | cho       | loại      | công      | việc  |
| ------------ | --- | ---- | ------- | --- | ----- | ---- | ---------- | --------- | --------- | --------- | ----- |
| is_chi_dao   |     |      | boolean |     | Quyền |      | chỉ đạo    | (default: |           | false)    |       |
| is_thuc_hien |     |      | boolean |     | Quyền |      | thực       | hiện      | (default: | false)    |       |
| active       |     |      | boolean |     | Trạng | thái | hoạt       | động      |           | (default: | true) |
| priority     |     |      | int     |     | Độ    | ưu   | tiên trong |           | loại công | việc      |       |
|              |     | Bảng | 4.57:   | Chú | thích | bảng |            |           |           |           |       |
task_type_role
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     |     | Trang99/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------- |

|         | Trường | Đại  | học | Bách | Khoa     | - ĐHQG-HCM |      |      |     |     |
| ------- | ------ | ---- | --- | ---- | -------- | ---------- | ---- | ---- | --- | --- |
|         | Khoa   | Khoa | học | và   | Kỹ thuật | Máy        | Tính |      |     |     |
| 4.3.5.2 | Các    | bảng | dữ  | liệu | thành    | phần Công  |      | việc |     |     |
Hình 4.20: Các bảng dữ liệu của Tổng hợp các góp ý dự thảo, thông tư, quyết
định,...
| Tên     | trường |     | Kiểu    | dữ  | liệu | Chức  | năng  |            |           |     |
| ------- | ------ | --- | ------- | --- | ---- | ----- | ----- | ---------- | --------- | --- |
| id      |        |     | int     |     |      | Khóa  | chính | của mục    | kiểm.     |     |
| title   |        |     | text    |     |      | Tiêu  | đề    | của từng   | mục kiểm. |     |
| is_done |        |     | boolean |     |      | Trạng | thái  | hoàn thành | của       | mục |
kiểm.
| create_by |     |     | varchar(10) |     |     | Số  | hiệu | công chức | của người | tạo |
| --------- | --- | --- | ----------- | --- | --- | --- | ---- | --------- | --------- | --- |
mục kiểm.
| create_at |     |     | bigint      |     |     | Thời | điểm | tạo mục   | kiểm.     |       |
| --------- | --- | --- | ----------- | --- | --- | ---- | ---- | --------- | --------- | ----- |
| handle_by |     |     | varchar(10) |     |     | Số   | hiệu | công chức | của người | xử lý |
mục kiểm.
| task_id |     |     | int |     |     | Khóa | ngoại | tham | chiếu | bảng |
| ------- | --- | --- | --- | --- | --- | ---- | ----- | ---- | ----- | ---- |
task_general.id.
|     |     | Bảng | 4.58: | Chú | thích | bảng |     |     |     |     |
| --- | --- | ---- | ----- | --- | ----- | ---- | --- | --- | --- | --- |
task_checklist
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     | Trang100/148 |     |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | ------------ | --- |

|         | Trường | Đại  | học  | Bách | Khoa | - ĐHQG-HCM |        |       |      |      |       |
| ------- | ------ | ---- | ---- | ---- | ---- | ---------- | ------ | ----- | ---- | ---- | ----- |
|         | Khoa   | Khoa | học  | và   | Kỹ   | thuật Máy  | Tính   |       |      |      |       |
| Tên     | trường |      | Kiểu | dữ   | liệu | Chức       | năng   |       |      |      |       |
| id      |        |      | int  |      |      | Khóa       | chính, | tự    | động | tăng |       |
| task_id |        |      | int  |      |      | Khóa       |        | ngoại | tham |      | chiếu |
task_general.id
| shcc      |        |      | varchar(10)   |     |       | Số hiệu            | công     | chức     | cập  | nhật tiến | độ    |
| --------- | ------ | ---- | ------------- | --- | ----- | ------------------ | -------- | -------- | ---- | --------- | ----- |
| progress  |        |      | numeric       |     |       | Giá                | trị tiến | độ (Từ   | 0    | đến 100)  |       |
| note      |        |      | text          |     |       | Ghi                | chú      | tiến độ  |      |           |       |
| create_at |        |      | bigint        |     |       | Thời               | gian     | cập nhật | tiến | độ        |       |
|           |        | Bảng | 4.59:         | Chú | thích | bảng task_progress |          |          |      |           |       |
| Tên       | trường |      | Kiểu          | dữ  | liệu  | Chức               |          | năng     |      |           |       |
| id        |        |      | int           |     |       | Khóa               | chính,   | tự       | động | tăng.     |       |
| content   |        |      | varchar(1000) |     |       | Nội                | dung     | trao     | đổi. |           |       |
| task_id   |        |      | int           |     |       | Khóa               |          | ngoại    | tham |           | chiếu |
task_general.id.
| reply_to |     |     | int |     |     | Tham | chiếu | đến | cho | việc | đang |
| -------- | --- | --- | --- | --- | --- | ---- | ----- | --- | --- | ---- | ---- |
id
|                                       |     |      |             |     |       | phản   | hồi.         |           |      |              |     |
| ------------------------------------- | --- | ---- | ----------- | --- | ----- | ------ | ------------ | --------- | ---- | ------------ | --- |
| create_by                             |     |      | varchar(10) |     |       | Số     | hiệu         | công chức | của  | người        | tạo |
|                                       |     |      |             |     |       | ý kiến |              | trao đổi. |      |              |     |
| create_at                             |     |      | bigint      |     |       | Thời   | gian         | tạo .     |      |              |     |
| type                                  |     |      | varchar(50) |     |       | Loại   | ý            | kiến trao | đổi. |              |     |
|                                       |     | Bảng | 4.60:       | Chú | thích | bảng   | task_comment |           |      |              |     |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |      |             |     |       |        |              |           |      | Trang101/148 |     |

|         | Trường | Đại  | học  | Bách | Khoa     | - ĐHQG-HCM |       |         |      |     |
| ------- | ------ | ---- | ---- | ---- | -------- | ---------- | ----- | ------- | ---- | --- |
|         | Khoa   | Khoa | học  | và   | Kỹ thuật | Máy        | Tính  |         |      |     |
| Tên     | trường |      | Kiểu | dữ   | liệu     | Chức       | năng  |         |      |     |
| file_id |        |      | uuid |      |          | Khóa       | chính | tệp, tự | sinh |     |
| task_id |        |      | int  |      |          | Khóa       | ngoại | đến     |      |     |
task_general
| file_path        |     |     | varchar(255) |     |     | Đường |       | dẫn lưu trữ | tệp       |           |
| ---------------- | --- | --- | ------------ | --- | --- | ----- | ----- | ----------- | --------- | --------- |
| is_delete        |     |     | boolean      |     |     | Đánh  | dấu   | xóa tệp     | (default: | false)    |
| type             |     |     | varchar(50)  |     |     | Loại  | tệp   |             |           |           |
| task_progress_id |     |     | int          |     |     | Tham  | chiếu | tiến        | độ        |           |
| create_at        |     |     | bigint       |     |     | Thời  | điểm  | tải tệp     |           |           |
| create_by        |     |     | varchar(10)  |     |     | Số    | hiệu  | công chức   | của       | người tạo |
| file_name        |     |     | varchar(255) |     |     | Tên   | tệp   |             |           |           |
| comment_id       |     |     | int          |     |     | Khóa  | ngoại | đến         |           |           |
task_comment
|     |     | Bảng |     | 4.61: | Chú thích | bảng |     |     |     |     |
| --- | --- | ---- | --- | ----- | --------- | ---- | --- | --- | --- | --- |
task_file
| Tên                | trường |     |     | Kiểu        | dữ liệu | Chức  |      | năng           |       |      |
| ------------------ | ------ | --- | --- | ----------- | ------- | ----- | ---- | -------------- | ----- | ---- |
| id                 |        |     |     | int         |         | Khóa  |      | chính, tự động | tăng  |      |
| role               |        |     |     | varchar(50) |         | Vai   | trò  | của thành      | viên  |      |
| shcc               |        |     |     | varchar(10) |         | Số    | hiệu | công chức      | thành | viên |
| ma_don_vi          |        |     |     | varchar(10) |         | Mã    | đơn  | vị của thành   |       | viên |
| loai               |        |     |     | varchar(10) |         | Loại  | vai  | trò thành      | viên  |      |
| create_at          |        |     |     | bigint      |         | Thời  | gian | tạo            |       |      |
| create_by          |        |     |     | varchar(10) |         | Người |      | thêm thành     | viên  |      |
| ma_don_vi_creator  |        |     |     | varchar(10) |         | Đơn   | vị   | của người      | tạo   |      |
| ma_chuc_vu_creator |        |     |     | varchar(10) |         | Chức  |      | vụ của người   | tạo   |      |
| task_id            |        |     |     | int         |         | Khóa  |      | ngoại đến      |       |      |
task_general
|     |     | Bảng | 4.62: | Chú | thích | bảng |     |     |     |     |
| --- | --- | ---- | ----- | --- | ----- | ---- | --- | --- | --- | --- |
task_member
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     | Trang102/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ------------ |

|         | Trường | Đại  | học | Bách | Khoa     | - ĐHQG-HCM |      |     |     |
| ------- | ------ | ---- | --- | ---- | -------- | ---------- | ---- | --- | --- |
|         | Khoa   | Khoa | học | và   | Kỹ thuật | Máy        | Tính |     |     |
| 4.3.5.3 | Các    | bảng | dữ  | liệu | khác     |            |      |     |     |
Hình 4.21: Các bảng dữ liệu của Tổng hợp các góp ý dự thảo, thông tư, quyết
định,...
| Tên          | trường |     | Kiểu          | dữ  | liệu | Chức  | năng       |           |           |
| ------------ | ------ | --- | ------------- | --- | ---- | ----- | ---------- | --------- | --------- |
| ma           |        |     | varchar(50)   |     |      | Khóa  | chính      |           |           |
| ten          |        |     | varchar(1000) |     |      | Tên   | loại nhiệm | vụ        |           |
| ten_viet_tat |        |     | varchar(50)   |     |      | Tên   | viết tắt   |           |           |
| kich_hoat    |        |     | boolean       |     |      | Trạng | thái       | kích hoạt | (default: |
true)
|                                       |     | Bảng | 4.63: | Chú | thích | bảng | task_dm_loai |     |              |
| ------------------------------------- | --- | ---- | ----- | --- | ----- | ---- | ------------ | --- | ------------ |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |      |       |     |       |      |              |     | Trang103/148 |

|         | Trường | Đại  | học  | Bách | Khoa     | - ĐHQG-HCM |        |       |      |      |       |
| ------- | ------ | ---- | ---- | ---- | -------- | ---------- | ------ | ----- | ---- | ---- | ----- |
|         | Khoa   | Khoa | học  | và   | Kỹ thuật | Máy        | Tính   |       |      |      |       |
| Tên     | trường |      | Kiểu | dữ   | liệu     | Chức       | năng   |       |      |      |       |
| id      |        |      | int  |      |          | Khóa       | chính, | tự    | động | tăng |       |
| task_id |        |      | int  |      |          | Khóa       |        | ngoại |      | tham | chiếu |
task_general.id
| source |     |     | varchar(100) |     |     | Tham |     | chiếu |     | loại | nguồn |
| ------ | --- | --- | ------------ | --- | --- | ---- | --- | ----- | --- | ---- | ----- |
(task_dm_loai.ma)
| source_id  |     |     | int     |     |     | ID  | nguồn | dữ  | liệu liên | kết   |           |
| ---------- | --- | --- | ------- | --- | --- | --- | ----- | --- | --------- | ----- | --------- |
| can_delete |     |     | boolean |     |     | Có  | thể   | xóa | hay       | không | (default: |
false)
| source_uuid |     |      | uuid  |     |       | UUID | định | danh | nguồn |     |     |
| ----------- | --- | ---- | ----- | --- | ----- | ---- | ---- | ---- | ----- | --- | --- |
|             |     | Bảng | 4.64: | Chú | thích | bảng |      |      |       |     |     |
task_source
| Tên     | trường |     | Kiểu | dữ  | liệu | Chức | năng   |       |      |      |       |
| ------- | ------ | --- | ---- | --- | ---- | ---- | ------ | ----- | ---- | ---- | ----- |
| id      |        |     | int  |     |      | Khóa | chính, | tự    | động | tăng |       |
| task_id |        |     | int  |     |      | Khóa |        | ngoại |      | tham | chiếu |
task_general.id
| create_by |     |     | varchar(10) |     |     | Người | tạo  | log |      |     |          |
| --------- | --- | --- | ----------- | --- | --- | ----- | ---- | --- | ---- | --- | -------- |
| action    |     |     | varchar(50) |     |     | Loại  | hành |     | động |     | (update, |
create...)
| message                               |     |     | text   |       |           | Nội  | dung     | mô  | tả thay | đổi          |     |
| ------------------------------------- | --- | --- | ------ | ----- | --------- | ---- | -------- | --- | ------- | ------------ | --- |
| create_at                             |     |     | bigint |       |           | Thời | điểm     | tạo | log     |              |     |
|                                       |     |     | Bảng   | 4.65: | Chú thích | bảng | task_log |     |         |              |     |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |        |       |           |      |          |     |         | Trang104/148 |     |

|             | Trường | Đại  | học  | Bách | Khoa     | - ĐHQG-HCM |        |       |      |       |
| ----------- | ------ | ---- | ---- | ---- | -------- | ---------- | ------ | ----- | ---- | ----- |
|             | Khoa   | Khoa | học  | và   | Kỹ thuật | Máy        | Tính   |       |      |       |
| Tên         | trường |      | Kiểu | dữ   | liệu     | Chức       | năng   |       |      |       |
| id          |        |      | int  |      |          | Khóa       | chính, | tự    | động | tăng  |
| task_log_id |        |      | int  |      |          | Khóa       |        | ngoại | tham | chiếu |
task_log.id
| detail_id   |     |     | int         |     |     | ID   | chi tiết | thay | đổi     |         |
| ----------- | --- | --- | ----------- | --- | --- | ---- | -------- | ---- | ------- | ------- |
| detail_type |     |     | varchar(50) |     |     | Loại | chi      | tiết | (field, | member, |
file...)
| content |        |      | varchar(255) |     |            | Nội             | dung   | mô tả | chi tiết |       |
| ------- | ------ | ---- | ------------ | --- | ---------- | --------------- | ------ | ----- | -------- | ----- |
|         |        | Bảng | 4.66:        | Chú | thích bảng | task_log_detail |        |       |          |       |
| Tên     | trường |      | Kiểu         | dữ  | liệu       | Chức            | năng   |       |          |       |
| id      |        |      | int          |     |            | Khóa            | chính, | tự    | động     | tăng  |
| task_id |        |      | int          |     |            | Khóa            |        | ngoại | tham     | chiếu |
task_general.id
| shcc |     |      | varchar(10) |     |            | Người | nhận | thông | báo |     |
| ---- | --- | ---- | ----------- | --- | ---------- | ----- | ---- | ----- | --- | --- |
|      |     | Bảng | 4.67:       | Chú | thích bảng |       |      |       |     |     |
task_notification
| Tên     | trường |     | Kiểu | dữ  | liệu | Chức | năng |        |      |       |
| ------- | ------ | --- | ---- | --- | ---- | ---- | ---- | ------ | ---- | ----- |
| task_id |        |     | int  |     |      | Khóa |      | chính, | tham | chiếu |
task_general.id
| list_don_vi |     |      | jsonb       |     |       | Danh  | sách     | đơn vị    | nhận | nhiệm vụ |
| ----------- | --- | ---- | ----------- | --- | ----- | ----- | -------- | --------- | ---- | -------- |
| list_shcc   |     |      | jsonb       |     |       | Danh  | sách     | cá nhân   | nhận | nhiệm vụ |
| is_receive  |     |      | boolean     |     |       | Đã    | xác nhận | tiếp      | nhận | hay chưa |
| received_at |     |      | bigint      |     |       | Thời  | điểm     | tiếp nhận |      |          |
| shcc        |     |      | varchar(10) |     |       | Người | nhận     | nhiệm     | vụ   |          |
|             |     | Bảng | 4.68:       | Chú | thích | bảng  |          |           |      |          |
task_reception
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |     |     |     |     |     |     |     |     | Trang105/148 |
| ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ------------ |

| Chương |     | 5    |     |     |       |
| ------ | --- | ---- | --- | --- | ----- |
| HIỆN   |     | THỰC |     | HỆ  | THỐNG |
Các module sau quá trình phân tích thiết kế được hiện thực sẽ được thể hiện
trong chương này thông qua các giao diện người dùng (User Interface). Ở mỗi
module, giao diện sẽ minh họa trực quan với các tính năng chính yếu. Những
| tính năng | thứ yếu | sẽ được mô | tả ngắn | gọn bằng | lời. |
| --------- | ------- | ---------- | ------- | -------- | ---- |
106

|                                       | Trường | Đại học   | Bách      | Khoa - ĐHQG-HCM |                   |              |
| ------------------------------------- | ------ | --------- | --------- | --------------- | ----------------- | ------------ |
|                                       | Khoa   | Khoa học  | và Kỹ     | thuật Máy       | Tính              |              |
| 5.1                                   | Lịch   | công      | tác       |                 |                   |              |
| 5.1.1                                 | Phân   | quyền     | lịch      | công tác        |                   |              |
|                                       | Hình   | 5.1: Giao | diện phân | quyền trong     | phân hệ Lịch công | tác          |
| 5.1.2                                 | Quản   | lý phiếu  | đăng      | ký lịch         |                   |              |
|                                       |        | Hình 5.2: | Giao      | diện Quản lý    | phiếu đăng ký     |              |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |        |           |           |                 |                   | Trang107/148 |

Trường Đại học Bách Khoa - ĐHQG-HCM
Khoa Khoa học và Kỹ thuật Máy Tính
Hình 5.3: Biểu mẫu tạo phiếu mới
Hình 5.4: Giao diện Chi tiết phiếu đăng ký
Hình 5.5: Giao diện Tiếp nhận đăng ký lịch
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang108/148

|       | Trường | Đại học   | Bách      | Khoa - ĐHQG-HCM |                |
| ----- | ------ | --------- | --------- | --------------- | -------------- |
|       | Khoa   | Khoa học  | và Kỹ     | thuật Máy       | Tính           |
| 5.1.3 | Tạo    | và điều   | chỉnh     | lịch công       | tác            |
|       |        | Hình 5.6: | Biểu      | mẫu tạo và      | chỉnh sửa lịch |
| 5.1.4 | Tổng   | hợp       | lịch công | tác             |                |
|       |        | Hình 5.7: | Giao      | diện Quản lý    | tổng hợp lịch  |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang109/148

|       | Trường | Đại  | học  | Bách | Khoa     | -    | ĐHQG-HCM |          |
| ----- | ------ | ---- | ---- | ---- | -------- | ---- | -------- | -------- |
|       | Khoa   | Khoa | học  | và   | Kỹ thuật | Máy  |          | Tính     |
|       |        | Hình | 5.8: | Biểu | mẫu bổ   | sung | thông    | tin thêm |
| 5.1.5 | Xem,   | liên | kết  | và   | xuất     | lịch | công     | tác      |
Hình 5.9: Giao diện Quản lý Xem lịch công tác trường cùng bộ lọc thời gian
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang110/148

| Trường | Đại học  | Bách  | Khoa  | - ĐHQG-HCM |      |
| ------ | -------- | ----- | ----- | ---------- | ---- |
| Khoa   | Khoa học | và Kỹ | thuật | Máy        | Tính |
Hình 5.10: Giao diện Quản lý Xem lịch công tác đơn vị cùng lựa chọn xuất
lịch
| Hình | 5.11: Biểu | mẫu thêm | thành | viên | vào lịch cấp trường |
| ---- | ---------- | -------- | ----- | ---- | ------------------- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang111/148

|     | Trường | Đại học  | Bách | Khoa     | - ĐHQG-HCM |      |     |     |
| --- | ------ | -------- | ---- | -------- | ---------- | ---- | --- | --- |
|     | Khoa   | Khoa học | và   | Kỹ thuật | Máy        | Tính |     |     |
Hình 5.12: Giao diện xem và liên kết lịch cá nhân vào Google Calendar
| 5.1.6                                 | Đăng | ký lịch    | gặp       | gỡ  | Ban   | Giám     | hiệu      |              |
| ------------------------------------- | ---- | ---------- | --------- | --- | ----- | -------- | --------- | ------------ |
|                                       | Hình | 5.13: Giao | diện Quản | lý  | và bộ | lọc danh | sách đăng | ký           |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |      |            |           |     |       |          |           | Trang112/148 |

| Trường | Đại   | học  | Bách | Khoa     | - ĐHQG-HCM |            |         |
| ------ | ----- | ---- | ---- | -------- | ---------- | ---------- | ------- |
| Khoa   | Khoa  | học  | và   | Kỹ thuật | Máy        | Tính       |         |
| Hình   | 5.14: | Biểu | mẫu  | tạo      | và chỉnh   | sửa đăng   | ký lịch |
| Hình   | 5.15: | Giao | diện | Xem      | và Chấp    | thuận đăng | ký lịch |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang113/148

|       | Trường | Đại   | học  | Bách  | Khoa     | - ĐHQG-HCM |       |       |     |           |
| ----- | ------ | ----- | ---- | ----- | -------- | ---------- | ----- | ----- | --- | --------- |
|       | Khoa   | Khoa  | học  | và    | Kỹ thuật | Máy        | Tính  |       |     |           |
| 5.2   | Xử     | lý    | văn  | bản   |          |            |       |       |     |           |
| 5.2.1 | Phân   | quyền |      | trong | phân     | hệ         | Xử    | lý    | văn | bản       |
|       | Hình   | 5.16: | Giao | diện  | phân     | quyền      | trong | Xử lý | văn | bản       |
| 5.2.2 | Tổng   | hợp   |      | các   | góp ý    | dự         | thoả, | thông |     | tư, quyết |
định,...
|                                       |     | Hình 5.17: |     | Giao | diện Quản | lý phiếu | thu | thập | góp | ý            |
| ------------------------------------- | --- | ---------- | --- | ---- | --------- | -------- | --- | ---- | --- | ------------ |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |     |            |     |      |           |          |     |      |     | Trang114/148 |

| Trường | Đại   | học Bách  | Khoa     | - ĐHQG-HCM |            |          |     |
| ------ | ----- | --------- | -------- | ---------- | ---------- | -------- | --- |
| Khoa   | Khoa  | học và    | Kỹ thuật | Máy        | Tính       |          |     |
| Hình   | 5.18: | Giao diện | Cấu      | hình phiếu | thu        | thập góp | ý   |
| Hình   | 5.19: | Giao diện | Thực     | hiện       | góp ý trên | văn      | bản |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang115/148

| Trường | Đại  | học | Bách | Khoa     | - ĐHQG-HCM |      |     |     |
| ------ | ---- | --- | ---- | -------- | ---------- | ---- | --- | --- |
| Khoa   | Khoa | học | và   | Kỹ thuật | Máy        | Tính |     |     |
(a) Biểu mẫu tạo, chỉnh sửa góp ý (b) Biểu mẫu phản hồi góp ý
|      |       | Hình | 5.20: | Các        | biểu mẫu | góp | ý       |       |
| ---- | ----- | ---- | ----- | ---------- | -------- | --- | ------- | ----- |
| Hình | 5.21: | Cửa  | sổ    | xuất phiếu | góp      | ý   | đã hoàn | thành |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang116/148

|       | Trường | Đại   | học | Bách  | Khoa  | - ĐHQG-HCM |      |     |
| ----- | ------ | ----- | --- | ----- | ----- | ---------- | ---- | --- |
|       | Khoa   | Khoa  | học | và Kỹ | thuật | Máy        | Tính |     |
| 5.2.3 | Tờ     | trình | nội | bộ    |       |            |      |     |
Hình 5.22: Giao diện Quản lý tờ trình nội bộ cùng bộ lọc trạng thái
|     |     | Hình | 5.23: | Giao diện | Cấu | hình | tờ trình nội | bộ  |
| --- | --- | ---- | ----- | --------- | --- | ---- | ------------ | --- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang117/148

| Trường | Đại        | học Bách   | Khoa - ĐHQG-HCM |          |           |     |
| ------ | ---------- | ---------- | --------------- | -------- | --------- | --- |
| Khoa   | Khoa       | học và Kỹ  | thuật Máy       | Tính     |           |     |
|        | Hình 5.24: | Giao diện  | Phê duyệt       | tờ       | trình nội | bộ  |
|        | Hình       | 5.25: Giao | diện Xuất       | tờ trình | nội       | bộ  |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang118/148

|       | Trường | Đại  | học Bách        | Khoa  | - ĐHQG-HCM |           |        |
| ----- | ------ | ---- | --------------- | ----- | ---------- | --------- | ------ |
|       | Khoa   | Khoa | học và Kỹ       | thuật | Máy        | Tính      |        |
| 5.2.4 | Phân   | phối | văn bản         |       |            |           |        |
|       |        | Hình | 5.26: Giao diện | danh  | sách       | phân phối | nội bộ |
|       |        | Hình | 5.27: Biểu mẫu  | khởi  | tạo        | phân phối | nội bộ |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang119/148

| Trường                                | Đại   | học  | Bách  | Khoa  | - ĐHQG-HCM |          |         |              |
| ------------------------------------- | ----- | ---- | ----- | ----- | ---------- | -------- | ------- | ------------ |
| Khoa                                  | Khoa  | học  | và Kỹ | thuật | Máy        | Tính     |         |              |
| Hình 5.28:                            | Giao  | diện | Cấu   | hình  | phân phối  | cho      | văn bản | trình ký     |
| Hình                                  | 5.29: | Giao | diện  | Xem   | và tiếp    | nhận các | phân    | phối         |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |       |      |       |       |            |          |         | Trang120/148 |

|       | Trường | Đại   | học   | Bách      | Khoa  | - ĐHQG-HCM |       |      |      |
| ----- | ------ | ----- | ----- | --------- | ----- | ---------- | ----- | ---- | ---- |
|       | Khoa   | Khoa  | học   | và Kỹ     | thuật | Máy        | Tính  |      |      |
|       |        | Hình  | 5.30: | Cửa sổ    | xem   | và tiếp    | nhận  | phân | phối |
| 5.3   | Báo    | cáo   |       |           |       |            |       |      |      |
| 5.3.1 | Phân   | quyền |       | trong     | phân  | hệ         | Báo   | cáo  |      |
|       |        | Hình  | 5.31: | Giao diện | phân  | quyền      | trong | Báo  | cáo  |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang121/148

|       | Trường | Đại        | học Bách   | Khoa     | - ĐHQG-HCM |          |          |
| ----- | ------ | ---------- | ---------- | -------- | ---------- | -------- | -------- |
|       | Khoa   | Khoa       | học và     | Kỹ thuật | Máy        | Tính     |          |
| 5.3.2 | Cấu    | hình       | khung      |          |            |          |          |
|       | Hình   | 5.32:      | Giao diện  | quản     | lý cấu     | hình mẫu | báo cáo  |
|       |        | Hình       | 5.33: Giao | diện     | cấu hình   | mẫu báo  | cáo      |
|       |        | Hình 5.34: | Giao diện  | Quản     | lý các     | báo cáo  | hiện tại |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang122/148

| Trường |      | Đại   | học   | Bách Khoa   | -    | ĐHQG-HCM |              |
| ------ | ---- | ----- | ----- | ----------- | ---- | -------- | ------------ |
| Khoa   | Khoa |       | học   | và Kỹ thuật | Máy  | Tính     |              |
|        |      | Hình  | 5.35: | Biểu mẫu    | tạo  | mới báo  | cáo          |
|        | Hình | 5.36: | Giao  | diện tổng   | quan | cấu      | trúc báo cáo |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang123/148

| Trường | Đại        | học Bách  | Khoa - ĐHQG-HCM |           |     |
| ------ | ---------- | --------- | --------------- | --------- | --- |
| Khoa   | Khoa       | học và Kỹ | thuật Máy       | Tính      |     |
|        | Hình       | 5.37: Cửa | sổ cấu hình     | khung báo | cáo |
|        | Hình 5.38: | Giao diện | chi tiết thực   | hiện báo  | cáo |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang124/148

| Trường |      | Đại học | Bách  | Khoa     | - ĐHQG-HCM |      |         |
| ------ | ---- | ------- | ----- | -------- | ---------- | ---- | ------- |
| Khoa   | Khoa | học     | và    | Kỹ thuật | Máy        | Tính |         |
|        | Hình | 5.39:   | Cửa   | sổ thực  | hiện nội   | dung | báo cáo |
|        |      | Hình    | 5.40: | Giao     | diện xem   | báo  | cáo     |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang125/148

| Trường   | Đại   | học | Bách       | Khoa  | -    | ĐHQG-HCM      |      |
| -------- | ----- | --- | ---------- | ----- | ---- | ------------- | ---- |
| Khoa     | Khoa  | học | và Kỹ      | thuật |      | Máy Tính      |      |
| 5.4 Công | việc  |     |            |       |      |               |      |
| Hình     | 5.41: |     | Giao diện  | tổng  | quan | quản lý công  | việc |
|          | Hình  |     | 5.42: Biểu | mẫu   | tạo  | công việc mới |      |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang126/148

| Trường | Đại học    | Bách       | Khoa  | - ĐHQG-HCM |           |      |
| ------ | ---------- | ---------- | ----- | ---------- | --------- | ---- |
| Khoa   | Khoa học   | và Kỹ      | thuật | Máy        | Tính      |      |
|        | Hình       | 5.43: Giao | diện  | chi tiết   | công      | việc |
|        | Hình 5.44: | Biểu       | mẫu   | triển      | khai công | tác  |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang127/148

| Chương | 6   |     |       |
| ------ | --- | --- | ----- |
| KIỂM   | THỬ | HỆ  | THỐNG |
Trong phạm vi chương này, nhóm sẽ liệt kê các phương pháp, kỹ thuật mà
nhóm đã sử dụng, các kết quả kiểm thử trước khi triển khai hệ thống thực tế.
128

Trường Đại học Bách Khoa - ĐHQG-HCM
Khoa Khoa học và Kỹ thuật Máy Tính
6.1 Kiểm thử đơn vị- Unit Testing
Để thực hiện kiểm thử đơn vị, nhóm sử dụng MOCHA Framework để tiến
hành Kiểm thử đơn vị (Unit testing) nhằm đảm bảo các chức năng hoạt động
chính xác và hiệu quả. Cụ thể, trong đoạn mã dưới đây, nhóm kiểm thử các
hàm xử lý ngày tháng, đảm bảo các chức năng liên quan đến dữ liệu thời gian
được thực thi đúng đắn và chính xác.
1. Ví dụ một vài kịch bản cho kiểm thử:
Hình 6.1: Các hàm cần kiểm thử Unit Testing 1
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang129/148

| Trường | Đại  | học  | Bách    | Khoa     | - ĐHQG-HCM |              |     |
| ------ | ---- | ---- | ------- | -------- | ---------- | ------------ | --- |
| Khoa   | Khoa | học  | và      | Kỹ thuật | Máy        | Tính         |     |
|        | Hình | 6.2: | Các hàm | cần      | kiểm thử   | Unit Testing | 2   |
|        | Hình | 6.3: | Kịch    | bản kiểm | thử        | Unit Testing | 1   |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang130/148

| Trường          | Đại       | học Bách  | Khoa -   | ĐHQG-HCM     |     |
| --------------- | --------- | --------- | -------- | ------------ | --- |
| Khoa            | Khoa      | học và Kỹ | thuật    | Máy Tính     |     |
|                 | Hình 6.4: | Kịch bản  | kiểm thử | Unit Testing | 2   |
| 2. Kết quả kiểm | thử:      |           |          |              |     |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang131/148

|     | Trường | Đại học   | Bách     | Khoa     | - ĐHQG-HCM |              |         |
| --- | ------ | --------- | -------- | -------- | ---------- | ------------ | ------- |
|     | Khoa   | Khoa học  | và Kỹ    | thuật    | Máy        | Tính         |         |
|     |        | Hình 6.5: | Kết      | quả kiểm | thử        | Unit Testing |         |
| 6.2 | Kiểm   | thử       | hệ thống |          | - System   |              | Testing |
Đối với Kiểm thử hệ thống (System testing), nhóm đã tiến hành thao tác từ
việc cấu hình danh mục, cũng như cấu hình quy trình duyệt. Ở phần này,
nhóm sẽ trình bày cụ thể việc kiểm thử luồng chức năng chính của hệ thống
| đăng  | ký tờ trình | nội bộ.   |     |       |     |     |     |
| ----- | ----------- | --------- | --- | ----- | --- | --- | --- |
| 6.2.1 | Cấu         | hình loại | tờ  | trình |     |     |     |
Chuyên viên Phòng Hành chính tiến hành thực hiện cấu hình các loại tờ trình
sẽ sử dụng trong quy trình nghiệp vụ. Người quản trị mở mục “Loại tờ trình”
và tạo mới các loại tờ trình, thiết lập các trường thông tin cần thiết của loại
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang132/148

| Trường | Đại  | học | Bách | Khoa     | -   | ĐHQG-HCM |     |     |
| ------ | ---- | --- | ---- | -------- | --- | -------- | --- | --- |
| Khoa   | Khoa | học | và   | Kỹ thuật |     | Máy Tính |     |     |
tờ trình đó. Khi loại tờ trình được kích hoạt, người dùng trong hệ thống có
thể bắt đầu sử dụng để lập tờ trình theo đúng cấu hình đã thiết lập trước đó.
| Hình | 6.6: | Danh | sách | các     | cấu hình | loại     | tờ trình | hiện có |
| ---- | ---- | ---- | ---- | ------- | -------- | -------- | -------- | ------- |
|      |      | Hình | 6.7: | Tạo một | loại     | tờ trình | mới      |         |
|      |      | Hình | 6.8: | Cấu     | hình     | loại tờ  | trình    |         |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang133/148

|       | Trường | Đại  | học Bách | Khoa     | - ĐHQG-HCM |      |     |
| ----- | ------ | ---- | -------- | -------- | ---------- | ---- | --- |
|       | Khoa   | Khoa | học và   | Kỹ thuật | Máy        | Tính |     |
| 6.2.2 | Khởi   | tạo  | tờ trình |          |            |      |     |
Sau khi cấu hình hoàn tất, người dùng có thể bắt đầu tạo tờ trình mới trên hệ
thống. Người dùng truy cập mục “Tờ trình nội bộ”, chọn loại tờ trình mong
muốn và điền thông tin theo biểu mẫu hiển thị. Trong quá trình kiểm thử,
nhóm sẽ tạo tờ trình “Xin nghỉ phép”, nhập nội dung mô tả, đính kèm tài
liệu và gửi tờ trình vào luồng duyệt. Khi người dùng gửi thành công, hệ thống
chuyển tờ trình sang trạng thái chờ duyệt và ghi nhận thời gian tạo lập.
|                                       | Hình | 6.9: | Danh       | sách các | tờ trình | đang chỉnh | sửa          |
| ------------------------------------- | ---- | ---- | ---------- | -------- | -------- | ---------- | ------------ |
|                                       |      |      | Hình 6.10: | Tạo      | một tờ   | trình mới  |              |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |      |      |            |          |          |            | Trang134/148 |

|       | Trường |      | Đại   | học Bách  | Khoa     | - ĐHQG-HCM |         |           |
| ----- | ------ | ---- | ----- | --------- | -------- | ---------- | ------- | --------- |
|       | Khoa   |      | Khoa  | học và    | Kỹ thuật | Máy        | Tính    |           |
|       |        | Hình | 6.11: | Chi tiết  | tờ trình | đang       | được    | chỉnh sửa |
|       |        |      | Hình  | 6.12: Chi | tiết     | tờ trình   | đã được | gửi       |
| 6.2.3 | Duyệt  |      | tờ    | trình     |          |            |         |           |
Sau khi tờ trình được gửi lên, người duyệt truy cập vào hệ thống để xem xét
và xử lý nội dung tờ trình. Ở mỗi bước duyệt, người duyệt có thể thực hiện
các thao tác: Trong quá trình kiểm thử, tờ trình được cấu hình để trải qua
hai bước duyệt: Phòng Hành chính → Văn phòng Ban Giám hiệu. Và mặc
| định | phải qua | Phòng |     | Hành chính | đầu | tiên. |     |     |
| ---- | -------- | ----- | --- | ---------- | --- | ----- | --- | --- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang135/148

Trường Đại học Bách Khoa - ĐHQG-HCM
Khoa Khoa học và Kỹ thuật Máy Tính
Hình 6.13: Chi tiết tờ trình đang chuẩn bị được duyệt
Hình 6.14: Chi tiết tờ trình đã chuẩn bị được duyệt
• Xem thông tin chi tiết của tờ trình
• Đưa ra ghi chú hoặc yêu cầu chỉnh sửa
• Từ chối phê duyệt
• Phê duyệt và chuyển tờ trình sang bước tiếp theo theo đúng cấu hình
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang136/148

|       | Trường | Đại học  | Bách  | Khoa  | - ĐHQG-HCM |     |     |
| ----- | ------ | -------- | ----- | ----- | ---------- | --- | --- |
|       | Khoa   | Khoa học | và Kỹ | thuật | Máy Tính   |     |     |
| 6.2.4 | Xuất   | file tờ  | trình |       |            |     |     |
Sau khi tờ trình được phê duyệt hoàn tất ở bước cuối cùng, hệ thống cho
phép người dùng xuất file tờ trình theo mẫu đã cấu hình sẵn. File có thể được
xuất dưới định dạng PDF, dựa trên nội dung tờ trình. Người dùng có thể tải
| file về                               | để lưu trữ, | gửi đi    | hoặc in   | ấn khi cần | thiết. |              |              |
| ------------------------------------- | ----------- | --------- | --------- | ---------- | ------ | ------------ | ------------ |
|                                       | Hình        | 6.15: Bản | xem trước | tờ trình   | chuẩn  | bị được xuất | file         |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |             |           |           |            |        |              | Trang137/148 |

|     | Trường     |      | Đại   | học Bách  | Khoa     | - ĐHQG-HCM |                 |
| --- | ---------- | ---- | ----- | --------- | -------- | ---------- | --------------- |
|     | Khoa       |      | Khoa  | học và Kỹ | thuật    | Máy        | Tính            |
|     |            | Hình | 6.16: | File Pdf  | tờ trình | đã         | được tải về máy |
| 6.3 | Automation |      |       | Testing   |          |            |                 |
Đối với kiểm thử tự động nhóm sử dụng công cụ Playwright sử dụng ngôn
ngữ JavaScript để thực hiện viêc kiểm thử toàn hệ thống. Vì để tránh dài
dòng trong bài báo cáo, nhóm sẽ chỉ trình bày các kịch bản liên quan đến
| Đăng    | ký lịch | công  | tác        | bao gồm: |      |     |     |
| ------- | ------- | ----- | ---------- | -------- | ---- | --- | --- |
| • Tạo   | một     | phiếu | đăng       | ký lịch  | công | tác |     |
| • Chỉnh |         | sửa   | phiếu đăng | ký lịch  | công | tác |     |
| • Thêm  |         | lịch  | vào phiếu  | đăng     | ký   |     |     |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang138/148

|         | Trường | Đại        | học   | Bách      | Khoa    | - ĐHQG-HCM |      |
| ------- | ------ | ---------- | ----- | --------- | ------- | ---------- | ---- |
|         | Khoa   | Khoa       | học   | và Kỹ     | thuật   | Máy        | Tính |
| • Chỉnh | sửa    | lịch       | trong | phiếu     | đăng ký |            |      |
| • Gửi   | phiếu  | đăng       | ký    |           |         |            |      |
| • Thu   | hồi    | phiếu      | đăng  | ký        |         |            |      |
| • Xóa   | lịch   | khỏi phiếu |       | đăng ký   |         |            |      |
| • Xóa   | phiếu  | đăng       | ký    | lịch công | tác     |            |      |
1. Ví dụ một vài kịch bản cho kiểm thử cho việc quản lý phiếu đăng ký lịch
| công | tác: |     |     |     |     |     |     |
| ---- | ---- | --- | --- | --- | --- | --- | --- |
Hình 6.17: Kịch bản kiểm thử Đăng ký Lịch công tác khi chạy Playwright
| 2. Kết | quả | kiểm thử: |     |     |     |     |     |
| ------ | --- | --------- | --- | --- | --- | --- | --- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang139/148

| Trường | Đại học  | Bách Khoa   | - ĐHQG-HCM |
| ------ | -------- | ----------- | ---------- |
| Khoa   | Khoa học | và Kỹ thuật | Máy Tính   |
Hình 6.18: Kết quả kiểm thử Đăng ký Lịch công tác khi chạy Playwright 1
Hình 6.19: Kết quả kiểm thử Đăng ký Lịch công tác khi chạy Playwright 2
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang140/148

|     | Trường | Đại học  | Bách | Khoa     | - ĐHQG-HCM |            |         |
| --- | ------ | -------- | ---- | -------- | ---------- | ---------- | ------- |
|     | Khoa   | Khoa học | và   | Kỹ thuật | Máy        | Tính       |         |
| 6.4 | Kiểm   | thử      | chấp | nhận     | -          | Acceptance | Testing |
Kiểm thử chấp nhận nhằm kiểm tra độ chấp nhận của hệ thống. Mục tiêu
là đánh giá sự đáp ứng của hệ thống đối với các yêu cầu nghiệp vụ. Trong
quá trình hiện thực hệ thống, nhóm và giảng viên hướng dẫn Thạc sĩ Nguyễn
Thanh Tùng ngoài việc nghiên cứu, khảo sát các quy trình tuyển sinh của
các cơ sở giáo dục đã nhận được góp ý xây dựng của đội ngũ chuyên viên
trường Đại học Bách Khoa Hồ Chí Minh, ĐHQG-HCM Trong đó, nhóm đã
tiến hành xây dựng và mở rộng dựa trên nền tảng quy trình đăng ký tuyển
sinh của trường Đại học Bách Khoa Hồ Chí Minh, ĐHQG-HCM và nhận thấy
khả năng đáp ứng nhu cầu không chỉ bên phía Đại học Bách Khoa Hồ Chí
| Minh,                                 | ĐHQG-HCM | mà  | còn cho | cả các | quy trình | khác |              |
| ------------------------------------- | -------- | --- | ------- | ------ | --------- | ---- | ------------ |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |          |     |         |        |           |      | Trang141/148 |

| Chương |      | 7   |         |      |
| ------ | ---- | --- | ------- | ---- |
| KẾT    | LUẬN |     | - HƯỚNG | PHÁT |
TRIỂN
Kết thúc quá trình phát triển dự án sau hai giai đoạn, sản phẩm đã được nỗ
lực hoàn thiện nhằm đáp ứng tối đa các nhu cầu đã đặt ra. Bên cạnh đó, một
số đề xuất cải tiến phát sinh trong quá trình thực hiện cũng được cân nhắc
| cho các giai | đoạn sau | này. |     |     |
| ------------ | -------- | ---- | --- | --- |
142

|     | Trường |      | Đại học | Bách | Khoa     | -   | ĐHQG-HCM |      |     |     |
| --- | ------ | ---- | ------- | ---- | -------- | --- | -------- | ---- | --- | --- |
|     | Khoa   | Khoa | học     | và   | Kỹ thuật |     | Máy      | Tính |     |     |
| 7.1 | Kết    | quả  | đạt     |      | được     |     |          |      |     |     |
Trong suốt thời gian thực hiện dự án, với sự giúp đỡ của giảng viên hướng dẫn
cũng như hỗ trợ nghiệp vụ từ trường Đại học Bách Khoa - ĐHQG TP.HCM,
bốn phân hệ (module) được hoàn thành, đạt được một số mục tiêu đã đề ra:
| 1.  | Với module | Lịch  | công | tác: |           |        |       |     |           |     |
| --- | ---------- | ----- | ---- | ---- | --------- | ------ | ----- | --- | --------- | --- |
|     | • Phân     | quyền | và   | bảo  | mật triệt | để các | thông |     | tin lịch. |     |
• Hoàn thiện phân hệ lịch với các tính năng hỗ trợ người dùng đăng
|     | ký, quản |     | lý lịch | nhanh | chóng, | tối | ưu. |     |     |     |
| --- | -------- | --- | ------- | ----- | ------ | --- | --- | --- | --- | --- |
• Kiểm soát tự động các thao tác nghiệp vụ trong quy trình đăng ký,
|     | phê | duyệt | lịch. |     |     |     |     |     |     |     |
| --- | --- | ----- | ----- | --- | --- | --- | --- | --- | --- | --- |
• Hỗ trợ người dùng xuất lịch, liên kết lịch với Google Calendar, cho
|     | phép       | đồng | bộ định |      | kỳ hoặc thủ | công | các | thay | đổi. |     |
| --- | ---------- | ---- | ------- | ---- | ----------- | ---- | --- | ---- | ---- | --- |
| 2.  | Với module | Xử   | lý văn  | bản: |             |      |     |      |      |     |
• Hoàn thành tích hợp thêm các tính năng cho Xử lý văn bản, vận
|     | dụng | phân | quyền | hiện | tại trong | module |     | để  | kiểm soát | thao tác. |
| --- | ---- | ---- | ----- | ---- | --------- | ------ | --- | --- | --------- | --------- |
• Đảm bảo đáp ứng các quy trình nghiệp vụ trong xử lý văn bản.
• Đơn giản, thân thiện hoá thao tác trong các tính năng để người dùng
|     | có thể | làm | quen | và  | sử dụng dễ | dàng | hơn. |     |     |     |
| --- | ------ | --- | ---- | --- | ---------- | ---- | ---- | --- | --- | --- |
• Tích hợp chức năng xuất ở cuối quy trình nhằm phục vụ cho nhu cầu
|     | lưu trữ    | cục   | bộ.  |     |         |         |      |      |     |          |
| --- | ---------- | ----- | ---- | --- | ------- | ------- | ---- | ---- | --- | -------- |
| 3.  | Với module | Báo   | cáo: |     |         |         |      |      |     |          |
|     | • Hoàn     | thiện | phân | hệ  | Báo cáo | với các | tính | năng | đã  | đề xuất. |
• Cấu hình báo cáo linh hoạt, người dùng toàn quyền thực hiện tuỳ
|                                       | chỉnh | cấu | trúc | báo cáo. |     |     |     |     |     |              |
| ------------------------------------- | ----- | --- | ---- | -------- | --- | --- | --- | --- | --- | ------------ |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |       |     |      |          |     |     |     |     |     | Trang143/148 |

|     | Trường |     | Đại  | học | Bách  | Khoa  | - ĐHQG-HCM |      |     |
| --- | ------ | --- | ---- | --- | ----- | ----- | ---------- | ---- | --- |
|     | Khoa   |     | Khoa | học | và Kỹ | thuật | Máy        | Tính |     |
• Kiểm soát quy trình thực hiện, tổng hợp báo cáo theo quy trình được
|     | đề  | xuất. |     |     |     |     |     |     |     |
| --- | --- | ----- | --- | --- | --- | --- | --- | --- | --- |
• Tích hợp chức năng xuất ở cuối quy trình nhằm phục vụ cho nhu cầu
|        | lưu    | trữ | cục   | bộ.   |         |      |     |               |             |
| ------ | ------ | --- | ----- | ----- | ------- | ---- | --- | ------------- | ----------- |
| 4. Với | module |     | Công  | việc: |         |      |     |               |             |
|        | • Hoàn |     | thiện | phân  | hệ Công | việc | với | các tính năng | đã đề xuất. |
• Kiểm soát quyền truy cập, thao tác trong từng công việc tuỳ theo
|        | vai    | trò | của    | người | dùng.   |        |       |          |                |
| ------ | ------ | --- | ------ | ----- | ------- | ------ | ----- | -------- | -------------- |
|        | • Kiểm |     | tra và | cập   | nhật tự | động   | trạng | thái cho | các công việc. |
| 5. Các | yêu    | cầu | phi    | chức  | năng    | chung: |       |          |                |
• Hệ thống đảm bảo thời gian hoạt động, tốc độ xử lý ổn định; đáp
|     | ứng    | được | số   | lượng | người | dùng      | lớn.  |           |             |
| --- | ------ | ---- | ---- | ----- | ----- | --------- | ----- | --------- | ----------- |
|     | • Dữ   | liệu | nhạy | cảm   | được  | mã hoá    | trong | quá trình | truyền tải. |
|     | • Giao | diện | tối  | ưu,   | thân  | thiện với | người | dùng.     |             |
| 7.2 | Hạn    |      | chế  |       |       |           |       |           |             |
Trong quá trình phát triển, nhóm không thể tránh khỏi mắc phải một số hạn
| chế khi | xây | dựng | hệ  | thống: |     |     |     |     |     |
| ------- | --- | ---- | --- | ------ | --- | --- | --- | --- | --- |
• Hệ thống được xây dựng bám sát vào yêu cầu đặc thù, dẫn đến hầu hết
cấu trúc trở nên cứng nhắc, khó khăn trong tái sử dụng hoặc mở rộng.
• Khả năng tùy chỉnh cho người dùng còn thấp, hạn chế năng lực sáng tạo
| của | người |     | sử dụng. |     |     |     |     |     |     |
| --- | ----- | --- | -------- | --- | --- | --- | --- | --- | --- |
• Cấu trúc giao diện còn rời rạc, chưa nhất quán giữa các phân hệ trong
| cùng |     | hệ thống. |     |     |     |     |     |     |     |
| ---- | --- | --------- | --- | --- | --- | --- | --- | --- | --- |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang144/148

|     | Trường |      | Đại   | học | Bách  | Khoa  | - ĐHQG-HCM |      |     |
| --- | ------ | ---- | ----- | --- | ----- | ----- | ---------- | ---- | --- |
|     | Khoa   | Khoa |       | học | và Kỹ | thuật | Máy        | Tính |     |
| 7.3 | Định   |      | hướng |     | trong |       | tương      | lai  |     |
Sau khi kết thúc hai giai đoạn phát triển, đến hiện tại các phân hệ đã đạt
được độ hoàn chỉnh nhất định. Tiếp sau đó sẽ là giai đoạn vận hành thực tế,
điều chỉnh tính năng và hỗ trợ người dùng. Ngoài ra, một số nhiệm vụ đang
| được   | cân nhắc | thực | hiện | trong | tương |       | lai:    |       |     |
| ------ | -------- | ---- | ---- | ----- | ----- | ----- | ------- | ----- | --- |
| • Phát | triển    | ứng  | dụng | cho   | hệ    | thống | trên di | dộng. |     |
• Cung cấp các tính năng thông báo cho người dùng ở các tính năng trọng
yếu.
| • Tối | ưu hoá | giao | diện, | mã  | nguồn |     | và các giải | thuật | xử lý. |
| ----- | ------ | ---- | ----- | --- | ----- | --- | ----------- | ----- | ------ |
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang145/148

| Tài | liệu |     | tham |     | khảo |     |
| --- | ---- | --- | ---- | --- | ---- | --- |
[1] Ant Financial Experience Technology. Ant Design Documentation. Truy
| cập | lần | cuối: 20:00 | 15/08/2025. |     |     |     |
| --- | --- | ----------- | ----------- | --- | --- | --- |
https://ant.design/docs/react/
introduce.
[2] Apache Software Foundation. Apache Kafka Documentation. Truy cập
lầncuối:15:3030/11/2025.https://kafka.apache.org/documentation/.
[3] Axios Contributors. Axios HTTP Client Documentation. Truy cập lần
| cuối: | 14:00 | 29/11/2025. |     | https://axios-http.com/. |     |     |
| ----- | ----- | ----------- | --- | ------------------------ | --- | --- |
[4] L. Bass, P. Clements and R. Kazman, Software Architecture in Practice,
| 4 edition. |     | Addison-Wesley, |     | 2021, | isbn: | 978-0136886099. |
| ---------- | --- | --------------- | --- | ----- | ----- | --------------- |
[5] Day.js Contributors. Day.js Documentation. Truy cập lần cuối: 18:00
| 04/12/2025. |     | https://day.js.org/. |     |     |     |     |
| ----------- | --- | -------------------- | --- | --- | --- | --- |
[6] dnd-kit Contributors. dnd-kit: Drag and Drop Toolkit for React. Truy
| cập | lần | cuối: 20:00 | 15/08/2025. |     | https://dndkit.com/. |     |
| --- | --- | ----------- | ----------- | --- | -------------------- | --- |
[7] DocxtemplaterTeam.DocxtemplaterDocumentation.Truycậplầncuối:
| 07:00 | 22/09/2025. |     | https://docxtemplater.com/docs/. |     |     |     |
| ----- | ----------- | --- | -------------------------------- | --- | --- | --- |
[8] ExcelJS Contributors. ExcelJS Documentation. Truy cập lần cuối: 09:00
| 02/10/2025. |     | https://github.com/exceljs/exceljs. |     |     |     |     |
| ----------- | --- | ----------------------------------- | --- | --- | --- | --- |
[9] Express Contributors. Express.js Documentation. Truy cập lần cuối:
| 19:00 | 04/12/2025. |     | https://expressjs.com/. |     |     |     |
| ----- | ----------- | --- | ----------------------- | --- | --- | --- |
146

|     | Trường |      | Đại học | Bách  | Khoa  | - ĐHQG-HCM |      |     |     |
| --- | ------ | ---- | ------- | ----- | ----- | ---------- | ---- | --- | --- |
|     | Khoa   | Khoa | học     | và Kỹ | thuật | Máy        | Tính |     |     |
[10] FullCalendar LLC. FullCalendar Documentation. Truy cập lần cuối:
|      | 12:00 15/11/2025. |     |          | https://fullcalendar.io/docs. |         |     |               |        |           |
| ---- | ----------------- | --- | -------- | ----------------------------- | ------- | --- | ------------- | ------ | --------- |
| [11] | E. Gamma,         |     | R. Helm, | R.                            | Johnson |     | J. Vlissides, |        |           |
|      |                   |     |          |                               |         | and |               | Design | Patterns: |
Elements of Reusable Object-Oriented Software. Addison-Wesley, 1994,
|     | isbn: 978-0201633610. |     |     |     |     |     |     |     |     |
| --- | --------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
[12] Google LLC. Google Calendar API Documentation. Truy cập lần cuối:
21:00 15/08/2025. https://developers.google.com/calendar/api.
[13] Google LLC. Google Identity OAuth 2.0 Documentation. Truy cập lần
|     | cuối: 21:00 | 15/08/2025. |     |     |     |     |     |     |     |
| --- | ----------- | ----------- | --- | --- | --- | --- | --- | --- | --- |
https://developers.google.com/identity/
protocols/oauth2.
[14] M. Kleppmann, Designing Data-Intensive Applications. O’Reilly Media,
|     | 2017, isbn: | 978-1449373320. |     |     |     |     |     |     |     |
| --- | ----------- | --------------- | --- | --- | --- | --- | --- | --- | --- |
[15] T.Labs.TailwindCSSDocumentation.Truycậplầncuối:21:0020/11/2025.
https://tailwindcss.com/docs.
| [16] | R. C.     | Martin, |         |               |       |       |                 |       |             |
| ---- | --------- | ------- | ------- | ------------- | ----- | ----- | --------------- | ----- | ----------- |
|      |           |         | Clean   | Architecture: |       | A     | Craftsman’s     | Guide | to Software |
|      | Structure | and     | Design. | Pearson,      | 2017, | isbn: | 978-0134494166. |       |             |
[17] Meta Platforms, Inc. React Documentation. Truy cập lần cuối: 14:00
|     | 02/11/2025. |     | https://react.dev/. |     |     |     |     |     |     |
| --- | ----------- | --- | ------------------- | --- | --- | --- | --- | --- | --- |
[18] Microsoft Corporation. TypeScript Documentation. Truy cập lần cuối:
|     | 03:00 18/09/2025. |     |     | https://www.typescriptlang.org/docs/. |     |     |     |     |     |
| --- | ----------------- | --- | --- | ------------------------------------- | --- | --- | --- | --- | --- |
[19] M.S.MikowskiandJ.C.Powell,Single
|     |     |     |     |     |     |     | Page Web | Applications: | JavaScript |
| --- | --- | --- | --- | --- | --- | --- | -------- | ------------- | ---------- |
End-to-End. Manning Publications, 2013, isbn: 978-1617290756.
[20] Mozilla Foundation. MDN Web Docs: HTTP Cookies. Truy cập lần cuối:
|     | 14:00 02/11/2025. |     |     |     |     |     |     |     |     |
| --- | ----------------- | --- | --- | --- | --- | --- | --- | --- | --- |
https://developer.mozilla.org/en-US/docs/
Web/HTTP/Cookies.
[21] OpenJS Foundation. Node.js Documentation. Truy cập lần cuối: 14:00
|                                       | 29/11/2025. |     | https://nodejs.org/en/docs. |     |     |     |     |     |              |
| ------------------------------------- | ----------- | --- | --------------------------- | --- | --- | --- | --- | --- | ------------ |
| Đồántốtnghiệp(CO4337)-HK251,2025-2026 |             |     |                             |     |     |     |     |     | Trang147/148 |

| Trường | Đại  | học Bách  | Khoa - ĐHQG-HCM |      |
| ------ | ---- | --------- | --------------- | ---- |
| Khoa   | Khoa | học và Kỹ | thuật Máy       | Tính |
[22] PostgreSQL Global Development Group. PostgreSQL Documentation.
| Truy cập | lần cuối: | 09:00 02/10/2025. |     |     |
| -------- | --------- | ----------------- | --- | --- |
https://www.postgresql.org/
docs/.
[23] RabbitMQ Team. RabbitMQ Documentation. Truy cập lần cuối: 21:00
| 18/08/2025. | https://www.rabbitmq.com/documentation.html. |     |     |     |
| ----------- | -------------------------------------------- | --- | --- | --- |
[24] Redis Ltd. Redis Documentation. Truy cập lần cuối: 17:00 15/11/2025.
https://redis.io/docs/.
[25] ViteContributors.ViteDocumentation.Truycậplầncuối:07:0022/09/2025.
https://vitejs.dev/guide/.
[26] Zustand Contributors. Zustand Documentation. Truy cập lần cuối: 07:00
22/09/2025.
https://docs.pmnd.rs/zustand/getting-started/
introduction.
Đồántốtnghiệp(CO4337)-HK251,2025-2026 Trang148/148
