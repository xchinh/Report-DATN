# MA TRẬN KHOẢNG TRỐNG BẰNG CHỨNG KIỂM THỬ

## 1. Mốc kiểm kê

- Ngày kiểm kê: 22/09/2026.
- Nhánh báo cáo: `rewrite-chapter-6`.
- Commit nền Stage A: `dba03c507f8629a16e3f9a1fdd7a494b81c2d729`.
- Nguồn hành vi: `01_uc_fr_implementation_matrix.md` và Chương 4 hiện hành.
- Stage A chỉ kiểm kê bằng chứng có sẵn; không viết hoặc chạy test mới.

## 2. Quy ước hành vi, bằng chứng và kết quả

- Mã hành vi: `<UC-hoặc-FR>-Bxx`; mã này chỉ phân rã yêu cầu hiện có, không phải yêu cầu mới.
- Kết quả chạy: **Pass**, **Fail**, **Blocked**, **Not Run**, **Invalid**, **Chưa xác định kết quả chạy**.
- Trạng thái bằng chứng: **Đủ bằng chứng**, **Bằng chứng hạn chế**, **Chưa kiểm thử**.
- Quyết định bổ sung: **Cần bổ sung**, **Không cần bổ sung trong đợt này**, **Chờ xác minh**.
- Mã test tồn tại không chứng minh test đã chạy hoặc Pass.
- `Not Run` chỉ dùng khi có căn cứ xác nhận chưa chạy; thiếu log hoặc không biết lịch sử chạy dùng **Chưa xác định kết quả chạy**.

## 3. Ma trận hành vi – bằng chứng

| UC/FR | Mã hành vi | Hành vi cần xác minh | Căn cứ lựa chọn kịch bản | Bằng chứng hiện có | Loại kiểm thử | Repository và commit | Môi trường và thời điểm | Lệnh hoặc kịch bản | Kết quả | Nguồn kết quả | Tính áp dụng | Trạng thái bằng chứng | Rủi ro | Quyết định bổ sung | Giới hạn kết luận |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## 4. Tổng hợp theo UC/FR

| UC/FR | Hành vi trọng tâm | Hành vi có bằng chứng đủ | Trạng thái tổng hợp | Khoảng trống ảnh hưởng kết luận | Kết luận tối đa được phép |
| --- | --- | --- | --- | --- | --- |

## 5. Kết quả lịch sử và giới hạn tái lập

| Bộ kết quả | Phiên bản | Nguồn kết quả | Phạm vi chứng minh | Giới hạn tái lập hoặc diễn giải |
| --- | --- | --- | --- | --- |

## 6. Điểm chờ xác minh

| Chủ đề | Thông tin còn thiếu | Ảnh hưởng đến trạng thái bằng chứng | Bước cần thực hiện ở Giai đoạn B |
| --- | --- | --- | --- |
