# Chapter 5 DBML Refactor Implementation Plan

**Goal:** Chuẩn hóa các DBML của Mục 5.3 theo schema thực tế, tạo ERD tổng quan cho hai miền dữ liệu và bổ sung mô tả bảng trong báo cáo.

**Scope:** Chỉ thay đổi nguồn DBML và nội dung Mục 5.3 trong bản LaTeX/Markdown; không sửa schema, backend hoặc các chương khác.

## Task 1: Chuẩn hóa nguồn DBML

- Tạo `docs/chapter5/schema-overview.dbml` cho ERD tổng quan rút gọn.
- Chuẩn hóa ba DBML HRM hiện có.
- Tách `schema-ioffice.dbml` thành ba DBML văn bản, nhiệm vụ, lịch–điểm danh.
- Phân biệt khóa ngoại vật lý và liên kết logic bằng màu và chú giải.
- Đối chiếu tên trường, kiểu dữ liệu và ràng buộc với hai live schema.

## Task 2: Cập nhật Mục 5.3

- Thay các nguồn hình Mermaid bằng ảnh xuất từ DBML, có placeholder khi chưa xuất ảnh.
- Bổ sung ERD cho công tác và ba nhóm dữ liệu iOffice.
- Trình bày từng bảng bằng từ điển dữ liệu chọn lọc: trường, kiểu PostgreSQL, ràng buộc vật lý và ý nghĩa/liên kết logic.
- Cập nhật đồng nhất `Chapter5/section3.tex` và `docs/CHAPTER_5_SYSTEM_DESIGN.md`.

## Task 3: Kiểm chứng

- Kiểm tra DBML bằng DBML CLI hoặc parser tương đương.
- Kiểm tra không còn `Ref` hoặc constraint bị mô tả sai.
- Build tài liệu LaTeX và kiểm tra tham chiếu/hình/bảng.
- Rà soát diff để bảo đảm không ghi đè thay đổi ngoài phạm vi.
