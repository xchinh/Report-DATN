# Baseline mã nguồn trước khi viết Chương 6–7 — 23/09/2026

Chốt lúc 14:41 (Asia/Ho_Chi_Minh). Đây là baseline **mã nguồn và smoke test**, không phải kết luận mọi UC/FR đã đạt. Không cộng kết quả kiểm thử của các phiên bản khác vào baseline này.

| Thành phần | Nhánh | Commit được chốt | Thay đổi còn ngoài commit |
| --- | --- | --- | --- |
| Mobile | `feat/leaveRequest` | `7f90ac74b15ba59a1802c4021e35d793cd417096` | `AGENTS.md`, `CLAUDE.md` |
| Auth BE | `dev/khang-chinh` | `7e687a6005ceb6264f3467072081c784a6f9c7bc` | `config/app/app.env.ts` chứa thay đổi khóa phiên, **không commit secret** |
| HRM BE | `chinh-dev` | `9e39ccc2515defab70c2f18ea88fb0a50b5fd1e0` | Không có |
| iOffice BE | `main` | `4bfdb23a75f0bf665a0e3b97d39f3531009db161` | `.env.local`, `AGENTS.md`, tài liệu nghiệp vụ cục bộ |
| HRM FE | `main` | `3ff464c9c1a3353bf7a7d53ded45c5c41b1b5a23` | `.gitignore`, `AGENTS.md`, `CLAUDE.md` |

Các tệp môi trường cục bộ không nằm trong Git. Để nhận biết môi trường có đổi hay không mà không công bố giá trị bí mật, SHA-256 tại lúc chốt là:

| Tệp cục bộ | SHA-256 |
| --- | --- |
| Auth `config/app/app.env.ts` (working tree) | `d7378cad79ac4708d95774ab0ee4fdb5c314e35ef28b3ed651798d3cf832815b` |
| Auth `.env.local` | `eb1be7b16b115654568d0547034b7c4f532c91072d59051b015c64a96a16c033` |
| iOffice `.env.local` | `187f803999ddf5b12540a6c88f829d602ba0a0f76686b69178e97fd482546b22` |
| Mobile `apps/myhcmut/.env` | `897e9a5abb3a061297dba2385a49564974eaf1edcd56ac3d6a83a27568a41134` |
| HRM FE `.env` | `e356676c25cbfd649ca313eb28abe7e03d38eda16da9e3d13fa63ecff6d12876` |

## Kiểm tra nhanh trên baseline

- Flutter unit/widget test trong 6 gói đã chọn: **370/370 Pass**; HRM BE Vitest trong 5 suite đã chọn: **57/57 Pass**. Hai nhóm này tạo nên số 427, **không phải 427 kiểm thử E2E/toàn hệ thống**.
- HRM FE: `yarn typecheck` Pass; ba suite SSO/Flutter bridge: **18/18 Pass**.
- iOffice BE: `node --check` cho các tệp JavaScript được commit và `yarn check --integrity` đều Pass. Không có test suite tự động riêng được chạy cho thay đổi iOffice.
- Smoke API sau commit: Auth đăng nhập/chuyển tài khoản thử nghiệm; HRM và iOffice sinh/tiêu thụ vé SSO, cấp cookie phiên; vé HRM dùng lại bị từ chối HTTP 401. Trình duyệt sạch mở hồ sơ HRM qua vé SSO, gọi consume-ticket và `/api/state` thành công, bỏ ticket khỏi URL, không chuyển đến trang đăng nhập. Không lưu vé/JWT/cookie vào tài liệu.
- Ảnh Android ngày 23/09 cho thấy HRM WebView hiển thị hồ sơ và các luồng mobile khác, nhưng APK đang cài **chưa được đối chiếu bằng build/hash với commit `7f90ac7`**; không dùng ảnh này để khẳng định toàn bộ baseline có thể tái lập chỉ từ Git.

## Giới hạn trước khi viết báo cáo

Các manifest chạy lại cũ ghi HRM BE `87e17bc`, iOffice BE `53f069a` và HRM FE `ccce869` như thể đó là toàn bộ mã đã chạy; chúng **không phải** commit chốt tại đây. Logic tiêu thụ ticket HRM FE trước đây còn là thay đổi chưa commit và nay nằm trong `3ff464c9`.

Kết quả smoke/đơn vị ở trên không làm thay đổi các khoảng trống đã nêu trong kế hoạch: BTR-01 chưa chứng minh hết wizard mobile; SCH-02 chưa chứng minh thông báo lỗi và thao tác thử lại; NET-01 mới có nhánh mất mạng; PRO-01/LEV-01 chưa đủ mọi nhánh; các phát hiện Fail backend còn cần được phản ánh trung thực. Không dùng tuyên bố “mọi kịch bản đã Pass” hoặc “toàn hệ thống hoạt động hoàn toàn tốt” trong Chương 6–7.

Trước khi đưa ảnh/biên bản vào báo cáo hoặc Git, phải khử thông tin nhân sự nhận diện được. Các ảnh hiện có chưa thể mặc định là đã khử dữ liệu.
