# Kế hoạch Chuẩn hóa Cơ sở Lý thuyết Mục 3.1 và Ranh giới Công nghệ 3.2.2

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Chuẩn hóa toàn bộ cơ sở lý thuyết Mục 3.1 trong tài liệu quy hoạch (`docs/`) và mã nguồn LaTeX (`Chapter3/section1.tex`), loại bỏ triệt để hiện tượng lấn sân sang Chương 4, 5, 6; đồng thời điều chỉnh Mục 3.2.2 (`Chapter3/section2.tex`) để phân định rành mạch giữa nguyên lý lý thuyết và hiện thực công nghệ.

**Architecture:** Bố cục 4 tiểu mục chuẩn mực cho Mục 3.1: (1) Mô hình MVC kết hợp Controller–Service–Model phía Backend và vị trí độc lập của Mobile Client; (2) Nguyên lý lý thuyết của Kiến trúc Hướng phân hệ (Modular Architecture) độc lập với công cụ; (3) Kiến trúc giao tiếp RESTful API tách bạch với giao thức bảo mật đường truyền HTTPS/TLS; (4) Cơ chế quản lý phiên phi trạng thái với thẻ bài JWT (nhấn mạnh tính toàn vẹn chữ ký HMAC-SHA256, không mã hóa dữ liệu payload, phân tích sự đánh đổi). Tại Mục 3.2.2, giữ bảng so sánh công nghệ (Monolith vs Polyrepo vs Modular Monorepo với Melos) và mô tả cấu trúc `apps/`, `modules/`, `packages/`.

**Spec Reference:**
- `docs/THESIS_BLUEPRINT.md`
- `docs/HUONG_DAN_CHI_TIET_VIET_7_CHUONG.md`
- `docs/09B_CHAPTER_3_THEORETICAL_FOUNDATION.md`
- Các luận văn tham chiếu cùng GVHD ThS. Nguyễn Thanh Tùng: `docs/datn_khoa.md`, `docs/datn_thien_tuan.md`

## Global Constraints
- **Nguyên tắc phân định ranh giới (Separation of Concerns):** 
  - Mục 3.1 thuần túy là lý thuyết, nguyên lý, tiêu chuẩn và giao thức; KHÔNG chứa tên thư mục mã nguồn (`features/auth`), KHÔNG chứa tên biến cấu hình (`AUTH_JWT_SECRET`), KHÔNG chứa code thuật toán lock, KHÔNG chứa sơ đồ use case / use case của Chương 4, KHÔNG chứa thiết kế chi tiết của Chương 5.
  - Mục 3.2.2 là quyết định lựa chọn công nghệ và triển khai thực tế trên Mobile bằng Melos.
- **Tính chính xác học thuật:**
  - JWT chuẩn JWS: Payload chỉ encode Base64URL, không mã hóa bảo mật dữ liệu; chữ ký HMAC-SHA256 (hoặc RSA/ECDSA) bảo đảm tính toàn vẹn (Integrity) và xác thực nguồn gốc (Authenticity).
  - Vị trí của Mobile: Là client độc lập bổ trợ (Mobile-first), không thay thế hoàn toàn WebApp; WebApp vẫn tồn tại phục vụ quy trình chuyên sâu và được tái sử dụng qua In-App WebView.
  - Phân tầng xử lý Backend: Route/Middleware $\to$ Controller $\to$ Service (tập trung logic nghiệp vụ) $\to$ Model (ánh xạ CSDL qua ORM).

---

### Giai đoạn 1: Điều chỉnh tài liệu quy hoạch trong `docs/`

#### Task 1: Cập nhật tài liệu định hướng và ranh giới học thuật trong `docs/`

**Files:**
- Modify: `docs/THESIS_BLUEPRINT.md:115-130`
- Modify: `docs/HUONG_DAN_CHI_TIET_VIET_7_CHUONG.md:44-60`
- Modify: `docs/09B_CHAPTER_3_THEORETICAL_FOUNDATION.md:13-35`
- Modify: `docs/ARCHITECTURE_SCOPE.md:164-168`

- [x] **Step 1.1: Cập nhật `docs/THESIS_BLUEPRINT.md`**
  - Cập nhật nhánh đề mục `Chapter3/`:
    - 3.1.1: Mô hình Kiến trúc MVC (Controller–Service–Model phía Backend và vai trò độc lập của Mobile Client).
    - 3.1.2: Kiến trúc Hướng Phân hệ (Nguyên lý module hóa theo miền nghiệp vụ, High Cohesion, Loose Coupling).
    - 3.1.3: Kiến trúc Giao tiếp RESTful API và Giao thức HTTPS (Tách biệt phong cách thiết kế API và an toàn đường truyền TLS).
    - 3.1.4: Cơ chế Quản lý Phiên không trạng thái và Xác thực Thẻ bài JWT (Bản chất chữ ký số, tính toàn vẹn, giới hạn và phân tích đánh đổi).
    - 3.2.2: Hiện thực tổ chức mã nguồn Modular Monorepo với Melos (Bảng so sánh 3 mô hình, cấu trúc `apps/`, `modules/`, `packages/`).

- [x] **Step 1.2: Cập nhật `docs/HUONG_DAN_CHI_TIET_VIET_7_CHUONG.md`**
  - Đồng bộ bảng tổng hợp cấu trúc 7 chương tại dòng Chương 3.
  - Cập nhật mục 44-60 mô tả chi tiết 4 tiểu mục của 3.1 và nhiệm vụ cụ thể của 3.2.2.

- [x] **Step 1.3: Cập nhật `docs/09B_CHAPTER_3_THEORETICAL_FOUNDATION.md`**
  - Bổ sung các lưu ý học thuật quan trọng:
    - Bẫy phản biện về JWT: Base64URL vs Encryption; chữ ký bảo vệ toàn vẹn.
    - Bẫy phản biện về Mobile vs Web: Mobile là kênh truy cập bổ trợ, không thay thế hoàn toàn WebApp.
    - Bẫy phản biện về MVC: Tách rõ Controller – Service – Model.
    - Bẫy phản biện về Modular: Nguyên lý kiến trúc (3.1.2) tách rời công cụ Melos (3.2.2).

- [x] **Step 1.4: Cập nhật `docs/ARCHITECTURE_SCOPE.md`**
  - Khớp lại tóm tắt nội dung Chương 3 trong bảng ma trận đối chuẩn kiến trúc.

---

### Giai đoạn 2: Điểm dừng chờ phê duyệt từ Người dùng (User Approval Gate)

- [x] **Checkpoint 1:** Trình bày kết quả cập nhật tài liệu `docs/` cho người dùng. Đã nhận phê duyệt qua chính sách tự động duyệt artifact.

---

### Giai đoạn 3: Viết và tinh chỉnh nội dung mã nguồn LaTeX

#### Task 2: Viết lại Mục 3.1 trong `Chapter3/section1.tex`

**Files:**
- Modify: `Chapter3/section1.tex`

- [x] **Step 2.1: Viết Mục 3.1.1 Mô hình Kiến trúc MVC (Model – View – Controller)**
  - Trình bày định nghĩa MVC kinh điển và nguyên lý Separation of Concerns.
  - Làm rõ chuỗi xử lý backend: Router/Middleware $\to$ Controller $\to$ Service $\to$ Model.
  - Định vị vai trò Mobile: Client độc lập hiển thị giao diện qua Flutter Widgets, tiêu thụ dữ liệu JSON từ API; các WebApp hiện hữu tiếp tục vận hành phục vụ các chức năng chuyên sâu.

- [x] **Step 2.2: Viết Mục 3.1.2 Kiến trúc Hướng Phân hệ (Modular Architecture)**
  - Đặt vấn đề hạn chế của Package-by-Layer khi hệ thống mở rộng.
  - Trình bày nguyên lý Package-by-Feature / Module hóa miền nghiệp vụ.
  - Phân tích tính kết dính cao (High Cohesion) và giảm phụ thuộc chéo (Loose Coupling).
  - Khái quát cách thức module hóa giúp mở rộng quy mô phát triển mà không bị trói buộc vào một công cụ cụ thể.

- [x] **Step 2.3: Viết Mục 3.1.3 Kiến trúc Giao tiếp RESTful API và Giao thức HTTPS**
  - Tách bạch rõ 2 tầng: Tầng ứng dụng (RESTful API) và Tầng giao vận (HTTPS/TLS).
  - Phân tích các nguyên tắc thiết kế REST (Stateless, Resources, URI, HTTP Verbs GET/POST/PUT/PATCH/DELETE, Status Codes).
  - Phân tích vai trò của định dạng JSON cho môi trường di động.
  - Phân tích cơ chế mã hóa đường truyền HTTPS/TLS (bảo đảm Confidentiality và Integrity, chống MITM).

- [x] **Step 2.4: Viết Mục 3.1.4 Cơ chế Quản lý Phiên không trạng thái và Xác thực Thẻ bài (JWT)**
  - Phân tích sự cần thiết của quản lý phiên khi HTTP phi trạng thái.
  - So sánh Stateful Session (Cookie) và Stateless Token-based; chỉ rõ lý do phù hợp khi Client giao tiếp với nhiều backend độc lập.
  - Phân tích cấu trúc chuẩn JWT (RFC 7519: Header, Payload, Signature).
  - Nhấn mạnh bản chất: Payload encode Base64URL (không mã hóa bí mật); chữ ký số HMAC-SHA256 bảo đảm tính toàn vẹn và xác thực nguồn phát.
  - Phân tích sự đánh đổi và thách thức: Thu hồi token tức thì, quản lý thời hạn (exp), quản lý khóa bí mật giữa các dịch vụ.

#### Task 3: Tinh chỉnh Mục 3.2.2 trong `Chapter3/section2.tex`

**Files:**
- Modify: `Chapter3/section2.tex:37-46`

- [x] **Step 3.1: Bổ sung Bảng so sánh các mô hình tổ chức mã nguồn Mobile**
  - Bảng so sánh 3 cột: *Dự án Flutter đơn khối (Monolith)*, *Đa kho mã nguồn độc lập (Polyrepo)*, và *Mô hình Modular Monorepo với Melos*.
  - Tiêu chí: Tái sử dụng hạ tầng, cô lập kiểm thử, quản lý phiên bản/dependency, tính phức tạp cấu hình.
- [x] **Step 3.2: Trình bày cấu trúc hiện thực `apps/`, `modules/`, `packages/` và vai trò của Melos**
  - Trình bày vai trò của từng nhóm thư mục trên Mobile.
  - Nêu quy tắc phụ thuộc giữa các module (không gọi chéo trực tiếp, giao tiếp qua contract/core).
  - Nêu cơ chế Melos hỗ trợ quản lý workspace, bootstrap liên kết nội bộ và chạy script tự động.

---

### Giai đoạn 4: Kiểm thử và Biên dịch Tài liệu (Verification)

#### Task 4: Biên dịch PDF và Kiểm tra Tính Toàn vẹn

**Files:**
- Output: `main.pdf`

- [x] **Step 4.1: Biên dịch LaTeX với `latexmk`**
  - Lệnh: `latexmk -pdf main.tex`
  - Đảm bảo thoát với mã 0, không có lỗi nghiêm trọng (Zero Fatal Errors).
- [x] **Step 4.2: Kiểm tra cảnh báo tham chiếu chéo (Cross-references)**
  - Đã khắc phục triệt để các cảnh báo tham chiếu chéo (`chap:thietke_hethong` và `sec:hethong_ngam_tichhop`).
- [x] **Step 4.3: Kiểm tra định dạng thị giác và số trang**
  - Báo cáo hoàn chỉnh 145 trang, biên dịch sạch sẽ không có lỗi.
