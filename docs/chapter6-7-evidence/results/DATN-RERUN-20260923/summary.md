# TỔNG HỢP KẾT QUẢ KIỂM THỬ — DATN-RERUN-20260923

## 1. Thông tin tổng quan đợt chạy lại

- **Mã đợt (Run ID):** `DATN-RERUN-20260923`
- **Thời điểm thực thi:** 23/09/2026 (`Asia/Ho_Chi_Minh`)
- **Căn cứ kế hoạch:** [04_test_execution_plan.md](../../04_test_execution_plan.md) (hiệu chỉnh ngày 23/09/2026)
- **Manifest phiên bản & build:** [manifest.md](manifest.md)
  - Báo cáo: Commit `887439f` (nhánh `rewrite-chapter-6`, đã tích hợp `14fe1f6` từ `main`)
  - Ứng dụng di động: APK cài đặt `vn.edu.hcmut.myhcmut` 1.0.0 (SHA-256: `cc0d7ea34e296c070f3f2882d91953a150d119c4f382e93cd971424b10fd957a`)
  - Dịch vụ Backend: Auth BE (`7e687a6`), HRM BE (`9e39ccc2`), iOffice BE (`4bfdb23`), HRM FE (`3ff464c9`)
  - Thiết bị thử nghiệm: Realme RMX2151 (Android 12, API 31)

---

## 2. Bảng kết quả 22 kịch bản kiểm thử

| STT | Mã kịch bản | Tên kịch bản | Mức độ | Bộ tối thiểu | Trạng thái | Bằng chứng / Ghi chú |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | **AUTH-01** | Đăng nhập, gắn token và xử lý phiên không hợp lệ | P0/P1 | Có | **Pass** | [AUTH-01/result.md](AUTH-01/result.md) (Bearer token, 401 interceptor chuẩn) |
| 2 | **AUTH-02** | Backend từ chối thao tác trái quyền | P0 | Có | **Pass** | [AUTH-02/result.md](AUTH-02/result.md) (HTTP 403 khi `CB-B` gọi duyệt) |
| 3 | **PRO-01** | WebView SSO và cập nhật hồ sơ theo chính sách | P0/P1 | Có | **Pass** | [PRO-01/result.md](PRO-01/result.md) (SSO 1-time ticket, 4 ảnh minh chứng) |
| 4 | **PRO-02** | Xử lý từng nội dung của đề xuất hồ sơ | P0 | Có | **Pass** | [PRO-02/result.md](PRO-02/result.md) (Thẩm định duyệt mục 1, từ chối mục 2 có lý do) |
| 5 | **LEV-01** | Tạo, lưu nháp và nộp đơn nghỉ phép qua wizard | P0/P2 | Có | **Pass** | [LEV-01/result.md](LEV-01/result.md) (Wizard 3 bước, 5 ảnh minh chứng) |
| 6 | **LEV-02** | Hủy quy trình và dọn dữ liệu nháp | P0 | Có | **Pass** | [LEV-02/result.md](LEV-02/result.md) (Dọn dẹp sạch nháp, không phát sinh dữ liệu rác) |
| 7 | **LEV-03** | Quản lý nháp, chặn sửa/xóa sau gửi và gửi lại đơn bị trả lại | P0 | Có | **Pass** | [LEV-03/result.md](LEV-03/result.md) (Nháp sửa/xóa được; gửi rồi bị chặn xóa HTTP 400; trả lại nộp lại được) |
| 8 | **LEV-04** | Từ chối đơn bắt buộc có lý do | P0 | Có | **Fail (Bảo lưu)** | [LEV-04/result.md](LEV-04/result.md) (Backend chấp nhận lý do khoảng trắng do thiếu `trim()`) |
| 9 | **LEV-05** | Nhất quán số dư khi duyệt cuối đồng thời | P0 | Có | **Fail (Bảo lưu)** | [LEV-05/result.md](LEV-05/result.md) (Lost update khi duyệt đồng thời số dư = 1 -> số dư âm -1) |
| 10 | **BTR-01** | Wizard công tác, validation, xung đột và minh chứng | P0/P1/P2 | Có | **Pass** | [BTR-01/result.md](BTR-01/result.md) (Chặn ngày sai, chặn xung đột, bắt buộc thư mời nước ngoài) |
| 11 | **BTR-02** | Quản lý nháp và hồ sơ công tác bị trả lại | P0 | Có | **Pass** | [BTR-02/result.md](BTR-02/result.md) (Nháp sửa/xóa được; gửi rồi bị chặn xóa HTTP 400; trả lại nộp lại được) |
| 12 | **BTR-03** | Phê duyệt, trả lại, từ chối và luân chuyển đa cấp | P0 | Có | **Fail (Bảo lưu)** | [BTR-03/result.md](BTR-03/result.md) (Fail từ chối khoảng trắng; Pass phân tách quyền thu hồi TCNS/BGH) |
| 13 | **BTR-04** | Danh sách và chi tiết hồ sơ công tác | P2 | Không | **Not Run** | Hoãn kiểm thử theo Mục 2.2 Kế hoạch (kịch bản P2 độc lập) |
| 14 | **OFF-01** | Từ chối mở tệp văn bản không đủ quyền | P0 | Có | **Fail (Bảo lưu)** | [OFF-01/result.md](OFF-01/result.md) (Quyền kiểm tra mức module, thiếu record-level ACL) |
| 15 | **OFF-02** | Xem chi tiết và mở tệp PDF theo cơ chế thực tế | P1 | Có | **Pass** | [OFF-02/result.md](OFF-02/result.md) (Mở PDF qua Android OS Intent Chooser, 4 ảnh minh chứng) |
| 16 | **OFF-03** | Danh sách văn bản và nhiệm vụ | P2 | Không | **Not Run** | Hoãn kiểm thử theo Mục 2.2 Kế hoạch (kịch bản P2 độc lập) |
| 17 | **OFF-04** | Phân công, tham mưu, chỉ đạo và tiếp nhận văn bản đến | P0 | Có | **Pass** | [OFF-04/result.md](OFF-04/result.md) (Quy trình PGQ: phân công -> tiếp nhận -> hoàn tất 100%) |
| 18 | **SCH-01** | Người ngoài danh sách mời không được điểm danh | P0 | Có | **Fail (Bảo lưu)** | [SCH-01/result.md](SCH-01/result.md) (Backend cho phép self-checkin tự do do fallback slot rỗng) |
| 19 | **SCH-02** | Lỗi tải lịch được thông báo và có thể thử lại | P1 | Có | **Pass** | [SCH-02/result.md](SCH-02/result.md) (Bắt lỗi kết nối có kiểm soát, retry phục hồi, 3 ảnh minh chứng) |
| 20 | **NET-01** | Timeout và lỗi kết nối chuẩn hóa | P1 | Có | **Pass** | [NET-01/result.md](NET-01/result.md) (Dio interceptor bắt lỗi Airplane mode ngay lập tức, 4 ảnh minh chứng) |
| 21 | **UI-01** | Rà soát tính nhất quán giao diện đại diện | P2 | Không | **Not Run** | Hoãn kiểm thử theo Mục 2.2 Kế hoạch (kịch bản P2 độc lập) |
| 22 | **TEST-01** | Tái lập bộ kiểm thử hiện có | P1 | Có | **Pass** | [TEST-01/result.md](TEST-01/result.md) (427/427 Pass: 370 Flutter + 57 Vitest HRM BE) |

---

## 3. Thống kê định lượng

```text
┌───────────────────────────────────────────────┐
│     TỔNG KẾT ĐỢT KIỂM THỬ DATN-RERUN-20260923 │
├─────────────────────────┬─────────┬───────────┤
│ Phân loại               │ Số lượng│ Tỷ lệ (%) │
├─────────────────────────┼─────────┼───────────┤
│ Tổng số kịch bản        │   22    │  100.0%   │
│ Kịch bản bộ tối thiểu   │   19    │   86.4%   │
│ Kịch bản P2 (Tùy chọn)  │    3    │   13.6%   │
├─────────────────────────┼─────────┼───────────┤
│ Đạt (Pass)              │   14    │   63.6%   │
│ Không đạt (Fail Bảo lưu)│    5    │   22.7%   │
│ Bị chặn (Blocked)       │    0    │    0.0%   │
│ Chưa chạy (Not Run - P2)│    3    │   13.6%   │
└─────────────────────────┴─────────┴───────────┘
```

- **Xét riêng trong 19 kịch bản thuộc Bộ tối thiểu nghiệp vụ:**
  - **Pass:** 14 / 19 (đạt **73.7%**).
  - **Fail (Bảo lưu phát hiện kỹ thuật):** 5 / 19 (chiếm **26.3%**).
  - **Blocked:** 0 / 19.

---

## 4. Phân tích 5 phát hiện kỹ thuật được bảo lưu

Các phát hiện dưới đây được bảo toàn nguyên trạng nhằm phản ánh trung thực ranh giới kỹ thuật của hệ thống trong Chương 6 và làm tiền đề đề xuất hướng hoàn thiện trong Chương 7:

1. **`LEV-04` — Thiếu validation `trim()` khi từ chối đơn nghỉ phép:**
   - *Hiện tượng:* Backend HRM chỉ kiểm tra sự tồn tại của trường `lyDo` mà không cắt bỏ ký tự khoảng trắng đầu cuối (`trim()`), cho phép phê duyệt từ chối với lý do rỗng ("   ").
   - *Ý nghĩa báo cáo:* Đóng góp kiến nghị hoàn thiện validation schema ở tầng controller API.

2. **`LEV-05` — Hiện tượng Lost Update khi phê duyệt đồng thời với số dư giới hạn:**
   - *Hiện tượng:* Khi hai cấp phê duyệt cuối cùng gửi request đồng thời cho hai đơn nghỉ phép có tổng số ngày vượt quá số dư còn lại (số dư = 1, mỗi đơn 1 ngày), hệ thống gặp tình trạng race condition dẫn đến cả hai đơn đều được chấp thuận và số dư bị âm (-1).
   - *Ý nghĩa báo cáo:* Khẳng định tính cấp thiết của cơ chế khóa phân tán (Distributed Lock / Pessimistic Locking qua Redis/Database) đã được đề xuất trong kiến trúc.

3. **`BTR-03` — Thiếu validation `trim()` khi từ chối hồ sơ công tác:**
   - *Hiện tượng:* Tương tự LEV-04, controller công tác chấp nhận lý do từ chối gồm toàn khoảng trắng.
   - *Ý nghĩa báo cáo:* Cần đồng bộ quy chuẩn kiểm tra chuỗi đầu vào (String input normalization) trên toàn bộ các module HRM.

4. **`OFF-01` — Thiếu kiểm soát quyền truy cập tệp ở mức bản ghi (Record-level ACL):**
   - *Hiện tượng:* Endpoint `GET /api/e-office/van-ban-den/files/:fileId` chỉ kiểm tra quyền mức module `eofficeVanBanDen:read`. Mọi người dùng có quyền đọc văn bản trong đơn vị đều có thể tải tệp đính kèm khi biết `fileId`, dù không được phân công xử lý văn bản đó.
   - *Ý nghĩa báo cáo:* Nêu bật khoảng cách giữa Role-Based Access Control (RBAC) mức module và Record-Level / Attribute-Based Access Control (ABAC) mức tài liệu.

5. **`SCH-01` — Tự động cho phép điểm danh ngoài danh sách mời (Self-checkin Fallback):**
   - *Hiện tượng:* Endpoint `POST /api/schedule/general-item/:id/checkin` có cơ chế fallback `slots = [{ id: null }]` tự động thêm cán bộ vào danh sách tham dự khi quét mã, không chặn người ngoài danh sách triệu tập.
   - *Ý nghĩa báo cáo:* Phân tích sự đánh đổi giữa tính tiện lợi (điểm danh mở cho sự kiện/hội nghị đông người) và tính bảo mật nghiêm ngặt (họp kín/hạn chế người tham gia).

---

## 5. Giá trị sử dụng cho Báo cáo Luận văn (Chương 6–7)

- **Đối với Chương 6 (Hiện thực và Kiểm thử):** Cung cấp bộ bằng chứng thực nghiệm đầy đủ, minh bạch với 14 kịch bản Pass chứng minh các Use Case cốt lõi hoạt động đúng, cùng 5 phát hiện kỹ thuật có giá trị phân tích thực tiễn cao, giúp chương luận văn có chiều sâu khoa học và tính thuyết phục vượt trội so với báo cáo chỉ thuần túy đưa ra kết quả thành công.
- **Đối với Chương 7 (Đánh giá và Hướng phát triển):** Cung cấp dữ liệu thực tế chính xác để chỉ rõ các hạn chế còn tồn tại của hệ thống và đề xuất các giải pháp kỹ thuật cụ thể (hoàn thiện schema validation, triển khai distributed lock cho xử lý đồng thời, áp dụng ABAC cho phân quyền tài liệu).
