# ĐẶC TẢ KIỂM KÊ BẰNG CHỨNG CHO CHƯƠNG 6 VÀ CHƯƠNG 7

> **Đề tài:** Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học (MyHCMUT Mobile)
>
> **Loại tài liệu:** Đặc tả quy trình kiểm kê trước khi viết lại Chương 6–7
>
> **Trạng thái:** Chờ người dùng rà soát
>
> **Ngày:** 22/09/2026

## 1. Mục tiêu

Tạo căn cứ có thể kiểm tra để viết lại Chương 6–7 theo chuỗi:

**Mục tiêu → UC/FR → thiết kế → hiện thực → kiểm thử → kết luận.**

Đợt kiểm kê phải phân biệt độc lập:

1. Yêu cầu có thuộc phạm vi nghiệm thu hay không.
2. Chức năng đã được hiện thực đến đâu.
3. Hành vi nào đã có bằng chứng kiểm thử phù hợp.
4. Bằng chứng hiện có cho phép đưa ra kết luận ở mức nào.

Đây là quy trình bảo đảm tính chính xác của báo cáo, không phải yêu cầu đưa mã nguồn vào Chương 6.

## 2. Phạm vi của bước kiểm kê

### 2.1. Thực hiện

- Xác định các mục tiêu, UC và FR thuộc phạm vi từ Chương 1 và Chương 4 đã chốt.
- Ghi nhận phiên bản mã nguồn dùng để báo cáo cho từng repository liên quan.
- Đối chiếu Chương 5, mã nguồn, API, cấu hình và ứng dụng chạy thực tế để xác định trạng thái hiện thực.
- Kiểm kê test, log, ảnh chụp và tài liệu kiểm toán hiện có.
- Phân biệt kết quả áp dụng trực tiếp cho phiên bản báo cáo với kết quả baseline lịch sử.
- Xác định khoảng trống kiểm thử theo từng hành vi đã cam kết.
- Đề xuất danh sách kiểm thử cần bổ sung theo mức rủi ro.
- Lập kế hoạch thực hiện chi tiết cho các kiểm thử đã được chọn và dừng để người dùng phê duyệt trước khi chạy.

### 2.2. Không thực hiện

- Không sửa các tệp LaTeX của Chương 6–7.
- Không viết hoặc sửa test.
- Không chạy test mới trước khi người dùng phê duyệt kế hoạch thực hiện.
- Không chạy kiểm thử chỉ để tăng tổng số test.
- Không tạo thêm UC, FR hoặc quy tắc nghiệp vụ ngoài Chương 1 và Chương 4 đã chốt.
- Không đưa đường dẫn mã nguồn hoặc đoạn mã vào báo cáo chính chỉ để chứng minh chức năng tồn tại.
- Không cộng kết quả từ nhiều phiên bản hoặc nhiều lần chạy thành một kết quả kiểm thử thống nhất.

## 3. Nguồn và thứ tự đối chiếu

| Thứ tự | Nguồn | Vai trò |
| --- | --- | --- |
| 1 | Chương 1 và Chương 4 đã chốt | Xác định mục tiêu, phạm vi, UC/FR và hành vi đã cam kết |
| 2 | Commit/tag của phiên bản được báo cáo | Xác định hiện trạng sản phẩm cần đánh giá |
| 3 | Chương 5 | Xác định thiết kế liên quan để kiểm tra tính nhất quán |
| 4 | Mã nguồn, API, cấu hình và ứng dụng chạy thực tế | Xác minh cách hiện thực và giới hạn thực tế |
| 5 | Test, log, ảnh chụp và biên bản kịch bản | Xác minh hành vi trong phạm vi đã kiểm tra |
| 6 | Tài liệu kiểm toán và baseline lịch sử | Bổ sung bối cảnh; không thay thế bằng chứng hiện tại |

Khi các nguồn xung đột, tài liệu kiểm kê phải ghi rõ xung đột và không tự chọn kết luận thuận lợi hơn. Phạm vi cam kết được xác định từ Chương 1 và Chương 4; trạng thái hiện thực và kiểm thử được xác định từ phiên bản mã nguồn cùng bằng chứng tương ứng.

## 4. Thiết kế hai tầng bằng chứng

### 4.1. Tầng kiểm kê nội bộ

Được phép sử dụng chi tiết kỹ thuật để xác minh:

- Repository, commit/tag, file, màn hình, service và API liên quan.
- Cấu hình môi trường và cơ chế native/WebView.
- Lệnh kiểm thử, kịch bản thủ công, log và ảnh trước–sau.
- Giới hạn, sai khác và điều kiện phụ thuộc.

### 4.2. Tầng trình bày trong báo cáo

Chương 6 ưu tiên:

- Ảnh giao diện tiêu biểu.
- Mô tả ngắn luồng nghiệp vụ.
- Bảng kịch bản và kết quả kiểm thử.
- Phạm vi đã kiểm tra và giới hạn còn tồn tại.

Không chuyển mặc định đường dẫn mã nguồn, endpoint hoặc đoạn code từ tài liệu kiểm kê sang báo cáo. Chỉ đưa mã ngắn khi nó cần thiết để giải thích một quyết định kỹ thuật quan trọng mà sơ đồ và mô tả không thể trình bày rõ hơn.

## 5. Khái niệm và quy tắc phân loại

### 5.1. Trạng thái phạm vi

- **Trong phạm vi:** được cam kết trong Chương 1 hoặc Chương 4.
- **Ngoài phạm vi:** không thuộc mục tiêu nghiệm thu; nếu có mã nguồn thì chỉ ghi nhận là phần bổ sung.
- **Chờ làm rõ:** nguồn phạm vi mâu thuẫn hoặc chưa đủ rõ để phân loại.

### 5.2. Trạng thái hiện thực

- **Hoàn thành trong phạm vi cam kết:** toàn bộ hành vi đã cam kết của yêu cầu đã được hiện thực, kể cả khi một phần quy trình sử dụng WebView theo đúng thiết kế.
- **Một phần:** thiếu một hoặc nhiều hành vi đã cam kết, luồng tích hợp chưa khép kín, hoặc sản phẩm thực tế chỉ chuyển sang WebView trong khi yêu cầu cam kết xử lý trực tiếp trên mobile.
- **Chưa hiện thực:** chưa có luồng sử dụng được tương ứng với yêu cầu.
- **Chờ xác minh:** chưa đủ bằng chứng nội bộ để phân loại.

Ảnh giao diện chỉ chứng minh màn hình tồn tại. Nó không tự chứng minh API, phân quyền, chuyển trạng thái hoặc quy trình đầu–cuối hoạt động đúng.

### 5.3. Đơn vị đánh giá bằng chứng

Trạng thái bằng chứng được đánh giá theo **hành vi đã cam kết**, không theo tổng số test và không mặc định theo toàn bộ UC/FR.

Mỗi UC/FR được phân rã thành các hành vi quan sát được, ví dụ:

- Người có quyền phê duyệt được một đơn hợp lệ.
- Người không có quyền bị từ chối.
- Trạng thái đơn được cập nhật đúng.
- Đơn không còn hợp lệ được xử lý theo quy tắc đã đặc tả.

Việc phân rã chỉ làm rõ yêu cầu hiện có; không được bổ sung hành vi mới ngoài nguồn phạm vi. Mã hành vi nội bộ có dạng `<UC-hoặc-FR>-B01`, `<UC-hoặc-FR>-B02` và không trở thành mã yêu cầu mới trong báo cáo.

### 5.4. Trạng thái bằng chứng

- **Đủ bằng chứng:** các hành vi trọng tâm và rủi ro quan trọng của yêu cầu đã có bằng chứng kiểm thử phù hợp trên phiên bản báo cáo. Không có nghĩa là đã kiểm thử mọi trường hợp có thể xảy ra.
- **Bằng chứng hạn chế:** chỉ có một phần hành vi, chỉ có happy path, chỉ dùng mock, thiếu metadata, hoặc chỉ có kết quả baseline lịch sử.
- **Chưa kiểm thử:** chưa có bằng chứng kiểm thử cho hành vi.

### 5.5. Quyết định bổ sung kiểm thử

Quyết định này nằm ở cột riêng, không thay thế trạng thái bằng chứng:

- **Cần bổ sung:** khoảng trống ảnh hưởng đến luồng trọng tâm, phân quyền, tính đúng đắn dữ liệu, tích hợp hoặc kết luận dự kiến của báo cáo.
- **Không cần bổ sung trong đợt này:** khoảng trống được chấp nhận vì rủi ro thấp hoặc không cần để bảo vệ kết luận dự kiến; giới hạn vẫn phải được ghi nhận.
- **Chờ xác minh:** chưa đủ thông tin về phạm vi, phiên bản hoặc bằng chứng để quyết định.

Một hành vi có thể được ghi đúng là **“Chưa kiểm thử – Không cần bổ sung trong đợt này”**.

### 5.6. Phân loại rủi ro

- **Cao:** luồng nghiệp vụ chính; xác thực/phân quyền; chuyển trạng thái; ghi dữ liệu; tính toàn vẹn; hoặc tích hợp nhiều hệ thống mà lỗi có thể làm sai nghiệp vụ.
- **Trung bình:** tra cứu hoặc điều hướng có ảnh hưởng trực tiếp đến tác vụ nhưng không tự thay đổi dữ liệu quan trọng.
- **Thấp:** hiển thị tĩnh, định dạng hoặc chức năng phụ mà lỗi không làm sai trạng thái nghiệp vụ.

Không dùng điểm số phức tạp. Với mỗi mức rủi ro phải ghi một câu lý do dựa trên UC/FR và hậu quả nếu hành vi sai.

## 6. Bốn tài liệu làm việc phải tạo

### 6.1. Ma trận truy vết UC/FR – hiện thực

**Tệp dự kiến:** `docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md`

| Cột | Nội dung bắt buộc |
| --- | --- |
| Mục tiêu | Mục tiêu tương ứng trong Chương 1 |
| UC/FR | Mã và tên yêu cầu trong Chương 4 |
| Nguồn phạm vi | Tệp/mục xác định yêu cầu |
| Tiêu chí chấp nhận | Các hành vi đã cam kết, không thêm yêu cầu mới |
| Phạm vi | Trong / Ngoài / Chờ làm rõ |
| Thiết kế liên quan | Mục tương ứng trong Chương 5 |
| Hiện thực thực tế | Mô tả ngắn luồng đang tồn tại |
| Hình thức | Native / WebView / Kết hợp / Không áp dụng |
| Trạng thái hiện thực | Hoàn thành / Một phần / Chưa / Chờ xác minh |
| Bằng chứng nội bộ | Repository, commit, file/API/cấu hình/hành vi chạy thực tế |
| Giới hạn hoặc sai khác | Phần thiếu, điều kiện phụ thuộc hoặc lệch so với yêu cầu |
| Kết luận được phép | Mức khẳng định có thể dùng trong Chương 6–7 |

Mã nguồn chỉ là bằng chứng nội bộ; cột này không được sao chép nguyên trạng vào Chương 6.

### 6.2. Ma trận khoảng trống kiểm thử

**Tệp dự kiến:** `docs/chapter6-7-evidence/02_test_evidence_gap_matrix.md`

Mỗi hàng tương ứng với một hành vi đã cam kết, không phải một phân hệ chung chung.

| Cột | Nội dung bắt buộc |
| --- | --- |
| UC/FR | Yêu cầu gốc |
| Mã hành vi | Mã nội bộ `<UC-hoặc-FR>-Bxx` |
| Hành vi cần xác minh | Kết quả quan sát được theo yêu cầu |
| Bằng chứng hiện có | Test/log/kịch bản/ảnh hoặc “không có” |
| Loại kiểm thử | Unit / Widget / API / Integration / Thủ công đầu–cuối |
| Repository và commit | Phiên bản được kiểm tra |
| Môi trường và thời điểm | Runtime, staging/test và ngày chạy nếu có |
| Lệnh hoặc kịch bản | Cách tạo lại kết quả |
| Kết quả | Pass / Fail / Blocked / Not Run / Invalid và phạm vi kết quả |
| Tính áp dụng | Trực tiếp cho phiên bản báo cáo / Baseline lịch sử |
| Trạng thái bằng chứng | Đủ / Hạn chế / Chưa kiểm thử |
| Rủi ro | Cao / Trung bình / Thấp, kèm lý do |
| Quyết định bổ sung | Cần / Không cần trong đợt này / Chờ xác minh |
| Giới hạn kết luận | Điều không được suy ra từ bằng chứng hiện có |

Một UC/FR chỉ được tổng hợp là “đủ bằng chứng” khi toàn bộ hành vi trọng tâm và rủi ro quan trọng thuộc phạm vi của nó đạt mức đủ. Không dùng số lượng test để thay thế đánh giá này.

### 6.3. Danh sách kiểm thử đề xuất

**Tệp dự kiến:** `docs/chapter6-7-evidence/03_proposed_test_backlog.md`

Chỉ đưa vào các hàng có quyết định **Cần bổ sung** sau khi kiểm kê.

| Cột | Nội dung bắt buộc |
| --- | --- |
| Ưu tiên | P0 / P1 / P2 |
| UC/FR và hành vi | Yêu cầu và hành vi cần xác minh |
| Lý do chọn | Khoảng trống và rủi ro được xử lý |
| Kịch bản | Tiền điều kiện và các bước chính |
| Hình thức | Unit/API/Integration/Thủ công đầu–cuối/E2E tự động |
| Dữ liệu và vai trò | Tài khoản, quyền và dữ liệu cần chuẩn bị |
| Môi trường | Phiên bản ứng dụng/backend và dịch vụ phụ thuộc |
| Kết quả mong đợi | Kết quả quan sát được, đủ để xác định pass/fail |
| Bằng chứng phải lưu | Log, ảnh trước–sau, báo cáo test hoặc phản hồi API |
| Điều kiện dừng | Mốc tối thiểu để có thể chốt kết luận liên quan |

Ưu tiên:

- **P0:** luồng nghiệp vụ chính, phân quyền, chuyển trạng thái hoặc toàn vẹn dữ liệu chưa có bằng chứng phù hợp.
- **P1:** tích hợp quan trọng hoặc trường hợp lỗi có khả năng ảnh hưởng trực tiếp đến kết luận.
- **P2:** hành vi rủi ro thấp; chỉ làm khi còn thời gian.

### 6.4. Kế hoạch thực hiện kiểm thử

**Tệp dự kiến:** `docs/chapter6-7-evidence/04_test_execution_plan.md`

Tệp `03` trả lời **cần bổ sung khoảng trống nào**; tệp `04` trả lời **sẽ kiểm thử chính xác như thế nào**. Không điền kịch bản bằng suy đoán trước khi hoàn thành ba tài liệu kiểm kê đầu tiên. Sau khi lập xong tệp `04`, phải dừng để người dùng rà soát và phê duyệt.

Tệp gồm mười mục:

1. **Mục tiêu và phạm vi:** đợt kiểm thử xác minh UC/FR và hành vi nào.
2. **Căn cứ lựa chọn:** liên kết từng kịch bản với hàng tương ứng trong ma trận khoảng trống và backlog.
3. **Phiên bản và môi trường:** commit ứng dụng/backend, môi trường staging/test, thiết bị và dịch vụ phụ thuộc.
4. **Dữ liệu và tài khoản thử nghiệm:** vai trò, dữ liệu ban đầu, cách chuẩn bị, cô lập và khôi phục.
5. **Danh sách kịch bản:** mã test, UC/FR, hành vi, ưu tiên và hình thức kiểm thử.
6. **Đặc tả từng kịch bản:** tiền điều kiện, dữ liệu đầu vào, bước thực hiện, kết quả mong đợi và cách xác minh.
7. **Quy tắc ghi nhận kết quả:** Pass/Fail/Blocked/Not Run/Invalid và cách xử lý.
8. **Quy tắc lưu bằng chứng:** log, ảnh, báo cáo, phiên bản, thời điểm và vị trí lưu.
9. **Điều kiện hoàn thành:** bộ kịch bản tối thiểu và giới hạn kết luận nếu còn Fail/Blocked/Not Run/Invalid.
10. **Phê duyệt trước thực hiện:** các điểm người dùng phải xác nhận; không chạy test trước khi được duyệt.

Mỗi đặc tả kịch bản phải đủ để một người khác thực hiện lại và xác định kết quả mà không phải tự suy đoán quy trình.

## 7. Metadata tối thiểu của một bằng chứng kiểm thử

Một bằng chứng chỉ được xem là áp dụng trực tiếp cho phiên bản báo cáo khi có đủ:

1. Repository và commit/tag.
2. Môi trường và thời điểm kiểm tra.
3. Lệnh hoặc kịch bản thực hiện.
4. Dữ liệu đầu vào, tài khoản và vai trò nếu có liên quan.
5. Kết quả mong đợi và kết quả thực tế.
6. Vị trí lưu log, ảnh hoặc báo cáo.

Thiếu một hoặc nhiều trường không làm bằng chứng biến mất, nhưng phải hạ xuống “Bằng chứng hạn chế” nếu không thể xác định phạm vi áp dụng.

### 7.1. Trạng thái kết quả kiểm thử

| Trạng thái | Ý nghĩa |
| --- | --- |
| **Pass** | Kết quả thực tế đáp ứng kết quả mong đợi |
| **Fail** | Đã thực hiện nhưng kết quả không đáp ứng yêu cầu |
| **Blocked** | Không thể thực hiện hoặc hoàn tất vì điều kiện tiên quyết chưa đáp ứng |
| **Not Run** | Chưa thực hiện |
| **Invalid** | Lần chạy hoặc bằng chứng không hợp lệ và phải thực hiện lại |

Mỗi kết quả Blocked hoặc Invalid phải ghi nguyên nhân. Không tự động chuyển Blocked hoặc Invalid thành Pass hay Fail. Lỗi môi trường, dữ liệu hoặc quyền tài khoản thử nghiệm phải được phân biệt với lỗi sản phẩm.

### 7.2. Quản lý dữ liệu kiểm thử

Mỗi kịch bản làm thay đổi dữ liệu phải ghi rõ:

1. Tài khoản và vai trò thử nghiệm được phép sử dụng.
2. Trạng thái dữ liệu ban đầu.
3. Dữ liệu tạo mới hoặc thay đổi dự kiến.
4. Trạng thái dữ liệu mong đợi sau khi chạy.
5. Cách khôi phục, xóa hoặc tái tạo dữ liệu cho lần chạy tiếp theo.
6. Cách nhận biết dữ liệu của từng lần chạy để tránh dùng nhầm kết quả cũ.

Không sử dụng dữ liệu nhân sự thật nếu chưa được phép. Không ghi mật khẩu, token, cookie phiên, dữ liệu định danh hoặc bí mật môi trường vào tài liệu, log hay ảnh minh chứng.

## 8. Quy tắc lựa chọn hình thức kiểm thử

- Dùng **unit test** cho validation, mapping, chuyển đổi trạng thái và quy tắc có thể tách riêng.
- Dùng **API/integration test** cho phân quyền phía server, chuyển trạng thái và tính toàn vẹn dữ liệu.
- Dùng **kiểm thử thủ công đầu–cuối trên staging** cho luồng nhiều vai trò hoặc nhiều hệ thống khi tự động hóa không hợp lý.
- Chỉ dùng **E2E tự động** cho một số luồng ổn định, quan trọng và có khả năng tái chạy; không xây framework mới chỉ để có nhãn E2E.
- Không bắt buộc mỗi phân hệ có unit test.
- Với luồng trọng tâm, không chỉ kiểm tra happy path nếu phân quyền, trạng thái đã thay đổi hoặc lỗi tích hợp là rủi ro thực tế đã nằm trong yêu cầu.

Kiểm thử thủ công phải được gọi đúng là “kiểm thử thủ công luồng nghiệp vụ đầu–cuối”, không gọi là bộ E2E tự động.

## 9. Phạm vi kiểm thử tối thiểu

Không đặt một số lượng kịch bản chung cho mọi nghiệp vụ. Tệp `04` phải định nghĩa riêng một **bộ kịch bản tối thiểu** cho từng nghiệp vụ trọng tâm dựa trên hành vi đã cam kết và mức rủi ro.

Bộ tối thiểu phải bao gồm:

- Luồng thành công chính nếu yêu cầu cam kết người dùng hoàn tất nghiệp vụ.
- Các hành vi phân quyền thuộc phạm vi và có rủi ro cao.
- Các chuyển trạng thái hoặc thao tác ghi dữ liệu trọng tâm.
- Các ranh giới tích hợp cần thiết để bảo vệ kết luận dự kiến.
- Trường hợp lỗi quan trọng chỉ khi nó đã nằm trong UC/FR hoặc trực tiếp đe dọa tính đúng đắn của hành vi đã cam kết.

Không bổ sung kịch bản chỉ vì tình huống đó có thể tưởng tượng được. Mỗi kịch bản phải truy vết về UC/FR và một hàng trong ma trận khoảng trống.

Một nghiệp vụ trọng tâm chỉ được kết luận “hoạt động đúng trong phạm vi đã kiểm tra” khi bộ tối thiểu đã được thực hiện và các hành vi dùng để hỗ trợ kết luận đạt Pass. Nếu một kịch bản tối thiểu Fail, Blocked, Not Run hoặc Invalid, vẫn có thể viết báo cáo nhưng phải nêu trạng thái và hạ mức kết luận tương ứng; không được gọi nghiệp vụ đó là đã được kiểm chứng đầy đủ.

## 10. Các giai đoạn và cổng phê duyệt

### Giai đoạn A — Kiểm kê

- Tạo và hoàn thiện các tệp `01`, `02`, `03`.
- Chưa sửa LaTeX, chưa viết test và chưa chạy test mới.

### Giai đoạn B — Lập kế hoạch kiểm thử

- Tạo tệp `04` từ các khoảng trống có quyết định “Cần bổ sung”.
- Xác định bộ kịch bản tối thiểu, môi trường, dữ liệu, bước thực hiện và tiêu chí kết quả.
- **Cổng phê duyệt 1:** người dùng rà soát và chốt danh sách kịch bản trước khi thực hiện.

### Giai đoạn C — Thực hiện kiểm thử

- Chỉ viết hoặc chạy test sau Cổng phê duyệt 1.
- Lưu kết quả nguyên trạng, kể cả Fail, Blocked, Not Run và Invalid.
- Không tự sửa yêu cầu, bỏ kịch bản hoặc hạ ưu tiên để đạt trạng thái hoàn thành.
- **Cổng phê duyệt 2:** người dùng rà soát bảng kết quả và các giới hạn trước khi sử dụng số liệu.

### Giai đoạn D — Viết báo cáo

- Cập nhật ma trận bằng chứng từ kết quả đã được rà soát.
- Hoàn thiện Chương 6 và suy ra kết luận Chương 7.
- **Cổng phê duyệt 3:** người dùng duyệt kết luận và số liệu trước khi chốt báo cáo.

AI agent có thể kiểm kê, đề xuất, chạy theo kế hoạch đã duyệt và tổng hợp kết quả; không được tự thay đổi yêu cầu hoặc tự phê duyệt kết quả.

## 11. Quan hệ với việc viết Chương 6–7

Sau khi hoàn thành hai ma trận đầu tiên:

- Có thể bắt đầu viết Chương 6.1 từ trạng thái hiện thực đã kiểm kê.
- Có thể dựng khung Chương 6.2 và Chương 7.
- Chưa chốt kết quả kiểm thử hoặc mức độ đạt mục tiêu đối với các hành vi P0/P1 còn quyết định “Cần bổ sung”.

Sau khi kế hoạch kiểm thử được phê duyệt và thực hiện:

- Cập nhật ma trận bằng chứng bằng kết quả mới.
- Chốt Chương 6.2 theo đúng phạm vi đã kiểm tra.
- Chốt Chương 7 theo loại bằng chứng: hiện thực, tính đúng đắn trong kịch bản đã kiểm tra hoặc hiệu quả sử dụng.

Nếu không kịp bổ sung một kiểm thử, giữ nguyên trạng thái thiếu bằng chứng và hạ mức kết luận; không đổi “chưa kiểm thử” thành “chưa hiện thực”.

## 12. Điều kiện hoàn thành bước kiểm kê

Bước kiểm kê hoàn thành khi:

- Mỗi UC/FR trong phạm vi có trạng thái hiện thực rõ ràng.
- Mỗi hành vi trọng tâm có trạng thái bằng chứng và quyết định bổ sung kiểm thử ở hai cột riêng.
- Mỗi quyết định kiểm thử có lý do dựa trên rủi ro và quan hệ với UC/FR.
- Các kết quả baseline lịch sử được phân biệt với kết quả áp dụng trực tiếp cho phiên bản báo cáo.
- Các số lượng test có đơn vị đếm, phạm vi, phiên bản và nguồn bằng chứng rõ ràng.
- Không có chức năng được đánh dấu “hoàn thành” chỉ vì có ảnh giao diện.
- Không có hành vi được đánh dấu “đủ bằng chứng” chỉ vì UC/FR có ít nhất một test thành công.
- Không còn kết luận Chương 6–7 dự kiến vượt quá loại bằng chứng hiện có.

Hoàn thành kiểm kê không đồng nghĩa được phép chạy test. Việc thực hiện kiểm thử chỉ bắt đầu sau khi tệp `04` đã được điền từ kết quả kiểm kê và được người dùng phê duyệt.

## 13. Kiểm tra chất lượng trước khi bàn giao

- Đối chiếu đủ Chương 1, Chương 4 và các phần thiết kế liên quan của Chương 5.
- Kiểm tra mọi mã UC/FR trong ma trận tồn tại trong nguồn yêu cầu.
- Kiểm tra các hành vi phân rã không tạo thêm yêu cầu mới.
- Kiểm tra trạng thái hiện thực và trạng thái bằng chứng không bị gộp.
- Kiểm tra trạng thái bằng chứng và quyết định bổ sung kiểm thử không bị gộp.
- Kiểm tra mọi kết quả lịch sử có nhãn rõ ràng.
- Kiểm tra danh sách kiểm thử đề xuất chỉ chứa các khoảng trống đã được đánh dấu “Cần bổ sung”.
- Kiểm tra tệp `04` chỉ chứa kịch bản truy vết được về tệp `02` và `03`.
- Kiểm tra mỗi nghiệp vụ trọng tâm có bộ kịch bản tối thiểu và quy tắc hạ mức kết luận.
- Kiểm tra mỗi kịch bản thay đổi dữ liệu có phương án chuẩn bị và khôi phục.
- Kiểm tra không có test mới được viết hoặc chạy trước Cổng phê duyệt 1.
- Kiểm tra không có dữ liệu nhạy cảm, token, thông tin định danh hoặc bí mật môi trường bị sao chép vào tài liệu.
