# Kế Hoạch Chạy Lại Kiểm Thử (10 Fail + 5 Blocked) Trên Môi Trường Hiện Tại

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Thực hiện chạy lại toàn bộ 10 kịch bản từng `Fail` (đặc biệt `PRO-01` sau khi HRM FE đã cập nhật `consume-ticket`) và unblock 5 kịch bản từng `Blocked` (`LEV-01`, `BTR-01`, `OFF-02`, `SCH-02`, `NET-01`) trên môi trường dịch vụ đang chạy và thiết bị Android thật Realme RMX2151.

**Architecture:** Sử dụng ADB để tương tác, xác thực và chụp ảnh màn hình từ ứng dụng di động `myhcmut-mobile` trên thiết bị thật; kết hợp kịch bản Node.js/Fetch gọi API cô lập vào Auth BE (4000), HRM BE (6023), iOffice BE (3001) và HRM FE (6022); tự động dọn dẹp fixture sau mỗi lần chạy và lưu trữ bằng chứng đã khử dữ liệu nhạy cảm (`<redacted>`).

**Tech Stack:** Flutter / Dart (Mobile), Node.js / TypeScript / Express, PostgreSQL, Redis, Android ADB, Vitest.

**Spec:** [docs/chapter6-7-evidence/04_test_execution_plan.md](file:///home/xchinh/orca/workspaces/HK253_DATN_341_2211467_2210392/main/docs/chapter6-7-evidence/04_test_execution_plan.md)

## Global Constraints

- **Bảo mật dữ liệu (Redaction):** Tuyệt đối không ghi JWT, secret, mật khẩu, cookie, SHCC, số điện thoại, tên thật vào git artifact. Mọi bằng chứng phải được che dữ liệu nhạy cảm.
- **Cô lập và Dọn dẹp (Rollback):** Mọi fixture tạo ra trên CSDL thử nghiệm phải gắn mã chạy `DATN-...` và phải được dọn dẹp hoặc hoàn nguyên về trạng thái ban đầu ngay sau khi kiểm tra xong.
- **Tính trung thực của bằng chứng:** Ghi nhận đúng kết quả thực tế (Pass, Fail, Blocked). Không sửa đổi logic nghiệp vụ hoặc kỳ vọng kiểm thử để ép test Pass.
- **Phân tách ngữ cảnh phiên bản:** Phân biệt rõ giữa snapshot commit khóa ngày 22/09 (`hrm-fe:83caf648`) và working tree cập nhật ngày 23/09 (`hrm-fe:ccce869` có `consume-ticket`).
- **Thiết bị:** Sử dụng thiết bị Android Realme RMX2151 (Android 12/API 31, Serial: `IJROH6SCO7F6IFZ5`) đang kết nối qua ADB.

---

### Task 1: Thiết lập Phiên Đăng Nhập `CB-A` và Chụp Trạng Thái Màn Hình Gốc

**Files:**
- Test script: `/tmp/datn-task1-login-cba.cjs`
- Output: `docs/chapter6-7-evidence/results/DATN-RERUN-20260923/01_login_baseline.png`

**Interfaces:**
- Consumes: `http://127.0.0.1:4000/api/auth/internal-login`, `http://127.0.0.1:4000/api/auth/switch-user`
- Produces: Phiên hoạt động của `CB-A` (User ID: 287) trên thiết bị di động.

- [ ] **Step 1: Kiểm tra trạng thái ứng dụng trên thiết bị qua ADB**
  - Chạy `adb -s IJROH6SCO7F6IFZ5 shell "dumpsys window | grep mCurrentFocus"` để xác nhận ứng dụng `vn.edu.hcmut.myhcmut` đang mở.
- [ ] **Step 2: Thực hiện đăng nhập hoặc nạp token của `CB-A` vào ứng dụng**
  - Sử dụng script tự động `/tmp/datn-current-login-ui-20260923.cjs` hoặc nạp session token qua `FlutterSharedPreferences`.
  - Xác nhận token thuộc `CB-A` (User ID 287).
- [ ] **Step 3: Chụp ảnh màn hình trang chủ / thông tin sau đăng nhập**
  - Chạy `adb exec-out screencap -p > /tmp/datn-baseline-home.png` và xác minh giao diện sẵn sàng.

---

### Task 2: Re-run PRO-01 (In-App WebView SSO & Cập Nhật Lý Lịch Trên FE Mới)

**Files:**
- Test script: `/tmp/datn-task2-pro01-webview.cjs`
- Evidence: `docs/chapter6-7-evidence/results/DATN-PRO-01-RERUN-20260923/` (`manifest.md`, `result.md`, screenshots)

**Interfaces:**
- Consumes: Mobile In-App WebView, `POST /api/auth/sso/generate-ticket`, `POST /api/auth/sso/consume-ticket`, `GET /api/state`, HRM FE `192.168.1.13:6022`
- Produces: Kết quả xác minh SSO chuyển tiếp vào màn hình lý lịch không cần đăng nhập lại và các nhánh cập nhật hồ sơ.

- [ ] **Step 1: Điều hướng đến trang Hồ sơ cá nhân trên Mobile**
  - Mở tab Hồ sơ cá nhân, chụp màn hình native `profile_native.png`.
- [ ] **Step 2: Nhấn nút "Chỉnh sửa lý lịch qua Web"**
  - Quan sát log HTTP request: mobile gọi `POST /api/auth/sso/generate-ticket`, mở WebView đến HRM FE kèm `?ticket=...`.
- [ ] **Step 3: Xác minh FE tiêu thụ vé SSO và vào thẳng giao diện hồ sơ**
  - Chụp ảnh màn hình WebView `webview_profile.png` chứng minh URL đã được xóa tham số ticket, session cookie được thiết lập và trang không chuyển hướng về Sign-in.
- [ ] **Step 4: Thử nghiệm cập nhật một trường dữ liệu (Direct hoặc Đề xuất)**
  - Xác nhận luồng submit trên Web HRM và đóng WebView.
- [ ] **Step 5: Lưu biên bản nghiệm thu `PRO-01`**
  - Ghi nhận trạng thái: Chuyển từ **Fail** (ở snapshot `83caf648`) thành **Pass** (trên working tree `ccce869`).

---

### Task 3: Unblock LEV-01 (Hoàn Thiện Wizard Tạo Và Nộp Đơn Nghỉ Phép Trên Mobile)

**Files:**
- Evidence: `docs/chapter6-7-evidence/results/DATN-LEV-01-RERUN-20260923/` (`manifest.md`, `result.md`, screenshots)

**Interfaces:**
- Consumes: `modules/hrm/lib/src/leave/`, `POST /api/tcns-nghi-phep/dang-ky`
- Produces: Đơn nghỉ phép mới ở trạng thái `CHO_DUYET` được nộp hoàn chỉnh từ UI.

- [ ] **Step 1: Mở màn hình Đăng ký nghỉ phép (Bước 1: Chọn ngày & loại phép)**
  - Chọn loại phép (ví dụ: Nghỉ phép năm), chọn khoảng ngày hợp lệ trong tương lai.
  - Bấm Tiếp tục -> Chụp màn hình `step1.png`.
- [ ] **Step 2: Điền thông tin Bước 2 (Lý do & Minh chứng)**
  - Nhập lý do hợp lệ, đính kèm tệp mẫu (nếu cần).
  - Bấm Tiếp tục -> Chụp màn hình `step2.png`.
- [ ] **Step 3: Hoàn thành Bước 3 (Rà soát & Cam kết & Chọn cấp duyệt)**
  - Tích chọn xác nhận cam kết, chọn người duyệt đơn vị.
  - Bấm **Nộp đơn** (Submit) -> Chụp màn hình `step3_submit.png`.
- [ ] **Step 4: Xác minh đơn xuất hiện trong danh sách và trạng thái backend**
  - Màn hình quay về danh sách đơn; đối chiếu API `GET /api/tcns-nghi-phep/dang-ky/all` xác nhận đơn mới có trạng thái `CHO_DUYET`.
- [ ] **Step 5: Dọn dẹp fixture thử nghiệm**
  - Thu hồi / xóa đơn thử nghiệm vừa tạo qua API test để hoàn nguyên CSDL.
  - Ghi nhận trạng thái `LEV-01`: Chuyển từ **Blocked** thành **Pass** (hoặc Fail nếu nộp lỗi).

---

### Task 4: Unblock OFF-02 (Xem Chi Tiết Văn Bản & Mở File PDF Bằng Ứng Dụng OS)

**Files:**
- Evidence: `docs/chapter6-7-evidence/results/DATN-OFF-02-RERUN-20260923/` (`manifest.md`, `result.md`, screenshots)

**Interfaces:**
- Consumes: `modules/ioffice/`, `open_file` package, iOffice BE `3001`
- Produces: Bằng chứng cơ chế tải file qua Dio và kích hoạt Intent mở PDF của hệ điều hành.

- [ ] **Step 1: Tạo/chọn một văn bản mẫu có đính kèm file PDF trong iOffice**
  - Sử dụng fixture văn bản an toàn có tệp PDF mẫu.
- [ ] **Step 2: Trên Mobile, truy cập phân hệ Văn bản iOffice và mở chi tiết văn bản**
  - Chụp màn hình trang chi tiết văn bản `doc_detail.png`.
- [ ] **Step 3: Nhấn vào tệp PDF đính kèm**
  - Quan sát log ứng dụng: Dio tải tệp về cache thiết bị, sau đó gọi `OpenFile.open(...)`.
- [ ] **Step 4: Xác minh trình mở PDF của hệ điều hành Android xuất hiện**
  - Chụp ảnh màn hình Android mở PDF qua ứng dụng ngoài `pdf_viewer_os.png`.
- [ ] **Step 5: Lưu biên bản nghiệm thu `OFF-02`**
  - Ghi nhận trạng thái: Chuyển từ **Blocked** thành **Pass**.

---

### Task 5: Unblock SCH-02 (Xử Lý Lỗi Tải Lịch & Thao Tác Thử Lại)

**Files:**
- Evidence: `docs/chapter6-7-evidence/results/DATN-SCH-02-RERUN-20260923/` (`manifest.md`, `result.md`, screenshots)

**Interfaces:**
- Consumes: Màn hình Lịch trên mobile, `GET /api/schedule/` hoặc HRM schedule endpoint.
- Produces: Bằng chứng hiển thị trạng thái lỗi có nút "Thử lại" và phục hồi thành công.

- [ ] **Step 1: Mở màn hình Lịch trên ứng dụng Mobile trong điều kiện bình thường**
  - Chụp màn hình hiển thị bình thường `calendar_normal.png`.
- [ ] **Step 2: Kích hoạt lỗi tải dữ liệu có kiểm soát**
  - Tạm thời chặn traffic port 3001/6023 hoặc bật proxy lỗi 500 cho endpoint lịch.
  - Vuốt làm mới màn hình Lịch (Pull-to-refresh).
- [ ] **Step 3: Xác minh giao diện thông báo lỗi chuẩn và nút "Thử lại"**
  - Ứng dụng không crash, hiển thị thông báo lỗi thân thiện và nút Thử lại.
  - Chụp màn hình `calendar_error.png`.
- [ ] **Step 4: Phục hồi kết nối và bấm "Thử lại"**
  - Bỏ chặn port/proxy, nhấn nút "Thử lại".
  - Dữ liệu lịch tải lại thành công -> Chụp màn hình `calendar_recovered.png`.
- [ ] **Step 5: Lưu biên bản nghiệm thu `SCH-02`**
  - Ghi nhận trạng thái: Chuyển từ **Blocked** thành **Pass**.

---

### Task 6: Unblock NET-01 (Timeout Và Lỗi Kết Nối Mạng Chuẩn Hóa)

**Files:**
- Evidence: `docs/chapter6-7-evidence/results/DATN-NET-01-RERUN-20260923/` (`manifest.md`, `result.md`, screenshots)

**Interfaces:**
- Consumes: `packages/core/network`, Dio connection timeout, Airplane mode via ADB.
- Produces: Bằng chứng Dio ném lỗi chuẩn, UI hiển thị thông báo mất mạng và phục hồi sau retry.

- [ ] **Step 1: Kích hoạt chế độ máy bay (Airplane Mode) trên thiết bị thật qua ADB**
  - Lệnh: `adb -s IJROH6SCO7F6IFZ5 shell cmd connectivity airplane-mode enable`
- [ ] **Step 2: Thực hiện một thao tác đọc API trên Mobile**
  - Ví dụ: Kéo làm mới danh sách thông báo hoặc danh sách đơn.
- [ ] **Step 3: Quan sát xử lý lỗi**
  - Xác nhận Dio bắt lỗi kết nối (connect error / timeout), UI hiển thị thông báo lỗi mạng, không bị crash hoặc treo vô hạn.
  - Chụp màn hình `net_offline.png`.
- [ ] **Step 4: Tắt chế độ máy bay và thử lại**
  - Lệnh: `adb -s IJROH6SCO7F6IFZ5 shell cmd connectivity airplane-mode disable`
  - Đợi kết nối Wi-Fi phục hồi, nhấn Thử lại -> Dữ liệu tải lại thành công.
  - Chụp màn hình `net_recovered.png`.
- [ ] **Step 5: Lưu biên bản nghiệm thu `NET-01`**
  - Ghi nhận trạng thái: Chuyển từ **Blocked** thành **Pass**.

---

### Task 7: Unblock BTR-01 (Đánh Giá Toàn Diện Wizard Đi Công Tác & Ràng Buộc Schema)

**Files:**
- Test script: `/tmp/datn-task7-btr01-probe.cjs`
- Evidence: `docs/chapter6-7-evidence/results/DATN-BTR-01-RERUN-20260923/` (`manifest.md`, `result.md`)

**Interfaces:**
- Consumes: `POST /api/tcns-cong-tac/dang-ky`, DB table `tcns_dang_ky_cong_tac`
- Produces: Biên bản chốt trạng thái `BTR-01` (xác thực nguyên nhân lệch schema giữa mobile contract và migration DB).

- [ ] **Step 1: Kiểm tra cấu trúc bảng `tcns_dang_ky_cong_tac` và hợp đồng API**
  - Gửi request với payload chuỗi (chuẩn mobile hiện hành) -> Ghi nhận lỗi 500 do DB yêu cầu JSONB array.
  - Gửi request với payload JSONB array -> Xác nhận backend tiếp nhận và lưu nháp thành công.
- [ ] **Step 2: Kiểm tra validation logic ở backend**
  - Thử gửi chuyến đi nước ngoài không có minh chứng -> Backend từ chối.
  - Thử gửi ngày bắt đầu sau ngày kết thúc -> Backend không tự chặn.
- [ ] **Step 3: Chốt kết luận kỹ thuật cho `BTR-01`**
  - Đánh giá chính thức: Phản ánh trung thực sự lệch hợp đồng schema giữa mobile client và backend migration trong Chương 6–7. Xóa toàn bộ fixture thử nghiệm.

---

### Task 8: Chạy Lại Các Kịch Bản Fail Backend (AUTH-01, LEV-03, LEV-04, LEV-05, BTR-02, BTR-03, OFF-01, SCH-01)

**Files:**
- Test script: `/tmp/datn-task8-backend-rerun.cjs`
- Evidence: Cập nhật thư mục `results/` tương ứng từng kịch bản.

**Interfaces:**
- Consumes: Auth BE (4000), HRM BE (6023), iOffice BE (3001)
- Produces: Bộ kết quả kiểm tra lại trên working tree hiện tại kèm rollback 100%.

- [ ] **Step 1: Chạy lại `AUTH-01` (Kiểm tra xử lý phiên sai chữ ký / hết hạn)**
  - Gửi token sai chữ ký vào HRM BE. Xác nhận mã HTTP trả về (HTTP 200 kèm `{ status: 401 }` hay HTTP 401).
- [ ] **Step 2: Chạy lại `LEV-03` & `BTR-02` (Thu hồi đơn / hồ sơ chờ duyệt)**
  - Tạo đơn/hồ sơ `CHO_DUYET` thử nghiệm, gọi endpoint thu hồi bằng tài khoản chủ sở hữu `CB-A`.
  - Kiểm tra xem backend hiện tại có cho phép thu hồi không hay vẫn trả lỗi không có target `THU_HOI`.
- [ ] **Step 3: Chạy lại `LEV-04` & `BTR-03` (Bắt buộc lý do từ chối)**
  - Gửi request từ chối với lý do chỉ toàn khoảng trắng `"   "`.
  - Xác nhận backend từ chối hay vẫn chấp nhận và đổi trạng thái sang `TU_CHOI`.
- [ ] **Step 4: Chạy lại `LEV-05` (Tương tranh duyệt cuối khi quỹ phép = 1)**
  - Tạo 2 đơn 1 ngày, quỹ phép 1 ngày, gửi 2 request duyệt cuối đồng thời.
  - Ghi nhận số dư cuối (1 hay -1).
- [ ] **Step 5: Chạy lại `OFF-01` & `SCH-01` (Phân quyền tệp văn bản & Điểm danh lịch)**
  - `OFF-01`: Người không được phân công gọi API tải tệp -> Xác nhận backend chặn hay cho tải.
  - `SCH-01`: Người ngoài danh sách mời gọi API điểm danh -> Xác nhận backend chặn hay tạo attendance.
- [ ] **Step 6: Dọn dẹp hoàn toàn mọi fixture**
  - Xác nhận không còn bản ghi rác nào trong CSDL sau lần chạy lại.

---

### Task 9: Chạy Lại TEST-01 (Tái Lập Bộ Test Tự Động Trên Mobile & Backend)

**Files:**
- Test runner: `test_all_target_packages.sh` (mobile), `npm run test` (backend)
- Evidence: `docs/chapter6-7-evidence/results/DATN-TEST-01-RERUN-20260923/`

- [ ] **Step 1: Chạy kiểm thử tự động Mobile**
  - Chạy `flutter test` tuần tự trên 6 package mục tiêu: `packages/shared/auth`, `packages/shared/localization`, `packages/core/global_system`, `modules/hrm`, `modules/notification`, `modules/ioffice`.
  - Ghi nhận số bài test Pass / Fail / Skip.
- [ ] **Step 2: Chạy kiểm thử tự động Backend HRM**
  - Chạy Vitest cho các tệp SSO và tương tranh: `sso_phase0`, `sso_phase1`, `sso_phase7`, `acquire_leave_lock`, `concurrency_race_condition`.
  - Ghi nhận số bài test đạt trên môi trường có Redis.

---

### Task 10: Tổng Hợp Kết Quả Toàn Diện & Cập Nhật Ma Trận Bằng Chứng

**Files:**
- Modify: `docs/chapter6-7-evidence/02_test_evidence_gap_matrix.md`
- Create: `docs/chapter6-7-evidence/results/DATN-STAGE-C-FINAL-20260923/summary.md`

- [ ] **Step 1: Tổng hợp bảng kết quả 21 kịch bản mới**
  - Lập bảng so sánh trước và sau khi chạy lại (đặc biệt nêu rõ các kịch bản đã chuyển từ Blocked/Fail sang Pass).
- [ ] **Step 2: Cập nhật ma trận khoảng trống `02_test_evidence_gap_matrix.md`**
  - Cập nhật cột "Kết quả kiểm thử thực tế", "Trạng thái bằng chứng", "Kết luận được phép".
- [ ] **Step 3: Soát lỗi và đối chiếu hoàn tất tiêu chí nghiệm thu Stage C**
  - Xác nhận đủ điều kiện nghiệm thu theo Mục 9.1 của `04_test_execution_plan.md`.
