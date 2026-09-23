# MỐC KIỂM THỬ TẠM — mã nguồn hiện tại ngày 23/09/2026

Đợt kiểm tra bắt đầu khoảng 09:20–09:27 (`Asia/Ho_Chi_Minh`). Mốc này dùng **working tree hiện tại**, gồm cả thay đổi chưa commit, của ba backend, HRM frontend và mobile. Các tiến trình Auth (`4000`), HRM (`6023`), iOffice (`3001`) và Vite (`6022`) do người dùng khởi động sẵn; không khởi động lại hay dừng chúng. HRM frontend được mở từ địa chỉ LAN `192.168.1.13:6022`; proxy `/api` của Vite trỏ đến HRM backend local.

| Thành phần | Nhánh | HEAD | SHA-256 diff tracked | SHA-256 danh sách untracked + nội dung |
| --- | --- | --- | --- | --- |
| Mobile | `feat/leaveRequest` | `4fe5d9cbd92e971f0b4b75ebfd308e7a8486d079` | `0c9bdb6af224c056c2625b18ffacfd9c654a84003d0a14b6f513e648df4e05fe` | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` |
| Auth BE | `dev/khang-chinh` | `7e687a6005ceb6264f3467072081c784a6f9c7bc` | `df83dad79522c7c97c2913057b3ea51e867128fab6a1d01b97f555be2381b60e` | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` |
| HRM BE | `chinh-dev` | `9e39ccc2515defab70c2f18ea88fb0a50b5fd1e0` | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` |
| iOffice BE | `main` | `e70b44ce62b2de062e873b11fa2cdc2746a1fece` | `44e5bbda9390c4e360dcd94f2a1c325a7c7f112f0c44c2ae2dc4c5f8805fd33c` | `363cef98c18c73d2729305ead41695f43f8a615e8e749b347752767e6de4c756` |
| HRM FE | `main` | `ccce8697754b1aa5c06f84e14ea5761cebf5a4c0` | `400f0c50a49bf646ffe2583c32de31a28ba6be663cf1f1f06571b042c9d364ef` | `f3e19b38278bc0fbf76322e3387389aead4f3048f78a9d5ea7004a74673059c7` |

Fingerprint được tính bằng `git diff --binary HEAD | sha256sum` và SHA-256 của danh sách `git ls-files --others --exclude-standard` kèm hash nội dung, sắp xếp theo thứ tự cố định. Chúng dùng để **phát hiện thay đổi giữa các lần chạy**, chưa thay thế commit/tag có thể tái lập. Các tệp `.env` không được sao chép vào tài liệu; iOffice có `.env.local` đã sửa nên không được commit hàng loạt cùng working tree. Không có commit nào được tạo trong đợt này.

Mốc này chỉ xác nhận mã và cấu hình nhìn thấy tại thời điểm kiểm tra. Kết quả Android từ đợt cũ dùng frontend commit `83caf648` phải giữ tách biệt; không được cộng vào kết quả của mốc hiện tại.
