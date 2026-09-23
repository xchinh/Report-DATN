# OFF-02 — Kết quả Chạy lại & Unblock Xem chi tiết và Mở tệp PDF qua ứng dụng OS

| Bước | Thao tác & Quan sát | Kết quả |
| --- | --- | --- |
| 1. Mở phân hệ Văn bản đến | Từ màn hình chính, nhấn "Incoming Documents". Danh sách văn bản tải về thành công với các thẻ văn bản có đính kèm tệp PDF (`131ASSET.pdf`). | **Pass** |
| 2. Chọn tệp PDF đính kèm | Nhấn vào thẻ tệp `131ASSET.pdf`. Ứng dụng hiển thị trạng thái đang tải (`_downloadingFiles`). | **Pass** |
| 3. Tải tệp qua Dio & kích hoạt `open_file` | Dio gửi request `GET /api/e-office/van-ban-den/files/22f7932b-32f0-4ed3-84db-67bcee68becc` kèm Bearer token, tải tệp về thư mục tạm cache của ứng dụng (`cache/131ASSET.pdf`). Checksum SHA-256 khớp tuyệt đối `108c6627f73a3a13d8e704539c1913d8f45b2f829d0f3d4c386f58447ced80cd`. | **Pass** |
| 4. Chuyển giao hệ điều hành Android | `OpenFile.open()` kích hoạt Intent `android.intent.action.VIEW` với `typ=application/pdf`. Hệ điều hành hiển thị bottom sheet Intent Chooser với các tùy chọn trình xem PDF đã cài trên máy. | **Pass** |
| 5. Mở và xem trang đầu trong ứng dụng OS | Chọn PDF Viewer (WPS Office tích hợp trên ColorOS / Android 12). Ứng dụng bên ngoài hiển thị trọn vẹn tệp PDF với tiêu đề `131ASSET`. | **Pass** |
| 6. Quay lại ứng dụng di động & Dọn dẹp | Bấm phím Back để quay lại ứng dụng MyHCMUT, giao diện giữ nguyên vị trí làm việc. File tạm trong cache được dọn dẹp sau khi kiểm tra. | **Pass** |

## Kết luận
- **Trạng thái kịch bản: Pass (chuyển đổi từ Blocked sang Pass).**
- **Đánh giá nghiệp vụ & kỹ thuật:**
  - Cơ chế mở file PDF tuân thủ chính xác kiến trúc được thiết kế: không nhúng trình xem nội bộ gây phình kích thước bundle và rủi ro tương thích font, mà ủy thác an toàn cho hệ điều hành thông qua Android FileProvider và intent chuẩn.
  - Tệp tải về được lưu trong vùng sandbox cache của ứng dụng, tránh rò rỉ dữ liệu nhạy cảm ra ngoài bộ nhớ chia sẻ chung.
- **Bằng chứng đính kèm:**
  - `01_incoming_doc_card.png`: Giao diện danh sách văn bản và thẻ file `131ASSET.pdf`.
  - `02_os_intent_chooser.png`: Giao diện Android Intent Chooser hiển thị ứng dụng đọc PDF của hệ thống.
  - `03_external_pdf_viewer.png`: Ứng dụng hệ điều hành mở và hiển thị nội dung tệp PDF.
  - `04_app_returned.png`: Quay trở lại an toàn màn hình MyHCMUT.
