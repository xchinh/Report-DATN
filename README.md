# Đồ Án Tốt Nghiệp: Phát Triển Ứng Dụng Di Động Phục Vụ Nhân Sự Trường Đại Học

[![LaTeX Build](https://img.shields.io/badge/LaTeX-report-blue.svg)](main.tex)
[![Institution](https://img.shields.io/badge/HCMUT-CSE-00529C.svg)](https://cse.hcmut.edu.vn/)
[![Academic Year](https://img.shields.io/badge/Academic%20Year-2025--2026-green.svg)](#)

Báo cáo Đồ án Tốt nghiệp ngành **Khoa học Máy tính**, Khoa Khoa học và Kỹ thuật Máy tính – Trường Đại học Bách khoa – ĐHQG-HCM.

---

## 📌 Thông Tin Đề Tài

- **Tên đề tài**: *Phát triển ứng dụng di động phục vụ nhân sự Trường Đại học*
- **Mã học phần**: CO4337 (Đồ án tốt nghiệp) — Học kỳ 253 (Năm học 2025 – 2026)
- **Đơn vị đào tạo**: Khoa Khoa học và Kỹ thuật Máy tính, Trường Đại học Bách khoa – ĐHQG-HCM
- **Giảng viên hướng dẫn**: ThS. Nguyễn Thanh Tùng
- **Chủ tịch Hội đồng**: TS. Nguyễn Lê Duy Lai
- **Thư ký Hội đồng**: ThS. Trần Hồng Tài
- **Sinh viên thực hiện**:
  1. **Vũ Xuân Chính** — MSSV: `2210392`
  2. **Tống Duy Khang** — MSSV: `2211467`

---

## 📖 Tổng Quan Báo Cáo

Đề tài tập trung nghiên cứu, thiết kế, hiện thực hóa và kiểm thử ứng dụng di động **MyHCMUT** đa nền tảng (iOS & Android) phục vụ hơn 1.000 cán bộ, giảng viên và lãnh đạo Trường Đại học Bách khoa – ĐHQG-HCM. Ứng dụng đóng vai trò là một **Cổng di động tập trung**, tích hợp an toàn với hệ sinh thái dịch vụ Backend hiện hữu của Nhà trường thông qua REST API, WebSocket và Firebase Cloud Messaging (FCM).

### 5 Phân Hệ Chức Năng Cốt Lõi:
1. **Quản lý Hồ sơ Nhân sự (HRM)**: Tra cứu và cập nhật lý lịch 11 danh mục thông tin, Diff Viewer đối chiếu thay đổi, Form Wizard cập nhật hồ sơ, quy trình phê duyệt nghỉ phép & đi công tác.
2. **Văn phòng điện tử (iOffice)**: Tra cứu, quản trị và xem trước văn bản đến / văn bản đi (PDF viewer), theo dõi luồng xử lý văn bản nhanh chóng.
3. **Quản lý Nhiệm vụ (Missions/Tasks)**: Phân loại 5 trạng thái công việc, phân công nhiệm vụ, cập nhật tiến độ, gửi báo cáo giải trình.
4. **Lịch công tác & Điểm danh Cuộc họp**: Đồng bộ lịch tuần trường, lịch đơn vị và điểm danh cuộc họp theo thời gian thực (Real-time Socket.IO).
5. **Trung tâm Thông báo đẩy (FCM Notification Hub)**: Tiếp nhận thông báo tức thời, phân loại danh mục, điều hướng sâu (Deep Linking) đến màn hình nghiệp vụ tương ứng.

---

## 🏛️ Cấu Trúc Nội Dung Báo Cáo (8 Chương)

| Chương | Tên Chương | Nội Dung Tóm Tắt |
| :--- | :--- | :--- |
| **Chương 1** | **Giới thiệu** | Đặt vấn đề, mục tiêu, đối tượng, phạm vi & ranh giới nghiên cứu, ý nghĩa đề tài. |
| **Chương 2** | **Phân tích các hệ thống liên quan** | Khảo sát thị trường, đánh giá ưu/nhược điểm các giải pháp HRM/iOffice và đề xuất mô hình tích hợp di động. |
| **Chương 3** | **Cơ sở lý thuyết và công nghệ** | Tổng quan Flutter, Riverpod 3, Clean Architecture, Node.js/Express, PostgreSQL, FCM, Socket.IO. |
| **Chương 4** | **Phân tích yêu cầu hệ thống** | Đặc tả Persona, ma trận phân quyền RBAC, yêu cầu chức năng (FR) và phi chức năng (NFR). |
| **Chương 5** | **Đặc tả Use-Case và Biểu đồ hoạt động** | Sơ đồ Use-Case tổng thể, bảng đặc tả chi tiết 5 ca sử dụng cốt lõi, Activity & Sequence Diagrams. |
| **Chương 6** | **Phân tích và thiết kế hệ thống** | Thiết kế CSDL (ERD/Data Dictionary), kiến trúc tầng Mobile, bộ giải mã Token đa miền và mô hình vận hành E2E. |
| **Chương 7** | **Kết quả hiện thực và kiểm thử** | Giao diện hiện thực, kết quả kiểm thử tự động (Unit/Widget/Integration Tests), kiểm thử hiệu năng API & FCM. |
| **Chương 8** | **Tổng kết và hướng phát triển** | Tổng kết thành quả đạt được, đóng góp thực tiễn, hạn chế và kế hoạch mở rộng trong tương lai. |

---

## 📂 Cấu Trúc Thư Mục Repository

```text
├── Chapter1/             # Chương 1: Giới thiệu
│   ├── index.tex         # File nạp chính chương 1
│   └── section*.tex      # Các mục chi tiết
├── Chapter2/             # Chương 2: Phân tích các hệ thống liên quan
├── Chapter3/             # Chương 3: Cơ sở lý thuyết và công nghệ
├── Chapter4/             # Chương 4: Phân tích yêu cầu hệ thống
├── Chapter5/             # Chương 5: Đặc tả Use-Case và Biểu đồ hoạt động
├── Chapter6/             # Chương 6: Phân tích và thiết kế hệ thống
├── Chapter7/             # Chương 7: Kết quả hiện thực và kiểm thử
├── Chapter8/             # Chương 8: Tổng kết và hướng phát triển
├── docs/                 # Tài liệu đặc tả, blueprint & tài liệu tham khảo dự án
│   ├── THESIS_BLUEPRINT.md
│   ├── SYSTEM_OPERATION.md
│   ├── ARCHITECTURE_SCOPE.md
│   └── HUONG_DAN_CHI_TIET_VIET_8_CHUONG.md
├── img/                  # Sơ đồ kiến trúc, biểu đồ UML, ERD và ảnh minh họa
├── main.tex              # Mã nguồn tài liệu LaTeX chính (Root Document)
├── template.tex          # Cấu hình bìa, định dạng và quy chuẩn trình bày
├── reference.tex         # Danh mục tài liệu tham khảo
├── hcmut.png             # Logo Trường Đại học Bách khoa
├── .gitignore            # Cấu hình loại bỏ file rác biên dịch LaTeX
└── README.md             # Tài liệu giới thiệu tổng quan đồ án
```

---

## 🛠️ Hướng Dẫn Biên Dịch (Build LaTeX)

### 1. Yêu cầu hệ thống
- Phân phối TeX: **TeX Live** (Linux/Windows), **MacTeX** (macOS), hoặc **MiKTeX**.
- Gói bổ trợ tiếng Việt: `vntex`, `geometry`, `fancyhdr`, `tikz`, `algorithm2e`, `listings`, `hyperref`.

### 2. Biên dịch bằng dòng lệnh (Terminal)

Khuyến nghị sử dụng `latexmk` để tự động hóa quá trình biên dịch nhiều lượt (TOC, danh sách bảng, hình ảnh, trích dẫn):

```bash
# Biên dịch tài liệu ra file PDF
latexmk -pdf -interaction=nonstopmode main.tex

# Dọn dẹp các file phụ trợ sinh ra khi build
latexmk -c
```

Hoặc sử dụng `pdflatex`:

```bash
pdflatex -interaction=nonstopmode main.tex
pdflatex -interaction=nonstopmode main.tex
```

### 3. Biên dịch trên Visual Studio Code
1. Cài đặt Extension **LaTeX Workshop** (`James-Yu.latex-workshop`).
2. Mở file [main.tex](main.tex).
3. Nhấn tổ hợp phím `Ctrl + Alt + B` (Windows/Linux) hoặc `Cmd + Option + B` (macOS) để build PDF.
4. Xem trước PDF trực tiếp bằng lệnh `View LaTeX PDF`.

---

## 📄 Bản Quyền & Giấy Phép
Đồ án Tốt nghiệp thuộc sở hữu của nhóm tác giả và Bộ môn Khoa học Máy tính — Khoa Khoa học & Kỹ thuật Máy tính, Trường Đại học Bách khoa – ĐHQG-HCM. Phục vụ mục đích học thuật và nghiên cứu nội bộ.
