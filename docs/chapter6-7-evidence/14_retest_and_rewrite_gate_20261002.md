# Kiểm thử trước khi sửa báo cáo — 02/10/2026

## 1. Nguồn sử dụng từ đợt này

Đọc tài liệu này cùng [audit 25 FR, 20 UC và 5 NFR](13_chapter4_chapter6_claim_audit_20261002.md). Log, lệnh chạy, mã kiểm tra bổ sung và manifest nằm trong [DATN-RETEST-20261002](results/DATN-RETEST-20261002/manifest.md). Đợt này chưa sửa nội dung các chương LaTeX.

Phân biệt ba mức: **có hiện thực trong source**, **đã chạy test thành phần**, **đã kiểm thử E2E trên phiên bản xác định**. Test sử dụng mock HTTP/CSDL không được nâng thành E2E. Các biên bản tháng 9 và push ngày 01/10 giữ giá trị theo mốc riêng, không cộng vào kết quả đợt này.

## 2. Kết quả chạy mới

| Bộ kiểm tra | Kết quả | Căn cứ / giới hạn |
| --- | --- | --- |
| Mobile, 8 package có thư mục test | Lượt đầu **554 đạt / 555**, 1 lỗi iOffice | HRM 323, iOffice 132 đạt/1 lỗi, notification 64, app 5, global_system 8, network 8, auth 6, localization 8. Bao gồm test WebView còn tồn tại trong HRM; không gọi cả 323 bài là kiểm thử hồ sơ native. |
| Chạy lại iOffice mobile sau 02:00 | **133/133 đạt**, cùng source, không sửa test | Không cộng vào 555 bài lượt đầu; lỗi phụ thuộc giờ vẫn tồn tại trong fixture. |
| Mobile `make analyze` | **Đạt**, 11 package không báo lỗi | Static analysis; không chứng minh nghiệp vụ hay hiệu năng. |
| HRM toàn bộ `test/unit` | **167 đạt / 184**, 17 lỗi | 1 lỗi giả định URL frontend; 16 lỗi test ngạch/bậc còn dùng API helper cũ. Giữ kết quả thất bại trong log. |
| HRM `tsc --noEmit` | **Đạt** | Cấu hình typecheck hiện tại không phát hiện toàn bộ lỗi hợp đồng trong test; không suy ra các test cũng đạt. |
| iOffice backend, 6 tệp test | **47/47 đạt** | Mock handler/model/delivery; không thay cho kiểm thử backend với CSDL và điện thoại. |
| Kiểm tra bổ sung các claim | Mobile **7/7**, HRM handler **1/1**, iOffice **2/2** tái hiện hành vi | Đây là kiểm tra mô tả hiện trạng; một số kết quả chứng minh giới hạn/rủi ro. PASS ở đây không có nghĩa yêu cầu tương ứng đã đạt. |
| Stored procedure HRM đang triển khai | **Gọi 2 lần → 2 dòng nghỉ phép / 1 đơn** trong bảng TEMP | Dùng hàm thật, dữ liệu seed đọc từ tài khoản được cho phép trong tệp 09, bảng chỉ tồn tại trong phiên; đã rollback. Không phải E2E mobile hoặc thử race HTTP với bảng public. |
| iOffice API đọc, không có phiên | **3/3 trả HTTP 401** | Lịch tổng hợp, chi tiết lịch, phiếu giải quyết. Chỉ xác nhận ba request vô danh bị từ chối; chưa kiểm tra người đã đăng nhập nhưng sai quyền nghiệp vụ. |
| Build và chuẩn bị E2E mới | **APK debug dựng/cài thành công**, Auth/HRM đã khởi động | `make run-dev`, SHA-256 trong manifest; dùng `IS_SERVICE=false` để tắt consumer/job service HRM. Người dùng xác nhận dùng tài khoản trong tệp 09. |
| Phiên/đổi user trên mobile | **7 tài khoản xác nhận đúng ở cả ba backend**, đã trả về admin | CB-A, DV-A, CV-TCNS, TP-TCNS, CV-BGH, BGH-A, ADMIN; [state sau đổi user](results/DATN-RETEST-20261002/ui-role-switches.json). Phép thử phiên trước đây gửi nhầm `access|||refresh`, đã [đính chính](results/DATN-RETEST-20261002/session-correction.json). Không phải kiểm thử toàn bộ quyền của từng actor. |
| Hồ sơ native, đọc và phản hồi thiếu tệp | **Quan sát đúng nhánh đọc/validation** | Mở hồ sơ, hai tab lịch sử và menu sửa; policy backend trả direct/request theo trường. Phản hồi có nội dung nhưng thiếu tệp giữ ở form, không thêm request/log. [E-PRO-READ-VALIDATION-01](results/DATN-RETEST-20261002/e2e-profile-read-validation.json). Chưa ghi/duyệt thay đổi hồ sơ. |
| Nghỉ phép native, vòng đời nháp | **Đạt nhánh đã chạy** | Tạo nháp #320 → thoát → mở lại → bổ sung thông tin/lưu nháp → xóa. API khôi phục số đơn ban đầu; các bảng liên quan không còn fixture. [E-LEV-DRAFT-01](results/DATN-RETEST-20261002/e2e-leave-draft.json). Chưa gửi/duyệt trong case này. |
| Công tác native, nháp và validation | **Đạt nhánh đã chạy** | Tạo nháp #1083 ngày 30/10 → thiếu địa điểm bị chặn ở bước 2 → thoát/mở lại → xóa. API khôi phục tập ID ban đầu; DB liên quan không còn fixture. [E-BTR-DRAFT-01](results/DATN-RETEST-20261002/e2e-trip-draft.json). Chưa lưu đủ 5 bước/gửi/duyệt. |
| Form lịch cấp Trường native, dữ liệu không hợp lệ | **Đã quan sát validation** | Tiêu đề rỗng bị chặn tại client. Có tiêu đề nhưng thiếu thành phần bắt buộc → 2 request HTTP 400, không lưu dòng lịch; lỗi API chỉ ghi “An error occurred”. [E-SCH-INVALID-01](results/DATN-RETEST-20261002/e2e-school-validation.json). Ca này không chạy nhánh tạo hợp lệ. |
| Tạo lịch Trường và điểm danh — lượt tiếp theo | **9 ca đạt, 2 ca ghi nhận hành vi/giới hạn**, phân biệt UI/API | Mobile tạo #387 → `TRUONG/TONG_HOP`, người tạo từ phiên, thành phần BGH; UI ghi “Chưa phát hành”. Creator ngoài phân công điểm danh guest; người được mời điểm danh đúng assign; hoàn tác/báo vắng/đổi sang có mặt qua UI. API từ chối trùng/sớm/hết ngày/lịch đã xóa. [11 ca và snapshot DB](results/DATN-RETEST-20261002/e2e-school-create-attendance.json), [ảnh lịch mới](results/DATN-RETEST-20261002/schedule-created-native.png). Không gọi cả 11 ca là E2E mobile. |

### Lỗi mobile phụ thuộc giờ chạy

Test `keeps left border color as eventColor even when event is ended` tạo sự kiện từ `now - 4 giờ` đến `now - 2 giờ`, nhưng widget mặc định chọn hôm nay. Lượt đầu chạy khoảng 01:54 nên sự kiện đã kết thúc hôm qua, bị bộ lọc ngày loại bỏ. Lượt chạy riêng sau 02:00 đạt vì khoảng sự kiện đã chạm ngày hiện tại. Kiểm tra M05 dùng mốc 00:30 cố định tái hiện việc loại sự kiện hôm qua. Đây là fixture không ổn định theo giờ; không sửa ứng dụng hoặc đổi kết quả lượt đầu thành đạt. Xem log lượt chạy riêng và lượt chạy lại iOffice trong manifest.

### Lỗi HRM cần phân loại trước khi sửa

- 1 test SSO Phase 0 yêu cầu chuỗi `APP_API_URL = http://localhost:3001`; cấu hình frontend hiện dùng địa chỉ LAN và nội suy cổng. Đây là kỳ vọng cấu hình cũ, chưa phải bằng chứng mạng frontend hỏng.
- 13 lỗi ngạch/bậc gọi `validateBacInsideNgach` không còn được export; 3 lỗi gọi `validateNgachRow` bằng chữ ký 5 tham số trong khi source hiện nhận `(ngayVaoNgach, ngayKetThuc, now)`. Tham số `bac=1` bị hiểu thành `now=1`, nên báo ngày tương lai. Không sửa luật ngạch/bậc chỉ để làm các test cũ đạt.

## 3. Quyết định nội dung theo bằng chứng

| Phạm vi | Đã xác định | Khi sửa báo cáo |
| --- | --- | --- |
| Actor, policy, authorization | 7 tài khoản đổi qua UI và state ba domain khớp; tên vai trò trong tệp 09 không bảo đảm quyền hiện tại. CV-TCNS được thử thiếu quyền duyệt hồ sơ/nghỉ phép. Route đổi user của Auth chỉ dùng `JWT.authenticate`, chưa có guard admin tại route; thực tế đổi từ CB-A về admin được. | Giữ ranh giới client/backend; không tuyên bố ma trận quyền đã E2E toàn bộ hoặc chức năng đổi user được giới hạn cho admin. NFR phải ghi rõ phạm vi công cụ đổi user đang dùng trong môi trường này. |
| Hồ sơ — FR-PRO-01..05 / UC-PRO-01..05 | Test HRM mobile đạt; M03 và UI mới xác nhận thiếu minh chứng không gửi phản hồi. Đã mở hồ sơ/hai tab lịch sử thật và đọc policy, request/log không đổi. | Giữ direct/request và lịch sử; sửa UC-PRO-04 thành bắt buộc minh chứng. Ghi riêng nhánh đọc/validation đã chạy; submit/duyệt và lịch sử before/after mới chưa chạy. |
| Nghỉ phép — FR-LEV-01..04 / UC-LEV-01..03 | UI thật xác nhận nháp còn trong DB sau thoát, mở lại/lưu/xóa được; nháp ban đầu hiển thị số ngày `null`. H01/H02 tái hiện xử lý lặp; metadata public không có UNIQUE `phieu_id`. | Bỏ claim kiểm soát tương tranh; sửa mô tả thoát wizard. Ghi nháp là nhánh E2E đã chạy; gửi/duyệt/race HTTP vẫn chưa chạy trong đợt này. |
| Công tác — FR-BTR-01..05 / UC-BT-01..05 | UI thật xác nhận tạo/thoát/mở lại/xóa nháp trong nước; thiếu địa điểm bị chặn ở bước 2. Workflow/provider test đã chạy; bằng chứng các nhánh duyệt khác thuộc mốc cũ. | Giữ requirement và trạng thái `NHAP`, `TRA_LAI`, `THU_HOI`; không gọi ca nháp là nghiệm thu đầy đủ form/gửi/duyệt. |
| Văn bản — FR-IOFF-01..04 / UC-OFF-01..04 | Native có AssignmentCard và POST/PUT PGQ; test iOffice mobile bao gồm thao tác chỉ đạo/phân công. I02 cho thấy handler tạo PGQ không tự kiểm tra quyền theo văn bản hay tư cách người nhận; middleware/CSDL đã được mock. | **Giữ FR-IOFF-02**, ghi đúng phạm vi phân công văn bản. Không gộp thành tạo nhiệm vụ độc lập hoặc tuyên bố backend đã kiểm tra đầy đủ quyền đối tượng. |
| Lịch, điểm danh — FR-SCH-01 / UC-SCH-01 | UI thật đã kiểm tra creator guest, người được mời, hoàn tác, báo vắng và đổi sang có mặt. API thật từ chối trùng/sớm/hết ngày/lịch bị xóa. CV-TCNS khác đơn vị, không được mời: detail HTTP 400 nhưng checkin HTTP 200 ghi guest. CB-A cùng đơn vị creator: detail HTTP 200, relative list không có lịch, API checkin ghi guest. | Giữ nghiệp vụ khách và cửa sổ thời gian. Không thêm claim backend kiểm tra quyền xem trước checkin; giới hạn này đã có bằng chứng HTTP/DB thật. Native guest được chứng minh cho **creator**, không suy ra mọi khách đều mở được lịch trên UI. Thẻ thống kê đếm slot phân công, không cộng guest thành tổng người có mặt. |
| Lịch tổng hợp — FR-SCH-02,05,06 / UC-SCH-02 | M01: iOffice lỗi thì dừng trước HRM. M02: nguồn HRM lỗi bị bỏ qua. M06: HTTP 200 + `errorCode=4001` đi qua interceptor và thành lịch rỗng; ảnh APK mới hiện “Không có sự kiện nào”, nhưng phép kiểm tra phiên cũ gửi sai credential nên không dùng ảnh đó làm bằng chứng lỗi xác thực trên APK. Source chưa có lọc bật/tắt nguồn lịch. | Không dùng màn trống làm bằng chứng lịch tải thành công. Đổi “toàn diện”; ghi giới hạn lỗi từng nguồn và lỗi envelope xác thực. Nhánh lọc nguồn chưa hiện thực. |
| Tạo lịch — FR-SCH-03,04,07 / UC-SCH-03 | UI thật đã tạo hợp lệ #387 với BGH-A chủ trì, creator CV-BGH và đơn vị creator lấy từ phiên là `93`; DB `TRUONG/TONG_HOP`, cả creator/người được mời mở từ Lịch biểu được. Ca thiếu thành phần vẫn bị từ chối; điều kiện `01/87/14` cần nêu rõ. Push 01/10 là kết quả riêng. | Ghi nhánh tạo trực tiếp Trường/hiển thị pending/điều hướng vào chi tiết đã E2E. Giữ chưa phát hành và upload riêng. Upload/retry, công bố chính thức và giao push ở ca mới chưa được kiểm chứng. Không lấy đơn vị đầu tiên trong kết quả tìm nhân sự làm đơn vị creator của phiên. |
| NFR-01..05 | Có test thành phần và static analysis; không benchmark, usability study hay maintainability metrics. | Viết ở mức yêu cầu/mục tiêu thiết kế. Kết quả đạt chỉ giới hạn trong phép kiểm tra được dẫn. |

## 4. Các nhánh E2E còn cần thực hiện

Mỗi hàng ghi riêng `Implemented / Component-tested / E2E-tested`; nhánh chưa chạy giữ **Not run**, không lấy số test của package để điền Pass.

| Mã đợt mới | Nhánh cần kiểm tra | Bằng chứng tối thiểu |
| --- | --- | --- |
| E-PRO | Cập nhật trực tiếp, đề xuất cần duyệt, phản hồi có tệp, duyệt, xem before/after mới | Đọc/validation thiếu tệp đã chạy; các nhánh ghi cần API/DB trước–sau và dọn fixture |
| E-LEV | Gửi; trả lại→gửi lại; từ chối; duyệt đồng thời cùng đơn và hai đơn chung số dư | Nháp→thoát→mở lại→lưu→xóa đã chạy. Tương tranh cần dữ liệu cô lập và kiểm tra procedure/constraint |
| E-BTR | Lưu đủ 5 bước/gửi/sửa; trả lại/từ chối/thu hồi; nước ngoài và các vai trò liên quan | Tạo/thoát/mở lại/xóa nháp trong nước và thiếu địa điểm đã chạy; nhánh còn lại ghi API/DB trước–sau |
| E-OFF | Tạo/sửa PGQ đúng quyền, tài khoản chỉ có quyền đọc, người nhận không hợp lệ, tiếp nhận khác hoàn thành | UI + API + DB; fixture không gửi thông báo cho người thật |
| E-SCH | Upload lỗi/thử lại, công bố chính thức; điều hướng mobile cho khách không được mời; chốt policy quyền xem/ghi điểm danh | Trường trực tiếp/pending, creator guest, người được mời, báo vắng/hoàn tác đã chạy qua UI. Sớm/hết ngày/trùng/lịch bị xóa đã chạy API; chưa kiểm tra sát biên ±1 ms. Các mode tạo đơn vị/phiếu đăng ký chưa được nghiệm thu ở ca mới. |
| E-CAL | Ba nguồn, lỗi riêng từng nguồn, điều hướng cả ba loại | UI + request quan sát được; không mặc định thiếu lịch HRM là “không có lịch” |

Người dùng đã xác nhận dùng tài khoản trong [tệp 09](09_workflow_accounts_and_retest_evidence.md) và cho phép đổi qua lại từ phiên đang đăng nhập. Đã trả điện thoại về admin, xác nhận state cả ba backend. Hai nháp nghỉ phép/công tác đã xóa; API/DB không còn fixture. Lịch hợp lệ #387 đã **soft delete** theo API, không còn dòng attendance; assign/history giữ theo cơ chế xóa mềm. Ca thời gian chỉ đổi tạm giờ của #387 và đã khôi phục trước khi dọn. Không duyệt/sửa dữ liệu có sẵn; lịch mới dùng BGH-A trong danh sách tài khoản test và đi qua nhánh lời mời sẵn có, chưa xác nhận giao push. Screenshot/response có thông tin cá nhân giữ ngoài repository. Các nhánh còn lại ở bảng trên vẫn **Not run tại đợt mới**.

## 5. Phạm vi chỉnh sửa các chương sau kiểm thử

- **Chương 4:** giữ 4.1→4.2→4.3→4.4; sửa các claim ở bảng trên; giữ nghiệp vụ hồ sơ và các UC/hình chính. Cắt phần dẫn lặp bảng; mục tiêu giảm 5–8 trang chỉ xác nhận sau render.
- **Chương 5:** đồng bộ điều kiện/state/quyền, lỗi từng phần của lịch và giới hạn tương tranh theo source. Không bổ sung cơ chế khóa, kiểm tra quyền hay retry chưa hiện thực.
- **Chương 6:** dùng kết quả đợt này với manifest riêng; ghi cả lỗi test cũ, giới hạn mô phỏng và E2E chưa chạy; giữ kết quả lịch sử theo đúng ngày/commit.
- **Chương 7:** kết luận không rộng hơn Chương 6; đưa các khoảng trống E2E, phân quyền theo đối tượng, lỗi nguồn lịch và tương tranh vào hạn chế/hướng hoàn thiện.
- **Chương 1–3, tóm tắt:** chỉ đồng bộ phạm vi/đóng góp đã chốt sau đó; không tự mở rộng scope.

## 6. Tài liệu cũ đã dọn

Đã xoá **20 tệp không có thay đổi cục bộ**: 6 bản thảo/đánh giá `07`–`11` (kể cả `09B`), 12 kế hoạch/spec tháng 9 đã được thay thế và 2 đặc tả Chương 4 không được `\input`. Danh sách và SHA-256 nằm trong [cleanup.json](results/DATN-RETEST-20261002/cleanup.json). Các bản cũ phục hồi được từ Git; bản sao đúng lúc dọn nằm ngoài repository tại `/tmp/datn-retest-20261002/deleted-docs-backup.tar.gz`.

Giữ các requirement pack còn cần đối chiếu, schema/DBML, audit hiện hành và biên bản/log/ảnh theo ngày. `01`–`04` trong thư mục evidence vẫn lưu các giai đoạn cũ và được đánh dấu lịch sử; **không dùng chúng làm kế hoạch kiểm thử hiện hành**. Điểm vào hiện hành là tài liệu này và audit `13`.
