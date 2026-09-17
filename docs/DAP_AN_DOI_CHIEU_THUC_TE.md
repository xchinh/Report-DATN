# BẢN ĐỐI SOÁT THỰC TẾ MÃ NGUỒN & GIẢI ĐÁP KẾ HOẠCH ĐATN (PHIÊN BẢN HỌC THUẬT V5 - RIGOROUS GROUND TRUTH)

> **Dự án:** Ứng dụng di động MyHCMUT phục vụ Nhân sự Trường Đại học  
> **Sinh viên thực hiện:**  
> - **Vũ Xuân Chính (MSSV: 2210392):** Chịu trách nhiệm chính trong việc thiết kế, hiện thực và kiểm thử: Kiến trúc Mobile Core & Quản lý Token Đa miền, Xác thực SSO Vé dùng một lần (In-App WebView Bridge), Phân hệ Hồ sơ Cán bộ & Thẩm định Diff, Phân hệ Quản lý Nghỉ phép (Wizard 3 bước & kiểm tra điều kiện đa giai đoạn), Trung tâm Thông báo đẩy (FCM Hub & Deep Linking), Tích hợp giao diện & kết nối Lịch công tác/Điểm danh cuộc họp từ iOffice.  
> - **Tống Duy Khang (MSSV: 2211467):** Chịu trách nhiệm chính trong việc thiết kế, hiện thực và kiểm thử: Phân hệ Văn phòng số iOffice (Văn bản đến/đi, PDF Viewer) và Quản lý Nhiệm vụ (Missions/Tasks: cây đầu việc phân cấp, nộp báo cáo đợt).  
> **Giảng viên hướng dẫn:** ThS. Nguyễn Thanh Tùng  
> **Khoa:** Khoa học & Kỹ thuật Máy tính – Trường Đại học Bách khoa – ĐHQG-HCM  

---

## 1. KHÓA ĐỊNH VỊ HỆ THỐNG & MỐC MÃ NGUỒN BẢO VỆ

### 1.1. Định vị Hệ thống (System Positioning)

Hai miền nghiệp vụ lõi của hệ thống là HRM và iOffice. Auth/SSO là cơ chế xác thực/tích hợp; Kafka, FCM và `modules/notification` là **cơ chế thông báo nghiệp vụ xuyên suốt**, không phải miền nghiệp vụ độc lập. Backend chỉ phát sự kiện thông báo, không bảo đảm thiết bị nhận hoặc exactly-once.
> **“MyHCMUT Mobile là ứng dụng di động tích hợp và mở rộng các hệ thống quản lý nghiệp vụ hiện hữu của Nhà trường (HRM và iOffice), không phải là hệ thống HRM xây mới từ đầu.”**

- **Phần kế thừa hiện hữu:** CSDL PostgreSQL của Nhà trường (hơn 100 bảng), API và Socket.IO của Lịch công tác/Điểm danh iOffice, Quy trình phê duyệt văn bản/nhiệm vụ, Bảng danh mục hành chính.
- **Phần sinh viên phát triển mới:**
  - Ứng dụng di động Flutter Modular Monorepo (Melos, Riverpod 3, Dio Interceptors).
  - Kiến trúc chuyển tiếp xác thực qua vé dùng một lần (One-Time Ticket SSO Bridge: `POST /api/auth/sso/generate-ticket` và `POST /api/auth/sso/consume-ticket`) kết hợp In-App WebView và JavaScript Bridge hai chiều.
  - Thuật toán kiểm tra ràng buộc nghỉ phép thời gian thực (`POST /api/tcns-nghi-phep/validate`).
  - Giao diện thẩm định sai khác trực quan (`ReviewDiffCard`, `ApproveProfileDetailPage`) và duyệt hàng loạt (`AppBatchActionBar`).
  - Bộ định tuyến thông báo 4 trường metadata (`NotificationRouteParser`) phục vụ điều hướng sâu (Deep Linking).
  - Tầng giao diện và lớp tích hợp kết nối API/WebSocket Lịch công tác và Điểm danh.

### 1.2. Mốc Phiên bản Mã nguồn & Môi trường Kiểm thử (Defense Baseline)

| Kho mã nguồn (Repository) | Nhánh (Branch) | Full Commit Hash (40 ký tự) | Ngày Commit | Tác giả & Trách nhiệm chính |
| :--- | :---: | :---: | :---: | :--- |
| `HK253_DATN_341_2211467_2210392` | `format` | `4f517802bb430287d8a1dd4f7b0b223978f82f84` | 08/09/2026 | Vũ Xuân Chính (Báo cáo Luận văn) |
| `myhcmut-mobile` | `feat/leaveRequest` | `4fe5d9cbd92e971f0b4b75ebfd308e7a8486d079` | 14/09/2026 | Vũ Xuân Chính (Core, HRM, Notify, SSO, Lịch & Unified Calendar Aggregation) |
| `hrm-be` | `chinh-dev` | `38745a26a45fc49c8c5c1cbcf3b91a76f23ae945` | 09/09/2026 | Vũ Xuân Chính (Tích hợp Advisory Lock, Concurrency Tests, SSO Ticket, Leave API) |
| `ioffice-be` | `main` | `53f069a366f7d465253b6fceedeea25a01bec176` | 07/09/2026 | Hệ thống hiện hữu (Chính tích hợp API/Socket) |
| `myhcmut-be` | `dev/khang-chinh` | `7e687a6005ceb6264f3467072081c784a6f9c7bc` | 18/04/2026 | Tống Duy Khang & Vũ Xuân Chính |
| `hrm-fe` | `main` | `83caf6488be3f3f83eee783b8ec8ef832a8e02d0` | 03/09/2026 | Phối hợp tích hợp SSO In-App WebView |
| `ioffice-fe` | `main` | `bf27e36a796a3b072a12f2aa02f6c27fa34a7e7e` | 28/08/2026 | Hệ thống hiện hữu nhà trường |

- **Thông số môi trường:** Flutter SDK 3.41.5, Dart SDK 3.11.3, Node.js v22.22.2, PostgreSQL 14, Redis 7.

### 1.3. Bảng Kiểm thử Đơn vị & Tích hợp Duy nhất (Single Source of Truth - Testing Matrix)

| Kho mã nguồn (Repo) | Commit Hash | Môi trường Thực thi | Loại Kiểm thử | Số Tệp (Files) | Số Test Case | Trạng thái (Pass/Fail/Skip) | Độ phủ (Code Coverage) | Phân định Thực thi |
| :--- | :---: | :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| `myhcmut-mobile` | `4fe5d9c` | Flutter 3.41.5<br>Dart 3.11.3 | Unit & Widget Tests | 42 | **370** | **370 Pass** / 0 Fail / 0 Skip | Core logic / HRM ~70% (chưa đo line/branch coverage bằng lcov cho toàn monorepo) | Chạy qua lệnh `flutter test` cục bộ (~21s) |
| `hrm-be` | `38745a26` | Node v22.22.2<br>Vitest 4.1.10, Redis 7 | Unit & Concurrency Tests (SSO Phase 0, 1, 7; Advisory Lock & Race Condition) | 5 | **57** | **57 Pass** / 0 Fail / 0 Skip | 57/57 test pass; Line coverage ~28.75% trên toàn backend Web hrm-be | Chạy qua `npx vitest run test/unit/sso_*.unit.test.ts test/unit/tcns_nghi_phep/*.unit.test.ts` |
| **Tổng kiểm thử tự động chạy cục bộ** | — | **Môi trường chuẩn** | **Tự động hóa cục bộ** | **47** | **427** | **427 Pass (100% Pass Rate)** | — | Không dùng thuật ngữ CI khi chưa có pipeline server lưu artifacts |
| `myhcmut-mobile` $\leftrightarrow$ Backends | Baseline trên | Thiết bị Android (Pixel 6) / iOS (iPhone 13) staging | Luồng nghiệp vụ E2E (4 kịch bản: Nghỉ phép, Công tác, Nhiệm vụ, Điểm danh) | 4 kịch bản | 4 luồng E2E | 4/4 kịch bản hoàn thành theo checklist kiểm thử thủ công trên môi trường staging (thiết bị Android và iOS test staging) | — | **Kiểm thử tích hợp thủ công (Manual Staging)** |

---

## 2. LÀM RÕ CÁC VẤN ĐỀ ĐỒNG THỜI (CONCURRENCY & RACE CONDITIONS)

### 2.1. Phân tích & Trạng thái Triển khai Kiểm soát Tương tranh (`checkTrungLich`)
- **Bản chất vấn đề mã nguồn nền tảng:** File `hrm-be/modules/md_tcns/tcns_lich_ca_nhan/model/tcns_lich_ca_nhan.model.ts` (dòng 166–191):
  - Phương thức `checkTrungLich` gọi procedure `tcns_lich_ca_nhan_lich_filter` để đọc danh sách lịch hiện có trong CSDL, sau đó lọc bỏ các lịch không rời vị trí việc làm. Nếu phát hiện trùng, hệ thống ném ngoại lệ `ValidationError`.
  - Trong thiết kế nguyên bản của hệ thống Web hiện hữu, câu truy vấn đọc lịch trong `checkTrungLich` chạy trong transaction độc lập của nó (không truyền transaction bên ngoài vào), và không sử dụng khóa mức dòng hay Exclusion Constraint.
  - Đây là một điểm **Check-then-Act Race Condition** kinh điển: Nếu hai yêu cầu đăng ký nghỉ phép của cùng một cán bộ cho cùng một khoảng thời gian được gửi đồng thời (do độ trễ mạng gây retry tự động hoặc người dùng nhấn đúp trên mobile), cả hai yêu cầu có thể cùng đọc DB thấy "chưa trùng" trước khi một trong hai kịp ghi bản ghi mới vào CSDL.
- **Khóa Trạng thái Triển khai theo Chuẩn mực Học thuật:**
  - **Trạng thái tại commit bảo vệ (`hrm-be:38745a26`):** `ĐÃ HIỆN THỰC & KIỂM CHỨNG (Verified Implementation)`. Lỗ hổng đã được nhóm phát hiện, mổ xẻ bản chất và giải quyết triệt để tại mốc Gate 0.5 (Concurrency Hardening) bằng helper `acquireLeaveLock` kích hoạt PostgreSQL Advisory Lock 2 thành phần (`SELECT pg_advisory_xact_lock(hashtext(:lockKey))`) và lan truyền Transaction CSDL xuyên suốt vào `checkTrungLich`, được kiểm chứng qua 11 bài test tương tranh tự động đạt 100% Pass.
  - **Mô tả kỹ thuật chuẩn xác (không dùng từ ngữ tuyệt đối):**
    > Cơ chế Advisory Lock được thiết kế nhằm tuần tự hóa các yêu cầu nộp đơn của cùng cán bộ trong những luồng ghi cùng tuân thủ giao thức khóa và transaction này (`SELECT pg_advisory_xact_lock(hashtext(:shcc))`).
  - **Giới hạn phạm vi bảo vệ:** Advisory Lock này chỉ bảo vệ được tính toàn vẹn giữa các luồng ghi có cùng thực thi câu lệnh khóa này. Nếu có một tiến trình ghi khác ngoài hệ thống chèn trực tiếp vào bảng `tcns_lich_ca_nhan` mà không lấy cùng khóa thì vẫn có khả năng phát sinh xung đột.
  - **Hướng nâng cấp cấp hạ tầng (Chương 7):** Đề xuất thiết lập PostgreSQL Exclusion Constraint (`EXCLUDE USING gist`) ở mức schema CSDL để bảo vệ dữ liệu độc lập với tầng ứng dụng.

### 2.2. Phân tích Kiểm tra Quỹ phép & Quản lý Bản ghi Quỹ phép năm
- **Cơ chế quản lý bản ghi quỹ phép:**
  - Bảng `tcns_so_nghi_phep_nam` có khóa chính phức hợp `PRIMARY KEY (nam, shcc)`.
  - Trong thiết kế hệ thống của Nhà trường, dòng dữ liệu quỹ phép của năm hiện tại được xem là **bất biến dữ liệu kỳ vọng theo thiết kế (Design-time Data Invariant)**: Đầu mỗi năm hành chính, hệ thống có tác vụ khởi tạo dữ liệu hàng loạt (`POST /api/so-nghi-phep-nam/init`, gọi `tcnsSoNghiPhepNam.initData`) để tính toán số ngày phép theo thâm niên và tạo sẵn bản ghi cho cán bộ. Khi tiếp nhận cán bộ mới, quy trình nhân sự kích hoạt khởi tạo bản ghi cho cán bộ đó.
  - Do chưa có nhật ký vận hành (admin audit log) thực tế chứng minh quy trình này luôn được chạy 100% không thiếu sót, báo cáo trình bày đây là tiền đề thiết kế nghiệp vụ của hệ thống HRM hiện hữu thay vì cam kết vận hành tuyệt đối.
- **Cơ chế trừ phép và Khóa mức dòng (Row-Level Locking):**
  - Tại bước phê duyệt cuối cùng (`KET_THUC`), Stored Procedure `tcns_nghi_phep_dang_ky_insert` thực thi trong transaction PostgreSQL, khóa dòng dữ liệu của cán bộ bằng `SELECT ... FOR UPDATE` trên bảng `tcns_so_nghi_phep_nam`.
  - Điều này đảm bảo: Nếu có hai giao dịch phê duyệt chạy đồng thời cho cùng một cán bộ, chúng sẽ được tuần tự hóa (serialized). Giao dịch thứ hai phải chờ giao dịch thứ nhất hoàn tất và đọc lại số dư mới, nếu không đủ ngày phép sẽ ném biệt lệ và rollback, ngăn chặn số dư phép bị âm.
- **Hành vi Phê duyệt Hàng loạt (`POST /api/tcns/quy-trinh/approved`) & Tác động phía Mobile:**
  - Mã nguồn sử dụng vòng lặp `for (const id of ids)` xử lý từng đơn một mà **không có transaction chung bao bọc toàn bộ mảng `ids`**.
  - Do đó, hành vi thực tế là **Per-Item Commit (Fail-Stop)**: Các đơn duyệt thành công trước đó vẫn được ghi nhận trong CSDL; nếu gặp một đơn bị lỗi (ví dụ thiếu số dư hoặc sai trạng thái quy trình), vòng lặp sẽ ném ngoại lệ dừng lại, các đơn còn lại phía sau chưa được duyệt.
  - **Xử lý phía Mobile Client:** Ứng dụng di động không được xem toàn bộ batch là thành công khi API ném mã lỗi; Mobile hiển thị thông báo lỗi và tự động kích hoạt làm mới lại danh sách (refetch/invalidation) để hiển thị chính xác trạng thái thực tế của từng đơn, ngăn người dùng gửi duyệt lại các đơn đã thành công trước đó.

### 2.3. Quy trình Nộp đơn Nghỉ phép 3 Giai đoạn Kỹ thuật & Vòng đời Bản nháp
Đối soát trực tiếp mã nguồn tại commit bảo vệ `hrm-be:38745a26` và `myhcmut-mobile:4fe5d9c`:
1. **Giai đoạn 1 — Khởi tạo Bản nháp (`POST /api/upload/tcns-nghi-phep/dang-ky-mobile`):**
   - Khi cán bộ bấm "Tạo đơn" và chọn ngày trên Mobile, `_handleCreateLeave` gọi endpoint này.
   - Endpoint thực thi: kiểm tra `shcc`, `maDonVi`, gọi `checkTrungLich` sơ bộ, tạo bản ghi đơn nghỉ phép với trạng thái ban đầu là **bản nháp (`maQuyTrinh: 'NHAP', trangThai: 'NHAP'`)**, tạo bản ghi lịch cá nhân sơ bộ trong `tcns_lich_ca_nhan` và tạo các bước quy trình `tcns_quy_trinh`.
   - **Hành vi nghiệp vụ:** Endpoint **chỉ tạo bản nháp**, hoàn toàn chưa nộp đơn vào quy trình duyệt và chưa phát thông báo cho Lãnh đạo. Kết quả trả về `{ phieuId }` để Mobile chuyển sang giao diện Wizard 3 bước.
2. **Giai đoạn 2 — Hoàn thiện Form Wizard & Kiểm tra Điều kiện Hỗ trợ Nhập liệu:**
   - **Tại `POST /api/tcns-nghi-phep/validate`:** Được gọi tại Bước 1 của Wizard để tính toán ngày làm việc thực tế, pre-check trùng lịch và so khớp mốc đăng ký trước (`ngayDKPhepTrongNuoc`/`ngayDKPhepNuocNgoai`). Nếu nộp trễ hạn, endpoint **trả về HTTP 200** với `{ isValid: true, isTooLate: true, label: ... }` mà không ném lỗi, cho phép Mobile kích hoạt hiển thị `LateJustificationWidget` ở Bước 2.
   - **Tại `POST /api/upload/tcns-nghi-phep/file?phieuId=...`:** Tải tệp đính kèm minh chứng cho đơn có mã `phieuId`.
3. **Giai đoạn 3 — Lưu nháp hoặc Nộp đơn Chính thức (`PUT /api/upload/tcns-nghi-phep/dang-ky`):**
   - Tại Bước 3 (Tóm tắt), cán bộ có 2 lựa chọn:
     - **Nếu chọn "Lưu nháp":** Mobile gửi `isSend = 0`. Backend cập nhật thông tin và tệp đính kèm, giữ nguyên trạng thái `NHAP`.
     - **Nếu chọn "Gửi duyệt":** Mobile gửi `isSend = 1`. Backend thực thi chốt chặn thẩm quyền:
       - `validateStaff(shcc)`
       - `checkTrungLich(...)`
       - `validateKhongCoGiaiTrinhChoDuyet(shcc)`
       - `validateDangKyTruoc(...)` (ném ngoại lệ `ValidationError` nếu không hợp lệ)
       - Cập nhật bản ghi đơn: `ngayTao = Date.now()`, gắn danh sách tệp đính kèm
       - Gọi `updateHistory(...)` để chuyển trạng thái quy trình từ `NHAP` sang bước duyệt của Lãnh đạo đơn vị (`target.forwardTo`), chính thức kích hoạt quy trình phê duyệt và đẩy thông báo qua Kafka -> FCM cho Lãnh đạo đơn vị.
4. **Phân tích Vòng đời Bản nháp & Xử lý Lịch Cá nhân:**
   - *Khi tiếp tục chỉnh sửa đơn nháp:* Trong `checkTrungLich` tại [tcns_lich_ca_nhan.model.ts: L173](file:///home/xchinh/workspace/hrm-be/modules/md_tcns/tcns_lich_ca_nhan/model/tcns_lich_ca_nhan.model.ts#L173), điều kiện `i.phanLoai != phanLoai || i.phieuId != id` sẽ tự động loại trừ chính bản ghi lịch của phiếu đang sửa, nên không xảy ra hiện tượng tự xung đột với chính mình.
   - *Khi xóa bản nháp:* Cán bộ có thể chủ động xóa đơn nháp thông qua nút "Xóa" trên Mobile (gọi `DELETE /api/tcns-nghi-phep/dang-ky/:id`). Backend sẽ xóa đồng thời bản ghi đơn nghỉ phép, bản ghi lịch cá nhân `tcns_lich_ca_nhan`, và dữ liệu quy trình `tcns_quy_trinh`, giải phóng hoàn toàn khung giờ đã giữ.
   - *Hạn chế đối với bản nháp bị bỏ quên (Abandoned Drafts):* Hệ thống hiện hữu chưa có tác vụ nền (Scheduled Worker / Cron job) tự động dọn dẹp các bản nháp không được gửi sau một khoảng thời gian quy định. Do đó, nếu cán bộ tạo nháp rồi thoát ứng dụng mà không xóa, bản ghi lịch cá nhân vẫn tồn tại và sẽ khiến các đơn đăng ký mới của cán bộ đó trùng khung giờ bị chặn. Nhóm ghi nhận đây là hạn chế nghiệp vụ và đề xuất giải pháp Cron job dọn nháp trong Chương 7.

---

## 3. LÀM RÕ BẢO MẬT XÁC THỰC SSO & ROUTE CHÍNH XÁC

### 3.1. Phân tích Rủi ro Thực tế của Opaque Bearer Ticket
- **Bản chất an ninh:**
  - Vé SSO là chuỗi ngẫu nhiên 256 bits entropy (`crypto.randomBytes(32).toString('hex')` sinh chuỗi hex 64 ký tự), lưu trong Redis với TTL tối đa 60 giây và bị xóa ngay sau khi đọc bằng lệnh nguyên tử `client.getDel()`.
  - Mục tiêu kiến trúc: Chuyển tiếp phiên làm việc sang Web App phụ trợ mà **không truyền Bearer JWT dài hạn qua URL**.
  - **Trình tự bóc tách vé khỏi URL (URL Stripping Flow):**
    1. Ứng dụng di động mở In-App WebView nạp URL đích kèm vé: `https://.../sso?ticket=<hex64>`.
    2. Web Frontend nhận tham số `ticket`, gọi API `POST /api/auth/sso/consume-ticket` gửi vé lên máy chủ `hrm-be`.
    3. `hrm-be` tiêu thụ vé nguyên tử bằng Redis `getDel`, tái tạo phiên (`req.session.regenerate()`), và cấp Web Session Cookie (`connect.sid`, `HttpOnly`, `SameSite=Lax`, `Secure`).
    4. Frontend Web nhận phản hồi thành công, lập tức thực thi `window.history.replaceState({}, document.title, window.location.pathname)` để bóc tách và loại bỏ hoàn toàn tham số `ticket` khỏi thanh URL hiện tại.
  - **Phạm vi bảo vệ của URL Stripping:**
    - Cơ chế này giảm thiểu nguy cơ vé tồn tại trong lịch sử duyệt web của WebView hoặc bị rò rỉ trong các điều hướng tiếp theo.
    - *Lưu ý an ninh:* Cơ chế này không bảo đảm URL ban đầu không xuất hiện trong access log của reverse proxy/gateway hoặc hệ thống giám sát mạng nếu các hệ thống trung gian đó có cấu hình ghi nhận query string.
  - **Rủi ro can thiệp và hạn chế hiện tại:**
    - Ticket bản thân là một bearer credential ngắn hạn. Nếu kẻ tấn công chiếm được thiết bị hoặc can thiệp proxy để đánh cắp và tiêu thụ vé trước WebView hợp lệ, kẻ tấn công sẽ sở hữu phiên Web. WebView hợp lệ nạp sau sẽ nhận lỗi 401/403 do vé đã bị xóa.
    - Hệ thống hiện tại chưa có cơ chế thu hồi phiên tức thì phía máy chủ (Backchannel Session Revocation).
    - *Định hướng Chương 7:* Nghiên cứu ràng buộc vé với phiên yêu cầu ban đầu (nonce challenge hoặc proof sở hữu phía client) kết hợp cơ chế thu hồi phiên phía máy chủ.

### 3.2. Endpoint SSO Chính xác tại Commit Bảo vệ (`hrm-be:38745a26`)
Các route chính thức được định nghĩa trong file `hrm-be/modules/_default/fw_auth/controller.ts`:
1. `POST /api/auth/sso/generate-ticket`: Cấp vé SSO (Yêu cầu xác thực `user:login` qua Bearer Token, kiểm tra `targetSystem === 'hrm'`).
2. `POST /api/auth/sso/consume-ticket`: Đổi vé lấy Session Cookie (Tiêu thụ vé nguyên tử bằng Redis `getDel`, gọi `req.session.regenerate()` và cấp cookie `HttpOnly`, `SameSite=Lax`, `Secure`).

---

## 4. LÀM RÕ CƠ CHẾ LƯU TRỮ VÀ CACHE CỤC BỘ TRÊN THIẾT BỊ DI ĐỘNG

### 4.1. Bản chất Lưu trữ của Cơ sở dữ liệu SQLite (`hrm_master_data.db`)
- **Đính chính quan trọng:** Cơ sở dữ liệu SQLite (`sqflite`) trên ứng dụng di động **hoàn toàn KHÔNG lưu trữ dữ liệu lý lịch cá nhân nhạy cảm** (không lưu thông tin gia đình, ngạch lương, tiền thưởng, kỷ luật cá nhân).
- **Phạm vi thực tế:** File `modules/hrm/lib/src/profile/services/master_data_database_service.dart` chỉ lưu trữ **47 danh mục dữ liệu tham chiếu dùng chung, không gắn với hồ sơ cá nhân (HRM Master Data)** như: Tỉnh/thành phố, Quận/huyện, Phường/xã, Danh mục Ngạch chức danh, Bậc lương tiêu chuẩn, Dân tộc, Tôn giáo...
- **Mục tiêu kỹ thuật:** Các danh mục tham chiếu dùng chung được lưu cục bộ và đánh chỉ mục B-tree nhằm giảm số lần gọi API, hỗ trợ truy vấn hiệu quả và giảm áp lực tiêu thụ bộ nhớ RAM (tránh giữ hàng chục ngàn dòng danh mục thô trong bộ nhớ ứng dụng).

### 4.2. Cơ chế Lưu trữ Token & Dữ liệu Hồ sơ Cá nhân (Profile Cache)
- **Cơ chế lưu trữ Token tại Commit Bảo vệ:**
  > Trong phiên bản tạo mẫu tại commit bảo vệ, refresh token và token các miền được lưu trong `SharedPreferences` kết hợp in-memory cache (`MultiDomainTokenManager`) thuộc vùng dữ liệu riêng của ứng dụng. Trước khi triển khai chính thức, token cần được chuyển sang cơ chế lưu trữ bảo mật theo nền tảng, chẳng hạn Android Keystore-backed encrypted storage và iOS Keychain thông qua `flutter_secure_storage`. Mức độ bảo vệ bằng phần cứng phụ thuộc thiết bị, cấu hình và phiên bản thư viện được sử dụng.
- **Cơ chế Cache Hồ sơ Cá nhân (SWR) & Rủi ro An ninh:**
  - Dữ liệu lý lịch cá nhân được quản lý qua cơ chế **Stale-While-Revalidate (SWR)** trong `packages/core/global_system` và `modules/hrm/lib/src/profile/providers/profile.dart`.
  - Khóa cache được gắn tiền tố mã cán bộ của phiên đăng nhập (`hrm_mobile_profile_*_$userKey`).
  - Khi đăng xuất, phương thức `clearAllProfileCache()` xóa sạch toàn bộ các khóa cache này khỏi thiết bị.
  - *Lưu ý an ninh:* Việc xóa khi đăng xuất giúp ngăn dữ liệu của phiên trước hiển thị cho tài khoản sau, nhưng không thay thế mã hóa dữ liệu lưu trữ. Trên thiết bị root hoặc khi dữ liệu ứng dụng bị trích xuất trái phép, cache vẫn có nguy cơ bị đọc.

---

## 5. HIỆU CHỈNH THUẬT NGỮ & PHÂN TÁCH ĐÓNG GÓP

Khi mô tả biểu đồ hoạt động Chương 4, dùng nhãn **“phát sinh sự kiện thông báo”** tại chuyển trạng thái nghiệp vụ thực sự; không dùng “gửi thông báo” như một hoạt động nghiệp vụ chung chung.

1. **Về danh mục hồ sơ:**
   - Hệ thống Web HRM lưu trữ dữ liệu trên nhiều bảng cơ sở dữ liệu quan hệ PostgreSQL; Mobile Adapter và Backend tổng hợp dữ liệu thành **11 nhóm thông tin lý lịch (11 Data Categories)** để trình bày trực quan trên 3 Tab giao diện di động.
2. **Về Lịch công tác và Điểm danh:**
   - *Định vị chuẩn xác:* Sinh viên **tái sử dụng toàn bộ API, kết nối WebSocket (Socket.IO) và quy tắc nghiệp vụ hiện hữu** của hệ thống iOffice; trực tiếp phát triển tầng giao diện di động native Flutter, Sheet điểm danh và bộ quản lý trạng thái Riverpod trên Mobile.
   - *Ranh giới Authoritative Enforcement & Hạn chế Tương tranh:* Việc Mobile chỉ mở nút điểm danh trong vòng 1 giờ trước cuộc họp là điều kiện hiển thị giao diện (UX Gate). Tại máy chủ, `ioffice-be` tại file `schedule-meeting-checkin.js` (dòng 66–78) trực tiếp kiểm tra quyền `user.shcc`, quyền `scheduleGeneral:read`, kiểm tra lại thời gian máy chủ (`now >= startTime - 1 giờ` và `now <= endOfDay`), và kiểm tra trạng thái điểm danh trước khi ghi nhận (`bulkCreate` trong transaction).  
   *Lưu ý học thuật:* Do bảng `schedule_meeting_attendance` trong CSDL hiện hữu chưa thiết lập ràng buộc `UNIQUE (item_id, created_by)` mà chỉ thực hiện kiểm tra đọc rồi chèn (Check-then-Insert), hệ thống vẫn tiềm ẩn nguy cơ Check-then-Act Race Condition nếu có hai yêu cầu điểm danh đồng thời từ cùng một tài khoản. Nhóm ghi nhận đây là điểm cần hoàn thiện schema ở Chương 7.
3. **Về Cấu trúc Form Wizard Nghỉ phép 3 bước (Đối chiếu với ba widget trong mã nguồn):**
   - **Bước 1 (`LeaveRequestStep1` - Thông tin cơ bản):** Nhập phạm vi nghỉ, lý do, địa điểm/quốc gia, ngày và buổi bắt đầu/kết thúc, ghi chú. Kích hoạt gọi `POST /api/tcns-nghi-phep/validate` để kiểm tra trùng lịch và thời hạn đăng ký trước.
   - **Bước 2 (`LeaveRequestStep2` - Đính kèm & Cam kết):** Hiển thị tổng số ngày nghỉ và sổ quỹ phép năm (`VacationBalanceWidget`); tải tệp đính kèm (`FileCard`); nếu nhận cờ `isTooLate == true` từ backend thì bắt buộc nhập lý do giải trình (`LateJustificationWidget`); tích cam kết bàn giao công việc (`CommitmentWidget`).
   - **Bước 3 (`LeaveRequestStep3` - Tóm tắt):** Rà soát toàn bộ thông tin cơ bản, tệp đính kèm, nội dung cam kết/giải trình; cung cấp nút Gửi duyệt hoặc Lưu nháp.
4. **Về Tính Idempotent của Kafka $\rightarrow$ FCM:**
   - Việc ghi nhận sự kiện đã xử lý và tạo bản ghi `fw_notification` cần được thực thi trong **cùng một Database Transaction** hoặc tối ưu hơn là bổ sung cột `event_id: UUID` có ràng buộc `UNIQUE` ngay trên bảng `fw_notification` kết hợp cú pháp `INSERT ... ON CONFLICT DO NOTHING`.
5. **Kiến trúc Tổng hợp Lịch làm việc Đa phân hệ (Unified Calendar Aggregation - `CLM-SCH-01` / `UC-SCH-02`) trên Mobile:**
   - *Bối cảnh và Thách thức Tích hợp:* Lịch họp và lịch công tác iOffice (`ScheduleItem`) được quản lý bởi máy chủ `ioffice-be`, trong khi dữ liệu đăng ký nghỉ phép (`HrmLeaveItem`) và chuyến đi công tác cá nhân (`HrmBusinessTripItem`) lại thuộc thẩm quyền lưu trữ của máy chủ nhân sự `hrm-be`. Hai hệ thống sử dụng cơ sở dữ liệu và lược đồ độc lập.
   - *Giải pháp Adapter Pattern tại Mobile Client:* Nhóm quyết định không sửa đổi CSDL backend để gộp bảng (tránh phá vỡ tính bao gói và ranh giới Bounded Context của Nhà trường), mà triển khai mô hình **Adapter Pattern** tại tầng Mobile Client (`modules/ioffice`, tuân thủ cam kết kỹ thuật `CLM-SCH-01`):
     - `HrmLeaveScheduleMapper`: Lọc các đơn nghỉ phép đã được phê duyệt (`isApproved`), tính toán mốc giờ thực tế (Sáng 07:30 - 11:30, Chiều 13:00 - 17:00), gán màu nhận diện `#D97706` (`AppTheme.warning`) và ánh xạ sang `ScheduleItem`.
     - `HrmBusinessTripScheduleMapper`: Lọc các chuyến đi công tác đã được duyệt, gán khung giờ chuẩn 07:30 - 17:00, gán màu nhận diện `#1488DB` (`AppColors.primary`) và ánh xạ sang `ScheduleItem`.
     - `ScheduleItemHelper`: Cung cấp các tiện ích xử lý sự kiện đa ngày (`multiDayRangeText`, `formattedTimeOnDay`), gắn cờ `isMultiDay`, hỗ trợ định dạng an toàn cho giao diện Lịch tuần / Lịch ngày.
   - *Quy tắc Phân vùng Khóa Chính Âm (Negative ID Collision-Free Partitioning):*
     - iOffice Event ID: $id_{\text{ioffice}} > 0$.
     - HRM Nghỉ phép ID: $id_{\text{leave}} = -\text{phieuId} \in [-999999, -1]$.
     - HRM Đi công tác ID: $id_{\text{trip}} = -(1000000 + \text{id}) \le -1000001$.
     - Cơ chế này loại trừ 100% khả năng xung đột khóa chính giữa 3 nguồn dữ liệu khác nhau trên cùng một danh sách hiển thị.
   - *Cơ chế Hợp nhất Trạng thái Riverpod và Cách ly Lỗi (Fault Isolation):*
     - Provider `scheduleListProvider(startTime, endTime)` gọi bất đồng bộ đồng thời cả 3 nguồn dữ liệu. Các lời gọi sang HRM được bọc riêng trong khối `try-catch`; nếu phân hệ HRM gặp sự cố mạng hoặc lỗi phiên, ứng dụng vẫn hiển thị trọn vẹn lịch họp iOffice mà không làm crash màn hình.
     - Danh sách sau khi hợp nhất được sắp xếp tăng dần theo mốc thời gian bắt đầu: `combined.sort((a, b) => int.parse(a.startTime).compareTo(int.parse(b.startTime)))`.
   - *Kiểm chứng Thực nghiệm:* Đã bổ sung 14 unit tests chuyên sâu (`hrm_leave_mapper_test.dart`, `hrm_business_trip_mapper_test.dart`, `schedule_item_helper_test.dart`) cùng **20 widget tests mới** (`compact_schedule_test.dart` (5 tests), `custom_table_calendar_test.dart` (7 tests), `schedule_event_card_widget_test.dart` (8 tests)), nâng tổng số test của `modules/ioffice` lên **77 tests** và tổng toàn bộ Mobile Client đạt **370 tests** (toàn hệ thống **427 tests**, 100% Pass Rate, thời gian thực thi ~21s trên baseline commit `myhcmut-mobile:4fe5d9c`).

---

## 6. LỜI GIẢI MẪU CHO 10 CÂU HỎI PHẢN BIỆN TRỌNG TÂM CỦA HỘI ĐỒNG

### Câu 1: “`SELECT FOR UPDATE` khóa số dư, nhưng cơ chế nào ngăn hai đơn đồng thời cùng vượt qua `checkTrungLich`?”
> **Trả lời:**  
> “Nhóm đã nghiên cứu sâu bài toán tương tranh này và xác định rằng trong mã nguồn hiện hữu tại `tcns_lich_ca_nhan.model.ts`, phương thức `checkTrungLich` là một câu truy vấn đọc độc lập, tạo nên điểm **Check-then-Act Race Condition** nếu hai yêu cầu của cùng một cán bộ đến đồng thời ở cùng một thời điểm.  
> Nhóm đã phân tích hạn chế này trong báo cáo (Chương 4) và xây dựng **thiết kế kiến trúc kiểm soát tương tranh 2 lớp** (Chương 5):  
> 1. *Lớp 1 (Optimistic Pre-validation UI):* Giữ endpoint `POST /api/tcns-nghi-phep/validate` để hỗ trợ nhập liệu tức thời trên Mobile mà không khóa DB.  
> 2. *Lớp 2 (Pessimistic Advisory Lock Serialization):* Tại đường ghi nộp đơn (`PUT /api/upload/tcns-nghi-phep/dang-ky` với `isSend = 1`), phương án thiết kế áp dụng khóa `SELECT pg_advisory_xact_lock(hashtext(:shcc))` trong transaction ghi và truyền transaction vào `checkTrungLich`. Cơ chế này tuần tự hóa các yêu cầu nộp đơn của cùng cán bộ trong những luồng ghi cùng tuân thủ giao thức khóa này. Nhóm cũng đề xuất hướng mở rộng dài hạn ở Chương 7 là thiết lập PostgreSQL Exclusion Constraint (`EXCLUDE USING gist`) ở mức schema CSDL.”

### Câu 2: “Nếu chưa tồn tại dòng quỹ phép của năm hiện tại thì `FOR UPDATE` khóa cái gì?”
> **Trả lời:**  
> “Theo tiền đề thiết kế nghiệp vụ của Nhà trường, dòng quỹ phép trong bảng `tcns_so_nghi_phep_nam` là **bất biến dữ liệu kỳ vọng theo thiết kế (Design-time Data Invariant)**:  
> Đầu mỗi năm hành chính, hệ thống hỗ trợ tác vụ khởi tạo hàng loạt qua endpoint `POST /api/so-nghi-phep-nam/init` để tính toán số ngày phép theo thâm niên và chèn trước bản ghi cho toàn bộ cán bộ viên chức theo khóa chính `(nam, shcc)`. Đối với cán bộ tuyển dụng mới trong năm, quy trình tiếp nhận nhân sự kích hoạt hàm `initData` để tạo bản ghi quỹ phép của năm đó. Do đó, khi chuyên viên TCCB duyệt đơn, dòng dữ liệu quỹ phép của năm được kỳ vọng luôn tồn tại để lệnh `SELECT ... FOR UPDATE` thực hiện khóa mức dòng an toàn. Tuy nhiên, nếu thiếu vắng nhật ký vận hành chứng minh việc chạy lệnh này diễn ra không sót 100%, nhóm ghi nhận đây là điều kiện tiên quyết về tính toàn vẹn dữ liệu cần có sự phối hợp giữa quản trị viên CSDL và hệ thống.”

### Câu 3: “Nếu kẻ tấn công tiêu thụ ticket trước, session của họ bị phát hiện hoặc thu hồi thế nào? URL có bị lộ ticket không?”
> **Trả lời:**  
> “Bản chất vé SSO là một Opaque Bearer Credential ngắn hạn (tối đa 60 giây).  
> 1. *Về cơ chế làm sạch URL:* Khi WebView nạp URL chứa vé, frontend Web gọi `POST /api/auth/sso/consume-ticket`. Backend xác thực qua Redis `getDel`, tái tạo phiên và cấp Cookie bảo mật. Sau đó, giao diện Web lập tức thực hiện `window.history.replaceState` sang URL sạch không còn tham số `ticket`, ngăn chặn việc lộ vé qua URL lưu lại trong lịch sử duyệt web. Tuy nhiên, việc này không ngăn URL ban đầu xuất hiện trong access log server nếu gateway có cấu hình log query string.  
> 2. *Về rủi ro can thiệp:* Nếu kẻ tấn công chiếm được thiết bị hoặc proxy để tiêu thụ vé trước WebView hợp lệ, kẻ đó sẽ sở hữu phiên Web. WebView hợp lệ nạp sau sẽ bị từ chối với lỗi 401/403 do vé đã bị Redis `getDel` xóa. Ứng dụng di động sẽ phát hiện ra sự cố nạp phiên thất bại và cảnh báo người dùng.  
> 3. *Hạn chế:* Hệ thống chưa có cơ chế Backchannel Revocation để thu hồi tức thì phiên mà kẻ tấn công vừa tạo. Nhóm ghi nhận đây là hạn chế an ninh và đề xuất giải pháp nâng cấp trong Chương 7: Nghiên cứu ràng buộc vé với phiên yêu cầu ban đầu (nonce challenge hoặc proof sở hữu phía client) kết hợp cơ chế thu hồi phiên phía máy chủ.”

### Câu 4: “Vì sao dữ liệu lý lịch nhạy cảm lại được cache bằng SQLite không mã hóa?”
> **Trả lời:**  
> “Em xin phép đính chính rõ một điểm kỹ thuật: **Cơ sở dữ liệu SQLite (`hrm_master_data.db`) trên ứng dụng di động hoàn toàn không lưu trữ bất kỳ dữ liệu lý lịch cá nhân nhạy cảm nào**. SQLite chỉ được sử dụng để lưu trữ 47 danh mục dữ liệu tham chiếu dùng chung, không gắn với hồ sơ cá nhân (như Tỉnh/Thành phố, Ngạch chức danh, Bậc lương tiêu chuẩn, Dân tộc, Tôn giáo...) được lập chỉ mục B-tree để giảm số lần gọi API, hỗ trợ truy vấn hiệu quả và giảm áp lực bộ nhớ RAM.  
> Dữ liệu lý lịch cá nhân chỉ được lưu tạm thời qua cơ chế Stale-While-Revalidate trong bộ nhớ riêng của ứng dụng với khóa định danh phân tách riêng biệt theo từng tài khoản (`$userKey`). Khi người dùng đăng xuất, hàm `clearAllProfileCache()` sẽ lập tức xóa sạch toàn bộ các bản ghi cache này khỏi thiết bị. Nhóm cũng ghi nhận trong báo cáo rằng cơ chế xóa khi logout ngăn ngừa rủi ro dùng chung máy thông thường, nhưng trên thiết bị đã bị root/jailbreak, dữ liệu vẫn có nguy cơ bị trích xuất nếu không được mã hóa cấp file.”

### Câu 5: “Khi duyệt hàng loạt, một đơn thất bại thì toàn bộ batch rollback hay trả kết quả từng đơn?”
> **Trả lời:**  
> “Tại endpoint `POST /api/tcns/quy-trinh/approved` của backend hiện hữu, logic duyệt hàng loạt được triển khai bằng vòng lặp duyệt qua từng mã phiếu (`for (const id of ids)`) mà không sử dụng một transaction bao bọc toàn bộ batch.  
> Do đó, cơ chế xử lý thực tế là **Per-Item Commit (Fail-Stop)**: Các đơn duyệt thành công trước đó sẽ được commit độc lập vào cơ sở dữ liệu. Nếu gặp một đơn bị lỗi (ví dụ sai trạng thái quy trình hoặc vi phạm số dư), tiến trình sẽ ném ngoại lệ dừng lại; các đơn trước đó không bị rollback, còn các đơn phía sau chưa được duyệt.  
> Phía ứng dụng Mobile xử lý tình huống này bằng cách: khi nhận mã lỗi từ API, Mobile không coi toàn bộ batch là thành công mà lập tức hiển thị thông báo lỗi và kích hoạt refetch lại danh sách để đồng bộ trạng thái thực tế của từng đơn từ CSDL, ngăn ngừa việc người dùng gửi duyệt lại các đơn đã thành công trước đó.”

### Câu 6: “Nếu `POST /dang-ky-mobile` chỉ tạo trạng thái `NHAP`, API nào thực sự gửi đơn vào quy trình phê duyệt?”
> **Trả lời:**  
> “Trong kiến trúc nộp đơn của MyHCMUT Mobile, quy trình được chia thành **3 giai đoạn kỹ thuật rõ ràng**:  
> 1. *Giai đoạn 1 — Khởi tạo bản nháp:* Khi cán bộ chọn ngày và nhấn 'Tạo đơn' tại màn hình danh sách, Mobile gọi `POST /api/upload/tcns-nghi-phep/dang-ky-mobile`. Endpoint này khởi tạo bản ghi đơn ở trạng thái `NHAP` (nháp), khởi tạo sẵn mẫu quy trình các bước duyệt trong `tcns_quy_trinh` và bản ghi lịch cá nhân sơ bộ, trả về `phieuId`. Đơn lúc này **chưa được gửi vào quy trình** và **chưa phát thông báo cho lãnh đạo**.  
> 2. *Giai đoạn 2 — Hoàn thiện Form Wizard & Kiểm tra hỗ trợ:* Cán bộ chuyển sang Form Wizard 3 bước; Mobile gọi `POST /api/tcns-nghi-phep/validate` để kiểm tra sơ bộ và tải tệp minh chứng qua `POST /file?phieuId=...`.  
> 3. *Giai đoạn 3 — Lưu nháp hoặc Nộp đơn chính thức:* Tại Bước 3 (Tóm tắt):  
>    - Nếu chọn 'Lưu nháp', Mobile gọi `PUT /api/upload/tcns-nghi-phep/dang-ky` với `isSend = 0`.  
>    - Nếu chọn 'Gửi duyệt', Mobile gọi `PUT /api/upload/tcns-nghi-phep/dang-ky` với **`isSend = 1`**.  
>    Chính tại endpoint `PUT` với cờ `isSend = 1` này, backend mới thực thi kiểm tra thẩm quyền `validateStaff`, kiểm tra đăng ký trước `validateDangKyTruoc`, cập nhật ngày nộp chính thức `ngayTao = Date.now()`, và gọi hàm `updateHistory` để chuyển trạng thái quy trình từ `NHAP` sang bước duyệt của Lãnh đạo đơn vị (`target.forwardTo`), đồng thời kích hoạt phát thông báo đẩy qua Kafka sang FCM tới điện thoại của Lãnh đạo.”

### Câu 7: “Nếu cán bộ tạo đơn nháp nhưng thoát ứng dụng và không bao giờ gửi, bản ghi lịch cá nhân nháp có làm khóa lịch vĩnh viễn không?”
> **Trả lời:**  
> “Theo phân tích trực tiếp mã nguồn `hrm-be`:  
> 1. *Khi chỉnh sửa cùng đơn nháp:* Hàm `checkTrungLich` tại [tcns_lich_ca_nhan.model.ts](file:///home/xchinh/workspace/hrm-be/modules/md_tcns/tcns_lich_ca_nhan/model/tcns_lich_ca_nhan.model.ts#L173) có mệnh đề `i.phanLoai != phanLoai || i.phieuId != id`, do đó hệ thống tự động loại trừ chính bản ghi lịch của phiếu đang thao tác, người dùng hoàn toàn có thể tiếp tục cập nhật mà không bị báo trùng.  
> 2. *Cơ chế giải phóng chủ động:* Ứng dụng di động cung cấp chức năng xóa đơn nháp (gọi `DELETE /api/tcns-nghi-phep/dang-ky/:id`). Khi xóa, backend kích hoạt xóa các bản ghi liên quan trong `tcns_nghi_phep_dang_ky`, `tcns_lich_ca_nhan`, và `tcns_quy_trinh` thông qua `Promise.all` (trong mã nguồn hiện tại chưa bọc transaction CSDL), giải phóng ngay lập tức khung giờ cho cán bộ.  
> 3. *Hạn chế đối với bản nháp bị bỏ quên (Abandoned Drafts):* Hệ thống hiện tại chưa có cơ chế Scheduled Worker / Cron job quét và tự động hủy các bản nháp bị bỏ quên sau thời hạn lưu trữ quy định do quản trị hệ thống cấu hình (ví dụ: 30 ngày kể từ ngày khởi tạo nháp). Nếu cán bộ không chủ động xóa, bản ghi lịch cá nhân vẫn tồn tại và sẽ chặn các đơn đăng ký mới trong cùng khung giờ. Nhóm đã ghi nhận đây là hạn chế nghiệp vụ trong báo cáo và đưa đề xuất triển khai Cron job dọn nháp định kỳ kèm việc bọc `DELETE` trong CSDL transaction vào Chương 7.”

### Câu 8: “Tại sao không lưu trực tiếp sự kiện nghỉ phép và đi công tác vào bảng lịch iOffice ở backend mà lại sử dụng Adapter Pattern tổng hợp ở tầng Mobile Client?”
> **Trả lời:**  
> “Nhóm đã nghiên cứu và cân nhắc kỹ giữa hai hướng tiếp cận kiến trúc: (1) Gộp dữ liệu ở tầng cơ sở dữ liệu máy chủ và (2) Áp dụng Adapter Pattern tổng hợp ở tầng Client di động:  
> 1. *Bảo toàn tính độc lập ranh giới dịch vụ (Bounded Context Separation):* Phân hệ HRM (`hrm-be`) và iOffice (`ioffice-be`) là hai hệ thống máy chủ dịch vụ độc lập của Trường ĐHBK với cơ sở dữ liệu PostgreSQL riêng biệt, lược đồ schema và chính sách phân quyền RBAC hoàn toàn độc lập. Nếu ghi trực tiếp bản ghi nghỉ phép và đi công tác vào bảng lịch `eoffice_lich_tuan` của iOffice, chúng ta sẽ tạo ra sự phụ thuộc chặt chẽ giữa hai backend (Tight Coupling), phá vỡ nguyên lý phân tách trách nhiệm (Single Responsibility Principle) và đòi hỏi phải mở quyền ghi chéo CSDL mức cao giữa hai hệ thống.  
> 2. *Khác biệt căn bản về vòng đời và thẩm quyền dữ liệu (Lifecycle & Data Authority):* Lịch họp iOffice chủ yếu là lịch sự kiện công cộng hoặc lịch làm việc theo đơn vị; trong khi lịch nghỉ phép và công tác là dữ liệu nhân sự cá nhân nhạy cảm gắn liền với quy trình phê duyệt nhiều bước (`NHAP`, `CHO_DUYET`, `KET_THUC`, `TU_CHOI`, `THU_HOI`), có thể bị chỉnh sửa hoặc thu hồi bất kỳ lúc nào. Nếu sao chép sự kiện vào CSDL iOffice, hệ thống sẽ đối mặt với bài toán đồng bộ dữ liệu phân tán hai chiều cực kỳ phức tạp (Two-Way Eventual Consistency), tiềm ẩn nguy cơ sai lệch dữ liệu nếu đơn nghỉ phép bị thu hồi ở HRM nhưng chưa kịp xóa ở bảng lịch iOffice.  
> 3. *Nguyên lý Fault Isolation (Cách ly lỗi) và An toàn giao diện:* Mô hình Adapter Pattern trên Mobile Client thông qua `HrmLeaveScheduleMapper` và `HrmBusinessTripScheduleMapper` kết hợp kỹ thuật phân vùng khóa chính âm collision-free (`-phieuId` và `-(1000000 + id)`) cho phép tổng hợp hiển thị đồng nhất mà không làm thay đổi dù chỉ 1 dòng dữ liệu trong CSDL của cả hai backend. Đặc biệt, luồng tổng hợp trong `scheduleListProvider` áp dụng nguyên tắc Fault Isolation: các lời gọi sang HRM được bọc riêng biệt trong khối try/catch; nếu dịch vụ HRM gặp sự cố mạng hoặc cán bộ chưa đăng nhập phiên HRM, ứng dụng vẫn hiển thị trọn vẹn lịch họp iOffice bình thường mà không gây sập giao diện (Graceful Degradation).  
> 4. *Bằng chứng thực nghiệm:* Nhóm đã hiện thực hóa trọn vẹn kiến trúc này tại baseline commit `4fe5d9c` với 34 bài kiểm thử tự động chuyên sâu cho phân hệ Lịch và iOffice (14 mapper/helper unit tests + 20 widget tests mới trong `modules/ioffice/test/`), nâng tổng số test của `modules/ioffice` lên 77 tests và toàn hệ thống lên 427 tests (100% Pass Rate), chứng minh tính đúng đắn và độ tin cậy của giải pháp kiến trúc này.”

### Câu 9: “Tại sao nhóm nghiên cứu không đưa phân hệ Quản lý Đề tài Khoa học Công nghệ (KHCN) và Chữ ký số Viettel CA vào phạm vi tích hợp nghiệm thu chính thức của luận văn?”
> **Trả lời:**  
> “Dựa trên kết quả khảo sát thực tế hệ sinh thái CNTT của Trường ĐHBK – ĐHQG-HCM, nhóm nghiên cứu đã chủ động phân định rạch ròi phạm vi nghiệm thu chính thức của đề tài dựa trên các căn cứ khoa học sau:  
> 1. *Hiện trạng hạ tầng dịch vụ và CSDL của Nhà trường:* Trường chưa cung cấp hệ thống API backend và CSDL quan hệ tập trung cho phân hệ Quản lý Đề tài KHCN (các quy trình đăng ký, nghiệm thu đề tài hiện vẫn diễn ra qua biểu mẫu giấy hoặc website rời rạc chưa được số hóa thành dịch vụ backend mở). Tương tự, Nhà trường chưa trang bị máy chủ dịch vụ ký số PKI/SmartCA tập trung kết nối trực tiếp với các ứng dụng di động.  
> 2. *Bảo đảm chuẩn mực trung thực học thuật và khả năng kiểm chứng:* Nếu đưa các phân hệ này vào phạm vi tích hợp nghiệm thu chính thức khi Nhà trường chưa có hạ tầng backend tương ứng, nhóm sẽ buộc phải tự xây dựng các dịch vụ giả lập (mock backend) hoặc tạo các chức năng hình thức không thể vận hành thực tế. Điều này vi phạm nguyên tắc khoa học về tính trung thực và khả năng kiểm chứng thực nghiệm độc lập của luận văn kỹ sư.  
> 3. *Tập trung vào miền nghiệp vụ và cơ chế hỗ trợ:* Nhóm tập trung vào hai miền nghiệp vụ có backend thực tế đang vận hành là HRM và iOffice, với Auth/SSO là cơ chế xác thực/tích hợp và `modules/notification` là cơ chế thông báo nghiệp vụ xuyên suốt. Phạm vi này được bao phủ bởi 427 bài kiểm thử tự động tại baseline `4fe5d9c`; KHCN và ký số PKI được định vị là hạn chế/hướng phát triển Chương 7.”

### Câu 10: “Nhóm đã xử lý các thách thức về giao diện (UI) và tính công thái học trên màn hình Lịch công tác di động như thế nào, đặc biệt khi hiển thị đồng thời nhiều nguồn sự kiện?”
> **Trả lời:**  
> “Khi tích hợp và hiển thị đồng thời nhiều nguồn sự kiện (lịch họp iOffice, lịch nghỉ phép HRM, lịch đi công tác HRM) trên màn hình Lịch công tác di động, nhóm đã giải quyết triệt để các thách thức về giao diện và tính công thái học:  
> 1. *Phân tích và khắc phục lỗi RenderFlex Overflow trong TableCalendar:* Thư viện `table_calendar` mặc định hiển thị các chấm đánh dấu (marker dots) bên dưới số ngày để thể hiện số lượng sự kiện. Khi một ngày có nhiều sự kiện trùng lặp từ cả 3 nguồn, chiều cao ô ngày vượt quá ràng buộc dọc, phát sinh lỗi `RenderFlex overflowed by X pixels` trên các màn hình có mật độ hiển thị cao hoặc khi chọn ngày. Nhóm đã tái thiết kế `CustomTableCalendar`: loại bỏ hoàn toàn các marker dots gây tràn khung, chuẩn hóa bố cục căn giữa chữ số ngày (`Alignment.center`), và chuyển toàn bộ thông tin trực quan hóa chi tiết xuống danh sách thẻ sự kiện bên dưới (`CompactScheduleView`, `ScheduleEventCardWidget`).  
> 2. *Khôi phục dynamic eventColor và chuẩn hóa mã màu/biểu tượng ngữ nghĩa:* Nhóm sử dụng hàm ánh xạ màu động `eventColor: (event) => event.color` để phân biệt trực quan tức thì loại lịch theo Design Tokens:  
>    - *Cuộc họp (Meeting / iOffice):* Xanh dương `#1E88E5` (`AppTheme.primaryBlue`), biểu tượng `Icons.meeting_room_outlined`.  
>    - *Nghỉ phép (Leave / HRM):* Vàng cam `#FF9800` / `#D97706` (`AppColors.warning`), biểu tượng `Icons.event_busy_outlined`.  
>    - *Đi công tác (Business Trip / HRM):* Xanh da trời `#1488DB` (`AppColors.primary`), biểu tượng `Icons.flight_takeoff_outlined`.  
>    Đồng thời, widget `CompactSchedule` được hoàn thiện với các nút điều hướng chevron và viền màu phân định loại lịch rõ ràng.  
> 3. *Tích hợp thực thể miền `ScheduleAttendanceStatus` hiển thị tức thời trạng thái tham dự:* Nhóm xây dựng enum miền 4 trạng thái (`none`, `attended`, `absent`, `notAttended`) cùng widget `AttendanceStatusChip` gắn trực tiếp trên thẻ sự kiện `ScheduleEventCardWidget`, giúp cán bộ nhận diện tức thì tình trạng điểm danh của mình tại cuộc họp mà không cần mở sâu vào chi tiết.  
> 4. *Bảo vệ toàn diện bằng 20 Widget Tests tự động:* Toàn bộ các cải tiến giao diện trên được bảo vệ bởi **20 widget tests mới** trong `modules/ioffice` (`compact_schedule_test.dart` [5 tests], `custom_table_calendar_test.dart` [7 tests], `schedule_event_card_widget_test.dart` [8 tests]), đưa tổng số bài test của `modules/ioffice` lên 77 tests và tổng toàn hệ thống lên 427 tests (100% Pass Rate trên baseline `4fe5d9c`), cam kết chất lượng giao diện ổn định và không hồi quy.”
