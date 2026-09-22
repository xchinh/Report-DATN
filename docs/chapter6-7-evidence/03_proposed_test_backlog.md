# DANH SÁCH KIỂM THỬ ĐỀ XUẤT

## 1. Nguồn tạo backlog

- Ngày kiểm kê: 22/09/2026.
- Nhánh báo cáo: `rewrite-chapter-6`.
- Commit nền Stage A: `dba03c507f8629a16e3f9a1fdd7a494b81c2d729`.
- Nguồn duy nhất: các hàng trong `02_test_evidence_gap_matrix.md` có quyết định **Cần bổ sung**.
- Tài liệu này không cho phép chạy test; Giai đoạn B phải lập `04_test_execution_plan.md` và được người dùng duyệt trước.

## 2. Quy tắc ưu tiên

- **P0:** thiếu bằng chứng cho luồng nghiệp vụ chính, phân quyền, chuyển trạng thái hoặc tính toàn vẹn dữ liệu.
- **P1:** thiếu bằng chứng cho tích hợp quan trọng hoặc lỗi có thể ảnh hưởng trực tiếp đến kết luận.
- **P2:** khoảng trống rủi ro thấp, chỉ thực hiện khi còn thời gian.
- Mỗi hàng phải truy vết đến một mã hành vi trong tệp `02` và không được tạo thêm yêu cầu.

## 3. Danh sách P0

| Ưu tiên | UC/FR và hành vi | Lý do chọn | Kịch bản | Hình thức | Dữ liệu và vai trò | Môi trường | Kết quả mong đợi | Bằng chứng phải lưu | Điều kiện dừng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Danh sách P0 chỉ được tạo sau khi hoàn tất ma trận `02`.

## 4. Danh sách P1

| Ưu tiên | UC/FR và hành vi | Lý do chọn | Kịch bản | Hình thức | Dữ liệu và vai trò | Môi trường | Kết quả mong đợi | Bằng chứng phải lưu | Điều kiện dừng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Danh sách P1 chỉ được tạo sau khi hoàn tất ma trận `02`.

## 5. Danh sách P2

| Ưu tiên | UC/FR và hành vi | Lý do chọn | Kịch bản | Hình thức | Dữ liệu và vai trò | Môi trường | Kết quả mong đợi | Bằng chứng phải lưu | Điều kiện dừng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Danh sách P2 chỉ được tạo sau khi hoàn tất ma trận `02`.

## 6. Điều kiện chuyển sang Giai đoạn B

- Mọi hàng trong backlog truy vết được về quyết định **Cần bổ sung** trong `02`.
- P0/P1/P2 phản ánh rủi ro, không phản ánh mong muốn tăng số lượng test.
- Người dùng duyệt ba tài liệu Stage A trước khi tạo kế hoạch thực hiện chi tiết.
- Phê duyệt Stage A không phải quyền chạy test; tệp `04` cần một lần phê duyệt riêng.
