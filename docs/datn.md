ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH
TRƯỜNG ĐẠI HỌC BÁCH KHOA
KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH
BÁO CÁO
ĐỒ ÁN TỐT NGHIỆP
(MÃ HỌC PHẦN: CO4337)
PHÁT TRIỂN ỨNG DỤNG DI ĐỘNG
PHỤC VỤ NHÂN SỰ TRƯỜNG ĐẠI HỌC
NGÀNH: KHOA HỌC MÁY TÍNH
HỘI ĐỒNG : KHOA HỌC MÁY TÍNH
GVHD : ThS. NGUYỄN THANH TÙNG
CTHĐ : PGS. TS. LÊ HỒNG TRANG
TKHĐ : ThS. TRƯƠNG QUỲNH CHI
————o0o———–
SVTH : VŨ XUÂN CHÍNH - 2210392
: TỐNG DUY KHANG - 2211467
TP. HỒ CHÍ MINH, Tháng 10/2026

| Lời | cam | đoan |     |     |     |     |
| --- | --- | ---- | --- | --- | --- | --- |
Chúng tôi xin cam đoan đây là công trình nghiên cứu và hiện thực của
riêng nhóm chúng tôi dưới sự hướng dẫn của ThS. Nguyễn Thanh Tùng
tại Khoa Khoa học và Kỹ thuật Máy tính, Trường Đại học Bách khoa -
ĐHQG-HCM. Mọi sao chép không hợp lệ, vi phạm quy chế đào tạo, chúng
| tôi hoàn | toàn chịu trách | nhiệm | và nhận mọi | hình thức  | kỷ luật.       |         |
| -------- | --------------- | ----- | ----------- | ---------- | -------------- | ------- |
|          |                 |       |             | TP. Hồ Chí | Minh, Tháng    | 10/2026 |
|          |                 |       |             | Nhóm       | sinh viên thực | hiện,   |
|          |                 |       |             |            | Vũ Xuân Chính  |         |
|          |                 |       |             | Tống       | Duy Khang      |         |
i

| Lời | cảm | ơn  |     |     |     |
| --- | --- | --- | --- | --- | --- |
Trước khi đi vào nội dung chi tiết của báo cáo, nhóm xin được bày tỏ lòng
biết ơn chân thành và sâu sắc tới ThS. Nguyễn Thanh Tùng - giảng viên khoa
Khoa học và Kỹ thuật Máy tính trường Đại học Bách khoa - ĐHQG-HCM.
Trong suốt quá trình thực hiện đồ án, thầy đã luôn tận tâm hướng dẫn, hỗ trợ
và tạo điều kiện thuận lợi để nhóm có thể phát triển ý tưởng một cách hiệu
quả. Sự quan tâm chỉ dẫn tận tình cùng với những góp ý chuyên môn quý báu
từ thầy, đã giúp nhóm tích lũy nhiều kiến thưc bổ ích và hoàn thành tốt đồ án
này.
Bên cạnh đó, nhóm cũng xin chân thành gửi lời cảm ơn đến quý thầy cô
hiện đã và đang công tác tại Khoa Khoa học và Kỹ thuật Máy tính - Trường
| ĐạihọcBáchKhoa- |     | ĐHQG-HCMđãtruyềnđạtchonhómnềntảng |     |     | kiếnthức |
| --------------- | --- | --------------------------------- | --- | --- | -------- |
chuyên môn và kỹ năng thực hành vững chắc trong suốt những năm học vừa
qua.
Cuối cùng, xin gửi lời cảm ơn sâu sắc đến gia đình, bạn bè đã luôn động
viên, tạo điều kiện thuận lợi và đồng hành cùng nhóm để hoàn thành tốt đồ án
| tốt nghiệp | này. |     |            |                |         |
| ---------- | ---- | --- | ---------- | -------------- | ------- |
|            |      |     | TP. Hồ Chí | Minh, Tháng    | 10/2026 |
|            |      |     | Nhóm       | sinh viên thực | hiện,   |
Vũ Xuân Chính
Tống Duy Khang
ii

Tóm tắt
Đề tài “Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học”
hướng đến xây dựng ứng dụng MyHCMUT Mobile nhằm hỗ trợ nhân sự
Trường Đại học Bách khoa – ĐHQG-HCM tiếp cận và thực hiện các nghiệp
vụ quản lý, điều hành trên thiết bị di động. Thay vì xây dựng lại các hệ thống
nghiệp vụ, ứng dụng được phát triển theo hướng tích hợp với các hệ thống
hiện hữu của Nhà trường, qua đó bổ sung một kênh truy cập phù hợp hơn với
thiết bị di động.
Trong phạm vi đề tài, nhóm tập trung phát triển các chức năng liên quan
đến quản lý hồ sơ nhân sự, nghỉ phép, công tác, văn bản, nhiệm vụ và lịch làm
việc. Ứng dụng khai thác dữ liệu và quy trình nghiệp vụ từ các hệ thống HRM,
iOffice và dịch vụ xác thực hiện hữu thông qua các cơ chế tích hợp tương ứng.
Bên cạnh các giao diện được xây dựng trực tiếp trên ứng dụng di động, một số
quy trình hiện hữu trên Web được tiếp tục khai thác khi cần thiết.
MyHCMUT Mobile được phát triển bằng Flutter và tổ chức theo các mô-
đun nghiệp vụ. Trong quá trình thực hiện, nhóm tiến hành phân tích yêu cầu,
thiết kế ứng dụng, xây dựng các chức năng và tích hợp với các dịch vụ hiện
hữu của Nhà trường. Một số luồng nghiệp vụ đại diện được kiểm thử trên thiết
bị Android và đối chiếu trạng thái xử lý với các hệ thống liên quan.
Kết quả của đề tài là phiên bản ứng dụng MyHCMUT Mobile cung cấp
các giao diện và luồng tương tác trên thiết bị di động cho những nhóm nghiệp
vụ thuộc phạm vi đề tài. Kết quả kiểm thử cho thấy các luồng đã được kiểm
chứng có thể khai thác dữ liệu và quy trình từ các hệ thống hiện hữu. Đồng
thời, các trường hợp chưa được kiểm chứng đầy đủ và những giới hạn của
phiên bản hiện tại được xác định làm cơ sở cho việc tiếp tục hoàn thiện và
đánh giá ứng dụng trước khi xem xét triển khai ở phạm vi rộng hơn.
iii

| Mục    | lục   |     |     |     |     |     |     |     |
| ------ | ----- | --- | --- | --- | --- | --- | --- | --- |
| 1 GIỚI | THIỆU |     |     |     |     |     |     | 1   |
1.1 Bối cảnh và vấn đề thực tế . . . . . . . . . . . . . . . . . . 1
1.2 Bài toán đặt ra . . . . . . . . . . . . . . . . . . . . . . . . . 2
1.2.1 Bài toán thực tế từ góc độ người dùng . . . . . . . . 2
1.2.2 Bài toán kỹ thuật đặt ra cho đề tài . . . . . . . . . . 2
1.3 Mục tiêu của đề tài . . . . . . . . . . . . . . . . . . . . . . 3
1.3.1 Mục tiêu tổng quát . . . . . . . . . . . . . . . . . . 3
1.3.2 Mục tiêu cụ thể . . . . . . . . . . . . . . . . . . . . 3
1.4 Phạm vi đề tài . . . . . . . . . . . . . . . . . . . . . . . . . 4
1.4.1 Phạm vi chức năng . . . . . . . . . . . . . . . . . . 4
|     | 1.4.2 | Phân công | nhiệm | vụ và | đóng góp của | các thành | viên | 5   |
| --- | ----- | --------- | ----- | ----- | ------------ | --------- | ---- | --- |
1.5 Bố cục báo cáo . . . . . . . . . . . . . . . . . . . . . . . . 6
| 2 PHÂN | TÍCH | CÁC HỆ | THỐNG | CÓ  | LIÊN QUAN |     |     | 8   |
| ------ | ---- | ------ | ----- | --- | --------- | --- | --- | --- |
2.1 Các hệ thống nghiệp vụ hiện hữu . . . . . . . . . . . . . . . 8
|     | 2.1.1 | Hệ thống Quản | lý    | Nhân | sự HRM     | . . . . . . | . . . . . | 8   |
| --- | ----- | ------------- | ----- | ---- | ---------- | ----------- | --------- | --- |
|     | 2.1.2 | Hệ thống Văn  | phòng | điện | tử iOffice | . . . .     | . . . . . | 9   |
2.1.3 Nhận xét . . . . . . . . . . . . . . . . . . . . . . . . 10
2.2 Một số giải pháp có liên quan . . . . . . . . . . . . . . . . . 11
2.2.1 Base HRM . . . . . . . . . . . . . . . . . . . . . . 11
2.2.2 Tanca . . . . . . . . . . . . . . . . . . . . . . . . . 12
2.3 Đối chiếu và định hướng cho đề tài . . . . . . . . . . . . . . 12
iv

| 3 CƠ | SỞ LÝ THUYẾT |     | VÀ  | CÔNG | NGHỆ |     |     |     |     | 14  |
| ---- | ------------ | --- | --- | ---- | ---- | --- | --- | --- | --- | --- |
3.1 Cơ sở lý thuyết . . . . . . . . . . . . . . . . . . . . . . . . . 14
|     | 3.1.1 | Kiến trúc | phân | tầng | và  | mô hình | MVC | . . | . . . | . . . 14 |
| --- | ----- | --------- | ---- | ---- | --- | ------- | --- | --- | ----- | -------- |
3.1.2 Kiến trúc hướng phân hệ . . . . . . . . . . . . . . . 16
|     | 3.1.3 | RESTful | API | và giao | thức | HTTPS | .   | . . . | . . . | . . . 16 |
| --- | ----- | ------- | --- | ------- | ---- | ----- | --- | ----- | ----- | -------- |
3.1.4 Xác thực dựa trên JWT . . . . . . . . . . . . . . . . 17
3.2 Công nghệ phía ứng dụng di động . . . . . . . . . . . . . . 19
|     | 3.2.1 | Nền tảng | Flutter | SDK   | và        | ngôn ngữ | Dart | .   | . . . | . . . 19 |
| --- | ----- | -------- | ------- | ----- | --------- | -------- | ---- | --- | ----- | -------- |
|     | 3.2.2 | Tổ chức  | mã      | nguồn | với Melos | Monorepo |      | .   | . . . | . . . 20 |
3.2.3 Quản lý trạng thái với Riverpod . . . . . . . . . . . 21
3.2.4 Điều hướng khai báo với GoRouter . . . . . . . . . . 22
3.2.5 Giao tiếp mạng với Dio . . . . . . . . . . . . . . . . 22
3.2.6 Lưu trữ dữ liệu cục bộ . . . . . . . . . . . . . . . . 23
3.2.7 Biểu mẫu native và các thư viện tích hợp . . . . . . . 24
3.3 Công nghệ backend . . . . . . . . . . . . . . . . . . . . . . 26
3.3.1 Nền tảng dịch vụ và lưu trữ dữ liệu . . . . . . . . . . 26
3.3.2 Môi trường thực thi: Node.js . . . . . . . . . . . . . 26
3.3.3 Ngôn ngữ lập trình: TypeScript . . . . . . . . . . . . 27
|     | 3.3.4 | ExpressJS | Framework |     |     | . . . . | . . . | . . . | . . . | . . . 28 |
| --- | ----- | --------- | --------- | --- | --- | ------- | ----- | ----- | ----- | -------- |
3.4 Hệ quản trị Cơ sở dữ liệu (Database) . . . . . . . . . . . . . 29
3.4.1 PostgreSQL . . . . . . . . . . . . . . . . . . . . . . 29
3.4.2 Redis . . . . . . . . . . . . . . . . . . . . . . . . . 31
3.5 Các dịch vụ tích hợp . . . . . . . . . . . . . . . . . . . . . . 31
3.5.1 Dịch vụ thông báo và truyền thông thời gian thực . . 31
3.6 Kết luận chương . . . . . . . . . . . . . . . . . . . . . . . . 32
| 4 PHÂN | TÍCH | HỆ THỐNG |     |     |     |     |     |     |     | 33  |
| ------ | ---- | -------- | --- | --- | --- | --- | --- | --- | --- | --- |
4.1 Người dùng, phân quyền và Use Case tổng thể . . . . . . . . 33
4.1.1 Các nhóm người dùng . . . . . . . . . . . . . . . . . 33
v

4.1.2 Vai trò và phạm vi nghiệp vụ . . . . . . . . . . . . . 33
4.1.3 Các nhóm Use Case tổng thể . . . . . . . . . . . . . 34
4.2 Yêu cầu chức năng và đặc tả nghiệp vụ . . . . . . . . . . . . 36
4.2.1 Quản lý hồ sơ cá nhân . . . . . . . . . . . . . . . . . 36
4.2.2 Quản lý nghỉ phép . . . . . . . . . . . . . . . . . . . 43
4.2.3 Phân hệ quản lý công tác . . . . . . . . . . . . . . . 49
4.2.4 Văn phòng số, nhiệm vụ và lịch công tác . . . . . . . 56
4.3 Yêu cầu phi chức năng . . . . . . . . . . . . . . . . . . . . 68
4.4 Kết luận chương . . . . . . . . . . . . . . . . . . . . . . . . 68
5 THIẾT KẾ HỆ THỐNG 70
5.1 Kiến trúc tổng thể hệ thống . . . . . . . . . . . . . . . . . . 70
5.2 Thiết kế thành phần và chức năng nghiệp vụ . . . . . . . . . 73
5.2.1 Thiết kế ứng dụng MyHCMUT Mobile . . . . . . . 73
5.2.2 Các backend hiện hữu và phạm vi mở rộng . . . . . . 76
5.2.3 Thiết kế chức năng quản lý hồ sơ . . . . . . . . . . . 78
5.2.4 Thiết kế chức năng tạo và đăng ký lịch họp . . . . . 79
5.3 Mô hình dữ liệu phục vụ ứng dụng . . . . . . . . . . . . . . 81
5.3.1 Tổng quan sơ đồ erd . . . . . . . . . . . . . . . . . . 81
5.3.2 Tổng quan mô hình dữ liệu . . . . . . . . . . . . . . 82
5.3.3 Dữ liệu quản lý hồ sơ cá nhân . . . . . . . . . . . . . 82
5.3.4 Dữ liệu về các quy trình phê duyệt đơn . . . . . . . . 89
5.3.5 Dữ liệu quản lý nghỉ phép . . . . . . . . . . . . . . . 91
5.3.6 Dữ liệu quản lý công tác . . . . . . . . . . . . . . . 94
5.3.7 Dữ liệu văn phòng số, nhiệm vụ và lịch công tác . . . 97
5.3.8 Truy vết dữ liệu của các chức năng native . . . . . . 104
5.4 Các cơ chế tích hợp hệ thống . . . . . . . . . . . . . . . . . 105
5.4.1 Xác thực và giao tiếp API . . . . . . . . . . . . . . . 105
5.4.2 Tích hợp thông báo . . . . . . . . . . . . . . . . . . 106
vi

5.4.3 Tổng hợp dữ liệu lịch và đồng bộ thời gian thực . . . 107
5.5 Tổng kết chương . . . . . . . . . . . . . . . . . . . . . . . . 108
6 KẾT QUẢ HIỆN THỰC VÀ KIỂM THỬ 109
6.1 Kết quả hiện thực hệ thống . . . . . . . . . . . . . . . . . . 109
6.1.1 Trang chủ . . . . . . . . . . . . . . . . . . . . . . . 111
6.1.2 Quản lý hồ sơ cá nhân . . . . . . . . . . . . . . . . . 111
6.1.3 Quản lý nghỉ phép . . . . . . . . . . . . . . . . . . . 114
6.1.4 Quản lý công tác . . . . . . . . . . . . . . . . . . . 116
6.1.5 Văn bản và nhiệm vụ . . . . . . . . . . . . . . . . . 120
6.1.6 Lịch công tác và điểm danh cuộc họp . . . . . . . . 123
6.1.7 Thông báo và điều hướng đến nghiệp vụ . . . . . . . 125
6.2 Kiểm thử và đánh giá hệ thống . . . . . . . . . . . . . . . . 128
6.2.1 Chiến lược và môi trường kiểm thử . . . . . . . . . . 128
6.2.2 Kiểm thử tự động . . . . . . . . . . . . . . . . . . . 128
6.2.3 Kiểm thử các luồng nghiệp vụ trên hệ thống tích hợp 130
6.2.4 Mức kiểm chứng hồ sơ native và tạo họp mới . . . . 131
6.2.5 Đánh giá yêu cầu phi chức năng . . . . . . . . . . . 132
7 TỔNG KẾT VÀ HƯỚNG PHÁT TRIỂN 134
7.1 Kết quả đạt được . . . . . . . . . . . . . . . . . . . . . . . 134
7.2 Hạn chế của đề tài . . . . . . . . . . . . . . . . . . . . . . . 135
7.3 Hướng phát triển . . . . . . . . . . . . . . . . . . . . . . . 136
Tài liệu tham khảo 138
vii

| Danh     | sách      | hình     |           | ảnh    |         |               |         |     |
| -------- | --------- | -------- | --------- | ------ | ------- | ------------- | ------- | --- |
| Hình 2.1 | Giao diện | các phân | hệ nghiệp | vụ     | chính   | trên hệ thống |         |     |
|          | HRM hiện  | hữu của  | Nhà       | trường | . . . . | . . . . .     | . . . . | 9   |
Hình 2.2 Giao diện quản lý văn bản và lịch công tác trên hệ thống
|     | iOffice | hiện hữu của | Nhà | trường | . . . | . . . . . | . . . . | 10  |
| --- | ------- | ------------ | --- | ------ | ----- | --------- | ------- | --- |
Hình 2.3 Minh họa giao diện ứng dụng di động trong hệ sinh thái
|     | Base.vn | [23] . . . | . . . | . . . | . . . . . | . . . . . | . . . . | 11  |
| --- | ------- | ---------- | ----- | ----- | --------- | --------- | ------- | --- |
Hình 2.4 Minh họa giao diện ứng dụng di động Tanca Mobile [24] 12
Hình 3.1 Mô hình kiến trúc Model–View–Controller (MVC) . . 15
Hình 3.2 Minh họa tổ chức mã nguồn theo tầng và theo phân hệ . 16
Hình 3.3 Cấu trúc JSON Web Token (JWT) . . . . . . . . . . . 18
Hình 3.4 Mô hình hoạt động Event Loop của Node.js . . . . . . 27
Hình 3.5 ExpressJS Framework . . . . . . . . . . . . . . . . . . 28
Hình 3.6 Kiến trúc tổng quan của PostgreSQL . . . . . . . . . . 30
| Hình 4.1 | Sơ đồ Use | Case tổng | thể | của MyHCMUT |     | Mobile | . . . | 35  |
| -------- | --------- | --------- | --- | ----------- | --- | ------ | ----- | --- |
Hình 4.2 Sơ đồ Đặc tả Use case nhóm Quản lý hồ sơ cá nhân . . 38
Hình 4.3 Biểu đồ hoạt động Quy trình cập nhật hồ sơ cá nhân . . 42
Hình 4.4 Biểu đồ tuần tự Cập nhật hồ sơ cá nhân . . . . . . . . . 43
Hình 4.5 Sơ đồ Đặc tả Use case nhóm Quản lý nghỉ phép . . . . 45
Hình 4.6 Biểu đồ hoạt động Quy trình nghỉ phép . . . . . . . . . 48
Hình 4.7 Biểu đồ tuần tự Gửi yêu cầu nghỉ phép . . . . . . . . . 49
Hình 4.8 Sơ đồ use-case quản lý công tác . . . . . . . . . . . . . 51
Hình 4.9 Sơ đồ hoạt động quản lý công tác . . . . . . . . . . . . 55
viii

Hình 4.10 Sơ đồ tuần tự quản lý công tác . . . . . . . . . . . . . 56
Hình 4.11 Sơ đồ Đặc tả Use case nhóm Văn phòng số, nhiệm vụ và
|     | lịch công | tác . . | . . . . . | . . | . . . . | . . . | . . . . | . . . 58 |
| --- | --------- | ------- | --------- | --- | ------- | ----- | ------- | -------- |
Hình 4.12 Biểu đồ hoạt động Điểm danh và báo vắng cuộc họp của
|     | người | được phân | công . . | . . | . . . . | . . . | . . . . | . . . 64 |
| --- | ----- | --------- | -------- | --- | ------- | ----- | ------- | -------- |
Hình 4.13 Sơ đồ hoạt động: Văn bản đến . . . . . . . . . . . . . . 65
Hình 4.14 Biểu đồ tuần tự Điểm danh và báo vắng cuộc họp . . . 66
Hình 4.15 Biểu đồ tuần tự nghiệp vụ tạo trực tiếp lịch họp cấp Trường 67
Hình 5.1 Kiến trúc tổng thể hệ thống MyHCMUT Mobile . . . . 71
| Hình 5.2 | Cấu trúc | monorepo | của ứng | dụng | MyHCMUT |     | Mobile | 74  |
| -------- | -------- | -------- | ------- | ---- | ------- | --- | ------ | --- |
Hình 5.3 Luồng tải và lưu đệm dữ liệu hồ sơ nhân sự . . . . . . 75
Hình 5.4 Tổng quan sơ đồ ERD . . . . . . . . . . . . . . . . . . 81
| Hình 5.5 | Lược đồ | tổng quan | các miền | dữ  | liệu phục | vụ    |         |          |
| -------- | ------- | --------- | -------- | --- | --------- | ----- | ------- | -------- |
|          | MyHCMUT | Mobile    | . . .    | . . | . . . .   | . . . | . . . . | . . . 82 |
Hình 5.6 Lược đồ dữ liệu rút gọn của phân hệ hồ sơ cá nhân . . . 83
Hình 5.7 Bảng thông tin quá trình công tác . . . . . . . . . . . . 87
Hình 5.8 Bảng thông tin đào tạo . . . . . . . . . . . . . . . . . 87
Hình 5.9 Bảng thông tin khen thưởng . . . . . . . . . . . . . . . 88
Hình 5.10 Bảng thông tin kỷ luật . . . . . . . . . . . . . . . . . . 88
Hình 5.11 Bảng thông tin quá trình lương . . . . . . . . . . . . . 88
Hình 5.12 Bảng thông tin phụ cấp . . . . . . . . . . . . . . . . . 89
Hình 5.13 Lược đồ dữ liệu các loại quy trình phê duyệt . . . . . . 89
Hình 5.14 Lược đồ dữ liệu rút gọn của phân hệ nghỉ phép . . . . . 91
Hình 5.15 Lược đồ dữ liệu rút gọn của phân hệ công tác . . . . . 95
Hình 5.16 Lược đồ dữ liệu rút gọn của nhóm văn bản iOffice . . . 98
Hình 5.17 Lược đồ dữ liệu rút gọn của nhóm nhiệm vụ iOffice . . 100
| Hình 5.18 | Lược đồ | dữ liệu   | rút gọn của | nhóm | lịch    | và điểm | danh    |           |
| --------- | ------- | --------- | ----------- | ---- | ------- | ------- | ------- | --------- |
|           | iOffice | . . . . . | . . . . .   | . .  | . . . . | . . .   | . . . . | . . . 102 |
ix

| Hình 5.19 | Sơ đồ   | khái | quát điểm | tích | hợp  | thông | báo từ HRM  | và  |           |
| --------- | ------- | ---- | --------- | ---- | ---- | ----- | ----------- | --- | --------- |
|           | iOffice | đến  | ứng dụng  | di   | động | . . . | . . . . . . | . . | . . . 106 |
Hình 5.20 Tổng hợp lịch đa nguồn và cập nhật điểm danh cuộc họp 108
Hình 6.1 Trang chủ và lịch cá nhân . . . . . . . . . . . . . . . . 110
Hình 6.2 Hồ sơ: tổng quan và thông tin cá nhân . . . . . . . . . 112
Hình 6.3 Hồ sơ: học vị và khen thưởng . . . . . . . . . . . . . . 112
Hình 6.4 Giao diện so sánh và thẩm định đề xuất lý lịch (dữ liệu
|     | mẫu) | . . . | . . . | . . . | . . . | . . . . | . . . . . . | . . | . . . 114 |
| --- | ---- | ----- | ----- | ----- | ----- | ------- | ----------- | --- | --------- |
Hình 6.5 Nghỉ phép: danh sách đơn và bước nhập liệu . . . . . . 115
Hình 6.6 Nghỉ phép: minh chứng và rà soát đơn . . . . . . . . . 115
Hình 6.7 Màn hình chi tiết đơn sau thao tác duyệt (dữ liệu mẫu) . 116
Hình 6.8 Danh sách phiếu đăng ký công tác . . . . . . . . . . . 117
Hình 6.9 Công tác: thời gian và nội dung chuyến đi . . . . . . . 118
Hình 6.10 Công tác: người tham gia và kinh phí . . . . . . . . . . 118
Hình 6.11 Công tác: rà soát phiếu trước khi gửi . . . . . . . . . . 119
Hình 6.12 Tiến trình xử lý phiếu công tác . . . . . . . . . . . . . 120
Hình 6.13 Văn bản đến và tệp đính kèm . . . . . . . . . . . . . . 121
Hình 6.14 Danh sách nhiệm vụ theo trạng thái (tên nhiệm vụ mẫu) 122
Hình 6.15 Lịch có cuộc họp và tab điểm danh . . . . . . . . . . . 123
Hình 6.16 Giao diện sau khi ghi nhận có mặt và báo vắng (dữ liệu
|     | mẫu) | . . . | . . . | . . . | . . . | . . . . | . . . . . . | . . | . . . 125 |
| --- | ---- | ----- | ----- | ----- | ----- | ------- | ----------- | --- | --------- |
Hình 6.17 Trung tâm thông báo trên thiết bị thử . . . . . . . . . . 126
Hình 6.18 Thông báo hiển thị khi ứng dụng chạy nền trên Android 12126
| Hình 6.19 | Lời mời  | lịch | tổng       | hợp | khi app | mở và   | chạy nền    | trên |           |
| --------- | -------- | ---- | ---------- | --- | ------- | ------- | ----------- | ---- | --------- |
|           | Android, | ngày | 01/10/2026 |     |         | . . . . | . . . . . . | . .  | . . . 127 |
x

Danh sách bảng
Bảng 1.1 Phân công nhiệm vụ và đóng góp của thành viên . . . . 6
Bảng 2.1 Đối chiếu các hệ thống và giải pháp có liên quan . . . . 13
Bảng 3.1 So sánh các hướng phát triển ứng dụng di động . . . . 20
Bảng 3.2 So sánh các phương án tổ chức mã nguồn . . . . . . . 21
Bảng 3.3 Một số thư viện tích hợp trong MyHCMUT Mobile . . 24
Bảng 4.1 Ma trận tác nhân và phạm vi nghiệp vụ . . . . . . . . . 34
Bảng 4.2 Phạm vi đặc tả theo nhóm nghiệp vụ . . . . . . . . . . 36
Bảng 4.3 Phân nhóm danh mục thông tin hồ sơ nhân sự . . . . . 37
Bảng 4.4 Yêu cầu chức năng nhóm quản lý hồ sơ cá nhân . . . . 37
Bảng 4.5 UC-PRO-01: Tra cứu hồ sơ . . . . . . . . . . . . . . . 38
Bảng 4.6 UC-PRO-02: Cập nhật hồ sơ . . . . . . . . . . . . . . 39
Bảng 4.7 UC-PRO-03: Thẩm định thay đổi hồ sơ . . . . . . . . . 40
Bảng 4.8 UC-PRO-04: Gửi phản hồi . . . . . . . . . . . . . . . 40
Bảng 4.9 UC-PRO-05: Xem lịch sử . . . . . . . . . . . . . . . . 41
Bảng 4.10 Yêu cầu chức năng nhóm quản lý nghỉ phép . . . . . . 44
Bảng 4.11 UC-LEV-01: Quản lý đơn cá nhân . . . . . . . . . . . 45
Bảng 4.12 UC-LEV-02: Lập và gửi đơn nghỉ phép . . . . . . . . . 46
Bảng 4.13 UC-LEV-03: Xử lý đơn nghỉ phép . . . . . . . . . . . 47
Bảng 4.14 Yêu cầu chức năng nhóm quản lý công tác . . . . . . . 50
Bảng 4.15 UC-BT-01: Soạn thảo đơn đăng ký công tác . . . . . . 51
Bảng 4.16 UC-BT-02: Gửi đơn đăng ký công tác . . . . . . . . . 52
Bảng 4.17 UC-BT-03: Xóa đơn đăng ký công tác . . . . . . . . . 52
xi

Bảng 4.18 UC-BT-04: Phê duyệt đơn đăng ký công tác . . . . . . 53
Bảng 4.19 UC-BT-05: Thu hồi đơn đăng ký công tác . . . . . . . 54
Bảng 4.20 Yêu cầu chức năng nhóm văn phòng số và lịch . . . . . 57
Bảng 4.21 UC-OFF-01: Phân công văn bản đến . . . . . . . . . . 59
Bảng 4.22 UC-OFF-02: Tham mưu văn bản . . . . . . . . . . . . 59
Bảng 4.23 UC-OFF-03: Chỉ đạo văn bản . . . . . . . . . . . . . . 59
Bảng 4.24 UC-OFF-04: Tiếp nhận văn bản . . . . . . . . . . . . 60
Bảng 4.25 UC-SCH-01: Điểm danh cuộc họp . . . . . . . . . . . 61
Bảng 4.26 UC-SCH-02: Xem lịch tổng hợp . . . . . . . . . . . . 62
Bảng 4.27 UC-SCH-03: Tạo cuộc họp . . . . . . . . . . . . . . . 62
Bảng 4.28 Các nhánh tạo và đăng ký lịch . . . . . . . . . . . . . 63
Bảng 4.29 Yêu cầu phi chức năng của MyHCMUT Mobile . . . . 68
Bảng 5.1 Phạm vi kế thừa và phát triển các thành phần . . . . . . 78
Bảng 5.2 Từ điển dữ liệu phân hệ hồ sơ nhân sự . . . . . . . . . 83
Bảng 5.3 Từ điển rút gọn bảng địa chỉ . . . . . . . . . . . . . . . 85
Bảng 5.4 Từ điển rút gọn bảng gia đình . . . . . . . . . . . . . . 85
Bảng 5.5 Từ điển dữ liệu quy trình phê duyệt . . . . . . . . . . . 89
Bảng 5.6 Từ điển dữ liệu phân hệ nghỉ phép . . . . . . . . . . . 92
Bảng 5.7 Từ điển dữ liệu phân hệ công tác . . . . . . . . . . . . 95
Bảng 5.8 Từ điển dữ liệu nhóm văn bản iOffice . . . . . . . . . . 98
Bảng 5.9 Từ điển dữ liệu nhóm nhiệm vụ iOffice . . . . . . . . . 100
Bảng 5.10 Từ điển dữ liệu nhóm lịch và điểm danh iOffice . . . . 103
Bảng 6.1 Kết quả kiểm thử thành phần ở các lượt lịch sử
22–24/09/2026 . . . . . . . . . . . . . . . . . . . . . 129
Bảng 6.2 Bổ sung kiểm chứng ngày 01/10/2026 theo phạm vi . . 129
Bảng 6.3 Kết quả kiểm thử luồng nghiệp vụ tích hợp . . . . . . . 130
Bảng 6.4 Kịch bản kiểm chứng native và mức bằng chứng hiện có 131
Bảng 6.5 Đánh giá yêu cầu phi chức năng . . . . . . . . . . . . 133
xii

| Chương | 1     |     |     |
| ------ | ----- | --- | --- |
| GIỚI   | THIỆU |     |     |
Chương này trình bày bối cảnh hình thành đề tài, bài toán cần giải quyết,
mục tiêu và phạm vi thực hiện của ứng dụng MyHCMUT Mobile. Đồng thời,
chương xác định phạm vi công việc của các thành viên và giới thiệu cấu trúc
| của báo cáo. |      |           |         |
| ------------ | ---- | --------- | ------- |
| 1.1 Bối      | cảnh | và vấn đề | thực tế |
Chuyển đổi số trong giáo dục đại học là một trong những định hướng nhằm
hiện đại hóa hoạt động quản trị và nâng cao hiệu quả vận hành tại các cơ sở
giáo dục, được thể hiện qua Quyết định số 749/QĐ-TTg [1] và Quyết định số
| 131/QĐ-TTg | [2] của Thủ | tướng Chính | phủ. |
| ---------- | ----------- | ----------- | ---- |
Trường Đại học Bách khoa – ĐHQG-HCM có 1.061 viên chức, người lao
động, trong đó có 667 giảng viên, cùng khoảng 28.000 học viên, sinh viên [3].
Với quy mô này, hoạt động quản lý và điều hành liên quan đến nhân sự bao gồm
nhiều nghiệp vụ như quản lý hồ sơ, nghỉ phép, công tác, văn bản, nhiệm vụ và
| lịch làm việc. |     |     |     |
| -------------- | --- | --- | --- |
Nhà trường đã triển khai các hệ thống nghiệp vụ như hệ thống Quản lý Nhân
sự (HRM) và Văn phòng điện tử (iOffice) để phục vụ các hoạt động trên. Các hệ
thống này cung cấp dữ liệu và quy trình xử lý nghiệp vụ, tuy nhiên việc truy cập
và thao tác chủ yếu được thực hiện thông qua giao diện Web. Trong những tình
huống không thuận tiện sử dụng máy tính, việc tra cứu thông tin, theo dõi trạng
thái hoặc xử lý công việc có thể gặp bất tiện. Bên cạnh đó, các nghiệp vụ được
1

cung cấp qua nhiều hệ thống khác nhau khiến người dùng phải chuyển đổi giữa
| các giao | diện khi thực | hiện công | việc. |     |
| -------- | ------------- | --------- | ----- | --- |
Từ thực tế trên, đề tài hướng đến xây dựng MyHCMUT Mobile như một kênh
truy cập trên thiết bị di động, tích hợp với các hệ thống hiện hữu để hỗ trợ người
dùng tiếp cận và thực hiện các nghiệp vụ thuộc phạm vi đề tài mà không xây
| dựng lại | toàn bộ hệ | thống nghiệp | vụ của Nhà   | trường. |
| -------- | ---------- | ------------ | ------------ | ------- |
| 1.2      | Bài toán   | đặt ra       |              |         |
| 1.2.1    | Bài toán   | thực tế từ   | góc độ người | dùng    |
Trong quá trình làm việc, nhân sự Nhà trường cần thực hiện nhiều nghiệp vụ
khác nhau như tra cứu và cập nhật thông tin hồ sơ, đăng ký nghỉ phép, lập hồ sơ
công tác, tra cứu văn bản, theo dõi nhiệm vụ và lịch làm việc. Các nhu cầu này
có thể phát sinh khi người dùng không có điều kiện sử dụng máy tính.
Đối với các nghiệp vụ tra cứu, người dùng cần có khả năng xem thông tin và
theo dõi trạng thái xử lý trên thiết bị di động. Đối với các nghiệp vụ có thao tác
cập nhật, gửi yêu cầu hoặc phê duyệt, ứng dụng cần hỗ trợ thao tác phù hợp với
| quyền hạn | và quy trình | nghiệp | vụ hiện có. |     |
| --------- | ------------ | ------ | ----------- | --- |
Do dữ liệu và chức năng được cung cấp bởi nhiều hệ thống, ứng dụng cũng
cần tổ chức các nhóm nghiệp vụ thành một kênh truy cập thống nhất trên thiết bị
di động. Thông báo được sử dụng như một cơ chế hỗ trợ để người dùng nhận biết
| sự kiện | liên quan và | truy cập đến | nội dung cần | xử lý. |
| ------- | ------------ | ------------ | ------------ | ------ |
Như vậy, từ góc độ người dùng, bài toán đặt ra là cung cấp một ứng dụng di
động hỗ trợ tra cứu, theo dõi và thực hiện các nghiệp vụ thường xuyên thuộc
phạm vi đề tài, đồng thời phù hợp với đặc điểm tương tác trên thiết bị di động.
| 1.2.2 | Bài toán | kỹ thuật | đặt ra cho | đề tài |
| ----- | -------- | -------- | ---------- | ------ |
MyHCMUT Mobile không được xây dựng như một hệ thống nghiệp vụ độc
lập. Dữ liệu, quy trình xử lý và các quy tắc nghiệp vụ chính đã được quản lý bởi
HRM, iOffice và các dịch vụ liên quan. Vì vậy, bài toán kỹ thuật trọng tâm là
2

xây dựng một ứng dụng di động có khả năng tích hợp và khai thác các chức năng
hiện hữu mà không làm thay đổi vai trò quản lý dữ liệu và quy trình của các hệ
thống này.
Trước hết, ứng dụng cần giao tiếp với nhiều dịch vụ backend để xác thực
người dùng, truy xuất dữ liệu và gửi các yêu cầu nghiệp vụ. Việc tích hợp phải
tuân theo cơ chế xác thực, phân quyền và các quy tắc xử lý do từng hệ thống cung
cấp, đồng thời xử lý các tình huống lỗi có thể xảy ra trong quá trình giao tiếp
mạng.
Bên cạnh đó, các nghiệp vụ như cập nhật hồ sơ, nghỉ phép, công tác, văn bản
và lịch làm việc có quy trình và trạng thái xử lý khác nhau. Ứng dụng cần biểu
diễn các thông tin và thao tác cần thiết trên giao diện di động, đồng thời phản
ánh kết quả xử lý từ hệ thống nghiệp vụ tương ứng.
Ngoài các giao diện được xây dựng trực tiếp trên ứng dụng, một số quy trình
hiện hữu trên Web vẫn cần được khai thác trong những trường hợp chưa phù hợp
để xây dựng lại hoàn toàn trên thiết bị di động. Do đó, ứng dụng cần hỗ trợ các
cơ chế tích hợp phù hợp giữa môi trường di động và các hệ thống Web hiện hữu.
Từ các yêu cầu trên, bài toán kỹ thuật của đề tài tập trung vào việc thiết kế và
hiện thực ứng dụng di động, tổ chức các nhóm nghiệp vụ, quản lý trạng thái ứng
dụng và tích hợp với các dịch vụ hiện hữu của Nhà trường.
1.3 Mục tiêu của đề tài
1.3.1 Mục tiêu tổng quát
Phát triển ứng dụng MyHCMUT Mobile phục vụ nhân sự Trường Đại học
Bách khoa – ĐHQG-HCM, cung cấp một kênh truy cập trên thiết bị di động để
người dùng tra cứu thông tin và thực hiện các nghiệp vụ quản lý, điều hành thuộc
phạm vi đề tài thông qua việc tích hợp với các hệ thống hiện hữu của Nhà trường.
1.3.2 Mục tiêu cụ thể
Để đạt được mục tiêu tổng quát, đề tài tập trung vào các mục tiêu sau:
3

• Phân tích các nghiệp vụ được cung cấp bởi HRM, iOffice và nhu cầu sử
dụng trên thiết bị di động để xác định phạm vi chức năng của ứng dụng.
• Thiết kế và xây dựng ứng dụng di động hỗ trợ các nhóm nghiệp vụ về hồ
sơ nhân sự, nghỉ phép, công tác, văn bản, nhiệm vụ và lịch làm việc.
• Tích hợp ứng dụng với các dịch vụ hiện hữu để thực hiện xác thực, truy
xuất dữ liệu và gửi yêu cầu xử lý nghiệp vụ theo quyền hạn của người
dùng.
• Tổ chức các chức năng thành các mô-đun nghiệp vụ để hỗ trợ quá trình
| phát triển, | kiểm thử | và mở rộng | ứng dụng. |
| ----------- | -------- | ---------- | --------- |
• Kiểm thử các luồng nghiệp vụ đại diện trên thiết bị di động và đối chiếu
| kết quả  | xử lý với | các hệ thống | liên quan. |
| -------- | --------- | ------------ | ---------- |
| 1.4 Phạm | vi đề     | tài          |            |
Trong phạm vi đồ án, nhóm tập trung phân tích, thiết kế và hiện thực ứng
dụng MyHCMUT Mobile cùng các thành phần tích hợp cần thiết để ứng dụng có
thể tương tác với các hệ thống nghiệp vụ hiện hữu. Đề tài không đặt mục tiêu
thaythếHRM,iOfficehoặcxâydựnglạitoànbộcácquytrìnhquảnlýđangđược
| Nhà trường vận | hành.   |      |     |
| -------------- | ------- | ---- | --- |
| 1.4.1 Phạm     | vi chức | năng |     |
Ứng dụng MyHCMUT Mobile được phát triển với các nhóm chức năng chính
sau:
• Quản lý hồ sơ cá nhân: Tra cứu thông tin nhân sự; cập nhật trực tiếp hoặc
gửi đề xuất thay đổi đối với các danh mục được hỗ trợ; gửi phản hồi, xem
| lịch sử | và xử lý đề | xuất theo thẩm | quyền. |
| ------- | ----------- | -------------- | ------ |
• Quản lý nghỉ phép: Tra cứu số dư phép, đăng ký và theo dõi đơn nghỉ
phép; hỗ trợ xử lý và phê duyệt đơn theo quyền hạn của người dùng.
• Quản lý công tác: Đăng ký, theo dõi và xử lý hồ sơ đi công tác theo phạm
| vi quy | trình nghiệp | vụ được tích | hợp. |
| ------ | ------------ | ------------ | ---- |
4

• Văn bản: Tra cứu văn bản đến, văn bản đi, xem thông tin và tệp đính kèm;
| thực | hiện | các thao | tác xử lý thuộc | phạm vi tích | hợp với iOffice. |     |
| ---- | ---- | -------- | --------------- | ------------ | ---------------- | --- |
• Nhiệm vụ: Tra cứu cây nhiệm vụ, thông tin phân công, tiến độ và các báo
| cáo | tiến | độ đã được | ghi nhận trên | hệ thống. |     |     |
| --- | ---- | ---------- | ------------- | --------- | --- | --- |
• Lịch làm việc: Tra cứu lịch cá nhân và lịch tổng hợp; hỗ trợ các thao tác
liên quan đến cuộc họp và điểm danh theo quyền hạn được cung cấp.
Bên cạnh các nhóm chức năng trên, ứng dụng hỗ trợ đăng nhập, tiếp nhận
thông báo và điều hướng đến nội dung nghiệp vụ liên quan. Đây là các chức năng
| hỗ trợ cho | các | nhóm nghiệp | vụ chính. |     |     |     |
| ---------- | --- | ----------- | --------- | --- | --- | --- |
Phạm vi ứng dụng không bao gồm việc thay thế toàn bộ chức năng của HRM
và iOffice. Một số thao tác chưa được tích hợp trên thiết bị di động tiếp tục được
thực hiện trên hệ thống hiện hữu. Việc phát hành lịch chính thức, tạo và phân
công nhiệm vụ, cũng như nộp báo cáo tiến độ không thuộc phạm vi chức năng
được hiện thực trên MyHCMUT Mobile trong phiên bản của đề tài.
Các tác nhân, yêu cầu chức năng và luồng xử lý cụ thể của từng nhóm nghiệp
| vụ được | trình bày | tại Chương | 4.    |          |               |      |
| ------- | --------- | ---------- | ----- | -------- | ------------- | ---- |
| 1.4.2   | Phân      | công nhiệm | vụ và | đóng góp | của các thành | viên |
Quá trình thực hiện đề tài được phân chia theo các nhóm nghiệp vụ và công
việc kỹ thuật. Hai thành viên cùng tham gia phân tích yêu cầu, thiết kế kiến trúc,
tích hợp hệ thống, kiểm thử và hoàn thiện báo cáo. Các phần hiện thực chính
| được phân | công | như trình | bày tại Bảng | 1.1. |     |     |
| --------- | ---- | --------- | ------------ | ---- | --- | --- |
5

|       | Bảng 1.1: | Phân | công         | nhiệm |         | vụ và    | đóng  | góp     | của thành | viên      |       |
| ----- | --------- | ---- | ------------ | ----- | ------- | -------- | ----- | ------- | --------- | --------- | ----- |
| Thành | viên      | Nội  | dung         | công  | việc    |          |       |         |           |           | Tỷ lệ |
|       |           | •    | Quản         | lý hồ | sơ      | lý lịch: | Thiết | kế      | và hiện   | thực      |       |
|       |           |      | chức         | năng  | tra cứu | thông    | tin,  | cập     | nhật hồ   | sơ, gửi   |       |
|       |           |      | yêu cầu/phản |       | hồi     | và       | xem   | lịch sử | thay      | đổi, lịch |       |
|       |           |      | sử xử        | lý.   |         |          |       |         |           |           |       |
• Quảnlýnghỉphép:Thiếtkếvàhiệnthựcchức
|         |       |     | năng      | tra cứu | số   | dư         | phép,    | đăng  | ký nghỉ   | phép, |     |
| ------- | ----- | --- | --------- | ------- | ---- | ---------- | -------- | ----- | --------- | ----- | --- |
|         |       |     | kiểmtra   | cácđiều |      | kiệnnghiệp |          | vụvà  | xửlýluồng |       |     |
|         |       |     | phê duyệt |         | nghỉ | phép       | trên ứng | dụng. |           |       |     |
| Vũ Xuân | Chính |     |           |         |      |            |          |       |           |       |     |
|         |       | •   | Thông     | báo     | và   | điều       | hướng:   | Hiện  | thực      | chức  | 50% |
(2210392)
|     |     |     | năng      | tiếp  | nhận      | thông    | báo        | đẩy      | qua         | FCM và    |     |
| --- | --- | --- | --------- | ----- | --------- | -------- | ---------- | -------- | ----------- | --------- | --- |
|     |     |     | điều      | hướng | người     | dùng     | đến        | nội      | dung nghiệp | vụ        |     |
|     |     |     | tương     | ứng.  |           |          |            |          |             |           |     |
|     |     | •   | Lịch      | làm   | việc tổng |          | hợp: Thiết |          | kế và       | hiện thực |     |
|     |     |     | chức      | năng  | tổng      | hợp      | lịch họp,  | lịch     | nghỉ        | phép và   |     |
|     |     |     | lịch công |       | tác trên  | thiết    | bị         | di động; | hỗ          | trợ tạo   |     |
|     |     |     | lịch họp  | cấp   | Trường    |          | đối với    | người    | dùng        | được      |     |
|     |     |     | cấp quyền |       | theo      | phạm     | vi tích    | hợp      | với         | iOffice.  |     |
|     |     | •   | Văn       | phòng | số        | iOffice: | Thiết      |          | kế và hiện  | thực      |     |
chứcnăngtracứuvănbảnđến,vănbảnđi,phân
|           |     |     | phối    | xử lý    | và xem | tệp     | đính | kèm.  |           |         |     |
| --------- | --- | --- | ------- | -------- | ------ | ------- | ---- | ----- | --------- | ------- | --- |
|           |     | •   | Quản    | lý nhiệm |        | vụ:     | Hiện | thực  | chức năng | theo    |     |
|           |     |     | dõi cây | nhiệm    |        | vụ phân | cấp, |       | xem danh  | sách    |     |
| Tống      | Duy |     | người   | được     | phân   | công,   | tiến | độ    | và các    | báo cáo |     |
| Khang     |     |     |         |          |        |         |      |       |           |         | 50% |
|           |     |     | tiến độ | đã       | có.    |         |      |       |           |         |     |
| (2211467) |     | •   | Quản    | lý công  | tác:   | Thiết   | kế   | và    | hiện thực | luồng   |     |
|           |     |     | đăng    | ký, thẩm | định   | và      | phê  | duyệt | hồ sơ     | đi công |     |
tác.
|     |          | •        | Kiểm | thử      | tích  | hợp:   | Xây     | dựng | các   | kịch bản |     |
| --- | -------- | -------- | ---- | -------- | ----- | ------ | ------- | ---- | ----- | -------- | --- |
|     |          |          | kiểm | thử tích | hợp   | giữa   | các     | phân | hệ và | tham gia |     |
|     |          |          | kiểm | thử toàn | hệ    | thống. |         |      |       |          |     |
| 1.5 | Bố cục   | báo      | cáo  |          |       |        |         |      |       |          |     |
| Nội | dung báo | cáo được |      | tổ chức  | thành | bảy    | chương: |      |       |          |     |
• Chương 1 – Giới thiệu: Trình bày bối cảnh, bài toán, mục tiêu và phạm
|     | vi của đề tài. |     |     |     |     |     |     |     |     |     |     |
| --- | -------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
6

• Chương 2 – Phân tích các hệ thống có liên quan: Khảo sát các hệ thống
nghiệp vụ hiện hữu của Nhà trường và một số giải pháp liên quan, từ đó
xác định nhu cầu và hướng tiếp cận của đề tài.
• Chương 3 – Cơ sở lý thuyết và công nghệ: Trình bày các cơ sở kỹ thuật,
công nghệ và công cụ có liên quan đến quá trình thiết kế và phát triển hệ
thống.
• Chương 4 – Phân tích và đặc tả hệ thống: Xác định các nhóm người
dùng, yêu cầu chức năng, yêu cầu phi chức năng và đặc tả các trường hợp
sử dụng của hệ thống.
• Chương 5 – Thiết kế hệ thống: Trình bày kiến trúc tổng thể, thiết kế các
thành phần, dữ liệu và các cơ chế tích hợp giữa ứng dụng di động với các
hệ thống hiện hữu.
• Chương 6 – Kết quả hiện thực và kiểm thử: Trình bày các chức năng đã
được xây dựng, kết quả kiểm thử và giới hạn của bằng chứng kiểm chứng
hiện có.
• Chương 7 – Tổng kết và hướng phát triển: Tổng kết kết quả đạt được,
các hạn chế của phiên bản hiện tại và định hướng hoàn thiện trong tương
lai.
7

Chương 2
PHÂN TÍCH CÁC HỆ
THỐNG CÓ LIÊN QUAN
Chương này khảo sát các hệ thống nghiệp vụ hiện hữu của Nhà trường và một
số giải pháp quản lý nhân sự có liên quan. Mục tiêu là xác định những chức
năng đã được cung cấp, tham khảo cách tổ chức tương tác trên thiết bị di động
và làm rõ định hướng phát triển MyHCMUT Mobile.
2.1 Các hệ thống nghiệp vụ hiện hữu
2.1.1 Hệ thống Quản lý Nhân sự HRM
HRM là hệ thống quản lý các nghiệp vụ nhân sự của Nhà trường. Trong phạm
vi đề tài, hệ thống cung cấp dữ liệu và quy trình liên quan đến hồ sơ nhân sự,
nghỉ phép, công tác và các bước xử lý, phê duyệt tương ứng.
MyHCMUT Mobile khai thác các nghiệp vụ này trên thiết bị di động nhưng
không thay thế vai trò của HRM. Dữ liệu chính thức, quy tắc nghiệp vụ và kết
quả xử lý tiếp tục được quản lý tại hệ thống hiện hữu.
8

(a)Tracứuvàcậpnhậthồsơcánhân
(b)Đăngkývàtheodõinghỉphép
Hình 2.1: Giao diện các phân hệ nghiệp vụ chính trên hệ thống HRM hiện hữu
của Nhà trường
2.1.2 Hệ thống Văn phòng điện tử iOffice
iOffice phục vụ các hoạt động quản lý và điều hành của Nhà trường. Các chức
năng liên quan đến đề tài gồm văn bản, nhiệm vụ, lịch làm việc và điểm danh
cuộc họp.
Ứng dụng di động khai thác dữ liệu và các thao tác thuộc phạm vi được tích
hợp, trong khi iOffice tiếp tục quản lý dữ liệu và quy trình nghiệp vụ tương ứng.
Các chức năng ngoài phạm vi mobile vẫn được thực hiện trên hệ thống hiện hữu.
9

(a)Tracứuvàtheodõivănbảnđến
(b)Theodõilịchcôngtáctrườngtheotuần
Hình 2.2: Giao diện quản lý văn bản và lịch công tác trên hệ thống iOffice hiện
| hữu của Nhà | trường |     |     |     |
| ----------- | ------ | --- | --- | --- |
| 2.1.3 Nhận  | xét    |     |     |     |
HRM và iOffice đã cung cấp dữ liệu và các quy trình nghiệp vụ cần thiết cho
phạm vi đề tài. Vì vậy, MyHCMUT Mobile không xây dựng lại các hệ thống này
| mà tập trung | cung cấp một | kênh truy | cập trên thiết | bị di động. |
| ------------ | ------------ | --------- | -------------- | ----------- |
Từ đó, ứng dụng cần tích hợp với các hệ thống hiện hữu để truy xuất dữ liệu
và gửi yêu cầu xử lý; tuân theo quyền hạn và quy trình của từng hệ thống; đồng
thời tổ chức các chức năng được lựa chọn theo hướng phù hợp với tương tác trên
| thiết bị di | động. |     |     |     |
| ----------- | ----- | --- | --- | --- |
10

| 2.2 | Một số giải | pháp có | liên quan |     |     |
| --- | ----------- | ------- | --------- | --- | --- |
Bên cạnh các hệ thống của Nhà trường, nhóm tham khảo Base HRM và Tanca
nhằm tìm hiểu cách các giải pháp quản lý nhân sự tổ chức chức năng tự phục vụ
và tương tác trên thiết bị di động. Việc khảo sát chỉ mang tính tham khảo, không
| nhằm  | lựa chọn sản phẩm | thay thế HRM | hoặc iOffice. |     |     |
| ----- | ----------------- | ------------ | ------------- | --- | --- |
| 2.2.1 | Base HRM          |              |               |     |     |
Base HRM là giải pháp quản lý nhân sự thuộc hệ sinh thái Base [23]. Trong
phạm vi đề tài, nhóm tham khảo cách giải pháp tổ chức thông tin nhân sự, các
tiện ích tự phục vụ và việc theo dõi các yêu cầu liên quan đến người dùng.
|     |                       |     | (b) Tiện  | ích tự phục | vụ và |
| --- | --------------------- | --- | --------- | ----------- | ----- |
|     | (a)Khônggianlàmviệcsố |     | gửiđềxuất |             |       |
Hình 2.3: Minh họa giao diện ứng dụng di động trong hệ sinh thái Base.vn [23]
Các cách tổ chức trên chỉ được xem xét ở mức tham khảo do MyHCMUT
Mobile phải tuân theo dữ liệu và quy trình nghiệp vụ hiện hữu của Nhà trường.
11

| 2.2.2 | Tanca |     |     |     |     |
| ----- | ----- | --- | --- | --- | --- |
Tanca [24] là giải pháp quản lý nhân sự có hỗ trợ các thao tác thường dùng
trên thiết bị di động. Nhóm tham khảo cách giải pháp tổ chức việc tiếp cận thông
| tin cá nhân | và các   | yêu cầu tự phục | vụ của người             | dùng. |     |
| ----------- | -------- | --------------- | ------------------------ | ----- | --- |
|             | (a) Tổng | quan ca làm     | và (b)Quảnlývàgửiđơntừtự |       |     |
|             | chấmcông |                 | phụcvụ                   |       |     |
Hình 2.4: Minh họa giao diện ứng dụng di động Tanca Mobile [24]
Tương tự Base HRM, các chức năng của Tanca không được áp dụng trực tiếp
mà chỉ được sử dụng làm tham khảo cho cách tổ chức tương tác trên thiết bị di
động.
| 2.3 | Đối chiếu | và định | hướng | cho đề | tài |
| --- | --------- | ------- | ----- | ------ | --- |
Các hệ thống được khảo sát có vai trò khác nhau đối với đề tài. HRM và
iOffice là các hệ thống nguồn mà ứng dụng cần tích hợp, trong khi Base HRM
và Tanca cung cấp tham khảo về cách tổ chức chức năng trên thiết bị di động.
12

| Bảng    | 2.1: Đối chiếu | các hệ thống  | và giải pháp | có liên quan |
| ------- | -------------- | ------------- | ------------ | ------------ |
| Nộidung | HRM/iOffice    | BaseHRM/Tanca |              | MyHCMUT      |
Mobile
| Vaitrò      | Hệthốngnghiệpvụ | Giảiphápthamkhảo |     | Kênhtruycậpdi   |
| ----------- | --------------- | ---------------- | --- | --------------- |
|             | hiệnhữu         |                  |     | động            |
| Dữliệuvàquy | Theonghiệpvụcủa | Theotừngsảnphẩm  |     | Sửdụnghệthống   |
| trình       | Nhàtrường       |                  |     | hiệnhữu         |
| Tươngtácdi  | Cácnghiệpvụkhảo | Cóhỗtrợtươngtác  |     | Tổchứccácnghiệp |
| động        | sátchủyếuquaWeb | trênmobile       |     | vụđượclựachọn   |
trênmobile
| Phạmviáp | Nguồndữliệuvàxử | Thamkhảocáchtổ |     | Tíchhợp         |
| -------- | --------------- | -------------- | --- | --------------- |
| dụng     | lýnghiệpvụ      | chứctươngtác   |     | HRM/iOfficetheo |
phạmviđềtài
Từ kết quả khảo sát, MyHCMUT Mobile được định hướng là ứng dụng di
động tích hợp với các hệ thống hiện hữu thay vì một hệ thống nghiệp vụ độc lập.
Ứng dụng sử dụng dữ liệu và quy trình từ HRM, iOffice, đồng thời tổ chức các
chức năng được lựa chọn thành các luồng tương tác phù hợp với thiết bị di động.
Các yêu cầu và giải pháp kỹ thuật cụ thể được trình bày trong các chương tiếp
theo.
13

| Chương |     | 3    |        |     |     |
| ------ | --- | ---- | ------ | --- | --- |
| CƠ     | SỞ  | LÝ   | THUYẾT |     | VÀ  |
| CÔNG   |     | NGHỆ |        |     |     |
Chương này trình bày các cơ sở lý thuyết cùng các công nghệ được nhóm tìm
hiểu, nghiên cứu và lựa chọn cho việc phát triển MyHCMUT Mobile.
| 3.1   | Cơ sở     | lý thuyết |      |            |     |
| ----- | --------- | --------- | ---- | ---------- | --- |
| 3.1.1 | Kiến trúc | phân      | tầng | và mô hình | MVC |
Kiến trúc phân tầng là cách tổ chức phần mềm thành các thành phần có trách
nhiệm khác nhau, chẳng hạn tiếp nhận yêu cầu, xử lý nghiệp vụ và truy xuất dữ
liệu. Việc phân chia trách nhiệm giúp làm rõ luồng xử lý và hạn chế sự phụ thuộc
| trực tiếp | giữa giao | diện với | các thao | tác dữ liệu. |     |
| --------- | --------- | -------- | -------- | ------------ | --- |
Model–View–Controller (MVC) là mô hình tổ chức phần mềm phân tách ba
trách nhiệm chính: Model biểu diễn cấu trúc dữ liệu và các thao tác liên quan
đến dữ liệu; View đảm nhiệm việc trình bày thông tin và nhận tương tác từ người
dùng; Controller tiếp nhận các yêu cầu điều khiển và điều phối hoạt động giữa
Model và View. Mối quan hệ tương tác giữa ba thành phần này được minh họa
| trong Hình | 3.1. |     |     |     |     |
| ---------- | ---- | --- | --- | --- | --- |
14

Hình 3.1: Mô hình kiến trúc Model–View–Controller (MVC)
Trong các ứng dụng backend, mô hình này có thể được kết hợp với các lớp bổ
sung như middleware và service để tổ chức các trách nhiệm xác thực, kiểm tra
quyền truy cập và xử lý nghiệp vụ phức tạp. Đối với các backend hiện hữu mà
MyHCMUT Mobile tích hợp, luồng xử lý được tổ chức theo hướng:
Route / Middleware−→Controller−→Service−→Model (3.1)
Trong đó, Route và middleware tiếp nhận yêu cầu HTTP, thực hiện các bước
kiểmtradùngchung(nhưxácthựcdanhtính,kiểmtraquyềntruycập);controller
điều phối yêu cầu; service thực thi các quy tắc nghiệp vụ; model hỗ trợ tương tác
và truy xuất cơ sở dữ liệu.
Ứng dụng MyHCMUT Mobile không áp dụng nguyên dạng mô hình MVC
của backend cho giao diện Flutter. Thay vào đó, phần ứng dụng di động được
tổ chức thành các thành phần giao diện (Presentation / Widget), quản lý trạng
thái (State Management) và truy cập dữ liệu (Data Access / Repository). Cách tổ
chức cụ thể của từng phía được trình bày tại Chương 5.
15

3.1.2 Kiến trúc hướng phân hệ
Kiến trúc hướng phân hệ (Modular Architecture) tổ chức mã nguồn theo các
nhóm chức năng hoặc miền nghiệp vụ. Mỗi phân hệ tập hợp những thành phần
liên quan đến một nhóm chức năng, đồng thời sử dụng các thành phần dùng
chung khi cần thiết. Sự khác biệt giữa cách tổ chức mã nguồn theo tầng kỹ thuật
và theo phân hệ được minh họa trong Hình 3.2.
Hình 3.2: Minh họa tổ chức mã nguồn theo tầng và theo phân hệ
Đối với MyHCMUT Mobile, các nhóm chức năng như hồ sơ cá nhân, nghỉ
phép, công tác, văn phòng số và lịch làm việc có dữ liệu và luồng tương tác khác
nhau. Việc tổ chức mã nguồn theo phân hệ giúp xác định rõ phạm vi trách nhiệm
của từng nhóm chức năng, trong khi các thành phần dùng chung phục vụ những
nhu cầu xuyên suốt như giao tiếp mạng, điều hướng và quản lý phiên đăng nhập.
Kiến trúc hướng phân hệ không đồng nghĩa với việc mỗi phân hệ phải là một
dịch vụ triển khai độc lập. Trong phạm vi ứng dụng di động, các phân hệ có thể
được tổ chức thành những module mã nguồn và cùng hoạt động trong một ứng
dụng thống nhất.
3.1.3 RESTful API và giao thức HTTPS
Representational State Transfer (REST) là một phong cách kiến trúc được sử
dụng trong thiết kế các hệ thống giao tiếp qua mạng. Trong các API theo hướng
REST, tài nguyên được xác định thông qua địa chỉ truy cập (URI) và được thao
16

tác bằng những phương thức HTTP phù hợp, chẳng hạn GET để truy xuất dữ liệu,
POST để gửi dữ liệu, PUT hoặc PATCH để cập nhật dữ liệu và DELETE để xóa dữ
liệu. Một đặc tính quan trọng của REST là phi trạng thái (stateless): mỗi yêu cầu
| cần chứa | đủ thông | tin cần thiết để | máy chủ xử | lý độc | lập. |
| -------- | -------- | ---------------- | ---------- | ------ | ---- |
Ứng dụng MyHCMUT Mobile giao tiếp với các dịch vụ backend thông qua
API sử dụng HTTP và dữ liệu trao đổi theo định dạng phù hợp với từng dịch vụ,
chủ yếu là JSON. Phản hồi từ backend cung cấp dữ liệu hoặc kết quả xử lý để
| ứng dụng | cập nhật | trạng thái và hiển | thị cho | người dùng. |     |
| -------- | -------- | ------------------ | ------- | ----------- | --- |
HTTPS sử dụng giao thức TLS để bảo vệ tính bí mật và tính toàn vẹn của
dữ liệu trong quá trình truyền giữa ứng dụng và máy chủ. Việc sử dụng HTTPS
giúp giảm nguy cơ nội dung trao đổi bị đọc trộm hoặc sửa đổi bởi bên thứ ba trên
đường truyền. Tuy nhiên, HTTPS chỉ bảo vệ kênh truyền và không thay thế các
| cơ chế | xác thực, phân | quyền và kiểm | tra dữ liệu | tại backend. |     |
| ------ | -------------- | ------------- | ----------- | ------------ | --- |
Trong đề tài, REST API và HTTPS là cơ sở cho việc tích hợp ứng dụng di
động với các hệ thống HRM, iOffice và dịch vụ xác thực hiện hữu. Cách tổ chức
| lời gọi | API và xử lý | phản hồi được | trình bày | tại Chương | 5.  |
| ------- | ------------ | ------------- | --------- | ---------- | --- |
| 3.1.4   | Xác thực     | dựa trên JWT  |           |            |     |
JSONWebToken(JWT),đượcđịnhnghĩatrongchuẩnRFC7519[18],làmột
định dạng token dùng để biểu diễn các thông tin dưới dạng tập hợp các claim.
Một JWT thông dụng gồm ba phần: Header, Payload và Signature, như minh họa
| trong Hình | 3.3. |     |     |     |     |
| ---------- | ---- | --- | --- | --- | --- |
17

Hình 3.3: Cấu trúc JSON Web Token (JWT)
Header chứa thông tin mô tả token và thuật toán ký; Payload chứa các claim
liên quan đến token; Signature được sử dụng để kiểm tra tính toàn vẹn của token
theo cơ chế ký tương ứng. Nội dung Payload thông thường chỉ được mã hóa theo
Base64URL và không mặc nhiên được mã hóa để bảo mật nội dung. Vì vậy,
không nên lưu thông tin nhạy cảm trong Payload với giả định rằng người khác
không thể đọc được token.
Trong mô hình xác thực dựa trên token, sau khi người dùng đăng nhập thành
công, ứng dụng nhận thông tin xác thực và sử dụng token khi gửi các yêu cầu
đến dịch vụ backend. Backend có trách nhiệm kiểm tra tính hợp lệ của token, xác
định ngữ cảnh người dùng và kiểm tra quyền thực hiện nghiệp vụ tương ứng. Do
đó, việc sử dụng JWT phục vụ xác thực không thay thế cơ chế phân quyền tại
backend.
Trong MyHCMUT Mobile, access token được sử dụng khi ứng dụng giao tiếp
với các dịch vụ hiện hữu. Ứng dụng bổ sung token vào các yêu cầu API cần xác
thực, trong khi các backend tương ứng chịu trách nhiệm xác thực token và kiểm
tra quyền đối với nghiệp vụ được yêu cầu. Cách tổ chức các kết nối API, quản lý
token và xử lý lỗi xác thực được trình bày chi tiết tại Chương 5.
18

3.2 Công nghệ phía ứng dụng di động
MyHCMUT Mobile là ứng dụng di động tích hợp các chức năng nghiệp vụ
từ hệ thống Quản lý Nhân sự (HRM) và Văn phòng điện tử (iOffice) của Nhà
trường. Nhóm sử dụng Flutter để phát triển ứng dụng theo hướng đa nền tảng, kết
hợp với các công cụ tổ chức mã nguồn, quản lý trạng thái, điều hướng, giao tiếp
mạng và lưu trữ dữ liệu cục bộ. Các công nghệ được lựa chọn dựa trên yêu cầu
chức năng, đặc điểm tích hợp với hệ thống hiện hữu và điều kiện thực hiện đề tài.
3.2.1 Nền tảng Flutter SDK và ngôn ngữ Dart
Flutter là bộ công cụ phát triển giao diện đa nền tảng, mã nguồn mở do
Google phát triển [4], sử dụng ngôn ngữ lập trình Dart [5]. Flutter cung cấp hệ
thống widget và cơ chế dựng hình riêng để xây dựng giao diện ứng dụng. Dart hỗ
trợ kiểm tra kiểu dữ liệu, sound null safety và lập trình bất đồng bộ thông qua
Future, Stream cùng cú pháp async/await.
ĐềtàihướngđếnviệcpháttriểnứngdụngdiđộngcókhảnănghỗtrợAndroid
vàiOStrongđiềukiệnthờigianvànguồnlựcthựchiệncógiớihạn.Vìvậy,nhóm
xemxétcáchướngpháttriểnứngdụngdựatrênkhảnăngchiasẻmãnguồn,công
sức phát triển và mức độ đáp ứng các chức năng cần triển khai. Bảng 3.1 trình
bày một số đặc điểm của các hướng phát triển ứng dụng di động.
19

|           | Bảng | 3.1:           | So sánh các | hướng phát     | triển ứng | dụng di động |
| --------- | ---- | -------------- | ----------- | -------------- | --------- | ------------ |
| Tiêuchí   |      | Native         |             | ReactNative    |           | Flutter      |
| Ngônngữ   |      | Kotlin/Javacho |             | JavaScripthoặc |           | Dart         |
| pháttriển |      | Android;       |             | TypeScript     |           |              |
Swift/Objective-C
choiOS
| Khảnăngchia |     | Giaodiệnvàmã      |     | Cóthểchiasẻphần |     | Cóthểchiasẻphần |
| ----------- | --- | ----------------- | --- | --------------- | --- | --------------- |
| sẻmãnguồn   |     | nguồnứngdụng      |     | lớnmãnguồngiao  |     | lớnmãnguồngiao  |
|             |     | thườngđượcphát    |     | diệnvàlogicgiữa |     | diệnvàlogicgiữa |
|             |     | triểnriêngchotừng |     | AndroidvàiOS    |     | AndroidvàiOS    |
nềntảng
| Cáchxây      |     | Sửdụngcácthành  |     | Sửdụngcácthành     |     | Xâydựnggiaodiện |
| ------------ | --- | --------------- | --- | ------------------ | --- | --------------- |
| dựnggiaodiện |     | phầngiaodiệncủa |     | phầngiaodiệnnative |     | bằnghệthống     |
|              |     | từngnềntảng     |     | thôngquakiếntrúc   |     | widgetvàcơchế   |
|              |     |                 |     | củaReactNative     |     | dựnghìnhcủa     |
Flutter
| Côngsứcphát |     | Cầnpháttriểnvà    |     | Cóthểdùngchung   |     | Cóthểdùngchung    |
| ----------- | --- | ----------------- | --- | ---------------- | --- | ----------------- |
| triểnđanền  |     | duytrìcácphầnmã   |     | phầnlớnmãnguồn   |     | phầnlớnmãnguồn    |
| tảng        |     | nguồnriêngcho     |     | nhưngvẫncầnxửlý  |     | nhưngvẫncầnxửlý   |
|             |     | AndroidvàiOS      |     | cáckhácbiệtgiữa  |     | cáckhácbiệtgiữa   |
|             |     |                   |     | hainềntảng       |     | hainềntảng        |
| Điểmcầncân  |     | Cầnphốihợpquá     |     | Cầnlàmviệcvớihệ  |     | Cầnlàmviệcvớihệ   |
| nhắc        |     | trìnhpháttriểnvà  |     | sinhtháiReact    |     | sinhtháiFluttervà |
|             |     | duytrìứngdụngtrên |     | Nativevàcácthành |     | cácthànhphầntích  |
|             |     | hainềntảng        |     | phầntíchhợptương |     | hợptươngứng       |
ứng
Trong phạm vi đề tài, nhóm lựa chọn Flutter do khả năng phát triển giao diện
và logic ứng dụng cho Android và iOS từ một cơ sở mã nguồn chung. Nhóm
sử dụng Flutter và Dart để xây dựng giao diện cùng các luồng tương tác của
MyHCMUT Mobile. Trong quá trình thực hiện đồ án, nhóm tập trung triển khai
và kiểm thử ứng dụng trên nền tảng Android. Khả năng vận hành trên iOS chưa
được kiểm chứng và cần được đánh giá bổ sung, đặc biệt đối với các chức năng
| phụ thuộc | nền     | tảng như | thông | báo đẩy và | xử lý tệp. |     |
| --------- | ------- | -------- | ----- | ---------- | ---------- | --- |
| 3.2.2     | Tổ chức | mã       | nguồn | với Melos  | Monorepo   |     |
Monorepo là cách tổ chức nhiều ứng dụng hoặc package có liên quan trong
cùng một kho mã nguồn. Trong hệ sinh thái Dart và Flutter, Melos hỗ trợ quản lý
20

workspace gồm nhiều package, liên kết các package nội bộ và thực thi các tác vụ
| phát triển | trên | toàn workspace |     | [7]. |     |     |     |
| ---------- | ---- | -------------- | --- | ---- | --- | --- | --- |
MyHCMUT Mobile bao gồm nhiều nhóm chức năng như hồ sơ cá nhân,
nghỉ phép, công tác, văn phòng số và lịch làm việc. Các nhóm chức năng này có
luồng nghiệpvụ riêng nhưng cùngsử dụng nhữngthành phần nhưgiao diệndùng
chung, giao tiếp mạng và mô hình dữ liệu. Nhóm xem xét các phương án tổ chức
mã nguồn nhằm quản lý các thành phần dùng chung và quan hệ phụ thuộc giữa
các nhóm chức năng. Bảng 3.2 trình bày ưu điểm và hạn chế của các phương án.
|          |     | Bảng 3.2:                | So  | sánh các | phương | án tổ chức             | mã nguồn |
| -------- | --- | ------------------------ | --- | -------- | ------ | ---------------------- | -------- |
| Phươngán |     | Ưuđiểm                   |     |          |        | Hạnchế                 |          |
| Dựánđơn  |     | Cấuhìnhđơngiản,thuậntiện |     |          |        | Cầnquyướctổchứcmãnguồn |          |
(SingleApp) khikhởitạovàquảnlýmộtứng đểkiểmsoátquanhệphụthuộc
|     |     | dụng |     |     |     | giữacácnhómchứcnăngkhi |     |
| --- | --- | ---- | --- | --- | --- | ---------------------- | --- |
dựánpháttriển
| Đakhomã |     | Chophépquảnlývàpháttriển |     |     |     | Cầnphốihợpphiênbảnvàquá |     |
| ------- | --- | ------------------------ | --- | --- | --- | ----------------------- | --- |
nguồn(Polyrepo) từngkhomãnguồnriêngbiệt trìnhtíchhợpkhicáckhomã
nguồnsửdụngchungthưviện
hoặcphụthuộclẫnnhau
| Modular     |     | Quảnlýcácpackagechứcnăng |     |     |     | Cầncấuhìnhworkspacevà  |     |
| ----------- | --- | ------------------------ | --- | --- | --- | ---------------------- | --- |
| Monorepovới |     | vàpackagedùngchungtrong  |     |     |     | kiểmsoátquanhệphụthuộc |     |
| Melos       |     | cùngmộtworkspace;hỗtrợ   |     |     |     | giữacácpackage         |     |
thựcthitácvụtrênnhiều
package
Nhóm tổ chức mã nguồn MyHCMUT Mobile thành các package theo nhóm
chức năng kết hợp với các package dùng chung. Việc phân chia này giúp xác định
phạm vi của từng package và các thành phần được chia sẻ giữa chúng. Melos
được sử dụng để quản lý các package trong cùng một workspace, hỗ trợ nhóm
phát triển và tích hợp các chức năng trên một kho mã nguồn thống nhất. Cấu trúc
package và quan hệ phụ thuộc cụ thể được trình bày tại Chương 5.
| 3.2.3 | Quản | lý trạng |     | thái với | Riverpod |     |     |
| ----- | ---- | -------- | --- | -------- | -------- | --- | --- |
Riverpod là thư viện quản lý trạng thái và phụ thuộc trong ứng dụng Dart và
Flutter [6]. Thông qua các provider, thư viện cho phép tổ chức dữ liệu và trạng
thái xử lý tách khỏi mã xây dựng giao diện. Các thành phần giao diện có thể theo
21

dõi provider và cập nhật khi trạng thái liên quan thay đổi.
Trong MyHCMUT Mobile, các nhóm chức năng cần hiển thị dữ liệu nhận từ
backend và phản ánh những trạng thái như đang tải dữ liệu, tải thành công hoặc
xảy ra lỗi. Một số dữ liệu và trạng thái cũng được sử dụng bởi nhiều màn hình
trong cùng một luồng nghiệp vụ. Nhóm lựa chọn Riverpod để quản lý các trạng
thái này và phối hợp giữa giao diện với các thành phần truy cập dữ liệu.
Ứng dụng sử dụng Riverpod 3 kết hợp với riverpod_generator để hỗ trợ
khai báo và sinh mã cho các provider. AsyncValue được sử dụng để biểu diễn
trạng thái của quá trình xử lý bất đồng bộ, trong khi autoDispose hỗ trợ quản
lý vòng đời của provider khi không còn được sử dụng. Cách tổ chức provider
và luồng dữ liệu giữa giao diện với các thành phần nghiệp vụ được trình bày tại
Chương 5.
3.2.4 Điều hướng khai báo với GoRouter
GoRouter là thư viện hỗ trợ tổ chức điều hướng khai báo trong ứng dụng
Flutter, cho phépđịnh nghĩa các tuyến điều hướng, truyền thông tin đến mànhình
đích và xử lý việc chuyển trang theo trạng thái ứng dụng [8].
MyHCMUT Mobile gồm nhiều nhóm màn hình chính, các màn hình chi tiết
nghiệp vụ và những luồng điều hướng phát sinh khi người dùng chọn thông báo
đẩy. Nhóm sử dụng GoRouter để tổ chức các tuyến điều hướng, duy trì trạng thái
các nhánh màn hình chính và hỗ trợ mở màn hình nghiệp vụ tương ứng từ dữ liệu
thông báo.
Cơ chế redirect được sử dụng để điều hướng theo trạng thái đăng nhập.
Việc kiểm tra quyền truy cập dữ liệu và quyền thực hiện các thao tác nghiệp vụ
thuộc trách nhiệm của các dịch vụ backend tương ứng. Cấu trúc điều hướng và
cách xử lý các luồng chuyển trang của ứng dụng được trình bày tại Chương 5.
3.2.5 Giao tiếp mạng với Dio
Dio là thư viện HTTP client dành cho Dart, hỗ trợ gửi yêu cầu đến các dịch
vụ backend và xử lý phản hồi [9]. Thư viện cung cấp cơ chế interceptor để thực
22

hiện các thao tác dùng chung trước khi gửi yêu cầu, sau khi nhận phản hồi hoặc
khi phát sinh lỗi. Dio cũng hỗ trợ gửi dữ liệu dạng FormData và theo dõi tiến
trình truyền tệp.
MyHCMUT Mobile cần giao tiếp với các dịch vụ backend của HRM và
iOffice để truy xuất dữ liệu và thực hiện các nghiệp vụ. Các yêu cầu này cần
được bổ sung thông tin xác thực và xử lý phản hồi lỗi theo cách thống nhất. Bên
cạnh đó, một số nghiệp vụ cho phép người dùng gửi tệp đính kèm hoặc tệp minh
chứng.
Nhóm sử dụng Dio để tổ chức các lời gọi API đến HRM và iOffice. Cơ chế
interceptor hỗ trợ bổ sung thông tin xác thực và xử lý lỗi dùng chung; FormData
được sử dụng cho các yêu cầu gửi dữ liệu có tệp đính kèm. Cách tổ chức các
HTTP client và cơ chế tích hợp với từng dịch vụ backend được trình bày tại
Chương 5.
3.2.6 Lưu trữ dữ liệu cục bộ
Lưu trữ dữ liệu cục bộ cho phép ứng dụng giữ lại một số thông tin trên thiết
bị để phục vụ các lần truy cập tiếp theo. Tùy theo đặc điểm dữ liệu và nhu cầu
sử dụng, MyHCMUT Mobile sử dụng hai cơ chế lưu trữ cục bộ: SQLite và
SharedPreferences.
SQLite: SQLite là hệ quản trị cơ sở dữ liệu quan hệ nhúng, cho phép lưu trữ
và truy vấn dữ liệu trực tiếp trên thiết bị [13]. Nhóm sử dụng SQLite thông qua
thư viện sqflite để lưu trữ 47 danh mục tham chiếu của hệ thống HRM, bao
gồm các danh mục như quốc gia, tỉnh thành, dân tộc, học vị, chức danh và đơn
vị. Các danh mục này được sử dụng trong nhiều biểu mẫu và bộ chọn của ứng
dụng. Việc lưu trữ cục bộ giúp ứng dụng truy xuất các danh mục đã có trên thiết
bị mà không cần gửi yêu cầu mạng mỗi lần hiển thị.
SharedPreferences: SharedPreferences cung cấp cơ chế lưu trữ cục bộ dạng
khóa–giá trị, phù hợp với các dữ liệu có cấu trúc đơn giản như tùy chọn giao diện
và một số dữ liệu lưu đệm của ứng dụng [14]. Nhóm sử dụng SharedPreferences
để lưu một số tùy chọn giao diện và lưu đệm dữ liệu hồ sơ cá nhân đã tải từ
23

backend. Khi người dùng truy cập hồ sơ, ứng dụng có thể hiển thị dữ liệu đã lưu
trước khi nhận dữ liệu cập nhật từ hệ thống nguồn. Dữ liệu lưu đệm cũng hỗ trợ
người dùng xem lại thông tin hồ sơ khi thiết bị tạm thời không có kết nối mạng.
Dữ liệu lưu trữ cục bộ phục vụ việc hiển thị và sử dụng ứng dụng; dữ liệu
nghiệp vụ chính thức cùng kết quả xử lý, phê duyệt tiếp tục được quản lý tại các
hệ thống backend tương ứng. Phạm vi dữ liệu lưu trữ, cách cập nhật dữ liệu và xử
| lý bộ nhớ | đệm được | trình bày  | tại Chương | 5.        |     |
| --------- | -------- | ---------- | ---------- | --------- | --- |
| 3.2.7     | Biểu     | mẫu native | và các thư | viện tích | hợp |
Bên cạnh các công nghệ chính, MyHCMUT Mobile sử dụng một số thư viện
để tích hợp các chức năng từ hệ thống hiện hữu và hỗ trợ tương tác trên thiết bị di
động. Bảng 3.3 tổng hợp các thư viện tích hợp chính và vai trò của chúng trong
đề tài.
|         | Bảng 3.3: | Một số             | thư viện tích hợp | trong MyHCMUT | Mobile |
| ------- | --------- | ------------------ | ----------------- | ------------- | ------ |
| Thưviện |           | Vaitròtronghệthống |                   |               |        |
firebase_messaging TiếpnhậnthôngbáođẩyquaFirebaseCloudMessagingvà
cungcấpdữliệuthôngbáođểứngdụngxửlý,điềuhướng
đếnnộidungnghiệpvụliênquan[19].
| freezedvàjson_ |     | Hỗtrợsinhmãchocáclớpdữliệuvàchuyểnđổigiữađối |     |     |     |
| -------------- | --- | -------------------------------------------- | --- | --- | --- |
| serializable   |     | tượngDartvớidữliệuJSON[10].                  |     |     |     |
socket_io_client Hỗtrợtraođổisựkiệngiữaứngdụngvàdịchvụbackend
trongcácchứcnăngcầncậpnhậttrạngtháitheothờigian
thực,chẳnghạnđiểmdanhcuộchọp[20].
Biểu mẫu hồ sơ và tạo lịch được xây dựng bằng các widget Flutter, liên kết
với trạng thái Riverpod và request Dio. Dữ liệu hiện tại, danh mục lựa chọn và
policy được tải từ backend; ứng dụng kiểm tra đầu vào để hướng dẫn người dùng
và chỉ gửi những trường phù hợp với nhánh thao tác. Khi yêu cầu có minh chứng
hoặc tài liệu, client gửi tệp theo hợp đồng multipart tương ứng. Kiểm tra trên
| giao diện | không | thay thế kiểm | tra quyền | và dữ liệu ở | server. |
| --------- | ----- | ------------- | --------- | ------------ | ------- |
Biểu mẫu cần biểu diễn trạng thái tải, lưu, thành công và lỗi. Đặc biệt, tạo
lịch và upload là hai request; giao diện phải giữ ID đã nhận để thử lại trong phiên
form khi tệp lỗi. Riverpod quản lý trạng thái này, Dio thực hiện giao tiếp, còn
24

các thư viện trong Bảng 3.3 phục vụ mô hình dữ liệu, thông báo và cập nhật thời
| gian thực. | Luồng | kỹ thuật chi | tiết được trình | bày tại Chương | 5.  |
| ---------- | ----- | ------------ | --------------- | -------------- | --- |
25

3.3 Công nghệ backend
MyHCMUT Mobile được phát triển theo định hướng ứng dụng di động tích
hợp, kết nối trực tiếp với các hệ thống dịch vụ backend hiện hữu của Nhà trường.
Việc tìm hiểu và nắm vững ngăn xếp công nghệ phía backend là cơ sở bắt buộc
để nhóm thiết kế các giao diện tích hợp, phân giải giao thức và xử lý dữ liệu đồng
bộ giữa thiết bị di động và máy chủ.
3.3.1 Nền tảng dịch vụ và lưu trữ dữ liệu
Các hệ thống backend của Nhà trường (HRM và iOffice) được xây dựng trên
nền tảng Node.js kết hợp framework Express [16, 17]. Node.js cung cấp môi
trường thực thi JavaScript bất đồng bộ hiệu năng cao phía máy chủ, trong khi
Express hỗ trợ tổ chức hệ thống định tuyến (routing) và các middleware xử lý yêu
cầu HTTP. Về lưu trữ dữ liệu, hệ thống sử dụng hệ quản trị cơ sở dữ liệu quan
hệ PostgreSQL [21] kết hợp thư viện ORM Sequelize [22] để quản lý, ánh xạ và
đảm bảo tính toàn vẹn của dữ liệu nghiệp vụ nhân sự và văn bản. Ngoài ra, Redis
được sử dụng làm máy chủ lưu trữ bộ nhớ đệm phân tán cho các dữ liệu có vòng
đời ngắn.
Trong phạm vi đề tài, nhóm không xây dựng lại hệ thống quản trị dữ liệu mới
mà tích hợp trực tiếp vào các dịch vụ backend này. Nhóm nghiên cứu cấu trúc
API hiện hữu, thực hiện kết nối với các route nghiệp vụ của HRM/iOffice và giữ
việc xác thực, phân quyền, xử lý transaction tại backend. Biểu mẫu native nhận
policy và gửi dữ liệu qua API; không truy cập trực tiếp tầng lưu trữ.
3.3.2 Môi trường thực thi: Node.js
Node.js là một môi trường runtime mã nguồn mở, đa nền tảng, cho phép thực
thi JavaScript bên ngoài trình duyệt web, dựa trên V8 JavaScript engine của
Chrome. Điểm khác biệt cốt lõi của Node.js so với các nền tảng máy chủ truyền
thống nằm ở kiến trúc hướng sự kiện (Event-driven):
• Single-threaded: Node.js sử dụng một luồng chính duy nhất để xử lý các
kết nối, giúp tiết kiệm tài nguyên hệ thống (RAM, CPU) so với mô hình
26

|     | đa  | luồng | truyền thống. |     |     |     |     |     |
| --- | --- | ----- | ------------- | --- | --- | --- | --- | --- |
• Non-blocking I/O: Khi gặp các tác vụ nặng về I/O (như đọc file, truy vấn
Database), Node.js sẽ không dừng lại chờ đợi (block) mà đẩy tác vụ đó
xuống hệ thống xử lý nền, sau đó tiếp tục xử lý các yêu cầu khác.
|     |     | Hình | 3.4: Mô | hình | hoạt động | Event | Loop | của Node.js |
| --- | --- | ---- | ------- | ---- | --------- | ----- | ---- | ----------- |
Đối với đề tài này, Node.js là một lựa chọn hiệu quả. Tuy nhiên đối với các hệ
thống khác với những tác vụ tính toán nặng (AI, xử lý ảnh, data mining) sẽ khiến
| Event | Loop | bị   | nghẽn, làm | chậm   | toàn bộ    | hệ thống. |     |     |
| ----- | ---- | ---- | ---------- | ------ | ---------- | --------- | --- | --- |
| 3.3.3 |      | Ngôn | ngữ lập    | trình: | TypeScript |           |     |     |
TypeScript là một ngôn ngữ lập trình mã nguồn mở được phát triển bởi
Microsoft, đóng vai trò là một siêu tập (Superset) của JavaScript.
• Static Typing: TypeScript bổ sung hệ thống kiểu dữ liệu tĩnh (Static
Types) vào JavaScript. Các kiểu dữ liệu được kiểm tra ngay tại thời điểm
biên dịch (Compiletime), giúp phát hiện sớm các lỗi sai lệch kiểu dữ liệu
|     | trước | khi | ứng dụng | được | chạy. |     |     |     |
| --- | ----- | --- | -------- | ---- | ----- | --- | --- | --- |
• Mô hình hóa dữ liệu: Cung cấp các cấu trúc lập trình hướng đối tượng
nâng cao như Interface, Class và Generics, giúp định nghĩa rõ ràng các
|     | DTO | (Data | Transfer | Object) | và cấu | trúc | dữ liệu | trả về từ API. |
| --- | --- | ----- | -------- | ------- | ------ | ---- | ------- | -------------- |
27

| 3.3.4 | ExpressJS |     |     | Framework |     |     |     |
| ----- | --------- | --- | --- | --------- | --- | --- | --- |
ExpressJS là một Framework ứng dụng web (Web Application Framework)
tối giản và linh hoạt được xây dựng trên nền tảng Node.js. Nó cung cấp một bộ
các tính năng mạnh mẽ để phát triển ứng dụng web và API. Express.js đã trở
thành framework backend phổ biến nhất trong hệ sinh thái Node.js nhờ kiến trúc
| đơn     | giản, | hiệu  | suất cao | và khả   | năng mở        | rộng | dễ dàng.  |
| ------- | ----- | ----- | -------- | -------- | -------------- | ---- | --------- |
|         |       |       |          | Hình     | 3.5: ExpressJS |      | Framework |
| 3.3.4.1 | Các   | thành |          | phần cốt | lõi            |      |           |
• Middleware: Là các hàm có quyền truy cập vào đối tượng yêu cầu (req),
đối tượng phản hồi (res) và hàm middleware tiếp theo trong chu trình xử
lý (next). Middleware dùng để xử lý logic, xác thực người dùng, log dữ
|     | liệu, | v.v. |     |     |     |     |     |
| --- | ----- | ---- | --- | --- | --- | --- | --- |
Routing:
• Cơ chế xác định cách ứng dụng phản hồi các yêu cầu từ client
đến một endpoint cụ thể (URI) bằng các phương thức HTTP (GET, POST,
|     | PUT, | DELETE). |     |     |     |     |     |
| --- | ---- | -------- | --- | --- | --- | --- | --- |
• Template Engine: Hỗ trợ tích hợp các template engine như EJS, Pug để
|         | render | giao | diện  | phía     | server (nếu | cần). |     |
| ------- | ------ | ---- | ----- | -------- | ----------- | ----- | --- |
| 3.3.4.2 | Vai    | trò  | trong | hệ thống |             |       |     |
Express.js đóng vai trò điều phối luồng dữ liệu, xử lý logic nghiệp vụ API
| (RESTful |     | API) | trước | khi tương | tác với | cơ sở | dữ liệu. |
| -------- | --- | ---- | ----- | --------- | ------- | ----- | -------- |
28

| 3.4 | Hệ  | quản | trị | Cơ  | sở dữ | liệu (Database) |     |     |     |
| --- | --- | ---- | --- | --- | ----- | --------------- | --- | --- | --- |
Cơ sở dữ liệu là thành phần nền tảng có vai trò lưu trữ, quản lý và truy xuất
thông tin phục vụ các nghiệp vụ cốt lõi của ứng dụng. Việc triển khai hợp lý giúp
| đảm   | bảo tính   | toàn | vẹn, | nhất quán | và an | toàn dữ liệu. |     |     |     |
| ----- | ---------- | ---- | ---- | --------- | ----- | ------------- | --- | --- | --- |
| 3.4.1 | PostgreSQL |      |      |           |       |               |     |     |     |
PostgreSQL (thường gọi là Postgres) là một Hệ quản trị cơ sở dữ liệu quan
hệ đối tượng (Object-Relational Database Management System - ORDBMS) mã
nguồn mở mạnh mẽ, nổi tiếng về độ tin cậy, tính toàn vẹn dữ liệu và hiệu suất
cao.
• TuânthủACID:Đảmbảotínhtoànvẹndữliệuởmứccaonhất(Atomicity,
Consistency, Isolation, Durability), rất quan trọng cho các ứng dụng yêu
|     | cầu | giao | dịch chính | xác | (tài chính, | thương mại | điện | tử). |     |
| --- | --- | ---- | ---------- | --- | ----------- | ---------- | ---- | ---- | --- |
• Hỗ trợ đa dạng kiểu dữ liệu: Ngoài các kiểu dữ liệu quan hệ truyền
thống, PostgreSQL hỗ trợ mạnh mẽ JSON/JSONB, cho phép lưu trữ dữ
|     | liệu | phi cấu | trúc    | (NoSQL)          | ngay | trong database | quan | hệ.            |           |
| --- | ---- | ------- | ------- | ---------------- | ---- | -------------- | ---- | -------------- | --------- |
|     | Khả  | năng    | mở rộng | (Extensibility): |      |                |      |                |           |
|     | •    |         |         |                  |      | Người          | dùng | có thể tự định | nghĩa các |
kiểu dữ liệu, các hàm (function) và sử dụng các extension mạnh mẽ (ví
|     | dụ: | PostGIS | cho | dữ liệu | địa lý). |     |     |     |     |
| --- | --- | ------- | --- | ------- | -------- | --- | --- | --- | --- |
• Multi-Version Concurrency Control: Cho phép nhiều người dùng đọc
và ghi dữ liệu cùng lúc mà không gây ra tình trạng khóa (lock) toàn bộ
|     | bảng, | giúp | tăng hiệu | suất | hệ thống. |     |     |     |     |
| --- | ----- | ---- | --------- | ---- | --------- | --- | --- | --- | --- |
29

|     |      |          | Hình    | 3.6: Kiến  | trúc tổng | quan    | của PostgreSQL  |
| --- | ---- | -------- | ------- | ---------- | --------- | ------- | --------------- |
|     | Kiến | trúc cốt | lõi của | PostgreSQL |           | bao gồm | các thành phần: |
• Các tiến trình (Processes): Điều phối toàn bộ hoạt động của cơ sở dữ
liệu. Nó tiếp nhận kết nối, cấp phát tiến trình xử lý truy vấn cho từng client
và duy trì các tác vụ chạy ngầm (ghi dữ liệu, dọn dẹp rác, sao lưu nhật ký).
• Shared Memory: Giúp tối ưu hóa hiệu suất truy xuất và tính toán. Thành
phần này dùng vùng nhớ chung để đệm dữ liệu (giảm tải đọc/ghi ổ cứng)
và cấp phát vùng nhớ riêng cho từng tiến trình để thực hiện các phép toán
|     | phức | tạp | như sắp | xếp hay | gộp | bảng. |     |
| --- | ---- | --- | ------- | ------- | --- | ----- | --- |
• Storage Manager: Lưu trữ vật lý và bảo vệ dữ liệu. Nó ghi lại dữ liệu
thực tế của các bảng/chỉ mục vào ổ cứng và duy trì nhật ký giao dịch
(Write-AHead Logs) để đảm bảo không mất mát dữ liệu và cho phép phục
|     | hồi | khi | hệ thống | gặp sự | cố. |     |     |
| --- | --- | --- | -------- | ------ | --- | --- | --- |
PostgreSQL là lựa chọn tốt cho các ứng dụng cần độ tin cậy cao và tính năng
mạnh mẽ. Đối với các hệ thống đơn giản hơn hay có scale lớn hơn, chúng ta nên
| cân | nhắc | sử dụng | MySQL | hoặc | NoSQL | thay | cho Postgres. |
| --- | ---- | ------- | ----- | ---- | ----- | ---- | ------------- |
30

| 3.4.2 |     | Redis |     |     |     |     |     |     |     |
| ----- | --- | ----- | --- | --- | --- | --- | --- | --- | --- |
Redis (Remote Dictionary Server) là một hệ quản trị cơ sở dữ liệu NoSQL
mã nguồn mở, hoạt động theo cơ chế in-memory và lưu trữ dữ liệu dưới dạng cặp
| key–value. |     | Các | đặc điểm | nổi | bật có | thể kể | đến: |     |     |
| ---------- | --- | --- | -------- | --- | ------ | ------ | ---- | --- | --- |
• In-memory: Dữ liệu được lưu chủ yếu trên RAM nên thời gian phản hồi
thường ở mức microsecond, phù hợp cho các hệ thống real-time.
• Key-Value: Mỗi khóa trỏ tới một giá trị. Các giá trị không chỉ là chuỗi
|     | đơn | thuần | mà có | thể là | nhiều | cấu trúc | dữ liệu | phức | tạp. |
| --- | --- | ----- | ----- | ------ | ----- | -------- | ------- | ---- | ---- |
• Tính bền vững dữ liệu: Dù là in-memory, Redis vẫn có cơ chế ghi xuống
đĩa (RDB snapshot, AOF log) để phục hồi dữ liệu khi khởi động lại hoặc
|     | gặp | sự  | cố. |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
• Mở rộng & tích hợp: Có thể chạy đơn node hoặc cụm (Redis Cluster), hỗ
|       | trợ    | nhiều | ngôn    | ngữ lập    | trình | qua client | đa  | dạng. |     |
| ----- | ------ | ----- | ------- | ---------- | ----- | ---------- | --- | ----- | --- |
| Redis | thường |       | được sử | dụng trong | các   | vai trò:   |     |       |     |
• Cache: Giảm tải cho database truyền thống bằng cách lưu kết quả truy
|     | vấn, | session, | hoặc | dữ liệu | đọc | nhiều. |     |     |     |
| --- | ---- | -------- | ---- | ------- | --- | ------ | --- | --- | --- |
• Cơ sở dữ liệu chính: Cho các trường hợp cần tốc độ cao, dữ liệu có tính
|     | biến | đổi | lớn (leaderboard, |     | realtime |     | analytics, | state | của game). |
| --- | ---- | --- | ----------------- | --- | -------- | --- | ---------- | ----- | ---------- |
• Messagebroker/pub-sub:Truyềndữliệuthờigianthựcgiữacácservice.
|       | • Hàng | đợi: | Xử lý    | bất đồng | bộ, | job queue, | delayed |      | job.      |
| ----- | ------ | ---- | -------- | -------- | --- | ---------- | ------- | ---- | --------- |
| 3.5   |        | Các  | dịch     | vụ tích  | hợp |            |         |      |           |
| 3.5.1 |        | Dịch | vụ thông | báo      | và  | truyền     | thông   | thời | gian thực |
Firebase Cloud Messaging (FCM) là nền tảng điện toán đám mây do Google
cung cấp [19], hỗ trợ gửi thông báo đẩy và thông điệp dữ liệu đến ứng dụng
trên thiết bị người dùng một cách tin cậy và tối ưu năng lượng pin. Bên cạnh đó,
Socket.IO là thư viện hỗ trợ giao tiếp hai chiều thời gian thực dựa trên giao thức
| WebSocket |     | [20], | bảo đảm | độ  | trễ truyền | thông | thấp. |     |     |
| --------- | --- | ----- | ------- | --- | ---------- | ----- | ----- | --- | --- |
31

Trong MyHCMUT Mobile, nhu cầu nhận biết các sự kiện phê duyệt đơn từ,
văn bản mới và lịch họp đóng vai trò then chốt đối với trải nghiệm người dùng.
Nhóm sử dụng FCM để tiếp nhận thông báo đẩy từ các dịch vụ backend và trích
xuất siêu dữ liệu (metadata) đi kèm nhằm kích hoạt tính năng điều hướng sâu đến
đúng màn hình nghiệp vụ liên quan. Đối với tính năng điểm danh cuộc họp trong
phân hệ Lịch làm việc, nhóm khai thác Socket.IO để nhận các cập nhật trạng thái
tức thời giữa thiết bị di động và phòng họp máy chủ.
3.6 Kết luận chương
Chương 3 đã trình bày các cơ sở lý thuyết về kiến trúc phần mềm, giao thức
truyền thông và cơ chế xác thực, cùng với các công nghệ then chốt được áp
dụng trong quá trình phát triển MyHCMUT Mobile và tích hợp với các hệ thống
backend hiện hữu của Nhà trường. Những nền tảng này là căn cứ kỹ thuật quan
trọng để nhóm tiến hành phân tích chi tiết các yêu cầu chức năng, phi chức năng
tại Chương 4 và trình bày các giải pháp thiết kế kiến trúc, dữ liệu và quy trình
tích hợp tại Chương 5.
32

| Chương |     |     | 4    |     |     |       |     |     |
| ------ | --- | --- | ---- | --- | --- | ----- | --- | --- |
| PHÂN   |     |     | TÍCH |     | HỆ  | THỐNG |     |     |
Chương này xác định các nhóm người dùng, phạm vi phân quyền, yêu cầu chức
năng và yêu cầu phi chức năng của MyHCMUT Mobile. Trên cơ sở đó, các ca
sử dụng và luồng nghiệp vụ chính được phân tích, làm cơ sở cho thiết kế hệ
| thống ở | Chương | 5     | và kiểm | thử ở Chương |       | 6.     |           |     |
| ------- | ------ | ----- | ------- | ------------ | ----- | ------ | --------- | --- |
| 4.1     | Người  | dùng, |         | phân         | quyền | và Use | Case tổng | thể |
| 4.1.1   | Các    | nhóm  | người   | dùng         |       |        |           |     |
MyHCMUT Mobile phục vụ sáu nhóm người dùng trực tiếp: nhân sự, lãnh
đạo đơn vị, chuyên viên các phòng ban, chuyên viên BGH, văn thư và Ban Giám
hiệu. Các vai trò chuyên môn bổ sung phạm vi xử lý cho tài khoản nhân sự;
một tài khoản có thể đảm nhiệm nhiều vai trò. Chuyên viên BGH chuẩn bị lịch
họp cấp Trường, còn Ban Giám hiệu tham gia chỉ đạo hoặc phê duyệt theo thẩm
quyền.
HRM, iOffice và dịch vụ xác thực cung cấp dữ liệu, quyền và nghiệp vụ cho
ứng dụng; dịch vụ thông báo đẩy chuyển thông báo đến thiết bị. Đây là các hệ
| thống hỗ | trợ, | không | phải nhóm | người | dùng.  |     |     |     |
| -------- | ---- | ----- | --------- | ----- | ------ | --- | --- | --- |
| 4.1.2    | Vai  | trò   | và phạm   | vi    | nghiệp | vụ  |     |     |
Phạm vi thao tác được xác định theo quyền thực tế của tài khoản, đối tượng
nghiệp vụ và bước xử lý được phân công. Tên chức danh không tự suy ra quyền
| phê duyệt | hoặc | quyền | tạo lịch. |     |     |     |     |     |
| --------- | ---- | ----- | --------- | --- | --- | --- | --- | --- |
33

|              | Bảng | 4.1: Ma trận               | tác nhân và phạm | vi nghiệp                 | vụ  |
| ------------ | ---- | -------------------------- | ---------------- | ------------------------- | --- |
| Tácnhân      |      | Phạmvithaotácchính         |                  | Giớihạnphạmvi             |     |
| Nhânsự       |      | Tracứu,cậpnhật/đềxuất,phản |                  | Chủyếuthaotáctrênthôngtin |     |
|              |      | hồivàxemlịchsửhồsơ;tạovà   |                  | cánhânvàcácnghiệpvụmà     |     |
|              |      | theodõiyêucầunghỉphép,     |                  | bảnthânđượcthamgia;không  |     |
|              |      | côngtác;tracứuvănbản,      |                  | thựchiệnchứcnăngthẩmđịnh  |     |
|              |      | nhiệmvụvàlịch;điểmdanhvà   |                  | hoặcphêduyệtnếukhôngcó    |     |
|              |      | nhậnthôngbáo.              |                  | quyềntươngứng.            |     |
| Lãnhđạođơnvị |      | Thựchiệncácchứcnăngcủa     |                  | Chỉxửlýcácnghiệpvụthuộc   |     |
|              |      | nhânsự;xemxétvàxửlýcác     |                  | đơnvịvàtạicácbướcđượccấu  |     |
|              |      | yêucầuthuộcđơnvị;theodõi   |                  | hìnhtrongquytrình.        |     |
cáccôngviệcthuộcphạmvi
quảnlý.
Chuyênviêncác Thẩmđịnhđềxuấtcậpnhậthồ Thaotáctheophạmvinghiệp
| phòngban |     | sơ;xửlýnghiệpvụnghỉphép, |     | vụvàquyềnchuyênmônđược   |     |
| -------- | --- | ------------------------ | --- | ------------------------ | --- |
|          |     | côngtácvàcácdữliệuchuyên |     | cấp;khôngthựchiệnthaycác |     |
|          |     | mônliênquan.             |     | bướcphêduyệtngoàithẩm    |     |
quyền.
| Chuyênviên |     | Tạotrựctiếplịchhọpcấp     |     | Cầnquyềntạotrựctiếp;không |     |
| ---------- | --- | ------------------------- | --- | ------------------------- | --- |
| BGH        |     | Trường,chọnthànhphầnvàtài |     | mặcnhiênđượcpháthànhlịch  |     |
|            |     | liệu;xemmụclịchởbướctổng  |     | hoặcthaotácngoàiphạmvi    |     |
|            |     | hợp.                      |     | đượccấp.                  |     |
| Vănthư     |     | Thựchiệncácnghiệpvụliên   |     | Thaotáctrêncácvănbảnvà    |     |
|            |     | quanđếntiếpnhận,xửlývà    |     | quytrìnhđượcphâncôngtheo  |     |
|            |     | luânchuyểnvănbản,lịchcông |     | quyềnnghiệpvụ.            |     |
tácvàcácnghiệpvụhành
chínhliênquan.
| BanGiámhiệu |     | Xemxétvàxửlýcácyêucầu |     | Chỉthamgiatạicácbướcvà  |     |
| ----------- | --- | --------------------- | --- | ----------------------- | --- |
|             |     | hoặcnghiệpvụthuộcthẩm |     | nghiệpvụthuộcthẩmquyền. |     |
quyềncấpTrường.
Ứng dụng dùng thông tin quyền từ backend để hiển thị chức năng phù hợp.
Việc ẩn hoặc hiện nút chỉ phục vụ giao diện; backend vẫn phải kiểm tra quyền
truy cập dữ liệu và thực hiện nghiệp vụ khi nhận yêu cầu, kể cả yêu cầu được gọi
trực tiếp ngoài ứng dụng. Các giới hạn hiện thực và kiểm chứng phân quyền được
| đối chiếu | riêng tại | Chương 6. |          |     |     |
| --------- | --------- | --------- | -------- | --- | --- |
| 4.1.3     | Các nhóm  | Use Case  | tổng thể |     |     |
Hình 4.1 thể hiện các nhóm chức năng: xác thực, hồ sơ cá nhân, nghỉ phép,
công tác, văn bản và nhiệm vụ, lịch, điểm danh và thông báo. Các mục tiếp theo
34

phân rã yêu cầu nghiệp vụ của từng nhóm. Chức năng quản trị và nghiệp vụ chỉ
| có trên | Web nằm   | ngoài phạm | vi đặc tả | mobile.         |        |
| ------- | --------- | ---------- | --------- | --------------- | ------ |
|         | Hình 4.1: | Sơ đồ Use  | Case tổng | thể của MyHCMUT | Mobile |
35

| 4.2 Yêu | cầu chức | năng | và đặc tả | nghiệp | vụ  |
| ------- | -------- | ---- | --------- | ------ | --- |
Các yêu cầu chức năng được tổ chức theo bốn nhóm nghiệp vụ chính. Use
case mô tả mục tiêu và tương tác của người dùng; biểu đồ hoạt động thể hiện các
nhánh xử lý chính; biểu đồ tuần tự mô tả sự phối hợp giữa ứng dụng và các hệ
| thống liên quan. |     |     |     |     |     |
| ---------------- | --- | --- | --- | --- | --- |
Các luồng trong chương này mô tả hành vi nghiệp vụ cần hỗ trợ. Mức độ hiện
thực và kết quả kiểm thử các luồng nghiệp vụ trên hệ thống tích hợp được trình
| bày tại Chương | 6.        |                        |                  |        |     |
| -------------- | --------- | ---------------------- | ---------------- | ------ | --- |
|                | Bảng 4.2: | Phạm vi                | đặc tả theo nhóm | nghiệp | vụ  |
| Nhómnghiệpvụ   |           | Phạmviđặctảtrongchương |                  |        |     |
Quảnlýhồsơcánhân Tracứucácdanhmụcthôngtinlýlịchnhânsự;cậpnhật
trựctiếpcácthôngtinđượcphéphoặcgửiđềxuấtkèm
minhchứngđốivớithôngtincầnthẩmđịnh;gửiphản
hồivàtracứulịchsửxửlý.
| Quảnlýnghỉphép |     | Tracứuquỹphépthamkhảo,lậpvàgửiđơnnghỉphép |     |     |     |
| -------------- | --- | ----------------------------------------- | --- | --- | --- |
quaquytrìnhhướngdẫn,theodõivàxửlýyêucầutheo
quytrìnhphêduyệt.
| Quảnlýcôngtác |     | Lậpvàgửihồsơcôngtácquabiểumẫuhướngdẫn5 |     |     |     |
| ------------- | --- | -------------------------------------- | --- | --- | --- |
bước,kiểmtraxungđộtthờigian,theodõivàxửlýhồsơ
theoquytrìnhphêduyệt.
| Vănphòngsố,nhiệmvụ |     | Tracứu,phâncôngvàxửlývănbảnđến;xemvănbản      |     |     |     |
| ------------------ | --- | --------------------------------------------- | --- | --- | --- |
| vàlịchcôngtác      |     | đi,nhiệmvụvàlịchtổnghợp;tạo/đăngkýcuộchọptheo |     |     |     |
quyền,điểmdanhvàbáovắng.
| 4.2.1 Quản  | lý hồ       | sơ cá nhân |      |     |     |
| ----------- | ----------- | ---------- | ---- | --- | --- |
| 4.2.1.1 Mục | tiêu và yêu | cầu chức   | năng |     |     |
HRM quản lý dữ liệu hồ sơ chính thức; MyHCMUT Mobile cung cấp giao
diện native để tra cứu, chỉnh sửa, phản hồi và xem lịch sử. Chính sách do HRM
cung cấp xác định cách xử lý từng trường: cập nhật trực tiếp hoặc gửi đề xuất cần
thẩm định. Hai loại trường có thể cùng xuất hiện trong một lần thao tác. Mobile
dùng chính sách để dựng biểu mẫu; HRM kiểm tra lại quyền, dữ liệu và chính
| sách khi ghi | nhận. |     |     |     |     |
| ------------ | ----- | --- | --- | --- | --- |
Thông tin được phân thành ba nhóm giao diện trong Bảng 4.3. Chuyên viên
36

TCNS có quyền thẩm định đối chiếu nội dung đề xuất với dữ liệu hiện tại và
| minh chứng,  | sau đó | xử lý từng                  | nội dung được | phân công. |               |
| ------------ | ------ | --------------------------- | ------------- | ---------- | ------------- |
|              | Bảng   | 4.3: Phân nhóm              | danh mục      | thông tin  | hồ sơ nhân sự |
| Nhómgiaodiện |        | Cácdanhmụcthôngtinthànhphần |               |            |               |
Cánhânvàgiađình Thôngtincánhâncơbản;Địachỉcưtrú(thườngtrú,tạm
trú);Quanhệgiađình(thânnhân,ngườiphụthuộc).
Côngtácvàđàotạo Quátrìnhcôngtác/vịtríviệclàmhiệntại;Trìnhđộhọc
vấn,vănbằngchứngchỉvàquátrìnhđàotạo,bồidưỡng
chuyênmôn.
| Chếđộvàthôngtin |           | Quátrìnhlươngvàphụcấp;Khenthưởng;Kỷluật; |         |                      |               |
| --------------- | --------- | ---------------------------------------- | ------- | -------------------- | ------------- |
| khác            |           | Thôngtinsứckhỏe;Kêkhaitàisản/thunhập.    |         |                      |               |
|                 | Bảng 4.4: | Yêu cầu chức                             | năng    | nhóm quản lý         | hồ sơ cá nhân |
| MãFR            | Chứcnăng  |                                          | Tácnhân | Môtảvàràngbuộcnghiệp |               |
vụ
| FR-PRO- | Tracứuhồsơ |     | Nhânsự | Xemcácdanhmụcthôngtin |     |
| ------- | ---------- | --- | ------ | --------------------- | --- |
| 01      |            |     |        | lýlịchcánhândoHRMcung |     |
cấp.
| FR-PRO- | Cậpnhậthồsơ |     | Nhânsự | Chỉnhsửabằngbiểumẫu     |     |
| ------- | ----------- | --- | ------ | ----------------------- | --- |
| 02      |             |     |        | nativetheochínhsáchtừng |     |
trường;HRMkiểmtraquyền
vàdữliệuđểcậpnhậttrựctiếp
hoặctiếpnhậnđềxuấtkèm
minhchứng.
| FR-PRO- | Thẩmđịnhđềxuất |     | Chuyênviên | Đốivớiđềxuấtcầnthẩmđịnh,  |     |
| ------- | -------------- | --- | ---------- | ------------------------- | --- |
| 03      |                |     | TCNS       | xemxétthôngtinsaikhác,đối |     |
chiếuminhchứngvàphêduyệt
hoặctừchốitheothẩmquyền.
| FR-PRO- | Gửiphảnhồihồsơ |     | Nhânsự | Gửinộidungphảnhồikèmít  |     |
| ------- | -------------- | --- | ------ | ----------------------- | --- |
| 04      |                |     |        | nhấtmộttàiliệuminhchứng |     |
vềdanhmụchồsơ;phảnhồi
khôngtựcậpnhậtdữliệu
chínhthức.
| FR-PRO- | Xemlịchsửhồsơ |     | Nhânsự | Quansátyêucầuvànhậtký     |     |
| ------- | ------------- | --- | ------ | ------------------------- | --- |
| 05      |               |     |        | cậpnhật;đốichiếudữliệuban |     |
đầuvớidữliệumớihoặcđề
xuấttheotừngtrường,kèm
trạngtháixửlýdoHRMtrả
về.
37

| 4.2.1.2 Đặc tả | Use Case |     |     |     |     |
| -------------- | -------- | --- | --- | --- | --- |
UC-PRO-01đếnUC-PRO-05lầnlượttươngứngFR-PRO-01đếnFR-PRO-05.
Hình 4.2 minh họa các nhánh nghiệp vụ; UC-PRO-05 bổ sung chức năng lịch sử.
| Hình 4.2: | Sơ đồ Đặc                                         | tả Use case     | nhóm Quản | lý hồ sơ  | cá nhân |
| --------- | ------------------------------------------------- | --------------- | --------- | --------- | ------- |
| Bảng 4.5: | Đặc tả use                                        | case UC-PRO-01: | Tra       | cứu hồ sơ | nhân sự |
| Thuộctính | Nộidungđặctả                                      |                 |           |           |         |
| Môtả      | Chophépnhânsựtracứucácdanhmụcthôngtinlýlịchcánhân |                 |           |           |         |
đượccungcấpbởihệthốngHRM.
| Tácnhân      | Nhânsự                                     |     |     |     |     |
| ------------ | ------------------------------------------ | --- | --- | --- | --- |
| Tiềnđiềukiện | NhânsựđãđăngnhậpthànhcôngvàoứngdụngMyHCMUT |     |     |     |     |
Mobile.
| Kíchhoạt   | Ngườidùngchọnmục“Hồsơcánhân”trênứngdụngdiđộng. |     |     |     |     |
| ---------- | ---------------------------------------------- | --- | --- | --- | --- |
| Luồngchính | 1.Ngườidùngmởgiaodiệnhồsơcánhântrênứngdụng.    |     |     |     |     |
2.Ứngdụnghiểnthịthôngtintổngquanvàbanhómgiaodiện
chính.
3.Ngườidùnglựachọnnhómvàdanhmụcthôngtincầnxem.
4.Ứngdụngtảivàhiểnthịchitiếtcáctrườngdữliệutươngứng
từhệthốngHRM.
Luồngthaythế -Luồng2a(Làmmớidữliệu):Ngườidùngthựchiệnlàmmớiđể
yêucầuứngdụngtảidữliệumớinhấttừhệthốngHRM.
38

Luồngngoạilệ -Ngoạilệ4a(Lỗikếtnối):Khikhôngthểtảidữliệutừhệthống
HRM,ứngdụngsửdụngdữliệuhồsơđãlưutạmtrướcđónếu
cóvàthôngbáotrạngtháikếtnốichongườidùng.Nếuchưacó
dữliệulưutạm,ứngdụngthôngbáokhôngthểtảidữliệu.
Hậuđiềukiện NgườidùngxemđượcdữliệuhồsơmớinhấttảiđượctừHRM
hoặcdữliệuđãlưutạmgầnnhấtkhikhôngthểkếtnối.
Bảng 4.6: Đặc tả use case UC-PRO-02: Cập nhật hồ sơ cá nhân
Thuộctính Nộidungđặctả
Môtả Chophépnhânsựcậpnhậtthôngtinhồsơtheophạmviquyền;
HRMghinhậntrựctiếpcácthôngtinđượcphépvàtiếpnhậnđề
xuấtđốivớithôngtincầnthẩmđịnh.
Tácnhân Nhânsự
Tiềnđiềukiện NhânsựđãđăngnhậpvàoMyHCMUTMobilevàđangxemhồ
sơcủabảnthân.
Kíchhoạt Ngườidùngchọnchứcnăngcậpnhậttạidanhmụcthôngtin
tươngứng.
Luồngchính 1.Ngườidùngchọncậpnhậtthôngtinhồsơ.
2.ỨngdụngtảidữliệuhiệntạivàchínhsáchcậpnhậttừHRM,
sauđómởbiểumẫuFluttercủadanhmụcđượchỗtrợ.
3.Ngườidùngđiềuchỉnhcácthôngtincầnthayđổivàcungcấp
tàiliệuminhchứngđốivớinhữngnộidungyêucầuminhchứng.
4.Ứngdụngkiểmtradữliệuđầuvàovàminhchứngtheochính
sách,chỉgửinhữngtrườngthựcsựthayđổikhingườidùngxác
nhận.
5.HRMkiểmtraquyền,tínhhợplệcủadữliệuvàchínhsácháp
dụngchotừngtrườngthôngtin.
6.Cáctrườngđượcphéptựcậpnhậtđượcghinhậntrựctiếp;các
trườngcầnthẩmđịnhđượcghinhậnthànhnộidungđềxuấtchờ
xửlý.
7.Hệthốngphảnhồikếtquảđểngườidùngtheodõithôngtin
hoặctrạngtháiđềxuấttươngứng.
Luồngngoạilệ -Ngoạilệ4a(Thiếutàiliệuminhchứng):Khithiếutàiliệuminh
chứngđốivớinộidungyêucầuminhchứng,hệthốngthôngbáo
đểngườidùngbổsungtrướckhitiếpnhậnnộidungtươngứng.
-Ngoạilệ4b(Mấtkếtnối):Ứngdụngthôngbáolỗi;khôngcoi
dữliệuđangnhậplàthayđổiđãđượcHRMlưu.Khichưaxác
địnhkếtquảgửi,ngườidùngcầnkiểmtrahồsơhoặclịchsử
trướckhigửilại.
-Ngoạilệ5a(Khôngđápứngđiềukiệnnghiệpvụ):Khitồntại
điềukiệnnghiệpvụkhôngchophéptiếpnhậnthayđổi,hệthống
từchốithaotácvàphảnhồinguyênnhânchongườidùng.
39

Hậuđiềukiện Thôngtinđượcphépđãđượccậpnhậtvàohồsơ;cácthôngtin
cầnthẩmđịnhđượcghinhậnthànhđềxuấtchờxửlý.
Bảng 4.7: Đặc tả use case UC-PRO-03: Thẩm định thay đổi hồ sơ
Thuộctính Nộidungđặctả
Môtả ChophépchuyênviênTCNScóthẩmquyềnđốichiếunộidung
đềxuấtvớidữliệuhiệntạivàtàiliệuminhchứng,sauđóxửlý
cácnộidungthayđổitheophạmviđượcphâncông.
Tácnhân ChuyênviênPhòngTổchứcNhânsựcóthẩmquyền
Tiềnđiềukiện Chuyênviênđãđăngnhậpvàtàikhoảnđượcphânquyềnthẩm
địnhhồsơnhânsự.
Kíchhoạt Chuyênviênmởdanhsáchcácđềxuấtcậpnhậthồsơđangchờ
xửlý.
Luồngchính 1.Chuyênviênmởdanhsáchđềxuấtcậpnhậthồsơchờxửlý.
2.Chọnmộtđềxuấtcụthểđểxemchitiết.
3.Ứngdụnghiểnthịthôngtinhiệntạivànộidungđềxuấtđể
chuyênviênđốichiếu,kèmtàiliệuminhchứngtươngứng.
4.Chuyênviênlựachọnphêduyệthoặctừchốiđốivớitừngnội
dungthayđổitheophạmviđượccấpquyền.
5.Đốivớithaotáctừchối,ứngdụngyêucầuchuyênviênnhậplý
do.
6.Hệthốngghinhậnkếtquảxửlýcủatừngnộidung.Khitoàn
bộnộidungthuộcđềxuấtđãđượcxửlý,trạngtháicủađềxuất
đượccậpnhậttươngứngvàcácthayđổiđượcchấpthuậnđược
phảnánhvàohồsơ.
7.Kếtquảxửlýđượcghinhậnđểngườiđềxuấttheodõi.
Luồngthaythế -Luồng4a(Xửlýtừngphần):Mộtđềxuấtcóthểđượcxửlý
từngphần;cácnộidungđãđượcxửlýđượcghinhậnkếtquả
trongkhicácnộidungcònlạitiếptụcchờxửlý.
Luồngngoạilệ -Ngoạilệ4a(Trạngtháihoặcquyềnxửlýthayđổi):Khithao
táckhôngcònhợplệdotrạngtháiđềxuấtđãthayđổihoặcngười
dùngkhôngcònquyềnxửlýnộidungtươngứng,hệthốngtừ
chốithaotácvàyêucầulàmmớitrạngtháihiệntại.
Hậuđiềukiện Kếtquảxửlýcủatừngnộidungđượcghinhận;khitoànbộnội
dungđãđượcxửlý,đềxuấtđạttrạngtháikếtthúctươngứngvà
dữliệuhồsơphảnánhcácthayđổiđãđượcchấpthuận.
Bảng 4.8: Đặc tả use case UC-PRO-04: Gửi phản hồi hồ sơ
Thuộctính Nộidungđặctả
Môtả Ghinhậnphảnhồiliênquanđếnmộtdanhmụchồsơbằnggiao
diệnnative.
Tácnhân Nhânsự
40

Tiềnđiềukiện Ngườidùngđãđăngnhậpvàcóquyềngửiphảnhồitạidanhmục
tươngứng.
Kíchhoạt Ngườidùngchọngửiphảnhồitrongmenuthaotáchồsơ.
Luồngchính 1.Ứngdụngmởbiểumẫuphảnhồicủadanhmụcđượcchọn.
2.Ngườidùngnhậpnộidungphảnhồivàđínhkèmítnhấtmột
tàiliệuminhchứng.
3.ỨngdụnggửinộidungtheohợpđồngAPIphảnhồicủaHRM.
4.HRMkiểmtraquyềnvàdữliệu,ghinhậnphảnhồirồitrảkết
quả.
5.Ứngdụngthôngbáokếtquả;ngườidùngtheodõitạilịchsửhồ
sơ.
Luồngngoạilệ -Thiếunộidunghoặcminhchứng:yêucầubổsungtrướckhi
gửi.
-Dữliệukhônghợplệ,quyềnthayđổihoặclỗikếtnối:hiểnthị
lỗi;khôngthôngbáogửithànhcôngkhibackendchưaxácnhận.
Hậuđiềukiện Phảnhồihợplệđượcghinhận;dữliệuhồsơchínhthứckhôngtự
thayđổichỉvìđãgửiphảnhồi.
Bảng 4.9: Đặc tả use case UC-PRO-05: Xem lịch sử hồ sơ
Thuộctính Nộidungđặctả
Môtả Tracứucácyêucầu,nộidungthayđổivànhậtkýmàHRMcho
phépngườidùngxem.
Tácnhân Nhânsự
Tiềnđiềukiện Ngườidùngđãđăngnhậpvàđượctruycậplịchsửhồsơtương
ứng.
Kíchhoạt Ngườidùngchọnmụclịchsửhồsơ.
Luồngchính 1.ỨngdụngyêucầulịchsửtừHRM.
2.HRMxácđịnhphạmvidữliệutheophiênvàquyền,trảyêu
cầucùngnhậtkýliênquan.
3.Ứngdụngtrìnhbàyhainhómyêucầuvàthayđổiđãghinhận,
kèmthờiđiểm,trạngtháivàthôngtinxửlýđượcbackendtrảvề.
4.Ngườidùngmởchitiếtđểquansátcáctrườngkhácnhau,đối
chiếudữliệubanđầuvớidữliệumớihoặcnộidungđềxuất;xem
lýdovàminhchứngnếucó.
Luồngthaythế -Khôngcólịchsử:ứngdụnghiểnthịtrạngtháidanhsáchrỗng.
Luồngngoạilệ -Khôngthểtảihoặckhôngđủquyền:thôngbáolỗi,khôngdiễn
giảidữliệuchưatảilàkhôngcóyêucầu.
Hậuđiềukiện NgườidùngxemđượclịchsửdoHRMcungcấp;thaotácnày
khôngthayđổitrạngtháiyêucầu.
UC-PRO-05 sử dụng giá trị trước/sau do HRM trả về để đối chiếu từng trường
có dữ liệu lịch sử; nội dung chờ duyệt hoặc bị từ chối chưa phải dữ liệu có hiệu
41

lực. Phạm vi chỉnh sửa native gồm thông tin cá nhân, địa chỉ, ngân hàng/bảo
hiểm, gia đình, công tác ngoài Trường, đào tạo và kê khai tài sản/thu nhập. Chính
sách chỉnh sửa và minh chứng được áp dụng riêng theo danh mục, không mặc
| định    | mọi trường | đều được | sửa hoặc đều | cần tệp. |     |
| ------- | ---------- | -------- | ------------ | -------- | --- |
| 4.2.1.3 | Biểu       | đồ hoạt  | động         |          |     |
Hình 4.3 thể hiện cập nhật trực tiếp và thẩm định đề xuất theo từng nhóm
trường; cả hai hướng có thể cùng xuất hiện trong một lần cập nhật.
|         | Hình | 4.3: Biểu | đồ hoạt động | Quy trình cập nhật | hồ sơ cá nhân |
| ------- | ---- | --------- | ------------ | ------------------ | ------------- |
| 4.2.1.4 | Biểu | đồ tuần   | tự           |                    |               |
Hình 4.4 minh họa lấy dữ liệu/chính sách, gửi nội dung thay đổi và xử lý tại
HRM. Hai nhánh cập nhật trực tiếp và đề xuất áp dụng theo trường. Hợp đồng
| API | và truyền | tệp được | trình bày tại | Chương 5. |     |
| --- | --------- | -------- | ------------- | --------- | --- |
42

|             | Hình 4.4: | Biểu đồ      | tuần tự Cập nhật | hồ sơ cá nhân |
| ----------- | --------- | ------------ | ---------------- | ------------- |
| 4.2.2 Quản  | lý nghỉ   | phép         |                  |               |
| 4.2.2.1 Mục | tiêu và   | yêu cầu chức | năng             |               |
Ứng dụng hỗ trợ tra cứu quỹ phép tham khảo, lập đơn theo biểu mẫu ba bước,
theo dõi và xử lý theo thẩm quyền. Kiểm tra ngày, số dư và xung đột trên mobile
hỗ trợ hoàn thiện dữ liệu; backend HRM thực hiện kiểm tra nghiệp vụ cuối cùng
43

| và xử lý | việc chuyển | trạng thái | hồ sơ.         |                      |      |
| -------- | ----------- | ---------- | -------------- | -------------------- | ---- |
|          | Bảng 4.10:  | Yêu cầu    | chức năng nhóm | quản lý nghỉ         | phép |
| MãFR     | Chứcnăng    |            | Tácnhân        | Môtảvàràngbuộcnghiệp |      |
vụ
| FR-LEV- | Tracứuquỹphépvà |     | Nhânsự | Xemsốdưquỹphépnămtham   |     |
| ------- | --------------- | --- | ------ | ----------------------- | --- |
| 01      | đơn             |     |        | khảo,lọcdanhsáchđơntheo |     |
nămvàtrạngtháixửlý.
| FR-LEV- | Lậpvàgửiđơnnghỉ |     | Nhânsự | Nhậpliệutheobiểumẫu3   |     |
| ------- | --------------- | --- | ------ | ---------------------- | --- |
| 02      | phép            |     |        | bước,đínhkèmminhchứng, |     |
lưunháphoặcgửiduyệtkhi
đápứngđiềukiệnnghiệpvụ.
| FR-LEV- | Quảnlýđơnđãtạo |     | Nhânsự | Chỉnhsửahoặcxóađơnở    |     |
| ------- | -------------- | --- | ------ | ---------------------- | --- |
| 03      |                |     |        | trạngtháiNháp;chỉnhsửa |     |
vàgửilạiđơnBịtrảlại.Đơn
đãgửikhôngmặcđịnhcóthao
tácthuhồichongườilập.
| FR-LEV- | Phêduyệttheothẩm |     | Cấpphêduyệt | Xemxétnộidung,minhchứng  |     |
| ------- | ---------------- | --- | ----------- | ------------------------ | --- |
| 04      | quyền            |     |             | vàphêduyệt,từchốihoặctrả |     |
lạiđơntheothẩmquyềnđược
phâncông.
Trong quy trình hiện thực, thao tác lưu giữ đơn ở trạng thái Nháp, còn thao
tác gửi mới chuyển đơn sang bước chờ duyệt. Quyền thu hồi của người có thẩm
quyền thuộc luồng xử lý riêng, không đồng nhất với quyền xóa đơn Nháp của
người lập.
| 4.2.2.2 | Đặc tả Use | Case |     |     |     |
| ------- | ---------- | ---- | --- | --- | --- |
UC-LEV-01 cụ thể hóa FR-LEV-01 và FR-LEV-03; UC-LEV-02 gắn với
FR-LEV-02, còn UC-LEV-03 gắn với FR-LEV-04. Hình 4.5 thể hiện các nhóm
| thao tác | tương ứng. |     |     |     |     |
| -------- | ---------- | --- | --- | --- | --- |
44

Hình 4.5: Sơ đồ Đặc tả Use case nhóm Quản lý nghỉ phép
Bảng 4.11: Đặc tả use case UC-LEV-01: Quản lý đơn nghỉ phép cá nhân
Thuộctính Nộidungđặctả
Môtả Chophépnhânsựtheodõisốdưquỹphépnăm,tracứudanh
sáchđơnvàtiếntrìnhduyệt;chỉnhsửahoặcxóađơnNháp,chỉnh
sửavàgửilạiđơnBịtrảlại.
Tácnhân Nhânsự
Tiềnđiềukiện NhânsựđãđăngnhậpthànhcôngvàoứngdụngMyHCMUT
Mobile.
Kíchhoạt Ngườidùngchọnchứcnăng“Nghỉphép”trênmànhìnhchính.
Luồngchính 1.Ngườidùngmởmục“Nghỉphép”đểxemsốdưquỹphép
thamkhảovàdanhsáchđơnđãlập.
2.Ngườidùnglọcdanhsáchhoặcchọnmộtđơnđểxemtrạng
tháivàtiếntrìnhxửlý.
3.VớiđơnNháp,ngườidùngcóthểtiếptụcchỉnhsửahoặcxóa
đơn.
4.HRMkiểmtrangườilậpvàtrạngtháiđơntrướckhighinhận
thaotáchợplệ.
Luồngthaythế -Luồng3a(Sửađơnbịtrảlại):VớiđơnởtrạngtháiBịtrảlại,
ngườidùngchọnchỉnhsửađểbổsungthôngtinvàgửilại.
-Luồng3b(Theodõiđơnđãgửi):Vớiđơnđangchờduyệt,người
dùngxemtrạngtháivàlịchsửxửlý;ứngdụngkhôngmặcđịnh
cungcấpthaotácthuhồichongườilập.
Luồngngoạilệ -Ngoạilệ4a(Trạngtháiđãthayđổi):Nếuđơnkhôngcònở
trạngtháichophépchỉnhsửahoặcxóa,HRMtừchốithaotácvà
ứngdụngcậpnhậttrạngtháimới.
45

Hậuđiềukiện Nhânsựnắmbắtthôngtinquỹphépvàtrạngtháicácđơn;những
thayđổihợplệđốivớiđơnNháphoặcđơnBịtrảlạiđượcghi
nhậntrênHRM.
Bảng 4.12: Đặc tả use case UC-LEV-02: Lập và gửi đơn nghỉ phép
Thuộctính Nộidungđặctả
Môtả Chophépnhânsựlậpmớiđơnnghỉphépquaquytrìnhhướng
dẫn3bước,kiểmtrathờigianvàsốdưphép,đínhkèmminh
chứngvàgửiduyệt.
Tácnhân Nhânsự
Tiềnđiềukiện Nhânsựđãđăngnhậpvàohệthốngvàcóquyềnlậpđơnnghỉ
phép.
Kíchhoạt Ngườidùngnhấnnúttạomớiđơnnghỉphéptrêngiaodiệnứng
dụng.
Luồngchính 1.Ngườidùngchọntạomớiđơnnghỉphép;ứngdụngkiểmtra
ngàyđăngkýcóhợplệtrướckhiyêucầutạonháp.
2.Khingàyđăngkýhợplệ,hệthốngkhởitạobảnghinháp.
3.Ngườidùngnhậpthôngtinnghỉphépvàđínhkèmminhchứng
khiđượcyêucầu.
4.Ngườidùngràsoátthôngtinvàgửiđơn.
5.HRMkiểmtracácđiềukiệnnghiệpvụvàtiếpnhậnđơnhợplệ
vàoquytrìnhchờduyệt.
Luồngthaythế -Luồng3a(Lưunháp):Ngườidùngchọnlưunháptạibấtkỳ
bướcnàođểtiếptụchoànthiệnsau.
-Luồng3b(Thoátbiểumẫu):Ngườidùngxácnhậnthoát;dữ
liệuchưalưutrênứngdụngbịbỏ.BảnghinhápđãtạotrênHRM
vẫntồntại,cóthểmởlạihoặcxóabằngthaotácriêng.
Luồngngoạilệ -Ngoạilệ1a(Ngàyđăngkýkhônghợplệ):Ứngdụngthôngbáo
nguyênnhânvàkhôngtạobảnghinháp.
-Ngoạilệ3a(Xungđộtlịchtrình):Khoảngthờigiannghỉtrùng
lặpvớikếhoạchcôngtáchoặcđơnkhác→hệthốngcảnhbáovà
yêucầuđiềuchỉnh.
-Ngoạilệ3b(Vượtsốdưquỹphép):Sốngàyđăngkývượtquá
sốdưphépnămcònlại→hệthốngcảnhbáođểngườidùngđiều
chỉnh.
-Ngoạilệ3c(Quáhạnđăngký):Khikiểmtrathờihạnxácđịnh
khôngthểtạođơnnghỉphépthôngthường,ứngdụngthôngbáo
nguyênnhânvàđiềuhướngngườidùngđếnđiểmtruycậpphân
hệGiảitrình.ViệclậpvàxửlýGiảitrìnhkhôngthuộcphạmvi
hiệnthựccủausecasenày.
Hậuđiềukiện Khigửithànhcông,đơnđượcghinhậnởbướcchờduyệtvàphát
sinhthôngbáotheoquytrình.Nếuchỉlưuhoặcthoátsaukhitạo
nháp,đơnvẫnởtrạngtháiNháp.
46

|           | Bảng 4.13:                                        | Đặc tả use | case UC-LEV-03: | Xử lý đơn | nghỉ phép |
| --------- | ------------------------------------------------- | ---------- | --------------- | --------- | --------- |
| Thuộctính | Nộidungđặctả                                      |            |                 |           |           |
| Môtả      | Chophépngườicóthẩmquyềnthẩmđịnhnộidungđơn,kiểmtra |            |                 |           |           |
tàiliệuminhchứngvàthựchiệnphêduyệt,từchốihoặcyêucầu
bổsungthôngtin.
| Tácnhân | LãnhđạoĐơnvị,ChuyênviênPhòngTổchứcNhânsự,Ban |     |     |     |     |
| ------- | -------------------------------------------- | --- | --- | --- | --- |
Giámhiệu
Tiềnđiềukiện Ngườiduyệtđãđăngnhậpvàđơnđangởbướcthuộcthẩmquyền
xửlýcủatàikhoản.
| Kíchhoạt | Ngườiduyệtmởdanhsáchđơnchờxửlýtừứngdụnghoặcqua |     |     |     |     |
| -------- | ---------------------------------------------- | --- | --- | --- | --- |
thôngbáonhắcviệc.
| Luồngchính | 1.Ngườiduyệtmởdanhsáchđơnnghỉphépchờxửlýthuộc |     |     |     |     |
| ---------- | --------------------------------------------- | --- | --- | --- | --- |
thẩmquyềnphâncông.
2.Chọnxemchitiếtmộtđơnđểkiểmtranộidungvàminh
chứngliênquan.
3.Ngườiduyệtlựachọnhànhđộng:Phêduyệt,TừchốihoặcTrả
lại.
4.HRMkiểmtraquyềnvàtrạngtháiđơnhiệntại,rồighinhận
kếtquảxửlýhoặcchuyểnđơnsangbướctiếptheo.
5.Hệthốngthôngbáokếtquảchonhânsựlậpđơn;sốdưphép
đượccậpnhậtkhiđơnhoàntấttheoquytắcnghiệpvụ.
Luồngthaythế -Luồng3a(Xửlýđồngloạt):Ngườiduyệtchọnnhiềuđơnhợplệ
trêndanhsáchvàthựchiệnphêduyệthàngloạt.
-Luồng3b(Trảlạiyêucầuchỉnhsửa):Ngườiduyệtchọn“Trả
lại”kèmýkiếnyêucầu→đơnchuyểnsangtrạngtháiBịtrảlại
đểnhânsựhoànthiện.
Luồngngoạilệ -Ngoạilệ3a(Từchốiđơn):Ngườiduyệtbắtbuộcnhậplýdotừ
chốitrướckhihệthốngghinhậnkếtquả.
-Ngoạilệ4a(Trạngtháikhôngphùhợp):KhiHRMxácđịnh
đơnkhôngcònởbướcchophépxửlý,thaotácbịtừchốivà
ngườidùngcầntảilạidữliệu.Kiểmtranàykhôngđượcxem
làbảođảmchốngmọithaotácphêduyệtđồngthời.
Hậuđiềukiện Đơnđượcchuyểnsangbướctiếptheo,trảlạihoặckếtthúctheo
quyếtđịnhđượcHRMghinhận;dữliệunghỉphépđượccậpnhật
khiduyệtbướccuốitheoquytrình.
| 4.2.2.3 | Biểu đồ hoạt | động |     |     |     |
| ------- | ------------ | ---- | --- | --- | --- |
Hình 4.6 mô tả lập đơn và luân chuyển phê duyệt. Khi quá hạn, ứng dụng
thông báo và điều hướng đến điểm truy cập Giải trình; quy trình Giải trình nằm
| ngoài phạm | vi use case | nghỉ phép | hiện tại. |     |     |
| ---------- | ----------- | --------- | --------- | --- | --- |
47

| Hình 4.6:            | Biểu đồ hoạt | động Quy | trình nghỉ | phép |
| -------------------- | ------------ | -------- | ---------- | ---- |
| 4.2.2.4 Biểu đồ tuần | tự           |          |            |      |
Hình 4.7 minh họa UC-LEV-02: khởi tạo nháp, hoàn thiện dữ liệu và gửi vào
quy trình chờ duyệt.
48

|             | Hình 4.7: | Biểu đồ      | tuần tự Gửi yêu | cầu nghỉ phép |
| ----------- | --------- | ------------ | --------------- | ------------- |
| 4.2.3 Phân  | hệ quản   | lý công      | tác             |               |
| 4.2.3.1 Mục | tiêu và   | yêu cầu chức | năng            |               |
Ứng dụng hỗ trợ lập, gửi và theo dõi phiếu công tác; người dùng có thẩm
quyền thực hiện các thao tác xử lý theo quy trình của HRM. Các điều kiện và
bước phê duyệt phụ thuộc vào thông tin chuyến công tác và quyền của người xử
lý.
Việc nộp báo cáo kết quả sau chuyến công tác chưa thuộc phạm vi biểu mẫu
| trên ứng dụng | di động. |     |     |     |
| ------------- | -------- | --- | --- | --- |
49

|      | Bảng 4.14: | Yêu cầu | chức năng nhóm | quản lý công         | tác |
| ---- | ---------- | ------- | -------------- | -------------------- | --- |
| MãFR | Chứcnăng   |         | Tácnhân        | Môtảvàràngbuộcnghiệp |     |
vụ
| FR-BTR- | Tracứuđơn |     | Nhânsự | Xemdanhsáchđơncôngtác     |     |
| ------- | --------- | --- | ------ | ------------------------- | --- |
| 01      |           |     |        | cánhân,lọctheotrạngtháivà |     |
xemchitiếttiếntrìnhduyệt.
| FR-BTR- | Tạovàgửiđơn |     | Nhânsự | Tạophiếuđăngkýcôngtác,  |     |
| ------- | ----------- | --- | ------ | ----------------------- | --- |
| 02      |             |     |        | điềnthôngtinvàgửichocác |     |
bênliênquanphêduyệt.
| FR-BTR- | Quảnlýnhápvà |     | Nhânsự | Chỉnhsửahoặcxóaphiếu  |     |
| ------- | ------------ | --- | ------ | --------------------- | --- |
| 03      | điềuchỉnh    |     |        | Nháp;chỉnhsửavàgửilại |     |
phiếuBịtrảlại.Ngườilập
khôngtựthuhồiphiếuđãgửi.
| FR-BTR- | Xửlýđơn |     | Cácbênliên | Xemxétthôngtinđơnđăng  |     |
| ------- | ------- | --- | ---------- | ---------------------- | --- |
| 04      |         |     | quan       | ký,minhchứngvàthựchiện |     |
cácthaotácnhư:phêduyệt,từ
chốihoặctrảlạiđơntheothẩm
quyền.
| FR-BTR- | Thuhồiđơn  |      | Nhânsự   | Thuhồitheoquyềnnghiệpvụ |     |
| ------- | ---------- | ---- | -------- | ----------------------- | --- |
| 05      |            |      | TCNS/Văn | vàđiềukiệnvaitròhoặcđơn |     |
|         |            |      | phòngBGH | vịdoHRMkiểmtra;ngườilập |     |
|         |            |      | cóquyền  | khôngtựcóquyềnthuhồi.   |     |
| 4.2.3.2 | Đặc tả Use | Case |          |                         |     |
FR-BTR-02 gắn với UC-BT-01/02; FR-BTR-03 gắn với UC-BT-01/03; FR-
BTR-04/05 lần lượt gắn với UC-BT-04/05. FR-BTR-01 được cụ thể hóa qua tra
| cứu danh | sách, chi | tiết và theo | dõi sau khi gửi. |     |     |
| -------- | --------- | ------------ | ---------------- | --- | --- |
50

Hình 4.8: Sơ đồ use-case quản lý công tác
Bảng 4.15: Đặc tả use case UC-BT-01: Soạn thảo đơn đăng ký công tác
Thuộctính Nộidungđặctả
Tácnhân Nhânsự
Tiềnđiềukiện Đãđăngnhậpvàoứngdụngvàtàikhoảncóquyềntạođơnđăng
kýcôngtác.
Kíchhoạt Ngườidùngchọnbiểutượngtạomớiđơnđăngkýcôngtáctrên
ứngdụng.
Luồngchính 1.Ngườidùngchọnngàyvàloạicôngtác;HRMkhởitạophiếuở
trạngtháiNháp(NHAP).
2.Ngườidùnghoànthiệnbiểumẫunămbước:thờigian,hình
thứctrongnước/nướcngoài,cánhân/đoàn,địađiểm,kinhphí,
thànhphầnvàminhchứngtheoyêucầu.
3.Ngườidùngnhấnnút"Lưu"đơnđăngkýcôngtác.
4.Hệthốnglưulạithôngtinđãnhậpvàđơncótrạngtháilà
"Nháp".
Luồngthaythế 1.1.Chọnđơnđăngkýcôngtáctừdanhsáchcácđơnđãtạocó
trạngtháilà"Nháp"hoặc"Trảlại",hệthốnghiểnthịthôngtin
chitiếtcủađơn.Thựchiệntiếpbước2.
Luồngngoạilệ -Thiếuthôngtinbắtbuộchoặcđịađiểmkhôngphùhợp:yêucầu
bổsungtrướckhitiếptục.
-Thoátbiểumẫu:thayđổichưalưubịbỏ;phiếunhápđãtạotrên
HRMvẫncóthểđượcmởlạihoặcxóabằngthaotácriêng.
Hậuđiềukiện Thôngtinđãlưuđượcghinhận;phiếugiữtrạngtháiNháp
(NHAP)hoặcTrảlại(TRA_LAI)đếnkhiđượcgửihợplệ.
51

Bảng 4.16: Đặc tả use case UC-BT-02: Gửi đơn đăng ký công tác
Thuộctính Nộidungđặctả
Tácnhân Nhânsự
Tiềnđiềukiện Đãđăngnhập,cóquyềngửiphiếucủabảnthânvàphiếuởtrạng
tháiNháphoặcTrảlại.
Kíchhoạt NgườidùngmởphiếuNháphoặcTrảlạiđãhoànthiệnthôngtin
Luồngchính 1.Ngườidùngnhấnnútgửiđơnđăngkýcôngtác.
2.Hệthốngkiểmtratínhhợplệcủathôngtinnhậpvào.
3.Hệthốngkiểmtralịchtrìnhcánhânđểràsoátxemcótrùng
lịchvớicáchoạtđộngkháckhông.
4.Hệthốngtạoquytrìnhphêduyệttươngứngvớithôngtincủa
đơnđăngkýcôngtácvàthêmvàolịchcánhâncủacácthành
viênthamgia.
5.Hệthốnggửiđơnđăngkýcôngtácđếncácbênliênquanđể
thẩmđịnhvàphêduyệt.
6.Hệthốngghinhậnkhoảngthờigiancôngtáctronglịchcá
nhânphụcvụkiểmtraxungđộtvàphátsinhthôngbáotheoquy
trình.
7.Ngườidùngtruycậpđơnđăngkýcôngtácđểxemthôngtin
chitiết,trạngtháiphêduyệt,lịchsửthaotác.
Luồngngoạilệ 2.1.Tạibước2,nếuthôngtinnhậpvàokhônghợplệ,hệthống
thôngbáolỗivàyêucầungườidùngchỉnhsửa.
3.1.Tạibước3,nếucótrùnglịchtrìnhcánhân,hệthốngthông
báolỗivàyêucầungườidùngchỉnhsửalạithờigiancôngtác.
Hậuđiềukiện Đơnđăngkýcôngtácđượcgửiđếncácbênliênquanđểthẩm
địnhvàphêduyệt.
Bảng 4.17: Đặc tả use case UC-BT-03: Xóa đơn đăng ký công tác
Thuộctính Nộidungđặctả
Tácnhân Nhânsự
Tiềnđiềukiện Đãđăngnhậpvàoứngdụng,làngườilậpđơnvàđơnđangở
trạngtháiNháp.
Kíchhoạt Ngườidùngtruycậpvàodanhsáchđơnđăngkýcôngtác.
Luồngchính 1.Ngườidùngchọnđơnđăngkýcôngtáccótrạngtháilà"Nháp"
đểxóa.
2.Ngườidùngnhấnnút"Xóa"đểxóađơnđăngkýcôngtác.
3.Hệthốnghiểnthịhộpthoạixácnhậnxóađơnđăngkýcông
tác.
4.Ngườidùngxácnhậnxóađơnđăngkýcôngtác.
5.HệthốngkiểmtrađơnvẫnởtrạngtháiNháp,sauđóxóađơn
đăngkýcôngtác.
52

Luồngngoạilệ 5.1.Nếuđơnđãđượcgửihoặcthayđổitrạngthái,hệthốngtừ
chốixóavàgiữnguyêndữliệu.
Hậuđiềukiện ChỉđơnNháphợplệđượcxóakhỏihệthống.
Bảng 4.18: Đặc tả use case UC-BT-04: Phê duyệt đơn đăng ký công tác
Thuộctính Nộidungđặctả
Môtả Chophépnhânsựcóthẩmquyềntạitừngcộtmốcxemxétvà
đưaraquyếtđịnh(Duyệt/Trảlại/Từchối)đốivớiphiếucông
tácđãđượcgửi,đưaphiếuđiquachuỗicáccấpthẩmđịnhphù
hợpvớiloạicôngtácchođếnkhiđượcBanGiámhiệuphêduyệt
chínhthứchoặcbịchấmdứt.
Tácnhân Lãnhđạođơnvị,LãnhđạoPhòngKH&CN,Chuyênviên/Lãnh
đạoTCNS,VănphòngBanGiámhiệu,BanGiámhiệu
Tiềnđiềukiện -Đơnđãđượcgửivàđangởmộttrongcácbướcduyệt:Lãnh
đạo đơn vị,Lãnh đạo KHCN,Chuyên viên TCNS,Lãnh đạo
TCNS,Chuyên viên BGH,BGH.
-Ngườithựchiệncóthẩmquyềnduyệttạiđúngbướchiệntạicủa
phiếu
Kíchhoạt Ngườiduyệtmởphiếuđangchờtạibướccủamìnhvàchọnmột
trongbahànhđộng:Duyệt,Trảlại,Từchối.
Luồngchính 1.Ngườicóthẩmquyềnmởphiếuđangchờtạibướcđượcphân
công.
2.Ngườiduyệtxemxétthôngtinchuyếnđi,thờigianvắngmặt,
phươngánphâncôngthaythế.
3.Ngườiduyệtchọn"Duyệt".
4.HRMkiểmtraquyền,bướcxửlývàdữliệu,ghinhậnquyết
địnhvànhậtkýquytrình.
5.Hệthốnggửithôngbáođếnnhânsựcóthẩmquyềnduyệtở
bướckếtiếp.
53

Luồngthaythế 5.1.Tạibước5,nếuphiếuđangởbướcduyệtcuốicùng(BGH),hệ
thốngchuyểnphiếusangtrạngtháiKết thúc.
A2—Trảlạiphiếu:
3.2.Ngườiduyệtchọn"Trảlại"vànhậpghichúyêucầuchỉnh
sửa.
4.2.Hệthốngsẽtrảlạiphiếuchongườinộpvàmởlạiquyền
chỉnhsửachongườinộp.
5.2.Hệthốnggửithôngbáokèmghichúchongườinộp.
A3—Từchốiphiếu:
3.3.Ngườiduyệtchọn"Từchối"vànhậpghichúlýdotừchối.
4.3.HệthốngcậpnhậttrạngtháiphiếuthànhTừ chối.
5.3.HRMxóacáckhoảngthờigiancôngtácgắnvớiphiếutrong
lịchcánhâncủacácthànhviên.
6.3.Hệthốngthôngbáochongườinộpvàmọithànhviênliên
quan.
Hậuđiềukiện Đơnchuyểnsangtrạngtháimớithànhcông.
Bảng 4.19: Đặc tả use case UC-BT-05: Thu hồi đơn đăng ký công tác
Thuộctính Nộidungđặctả
Tácnhân NhânsựTCNShoặcVănphòngBGHđượccấpquyềnthuhồi
Tiềnđiềukiện Đãđăngnhập,cóquyềnxửlýcôngtácvàđápứngđiềukiện
nhânsựthuộcTCNShoặcvaitròVănphòngBGHtheoHRM.
Kíchhoạt Ngườidùngtruycậpvàodanhsáchđơnđăngkýcôngtác.
Luồngchính 1.Ngườicóquyềnchọnphiếuđăngkýcầnthuhồivàxemthông
tinhiệntại.
2.Ngườidùngnhấnnút"Thuhồi"đểthuhồiđơnđăngkýcông
tác.
3.Hệthốnghiểnthịhộpthoạixácnhậnthuhồiđơnđăngkýcông
tác.
4.Ngườidùngxácnhậnthuhồiđơnđăngkýcôngtác.
5.HRMkiểmtraquyềnvàđiềukiệnvaitrò/đơnvị;cậpnhật
phiếuthànhĐãthuhồi(THU_HOI),xóadữliệulịchcánhânvà
quátrìnhcôngtácgắnvớiphiếu.
6.Hệthốngthôngbáochongườinộpvàmọithànhviênliênquan
vềviệcthuhồiphiếu.
Luồngngoạilệ -Khôngđủquyền,khôngđápứngđiềukiệnvaitrò/đơnvịhoặc
phiếukhôngtồntại:HRMtừchốithaotác.
Hậuđiềukiện KhiđượcHRMchấpnhận,phiếuchuyểnsangĐãthuhồi(THU_
HOI);dữliệuliênquanđượcxửlýtheoquytrình.
54

4.2.3.3 Biểu đồ hoạt động
| Hình 4.9: | Sơ đồ hoạt | động quản | lý công tác |
| --------- | ---------- | --------- | ----------- |
55

| 4.2.3.4 Biểu | đồ tuần     | tự        |                 |             |
| ------------ | ----------- | --------- | --------------- | ----------- |
|              | Hình        | 4.10: Sơ  | đồ tuần tự quản | lý công tác |
| 4.2.4 Văn    | phòng       | số, nhiệm | vụ và lịch      | công tác    |
| 4.2.4.1 Mục  | tiêu và yêu | cầu chức  | năng            |             |
Ứng dụng cung cấp chức năng tra cứu, phân công và xử lý văn bản đến, xem
văn bản đi và theo dõi nhiệm vụ từ iOffice. Phân công trên mobile gắn với phiếu
giải quyết văn bản đến; tạo hoặc phân công nhiệm vụ độc lập và nộp báo cáo tiến
| độ nằm ngoài | phạm vi mobile. |     |     |     |
| ------------ | --------------- | --- | --- | --- |
Lịch tổng hợp (Unified Calendar) kết hợp lịch họp iOffice với lịch nghỉ phép
và công tác từ HRM, giúp người dùng theo dõi các loại lịch liên quan trên một
giao diện. Dữ liệu gốc và thẩm quyền xử lý vẫn thuộc từng hệ thống nguồn.
Người dùng có quyền sử dụng lịch có thể ghi nhận có mặt, hoàn tác hoặc
báo vắng trong cửa sổ thời gian được iOffice cho phép. Có phân công thì trạng
thái gắn với dòng phân công; không có phân công thì trạng thái được ghi nhận
56

ở nhóm khách. Tạo trực tiếp lịch họp cấp Trường dành cho tài khoản được cấp
quyền, lưu ở bước tổng hợp và chưa phải phát hành lịch chính thức.
|      | Bảng 4.20: Yêu cầu | chức năng nhóm | văn phòng            | số và lịch |
| ---- | ------------------ | -------------- | -------------------- | ---------- |
| MãFR | Chứcnăng           | Tácnhân        | Môtảvàràngbuộcnghiệp |            |
vụ
| FR-IOFF- | Tracứuvănbảnvà | Nhânsự | Tracứuvănbảnđến/đivàtiến |     |
| -------- | -------------- | ------ | ------------------------ | --- |
| 01       | nhiệmvụ        |        | trìnhluânchuyển;xemdanh  |     |
sáchnhiệmvụliênquan.
| FR-IOFF- | Phâncôngxửlývăn | Lãnhđạo/văn | Phâncôngtráchnhiệmxử    |     |
| -------- | --------------- | ----------- | ----------------------- | --- |
| 02       | bảnđến          | thưP.HC,    | lývănbảnđếnchođơnvị     |     |
|          |                 | BGH         | hoặccánhântrênphiếugiải |     |
quyết,theoquyềnvàtrạngthái
nghiệpvụ.
| FR-IOFF- | Xửlýquytrìnhvăn | Nhânsựcó  | Thựchiệncácthaotácxửlý |     |
| -------- | --------------- | --------- | ---------------------- | --- |
| 03       | bản             | thẩmquyền | vănbảnnhư:thammưu,chỉ  |     |
đạo,hoặctiếpnhậncácnhiệm
vụđượcgiao.
| FR-IOFF- | Chitiếtthôngtin | Nhânsự | Xemtrạngthái,tiếnđộ,báo |     |
| -------- | --------------- | ------ | ----------------------- | --- |
| 04       | nhiệmvụđínhkèm  |        | cáođãcóvàcôngviệcliên   |     |
|          | vớivănbản       |        | quancủanhiệmvụđượcphép  |     |
truycập.
| FR-SCH- | Điểmdanhvàbáo | Nhânsựtham | Ghinhậncómặt,hoàntác   |     |
| ------- | ------------- | ---------- | ---------------------- | --- |
| 01      | vắng          | dự         | hoặcbáovắngcólýdotrong |     |
khungthờigianhợplệ;phân
biệtngườiđượcphâncôngvà
kháchtựđiểmdanh.
| FR-SCH- | Xemlịchlàmviệc | Nhânsự | Hiểnthịlịchtuầntổnghợptừ   |     |
| ------- | -------------- | ------ | -------------------------- | --- |
| 02      | tổnghợp        |        | 3nguồn:lịchhọpiOffice,lịch |     |
phépHRMvàlịchcôngtác
HRM.
| FR-SCH- | Tạo/đăngkýcuộc | Nhânsự       | Biểumẫunativechonhánh   |     |
| ------- | -------------- | ------------ | ----------------------- | --- |
| 03      | họp            | cóquyền;     | đơnvị,đăngkýTrườnghoặc  |     |
|         |                | Chuyênviên   | tạotrựctiếpTrườngtheo   |     |
|         |                | BGH          | quyền.                  |     |
| FR-SCH- | Thànhphầnvàtài | Ngườitạolịch | Chọnchủtrì/thamdự/thưký |     |
| 04      | liệu           |              | vàtàiliệu.LịchTrườngcần |     |
thànhphầnthuộcBGH,HĐT
hoặcVPĐU;tảitệptheoquyền
riêng.
57

| MãFR | Chứcnăng | Tácnhân | Môtảvàràngbuộcnghiệp |
| ---- | -------- | ------- | -------------------- |
vụ
| FR-SCH- | Xemlịchchờliên | Nhânsự | HiểnthịlịchTrườngởtổng   |
| ------- | -------------- | ------ | ------------------------ |
| 05      | quan           |        | hợptrongdanhsáchlịchliên |
quankhilàngườitạo,được
mờihoặcthuộcđơnvịđược
mời.
| FR-SCH- | Mởnghiệpvụtừlịch | Nhânsự | Mởđúngchitiếtcuộchọp,đơn |
| ------- | ---------------- | ------ | ------------------------ |
| 06      |                  |        | nghỉphéphoặcphiếucôngtác |
theonguồnsựkiện.
| FR-SCH- | Tiếpnhậnlờimời | Ngườiđược | Phátsinhlờimờisaukhitạo |
| ------- | -------------- | --------- | ----------------------- |
| 07      |                | mời       | trựctiếpởtổnghợptheocơ  |
chếbảndemo;kếtquảlưu
khôngbảođảmthiếtbịđã
nhậnpush.
| 4.2.4.2 | Đặc tả Use Case |     |     |
| ------- | --------------- | --- | --- |
UC-OFF-01 cụ thể hóa FR-IOFF-02; UC-OFF-02/03/04 cụ thể hóa FR-IOFF-
03. UC-SCH-01 gắn với FR-SCH-01, UC-SCH-02 với FR-SCH-02/05/06 và
UC-SCH-03 với FR-SCH-03/04/07. Các yêu cầu tra cứu FR-IOFF-01/04 được
mô tả trực tiếp trong bảng FR. Hình 4.11 minh họa các nhóm chức năng.
Hình4.11:SơđồĐặctảUse casenhómVăn phòngsố,nhiệmvụ vàlịchcôngtác
58

Bảng 4.21: Đặc tả use case UC-OFF-01: Phân công xử lý văn bản đến
| Thuộctính | Nộidungđặctả                                      |     |     |     |
| --------- | ------------------------------------------------- | --- | --- | --- |
| Môtả      | Tạohoặccậpnhậtphâncôngtráchnhiệmxửlývănbảnđếntrên |     |     |     |
phiếugiảiquyết.
| Tácnhân | Nhânsựđượccấpquyềnchỉnhsửaphiếugiảiquyếtvănbảnđến |     |     |     |
| ------- | ------------------------------------------------- | --- | --- | --- |
Tiềnđiềukiện Ngườidùngđãđăngnhập;dữliệuquyềnvàtrạngtháivănbản
chophépchỉnhsửaphiếugiảiquyết.
| Kíchhoạt | Ngườidùngmởmànhìnhchitiếtvănbảnđếnvàchọnchứcnăng |     |     |     |
| -------- | ------------------------------------------------ | --- | --- | --- |
phâncông.
| Luồngchính | 1.Ngườidùngchọnvănbảnđếncầnphâncông. |     |     |     |
| ---------- | ------------------------------------ | --- | --- | --- |
2.Ngườidùngchọnloạitráchnhiệmvàđốitượngnhậnnhiệmvụ
(đơnvịhoặccánhân).
3.Ứngdụnggửiphiếugiảiquyết;iOfficetiếpnhậnvàlưucác
phâncônghợplệ,rồiphảnhồikếtquả.
Luồngngoạilệ -iOfficetừchốidữliệuhoặckhôngthểlưu:hiểnthịlỗi,không
xácnhậnđãlưu.
Hậuđiềukiện ThôngtinphâncôngđượcghinhậnkhiiOfficechấpnhận.Phát
sinhthôngbáophụthuộchànhđộngvàbướcluânchuyểnvăn
bản.
| Bảng 4.22: | Đặc tả use                   | case UC-OFF-02: | Tham mưu | văn bản đến |
| ---------- | ---------------------------- | --------------- | -------- | ----------- |
| Thuộctính  | Nộidungđặctả                 |                 |          |             |
| Môtả       | Thựchiệnthammưuchovănbảnđến. |                 |          |             |
| Tácnhân    | LãnhđạophòngHànhchính        |                 |          |             |
Tiềnđiềukiện Ngườidùngđãđăngnhập,cóquyềnthammưuởbướchiệntạivà
phiếugiảiquyếtđãcóngườichỉđạo.
| Kíchhoạt   | Ngườidùngmởmànhìnhchitiếtvănbảnđến.             |     |     |     |
| ---------- | ----------------------------------------------- | --- | --- | --- |
| Luồngchính | 1.Ngườidùngxemchitiếtvănbảnđếnvàcácthôngtinliên |     |     |     |
quan.
2.Ngườidùngnhậpýkiếnvàgửithammưu.
3.iOfficeghinhậnýkiếnvàxửlýquytrìnhvănbảntheoquyền,
trạngtháihiệntại.
Luồngthaythế -1a(Thiếungườichỉđạo):Ứngdụngyêucầubổsungngườichỉ
đạotrênphiếugiảiquyếttrướckhigửi;ngườicóquyềnthựchiện
UC-OFF-01.
Hậuđiềukiện ÝkiếnthammưuvàkếtquảxửlývănbảnđượciOfficeghinhận.
| Bảng 4.23: | Đặc tả                      | use case UC-OFF-03: | Chỉ đạo | văn bản đến |
| ---------- | --------------------------- | ------------------- | ------- | ----------- |
| Thuộctính  | Nộidungđặctả                |                     |         |             |
| Môtả       | Thựchiệnchỉđạochovănbảnđến. |                     |         |             |
| Tácnhân    | BanGiámHiệu                 |                     |         |             |
59

Tiềnđiềukiện BanGiámHiệuđãđăngnhậpvàcóquyềnchỉđạochovănbản
đến.
Kíchhoạt Ngườidùngmởmànhìnhchitiếtvănbảnđến.
Luồngchính 1.Ngườidùngxemchitiếtvănbảnđếnvàcácthôngtinliên
quan.
2.Ngườidùngnhậpýkiếnvàgửichỉđạo.
3.iOfficeghinhậnýkiếnchỉđạovàcậpnhậtquytrìnhvănbản
theođiềukiệnhiệntại.
Luồngthaythế -1a(Thựchiệnphâncôngtráchnhiệm):Nếuchưacóthôngtin
phâncông,ngườidùngtiếnhànhphâncôngtráchnhiệm(nếucó
quyền)(UC-OFF-01).
-3a(Nhiệmvụliênkết):Khiđãđủýkiếnchỉđạotheophân
công,cóbướctriểnkhaitiếptheo,vănbảnkhôngphảiloạithông
tinvàcóngườithựchiện,iOfficecóthểtạonhiệmvụliênkết
theoquytrình.
Hậuđiềukiện Ýkiếnchỉđạovàkếtquảxửlývănbảnđượcghinhận;nhiệmvụ
liênkếtchỉphátsinhkhiđủđiềukiệnquytrình.
Bảng 4.24: Đặc tả use case UC-OFF-04: Tiếp nhận văn bản/nhiệm vụ
Thuộctính Nộidungđặctả
Môtả Ghinhậnviệctiếpnhậnvănbảnhoặcnhiệmvụđượcphâncông;
phânbiệtthaotáctiếpnhậnvớihoànthànhphầnviệcđượcgiao.
Tácnhân Nhânsựđượcphâncông,Lãnhđạocủađơnvịđượcphâncông
Tiềnđiềukiện Ngườidùngđăngnhậpvàcóquyềntiếpnhậnvănbảnhoặc
nhiệmvụđượcphâncông.
Kíchhoạt Ngườidùngmởmànhìnhchitiếtvănbảnđến.
Luồngchính 1.Ngườidùngtiếpnhậnvănbảnhoặcnhiệmvụđượcphâncông.
2.Hệthốngghinhậnngườivàthờigiantiếpnhậntrêndòngphân
côngtươngứng.
3.Hệthốngphảnhồitrạngtháitiếpnhậnđểứngdụngcậpnhật
thôngtinhiểnthị.
Luồngthaythế -2a(Vănbảnthôngtinhoặcphâncôngđểbiết):Khitiếpnhận,
hệthốngđồngthờighinhậnhoànthànhdòngphâncôngtương
ứng.
-2b(Vănbảngiaonhiệmvụ):Việctiếpnhậnchỉghinhậnbắt
đầuxửlý,khôngđồngnghĩahoànthành.Saukhithựchiệncông
việc,ngườicóquyềnsửdụngthaotácHoànthànhriêngtrênhệ
thốngiOffice;hệthốngghinhậnkếtquảhoànthànhtheoquy
trình.
60

Hậuđiềukiện Dòngphâncôngđượcghinhậnđãtiếpnhận;trạngtháihoàn
thànhphầnviệcđượcghinhậnngayởnhánhthôngtin/đểbiết
hoặcsauthaotáchoànthànhriêngđốivớivănbảngiaonhiệm
vụ.
Bảng 4.25: Đặc tả use case UC-SCH-01: Điểm danh hoặc báo vắng cuộc họp
Thuộctính Nộidungđặctả
Môtả Ghinhậncómặt,hoàntáchoặcbáovắngcólýdotheongười
dùngtrongphiên.
Tácnhân Nhânsựcóquyềnsửdụngphânhệlịch,gồmngườiđượcphân
côngvàkháchthamdự
Tiềnđiềukiện Ngườidùngđãđăngnhập,cóquyềnsửdụngphânhệlịch;mục
lịchtồntại,chưabịxóavàcóthờigianphùhợp.Đốivớiluồng
trênmobile,ngườidùngcầnmởđượcchitiếtcuộchọp.
Kíchhoạt Ngườidùngmởmànhìnhchitiếtcuộchọptrênứngdụngdi
động.
Luồngchính 1.NgườidùngmởxemchitiếtcuộchọptrêngiaodiệnLịchhoặc
từthôngbáonhắcviệc.
2.Ứngdụnghiểnthịcácthaotácđiểmdanhphùhợpvớitrạng
tháicuộchọp.
3.Ngườidùngchọnđiểmdanhcómặthoặcbáovắngvànhậplý
dokhicần.
4.Ứngdụnggửiyêucầu;iOfficekiểmtraphiên,quyềnphânhệ
lịch,sựtồntạicủamụclịch,thờigianvàtrạngtháithamdựhiện
tại.
5.iOfficeghinhậntheodòngphâncôngnếucó;nếukhông,ghi
nhậnkháchtựđiểmdanhriêng.Ứngdụngcậpnhậttrạngthái
thamdựtừphảnhồi.
Luồngthaythế -Luồng3a(Đổitrạngthái):Ngườiđãbáovắngcóthểchuyển
sangcómặttrongkhunggiờđiểmdanhhợplệ.
-Luồng3b(Hoàntác):Ngườiđãđiểmdanhcómặtcóthểhoàn
táctrongkhunggiờchophéprồithựchiệnlạithaotácphùhợp.
Luồngngoạilệ -Ngoạilệ4a(Ngoàikhungthờigian):Thaotácthựchiệnngoài
khunggiờquyđịnh→hệthốngtừchốivàthôngbáolýdo.
-Ngoạilệ4b(Khôngđủquyềnphânhệ,phiênkhônghợplệhoặc
lịchđãxóa):iOfficetừchốiyêucầu.
-Ngoạilệ4c(Thiếulýdohoặcđãcómặt):Báovắngphảicólý
dohợplệ;thaotácđiểmdanhlạikhiđãcómặtbịtừchối.
Hậuđiềukiện Trạngtháithamdựđượcghinhậnvàkếtquảmớiđượcphảnhồi
trênứngdụng.
61

Bảng 4.26: Đặc tả use case UC-SCH-02: Xem lịch làm việc tổng hợp
| Thuộctính |     | Nộidungđặctả                                       |     |     |
| --------- | --- | -------------------------------------------------- | --- | --- |
| Môtả      |     | ChophépngườidùngtheodõilịchhọpiOffice,lịchnghỉphép |     |     |
HRMvàlịchcôngtácHRMtrênmộtgiaodiệntuầnduynhất.
| Tácnhân      |     | Nhânsự                                         |     |     |
| ------------ | --- | ---------------------------------------------- | --- | --- |
| Tiềnđiềukiện |     | Ngườidùngđãđăngnhậpvàcóquyềntruycậpdữliệunguồn |     |     |
tươngứng.
| Kíchhoạt   |     | Ngườidùngmởmục“Lịchbiểu”trênứngdụngdiđộng. |     |     |
| ---------- | --- | ------------------------------------------ | --- | --- |
| Luồngchính |     | 1.Ngườidùngmởmục“Lịchbiểu”trênứngdụng.     |     |     |
2.ỨngdụngtảilịchiOfficevàcácdữliệunghỉphép,côngtác
HRMđượcphéptruycậptrongkhoảngthờigiancầnxem.
3.Ứngdụnghiểnthịcácsựkiệntrêngiaodiệnlịchtuầnthống
nhất,phânbiệtrõnguồndữliệuquamàusắcvànhãnphânloại.
4.Ngườidùngchọnmộtsựkiệncụthểđểxemchitiếthoặc
chuyểnđếnmànhìnhnghiệpvụliênquan.
Luồngngoạilệ -Ngoạilệ2a(Lỗitảilịch):Khicólỗiđượctruyềnđếngiaodiện,
ứngdụnghiểnthịlỗivàchophéptảilại.Yêucầuxửlýlỗitừng
nguồnđượcnêuởNFR-01;mứcđápứnghiệntạiđượcđốichiếu
tạiChương6.
Hậuđiềukiện Cácsựkiệntảiđượchiểnthịtrênlịchtổnghợp;việctracứu
khôngthayđổidữliệunguồn.
Điểm danh có mặt và hoàn tác được thực hiện từ một giờ trước giờ bắt đầu
đến hết ngày kết thúc cuộc họp. Báo vắng được thực hiện đến hết ngày bắt đầu,
với lý do từ 1 đến 200 ký tự sau khi loại khoảng trắng đầu/cuối. Chuyển từ vắng
sang có mặt tuân theo cửa sổ điểm danh. Thẻ thống kê đếm các dòng phân công;
| khách được | hiển thị    | ở nhóm riêng, | không cộng | vào tổng này. |
| ---------- | ----------- | ------------- | ---------- | ------------- |
| 4.2.4.3    | Tạo và đăng | ký cuộc       | họp        |               |
Bảng 4.27: Đặc tả use case UC-SCH-03: Tạo và đăng ký cuộc họp
| Thuộctính |     | Nộidungđặctả                                     |     |     |
| --------- | --- | ------------------------------------------------ | --- | --- |
| Môtả      |     | Chuẩnbịvàlưuthôngtincuộchọpbằngbiểumẫunative,lựa |     |     |
chọnnhánhtheoquyềndoiOfficecungcấp.
| Tácnhân |     | ChuyênviênBGHđượccấpquyềnđốivớitạotrựctiếpTrường; |     |     |
| ------- | --- | ------------------------------------------------- | --- | --- |
nhânsựcóquyềntươngứngđốivớicácnhánhkhác
| Tiềnđiềukiện |     | Ngườidùngđăngnhập,cóquyềnsửdụnglịchvàquyềncủa |     |     |
| ------------ | --- | --------------------------------------------- | --- | --- |
nhánhđượcchọn;danhmục,quytrìnhđanghoạtđộngđápứng
yêucầubackend.
| Kíchhoạt |     | NgườidùngchọnTạolịchtrênmànhìnhLịchbiểu. |     |     |
| -------- | --- | ---------------------------------------- | --- | --- |
62

| Luồngchính | 1.Ứngdụnghiểnthịcáclựachọntạođượctàikhoảnchophép. |     |     |     |
| ---------- | ------------------------------------------------- | --- | --- | --- |
2.ChuyênviênBGHchọntạotrựctiếplịchTrường.
3.Ngườidùngnhậptiêuđề,loạilịch,thờigian,địađiểmvàghi
chú;chọnchủtrì,ngườithamdự,thưkývàtệptheoquyền.
4.Ứngdụngkiểmtrabiểumẫu,gửiyêucầutạotớiiOffice.
5.iOfficekiểmtraquyềnvàthànhphần;lịchTrườngcầnítnhất
mộtphâncôngthuộcBGH,HĐThoặcVPĐU.Ngườitạovàđơn
vịtạođượcxácđịnhtừphiên;lịchlưuởbướctổnghợpcùngcác
phâncônghợplệ.
6.Hệthốngkíchhoạtcơchếgửilờimờicủabảndemosaukhi
lưuvàtrảkếtquả;bướcnàykhôngxácnhậnthiếtbịđãnhận
thôngbáo.
7.Ứngdụngtảicáctệpđãchọnbằngyêucầuriêngrồilàmmới
lịch;ngườitạoxemtrạngtháichưapháthành.
| Luồngthaythế | -Nhánhđơnvị:lưutheohợpđồnglịchđơnvị. |     |     |     |
| ------------ | ------------------------------------ | --- | --- | --- |
-NhánhđăngkýTrường:tạophiếuđăngký,lưumục/tệprồigửi
phiếutheoquytrình;khôngđồngnhấtvớitạotrựctiếp.
Luồngngoạilệ -Dữliệuchưahợplệhoặcthiếuthànhphầnbắtbuộccủalịch
Trường:yêucầubổsung;backendcóthểtrảthôngbáolỗichung.
-Khôngđủquyền,hếtphiênhoặclỗilưu:backendtừchối,ứng
dụngkhôngthôngbáođãtạo.
-ĐãnhậnIDnhưnguploadlỗi:mụclịchcóthểđãtồntại;ứng
dụnggiữIDvàphầntệpđãtảitrongphiênformđểthửlạitrên
mụcđó.
-Mấtphảnhồitạo:kếtquảcóthểchưaxácđịnh;khôngcóbảo
đảmchốngtrùngtuyệtđốikhitạolại.
Hậuđiềukiện Vớinhánhtrựctiếpthànhcông,mụclịchcóngườitạo,phâncông
vàtrạngtháitổnghợp;tệpđượcghinhậnkhiuploadthànhcông.
Lịchchưađượccoilàpháthànhchínhthức.
|                | Bảng 4.28:                                     | Các nhánh | tạo và đăng | ký lịch |
| -------------- | ---------------------------------------------- | --------- | ----------- | ------- |
| Nhánh          | Ýnghĩa                                         |           |             |         |
| Đơnvị          | Lậplịchhọpnộibộcủađơnvị.                       |           |             |         |
| ĐăngkýTrường   | Lậpvàgửiphiếuđăngkýđểđượctiếpnhậntheoquytrình. |           |             |         |
| TrựctiếpTrường | LưulịchhọpcấpTrườngởbướctổnghợp,chưapháthành   |           |             |         |
chínhthức.
Các lựa chọn tạo lịch được hiển thị theo quyền tài khoản. Với nhánh tạo trực
tiếp cấp Trường, lịch được lưu ở bước tổng hợp để tiếp tục xử lý, chưa phải lịch
| chính thức đã | phát hành.    |            |             |        |
| ------------- | ------------- | ---------- | ----------- | ------ |
| Thiết kế chức | năng tạo lịch | được trình | bày tại Mục | 5.2.4. |
63

| 4.2.4.4   | Biểu đồ hoạt | động      |             |          |
| --------- | ------------ | --------- | ----------- | -------- |
| 4.2.4.4.a | Quy trình    | điểm danh | và báo vắng | cuộc họp |
Hình 4.12 minh họa quy trình điểm danh và báo vắng của người được phân
công. Nhánh khách và khung thời gian được mô tả tại UC-SCH-01 và biểu đồ
tuần tự.
Hình 4.12: Biểu đồ hoạt động Điểm danh và báo vắng cuộc họp của người được
phân công
| 4.2.4.4.b | Quy trình | xử lý văn | bản đến |     |
| --------- | --------- | --------- | ------- | --- |
Hình 4.13 thể hiện luân chuyển văn bản đến qua các bước xử lý.
64

|           |         | Hình 4.13: | Sơ đồ hoạt    | động: Văn | bản đến |
| --------- | ------- | ---------- | ------------- | --------- | ------- |
| 4.2.4.5   | Biểu đồ | tuần tự    |               |           |         |
| 4.2.4.5.a | Điểm    | danh và    | báo vắng cuộc | họp       |         |
Hình 4.14 thể hiện kiểm tra điều kiện, ghi nhận theo phân công hoặc khách
| và cập nhật | kết | quả của UC-SCH-01. |     |     |     |
| ----------- | --- | ------------------ | --- | --- | --- |
65

|           | Hình 4.14: | Biểu đồ tuần  | tự Điểm danh | và báo vắng | cuộc họp |
| --------- | ---------- | ------------- | ------------ | ----------- | -------- |
| 4.2.4.5.b | Tạo trực   | tiếp lịch họp | cấp Trường   |             |          |
Hình 4.15 thể hiện lưu lịch ở tổng hợp và bổ sung tài liệu sau đó. Lỗi tải tài
liệu không làm mất lịch đã lưu; tạo trực tiếp chưa phải phát hành lịch chính thức.
66

Hình 4.15: Biểu đồ tuần tự nghiệp vụ tạo trực tiếp lịch họp cấp Trường
67

| 4.3 | Yêu cầu | phi chức | năng |     |     |
| --- | ------- | -------- | ---- | --- | --- |
Các yêu cầu phi chức năng xác định những mục tiêu chất lượng cần xem xét
trong quá trình thiết kế và hiện thực MyHCMUT Mobile. Mức độ đáp ứng được
đánh giá thông qua kết quả kiểm thử và các giới hạn trình bày tại Chương 6.
|        | Bảng 4.29: | Yêu cầu | phi chức năng                        | của MyHCMUT | Mobile |
| ------ | ---------- | ------- | ------------------------------------ | ----------- | ------ |
| Mã     | Yêucầu     |         | Nộidungđặctả                         |             |        |
| NFR-01 | Tínhổnđịnh |         | Cầnxửlýmấtkếtnối,quáthờigianchờvàlỗi |             |        |
hệthốngnguồn.Cầnphânbiệtdữliệurỗngvới
dữliệuchưatảiđược;chỉbáothaotácthành
côngsauxácnhậncủabackend.
| NFR-02 | Khảnăngsửdụng |     | Giaodiệncầnnhấtquán,phùhợpthaotácdi |     |     |
| ------ | ------------- | --- | ----------------------------------- | --- | --- |
động;biểumẫunhiềuthôngtinđượcchiabước.
Cầnthểhiệntrạngtháitải,lỗi,kếtquảvàđiều
kiệntiếptụcthaotác.
| NFR-03 | Bảomậtvàphân |     | Cầnxácthựctrướckhitruycậpnghiệpvụ.UI   |     |     |
| ------ | ------------ | --- | -------------------------------------- | --- | --- |
|        | quyền        |     | phảnánhquyềntàikhoản;backendcầnkiểmtra |     |     |
quyềntheonghiệpvụ,đốitượngvàbướcxửlý,
kểcảyêucầugọitrựctiếp.
| NFR-04 | Tínhnhấtquándữ |     | Dữliệuchínhthứcdohệthốngnguồnquảnlý; |     |     |
| ------ | -------------- | --- | ------------------------------------ | --- | --- |
|        | liệu           |     | dữliệucụcbộchỉhỗtrợsửdụng.Sauthaotác |     |     |
ghi,cầnphảnánhkếtquảđượcbackendghi
nhận;kếtquảchưaxácđịnhkhimấtphảnhồi
khôngđượccoilàlưuthấtbạichắcchắn.
| NFR-05 | Khảnăngbảotrìvà |     | Mụctiêuthiếtkếlàtổchứcmãtheonhóm     |     |     |
| ------ | --------------- | --- | ------------------------------------ | --- | --- |
|        | mởrộng          |     | nghiệpvụvàtáchthànhphầndùngchung,hạn |     |     |
chếphụthuộckhôngcầnthiếtđểhỗtrợthayđổi
vàkiểmthử.
Các yêu cầu trên được dùng làm tiêu chí đối chiếu khi đánh giá hệ thống. Kết
quả đánh giá và các giới hạn tương ứng được trình bày tại Chương 6.
| 4.4 | Kết luận | chương |     |     |     |
| --- | -------- | ------ | --- | --- | --- |
Chương này đã xác định các nhóm người dùng, yêu cầu chức năng và yêu cầu
phi chức năng của MyHCMUT Mobile. Các yêu cầu chức năng được phân tích
theo những nhóm nghiệp vụ chính và được làm rõ thông qua các ca sử dụng, biểu
đồ hoạt động và biểu đồ tuần tự đối với các quy trình quan trọng. Bên cạnh đó,
68

các yêu cầu phi chức năng xác định những yêu cầu về tính ổn định, khả năng sử
dụng, bảo mật và phân quyền, tính nhất quán dữ liệu, cũng như khả năng bảo trì
| và mở rộng | của ứng dụng. |     |     |     |
| ---------- | ------------- | --- | --- | --- |
Các yêu cầu được xác định trong chương này là cơ sở cho việc thiết kế kiến
trúc, tổ chức các thành phần ứng dụng và xây dựng các cơ chế tích hợp với hệ
| thống nghiệp | vụ hiện hữu | được trình | bày trong | Chương 5. |
| ------------ | ----------- | ---------- | --------- | --------- |
69

| Chương | 5   |     |       |
| ------ | --- | --- | ----- |
| THIẾT  | KẾ  | HỆ  | THỐNG |
Chương này trình bày thiết kế hệ thống MyHCMUT Mobile dựa trên các yêu
cầu và quy trình nghiệp vụ đã phân tích ở Chương 4. Nội dung chương bao
gồm kiến trúc tổng thể, thiết kế thành phần và xử lý chức năng nghiệp vụ, mô
hình dữ liệu và các cơ chế tích hợp giữa ứng dụng di động với những hệ thống
| hiện hữu của | Nhà trường. |        |       |
| ------------ | ----------- | ------ | ----- |
| 5.1 Kiến     | trúc tổng   | thể hệ | thống |
Ứng dụng MyHCMUT Mobile được phát triển nhằm cung cấp một điểm truy
cập trên thiết bị di động đến các chức năng nhân sự và văn phòng số của Trường
Đại học Bách khoa – ĐHQG-HCM. Thay vì xây dựng lại các hệ thống nghiệp
vụ hiện hữu, đề tài tập trung phát triển ứng dụng Flutter và bổ sung những điểm
tích hợp cần thiết để khai thác chức năng, dữ liệu và quy trình xử lý từ HRM và
iOffice.
Kiến trúc tổng thể được thể hiện tại Hình 5.1, gồm ứng dụng native, các dịch
vụ backend, tầng dữ liệu và dịch vụ hỗ trợ. Trong đó, ứng dụng di động đảm
nhiệm tương tác với người dùng và kết nối đến các hệ thống nghiệp vụ; các
backend tiếp tục chịu trách nhiệm xác thực yêu cầu, kiểm tra quyền truy cập, xử
lý nghiệp vụ và quản lý dữ liệu thuộc phạm vi của từng hệ thống.
70

Hình 5.1: Kiến trúc tổng thể hệ thống MyHCMUT Mobile
Ứng dụng MyHCMUT Mobile được xây dựng bằng Flutter, cung cấp giao
diện cho các chức năng hồ sơ nhân sự, nghỉ phép, đi công tác, văn bản, nhiệm vụ,
lịch công tác và điểm danh cuộc họp. Ứng dụng kết nối trực tiếp đến các backend
thông qua API; các biểu mẫu cập nhật hồ sơ và tạo cuộc họp được hiện thực bằng
Flutter. Mobile quản lý dữ liệu nhập và trạng thái giao diện, còn backend quyết
định dữ liệu được chấp nhận.
Auth Service tiếp nhận yêu cầu đăng nhập và cấp thông tin xác thực cho ứng
dụng di động. Sau khi đăng nhập thành công, ứng dụng sử dụng access token
khi gửi yêu cầu đến HRM Backend và iOffice Backend. Mỗi backend tự xác
thực token, thiết lập ngữ cảnh người dùng và kiểm tra quyền thực hiện nghiệp vụ
tương ứng. Auth Service không đóng vai trò trung gian chuyển tiếp các yêu cầu
nghiệp vụ giữa ứng dụng và hai backend này.
HRM Backend cung cấp các chức năng quản lý nhân sự, bao gồm hồ sơ nhân
sự, nghỉ phép, đi công tác và các quy trình phê duyệt liên quan. Đề tài kế thừa
các nghiệp vụ và quy trình hiện hữu, đồng thời bổ sung hoặc điều chỉnh một số
API và cơ chế tích hợp để phục vụ ứng dụng di động. HRM Backend tiếp tục
chịu trách nhiệm xử lý nghiệp vụ và quản lý dữ liệu nhân sự tại hệ thống nguồn.
iOffice Backend cung cấp nghiệp vụ văn bản, nhiệm vụ, lịch và điểm danh.
Ngoài khai thác API hiện hữu, tích hợp lịch bổ sung quyền xem mục chưa phát
hành có liên quan và cơ chế lời mời sau khi transaction thành công. Tạo trực tiếp
lịch Trường giữ bước tổng hợp; phát hành vẫn theo quy trình iOffice.
71

Tầng dữ liệu gồm các CSDL nghiệp vụ riêng của HRM và iOffice. Mobile
không kết nối trực tiếp CSDL và không tự ghi trạng thái phê duyệt. Giao diện
Web của các hệ thống nguồn tiếp tục phục vụ quản trị và những nghiệp vụ ngoài
phạm vi mobile; không tham gia như biểu mẫu nhúng trong luồng hồ sơ hiện tại.
Mô hình dữ liệu liên quan được trình bày tại Mục 5.3.
Bên cạnh các kết nối API, ứng dụng tiếp nhận thông báo đẩy qua Firebase
Cloud Messaging từ các hệ thống nghiệp vụ và sử dụng Socket.IO cho chức năng
điểm danh cuộc họp theo thời gian thực. Ứng dụng cũng tổng hợp dữ liệu lịch từ
HRM và iOffice để hiển thị trong một giao diện thống nhất. Các cơ chế tích hợp
này được trình bày tại Mục 5.4.
Việc kết nối trực tiếp đến nhiều backend giúp đề tài tái sử dụng API hiện hữu
và duy trì quyền xử lý nghiệp vụ tại từng hệ thống nguồn, nhưng đồng thời yêu
cầu ứng dụng tự quản lý cấu hình kết nối, lỗi và trạng thái của từng miền dịch vụ.
Việc tách các miền dịch vụ có thể giới hạn ảnh hưởng của sự cố theo từng nhóm
chức năng; mức độ suy giảm cụ thể phụ thuộc vào những backend mà chức năng
đang sử dụng.
Như vậy, phạm vi phát triển của đề tài tập trung vào ứng dụng MyHCMUT
Mobile và các phần mở rộng tích hợp với hệ thống hiện hữu. HRM Backend,
iOffice Backend cùng các cơ sở dữ liệu tương ứng được kế thừa mà không xây
dựng mới. Cấu trúc các thành phần và điểm mở rộng này được trình bày chi tiết
tại Mục 5.2.
72

5.2 Thiết kế thành phần và chức năng nghiệp vụ
Mục này trình bày cách tổ chức ứng dụng MyHCMUT Mobile, các thành
phần backend tham gia cung cấp chức năng và thiết kế xử lý hồ sơ nhân sự, tạo
hoặc đăngký cuộchọp. Nội dung xác địnhtrách nhiệmcủa giaodiện, thànhphần
quản lý trạng thái và backend, cùng phạm vi kế thừa, mở rộng các hệ thống hiện
hữu. Các cơ chế kết nối dùng chung được trình bày riêng tại Mục 5.4.
Khi đánh giá đóng góp, cần phân biệt giao diện và luồng Flutter do nhóm
xây dựng, các API/cơ chế tích hợp bổ sung hoặc điều chỉnh và dữ liệu/quy trình
nghiệp vụ kế thừa. Biểu mẫu native sử dụng hợp đồng của HRM, không chuyển
quyền quản lý hồ sơ sang thiết bị. Bảng 5.1 cụ thể hóa ranh giới theo từng thành
phần.
5.2.1 Thiết kế ứng dụng MyHCMUT Mobile
Ứng dụng MyHCMUT Mobile được phát triển bằng Flutter và tổ chức mã
nguồn theo mô hình monorepo. Các chức năng được phân chia thành những
module nghiệp vụ riêng, trong khi ứng dụng chính chịu trách nhiệm kết hợp các
modulevàcácpackagecungcấpthànhphầndùngchung.Bêntrongtừngmodule,
mã nguồn tiếp tục được tổ chức theo trách nhiệm như giao diện, quản lý trạng
thái, mô hình dữ liệu và giao tiếp API.
73

| Hình     | 5.2: Cấu trúc | monorepo |      | của ứng | dụng | MyHCMUT | Mobile |
| -------- | ------------- | -------- | ---- | ------- | ---- | ------- | ------ |
| Cấu trúc | mã nguồn gồm  | ba       | nhóm | chính:  |      |         |        |
• Ứng dụng chính (apps/myhcmut): Là điểm khởi chạy và kết hợp các
module thành ứng dụng hoàn chỉnh. Thành phần này đảm nhiệm khởi tạo
ứng dụng, cấu hình điều hướng, đăng ký các provider dùng chung và tổ
| chức các | màn hình | ở cấp | ứng dụng. |     |     |     |     |
| -------- | -------- | ----- | --------- | --- | --- | --- | --- |
• Các module nghiệp vụ (modules): Được tổ chức thành các nhóm HRM,
iOffice và thông báo. Module HRM cung cấp các chức năng hồ sơ nhân
sự, nghỉ phép, đi công tác và phê duyệt liên quan. Module iOffice cung
cấp các chức năng văn bản, nhiệm vụ, lịch công tác và điểm danh cuộc
họp. Module thông báo đảm nhiệm tiếp nhận, hiển thị thông báo và xử lý
| điều hướng  | đến chức | năng  | tương       | ứng. |      |           |                 |
| ----------- | -------- | ----- | ----------- | ---- | ---- | --------- | --------------- |
| Các package | dùng     | chung | (packages): |      |      |           |                 |
| •           |          |       |             |      | Cung | cấp những | thành phần được |
nhiều module sử dụng, bao gồm giao tiếp mạng, quản lý thông tin xác
| thực, thành | phần giao | diện | và các | tiện | ích | hỗ trợ. |     |
| ----------- | --------- | ---- | ------ | ---- | --- | ------- | --- |
74

Cách tổ chức này giúp phân định phạm vi mã nguồn theo nhóm nghiệp vụ,
đồng thời cho phép tái sử dụng các thành phần chung giữa nhiều module. Tuy
nhiên,cấutrúcnộibộkhônghoàntoàngiốngnhauởmọichứcnăng;đềtàikhông
| áp đặt một | chuỗi | lớp xử lý | cố định | cho   | toàn bộ ứng dụng. |      |            |     |
| ---------- | ----- | --------- | ------- | ----- | ----------------- | ---- | ---------- | --- |
| Luồng      | xử lý | chức      | năng    | hồ sơ | nhân sự: Chức     | năng | hồ sơ nhân | sự  |
được lựa chọn để minh họa cách các thành phần Flutter phối hợp trong một
luồng xử lý thực tế. Màn hình PersonalProfilePage theo dõi trạng thái từ
profileInfoProvider; provider này tổng hợp dữ liệu từ ba provider thành
phần tương ứng với thông tin cá nhân, đào tạo và quá trình công tác. Mỗi
providerthànhphầnsửdụngfetchWithCacheFirstđểđọcdữliệucụcbộhoặc
gọi HRM Backend thông qua hrmDioProvider. Kết quả được chuyển thành
| ProfileModel, | hợp  | nhất       | và cung | cấp    | lại cho giao diện. |            |     |     |
| ------------- | ---- | ---------- | ------- | ------ | ------------------ | ---------- | --- | --- |
|               | Hình | 5.3: Luồng | tải     | và lưu | đệm dữ liệu        | hồ sơ nhân | sự  |     |
Luồng trên là ví dụ minh họa, không phải cấu trúc bắt buộc của mọi module.
Tùy theo yêu cầu nghiệp vụ, các chức năng khác có thể tổ chức provider và thành
phần xử lý dữ liệu theo cách khác nhau. Những quy tắc ảnh hưởng đến dữ liệu
| chính thức | vẫn được | kiểm | tra tại | backend. |     |     |     |     |
| ---------- | -------- | ---- | ------- | -------- | --- | --- | --- | --- |
Các thành phần dùng chung: Ứng dụng sử dụng các Dio instance được
75

cấu hình theo địa chỉ của Auth Service, HRM Backend và iOffice Backend. Các
instance dùng chung cơ chế quản lý token và gắn thông tin xác thực vào yêu cầu.
Trong phiên bản hiện tại, ba miền dịch vụ sử dụng cùng access token do Auth
Service cấp. Riverpod quản lý trạng thái phục vụ giao diện, còn GoRouter tổ
chức điều hướng giữa các màn hình, bao gồm điều hướng đến chức năng tương
ứng từ thông báo. Cơ chế xác thực được trình bày chi tiết tại Mục 5.4.1.
Bộ nhớ đệm và lưu trữ cục bộ: Dữ liệu hồ sơ được lưu theo từng người dùng
trong SharedPreferences. Mốc 12 giờ là ngưỡng đánh giá độ mới, không phải
thời hạn tự động xóa dữ liệu. Khi cache còn mới, ứng dụng sử dụng dữ liệu cục
bộ mà không gọi mạng. Khi cache quá ngưỡng, ứng dụng vẫn trả dữ liệu hiện có
để hiển thị và thử cập nhật cache trong nền.
Nếu cập nhật nền thất bại, dữ liệu cũ được giữ lại. Nếu thành công, dữ liệu
mới được lưu để sử dụng ở lần đọc tiếp theo, nhưng tác vụ này không tự làm mới
ngay giao diện đang hiển thị. Khi chưa có cache, ứng dụng cần kết nối đến HRM
Backend để tải hồ sơ.
Ngoài dữ liệu hồ sơ, một số danh mục tham chiếu của HRM được lưu trong
SQLite. Khả năng xem dữ liệu khi mất mạng được hỗ trợ đối với hồ sơ đã có
cache; ứng dụng không hỗ trợ tạo, gửi hoặc phê duyệt phiếu ngoại tuyến rồi đồng
bộ về sau. Vì vậy, cơ chế này được xác định là bộ nhớ đệm và lưu trữ cục bộ,
không phải kiến trúc offline-first.
5.2.2 Các backend hiện hữu và phạm vi mở rộng
MyHCMUT Mobile tích hợp với Auth Service, HRM Backend và iOffice
Backend. Đây là các hệ thống hiện hữu; đề tài không xây dựng lại toàn bộ kiến
trúc backend hoặc cơ sở dữ liệu nghiệp vụ của chúng. Phần phát triển phía
backend tập trung vào các API và cơ chế tích hợp cần thiết để hỗ trợ ứng dụng di
động.
Auth Service: Cung cấp chức năng đăng nhập và cấp token cho ứng dụng.
Sau khi nhận token, ứng dụng gửi yêu cầu trực tiếp đến HRM Backend hoặc
iOffice Backend tùy theo chức năng được sử dụng. Các backend tự xác thực yêu
76

cầu và kiểm tra quyền truy cập nghiệp vụ. Trong phạm vi đề tài, nhóm tích hợp
ứng dụng với dịch vụ xác thực hiện hữu, không xây dựng mới một hệ thống xác
thực độc lập.
HRMBackend:Cungcấpcácmodulenghiệpvụhồsơnhânsự,nghỉphép,đi
công tác và quy trình phê duyệt. Trong cấu trúc mã nguồn hiện hữu, middleware
được gắn khi đăng ký route để xử lý các yêu cầu dùng chung như xác thực và
phân quyền. Controller hoặc handler tiếp nhận yêu cầu và điều phối xử lý; tùy
từng module, thành phần này có thể làm việc trực tiếp với model hoặc thông qua
service/helper.
Đề tài kế thừa các nghiệp vụ, quy trình và dữ liệu HRM hiện hữu, đồng thời
bổ sung hoặc điều chỉnh một số điểm tích hợp phục vụ ứng dụng di động, bao
gồm API hồ sơ, kiểm tra điều kiện nghỉ phép, đăng ký token thiết bị, metadata
thông báo và tích hợp policy, minh chứng, phản hồi và lịch sử hồ sơ. Các phần
mở rộng này hỗ trợ ứng dụng khai thác hệ thống HRM mà không chuyển quyền
xử lý nghiệp vụ hoặc quản lý dữ liệu chính thức sang thiết bị di động.
iOffice Backend: Cung cấp các module văn bản, nhiệm vụ, lịch công tác và
điểm danh cuộc họp. Ứng dụng di động khai thác API hiện hữu của các module
này để truy xuất dữ liệu và thực hiện thao tác được phân quyền.
API chi tiết lịch trả riêng thông tin người được phân công và khách tham dự.
Ứng dụng di động chuyển phản hồi này thành các nhóm hiển thị tương ứng; cách
xử lý ở Mobile không làm thay đổi API đang phục vụ iOffice Web.
Các điều chỉnh lịch ở iOffice hỗ trợ xem trước mục Trường ở tổng hợp, gửi lời
mời sau commit và đăng ký thiết bị nhận thông báo. Với nhánh trực tiếp, lời mời
sớm phục vụ demo được gửi từ phân công đã lưu; phát hành có cơ chế gửi riêng.
HRM đồng bộ quyền theo chức vụ nhưng bảo toàn quyền được cấp thủ công; cơ
chế này không tự cấp permission lịch của iOffice.
77

Bảng 5.1: Phạm vi kế thừa và phát triển các thành phần hệ thống
| Thành phần | Phần | kế thừa |     |     | Phần | nhóm | phát | triển | hoặc tích |
| ---------- | ---- | ------- | --- | --- | ---- | ---- | ---- | ----- | --------- |
hợp
| MyHCMUT | Không | áp dụng |     |     | Phát triển  | ứng    | dụng     | Flutter, | các        |
| ------- | ----- | ------- | --- | --- | ----------- | ------ | -------- | -------- | ---------- |
| Mobile  |       |         |     |     | module      | nghiệp | vụ,      | thành    | phần       |
|         |       |         |     |     | dùng chung, |        | giao     | tiếp     | API, hồ sơ |
|         |       |         |     |     | native/phản |        | hồi/lịch | sử,      | lịch tổng  |
|         |       |         |     |     | hợp, tạo    | họp    | và xử    | lý thông | báo.       |
Auth Service Chức năng đăng nhập Tích hợp ứng dụng di động với
|     | và cấp | token |     |     | dịch vụ | xác | thực | hiện hữu. |     |
| --- | ------ | ----- | --- | --- | ------- | --- | ---- | --------- | --- |
HRM Backend Nghiệp vụ hồ sơ, nghỉ Bổ sung hoặc điều chỉnh API
|     | phép, | đi công   | tác, | quy | phục vụ   | mobile, |          | kiểm  | tra nghỉ |
| --- | ----- | --------- | ---- | --- | --------- | ------- | -------- | ----- | -------- |
|     | trình | phê duyệt | và   | dữ  | phép,     | đăng    | ký token | thiết | bị,      |
|     | liệu  | nhân sự   |      |     | metadata  | thông   | báo;     | tích  | hợp      |
|     |       |           |      |     | policy,   | minh    | chứng,   | phản  | hồi/lịch |
|     |       |           |      |     | sử và bảo | toàn    | quyền    | thủ   | công     |
|     |       |           |      |     | khi đồng  | bộ.     |          |       |          |
iOffice Backend Nghiệp vụ văn bản, Tích hợp API hiện hữu; bổ sung
|     | nhiệm | vụ,       | lịch công |     | metadata, | quyền  |      | xem lịch | chờ, lời |
| --- | ----- | --------- | --------- | --- | --------- | ------ | ---- | -------- | -------- |
|     | tác,  | điểm danh | và        | dữ  | mời sau   | commit |      | và đăng  | ký thiết |
|     | liệu  | văn phòng | số        |     | bị nhận   | thông  | báo. |          |          |
HRM/iOffice Giao diện nghiệp vụ Nguồn đối chiếu nghiệp vụ; các
| Web | và quản | trị | hiện hữu |     | thao tác | ngoài | phạm | vi     | mobile |
| --- | ------- | --- | -------- | --- | -------- | ----- | ---- | ------ | ------ |
|     |         |     |          |     | tiếp tục | thực  | hiện | tại hệ | thống  |
nguồn.
| 5.2.3 Thiết | kế chức | năng | quản | lý  | hồ sơ |     |     |     |     |
| ----------- | ------- | ---- | ---- | --- | ----- | --- | --- | --- | --- |
Các editor đảm nhiệm nhập liệu và chọn minh chứng; thành phần quản lý
trạng thái phối hợp tải dữ liệu, gửi thay đổi và phản ánh kết quả. Màn hình lịch
sử sử dụng yêu cầu, thay đổi và nhật ký do HRM cung cấp; các giá trị danh mục
được trình bày theo nhãn khi có dữ liệu tra cứu. Khả năng hiển thị một danh mục
không đồng nghĩa đã hỗ trợ editor cho toàn bộ trường của danh mục đó.
Ứng dụng gọi API policy phù hợp với quyền tự cập nhật hoặc quyền chuyên
viên, tải dữ liệu hiện tại và dựng biểu mẫu Flutter. Policy hỗ trợ xác định trường
đượcthaotácvàđiềukiệnminhchứng.Kiểmtraphíaclientgiúphướngdẫnnhập
liệu; HRM vẫn xác thực quyền, dữ liệu và chính sách tại thời điểm tiếp nhận.
78

Dữ liệu gửi chỉ chứa trường có thay đổi trong phạm vi editor. Với endpoint
yêu cầu minh chứng, ứng dụng tạo request multipart chứa thông tin thay đổi và
tệp. Các nhóm gia đình, đào tạo và kê khai có hợp đồng riêng; không áp một
payload duy nhất cho toàn bộ hồ sơ. HRM ghi nhận cập nhật trực tiếp hoặc đề
xuất theo trường; đề xuất cần thẩm định được chuyên viên xử lý theo quyền. Phản
hồi có dấu hiệu isPhanHoi=true, phục vụ tiếp nhận thông tin và không tự cập
nhật hồ sơ.
Màn hình lịch sử có hai nhóm yêu cầu và thay đổi. Chi tiết yêu cầu và log
dùng cặp dữ liệu trước/sau; ứng dụng hiển thị các trường khác nhau để nhân sự
quan sát nội dung đã chỉnh hoặc đã đề xuất. Các trường định danh và metadata
không được coi là thay đổi nghiệp vụ; nếu HRM chưa trả dữ liệu so sánh thì giao
diện không tự tái dựng lịch sử từ cache. Trạng thái yêu cầu quyết định nội dung
mới là đề xuất đang chờ hay thay đổi đã được ghi nhận.
Màn hình lịch sử đọc dữ liệu từ /api/staff/ly-lich/profile. Sau thao
tác, ứng dụng làm mới phần dữ liệu liên quan để đối chiếu trạng thái do hệ thống
nguồn trả về. Dữ liệu nhập hoặc dữ liệu cache chưa phải kết quả lưu chính thức.
Khi mất kết nối, ứng dụng báo lỗi; chưa có cơ chế ghi ngoại tuyến rồi tự đồng bộ
thay đổi hồ sơ.
5.2.4 Thiết kế chức năng tạo và đăng ký lịch họp
ScheduleCreatePage quản lý nhập liệu và lựa chọn thành phần; notifier tạo
lịch điều phối request lưu, giữ ID đã nhận, tải tệp và thử lại. Bộ chọn nhân sự tìm
theo tên nhưng gửi mã nhân sự/đơn vị từ backend, tránh coi tên hiển thị là định
danh. Lựa chọn nhánh dựa trên quyền, còn controller iOffice kiểm tra lại và xác
định người tạo từ phiên.
Đối với tạo trực tiếp Trường, notifier gọi POST /api/schedule/general-
item/general/create. Controller kiểm tra scheduleGeneral:write, lấy
ngữ cảnh người dùng từ phiên và ép cấp lịch thành TRUONG. Mục lịch, thành phần
và nhật ký được lưu trong transaction ở bước TONG_HOP của quy trình đang hoạt
động. Ràng buộc thành phần thuộc các đơn vị quy định được kiểm tra theo model
79

iOffice; danh sách hiển thị trên client không thay thế kiểm tra này.
Sau commit, controller kích hoạt gửi lời mời cho thành phần hợp lệ
đã lưu, rồi trả mục lịch cho client. Ứng dụng nhận ID và gọi upload
tại /api/schedule/general-files/general/upload bằng request riêng.
Luồng nghiệp vụ được minh họa tại Hình 4.15 ở Chương 4. Nhánh đăng ký
Trường tạo phiếu đăng ký, lưu mục/tệp và gửi phiếu; không sử dụng cùng hậu
điều kiện với tạo trực tiếp.
Ở phiên bản demo, tạo trực tiếp tại tổng hợp gửi lời mời sớm cho thành phần
đã ghi nhận. Phát hành chính thức vẫn có quy trình và cơ chế gửi thông báo riêng
ở iOffice; nhận lời mời không làm mục lịch chuyển sang đã phát hành. Việc đăng
ký thiết bị và phân phối thông báo được trình bày tại Mục 5.4.2.
Lỗi từng phần và thử lại. Transaction chỉ bao phủ request lưu mục lịch;
không bao phủ upload sau đó hoặc giao nhận push. Vì vậy, tệp lỗi có thể xảy ra
khilịchđãtồntạivàlờimờiđãgửi.NotifiergiữIDđãnhậnvàcáctệpđãtảitrong
phiên form để cập nhật cùng mục khi thử lại; chặn gửi đồng thời trong giao diện.
Cơ chế này không bảo đảm phục hồi khi đóng ứng dụng. Khi POST đã commit
nhưng phản hồi bị mất, client có thể chưa biết ID; chưa có khóa idempotency
backend bảo đảm không tạo trùng khi gửi lại.
Trạng thái và quyền xem. Trực tiếp Trường vẫn ở tổng hợp, chưa phát hành.
Mobile tải includePending=true; iOffice giới hạn lịch chờ theo người tạo,
người được mời đích danh hoặc thành viên đơn vị được mời. Mời đích danh
không mở quyền cho toàn đơn vị. Lựa chọn UI TRUONG_DIRECT không phải cấp
dữ liệu BGH; lịch hẹn BGH là nghiệp vụ khác. Phát hành chính thức không thuộc
luồng tạo trên mobile.
Như vậy, ứng dụng Flutter là thành phần phát triển chính, còn các backend
hiện hữu tiếp tục xử lý nghiệp vụ và dữ liệu. Các mở rộng phía backend đóng vai
trò tích hợp, giúp ứng dụng khai thác hiệu quả hệ thống sẵn có.
80

| 5.3 Mô | hình | dữ liệu | phục | vụ ứng | dụng |
| ------ | ---- | ------- | ---- | ------ | ---- |
Mục này trình bày các nhóm dữ liệu nghiệp vụ liên quan trực tiếp đến những
chức năng của MyHCMUT Mobile. HRM và iOffice sử dụng hai cơ sở dữ liệu
PostgreSQL riêng biệt đã tồn tại trước đề tài; nhóm không thiết kế mới toàn bộ
cơ sở dữ liệu của hai hệ thống. Các lược đồ là mô hình nghiệp vụ rút gọn; tên và
kiểu của các bảng địa chỉ/gia đình được đối chiếu với model Sequelize tại HRM
phiên bản chốt. Những lược đồ còn lại giữ vai trò mô tả quan hệ logic và chưa
thay thế việc kiểm tra schema triển khai. Cáchình chỉ giữ những thựcthể và quan
| hệ liên quan | đến các   | tính năng | trên ứng | dụng.      |     |
| ------------ | --------- | --------- | -------- | ---------- | --- |
| 5.3.1        | Tổng quan | sơ đồ     | erd      |            |     |
|              |           | Hình 5.4: | Tổng     | quan sơ đồ | ERD |
81

5.3.2 Tổng quan mô hình dữ liệu
Dữ liệu nghiệp vụ được chia thành miền HRM và miền iOffice theo hệ thống
sở hữu. Miền HRM bao gồm hồ sơ nhân sự, yêu cầu cập nhật hồ sơ, nghỉ phép,
hạn mức phép năm và đi công tác. Miền iOffice bao gồm văn bản, nhiệm vụ, báo
cáo tiến độ, lịch công tác và điểm danh cuộc họp. Ứng dụng chỉ trao đổi dữ liệu
thông qua API của backend tương ứng và không truy cập trực tiếp cơ sở dữ liệu.
Hình 5.5 kết hợp các bảng đại diện của hai miền để thể hiện phạm vi dữ liệu
phục vụ ứng dụng. Đây là lược đồ tổng quan rút gọn, không phải một cơ sở dữ
liệu hợp nhất. Giữa HRM và iOffice không có khóa ngoại chéo; lịch tổng hợp
được tạo từ các phản hồi API độc lập tại phía ứng dụng thay vì sao chép dữ liệu
nguồn sang một bảng chung.
Redis, token thiết bị và dữ liệu thông báo không thuộc lược đồ nghiệp vụ này.
Vai trò của chúng được trình bày tại Mục 5.4; bộ nhớ đệm và SQLite trên thiết bị
đã được trình bày tại Mục 5.2.1.
Hình 5.5: Lược đồ tổng quan các miền dữ liệu phục vụ MyHCMUT Mobile
5.3.3 Dữ liệu quản lý hồ sơ cá nhân
Dữ liệu hồ sơ thuộc phạm vi quản lý của HRM. Tùy theo chính sách cập nhật
của từng trường thông tin, HRM Backend có thể ghi trực tiếp một số thay đổi vào
hồ sơ chính thức hoặc tiếp nhận đề xuất cần thẩm định. Với các đề xuất này, yêu
cầu được lưu tại tcns_ly_lich_request, nội dung thay đổi theo từng trường
tại tcns_ly_lich_request_detail và tệp minh chứng tại tcns_ly_lich_-
request_file; sau khi được xử lý theo quy trình, các thay đổi được chấp thuận
mới được phản ánh vào hồ sơ chính thức. Các liên kết qua shcc, request_id và
request_detail_id là liên kết logic, chưa được khai báo thành khóa ngoại vật
lý trong schema đối chiếu. Cấu trúc các bảng của phân hệ hồ sơ cá nhân được thể
hiện trong Hình 5.6.
82

|              | Hình | 5.6: Lược | đồ dữ   | liệu rút gọn   | của phân   | hệ hồ sơ cá nhân |
| ------------ | ---- | --------- | ------- | -------------- | ---------- | ---------------- |
|              |      | Bảng 5.2: | Từ điển | dữ liệu        | phân hệ hồ | sơ nhân sự       |
| Bảng         |      | Trường    |         | Kiểu           |            | Vaitrò           |
| tcns_ly_lich |      | shcc      |         | varchar(PK,NOT |            | Mãnhânsựvàđịnh   |
|              |      |           |         | NULL)          |            | danhhồsơchính    |
thức.
|     |     | ho  |     | varchar |     | Họvàtênđệmcủa |
| --- | --- | --- | --- | ------- | --- | ------------- |
nhânsự.
|     |     | ten   |     | varchar |     | Têncủanhânsự. |
| --- | --- | ----- | --- | ------- | --- | ------------- |
|     |     | email |     | varchar |     | Emailcôngvụdo |
Nhàtrườngcấp.
|     |     | email_ca_ |     | varchar |     | Emailcánhâncủa    |
| --- | --- | --------- | --- | ------- | --- | ----------------- |
|     |     | nhan      |     |         |     | nhânsự.           |
|     |     | sdt       |     | varchar |     | Sốđiệnthoạiliênhệ |
củanhânsự.
|     |     | don_vi |     | varchar |     | Đơnvịcôngtáccủa |
| --- | --- | ------ | --- | ------- | --- | --------------- |
nhânsự.
|     |     | chuc_vu_  |     | varchar |     | Chứcvụchính     |
| --- | --- | --------- | --- | ------- | --- | --------------- |
|     |     | chinh     |     |         |     | quyềncủanhânsự. |
|     |     | chuc_danh |     | text    |     | Chứcdanhkhoahọc |
hoặcnghềnghiệp.
|     |     | hoc_ham |     | varchar |     | Họchàm(Giáosư, |
| --- | --- | ------- | --- | ------- | --- | -------------- |
Phógiáosư).
|     |     | hoc_vi |     | varchar |     | Họcvịcaonhấtcủa |
| --- | --- | ------ | --- | ------- | --- | --------------- |
nhânsự.
(xemtiếptrangsau)
83

(tiếptheotrangtrước)
| Bảng | Trường | Kiểu    | Vaitrò        |
| ---- | ------ | ------- | ------------- |
|      | ngach  | varchar | Ngạchviênchức |
hiệntại.
|     | cdnn | varchar | Chứcdanhnghề |
| --- | ---- | ------- | ------------ |
nghiệp.
|     | vtvl | varchar | Vịtríviệclàmđược |
| --- | ---- | ------- | ---------------- |
phâncông.
| tcns_ly_     | id   | integer(PK,tựtăng, | Địnhdanhyêucầu  |
| ------------ | ---- | ------------------ | --------------- |
| lich_request |      | NOTNULL)           | cậpnhậthồsơ.    |
|              | shcc | varchar            | Liênkếtlogicđến |
nhânsựgửiyêucầu.
|     | phan_loai | varchar | Phânloạinhóm |
| --- | --------- | ------- | ------------ |
thôngtincầncập
nhật.
|     | previous_ | jsonb | Dữliệuhồsơtrước   |
| --- | --------- | ----- | ----------------- |
|     | data      |       | khiđềxuấtthayđổi. |
|     | changes   | jsonb | Nộidungdữliệuđề   |
xuấtcậpnhật.
|     | trang_thai | varchar | Trạngtháithẩmđịnh |
| --- | ---------- | ------- | ----------------- |
củayêucầu.
|     | ly_do | text | Lýdođềxuấtcập |
| --- | ----- | ---- | ------------- |
nhậthồsơ.
|          | ly_do_tu_ | text               | Phảnhồilýdokhitừ |
| -------- | --------- | ------------------ | ---------------- |
|          | choi      |                    | chốiyêucầu.      |
| tcns_ly_ | id        | integer(PK,tựtăng, | Địnhdanhchitiết  |
| lich_    |           | NOTNULL)           | yêucầu.          |
request_
detail
|     | request_id | integer | Liênkếtlogicđến |
| --- | ---------- | ------- | --------------- |
yêucầucậpnhật.
|     | action | varchar | Thaotácthựchiện |
| --- | ------ | ------- | --------------- |
(thêm,sửa,xóa).
|     | field | text | Têntrườngdữliệu |
| --- | ----- | ---- | --------------- |
đềxuấtthayđổi.
|     | previous_ | jsonb | Giátrịdữliệucũ     |
| --- | --------- | ----- | ------------------ |
|     | data      |       | trướckhiđiềuchỉnh. |
|     | changes   | jsonb | Giátrịdữliệumới    |
đượcđềxuất.
|     | trang_thai | varchar | Kếtquảthẩmđịnh |
| --- | ---------- | ------- | -------------- |
chitiếttừngmục.
|     | reviewed_at | bigint | Thờiđiểmthẩmđịnh |
| --- | ----------- | ------ | ---------------- |
(timestamp).
(xemtiếptrangsau)
84

(tiếptheotrangtrước)
| Bảng |     | Trường      |     |     | Kiểu    |     |     | Vaitrò       |
| ---- | --- | ----------- | --- | --- | ------- | --- | --- | ------------ |
|      |     | reviewed_by |     |     | varchar |     |     | Mãnhânsựthực |
hiệnthẩmđịnh.
| tcns_ly_ |     | file_id |     |     | uuid(PK,NOTNULL) |     |     | Địnhdanhtệpminh |
| -------- | --- | ------- | --- | --- | ---------------- | --- | --- | --------------- |
| lich_    |     |         |     |     |                  |     |     | chứng.          |
request_file
|     |     | request_  |     |     | integer |     |     | Liênkếtlogicđến |
| --- | --- | --------- | --- | --- | ------- | --- | --- | --------------- |
|     |     | detail_id |     |     |         |     |     | chitiếtyêucầu.  |
|     |     | file_path |     |     | text    |     |     | Đườngdẫnlưutrữ  |
tệptrênhệthống.
|     |     | file_name |     |     | text |     |     | Tênhiểnthịgốccủa |
| --- | --- | --------- | --- | --- | ---- | --- | --- | ---------------- |
tệpminhchứng.
| 5.3.3.1 | Bảng | thông     | tin lý | lịch    | địa chỉ |              |     |     |
| ------- | ---- | --------- | ------ | ------- | ------- | ------------ | --- | --- |
|         |      |           | Bảng   | 5.3: Từ | điển    | rút gọn bảng | địa | chỉ |
| Trường  |      | Kiểutrong |        |         | Vaitrò  |              |     |     |
model
| id           |     | integer,PK   |     |     | Địnhdanhđịachỉ.                     |     |     |     |
| ------------ | --- | ------------ | --- | --- | ----------------------------------- | --- | --- | --- |
| shcc         |     | varchar(20)  |     |     | Mãnhânsự;liênkếtlogictớihồsơ.       |     |     |     |
| so_nha       |     | varchar(200) |     |     | Sốnhà.                              |     |     |     |
| xa_phuong    |     | varchar(10)  |     |     | Mãxã/phường.                        |     |     |     |
| loai_dia_chi |     | varchar(20)  |     |     | Loạiđịachỉ.                         |     |     |     |
| quoc_gia     |     | varchar(5)   |     |     | Mãquốcgia.                          |     |     |     |
| tinh_thanh   |     | varchar(5)   |     |     | Mãtỉnh/thành.                       |     |     |     |
| quan_huyen   |     | varchar(10)  |     |     | Mãquận/huyệntrongcấutrúcđịachỉtương |     |     |     |
ứng.
Bảng nguồn: staff_ly_lich_dia_chi. Kiểu dữ liệu được đối chiếu model
Sequelize; bảng này chỉ liệt kê các trường liên quan, không khẳng định là toàn
| bộ schema | CSDL | triển     | khai.  |      |          |              |     |      |
| --------- | ---- | --------- | ------ | ---- | -------- | ------------ | --- | ---- |
| 5.3.3.2   | Bảng | thông     | tin lý | lịch | gia đình |              |     |      |
|           |      | Bảng      | 5.4:   | Từ   | điển     | rút gọn bảng | gia | đình |
| Trường    |      | Kiểutrong |        |      | Vaitrò   |              |     |      |
model
| id  |     | integer,PK |     |     | Địnhdanhquanhệgiađình. |     |     |     |
| --- | --- | ---------- | --- | --- | ---------------------- | --- | --- | --- |
85

| Trường | Kiểutrong |     | Vaitrò |
| ------ | --------- | --- | ------ |
model
| shcc         | varchar(20)   |     | Mãnhânsự;liênkếtlogictớihồsơ. |
| ------------ | ------------- | --- | ----------------------------- |
| moi_quan_he  | varchar(5)    |     | Mãquanhệ.                     |
| don_vi_cong_ | varchar(1000) |     | Đơnvịcôngtáccủangườithân.     |
tac
| nghe_nghiep | varchar(1000) |     | Nghềnghiệp.                     |
| ----------- | ------------- | --- | ------------------------------- |
| ho_ten      | varchar(200)  |     | Họtênngườithân.                 |
| gioi_tinh   | varchar(10)   |     | Giátrịgiớitínhtheodanhmụcnguồn. |
| ngay_sinh   | bigint        |     | Mốcngàysinhtheohợpđồngbackend.  |
|             | text          |     | Thôngtinbổsung.                 |
thong_tin_
khac
| nhom_quan_he | varchar(50) |     | Nhómquanhệ.             |
| ------------ | ----------- | --- | ----------------------- |
| que_quan_moi | jsonb       |     | Dữliệuquêquáncócấutrúc. |
| noi_o_hien_  | jsonb       |     | Dữliệunơiởcócấutrúc.    |
tai_moi
Bảngnguồn:staff_ly_lich_gia_dinh.Kiểudữliệuđượcđốichiếumodel
Sequelize; bảng này chỉ liệt kê các trường liên quan, không khẳng định là toàn
| bộ schema | CSDL triển | khai. |     |
| --------- | ---------- | ----- | --- |
Từ điển địa chỉ và gia đình được đối chiếu riêng theo model nguồn; hình
lược đồ cũ không được dùng làm schema vật lý cho hai bảng này. Hai bảng trên
dùng tên vật lý staff_ly_lich_dia_chi và staff_ly_lich_gia_dinh theo
model HRM hiện hành; các trường được trình bày rút gọn. SHCC liên kết logic
tới nhân sự, không suy ra FK vật lý khi model chưa khai báo. Các hình tổng quan
còn dùng tên nhóm nghiệp vụ TCNS được hiểu là mô hình logic, không phải
| danh mục | tên bảng triển | khai. |     |
| -------- | -------------- | ----- | --- |
86

| 5.3.3.3 Bảng | thông | tin quá   | trình công | tác           |          |
| ------------ | ----- | --------- | ---------- | ------------- | -------- |
|              | Hình  | 5.7: Bảng | thông      | tin quá trình | công tác |
| 5.3.3.4 Bảng | thông | tin đào   | tạo        |               |          |
|              |       | Hình 5.8: | Bảng       | thông tin đào | tạo      |
87

| 5.3.3.5 Bảng | thông |      | tin khen | thưởng |       | và kỷ luật    |        |
| ------------ | ----- | ---- | -------- | ------ | ----- | ------------- | ------ |
|              |       | Hình | 5.9:     | Bảng   | thông | tin khen      | thưởng |
|              |       |      | Hình     | 5.10:  | Bảng  | thông tin kỷ  | luật   |
| 5.3.3.6 Bảng | thông |      | tin quá  | trình  | lương | và phụ cấp    |        |
|              |       | Hình | 5.11:    | Bảng   | thông | tin quá trình | lương  |
88

|          |      | Hình   | 5.12: | Bảng  | thông | tin   | phụ cấp |     |
| -------- | ---- | ------ | ----- | ----- | ----- | ----- | ------- | --- |
| 5.3.4 Dữ | liệu | về các | quy   | trình | phê   | duyệt | đơn     |     |
Dữ liệu về các loại quy trình phê duyệt được định danh trong bảng fw_-
quy_trinh. Các bước phê duyệt tương ứng với loại quy trình được lưu trong
fw_quy_trinh_step. Đơn vị, vai trò của những người có quyền xử lý cũng
như bước thực hiện tiếp theo tương ứng với các thao tác xử lý được lưu trong
| fw_quy_trinh_target. |     |     | được | thể | hiện trong | Hình | 5.13. |     |
| -------------------- | --- | --- | ---- | --- | ---------- | ---- | ----- | --- |
Hình
|              | 5.13:  | Lược | đồ  | dữ               | liệu các | loại      | quy trình | phê duyệt         |
| ------------ | ------ | ---- | --- | ---------------- | -------- | --------- | --------- | ----------------- |
|              | Bảng   | 5.5: | Từ  | điển             | dữ liệu  | quy trình | phê       | duyệt             |
| Bảng         | Trường |      |     | Kiểu             |          |           |           | Vaitrò            |
| fw_quy_trinh | ma     |      |     | text(PK,NOTNULL) |          |           |           | Địnhdanhquytrình. |
(xemtiếptrangsau)
89

(tiếptheotrangtrước)
| Bảng       | Trường       | Kiểu              | Vaitrò          |
| ---------- | ------------ | ----------------- | --------------- |
|            | ten          | text              | Tênquytrình.    |
| fw_quy_    | ma           | text(PK)          | Địnhdanhbướcquy |
| trinh_buoc |              |                   | trình.          |
|            | ma_quy_trinh | text(FKvớimatrong | Liênkếtlogicđến |
|            |              | fw_quy_trinh)     | quytrình.       |
|            | is_primary   | boolean           | Xácđịnhbướccó   |
phảilàbướcchính
haykhông.
|     | is_initial | boolean | Xácđịnhbướccó |
| --- | ---------- | ------- | ------------- |
phảilàbướcđầutiên
trong1quytrìnhhay
không.
|     | is_end | boolean | Xácđịnhbướccó |
| --- | ------ | ------- | ------------- |
phảilàbướckếtthúc
trong1quytrìnhhay
không.
|     | ten | text | Tênbướctrongquy |
| --- | --- | ---- | --------------- |
trình.
|     | trang_thai | text | Trạngtháicủabước |
| --- | ---------- | ---- | ---------------- |
quytrình.
|     | step_no | integer | Sốthứtựcủabước |
| --- | ------- | ------- | -------------- |
trongquytrình.
| fw_quy_      | id           | integer(PK,tựtăng, | Địnhdanhmụctiêu |
| ------------ | ------------ | ------------------ | --------------- |
| trinh_target |              | NOTNULL)           | trongquytrình.  |
|              | quy_trinh_   | text(FKvớimatrong  | Mãbướcquytrình. |
|              | buoc         | fw_quy_trinh_buoc) |                 |
|              | ma_quy_trinh | text(FKvớimatrong  | Mãquytrình.     |
fw_quy_trinh)
|     | role | jsonb | Danhsáchvaitròcó |
| --- | ---- | ----- | ---------------- |
quyềnxửlý.
|     | ma_don_vi | jsonb | Danhsáchđơnvịcó |
| --- | --------- | ----- | --------------- |
quyềnxửlý.
|     | trang_thai | text | Mãthaotácxửlý. |
| --- | ---------- | ---- | -------------- |
|     | forward_to | text | Khóangoạiđến   |
bướctiếptheotrong
quytrình.
|     | is_create_ | boolean | Xácđịnhcóphảilà |
| --- | ---------- | ------- | --------------- |
|     | user       |         | ngườitạođơnxửlý |
bướcnàyhaykhông.
90

| 5.3.5 | Dữ liệu | quản lý nghỉ | phép |     |     |
| ----- | ------- | ------------ | ---- | --- | --- |
Dữliệunghỉphépđượctổchứcquanhbảngtcns_nghi_phep_dang_ky.Các
bảng lịch cá nhân, quy trình, người xử lý và lịch sử phản ánh những phần khác
nhau của vòng đời phiếu. Bảng tcns_so_nghi_phep_nam lưu hạn mức theo
khóa chính phức hợp (nam, shcc), đúng thứ tự cột trong schema. Các trường
phieu_id và shcc liên kết dữ liệu bằng logic backend, không phải FK vật lý.
Mô hình các bảng và mối liên kết của phân hệ nghỉ phép được thể hiện trong
Hình 5.14.
|     | Hình 5.14: | Lược đồ | dữ liệu rút gọn | của phân | hệ nghỉ phép |
| --- | ---------- | ------- | --------------- | -------- | ------------ |
91

|              | Bảng 5.6: | Từ điển            | dữ liệu phân | hệ nghỉ | phép           |
| ------------ | --------- | ------------------ | ------------ | ------- | -------------- |
| Bảng         | Trường    | Kiểu               |              |         | Vaitrò         |
| tcns_nghi_   | id        | integer(PK,tựtăng, |              |         | Địnhdanhphiếu  |
| phep_dang_ky |           | NOTNULL)           |              |         | nghỉphép.      |
|              | shcc      | text(PK,NOTNULL)   |              |         | Mãsốnhânsựđăng |
kýnghỉphép.
|     | ma_don_vi | text |     |     | Đơnvịcôngtáccủa |
| --- | --------- | ---- | --- | --- | --------------- |
nhânsự.
|     | ngay_bat_dau | bigint |     |     | Thờiđiểmbắtđầu |
| --- | ------------ | ------ | --- | --- | -------------- |
nghỉ(timestamp).
|     | ngay_ket_ | bigint |     |     | Thờiđiểmkếtthúc  |
| --- | --------- | ------ | --- | --- | ---------------- |
|     | thuc      |        |     |     | nghỉ(timestamp). |
|     | period    | text   |     |     | Buổibắtđầunghỉ   |
(sáng,chiềuhoặccả
ngày).
|     | period_ket_ | text    |     |     | Buổikếtthúcnghỉ  |
| --- | ----------- | ------- | --- | --- | ---------------- |
|     | thuc        |         |     |     | phép.            |
|     | so_ngay_    | numeric |     |     | Tổngsốngàythựctế |
|     | thuc_nghi   |         |     |     | xinnghỉ.         |
|     | hinh_thuc   | text    |     |     | Hìnhthứcnghỉ     |
(phépnăm,việc
riêng,...).
|     | ly_do | text |     |     | Lýdoxinnghỉphép |
| --- | ----- | ---- | --- | --- | --------------- |
củanhânsự.
|     | files | jsonb |     |     | Danhsáchtệpminh |
| --- | ----- | ----- | --- | --- | --------------- |
chứngđínhkèm.
|     | ma_quy_trinh | text |     |     | Mãquytrìnhphê |
| --- | ------------ | ---- | --- | --- | ------------- |
duyệtápdụng.
|     | trang_thai | text |     |     | Trạngtháixửlýhiện |
| --- | ---------- | ---- | --- | --- | ----------------- |
tạicủaphiếu.
| tcns_lich_ | id       | integer(PK,tựtăng, |     |     | Địnhdanhbảnghi  |
| ---------- | -------- | ------------------ | --- | --- | --------------- |
| ca_nhan    |          | NOTNULL)           |     |     | lịchcánhân.     |
|            | phieu_id | integer            |     |     | Liênkếtlogicđến |
phiếunghỉphép.
|     | ngay_bat_dau | bigint |     |     | Thờiđiểmbắtđầu |
| --- | ------------ | ------ | --- | --- | -------------- |
hiểnthịtrênlịch.
|     | ngay_ket_ | bigint |     |     | Thờiđiểmkếtthúc |
| --- | --------- | ------ | --- | --- | --------------- |
|     | thuc      |        |     |     | trênlịch.       |
|     | period    | text   |     |     | Buổibắtđầutrên  |
lịchcánhân.
|     | period_ket_ | text |     |     | Buổikếtthúctrên |
| --- | ----------- | ---- | --- | --- | --------------- |
|     | thuc        |      |     |     | lịchcánhân.     |
(xemtiếptrangsau)
92

(tiếptheotrangtrước)
| Bảng      | Trường   | Kiểu               | Vaitrò          |
| --------- | -------- | ------------------ | --------------- |
| tcns_quy_ | id       | integer(PK,tựtăng, | Địnhdanhbướcquy |
| trinh     |          | NOTNULL)           | trìnhphêduyệt.  |
|           | phieu_id | integer            | Liênkếtlogicđến |
phiếunghỉphép.
|     | ma  | text | Mãđịnhdanhcủa |
| --- | --- | ---- | ------------- |
bướcphêduyệt.
|     | step_no | integer | Thứtựthựchiện |
| --- | ------- | ------- | ------------- |
củabướctrongquy
trình.
|     | trang_thai | text | Trạngtháixửlýcủa |
| --- | ---------- | ---- | ---------------- |
bướcquytrình.
|     | is_initial | boolean | Cờxácđịnhbước |
| --- | ---------- | ------- | ------------- |
khởitạođầutiên.
|     | is_end | boolean | Cờxácđịnhbước |
| --- | ------ | ------- | ------------- |
kếtthúcquytrình.
|     | targets | jsonb | Cấuhìnhđốitượng |
| --- | ------- | ----- | --------------- |
thẩmquyềnxửlý.
|            | parallel_ | jsonb              | Cấuhìnhnhánhxử  |
| ---------- | --------- | ------------------ | --------------- |
|            | group     |                    | lýsongsong.     |
| tcns_quy_  | id        | integer(PK,tựtăng, | Địnhdanhphân    |
| trinh_user |           | NOTNULL)           | côngxửlý.       |
|            | phieu_id  | integer            | Liênkếtlogicđến |
phiếunghỉphép.
|     | shcc | jsonb | Danhsáchnhânsự |
| --- | ---- | ----- | -------------- |
đượcphâncôngxử
lý.
|     | ma_quy_trinh | text | Mãbướcquytrình |
| --- | ------------ | ---- | -------------- |
đượcphâncông.
|     | trang_thai | text | Trạngtháixửlýcủa |
| --- | ---------- | ---- | ---------------- |
nhânsựđượcphân
công.
|     | forward_to | text | Thôngtinngười |
| --- | ---------- | ---- | ------------- |
hoặcbướcđược
chuyểntiếp.
| tcns_quy_ | id  | integer(PK,tựtăng, | Địnhdanhlịchsửxử |
| --------- | --- | ------------------ | ---------------- |
| trinh_    |     | NOTNULL)           | lý(audittrail).  |
history
|     | phieu_id | integer | Liênkếtlogicđến |
| --- | -------- | ------- | --------------- |
phiếunghỉphép.
|     | ma_quy_trinh | text | Bướcquytrìnhtại |
| --- | ------------ | ---- | --------------- |
thờiđiểmxửlý.
(xemtiếptrangsau)
93

(tiếptheotrangtrước)
| Bảng | Trường |     | Kiểu | Vaitrò       |
| ---- | ------ | --- | ---- | ------------ |
|      | shcc   |     | text | Mãnhânsựthực |
hiệnthaotác.
|     | trang_thai |     | text | Trạngtháighinhận |
| --- | ---------- | --- | ---- | ---------------- |
tạithờiđiểmxửlý.
|     | thoi_gian |     | bigint | Thờiđiểmthực |
| --- | --------- | --- | ------ | ------------ |
hiệnthaotác
(timestamp).
|     | data |     | jsonb | Dữliệuvếtvànội |
| --- | ---- | --- | ----- | -------------- |
dungghinhậnthao
tác.
| tcns_so_   | nam |     | numeric(PK,NOT | Nămquảnlýhạn |
| ---------- | --- | --- | -------------- | ------------ |
| nghi_phep_ |     |     | NULL)          | mứcnghỉphép. |
nam
|     | shcc |     | text(PK,NOTNULL) | Mãnhânsựđược |
| --- | ---- | --- | ---------------- | ------------ |
quảnlýhạnmức
phép.
|     | tong_so_ngay |     | numeric | Tổngsốngàyphép |
| --- | ------------ | --- | ------- | -------------- |
đượcnghỉtrong
năm.
| 5.3.6 Dữ | liệu quản | lý công | tác |     |
| -------- | --------- | ------- | --- | --- |
Dữliệucôngtácđượctổchứcquanhphiếuđăngký,danhsáchngườithamgia,
kế hoạch và quá trình công tác sau phê duyệt. Các bảng liên kết với phiếu bằng
dang_ky_id thông qua logic HRM Backend. Trường id của bảng kế hoạch được
sinh tự động và không rỗng nhưng schema đối chiếu chưa khai báo là khóa chính
vật lý. Cấu trúc dữ liệu của phân hệ công tác được minh họa trong Hình 5.15.
94

|             | Hình 5.15: | Lược đồ | dữ liệu rút gọn    | của phân     | hệ công tác    |
| ----------- | ---------- | ------- | ------------------ | ------------ | -------------- |
|             | Bảng       | 5.7: Từ | điển dữ liệu       | phân hệ công | tác            |
| Bảng        | Trường     |         | Kiểu               |              | Vaitrò         |
| tcns_dang_  | id         |         | integer(PK,tựtăng, |              | Địnhdanhphiếu  |
| ky_cong_tac |            |         | NOTNULL)           |              | đăngkýcôngtác. |
|             | shcc       |         | text               |              | Mãnhânsựđăngký |
chuyếncôngtác.
|     | don_vi |     | text |     | Đơnvịcôngtáccủa |
| --- | ------ | --- | ---- | --- | --------------- |
nhânsựđăngký.
|     | ngay_bat_dau |     | numeric |     | Ngàybắtđầuchuyến |
| --- | ------------ | --- | ------- | --- | ---------------- |
côngtác.
|     | ngay_ket_ |     | numeric |     | Ngàykếtthúc    |
| --- | --------- | --- | ------- | --- | -------------- |
|     | thuc      |     |         |     | chuyếncôngtác. |
|     | dia_diem  |     | text    |     | Địađiểmđếncông |
tác.
|     |     |     | jsonb |     | Thôngtinquốc |
| --- | --- | --- | ----- | --- | ------------ |
quoc_gia
gia(côngtácnước
ngoài).
|     | noi_dung |     | text |     | Nộidungchitiếtcủa |
| --- | -------- | --- | ---- | --- | ----------------- |
chuyếncôngtác.
|     | muc_tieu |     | text |     | Mụctiêuđạtđược |
| --- | -------- | --- | ---- | --- | -------------- |
củachuyếnđi.
|     | nguon_kinh_ |     | text |     | Nguồnkinhphíchi |
| --- | ----------- | --- | ---- | --- | --------------- |
|     | phi         |     |      |     | trảchochuyếnđi. |
(xemtiếptrangsau)
95

(tiếptheotrangtrước)
| Bảng | Trường | Kiểu  | Vaitrò           |
| ---- | ------ | ----- | ---------------- |
|      | files  | jsonb | Danhsáchtệpquyết |
địnhhoặcminh
chứng.
|     | ma_quy_trinh | text | Mãquytrìnhphê |
| --- | ------------ | ---- | ------------- |
duyệtcôngtác.
|     | trang_thai | text | Trạngtháiphêduyệt |
| --- | ---------- | ---- | ----------------- |
hiệntạicủaphiếu.
| tcns_dang_   | id  | integer(PK,tựtăng, | Địnhdanhthành    |
| ------------ | --- | ------------------ | ---------------- |
| ky_cong_tac_ |     | NOTNULL)           | viênthamgiađoàn. |
tham_gia
|     | dang_ky_id | numeric | Liênkếtlogicđến |
| --- | ---------- | ------- | --------------- |
phiếuđăngkýcông
tác.
|     | shcc | text | Mãsốcủanhânsự |
| --- | ---- | ---- | ------------- |
thamgiađoàn.
|     | don_vi | text | Đơnvịcôngtáccủa |
| --- | ------ | ---- | --------------- |
nhânsựthamgia.
|     | chuc_vu | text | Chứcvụcủanhânsự |
| --- | ------- | ---- | --------------- |
thamgia.
|     | is_truong_   | boolean | Cờxácđịnhnhânsự  |
| --- | ------------ | ------- | ---------------- |
|     | doan         |         | làtrưởngđoàn.    |
|     | is_dang_vien | boolean | ThôngtinĐảngviên |
phụcvụđốingoại.
| tcns_dang_   | id  | integer(Tựtăng,NOT | Địnhdanhkỹthuật; |
| ------------ | --- | ------------------ | ---------------- |
| ky_cong_tac_ |     | NULL)              | chưacóPKvậtlý.   |
ke_hoach
|     | dang_ky_id | integer | Liênkếtlogicđến |
| --- | ---------- | ------- | --------------- |
phiếuđăngkýcông
tác.
|     | stt | integer | Thứtựmốchoạt |
| --- | --- | ------- | ------------ |
độngtrongkếhoạch.
|     | noi_dung | text | Nộidunghoạtđộng |
| --- | -------- | ---- | --------------- |
tạimốckếhoạch.
|     | ngay_bat_dau | bigint | Thờiđiểmbắt |
| --- | ------------ | ------ | ----------- |
đầuhoạtđộng
(timestamp).
|     | ngay_ket_ | bigint | Thờiđiểmkết  |
| --- | --------- | ------ | ------------ |
|     | thuc      |        | thúchoạtđộng |
(timestamp).
|     | dia_diem | text | Địađiểmcụthểcủa |
| --- | -------- | ---- | --------------- |
hoạtđộngkếhoạch.
(xemtiếptrangsau)
96

(tiếptheotrangtrước)
| Bảng      |     | Trường |     | Kiểu               |     | Vaitrò           |     |
| --------- | --- | ------ | --- | ------------------ | --- | ---------------- | --- |
| tcns_qua_ |     | id     |     | integer(PK,tựtăng, |     | Địnhdanhbảnghi   |     |
| trinh_di_ |     |        |     | NOTNULL)           |     | quátrìnhcôngtác. |     |
cong_tac
|     |     | dang_ky_id |     | numeric |     | Liênkếtlogicđến |     |
| --- | --- | ---------- | --- | ------- | --- | --------------- | --- |
phiếuđăngkýcông
tác.
|     |     | shcc |     | text |     | Mãnhânsựthực |     |
| --- | --- | ---- | --- | ---- | --- | ------------ | --- |
hiệncôngtác.
|     |     | ngay_bat_dau |     | numeric |     | Ngàybắtđầutheokế |     |
| --- | --- | ------------ | --- | ------- | --- | ---------------- | --- |
hoạch.
|     |     | ngay_ket_ |     | numeric |     | Ngàykếtthúctheo  |     |
| --- | --- | --------- | --- | ------- | --- | ---------------- | --- |
|     |     | thuc      |     |         |     | kếhoạch.         |     |
|     |     | ngay_ve_  |     | bigint  |     | Thờiđiểmtrởvề    |     |
|     |     | thuc_te   |     |         |     | thựctếcủanhânsự. |     |
|     |     | noi_dung  |     | text    |     | Nộidungcôngviệc  |     |
đãthựchiện.
|       |         | ket_qua_ |       | text      |            | Kếtquảvàbáocáo    |     |
| ----- | ------- | -------- | ----- | --------- | ---------- | ----------------- | --- |
|       |         | cong_tac |       |           |            | sauchuyếncôngtác. |     |
| 5.3.7 | Dữ liệu | văn      | phòng | số, nhiệm | vụ và lịch | công              | tác |
Dữ liệu iOffice được chia thành ba nhóm để làm rõ những quan hệ mà ứng
dụng cần dùng khi hiển thị văn bản, nhiệm vụ và điểm danh. Trong toàn bộ nhóm
bảng được đối chiếu, chỉ hai quan hệ từ mission_report_batch.mission_id
và mission_report.mission_id đến mission_general.id là khóa ngoại
| vật lý. Các | đường   | màu | cam còn | lại thể hiện liên | kết logic. |     |     |
| ----------- | ------- | --- | ------- | ----------------- | ---------- | --- | --- |
| 5.3.7.1     | Dữ liệu | văn | bản     |                   |            |     |     |
Hai bảng văn bản lưu dữ liệu văn bản đến và văn bản đi; bảng phân phối lưu
người hoặc đơn vị nhận xử lý. eoffice_distribution.distributed_id là
liên kết đa hìnhđược diễn giảitheo distributed_type, nênkhông thể khaibáo
thành một FK đơn đến một bảng văn bản cụ thể. Cấu trúc các bảng của nhóm
| văn bản | được thể | hiện | trong Hình | 5.16. |     |     |     |
| ------- | -------- | ---- | ---------- | ----- | --- | --- | --- |
97

|              | Hình | 5.16: Lược | đồ dữ   | liệu rút gọn       | của nhóm | văn bản iOffice |
| ------------ | ---- | ---------- | ------- | ------------------ | -------- | --------------- |
|              |      | Bảng 5.8:  | Từ điển | dữ liệu            | nhóm văn | bản iOffice     |
| Bảng         |      | Trường     |         | Kiểu               |          | Vaitrò          |
| eoffice_van_ |      | id         |         | integer(PK,tựtăng, |          | Địnhdanhvănbản  |
| ban_den      |      |            |         | NOTNULL)           |          | đến.            |
|              |      | so_van_ban |         | varchar            |          | Sốhiệupháthành  |
củavănbảnđến.
|     |     | noi_dung |     | text |     | Nộidungtríchyếu, |
| --- | --- | -------- | --- | ---- | --- | ---------------- |
tómtắtcủavănbản.
|     |     | ngay_van_ban |     | bigint |     | Ngàybanhànhvăn |
| --- | --- | ------------ | --- | ------ | --- | -------------- |
bản(timestamp).
|     |     | ngay_nhan |     | bigint |     | Ngàycơquan |
| --- | --- | --------- | --- | ------ | --- | ---------- |
tiếpnhậnvănbản
(timestamp).
|     |     | han_hoan_ |     | bigint |     | Hạnhoànthành |
| --- | --- | --------- | --- | ------ | --- | ------------ |
|     |     | thanh     |     |        |     | xửlývănbản   |
(timestamp).
|     |     | trang_thai |     | varchar |     | Trạngtháixửlývăn |
| --- | --- | ---------- | --- | ------- | --- | ---------------- |
bảnhiệntại.
(xemtiếptrangsau)
98

(tiếptheotrangtrước)
| Bảng | Trường     |     | Kiểu    | Vaitrò          |
| ---- | ---------- | --- | ------- | --------------- |
|      | mission_id |     | integer | Liênkếtlogicđến |
nhiệmvụphátsinh
từvănbản.
|     | created_at |     | bigint(NOTNULL) | Thờiđiểmtạobản |
| --- | ---------- | --- | --------------- | -------------- |
ghivănbản.
| eoffice_van_ | id      |     | integer(PK,tựtăng, | Địnhdanhvănbản |
| ------------ | ------- | --- | ------------------ | -------------- |
| ban_di       |         |     | NOTNULL)           | đi.            |
|              | ky_hieu |     | varchar            | Kýhiệuphânloại |
củavănbảnđi.
|     | so  |     | varchar | Sốhiệucấpchovăn |
| --- | --- | --- | ------- | --------------- |
bảnđi.
|     | trich_yeu |     | varchar | Tríchyếunộidung |
| --- | --------- | --- | ------- | --------------- |
vănbảnpháthành.
|     | trang_thai |     | varchar | Trạngtháiphêduyệt |
| --- | ---------- | --- | ------- | ----------------- |
củavănbảnđi.
| eoffice_     | id           |     | integer(PK,tựtăng, | Địnhdanhbảnghi  |
| ------------ | ------------ | --- | ------------------ | --------------- |
| distribution |              |     | NOTNULL)           | phânphốivănbản. |
|              | distributed_ |     | integer            | Khóađahìnhtham  |
|              | id           |     |                    | chiếuđếnvănbản  |
liênquan.
|     | distributed_ |     | varchar | Loạiđốitượngphân |
| --- | ------------ | --- | ------- | ---------------- |
|     | type         |     |         | phối(vănbảnđến,  |
đi).
|     | shcc |     | varchar | Mãnhânsựđượcchỉ |
| --- | ---- | --- | ------- | --------------- |
địnhnhậnxửlý.
|     | ma_don_vi |     | varchar | Mãđơnvịđượcchỉ |
| --- | --------- | --- | ------- | -------------- |
địnhxửlývănbản.
|     | status |     | varchar | Trạngtháitiếpnhận |
| --- | ------ | --- | ------- | ----------------- |
vàxửlýphânphối.
| 5.3.7.2 | Dữ liệu nhiệm | vụ  |     |     |
| ------- | ------------- | --- | --- | --- |
Nhiệm vụ tổng quát được tách thành các đầu việc, thành viên và các đợt
báo cáo tiến độ. mission_outlined.parent_id tạo cấu trúc cây bằng liên kết
logic đệ quy. Hai FK vật lý đến mission_general được giữ nguyên trong sơ đồ;
các liên kết nhiệm vụ còn lại do iOffice Backend duy trì. Cấu trúc các bảng của
| nhóm nhiệm | vụ được | thể hiện | trong Hình 5.17. |     |
| ---------- | ------- | -------- | ---------------- | --- |
99

|          | Hình | 5.17: Lược | đồ dữ   | liệu rút gọn       | của nhóm   | nhiệm           | vụ iOffice |
| -------- | ---- | ---------- | ------- | ------------------ | ---------- | --------------- | ---------- |
|          |      | Bảng 5.9:  | Từ điển | dữ liệu            | nhóm nhiệm | vụ iOffice      |            |
| Bảng     |      | Trường     |         | Kiểu               |            | Vaitrò          |            |
| mission_ |      | id         |         | integer(PK,tựtăng, |            | Địnhdanhnhiệmvụ |            |
| general  |      |            |         | NOTNULL)           |            | tổngquát.       |            |
|          |      | title      |         | text               |            | Tiêuđềtêngọicủa |            |
nhiệmvụ.
|     |     | start_date |     | bigint |     | Thờiđiểmbắt |     |
| --- | --- | ---------- | --- | ------ | --- | ----------- | --- |
đầuthựchiện
(timestamp).
|     |     | end_date |     | bigint |     | Hạnchóthoàn |     |
| --- | --- | -------- | --- | ------ | --- | ----------- | --- |
thànhnhiệmvụ
(timestamp).
|     |     | status |     | varchar |     | Trạngtháitiếnđộ |     |
| --- | --- | ------ | --- | ------- | --- | --------------- | --- |
thựchiệnnhiệmvụ.
(xemtiếptrangsau)
100

(tiếptheotrangtrước)
| Bảng | Trường   | Kiểu    | Vaitrò       |
| ---- | -------- | ------- | ------------ |
|      | progress | integer | Tỷlệphầntrăm |
hoànthành(0−
100%).
| mission_ | id         | integer(PK,NOT | Địnhdanhđầuviệc |
| -------- | ---------- | -------------- | --------------- |
| outlined |            | NULL)          | trongnhiệmvụ.   |
|          | mission_id | integer        | Liênkếtlogicđến |
nhiệmvụtổngquát.
|     | parent_id | integer | Liênkếtlogicđệ |
| --- | --------- | ------- | -------------- |
quyđếnđầuviệc
cha.
|     | ten | varchar | Têngọicụthểcủa |
| --- | --- | ------- | -------------- |
đầuviệc.
|     | status | varchar | Trạngtháithựchiện |
| --- | ------ | ------- | ----------------- |
củađầuviệc.
| mission_ | id  | integer(PK,tựtăng, | Địnhdanhthành    |
| -------- | --- | ------------------ | ---------------- |
| member   |     | NOTNULL)           | viênthamgianhiệm |
vụ.
|     | mission_id | integer | Liênkếtlogicđến |
| --- | ---------- | ------- | --------------- |
nhiệmvụtổngquát.
|     | shcc | varchar | Mãsốnhânsựtham |
| --- | ---- | ------- | -------------- |
giathựchiện.
|     | is_manage | boolean | Cờxácđịnhvaitrò |
| --- | --------- | ------- | --------------- |
quảnlýđầuviệc.
| mission_     | id         | integer(PK,tựtăng,  | Địnhdanhđợtbáo |
| ------------ | ---------- | ------------------- | -------------- |
| report_batch |            | NOTNULL)            | cáotiếnđộ.     |
|              | mission_id | integer(FKđến       | Nhiệmvụđượcyêu |
|              |            | mission_general.id) | cầubáocáo.     |
|              | title      | text                | Tiêuđềhoặcnội  |
dungyêucầubáo
cáo.
|     | due_date | bigint | Hạnchótnộpbáo |
| --- | -------- | ------ | ------------- |
cáo(timestamp).
|     | status | varchar | Trạngtháitiếpnhận |
| --- | ------ | ------- | ----------------- |
củađợtbáocáo.
| mission_ | id         | integer(PK,tựtăng,  | Địnhdanhbảnghi |
| -------- | ---------- | ------------------- | -------------- |
| report   |            | NOTNULL)            | báocáotiếnđộ.  |
|          | mission_id | integer(FKđến       | Khóangoạiđến   |
|          |            | mission_general.id) | nhiệmvụđượcbáo |
cáo.
(xemtiếptrangsau)
101

(tiếptheotrangtrước)
| Bảng | Trường   | Kiểu    | Vaitrò          |
| ---- | -------- | ------- | --------------- |
|      | report_  | integer | Liênkếtlogicđến |
|      | batch_id |         | đợtbáocáotương  |
ứng.
|     | status | varchar | Trạngtháiphêduyệt |
| --- | ------ | ------- | ----------------- |
củabáocáotiếnđộ.
|     | progress | integer | Tiếnđộhoànthành |
| --- | -------- | ------- | --------------- |
tựđánhgiá(%).
| 5.3.7.3 Dữ | liệu lịch | và điểm danh |     |
| ---------- | --------- | ------------ | --- |
Lịch tổng quát gồm các sự kiện và danh sách phân công tham dự. Bảng điểm
danh lưu kết quả có mặt hoặc báo vắng. Các liên kết qua general_id, item_id
và assign_id là liên kết logic. Schema hiện tại chưa có UNIQUE(item_id,
created_by), vì vậy việc ngăn bản ghi điểm danh trùng phụ thuộc vào kiểm
tra của backend. Cấu trúc nhóm dữ liệu lịch và điểm danh được trình bày trong
Hình 5.18.
Hình 5.18: Lược đồ dữ liệu rút gọn của nhóm lịch và điểm danh iOffice
102

| Bảng      | 5.10: Từ điển | dữ liệu nhóm       | lịch và điểm | danh iOffice     |
| --------- | ------------- | ------------------ | ------------ | ---------------- |
| Bảng      | Trường        | Kiểu               |              | Vaitrò           |
| schedule_ | id            | integer(PK,tựtăng, |              | Địnhdanhlịchtổng |
| general   |               | NOTNULL)           |              | quát.            |
|           | name          | varchar            |              | Têncủalịchlàm    |
việctổngquát.
| schedule_    | id         | integer(PK,tựtăng, |     | Địnhdanhsựkiện  |
| ------------ | ---------- | ------------------ | --- | --------------- |
| general_item |            | NOTNULL)           |     | hoặccuộchọp.    |
|              | general_id | integer            |     | Liênkếtlogicđến |
lịchtổngquát.
|     | name | text |     | Tênhoặcnộidung |
| --- | ---- | ---- | --- | -------------- |
sựkiện,cuộchọp.
|     | start_time | bigint |     | Thờiđiểmbắtđầu |
| --- | ---------- | ------ | --- | -------------- |
sựkiện(timestamp).
|     | end_time | bigint |     | Thờiđiểmkếtthúc |
| --- | -------- | ------ | --- | --------------- |
sựkiện(timestamp).
| schedule_ | id      | integer(PK,tựtăng, |     | Địnhdanhphân      |
| --------- | ------- | ------------------ | --- | ----------------- |
| general_  |         | NOTNULL)           |     | côngthamdựsự      |
| assign    |         |                    |     | kiện.             |
|           | item_id | integer            |     | Liênkếtlogicđếnsự |
kiệnlịchtươngứng.
|     | shcc | varchar |     | Mãnhânsựđược |
| --- | ---- | ------- | --- | ------------ |
phâncôngthamdự.
|     | vai_tro | varchar |     | Vaitròtrongsựkiện |
| --- | ------- | ------- | --- | ----------------- |
(chủtrì,thamdự).
| schedule_ | id  | integer(PK,tựtăng, |     | Địnhdanhkếtquả |
| --------- | --- | ------------------ | --- | -------------- |
| meeting_  |     | NOTNULL)           |     | điểmdanh.      |
attendance
|     | item_id | integer(NOTNULL) |     | Liênkếtlogicđếnsự |
| --- | ------- | ---------------- | --- | ----------------- |
kiệncuộchọp.
|     | assign_id | integer |     | Liênkếtlogicđến |
| --- | --------- | ------- | --- | --------------- |
phâncôngthamdự.
|     | attended | boolean |     | Kếtquảđiểmdanh |
| --- | -------- | ------- | --- | -------------- |
(cómặthoặcvắng
mặt).
|     | ly_do | varchar |     | Lýdoxinvắngmặt |
| --- | ----- | ------- | --- | -------------- |
cuộchọpnếucó.
|     | created_by | varchar |     | Mãnhânsựghinhận |
| --- | ---------- | ------- | --- | --------------- |
điểmdanh.
|     | created_by_ | varchar |     | Đơnvịcủangười    |
| --- | ----------- | ------- | --- | ---------------- |
|     | don_vi      |         |     | ghinhậnđiểmdanh. |
(xemtiếptrangsau)
103

(tiếptheotrangtrước)
| Bảng | Trường     |     | Kiểu   | Vaitrò       |
| ---- | ---------- | --- | ------ | ------------ |
|      | created_at |     | bigint | Thờiđiểmthực |
hiệnđiểmdanh
(timestamp).
| 5.3.8 | Truy vết | dữ liệu | của các chức năng | native |
| ----- | -------- | ------- | ----------------- | ------ |
Cập nhật hồ sơ nối dữ liệu hiện tại với đề xuất, chi tiết thay đổi và tệp minh
chứng; phản hồi và lịch sử sử dụng dữ liệu yêu cầu/nhật ký do HRM cung cấp,
không tạo một CSDL hồ sơ chính thức trên thiết bị. Khi một nội dung được thẩm
định, trạng thái yêu cầu và dữ liệu đã chấp thuận cần được đối chiếu tại backend.
Luồng tạo trực tiếp lịch ghi mục lịch, thành phần và nhật ký; tệp gắn với
ID mục sau upload. Phiếu đăng ký và các mục của phiếu thuộc nhánh đăng ký
Trường, không phải bản ghi bắt buộc của mọi thao tác tạo trực tiếp. Người tạo
và đơn vị được xác định theo phiên, còn phân công có thể đích danh hoặc theo
đơn vị. Lịch chờ sử dụng những liên kết này để quyết định người được xem; đây
| không phải | quyền phát | hành. |     |     |
| ---------- | ---------- | ----- | --- | --- |
104

| 5.4 | Các cơ | chế tích | hợp | hệ thống |     |
| --- | ------ | -------- | --- | -------- | --- |
Mục này trình bày các cơ chế giúp MyHCMUT Mobile kết nối với Auth
Service, HRM Backend và iOffice Backend: xác thực và giao tiếp API, đăng ký
thiết bị và tiếp nhận thông báo qua FCM, tổng hợp dữ liệu lịch và đồng bộ trạng
thái qua Socket.IO. Thiết kế xử lý hồ sơ nhân sự và tạo hoặc đăng ký cuộc họp
| được trình | bày tại  | Mục 5.2.3 | và Mục | 5.2.4. |     |
| ---------- | -------- | --------- | ------ | ------ | --- |
| 5.4.1      | Xác thực | và giao   | tiếp   | API    |     |
Ứng dụng sử dụng Auth Service hiện hữu để đăng nhập và nhận access token.
Sau khi đăng nhập thành công, token được ứng dụng quản lý và sử dụng khi gửi
yêu cầu đến các backend nghiệp vụ. MyHCMUT Mobile tạo các Dio instance
theo địa chỉ của từng dịch vụ; mỗi instance được cấu hình sẵn khóa xác thực
| (domainKey) | để xác | định token | cần | sử dụng. |     |
| ----------- | ------ | ---------- | --- | -------- | --- |
Trong phiên bản hiện tại, các Dio instance phục vụ Auth Service, HRM
Backend và iOffice Backend đều sử dụng chung khóa auth. Vì vậy, ứng dụng tái
sử dụng cùng access token do Auth Service cấp, không quản lý ba token độc lập.
Khi gửi yêu cầu cần xác thực, MultiDomainAuthInterceptor đọc token theo
khóa đã cấu hình và gắn vào HTTP header theo dạng Authorization: Bearer
<token>.
HRM Backend và iOffice Backend tiếp nhận yêu cầu, xác thực token và kiểm
tra quyền truy cập đối với chức năng nghiệp vụ tương ứng. Ứng dụng di động
quản lý phiên đăng nhập và gửi thông tin xác thực; các quyết định phân quyền và
| xử lý dữ | liệu chính | thức vẫn | thuộc trách | nhiệm | của backend. |
| -------- | ---------- | -------- | ----------- | ----- | ------------ |
Thông tin người dùng được tải từ API trạng thái và lưu đệm. Khi gặp lỗi
mạng hoặc lỗi không phải 401, ứng dụng có thể giữ thông tin đã lưu; khi thiếu
token, nhận 401 hoặc đăng xuất, trạng thái phiên được xóa theo luồng hiện hành.
Interceptor hiện tại gắn token và xử lý lỗi xác thực, không cung cấp cơ chế tự
động refresh rồi phát lại mọi request. Một request tạo bị mất phản hồi cần được
| phân biệt | với request | chắc chắn | bị từ | chối. |     |
| --------- | ----------- | --------- | ----- | ----- | --- |
105

| 5.4.2 | Tích hợp | thông báo |
| ----- | -------- | --------- |
Thông báo hỗ trợ người dùng nhận biết và mở nhanh nội dung nghiệp vụ cần
xử lý. MyHCMUT Mobile tiếp nhận thông báo từ HRM và iOffice, hiển thị trên
thiết bị và điều hướng đến màn hình tương ứng khi người dùng chọn thông báo.
Quyền truy cập và dữ liệu vẫn do hệ thống nguồn quản lý. Điểm tích hợp được
| khái quát | trong Hình | 5.19. |
| --------- | ---------- | ----- |
Hình 5.19: Sơ đồ khái quát điểm tích hợp thông báo từ HRM và iOffice đến ứng
| dụng di | động |     |
| ------- | ---- | --- |
Khi người dùng chọn thông báo, ứng dụng mở màn hình nghiệp vụ tương ứng
nếu có đường dẫn được hỗ trợ. Màn hình đích tiếp tục tuân theo quyền truy cập
| của hệ | thống nguồn. |     |
| ------ | ------------ | --- |
Thiết bị đăng ký FCM token với cả HRM và iOffice; mỗi backend có trách
nhiệm ánh xạ token tới tài khoản đang hoạt động. Phản hồi lỗi cấu hình sender
106

không phải căn cứ mặc định xóa mọi token của người dùng. Thông báo chỉ hỗ
trợ nhận biết và điều hướng; quyền và trạng thái nghiệp vụ vẫn phải được tải từ
hệ thống nguồn.
Đối với thông báo lịch, iOffice ánh xạ mã nhân sự tới tài khoản hoạt động và
token thiết bị, khử trùng người nhận trước khi gửi. Phân công chỉ chứa đơn vị
không tự mở rộng thành mọi tài khoản để gửi push. Đường gửi lời mời hiện hành
chưa có outbox/retry bền vững riêng dù iOffice có hạ tầng outbox cho một số
luồng khác; không bảo đảm exactly-once hoặc mọi thiết bị đều nhận. Bấm push
lịch hiện mở màn hình Lịch biểu, chưa mở thẳng chi tiết theo ID. Thời điểm phát
sinh lời mời thuộc thiết kế chức năng tại Mục 5.2.4; kết quả nhận và mở thông
báo trên Android được nêu riêng ở Chương 6.
5.4.3 Tổng hợp dữ liệu lịch và đồng bộ thời gian thực
Tổng hợp dữ liệu từ các API độc lập. Ứng dụng tải lịch họp từ iOffice và
lịch nghỉ phép, công tác từ HRM qua các dịch vụ tương ứng, rồi tổng hợp kết
quả trên giao diện di động. Mỗi nguồn tiếp tục quản lý dữ liệu và quyền truy cập
riêng; việc hiển thị chung không tạo một CSDL nghiệp vụ hợp nhất.
Nếu dữ liệu nghỉ phép hoặc công tác không tải được, lịch họp từ iOffice vẫn
có thể hiển thị. Lịch cần dữ liệu từ iOffice để tải danh sách sự kiện chính; các hệ
thống nguồn không dùng chung cơ sở dữ liệu.
Đồng bộ trạng thái qua Socket.IO. Các thao tác điểm danh, hoàn tác hoặc
báo vắng được ghi nhận qua API iOffice. Socket.IO hỗ trợ truyền sự kiện thay
đổi tới các thiết bị đang theo dõi để ứng dụng tải lại dữ liệu; sự kiện thời gian
thực không thay thế bước kiểm tra quyền và ghi dữ liệu ở backend.
Trạng thái hiển thị sau khi làm mới dựa trên phản hồi từ hệ thống nguồn.
Quan hệ giữa các nguồn API, bước tổng hợp và đường cập nhật trạng thái được
thể hiện trong Hình 5.20.
107

Hình 5.20: Tổng hợp lịch đa nguồn và cập nhật điểm danh cuộc họp
| 5.5 Tổng | kết | chương |     |
| -------- | --- | ------ | --- |
Chương này đã trình bày kiến trúc tổng thể, cấu trúc các thành phần, mô hình
dữ liệu và các cơ chế tích hợp của MyHCMUT Mobile với những hệ thống hiện
hữu. Thiết kế hồ sơ native bao gồm policy, cập nhật hoặc đề xuất, minh chứng,
phản hồi và lịch sử so sánh dữ liệu trước–sau. Thiết kế tạo cuộc họp phân biệt
quyền tạo, trạng thái tổng hợp và phát hành; đồng thời làm rõ trường hợp lịch đã
lưu nhưng tài liệu chưa tải thành công. Các quyết định về quyền, dữ liệu và quy
| trình vẫn | thuộc hệ thống | nguồn. |     |
| --------- | -------------- | ------ | --- |
Trên cơ sở thiết kế này, Chương 6 trình bày giao diện hiện thực và kết quả
kiểm thử theo từng lớp bằng chứng. Những luồng đã được xác nhận từ mã nguồn
nhưng còn thiếu phép thử trên thiết bị được tách khỏi các kết quả đã kiểm chứng,
| thay vì xem | mô tả thiết | kế là căn | cứ nghiệm thu. |
| ----------- | ----------- | --------- | -------------- |
108

| Chương | 6   |      |      |     |
| ------ | --- | ---- | ---- | --- |
| KẾT    | QUẢ | HIỆN | THỰC | VÀ  |
| KIỂM   | THỬ |      |      |     |
Chương này trình bày những chức năng đã được hiện thực trên MyHCMUT
Mobile theo phạm vi xác định ở Chương 1 và Chương 4, đồng thời đối chiếu
kết quả kiểm thử với các yêu cầu tương ứng. Phần hiện thực mô tả khả năng
và ranh giới của ứng dụng; phần kiểm thử làm rõ những hành vi đã được xác
minh, những sai lệch được ghi nhận và giới hạn của bằng chứng hiện có.
| 6.1 Kết | quả hiện | thực hệ | thống |     |
| ------- | -------- | ------- | ----- | --- |
Mục này trình bày kết quả xây dựng ứng dụng theo các nhóm nghiệp vụ đã
đặc tả ở Chương 4. Phần nhóm trực tiếp phát triển gồm các màn hình và luồng
Flutter cùng những API hoặc cơ chế tích hợp được bổ sung ở backend; dữ liệu
và quy tắc nghiệp vụ sẵn có của HRM/iOffice được tái sử dụng, các biểu mẫu
hồ sơ và tạo lịch được hiện thực bằng Flutter theo hợp đồng API của hệ thống
nguồn. Ranh giới từng thành phần được nêu ở Bảng 5.1. Một số ảnh giao diện
đã được thay thông tin định danh; các ảnh này chỉ minh họa cách trình bày và
thao tác. Mức độ hoạt động đúng trong môi trường tích hợp được đánh giá riêng
ở Mục 6.2.
109

| Hình 6.1: | Trang chủ | và lịch | cá nhân |
| --------- | --------- | ------- | ------- |
110

| 6.1.1 | Trang | chủ |     |
| ----- | ----- | --- | --- |
Trên trang chủ ở Hình 6.1, nhóm Truy cập nhanh đưa người dùng đến thông
báo, văn bản, công việc, nghỉ phép, lý lịch và công tác. Phần Lịch của tôi hiển thị
dãy ngày trong tuần và sự kiện của ngày được chọn; thanh điều hướng phía dưới
dẫn đến trang chủ, khu vực khám phá và tài khoản. Biểu tượng chuông kèm số
thông báo chưa đọc giúp người dùng nhận biết công việc mới. Các lối vào này
được bố trí theo tác vụ thường gặp để người dùng không phải đi qua nhiều tầng
| menu  | khi mở | một hồ sơ | cần xử lý. |
| ----- | ------ | --------- | ---------- |
| 6.1.2 | Quản   | lý hồ     | sơ cá nhân |
Ứng dụng đã xây dựng giao diện tra cứu hồ sơ nhân sự theo các nhóm thông
tin cá nhân, công tác, đào tạo và chế độ liên quan. Người dùng có thể mở từng
danh mục để xem dữ liệu được HRM cung cấp và yêu cầu làm mới thông tin.
Đây là phần giao diện tra cứu được phát triển trên ứng dụng di động.
Hình 6.2 cho thấy màn hình tổng quan và một thẻ thông tin cá nhân sau khi
được mở. Hai ví dụ ở Hình 6.3 minh họa cách xem chi tiết ở nhóm công tác và
chế độ; các thẻ khác được truy cập theo cùng cách, không cần đưa ảnh của mọi
| trường | dữ liệu | vào báo cáo. |     |
| ------ | ------- | ------------ | --- |
111

| Hình 6.2: | Hồ sơ: tổng | quan và thông  | tin cá nhân |
| --------- | ----------- | -------------- | ----------- |
| Hình      | 6.3: Hồ sơ: | học vị và khen | thưởng      |
112

Khi cần thay đổi hồ sơ, nhân sự chọn nhánh tự cập nhật, gửi đề xuất hoặc
phản hồi theo policy và danh mục được hỗ trợ. Editor native tải dữ liệu hiện tại,
trình bày trường được thao tác và tiếp nhận minh chứng theo hợp đồng. HRM
quyết định trường cập nhật trực tiếp hoặc cần thẩm định; phản hồi không tự thay
đổi hồ sơ. Màn hình lịch sử hiển thị yêu cầu, trạng thái, nội dung thay đổi và nhật
ký từ backend. Nhân sự mở chi tiết để quan sát dữ liệu ban đầu và dữ liệu mới
theo từng trường; nhóm thay đổi ghi nhận các cập nhật trực tiếp và thay đổi từ
yêu cầu đã duyệt, còn nhóm yêu cầu cho biết nội dung đã gửi và diễn biến xử lý.
Chức năng này khác giao diện so sánh dành cho chuyên viên thẩm định.
Phiên bản chốt đã có editor cho thông tin cá nhân, địa chỉ, ngân hàng/bảo
hiểm, gia đình, công tác ngoài Trường, đào tạo và kê khai tài sản/thu nhập. Điều
này không khẳng định mọi trường của HRM Web đều đã được đưa vào mobile.
Các ảnh tra cứu bên trên và ảnh thẩm định bên dưới chỉ minh họa những màn
hình tương ứng; hồ sơ bằng chứng hiện có chưa cung cấp đủ ảnh/log nộp native
cho mọi editor, phản hồi và lịch sử. Vì vậy, báo cáo chưa dùng các ảnh đó để kết
luận toàn bộ luồng native đã được nghiệm thu.
Ở vai trò thẩm định, màn hình chi tiết yêu cầu trình bày thông tin người đề
xuất, trạng thái, từng nhóm trường thay đổi và tệp minh chứng. Thẻ so sánh đặt
giá trị trước và nội dung đề xuất cạnh nhau; người xử lý có thể xem nội dung rồi
chọn Duyệt hoặc Từ chối cho mục cần thẩm định. Hình 6.4 minh họa bố cục này
với thông tin định danh đã thay bằng dữ liệu mẫu. Việc hiển thị đúng màn hình
không thay thế bước xác minh kết quả cập nhật hồ sơ nguồn sau khi duyệt.
113

Hình 6.4: Giao diện so sánh và thẩm định đề xuất lý lịch (dữ liệu mẫu)
6.1.3 Quản lý nghỉ phép
Phần nghỉ phép cung cấp danh sách đơn, thông tin số dư và biểu mẫu lập đơn
ba bước: nhập thông tin, bổ sung minh chứng và rà soát trước khi gửi. Hình 6.5
thể hiện điểm bắt đầu từ danh sách đến bước nhập thông tin; Hình 6.6 thể hiện
hai bước tiếp theo. Ứng dụng kết nối HRM để kiểm tra dữ liệu đơn và ghi nhận
yêu cầu. Sau khi gửi, người lập có thể theo dõi trạng thái xử lý; thao tác sửa hoặc
xóa thông thường chỉ áp dụng với đơn Nháp. Đơn Bị trả lại có đường xử lý để
người lập điều chỉnh và gửi lại, còn đơn đã gửi không mặc nhiên cho phép người
lập sửa hoặc thu hồi.
114

| Hình 6.5: | Nghỉ phép: | danh sách  | đơn và bước | nhập liệu |
| --------- | ---------- | ---------- | ----------- | --------- |
| Hình      | 6.6: Nghỉ  | phép: minh | chứng và rà | soát đơn  |
115

Giao diện xử lý đơn dành cho người có thẩm quyền tách Nội dung, Quy trình
và Lịch sử thao tác để người duyệt có thể đối chiếu dữ liệu đơn với bước hiện tại
trước khi quyết định. Sau thao tác, ứng dụng hiển thị phản hồi và trạng thái mới
như Hình 6.7. Các quy tắc về trạng thái, quyền và số dư phép tiếp tục do HRM
Backend quyết định. Phần kiểm thử sau đây đánh giá nhánh lập–gửi và chuỗi
duyệt tuần tự đến kết thúc đã quan sát được trên một phiếu thử, đồng thời phân
biệt các nhánh quản lý nháp, gửi lại và những sai lệch nghiệp vụ còn tồn tại.
Hình 6.7: Màn hình chi tiết đơn sau thao tác duyệt (dữ liệu mẫu)
6.1.4 Quản lý công tác
Ứng dụng đã hiện thực danh sách, chi tiết và biểu mẫu đăng ký công tác năm
bước. Hình 6.8 trình bày riêng danh sách phiếu với bộ lọc theo năm và trạng thái.
Người lập có thể chuẩn bị hồ sơ, lưu ở trạng thái Nháp, bổ sung các thông tin và
tệp cần thiết rồi gửi đến quy trình xử lý của HRM. Các bước của biểu mẫu lần
116

lượt tổ chức thời gian chuyến đi, nội dung, người tham gia, kinh phí và trang rà
soát trước khi gửi; cách chia này giúp người lập kiểm tra từng nhóm thông tin
trên màn hình nhỏ. Hình 6.9–6.11 minh họa năm bước nhập liệu trên một phiếu
nháp dùng để chụp giao diện; việc đi đến bước rà soát không chứng minh phiếu
đã được nộp thành công. Giao diện theo dõi các bước xử lý của một phiếu khác
được minh họa ở Hình 6.12. Các hồ sơ Bị trả lại có đường điều chỉnh để gửi lại;
quyền xóa của người lập chỉ áp dụng cho Nháp. Vì vậy, chức năng này không
| được mô | tả như quyền | tự thu    | hồi hồ sơ đã gửi. |             |
| ------- | ------------ | --------- | ----------------- | ----------- |
|         | Hình         | 6.8: Danh | sách phiếu đăng   | ký công tác |
117

| Hình 6.9: | Công tác:  | thời gian  | và nội dung chuyến | đi  |
| --------- | ---------- | ---------- | ------------------ | --- |
| Hình      | 6.10: Công | tác: người | tham gia và kinh   | phí |
118

| Hình 6.11: | Công tác: | rà soát phiếu | trước khi gửi |
| ---------- | --------- | ------------- | ------------- |
119

Hình 6.12: Tiến trình xử lý phiếu công tác
Các giao diện dành cho người có thẩm quyền thể hiện thông tin thẩm định,
phê duyệt, trả lại hoặc từ chối theo bước xử lý. Nhánh thu hồi hồ sơ thuộc vai
trò được HRM cấp quyền riêng, không phải thao tác quản lý đơn cá nhân của
người lập. Phép thử ở Mục 6.2 xác nhận một phiếu đã gửi được duyệt tuần tự qua
các cấp đến kết thúc; một phiếu trong nước khác được lập qua năm bước, trả lại
và gửi lại sau khi sửa. Nhánh từ chối và thu hồi cũng đã được kiểm tra trên các
phiếu thử riêng; kết quả không được suy rộng sang mọi biến thể hồ sơ và vai trò.
6.1.5 Văn bản và nhiệm vụ
Đối với văn bản đến và văn bản đi, ứng dụng cung cấp danh sách, tìm kiếm,
thông tin chi tiết và các thao tác xử lý tương ứng với quyền của người dùng.
Hình 6.13 minh họa danh sách văn bản đến cùng tệp đính kèm. Từ một dòng văn
120

bản, người dùng đi đến trang chi tiết để xem thông tin, tệp và tiến trình xử lý; các
hành động chỉ xuất hiện trong phạm vi quyền được cấp. Danh sách văn bản đi
được phân theo trạng thái để người dùng theo dõi hồ sơ của mình, hồ sơ đang
xử lý, bị trả lại và đã hoàn tất. Tệp đính kèm văn bản được tải tạm rồi mở bằng
ứng dụng phù hợp của hệ điều hành Android; ứng dụng không nhúng trình đọc
PDF riêng cho các tệp văn bản này. Giao diện xử lý văn bản có các đường thao
tác phân công trách nhiệm, tham mưu, chỉ đạo và tiếp nhận; việc ghi nhận, kiểm
tra quyền và cập nhật trạng thái thuộc iOffice Backend.
Hình 6.13: Văn bản đến và tệp đính kèm
Trong quy trình tiếp nhận, một dòng phân công mang tính thông tin hoặc để
biết có thể được ghi nhận hoàn thành cùng lúc với tiếp nhận. Với văn bản giao
nhiệm vụ, tiếp nhận chỉ xác nhận bắt đầu xử lý; người có quyền phải thực hiện
thao tác Hoàn thành riêng trên iOffice sau khi thực hiện công việc. Đây là hai
121

trường hợp nghiệp vụ khác nhau, không thể suy ra toàn bộ văn bản tự hoàn thành
chỉ vì mọi người đã tiếp nhận. Mức độ xác minh các thao tác này được trình bày
ở Mục 6.2.
Đối với nhiệm vụ, phần di động tập trung vào xem danh sách theo trạng thái,
chi tiết, cây công việc, người được phân công, tiến độ và các báo cáo tiến độ đã
có. Các tab và số lượng trên danh sách giúp người dùng chuyển nhanh giữa công
việc của mình, bản nháp, nhiệm vụ đang thực hiện và đã hoàn thành. Từng thẻ
nhiệm vụ thể hiện loại công việc, hạn xử lý và trạng thái đúng hạn hoặc quá hạn
như Hình 6.14. Việc tạo mới, phân công nhiệm vụ và nộp báo cáo tiến độ được
thực hiện trên hệ thống iOffice Web hiện hữu, không thuộc kết quả hiện thực của
giao diện di động trong phạm vi đề tài.
Hình 6.14: Danh sách nhiệm vụ theo trạng thái (tên nhiệm vụ mẫu)
122

| 6.1.6 Lịch | công | tác và điểm | danh cuộc | họp |
| ---------- | ---- | ----------- | --------- | --- |
Giao diện lịch tổng hợp các sự kiện liên quan đến người dùng từ lịch họp
iOffice, lịch nghỉ phép HRM và lịch công tác HRM. Người dùng có thể chọn
ngày hoặc sự kiện để xem thông tin và chuyển đến màn hình nghiệp vụ liên quan.
Hình 6.1 cho thấy lịch thu gọn trên trang chủ; Hình 6.15 minh họa một ngày có
cuộc họp iOffice và tab điểm danh của cuộc họp đó. Ảnh này chỉ thể hiện sự kiện
từ iOffice, không tự chứng minh cả ba nguồn đều có dữ liệu trong ngày được
chọn. Dữ liệu gốc vẫn do từng hệ thống quản lý; ứng dụng tổng hợp để hiển thị
| trên thiết bị | di động. |               |             |               |
| ------------- | -------- | ------------- | ----------- | ------------- |
|               | Hình     | 6.15: Lịch có | cuộc họp và | tab điểm danh |
| 6.1.6.1 Tạo   | cuộc họp | theo quyền    |             |               |
Từ màn hình Lịch biểu, người dùng có quyền mở menu tạo lịch. Nhánh trực
tiếpTrườngchỉhiểnthịkhicóquyềntạotươngứng;tácnhânnghiệpvụlàchuyên
viên BGH được cấp quyền. Biểu mẫu hỗ trợ nhập nội dung, loại lịch, thời gian/cả
ngày, địa điểm và ghi chú, tìm nhân sự để chọn chủ trì, thành phần tham dự, thư
123

ký và chọn tài liệu theo quyền upload. Ứng dụng kiểm tra giờ kết thúc sau giờ
bắt đầu trước khi gửi.
Ở nhánh trực tiếp, iOffice lưu mục Trường tại tổng hợp và trả ID; mobile
dùng ID để tải tài liệu. Khi tệp lỗi sau lưu, notifier giữ mục đã nhận trong phiên
formđểthửlại,tránhluôntạomụcmới.Lịchchờcónhãnvàquyềnxemgiớihạn,
không được trình bày như lịch đã phát hành. Nhánh đăng ký Trường và nhánh
đơn vị có luồng riêng theo đặc tả Chương 4.
Hiện thực form và xử lý thử lại được xác nhận từ mã nguồn. Biên bản push
ngày 01/10 dùng API thật để tạo lịch, chưa chứng minh chuyên viên BGH thật đã
hoàn tất toàn bộ form, chọn thành phần/tệp và thử lại trên thiết bị. Ảnh nghiệm
thu form và log đối chiếu người tạo, tài liệu, trạng thái cần được bổ sung qua kịch
bản tại Bảng 6.4; không thay bằng ảnh thiết kế hoặc ảnh lịch đã có.
6.1.6.2 Điểm danh cuộc họp
Với cuộc họp được cấu hình điểm danh, ứng dụng có giao diện ghi nhận có
mặt, hoàn tác hoặc báo vắng kèm lý do trong trang chi tiết sự kiện. Yêu cầu được
gửi đến iOffice để xử lý quyền sử dụng lịch, thời gian hợp lệ và trạng thái tham
dự. Người được phân công có dòng điểm danh tương ứng; người ngoài danh sách
phân công có thể tự điểm danh và được hiển thị trong nhóm khách tham dự.
Bộ chuyển đổi dữ liệu ở mobile đọc phản hồi điểm danh dạng nhóm và ánh xạ
các trường thông tin khách mà không yêu cầu thay đổi API iOffice. Hình 6.15
minh họa lịch cá nhân và thống kê điểm danh của một cuộc họp đã có trong lịch.
Ảnh thể hiện giao diện cùng trạng thái tham dự được tải về; không được dùng
làm bằng chứng cho một thao tác điểm danh mới thành công. Lối vào Họp riêng
trên trang Khám phá hiện vẫn là màn hình đang phát triển; đường truy cập đang
hoạt động là từ sự kiện trên lịch. Kết quả thao tác thực tế được đánh giá riêng ở
Mục 6.2.
Khi cuộc họp còn trong thời gian điểm danh, tab Điểm danh trình bày số
người có mặt, vắng mặt, chưa xác nhận và trạng thái của từng nhóm tham dự.
Sau khi ghi nhận có mặt, người dùng thấy trạng thái của mình và nút Hoàn tác
124

điểm danh; khi báo vắng, giao diện hiển thị lý do và cho phép đổi trạng thái theo
quyền. Hình 6.16 minh họa hai trạng thái của người được phân công với dữ liệu
tên đã thay thế. Các ảnh không mô tả một lượt tự điểm danh thành công của
| khách ngoài | danh sách. |     |     |     |
| ----------- | ---------- | --- | --- | --- |
Hình 6.16: Giao diện sau khi ghi nhận có mặt và báo vắng (dữ liệu mẫu)
| 6.1.7 | Thông báo | và điều | hướng đến | nghiệp vụ |
| ----- | --------- | ------- | --------- | --------- |
Biểu tượng thông báo trên trang chủ dẫn đến danh sách với các tab Tất cả,
| HRM | iOffice. |     |     |     |
| --- | -------- | --- | --- | --- |
và Mỗi thẻ hiển thị nội dung, thời gian tương đối và nguồn; số
thông báo chưa đọc được thể hiện trên từng tab, như Hình 6.17. Người dùng có
thể mở thông báo để chuyển nhanh đến màn hình nghiệp vụ liên quan hoặc đánh
dấu là đã đọc. Trên Android, ứng dụng cũng hiển thị banner khi có thông báo và
hỗ trợ mở nội dung tương ứng khi người dùng chạm vào banner. Kết quả kiểm tra
| được trình | bày tại Mục | 6.2. |     |     |
| ---------- | ----------- | ---- | --- | --- |
125

|     | Hình 6.17: | Trung tâm | thông báo | trên thiết | bị thử |
| --- | ---------- | --------- | --------- | ---------- | ------ |
Hình 6.18: Thông báo hiển thị khi ứng dụng chạy nền trên Android 12
| 6.1.7.1 Kiểm | chứng | lời mời lịch | Trường trên | Android |     |
| ------------ | ----- | ------------ | ----------- | ------- | --- |
Biên bản ngày 01/10/2026 ghi nhận lời mời của lịch tạo trực tiếp ở bước tổng
hợp xuất hiện trên RMX2151 khi ứng dụng mở và khi chạy nền. Sau khi người
dùng chạm thông báo, ứng dụng mở Lịch biểu. Hình 6.19 dùng ảnh của biên bản
này; tên cuộc họp là dữ liệu demo. Đây là kiểm chứng API tạo, thông báo và
thao tác mở trên một thiết bị, chưa phải kiểm chứng form tạo lịch hoặc phát hành
chính thức.
126

Hình 6.19: Lời mời lịch tổng hợp khi app mở và chạy nền trên Android, ngày
01/10/2026
127

| 6.2 | Kiểm | thử | và  | đánh | giá | hệ thống |
| --- | ---- | --- | --- | ---- | --- | -------- |
Quá trình kiểm thử được thực hiện ở hai phạm vi. Trước hết, các bài kiểm thử
tự động được sử dụng để kiểm tra những quy tắc và thành phần có thể xác minh
độc lập. Tiếp theo, nhóm kiểm tra các luồng nghiệp vụ đại diện trên hệ thống tích
hợp thông qua ứng dụng Android và đối chiếu kết quả với các hệ thống nguồn.
Cách tổ chức này giúp phân biệt kết quả kiểm thử ở mức thành phần với kết quả
| khi các | thành | phần | phối | hợp trong | một    | luồng nghiệp vụ. |
| ------- | ----- | ---- | ---- | --------- | ------ | ---------------- |
| 6.2.1   | Chiến | lược | và   | môi       | trường | kiểm thử         |
Các kịch bản được lựa chọn từ những chức năng đã hiện thực, tập trung vào
các luồng nghiệp vụ chính và một số trường hợp quan trọng về kiểm tra dữ liệu
đầu vào, phân quyền, chuyển trạng thái, điểm danh và điều hướng.
Ởmứcthànhphần,nhómsửdụngunittest,widgettestvàhandlertesttùytheo
đặc điểm của ứng dụng mobile và backend liên quan. Ở mức hệ thống tích hợp,
nhóm sử dụng các tài khoản có vai trò phù hợp để thực hiện các luồng nghiệp vụ
trên ứng dụng và đối chiếu kết quả với trạng thái tại HRM hoặc iOffice. Một số
nhánh nghiệp vụ được kiểm tra bổ sung thông qua API và cơ sở dữ liệu khi cần
| xác định | kết quả | xử  | lý tại | backend. |     |     |
| -------- | ------- | --- | ------ | -------- | --- | --- |
Kiểm thử thủ công được thực hiện trên điện thoại Realme RMX2151 chạy
Android 12, kết nối đến các dịch vụ thử nghiệm Auth, HRM và iOffice. Các hồ
sơ sử dụng là dữ liệu thử nghiệm được cho phép. Nhóm ghi nhận trạng thái trước
và sau thao tác cùng ảnh minh chứng, đồng thời lược bỏ thông tin định danh khi
đưa vào báo cáo. Kết quả được trình bày trong phạm vi các tài khoản, dữ liệu và
| kịch bản | đã thực | hiện. |     |      |     |     |
| -------- | ------- | ----- | --- | ---- | --- | --- |
| 6.2.2    | Kiểm    | thử   | tự  | động |     |     |
Các bộ kiểm thử tự động được thực hiện riêng cho ứng dụng mobile và những
phần backend liên quan trực tiếp đến đề tài. Do mỗi bộ kiểm thử có mục tiêu và
phạm vi khác nhau, kết quả được báo cáo riêng theo từng thành phần và không
| được cộng | thành | tỷ  | lệ đạt | chung | của toàn | hệ thống. |
| --------- | ----- | --- | ------ | ----- | -------- | --------- |
128

Bảng 6.1: Kết quả kiểm thử thành phần ở các lượt lịch sử 22–24/09/2026
| Thànhphần  | Loạikiểmthử      |     | Kếtquả   | Phạmvikiểmtra           |     |     |
| ---------- | ---------------- | --- | -------- | ----------------------- | --- | --- |
| Ứngdụng    | Unitvàwidgettest |     | 371/371  | Môhìnhdữliệu,trạngthái, |     |     |
| mobile     | trênsáugóichức   |     | đạt      | giaodiệnthànhphầnvàđiều |     |     |
|            | năng             |     |          | hướng.                  |     |     |
| HRMBackend | Unittestchocác   |     | 59/59đạt | Phiênlàmviệc,xửlýnghỉ   |     |     |
|            | suiteliênquanđến |     |          | phép,tươngtranhvàdữliệu |     |     |
|            | SSO,nghỉphépvà   |     |          | đầuvàocủathaotáctừchối. |     |     |
quytắctừchối
| iOfficeBackend | Handlertestvới |     | 4/4đạt | Quyềntruycậptệpvănbảnvà |     |     |
| -------------- | -------------- | --- | ------ | ----------------------- | --- | --- |
|                | môhìnhgiả      |     |        | cácnhánhđiểmdanh.       |     |     |
Bảng 6.1 giữ số liệu các lượt 22–24/09 trong hồ sơ kiểm thử, không phải tổng
test tại HEAD hiện hành. Các suite SSO là kiểm chứng cơ chế backend ở phiên
bản cũ, không nghiệm thu hồ sơ native. Mốc nguồn và lệnh tương ứng được lưu
trong baseline 23/09 và sổ bằng chứng của repository. Các kết quả trên xác nhận
hành vi trong phạm vi của từng bộ kiểm thử. Chúng không thay thế việc kiểm
tra các luồng nghiệp vụ trên hệ thống tích hợp với cơ sở dữ liệu và tài khoản thử
nghiệm. Đặc biệt, các handler test sử dụng mô hình giả chỉ xác minh logic của
thành phần được kiểm tra, chưa phản ánh toàn bộ quá trình từ ứng dụng đến hệ
thống nguồn.
Bảng
|            | 6.2: Bổ sung | kiểm chứng     | ngày | 01/10/2026 | theo phạm | vi  |
| ---------- | ------------ | -------------- | ---- | ---------- | --------- | --- |
| Phạmvi/mốc | Kếtquả       | Căncứvàgiớihạn |      |            |           |     |
iOffice4ca9249 47/47đạt Biênbảnchạynode –test test/*.test.js;
cáctestbackendmôphỏng,gồmđăngkýthiếtbị
vàxửlýlỗitoken.
Notification 64/64đạt Biênbảntestpackagenotification;khôngphải
| mobile61722ad |           | tổngtesttoànbộmobile. |     |                          |     |     |
| ------------- | --------- | --------------------- | --- | ------------------------ | --- | --- |
| Phântíchtĩnh  | 11package | Biênbảnmake           |     | analyze;khôngthaythếkiểm |     |     |
| mobile        | sạch      | chứngchứcnăng.        |     |                          |     |     |
Lịchchờ/lờimời 33/33đạt Lượtchạyriênghaifiletestpublication/pending
| iOffice |     | tại4ca9249;cóphầntrùngbộ47test,không |     |     |     |     |
| ------- | --- | ------------------------------------ | --- | --- | --- | --- |
cộngsố.
| Pushtrên | Mở/chạy | APItạolịchthật,lịchgiữtổnghợp,nhậnpushvà |     |     |     |     |
| -------- | ------- | ---------------------------------------- | --- | --- | --- | --- |
| Android  | nềnđạt  | bấmmởLịchbiểu;chưakiểmchứngiOS/form      |     |     |     |     |
tạo.
129

Bảng 6.2 dẫn các phép thử đã ghi nhận trong biên bản 01/10 và lượt đối chiếu
tạo lịch. Không có kết quả chạy lại toàn bộ HRM/mobile tại mốc mới; không suy
| tỷ lệ bao phủ | toàn hệ thống | từ các | bộ test được chọn. |          |          |
| ------------- | ------------- | ------ | ------------------ | -------- | -------- |
| 6.2.3 Kiểm    | thử các       | luồng  | nghiệp vụ trên     | hệ thống | tích hợp |
Nhóm thực hiện các luồng nghiệp vụ đại diện trên ứng dụng mobile và đối
chiếu kết quả với API, cơ sở dữ liệu hoặc trạng thái tại hệ thống nguồn khi cần
thiết. Các kết quả tích hợp lịch sử 22–24/09 được giữ với phạm vi đã thử; tính
năng native mới được đánh giá riêng, không kế thừa kết quả từ luồng Web trước
đây.
Bảng 6.3: Kết quả kiểm thử các luồng nghiệp vụ trên hệ thống tích hợp
| Luồng  | Kếtquảđạt                   |     | Kếtquảchưađạthoặcgiớihạn  |     |     |
| ------ | --------------------------- | --- | ------------------------- | --- | --- |
| Hồsơcá | Lượtlịchsửxácnhậntracứuvà   |     | Hồsơhiệndùngeditornative; |     |     |
| nhân   | thẩmđịnh;dữliệusauduyệtđược |     | kếtquảtạocótệpcủaphiênbản |     |     |
|        | đốichiếuhệthốngnguồn.       |     | Webcũkhôngnghiệmthuluồng  |     |     |
mới.ChưacóđủlogE2Echomọi
editor/phảnhồi/lịchsử.
Nghỉphép Gửi,trảlại,gửilại,duyệtvàtừ Duyệtđồngthờinhiềuyêucầu
|     | chốihoạtđộngđúng;trạngthái, |     | cóthểlàmsốngàynghỉvượtquỹ |     |     |
| --- | --------------------------- | --- | ------------------------- | --- | --- |
|     | lịchsửvàlịchcánhânđượccập   |     | phéphiệncó.               |     |     |
nhậttươngứng.
Côngtác Tạo,gửi,trảlạivàgửilạiphiếu Mộtsốnhánhtừchối,thuhồivà
|     | trênmobilehoạtđộngđúng;các  |     | duyệtphiếunướcngoàichưathực |     |     |
| --- | --------------------------- | --- | --------------------------- | --- | --- |
|     | nhánhtừchối,thuhồitheoquyền |     | hiệnđượcđầyđủquagiaodiện    |     |     |
|     | vàduyệtphiếunướcngoàiqua    |     | mobile.                     |     |     |
nhiềucấpđãđượcxácnhậnbổ
sungtạibackendtrêncácphiếu
thửriêng.
| Vănbảnvà | Tracứunộidungđượcphân    |     | Chưahỗtrợđầyđủvòngđờixửlý  |     |     |
| -------- | ------------------------ | --- | -------------------------- | --- | --- |
| nhiệmvụ  | quyền,mởtệpPDFvàxemthông |     | vănbảnvànhiệmvụtrênmobile. |     |     |
tinnhiệmvụhoạtđộngđúng.
| Lịchvà   | Ngườiđượcmờicóthểđiểm       |     | Kháchngoàidanhsáchmờichưa  |     |     |
| -------- | --------------------------- | --- | -------------------------- | --- | --- |
| điểmdanh | danh,hoàntácvàbáovắng;trạng |     | thựchiệnđượcđiểmdanhqua    |     |     |
|          | tháiđượccậpnhậttạiiOffice.  |     | giaodiệntrongmôitrườngkiểm |     |     |
thử.
130

| Luồng    | Kếtquảđạt                   |     |     | Kếtquảchưađạthoặcgiớihạn   |     |
| -------- | --------------------------- | --- | --- | -------------------------- | --- |
| Thôngbáo | Nhậnthôngbáokhiứngdụngở     |     |     | Chưahỗtrợhoặckiểmtrađầyđủ  |     |
|          | foreground/backgroundvàđiều |     |     | mọiloạithôngbáovàtrườnghợp |     |
|          | hướngđếnđúngnộidungtrong    |     |     | điềuhướng.                 |     |
cáctrườnghợpđãthử.
Các kịch bản đã thử xác nhận hành vi trong tài khoản và môi trường tương
ứng. Với nghỉ phép, lượt 24/09 ghi nhận hai thao tác duyệt cuối đồng thời dẫn
đến tổng ngày vượt quỹ và số dư suy ra âm. Chưa có phép thử lại tại phiên bản
chốt để kết luận đã giải quyết. Khóa chống trùng khi tạo/sửa và kiểm tra quỹ tại
duyệt cuối là các đường xử lý khác nhau; không suy ra bất thường đã hết chỉ vì
| một tài | liệu mô tả | có khóa. |     |     |     |
| ------- | ---------- | -------- | --- | --- | --- |
Với công tác, một số nhánh từ chối, thu hồi và duyệt nước ngoài mới được
xác nhận riêng ở backend, chưa đầy đủ qua UI. Điều kiện thiếu báo cáo chỉ xét
chuyến đã kết thúc theo mốc về thực tế hoặc ngày kết thúc; mobile chưa có form
nộp báo cáo. Với điểm danh, source cho phép khách nhưng lượt thử giao diện
khách vẫn chưa có kết quả thành công đủ căn cứ. Với hồ sơ, lỗi chọn tệp của
luồng Web trước đây là lịch sử, không phải kết luận lỗi hiện tại của editor native.
Các trường hợp chưa đạt trên được ghi nhận làm cơ sở xác định những nội
dung cần tiếp tục hoàn thiện, thay vì được sử dụng để suy rộng kết quả sang các
| chức năng | hoặc kịch | bản chưa | được kiểm thử. |            |     |
| --------- | --------- | -------- | -------------- | ---------- | --- |
| 6.2.4     | Mức kiểm  | chứng    | hồ sơ native   | và tạo họp | mới |
Bảng 6.4 xác định các kịch bản cần xác minh trước khi nghiệm thu phạm vi
mới. Những hàng chưa có phép thử thực tế được ghi rõ; yêu cầu hoặc mã hiện
| thực không | được | dùng thay | kết quả thao tác. |     |     |
| ---------- | ---- | --------- | ----------------- | --- | --- |
Bảng 6.4: Kịch bản kiểm chứng native và mức bằng chứng hiện có
| Mã     | Thaotácvàkếtquảmongđợi   |     |     | Bằngchứng/trạngthái          |     |
| ------ | ------------------------ | --- | --- | ---------------------------- | --- |
| N-PRO- | Nhânsựcậpnhậttrườngđược  |     |     | Cóeditor/APItrongsource;cần  |     |
| 01     | phéphoặcgửiđềxuấtvớiminh |     |     | lognộpnativevàđốichiếudữliệu |     |
|        | chứng;HRMlưutheopolicy,  |     |     | chocácdanhmụcchọnthử.        |     |
mobiletảilại.
131

| Mã     | Thaotácvàkếtquảmongđợi     |     | Bằngchứng/trạngthái        |
| ------ | -------------------------- | --- | -------------------------- |
| N-PRO- | Gửiphảnhồi,xemlịchsử;đối   |     | Cóprovidervàmànhình;chưacó |
| 02     | chiếutrườngtrước/saucủacập |     | bằngchứngE2Eđầyđủchohai    |
nhậttrựctiếpvàyêucầu,phânbiệt thaotác.
đềxuấtđangchờvớidữliệuđãcó
hiệulực;phảnhồikhôngtựđổihồ
sơ.
N-SCH- ChuyênviênBGHcóquyềntạo Cóform/controller;APIthậtđãtạo
| 01  | trựctiếptừform;ngườitạotheo |     | lịchdemo,chưanghiệmthuform |
| --- | --------------------------- | --- | -------------------------- |
phiên,cấpTrườngởtổnghợp. bằngtàikhoảnchuyênviênBGH
thật.
| N-SCH- | Tàikhoảnthiếuquyềnkhôngthấy |     | ĐiềukiệnUI/backendđãxác     |
| ------ | --------------------------- | --- | --------------------------- |
| 02     | lựachọntrựctiếp;gọiAPIbịtừ  |     | nhậntừsource;cầnthửtàikhoản |
chối. có/thiếuquyềnởmôitrườngchốt.
N-SCH- Lưulịchrồigâylỗiupload;thửlại Cócơchếnotifier;cầnlogthiết
| 03  | khivẫnmởformgiữcùngIDvà |     | bị,IDtrước/sauvàdữliệutệpđể |
| --- | ----------------------- | --- | --------------------------- |
phầntệpđãtải. nghiệmthu.Khôngcamkếtkhôi
phụcsauđóngapp.
N-SCH- Ngườitạo/đượcmờixemlịchchờ; Testbackendmôphỏngcóbaophủ
| 04  | ngườingoàikhôngxem;mờiđích |     | quyền;cầnđốichiếutàikhoản/API |
| --- | -------------------------- | --- | ----------------------------- |
danhkhôngmởchotoànđơnvị. thậttheotừngtrườnghợp.
| N-SCH- | Lờimờisaulưu,nhậntrênthiếtbị |     | Biênbản01/10đạttrênmột     |
| ------ | ---------------------------- | --- | -------------------------- |
| 05     | vàbấmmởlịch.                 |     | Androidkhimở/chạynền;không |
chứngminhpháthànhhoặcnhận
trênmọithiếtbị.
Hồ sơ bằng chứng bổ sung cần ghi ngày, commit/bản dựng, vai trò thử, đầu
vào, kết quả mong đợi, kết quả thực tế và log/ảnh. Trước khi có dữ liệu này, mức
kết luận của các hàng còn thiếu là “đã có hiện thực, chưa kiểm chứng đầu–cuối
đầy đủ”. Kiểm tra quyền xem trước không tự cấp quyền phát hành hoặc điểm
| danh ngoài | khung giờ.   |         |           |
| ---------- | ------------ | ------- | --------- |
| 6.2.5      | Đánh giá yêu | cầu phi | chức năng |
Việcđánhgiá yêucầu phichứcnăngđược thựchiện dựatrêncác kết quả quan
sát trong quá trình kiểm thử. Do phạm vi thử nghiệm chủ yếu trên một thiết bị
Android và tập dữ liệu thử nghiệm, kết quả chỉ phản ánh các trường hợp đã thực
hiện.
132

|        | Bảng 6.5:                    | Đánh | giá yêu cầu                | phi chức năng |
| ------ | ---------------------------- | ---- | -------------------------- | ------------- |
| Yêucầu | Kếtquảghinhận                |      | Hạnchế                     |               |
| NFR-01 | Danhsáchnghỉphépvàlịchcóthể  |      | Chưakiểmtrađầyđủtrênmọi    |               |
|        | tảilạidữliệusaukhikếtnốimạng |      | mànhìnhvàtìnhhuốnglỗimạng. |               |
đượcphụchồi.
| NFR-02 | Cácbiểumẫunghỉphép,côngtác   |     | Chưathửnghiệmtrênnhiềukích   |     |
| ------ | ---------------------------- | --- | ---------------------------- | --- |
|        | vàtrạngtháixửlýhiểnthịvàthao |     | thướcthiếtbịvàchưađánhgiávới |     |
|        | tácđượctrênthiếtbịAndroidthử |     | ngườidùngthựctế.             |     |
nghiệm.
| NFR-03 | Cáctàikhoảnthửnghiệmthực   |     | Chưakiểmtratoànbộtổhợpvai |     |
| ------ | -------------------------- | --- | ------------------------- | --- |
|        | hiệnđượcthaotáctươngứngvới |     | trò,trạngtháivàquyềncủahệ |     |
|        | vaitròtrongnhữngkịchbảnđã  |     | thống.                    |     |
chọn.
| NFR-04 | Cáctrườnghợpduyệttuầntự,trả |     | Chưabảođảmtínhnhấtquánkhi |     |
| ------ | --------------------------- | --- | ------------------------- | --- |
|        | lại,từchốivàthuhồicậpnhật   |     | nhiềuyêucầunghỉphépđược   |     |
|        | đúngtrạngtháivàdữliệuliên   |     | duyệtcuốiđồngthời.        |     |
quan.
| NFR-05 | Mãnguồnđượctổchứctheonhóm  |     | Chưacóphépđođịnhlượngvề |     |
| ------ | -------------------------- | --- | ----------------------- | --- |
|        | chứcnăngvàcócácbộkiểmthửtự |     | khảnăngbảotrìvàmởrộng.  |     |
độngtươngứng.
Nhóm chưa thực hiện các phép đo định lượng về độ trễ, mức sử dụng bộ nhớ,
tốc độ khung hình hoặc thời gian khởi động. Khả năng sử dụng cũng chưa được
đánh giá thông qua khảo sát hoặc thử nghiệm với nhóm người dùng đại diện. Vì
vậy, báo cáo không đưa ra kết luận định lượng đối với các tiêu chí này.
133

Chương 7
TỔNG KẾT VÀ HƯỚNG
PHÁT TRIỂN
Chương này tổng kết kết quả thực hiện đề tài dựa trên các mục tiêu đã xác định
và kết quả đánh giá ở Chương 6. Đồng thời, chương trình bày những hạn chế
của phiên bản hiện tại và đề xuất các hướng hoàn thiện, mở rộng trong thời
gian tới.
7.1 Kết quả đạt được
Nhóm đã xây dựng ứng dụng MyHCMUT Mobile, cung cấp một kênh truy
cập trên thiết bị di động đến các chức năng quản lý hồ sơ cá nhân, nghỉ phép,
công tác, văn bản, nhiệm vụ và lịch làm việc của Nhà trường. Ứng dụng được
tổ chức theo các nhóm nghiệp vụ, hỗ trợ người dùng tra cứu thông tin, theo dõi
trạng thái xử lý và thực hiện các thao tác phù hợp với vai trò được cấp quyền.
Về mặt kỹ thuật, ứng dụng tích hợp với các hệ thống HRM, iOffice và dịch
vụ xác thực hiện hữu để khai thác dữ liệu và quy trình nghiệp vụ. Nhóm đã xây
dựng các giao diện và luồng tương tác trên thiết bị di động, bổ sung biểu mẫu
hồ sơ native với phản hồi/lịch sử và biểu mẫu tạo cuộc họp theo quyền. Chuyên
viên BGH được cấp quyền tạo trực tiếp lịch Trường ở tổng hợp, còn phát hành
chính thức tiếp tục theo iOffice. Cách tiếp cận này cho phép mở rộng kênh truy
cập đến các hệ thống đang vận hành mà không cần xây dựng lại toàn bộ chức
134

| năng nghiệp | vụ nguồn. |     |     |     |     |
| ----------- | --------- | --- | --- | --- | --- |
Kết quả kiểm thử tại Chương 6 ghi nhận khả năng thực hiện một số luồng
nghiệp vụ tiêu biểu trên thiết bị Android và kết quả kiểm tra các thành phần được
chọn bằng kiểm thử tự động. Các kết quả này xác nhận những hành vi đã được
kiểm tra trong điều kiện thử nghiệm tương ứng; chưa đủ cơ sở để kết luận mọi
| chức năng, | vai trò | và tình | huống sử dụng đều | hoạt động | đúng. |
| ---------- | ------- | ------- | ----------------- | --------- | ----- |
Nhìn chung, đề tài đã hiện thực được ứng dụng di động tích hợp các nhóm
chức năng thuộc phạm vi đặt ra, qua đó bổ sung một phương thức truy cập đến
dữ liệu và quy trình nghiệp vụ hiện hữu của Nhà trường. Tuy nhiên, do chưa thực
hiện khảo sát người dùng hoặc đánh giá so sánh trước và sau khi sử dụng, nhóm
chưa có cơ sở định lượng để kết luận về mức cải thiện thời gian xử lý hay hiệu
| quả sử | dụng khi triển | khai | thực tế. |     |     |
| ------ | -------------- | ---- | -------- | --- | --- |
| 7.2    | Hạn chế        | của  | đề tài   |     |     |
Bên cạnh các kết quả đạt được, phiên bản hiện tại còn một số hạn chế cần
| được tiếp | tục hoàn | thiện | và kiểm chứng. |     |     |
| --------- | -------- | ----- | -------------- | --- | --- |
Thứ nhất, tính nhất quán dữ liệu trong quy trình nghỉ phép chưa được bảo
đảm ở tình huống xử lý đồng thời đã thử nghiệm. Khi hai thao tác duyệt cuối
được thực hiện đồng thời, kết quả thử nghiệm ghi nhận cả hai đơn được duyệt và
số dư phép suy ra giảm xuống âm. Đây là sai lệch dữ liệu nghiệp vụ cần được xử
lý và kiểm tra lại. Kết quả duyệt tuần tự thành công chưa đủ để khẳng định quy
trình hoạt động đúng trong trường hợp nhiều yêu cầu được xử lý đồng thời.
Thứ hai, hồ sơ native chưa bao phủ toàn bộ trường và editor của HRM Web.
Mức bằng chứng E2E cho nộp minh chứng, phản hồi và lịch sử còn cần bổ sung;
kết quả của phiên bản Web trước đây không thay thế phép thử native. Luồng tạo
họp cũng cần nghiệm thu form với tài khoản chuyên viên BGH thật. Lỗi upload
có thể xảy ra sau khi mục lịch đã lưu; thử lại giữ ID trong phiên form, chưa có
bảo đảm khôi phục sau đóng app hoặc chống trùng khi POST đã commit nhưng
| mất phản | hồi. |     |     |     |     |
| -------- | ---- | --- | --- | --- | --- |
135

Thứ ba, phạm vi chức năng trên mobile chưa bao phủ toàn bộ nghiệp vụ của
các hệ thống nguồn. Ứng dụng tập trung vào những chức năng được lựa chọn
trong phạm vi đề tài, chưa đưa toàn bộ vòng đời xử lý văn bản và nhiệm vụ của
iOffice lên thiết bị di động. Một số điều kiện nghiệp vụ cũng cần được hoàn tất
trên hệ thống hiện hữu trước khi người dùng tiếp tục thao tác trên mobile, chẳng
hạn việc nộp báo cáo kết quả chuyến công tác đối với chuyến đã kết thúc trước
khi đăng ký chuyến mới theo quy tắc HRM. Phát hành lịch chính thức và toàn bộ
vòng đời nhiệm vụ chưa được chuyển lên mobile. Đây là giới hạn phạm vi tích
hợp, không đồng nghĩa với lỗi của các chức năng mobile đã được hiện thực.
Thứ tư, phạm vi kiểm thử và đánh giá còn giới hạn. Một số nhánh nghiệp vụ
và vai trò chưa được kiểm chứng đầy đủ qua giao diện mobile, trong đó có các
nhánh xử lý công tác và khách tự điểm danh. Kiểm thử tự động mới tập trung vào
những thành phần được chọn; kiểm thử trên thiết bị thật chủ yếu được thực hiện
với một điện thoại Android. Đề tài chưa kiểm chứng khả năng vận hành trên iOS,
chưa đánh giá trên nhiều cấu hình thiết bị và điều kiện mạng, đồng thời chưa thực
hiện đo lường hiệu năng định lượng hoặc khảo sát người dùng.
7.3 Hướng phát triển
Trong thời gian tới, ưu tiên trước hết là xử lý sai lệch dữ liệu đã phát hiện
trong quy trình nghỉ phép. Cần rà soát cơ chế kiểm tra và cập nhật quỹ phép khi
nhiều yêu cầu được duyệt đồng thời, bổ sung biện pháp xử lý phù hợp và thực
hiện lại kịch bản đã phát hiện sai lệch cùng các trường hợp biên liên quan.
Tiếp theo, cần mở rộng và kiểm chứng editor native theo các chính sách hồ
sơ, bổ sung log cho nộp minh chứng, phản hồi và lịch sử. Với tạo lịch, cần thử
bằng tài khoản có/thiếu quyền, kiểm tra người tạo, trạng thái tổng hợp, tài liệu,
quyền xem trước và upload lỗi/thử lại. Trường hợp mất phản hồi tạo cần được xử
lý bằng cơ chế đối chiếu hoặc idempotency phù hợp nếu mở rộng phạm vi; giao
diện phải phân biệt kết quả chưa xác định với thất bại chắc chắn.
Về phạm vi chức năng, các phiên bản tiếp theo có thể xem xét mở rộng quy
136

trình xử lý văn bản, nhiệm vụ và những nghiệp vụ hiện mới có điểm điều hướng
hoặc chưa được tích hợp đầy đủ trên mobile. Việc lựa chọn chức năng mở rộng
cần dựa trên nhu cầu thực tế của Nhà trường và khả năng tích hợp với các hệ
thống hiện hữu.
Lời mời lịch được kiểm chứng trên một Android khi app mở/chạy nền và bấm
mở Lịch biểu; chưa đủ căn cứ về iOS, nhiều thiết bị, phát hành thật hoặc giao
nhận bền vững. Cần kiểm chứng các giới hạn này trước khi đánh giá vận hành
rộng.
Cuối cùng, cần mở rộng kiểm thử đầu–cuối đối với các nhánh nghiệp vụ và
vai trò chưa được xác minh, đồng thời đánh giá ứng dụng trên nhiều thiết bị, nền
tảng và điều kiện mạng. Việc bổ sung phép đo hiệu năng và khảo sát người dùng
sẽ cung cấp cơ sở để đánh giá chất lượng và hiệu quả sử dụng của ứng dụng trong
điều kiện thực tế.
137

Tài liệu tham khảo
[1] Thủ tướng Chính phủ, Quyết định số 749/QĐ-TTg ngày 03 tháng 6 năm
2020 phê duyệt Chương trình Chuyển đổi số quốc gia đến năm 2025, định
hướng đến năm 2030, Cổng Thông tin điện tử Chính phủ, 2020. [Trực
tuyến]. Khả dụng:
https://vanban.chinhphu.vn/?pageid=27160&docid=200140.
[2] Thủ tướng Chính phủ, Quyết định số 131/QĐ-TTg ngày 25 tháng 01 năm
2022 phê duyệt Đề án Tăng cường ứng dụng công nghệ thông tin và chuyển
đổisốtronggiáodụcvàđàotạogiaiđoạn2022–2025,địnhhướngđếnnăm
2030, Cổng Thông tin điện tử Chính phủ, 2022. [Trực tuyến]. Khả dụng:
https://vanban.chinhphu.vn/?pageid=27160&docid=205244.
[3] Trường Đại học Bách khoa – ĐHQG-HCM, Báo cáo Ba công khai: Thông
tin công khai về đội ngũ giảng viên, người lao động và quy mô đào tạo,
Cổng thông tin điện tử Trường Đại học Bách khoa, 2026. [Trực tuyến]. Khả
dụng: https://hcmut.edu.vn/gioi-thieu/baocongkhai.
[4] Google, “Flutter Official Documentation”, 2026. [Trực tuyến]. Khả dụng:
https://docs.flutter.dev.
[5] Dart Team, “Dart Official Documentation”, 2026. [Trực tuyến]. Khả dụng:
https://dart.dev.
[6] R. Rousselet, “Riverpod Official Documentation”, 2026. [Trực tuyến]. Khả
dụng: https://riverpod.dev.
138

[7] Invertase, “Melos: A Tool for Managing Dart Repositories with Multiple
| Packages”, | 2026. [Trực | tuyến]. Khả | dụng: |
| ---------- | ----------- | ----------- | ----- |
https://melos.invertase.dev/getting-started.
[8] Flutter Team, “go_router: A Declarative Routing Package for Flutter”,
| 2026. [Trực | tuyến]. | Khả dụng: |     |
| ----------- | ------- | --------- | --- |
https://pub.dev/packages/go_router.
[9] Dio Project, “dio: A Powerful HTTP Networking Package for Dart/Flutter”,
| 2026. [Trực | tuyến]. | Khả dụng: https://pub.dev/packages/dio. |     |
| ----------- | ------- | --------------------------------------- | --- |
[10] R. Rousselet, “Freezed: Code Generation for Immutable Classes and
| Unions | in Dart”, 2026. | [Trực tuyến]. | Khả dụng: |
| ------ | --------------- | ------------- | --------- |
https://pub.dev/packages/freezed.
[11] Google Android Developers, “Hardware-backed Keystore and
Cryptography Architecture”, 2026. [Trực tuyến]. Khả dụng: https://
developer.android.com/privacy-and-security/keystore.
[12] Apple Developer, “Keychain Services: Secure Storage of Passwords and
Keys”, 2026. [Trực tuyến]. Khả dụng: https://developer.apple.com/
documentation/security/keychain_services.
[13] Alexandre Roux, “sqflite: SQLite Plugin for Flutter”, 2026. [Trực tuyến].
| Khả dụng: | https://pub.dev/packages/sqflite. |     |     |
| --------- | --------------------------------- | --- | --- |
[14] Flutter Team, “shared_preferences: Local Key-Value Data Storage for
| Flutter”, | 2026. [Trực | tuyến]. Khả | dụng: |
| --------- | ----------- | ----------- | ----- |
https://pub.dev/packages/shared_preferences.
[15] Google, “Material 3 Design System Guidelines and Semantic Tokens”,
| 2026. [Trực | tuyến]. | Khả dụng: https://m3.material.io. |     |
| ----------- | ------- | --------------------------------- | --- |
[16] OpenJS Foundation, “Node.js Official Documentation”, 2026. [Trực
| tuyến]. | Khả dụng: https://nodejs.org/docs. |     |     |
| ------- | ---------------------------------- | --- | --- |
139

[17] Express.js Foundation, “Express.js Official Documentation”, 2026. [Trực
| tuyến]. Khả dụng: | https://expressjs.com. |     |     |
| ----------------- | ---------------------- | --- | --- |
[18] M. Jones, J. Bradley, and N. Sakimura, “JSON Web Token (JWT),” RFC
7519, Internet Engineering Task Force (IETF), May 2015. [Trực tuyến].
| Khả dụng: https://www.rfc-editor.org/rfc/rfc7519. |     |     |     |
| ------------------------------------------------- | --- | --- | --- |
[19] Google Firebase, “Firebase Official Documentation”, 2026. [Trực tuyến].
| Khả dụng: https://firebase.google.com/docs. |     |     |     |
| ------------------------------------------- | --- | --- | --- |
[20] Socket.IO, “Socket.IO Official Documentation”, 2026. [Trực tuyến]. Khả
dụng: https://socket.io/docs/v4/.
[21] PostgreSQL Global Development Group, “PostgreSQL Official
| Documentation”, | 2026. [Trực | tuyến]. Khả | dụng: |
| --------------- | ----------- | ----------- | ----- |
https://www.postgresql.org/docs/14/.
[22] Sequelize ORM Team, “Sequelize Official Documentation”, 2026. [Trực
| tuyến]. Khả dụng: | https://sequelize.org/docs/v6/. |     |     |
| ----------------- | ------------------------------- | --- | --- |
[23] Base.vn, “Tài liệu Hướng dẫn Thiết lập Quản trị Nhân sự Base HRM và
Ứng dụng Nhân sự Cá nhân Base Me”, 2026. [Trực tuyến]. Khả dụng:
https://help.base.vn.
[24] Tanca.io, “Nền tảng Quản trị Doanh nghiệp và Ứng dụng Quản lý Nhân sự
Tanca Mobile”, 2026. [Trực tuyến]. Khả dụng: https://tanca.io.
140
