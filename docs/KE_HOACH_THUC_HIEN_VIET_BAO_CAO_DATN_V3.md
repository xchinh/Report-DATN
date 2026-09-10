# KẾ HOẠCH THỰC HIỆN VIẾT BÁO CÁO ĐỒ ÁN TỐT NGHIỆP (PHIÊN BẢN V3.1)

## 1. Mục đích và phạm vi kế hoạch

Kế hoạch này dùng để chuẩn bị và viết các phần:

- Chương 1 — Giới thiệu.
- Chương 2 — Phân tích các hệ thống có liên quan.
- Mục 3.2 — Công nghệ phía ứng dụng di động.
- Mục 4.1 — Người dùng, phân quyền và Use Case tổng thể.
- Đặc tả các nội dung do sinh viên Vũ Xuân Chính phụ trách (IN_CHINH_SCOPE):
  - Tra cứu và hỗ trợ cập nhật hồ sơ cán bộ (11 danh mục thông tin).
  - Quản lý nghỉ phép (Form Wizard 3 bước, kiểm định điều kiện đa giai đoạn, giải trình nộp trễ).
  - Lịch công tác & Điểm danh cuộc họp thời gian thực qua WebSocket (Socket.IO, Geofencing).
  - Trung tâm thông báo đẩy và điều hướng nghiệp vụ sâu (FCM, NotificationRouteParser).
  - Cơ chế chuyển tiếp xác thực qua vé dùng một lần kết hợp In-App WebView.
  - Bộ thành phần dùng chung tái sử dụng (`AppBatchActionBar`, Design Tokens).
- Phân hệ do sinh viên Tống Duy Khang phụ trách chính (TEAM_SCOPE / OUT_OF_CHINH_SCOPE):
  - Đăng ký và phê duyệt đi công tác (đã kiểm toán và lập Context Pack `06A_CONTEXT_PACK_BUSINESS_TRIP.md`).
  - Quản lý nhiệm vụ và công việc (Missions/Tasks).

Các chương mang tính tổng quan như Chương 1, Chương 2 và mục 4.1 phải phản ánh toàn bộ đề tài của nhóm theo mô hình 2 trục phạm vi (Phạm vi sản phẩm toàn trường và Phạm vi đóng góp của từng sinh viên). Khi trình bày đóng góp, báo cáo phải phân biệt rõ phần của Vũ Xuân Chính, phần của Tống Duy Khang, thành phần hiện hữu của Nhà trường và nội dung chỉ là thiết kế đề xuất.

## 2. Baseline và cách gọi chính thức

### 2.1. Tên đề tài

> **Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học**

Không thay đổi tên đề tài nếu chưa có xác nhận của giảng viên hướng dẫn hoặc đơn vị đào tạo.

### 2.2. Tên hệ thống

> **MyHCMUT Mobile**

### 2.3. Định vị hệ thống

> **MyHCMUT Mobile là ứng dụng di động tích hợp và mở rộng các hệ thống quản lý nghiệp vụ hiện hữu của Nhà trường, chủ yếu là HRM và iOffice; ứng dụng không thay thế và không xây dựng lại toàn bộ hệ thống HRM từ đầu.**

### 2.4. Hướng đi trung tâm của báo cáo

> Mở rộng khả năng tiếp cận và xử lý nghiệp vụ trên thiết bị di động bằng cách tái sử dụng có kiểm soát dữ liệu, API, quy trình và hạ tầng hiện hữu; đồng thời bổ sung các thành phần Mobile, adapter, xác thực chuyển tiếp và điều hướng thông báo cần thiết.

### 2.5. Thuật ngữ thống nhất

| Không ưu tiên dùng | Thuật ngữ thống nhất trong báo cáo |
| --- | --- |
| Hệ thống HRM mới | Ứng dụng di động tích hợp và mở rộng hệ thống hiện hữu |
| Extend-and-Integrate Architecture | Kiến trúc ứng dụng di động tích hợp và mở rộng hệ thống hiện hữu |
| Hybrid Extension Engine | Cơ chế chuyển tiếp xác thực qua vé dùng một lần kết hợp In-App WebView |
| Central SSO Ticket Issuer | Dịch vụ phát hành và tiêu thụ vé xác thực dùng một lần của HRM |
| Quản lý lý lịch hoàn toàn trên Mobile | Tra cứu hồ sơ trên Mobile và hỗ trợ cập nhật qua Web HRM |
| Validate 4 tầng | Kiểm tra điều kiện nghỉ phép đa giai đoạn |
| 48/72 giờ | 2/3 ngày làm việc; 48/72 giờ chỉ là chuỗi thông báo kế thừa nếu cần trích dẫn code |
| E2E tự động | Kiểm thử tích hợp đầu-cuối thủ công trên staging |
| 100% coverage | Pass rate 358/358; line/branch coverage chưa đo toàn hệ thống |

## 3. Thứ tự ưu tiên của nguồn

1. Phiếu giao nhiệm vụ, tên đề tài và cấu trúc báo cáo được giảng viên hướng dẫn xác nhận.
2. Source code tại các commit bảo vệ đã khóa.
3. Database schema, configuration, API contract, test log và ảnh thực nghiệm.
4. Quy trình nghiệp vụ hoặc xác nhận của đơn vị vận hành.
5. Bốn tài liệu baseline mới nhất:
   - `DAP_AN_DOI_CHIEU_THUC_TE(2).md` — nguồn đối soát claim và giới hạn.
   - `ARCHITECTURE_SCOPE(2).md` — nguồn ranh giới kiến trúc và ownership.
   - `SYSTEM_OPERATION(2).md` — nguồn mô tả luồng hiện tại và thiết kế đề xuất.
   - `THESIS_BLUEPRINT(2).md` — nguồn cấu trúc chương và vị trí nội dung.
6. `datn_thien_tuan.md` và `datn_tien.md` chỉ dùng để tham khảo cách trình bày, không dùng làm bằng chứng nghiệp vụ hoặc implementation hiện tại.

## 4. Gate 0 — Khóa tài liệu trước khi viết văn xuôi

### 4.1. Các hiệu chỉnh câu chữ cuối cùng

- [ ] Trong phần vòng đời bản nháp của DAP, thống nhất rằng DELETE dùng `Promise.all` nhưng chưa có database transaction; không viết “xóa đồng thời/an toàn nguyên tử”.
- [ ] Trong Architecture Scope, thay “lưu trữ khóa an toàn phần cứng” bằng “lưu trữ token bảo mật theo nền tảng; khả năng hardware-backed phụ thuộc thiết bị và cấu hình”.
- [ ] Trong System Operation, mô tả badge là dấu chấm hoặc số lượng tùy hệ điều hành/launcher.
- [ ] Thống nhất mọi nơi dùng “ba giai đoạn kỹ thuật” cho luồng nộp đơn nghỉ phép.
- [ ] KHCN luôn được gắn nhãn UI prototype, ngoài phạm vi tích hợp backend và không thuộc tiêu chí nghiệm thu chức năng chính.

### 4.2. Bằng chứng phải lưu lại

- [ ] Full commit hash, branch và ngày commit cho từng repository.
- [ ] Output nguyên bản của `flutter test` cho 312 test.
- [ ] Output nguyên bản của Vitest cho 46 test SSO.
- [ ] Checklist bốn kịch bản E2E thủ công, ghi đúng thiết bị thực sự đã dùng.
- [ ] Ảnh chụp màn hình hoặc video ngắn cho các luồng chính.
- [ ] Request/response mẫu đã khử dữ liệu nhạy cảm cho các API trọng tâm.
- [ ] Nguồn chính xác cho số liệu hơn 1.000 cán bộ, gồm tên tài liệu, năm, URL và ngày truy cập.

### 4.3. Điều kiện qua Gate 0

Không còn mâu thuẫn về trạng thái `Đã hiện thực / Đã kiểm thử / Thiết kế đề xuất`; mọi con số đưa vào báo cáo phải có tệp bằng chứng hoặc nguồn trích dẫn tương ứng.

### 4.4. Change-Control Gate — Gói Kiểm soát Tương tranh Toàn diện (Concurrency Hardening)

Nhằm nâng cấp cơ chế kiểm soát tương tranh từ `Thiết kế đề xuất` thành `Đã hiện thực và kiểm thử thực nghiệm`, nhóm bổ sung Change-Control Gate trước khi viết các chương báo cáo:

1. **Lan truyền Transaction CSDL xuyên suốt:** Sửa `tcns_lich_ca_nhan.model.ts` để `checkTrungLich` nhận `options: { transaction?: Transaction }` và truyền vào `lichFilter` cùng `findAll`.
2. **Khóa phân vùng Advisory Lock:** Sử dụng `pg_advisory_xact_lock(20039, hashtext(TRIM(UPPER(:shcc))))` với `SET LOCAL lock_timeout = '3000ms'` trên toàn bộ các đường ghi: `POST /dang-ky-mobile`, `PUT /dang-ky` và `DELETE /dang-ky/:id`.
3. **Idempotency & State Guard:** Chặn gửi duyệt lặp bằng mệnh đề kiểm tra trạng thái nguyên tử (`WHERE id = :id AND ma_quy_trinh = 'NHAP'`), chỉ cho phép đơn gửi duyệt một lần duy nhất.
4. **Tách rời thông báo Kafka:** Chỉ phát sự kiện `SEND_NOTIFY_SERVICE` sau khi transaction CSDL đã commit thành công.
5. **Bộ 8 kịch bản kiểm thử tương tranh thật:** Viết và chạy thành công 8 integration tests trên PostgreSQL thật mô phỏng các kết nối đồng thời (TC-CC-01 đến TC-CC-08).
6. **Cập nhật Baseline:** Sinh commit hash mới trên `hrm-be:chinh-dev`, cập nhật báo cáo thành `368 test hiện hữu + 8 concurrency tests`, chuyển trạng thái Advisory Lock sang `STUDENT_IMPLEMENTED`.

### 4.5. Mobile Rebaseline Gate — Khóa Thay đổi & Đồng bộ Mã nguồn Di động (V3.1)

Trước khi triển khai gói công việc backend và viết báo cáo, bắt buộc thực hiện Rebaseline cho `myhcmut-mobile`:

1. **Kiểm kê số liệu kiểm thử chính xác:** Xác định rõ cơ cấu kiểm thử toàn monorepo Mobile:
   * `modules/hrm`: 232 tests (pass 100%).
   * `modules/notification`: 47 tests (pass 100%).
   * `modules/ioffice`: 43 tests (pass 100%).
   * `packages/core/global_system`: 3 tests (pass 100%).
   * `packages/shared/auth`: 2 tests (pass 100%).
   * `packages/shared/localization`: 8 tests (pass 100%).
   * **Tổng cộng Mobile:** **335 tests** (pass rate 100%). Kết hợp 46 tests Backend SSO đạt **381 tests tự động chạy cục bộ**. Không tuyên bố là 100% code coverage.
2. **Khóa Commit Hash Mobile mới:** Tạo commit trên branch `feat/leaveRequest`, ghi nhận hash mới vào Evidence Index.
3. **Định vị chính xác tính năng dọn dẹp nháp:** Cơ chế `isNewlyCreated` giúp giảm đáng kể bản nháp mồ côi trong luồng thoát thông thường; không tuyên bố "giải quyết triệt để", vẫn giữ Cron job dọn nháp định kỳ trong Chương 7.
4. **Định vị tệp đính kèm rời rạc (Orphan Files):** Ghi nhận việc tải lên từng tệp độc lập có thể để lại tệp rác trên server nếu đơn bị hủy bất thường; đề xuất tác vụ quét dọn tệp mồ côi trong Chương 7.

## 5. Bộ hồ sơ nền cần tạo trước khi viết chương

#### 5.1. Scope Matrix (Mô hình Phân định 2 Trục Phạm vi)

Không sử dụng nhãn `OUT_OF_SCOPE` chung chung vì dễ gây hiểu nhầm phân hệ bị loại khỏi ứng dụng. Toàn bộ các phân hệ và thành phần được phân loại theo hai trục độc lập:

**Trục 1 — Phạm vi Sản phẩm & Đề tài Nhóm:**
- `IN_SYSTEM_SCOPE`: Thành phần có trong ứng dụng di động MyHCMUT Mobile thực tế.
- `TEAM_SCOPE`: Thuộc phạm vi đề tài tốt nghiệp chung của nhóm 2 sinh viên (CO4337).
- `EXISTING_SYSTEM`: Thành phần dịch vụ hiện hữu của Nhà trường (Backend Core, Database, Kafka).
- `THIRD_PARTY`: Dịch vụ bên thứ ba (CAS SSO, Firebase FCM).
- `PROPOSED_DESIGN`: Thiết kế đề xuất cho tương lai, chưa có trong commit bảo vệ.

**Trục 2 — Phạm vi Đóng góp Cá nhân:**
- `IN_CHINH_SCOPE`: Sinh viên Vũ Xuân Chính trực tiếp thiết kế, hiện thực và kiểm thử.
- `OUT_OF_CHINH_SCOPE`: Thuộc phân hệ do sinh viên Tống Duy Khang phụ trách chính (`OWNER_KHANG`).
- `CROSS_MODULE_UI_REFACTOR`: Vũ Xuân Chính xây dựng thành phần dùng chung (`AppBatchActionBar`, Design Tokens) và tái cấu trúc giao diện để bảo đảm tính đồng bộ toàn ứng dụng.

### 5.2. Claim Register

| Trường | Ý nghĩa |
| --- | --- |
| Claim ID | Mã duy nhất, ví dụ `CLM-SSO-01`, `CLM-BTR-01` |
| Nội dung claim | Câu có thể xuất hiện trong báo cáo |
| Trạng thái | Đã hiện thực, đã kiểm thử, hiện hữu, đề xuất hoặc hạn chế |
| Bằng chứng | Commit, file, hàm, API, test hoặc tài liệu nghiệp vụ |
| Cách diễn đạt được phép | Câu chữ không vượt quá bằng chứng |
| Chương sử dụng | Vị trí xuất hiện trong báo cáo |

### 5.3. Requirement Traceability Matrix

| Requirement ID | Actor | Mô tả | Nguồn nghiệp vụ | UI/Route | API/Service | Rule | Test/Evidence | Chương |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `FR-PRO-*` | Cán bộ/TCCB | Hồ sơ cán bộ | HRM hiện hữu | Profile/Diff | HRM adapter | `BR-PRO-*` | Test/ảnh | 1, 4, 6 |
| `FR-LEV-*` | Cán bộ/Lãnh đạo/TCCB | Nghỉ phép | Cấu hình HRM | Time-off | HRM API | `BR-LEV-*` | Test/ảnh | 1, 4, 6 |
| `FR-NOT-*` | Người dùng Mobile | Thông báo/deep link | Luồng sự kiện | Notification | Kafka/FCM/API | `BR-NOT-*` | Test/ảnh | 1, 4, 6 |
| `SEC-SSO-*` | Cán bộ | Chuyển phiên sang Web HRM | Quyết định kỹ thuật | WebView | HRM SSO | `BR-SSO-*` | Test/ảnh | 3, 4, 5, 6 |
| `CTX-BTR-*` | Cán bộ/Lãnh đạo/BGH | Bối cảnh Đi công tác | HRM hiện hữu | BusinessTrip | `/api/tcns-di-cong-tac/*` | `BR-BTR-*` | Manual Staging | 1, 2, 3.2, 4.1 |

### 5.4. Glossary

Tạo bảng thuật ngữ Việt–Anh, từ viết tắt và tên bảng/API. Một thuật ngữ chỉ có một cách gọi chính trong toàn báo cáo.

## 6. Thứ tự viết tối ưu

Không viết theo thứ tự số chương. Thứ tự thực hiện nên là:

1. Khóa bằng chứng và ma trận truy vết.
2. Tạo requirement pack cho bốn nội dung phụ trách.
3. Viết mục 4.1 và Use Case tổng thể.
4. Viết các phần đặc tả module trong Chương 4.
5. Viết Chương 1 từ phạm vi và yêu cầu đã khóa.
6. Nghiên cứu, trích dẫn và viết Chương 2.
7. Viết mục 3.2 từ các quyết định công nghệ thực tế.
8. Cross-review thuật ngữ, claim, hình vẽ và nguồn.

Lý do: Chương 1 phải phản ánh phạm vi thật; Chương 2 phải dẫn đến khoảng trống mà đề tài giải quyết; công nghệ ở mục 3.2 phải xuất phát từ yêu cầu đã biết; mục 4.1 chỉ chính xác khi actors và use cases của từng module đã được khóa.

## 7. Giai đoạn A — Requirement pack cho từng nội dung

Mỗi requirement pack phải có: mục tiêu, phạm vi, actor, use case, luồng chính, luồng thay thế/lỗi, business rule, dữ liệu vào/ra, trạng thái, phụ thuộc, tiêu chí chấp nhận, bằng chứng và hạn chế.

### 7.1. Hồ sơ cán bộ

#### Nội dung phải khóa

- 11 nhóm thông tin lý lịch được backend tổng hợp và cách nhóm trên ba tab Mobile.
- Phần xem hồ sơ bằng Flutter native.
- Phần chỉnh sửa thông qua HRM Web trong In-App WebView.
- Luồng tạo yêu cầu cập nhật và trạng thái `PENDING`.
- Luồng thẩm định sai khác bằng `ReviewDiffCard`.
- SQLite chỉ lưu 47 danh mục tham chiếu; dữ liệu hồ sơ dùng SWR cache trong `SharedPreferences`.
- Phân tách cache theo `$userKey`, làm mới sau JS Bridge và xóa khi đăng xuất.
- Hạn chế dữ liệu cache dạng rõ trên thiết bị root/trích xuất dữ liệu.

#### Use Case dự kiến

- `UC-PRO-01`: Tra cứu tổng quan hồ sơ cán bộ.
- `UC-PRO-02`: Xem chi tiết nhóm thông tin.
- `UC-PRO-03`: Mở biểu mẫu cập nhật trên Web HRM.
- `UC-PRO-04`: Gửi yêu cầu cập nhật và đồng bộ lại dữ liệu Mobile.
- `UC-PRO-05`: Thẩm định thay đổi hồ sơ bằng Diff Viewer.

#### Hình/bảng cần chuẩn bị

- Activity Diagram tra cứu–chỉnh sửa–chờ duyệt.
- Bảng 11 nhóm thông tin và ba tab giao diện.
- Bảng phân biệt SQLite master data và SWR profile cache.
- Ảnh Profile Page, WebView cập nhật và ReviewDiffCard.

#### Điều kiện hoàn thành

Người đọc phân biệt được nội dung nào native, nội dung nào WebView, dữ liệu nào được cache ở đâu và ai có quyền phê duyệt.

### 7.2. Quản lý nghỉ phép

#### Nội dung phải khóa

- Ba giai đoạn kỹ thuật:
  1. `POST /dang-ky-mobile` khởi tạo đơn `NHAP`, quy trình và lịch sơ bộ.
  2. Wizard ba bước gọi `/validate` và tải tệp.
  3. `PUT /dang-ky` với `isSend=0/1` để giữ nháp hoặc gửi duyệt.
- `/validate` là hỗ trợ nhập liệu; `PUT ... isSend=1` là chốt chặn backend có thẩm quyền.
- Quy tắc 2/3 ngày làm việc lấy từ `tcns_setting`; không viện dẫn văn bản chưa có.
- Loại trừ cuối tuần, ngày lễ/ngày làm bù theo dữ liệu backend.
- Kiểm tra trùng lịch, giải trình nộp trễ, tệp đính kèm và cam kết.
- Quỹ phép chỉ được trừ có thẩm quyền ở bước phê duyệt cuối bằng stored procedure và `SELECT ... FOR UPDATE`.
- Duyệt hàng loạt là `Per-Item Commit (Fail-Stop)`; Mobile phải refetch sau lỗi.
- Bản nháp bị bỏ quên chưa có cleanup tự động (đề xuất Cron job trong Chương 7).
- DELETE nháp được bọc CSDL Transaction và Advisory Lock bảo đảm dọn dẹp nguyên tử.
- `checkTrungLich` được khắc phục Check-then-Act Race Condition nhờ Transaction Propagation và Advisory Lock 2 thành phần (namespace + normalized shcc).
- PostgreSQL Exclusion Constraint (`EXCLUDE USING gist`) đóng vai trò thiết kế đề xuất nâng cấp phòng thủ cấp schema CSDL trong Chương 7.

#### Use Case dự kiến

- `UC-LEV-01`: Xem danh sách đơn và quỹ phép tham khảo.
- `UC-LEV-02`: Khởi tạo đơn nháp (POST /dang-ky-mobile).
- `UC-LEV-03`: Hoàn thiện Wizard và kiểm tra điều kiện hỗ trợ.
- `UC-LEV-04`: Tải lên và quản lý tệp minh chứng độc lập theo đơn (POST/DELETE /file).
- `UC-LEV-05`: Lưu nháp hoặc gửi duyệt chính thức (State Guard chống gửi lặp).
- `UC-LEV-06`: Hủy và dọn dẹp đơn mới tạo khi người dùng chủ động thoát (isNewlyCreated).
- `UC-LEV-07`: Chỉnh sửa và gửi lại đơn (NHAP / TRA_LAI / GUI_LAI).
- `UC-LEV-08`: Thu hồi đơn nghỉ phép khi trạng thái quy trình cho phép (THU_HOI).
- `UC-LEV-09`: Phê duyệt hoặc từ chối đơn nghỉ phép (chấp nhận TU_CHOI / REJECTED).
- `UC-LEV-10`: Phê duyệt nhiều đơn hàng loạt (Per-item commit, fail-stop).

#### Business Rule tối thiểu

- `BR-LEV-01`: Thời gian bắt đầu/kết thúc và buổi sáng/chiều hợp lệ.
- `BR-LEV-02`: Cách tính số ngày làm việc (loại trừ T7, CN, ngày lễ và ngày bù).
- `BR-LEV-03`: Thời hạn nộp trước theo cấu hình `tcns_setting` (2/3 ngày làm việc).
- `BR-LEV-04`: Ứng dụng Mobile không cho phép khởi tạo đơn nghỉ phép thông thường khi kết quả pre-validation xác định đã quá hạn; người dùng được điều hướng sang quy trình Giải trình chuyên biệt.
- `BR-LEV-05`: Kiểm tra trùng lịch tuân thủ giao thức khóa tương tranh Advisory Lock.
- `BR-LEV-06A`: Tệp minh chứng được tải lên từng tệp độc lập ngay khi chọn và tham chiếu bằng metadata khi cập nhật đơn; hỗ trợ định dạng và dung lượng backend quy định.
- `BR-LEV-06B`: Cơ chế dọn dẹp bản nháp chủ động khi người dùng thoát (isNewlyCreated) giúp giảm thiểu bản nháp mồ côi; các trường hợp ngắt ứng dụng bất thường được ghi nhận xử lý qua Cron job dọn nháp và tệp mồ côi (orphan files) trong Chương 7.
- `BR-LEV-07`: Chuyển từ nháp sang bước duyệt bảo đảm tính nguyên tử và chống gửi lặp (State Guard).
- `BR-LEV-08`: Ghi chú bắt buộc đối với mã lý do '00' (Khác) hoặc '04'; các lý do chuẩn khác thì ghi chú là tùy chọn.
- `BR-LEV-09`: Chỉ hiển thị chức năng Thu hồi / Chỉnh sửa / Gửi lại khi trạng thái quy trình cho phép.
- `BR-LEV-10`: Các trạng thái `TU_CHOI` và `REJECTED` được chuẩn hóa về cùng trạng thái hiển thị "Từ chối" trên giao diện di động.
- `BR-LEV-11`: Kiểm tra và trừ quỹ phép năm có thẩm quyền ở bước phê duyệt cuối bằng stored procedure và `SELECT ... FOR UPDATE`.
- `BR-LEV-12`: Xóa đơn nháp và dữ liệu liên quan trong transaction có bảo vệ khóa Advisory Lock.

#### Hình/bảng cần chuẩn bị

- Activity Diagram ba giai đoạn (bao gồm nhánh rẽ điều hướng sang Giải trình khi trễ hạn và nhánh dọn nháp khi thoát).
- State Diagram vòng đời đơn nghỉ phép đầy đủ (NHAP, GUI_DUYET, TRA_LAI, GUI_LAI, THU_HOI, TU_CHOI, KET_THUC).
- Bảng client hint và authoritative backend check.
- Bảng rule–config–source–test.
- Sequence Diagram nộp đơn nghỉ phép (thể hiện upload file độc lập, bọc transaction và Advisory Lock) đặt ở Chương 5.
- Bảng kết quả kiểm thử tương tranh thực nghiệm (8 kịch bản TC-CC-01 đến 08) đặt ở Chương 6.

#### Điều kiện hoàn thành

Không còn câu nào khiến người đọc hiểu `/dang-ky-mobile` đã gửi duyệt, hoặc `/validate` là chốt chặn cuối; phân biệt rõ cơ chế Advisory Lock đã hiện thực và kiểm thử ở tầng backend với Exclusion Constraint đề xuất ở tầng schema CSDL.

### 7.3. Trung tâm thông báo và điều hướng nghiệp vụ

#### Nội dung phải khóa

- Nguồn thông báo từ HRM và iOffice.
- Vòng đời FCM token: đăng ký, cập nhật, xóa token không hợp lệ và xử lý logout.
- Kafka topic `SEND_NOTIFY_SERVICE`, producer, consumer và bảng lưu thông báo.
- Bốn trường metadata phục vụ định tuyến: `source`, `entityType`, `entityId`, `isApproval`.
- `NotificationRouteParser`, fallback route và xử lý entity không còn tồn tại.
- Foreground/background/terminated behavior.
- Badge chỉ hiển thị dấu chấm hoặc số lượng tùy OS/launcher.
- Giao dịch nghiệp vụ không phụ thuộc FCM, nhưng có cửa sổ mất thông báo do chưa có Transactional Outbox.
- Có khả năng thông báo trùng do chưa có `eventId`/idempotency constraint.

#### Use Case dự kiến

- `UC-NOT-01`: Xem danh sách thông báo.
- `UC-NOT-02`: Đánh dấu trạng thái đã đọc.
- `UC-NOT-03`: Nhận thông báo theo trạng thái ứng dụng.
- `UC-NOT-04`: Điều hướng đến đúng ngữ cảnh nghiệp vụ.
- `UC-NOT-05`: Đăng ký/cập nhật/xóa device token.

#### Hình/bảng cần chuẩn bị

- Activity Diagram người dùng nhận và mở thông báo.
- Bảng ánh xạ metadata sang route.
- Bảng hành vi foreground/background/terminated.
- Sequence Diagram Kafka–consumer–FCM–Mobile đặt ở Chương 5.
- Bảng failure mode: mất event, duplicate, dead token, route sai/thiếu.

#### Điều kiện hoàn thành

Báo cáo không dùng “đảm bảo gửi 100%”, “exactly-once” hoặc “badge luôn hiện số”.

### 7.4. Vé xác thực dùng một lần và In-App WebView

#### Nội dung phải khóa

- `POST /api/auth/sso/generate-ticket` yêu cầu Bearer Access Token và `targetSystem='hrm'`.
- Ticket là opaque bearer credential sinh bằng `crypto.randomBytes(32)`.
- TTL tối đa 60 giây trong Redis.
- `getDel` bảo đảm single-use sau lần tiêu thụ đầu tiên; không bảo vệ khi kẻ tấn công tiêu thụ trước.
- `POST /api/auth/sso/consume-ticket` tái tạo session và cấp cookie phù hợp.
- Frontend dùng `window.history.replaceState` để loại ticket khỏi URL hiện tại.
- URL stripping giảm lưu vết trong lịch sử/điều hướng tiếp theo nhưng không loại trừ access log trung gian.
- JavaScript Bridge chỉ chấp nhận origin nằm trong allowlist.
- Chưa có backchannel session revocation và proof-of-possession.
- Token Mobile hiện lưu trong SharedPreferences; secure storage là hướng hoàn thiện.

#### Use Case/Scenario dự kiến

- `UC-SSO-01`: Yêu cầu vé cho hệ thống đích hợp lệ.
- `UC-SSO-02`: Mở WebView và chuyển vé sang Web HRM.
- `UC-SSO-03`: Tiêu thụ vé, tạo Web Session và làm sạch URL.
- `UC-SSO-04`: Nhận JS Bridge event và làm mới Mobile.
- `UC-SSO-ERR-01`: Vé hết hạn/đã dùng/sai audience.
- `UC-SSO-ERR-02`: Redis hoặc WebView lỗi.

#### Hình/bảng cần chuẩn bị

- Threat table: tài sản, tác nhân tấn công, đường tấn công, kiểm soát hiện tại, rủi ro còn lại.
- Activity Diagram từ yêu cầu chỉnh sửa đến quay lại Mobile.
- Technical Sequence Diagram generate–consume–cookie–replaceState–bridge đặt ở Chương 5.
- Bảng so sánh truyền JWT qua URL và dùng ticket ngắn hạn.

#### Điều kiện hoàn thành

Không xuất hiện các claim “an toàn tuyệt đối”, “không thể bị đánh cắp” hoặc “GETDEL ngăn mọi hình thức chiếm phiên”.

### 7.5. Gói bối cảnh phân hệ Đi công tác (06A_CONTEXT_PACK_BUSINESS_TRIP.md)

Phân hệ Đi công tác thuộc `TEAM_SCOPE` / `IN_SYSTEM_SCOPE` do sinh viên **Tống Duy Khang** phụ trách chính (`OUT_OF_CHINH_SCOPE`). Gói bối cảnh này phục vụ cung cấp số liệu thật cho Chương 1, Chương 2, Mục 3.2 và Mục 4.1.

#### Nội dung đã kiểm toán và khóa trong tệp `docs/06A_CONTEXT_PACK_BUSINESS_TRIP.md`:

- **Tác nhân & Phân quyền:** Cán bộ (`cn:di_cong_tac`), Chuyên viên đơn vị (`CV_DV`), Trưởng đơn vị (`TRUONG_DV`), Chuyên viên TCNS (`CV_TCNS`), Trưởng phòng TCNS (`TP_TCNS`), Ban Giám hiệu / Văn phòng BGH (RoleKey `clerical-president`).
- **Phân loại nghiệp vụ:** 4 nhóm gồm `CONG_TAC_TN` (Trong nước), `CONG_TAC_NN` (Nước ngoài), `CONG_TAC_BGH` (Ban Giám hiệu), `CONG_TAC_KHCN` (Khoa học công nghệ). Hình thức `CA_NHAN` vs `NHOM` (Duyệt song song các đơn vị `parallelGroup`).
- **Form Wizard 5 bước Mobile:** Bước 1 (Thông tin chung) $\rightarrow$ Bước 2 (Nội dung chi tiết & Kế hoạch) $\rightarrow$ Bước 3 (Nhân sự tham gia & Trưởng đoàn) $\rightarrow$ Bước 4 (Tài chính, Cam kết & Minh chứng) $\rightarrow$ Bước 5 (Xem lại & Nộp hồ sơ).
- **Vòng đời trạng thái:** `NHAP` $\rightarrow$ `PROCESSING` (Chờ duyệt) $\rightarrow$ `THU_HOI` / `TU_CHOI` / `TRA_LAI` / `KET_THUC` $\rightarrow$ Báo cáo kết quả sau 15 ngày.
- **Bộ API đã kiểm chứng:**
  - `GET /api/tcns-di-cong-tac/dang-ky/all?nam={nam}` (Danh sách năm).
  - `GET /api/tcns-di-cong-tac/dang-ky/:id` (Chi tiết).
  - `POST /api/tcns-di-cong-tac/dang-ky` (Tạo mới).
  - `PUT /api/tcns-di-cong-tac/dang-ky` (Cập nhật khi ở `NHAP` hoặc `TRA_LAI`).
  - `DELETE /api/tcns-di-cong-tac/dang-ky/:id` (Xóa nháp).
  - `POST /api/upload/tcns-di-cong-tac/file` (Upload file minh chứng).
  - `POST /api/tcns-di-cong-tac/duyet` (Duyệt / Từ chối / Trả lại).
  - `GET /api/tcns-di-cong-tac/page/:pageNumber/:pageSize` (Danh sách duyệt).
  - Hàm kiểm tra trùng lịch dùng chung: `tcnsLichCaNhan.checkTrungLich()`.
- **Hiện trạng kiểm thử:** Chưa có Unit/Widget Test tự động trong monorepo Mobile (`modules/hrm/test/`), chỉ kiểm thử tích hợp thủ công trên Staging. Tuyệt đối không nhận là có automated test coverage trong báo cáo.

#### Use Case bối cảnh dự kiến (Traceability Context):

- `CTX-BTR-01`: Cán bộ lập tờ trình / đăng ký chuyến công tác (Form Wizard 5 bước).
- `CTX-BTR-02`: Hệ thống kiểm tra xung đột thời gian biểu cá nhân (`checkTrungLich`).
- `CTX-BTR-03`: Lãnh đạo Đơn vị / Phòng TCCB / Ban Giám Hiệu phê duyệt, từ chối hoặc trả lại.
- `CTX-BTR-04`: Ghi nhận quá trình công tác vào hồ sơ cán bộ (`tcnsQuaTrinhDiCongTac`) và phát thông báo FCM.

## 8. Giai đoạn B — Viết mục 4.1

### 8.1. Cấu trúc đề xuất

- 4.1.1. Xác định nhóm người dùng.
- 4.1.2. Vai trò, trách nhiệm và phạm vi thao tác.
- 4.1.3. Ma trận Actor × Nhóm chức năng.
- 4.1.4. Sơ đồ Use Case tổng thể.
- 4.1.5. Danh sách yêu cầu chức năng cấp cao.

### 8.2. Actors cần xác minh

- Cán bộ/giảng viên/người lao động.
- Lãnh đạo đơn vị hoặc người phê duyệt.
- Chuyên viên Phòng Tổ chức – Cán bộ.
- Lãnh đạo Trường, văn thư và các vai trò thuộc phần của thành viên còn lại nếu xuất hiện trong Use Case tổng thể.
- Hệ thống xác thực, HRM và iOffice chỉ được dùng như supporting actors khi sơ đồ thật sự cần; Redis, Kafka và database không phải actor nghiệp vụ.

### 8.3. Quy tắc viết 4.1

- Ma trận quyền nghiệp vụ không được thay bằng danh sách permission string.
- Permission string chỉ dùng làm bằng chứng kỹ thuật hoặc chú thích.
- Không đưa class, controller, table, Redis hoặc chi tiết Flutter vào 4.1.
- Use Case tổng thể chỉ chứa chức năng thuộc phạm vi đã khóa.
- KHCN prototype phải được tách khỏi các chức năng đã nghiệm thu.

### 8.4. Điều kiện hoàn thành

Mỗi Use Case cấp cao phải truy ngược được đến actor, requirement pack, module phụ trách và bằng chứng hiện thực.

## 9. Giai đoạn C — Viết Chương 1

### 9.1. Cấu trúc đề xuất

- 1.1. Bối cảnh và vấn đề thực tế.
- 1.2. Bài toán đặt ra.
- 1.3. Mục tiêu tổng quát và mục tiêu cụ thể.
- 1.4. Đối tượng sử dụng, phạm vi và ranh giới hệ thống.
- 1.5. Phương pháp thực hiện và đóng góp của nhóm.
- 1.6. Bố cục báo cáo.

### 9.2. Chuỗi lập luận bắt buộc

`Thực trạng có nguồn → trở ngại thực tế → khoảng trống → mục tiêu → phạm vi → cách tiếp cận → đóng góp`.

### 9.3. Bằng chứng cần có

- Nguồn chính xác cho quy mô nhân sự của Trường.
- Mô tả phạm vi quan sát/trao đổi với cán bộ, không biến trao đổi không chính thức thành khảo sát định lượng.
- Bảng `Vấn đề → người bị ảnh hưởng → hậu quả → năng lực Mobile → bằng chứng`.
- Scope Matrix phân biệt student-developed, student-integrated, existing và proposed.

### 9.4. Câu định vị mục tiêu tổng quát dự kiến

> Thiết kế và hiện thực ứng dụng di động đa nền tảng MyHCMUT Mobile nhằm hỗ trợ một số nghiệp vụ phục vụ cán bộ và công tác điều hành của Trường Đại học Bách khoa – ĐHQG-HCM, thông qua việc tích hợp và mở rộng các dịch vụ HRM, iOffice và xác thực hiện hữu.

### 9.5. Điều kiện hoàn thành

Không mô tả đề tài là HRM mới, không nhận phần hiện hữu thành đóng góp mới và không đưa kết quả kiểm thử/hiệu năng chưa có bằng chứng vào mục tiêu.

## 10. Giai đoạn D — Viết Chương 2

### 10.1. Cấu trúc đề xuất

- 2.1. Hệ thống HRM/iOffice hiện hữu của Nhà trường.
- 2.2. Các giải pháp HRM và ứng dụng doanh nghiệp có liên quan.
- 2.3. Bộ tiêu chí so sánh xuất phát từ yêu cầu đề tài.
- 2.4. Bảng so sánh và nhận xét.
- 2.5. Khoảng trống và hướng giải pháp của MyHCMUT Mobile.

### 10.2. Tiêu chí so sánh

- Đối tượng và bối cảnh triển khai.
- Khả năng sử dụng trên thiết bị di động.
- Tra cứu/cập nhật hồ sơ.
- Đăng ký và phê duyệt nghỉ phép.
- Thông báo theo ngữ cảnh và deep linking.
- Khả năng tích hợp hệ thống nội bộ/CAS.
- Khả năng tái sử dụng Web nghiệp vụ hiện hữu.
- Khả năng đáp ứng quy trình đặc thù của Nhà trường.

### 10.3. Nguyên tắc nghiên cứu

- Ưu tiên trang sản phẩm và tài liệu chính thức, bài báo khoa học hoặc tài liệu học thuật.
- Ghi ngày truy cập và phiên bản/thời điểm khảo sát.
- Không kết luận “không hỗ trợ” chỉ vì không tìm thấy trên trang giới thiệu; dùng “không đủ thông tin công khai để xác nhận”.
- Không biến Chương 2 thành quảng cáo sản phẩm hoặc danh sách tính năng.
- Mỗi tiêu chí so sánh phải dẫn đến một yêu cầu hoặc quyết định của đề tài.

### 10.4. Điều kiện hoàn thành

Chương 2 phải trả lời được: Vì sao cần một cổng Mobile tích hợp khi Nhà trường đã có Web HRM/iOffice và thị trường đã có các sản phẩm HRM?

## 11. Giai đoạn E — Viết mục 3.2

### 11.1. Cấu trúc đề xuất

- 3.2.1. Flutter và Dart.
- 3.2.2. Riverpod cho quản trị trạng thái và phụ thuộc.
- 3.2.3. GoRouter và điều hướng theo ngữ cảnh.
- 3.2.4. Dio, interceptor và quản lý token đa miền.
- 3.2.5. Lưu trữ cục bộ: SQLite master data, SWR cache và SharedPreferences.
- 3.2.6. In-App WebView và JavaScript Bridge.
- 3.2.7. Melos và Modular Feature-First Monorepo.

### 11.2. Công thức viết cho mỗi công nghệ

`Vấn đề của đề tài → lựa chọn thay thế → tiêu chí → lý do chọn → cách dùng trong project → trade-off/hạn chế`.

### 11.3. Trade-off bắt buộc

- Flutter so với phát triển native riêng Android/iOS.
- Riverpod so với giải pháp quản trị trạng thái khác chỉ khi nhóm thật sự đã cân nhắc.
- Native form hoàn toàn so với tái sử dụng HRM Web qua In-App WebView.
- SQLite master data so với giữ toàn bộ danh mục trong RAM hoặc gọi API mỗi lần.
- SharedPreferences hiện tại so với secure storage trước triển khai chính thức.

### 11.4. Điều kiện hoàn thành

Không viết mục 3.2 như tài liệu hướng dẫn framework. Mỗi công nghệ phải gắn với ít nhất một requirement và một vị trí sử dụng thực tế trong code.

## 12. Giai đoạn F — Kiểm tra chéo và khóa bản thảo

### 12.1. Kiểm tra claim

- [ ] “Đã hiện thực” có commit/file chứng minh.
- [ ] “Đã kiểm thử” có log hoặc checklist.
- [ ] “Đề xuất” không xuất hiện trong Chương 6 như kết quả.
- [ ] Pass rate không bị gọi là code coverage.
- [ ] Không viện dẫn văn bản hành chính chưa có bản gốc.
- [ ] Không dùng từ tuyệt đối cho SSO, Kafka, concurrency và badge.

### 12.2. Kiểm tra cấu trúc

- [ ] Chương 4 chứa yêu cầu, rule, Use Case và Activity Diagram.
- [ ] Chương 5 chứa ERD, kiến trúc và Technical Sequence Diagram.
- [ ] Chương 6 chỉ chứa kết quả hiện thực/kiểm thử có bằng chứng.
- [ ] Chương 7 chứa hạn chế và thiết kế chưa triển khai.

### 12.3. Kiểm tra truy vết

- [ ] Mỗi mục tiêu Chương 1 ánh xạ tới ít nhất một requirement.
- [ ] Mỗi requirement ánh xạ tới UI/API hoặc được ghi là ngoài phạm vi.
- [ ] Mỗi module có tiêu chí chấp nhận.
- [ ] Mỗi hình có mục đích, nguồn và được dẫn chiếu trong nội dung.
- [ ] Thuật ngữ giống nhau giữa caption, bảng, sơ đồ và văn xuôi.

## 13. Lịch thực hiện đề xuất

| Buổi | Thời lượng | Công việc | Đầu ra bắt buộc |
| ---: | ---: | --- | --- |
| 1 | 3 giờ | Gate 0, sửa hai điểm còn sót, khóa commits và nguồn | Baseline final + evidence index |
| 1a | 3 giờ | **Mobile Rebaseline Gate:** Khóa commit Mobile mới, lưu raw test output 335 tests, cập nhật Sequence Diagram & State Machine | Commit Mobile + Raw Test Output + Sơ đồ cập nhật |
| 1b | 4 giờ | **Concurrency Hardening Gate:** Refactor Advisory Lock, State Guard, Lan truyền Transaction và chạy 8 Concurrency Tests | Code `hrm-be` + commit hash mới + log 8/8 test pass |
| 2 | 3 giờ | Scope Matrix, Claim Register, Glossary (Cập nhật `STUDENT_IMPLEMENTED`) | Ba bảng nguồn duy nhất |
| 3 | 4 giờ | Requirement pack Hồ sơ cán bộ | UC/BR/Activity/evidence |
| 4–5 | 6–8 giờ | Requirement pack Nghỉ phép (kèm cơ chế khóa tương tranh & luồng upload mới) | Ba giai đoạn, state, rules, concurrency tests |
| 6 | 4 giờ | Requirement pack Thông báo | Metadata, routing, lifecycle, failures |
| 7 | 4 giờ | Requirement pack One-Time Ticket SSO | Threat model, UC lỗi, security boundaries |
| 8 | 4 giờ | Viết mục 4.1 | Actor matrix + Use Case tổng thể |
| 9–10 | 6 giờ | Viết đặc tả bốn nội dung trong Chương 4 | Use Case, rules, Activity Diagrams |
| 11 | 4 giờ | Viết Chương 1 | Bản thảo đầy đủ có nguồn và scope |
| 12–13 | 6–8 giờ | Nghiên cứu và viết Chương 2 | Evidence table + comparison + gap analysis |
| 14 | 5 giờ | Viết mục 3.2 | Technology decision narrative |
| 15 | 4 giờ | Cross-review và traceability | Bản khóa vòng 1 |

Tổng khối lượng dự kiến: **60–65 giờ làm việc tập trung**, chưa bao gồm thời gian giảng viên phản hồi hoặc bổ sung hình ảnh.

## 14. Definition of Done

Một phần chỉ được đánh dấu hoàn thành khi:

- Nội dung trả lời đúng mục tiêu của chương.
- Claim kỹ thuật không vượt quá baseline source code (đã có commit và test log tương tranh thực tế).
- Có nguồn cho dữ kiện bên ngoài code.
- Có truy vết tới requirement/module/bằng chứng.
- Phân biệt rõ current implementation (Advisory Lock tầng ứng dụng) và proposed design (Exclusion Constraint tầng CSDL).
- Thuật ngữ thống nhất với Glossary.
- Hình/bảng được giải thích trong văn xuôi.
- Không để placeholder như `$X$`, `TODO`, số liệu giả định hoặc citation chung chung.
- Đã tự trả lời được ít nhất ba câu hỏi phản biện cho phần đó.

## 15. Thứ tự bắt đầu ngay (Plan V3.1)

1. Hoàn tất Gate 0 và Evidence Index.
2. **Thực thi Mobile Rebaseline Gate (Buổi 1a):** Commit các thay đổi trên `myhcmut-mobile:feat/leaveRequest`, lưu toàn bộ raw test output của 335 tests, cập nhật Sequence Diagram Bước 2 và State Machine.
3. **Thực thi Concurrency Hardening Gate (Buổi 1b):** Refactor `tcns_lich_ca_nhan.model.ts`, `tcns_nghi_phep/controller.ts` (bọc `POST`, `PUT`, `DELETE` trong Advisory Lock và transaction), viết bộ 8 integration tests trên PostgreSQL, commit mã nguồn `hrm-be` và lấy commit hash mới.
4. Tạo Scope Matrix + Claim Register + Glossary (chuyển Advisory Lock thành `STUDENT_IMPLEMENTED`, cập nhật con số 381 tests tự động cục bộ).
5. Viết requirement pack Hồ sơ cán bộ và Nghỉ phép (theo hệ thống Use Cases `UC-LEV-01..10` và Rules `BR-LEV-01..12`).
6. Tiếp tục với Thông báo và One-Time Ticket SSO.
7. Khi bốn pack hoàn thành, bắt đầu soạn mục 4.1.

Không nên bắt đầu bằng Chương 1 ngay lập tức. Việc khóa requirement pack và bằng chứng mã nguồn trước giúp mục tiêu, phạm vi, actor và đóng góp trong Chương 1 không bị thay đổi trong quá trình viết các chương sau.
