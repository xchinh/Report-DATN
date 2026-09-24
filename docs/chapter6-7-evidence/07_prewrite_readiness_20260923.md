# Kiểm tra sẵn sàng trước khi viết Chương 6–7 — 23/09/2026

Tài liệu làm việc, không phải kết quả kiểm thử mới. Đợt rà soát bằng chứng gốc **không chạy test ghi dữ liệu** và không sửa mã nghiệp vụ; sau đó người dùng duyệt hai hiệu chỉnh phạm vi ở Chương 1/4 trên nhánh báo cáo. Các biên bản lịch sử được giữ nguyên theo lần chạy; hiệu chỉnh yêu cầu không làm thay đổi kết quả chạy cũ.

## 1. Nguồn thẩm quyền và phiên bản

- Phạm vi báo cáo: `main:14fe1f6` **cộng hai hiệu chỉnh được người dùng duyệt trên nhánh viết báo cáo**: Chương 1 chỉ cam kết mobile xem tiến độ/báo cáo nhiệm vụ, không nộp báo cáo; `UC-OFF-04` phân biệt tiếp nhận với hoàn thành riêng của văn bản giao nhiệm vụ. Xác định **tệp được nạp** từ `Chapter4/section2/index.tex`, không căn cứ vào việc tệp chỉ tồn tại trong repository: hồ sơ `profile/index.tex`, nghỉ phép `leave/index.tex`, công tác `hrm/business_trip.tex`, iOffice/lịch `ioffice_schedule/index.tex`. `business_trip/index.tex` và `ioffice/incomming_docs.tex` không được nạp. Vì vậy mã công tác hiện hành là `FR-BTR-01..05`, `UC-BT-01..05`; `UC-OFF-01` là phân công trách nhiệm.
- Nguồn hiện thực kiểm tra: mobile `7f90ac7`, HRM BE `9e39ccc`, iOffice BE `4bfdb23`, HRM FE `3ff464c9`, Auth BE `7e687a6`. APK thử trên Android được biên dịch từ mobile `a6a1dc6`, không được gọi là APK build trực tiếp từ `7f90ac7`. Xem `06_locked_source_baseline_20260923.md` và manifest đợt rerun.
- Tài liệu `01` Mục 4/`02` Mục 3/`03` Mục 3–5 và `05` là lớp lịch sử; khi viết Chương 6 chỉ lấy phần hiệu chỉnh hiện hành và kết quả có ranh giới bằng chứng. Không cộng các đợt test thành một lần chạy.

## 2. Bức tranh kiểm thử có thể sử dụng

Đợt `DATN-RERUN-20260923` có 22 kịch bản: **2 Pass toàn diện theo artifact, 8 đạt một phần hoặc bằng chứng hạn chế, 9 Fail theo biên bản/đối chiếu, 3 Not Run P2**. Đây là phân loại *kịch bản theo tiêu chí lúc chạy*, không phải tỷ lệ bao phủ UC/FR hiện hành; các ca Fail cũng có thể chứa nhánh đạt. Đặc biệt, `OFF-04` Fail ở tiêu chí tự hoàn thành khi 100% tiếp nhận thuộc `UC-OFF-04` cũ, không được dùng để kết luận UC đã chỉnh sửa Fail hoặc Pass. `AUTH-02` được chuyển về bằng chứng hạn chế vì chỉ lưu `result.md`, không có raw response/status. `OFF-02` có ảnh mở PDF trên Android, `TEST-01` có stdout và exit code cho **370 Flutter unit/widget + 57 HRM BE unit tests**. Không gọi 427 ca này là E2E hoặc 100% toàn hệ thống.

Chín thư mục kịch bản `AUTH-01`, `AUTH-02`, `PRO-02`, `LEV-04`, `LEV-05`, `BTR-03`, `OFF-01`, `OFF-04`, `SCH-01` hiện chỉ lưu `result.md`, không có raw log/ảnh trong chính thư mục. Một số kết quả được đối chiếu bổ sung bằng mã nguồn hoặc thử lại đọc-only ở `DATN-TARGETED-RECHECK-20260923`; nguồn bổ sung không biến toàn bộ các nhánh cũ thành kết quả thực nghiệm có thể tái lập. Khi trích từng phát hiện, ghi rõ “theo biên bản”, “đối chiếu mã” hoặc “thử lại trực tiếp” tùy nguồn.

## 3. Ranh giới kết luận theo nhóm

| Nhóm | Có thể trình bày ở 6.1 | Chỉ kết luận ở 6.2/7 trong phạm vi |
| --- | --- | --- |
| Xác thực/hồ sơ | Có luồng đăng nhập, chuyển vé SSO vào HRM WebView và màn hồ sơ | Vé SSO và chống dùng lại có bằng chứng; cập nhật trực tiếp/đề xuất hồ sơ và xử lý từng trường chưa đủ đối chiếu trước–sau. HRM trả HTTP 200/body `status:401` với token sai, chưa chứng minh mobile xử lý phiên hết hạn đúng |
| Nghỉ phép | Wizard 3 bước, lưu/sửa/xóa Nháp, gửi và theo dõi; đơn gửi không mặc định được người lập sửa/thu hồi | Nhánh gửi trực tiếp có ảnh và ID; lưu nháp dở dang–mở lại, gửi lại Bị trả lại, probe sửa đơn đã gửi còn thiếu. LEV-04 và LEV-05 là phát hiện cần giữ giới hạn chứng cứ; riêng số dư `-1` chưa có request song song/snapshot để quy nguyên nhân |
| Công tác | Wizard 5 bước, nháp, theo dõi và luồng quyền duyệt/thu hồi quản trị có mã hiện thực | Chưa có E2E nộp hợp lệ đủ 5 bước hay chu trình gửi lại hồ sơ Bị trả lại trên Android; BTR-03 có biên bản lỗi lý do toàn khoảng trắng nhưng thiếu raw artifact |
| Văn bản/nhiệm vụ | Mở chi tiết và PDF qua ứng dụng hệ điều hành; mobile xem tiến độ/báo cáo nhiệm vụ đã có, không nộp báo cáo; có UI/API phân công, tham mưu, chỉ đạo, tiếp nhận | OFF-03 danh sách/nhiệm vụ chưa chạy. `OFF-04` có biên bản tiếp nhận cá nhân, nhưng chưa kiểm chứng hai nhánh hoàn thành của UC-OFF-04 mới; nhãn Fail cũ không còn là tiêu chí nghiệm thu. UC-OFF-01 còn thiếu xác minh tạo PGQ từ mobile, thông báo người nhận và từ chối **recipient** không hợp lệ; UC-OFF-03 thiếu nhánh tạo nhiệm vụ liên kết |
| Lịch/điểm danh/lỗi mạng | Lịch tổng hợp và điểm danh có đường xử lý; Android đã chụp trạng thái lỗi và mở lại lịch sau khi mạng hồi phục | SCH-01 bị biên bản ghi cho người ngoài danh sách điểm danh; SCH-02/NET-01 tái hiện chuỗi lỗi thô. Mở lại lịch sau phục hồi không chứng minh retry ngay trên màn lỗi hoặc dữ liệu đủ ba nguồn |

`OFF-01` là **mã kịch bản thử quyền tải tệp**, không phải `UC-OFF-01` của Chương 4. Chính sách “chỉ người được phân công/cấp quyền trên văn bản mới tải tệp” là xác nhận nghiệp vụ bổ sung của người dùng; Chương 4 `main` chỉ nêu NFR-03 khái quát. Controller iOffice chỉ kiểm tra quyền đọc module; biên bản cũ báo HTTP 200 cho người ngoài phạm vi văn bản, nhưng thiếu raw request/response nên không trình bày như kết quả probe vừa tái lập.

## 4. Việc còn lại trước khi nâng mức kết luận

1. **Không chặn việc bắt đầu viết 6.1:** đối chiếu từng câu “đã hiện thực” với hàng hiện hành của `01` và mã nguồn; nêu ranh giới native/WebView. Ảnh hiện có cần che dữ liệu nhân sự, ticket và token trước khi đưa vào báo cáo/Git.
2. **Nếu muốn kết luận các UC iOffice đạt đầu–cuối:** chuẩn bị fixture văn bản giả, vai trò và đường khôi phục; bổ sung tiêu chí `UC-OFF-04` mới vào addendum `OFF-04` (tiếp nhận, hoàn thành khi tiếp nhận dòng thông tin/để biết, hoàn thành riêng dòng giao nhiệm vụ) cùng mobile→PGQ, thông báo recipient, recipient không hợp lệ, nhiệm vụ liên kết và snapshot tham mưu/chỉ đạo. Kế hoạch `04_test_execution_plan.md`/biên bản cũ không tự được sửa thành kết quả mới; cần người dùng duyệt addendum và fixture trước khi ghi dữ liệu staging.
3. **Nếu muốn nâng các phát hiện BE từ biên bản thành kết quả thực nghiệm tái lập:** lưu response đã khử định danh và snapshot trước–sau cho AUTH-02, OFF-01/OFF-04, SCH-01, LEV-05; không dùng chung fixture nghiệp vụ đang vận hành. LEV-05 cần riêng dữ liệu số dư, request song song và khả năng hoàn nguyên.
4. **Nếu muốn kết luận các luồng nghiệp vụ chính đã được xác minh toàn phần:** chạy những nhánh còn thiếu tương ứng (hồ sơ cập nhật/thẩm định; nghỉ phép lưu nháp dở dang và nộp lại; công tác nộp đủ wizard và nộp lại). Không chạy thêm chỉ để tăng tổng số test; nếu không có fixture, giữ trạng thái chưa xác minh.
5. **Đối với 6.2 và Chương 7:** dùng bảng 22 kịch bản rút gọn, ghi rõ Fail/Not Run/bằng chứng hạn chế, không đưa benchmark FPS/RAM/FCM latency khi không có phương pháp đo và log. Chương 7 chỉ kết luận năng lực hiện thực/kiểm thử trong phạm vi trên, không khẳng định hiệu quả sử dụng thực tế nếu chưa có dữ liệu so sánh.

Đợt rà soát này không biến bất kỳ ca Not Run/Blocked nào thành Pass và không thay đổi dữ liệu nghiệp vụ staging.
