# Manifest DATN-RETEST-20261002

## Mốc nguồn và môi trường

Chạy ngày 02/10/2026, từ khoảng 01:53, Asia/Ho_Chi_Minh; người dùng chỉ định tài khoản tệp 09 và cho phép đổi user. Lượt tiếp theo kiểm thử tạo lịch/điểm danh từ khoảng 03:12 theo yêu cầu mới. Không sửa logic ứng dụng/backend hoặc dữ liệu có sẵn. Hai nháp nghỉ phép/công tác đã xóa; procedure dùng TEMP rồi rollback. Lịch mới #387 dùng thành phần BGH-A thuộc tài khoản test, đi qua nhánh lời mời sẵn có; chưa kiểm chứng giao push. Lịch đã xóa mềm sau thử nghiệm, các dòng attendance đã hoàn tác.

| Repo | Branch | HEAD | Working tree |
| --- | --- | --- | --- |
| myhcmut-mobile | feat/leaveRequest | `61722adcb66d0fb50deb6e529dd7a5a10103147d` | Sạch trước/sau các bộ test |
| hrm-be | chinh-dev | `250274cac7db8f2f4c2f188c9e4084b3e1e52308` | `.env.local` đã có thay đổi; không sửa trong đợt này |
| ioffice-be | chinh-khang | `4ca9249c2ab4a478ee62ea3d53d961ca5de8e2fb` | `.env.local` đã có thay đổi; `AGENTS.md` chưa tracked; không sửa |
| myhcmut-be | dev/khang-chinh | `7e687a6005ceb6264f3467072081c784a6f9c7bc` | `config/app/app.env.ts` đã có thay đổi; không sửa hoặc chạy bộ test Auth |
| Báo cáo | main | `042fee403d10c8e404eb1bd083f3fc276916fc03` | Có chỉnh sửa nhiều chương từ trước; giữ nguyên nội dung các chương đang được nạp |

Runtime: Node `v22.22.2`; Flutter `3.41.5`, Dart `3.11.3`; HRM Vitest thực thi `4.1.10`. Redis localhost 6379 đang chạy. Test HRM dùng `test/setup.ts` với Firebase mocked; một số bài SSO sử dụng Redis thật. Các bộ test workflow/concurrency dùng mock, không được gọi là E2E CSDL.

Android RMX2151, Android 12 được kết nối. [Ảnh đầu đợt](phone-service-error.png) cho thấy lỗi tải lịch trên bản app có sẵn. Sau đó `make run-dev` dựng/cài APK debug tại HEAD mobile; SHA-256 `998d68f4cfdc92af086369f16e4a78fc9782d86f784f2ecdec2c77fef61fed99`. Auth và HRM đã khởi động với `IS_SERVICE=false`; xem [build/start](live-build-and-start.json). Không lưu JWT, cookie, FCM token hoặc danh tính người dùng trong artifact mới.

**Đính chính lúc tiếp tục đổi user:** phép đọc phiên trước đây gửi nhầm cả chuỗi `access|||refresh` làm Bearer credential. Lấy phần access theo `MultiDomainTokenManager.getToken()` thì cả ba backend chấp nhận phiên. Đã đổi sang admin qua UI. Xem [đính chính và state thật](session-correction.json). [Ảnh màn lịch rỗng](phone-home-empty-calendar-before-role-switch.png) chỉ ghi nhận UI lúc đó; không chứng minh phiên app bị từ chối. M06 vẫn là kiểm tra HTTP mock, không phải tái hiện lỗi phiên bằng APK.

## Lệnh và kết quả

### Mobile

Tại từng package ở [mobile-results.json](mobile-results.json):

```sh
flutter test --no-pub --reporter expanded
```

| Package | Đạt / tổng lượt đầu | Exit | Log |
| --- | --- | --- | --- |
| apps/myhcmut | 5/5 | 0 | [app](apps_myhcmut.log) |
| modules/hrm | 323/323 | 0 | [HRM](modules_hrm.log) |
| modules/ioffice | 132/133 | 1 | [iOffice lượt đầu](modules_ioffice.log) |
| modules/notification | 64/64 | 0 | [notification](modules_notification.log) |
| packages/core/global_system | 8/8 | 0 | [UI dùng chung](packages_core_global_system.log) |
| packages/core/network | 8/8 | 0 | [network](packages_core_network.log) |
| packages/shared/auth | 6/6 | 0 | [auth](packages_shared_auth.log) |
| packages/shared/localization | 8/8 | 0 | [localization](packages_shared_localization.log) |

Tổng lượt đầu **554/555**, 1 lỗi fixture phụ thuộc giờ trong CompactSchedule. Chạy riêng bài lỗi bằng `--plain-name 'keeps left border color as eventColor even when event is ended'` sau 02:00: [1/1 đạt](mobile-midnight-repro.log). Chạy lại toàn package iOffice sau 02:00: [133/133 đạt](ioffice-mobile-rerun.log), [exit/lệnh](ioffice-mobile-rerun.json). Cùng HEAD, không sửa fixture hoặc ứng dụng; không cộng các lượt chạy lại thành test mới.

Tại root mobile: `make analyze`, exit 0, 11 package không báo lỗi: [log](mobile-analyze.log). Không chạy test ở 3 package không có thư mục test (`news`, `khcn`, `hcmut_sign`).

### Backend

Tại root HRM:

```sh
node_modules/.bin/vitest run test/unit
node_modules/.bin/tsc --noEmit
```

Vitest **167/184**, 17 lỗi, exit 1: [log đã khử cấu hình nhạy cảm](hrm-unit.log). Typecheck exit 0: [log](hrm-typecheck.log). Không chạy integration suite có thể ghi CSDL dùng chung. Xem [phân loại lỗi và quyết định nội dung](../../14_retest_and_rewrite_gate_20261002.md).

Tại root iOffice:

```sh
node --test test/firebase_token_failure.test.js test/incoming_document_file_access.test.js test/notification_device_registration.test.js test/schedule_meeting_checkin.test.js test/schedule_pending_visibility.test.js test/schedule_publication_notifications.test.js
```

**47/47**, exit 0: [log](ioffice-tests.log). Middleware/model/delivery được mock tùy từng bài; không xác nhận mọi API với quyền/transaction/CSDL thật.

### Kiểm tra bổ sung trực tiếp source

Các bài dưới đây **mô tả hiện trạng**. Đạt nghĩa là đã tái hiện đúng hành vi quan sát; các hành vi rủi ro vẫn phải ghi là giới hạn.

| Mã | Kết quả quan sát | Log |
| --- | --- | --- |
| M01 | iOffice lỗi dừng aggregation trước HRM | [7 bài mobile đạt](mobile-claims.log) |
| M02-leave/trip | HRM lỗi bị bỏ qua; iOffice trả danh sách, không có trạng thái nguồn lỗi | Cùng log |
| M03 | Phản hồi thiếu tệp bị chặn trước HTTP | Cùng log |
| M04 | `close()` nghỉ phép reset local state, không gọi HRM | Cùng log |
| M05 | Fixture lúc 00:30 kết thúc hôm qua, bị bộ lọc hôm nay loại | Cùng log |
| M06 | HTTP 200 + errorCode 4001 được interceptor bỏ qua, provider trả lịch rỗng | Cùng log |
| H01 | Hai approver cùng đọc một trạng thái; handler thật trả thành công hai lần, ghi hai history/update và gọi insert hai lần | [1 bài HRM đạt](hrm-claims.log) |
| H02 | Hàm PostgreSQL đang triển khai được gọi hai lần cùng đơn, tạo 2 dòng / 1 đơn trong bảng TEMP | [probe thật đã rollback](hrm-procedure-probe.log) |
| I01 | Model thật từ chối detail lịch chờ với khách; checkin handler thật vẫn ghi guest vào storage giả lập | [2 bài iOffice đạt](ioffice-claims.log) |
| I02 | PGQ handler chấp nhận actor ngoài văn bản/receiver chưa xác minh trong model giả lập | Cùng log |

H01 không chứng minh race tại PostgreSQL. H02 bổ sung kiểm tra procedure thật, nhưng dùng bảng TEMP, không qua API/mobile hay trigger trên bảng public. [Metadata live](hrm-live-metadata.json) ghi không có UNIQUE `phieu_id` và không có trigger tự định nghĩa trên hai bảng nghỉ phép được kiểm tra; [định nghĩa function](deployed-leave-insert-function.txt) có SHA-256 trong metadata. I01/I02 gọi handler sau middleware; không phải khai thác HTTP thật, không kiểm chứng quyền middleware hay FK/constraint CSDL. Mobile dùng provider/model thật, HTTP được mock.

Lệnh chạy lại các bài bổ sung (đặt `REPORT_REPO` theo checkout báo cáo):

```sh
# CWD: myhcmut-mobile/apps/myhcmut
REPORT_REPO=/home/xchinh/workspace/HK253_DATN_341_2211467_2210392
flutter test --no-pub --reporter expanded "$REPORT_REPO/docs/chapter6-7-evidence/results/DATN-RETEST-20261002/checks/mobile_claims_test.dart"

# CWD: báo cáo
IOFFICE_REPO=/home/xchinh/workspace/ioffice-be node --test docs/chapter6-7-evidence/results/DATN-RETEST-20261002/checks/ioffice_claims.test.cjs
```

HRM: sao chép [bài H01](checks/hrm_approval_claims.unit.test.ts) vào tệp tạm `hrm-be/test/unit/datn_approval_claims.unit.test.ts` **chỉ khi tên này chưa tồn tại**; chạy `node_modules/.bin/vitest run test/unit/datn_approval_claims.unit.test.ts`, rồi xoá đúng tệp tạm trong `finally`. Đợt này đã làm như vậy và xác nhận tệp tạm được xoá. Không cần đổi Vitest config, dependency hoặc handler.

H02: đặt `HRM_REPO` trỏ tới checkout HRM, `TEST_STAFF_SHCC` lấy từ tài khoản khởi tạo được cho phép ở tệp 09, chạy `node checks/hrm_procedure_probe.cjs` trong thư mục manifest. Probe tự kiểm tra table resolution thuộc `pg_temp`, dùng transaction và rollback. Chỉ một đơn có sẵn của tài khoản đó được đọc làm seed, không ghi lại danh tính/nội dung đơn vào log.

## Kiểm tra môi trường thật

[live-readiness.json](live-readiness.json) là trạng thái đầu đợt, trước khi khởi động Auth/HRM. [live-session-after-start.json](live-session-after-start.json) là phép thử credential bị ghép sai, đã được đánh dấu thay thế bằng [session-correction.json](session-correction.json). [live-api-readonly.json](live-api-readonly.json) và [live-anonymous.json](live-anonymous.json) giữ lượt đầu; ba GET vô danh trả HTTP 401. Request `/api/state` không phiên trả dữ liệu rỗng, không phải phiên hợp lệ.

### Các ca Android đã thực hiện tại HEAD

| Artifact | Kết quả và phạm vi |
| --- | --- |
| [Đổi user](ui-role-switches.json) | 7 tài khoản, state Auth/HRM/iOffice khớp; cuối đợt trả về admin. State có thể được kiểm tra lặp sau cùng một lần đổi UI. Một số bản ghi sớm chỉ thu tập con quyền; không suy ra quyền vắng mặt từ chúng. |
| [Hồ sơ đọc/validation](e2e-profile-read-validation.json) | Mở hồ sơ/hai tab lịch sử/menu sửa; policy thật trả direct/request. Phản hồi có nội dung nhưng không có tệp giữ ở form, không thêm request/log. Chưa ghi/duyệt thay đổi. |
| [Nháp nghỉ phép](e2e-leave-draft.json) | #320 tạo → thoát → mở lại → điền/lưu nháp → xóa. API trở về số đơn ban đầu, DB liên quan còn 0 fixture. Nháp ban đầu hiển thị số ngày `null`; lưu đủ thông tin hiển thị 1. |
| [Nháp công tác](e2e-trip-draft.json) | #1083 tạo trong nước/cá nhân → validation thiếu tỉnh ở bước 2 → thoát/mở lại → xóa. API khôi phục tập ID, DB liên quan còn 0 fixture. Chưa lưu đủ form/gửi/duyệt. |
| [Lịch Trường không hợp lệ](e2e-school-validation.json) | Tiêu đề rỗng bị client chặn. Không có thành phần `01/87/14` bị backend từ chối HTTP 400; không lưu dòng lịch. Thông báo cụ thể bị mất thành “An error occurred”. Chưa tạo thành công/upload/điểm danh. |
| [Lịch Trường hợp lệ và điểm danh](e2e-school-create-attendance.json) | 11 ca: 9 đạt theo phạm vi UI/API, 2 ghi nhận hành vi/giới hạn. UI tạo #387, `TRUONG/TONG_HOP`, creator và người được mời mở chi tiết, guest creator/assign checkin, hoàn tác, báo vắng rồi đổi có mặt. API từ chối trùng/sớm/hết ngày/lịch bị xóa. Snapshot DB và giới hạn nằm trong JSON; [ảnh lịch mới](schedule-created-native.png) chỉ chứa fixture tổng hợp. |

**Giới hạn quyền có bằng chứng thật:** CV-TCNS khác đơn vị, không được mời bị detail từ chối HTTP 400 nhưng POST checkin HTTP 200 vẫn ghi guest. CB-A cùng đơn vị creator không có lịch trong relative list, nhưng được đọc detail và điểm danh qua API. Không gọi hai ca này là guest E2E mobile. Creator guest đã đi đầy đủ qua UI; thẻ thống kê chỉ đếm slot assign, nhóm khách hiển thị riêng.

Ca thời gian chỉ đổi tạm giờ của #387 qua API, kiểm tra sớm hơn một giờ/hết ngày, khôi phục đúng giờ và `TONG_HOP`. Các attendance đều được hoàn tác; API xóa mềm #387 thành công, giữ assign/history theo semantics hiện tại. POST checkin sau xóa bị từ chối. Điện thoại cuối đợt ở admin.

Các nhánh gửi/duyệt/trả lại/từ chối/thu hồi, ghi hồ sơ, ghi PGQ, upload retry/công bố lịch, mode tạo đơn vị/phiếu đăng ký và lịch đủ ba nguồn **Not run trong đợt mới**. Trang văn bản đến ở admin có danh sách chờ xử lý rỗng; không dùng để kết luận phân công đã E2E. [Biên bản 14](../../14_retest_and_rewrite_gate_20261002.md) ghi phần đã chạy và phần còn lại. Không cộng các ca này vào thống kê test tự động.

## Dọn tài liệu và tính toàn vẹn

Danh sách **20 tệp bị xoá**, lý do và SHA-256: [cleanup.json](cleanup.json). Các tệp không có sửa local trước khi xoá; hai đặc tả `.tex` là bản không được nạp. Không xoá kết quả/ảnh/log kiểm thử lịch sử. [source-baseline.json](source-baseline.json) khóa commit, trạng thái repo và digest source; [artifacts.json](artifacts.json) chứa SHA-256 các log/check/ảnh/JSON mới. Log HRM được khử các dòng cấu hình; hash bản gốc và bản khử đều được ghi để truy vết.

Các kiểm tra bổ sung là artifact của đợt này, không thêm vào thống kê 555/184/47. Không commit/push trong đợt này.
