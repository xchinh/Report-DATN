# SNAPSHOT NGUỒN ĐỐI CHIẾU HIỆN HÀNH

> **Ngày đối chiếu:** 01/10/2026 (Asia/Ho_Chi_Minh). Nguồn là HEAD của ba codebase đã commit và push. Snapshot này dùng để chuẩn bị viết lại báo cáo; không thay thế biên bản chạy kiểm thử.

## 1. Mốc mã nguồn

| Thành phần | Nhánh | HEAD | Trạng thái khi đối chiếu |
| --- | --- | --- | --- |
| `hrm-be` | `chinh-dev` | `250274cac7db8f2f4c2f188c9e4084b3e1e52308` | Còn thay đổi cục bộ `.env.local`; không dùng nội dung cấu hình này làm bằng chứng tính năng |
| `ioffice-be` | `chinh-khang` | `96b21cf88b73a55a1debd33c3b45206309119bc0` | Có `AGENTS.md` chưa được theo dõi; không phải thay đổi nghiệp vụ |
| `myhcmut-mobile` | `feat/leaveRequest` | `72e6c679f947c27b445d153a4ef49869b01e9013` | Working tree sạch |

Commit mobile `2ebf898fcee05f039ae8bbdfbc4752c46670ec70` đã đưa bộ chỉnh sửa hồ sơ native và lịch sử hồ sơ vào nhánh, trước HEAD hiện tại. Khi viết về hồ sơ native, cần dẫn cả hiện thực này; không quy toàn bộ tính năng cho commit `72e6c67`.

## 2. Thay đổi mới nhất và commit nền liên quan

| Commit | Thay đổi xác nhận từ diff | Ý nghĩa đối với nội dung báo cáo |
| --- | --- | --- |
| HRM `250274c` | Đồng bộ vai trò xét cả quyền đã gán thủ công, chỉ xóa quyền tự động `isAssign=true` không còn phù hợp; thêm quyền thiếu với `ignoreDuplicates` | Phân quyền vẫn do backend quản lý; đồng bộ quyền theo chức vụ không được làm mất quyền cấp thủ công. Đây là hoàn thiện cơ chế quyền, không phải một use case mobile mới |
| iOffice `6803b7b` | Bổ sung lịch `TRUONG/TONG_HOP` vào lịch cá nhân khi `includePending=true`; kiểm soát người tạo, người mời đích danh và đơn vị được mời; cho mở chi tiết phù hợp, tránh lộ lịch riêng qua cảnh báo | Lịch chưa phát hành có thể hiển thị cho người liên quan; không đồng nghĩa mọi người đều thấy hoặc mọi trạng thái nháp đều được mở |
| iOffice `6803b7b` | Gửi lời mời sau commit thành công khi chuyển sang `HOAN_THANH`; lịch đơn vị chỉ gửi ngay khi bước đầu thực sự là `HOAN_THANH`; khử trùng người nhận có SHCC và tài khoản hoạt động | Phải phân biệt lưu lịch, gửi đăng ký và phát hành; ở commit nền này, thông báo chưa gửi sớm chỉ vì đã lưu; commit `96b21cf` bổ sung gửi khi tạo trực tiếp để demo |
| iOffice `96b21cf` | API tạo trực tiếp lịch Trường gửi lời mời ngay sau commit tại `TONG_HOP`, từ phân công thực sự đã lưu; không rollback lại transaction đã kết thúc; thêm bốn kiểm thử | Điều chỉnh thời điểm gửi để demo; lịch vẫn chưa phát hành, không thay luồng đăng ký. API chung cho mobile/web; phát hành vẫn gửi thêm thông báo |
| Mobile `72e6c67` | Tạo lịch hỗ trợ chọn/tải tệp, giữ ID đã nhận và danh sách tệp đã tải để thử lại; kiểm tra dữ liệu tệp, chặn gửi đồng thời, làm mới danh sách | Bổ sung thiết kế và kiểm thử lỗi từng phần của luồng tạo cuộc họp native; không tuyên bố transaction xuyên suốt mọi request hay chống trùng tuyệt đối |
| Mobile `72e6c67` | Lịch rút gọn và lịch danh sách dùng chung điều hướng: nghỉ phép/công tác mở chi tiết HRM, cuộc họp mở chi tiết lịch | Lịch tổng hợp hỗ trợ đi đến nghiệp vụ nguồn đúng loại, không chỉ hiển thị sự kiện |
| Mobile `72e6c67` | `AuthState` lưu `AuthUser` trong SharedPreferences; đọc lại khi lỗi mạng/non-401; xóa token và cache người dùng khi `/api/state` trả 401, thiếu token hoặc logout; sửa đích điều hướng splash | Nêu cơ chế phục hồi phiên có điều kiện. Cache không cấp thêm quyền, không giúp thực hiện nghiệp vụ ghi khi offline |
| Mobile `72e6c67` | Văn bản đến không phụ thuộc tải danh bạ để hiển thị phân công; chỉ bật sửa khi đủ quyền và dữ liệu nhân sự sẵn sàng; bỏ điều kiện bước không phù hợp khi gửi tham mưu | Hoàn thiện luồng văn bản native theo quyền và trạng thái tải; không mở rộng thành chức năng văn bản mới |
| Mobile `72e6c67` | Dropdown dùng bottom sheet có tìm kiếm, giữ validation; thêm kiểm thử hồi quy hồ sơ đơn từ, nhiệm vụ, lịch, auth và văn bản | Nêu hỗ trợ nhập liệu trên màn hình nhỏ và bổ sung phạm vi kiểm thử; chưa có tổng số test mới được tái lập trong phiên đối chiếu tài liệu này |

## 3. Phạm vi native để viết lại báo cáo

Ứng dụng cung cấp giao diện Flutter native cho các chức năng nằm trong phạm vi báo cáo. Hồ sơ cá nhân được sửa, gửi đề xuất hoặc gửi phản hồi bằng biểu mẫu Flutter và gọi REST API HRM; không dùng luồng Mobile → WebView → HRM Web làm thiết kế hiện hành. HRM/iOffice tiếp tục sở hữu dữ liệu, quyền và quy trình nghiệp vụ. Web hiện hữu có thể là công cụ quản trị/xử lý tiếp tại hệ thống nguồn, không phải màn hình nhúng được tái sử dụng trong app.

| Nhóm tính năng | Bằng chứng hiện thực | Ranh giới cần giữ |
| --- | --- | --- |
| Chỉnh sửa hồ sơ native | `PersonalProfilePage` mở `EditSectionMenuSheet`; các trang trong `modules/hrm/lib/src/profile/views/pages/edit/`; `profile_edit_provider.dart` gọi API theo policy | Tách cập nhật trực tiếp, gửi yêu cầu và phản hồi; biểu mẫu native chưa bao phủ mọi trường/editor của web |
| Lịch sử hồ sơ native | `profile_history_page.dart`, `profile_history.dart`, `profile_history_provider.dart`; `GET /api/staff/ly-lich/profile` | Hiển thị yêu cầu, nhật ký và khác biệt theo dữ liệu backend; không suy luận mọi thay đổi đều đã được nghiệm thu E2E |
| Tạo cuộc họp từ lịch tổng hợp | `schedule_view.dart` → route `/ioffice/schedule/create` → `ScheduleCreatePage` → `ScheduleCreate` | Có lịch đơn vị, gửi phiếu lịch Trường và lịch Trường trực tiếp; tiếp nhận/phát hành vẫn theo hệ thống nguồn, không tự phát hành trên mobile |
| Lịch chưa phát hành và lời mời | `schedule-general.js`, `schedule-general-item.js`, `scheduleGeneralItem.js` tại iOffice | Quyền xem `TONG_HOP` không suy ra quyền sửa/phát hành; HEAD `96b21cf` gửi sau tạo trực tiếp `TONG_HOP` để demo; phát hành vẫn gửi theo luồng hiện có |

**Tình trạng mã cũ:** HEAD mobile vẫn chứa `src/webview/`, export, phụ thuộc `flutter_inappwebview` và hook xóa cookie khi logout. Không tìm thấy lời gọi mở `AppInAppWebViewScreen` trong luồng hồ sơ hiện tại. Báo cáo có thể mô tả chức năng trong phạm vi bằng native, nhưng không dùng câu “đã xóa toàn bộ mã và phụ thuộc WebView khỏi repository”. Cơ chế ticket SSO còn ở backend không tự chứng minh app đang dùng WebView.

## 4. Bằng chứng và giới hạn kiểm chứng

- Đã đọc diff ba codebase và kiểm chứng iOffice `96b21cf`: toàn bộ 39/39 test backend đạt, kiểm tra cú pháp controller và diff đạt. Kiểm thử hồi quy phát hiện lỗi khi vô hiệu hóa lệnh gửi sớm trong bộ nạp test. Chưa chạy lại test HRM/mobile hoặc xác nhận push trên điện thoại thật; không dùng kết quả backend thay số liệu kiểm thử toàn hệ thống ở Chương 6.
- `myhcmut-mobile/docs/profile-edit-web-comparison.md` và `docs/schedule-creation-audit.md` chứa đối chiếu ngày 01/10, gồm quan sát trên thiết bị và kết quả kiểm tra ở từng giai đoạn. Chỉ dùng đúng phạm vi, phiên bản và giới hạn của từng lượt; không cộng các số test thành tổng mới của HEAD.
- Các kết quả ngày 22–24/09 và Gate 0 là lịch sử. Thành công qua WebView/trình duyệt không chứng minh nộp hồ sơ native kèm minh chứng ở phiên bản mới.
- iOffice có hạ tầng outbox tại `config/lib/outbox.js`; riêng lời mời họp mới dùng `notification.send` sau commit, chưa có retry/outbox bền vững riêng. Không suy rộng sự hiện diện outbox sang mọi luồng thông báo.
- Mã tạo lịch giữ ID khi đã nhận phản hồi để thử lại trên cùng bản ghi. Nếu POST đã commit nhưng phản hồi bị mất, client có thể không biết ID; chưa có khóa idempotency backend bảo đảm chống tạo trùng trong trường hợp này.
- Không sao chép cấu hình bí mật, token, dữ liệu tài khoản hay hồ sơ nhân sự vào repository tài liệu.

## 5. Tài liệu dùng tiếp

- [Danh mục nội dung cần sửa theo chương](14_REPORT_7_CHAPTER_AUDIT.md): vị trí báo cáo, lý do và đoạn diễn đạt đề xuất.
- [Đặc tả hồ sơ native](03_REQUIREMENT_PACK_PROFILE.md): phạm vi nhập liệu, policy, API và kiểm chứng.
- [Đặc tả tạo cuộc họp](06B_REQUIREMENT_PACK_SCHEDULE.md): FR, UC, quyền, trạng thái và lỗi từng phần.
- [Luồng vận hành hiện tại](SYSTEM_OPERATION.md) và [ma trận truy vết](02_SCOPE_CLAIM_TRACEABILITY.md).

## 6. Thay đổi demo đã commit và push — `96b21cf`

- iOffice `POST /api/schedule/general-item/general/create` gửi lời mời ngay sau commit khi tạo trực tiếp lịch Trường ở `TONG_HOP`; lịch vẫn chưa phát hành. API dùng chung cho mobile và web. Gửi phiếu/tiếp nhận không kích hoạt thông báo sớm.
- Dùng phân công đã lưu hợp lệ, SHCC và tài khoản hoạt động; không gửi khi lưu/commit thất bại. Upload tệp diễn ra sau request tạo nên lời mời có thể đến trước khi tải tệp xong.
- Luồng phát hành cũ vẫn gửi thông báo, nên người nhận có thể nhận thêm khi phát hành. Đây là điều chỉnh phục vụ demo, cần ghi rõ khi viết báo cáo.
- Kiểm tra mới: `node --test test/*.test.js` đạt 39/39 test backend (37 test lịch và 2 test quyền đọc tệp văn bản); `node --check modules/md-schedule/schedule-general/controller/schedule-general-item.js` và `git diff --check` đạt. Test dùng mock, chưa xác nhận giao nhận push trên thiết bị thật.
