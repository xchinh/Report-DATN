# KẾ HOẠCH THỰC HIỆN KIỂM THỬ CHƯƠNG 6–7

## 1. Mục tiêu và phạm vi

### 1.1. Mục tiêu

Kế hoạch này chuyển 51 khoảng trống bằng chứng trong `03_proposed_test_backlog.md` thành 21 kịch bản có thể thực hiện và tái lập. Kết quả của đợt kiểm thử sẽ được dùng để cập nhật ma trận bằng chứng trước khi chốt Chương 6–7; không dùng số lượng test để thay thế đánh giá theo hành vi.

Tài liệu chỉ là **kế hoạch chờ phê duyệt**. Việc tạo tệp này không cho phép viết test, chạy test, sửa dữ liệu staging hoặc sửa LaTeX.

### 1.2. Phạm vi xác minh

- Luồng trọng tâm: cập nhật và thẩm định hồ sơ; tạo, thu hồi, nộp lại và xử lý đơn nghỉ phép; tạo, thu hồi, nộp lại và phê duyệt hồ sơ công tác.
- Ranh giới tích hợp: đăng nhập và phiên JWT, vé SSO một lần sang Web HRM, truy cập tệp iOffice, điểm danh lịch họp và lỗi tải lịch.
- Yêu cầu phi chức năng có khoảng trống: timeout/lỗi mạng, phân quyền backend, tính nhất quán giao diện đại diện và khả năng tái lập các bộ test hiện có.
- Không bổ sung yêu cầu mới, benchmark FPS/RAM/latency, kiểm thử tải lớn hoặc kiểm toán bảo mật toàn diện.

### 1.3. Nguyên tắc kết luận

- Ảnh giao diện chỉ chứng minh trạng thái hiển thị tại thời điểm chụp.
- Mã test tồn tại không đồng nghĩa test đã chạy hoặc Pass.
- Kịch bản Pass chỉ chứng minh các nhánh đã thực hiện trên phiên bản và môi trường được ghi nhận.
- Fail, Blocked, Not Run hoặc Invalid ở kịch bản tối thiểu phải được phản ánh thành giới hạn tương ứng trong Chương 6–7.

## 2. Căn cứ lựa chọn

### 2.1. Nguồn và quy tắc hợp nhất

- Nguồn yêu cầu: Chương 1 và Chương 4 hiện hành.
- Nguồn khoảng trống: `02_test_evidence_gap_matrix.md`.
- Nguồn ưu tiên: 51 hàng mang quyết định **Cần bổ sung** trong `03_proposed_test_backlog.md`, gồm 31 P0, 12 P1 và 8 P2.
- Các hành vi cùng một luồng, dùng chung tiền điều kiện và dữ liệu được hợp nhất vào một kịch bản. Một kịch bản có nhiều nhánh kiểm tra nhưng không tạo thêm UC/FR.
- P0 và P1 thuộc bộ tối thiểu. P2 chỉ bắt buộc khi đã được hợp nhất tự nhiên vào kịch bản tối thiểu; ba kịch bản P2 độc lập có thể hoãn.

### 2.2. Bộ tối thiểu theo nghiệp vụ

| Nhóm | Kịch bản tối thiểu | Điều kiện để được kết luận “hoạt động đúng trong phạm vi đã kiểm thử” |
| --- | --- | --- |
| Xác thực và phân quyền | AUTH-01, AUTH-02 | Cả hai Pass; có bằng chứng backend từ chối request trái quyền, không chỉ ẩn nút ở client |
| Hồ sơ nhân sự | PRO-01, PRO-02 | Luồng WebView/SSO, chính sách cập nhật và xử lý đề xuất đều Pass |
| Nghỉ phép | LEV-01 đến LEV-05 | Các chuyển trạng thái, hủy nháp, lý do từ chối và số dư cuối đều Pass |
| Đi công tác | BTR-01 đến BTR-03 | Wizard/validation, thu hồi/nộp lại và luân chuyển phê duyệt đều Pass |
| Văn bản iOffice | OFF-01, OFF-02 | Backend chặn trái quyền và người có quyền mở được tệp theo cơ chế thực tế |
| Lịch và điểm danh | SCH-01, SCH-02 | Người ngoài danh sách bị chặn; lỗi tải lịch được báo và có thể thử lại |
| Yêu cầu phi chức năng | NET-01, TEST-01 | Xử lý timeout được xác minh; kết quả chạy bộ test hiện có có log gắn commit |

BTR-04, OFF-03 và UI-01 là kịch bản P2 độc lập. Không chạy chúng không làm biến mất khoảng trống; báo cáo phải ghi rõ chưa xác minh trong đợt này.

## 3. Phiên bản và môi trường

### 3.1. Snapshot mã nguồn bắt buộc

| Thành phần | Commit khóa | Vai trò trong đợt kiểm thử |
| --- | --- | --- |
| Báo cáo | `efdb3a18c3920fddabbe42bb9b2ebce90fe9d3c3` | Mốc phê duyệt Stage A và lập kế hoạch Stage B |
| `myhcmut-mobile` | `4fe5d9c` | Ứng dụng Flutter, widget/provider và client tích hợp |
| `hrm-be` | `87e17bcd` | Snapshot thực thi HRM; commit này kế thừa baseline nghiệp vụ `38745a26` và bổ sung endpoint vé SSO |
| `hrm-fe` | `83caf648` | Giao diện Web HRM cập nhật hồ sơ |
| `ioffice-be` | `53f069a3` | API văn bản, lịch và điểm danh |

Không dùng HEAD hiện tại thay cho commit khóa. Trước khi chạy phải tạo worktree sạch hoặc checkout detached tại đúng commit và lưu `git rev-parse HEAD`, `git status --short` vào metadata. Nếu không dựng được đúng snapshot, kịch bản liên quan là **Blocked**, không tự đổi commit.

### 3.2. Runtime và dịch vụ

| Thành phần | Giá trị phải dùng hoặc ghi nhận |
| --- | --- |
| Flutter / Dart | Flutter `3.41.5`, Dart `3.11.3` cho snapshot mobile |
| Node / test runner HRM | Node `22`; Vitest `4.1.10` đối với các suite đã kiểm kê |
| PostgreSQL, Redis và dịch vụ lưu tệp | Ghi phiên bản thực tế trước khi chạy; không suy đoán từ tài liệu cũ |
| Staging | URL, build ID và cấu hình feature flag phải được ghi trong run manifest; không ghi secret |
| Thiết bị | Tối thiểu một thiết bị Android thật cho bộ tối thiểu; PRO-01 và OFF-02 cần chạy thêm trên iOS nếu Chương 6 muốn kết luận áp dụng cho cả hai nền tảng |
| Kết nối | Ghi Wi-Fi/di động, proxy mô phỏng lỗi nếu có và múi giờ `Asia/Ho_Chi_Minh` |

### 3.3. Cổng sẵn sàng trước khi chạy

Chỉ bắt đầu Stage C khi toàn bộ mục sau được xác nhận:

1. Các commit khóa có thể truy xuất và worktree không có thay đổi ngoài test đã được duyệt.
2. Có tài khoản thử nghiệm hợp lệ cho từng vai trò, không dùng tài khoản cá nhân thật ngoài phạm vi cho phép.
3. Có CSDL/staging dành cho kiểm thử và quyền khôi phục dữ liệu.
4. Redis, dịch vụ tệp, Auth, HRM và iOffice cần cho kịch bản tương ứng hoạt động.
5. Đồng hồ hệ thống giữa các dịch vụ đủ nhất quán để đối chiếu log.
6. Người dùng đã duyệt tài liệu này và vị trí lưu bằng chứng.

## 4. Dữ liệu và tài khoản thử nghiệm

### 4.1. Bí danh vai trò

| Bí danh | Quyền cần có | Dùng cho |
| --- | --- | --- |
| `CB-A` | Cán bộ tạo và quản lý hồ sơ của chính mình | PRO-01, LEV-*, BTR-* |
| `CB-B` | Cán bộ khác, không có quyền duyệt hoặc truy cập dữ liệu của `CB-A` | AUTH-02, OFF-01 |
| `TCCB-A` | Chuyên viên TCCB được phân công | PRO-02, LEV-*, BTR-* |
| `LD-DV-A` | Lãnh đạo đơn vị/cấp duyệt đơn vị | LEV-04, BTR-03 |
| `BGH-A` | Cấp phê duyệt cuối cho luồng có yêu cầu | BTR-03 |
| `IOF-IN` | Người nằm trong danh sách mời và có quyền xem văn bản mẫu | OFF-02, SCH-* |
| `IOF-OUT` | Người không được mời/không có quyền xem văn bản mẫu | OFF-01, SCH-01 |

Danh tính thật, mật khẩu, JWT, cookie và token FCM không được ghi trong tài liệu hoặc artifact. Bảng ánh xạ bí danh sang tài khoản được lưu ở nơi kiểm soát truy cập do người phụ trách kiểm thử quản lý.

### 4.2. Quy tắc tạo và cô lập dữ liệu

- Mã lần chạy: `DATN-<SCENARIO>-<YYYYMMDD-HHMM>-<SEQ>`; đưa mã này vào lý do/mô tả của bản ghi tổng hợp khi trường dữ liệu cho phép.
- Chỉ dùng dữ liệu giả, tệp PDF nhỏ không chứa thông tin cá nhân và ngày kiểm thử nằm ngoài dữ liệu nghiệp vụ thật.
- Mỗi kịch bản ghi snapshot trước/sau: ID bản ghi, trạng thái, người xử lý, thời điểm và các trường được khẳng định; che dữ liệu định danh khi lưu bằng chứng.
- Kịch bản thay đổi dữ liệu phải có một trong ba cách khôi phục đã được người quản trị chấp thuận: rollback transaction test; API xóa/hủy chính thức; hoặc script fixture tái tạo dữ liệu. Không xóa trực tiếp dữ liệu ngoài tập bản ghi có run ID.
- Nếu không thể cô lập hoặc khôi phục an toàn, đánh dấu Blocked và dừng kịch bản thay vì chạy trên dữ liệu thật.

### 4.3. Bộ fixture tối thiểu

| Mã | Trạng thái ban đầu | Trạng thái mong đợi / cách khôi phục |
| --- | --- | --- |
| `PRO-DIRECT` | Trường hồ sơ được cấu hình cập nhật trực tiếp | Giá trị đổi và được trả về khi đọc lại; khôi phục giá trị cũ |
| `PRO-REVIEW` | Trường cần thẩm định, có PDF minh chứng giả | Tạo đề xuất chờ xử lý; sau PRO-02 khôi phục dữ liệu hồ sơ và đóng/xóa đề xuất bằng cơ chế test |
| `LEV-PENDING` | Đơn của `CB-A` đang chờ duyệt, chưa bị xử lý | Dùng cho thu hồi/từ chối; tái tạo fixture sau mỗi nhánh |
| `LEV-RETURNED` | Đơn của `CB-A` bị trả lại | Nộp lại thành chờ duyệt; hủy bản ghi test sau chạy |
| `LEV-BALANCE` | Số dư nhỏ hơn tổng số ngày của hai đơn chờ duyệt cuối | Số dư cuối không âm và khớp đơn được duyệt; phục hồi snapshot số dư |
| `BTR-DOMESTIC` | Hồ sơ trong nước chờ duyệt | Luân chuyển Lãnh đạo đơn vị → TCCB |
| `BTR-FOREIGN` | Hồ sơ nước ngoài có/không có minh chứng theo từng nhánh | Luân chuyển thêm BGH; bản thiếu minh chứng không được nộp |
| `DOC-ALLOWED` / `DOC-DENIED` | Một tệp người thử được phép xem và một tệp không được phép xem | Không thay đổi dữ liệu; chỉ lưu mã phản hồi và hành vi client |
| `MEETING-IN` / `MEETING-OUT` | Cuộc họp trong khung điểm danh; một người được mời, một người không được mời | `IOF-OUT` không tạo bản ghi điểm danh; xóa/rollback bản ghi của `IOF-IN` nếu phát sinh |

## 5. Danh sách kịch bản

| Mã | Ưu tiên | Hành vi truy vết từ `02`/`03` | Hình thức | Bộ tối thiểu |
| --- | --- | --- | --- | --- |
| AUTH-01 | P0/P1 | NFR-03-B01, NFR-03-B02 | Integration mobile–API | Có |
| AUTH-02 | P0 | NFR-03-B03 | API authorization | Có |
| PRO-01 | P0/P1 | FR-PRO-02-B01, FR-PRO-02-B02, UC-PRO-02-B01, UC-PRO-02-B02, UC-PRO-02-B03 | Thủ công đầu–cuối + API | Có |
| PRO-02 | P0 | FR-PRO-03-B02, UC-PRO-03-B02, UC-PRO-03-B03 | API/integration | Có |
| LEV-01 | P0/P2 | FR-LEV-02-B01, UC-LEV-02-B02, UC-LEV-02-B03 | Widget/provider + integration | Có |
| LEV-02 | P0 | FR-LEV-03-B03, UC-LEV-02-B04 | Integration | Có |
| LEV-03 | P0 | FR-LEV-03-B01, FR-LEV-03-B02, UC-LEV-01-B02, UC-LEV-01-B03 | Mobile–API integration | Có |
| LEV-04 | P0 | UC-LEV-03-B05 | Widget + API | Có |
| LEV-05 | P0 | FR-LEV-04-B03 | Concurrency integration | Có |
| BTR-01 | P0/P1/P2 | FR-BTR-02-B01, FR-BTR-02-B02, FR-BTR-02-B03, UC-BTR-02-B01, UC-BTR-02-B02, UC-BTR-02-B03, UC-BTR-02-B04, UC-BTR-02-B05 | Widget/provider + integration | Có |
| BTR-02 | P0 | FR-BTR-03-B01, FR-BTR-03-B02, UC-BTR-01-B02, UC-BTR-01-B03 | Mobile–API integration | Có |
| BTR-03 | P0 | FR-BTR-04-B01, FR-BTR-04-B02, UC-BTR-03-B02, UC-BTR-03-B03, UC-BTR-03-B04 | API/integration | Có |
| BTR-04 | P2 | FR-BTR-01-B01, FR-BTR-01-B02 | Widget/provider | Không |
| OFF-01 | P0 | UC-OFF-01-B05 | API authorization + client | Có |
| OFF-02 | P1 | FR-OFF-01-B03, UC-OFF-01-B04 | Thủ công đầu–cuối | Có |
| OFF-03 | P2 | FR-OFF-01-B01, UC-OFF-01-B01 | Widget/provider + API | Không |
| SCH-01 | P0 | UC-SCH-01-B05 | API authorization | Có |
| SCH-02 | P1 | FR-SCH-02-B04 | Widget/provider + lỗi tích hợp có kiểm soát | Có |
| NET-01 | P1 | NFR-01-B01 | Integration với lỗi mạng có kiểm soát | Có |
| UI-01 | P2 | NFR-02-B01 | Static UI audit + widget khi cần | Không |
| TEST-01 | P1 | NFR-05-B03 | Tái chạy bộ test hiện có | Có |

## 6. Đặc tả từng kịch bản

### AUTH-01 — Đăng nhập, gắn token và xử lý phiên không hợp lệ

- **Tiền điều kiện:** build mobile `4fe5d9c`; Auth/HRM/iOffice sẵn sàng; `CB-A` hợp lệ; công cụ proxy/log đã che header bí mật.
- **Dữ liệu:** một API đọc HRM và một API đọc iOffice mà `CB-A` được phép gọi.
- **Các bước:** (1) đăng xuất/xóa phiên thử nghiệm; xác nhận chức năng nghiệp vụ không truy cập được; (2) đăng nhập bằng `CB-A`; (3) gọi hai API qua ứng dụng; (4) làm token truy cập hết hạn hoặc dùng token test không hợp lệ theo cách được quản trị cho phép; (5) gọi lại API và quan sát xử lý phiên.
- **Mong đợi:** chưa đăng nhập bị chặn; sau đăng nhập cả hai client gửi Bearer token qua cơ chế dùng chung; khi nhận 401, `MultiDomainAuthInterceptor` xóa token của `domainKey` và chuyển tiếp lỗi; request sau đó không tiếp tục dùng token đã bị loại bỏ. Artifact phải được redaction, không chứa token.
- **Xác minh/bằng chứng:** log request đã redaction, ảnh trạng thái ứng dụng, response code và metadata commit/build. Không chụp token.
- **Khôi phục:** đăng xuất và thu hồi phiên test.

### AUTH-02 — Backend từ chối thao tác trái quyền

- **Tiền điều kiện:** `CB-B` đăng nhập hợp lệ nhưng không có quyền duyệt; có bản ghi test chờ xử lý của `CB-A`.
- **Các bước:** (1) gửi trực tiếp request duyệt một đề xuất hồ sơ hoặc hồ sơ nghiệp vụ bằng token `CB-B`; (2) đọc lại bản ghi bằng tài khoản có quyền; (3) lặp lại với `TCCB-A` trên một fixture tương đương để chứng minh tiền điều kiện endpoint hợp lệ.
- **Mong đợi:** request của `CB-B` bị backend từ chối và không đổi trạng thái; request của tài khoản đúng quyền được xử lý theo quy tắc. Việc ẩn nút trên UI không được tính là bằng chứng cho bước (1).
- **Xác minh/bằng chứng:** request/response đã che token, trạng thái trước/sau và quyền hiệu lực của hai bí danh.
- **Khôi phục:** rollback hoặc tái tạo fixture đã dùng cho nhánh tài khoản đúng quyền.

### PRO-01 — WebView SSO và cập nhật hồ sơ theo chính sách

- **Tiền điều kiện:** mobile `4fe5d9c`, HRM backend `87e17bcd`, HRM frontend `83caf648`, Redis và WebView sẵn sàng; `PRO-DIRECT`, `PRO-REVIEW` đã được người quản trị xác nhận đúng chính sách tại commit khóa.
- **Các bước:** (1) từ mobile chọn cập nhật hồ sơ; (2) xác nhận `POST /api/auth/sso/generate-ticket` thành công và Web HRM mở không yêu cầu đăng nhập lại; (3) cập nhật `PRO-DIRECT`, gửi và đọc lại; (4) cập nhật `PRO-REVIEW` kèm PDF giả và gửi; (5) thử gửi cùng trường cần minh chứng nhưng bỏ tệp; (6) thử dùng lại vé đã consume hoặc dùng vé hết TTL.
- **Mong đợi:** vé hợp lệ chỉ dùng một lần; trường trực tiếp được cập nhật; trường thẩm định tạo đề xuất chờ xử lý; thiếu minh chứng bị chặn với thông báo; vé dùng lại/hết hạn không tạo phiên. WebView không lộ vé trong artifact sau bước chuyển tiếp.
- **Xác minh/bằng chứng:** video/ảnh các mốc, request/response đã redaction, ID đề xuất, dữ liệu trước/sau và log consume ticket. Chỉ kết luận trên nền tảng đã chạy.
- **Khôi phục:** trả lại giá trị `PRO-DIRECT`, đóng/xóa đề xuất test và xóa tệp giả bằng cơ chế được phép.

### PRO-02 — Xử lý từng nội dung của đề xuất hồ sơ

- **Tiền điều kiện:** hai đề xuất test: một đề xuất gồm hai nội dung để xử lý hỗn hợp và một đề xuất để kiểm tra từ chối; `TCCB-A` có `TCNS_REQUEST_LY_LICH.WRITE`.
- **Các bước:** (1) `CB-B` thử gọi endpoint duyệt; (2) `TCCB-A` gọi từ chối chi tiết không có `lyDo`; (3) duyệt nội dung thứ nhất bằng `/api/staff/ly-lich/request/detail/approve`; (4) từ chối nội dung thứ hai bằng `/api/staff/ly-lich/request/detail/reject` với lý do; (5) đọc lại trạng thái từng nội dung, trạng thái tổng và hồ sơ chính thức; (6) xử lý đề xuất thứ hai theo nhánh toàn bộ được duyệt/từ chối để đối chiếu quy tắc tổng hợp thực tế.
- **Mong đợi:** trái quyền và thiếu lý do bị chặn, không đổi dữ liệu; kết quả từng nội dung được lưu; trạng thái tổng chỉ kết thúc theo đúng quy tắc controller; nội dung được duyệt mới phản ánh vào hồ sơ; thông báo chỉ được khẳng định nếu tìm thấy bản ghi/log tương ứng.
- **Xác minh/bằng chứng:** payload/response, snapshot trước/sau của đề xuất và hồ sơ, bản ghi thông báo nếu có. Không khóa trước tên trạng thái ngoài giá trị thực tế của API/CSDL.
- **Khôi phục:** rollback fixture hoặc phục hồi snapshot hồ sơ.

### LEV-01 — Tạo, lưu nháp và nộp đơn nghỉ phép qua wizard

- **Tiền điều kiện:** `CB-A` có số dư phù hợp; khoảng ngày hợp lệ, người duyệt và PDF giả đã chuẩn bị.
- **Các bước:** (1) đi qua ba bước wizard, quay lại bước trước và xác nhận dữ liệu còn giữ; (2) lưu nháp giữa quy trình, thoát và mở lại; (3) hoàn thiện thời gian, lý do, minh chứng và người duyệt; (4) nộp; (5) đọc lại danh sách/chi tiết từ backend.
- **Mong đợi:** validation ngăn chuyển/gửi khi thiếu trường bắt buộc; nháp phục hồi được; payload cuối phản ánh dữ liệu ba bước; chỉ sau phản hồi backend thành công, UI hiển thị đơn chờ duyệt.
- **Xác minh/bằng chứng:** ảnh/video từng bước đại diện, payload đã che dữ liệu, ID đơn và trạng thái backend trước/sau.
- **Khôi phục:** thu hồi/xóa đơn test và tệp đính kèm theo API được phép.

### LEV-02 — Hủy quy trình và dọn dữ liệu nháp

- **Tiền điều kiện:** bắt đầu wizard đến thời điểm hệ thống đã tạo nháp/giữ lịch; ghi ID nháp và sự kiện liên quan nếu có.
- **Các bước:** (1) chọn hủy/thoát theo luồng UI; (2) xác nhận hộp thoại; (3) đọc lại nháp và lịch cá nhân; (4) tạo lại đơn cùng khoảng ngày.
- **Mong đợi:** chỉ dữ liệu của run ID bị dọn; nháp/sự kiện giữ chỗ không còn; lần tạo lại không bị xung đột bởi dữ liệu mồ côi.
- **Xác minh/bằng chứng:** ID và snapshot trước/sau, response hủy, kết quả tạo lại.
- **Khôi phục:** xóa/thu hồi lần tạo lại.

### LEV-03 — Thu hồi, chỉnh sửa và nộp lại đơn

- **Tiền điều kiện:** `LEV-PENDING` và `LEV-RETURNED` thuộc `CB-A`.
- **Các bước:** (1) thu hồi `LEV-PENDING` trên mobile; (2) đọc lại chi tiết/danh sách; (3) thử thu hồi lần hai; (4) mở `LEV-RETURNED`, xác nhận dữ liệu cũ được nạp; (5) sửa lý do/minh chứng và nộp lại; (6) đọc lại trạng thái và lịch sử.
- **Mong đợi:** lần thu hồi đầu chuyển đúng trạng thái; lần lặp bị chặn; đơn bị trả lại nạp đúng dữ liệu và nộp lại thành chờ duyệt; UI chỉ cập nhật sau response server.
- **Xác minh/bằng chứng:** ảnh UI, response, trạng thái/lịch sử trước-sau.
- **Khôi phục:** hủy các fixture và tệp mới.

### LEV-04 — Từ chối đơn bắt buộc có lý do

- **Tiền điều kiện:** hai fixture chờ duyệt tương đương; `LD-DV-A` có quyền xử lý.
- **Các bước:** (1) trên UI thử xác nhận từ chối với lý do trống; (2) nếu client chặn, gửi thêm request API trống để kiểm tra backend; (3) từ chối fixture thứ hai với lý do có run ID; (4) đọc lại trạng thái và lý do.
- **Mong đợi:** nhánh thiếu lý do không đổi trạng thái ở backend; nhánh hợp lệ chuyển sang từ chối và lưu đúng lý do. Nếu API vẫn chấp nhận lý do trống, ghi Fail dù UI đã chặn.
- **Xác minh/bằng chứng:** validation UI, request/response và bản ghi trước/sau.
- **Khôi phục:** tái tạo fixture cho lần chạy sau.

### LEV-05 — Nhất quán số dư khi duyệt cuối đồng thời

- **Tiền điều kiện:** `LEV-BALANCE`; tổng ngày của hai đơn lớn hơn số dư; hai request duyệt cuối được đồng bộ thời điểm gửi.
- **Các bước:** (1) ghi số dư và hai trạng thái ban đầu; (2) gửi hai request duyệt cuối đồng thời; (3) chờ cả hai hoàn tất; (4) đọc lại hai đơn, số dư và lịch sử giao dịch; (5) chạy lại tối thiểu ba lần với fixture tái tạo.
- **Mong đợi:** không có số dư âm hoặc trừ trùng; tập đơn được duyệt phù hợp số dư; số dư cuối bằng số dư đầu trừ tổng ngày của đơn thực sự được duyệt.
- **Xác minh/bằng chứng:** timestamp/request ID của hai request, response, số dư và trạng thái trước/sau của từng lần.
- **Khôi phục:** phục hồi snapshot số dư và xóa fixture sau mỗi lần; dừng ngay nếu phát hiện ảnh hưởng dữ liệu ngoài run ID.

### BTR-01 — Wizard công tác, validation, xung đột và minh chứng

- **Tiền điều kiện:** `CB-A`; dữ liệu chuyến đi trong nước hợp lệ, chuyến đi nước ngoài, một lịch đã duyệt gây xung đột và PDF giả.
- **Các bước:** (1) đi qua năm bước wizard và kiểm tra giữ dữ liệu khi quay lại; (2) thử ngày bắt đầu sau ngày kết thúc; (3) thử khoảng ngày trùng nghỉ phép/công tác đã duyệt; (4) lưu nháp giữa bước 3/4 rồi mở lại; (5) thử nộp hồ sơ nước ngoài thiếu minh chứng; (6) bổ sung minh chứng và nộp hồ sơ hợp lệ; (7) đọc lại chi tiết từ backend.
- **Mong đợi:** ngày sai, xung đột và thiếu minh chứng bị chặn theo yêu cầu; nháp phục hồi được; hồ sơ hợp lệ chứa lịch trình, thành viên, kinh phí và tệp, chuyển sang chờ duyệt sau xác nhận backend.
- **Xác minh/bằng chứng:** ảnh các lỗi, payload, ID nháp/hồ sơ và trạng thái trước/sau.
- **Khôi phục:** thu hồi/xóa hồ sơ, nháp và tệp thuộc run ID.

### BTR-02 — Thu hồi, chỉnh sửa và nộp lại hồ sơ công tác

- **Tiền điều kiện:** một hồ sơ chờ duyệt và một hồ sơ bị trả lại của `CB-A`.
- **Các bước:** (1) thu hồi hồ sơ chờ duyệt; (2) xác nhận danh sách/chi tiết cập nhật và thử thu hồi lại; (3) mở hồ sơ bị trả lại, sửa kế hoạch hoặc kinh phí; (4) nộp lại; (5) đọc trạng thái và lịch sử.
- **Mong đợi:** thu hồi chỉ hợp lệ ở trạng thái cho phép và không lặp; dữ liệu cũ được nạp; hồ sơ nộp lại chuyển sang chờ duyệt và giữ nội dung đã sửa.
- **Xác minh/bằng chứng:** response, ảnh UI, snapshot chi tiết/lịch sử.
- **Khôi phục:** đóng/xóa fixture bằng API được phép.

### BTR-03 — Phê duyệt, trả lại, từ chối và luân chuyển đa cấp

- **Tiền điều kiện:** fixture trong nước và nước ngoài; `LD-DV-A`, `TCCB-A`, `BGH-A`; thêm fixture cho nhánh trả lại và từ chối.
- **Các bước:** (1) duyệt hồ sơ trong nước lần lượt bằng Lãnh đạo đơn vị và TCCB; (2) duyệt hồ sơ nước ngoài và xác nhận có thêm cấp BGH; (3) trả lại fixture với ý kiến; (4) thử từ chối fixture khác không có lý do, sau đó có lý do; (5) ở mỗi bước đọc lại cấp xử lý và trạng thái.
- **Mong đợi:** luồng trong nước kết thúc sau Lãnh đạo đơn vị + TCCB; luồng nước ngoài/đối tượng lãnh đạo có thêm BGH theo cấu hình; trả lại lưu ý kiến và chuyển trạng thái phù hợp; thiếu lý do bị backend chặn; từ chối hợp lệ lưu lý do.
- **Xác minh/bằng chứng:** sơ đồ thực tế từ lịch sử xử lý, response từng cấp, trạng thái trước/sau và ý kiến/lý do.
- **Khôi phục:** rollback/tái tạo toàn bộ fixture; không dùng hồ sơ công tác thật.

### BTR-04 — Danh sách và chi tiết hồ sơ công tác (P2)

- **Tiền điều kiện:** tập dữ liệu tối thiểu gồm các trạng thái chính và một hồ sơ đủ lịch trình, thành viên, kinh phí, lịch sử.
- **Các bước:** mở danh sách, đổi từng bộ lọc, mở chi tiết và đối chiếu từng nhóm dữ liệu với API.
- **Mong đợi:** số lượng/bản ghi theo bộ lọc khớp API; chi tiết hiển thị đủ dữ liệu đã cam kết, không suy ra hiệu năng từ cảm nhận.
- **Bằng chứng:** response danh sách/chi tiết, ảnh từng vùng và bảng đối chiếu.
- **Khôi phục:** dữ liệu chỉ đọc; không cần.

### OFF-01 — Từ chối mở tệp văn bản không đủ quyền

- **Tiền điều kiện:** `DOC-ALLOWED`, `DOC-DENIED`; `IOF-IN` và `IOF-OUT`.
- **Các bước:** (1) `IOF-OUT` gọi trực tiếp endpoint xem/tải tệp bị giới hạn; (2) xác nhận response không chứa nội dung tệp; (3) mở cùng liên kết qua mobile; (4) `IOF-IN` truy cập `DOC-ALLOWED` để xác nhận fixture và dịch vụ hoạt động.
- **Mong đợi:** backend từ chối người không có quyền và không trả nội dung tệp; client báo lỗi, không mở dữ liệu cache cũ; người có quyền mở được fixture cho phép.
- **Xác minh/bằng chứng:** response/header đã redaction, checksum chỉ của tệp giả cho phép, ảnh lỗi client.
- **Khôi phục:** chỉ đọc; xóa file cache test trên thiết bị.

### OFF-02 — Xem chi tiết và mở tệp PDF theo cơ chế thực tế

- **Tiền điều kiện:** văn bản đến/đi có PDF giả và người dùng được quyền truy cập; có ứng dụng PDF mặc định trên thiết bị.
- **Các bước:** (1) mở chi tiết văn bản; (2) chọn tệp; (3) xác nhận ứng dụng tải tệp qua Dio và chuyển cho ứng dụng hệ điều hành bằng `open_file`; (4) đọc trang đầu và quay lại ứng dụng; (5) nếu kiểm tra PDF của lịch họp, ghi riêng nhánh dùng `PDFViewerScreen`/`pdfrx`.
- **Mong đợi:** tệp văn bản mở bằng ứng dụng hệ điều hành, không được báo cáo nhầm là viewer nhúng; tệp lịch họp dùng viewer nhúng chỉ khi chạy nhánh riêng; lỗi tải không được hiển thị là thành công.
- **Xác minh/bằng chứng:** ảnh chi tiết, log tải đã redaction, checksum PDF giả và ảnh cơ chế mở thực tế. Ghi nền tảng/phiên bản OS.
- **Khôi phục:** xóa file tạm trên thiết bị.

### OFF-03 — Danh sách văn bản và nhiệm vụ (P2)

- **Tiền điều kiện:** dữ liệu phân trang có trạng thái/độ khẩn khác nhau và danh sách nhiệm vụ đọc được.
- **Các bước:** tải trang đầu, cuộn trang tiếp theo, lọc/tìm kiếm, đổi giữa văn bản đến/đi/nhiệm vụ và đối chiếu API.
- **Mong đợi:** không lặp/mất bản ghi giữa trang; bộ lọc khớp response; chuyển tab không làm lộ dữ liệu ngoài quyền.
- **Bằng chứng:** request phân trang, ID kết quả và ảnh danh sách.
- **Khôi phục:** chỉ đọc; không cần.

### SCH-01 — Người ngoài danh sách mời không được điểm danh

- **Tiền điều kiện:** `MEETING-IN`, `MEETING-OUT` trong khung điểm danh; endpoint đã xác minh là `POST /api/schedule/general-item/:id/checkin`.
- **Các bước:** (1) ghi danh sách mời và bản ghi điểm danh ban đầu; (2) `IOF-OUT` gọi trực tiếp endpoint; (3) đọc lại điểm danh; (4) `IOF-IN` thực hiện trên fixture tương đương để xác nhận endpoint hoạt động.
- **Mong đợi:** người ngoài danh sách bị backend từ chối và không tạo bản ghi; người trong danh sách được xử lý theo cấu hình cuộc họp.
- **Xác minh/bằng chứng:** response, danh sách mời và attendance trước/sau đã ẩn định danh.
- **Khôi phục:** gọi rollback chính thức cho bản ghi của `IOF-IN` hoặc tái tạo fixture.

### SCH-02 — Lỗi tải lịch được thông báo và có thể thử lại

- **Tiền điều kiện:** màn hình lịch có dữ liệu từ iOffice và HRM; proxy/mock có thể làm một request thất bại có kiểm soát rồi phục hồi.
- **Các bước:** (1) mở lịch trong điều kiện bình thường; (2) làm request nguồn được chọn timeout/5xx; (3) làm mới; (4) ghi thông báo/trạng thái tải; (5) phục hồi nguồn và chọn thử lại.
- **Mong đợi:** ứng dụng không crash hoặc báo thành công giả; thông báo lỗi chỉ rõ có thể thử lại; sau khi nguồn phục hồi, thao tác thử lại tải lại dữ liệu. Không bắt buộc giữ phần dữ liệu nguồn khác nếu Chương 4 không cam kết hành vi đó.
- **Xác minh/bằng chứng:** cấu hình lỗi, log request, ảnh lỗi và ảnh sau thử lại.
- **Khôi phục:** tắt proxy/mock lỗi và xác nhận kết nối bình thường.

### NET-01 — Timeout và lỗi kết nối chuẩn hóa

- **Tiền điều kiện:** một request đọc an toàn; proxy/mock có thể tạo connect timeout, receive timeout và mất mạng.
- **Các bước:** thực hiện lần lượt ba lỗi, quan sát message và retry; sau đó phục hồi mạng và gọi lại.
- **Mong đợi:** Dio kết thúc trong timeout cấu hình, lỗi được ánh xạ sang trạng thái/thông báo chuẩn của ứng dụng, không treo vô hạn hoặc hiển thị thành công; retry sau phục hồi hoạt động.
- **Xác minh/bằng chứng:** loại lỗi, thời điểm bắt đầu/kết thúc, log đã redaction và ảnh UI. Không dùng số liệu này để khẳng định latency hệ thống.
- **Khôi phục:** bỏ cấu hình mô phỏng lỗi.

### UI-01 — Rà soát tính nhất quán giao diện đại diện (P2)

- **Tiền điều kiện:** chọn một màn hình hồ sơ, nghỉ phép, công tác và iOffice tại commit mobile khóa.
- **Các bước:** đối chiếu thành phần dùng chung, trạng thái loading/error/empty, nút chính và chỉ báo wizard với tiêu chí NFR-02; chạy widget/golden test chỉ khi có baseline hợp lệ.
- **Mong đợi:** ghi rõ điểm nhất quán và sai khác; không tạo chỉ số UX hoặc kết luận khảo sát người dùng mới.
- **Bằng chứng:** danh sách tệp/màn hình, ảnh và log widget nếu chạy.
- **Khôi phục:** không thay đổi dữ liệu.

### TEST-01 — Tái lập bộ kiểm thử hiện có

- **Tiền điều kiện:** fresh worktree ở commit khóa, dependency lock giữ nguyên, runtime đúng Mục 3; Redis test sẵn sàng cho suite HRM cần thiết.
- **Các bước mobile:** sau bootstrap, chạy riêng `flutter test --no-pub` tại `modules/hrm`, `modules/notification`, `modules/ioffice`, `packages/shared/localization`, `packages/shared/auth`, `packages/core/global_system`; không dùng `melos run test` làm bằng chứng toàn workspace khi script chưa được sửa.
- **Các bước backend:** tại `hrm-be:87e17bcd`, chạy Vitest cho `test/unit/sso_phase0.unit.test.ts`, `sso_phase1.unit.test.ts`, `sso_phase7.unit.test.ts`, `tcns_nghi_phep/acquire_leave_lock.unit.test.ts` và `tcns_nghi_phep/concurrency_race_condition.unit.test.ts`.
- **Mong đợi:** ghi nguyên exit code và số test của từng lệnh. Chỉ cộng tổng các lệnh chạy trong cùng run manifest; không cộng với 370/53/57/427 lịch sử.
- **Xác minh/bằng chứng:** log stdout/stderr nguyên trạng, runtime, commit, dependency lock checksum, thời gian và exit code.
- **Khôi phục:** xóa worktree tạm theo quy trình được duyệt; không sửa test để làm kết quả Pass trong cùng lần chạy.

## 7. Quy tắc ghi nhận kết quả

| Trạng thái | Điều kiện gán | Xử lý tiếp theo |
| --- | --- | --- |
| Pass | Toàn bộ kết quả bắt buộc của kịch bản đáp ứng mong đợi và có đủ metadata | Cập nhật các hành vi được ánh xạ; không mở rộng kết luận ngoài nhánh đã chạy |
| Fail | Đã thực hiện hợp lệ nhưng có ít nhất một kết quả bắt buộc không đạt | Lưu nguyên bằng chứng, tạo mô tả lỗi; không sửa yêu cầu hay hạ ưu tiên để đổi kết quả |
| Blocked | Không thể bắt đầu/hoàn tất do môi trường, quyền, dịch vụ hoặc dữ liệu tiên quyết | Ghi blocker, chủ sở hữu và điều kiện mở chặn; không coi là lỗi sản phẩm |
| Not Run | Có quyết định rõ ràng chưa thực hiện kịch bản | Giữ khoảng trống bằng chứng và nêu giới hạn trong báo cáo |
| Invalid | Lần chạy bị nhiễu, sai commit/dữ liệu hoặc thiếu điều kiện làm kết quả không đáng tin | Bảo toàn log, nêu nguyên nhân và chạy lại bằng run ID mới |

- Không dùng `Not Run` khi chỉ không tìm thấy log lịch sử; trường hợp đó vẫn là “Chưa xác định kết quả chạy” trong ma trận kiểm kê.
- Kịch bản có nhiều nhánh chỉ Pass khi mọi nhánh bắt buộc Pass. Có thể ghi kết quả con để xác định chính xác phạm vi Fail/Blocked.
- Lỗi môi trường và lỗi sản phẩm phải tách riêng. Không đổi Blocked thành Pass/Fail theo suy luận.
- Người thực hiện không tự sửa yêu cầu, tiêu chí mong đợi hoặc mapping sau khi thấy kết quả; mọi thay đổi kế hoạch phải được duyệt và ghi phiên bản.

## 8. Quy tắc lưu bằng chứng

### 8.1. Cấu trúc đề xuất

Bằng chứng đã khử dữ liệu nhạy cảm được lưu theo cấu trúc:

```text
docs/chapter6-7-evidence/results/<RUN-ID>/
├── manifest.md
├── <SCENARIO-ID>/
│   ├── result.md
│   ├── requests-redacted/
│   ├── screenshots-redacted/
│   └── logs-redacted/
└── summary.md
```

Không tạo cấu trúc này trước khi kế hoạch được duyệt. Log thô có token/cookie/dữ liệu cá nhân không được commit; lưu ở vùng kiểm soát truy cập và chỉ ghi checksum/tham chiếu nội bộ trong manifest đã khử thông tin.

### 8.2. Metadata bắt buộc

Mỗi `result.md` phải có: scenario ID; UC/FR và behavior ID; người thực hiện/xác nhận; thời điểm; repository/commit; build và thiết bị; môi trường; bí danh tài khoản; run ID dữ liệu; bước đã chạy; kết quả mong đợi/thực tế; trạng thái; đường dẫn artifact; cách khôi phục và kết quả khôi phục.

Ảnh phải che tên, mã cán bộ, email, số điện thoại và dữ liệu hồ sơ. Request/response phải che `Authorization`, cookie, ticket SSO, URL ký và secret. Không chỉnh sửa log để làm mất thông tin thất bại ngoài việc redaction.

## 9. Điều kiện hoàn thành

### 9.1. Kết thúc đợt kiểm thử

Đợt kiểm thử có thể kết thúc khi:

1. 18 kịch bản thuộc bộ tối thiểu đã có trạng thái hợp lệ và metadata; không bắt buộc tất cả Pass để kết thúc ghi nhận.
2. BTR-04, OFF-03 và UI-01 có quyết định Run/Not Run rõ ràng.
3. Mọi bản ghi thay đổi dữ liệu có bằng chứng khôi phục hoặc sự cố khôi phục được báo cáo.
4. Mọi Fail/Blocked/Invalid có nguyên nhân, phạm vi ảnh hưởng và hành vi liên quan.
5. Không cộng số liệu từ các run khác phiên bản hoặc môi trường thành một tổng thống nhất.
6. Người dùng rà soát bảng kết quả trước khi dùng để sửa Chương 6–7.

### 9.2. Quy tắc hạ mức kết luận

- Một kịch bản tối thiểu Fail: không kết luận nghiệp vụ tương ứng đáp ứng yêu cầu đó; mô tả phần đã hoạt động và lỗi quan sát được.
- Blocked/Not Run: có thể nói đã hiện thực nếu bằng chứng hiện thực còn hợp lệ, nhưng không nói hành vi đã được xác minh trên phiên bản báo cáo.
- Invalid: không dùng lần chạy đó làm bằng chứng cho đến khi chạy lại hợp lệ.
- Chỉ PRO-01 chạy trên Android: không kết luận luồng WebView đã được xác minh trên iOS.
- TEST-01 không tái lập sạch: giữ các con số cũ là baseline lịch sử, không trình bày như kết quả hiện tại.

## 10. Phê duyệt trước thực hiện

Trước Stage C, người dùng cần xác nhận:

- [ ] 21 kịch bản và mapping 51 khoảng trống là đúng phạm vi.
- [ ] 18 kịch bản tối thiểu và ba kịch bản P2 tùy chọn là chấp nhận được.
- [ ] Các commit khóa và lựa chọn `hrm-be:87e17bcd` làm snapshot thực thi là đúng.
- [ ] Có môi trường staging/test, tài khoản vai trò và cơ chế khôi phục dữ liệu được phép.
- [ ] Ma trận thiết bị, đặc biệt phạm vi Android/iOS cho PRO-01 và OFF-02, được chốt.
- [ ] Vị trí lưu artifact khử dữ liệu nhạy cảm và vùng lưu log thô được chấp thuận.
- [ ] Hình thức kiểm thử của từng kịch bản (thủ công/API/widget/integration) được chấp thuận trước khi viết test.

**Điểm dừng bắt buộc:** sau khi hoàn thành và kiểm tra tài liệu này, không viết test, không chạy test và không sửa Chương 6–7 cho đến khi người dùng phê duyệt Stage B bằng chỉ dẫn riêng.
