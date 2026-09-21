# CHƯƠNG 1: GIỚI THIỆU TỔNG QUAN
# (08_CHAPTER_1_INTRODUCTION.md)

> **Đề tài:** Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học (MyHCMUT Mobile)  
> **Cơ quan chủ quản:** Trường Đại học Bách khoa – Đại học Quốc gia Thành phố Hồ Chí Minh  
> **Khoa:** Khoa Khoa học và Kỹ thuật Máy tính  
> **Sinh viên thực hiện:**  
> - **Vũ Xuân Chính** (MSSV: 2210392) — Thiết kế kiến trúc nền tảng MyHCMUT Mobile và các thành phần dùng chung (mạng, trạng thái, bộ điều hướng); thiết kế và hiện thực cơ chế cầu nối tích hợp xác thực Mobile–Web SSO qua One-Time Ticket; phân hệ Quản lý Hồ sơ cán bộ và Quản lý Nghỉ phép (giao diện Mobile và mở rộng backend); phân hệ Lịch công tác, Điểm danh họp và Trung tâm Thông báo nghiệp vụ.  
> - **Tống Duy Khang** (MSSV: 2211467) — Phân hệ Quản lý Đi công tác: thiết kế mô hình dữ liệu phía client, Form Wizard đăng ký 5 bước và các màn hình xử lý thẩm định/phê duyệt; phân hệ Quản lý Nhiệm vụ và Công việc (Tasks) thuộc phạm vi tích hợp iOffice; thiết kế giao diện và xử lý luồng phê duyệt đa cấp theo thẩm quyền cho các quy trình nghiệp vụ; phối hợp kiểm thử tích hợp luồng nghiệp vụ liên phân hệ và kiểm thử đầu-cuối.  
> **Giảng viên hướng dẫn:** ThS. Nguyễn Thanh Tùng  
> **Mốc hoàn thiện & Kiểm chuẩn:** Tháng 09/2026 (Khóa Baseline V3.1)  

---

## 1.1. Bối cảnh và vấn đề thực tế

Chuyển đổi số đang trở thành một định hướng quan trọng trong quá trình hiện đại hóa hoạt động quản lý tại các cơ quan, tổ chức và cơ sở giáo dục. Tại Việt Nam, Quyết định số 749/QĐ-TTg ngày 03/6/2020 của Thủ tướng Chính phủ phê duyệt “Chương trình Chuyển đổi số quốc gia đến năm 2025, định hướng đến năm 2030”, trong đó giáo dục là một trong những lĩnh vực cần ưu tiên.

Đối với ngành giáo dục, Quyết định số 131/QĐ-TTg ngày 25/01/2022 tiếp tục phê duyệt Đề án “Tăng cường ứng dụng công nghệ thông tin và chuyển đổi số trong giáo dục và đào tạo giai đoạn 2022–2025, định hướng đến năm 2030”. Đề án nhấn mạnh việc tăng cường ứng dụng công nghệ số trong hoạt động quản lý, quản trị cơ sở giáo dục và khai thác dữ liệu phục vụ hoạt động của ngành.

Trong bối cảnh đó, Trường Đại học Bách khoa – ĐHQG-HCM là cơ sở giáo dục đại học có quy mô hoạt động lớn. Theo thông tin được Nhà trường công bố năm 2026, Trường có 1.061 viên chức và người lao động, trong đó có 667 giảng viên; quy mô đào tạo khoảng 28.000 học viên và sinh viên. Hoạt động của một tổ chức có quy mô như vậy kéo theo nhiều nghiệp vụ liên quan đến hồ sơ nhân sự, nghỉ phép, công tác, văn bản, nhiệm vụ và lịch làm việc cần được xử lý thường xuyên.

Trong thực tế, việc phụ thuộc vào giao diện Web cho một số nghiệp vụ làm giảm tính linh hoạt, thuận tiện khi người dùng cần tra cứu, tiếp nhận thông báo hoặc xử lý công việc khi không sử dụng máy tính. Một số quy trình (nghỉ phép, công tác, văn bản, nhiệm vụ) có nhiều bước thẩm định, phê duyệt và biểu mẫu phức tạp. Việc tái hiện thực toàn bộ trên Mobile có thể làm tăng phạm vi phát triển và chi phí duy trì, do đó cần kết hợp giữa giao diện Mobile native và việc tái sử dụng có chọn lọc các WebApp hiện hữu, đồng thời giải quyết bài toán chuyển tiếp trạng thái xác thực giữa Mobile và Web.

Như vậy, vấn đề trọng tâm là làm thế nào để cung cấp một kênh truy cập di động thuận tiện cho các nghiệp vụ nhân sự và điều hành, trong khi vẫn tái sử dụng tối đa các hệ thống, dữ liệu và quy trình hiện hữu. Từ những vấn đề trên, đề tài **“Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học”** được thực hiện nhằm xây dựng **MyHCMUT Mobile** như một ứng dụng di động đa nền tảng tích hợp và mở rộng các hệ thống nghiệp vụ hiện hữu của Nhà trường, trọng tâm là HRM và iOffice.

---

## 1.2. Bài toán đặt ra

Bài toán của đề tài là thiết kế và hiện thực một ứng dụng di động đa nền tảng cho phép cán bộ và các vai trò liên quan tiếp cận, theo dõi và xử lý một số nghiệp vụ của Nhà trường trên thiết bị di động, đồng thời tái sử dụng dữ liệu và quy trình của các hệ thống backend hiện hữu.

Giải pháp cần giải quyết một số nhóm vấn đề chính:

1. **Thứ nhất,** ứng dụng cần cung cấp giao diện phù hợp với thiết bị di động cho các nghiệp vụ được lựa chọn, thay vì yêu cầu người dùng luôn thao tác trên giao diện Web dành cho trình duyệt máy tính.
2. **Thứ hai,** hệ thống cần tích hợp với HRM và iOffice hiện hữu. Việc tích hợp phải hạn chế sao chép không cần thiết nghiệp vụ ở phía backend và duy trì ranh giới trách nhiệm rõ ràng giữa Mobile với các hệ thống nguồn.
3. **Thứ ba,** ứng dụng cần hỗ trợ các quy trình nhân sự có nhiều bước xử lý như nghỉ phép và công tác, bao gồm khai báo thông tin, kiểm tra điều kiện, gửi yêu cầu và theo dõi quá trình phê duyệt.
4. **Thứ tư,** đối với các chức năng chưa được tái hiện thực hoàn toàn bằng giao diện native, ứng dụng cần có cơ chế chuyển người dùng sang WebApp tương ứng qua In-App WebView mà không yêu cầu đăng nhập lại. Trong phạm vi đề tài, yêu cầu này được giải quyết bằng một cơ chế chuyển tiếp xác thực dùng một lần giữa Mobile và Web.
5. **Thứ năm,** ứng dụng cần tiếp nhận thông báo phát sinh từ nhiều nghiệp vụ và điều hướng người dùng đến đúng ngữ cảnh xử lý, chẳng hạn một đơn nghỉ phép, một hồ sơ công tác, văn bản hoặc nhiệm vụ.

Từ đó, bài toán trọng tâm của đề tài có thể được phát biểu như sau:

> ***Làm thế nào để xây dựng một ứng dụng di động đa nền tảng giúp cán bộ và các vai trò quản lý tiếp cận, thực hiện và xử lý các nghiệp vụ nhân sự – điều hành thường xuyên trên thiết bị di động, đồng thời tích hợp với HRM, iOffice và cơ chế xác thực hiện hữu mà không cần xây dựng lại toàn bộ các hệ thống nghiệp vụ của Nhà trường?***

---

## 1.3. Mục tiêu của đề tài

### 1.3.1. Mục tiêu tổng quát

Mục tiêu tổng quát của đề tài là thiết kế và hiện thực ứng dụng di động đa nền tảng MyHCMUT Mobile nhằm hỗ trợ cán bộ, giảng viên và các vai trò quản lý tiếp cận một số nghiệp vụ nhân sự – điều hành của Trường Đại học Bách khoa – ĐHQG-HCM thông qua tích hợp và mở rộng các dịch vụ HRM, iOffice và xác thực hiện hữu.

Ứng dụng hướng đến việc tạo một điểm truy cập thống nhất trên thiết bị di động cho các chức năng thuộc phạm vi đề tài, đồng thời tái sử dụng dữ liệu, API và quy trình nghiệp vụ đã tồn tại tại các backend của Nhà trường.

### 1.3.2. Mục tiêu cụ thể

Để đạt được mục tiêu tổng quát, đề tài xác định 7 mục tiêu cụ thể sau:

1. **Xây dựng nền tảng ứng dụng di động đa nền tảng MyHCMUT Mobile**, tổ chức theo các phân hệ nghiệp vụ và cung cấp các thành phần dùng chung phục vụ tích hợp nhiều hệ thống backend.
2. **Tích hợp tra cứu và hỗ trợ cập nhật hồ sơ cán bộ**, trong đó dữ liệu hồ sơ được tra cứu trực tiếp trên Mobile; các biểu mẫu cập nhật có phạm vi lớn có thể được tái sử dụng từ HRM Web qua In-App WebView.
3. **Tích hợp các quy trình nghỉ phép và đi công tác trên thiết bị di động**, bao gồm khai báo thông tin, kiểm tra điều kiện nghiệp vụ, gửi yêu cầu, theo dõi trạng thái và thực hiện các thao tác phê duyệt theo quyền.
4. **Tích hợp các chức năng văn phòng và điều hành thuộc iOffice**, bao gồm các nghiệp vụ được lựa chọn liên quan đến văn bản, nhiệm vụ và lịch công tác (kèm điểm danh họp) trên thiết bị di động.
5. **Xây dựng cơ chế tiếp nhận và quản lý thông báo trên Mobile**, hỗ trợ nhận thông báo từ các miền nghiệp vụ và điều hướng người dùng đến ngữ cảnh tương ứng.
6. **Xây dựng cơ chế chuyển tiếp xác thực giữa Mobile và Web HRM**, sử dụng vé xác thực dùng một lần (One-Time Ticket SSO) kết hợp In-App WebView nhằm hỗ trợ tái sử dụng chức năng Web mà không truyền trực tiếp access token của ứng dụng Mobile qua URL.
7. **Kiểm thử các thành phần được hiện thực và tích hợp**, tập trung vào tính đúng đắn của các luồng nghiệp vụ, tích hợp Mobile–backend và các tình huống lỗi thuộc phạm vi đề tài. Hệ thống đạt kiểm chuẩn tự động toàn diện với **370 bài kiểm thử Mobile + 57 bài kiểm thử Backend = 427 bài kiểm thử tự động (100% Pass Rate)**.

Các mục tiêu trên tập trung vào khả năng tích hợp và hỗ trợ nghiệp vụ. Các chỉ tiêu định lượng về hiệu năng, độ tin cậy hoặc an toàn chỉ được sử dụng để kết luận khi có phương pháp đo và bằng chứng thực nghiệm tương ứng.

---

## 1.4. Đối tượng, phạm vi và ranh giới hệ thống

### 1.4.1. Đối tượng sử dụng

MyHCMUT Mobile hướng đến các nhóm người dùng tham gia vào những nghiệp vụ được tích hợp trong phạm vi đề tài:

- **Cán bộ, giảng viên và người lao động:** có thể tra cứu thông tin cá nhân, đăng ký nghỉ phép, lập hồ sơ đi công tác, tiếp cận các chức năng iOffice theo quyền, xem lịch và tiếp nhận thông báo.
- **Lãnh đạo đơn vị:** có thể thẩm định và phê duyệt các hồ sơ thuộc thẩm quyền, bao gồm nghỉ phép và công tác của cán bộ trong đơn vị, đồng thời sử dụng các chức năng điều hành tương ứng.
- **Chuyên viên đơn vị, chuyên viên và lãnh đạo Phòng Tổ chức Cán bộ (TCCB), Ban Giám Hiệu (BGH):** tham gia quy trình đi công tác tùy theo loại hồ sơ và bước xử lý nghiệp vụ theo quy chế của Nhà trường.
- **Các vai trò thuộc iOffice:** tham gia các nghiệp vụ văn bản, nhiệm vụ và lịch công tác theo quyền được hệ thống hiện hữu cấp.

Ma trận phân quyền chi tiết và các use case tương ứng được trình bày tại Chương 4.

### 1.4.2. Phạm vi chức năng

Phạm vi chức năng của MyHCMUT Mobile tập trung vào **hai miền nghiệp vụ tích hợp thực tế**: HRM (`hrm`) và iOffice (`ioffice`). Auth/SSO (`auth`) là cơ chế xác thực và tích hợp; `notification` là **cơ chế thông báo nghiệp vụ xuyên suốt**, không phải miền nghiệp vụ độc lập. Các nhóm chức năng chính gồm:

1. **Cơ chế Xác thực và Định danh (`auth`):** Chuyển tiếp xác thực từ Mobile sang Web HRM bằng vé xác thực dùng một lần (One-Time Ticket SSO), duy trì phiên làm việc an toàn kết hợp máy chủ CAS/LDAP hiện hữu;
2. **Phân hệ Quản lý Nhân sự (`hrm`):**
   - Tra cứu và hỗ trợ cập nhật hồ sơ cán bộ (11 danh mục thông tin lý lịch);
   - Đăng ký và phê duyệt nghỉ phép (Form Wizard 3 bước, tiền kiểm tra điều kiện, giải trình trễ hạn);
   - Đăng ký và phê duyệt đi công tác (Form Wizard 5 bước, luồng phê duyệt đa cấp theo thẩm quyền);
3. **Phân hệ Văn phòng số (`ioffice`):** Tích hợp các nghiệp vụ văn bản đến/đi, quản lý cây nhiệm vụ (tasks/missions), điểm danh cuộc họp thời gian thực và Lịch công tác tổng hợp (Unified Calendar);
4. **Cơ chế thông báo nghiệp vụ xuyên suốt (`notification`):** Tiếp nhận, hiển thị và điều hướng thông báo nghiệp vụ qua FCM HTTP v1, phân tích metadata phục vụ Deep Linking. Backend chỉ phát sự kiện thông báo sau commit; FCM không bảo đảm thiết bị nhận;
5. **Các thành phần nền tảng Mobile dùng chung:** Các module hạt nhân (`packages/core`, `packages/shared`) cần thiết để kết nối và vận hành thống nhất các miền nghiệp vụ.

**Khẳng định ranh giới chức năng:** Đề tài tích hợp và nghiệm thu hai miền nghiệp vụ HRM/iOffice cùng các cơ chế hỗ trợ Auth/SSO và thông báo nghiệp vụ xuyên suốt nêu trên. Các nhu cầu mở rộng về phân hệ Quản lý Khoa học và Công nghệ (KHCN) cũng như giải pháp Ký số nâng cao (PKI CA / SmartCA) hoàn toàn chưa có hạ tầng cơ sở dữ liệu và dịch vụ backend tương ứng trong hệ thống thông tin hiện hữu của Nhà trường, do đó được khẳng định rõ ràng là các bài toán nghiên cứu định hướng cho tương lai (trình bày tại Chương 7) và tuyệt đối không nằm trong phạm vi cam kết nghiệm thu của phiên bản hiện tại.

### 1.4.3. Ranh giới hệ thống

Đề tài không xây dựng lại toàn bộ HRM hoặc iOffice. Hai hệ thống này được xem là các hệ thống nghiệp vụ hiện hữu mà MyHCMUT Mobile tích hợp:

- **Nguyên tắc Backend-authoritative:** Các API, dữ liệu và quy trình nghiệp vụ đã tồn tại được tái sử dụng khi phù hợp. Nhóm chỉ phát triển hoặc điều chỉnh các thành phần backend khi cần thiết để hỗ trợ tích hợp Mobile hoặc giải quyết các yêu cầu kỹ thuật thuộc phạm vi đề tài. Đối với nghỉ phép và công tác, HRM backend tiếp tục đóng vai trò nguồn dữ liệu và thành phần xử lý nghiệp vụ có thẩm quyền. Ứng dụng Mobile cung cấp giao diện tương tác, quản lý trạng thái phía client và gọi các API tương ứng; không tự quyết định kết quả cuối cùng của quy trình.
- **Nguyên tắc Mobile-first và Web-reuse:** Một số chức năng được hiện thực bằng giao diện Mobile native, trong khi một số nghiệp vụ Web được tái sử dụng qua In-App WebView. Việc một chức năng có thể truy cập từ MyHCMUT Mobile không đồng nghĩa toàn bộ nghiệp vụ đó được nhóm xây dựng mới.
- **Ranh giới tích hợp thực tế:** Hệ thống tích hợp hai miền nghiệp vụ HRM/iOffice; Auth/SSO là cơ chế xác thực/tích hợp và `modules/notification` là cơ chế thông báo nghiệp vụ xuyên suốt. Toàn bộ các phân hệ/module giả định không có dịch vụ backend hay hạ tầng CSDL tương ứng của Nhà trường (như Quản lý đề tài Khoa học Công nghệ `khcn`, Ký số nâng cao `hcmut_sign`, hay phòng họp trực tuyến `meetings`) đều bị loại trừ tuyệt đối khỏi phạm vi cam kết kỹ thuật của đề tài.
- **Nguyên tắc minh bạch phạm vi đánh giá:** Các chức năng hoặc cải tiến chưa được triển khai trong phiên bản đánh giá được xem là hướng phát triển và không được trình bày như chức năng đã hoàn thành.

### 1.4.4. Ranh giới đóng góp của các thành viên

Bên cạnh ranh giới của hệ thống, báo cáo phân biệt rõ phạm vi trách nhiệm và nội dung đóng góp của từng sinh viên trong nhóm nhằm bảo đảm tính minh bạch và làm cơ sở đánh giá kết quả thực hiện đề tài (Bảng 1.1).

**Bảng 1.1: Phân công nhiệm vụ và đóng góp của các thành viên**

| STT | Thành viên thực hiện | Nội dung công việc và đóng góp chính | Tỷ lệ |
| :---: | :--- | :--- | :---: |
| 1 | **Vũ Xuân Chính**<br>(MSSV: 2210392) | • Thiết kế kiến trúc nền tảng MyHCMUT Mobile và các thành phần dùng chung (mạng, trạng thái, bộ điều hướng).<br>• Thiết kế và hiện thực cơ chế cầu nối tích hợp xác thực Mobile–Web SSO qua One-Time Ticket.<br>• Phân hệ Quản lý Hồ sơ cán bộ và Quản lý Nghỉ phép (giao diện Mobile và mở rộng backend).<br>• Phân hệ Lịch công tác, Điểm danh họp và Trung tâm Thông báo nghiệp vụ. | **50%** |
| 2 | **Tống Duy Khang**<br>(MSSV: 2211467) | • Phân hệ Quản lý Đi công tác: thiết kế mô hình dữ liệu phía client, Form Wizard đăng ký 5 bước và các màn hình xử lý thẩm định/phê duyệt.<br>• Phân hệ Quản lý Nhiệm vụ và Công việc (Tasks) thuộc phạm vi tích hợp iOffice.<br>• Thiết kế giao diện và xử lý luồng phê duyệt đa cấp theo thẩm quyền cho các quy trình nghiệp vụ.<br>• Phối hợp kiểm thử tích hợp luồng nghiệp vụ liên phân hệ và kiểm thử đầu-cuối. | **50%** |

### 1.4.5. Phương pháp thực hiện

Đề tài được thực hiện theo hướng khảo sát hệ thống hiện hữu trước khi phát triển giải pháp Mobile. Nhóm phân tích các nghiệp vụ và luồng dữ liệu đang được cung cấp bởi HRM và iOffice, từ đó xác định những chức năng có thể tái sử dụng trực tiếp, những chức năng cần bổ sung API hoặc adapter và những chức năng phù hợp để cung cấp giao diện Mobile riêng.

Quá trình thực hiện gồm 6 hoạt động chính:

1. Khảo sát các hệ thống, API và quy trình nghiệp vụ hiện hữu.
2. Xác định nhóm người dùng, phạm vi chức năng và ranh giới trách nhiệm.
3. Phân tích yêu cầu và thiết kế giải pháp tích hợp Mobile với các backend hiện hữu.
4. Hiện thực các phân hệ Mobile và các thành phần backend mở rộng thuộc phạm vi đề tài, sau đó tích hợp thành một ứng dụng thống nhất.
5. Kiểm thử các thành phần ở mức phù hợp và kiểm thử tích hợp đối với các luồng nghiệp vụ chính.
6. Đánh giá kết quả, xác định hạn chế và đề xuất hướng phát triển.

Cách tiếp cận này nhằm hạn chế việc xây dựng lại những thành phần đã tồn tại, đồng thời tập trung nguồn lực vào những vấn đề phát sinh khi đưa các nghiệp vụ lên môi trường Mobile.

### 1.4.6. Đóng góp của nhóm

Đóng góp chính của đề tài không nằm ở việc xây dựng một hệ thống HRM hoặc iOffice mới, mà ở việc thiết kế, hiện thực và tích hợp một lớp ứng dụng di động trên hệ sinh thái nghiệp vụ hiện hữu của Nhà trường.

Các đóng góp của nhóm bao gồm:

1. Xây dựng nền tảng ứng dụng MyHCMUT Mobile đa nền tảng;
2. Xây dựng giao diện Mobile cho các nghiệp vụ được lựa chọn, bao gồm hồ sơ cán bộ, nghỉ phép, công tác và một số chức năng iOffice;
3. Tích hợp các quy trình hồ sơ cán bộ, nghỉ phép và công tác với HRM; tích hợp các nghiệp vụ văn phòng và điều hành thuộc iOffice;
4. Xây dựng các thành phần Mobile và backend bổ sung cần thiết cho quá trình tích hợp;
5. Xây dựng cơ chế chuyển tiếp xác thực dùng một lần đối với các chức năng Web cần tái sử dụng;
6. Xây dựng cơ chế tiếp nhận và điều hướng thông báo nghiệp vụ trên Mobile;
7. Kiểm thử và đánh giá các chức năng được hiện thực trong phạm vi đồ án.

Để bảo đảm tính minh bạch, báo cáo phân biệt giữa bốn nhóm thành phần:

- **Thành phần do sinh viên trực tiếp phát triển:** Toàn bộ ứng dụng di động MyHCMUT Mobile (Flutter/Dart), các màn hình giao diện (UI/UX), logic nghiệp vụ client (Bloc/Riverpod), tầng kết nối mạng (Dio), lưu trữ cục bộ (SQLite/SharedPreferences) và các kịch bản kiểm thử tự động (Unit Test, Widget Test).
- **Thành phần do sinh viên tích hợp hoặc mở rộng:** Các dịch vụ backend mở rộng phục vụ Mobile (như API cấp phát và xác thực One-Time Ticket SSO, cơ chế đồng bộ thông báo thời gian thực, adapter ánh xạ lịch công tác và điểm danh họp vào Unified Calendar).
- **Thành phần hiện hữu của Nhà trường:** Cơ sở dữ liệu và hệ thống phần mềm HRM, văn phòng điện tử iOffice, hệ thống xác thực CAS/SSO hiện hữu, hạ tầng mạng nội bộ và các API backend nghiệp vụ đang vận hành.
- **Giải pháp chỉ được đề xuất cho hướng phát triển:** Các tính năng định hướng cho tương lai chưa đưa vào phạm vi đánh giá phiên bản hiện tại (như phân hệ Quản lý đề tài Khoa học Công nghệ KHCN và giải pháp Ký số nâng cao PKI CA / SmartCA khi Nhà trường xây dựng hạ tầng backend/CSDL tương ứng, giải pháp Backchannel Token Revocation, xác thực nâng cao qua sinh trắc học tích hợp sâu).

---

## 1.5. Bố cục báo cáo

Báo cáo được tổ chức thành bảy chương theo quy chuẩn học thuật của Khoa Khoa học và Kỹ thuật Máy tính – Trường Đại học Bách khoa – ĐHQG-HCM:

- **Chương 1 — Giới thiệu:** Trình bày bối cảnh chuyển đổi số, vấn đề thực tế, bài toán đặt ra, mục tiêu tổng quát và cụ thể, đối tượng sử dụng, phạm vi chức năng (hai miền nghiệp vụ HRM/iOffice cùng cơ chế Auth/SSO và thông báo nghiệp vụ xuyên suốt), ranh giới hệ thống, phân công nhiệm vụ thành viên, phương pháp thực hiện và các đóng góp chính của nhóm.
- **Chương 2 — Phân tích các hệ thống có liên quan:** Khảo sát các hệ thống hiện hữu của Nhà trường (HRM, iOffice) và một số giải pháp thương mại có liên quan trên thị trường (Base HRM, Tanca), phân tích các tiêu chí so sánh, xác định khoảng trống công nghệ và luận cứ đề xuất giải pháp MyHCMUT Mobile.
- **Chương 3 — Cơ sở lý thuyết và công nghệ:** Trình bày MVC tại backend, nguyên lý kiến trúc hướng phân hệ, RESTful API/HTTPS và quản lý phiên Bearer JWT; sau đó phân tích các quyết định công nghệ cho Mobile (Flutter, Riverpod, Dio, SQLite, Modular Monorepo/Melos) và backend tích hợp.
- **Chương 4 — Phân tích và đặc tả yêu cầu hệ thống:** Xác định các nhóm tác nhân, ma trận phân quyền người dùng và đặc tả chi tiết: chức năng nghiệp vụ HRM (Hồ sơ cán bộ, Nghỉ phép, Công tác) và iOffice (Văn bản, Nhiệm vụ, Lịch công tác/Điểm danh); cơ chế xác thực/tích hợp Auth/SSO; cùng **cơ chế thông báo nghiệp vụ xuyên suốt** hỗ trợ các chuyển trạng thái nghiệp vụ. Chương cũng trình bày các quy tắc nghiệp vụ cốt lõi và yêu cầu phi chức năng.
- **Chương 5 — Phân tích và thiết kế hệ thống:** Thiết kế kiến trúc tổng thể, mô hình dữ liệu quan hệ, thiết kế chi tiết phía Mobile Client và Backend tích hợp, cơ chế chuyển tiếp xác thực qua One-Time Ticket SSO, cơ chế đồng bộ Unified Calendar và kiểm soát tương tranh.
- **Chương 6 — Kết quả hiện thực và kiểm thử:** Trình bày chi tiết giao diện và quy trình xử lý thực tế của các phân hệ trên thiết bị di động, công bố kết quả kiểm thử tự động đa tầng (370 bài kiểm thử Mobile + 57 bài kiểm thử Backend = 427 bài kiểm thử tự động đạt tỷ lệ vượt qua 100%), kiểm thử tương tranh và kiểm thử thực nghiệm trên thiết bị thực.
- **Chương 7 — Tổng kết và hướng phát triển:** Đánh giá mức độ hoàn thành nhiệm vụ đối chiếu với 7 mục tiêu ban đầu, phân tích ý nghĩa thực tiễn, làm rõ các hạn chế kỹ thuật còn tồn tại (bao gồm việc phân hệ KHCN và module ký số nâng cao dừng ở mức nghiên cứu định hướng do chưa có backend API tương ứng) và đề xuất các định hướng nâng cấp, hoàn thiện hệ thống trong tương lai.
