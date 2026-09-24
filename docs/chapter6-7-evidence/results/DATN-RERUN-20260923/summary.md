# TỔNG HỢP KẾT QUẢ KIỂM THỬ — DATN-RERUN-20260923

> **Lưu vết lịch sử:** Bảng 22 kịch bản giữ nguyên tiêu chí và số liệu của lần chạy 23/09. Riêng `SCH-01` dùng kỳ vọng cũ là người ngoài danh sách mời phải bị từ chối; đặc tả hiện hành cho phép khách tự điểm danh. Vì vậy không dùng nhãn Fail lịch sử của `SCH-01` để kết luận lỗi sản phẩm theo quy tắc hiện hành. Các lượt kiểm tra ngày 24/09 được ghi riêng, không cộng hồi tố vào bảng này.

## 1. Thông tin tổng quan đợt chạy lại

- **Mã đợt (Run ID):** `DATN-RERUN-20260923`
- **Thời điểm thực thi:** 23/09/2026 (`Asia/Ho_Chi_Minh`)
- **Căn cứ kế hoạch:** [04_test_execution_plan.md](../../04_test_execution_plan.md) (hiệu chỉnh ngày 23/09/2026)
- **Manifest phiên bản & build:** [manifest.md](manifest.md)
  - Báo cáo: Commit `887439f` (nhánh `rewrite-chapter-6`, đã tích hợp `14fe1f6` từ `main`)
  - Ứng dụng di động: APK cài đặt `vn.edu.hcmut.myhcmut` 1.0.0 (SHA-256: `cc0d7ea34e296c070f3f2882d91953a150d119c4f382e93cd971424b10fd957a`, biên dịch từ commit `a6a1dc6`, đối chiếu mã nguồn và cấu hình mạng tại working tree `7f90ac7`)
  - Dịch vụ Backend: Auth BE (`7e687a6`), HRM BE (`9e39ccc2`), iOffice BE (`4bfdb23`), HRM FE (`3ff464c9`)
  - Thiết bị thử nghiệm: Realme RMX2151 (Android 12, API 31, Serial: `IJROH6SCO7F6IFZ5`)

---

## 2. Bảng kết quả 22 kịch bản kiểm thử (Tách bạch theo phân nhánh thực tế)

Theo quy tắc ghi nhận tại Mục 7 của Kế hoạch kiểm thử: Một kịch bản chỉ đạt trạng thái **Pass toàn diện** khi mọi nhánh bắt buộc đều đạt kết quả mong đợi và có đủ metadata. Nếu có nhánh phát hiện lỗi hoặc không đạt tiêu chí kế hoạch, kịch bản được phân loại là **Fail**. “Pass có giới hạn phạm vi” bên dưới chỉ là **nhãn tổng hợp các nhánh đã đạt**, không phải trạng thái Pass của toàn kịch bản theo Mục 7. Bảng này đã được điều chỉnh sau [kiểm tra bổ sung](../DATN-TARGETED-RECHECK-20260923/result.md); các phát hiện bổ sung không được cộng thành một lần chạy chung với 22 kịch bản.

| STT | Mã kịch bản | Tên kịch bản | Mức độ | Bộ tối thiểu | Trạng thái kịch bản | Chi tiết phân nhánh & Ranh giới khẳng định |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | **AUTH-01** | Đăng nhập, gắn token và xử lý phiên không hợp lệ | P0/P1 | Có | **Fail** | [AUTH-01/result.md](AUTH-01/result.md) (Đăng nhập/gắn token đạt theo biên bản gốc; HRM trả HTTP 200/body `status:401` với token sai, không kích hoạt nhánh HTTP 401 của interceptor; UI điều hướng chưa kiểm tra trực tiếp) |
| 2 | **AUTH-02** | Backend từ chối thao tác trái quyền | P0 | Có | **Pass có giới hạn bằng chứng** | [AUTH-02/result.md](AUTH-02/result.md) (Biên bản ghi backend từ chối request trái quyền; chưa lưu raw response/status, bước HRM nghỉ phép ghi `401/403`, nên chưa kiểm chứng độc lập toàn bộ nhánh) |
| 3 | **PRO-01** | WebView SSO và cập nhật hồ sơ theo chính sách | P0/P1 | Có | **Pass có giới hạn phạm vi** | [PRO-01/result.md](PRO-01/result.md) (Pass nhánh tạo/tiêu thụ vé SSO In-App WebView và chống replay attack; **Chưa chạy** nhánh cập nhật trực tiếp `PRO-DIRECT` và đề xuất kèm minh chứng `PRO-REVIEW`) |
| 4 | **PRO-02** | Xử lý từng nội dung của đề xuất hồ sơ | P0 | Có | **Pass có giới hạn phạm vi** | [PRO-02/result.md](PRO-02/result.md) (Pass nhánh kiểm soát quyền duyệt và kiểm tra tham số bắt buộc `detailId` HTTP 400; **Bằng chứng hạn chế** do thiếu snapshot đối chiếu từng trường trước–sau) |
| 5 | **LEV-01** | Tạo, lưu nháp và nộp đơn nghỉ phép qua wizard | P0/P2 | Có | **Pass có giới hạn phạm vi** | [LEV-01/result.md](LEV-01/result.md) (Pass nhánh nhập liệu 3 bước wizard và nộp đơn trực tiếp tạo đơn `#289` trạng thái `GUI`; **Chưa chạy** nhánh lưu nháp dở dang giữa chừng rồi mở lại) |
| 6 | **LEV-02** | Hủy quy trình và dọn dữ liệu nháp | P0 | Có | **Pass có giới hạn phạm vi** | [LEV-02/result.md](LEV-02/result.md) (Pass nhánh thao tác hủy và hộp thoại xác nhận trên UI mobile; **Bằng chứng hạn chế** do thiếu ghi nhận Draft ID và đối chiếu CSDL trước–sau trong phiên chạy này) |
| 7 | **LEV-03** | Quản lý nháp, chặn sửa/xóa sau gửi và gửi lại đơn bị trả lại | P0 | Có | **Pass có giới hạn phạm vi** | [LEV-03/result.md](LEV-03/result.md) (Pass nhánh sửa/xóa nháp và chặn xóa đơn đã gửi HTTP 400; **Chưa chạy** nhánh probe thử sửa đơn đã gửi qua API và nhánh gửi lại trên fixture bị trả lại thực tế) |
| 8 | **LEV-04** | Từ chối đơn bắt buộc có lý do | P0 | Có | **Fail** | [LEV-04/result.md](LEV-04/result.md) (Lỗi sản phẩm: Backend chấp nhận lý do toàn khoảng trắng do thiếu kiểm tra `trim()`) |
| 9 | **LEV-05** | Nhất quán số dư khi duyệt cuối đồng thời | P0 | Có | **Fail** | [LEV-05/result.md](LEV-05/result.md) (Lỗi sản phẩm: Bất thường đồng thời khi duyệt hai đơn lúc quỹ phép = 1 dẫn đến số dư bị âm `-1`) |
| 10 | **BTR-01** | Wizard công tác, validation, xung đột và minh chứng | P0/P1/P2 | Có | **Pass có giới hạn phạm vi** | [BTR-01/result.md](BTR-01/result.md) (Pass nhánh định dạng JSONB array, chặn thiếu thư mời nước ngoài và chặn trùng lịch; **Chưa chạy** nhánh nộp hồ sơ công tác hợp lệ qua trọn vẹn 5 bước wizard) |
| 11 | **BTR-02** | Quản lý nháp và hồ sơ công tác bị trả lại | P0 | Có | **Pass có giới hạn phạm vi** | [BTR-02/result.md](BTR-02/result.md) (Pass nhánh sửa/xóa nháp và giao diện theo dõi tiến trình; **Chưa chạy thực nghiệm** probe API chặn xóa đơn đã gửi và chu trình gửi lại hồ sơ bị trả lại) |
| 12 | **BTR-03** | Phê duyệt, trả lại, từ chối và luân chuyển đa cấp | P0 | Có | **Fail** | [BTR-03/result.md](BTR-03/result.md) (Lỗi sản phẩm: Backend chấp nhận lý do từ chối toàn khoảng trắng; Pass nhánh phân tách quyền thu hồi TCNS/BGH) |
| 13 | **BTR-04** | Danh sách và chi tiết hồ sơ công tác | P2 | Không | **Not Run** | Hoãn kiểm thử theo Mục 2.2 Kế hoạch (kịch bản P2 tùy chọn) |
| 14 | **OFF-01** | Từ chối mở tệp văn bản không đủ quyền | P0 | Có | **Fail** | [OFF-01/result.md](OFF-01/result.md) (Fail theo tiêu chí kiểm thử: endpoint chỉ kiểm tra quyền module; chính sách quyền tệp theo từng văn bản do người dùng xác nhận, chưa được ghi tường minh trong Chương 4 `main`; không phải kết quả UC-OFF-01) |
| 15 | **OFF-02** | Xem chi tiết và mở tệp PDF theo cơ chế thực tế | P1 | Có | **Pass toàn diện** | [OFF-02/result.md](OFF-02/result.md) (Mở PDF an toàn qua Android OS Intent Chooser / ứng dụng ngoài, 4 ảnh minh chứng) |
| 16 | **OFF-03** | Danh sách văn bản và nhiệm vụ | P2 | Không | **Not Run** | Hoãn kiểm thử theo Mục 2.2 Kế hoạch (kịch bản P2 tùy chọn) |
| 17 | **OFF-04** | Phân công, tham mưu, chỉ đạo và tiếp nhận văn bản đến | P0 | Có | **Fail** | [OFF-04/result.md](OFF-04/result.md) (Sai lệch hậu điều kiện UC-OFF-04 theo mã và biên bản; các nhánh được biên bản ghi Pass chưa có raw/snapshot độc lập; phân công mobile, thông báo và đối tượng nhận không hợp lệ của UC-OFF-01 chưa kiểm chứng) |
| 18 | **SCH-01** | Người ngoài danh sách mời không được điểm danh | P0 | Có | **Fail** | [SCH-01/result.md](SCH-01/result.md) (Lỗi sản phẩm: Backend tự động fallback `slots = [{ id: null }]` cho phép tự điểm danh tự do ngoài danh sách mời) |
| 19 | **SCH-02** | Lỗi tải lịch được thông báo và có thể thử lại | P1 | Có | **Fail** | [SCH-02/result.md](SCH-02/result.md) (Android hiển thị ngoại lệ kỹ thuật thô khi mất kết nối; ứng dụng không crash trong khoảng quan sát; khả năng thử lại sau khi nối mạng chưa xác minh nhất quán) |
| 20 | **NET-01** | Timeout và lỗi kết nối chuẩn hóa | P1 | Có | **Fail** | [NET-01/result.md](NET-01/result.md) (Vi phạm tiêu chuẩn thông báo thân thiện NFR-01: Giao diện để lộ nguyên văn chuỗi ngoại lệ kỹ thuật tiếng Anh thô; Pass nhánh bắt lỗi ngắt mạng tầng HTTP không crash) |
| 21 | **UI-01** | Rà soát tính nhất quán giao diện đại diện | P2 | Không | **Not Run** | Hoãn kiểm thử theo Mục 2.2 Kế hoạch (kịch bản P2 tùy chọn) |
| 22 | **TEST-01** | Tái lập bộ kiểm thử hiện có | P1 | Có | **Pass toàn diện** | [TEST-01/result.md](TEST-01/result.md) (427/427 Unit & Widget tests pass: 370 Flutter + 57 Vitest HRM BE; đã lưu stdout log và exit code 0; phạm vi kiểm thử thành phần, không đại diện cho E2E toàn hệ thống) |

---

## 3. Thống kê định lượng theo quy tắc kế hoạch

```text
┌─────────────────────────────────────────────────────────────┐
│          TỔNG KẾT ĐỢT KIỂM THỬ DATN-RERUN-20260923          │
├───────────────────────────────────────┬─────────┬───────────┤
│ Phân loại theo Kế hoạch               │ Số lượng│ Tỷ lệ (%) │
├───────────────────────────────────────┼─────────┼───────────┤
│ Tổng số kịch bản                      │   22    │  100.0%   │
│ Kịch bản bộ tối thiểu                 │   19    │   86.4%   │
│ Kịch bản P2 (Tùy chọn)                │    3    │   13.6%   │
├───────────────────────────────────────┼─────────┼───────────┤
│ Đạt toàn diện (Pass toàn phần)        │    2    │    9.1%   │
│ Đạt có giới hạn phạm vi/bằng chứng    │    8    │   36.4%   │
│ Không đạt / Lỗi phát hiện (Fail)      │    9    │   40.9%   │
│ Bị chặn (Blocked)                     │    0    │    0.0%   │
│ Chưa chạy (Not Run - P2)              │    3    │   13.6%   │
└───────────────────────────────────────┴─────────┴───────────┘
```

- **Xét riêng trong 19 kịch bản thuộc Bộ tối thiểu nghiệp vụ:**
  - **Pass toàn diện (Các nhánh bắt buộc có bằng chứng đạt):** 2 / 19 (chiếm **10.5%**).
  - **Pass có giới hạn phạm vi/bằng chứng (nhánh chưa chạy hoặc thiếu artifact):** 8 / 19 (chiếm **42.1%**).
  - **Fail (Có nhánh bắt buộc không đạt hoặc lỗi sản phẩm):** 9 / 19 (chiếm **47.4%**).
  - **Blocked (Bị chặn):** 0 / 19 (0.0%).

---

## 4. Phân tích các khiếm khuyết kỹ thuật và sai lệch đặc tả cần khắc phục (9 Fail)

Chín phát hiện dưới đây kết hợp kết quả thực nghiệm, đối chiếu mã nguồn và chính sách nghiệp vụ. Phải giữ đúng loại bằng chứng của từng phát hiện khi đưa vào Chương 6–7:

1. **`AUTH-01` — Phản hồi phiên không hợp lệ của HRM không khớp điều kiện interceptor:**
   - *Quan sát:* Token sai chữ ký cho API HRM trả HTTP 200 cùng body `status:401`; `MultiDomainAuthInterceptor` chỉ xóa token ở nhánh lỗi có HTTP status 401. Vì vậy kết luận cũ rằng interceptor đã xóa token và điều hướng người dùng cho phản hồi này là không đúng với luồng mã đã kiểm tra.
   - *Giới hạn:* Chưa quan sát màn hình mobile với token hết hạn/thử nghiệm để xác định UI sẽ hiển thị gì. Cần kiểm thử client riêng trước khi mô tả hành vi điều hướng cụ thể.

2. **`LEV-04` — Backend bỏ qua chuẩn hóa khoảng trắng khi kiểm tra lý do từ chối nghỉ phép:**
   - *Hiện tượng:* Controller backend HRM chỉ kiểm tra chuỗi `lyDo` tồn tại nhưng không áp dụng hàm `trim()`, cho phép người duyệt từ chối đơn với lý do chỉ gồm các ký tự khoảng trắng ("   ").
   - *Tác động:* Phá vỡ ràng buộc nghiệp vụ bắt buộc nêu rõ căn cứ từ chối để phản hồi cho người nộp đơn.

3. **`LEV-05` — Hiện tượng bất thường về tính nhất quán số dư khi duyệt đồng thời dẫn đến số dư âm (`-1`):**
   - *Hiện tượng:* Trong kịch bản gửi đồng thời hai yêu cầu duyệt cuối cho hai đơn nghỉ phép khi quỹ phép chỉ còn 1 ngày (mỗi đơn yêu cầu 1 ngày), hệ thống chấp thuận cả hai đơn và ghi nhận số dư bị trừ thành `-1`.
   - *Đánh giá kỹ thuật:* Hiện tượng này cho thấy cơ chế kiểm tra và trừ số dư gặp lỗi xử lý đồng thời (concurrency anomaly). Tuy nhiên, do biên bản đợt chạy hiện tại chưa lưu trữ đầy đủ log HTTP request đồng thời, dấu thời gian microsecond và bảng đối chiếu số dư trước–sau qua từng lần lặp thử nghiệm, nguyên nhân gốc rễ cụ thể (do thiếu khóa dòng database `SELECT FOR UPDATE`, thiếu transaction isolation, hay do logic ứng dụng) cần được điều tra và kiểm chứng độc lập ở đợt kiểm thử tiếp theo.

4. **`BTR-03` — Backend chấp nhận lý do từ chối hồ sơ công tác chỉ gồm khoảng trắng:**
   - *Hiện tượng:* Tương tự `LEV-04`, controller công tác không thực hiện kiểm tra `trim()` chuỗi lý do từ chối.
   - *Tác động:* Vi phạm tính thống nhất trong validation schema giữa các phân hệ nghiệp vụ HRM.

5. **`OFF-01` — Vấn đề kiểm soát quyền truy cập tệp văn bản:**
   - *Hiện tượng:* Endpoint `GET /api/e-office/van-ban-den/files/:fileId` chỉ xác thực quyền ở cấp độ module (`eofficeVanBanDen:read`), cho phép người dùng có quyền đọc văn bản trong đơn vị tải tệp đính kèm khi biết `fileId`.
   - *Đánh giá kỹ thuật và phạm vi yêu cầu:* Người phụ trách nghiệp vụ đã xác nhận **chỉ người được phân công/cấp quyền trên văn bản cụ thể** được tải tệp. Endpoint thiếu kiểm tra này nên sai khác với chính sách đã chốt; lượt bổ sung chỉ đối chiếu mã và chính sách, không gọi lại API tải tệp. Chương 4 `main:14fe1f6` chỉ nêu NFR-03 khái quát về backend kiểm tra quyền dữ liệu, chưa nêu quy tắc tệp theo từng văn bản. `UC-OFF-01` hiện hành là phân công trách nhiệm, không phải kịch bản kiểm thử `OFF-01`.

6. **`OFF-04` — Sai lệch hậu điều kiện tự động hoàn thành của UC-OFF-04:**
   - *Hiện tượng:* Hậu điều kiện của UC-OFF-04 yêu cầu hệ thống tự động chuyển trạng thái sang *Hoàn thành* khi 100% người được phân công đã tiếp nhận. Trong mã nguồn backend thực tế, cơ chế tự động này chỉ áp dụng cho văn bản "chỉ thông tin/để biết"; đối với văn bản giao nhiệm vụ triển khai, hệ thống đòi hỏi phải gọi thêm API `hoan-thanh` riêng biệt.
   - *Tác động:* Luồng nghiệp vụ trên hệ thống chưa thỏa mãn trọn vẹn đặc tả ca sử dụng tự động.

7. **`SCH-01` — Cơ chế Fallback cho phép người ngoài danh sách mời tự do điểm danh:**
   - *Hiện tượng:* Endpoint `POST /api/schedule/general-item/:id/checkin` kích hoạt fallback `slots = [{ id: null }]` khi người quét không có tên trong danh sách triệu tập, tự động chèn thêm bản ghi tham dự thay vì từ chối.
   - *Tác động:* Gây sai lệch danh sách tham dự trong các cuộc họp nội bộ hạn chế thành phần; cần phân tách rõ cờ sự kiện mở tự do và sự kiện triệu tập bắt buộc theo danh sách.

8. **`SCH-02` — Thông báo lỗi lịch chưa phù hợp và đường thử lại chưa được kiểm chứng:**
   - *Hiện tượng:* Lượt bổ sung trên Android chụp được thông báo `Lỗi: Exception: Failed to fetch schedule...` sau khi mạng trở lại. Đây là ngoại lệ kỹ thuật thô; một lần vuốt tiếp theo không xóa lỗi, nhưng chưa xác nhận vuốt là thao tác retry hợp lệ.
   - *Tác động:* Chương 4 yêu cầu thông báo trạng thái lỗi và cho phép thực hiện lại, không bắt buộc nút riêng. Không kết luận ứng dụng không thể phục hồi; cần thử lại theo thao tác được xác định rõ nếu muốn khẳng định nhánh này.

9. **`NET-01` — Giao diện di động để lộ nguyên văn ngoại lệ kỹ thuật tiếng Anh thô:**
   - *Hiện tượng:* Khi gặp sự cố đứt kết nối mạng (Airplane mode), màn hình nghỉ phép hiển thị nguyên văn chuỗi ngoại lệ của thư viện HTTP: `Error Exception: Failed to fetch all leave The connection errored: Connection failed...`.
   - *Tác động:* Vi phạm yêu cầu phi chức năng `NFR-01-B01` về việc chuẩn hóa thông điệp lỗi thân thiện bằng tiếng Việt cho người dùng cuối; tầng UI thiếu bộ lọc `ErrorHandler` chuyển đổi mã lỗi.

---

## 5. Quy chuẩn bảo mật và che mờ thông tin (Data Masking) khi trích dẫn báo cáo

Nhằm đảm bảo an toàn thông tin nhân sự và tuân thủ các quy định bảo mật dữ liệu, mọi minh chứng trích xuất từ đợt kiểm thử này khi đưa vào nội dung Chương 6 và Phụ lục báo cáo Luận văn **bắt buộc tuân thủ nguyên tắc che mờ (Masking/Redaction)**:
- **Thông tin định danh cán bộ:** Che mờ họ tên thật, số Căn cước công dân (CCCD), số điện thoại, email cá nhân và số tài khoản ngân hàng xuất hiện trên các ảnh chụp màn hình hồ sơ (`PRO-01`, `PRO-02`).
- **Thông tin phiên làm việc và bảo mật mạng:** Cắt bỏ hoặc làm mờ tham số vé SSO (`?ticket=...`), token phiên trong thanh địa chỉ URL, chuỗi Bearer token trong log HTTP và địa chỉ IP nhạy cảm nếu không thuộc dải mạng cục bộ nội bộ.

---

## 6. Định hướng sử dụng cho Báo cáo Luận văn (Chương 6–7)

- **Đối với Mục 6.1 (Kết quả hiện thực hệ thống):**
  - Trình bày kiến trúc các phân hệ, quy trình nghiệp vụ đã xây dựng (xác thực, hồ sơ SSO, nghỉ phép, công tác, văn bản đến, lịch tuần) dựa trên các thành phần đã hiện thực thành công trên client và backend.
- **Đối với Mục 6.2 (Đánh giá kết quả kiểm thử):**
  - Trình bày bức tranh kiểm thử theo từng yêu cầu: 2 kịch bản Pass toàn diện (`OFF-02`, `TEST-01`); 8 kịch bản có nhánh đạt theo biên bản nhưng chưa đủ phạm vi/artifact để Pass toàn kịch bản (gồm `AUTH-02`); 9 kịch bản Fail, trong đó `AUTH-01` được điều chỉnh sau đối chiếu bổ sung. Không dùng tổng 427 bài test thành phần để khẳng định toàn bộ luồng nghiệp vụ đạt.
- **Đối với Chương 7 (Kết luận và Hướng phát triển):**
  - Tách lỗi đã xác minh khỏi nhánh chưa kiểm chứng: xử lý hợp đồng phản hồi 401 HRM/client, kiểm tra quyền tệp theo từng văn bản, kiểm tra lý do từ chối, điều tra bất thường số dư phép, đối chiếu hậu điều kiện UC-OFF-04 và chuẩn hóa thông báo lỗi. Với lịch, ưu tiên xác minh đường thử lại trước khi chọn cách thiết kế UI cụ thể.
