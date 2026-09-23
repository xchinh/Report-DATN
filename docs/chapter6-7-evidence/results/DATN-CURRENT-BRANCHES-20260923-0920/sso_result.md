# Kiểm tra SSO trên các nhánh hiện tại

| Phép kiểm tra | Kết quả quan sát | Kết luận trong phạm vi thử |
| --- | --- | --- |
| `hrm-fe` unit test SSO bootstrap, Flutter bridge, logout | 3 tệp test, 18/18 test Pass; `yarn typecheck` Pass | Logic frontend và kiểu dữ liệu đạt ở các trường hợp đã viết test |
| Auth login và chuyển sang tài khoản thử `CB-A` | Hai request HTTP `200` | Có thể lấy phiên thử nghiệm từ Auth BE hiện tại |
| Vé HRM và phiên HRM | Sinh vé HTTP `200`; tiêu thụ vé HTTP `200`, `status: success`; cookie được cấp; `/api/state` có user; dùng lại vé HTTP `401` | Backend HRM thực thi vé một lần trong trường hợp đã thử |
| HRM FE trên trình duyệt Chrome sạch cookie | Vào URL hồ sơ kèm vé qua `192.168.1.13:6022`; `consume-ticket` và `/api/state` HTTP `200`, có user; URL cuối ở `/staff/user/my/staff-ly-lich`, đã xóa tham số vé, không chuyển trang đăng nhập | **Pass** cho luồng Auth → HRM FE trong trình duyệt sạch phiên |
| iOffice BE với Auth JWT | `/api/state` HTTP `200`, phản hồi có user cho admin và `CB-A` | Xác thực xuyên Auth → iOffice hoạt động ở endpoint đã thử |
| Vé iOffice | Sinh vé từ HRM HTTP `200`; iOffice tiêu thụ vé HTTP `200`, `status: success`; cookie được cấp và `/api/state` sau đó có user | Backend iOffice thực thi luồng vé ở trường hợp đã thử |
| Mobile WebView từ nút trong ứng dụng | Người dùng xác nhận mở hồ sơ không cần đăng nhập lại; đợt này chưa điều khiển Android để quan sát độc lập | **Bằng chứng người dùng báo cáo**, chưa gán Pass độc lập cho toàn bộ `PRO-01` |

Không lưu JWT, vé SSO, cookie, thông tin nhân sự hoặc log request thô. Các vé thử tự hết hạn hoặc đã bị tiêu thụ; không thay đổi hồ sơ nghiệp vụ. Các kết quả này **không chứng minh toàn bộ ba hệ thống không có lỗi**: chưa chạy lại 18 kịch bản Stage C trên cùng mốc này, chưa kiểm thử đầy đủ quy trình cập nhật/phê duyệt hồ sơ qua WebView trên Android.

Kết quả `PRO-01: Fail` ngày 23/09 khoảng 08:25 thuộc frontend commit `83caf648` cũ. Bản frontend hiện tại có mã gọi `consume-ticket` chưa commit; kết quả mới ở trên giải thích vì sao truy cập hiện nay thành công và phải được xem là một lần chạy khác, không phải sửa lại dữ liệu của lần chạy cũ.
