# Báo cáo tổng kết thực thi kiểm thử lại toàn diện (Re-run 23/09/2026)

## 1. Bối cảnh và Mục tiêu

Đợt kiểm thử lại (Re-run) được triển khai vào ngày 23/09/2026 nhằm giải quyết toàn diện các hạn chế và khoảng trống bằng chứng từ đợt kiểm thử trước:
1. **Cập nhật mã nguồn:** Kéo và hợp nhất mã nguồn mới nhất của ứng dụng di động (`a6a1dc6`) và đồng bộ frontend HRM (`ccce869`).
2. **Gỡ bỏ trạng thái Blocked:** Thực thi trực tiếp trên thiết bị di động thật (Realme RMX2151, Android 12) đối với các kịch bản bị chặn trước đó.
3. **Phúc tra các kịch bản Fail:** Xác minh tính lặp lại (reproducibility) và căn cứ kỹ thuật của các phát hiện nghiệp vụ ở tầng Backend.
4. **Tái lập bộ kiểm thử tự động (TEST-01):** Khắc phục triệt để các lỗi biên dịch và chạy lại 100% test suite trên cả Mobile Monorepo và Backend.

---

## 2. Bảng tổng hợp trạng thái bộ 22 kịch bản kiểm thử (DATN-RERUN-20260923)

| Mã kịch bản | Phân hệ / Nghiệp vụ | Bộ tối thiểu | Trạng thái Re-run | Bằng chứng thực tế thu thập |
| :---: | :--- | :---: | :---: | :--- |
| **AUTH-01** | Xác thực đa miền & Quản lý phiên | Có | **Pass** | `results/DATN-RERUN-20260923/AUTH-01/` (Bearer token, 401 interceptor) |
| **AUTH-02** | Backend từ chối thao tác trái quyền | Có | **Pass** | `results/DATN-RERUN-20260923/AUTH-02/` (HTTP 403 khi `CB-B` duyệt) |
| **PRO-01** | In-App WebView SSO | Có | **Pass** | `results/DATN-RERUN-20260923/PRO-01/` (4 ảnh + SSO 1-time ticket) |
| **PRO-02** | Xử lý từng phần đề xuất hồ sơ | Có | **Pass** | `results/DATN-RERUN-20260923/PRO-02/` (Duyệt mục 1, từ chối mục 2 có lý do) |
| **LEV-01** | Wizard tạo & nộp đơn nghỉ phép | Có | **Pass** | `results/DATN-RERUN-20260923/LEV-01/` (5 ảnh wizard 3 bước + chi tiết) |
| **LEV-02** | Hủy quy trình & dọn dẹp nháp | Có | **Pass** | `results/DATN-RERUN-20260923/LEV-02/` (Dọn dẹp sạch nháp, không phát sinh rác) |
| **LEV-03** | Ranh giới Nháp–Đã gửi–Bị trả lại | Có | **Pass** | `results/DATN-RERUN-20260923/LEV-03/` (Nháp sửa/xóa được; gửi rồi chặn xóa 400; trả lại nộp lại) |
| **LEV-04** | Bắt buộc nhập lý do từ chối nghỉ phép | Có | **Fail (Bảo lưu)** | `results/DATN-RERUN-20260923/LEV-04/` (Backend nhận lý do khoảng trắng do thiếu `trim()`) |
| **LEV-05** | Duyệt cuối đồng thời & Nhất quán số dư | Có | **Fail (Bảo lưu)** | `results/DATN-RERUN-20260923/LEV-05/` (Lost Update gây âm quỹ phép khi duyệt đồng thời) |
| **BTR-01** | Wizard công tác & Ràng buộc Schema | Có | **Pass** | `results/DATN-RERUN-20260923/BTR-01/` (3 ảnh, chặn ngày sai, chặn trùng lịch, bắt buộc thư mời) |
| **BTR-02** | Ranh giới Nháp–Đã gửi–Bị trả lại công tác | Có | **Pass** | `results/DATN-RERUN-20260923/BTR-02/` (Nháp sửa/xóa được; gửi rồi chặn xóa 400; trả lại nộp lại) |
| **BTR-03** | Phê duyệt, trả lại & luân chuyển đa cấp | Có | **Fail (Bảo lưu)** | `results/DATN-RERUN-20260923/BTR-03/` (Fail lý do khoảng trắng; Pass phân tách quyền thu hồi TCNS/BGH) |
| **BTR-04** | Danh sách & chi tiết hồ sơ công tác | Không (P2) | **Not Run** | Hoãn kiểm thử theo Kế hoạch Mục 2.2 (kịch bản P2 độc lập) |
| **OFF-01** | Phân quyền tệp văn bản đến | Có | **Fail (Bảo lưu)** | `results/DATN-RERUN-20260923/OFF-01/` (Kiểm tra quyền module, thiếu record-level ACL) |
| **OFF-02** | Xem & mở tệp PDF qua ứng dụng OS | Có | **Pass** | `results/DATN-RERUN-20260923/OFF-02/` (4 ảnh, mở qua OS Intent Chooser / WPS Office) |
| **OFF-03** | Danh sách văn bản và nhiệm vụ | Không (P2) | **Not Run** | Hoãn kiểm thử theo Kế hoạch Mục 2.2 (kịch bản P2 độc lập) |
| **OFF-04** | Phân công, tham mưu, chỉ đạo & tiếp nhận | Có | **Pass** | `results/DATN-RERUN-20260923/OFF-04/` (PGQ: phân công -> tiếp nhận -> hoàn tất 100%) |
| **SCH-01** | Điểm danh cuộc họp ngoài danh sách | Có | **Fail (Bảo lưu)** | `results/DATN-RERUN-20260923/SCH-01/` (Fallback cho phép tự điểm danh ngoài danh sách mời) |
| **SCH-02** | Xử lý lỗi tải lịch & Retry Riverpod | Có | **Pass** | `results/DATN-RERUN-20260923/SCH-02/` (3 ảnh, bắt lỗi kiểm soát, retry Riverpod) |
| **NET-01** | Timeout & Airplane Mode | Có | **Pass** | `results/DATN-RERUN-20260923/NET-01/` (4 ảnh, Dio interceptor bắt lỗi mất mạng ngay lập tức) |
| **UI-01** | Rà soát nhất quán giao diện | Không (P2) | **Not Run** | Hoãn kiểm thử theo Kế hoạch Mục 2.2 (kịch bản P2 độc lập) |
| **TEST-01** | Tự động hóa Mobile Monorepo & Backend | Có | **Pass (100%)** | `results/DATN-RERUN-20260923/TEST-01/` (427/427 tests Pass sạch trên toàn hệ thống) |

---

## 3. Chi tiết kết quả gỡ bỏ các rào cản kiểm thử (Unblocked)

### 3.1. PRO-01 — WebView SSO Đăng nhập một lần (Chuyển thành Pass)
- **Môi trường:** Mobile tích hợp mã nguồn mới, gọi Web HRM build từ commit `ccce869`.
- **Hành vi thực tế:**
  1. Cán bộ `CB-A` chọn chức năng Cập nhật lý lịch trên Mobile.
  2. Mobile gọi `POST /api/auth/sso/generate-ticket` nhận vé One-Time có thời hạn ngắn (TTL 60s).
  3. WebView nạp URL kèm vé, Frontend HRM tự động gọi `POST /api/auth/sso/consume-ticket`.
  4. Backend thiết lập cookie phiên `hcmut-nhan-su` và chuyển hướng thẳng vào hồ sơ cá nhân `003009` mà không yêu cầu nhập lại mật khẩu.
- **Bằng chứng:** 4 ảnh chụp từng mốc luân chuyển phiên và bản ghi tiêu thụ vé trong thư mục `results/DATN-PRO-01-RERUN-20260923/`.

### 3.2. LEV-01 — Wizard Lập và Nộp đơn Nghỉ phép (Chuyển thành Pass)
- **Môi trường:** Mobile trên thiết bị thật, giao dịch trực tiếp với HRM Backend.
- **Hành vi thực tế:**
  1. Wizard 3 bước kiểm tra số dư ngày phép, tự động trừ cuối tuần/ngày lễ.
  2. Khởi tạo bản ghi nháp `#289`, nạp minh chứng PDF hợp lệ.
  3. Rà soát thông tin, xác nhận cam kết và gửi đơn vào quy trình duyệt.
  4. Trạng thái đơn chuyển sang `GUI` (Chờ duyệt), danh sách cá nhân cập nhật tức thì.
- **Bằng chứng:** 5 ảnh chụp từng bước wizard và chi tiết đơn `#289` trong thư mục `results/DATN-LEV-01-RERUN-20260923/`.

### 3.3. OFF-02 — Tải và Mở tệp PDF Văn bản đến qua Ứng dụng Hệ điều hành (Chuyển thành Pass)
- **Môi trường:** iOffice Backend port 3001, tệp PDF vật lý đã bổ sung fixture tại `assets/eoffice/van-ban-den/caf59a0f-344b-42a6-bcd7-e87117d31f8f.pdf`.
- **Hành vi thực tế:**
  1. Mở chi tiết văn bản đến `#131/TB-ĐHBK`.
  2. Nhấn vào tệp đính kèm `131ASSET.pdf`: Dio tải tệp thành công về bộ nhớ cache ứng dụng.
  3. Thư viện `open_file` kích hoạt Android Intent Chooser; ứng dụng WPS Office mở và hiển thị hoàn chỉnh nội dung PDF trên màn hình.
- **Bằng chứng:** 4 ảnh chụp danh sách văn bản, chi tiết, Intent Chooser và trình đọc PDF trong `results/DATN-OFF-02-RERUN-20260923/`.

### 3.4. SCH-02 — Xử lý lỗi tải lịch & Cơ chế Tự phục hồi Riverpod (Chuyển thành Pass)
- **Môi trường:** Kiểm soát cụm tiến trình `ioffice-be` qua `SIGSTOP` và `SIGCONT` (PIDs 47385, 47393).
- **Hành vi thực tế:**
  1. Khi server bị đóng băng (`SIGSTOP`), ứng dụng gửi yêu cầu lấy lịch và ghi nhận `DioExceptionType.receiveTimeout` sau 30 giây.
  2. Ứng dụng không bị crash hoặc treo cứng; Riverpod hiển thị skeleton loading và quản lý trạng thái tải ổn định.
  3. Khi server được phục hồi (`SIGCONT`), provider tự động kích hoạt cơ chế retry chu kỳ, tải lại lịch thành công và hiển thị đầy đủ sự kiện trên giao diện.
- **Bằng chứng:** 3 ảnh chụp trạng thái bình thường, trạng thái timeout skeleton, và màn hình phục hồi trong `results/DATN-SCH-02-RERUN-20260923/`.

### 3.5. NET-01 — Timeout mạng & Chế độ Máy bay (Chuyển thành Pass)
- **Môi trường:** Bật/tắt Airplane Mode qua lệnh ADB `cmd connectivity airplane-mode enable/disable`.
- **Hành vi thực tế:**
  1. Bật Airplane Mode (`airplane_mode_on = 1`), kích hoạt thao tác tải dữ liệu trên Mobile.
  2. Tầng mạng bắt ngoại lệ `SocketException: Failed host lookup: 'ioffice.hcmut.edu.vn'`, không gây đổ vỡ ứng dụng; giao diện giữ nguyên dữ liệu đã cache.
  3. Tắt Airplane Mode, sóng WiFi kết nối lại; ứng dụng tự động truy vấn lại và nạp dữ liệu mới thành công.
- **Bằng chứng:** 4 ảnh chụp trạng thái bình thường, biểu tượng máy bay trên thanh trạng thái, màn hình giữ dữ liệu khi mất mạng, và phục hồi sau khi có sóng trong `results/DATN-NET-01-RERUN-20260923/`.

### 3.6. BTR-01 — Wizard Công tác & Ràng buộc Schema JSONB (Chuyển thành Pass)
- **Môi trường:** Mobile commit `a6a1dc6` đã cập nhật cấu trúc mảng cho `quocGia` và `tinhThanh`.
- **Hành vi thực tế:**
  1. Rào cản schema mảng vs chuỗi được giải quyết triệt để: payload mobile gửi mảng `List<String?>` tương thích hoàn toàn với kiểu `JSONB` của PostgreSQL.
  2. Backend kiểm tra điều kiện minh chứng cho chuyến đi nước ngoài: từ chối với `status: 400` và thông báo `"Vui lòng thêm thư mời trước khi gửi duyệt"` khi thiếu tệp.
  3. Cơ chế `checkTrungLich` phát hiện chính xác sự xung đột thời gian với lịch công tác khác và từ chối tạo trùng.
  4. Mở thành công dialog khởi tạo Wizard trên Mobile và dọn dẹp sạch sẽ 100% fixture thử nghiệm.
- **Bằng chứng:** 3 ảnh chụp danh sách công tác, dialog chọn thời gian và màn hình sau khi dọn dẹp trong `results/DATN-BTR-01-RERUN-20260923/`.

---

## 4. Kết quả tái lập bộ kiểm thử tự động (TEST-01 — Pass 100%)

Toàn bộ 427 bài kiểm thử tự động trên toàn hệ thống đạt kết quả **Pass 100%**:

```
================================================================================
KẾT QUẢ KIỂM THỬ TỰ ĐỘNG TOÀN DIỆN (TEST-01 RERUN)
================================================================================
1. Mobile Monorepo (Flutter Test):
   - packages/shared/auth               :   2 /   2 Pass (100%)
   - packages/shared/localization       :   8 /   8 Pass (100%)
   - packages/core/global_system        :   3 /   3 Pass (100%)
   - modules/notification               :  47 /  47 Pass (100%)
   - modules/hrm                        : 233 / 233 Pass (100%)
   - modules/ioffice                    :  77 /  77 Pass (100%)
   -----------------------------------------------------------------------------
   Tổng cộng Mobile                     : 370 / 370 Pass (100%)

2. HRM Backend (Vitest Suites):
   - test/unit/sso_phase0.unit.test.ts  :  18 /  18 Pass (100%)
   - test/unit/sso_phase1.unit.test.ts  :  20 /  20 Pass (100%)
   - test/unit/sso_phase7.unit.test.ts  :   8 /   8 Pass (100%)
   - acquire_leave_lock.unit.test.ts    :   4 /   4 Pass (100%)
   - concurrency_race_condition.test.ts :   7 /   7 Pass (100%)
   -----------------------------------------------------------------------------
   Tổng cộng Backend                    :  57 /  57 Pass (100%)
================================================================================
TỔNG HỢP TOÀN HỆ THỐNG                   : 427 / 427 Pass (100%)
================================================================================
```

Tiêu chí chất lượng **NFR-05-B03** chính thức được công nhận đạt trạng thái **Pass / Đủ bằng chứng hoàn toàn**.

---

## 5. Đánh giá tính minh bạch đối với các phát hiện Fail Backend

Đối với 7 tiêu chí backend giữ kết quả Fail, đợt kiểm thử tái khẳng định nguyên tắc khoa học và trung thực của đề tài:
- **Không ngụy tạo kết quả:** Những thiếu sót về kiến trúc (như chưa trim khoảng trắng lý do từ chối, thiếu cơ chế khóa dòng tại bước duyệt cuối, hoặc kiểm tra quyền tệp ở mức module thay vì mức bản ghi) được bảo lưu nguyên vẹn trong báo cáo luận văn.
- **Có giá trị đề xuất thực tiễn:** Việc chỉ ra chính xác các ranh giới này giúp luận văn có phần "Đóng góp kỹ thuật và Hướng phát triển tiếp theo" xác thực, có tính thuyết phục cao trước hội đồng bảo vệ.

---

## 6. Kết luận chung

1. **100% kịch bản Blocked (6/6) đã được gỡ bỏ hoàn toàn và chuyển sang Pass** với đầy đủ hình ảnh, logcat và dữ liệu kiểm thử thực tế trên thiết bị di động Realme RMX2151.
2. **Bộ kiểm thử tự động đạt 427/427 Pass (100%)**, khẳng định tính toàn vẹn của mã nguồn monorepo và các module cốt lõi.
3. Toàn bộ bằng chứng, manifest và báo cáo kỹ thuật đã được đồng bộ chuẩn hóa vào thư mục `docs/chapter6-7-evidence/results/`.
