# Rà soát Chương 5 - 02/10/2026

**Trạng thái: nội dung đã được áp dụng vào nguồn LaTeX của báo cáo và biên dịch lại thành `main.pdf`.**

- [Nguồn Chương 5 hiện hành](../../../Chapter5/index.tex)
- Báo cáo hoàn chỉnh và PDF preview Chương 5 đã được biên dịch, render và kiểm tra cục bộ; các tệp preview đã được xóa sau khi áp dụng, PDF build không đưa vào repository theo quy tắc `*.pdf` trong `.gitignore`.
- [Diff đã áp dụng, lưu để đối chiếu](proposed-chapter5.patch)
- [Bản được rà soát: docs/datn.md](../../datn.md)

## 1. Kết luận rà soát

Chương 5 hiện tại đã có kiến trúc và ranh giới hệ thống phù hợp với phạm vi native. Các phần hồ sơ, tạo lịch, xác thực, thông báo và lịch đa nguồn đã phân biệt được trách nhiệm mobile với HRM/iOffice. Vì vậy, giữ cấu trúc 5.1-5.5 và các nhóm dữ liệu; biên tập từng phần để làm rõ lý do thiết kế, cách phối hợp, trạng thái và giới hạn xử lý.

Nội dung đã áp dụng theo bản bạn gửi. Mục 5.1 làm rõ kiến trúc và quyền sở hữu nghiệp vụ; mục 5.2 có hai mục đánh số, với cấu trúc mobile, ví dụ tải hồ sơ, thành phần dùng chung và cache ở 5.2.1, backend hiện hữu và phạm vi mở rộng ở 5.2.2. Hai mục địa chỉ/gia đình chỉ còn câu dẫn và ERD. Các nhóm dữ liệu khác, từ điển 5.2-5.8 và các mục 5.4-5.5 được giữ theo nội dung đã duyệt.

Nguồn nội dung chính là Chương 5 trong `docs/datn.md`, từ phần thân chương ở dòng 2293 đến hết dòng 3568, không lấy các dòng trong mục lục làm nội dung. Tệp này có dấu vết chuyển đổi từ PDF: câu bị ngắt theo trang, chữ dính và hàng Markdown chia nhỏ. Các tệp `Chapter5/*.tex` hiện hành được dùng để đối chiếu nội dung theo định dạng báo cáo; những lỗi chuyển đổi đó không được xem là lỗi thiết kế của hệ thống.

## 2. Đoạn nào giữ, rút gọn, chuyển hoặc viết lại

Các vị trí dưới đây tham chiếu số dòng của `docs/datn.md` tại thời điểm rà soát. Nội dung đề xuất đã được áp dụng vào nguồn LaTeX; diff vẫn được lưu để đối chiếu.

| Vị trí / đoạn nhận diện | Đề xuất | Nội dung và lý do |
| --- | --- | --- |
| 5.1, dòng 2305: phần mở đầu | Viết lại | Nêu kênh truy cập mobile, tích hợp trực tiếp qua API và quyền sở hữu nghiệp vụ/dữ liệu của HRM, iOffice. |
| 5.1, Hình 5.1 và trách nhiệm Mobile, Auth, HRM, tầng dữ liệu | Giữ | Giữ mô tả riêng cho Mobile, Auth, HRM, iOffice và tầng dữ liệu; nêu rõ FCM, Socket.IO, tổng hợp lịch, cùng giới hạn khi một nguồn gặp sự cố. |
| 5.2, phần mở đầu và Bảng 5.1 | Giữ, cập nhật cách dẫn | Tập trung vào tổ chức mobile và backend; giữ bảng phân biệt phần kế thừa với phần nhóm phát triển/tích hợp. |
| 5.2.1, dòng 2375: cấu trúc `apps`, `modules`, `packages` và Hình 5.2 | Giữ vị trí cũ | Giữ cấu trúc thư mục và bổ sung ngắn lý do chia theo miền nghiệp vụ, tái sử dụng hạ tầng. |
| 5.2.1, ví dụ module hồ sơ và Hình 5.3 | Giữ vị trí cũ | Giữ `PersonalProfilePage`, `profileInfoProvider`, provider thành phần, cache/API và cách hợp nhất kết quả cho giao diện. Phần này minh họa cấu trúc module, không lặp luồng nghiệp vụ. |
| 5.2.1, thành phần dùng chung và lưu trữ cục bộ | Giữ vị trí cũ | Giữ Dio, token, trạng thái, điều hướng, TTL 12 giờ và giới hạn cache. Không tách thành mục 5.2.2 mới. |
| 5.2.2, dòng 2439: backend hiện hữu và phạm vi mở rộng | Giữ cấu trúc cũ, biên tập | Phân biệt Auth/HRM/iOffice và đóng góp; giữ trách nhiệm backend, quyền và Bảng 5.1. |
| 5.2.2, phạm vi mở rộng backend | Giữ và biên tập theo bản mới | Tập trung vào tích hợp HRM/iOffice, policy và minh chứng hồ sơ, transaction tạo lịch và request upload riêng. |
| 5.2.3 cũ, dòng 2520: thiết kế quản lý hồ sơ | Bỏ mục riêng | Chương 4 đã có cập nhật, thẩm định, phản hồi, lịch sử và các luồng ngoại lệ. Chỉ giữ một đoạn kỹ thuật ở phần HRM trong 5.2.2: policy, backend kiểm tra lại, trường thay đổi và multipart khi cần minh chứng. |
| 5.2.4 cũ, dòng 2550: thiết kế tạo/đăng ký lịch họp | Bỏ mục riêng | Chương 4 đã có các nhánh, trạng thái và thử lại. Giữ các quyết định cần thiết: transaction bao phủ dữ liệu lịch và thành phần; upload tệp dùng request riêng sau khi tạo; thông báo không đồng nghĩa lịch đã phát hành. |
| 5.3, dòng 2592-2640: phạm vi dữ liệu và hai hình tổng quan | Giữ, sửa cách đọc | Phân biệt CSDL HRM/iOffice, ERD khái niệm và bảng đại diện theo miền. Bỏ câu Redis không có cơ chế tương ứng trong 5.4. |
| 5.3.3 và từ điển hồ sơ, dòng 2631-2796 | Sửa tên bảng | Dùng `staff_ly_lich*` theo model/schema nguồn; giữ các trường liên quan và bổ sung `is_phan_hoi`. |
| 5.3.3.1, dòng 2797: lý lịch địa chỉ | Chèn Image #1; bỏ diễn giải trường | Chỉ giữ câu dẫn và `image/erd/erd-lldc.png`; bỏ từ điển địa chỉ cùng các đoạn giải thích từng trường/kiểu. |
| 5.3.3.2, dòng 2821: lý lịch gia đình | Chèn Image #2; bỏ diễn giải trường | Chỉ giữ câu dẫn và `image/erd/erd-llgd.png`; bỏ từ điển gia đình cùng các đoạn giải thích từng trường/kiểu. |
| 5.3.3.3-5.3.3.6, dòng 2868-2891 | Giữ hình, thêm câu dẫn ngắn | Liên hệ nhóm dữ liệu với phần mobile khai thác; phân biệt lịch sử công tác với phiếu công tác, tra cứu lương với tính lương. |
| 5.3.4 và từ điển quy trình, dòng 2892-2906 | Sửa nội dung không nhất quán | Đổi `fw_quy_trinh_step` thành `fw_quy_trinh_buoc`; sửa PK ghép `(ma, ma_quy_trinh)` và phân biệt liên kết logic/FK vật lý. |
| 5.3.5, dòng 2915: `shcc` của phiếu nghỉ phép | Sửa mô tả khóa | PK của phiếu là `id`; `shcc` không phải PK. Giữ PK ghép của bảng quỹ phép. |
| 5.3.6-5.3.8: công tác, văn phòng số và truy vết | Giữ | Các nhóm liên quan trực tiếp tới mobile; giữ phân biệt liên kết logic/FK và giới hạn UNIQUE điểm danh. |
| 5.4.1, dòng 3476: xác thực và API | Giữ | Cùng khóa `auth`, Bearer token, quyền tại backend, cache người dùng và giới hạn refresh. |
| 5.4.2, dòng 3503: thông báo | Rút đoạn lặp, làm rõ | Đăng ký token với từng backend; payload hỗ trợ mở chức năng tương ứng, sau đó ứng dụng tải trạng thái nghiệp vụ từ hệ thống nguồn. |
| 5.4.3, dòng 3534: lịch đa nguồn và Socket.IO | Giữ, bổ sung cơ chế/giới hạn | Làm rõ tổng hợp tại mobile, thứ tự phụ thuộc iOffice, lỗi HRM chưa báo riêng, API ghi dữ liệu, Socket.IO báo thay đổi và mất kết nối. |
| 5.5, dòng 3554-3566 | Rút còn một đoạn | Nối kiến trúc, thành phần, dữ liệu và tích hợp với Chương 6. |

Bỏ hai mục chức năng riêng không đồng nghĩa với xóa mọi quyết định hiện thực. Chương 4 nêu luồng nghiệp vụ; ví dụ provider/cache ở 5.2.1 và các đoạn kỹ thuật ngắn ở 5.2.2 giải thích sự phối hợp của thành phần. Đặc biệt, phần tuần tự hồ sơ ở Chương 4 hiện còn dẫn sang Chương 5 về hợp đồng API và truyền tệp, nên nội dung kỹ thuật này được giữ trong phần HRM.

## 3. Cách sử dụng hai ERD được yêu cầu

Hai ảnh gốc được giữ nguyên. Ảnh địa chỉ xuất hiện tại **5.3.3.1**; ảnh gia đình xuất hiện tại **5.3.3.2**, tương ứng **Hình 5.7** và **Hình 5.8**. Hai mục chỉ có câu dẫn và hình, không còn bảng từ điển hoặc giải thích từng trường. Các sai khác khi đối chiếu dưới đây được lưu trong tài liệu rà soát để người biên tập biết, không đưa thành đoạn diễn giải trường trong chương.

| Sai khác / ký hiệu | Cách đọc trong bản áp dụng | Bằng chứng |
| --- | --- | --- |
| Ảnh ghi `tcns_ly_lich_dia_chi` / `tcns_ly_lich_gia_dinh` | Tên nhóm nghiệp vụ của ERD; tên bảng trong model là `staff_ly_lich_dia_chi` / `staff_ly_lich_gia_dinh`. | Hai model địa chỉ/gia đình HRM. |
| Image #1 ghi `xa_phuong varchar(5)` | Giữ nguyên ảnh theo yêu cầu; model có kiểu khác. Sai khác được ghi tại tài liệu rà soát này; bản áp dụng không còn từ điển địa chỉ. | `staff_ly_lich_dia_chi.model.ts`, khai báo `DataTypes.STRING(10)`. |
| Một cột nối tới cả danh mục địa giới mới và cũ | Quan hệ tra cứu/diễn giải dữ liệu; không khẳng định nhiều FK vật lý đồng thời. | Model địa chỉ không khai báo các ràng buộc `references` tương ứng. |
| Image #2 nối các cột JSONB tới danh mục | Minh họa tra cứu giá trị trong cấu trúc địa chỉ, không phải FK từ toàn cột JSONB. | `queQuanMoi` / `noiOHienTaiMoi` dùng `DataTypes.JSONB`. |
| Ảnh gia đình không có mọi trường của model | Đây là ERD rút gọn, không tuyên bố ảnh thể hiện toàn bộ schema; bản áp dụng không còn từ điển gia đình. | Model gia đình có thêm `gioiTinh` và các trường khác. |

Không sửa kiểu hoặc tên trong model để khớp ảnh. Không dùng biểu tượng khóa trong hai ảnh để khẳng định ràng buộc của CSDL triển khai.

## 4. Bằng chứng chính đã đối chiếu

| Nội dung | Nguồn |
| --- | --- |
| Bản nội dung được yêu cầu | [docs/datn.md](../../datn.md); các tệp `Chapter5/section1.tex` đến `section5.tex` và từ điển hiện tại có nội dung tương ứng. |
| Kiến trúc và phần thay đổi native | [Snapshot nguồn ngày 01/10](../../13_CURRENT_SOURCE_SNAPSHOT.md), [audit hiện thực Chương 4-6](../../chapter6-7-evidence/13_chapter4_chapter6_claim_audit_20261002.md). Các tài liệu SSO/WebView tháng 9 chỉ là lịch sử, không dùng để phục hồi scope. |
| Token và phiên | [Interceptor](/home/xchinh/workspace/myhcmut-mobile/packages/core/network/lib/src/interceptors/multi_domain_auth_interceptor.dart), [AuthState](/home/xchinh/workspace/myhcmut-mobile/packages/shared/auth/lib/src/provider/auth_state_provider.dart); cấu hình Auth/HRM/iOffice đều có `domainKey = 'auth'`. |
| Cache hồ sơ | [fetchWithCacheFirst](/home/xchinh/workspace/myhcmut-mobile/modules/hrm/lib/src/profile/utils/swr_cache_fetcher.dart), [provider hồ sơ](/home/xchinh/workspace/myhcmut-mobile/modules/hrm/lib/src/profile/providers/profile.dart). |
| Tên/kiểu địa chỉ và gia đình | [Model địa chỉ](/home/xchinh/workspace/hrm-be/modules/md_staff/staff_ly_lich/model/staff_ly_lich_dia_chi.model.ts), [model gia đình](/home/xchinh/workspace/hrm-be/modules/md_staff/staff_ly_lich/model/staff_ly_lich_gia_dinh.model.ts). |
| Bảng hồ sơ, đề xuất và nghỉ phép | [Schema HRM đối chiếu](../../chapter5/hrm-live-schema.dbml), [schema hồ sơ chọn lọc](../../chapter5/schema-profile.dbml), [schema nghỉ phép chọn lọc](../../chapter5/schema-leave.dbml); model `tcns_nghi_phep_dang_ky` có PK `id`. |
| Bước và thẩm quyền quy trình | [Model bước](/home/xchinh/workspace/hrm-be/modules/_default/fw_quy_trinh/model/fw_quy_trinh_buoc.model.ts), [model target](/home/xchinh/workspace/hrm-be/modules/_default/fw_quy_trinh/model/fw_quy_trinh_target.model.ts). |
| Tạo lịch, transaction và upload | [Notifier tạo lịch](/home/xchinh/workspace/myhcmut-mobile/modules/ioffice/lib/src/schedule/providers/schedule_create_provider.dart), [controller mục lịch](/home/xchinh/workspace/ioffice-be/modules/md-schedule/schedule-general/controller/schedule-general-item.js). |
| Lịch đa nguồn và lỗi HRM/iOffice | [Provider lịch](/home/xchinh/workspace/myhcmut-mobile/modules/ioffice/lib/src/schedule/providers/schedule.dart). iOffice được tải trước; lỗi hai nguồn HRM bị bắt và bỏ qua, không được truyền riêng lên UI. |
| API và sự kiện điểm danh | [Thao tác điểm danh](/home/xchinh/workspace/myhcmut-mobile/modules/ioffice/lib/src/schedule/providers/attendance_actions_provider.dart), [listener chi tiết](/home/xchinh/workspace/myhcmut-mobile/modules/ioffice/lib/src/schedule/providers/schedule_detail_provider.dart), [tab điểm danh](/home/xchinh/workspace/myhcmut-mobile/modules/ioffice/lib/src/schedule/pages/tabs/attendance_tab.dart). |
| Đăng ký thiết bị và route thông báo | [FCM service](/home/xchinh/workspace/myhcmut-mobile/modules/notification/lib/src/notification/utils/fcm_service.dart), [route parser](/home/xchinh/workspace/myhcmut-mobile/modules/notification/lib/src/notification/utils/notification_route_parser.dart). |

GitNexus đã được dùng để tìm các thành phần hồ sơ và Socket.IO trong index HRM/mobile; kết luận chi tiết được kiểm tra lại ở source. Index báo cáo cũ không được dùng để suy ra nội dung bản `docs/datn.md` mới.

## 5. Phạm vi duyệt và cập nhật

Bản đã áp dụng giữ 5 mục chính, các số mục địa chỉ/gia đình và mọi nhóm dữ liệu hiện tại; có 22 hình và 8 bảng sau khi thêm hai ERD, bỏ hai bảng từ điển địa chỉ/gia đình. Mục 5.2 chỉ còn hai tiểu mục theo cách tổ chức cũ. Những đoạn giới thiệu công nghệ chung được rút để Chương 5 tập trung vào thiết kế cụ thể. Mục 5.4.3 được giữ nguyên vị trí. Không thêm screenshot hay kết quả kiểm thử vào chương.

Diff đã áp dụng sửa phần dẫn chương, năm mục nội dung và ba từ điển hồ sơ/quy trình/nghỉ phép. Các tệp từ điển địa chỉ/gia đình được giữ nguyên nhưng không còn được đưa vào Chương 5. Hai ảnh ERD và vị trí các hình, bảng hiện hữu được giữ; hai ERD nằm tại 5.3.3.1 và 5.3.3.2. `Chapter4/section2/ioffice_schedule/index.tex` được cập nhật một tham chiếu để trỏ tới mục 5.2.2 sau khi mục 5.2.4 cũ bị bỏ. `main.pdf` đã được biên dịch lại; `docs/datn.md` (bản trích xuất dùng đối chiếu) không được sửa. Chưa commit.

Đây là rà soát nội dung và đối chiếu tĩnh với mã nguồn/model cùng các schema đã lưu. Lượt này không chạy lại nghiệp vụ hoặc truy vấn ràng buộc trên CSDL triển khai, không thay đổi các kết quả kiểm thử của Chương 6. Bản PDF riêng phục vụ duyệt nội dung và bố cục; số trang/tham chiếu của toàn báo cáo phải được kiểm tra lại khi áp dụng nội dung đã duyệt.

## 6. Kiểm tra bản đã áp dụng

- Bản PDF rà soát riêng có **41 trang, 22 hình và 8 bảng**; đã render để kiểm tra bố cục rồi xóa sau khi áp dụng. Báo cáo hoàn chỉnh `main.pdf` tại thời điểm đó có **155 trang**.
- Trong báo cáo hoàn chỉnh, hai ERD nằm đúng thứ tự tại 5.3.3.1–5.3.3.2 trên trang in 85 (trang PDF 98); Bảng 5.1 ở cuối mục 5.2.2. Mục 5.4.3 trải từ trang in 108–109 (trang PDF 121–122).
- Mục 5.2 có đúng hai mục được đánh số. Hai mục 5.3.3.1 và 5.3.3.2 giữ câu dẫn và hình ERD, không có bảng từ điển hoặc diễn giải từng trường.
- Lần biên dịch cuối không có tham chiếu chưa xác định, nhãn trùng hoặc hình vượt trang. Còn cảnh báo tràn dòng tại Chương 2 và Chương 4, không phát sinh từ Chương 5. Các liên kết Markdown đều tới tệp tồn tại.
- Diff lưu trong thư mục rà soát đã được áp dụng; build toàn báo cáo thành công và tham chiếu ở Chương 4 đã trỏ đến mục mới.
- Hai ảnh ERD, `main.tex` và `docs/datn.md` giữ nguyên. Các tệp nguồn Chương 5 và `main.pdf` được cập nhật theo yêu cầu; những thay đổi có trước lượt này vẫn được giữ nguyên.
