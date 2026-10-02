# HỒ SƠ TÀI KHOẢN NGHIỆP VỤ & KẾT QUẢ KIỂM THỬ CÁC QUY TRÌNH PHÊ DUYỆT

> **Cập nhật 02/10/2026:** giữ tệp này để chọn tài khoản kiểm thử theo chỉ định của người dùng. Ma trận quyền và kết quả bên dưới thuộc mốc 24/09, cần kiểm tra lại với `/api/state`. Lượt mới đổi user thành công qua UI ở cả Auth/HRM/iOffice. Tài khoản `camduylt` hiện không có `tcns:nghi_phep:read/write`, `tcns:request_ly_lich:read/write` hoặc quyền duyệt theo trường; không dùng nhãn chuyên viên TCNS để kết luận tài khoản này duyệt được các luồng đó. Các tài khoản thay thế chưa được kiểm tra lại. Quyền cá nhân hiện dùng tiền tố `cn:...`; các tên `staff:...` bên dưới không phải ma trận quyền hiện hành. Kết quả mới và các nhánh chưa chạy nằm trong [biên bản 14](14_retest_and_rewrite_gate_20261002.md).

> **Tài liệu tham chiếu nội bộ:** Phục vụ thẩm định, đối chiếu chéo kết quả kiểm thử hệ thống và làm cơ sở số liệu cho Chương 6, Chương 7 của Đồ án Tốt nghiệp.  
> **Thời điểm xác lập:** 24/09/2026. Kết quả tạo lịch Trường/điểm danh chạy mới ngày 02/10 được ghi riêng trong [biên bản 14](14_retest_and_rewrite_gate_20261002.md); câu giới hạn phạm vi tạo lịch bên dưới thuộc mốc 24/09.
> **Nguồn dữ liệu:** Cơ sở dữ liệu thử nghiệm PostgreSQL (`hcmut_hrm_release`, `tcns-dev`, `hcmut_hanh_chinh_dev`) kết hợp mã nguồn thực tế (`hrm-be`, `ioffice-be`, `myhcmut-be`, `myhcmut-mobile`).

> **Quy tắc chốt cho báo cáo:** iOffice cho phép khách ngoài danh sách phân công tự điểm danh với `assign_id = null`. `SCH-01` ngày 23/09 đã kiểm tra theo kỳ vọng cũ là phải từ chối khách; nhãn Fail của kịch bản đó được giữ như lịch sử, không dùng làm kết luận lỗi sản phẩm theo đặc tả Chương 4 đã cập nhật. Việc chuẩn bị cuộc họp thử chỉ phục vụ kiểm tra điểm danh; báo cáo không đánh giá quy trình tạo lịch.

---

## 1. MA TRẬN TÀI KHOẢN PHỤC VỤ CÁC QUY TRÌNH NGHIỆP VỤ

### 1.1. Quy trình Duyệt Nghỉ phép (`NGHI_PHEP`)

Quy trình phê duyệt động gồm 6 bước chuyển trạng thái: `NHAP (0)` $\rightarrow$ `TRUONG_DV (2)` $\rightarrow$ `CV_TCNS (3)` $\rightarrow$ `TP_TCNS (4)` $\rightarrow$ `CV_BGH (5)` $\rightarrow$ `BGH (6)` $\rightarrow$ `KET_THUC (7)`.

| Bước quy trình | Vai trò nghiệp vụ | Mã tài khoản / Username | SHCC | Họ và tên | Đơn vị công tác | Căn cứ phân quyền trong CSDL |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0. Khởi tạo (`NHAP`)** | Cán bộ lập đơn (`CB-A`) | `ngoctu1986` | `003009` | NGUYỄN THỊ NGỌC TÚ | Trạm Y tế (Mã `93`) | Quyền khởi tạo cá nhân `CN_NGHI_PHEP`, `staff:time-off:write` |
| **2. Cấp Đơn vị (`TRUONG_DV`)** | Lãnh đạo Đơn vị cơ sở | `vuthuy` *(hoặc `nldung`)* | `002985` *(hoặc `003609`)* | VŨ THỊ THÚY *(hoặc NGUYỄN LÊ DŨNG)* | Trạm Y tế (Mã `93`) | Chức vụ Trưởng trạm (`position=022`), gán `role_key='DV_NGHI_PHEP:MANAGE'` tại đơn vị `93` |
| **3. Cấp Chuyên viên TCNS (`CV_TCNS`)** | Chuyên viên P.TC-NS | `camduylt` *(hoặc `builinhthu`, `ntkmy`)* | `004294` *(hoặc `004249`, `004293`)* | LÊ THỊ CẨM DUY *(hoặc BÙI THỊ LINH THƯ, NGUYỄN THỊ KIỀU MỸ)* | Phòng Tổ chức - Cán bộ (Mã `94`) | Chức vụ Nhân sự (`position=999`), vai trò `role_key='tcns'`, đích chuyển bước `role=['999']`, `ma_don_vi=['94']` |
| **4. Cấp Lãnh đạo TCNS (`TP_TCNS`)** | Trưởng / Phó Trưởng phòng TC-NS | `cndquyen` *(hoặc `chaudn`, `tdhoc`)* | `003276` *(hoặc `003260`, `003764`)* | CHÂU NGỌC ĐỖ QUYÊN *(hoặc ĐẶNG NGUYÊN CHÂU, TRẦN ĐỨC HỌC)* | Phòng Tổ chức - Cán bộ (Mã `94`) | Chức vụ Trưởng phòng (`position=004`) / Phó Trưởng phòng (`position=005`), đích chuyển bước `role=['004', '005']`, `ma_don_vi=['94']` |
| **5. Cấp Văn phòng BGH (`CV_BGH`)** | Chuyên viên Văn phòng BGH | `ntnthu` | `003361` | NGUYỄN TRẦN NGUYỆT THU | Văn phòng Ban Giám hiệu | Được phân công `role_key='clerical-president'` tại `fw_user_role_key` |
| **6. Cấp Ban Giám hiệu (`BGH`)** | Ban Giám hiệu phê duyệt cuối | `mtphong` *(Hiệu trưởng)* / `ptvu` *(Phó Hiệu trưởng)* | `002754` / `002178` | MAI THANH PHONG / PHẠM TRẦN VŨ | Ban Giám hiệu (Mã `01`) | Chức vụ Hiệu trưởng (`position=001`) / Phó Hiệu trưởng (`position=002`), đơn vị `01` |

---

### 1.2. Quy trình Duyệt Công tác (`CONG_TAC_TN`, `CONG_TAC_NN`)

Áp dụng cho công tác trong nước và nước ngoài: `NHAP (0)` $\rightarrow$ `TRUONG_DV (2)` $\rightarrow$ `CV_TCNS (3)` $\rightarrow$ `TP_TCNS (4)` $\rightarrow$ `CV_BGH (5)` $\rightarrow$ `BGH (6)` $\rightarrow$ `KET_THUC (7)`.

| Bước quy trình | Vai trò nghiệp vụ | Mã tài khoản / Username | SHCC | Họ và tên | Đơn vị công tác | Căn cứ phân quyền trong CSDL |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0. Khởi tạo (`NHAP`)** | Cán bộ lập hồ sơ đoàn/cá nhân | `ngoctu1986` | `003009` | NGUYỄN THỊ NGỌC TÚ | Trạm Y tế (Mã `93`) | Quyền cá nhân `staff:cong-tac:read`, `staff:cong-tac:write` |
| **2. Cấp Đơn vị (`TRUONG_DV`)** | Lãnh đạo Đơn vị cơ sở | `vuthuy` *(hoặc `nldung`)* | `002985` *(hoặc `003609`)* | VŨ THỊ THÚY | Trạm Y tế (Mã `93`) | Gán `role_key='DV_DI_CONG_TAC:MANAGE'` tại đơn vị `93` (`fw_user_role_key`) |
| **3. Cấp Chuyên viên TCNS (`CV_TCNS`)** | Chuyên viên P.TC-NS | `camduylt` | `004294` | LÊ THỊ CẨM DUY | Phòng Tổ chức - Cán bộ (Mã `94`) | Thẩm định kinh phí, định mức công tác; `role=['999']`, `ma_don_vi=['94']` |
| **4. Cấp Lãnh đạo TCNS (`TP_TCNS`)** | Trưởng / Phó Trưởng phòng TC-NS | `cndquyen` / `chaudn` | `003276` / `003260` | CHÂU NGỌC ĐỖ QUYÊN | Phòng Tổ chức - Cán bộ (Mã `94`) | `position IN ('004', '005')`, duyệt tờ trình công tác |
| **5. Cấp Văn phòng BGH (`CV_BGH`)** | Chuyên viên VP BGH | `ntnthu` | `003361` | NGUYỄN TRẦN NGUYỆT THU | VP Ban Giám hiệu | `role_key='clerical-president'` rà soát trình BGH ký quyết định |
| **6. Cấp Ban Giám hiệu (`BGH`)** | Ban Giám hiệu phê duyệt cuối | `ptvu` *(Phó Hiệu trưởng phụ trách)* | `002178` | PHẠM TRẦN VŨ | Ban Giám hiệu (Mã `01`) | Ký duyệt quyết định công tác; `ma_don_vi=['01']` |

---

### 1.3. Quy trình Duyệt Thay đổi Lý lịch Viên chức (`TCNS_REQUEST_LY_LICH`)

Áp dụng cho việc gửi đề xuất thay đổi thông tin nhân sự và thẩm định từng trường dữ liệu:

| Phân hệ / Vai trò | Mã tài khoản / Username | SHCC | Họ và tên | Đơn vị | Cơ chế kiểm tra quyền hạn Backend (`hrm-be`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cán bộ đề xuất chỉnh sửa** | `ngoctu1986` | `003009` | NGUYỄN THỊ NGỌC TÚ | Trạm Y tế (Mã `93`) | Quyền cá nhân `staff:ly-lich:read`, `staff:ly-lich:write` |
| **Quản trị hệ thống (Toàn quyền duyệt)** | `admin` | `admin` | SYSTEM DEVELOPER | P. Quản trị Hệ thống | Có role `dev` $\rightarrow$ Tự động cấp quyền `developer:login`, kế thừa toàn bộ `tcns:request_ly_lich:read`, `tcns:request_ly_lich:write` và tất cả quyền `tcns:request_ly_lich:duyet:*` |
| **Chuyên viên TCNS thẩm định chuyên môn** | `camduylt` *(hoặc `builinhthu`, `ntkmy`)* | `004294` | LÊ THỊ CẨM DUY | Phòng Tổ chức - Cán bộ (Mã `94`) | Có `roleKey='tcns'` kết hợp các quyền phân công chi tiết: `tcns:request_ly_lich:duyet:thong_tin_ca_nhan`, `thong_tin_gia_dinh`, `thong_tin_dia_chi`, `qua_trinh_cong_tac`, `qua_trinh_dao_tao`, `luong_ngach_phu_cap`, `khen_thuong_ky_luat` |

---

### 1.4. Quy trình Điểm danh Cuộc họp (`IOFFICE_SCHEDULE_CHECKIN`)

Áp dụng cho phân hệ Lịch làm việc và Điểm danh cuộc họp (`POST /api/schedule/general-item/:id/checkin`):

| Nhóm đối tượng | Mã tài khoản / Username | SHCC | Họ và tên | Cuộc họp đối chứng | Kết quả kiểm thử thực tế |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Người thuộc danh sách mời (`IOF-IN`)** | `ttphuc.rectie` | `001520` | TRẦN THIÊN PHÚC | Cuộc họp `#376` (`Phòng 101`) | Nằm trong bảng `schedule_general_assign`. Trong khung thời gian cho phép: Điểm danh thành công (`200 OK`, `attended: true`, gán `assign_id` cụ thể, tạo bản ghi lịch sử) |
| **Người thuộc danh sách mời (`IOF-IN`)** | `mtphong` / `hkpha` | `002754` / `001871` | MAI THANH PHONG / HUỲNH KỲ PHƯƠNG HẠ | Cuộc họp `#375` (`SA1 Loc`) | Nằm trong danh sách mời của cuộc họp `#375`. Cho phép điểm danh hoặc báo vắng kèm lý do |
| **Khách tự điểm danh ngoài danh sách (`IOF-GUEST`)** | `ngoctu1986` | `003009` | NGUYỄN THỊ NGỌC TÚ | Cuộc họp `#378` | Không nằm trong `schedule_general_assign`. Handler và kiểm thử thành phần cho phép tự điểm danh với `assign_id = null`, nhưng lịch `#378` không hiện trong Mobile của tài khoản này; không có bản ghi điểm danh khách hay log khách cho `#378`. Xem biên bản `10_e2e_audit_20260924.md` |

---

## 2. KẾT QUẢ KIỂM THỬ THÀNH PHẦN & TÍCH HỢP (RETEST EXECUTION)

Đợt kiểm thử đối chiếu đã thực thi toàn bộ các bộ bài kiểm thử thành phần liên quan đến 4 tính năng nghiệp vụ nêu trên:

### 2.1. Bộ kiểm thử Mobile (Flutter Unit & Widget Tests)
*Đường dẫn thực thi:* `/home/xchinh/workspace/myhcmut-mobile`

| Module | Bộ kiểm thử | Số test | Kết quả | Ghi chú nghiệp vụ |
| :--- | :--- | :--- | :--- | :--- |
| **HRM - Phê duyệt Nghỉ phép** | `modules/hrm/test/approve_time_off/` | 20 bài | **20/20 PASS** | Kiểm tra toàn bộ payload phê duyệt (`ApproveReq`), từ chối (`Tu Choi`), hoàn trả (`Tra Lai`), thu hồi (`Thu Hoi`), tiếp tục duyệt (`Tiep Tuc`), duyệt hàng loạt (`batch-approval`) và cấp số quyết định (`so-quyet-dinh`) |
| **HRM - Phê duyệt Lý lịch** | `modules/hrm/test/approve_profile/` | 5 bài | **5/5 PASS** | Kiểm tra render `ReviewDiffCard`, xử lý dữ liệu trước/sau (diff model), định dạng trường dữ liệu và thẻ hành động (Add/Edit/Delete) |
| **iOffice - Điểm danh cuộc họp** | `modules/ioffice/test/schedule/` | 26 bài | **26/26 PASS** | Kiểm tra widget trạng thái điểm danh (`ATTEND`, `ABSENT`), chip tỷ lệ có mặt theo đơn vị, nút hoàn tác (`Rollback`), form nhập lý do vắng, bộ provider tải chi tiết (`/details/:id`) và Tolerant Reader cho danh sách khách ngoài danh sách (`guestAttendance`) |
| **Tổng cộng Mobile** | Toàn bộ 6 gói/module mobile ở đợt bổ sung có biên bản | **371 bài** | **371/371 PASS** | Mốc 24/09 trong `results/DATN-FIX-RECHECK-20260924/summary.md`; khác mốc `TEST-01` ngày 23/09 (370/370). Con số 373 cần log/commit riêng trước khi dùng trong báo cáo. |

### 2.2. Bộ kiểm thử Backend (Node.js / Vitest / Node Test Runner)
*Đường dẫn thực thi:* `/home/xchinh/workspace/hrm-be` & `/home/xchinh/workspace/ioffice-be`

| Phân hệ Backend | Bộ kiểm thử | Số test | Kết quả | Trọng tâm kiểm tra |
| :--- | :--- | :--- | :--- | :--- |
| **HRM Backend** | Sáu tệp Vitest được chọn ở đợt bổ sung | 59 bài | **59/59 PASS** | Mốc 24/09 trong `results/DATN-FIX-RECHECK-20260924/summary.md`; khác mốc `TEST-01` ngày 23/09 (57/57). Con số 79 cần log/commit riêng trước khi dùng trong báo cáo. |
| **iOffice Backend** | `test/schedule_meeting_checkin.test.js`, `test/incoming_document_file_access.test.js` | 4 bài | **4/4 PASS** | Kiểm tra người được mời điểm danh theo slot phân công (`assign_id`), người ngoài danh sách tự điểm danh dưới dạng khách (`assign_id = null`), kiểm tra phân quyền truy cập tệp đính kèm văn bản đến theo quyền xử lý |

### 2.3. Bộ kiểm thử End-to-End Trực tiếp trên Thiết bị Di động Thực tế (Physical Device: Realme RMX2151)
*Môi trường:* Thiết bị thực Android Realme RMX2151 (`1080 x 2400`), kết nối qua ADB (`IJROH6SCO7F6IFZ5`), phiên bản ứng dụng MyHCMUT Mobile kết nối hệ sinh thái API (`hrm-be`, `ioffice-be`).  
*Tài khoản kiểm thử chính:* `cndquyen` (SHCC `003276`, Trưởng phòng TC-NS, Mã đơn vị `94`).

| TT | Quy trình nghiệp vụ | Thao tác thực tế trên Mobile | Trạng thái CSDL Đối chiếu | Bằng chứng Ảnh chụp Màn hình | Đánh giá |
| :-: | :--- | :--- | :--- | :--- | :--- |
| **1** | **Dữ liệu cuộc họp thử** | Chuẩn bị lịch họp `#378` (*"Hop danh gia tien do DATN"*), cấp `DON_VI`, phân công `003276` chủ trì (assign `#1332`) và `004294` tham dự (assign `#1333`) | Có bản ghi trong `schedule_general_item` và `schedule_general_assign` | Dữ liệu nền cho kiểm thử điểm danh, không dùng đánh giá luồng tạo lịch | **Fixture** |
| **2** | **Điểm danh Cuộc họp (`IOF-IN`)** | Đăng nhập cán bộ được mời, mở màn chi tiết cuộc họp `#378`, bấm nút *"Điểm danh"* | CSDL bảng `schedule_meeting_attendance` lưu `item_id=378`, `assign_id=1332`, `attended=true`. UI hiện Toast *"Điểm danh thành công"*, huy hiệu cán bộ chuyển xanh | `results/DATN-FIX-RECHECK-20260924/screenshots/IOF_mobile_checkin_flow.png` | **PASS** |
| **3** | **Hoàn tác Điểm danh (Rollback)** | Bấm *"Hoàn tác điểm danh"*, hiển thị hộp thoại xác nhận cảnh báo gỡ khỏi danh sách có mặt, xác nhận hoàn tác | CSDL xóa bản ghi hoặc cập nhật trạng thái chưa điểm danh; UI hiển thị Toast xanh *"Đã hoàn tác điểm danh"*, số lượng có mặt quay về `0/2` | `results/DATN-FIX-RECHECK-20260924/screenshots/IOF_mobile_rollback_success.png` | **PASS** |
| **4** | **Báo vắng Cuộc họp** | Bấm *"Báo vắng"*, nhập lý do *"Ban hop dot xuat tai DHQG"*, bấm nút *"Gửi báo vắng"* | CSDL bảng `schedule_meeting_attendance` lưu `attended=false`, `ly_do='Ban hop dot xuat tai DHQG'`. UI cập nhật huy hiệu đỏ vắng mặt và thông báo lý do vắng | `results/DATN-FIX-RECHECK-20260924/screenshots/IOF_mobile_absence_flow.png` | **PASS** |
| **5** | **Khách ngoài Danh sách Tự điểm danh (`IOF-GUEST`)** | Tài khoản `ngoctu1986` (`003009`) không thuộc danh sách phân công cuộc họp `#378` | Chưa có bản ghi điểm danh khách cho `#378`; mobile có mô hình hiển thị nhóm Khách tham dự (`guestAttendance`) nhưng khách không nhìn thấy lịch để thao tác | Kiểm thử handler giả lập và Unit/Widget Tolerant Reader; đối chứng Android và CSDL tại `10_e2e_audit_20260924.md` | **Chưa đạt E2E mobile; lịch không hiện cho khách** |
| **6** | **Phê duyệt Nghỉ phép trên Mobile** | Mở tab **Phê duyệt $\rightarrow$ Nghỉ phép**, chọn đơn `#255` của Trần Đức Học, bấm FAB action chọn *"Duyệt"*, xác nhận duyệt | CSDL bảng `tcns_nghi_phep_dang_ky` cập nhật `id=255`, `trang_thai='DUYET'`. UI hiển thị Toast xanh *"Duyệt thành công"*, số đơn chờ duyệt giảm từ 6 xuống 5 | `results/DATN-FIX-RECHECK-20260924/screenshots/LEV_mobile_approve_success.png` | **PASS** |
| **7** | **Phê duyệt Công tác trên Mobile** | Mở tab **Phê duyệt $\rightarrow$ Công tác**, chọn đơn `#845` của Trịnh Minh Giang (cấp `LÃNH ĐẠO ĐƠN VỊ`), bấm FAB chọn *"Duyệt"*, xác nhận | CSDL bảng `tcns_dang_ky_cong_tac` cập nhật `id=845`, `trang_thai='DUYET'`, `ma_quy_trinh='KHCN'`. Tab Quy trình hiển thị Lãnh đạo đơn vị Đã duyệt (04:48 24/09), tab Lịch sử ghi nhận thao tác của Châu Ngọc Đỗ Quyên | `results/DATN-FIX-RECHECK-20260924/screenshots/BTR_mobile_approve_success.png`<br>`results/DATN-FIX-RECHECK-20260924/screenshots/BTR_mobile_approve_history.png` | **PASS** |
| **8** | **Phê duyệt Thay đổi Lý lịch trên Mobile** | Mở tab **Phê duyệt $\rightarrow$ Lý lịch**, chọn đơn `#205` của Bùi Hoài Thắng. Màn hình chi tiết hiển thị thẻ so sánh trực quan Diff: mục *Nhân thân* (*Dữ liệu trước: Chưa cập nhật* $\rightarrow$ *Đề xuất mới: Địa chủ*) kèm tệp minh chứng. Bấm nút *"Duyệt"*, xác nhận duyệt | CSDL bảng `staff_ly_lich_request` chuyển `trang_thai='DONE'`, `updated_by='003276'`; bảng `staff_ly_lich_request_detail` chuyển `trang_thai='APPROVED'`, `reviewed_by='003276'`. Danh sách chờ duyệt giảm từ 81 xuống 80, đơn `#205` chuyển sang danh mục *Hoàn tất* với nhãn xanh | `results/DATN-FIX-RECHECK-20260924/screenshots/PRO_mobile_diff_detail.png`<br>`results/DATN-FIX-RECHECK-20260924/screenshots/PRO_mobile_approve_success.png` | **PASS** |

**Đối chiếu E2E tiếp theo ngày 24/09:** Phiếu nghỉ phép `#289` và công tác `#1063` đã được duyệt tuần tự đến `KET_THUC/DUYET` trên Android. Đề xuất lý lịch `#210` được tạo qua Chrome trên cùng Android, duyệt trong Mobile và đối chiếu hồ sơ nguồn đã cập nhật; thao tác chọn tệp trong WebView vẫn làm mất biểu mẫu. Lịch `#378` không hiện cho khách không được phân công, nên chưa có E2E điểm danh khách. Xem [biên bản E2E](10_e2e_audit_20260924.md) để không nhầm kết quả một bước ở bảng trên với kết luận quy trình hoàn chỉnh.

---

## 3. TỔNG HỢP NỘI DUNG ĐỊNH HƯỚNG PHÁT TRIỂN (CHƯƠNG 7)

Căn cứ trên các hạn chế thực tế và yêu cầu phát triển tiếp nối của Nhà trường, nội dung Mục 7.3 (*Hướng phát triển*) trong tệp `Chapter7/section1.tex` đã được chuẩn hóa và mở rộng với 3 trụ cột nghiệp vụ:

1. **Hoàn thiện tính năng Giải trình (`GIAI_TRINH_NGHI_PHEP` / `DV_GIAI_TRINH`):**
   - Hỗ trợ cán bộ tạo và gửi phiếu giải trình kèm tệp minh chứng trực tiếp trên ứng dụng di động khi phát sinh: nộp đơn nghỉ phép trễ hạn so với quy định, vắng mặt không báo trước trong lịch tuần/cuộc họp, hoặc sai lệch giờ chấm công thực tế.
   - Xây dựng luồng phê duyệt giải trình chuyển tiếp đến Trưởng đơn vị (`TRUONG_DV`) và tự động đồng bộ kết quả vào bảng tổng hợp công, số dư phép cá nhân.

2. **Hoàn thiện phân hệ Văn bản đi (Outgoing Documents):**
   - Mở rộng phân hệ iOffice Mobile từ việc chỉ tiếp nhận văn bản đến sang vòng đời khép kín của văn bản đi: khởi tạo dự thảo, theo dõi tiến độ thẩm định, luân chuyển văn bản liên phòng ban.
   - Tích hợp giải pháp chữ ký số di động tập trung (HCMUT Sign / Mobile PKI), cho phép Ban Giám hiệu và Lãnh đạo đơn vị ký số phê duyệt văn bản trực tiếp trên điện thoại di động với đầy đủ giá trị pháp lý, đồng thời tự động cấp số và phát hành văn bản.

3. **Hoàn thiện phân hệ Quản lý Công trình Khoa học (Scientific Publications):**
   - Cung cấp giao diện di động thuận tiện cho giảng viên và nhà nghiên cứu trong việc kê khai danh mục bài báo khoa học (WoS/Scopus, kỷ yếu hội nghị quốc tế, tạp chí chuyên ngành trong nước).
   - Theo dõi tiến độ thực hiện và giải ngân đề tài nghiên cứu khoa học các cấp, đồng bộ dữ liệu vào hồ sơ năng lực khoa học, đồng thời tự động hóa thuật toán tính toán định mức giờ NCKH phục vụ công tác đánh giá KPI và thi đua khen thưởng hàng năm.
