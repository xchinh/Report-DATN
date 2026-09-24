# KẾT QUẢ KIỂM THỬ: PRO-02

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `PRO-02` — Xử lý từng nội dung của đề xuất hồ sơ |
| Tiêu chí | `FR-PRO-03-B02`, `UC-PRO-03-B02`, `UC-PRO-03-B03` |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | HRM BE port 6023 (commit `9e39ccc2`) |
| Tester | Admin / `TCCB-A` |
| Trạng thái kịch bản | **Pass có giới hạn phạm vi (Pass kiểm soát quyền/tham số; Bằng chứng hạn chế cho đối chiếu trước–sau)** |

---

## 1. Kết quả chi tiết theo từng nhánh kịch bản

| Nhánh kiểm thử | Kỳ vọng kế hoạch | Kết quả thực tế | Trạng thái nhánh |
| --- | --- | --- | :---: |
| **Nhánh 1: Kiểm soát phân quyền thẩm định** | Cán bộ không có quyền `TCNS_REQUEST_LY_LICH.WRITE` bị backend từ chối thao tác | Gọi endpoint duyệt/từ chối với tài khoản `CB-B` không đủ quyền -> Backend từ chối với HTTP 401/403 | **Pass** |
| **Nhánh 2: Xác thực tham số bắt buộc** | Yêu cầu thiếu `detailId` hoặc thiếu lý do từ chối phải bị từ chối với mã lỗi hợp lệ | Gửi `PUT /api/staff/ly-lich/request/detail/reject` thiếu `detailId` -> Backend phản hồi `status: 400`, `message: "Thiếu detailId"` | **Pass** |
| **Nhánh 3: Xử lý duyệt/từ chối từng trường độc lập** | Cấp thẩm quyền duyệt nội dung 1, từ chối nội dung 2 có lý do; trạng thái từng trường và hồ sơ được cập nhật tương ứng | Backend hỗ trợ cập nhật trạng thái chi tiết của từng trường trong đề xuất (`/detail/approve` và `/detail/reject`). **Tuy nhiên, biên bản chưa ghi nhận mã ID đề xuất cụ thể và thiếu snapshot đối chiếu trạng thái từng trường và hồ sơ chính thức trước–sau** | **Bằng chứng hạn chế** |

---

## 2. Ranh giới khẳng định & Kết luận

- **Phạm vi đã chứng minh:** Backend HRM kiểm soát phân quyền chặt chẽ theo vai trò thẩm định hồ sơ và xác thực nghiêm ngặt các trường tham số đầu vào của API xử lý chi tiết.
- **Giới hạn kết luận:** Do đợt chạy này thiếu metadata chi tiết (ID đề xuất, log đối chiếu trạng thái từng trường trước và sau khi xử lý), kết luận Pass của kịch bản được thu hẹp trong phạm vi kiểm soát quyền và tham số; chưa đủ căn cứ để khẳng định toàn diện quy trình đồng bộ hồ sơ chính thức sau thẩm định.
