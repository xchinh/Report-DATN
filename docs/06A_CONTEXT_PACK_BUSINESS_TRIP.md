# GÓI BỐI CẢNH PHÂN HỆ ĐĂNG KÝ & PHÊ DUYỆT ĐI CÔNG TÁC (BUSINESS TRIP CONTEXT PACK)
*Mã tài liệu: `06A_CONTEXT_PACK_BUSINESS_TRIP` — Phiên bản Kiểm toán Thực tế (Audited Fact-Sheet)*

> **Định vị & Mục đích tài liệu:**
> Tài liệu này đóng vai trò là **Cơ sở Sự thật Đã Kiểm toán (Single Source of Truth - Fact Sheet)** về Phân hệ Đi công tác trong sản phẩm MyHCMUT Mobile. 
> Mục đích duy nhất của tài liệu là cung cấp số liệu, bối cảnh nghiệp vụ, ma trận vai trò và kiến trúc tích hợp phục vụ việc viết **Chương 1 (Bối cảnh, Danh mục tính năng tổng thể, Phân công đóng góp)** và **Chương 2 (Khảo sát hiện trạng & So sánh giải pháp HRM)** trong Báo cáo Đồ án Tốt nghiệp.

---

## 1. Phân định Ranh giới Trách nhiệm & Nhãn Phân loại (Scope & Ownership)

| Tiêu chí | Trạng thái / Nhãn chuẩn hóa | Ghi chú giải thích |
| :--- | :--- | :--- |
| **Phạm vi Sản phẩm MyHCMUT Mobile** | `IN_SYSTEM_SCOPE` | Ứng dụng di động thực tế có tích hợp đầy đủ phân hệ Công tác trên giao diện và điều hướng GoRouter. |
| **Phạm vi Đề tài Nhóm (Team Project)** | `TEAM_SCOPE` | Đề tài CO4337 của nhóm 2 sinh viên bao quát toàn bộ cổng nghiệp vụ nhân sự - điều hành của Nhà trường. |
| **Phạm vi Đóng góp Cá nhân Vũ Xuân Chính** | `OUT_OF_CHINH_SCOPE` | **Không nhận là đóng góp cá nhân của Vũ Xuân Chính** ở các phần đặc tả ca sử dụng chi tiết (Ch. 5), phân tích thiết kế CSDL (Ch. 6) hay hiện thực/kiểm thử chuyên sâu (Ch. 7). |
| **Sinh viên Phụ trách Chính (Primary Owner)** | **Tống Duy Khang (MSSV: 2211467)** | Tác giả chính của toàn bộ Domain Models, Form Wizard 5 bước và các luồng duyệt đơn ban đầu (xác thực qua Git commits). |
| **Vai trò Phối hợp của Vũ Xuân Chính** | `CROSS_MODULE_UI_REFACTOR` | Tái cấu trúc chuẩn hóa giao diện màn hình duyệt theo Design Tokens (`global_system`), phát triển `AppBatchActionBar` dùng chung, hỗ trợ `MultiLanguage` resolution. |

---

## 2. Người dùng, Vai trò & Ma trận Phân quyền (Actors & RBAC)

Cơ chế phân quyền được quản lý thông qua trường `permissions` trong JWT Payload và vai trò nghiệp vụ thực tế tại `hrm-be`:

| Tác nhân (Actor) | Vai trò Nghiệp vụ | Quyền Hệ thống (`permissions`) / RoleKey | Trách nhiệm trong Phân hệ Công tác |
| :--- | :--- | :--- | :--- |
| **Cán bộ / Giảng viên (Staff)** | Cán bộ, giảng viên toàn trường | `cn:di_cong_tac` | • Khởi tạo hồ sơ công tác (cá nhân hoặc đoàn).<br>• Lưu nháp (`NHAP`), nộp đơn, đính kèm giấy mời/kế hoạch.<br>• Thu hồi đơn khi chưa duyệt (`THU_HOI`).<br>• Chỉnh sửa đơn khi bị trả lại (`TRA_LAI`).<br>• Nộp báo cáo kết quả công tác sau chuyến đi. |
| **Chuyên viên Đơn vị (`CV_DV`)** | Chuyên viên văn phòng Khoa/Phòng | `dv:di_cong_tac:read` | Rà soát tính hợp lệ của hồ sơ trước khi Trưởng đơn vị ký duyệt. |
| **Lãnh đạo Đơn vị (`TRUONG_DV`)** | Trưởng / Phó các Khoa, Phòng, Viện | `dv:di_cong_tac:read`<br>`dv:di_cong_tac:manage` | • Phê duyệt hoặc từ chối chuyến công tác của cán bộ thuộc đơn vị.<br>• Trong hồ sơ đoàn (`NHOM`), tham gia phê duyệt song song (`parallelGroup`) giữa các đơn vị liên quan. |
| **Chuyên viên TCNS (`CV_TCNS`)** | Chuyên viên Phòng Tổ chức Cán bộ | `tcns:di_cong_tac:read`<br>`tcns:di_cong_tac:write` | Thẩm định chế độ công tác, kinh phí, ngày phép và sự trùng lặp lịch công tác toàn trường. |
| **Trưởng phòng TCNS (`TP_TCNS`)** | Lãnh đạo Phòng TCCB | `tcns:di_cong_tac:manage` | Phê duyệt cấp Phòng TCCB trước khi trình Ban Giám Hiệu. |
| **Ban Giám Hiệu / Văn phòng BGH** | Hiệu trưởng, các Phó Hiệu trưởng | RoleKey: `clerical-president`<br>Đơn vị quản trị: `94`, `01` | Phê duyệt tối cao đối với chuyến công tác nước ngoài (`CONG_TAC_NN`), BGH (`CONG_TAC_BGH`) hoặc kinh phí lớn; ký ban hành số quyết định trên Web Desktop. |

---

## 3. Đặc tả Luồng Nghiệp vụ Đăng ký & Phê duyệt

### 3.1. Phân loại Nghiệp vụ Công tác (Business Trip Types)
Backend `hrm-be` phân loại hồ sơ công tác thành 4 nhóm quy trình nghiệp vụ chính:
* `CONG_TAC_TN`: Đi công tác trong nước (Thẩm quyền duyệt thường dừng ở Trưởng đơn vị hoặc Phòng TCCB).
* `CONG_TAC_NN`: Đi công tác nước ngoài (Bắt buộc phê duyệt qua Văn phòng BGH / Ban Giám Hiệu).
* `CONG_TAC_BGH`: Chuyến công tác của thành viên Ban Giám Hiệu.
* `CONG_TAC_KHCN`: Đi công tác phục vụ đề tài nghiên cứu khoa học & công nghệ.
* **Hình thức:** Phân tách rõ `CA_NHAN` (cá nhân tự đi) và `NHOM` (đoàn công tác đa đơn vị, kích hoạt cơ chế duyệt song song `QUY_TRINH_DON_VI`).

### 3.2. Form Wizard Đăng ký 5 Bước trên Mobile (`modules/hrm/lib/src/business_trip`)
Giao diện tạo đơn trên Mobile được thiết kế dạng Wizard 5 bước tuần tự:
1. **Bước 1 — Thông tin chung (`BusinessTripStep1`):** Chọn khoảng thời gian công tác (Ngày bắt đầu - kết thúc), hình thức công tác (Trong nước / Nước ngoài), phân loại (Cá nhân / Nhóm).
2. **Bước 2 — Nội dung chi tiết (`BusinessTripStep2`):** Căn cứ công tác, mục tiêu chuyến đi, cơ quan đến làm việc, địa điểm chi tiết (Quốc gia, Tỉnh/Thành phố, Quận/Huyện) và danh sách kế hoạch làm việc chi tiết theo từng ngày (`KeHoach`: ngày, địa điểm, nội dung).
3. **Bước 3 — Nhân sự tham gia (`BusinessTripStep3`):** Danh sách cán bộ tham gia đoàn (`ThamGia`), chức vụ, đơn vị công tác, chỉ định Trưởng đoàn (`isTruongDoan`), khai báo thông tin Đảng viên (`isDangVien`).
4. **Bước 4 — Tài chính & Minh chứng (`BusinessTripStep4`):** Khai báo nguồn kinh phí (Trường cấp, Đơn vị cấp, Tài trợ...), các khoản chi thanh toán, cam kết trách nhiệm (`isCamKet`), và tải lên tệp giấy mời/kế hoạch thông qua `file_picker`.
5. **Bước 5 — Xem lại & Nộp hồ sơ (`BusinessTripStep5`):** Tổng quan toàn bộ dữ liệu tờ trình công tác, cho phép người dùng chọn Lưu bản nháp (`NHAP`) hoặc Trình duyệt chính thức (`GUI`).

### 3.3. Vòng đời Trạng thái Đơn Thực tế (State Machine Fact-Check)
Trạng thái trong cơ sở dữ liệu `hrm-be` và ánh xạ hiển thị trên Mobile:

```text
       ┌──────────────┐
       │     NHAP     │ (Bản nháp - Người nộp có quyền chỉnh sửa/xóa)
       └──────┬───────┘
              │ Gửi duyệt
              ▼
   ┌──────────────────────┐   Thu hồi (Trước khi duyệt)    ┌──────────────┐
   │ PROCESSING / CHỜ     ├───────────────────────────────>│   THU_HOI    │
   │ (CV_DV/TRUONG_DV/    │                                └──────────────┘
   │  CV_TCNS/TP_TCNS/BGH)│   Lãnh đạo Từ chối              ┌──────────────┐
   │                      ├───────────────────────────────>│   TU_CHOI    │
   │                      │                                └──────────────┘
   │                      │   Yêu cầu Bổ sung hồ sơ        ┌──────────────┐
   │                      ├───────────────────────────────>│   TRA_LAI    │
   └──────────┬───────────┘                                └──────┬───────┘
              │ BGH/Lãnh đạo phê duyệt cấp cuối                   │ Cán bộ sửa lại
              ▼                                                   │ & nộp lại
       ┌──────────────┐                                           │
       │   KET_THUC   │<──────────────────────────────────────────┘
       │ (Hoàn thành) │
       └──────┬───────┘
              │ Kích hoạt sau 15 ngày (THOI_GIAN_BAO_CAO)
              ▼
       ┌──────────────┐
       │ Nộp Báo cáo  │ (Trưởng đoàn nộp báo cáo kết quả & file đính kèm)
       │   Công tác   │
       └──────────────┘
```

* **Trạng thái thực tế:**
  * `NHAP` → UI label: *Bản nháp* (`FormStatus.draft`).
  * `KET_THUC` → UI label: *Hoàn thành* (`FormStatus.done`).
  * `TU_CHOI` → UI label: *Từ chối* (`FormStatus.rejected`).
  * `THU_HOI` → UI label: *Thu hồi* (`FormStatus.recall`).
  * `TRA_LAI` → UI label: *Trả lại* (`FormStatus.returned`).
  * Các mã bước trung gian (`TRUONG_DV`, `CV_TCNS`, `TP_TCNS`, `BGH`) → UI label: *Chờ duyệt* (`FormStatus.processing`).

---

## 4. Đặc tả Tích hợp Kỹ thuật & Danh mục API Đã Kiểm toán

### 4.1. Danh mục API Đã Xác thực qua Codebase
*Toàn bộ endpoint dưới đây đã được đối chiếu trực tiếp với mã nguồn `hrm-be` (`modules/md_tcns/tcns_dang_ky_cong_tac`) và `myhcmut-mobile` (`modules/hrm/lib/src/business_trip/providers/business_trip.dart`):*

| Phương thức | Endpoint Thực tế | Vai trò Nghiệp vụ | Quyền Kiểm tra (Backend) |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/tcns-di-cong-tac/dang-ky/all?nam={nam}` | Lấy danh sách phiếu công tác cá nhân trong năm | `CN_DI_CONG_TAC.PERMISSION` |
| `GET` | `/api/tcns-di-cong-tac/dang-ky/:id` | Lấy chi tiết phiếu công tác (kèm quy trình, lịch sử, tệp) | `CN_DI_CONG_TAC`, `DV_DI_CONG_TAC`, `TCNS_DI_CONG_TAC` |
| `POST` | `/api/tcns-di-cong-tac/dang-ky` | Tạo mới phiếu đăng ký đi công tác | `CN_DI_CONG_TAC.PERMISSION` |
| `PUT` | `/api/tcns-di-cong-tac/dang-ky` | Cập nhật thông tin phiếu công tác (áp dụng khi đang ở `NHAP` hoặc `TRA_LAI`) | `CN_DI_CONG_TAC.PERMISSION` |
| `DELETE` | `/api/tcns-di-cong-tac/dang-ky/:id` | Xóa phiếu công tác ở trạng thái nháp | `CN_DI_CONG_TAC.PERMISSION` |
| `POST` | `/api/upload/tcns-di-cong-tac/file` | Tải lên tệp minh chứng (Giấy mời, Kế hoạch, Quyết định) | `CN_DI_CONG_TAC.PERMISSION` |
| `POST` | `/api/tcns-di-cong-tac/duyet` | Phê duyệt / Từ chối / Trả lại phiếu công tác | `DV_DI_CONG_TAC.MANAGE`, `TCNS_DI_CONG_TAC.WRITE` |
| `GET` | `/api/tcns-di-cong-tac/page/:pageNumber/:pageSize` | Lấy danh sách phiếu chờ duyệt dành cho Lãnh đạo | `DV_DI_CONG_TAC.READ`, `TCNS_DI_CONG_TAC.READ` |
| `POST` | `/api/tcns-di-cong-tac/so-quyet-dinh` | Ban hành số quyết định công tác chính thức (Web Admin) | `TCNS_DI_CONG_TAC.WRITE.PERMISSION` |

### 4.2. Tuyến đường Điều hướng Mobile (GoRouter Routes)
* Tuyến cá nhân:
  * `/hrm/businessTrip`: Danh sách phiếu công tác cá nhân (`BusinessTripListPage`).
  * `/hrm/business-trip/:id`: Chi tiết phiếu công tác (`BusinessTripDetailPage`) hoặc Màn hình sửa đơn (`BusinessTripEditPage` nếu đơn mang trạng thái `NHAP` hoặc `TRA_LAI`).
* Tuyến phê duyệt lãnh đạo:
  * `/hrm/approve-businessTrip`: Danh sách hồ sơ công tác cần duyệt thuộc thẩm quyền (`ApproveBtripListPage`).

### 4.3. Kiểm tra Trùng lịch Công tác (Collision Detection Engine)
Tại controller `dang_ky.controller.ts:L227`, hệ thống gọi hàm:
```typescript
await app.model.tcnsLichCaNhan.checkTrungLich({
    shcc: listShcc,
    id,
    ngayBatDau,
    ngayKetThuc,
    period,
    periodKetThuc,
    phanLoai: PHAN_LOAI // 'CONG_TAC'
});
```
*Ý nghĩa:* Cơ chế kiểm tra trùng lịch dùng chung giữa Nghỉ phép và Công tác, bảo đảm một cán bộ không thể cùng lúc có lịch công tác và lịch nghỉ phép trùng thời điểm.

---

## 5. Hiện trạng Kiểm thử & Bằng chứng (Test Evidence Audit)

* **Unit Tests & Widget Tests trên Mobile:** Hiện tại trong thư mục [`modules/hrm/test/`](file:///home/xchinh/workspace/myhcmut-mobile/modules/hrm/test/) **chưa có bộ test tự động** cho phân hệ `business_trip` (gán nhãn: `NO_AUTOMATED_TESTS_IN_MOBILE`).
* **Kiểm thử Luồng Nghiệp vụ:** Module được xác thực thông qua kiểm thử thủ công tích hợp (Manual E2E Testing) với môi trường máy chủ staging của Nhà trường.
* **Quy tắc trích dẫn luận văn:** Tuyệt đối không nhận là có Unit Test 100% cho `business_trip` trong Chương 7 để tránh sai lệch với mã nguồn thực tế.

---

## 6. Ma trận Truy vết Yêu cầu Bối cảnh (Context Traceability Matrix)

Dành riêng cho việc làm cơ sở bối cảnh toàn hệ thống trong Báo cáo Đồ án:

| Mã Truy vết (Trace ID) | Tên Nghiệp vụ Bối cảnh | Diễn giải Tóm tắt | Trách nhiệm Triển khai |
| :--- | :--- | :--- | :--- |
| **CTX-BTR-01** | Đăng ký chuyến công tác | Cán bộ khởi tạo tờ trình công tác cá nhân/đoàn, khai báo 5 bước Wizard kèm file kế hoạch. | Tống Duy Khang |
| **CTX-BTR-02** | Thẩm định xung đột lịch | Hệ thống kiểm tra trùng lịch thông qua `tcnsLichCaNhan.checkTrungLich()`. | Backend Core (`hrm-be`) |
| **CTX-BTR-03** | Thẩm định & Phê duyệt đa cấp | Trưởng đơn vị, Phòng TCCB và BGH duyệt hồ sơ theo thẩm quyền hoặc trả lại yêu cầu bổ sung. | Tống Duy Khang (UI) & `hrm-be` |
| **CTX-BTR-04** | Đồng bộ hồ sơ & Thông báo | Ghi nhận quá trình công tác vào lý lịch cán bộ (`tcnsQuaTrinhDiCongTac`) và gửi thông báo FCM. | Tích hợp hệ thống chung |

---

## 7. Hướng dẫn Trích dẫn Trực tiếp vào Báo cáo Luận văn

### 7.1. Trích dẫn cho Chương 1 (Đặt vấn đề, Mục tiêu & Phân công)
* **Trong mục Bối cảnh Nghiệp vụ:**
  > *"Trong môi trường giáo dục đại học, cán bộ giảng viên thường xuyên tham gia các chuyến công tác trong nước và quốc tế phục vụ nghiên cứu khoa học, giảng dạy và hợp tác đối ngoại. MyHCMUT Mobile giải quyết bài toán xử lý hồ sơ công tác linh động ngoài văn phòng, hỗ trợ lập kế hoạch công tác, phân công đoàn đi và trình duyệt đa cấp tức thời."*
* **Trong Bảng Phân công Trách nhiệm Đề tài:**
  > | Thành viên | Phân hệ Phụ trách Chính | Đóng góp Kỹ thuật Nổi bật |
  > | :--- | :--- | :--- |
  > | **Vũ Xuân Chính** (2210392) | Kiến trúc Nền tảng, Hồ sơ Lý lịch, Quản lý Nghỉ phép, Lịch & Điểm danh họp (Socket.IO), Trung tâm Thông báo (FCM). | Thiết kế Clean Architecture monorepo, Multi-Domain Token Bridge, Validator nghỉ phép 4 tầng, Geofencing check-in, Batch Action Bar. |
  > | **Tống Duy Khang** (2211467) | Đăng ký & Phê duyệt Đi công tác, Quản lý Nhiệm vụ & Công việc (Missions/Tasks). | Xây dựng Form Wizard công tác 5 bước, cây đầu việc phân cấp nhiệm vụ (outlined-tree), luồng duyệt đơn ban đầu. |

### 7.2. Trích dẫn cho Chương 2 (Khảo sát Hiện trạng & So sánh Giải pháp)
Khi xây dựng Bảng ma trận so sánh MyHCMUT Mobile với các hệ thống HRM thương mại (như Base HRM, 1Office, Odoo), bổ sung dòng tiêu chí:
* **Tiêu chí:** *Đăng ký & Phê duyệt Chuyến công tác (Đoàn/Cá nhân, Phê duyệt song song đa đơn vị, Hồ sơ minh chứng, Báo cáo sau chuyến đi).*
* **Đánh giá MyHCMUT:** Đáp ứng hoàn toàn quy trình đặc thù của trường đại học công lập tự chủ (phân biệt công tác BGH, Nước ngoài, Trong nước, KHCN và kiểm tra xung đột với lịch giảng dạy/nghỉ phép).

### 7.3. Trích dẫn cho Mục 3.2 (Kiến trúc Công nghệ & Khả năng Tái sử dụng)
Sử dụng phân hệ Công tác làm minh chứng thực tế:
> *"Kiến trúc module hóa trong Melos monorepo chứng minh tính tái sử dụng cao khi phân hệ Đi công tác (`modules/hrm/lib/src/business_trip`) của thành viên Tống Duy Khang kế thừa trọn vẹn hạ tầng dùng chung do sinh viên Vũ Xuân Chính thiết kế: từ `MultiDomainAuthInterceptor` giao tiếp an toàn với `hrm-be`, cơ chế quản lý trạng thái Riverpod, điều hướng GoRouter, đến các Design Tokens và thanh tác vụ duyệt hàng loạt `AppBatchActionBar`."*
