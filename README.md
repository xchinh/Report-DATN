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

Đề tài tập trung nghiên cứu, thiết kế, hiện thực hóa và kiểm thử ứng dụng di động **MyHCMUT** đa nền tảng (iOS & Android) phục vụ cán bộ, giảng viên và lãnh đạo Trường Đại học Bách khoa – ĐHQG-HCM. Ứng dụng đóng vai trò là một **cổng tương tác di động tập trung**, tích hợp với các hệ thống nghiệp vụ hiện hữu qua REST API, WebSocket và Firebase Cloud Messaging (FCM). HRM và iOffice vẫn là nguồn dữ liệu và nơi quyết định nghiệp vụ có thẩm quyền.

### 4 Phân Hệ Nghiệm Thu
1. **Xác thực và SSO**: Quản lý phiên Mobile, chuyển tiếp sang WebView bằng vé dùng một lần.
2. **Quản lý nhân sự (HRM)**: Hồ sơ cán bộ, nghỉ phép và đi công tác theo workflow do HRM backend kiểm soát.
3. **Văn phòng điện tử (iOffice)**: Văn bản, nhiệm vụ, lịch công tác và điểm danh cuộc họp theo quyền iOffice.
4. **Trung tâm thông báo**: Tiếp nhận thông báo và điều hướng sâu đến đối tượng nghiệp vụ.

KHCN, ký số PKI và họp trực tuyến WebRTC không thuộc phạm vi nghiệm thu vì chưa có hạ tầng backend tương ứng; chúng chỉ là hướng phát triển tương lai.

---

## 🏛️ Cấu Trúc Nội Dung Báo Cáo (7 Chương)

| Chương | Tên Chương | Nội Dung Tóm Tắt |
| :--- | :--- | :--- |
| **Chương 1** | **Giới thiệu** | Đặt vấn đề, mục tiêu, đối tượng, phạm vi & ranh giới nghiên cứu, ý nghĩa đề tài. |
| **Chương 2** | **Phân tích các hệ thống liên quan** | Khảo sát thị trường, đánh giá ưu/nhược điểm các giải pháp HRM/iOffice và đề xuất mô hình tích hợp di động. |
| **Chương 3** | **Cơ sở lý thuyết và công nghệ** | MVC, REST/HTTPS/JWT, Flutter, Melos, Node.js/Express, PostgreSQL, FCM và Socket.IO. |
| **Chương 4** | **Phân tích yêu cầu hệ thống** | Đặc tả Persona, ma trận phân quyền RBAC, yêu cầu chức năng (FR) và phi chức năng (NFR). |
| **Chương 5** | **Phân tích và thiết kế hệ thống** | Kiến trúc, dữ liệu, giao thức và các giải pháp kỹ thuật trọng yếu. |
| **Chương 6** | **Kết quả hiện thực và kiểm thử** | Chức năng đã hiện thực, kết quả tích hợp và bằng chứng kiểm thử. |
| **Chương 7** | **Tổng kết và hướng phát triển** | Đối chiếu mục tiêu, hạn chế và hướng hoàn thiện. |

---

## 📂 Cấu Trúc Thư Mục Repository

```text
├── Chapter1/             # Chương 1: Giới thiệu
│   ├── index.tex         # File nạp chính chương 1
│   └── section*.tex      # Các mục chi tiết
├── Chapter2/             # Chương 2: Phân tích các hệ thống liên quan
├── Chapter3/             # Chương 3: Cơ sở lý thuyết và công nghệ
├── Chapter4/             # Chương 4: Phân tích yêu cầu hệ thống
├── Chapter5/             # Chương 5: Phân tích và thiết kế hệ thống
├── Chapter6/             # Chương 6: Kết quả hiện thực và kiểm thử
├── Chapter7/             # Chương 7: Tổng kết và hướng phát triển
├── docs/                 # Tài liệu đặc tả, blueprint & tài liệu tham khảo dự án
│   ├── THESIS_BLUEPRINT.md
│   ├── SYSTEM_OPERATION.md
│   ├── ARCHITECTURE_SCOPE.md
│   ├── 01_GATE0_EVIDENCE_INDEX.md
│   ├── 02_SCOPE_CLAIM_TRACEABILITY.md
│   ├── DOCUMENTATION_GOVERNANCE.md
│   ├── 12_BASELINE_REPRODUCIBILITY_AUDIT.md
│   ├── 13_CURRENT_SOURCE_SNAPSHOT.md
│   └── 14_REPORT_7_CHAPTER_AUDIT.md
├── image/                # Thư mục hình ảnh báo cáo (logo, theory, usecase, architecture, erd, uml)
├── main.tex              # Mã nguồn tài liệu LaTeX chính (Root Document)
├── reference.tex         # Danh mục tài liệu tham khảo
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
