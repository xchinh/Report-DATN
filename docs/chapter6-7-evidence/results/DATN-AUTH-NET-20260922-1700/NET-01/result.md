# NET-01 — KẾT QUẢ BỔ SUNG BẰNG CHỨNG CỤC BỘ

## Kết luận

**Trạng thái toàn kịch bản: Blocked.** Test cục bộ xác nhận `DioFactory` áp dụng đúng timeout mặc định 30 giây và tôn trọng giá trị `connectTimeout`/`receiveTimeout` do caller truyền vào.

Đây chỉ là bằng chứng trực tiếp cho phần **cấu hình timeout** của `NFR-01-B01`. Chưa có lỗi connect timeout, receive timeout hoặc mất mạng được kích hoạt; chưa xác minh ánh xạ lỗi, thông báo UI và retry sau khi phục hồi. Vì vậy bằng chứng của toàn hành vi vẫn ở mức hạn chế và `NET-01` chưa được chuyển thành Pass.

## Lệnh và kết quả

```bash
cd packages/core/network
flutter analyze
flutter test --reporter expanded
```

- Phân tích tĩnh package: Pass.
- Test cấu hình timeout: 1/1 Pass.
- Không sử dụng proxy, API hoặc môi trường staging.

## Giới hạn

Muốn hoàn tất `NET-01`, cần một lỗi mạng có kiểm soát để đo việc kết thúc theo timeout, xác minh thông báo chuẩn hóa trên giao diện và thao tác thử lại sau khi kết nối phục hồi.
