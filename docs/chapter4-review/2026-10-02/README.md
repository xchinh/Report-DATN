# Nội dung Chương 4 đã áp dụng — 02/10/2026

**Trạng thái: đã cập nhật các tệp Chương 4 và biên dịch báo cáo chính.**

- Báo cáo đầy đủ và PDF riêng Chương 4 đã được biên dịch, render và kiểm tra cục bộ; PDF build bị loại khỏi repository theo quy tắc `*.pdf` trong `.gitignore`.
- [Nguồn LaTeX Chương 4 đã áp dụng](chapter4-applied.tex)
- [Điểm vào Chương 4 trong báo cáo](../../../Chapter4/index.tex)

## Nội dung đã cập nhật

- Áp dụng nội dung đã duyệt cho người dùng/phân quyền, phạm vi hồ sơ, nghỉ phép, công tác, văn phòng số và lịch; giữ các bảng FR, 20 đặc tả UC và các sơ đồ.
- Khôi phục Bảng 4.1, ảnh activity điểm danh và kết luận chương cũ.
- Đổi UC-SCH-02 thành “Xem lịch làm việc tổng hợp”, mở từ mục “Lịch biểu”; rút Bảng 4.28 còn nhánh và ý nghĩa.
- Bỏ mục quy tắc nghiệp vụ công tác BR-BT-01 đến BR-BT-06.
- Mô tả cách kiểm thử theo thuật ngữ của Chương 6: kiểm thử các luồng nghiệp vụ trên hệ thống tích hợp.

## Kiểm tra bản dựng

- Chương 4: 37 trang PDF; trang vật lý 46–82 của báo cáo.
- Báo cáo đầy đủ: 153 trang PDF, còn vượt giới hạn 150 trang 3 trang.
- Có 25 yêu cầu chức năng, 20 use case, 5 yêu cầu phi chức năng và 15 hình; mục BR công tác đã bỏ.
- `latexmk` hoàn tất; không còn tham chiếu chưa xác định, nhãn trùng hoặc float vượt trang. Các trang Chương 4 đã được render và kiểm tra bố cục.

Bằng chứng kiểm thử liên quan: [audit Chương 4–6](../../chapter6-7-evidence/13_chapter4_chapter6_claim_audit_20261002.md), [quyết định cập nhật](../../chapter6-7-evidence/14_retest_and_rewrite_gate_20261002.md), [kiểm thử hồ sơ](../../chapter6-7-evidence/results/DATN-RETEST-20261002/e2e-profile-read-validation.json), [nghỉ phép](../../chapter6-7-evidence/results/DATN-RETEST-20261002/e2e-leave-draft.json), [công tác](../../chapter6-7-evidence/results/DATN-RETEST-20261002/e2e-trip-draft.json), [tạo lịch và điểm danh](../../chapter6-7-evidence/results/DATN-RETEST-20261002/e2e-school-create-attendance.json).
