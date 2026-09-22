# AUTH-01 — KẾT QUẢ BỔ SUNG BẰNG CHỨNG CỤC BỘ

## Kết luận

**Trạng thái toàn kịch bản: Blocked.** Phần kiểm tra cục bộ đạt 3/3 hành vi đã chạy:

1. Hai Dio client dùng chung `MultiDomainTokenManager` tự gắn cùng Bearer token.
2. Phản hồi HTTP 401 làm token bị từ chối được xóa trước khi lỗi được trả về.
3. Client không có token không gửi header `Authorization`.

Kết quả này đủ để xác minh trực tiếp hợp đồng của `NFR-03-B02` trên production snapshot `4fe5d9c`. Nó không chứng minh đăng nhập thực tế, chặn truy cập khi chưa đăng nhập, tích hợp với endpoint HRM/iOffice hoặc hành vi giao diện khi phiên hết hạn. Do đó `AUTH-01` chưa được chuyển thành Pass.

## Lệnh và kết quả

```bash
cd packages/core/network
flutter analyze
flutter test --reporter expanded
```

- Phân tích tĩnh package: Pass.
- Ba test xác thực/token: 3/3 Pass.
- Không sử dụng API, tài khoản hoặc dữ liệu staging.

## Giới hạn

Đây là contract test tại HTTP adapter cục bộ. Các phần còn Blocked của `AUTH-01` cần môi trường Auth/HRM/iOffice, tài khoản thử nghiệm được phê duyệt và bằng chứng xử lý phiên trên ứng dụng chạy thực tế.
