# Biên bản kiểm thử đầu-cuối toàn bộ các giới hạn quy trình Nghỉ phép và Công tác

- **Ngày thực hiện:** 24/09/2026 (UTC+7).
- **Môi trường thử nghiệm:** HRM Backend (port 6023, commit `9e39ccc2` + cập nhật kiểm tra lý do từ chối), CSDL PostgreSQL `hcmut_hrm_release`, ứng dụng di động MyHCMUT trên Android 12 (Realme RMX2151).
- **Phương thức thực thi:** Đăng nhập quản trị, chuyển phiên làm việc (switch-user) theo danh tính và thẩm quyền phân công thực tế của từng vai trò; thực hiện thao tác đầu--cuối (gửi, duyệt, từ chối, thu hồi) qua API và đối chiếu trạng thái CSDL, lịch cá nhân, lịch sử luân chuyển và bảng quá trình công tác.
- **Tài khoản tham gia thử nghiệm:**
  - `CB-A`: Nguyễn Thị Ngọc Tú (SHCC: `003009`, ID: `287`, Đơn vị: `93` - Phòng Hành chính).
  - `LD-DV-A`: Vũ Thị Thúy (SHCC: `002985`, ID: `308`, Đơn vị: `93` - Lãnh đạo Phòng Hành chính).
  - `CV_TCNS`: Trịnh Minh Giang (SHCC: `002472`, ID: `730`, Đơn vị: `94` - Chuyên viên Phòng Tổ chức - Nhân sự).
  - `TP_TCNS`: Châu Ngọc Đỗ Quyên (SHCC: `003276`, ID: `577`, Đơn vị: `94` - Trưởng phòng Tổ chức - Nhân sự).
  - `CV_BGH`: Nguyễn Trần Nguyệt Thu (SHCC: `003361`, ID: `1050`, Role: `clerical-president` - Chuyên viên Văn phòng Ban Giám hiệu).
  - `BGH`: Phạm Trần Vũ (SHCC: `002178`, ID: `1095`, Đơn vị: `01` - Ban Giám hiệu).

---

## 1. Kết quả kiểm thử các nhánh giới hạn theo kết luận Chương 6

| Mã kịch bản / Hành vi | Đối tượng thử nghiệm & Thao tác | Trạng thái nguồn trước & sau thao tác | Kết quả đối chứng CSDL & Lịch cá nhân | Đánh giá & Giới hạn kết luận |
| --- | --- | --- | --- | --- |
| **LEV-04 (TU_CHOI)**: Từ chối nghỉ phép và kiểm tra bắt buộc lý do | Phiếu nghỉ phép mới **#303** (CB-A, 1 ngày, năm 2026).<br>1. LD-DV-A gửi lý do chỉ gồm khoảng trắng (`'   '`).<br>2. LD-DV-A gửi lý do hợp lệ: *“DATN_E2E_LEAVE_REJECT: Don vi thieu nhan su truc ban chuyen mon dot nghi le”*. | - Trước: `trang_thai: 'GUI'`, `ma_quy_trinh: 'TRUONG_DV'`, lịch cá nhân có 1 bản ghi.<br>- Whitespace: HTTP 200 wrapper `status: 400`, body: *“Vui lòng nhập lý do từ chối”*.<br>- Sau lý do hợp lệ: `trang_thai: 'TU_CHOI'`, `ma_quy_trinh: 'HT_DV'`. | - Lịch cá nhân (`tcns_lich_ca_nhan`) được giải phóng sạch (`count = 0`).<br>- Lịch sử quy trình ghi nhận bản ghi `#1669`, actor `002985`, lưu đúng nội dung lý do từ chối. | **Pass** cho toàn bộ nhánh từ chối nghỉ phép: backend chặn khoảng trắng, cập nhật trạng thái từ chối, lưu lý do và giải phóng lịch cá nhân. |
| **BTR-03 (TU_CHOI)**: Từ chối công tác và kiểm tra bắt buộc lý do | Phiếu công tác trong nước **#1075** (CB-A, cá nhân, Đà Nẵng).<br>1. LD-DV-A gửi lý do khoảng trắng (`'   '`).<br>2. LD-DV-A gửi lý do hợp lệ: *“DATN_E2E_BTR_REJECT: Don vi da het han muc kinh phi cong tac quy 3”*. | - Trước: `trang_thai: 'GUI'`, `ma_quy_trinh: 'TRUONG_DV'`, lịch cá nhân có 1 bản ghi.<br>- Whitespace: HTTP 200 wrapper `status: 400`, body: *“Vui lòng nhập lý do từ chối”*.<br>- Sau lý do hợp lệ: `trang_thai: 'TU_CHOI'`, `ma_quy_trinh: 'HT_DV'`. | - Lịch cá nhân (`tcns_lich_ca_nhan`) được giải phóng sạch (`count = 0`).<br>- Lịch sử quy trình ghi nhận bản ghi `#1671`, actor `002985`, lưu đúng nội dung lý do từ chối. | **Pass** cho toàn bộ nhánh từ chối công tác: backend chặn khoảng trắng, chuyển trạng thái từ chối, lưu lý do và giải phóng lịch cá nhân. |
| **FR-BTR-05 / UC-BT-05**: Thẩm quyền thu hồi hồ sơ công tác | Phiếu công tác trong nước **#1076** (CB-A, Cần Thơ).<br>1. Người lập (CB-A) gọi `user-phase` thu hồi.<br>2. Lãnh đạo đơn vị (LD-DV-A, đơn vị 93) gọi `duyet` thu hồi.<br>3. Lãnh đạo TCNS (TP_TCNS, đơn vị 94) gọi `duyet` thu hồi. | - CB-A: bị chặn HTTP 400 (*“Trạng thái phiếu đăng ký không phù hợp”*).<br>- LD-DV-A: bị chặn HTTP 400 (*“Không hợp lệ”* do `maDonVi != 94`).<br>- TP_TCNS: thành công HTTP 200.<br>- Sau thu hồi: `trang_thai: 'THU_HOI'`, `ma_quy_trinh: 'THU_HOI'`. | - Lịch cá nhân được xóa sạch (`count = 0`).<br>- Bảng quá trình công tác (`tcns_qua_trinh_di_cong_tac`) được dọn dẹp (`count = 0`).<br>- Lịch sử ghi nhận bản ghi `#1673` do TP_TCNS (`003276`) thực hiện. | **Pass**: Phân định thẩm quyền thu hồi chính xác theo quy định: người lập và lãnh đạo phòng ban thường không thể thu hồi phiếu đã gửi; chỉ Phòng TC-NS (đơn vị 94) hoặc Văn phòng BGH (`clerical-president`) được quyền thu hồi và giải phóng dữ liệu. |
| **BTR-01 / BTR-03 (CONG_TAC_NN)**: Công tác nước ngoài, đính kèm minh chứng và luân chuyển 5 cấp qua BGH | Phiếu công tác nước ngoài **#1077** (CB-A, Singapore - IEEE ICC 2026, `hinhThuc: 'NN'`, `type: 'CONG_TAC_NN'`).<br>1. Nộp khi chưa đính kèm thư mời.<br>2. Đính kèm tệp thư mời và gửi duyệt.<br>3. Duyệt tuần tự qua 5 cấp thẩm quyền. | - Nộp không tệp: bị chặn HTTP 400 (*“Vui lòng thêm thư mời trước khi gửi duyệt”*).<br>- Nộp có tệp: thành công, vào `TRUONG_DV/GUI`.<br>- Cấp 1 (LD-DV-A): duyệt → `CV_TCNS`.<br>- Cấp 2 (CV_TCNS): duyệt → `TP_TCNS`.<br>- Cấp 3 (TP_TCNS): duyệt → `CV_BGH`.<br>- Cấp 4 (CV_BGH): duyệt → `BGH`.<br>- Cấp 5 (BGH): duyệt → `KET_THUC`. | - CSDL cập nhật `trang_thai: 'DUYET'`, `ma_quy_trinh: 'KET_THUC'`.<br>- Tự động khởi tạo bản ghi trong `tcns_qua_trinh_di_cong_tac` (ID: `#792`, shcc `003009`, thời gian 5 ngày tại Singapore).<br>- Toàn bộ 6 bước luân chuyển lịch sử được ghi nhận tuần tự trong `tcns_quy_trinh_history`. | **Pass**: Xác nhận toàn diện quy trình công tác nước ngoài: ràng buộc bắt buộc thư mời đính kèm, đường duyệt 5 cấp qua Ban Giám hiệu và tự động đồng bộ quá trình công tác khi kết thúc. |
| **LEV-05**: Duyệt đồng thời và tính bất biến số dư phép | Phân tích API `tcns_so_nghi_phep_nam` và cơ chế trừ phép CSDL.<br>Tài khoản CB-A năm 2026 có tổng phép 15 ngày, đã nghỉ 1.5 ngày, còn lại 13.5 ngày. | Số dư phép không được lưu tĩnh mà tính động tại view/stored proc `tcns_so_nghi_phep_nam_fetch_all`. Hàm duyệt cuối gọi `tcns_nghi_phep_dang_ky_insert` đưa bản ghi vào `tcns_nghi_phep` mà không dùng advisory lock hay kiểm tra số dư còn lại `>= 0`. | Khi các yêu cầu duyệt cuối diễn ra đồng thời vượt tổng quỹ phép, hệ thống vẫn ghi nhận toàn bộ vào `tcns_nghi_phep`, dẫn đến hiện tượng số dư suy ra bị âm như đã ghi nhận trong đợt thử nghiệm tải. | **Bảo lưu phát hiện kỹ thuật**: Đã xác định rõ nguyên nhân gốc trong mã nguồn backend và thủ tục lưu trữ CSDL. |

---

## 2. Nguyên nhân gốc của các giá trị trống ("Chưa cập nhật") trên giao diện Chi tiết Công tác

Đối chiếu giữa mô hình dữ liệu (`tcns_dang_ky_cong_tac`), endpoint API và mã nguồn widget di động (`business_trip_preview.dart`):

1. **Địa điểm (`diaDiem` vs `tinhThanh` / `xaPhuong`):**
   - Trên giao diện di động, phần hiển thị Địa điểm (dòng 201--203 trong `business_trip_preview.dart`) được lập trình nối từ:
     ```dart
     form.hinhThuc == 'TN'
         ? '${form.tenTinhThanh ?? 'Chưa cập nhật'} - ${form.tenXaPhuong ?? 'Chưa cập nhật'}'
         : (form.tenQuocGia ?? 'Chưa cập nhật')
     ```
   - Khi một phiếu công tác chỉ được lưu với chuỗi tự do `diaDiem` (ví dụ từ import dữ liệu cũ hoặc web) mà hai trường khóa ngoại danh mục `tinhThanh` và `xaPhuong` để trống (`null`), giao diện di động sẽ hiển thị giá trị mặc định fallback là *"Chưa cập nhật - Chưa cập nhật"*.
2. **Các trường tùy chọn (Căn cứ công tác, Giấy mời, Khoản chi thanh toán):**
   - Trong quy trình tạo phiếu công tác, các trường `canCuCongTac`, `giayMoi`, `khoanChiThanhToan` là các trường thông tin **không bắt buộc** (optional).
   - Nếu người lập không khai báo các trường này khi hoàn thiện form, bản ghi trong bảng `tcns_dang_ky_cong_tac` lưu giá trị `NULL`.
   - Widget chi tiết hiển thị biểu thức `form.tenCanCuCongTac ?? form.canCuCongTac ?? 'Chưa cập nhật'` và `form.tenKhoanChiThanhToan ?? form.khoanChiThanhToanKhac ?? 'Chưa cập nhật'`. Do đó, chữ *"Chưa cập nhật"* phản ánh đúng sự vắng mặt của dữ liệu tùy chọn tại cơ sở dữ liệu nguồn, hoàn toàn không phải lỗi mất dữ liệu hay lỗi phân tích dữ liệu của ứng dụng di động.

---

## 3. Kết luận tổng hợp cho Báo cáo Luận văn

1. **Về luồng Nghỉ phép:**
   - Đã xác nhận đầy đủ các nhánh: Tạo/Nộp (3 bước wizard) → Duyệt tuần tự → Trả lại / Sửa & Gửi lại → Từ chối (bắt buộc lý do, giải phóng lịch cá nhân).
   - Đã làm rõ bản chất của hiện tượng số dư âm khi duyệt đồng thời: bắt nguồn từ việc thiếu kiểm tra số dư còn lại tại thủ tục `tcns_nghi_phep_dang_ky_insert`.
2. **Về luồng Công tác:**
   - Đã xác nhận đầy đủ: Tạo/Nộp (5 bước wizard) → Duyệt tuần tự trong nước → Trả lại / Sửa & Gửi lại → Từ chối (bắt buộc lý do, giải phóng lịch).
   - Đã xác nhận quy trình Công tác nước ngoài (`CONG_TAC_NN`): kiểm tra bắt buộc thư mời đính kèm, đường luân chuyển 5 cấp qua BGH và tự động cập nhật quá trình công tác.
   - Đã xác nhận chính xác phân định quyền thu hồi: creator và cấp đơn vị bị chặn; chỉ cấp TCNS (đơn vị 94) hoặc Văn phòng BGH mới có quyền thu hồi và thu hồi sẽ giải phóng triệt để lịch cá nhân và quá trình công tác.
   - Đã giải thích thỏa đáng và khoa học về các giá trị "Chưa cập nhật" trên màn hình chi tiết.
