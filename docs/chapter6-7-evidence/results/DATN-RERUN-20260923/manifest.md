# RUN MANIFEST — DATN-RERUN-20260923

## 1. Thông tin đợt kiểm thử

| Thuộc tính | Giá trị |
| --- | --- |
| Mã đợt (Run ID) | `DATN-RERUN-20260923` |
| Kế hoạch kiểm thử | [04_test_execution_plan.md](../../04_test_execution_plan.md) (22 kịch bản: 19 tối thiểu, 3 tùy chọn) |
| Ma trận truy vết | [01_uc_fr_implementation_matrix.md](../../01_uc_fr_implementation_matrix.md) |
| Ma trận bằng chứng | [02_test_evidence_gap_matrix.md](../../02_test_evidence_gap_matrix.md) |
| Backlog kịch bản | [03_proposed_test_backlog.md](../../03_proposed_test_backlog.md) |
| Thời điểm chốt mốc | 23/09/2026 (`Asia/Ho_Chi_Minh`) |

---

## 2. Phiên bản báo cáo và mã nguồn hệ thống thực tế

| Thành phần | Nhánh | Commit thực tế | Build / Hash / Ghi chú |
| --- | --- | --- | --- |
| **Báo cáo (Luận văn)** | `rewrite-chapter-6` | `887439f` | Đã tích hợp `14fe1f6` từ `main` (bao gồm chỉnh sửa Chương 4 và sơ đồ sequence `seq_leave_submit`) |
| **Báo cáo gốc (`main`)** | `main` | `14fe1f6` | `docs(chapter4): align leave workflow boundaries and update submission sequence diagram` |
| **Mobile (`myhcmut-mobile`)** | `feat/leaveRequest` | `7f90ac74b15ba59a1802c4021e35d793cd417096` | HEAD commit chứa cấu hình IP LAN; APK cài đặt build từ `a6a1dc6` (xem chi tiết bên dưới) |
| **Auth BE (`myhcmut-be`)** | `dev/khang-chinh` | `7e687a6005ceb6264f3467072081c784a6f9c7bc` | Port 4000; session key local; không commit secret |
| **HRM BE (`hrm-be`)** | `chinh-dev` | `9e39ccc2515defab70c2f18ea88fb0a50b5fd1e0` | Port 6023; cơ chế revalidation & versioning |
| **HRM FE (`hrm-fe`)** | `main` | `3ff464c9c1a3353bf7a7d53ded45c5c41b1b5a23` | Port 6022; xử lý `consume-ticket` SSO và cầu nối WebView |
| **iOffice BE (`ioffice-be`)** | `main` | `4bfdb23a75f0bf665a0e3b97d39f3531009db161` | Port 3001; hỗ trợ SSO ticket và route thông báo |

---

## 3. Định danh và kiểm chứng bản build APK thực tế

Bản build APK được kiểm tra trực tiếp trên thiết bị thử nghiệm và đối chiếu tệp nhị phân cục bộ:

| Thuộc tính | Giá trị kiểm chứng |
| --- | --- |
| Đường dẫn tệp APK | `apps/myhcmut/build/app/outputs/flutter-apk/app-debug.apk` |
| SHA-256 APK | `cc0d7ea34e296c070f3f2882d91953a150d119c4f382e93cd971424b10fd957a` |
| SHA-1 APK | `f999403bc471a2a5aa3d0b7ce612b3a12e47cdaf` |
| Package Name | `vn.edu.hcmut.myhcmut` |
| Version Code / Name | `versionCode=1`, `versionName=1.0.0` |
| Cài đặt trên thiết bị | `Realme RMX2151` (Android 12, API 31, Serial: `IJROH6SCO7F6IFZ5`) |
| Thời điểm cài đặt | `lastUpdateTime=2026-09-23 10:58:21` |
| Gốc mã nguồn bản build | Biên dịch từ `a6a1dc6` (chứa đầy đủ logic hợp nhất nghỉ phép và schema mảng `quocGia`/`tinhThanh` cho công tác); commit sau đó `7f90ac7` chỉ bổ sung thẻ IP LAN `network_security_config.xml`. |

---

## 4. Checksum cấu hình môi trường cục bộ (Không chứa Secret)

Đối chiếu theo mốc chốt an toàn tại [06_locked_source_baseline_20260923.md](../../06_locked_source_baseline_20260923.md):

| Tệp cấu hình | SHA-256 |
| --- | --- |
| Auth `config/app/app.env.ts` (working tree) | `d7378cad79ac4708d95774ab0ee4fdb5c314e35ef28b3ed651798d3cf832815b` |
| Auth `.env.local` | `eb1be7b16b115654568d0547034b7c4f532c91072d59051b015c64a96a16c033` |
| iOffice `.env.local` | `187f803999ddf5b12540a6c88f829d602ba0a0f76686b69178e97fd482546b22` |
| Mobile `apps/myhcmut/.env` | `897e9a5abb3a061297dba2385a49564974eaf1edcd56ac3d6a83a27568a41134` |
| HRM FE `.env` | `e356676c25cbfd649ca313eb28abe7e03d38eda16da9e3d13fa63ecff6d12876` |

---

## 5. Môi trường mạng và tài khoản thử nghiệm

- **Môi trường mạng:** Backend/Frontend phục vụ tại LAN `192.168.1.13`; thiết bị di động kết nối Wi-Fi cùng dải LAN `192.168.1.0/24`.
- **Tài khoản chính:** `CB-A` (User ID `287`, SHCC `003009`, Cán bộ Phòng Hành chính).
- **Phân định lịch sử:** Bằng chứng cũ tại các mốc `20260922` được giữ lại làm dữ liệu lịch sử đối sánh; chỉ các kết quả chạy lại với đúng snapshot trên mới được ghi nhận làm căn cứ nghiệm thu chính thức cho báo cáo.
