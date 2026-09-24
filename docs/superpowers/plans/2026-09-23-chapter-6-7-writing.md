# Chapter 6–7 Writing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Viết lại Chương 6 và Chương 7 của DATN MyHCMUT Mobile để kết quả hiện thực, kiểm thử và kết luận truy vết được về phạm vi Chương 1–5, không vượt quá bằng chứng hiện có.

**Architecture:** Chương 6.1 trình bày sản phẩm theo nghiệp vụ; Chương 6.2 đánh giá đúng phần đã kiểm tra, tách kiểm thử luồng khỏi unit/widget và nêu giới hạn. Chương 7 đối chiếu mục tiêu Chương 1 với kết quả Chương 6, rồi liên kết từng hạn chế với một hướng phát triển. Mã nguồn là nguồn kiểm kê nội bộ, không mặc định in vào báo cáo.

**Tech Stack:** LaTeX; nguồn truy vết Markdown trong `docs/chapter6-7-evidence/`; ảnh giao diện Android đã khử dữ liệu nếu sử dụng.

**Spec:** `docs/chapter6-7-evidence/07_prewrite_readiness_20260923.md` và `08_prewrite_claim_ledger_20260923.md`; phạm vi có hiệu lực là `main:14fe1f6` cộng hiệu chỉnh Chương 1/`UC-OFF-04` được người dùng duyệt trên nhánh viết báo cáo.

## Global Constraints

- Chỉ dùng các tệp thực sự được `\input` từ Chương 1–5; đối với Chương 4, công tác là `Chapter4/section2/hrm/business_trip.tex`, iOffice là `Chapter4/section2/ioffice_schedule/index.tex`. Chương 1/`UC-OFF-04` của nhánh báo cáo có hiệu chỉnh được người dùng duyệt sau `main:14fe1f6`.
- Nếu Chương 1–5 mâu thuẫn với hiện thực/bằng chứng, ghi vấn đề và lựa chọn cần người dùng quyết định trong bảng khẳng định; không tự sửa yêu cầu, không gọi sản phẩm đã đáp ứng phần đang mâu thuẫn.
- Mốc nền báo cáo `main:14fe1f6` cộng hiệu chỉnh phạm vi đã duyệt; nguồn mobile `7f90ac7`, APK Android build từ `a6a1dc6`, HRM BE `9e39ccc`, iOffice BE `4bfdb23`. Ghi đúng phiên bản cho từng kết quả, không gộp nhiều lần chạy.
- “Đã hiện thực”, “đã kiểm thử trong kịch bản”, “mang lại hiệu quả sử dụng” là ba loại khẳng định khác nhau; loại cuối cần dữ liệu người dùng/so sánh thực tế, hiện chưa có.
- Tình trạng **lịch sử theo tiêu chí lúc chạy** của 22 kịch bản: 2 Pass đầy đủ artifact, 8 đạt có giới hạn phạm vi/bằng chứng, 9 Fail, 3 Not Run. `OFF-04` Fail do tiêu chí tự hoàn thành sau 100% tiếp nhận đã bị thay thế; phải đánh giá `UC-OFF-04` mới theo từng nhánh, không giữ nhãn Fail hay chuyển thành Pass cho toàn UC. Không gọi 370 Flutter + 57 HRM BE test là 427 E2E hay kết quả CI toàn hệ thống.
- Với UC có kết quả hỗn hợp, tách hành vi Pass, Fail, chưa kiểm thử ngay trong ô bảng hoặc thành hàng riêng. Không gán Pass cho toàn UC; mọi Fail ảnh hưởng kết luận nghiệp vụ phải xuất hiện trong Chương 6 dù chỉ ở phần giới hạn.
- Chương 6 chọn lọc các luồng tiêu biểu và giới hạn quan trọng; mã kịch bản, commit, raw artifact và điều tra chi tiết giữ ở ma trận nội bộ, không mặc định đưa hết vào thân báo cáo.
- `OFF-01` là mã kịch bản quyền tệp, không phải `UC-OFF-01` của Chương 4. Quy tắc quyền tệp theo từng văn bản là chính sách người dùng xác nhận, chưa được phát biểu tường minh trong UC trên `main`.
- Không đưa ảnh chưa khử dữ liệu nhân sự, ticket, cookie hoặc token vào báo cáo hay commit. Không đưa benchmark FPS/RAM/API/FCM nếu thiếu log và phương pháp đo.
- Kế hoạch này **không cho phép chạy thêm test ghi dữ liệu**. Các nhánh bổ sung trong `04_test_execution_plan.md` cần được duyệt cùng fixture, quyền và cách khôi phục; nếu không chạy, chỉ hạ mức kết luận liên quan.
- Giữ nguyên mọi thay đổi có sẵn trong worktree; không sửa Chương 1–5, backend hoặc frontend trong đợt viết này. Không commit tự động.

## Review Focus

1. Một ảnh có màn hình nhưng thiếu hậu điều kiện API: chỉ chứng minh giao diện, không ghi luồng nghiệp vụ Pass.
2. Một kịch bản gồm nhánh Pass và Fail/Not Run: giữ kết quả từng nhánh, không gọi cả UC đạt.
3. Một biên bản không có raw log: ghi “theo biên bản” hoặc “đối chiếu mã”, không trình bày như phép đo độc lập tái lập được.
4. Một chức năng dùng WebView hoặc ứng dụng PDF ngoài: phân định phần mobile hiện thực với phần Web/hệ điều hành tái sử dụng.
5. Một test chạy trên commit khác APK hoặc một số liệu lịch sử: ghi phiên bản và giới hạn, không cộng thành một kết quả hiện tại thống nhất.

---

### Task 1: Chốt đầu vào và bảng khẳng định được phép

**Files:** Đọc `Chapter1/`, `Chapter4/section2/index.tex`, `Chapter4/section3.tex`, `Chapter5/`; đọc `docs/chapter6-7-evidence/{01_uc_fr_implementation_matrix.md,02_test_evidence_gap_matrix.md,06_locked_source_baseline_20260923.md,07_prewrite_readiness_20260923.md}` và `results/DATN-RERUN-20260923/{manifest.md,summary.md}`. Ghi bảng khẳng định ngắn ở `docs/chapter6-7-evidence/08_prewrite_claim_ledger_20260923.md`; không sửa LaTeX ở task này.

- [x] Xác nhận `main` vẫn ở mốc phạm vi dự kiến hoặc ghi mốc mới và đối chiếu thay đổi; xác nhận các tệp Chương 4 được `\input`.
- [x] Với từng nhóm hồ sơ, nghỉ phép, công tác, iOffice/nhiệm vụ, lịch và NFR, ghi trong bản nháp làm việc ba điều: phần hiện thực, bằng chứng kiểm thử, giới hạn câu chữ. Dùng hàng hiệu chỉnh của `01`/`02`, không dùng hàng Stage A lịch sử.
- [x] Đối chiếu lại số 2/8/9/3 và đơn vị đếm 370/57 với log `TEST-01`; nếu hồ sơ bằng chứng thay đổi sau kế hoạch này, cập nhật số liệu trước khi viết 6.2.
- [x] Chạy `git diff a6a1dc6 7f90ac7` trong repo mobile; xác định các hành vi bị ảnh hưởng trước khi áp dụng kết quả APK cho phiên bản báo cáo. Ghi rõ APK/hash và nguồn mobile khác commit; không mặc định tái lập kết quả trên build mới.
- [x] Liệt kê mâu thuẫn Chương 1–5 với hiện thực/bằng chứng trong bảng khẳng định, ghi nguồn mỗi phía và cách giới hạn câu chữ; đánh dấu quyết định cần người dùng duyệt. Không tự chỉnh Chương 1–5 để hợp thức hóa sản phẩm.
- [x] Kiểm tra danh sách ảnh định dùng; ảnh nào chưa khử thông tin nhạy cảm thì loại khỏi bản thảo cho đến khi có bản an toàn (hiện chưa duyệt ảnh nào để chèn).

**Điều kiện đạt:** Mỗi nhận định dự kiến có nguồn và cấp độ bằng chứng; phạm vi áp dụng kết quả APK đã được đối chiếu; mâu thuẫn được trình người dùng duyệt. Dừng sau Task 1 để người dùng kiểm tra bảng khẳng định trước khi viết 6.1.

### Task 2: Viết lại 6.1 — kết quả hiện thực theo nghiệp vụ

**Files:** Sửa `Chapter6/index.tex`, `Chapter6/section1.tex`; chỉ thêm ảnh an toàn vào thư mục ảnh báo cáo nếu thật sự dùng.

- [ ] Thay lời dẫn Chương 6: bỏ “chiến lược toàn diện 4 tầng” và “đo lường định lượng” vì chưa có bằng chứng tương ứng.
- [ ] Viết 6.1.1 một đoạn ngắn về mã nguồn/module và ranh giới mobile–backend, đối chiếu Chương 5; không lặp danh sách widget/package dài.
- [ ] Viết các mục hồ sơ; nghỉ phép; công tác; văn bản và nhiệm vụ; lịch và điểm danh. Mỗi mục nêu phạm vi đã hiện thực → một luồng/ảnh tiêu biểu nếu có → điểm kỹ thuật liên quan trực tiếp hoặc giới hạn. Nêu rõ hồ sơ cập nhật qua HRM WebView và tệp văn bản mở qua ứng dụng hệ điều hành, không gọi chúng là giao diện native tự phát triển hoàn toàn.
- [ ] Đặt xác thực, thông báo/điều hướng và WebView trong một mục hỗ trợ ngắn, hoặc lồng vào nghiệp vụ nếu như vậy tránh trùng Chương 5. Không coi thông báo là phân hệ nghiệp vụ chính.
- [ ] Loại bỏ khỏi 6.1 các phát biểu cũ không khớp phạm vi/hiện thực: wizard nghỉ phép “4 bước”, PDF văn bản nhúng `pdfrx`, nộp báo cáo nhiệm vụ trên mobile, Giải trình Web hoàn chỉnh, thời gian WebSocket `<50ms`, và tính năng KHCN ngoài phạm vi.
- [ ] Với những nhánh chỉ có mã/giao diện mà chưa kiểm thử đủ, dùng “đã hiện thực” thay vì “đã đáp ứng đầy đủ/hoạt động ổn định”.

**Điều kiện đạt:** 6.1 trả lời “nhóm đã xây dựng được gì”, phân định native/WebView/hệ thống nguồn; không biến ảnh giao diện thành bằng chứng Pass đầu–cuối.

### Task 3: Viết 6.2.1–6.2.2 — phương pháp và kiểm thử nghiệp vụ

**Files:** Sửa `Chapter6/section2.tex`, chỉ phần môi trường/phương pháp và bảng luồng nghiệp vụ.

- [ ] Trình bày mốc mã nguồn, APK/thiết bị Android thật, backend staging, hình thức unit/widget, API và kiểm thử thủ công đầu–cuối. Không ghi Pixel 6/iPhone 13 hoặc “4 E2E” nếu không có manifest và artifact phù hợp.
- [ ] Tạo bảng rút gọn `UC/FR → kịch bản → kết quả → phạm vi chứng minh/giới hạn`; chọn các luồng đại diện từ hồ sơ, nghỉ phép, công tác, văn bản/nhiệm vụ, lịch/điểm danh. Không chép toàn bộ ma trận kiểm kê nội bộ vào báo cáo.
- [ ] Nếu một UC có kết quả hỗn hợp, ghi riêng các hành vi đạt, lỗi và chưa chạy trong bảng hoặc đoạn giới hạn; không dùng nhãn “Đạt một phần” đứng một mình. Phản ánh mọi Fail làm thay đổi kết luận của nghiệp vụ đang trình bày.
- [ ] Ghi đúng nhãn **lịch sử**: 2 Pass đầy đủ artifact, 8 có giới hạn, 9 Fail, 3 Not Run theo kế hoạch lúc chạy; nếu sau này có rerun thì trình bày riêng số đã kiểm chứng kèm mốc. `OFF-04` Fail cũ không là kết quả nghiệm thu `UC-OFF-04` mới. Với Fail chỉ có biên bản/mã, nêu đúng nguồn bằng chứng.
- [ ] Đối với `OFF-04`, không kết luận toàn UC-OFF-01 đạt khi thiếu thông báo, recipient không hợp lệ và phân công từ mobile; không suy diễn UC-OFF-03 đã tạo nhiệm vụ liên kết chỉ từ mã. Với `OFF-01`, không gán kết quả cho UC-OFF-01.

**Điều kiện đạt:** Hội đồng đọc bảng thấy yêu cầu nào đã kiểm chứng, yêu cầu nào chỉ hiện thực/chưa chạy hoặc có lỗi, và trên phiên bản nào.

### Task 4: Viết 6.2.3–6.2.5 — test thành phần, NFR và giới hạn

**Files:** Tiếp tục sửa `Chapter6/section2.tex`.

- [ ] Tách hai hàng kết quả tự động theo repository và loại test: Flutter unit/widget **370/370**; HRM BE Vitest unit **57/57**. Nêu log, commit và môi trường, không cộng thành “427 kiểm thử toàn hệ thống đạt 100%” hoặc “CI Pass”.
- [ ] Đánh giá NFR-01 đến NFR-05 theo hành vi thực sự có bằng chứng: trạng thái lỗi mạng/khả năng thử lại; khả năng dùng trên Android; phân quyền backend; dữ liệu nguồn; tổ chức mã nguồn. `UI-01` Not Run nên không khẳng định kiểm thử khả dụng rộng; SCH-02/NET-01 có thông báo lỗi thô; AUTH-01 có lệch hợp đồng HTTP/body 401. Không gán yêu cầu “thông báo tiếng Việt” cho NFR-01 hiện hành nếu Chương 4 không nêu tiêu chí đó.
- [ ] Bỏ bảng latency API/FCM, FPS, RAM, startup, code coverage 70%/28.75% và kết luận “không memory leak” nếu không tìm được phương pháp đo cùng log đúng mốc. Không thay chúng bằng số ước lượng khác.
- [ ] Tổng hợp rõ kết quả đạt, Fail theo biên bản/đối chiếu, nhánh chưa chạy và giới hạn kiểm thử. LEV-05 chỉ được mô tả là bất thường số dư `-1` theo biên bản; chưa quy nguyên nhân chắc chắn cho thiếu khóa dòng hoặc giao dịch.

**Điều kiện đạt:** 6.2 chứng minh những gì đã kiểm tra, không ngụ ý 427 ca thành phần bao phủ 22 luồng nghiệp vụ hoặc mọi NFR.

### Task 5: Điểm cập nhật bằng chứng trước khi chốt Chương 6

**Files:** Chỉ cập nhật `Chapter6/section2.tex` và tài liệu bằng chứng liên quan **nếu** người dùng đã duyệt kiểm thử bổ sung và có kết quả mới.

- [ ] Nếu có rerun hợp lệ: kiểm tra commit, thời điểm, tài khoản bí danh, fixture, kết quả thô, khôi phục và mức áp dụng; cập nhật ma trận `02`/summary trước rồi mới cập nhật câu kết luận ở 6.2.
- [ ] Nếu không có rerun hoặc ca bị Fail/Blocked: giữ câu kết luận ở mức bằng chứng cũ, không trì hoãn vô hạn việc hoàn thành báo cáo; nêu rõ giới hạn ở 6.2 và Chương 7.
- [ ] Không tự chạy các nhánh mới có ghi dữ liệu trong `OFF-04` hay các ca LEV/PRO/BTR chỉ vì đang viết báo cáo; điểm duyệt kế hoạch kiểm thử là riêng biệt.

**Điều kiện đạt:** Mỗi thay đổi số liệu/kết luận ở 6.2 có artifact và phiên bản tương ứng; không trộn nhiều đợt chạy.

### Task 6: Viết lại Chương 7 từ kết quả Chương 6

**Files:** Sửa `Chapter7/index.tex`, `Chapter7/section1.tex`.

- [ ] Tổ chức thành ba mục: **7.1 Kết quả đạt được**, **7.2 Hạn chế**, **7.3 Hướng phát triển**. 7.1 đối chiếu từng mục tiêu chính của Chương 1 với phần đã hiện thực và được kiểm chứng; không lặp danh sách framework, endpoint, màn hình.
- [ ] 7.2 tách chức năng chưa hoàn thiện, chức năng đã có nhưng chưa kiểm chứng đủ, và lỗi/giới hạn đã phát hiện. Ghi rõ ranh giới kiểm thử Android và ảnh hưởng của những kịch bản Fail; không biến hiện tượng kỹ thuật chưa giải thích thành nguyên nhân chắc chắn.
- [ ] 7.3 chỉ đề xuất việc giải quyết một hạn chế đã nêu ở 7.2, ưu tiên hoàn thiện nghiệp vụ/kiểm thử/phân quyền/xử lý lỗi hiện tại. Không bắt buộc thêm DPoP, CDC, tải 5.000 người hay “đóng góp khoa học” không có bằng chứng.
- [ ] Xóa nhận định giảm thời gian xử lý từ vài ngày xuống vài phút, “hiệu quả vượt trội”, “triệt để” và các kết luận hiệu năng/triển khai thực tế chưa đo.

**Điều kiện đạt:** Không có câu ở Chương 7 mạnh hơn kết quả Chương 6; mỗi hướng phát triển chỉ ra hạn chế mà nó giải quyết.

### Task 7: Rà soát chéo và biên dịch

**Files:** Chỉ sửa lỗi phát hiện trong `Chapter6/` và `Chapter7/`; không tự sửa Chương 1–5.

- [ ] Đối chiếu mã UC/FR, tên luồng, số bước wizard, vai trò và trạng thái với các tệp Chương 4 **được nạp**; kiểm tra phân định mobile/Web/backend với Chương 5.
- [ ] Nếu đối chiếu phát hiện mâu thuẫn mới ở Chương 1–5, cập nhật danh sách vấn đề chờ người dùng quyết định; giữ nguyên nguồn yêu cầu và ghi kết quả thực tế là chưa đáp ứng/chưa chứng minh, không âm thầm sửa đặc tả hay nâng mức kết luận.
- [ ] Kiểm tra nguồn từng số, ảnh đã khử thông tin và caption không suy diễn chức năng; tìm các phát biểu cũ như “427 E2E”, “CI 100%”, “4 E2E”, “58–60 FPS”, “vài phút”, “hoàn thành toàn diện”. Dùng `rg` để phát hiện, rồi đọc ngữ cảnh từng kết quả; không xem `rg` là bằng chứng đầy đủ.
- [ ] Chạy `git diff --check`; thử `latexmk -pdf -interaction=nonstopmode main.tex` theo `README.md`; kiểm tra tham chiếu hình/bảng và xem các trang Chương 6–7 trong PDF. Nếu thiếu công cụ hoặc build lỗi có sẵn, báo rõ phần chưa xác minh.
- [ ] Xem `git diff` cuối: chỉ các tệp báo cáo và ảnh an toàn được chủ động sửa; không xóa/ghi đè thay đổi có sẵn, không thêm mã thử nghiệm hoặc dữ liệu nhạy cảm.

**Điều kiện đạt:** LaTeX biên dịch được hoặc lỗi được báo cụ thể; câu chữ Chương 6–7 nhất quán với main và hồ sơ bằng chứng, không còn kết luận vượt phạm vi.

## Điểm duyệt

0. Duyệt **bảng khẳng định và danh sách xung đột sau Task 1** trước khi viết 6.1.
1. Duyệt bản thảo **6.1** trước khi hoàn thiện 6.2.
2. Duyệt các ca kiểm thử bổ sung **riêng** trong `04_test_execution_plan.md` trước khi chạy bất kỳ ca ghi dữ liệu nào; đây không phải điều kiện để tiếp tục viết phần có bằng chứng sẵn.
3. Duyệt **Chương 6 đã đối chiếu bằng chứng** trước khi chốt câu kết luận Chương 7.

**Cách thực hiện đề xuất:** một người viết lần lượt theo Task 1–7 và tự kiểm tra từng task; không cần phân công nhiều agent cho bộ LaTeX có phụ thuộc chặt giữa hai chương.
