# Kế hoạch Thực thi Hiệu chỉnh & Đồng bộ Báo cáo ĐATN (Chương 1 đến Chương 5)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Hiệu chỉnh, đồng bộ và hoàn thiện nội dung các Chương 1, 3, 4, 5 của Luận văn tốt nghiệp MyHCMUT Mobile, khử toàn bộ rủi ro kỹ thuật, làm rõ ranh giới đóng góp thực tế và trả lời thuyết phục 5 câu hỏi phản biện trọng tâm của Hội đồng.

**Architecture:** Bám sát hiện trạng mã nguồn thực tế tại baseline commit `myhcmut-mobile:4fe5d9c`, `hrm-be:38745a26`, `ioffice-be:53f069a`. Chuẩn hóa ranh giới hệ thống: Phát triển mới (Mobile Flutter, Multi-Domain Auth, SSO Bridge, Unified Calendar Adapter) $\leftrightarrow$ Mở rộng (API mobile chuyên biệt, Advisory Lock) $\leftrightarrow$ Kế thừa (Core Backend, CSDL PostgreSQL).

**Tech Stack:** LaTeX (KOMA-Script / TeXLive / MikTeX), Flutter 3.41, Dart 3.11, Riverpod 3, Dio, NodeJS Express, PostgreSQL 14, Redis 7.

**Spec:** [docs/superpowers/specs/2026-09-19-chapter-1-5-refinement-spec.md](file:///home/xchinh/orca/workspaces/HK253_DATN_341_2211467_2210392/merge-chapter-5/docs/superpowers/specs/2026-09-19-chapter-1-5-refinement-spec.md)

## Global Constraints

- Không suy diễn hoặc đưa vào báo cáo các cơ chế/lớp kiến trúc không tồn tại trong source code (không thêm tầng `Repository` vào module hồ sơ, không khẳng định có `FOR UPDATE` trên `tcns_so_nghi_phep_nam`, không khẳng định có `UNIQUE` constraint trên `schedule_meeting_attendance`).
- Phân công của Vũ Xuân Chính (2210392) tập trung chính xác vào: Thiết kế và hiện thực phân hệ Hồ sơ lý lịch, phân hệ Quản lý Nghỉ phép, phân hệ Thông báo và phân hệ Lịch làm việc tổng hợp.
- Giữ nguyên cấu trúc thư mục LaTeX hiện tại (`Chapter1/`, `Chapter3/`, `Chapter4/`, `Chapter5/`), đảm bảo biên dịch `latexmk -pdf main.tex` đạt 0 lỗi.

---

### Task 1: Hiệu chỉnh Chương 1 — Phân công nhiệm vụ & Định vị bài toán thực tế

**Files:**
- Modify: `Chapter1/section1.tex:75-102`

**Interfaces / Requirements:**
- Cập nhật Bảng 1.1: Vũ Xuân Chính chịu trách nhiệm thiết kế và hiện thực 4 phân hệ: Hồ sơ lý lịch, Quản lý Nghỉ phép, Thông báo, Lịch làm việc tổng hợp.
- Tách biệt bài toán thực tế (khó khăn của người dùng khi sử dụng hệ thống web rời rạc trên di động) khỏi giải pháp kỹ thuật (Flutter, REST API).

- [ ] **Step 1: Cập nhật Bảng phân công nhiệm vụ và đóng góp trong `Chapter1/section1.tex`**
- [ ] **Step 2: Rà soát và tinh chỉnh lời dẫn mục tiêu đề tài trong Section 1.2**
- [ ] **Step 3: Kiểm tra biên dịch LaTeX phần Chương 1**

---

### Task 2: Hiệu chỉnh Chương 3 — Chuẩn hóa Kiến trúc Backend & Phân định Công nghệ

**Files:**
- Modify: `Chapter3/section1.tex`
- Modify: `Chapter3/section2.tex`

**Interfaces / Requirements:**
- Định nghĩa lại kiến trúc Backend: Kiến trúc phân tầng dựa trên MVC mở rộng (`Route/Middleware -> Controller -> Service -> Model`).
- Phân loại rõ: Công nghệ do nhóm triển khai/cấu hình (Flutter, Riverpod, Melos, In-App WebView Bridge) vs Công nghệ nền tảng kế thừa (PostgreSQL 14, NodeJS Express, Redis 7).

- [ ] **Step 1: Cập nhật thuật ngữ kiến trúc backend trong `Chapter3/section1.tex`**
- [ ] **Step 2: Phân định danh mục công nghệ tự làm vs kế thừa trong `Chapter3/section2.tex`**
- [ ] **Step 3: Kiểm tra biên dịch LaTeX phần Chương 3**

---

### Task 3: Hiệu chỉnh Chương 4 — Khớp nối Yêu cầu với Thiết kế Chương 5

**Files:**
- Modify: `Chapter4/section1.tex`
- Modify: `Chapter4/section3.tex`

**Interfaces / Requirements:**
- Khớp nối các yêu cầu cơ sở: `UC-AUTH-03` (SSO WebView), `UC-SCH-02` (Lịch tổng hợp), `NFR-OFFLINE-01` (SWR Caching).
- Làm rõ nguyên tắc: Phân quyền phải được thực thi tại Backend Middleware (`req.permissions.check`), Mobile chỉ đóng vai trò UX Gating.
- Làm rõ đặc tả luồng cập nhật hồ sơ: Cập nhật trực tiếp (SĐT) và đề xuất thẩm định (học vị) là 2 thao tác độc lập, xử lý Partial Success rõ ràng.

- [ ] **Step 1: Bổ sung/đồng bộ các use case và NFR tương ứng cho SSO, Lịch tổng hợp, Cache trong `Chapter4/section1.tex` và `section3.tex`**
- [ ] **Step 2: Bổ sung khẳng định thực thi phân quyền tại Backend trong đặc tả use case**
- [ ] **Step 3: Kiểm tra biên dịch LaTeX phần Chương 4**

---

### Task 4: Hiệu chỉnh Chương 5 Mục 5.1 — Kiến trúc Tổng thể & Quyết định Direct Multi-Domain

**Files:**
- Modify: `Chapter5/section1.tex`

**Interfaces / Requirements:**
- Bổ sung lý giải kiến trúc: Tại sao chọn Direct Multi-Domain thay vì BFF (bảo tồn Bounded Context, tránh SPOF, giảm chi phí vận hành).
- Phân định rõ 3 vùng: Phát triển mới, Mở rộng, Kế thừa.
- Hạ vai trò Redis xuống mức hạ tầng phụ trợ lưu vé SSO tạm thời (TTL 60s) và session store.

- [ ] **Step 1: Cập nhật nội dung lý giải kiến trúc và phân định 3 vùng trong `Chapter5/section1.tex`**
- [ ] **Step 2: Kiểm tra tính nhất quán với sơ đồ Hình 5.1**

---

### Task 5: Hiệu chỉnh Chương 5 Mục 5.2 — Kiến trúc Mobile & Luồng SWR Hồ sơ Cá nhân

**Files:**
- Modify: `Chapter5/section2.tex`

**Interfaces / Requirements:**
- Loại bỏ chữ `Repository` khỏi luồng chung của Mobile: `View -> Provider -> Network/Cache -> API`.
- Trình bày chính xác luồng SWR của Hồ sơ cá nhân: `View -> profileInfoProvider -> fetchWithCacheFirst -> hrmDioProvider -> API`.

- [ ] **Step 1: Cập nhật luồng kiến trúc mobile và loại bỏ tầng Repository trong `Chapter5/section2.tex`**
- [ ] **Step 2: Cập nhật mô tả luồng SWR Hồ sơ cá nhân khớp với source code Flutter**

---

### Task 6: Hiệu chỉnh Chương 5 Mục 5.3 — Mô hình Dữ liệu Tích hợp (Loại bỏ Khóa & Transaction)

**Files:**
- Modify: `Chapter5/section3.tex`

**Interfaces / Requirements:**
- Đổi lời dẫn thành "Mô hình dữ liệu và phân định ranh giới lưu trữ phục vụ tích hợp".
- Phân biệt rõ bảng kế thừa (HRM/iOffice) vs bảng phục vụ mobile (`fw_user_device_token`, SQLite master data).
- Xử lý mục Nghỉ phép (5.3.3): Hoàn toàn KHÔNG đưa các nội dung về khóa (advisory lock, row lock) hay transaction CSDL vào báo cáo; mô tả rõ luồng mobile gửi yêu cầu qua REST API và backend quản lý việc cập nhật theo nghiệp vụ Nhà trường.
- Xử lý mục Điểm danh (5.3.5): Trình bày đúng hiện trạng ứng dụng gửi yêu cầu điểm danh qua API, backend iOffice kiểm tra quyền và ghi nhận kết quả; không suy diễn về ràng buộc CSDL.

- [ ] **Step 1: Cập nhật lời dẫn và phân loại nguồn gốc bảng trong `Chapter5/section3.tex`**
- [ ] **Step 2: Đảm bảo mục 5.3.3 và 5.3.5 không chứa nội dung về khóa và transaction, chỉ mô tả thực thể và tương tác qua API**

---

### Task 7: Hiệu chỉnh Chương 5 Mục 5.4 — Tích hợp Hệ thống (One-Time Ticket SSO & Lịch Đa nguồn)

**Files:**
- Modify: `Chapter5/section4.tex`

**Interfaces / Requirements:**
- Tách bạch 2 bước One-Time Ticket SSO: Tiêu thụ vé nguyên tử qua Redis `getDel` vs Thiết lập Web Session (`regenerate`). Bổ sung xử lý lỗi (hết hạn, dùng lại, lỗi tạo session) và URL stripping.
- Phân tích quy tắc phân vùng ID âm trong Lịch tổng hợp (`-id` và `-(1000000+id)`), chỉ ra giới hạn $<10^6$ và đề xuất giải pháp Compound ID dài hạn.

- [ ] **Step 1: Cập nhật chi tiết quy trình SSO One-Time Ticket và kịch bản lỗi trong `Chapter5/section4.tex`**
- [ ] **Step 2: Cập nhật phân tích kỹ thuật quy tắc ID âm và cách ly lỗi (Fault Isolation) trong `Chapter5/section4.tex`**

---

### Task 8: Đồng bộ Tài liệu Markdown Chương 5

**Files:**
- Modify: `docs/CHAPTER_5_SYSTEM_DESIGN.md`

**Interfaces / Requirements:**
- Cập nhật toàn bộ nội dung Markdown của Chương 5 khớp 100% với các file `Chapter5/section*.tex`.

- [ ] **Step 1: Cập nhật `docs/CHAPTER_5_SYSTEM_DESIGN.md`**

---

### Task 9: Biên dịch & Kiểm tra Toàn vẹn Hệ thống

**Files:**
- Execute: `latexmk -pdf main.tex`

**Interfaces / Requirements:**
- Biên dịch toàn bộ tài liệu luận văn tốt nghiệp, đạt 0 lỗi biên dịch (0 LaTeX errors).
- Kiểm tra các liên kết nhãn `\ref` và bảng biểu không bị undefined.

- [ ] **Step 1: Thực thi lệnh biên dịch `latexmk -pdf main.tex`**
- [ ] **Step 2: Xác nhận tài liệu PDF được tạo thành công và làm sạch các file tạm nếu cần**
