# Xác minh duyệt nghỉ phép từ Android đến HRM

Đây là bằng chứng nội bộ cho **một bước duyệt cấp đơn vị** của `UC-LEV-03`, không phải xác nhận toàn bộ quy trình nhiều cấp. Thực hiện khoảng 03:04–03:06 ngày 24/09/2026 (UTC+7) trên Realme RMX2151, Android 12, APK debug và các dịch vụ thử nghiệm như [manifest.md](manifest.md). Chỉ dùng tài khoản và phiếu thử nghiệm đã có; không tạo tài khoản mới.

| Vai trò/bản ghi | Giá trị dùng để đối chiếu nội bộ |
| --- | --- |
| Người lập `CB-A` | Tài khoản thử đã được kiểm tra phiên; định danh thực không đưa vào tài liệu |
| Người duyệt `LD-DV-A` | Tài khoản cùng đơn vị, có quyền `DV_NGHI_PHEP:MANAGE` và được phân công xử lý phiếu; định danh thực không đưa vào tài liệu |
| Phiếu thử | `#289`, trước thao tác ở `ma_quy_trinh=TRUONG_DV`, `trang_thai=GUI` |
| Phân công workflow | Bản ghi `tcns_quy_trinh_user` chỉ định `LD-DV-A` cho hành động `DUYET`, chuyển đến `CV_TCNS` |

1. Dùng tính năng **Đổi người dùng** của ứng dụng để chuyển phiên quản trị sang `LD-DV-A`; kiểm tra màn cá nhân hiển thị đúng tài khoản được chọn.
2. Mở **Phê duyệt → Nghỉ phép**. Phiếu `#289` xuất hiện trong danh sách **Chờ tôi duyệt**; trang chi tiết hiển thị các tác vụ **Từ chối**, **Trả lại** và **Duyệt**. Không dùng sự hiện diện của nút làm bằng chứng backend đã xử lý.
3. Trước khi thao tác, truy vấn chỉ đọc `tcns_nghi_phep_dang_ky` và `tcns_quy_trinh_history`: phiếu ở `TRUONG_DV/GUI`, chỉ có lịch sử gửi `id=1627` của người lập.
4. Chọn **Duyệt**, xác nhận trên Android. Ứng dụng báo **Duyệt thành công** và trang chi tiết đổi trạng thái hiển thị sang **Duyệt**.
5. Truy vấn chỉ đọc sau thao tác: phiếu `#289` ở `CV_TCNS/DUYET`; lịch sử mới `id=1630` ghi đúng định danh của `LD-DV-A`, `TRUONG_DV → CV_TCNS`, hành động `DUYET`. Sau đó chuyển thiết bị về tài khoản ban đầu.

**Kết luận:** Pass cho luồng UI Android → HRM Backend → cập nhật trạng thái/lịch sử ở **bước duyệt cấp đơn vị**. Chưa kiểm tra cấp TCCB, bước duyệt cuối/quỹ phép, từ chối, trả lại, duyệt hàng loạt hoặc nhiều người xử lý đồng thời. Phiếu `#289` đã được thay đổi trên CSDL thử nghiệm; **không** khôi phục bằng sửa SQL thủ công vì cần giữ nguyên lịch sử kiểm thử. Nếu cần chạy lại cùng nhánh, tạo phiếu thử mới với dữ liệu được phép sử dụng.

Kiểm thử thành phần được chạy bổ sung trong cùng phiên làm việc:

| Lệnh/phạm vi | Kết quả |
| --- | --- |
| `flutter test --no-pub` lần lượt tại sáu gói/module mobile | 371/371 đạt; từng nhóm 2, 8, 3, 47, 233, 78 |
| `yarn vitest run` tại sáu tệp HRM Backend liên quan SSO, nghỉ phép, lý do từ chối | 59/59 đạt |
| `node --test test/incoming_document_file_access.test.js test/schedule_meeting_checkin.test.js` tại iOffice Backend | 4/4 đạt |
| `yarn vitest run test/unit` tại HRM Backend | 165/181 đạt; 16 không đạt ở `staff_luong_phu_cap/ket-thuc-ngach.unit.test.ts` |

Các bộ test thành phần không được cộng thành tỷ lệ kiểm thử đầu–cuối. Không có ảnh màn hình chưa khử thông tin cá nhân được đưa vào báo cáo.
