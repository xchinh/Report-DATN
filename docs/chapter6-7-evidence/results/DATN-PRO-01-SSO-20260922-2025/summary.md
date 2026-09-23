# TỔNG HỢP BẰNG CHỨNG SSO CỦA PRO-01

| Hành vi | Kết quả |
| --- | --- |
| Hệ đích không hợp lệ | HTTP `400`, bị từ chối |
| Tạo vé cho HRM | HTTP `200`, TTL được trả về là `60` giây |
| Tiêu thụ lần đầu | HTTP `200`, tạo cookie phiên và ánh xạ đúng danh tính |
| Tiêu thụ lại cùng vé | HTTP `401`, bị từ chối |

`NFR-03-B04` có đủ bằng chứng trực tiếp cho cơ chế vé một lần/TTL ngắn khi kết hợp lần chạy này với bộ test SSO hiện có. `PRO-01` tổng thể vẫn **Blocked** vì chưa mở WebView thật và chưa kiểm tra các nhánh cập nhật hồ sơ.
