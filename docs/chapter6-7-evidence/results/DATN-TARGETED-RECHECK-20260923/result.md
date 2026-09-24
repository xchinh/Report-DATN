# Kiểm tra bổ sung trước khi viết Chương 6–7 — 23/09/2026

Tài liệu này ghi **kết quả kiểm tra bổ sung**, không thay thế biên bản `DATN-RERUN-20260923`. Chỉ các nhánh dưới đây đã được kiểm tra lại; không cộng chúng thành một lần chạy thống nhất với 22 kịch bản cũ.

## Mốc và phạm vi

- Báo cáo: `Report-DATN` HEAD `34f1954` trước khi ghi biên bản này; tài liệu đợt trước trong working tree đang được người dùng hiệu chỉnh.
- Mobile: mã nguồn `myhcmut-mobile:7f90ac7`; APK trên thiết bị theo manifest đợt trước được build từ `a6a1dc6`.
- HRM backend: `hrm-be:9e39ccc`; iOffice backend: `ioffice-be:4bfdb23`.
- Thiết bị: Realme RMX2151, Android 12, kết nối USB và Wi-Fi LAN; thử trên ứng dụng đang cài đặt. Không thay đổi dữ liệu nghiệp vụ hoặc dừng dịch vụ backend.
- Sau thử nghiệm mạng: chế độ máy bay `0`, Wi-Fi được bật lại và thiết bị ping thành công máy chủ LAN. Ảnh lưu dưới đây không chứa dữ liệu nhân sự.

## AUTH-01 — Phản hồi token không hợp lệ

**Thử trực tiếp, chỉ đọc:** gửi Bearer token giả `invalid-test-token` tới `GET /api/staff/ly-lich/request/policy` trên HRM backend. Lặp lại lúc 19:57 (UTC+7), commit `hrm-be:9e39ccc`: **HTTP 200**, body `{"status":401,"message":"Token hết hạn hoặc không hợp lệ","data":"INVALID_OR_EXPIRED_TOKEN"}`. Dùng `curl --output /dev/null --write-out 'HTTP %{http_code}'` để xác định HTTP status và một lượt GET riêng để xem JSON; không dùng hoặc lưu cookie/token thật.

**Đối chiếu mã tại commit mobile `7f90ac7`:** `MultiDomainAuthInterceptor.onError` chỉ gọi `removeToken(domainKey)` khi `err.response?.statusCode == 401`; nó không kiểm tra `response.data.status` trong `onResponse`. `DioFactory` không có tầng nào chuyển `{status:401}` của HRM thành HTTP/Dio error cho interceptor này. Vì vậy phản hồi HTTP 200 vừa tái hiện **không chứng minh** mệnh đề trong `AUTH-01/result.md` rằng interceptor tự xóa phiên và điều hướng khi HRM báo trạng thái 401 trong body. Chưa tác động token thật trên điện thoại để quan sát điều hướng; nhánh này cần sửa kết luận hoặc có kiểm thử client riêng.

## SCH-02 và NET-01 — Lỗi lịch khi mất kết nối trên Android

**Thử trực tiếp:** từ lịch tháng 9 đang tải bình thường, bật chế độ máy bay, tắt Wi-Fi và chuyển sang tháng 10 để kích hoạt request mới. Sau khoảng 35 giây, vùng lịch vẫn hiển thị vòng tải (`schedule_offline_loading.png`). Sau khi tắt chế độ máy bay và bật lại Wi-Fi, màn hình hiển thị chuỗi ngoại lệ kết nối thô bằng tiếng Anh bắt đầu bằng `Lỗi: Exception: Failed to fetch schedule...` (`schedule_error_after_network_restored.png`). Một cử chỉ vuốt tiếp theo không làm màn hình hết lỗi (`schedule_error_after_swipe.png`); cử chỉ này không được xác nhận là thao tác retry hợp lệ. Không thấy nút thử lại tại trạng thái lỗi đã chụp.

**Kiểm thử thành phần:** chạy `flutter test --no-pub test/schedule/providers/schedule_detail_provider_test.dart` trong `modules/ioffice`; **3/3 bài đạt, exit code 0**. Bộ này chứng minh provider xử lý các phản hồi giả lập, không chứng minh thông báo lỗi hoặc retry trên màn hình thật.

**Phạm vi kết luận:** lỗi thông điệp thô trên màn lịch được tái hiện; đây cũng là bằng chứng bổ sung cho giới hạn chuẩn hóa lỗi mạng của NET-01. Ảnh vòng tải không đủ để kết luận ứng dụng treo vô hạn. Chưa xác minh được đường phục hồi bằng một thao tác retry sau khi mạng trở lại, và chưa đo riêng connect/receive timeout. Không kết luận rằng *thiếu một nút chuyên biệt* tự nó vi phạm Chương 4: tiêu chí là thông báo lỗi và khả năng thử lại, không ấn định loại widget.

**Kiểm tra tiếp sau khi trở về trang chủ:** với mạng đã phục hồi, mở lại mục *Lịch biểu* trên Android; cây giao diện ghi nhận tháng 9/2026 và trạng thái “Không có sự kiện nào trong ngày này”, không còn chuỗi ngoại lệ. Đây là bằng chứng màn lịch **có thể mở lại và hiển thị trạng thái bình thường**, không phải bằng chứng retry tại chỗ trên màn hình lỗi và không xác minh dữ liệu sự kiện từ cả ba nguồn.

## OFF-04 và các nhánh còn lại

Chỉ **đọc mã nguồn**, chưa chạy lại API thay đổi dữ liệu: tại `ioffice-be:4bfdb23`, handler `PUT /api/e-office/van-ban-den/phieu-giai-quyet/tiep-nhan/:id` cập nhật `doneAt` cùng `receivedAt` cho văn bản thông tin/để biết; với văn bản giao nhiệm vụ thông thường nó chỉ cập nhật `receivedAt`. Điều kiện chuyển bước phía sau lại dựa trên các dòng PGQ chưa có `doneAt`. Đây là căn cứ kỹ thuật cho sai khác với bước tự hoàn thành sau 100% tiếp nhận ở UC-OFF-04, nhưng cần snapshot trước–sau của fixture nếu muốn dùng như kết quả thực nghiệm API.

## LEV-05 — Phạm vi của unit test về tương tranh

Chạy lại tại `hrm-be:9e39ccc` lúc 18:46 (UTC+7):

```text
npx vitest run test/unit/tcns_nghi_phep/acquire_leave_lock.unit.test.ts test/unit/tcns_nghi_phep/concurrency_race_condition.unit.test.ts
Test Files 2 passed (2); Tests 11 passed (11); exit code 0.
```

Hai tệp này sử dụng mô phỏng/in-memory state để kiểm tra advisory lock, giao dịch tạo phiếu và phát hiện trùng lịch; chúng **không chạy hai lượt phê duyệt cuối trên CSDL thật để đối chiếu số dư phép**. Kết quả 11/11 không xác nhận hoặc bác bỏ hiện tượng số dư âm `-1` đã ghi ở LEV-05. Không chạy lại tình huống ghi dữ liệu số dư trên staging vì chưa có fixture cô lập, snapshot trước–sau và cách phục hồi được xác nhận.

Không chạy lại AUTH-02, PRO-01/02, LEV-01/02/03, BTR-01/02 hoặc OFF-01: các nhánh này cần tài khoản/fixture và dữ liệu trước–sau; nhiều nhánh có khả năng ghi dữ liệu staging. Không gán Pass/Fail mới từ việc chỉ đọc mã nguồn.

## OFF-01 — Xác nhận chính sách quyền tệp

Người phụ trách nghiệp vụ đã xác nhận trong phiên rà soát này: **chỉ người được phân công hoặc được cấp quyền trên văn bản cụ thể mới được tải tệp của văn bản đó**. Theo biên bản `DATN-RERUN-20260923/OFF-01`, tài khoản có quyền đọc module nhưng không thuộc phạm vi văn bản vẫn nhận HTTP 200 khi tải tệp; tại `ioffice-be:4bfdb23`, route `GET /api/e-office/van-ban-den/files/:fileId` chỉ kiểm tra `eofficeVanBanDen:read` và sự tồn tại của tệp, không kiểm tra quyền trên văn bản liên kết. Do đó, phát hiện OFF-01 là **sai lệch quyền truy cập theo chính sách đã xác nhận**, không còn là giả thuyết chờ xác định chính sách. Lượt kiểm tra bổ sung này không gọi lại API tải tệp và không thay thế log/fixture của biên bản trước.

**Ranh giới với báo cáo `main:14fe1f6`:** `UC-OFF-01` trong Chương 4 là *Phân công trách nhiệm*, còn `OFF-01` ở đây chỉ là mã kịch bản kiểm thử. `NFR-03` yêu cầu backend kiểm tra quyền truy cập dữ liệu nhưng chưa nêu tường minh chính sách tệp theo từng văn bản. Khi viết Chương 6–7, mô tả phát hiện theo chính sách nghiệp vụ đã xác nhận, không gọi đây là kết quả kiểm thử UC-OFF-01 hay khẳng định Chương 4 đã phát biểu nguyên văn quy tắc trên.

## Cách sử dụng trong báo cáo

- Chương 6 có thể mô tả chính xác: API HRM trả 200 kèm trạng thái nghiệp vụ 401 với token sai; giao diện lịch trên Android đã hiển thị ngoại lệ thô khi mất kết nối; provider test 3/3 đạt trong phạm vi giả lập.
- Không viết rằng interceptor hiện đã xử lý cả HTTP 401 lẫn body 401, rằng lịch đã được kiểm chứng có retry thành công sau phục hồi mạng, hoặc rằng quyền đọc module đủ để truy cập mọi tệp văn bản trong đơn vị.
- Không cộng ba bài provider vào 427 bài của TEST-01 như bài mới: đây là **chạy lại một phần của cùng bộ test**.
