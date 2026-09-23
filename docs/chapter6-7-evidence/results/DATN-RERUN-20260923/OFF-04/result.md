# KẾT QUẢ KIỂM THỬ: OFF-04

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `OFF-04` — Phân công, tham mưu, chỉ đạo và tiếp nhận văn bản đến |
| Tiêu chí | `OFF-R02..R05` (`FR-IOFF-02/03`, `UC-OFF-01..04`) |
| Đợt kiểm thử | `DATN-RERUN-20260923` |
| Thời điểm thực thi | 23/09/2026 (`Asia/Ho_Chi_Minh`) |
| Đối tượng kiểm thử | iOffice BE port 3001 (Commit `4bfdb23`), Mobile commit `7f90ac7` |
| Tester | `IOF-CLERK`, `IOF-ADVISOR`, `IOF-DIRECTOR`, `IOF-RECIPIENT-A/B` |
| Trạng thái | **Pass** |

---

## 1. Các bước thực hiện & Kết quả thực tế

1. **Khởi tạo phân công (Phiếu giải quyết - PGQ):**
   - Sử dụng fixture văn bản đến hợp lệ có `soDen` (`ID: 82`).
   - Tài khoản văn thư/phân công (`IOF-CLERK`) gửi yêu cầu tạo phiếu giải quyết:
     `POST /api/e-office/van-ban-den/phieu-giai-quyet`
     Payload: `{ data: { vanBanDenId: 82, listMaDonVi: ["K.KTMT"], listShcc: ["003009", "002871"], thucHien: true } }`
   - Phản hồi HTTP 200: Tạo phiếu giải quyết thành công, ghi nhận danh sách người nhận gồm `IOF-RECIPIENT-A` (`003009`) và `IOF-RECIPIENT-B` (`002871`).

2. **Chặn thao tác phân công trái quyền:**
   - Tài khoản không có quyền phân công thử gửi payload tương tự lên API.
   - Backend kiểm tra quyền và từ chối request với mã lỗi HTTP 403 Forbidden. Dữ liệu phân công của văn bản không bị biến đổi.

3. **Ghi nhận ý kiến tham mưu và chỉ đạo:**
   - Cấp lãnh đạo tham mưu / BGH gửi ý kiến chỉ đạo trên văn bản. Hệ thống lưu vết ý kiến vào luồng xử lý của văn bản đến.

4. **Tiếp nhận nhiệm vụ theo phân công:**
   - Người nhận thứ nhất (`IOF-RECIPIENT-A`) thực hiện tiếp nhận nhiệm vụ:
     `PUT /api/e-office/van-ban-den/phieu-giai-quyet/tiep-nhan/:pgqId` kèm `{ changes: {} }`.
   - Backend xác nhận cập nhật trạng thái tiếp nhận của cá nhân; văn bản vẫn ở trạng thái đang xử lý do người nhận thứ hai chưa hoàn tất.

5. **Xử lý hoàn thành và đồng bộ tiến độ:**
   - Cả hai người nhận hoàn thành trách nhiệm được giao:
     `PUT /api/e-office/van-ban-den/phieu-giai-quyet/hoan-thanh/:pgqId`.
   - Tiến độ thực hiện của văn bản đến được cập nhật đồng bộ 100% theo đúng quy định tại Chương 4.

6. **Khôi phục dữ liệu:**
   - Xóa phiếu giải quyết thử nghiệm thuộc run ID bằng API quản trị `DELETE /api/e-office/van-ban-den/phieu-giai-quyet/:id`, hoàn nguyên trạng thái ban đầu của văn bản đến.

---

## 2. Kết luận

- Kịch bản đạt trạng thái **Pass**.
- Hệ thống iOffice thực hiện đầy đủ quy trình luân chuyển văn bản đến: từ phân công, bảo vệ quyền phân công, ghi nhận chỉ đạo/tham mưu đến tiếp nhận và hoàn tất nhiệm vụ theo nhóm đối tượng được giao.
