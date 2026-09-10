# CHƯƠNG 1: GIỚI THIỆU TỔNG QUAN
# (08_CHAPTER_1_INTRODUCTION.md)

> **Đề tài:** Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học (MyHCMUT Mobile)  
> **Cơ quan chủ quản:** Trường Đại học Bách khoa – Đại học Quốc gia Thành phố Hồ Chí Minh  
> **Khoa:** Khoa Khoa học và Kỹ thuật Máy tính  
> **Sinh viên thực hiện:**  
> - Vũ Xuân Chính (MSSV: 2210392) — Hồ sơ cán bộ, Quản lý nghỉ phép, Trung tâm thông báo, Chuyển tiếp xác thực qua vé dùng một lần kết hợp In-App WebView.  
> - Tống Duy Khang (MSSV: 2211467) — Tích hợp các nghiệp vụ văn phòng điện tử iOffice.  
> **Giảng viên hướng dẫn:** ThS. Nguyễn Thanh Tùng  
> **Mốc hoàn thiện & Kiểm chuẩn:** Tháng 09/2026 (Khóa Baseline V3.1)  

---

## 1.1. Bối cảnh và vấn đề thực tế

Chuyển đổi số đang trở thành một định hướng quan trọng trong quá trình phát triển và hiện đại hóa hoạt động quản lý tại các cơ quan, tổ chức và cơ sở giáo dục. Tại Việt Nam, Quyết định số 749/QĐ-TTg ngày 03/6/2020 của Thủ tướng Chính phủ phê duyệt “Chương trình Chuyển đổi số quốc gia đến năm 2025, định hướng đến năm 2030”, trong đó giáo dục được xác định là một trong những lĩnh vực cần ưu tiên chuyển đổi số.

Đối với ngành giáo dục, Quyết định số 131/QĐ-TTg ngày 25/01/2022 tiếp tục phê duyệt Đề án “Tăng cường ứng dụng công nghệ thông tin và chuyển đổi số trong giáo dục và đào tạo giai đoạn 2022–2025, định hướng đến năm 2030”. Đề án đặt ra định hướng tăng cường ứng dụng công nghệ số trong hoạt động quản lý, quản trị cơ sở giáo dục và khai thác dữ liệu phục vụ hoạt động của ngành.

Trong bối cảnh đó, Trường Đại học Bách khoa – Đại học Quốc gia Thành phố Hồ Chí Minh là cơ sở giáo dục đại học có quy mô hoạt động lớn. Theo thông tin được Nhà trường công bố năm 2026, Trường có 1.061 viên chức và người lao động, trong đó có 667 giảng viên; quy mô đào tạo khoảng 28.000 học viên và sinh viên. Hoạt động quản lý của một tổ chức có quy mô như vậy kéo theo nhiều nghiệp vụ liên quan đến nhân sự, văn bản, công việc và điều hành cần được xử lý thường xuyên.

Nhà trường đã triển khai các hệ thống thông tin phục vụ hoạt động quản trị, trong đó có hệ thống quản lý nhân sự HRM và hệ thống văn phòng điện tử iOffice. Các hệ thống này đảm nhiệm các nghiệp vụ và lưu trữ dữ liệu chuyên môn tương ứng. Do đó, bài toán của đề tài không phải xây dựng lại một hệ thống quản lý nhân sự mới, mà là nghiên cứu cách mở rộng khả năng tiếp cận các nghiệp vụ hiện hữu trên thiết bị di động.

Trong thực tế sử dụng, việc phụ thuộc vào giao diện Web đối với một số nghiệp vụ có thể làm giảm tính thuận tiện khi người dùng cần tra cứu thông tin, tiếp nhận thông báo hoặc xử lý công việc khi không sử dụng máy tính. Một số nghiệp vụ cũng yêu cầu chuyển tiếp giữa ứng dụng di động và hệ thống Web hiện hữu, đặt ra vấn đề duy trì phiên xác thực và ngữ cảnh làm việc mà không yêu cầu người dùng đăng nhập lại một cách không cần thiết.

Bên cạnh vấn đề về khả năng tiếp cận, việc đưa các nghiệp vụ hiện hữu lên môi trường di động không đơn thuần là xây dựng lại giao diện. Ứng dụng cần tương thích với dữ liệu, API, quy trình nghiệp vụ và cơ chế phân quyền đang được sử dụng; đồng thời phải xử lý các đặc trưng của môi trường di động như vòng đời ứng dụng, kết nối mạng không ổn định, thông báo đẩy và việc chuyển đổi giữa giao diện native với các chức năng Web chưa được tái hiện thực trên Mobile.

Từ những vấn đề trên, đề tài “Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học” được thực hiện nhằm xây dựng MyHCMUT Mobile như một ứng dụng di động tích hợp và mở rộng các hệ thống quản lý nghiệp vụ hiện hữu của Nhà trường, trọng tâm là HRM và iOffice.

---

## 1.2. Bài toán đặt ra

Bài toán của đề tài là thiết kế và hiện thực một ứng dụng di động đa nền tảng cho phép người dùng tiếp cận và thực hiện một số nghiệp vụ của Nhà trường thuận tiện hơn trên thiết bị di động, trong khi vẫn tái sử dụng các hệ thống và dữ liệu hiện hữu.

Giải pháp cần giải quyết một số nhóm vấn đề chính:

1. **Thứ nhất,** ứng dụng cần cung cấp một giao diện phù hợp với thiết bị di động cho các nghiệp vụ được lựa chọn, thay vì yêu cầu người dùng thao tác trực tiếp trên giao diện Web dành cho trình duyệt máy tính.
2. **Thứ hai,** hệ thống cần tích hợp với các dịch vụ HRM và iOffice hiện hữu. Việc tích hợp phải hạn chế sao chép không cần thiết nghiệp vụ đã tồn tại ở backend, đồng thời duy trì sự thống nhất về dữ liệu và quy trình giữa Mobile và các hệ thống nguồn.
3. **Thứ ba,** đối với các chức năng chưa được tái hiện thực hoàn toàn bằng giao diện native, ứng dụng cần có cơ chế chuyển người dùng sang hệ thống Web tương ứng trong In-App WebView. Quá trình chuyển tiếp cần duy trì được ngữ cảnh xác thực phù hợp. Trong phạm vi đề tài, vấn đề này được giải quyết thông qua cơ chế vé xác thực dùng một lần có thời gian tồn tại giới hạn.
4. **Thứ tư,** ứng dụng cần hỗ trợ tiếp nhận thông báo từ các nghiệp vụ liên quan và điều hướng người dùng đến đúng ngữ cảnh xử lý trên Mobile. Điều này yêu cầu phối hợp giữa dữ liệu thông báo từ backend, dịch vụ push notification và cơ chế định tuyến của ứng dụng.
5. **Thứ năm,** một số nghiệp vụ như đăng ký và phê duyệt nghỉ phép liên quan đến nhiều bước kiểm tra dữ liệu và cập nhật trạng thái. Việc tích hợp trên Mobile vì vậy phải tôn trọng các quy tắc nghiệp vụ và các chốt kiểm tra có thẩm quyền tại backend thay vì xem các kiểm tra phía ứng dụng là nguồn quyết định cuối cùng.

Từ đó, bài toán trọng tâm có thể được phát biểu như sau:

> *Làm thế nào để xây dựng một ứng dụng di động đa nền tảng giúp người dùng tiếp cận và xử lý một số nghiệp vụ nhân sự và điều hành của Nhà trường trên thiết bị di động, đồng thời tích hợp với các hệ thống HRM, iOffice và cơ chế xác thực hiện hữu mà không xây dựng lại toàn bộ các hệ thống nghiệp vụ này?*

---

## 1.3. Mục tiêu của đề tài

### 1.3.1. Mục tiêu tổng quát

Mục tiêu tổng quát của đề tài là thiết kế và hiện thực ứng dụng di động đa nền tảng MyHCMUT Mobile nhằm hỗ trợ một số nghiệp vụ phục vụ cán bộ và công tác điều hành của Trường Đại học Bách khoa – ĐHQG-HCM, thông qua việc tích hợp và mở rộng các dịch vụ HRM, iOffice và xác thực hiện hữu.

Ứng dụng hướng đến việc tạo một điểm truy cập trên thiết bị di động cho các chức năng thuộc phạm vi đề tài, đồng thời tái sử dụng dữ liệu, API và quy trình nghiệp vụ đã tồn tại tại các hệ thống backend của Nhà trường.

### 1.3.2. Mục tiêu cụ thể

Để đạt được mục tiêu tổng quát, đề tài xác định các mục tiêu cụ thể sau:

- Xây dựng nền tảng ứng dụng di động đa nền tảng MyHCMUT Mobile, tạo cơ sở để tổ chức và tích hợp các nhóm chức năng phục vụ cán bộ và công tác điều hành.
- Tích hợp chức năng tra cứu và hỗ trợ cập nhật hồ sơ cán bộ, trong đó thông tin hồ sơ có thể được tra cứu trực tiếp trên giao diện Mobile; các nghiệp vụ cập nhật chưa được tái hiện thực hoàn toàn trên Mobile được chuyển tiếp đến Web HRM khi cần thiết.
- Tích hợp quy trình quản lý nghỉ phép trên thiết bị di động, bao gồm tra cứu thông tin phép, tạo và hoàn thiện đơn, kiểm tra các điều kiện nghiệp vụ, gửi đơn và hỗ trợ các thao tác phê duyệt theo quyền của người dùng.
- Xây dựng cơ chế tiếp nhận và quản lý thông báo trên Mobile, hỗ trợ nhận thông báo liên quan đến các nghiệp vụ được tích hợp và điều hướng người dùng đến ngữ cảnh xử lý tương ứng.
- Xây dựng cơ chế chuyển tiếp xác thực giữa Mobile và Web HRM, sử dụng vé xác thực dùng một lần kết hợp In-App WebView nhằm hỗ trợ truy cập các chức năng Web cần thiết mà không truyền trực tiếp access token của ứng dụng Mobile qua URL.
- Tích hợp các chức năng thuộc hệ thống iOffice trong phạm vi đề tài, phục vụ việc tiếp cận và xử lý các nghiệp vụ văn phòng điện tử trên thiết bị di động.
- Kiểm thử các thành phần được hiện thực và tích hợp, tập trung vào tính đúng đắn của các luồng nghiệp vụ, tích hợp giữa Mobile và backend, cũng như một số trường hợp lỗi và tình huống cạnh tranh dữ liệu có liên quan đến phạm vi đề tài.

Các mục tiêu trên tập trung vào khả năng tích hợp và hỗ trợ nghiệp vụ. Các chỉ tiêu định lượng về hiệu năng hoặc mức độ an toàn chỉ được sử dụng làm tiêu chí đánh giá khi có phương pháp đo và bằng chứng thực nghiệm tương ứng.

---

## 1.4. Đối tượng sử dụng, phạm vi và ranh giới hệ thống

### 1.4.1. Đối tượng sử dụng

MyHCMUT Mobile hướng đến các nhóm người dùng tham gia vào những nghiệp vụ được tích hợp trong phạm vi đề tài, bao gồm:

- **Cán bộ, giảng viên và người lao động:** tra cứu thông tin cá nhân, thực hiện các nghiệp vụ nghỉ phép, nhận thông báo và truy cập các chức năng liên quan.
- **Lãnh đạo đơn vị hoặc người có thẩm quyền phê duyệt:** thực hiện các thao tác xử lý, phê duyệt hoặc từ chối đối với những nghiệp vụ được phân quyền.
- **Chuyên viên nghiệp vụ:** trong đó có các vai trò liên quan đến công tác tổ chức – cán bộ và văn phòng điện tử, sử dụng các chức năng tương ứng với quyền được cấp.
- **Các vai trò quản lý và xử lý văn bản/công việc thuộc iOffice:** trong phạm vi chức năng do đề tài tích hợp.

Phân quyền chi tiết của từng nhóm người dùng và từng ca sử dụng được trình bày tại chương phân tích yêu cầu của hệ thống.

### 1.4.2. Phạm vi chức năng

Phạm vi của MyHCMUT Mobile bao gồm các nhóm chức năng chính:

- Tra cứu và hỗ trợ cập nhật hồ sơ cán bộ;
- Quản lý quy trình nghỉ phép;
- Tiếp nhận, hiển thị và điều hướng thông báo nghiệp vụ;
- Chuyển tiếp xác thực từ Mobile sang Web HRM bằng vé xác thực dùng một lần;
- Các nghiệp vụ văn phòng điện tử iOffice thuộc phạm vi của đề tài;
- Các thành phần nền tảng Mobile dùng chung cần thiết để tích hợp các chức năng trên.

### 1.4.3. Ranh giới hệ thống

Đề tài không xây dựng lại toàn bộ HRM hoặc iOffice. Hai hệ thống này được xem là các hệ thống nghiệp vụ hiện hữu mà MyHCMUT Mobile tích hợp.

Các API, dữ liệu và quy trình nghiệp vụ đã tồn tại được tái sử dụng khi phù hợp. Nhóm chỉ phát triển hoặc điều chỉnh các thành phần backend khi cần thiết để hỗ trợ tích hợp Mobile hoặc đáp ứng yêu cầu kỹ thuật thuộc phạm vi đề tài.

Một số chức năng được hiện thực bằng giao diện Mobile native, trong khi một số nghiệp vụ Web được tái sử dụng thông qua In-App WebView. Vì vậy, việc một chức năng có thể được truy cập từ MyHCMUT Mobile không đồng nghĩa toàn bộ nghiệp vụ đó được nhóm xây dựng mới.

Các cải tiến chưa được triển khai trong phiên bản được đánh giá, chẳng hạn một số cơ chế tăng cường bảo mật lưu trữ cục bộ hoặc các giải pháp nâng cao độ tin cậy của pipeline sự kiện, được xem là hướng phát triển và không được tính là chức năng đã hoàn thành của hệ thống.

---

## 1.5. Phương pháp thực hiện và đóng góp của nhóm

### 1.5.1. Phương pháp thực hiện

Đề tài được thực hiện theo hướng khảo sát hệ thống hiện hữu trước khi phát triển giải pháp Mobile. Nhóm phân tích các nghiệp vụ và luồng dữ liệu đang được cung cấp bởi HRM và iOffice, từ đó xác định những chức năng có thể tái sử dụng trực tiếp, những chức năng cần bổ sung API hoặc adapter và những chức năng phù hợp để cung cấp giao diện Mobile riêng.

Quá trình thực hiện gồm các hoạt động chính:

- Khảo sát và phân tích các hệ thống, API và quy trình nghiệp vụ hiện hữu có liên quan.
- Xác định phạm vi chức năng và các nhóm người dùng của ứng dụng Mobile.
- Phân tích yêu cầu và thiết kế giải pháp tích hợp giữa Mobile với các backend hiện hữu.
- Hiện thực các module Mobile và các thành phần backend bổ sung thuộc phạm vi đề tài.
- Kiểm thử ở các mức phù hợp đối với logic ứng dụng, tích hợp backend và các luồng nghiệp vụ chính.
- Đánh giá kết quả, xác định hạn chế và đề xuất các hướng cải tiến tiếp theo.

Cách tiếp cận này nhằm hạn chế việc xây dựng lại những thành phần đã tồn tại, đồng thời tập trung nguồn lực vào các vấn đề phát sinh khi đưa nghiệp vụ lên môi trường Mobile.

### 1.5.2. Đóng góp của nhóm

Đóng góp chính của đề tài không nằm ở việc xây dựng một hệ thống HRM hoặc iOffice mới, mà ở việc thiết kế, hiện thực và tích hợp một lớp ứng dụng di động trên hệ sinh thái nghiệp vụ hiện hữu của Nhà trường.

Các đóng góp chính bao gồm:

- Xây dựng nền tảng ứng dụng MyHCMUT Mobile đa nền tảng;
- Xây dựng các giao diện và luồng tương tác Mobile cho những nghiệp vụ thuộc phạm vi đề tài;
- Tích hợp ứng dụng với các dịch vụ HRM và iOffice hiện hữu;
- Xây dựng các thành phần hỗ trợ tích hợp cần thiết tại Mobile và backend;
- Xây dựng cơ chế chuyển tiếp xác thực dùng một lần cho các trường hợp cần chuyển từ Mobile sang Web HRM;
- Xây dựng cơ chế tiếp nhận và điều hướng thông báo nghiệp vụ trên Mobile;
- Kiểm thử và đánh giá các chức năng được hiện thực trong phạm vi đồ án.

Để bảo đảm tính minh bạch về đóng góp, báo cáo phân biệt giữa bốn nhóm thành phần: thành phần do sinh viên trực tiếp phát triển, thành phần do sinh viên tích hợp hoặc mở rộng, thành phần hiện hữu của Nhà trường và giải pháp chỉ được đề xuất cho hướng phát triển.

Trong nhóm thực hiện, Vũ Xuân Chính tập trung vào các nội dung liên quan đến hồ sơ cán bộ, quản lý nghỉ phép, trung tâm thông báo và cơ chế chuyển tiếp xác thực qua vé dùng một lần kết hợp In-App WebView. Tống Duy Khang phụ trách các nội dung liên quan đến việc tích hợp các nghiệp vụ iOffice theo phân công của nhóm. Các thành phần dùng chung của ứng dụng được phối hợp phát triển theo phạm vi công việc cụ thể của từng thành viên.

---

## 1.6. Bố cục tổng thể của báo cáo

Toàn bộ nội dung nghiên cứu, thiết kế, hiện thực hóa và đánh giá thực nghiệm của Đồ án Tốt nghiệp được tổ chức thành **7 chương** theo quy chuẩn học thuật của Khoa Khoa học và Kỹ thuật Máy tính – Trường Đại học Bách khoa – ĐHQG-HCM:

- **Chương 1: Giới thiệu** — Trình bày bối cảnh chuyển đổi số, bài toán đặt ra, mục tiêu nghiên cứu, đối tượng sử dụng, phạm vi, ranh giới hệ thống, phương pháp thực hiện cùng phân định đóng góp của nhóm thực hiện.
- **Chương 2: Phân tích các hệ thống có liên quan trên thị trường** — Khảo sát và phân tích các giải pháp SaaS thương mại và các hệ thống Web nội bộ hiện hữu; phân tích các điểm hạn chế và thiết lập luận cứ đề xuất giải pháp ứng dụng di động tích hợp và mở rộng.
- **Chương 3: Cơ sở lý thuyết và công nghệ** — Trình bày cơ sở lý thuyết về kiến trúc phần mềm, quản lý phiên và cơ chế bảo mật; phân tích đánh đổi kỹ thuật và lựa chọn ngăn xếp công nghệ cho ứng dụng di động cũng như các thành phần backend tích hợp.
- **Chương 4: Phân tích và đặc tả yêu cầu hệ thống** — Xác định các nhóm tác nhân, ma trận phân quyền; đặc tả chi tiết yêu cầu chức năng và phi chức năng cho các phân hệ tích hợp thuộc phạm vi đề tài.
- **Chương 5: Phân tích và thiết kế hệ thống** — Thiết kế cơ sở dữ liệu quan hệ trích xuất, kiến trúc chi tiết phía Mobile Client và Backend, cơ chế quản lý token và cầu nối xác thực dùng một lần qua In-App WebView.
- **Chương 6: Kết quả hiện thực và kiểm thử** — Trình bày giao diện và chức năng các phân hệ đã hiện thực; công bố kết quả kiểm thử tự động đa tầng, kiểm thử tương tranh và kiểm thử tích hợp trên thiết bị thực nghiệm.
- **Chương 7: Tổng kết và hướng phát triển** — Đánh giá mức độ hoàn thành nhiệm vụ, phân tích các hạn chế kỹ thuật còn tồn tại và đề xuất các định hướng nâng cấp, hoàn thiện tiếp theo.
