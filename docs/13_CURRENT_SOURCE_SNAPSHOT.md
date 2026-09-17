# SNAPSHOT NGUỒN ĐỐI CHIẾU HIỆN HÀNH

> **Ngày khóa đối chiếu:** 15/09/2026 (Asia/Ho_Chi_Minh).
>
> Snapshot này là nguồn dùng để cập nhật tài liệu hỗ trợ và rà soát báo cáo. Nó không thay thế commit chính thức và không xác nhận một kịch bản runtime chưa chạy được.

## 1. Mốc mã nguồn

| Thành phần | Nhánh / HEAD | Vai trò khi đối chiếu | Trạng thái working tree |
| --- | --- | --- | --- |
| `hrm-be` | `chinh-dev` / `9e39ccc2515defab70c2f18ea88fb0a50b5fd1e0` | Nguồn nghiệp vụ HRM, phát hành vé SSO | Sạch tại thời điểm kiểm tra |
| `ioffice-be` | `main` / `e70b44ce62b2de062e873b11fa2cdc2746a1fece` | Nguồn nghiệp vụ iOffice và consumer SSO | Có thay đổi chưa commit, dùng làm nguồn hiện hành |
| `myhcmut-be` | `dev/khang-chinh` / `7e687a6005ceb6264f3467072081c784a6f9c7bc` | Dịch vụ xác thực/API dùng chung | Có thay đổi cấu hình chưa commit |
| `myhcmut-mobile` | `feat/leaveRequest` / `4fe5d9cbd92e971f0b4b75ebfd308e7a8486d079` | Hiện thực native và điều hướng | Chỉ có thay đổi hướng dẫn nội bộ |
| `hrm-fe` | `main` / `ccce8697754b1aa5c06f84e14ea5761cebf5a4c0` | WebApp HRM và tích hợp WebView | Có thay đổi SSO/Flutter bridge chưa commit |
| `ioffice-fe` | `main` / `bf27e36a796a3b072a12f2aa02f6c27fa34a7e7e` | WebApp iOffice và tích hợp WebView | Có thay đổi SSO/Flutter bridge chưa commit |

## 2. Delta chưa commit có liên quan

### iOffice backend

- Bổ sung consumer vé SSO tại `POST /api/auth/sso/consume-ticket`: đọc-xóa vé bằng Redis `getDel`, kiểm tra `targetSystem = ioffice`, tái tạo session và lưu session mới.
- Cấu hình session/cookie và proxy được điều chỉnh; thông báo FCM mang metadata điều hướng như nguồn, loại thực thể và định danh thực thể.
- Tài liệu nghiệp vụ điểm danh/lịch công tác mới xuất hiện trong source. Tài liệu này chứa dữ liệu định danh nội bộ nên **không sao chép** vào repository báo cáo; chỉ dùng các quy tắc/API đã kiểm tra mã nguồn.

### WebApp và Mobile

- `hrm-fe` và `ioffice-fe` nhận tham số `ticket`, gọi consumer backend, sau đó xóa ticket khỏi URL; bridge có các sự kiện như `profile_updated`, `request_logout` và trạng thái nghiệp vụ.
- `myhcmut-mobile` có màn hình WebView, dịch vụ lấy vé và bridge handler tương ứng. Luồng đi công tác có màn hình tạo/duyệt và mapper sang lịch tổng hợp.

### Không sao chép dữ liệu nhạy cảm

- Không sao chép `.env.local`, giá trị `SESSION_SECRET`, thông tin Firebase, danh sách tài khoản hay dữ liệu định danh từ các working tree nguồn.
- Manifest ghi mốc và delta nghiệp vụ thay vì chép raw diff, để tránh nhân bản bí mật/PII sang repository báo cáo. Khi cần tái lập, phải lấy lại diff trực tiếp từ đúng working tree và HEAD nêu ở trên.

## 3. Kết luận kỹ thuật đã xác minh tĩnh

| Nội dung | Trạng thái | Căn cứ |
| --- | --- | --- |
| Ticket SSO dùng Redis và tiêu thụ một lần | Có trong mã nguồn | `hrm-be` issuer; `ioffice-be` consumer dùng `getDel` |
| FE là thành phần tích hợp WebApp | Có trong mã nguồn | Hai FE xử lý ticket/bridge, không chỉ là tài liệu tham khảo |
| Business trip thuộc chức năng Mobile | Có trong mã nguồn | Màn hình tạo/duyệt và mapper lịch trong `myhcmut-mobile` |
| Transactional Outbox iOffice | Có trong mã nguồn | `config/lib/outbox.js`: ghi `outbox_events`, relay Kafka, retry và cleanup |
| SSO/concurrency backend có Redis | Đã chạy lại có điều kiện | 53/53 Vitest pass tại `hrm-be:9e39ccc` ngày 15/09/2026 |
| E2E WebView SSO liên hệ thống | Chưa xác minh runtime | Chưa có kịch bản chạy qua Mobile → FE → consumer backend trong phiên này |

## 4. Quy tắc dùng snapshot

1. Khi tài liệu cũ mâu thuẫn với snapshot này, dùng snapshot và ghi rõ trạng thái kiểm chứng.
2. Không ghi một thay đổi chưa commit là “đã phát hành” hoặc “đã nghiệm thu”.
3. Nhóm test `sso_phase0`, `sso_phase1`, `sso_phase7` và `concurrency_race_condition` đã chạy với Redis, kết quả 53/53 pass. Kết quả này không thay thế số liệu Gate 0 57 backend và không chứng minh E2E WebView.
4. Chỉ nâng trạng thái E2E sau khi có kịch bản Mobile → FE → consumer backend, lệnh kiểm thử được ghi lại và log không lỗi.
