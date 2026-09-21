# Ma trận bằng chứng và ownership — Chương 5.2–5.4

Ngày đối soát: 19/09/2026. Các đường dẫn dưới đây là bằng chứng triển khai; nội dung báo cáo chỉ dùng các claim tương ứng.

| Mục | Claim có thể viết | Bằng chứng | Ownership | Cách diễn đạt an toàn |
|---|---|---|---|---|
| 5.2.1 | Mobile tổ chức theo monorepo `apps`, `modules`, `packages` | `myhcmut-mobile/apps/myhcmut`; `modules/hrm`, `modules/ioffice`, `modules/notification`; `packages/core`, `packages/shared` | Tích hợp/phát triển mobile | “Mã nguồn mobile được tổ chức theo monorepo định hướng module.” |
| 5.2.1 | Feature dùng View–Provider/Notifier–service/data source | `modules/hrm/lib/src`; `modules/ioffice/lib/src`; `packages/core/network/lib/src` | Tích hợp/phát triển mobile | “Đây là cấu trúc thực hành của các feature được khảo sát, không khẳng định Clean Architecture đầy đủ.” |
| 5.2.2 | HRM có các module hồ sơ, nghỉ phép, công tác và workflow | `hrm-be/modules/md_tcns/*`; `modules/_default/fw_quy_trinh` | HRM hiện hữu; mobile tích hợp | “HRM là hệ thống nguồn; đề tài khai thác/điều chỉnh điểm tiếp xúc phục vụ mobile.” |
| 5.2.3 | iOffice có module văn bản, nhiệm vụ, lịch, notification | `ioffice-be/modules/md-eoffice`, `md-mission`, `md-schedule`, `fw-notification` | iOffice hiện hữu; mobile tích hợp | “iOffice tiếp tục sở hữu dữ liệu và rule của văn phòng số.” |
| 5.2.4/5.4.1 | Token đa miền được client chọn theo backend | `packages/core/network/lib/src/token_manager.dart`; `interceptors/multi_domain_auth_interceptor.dart`; `dio_factory.dart` | Phần mobile tích hợp | “Client gắn thông tin xác thực phù hợp; backend vẫn phân quyền cuối cùng.” |
| 5.4.2 | SSO ticket có TTL 60 giây và tiêu thụ nguyên tử bằng Redis `getDel` | `hrm-be/modules/_default/fw_auth/controller.ts:208-289`; `hrm-be/test/unit/sso_phase1.unit.test.ts` | Bổ sung/cầu nối tích hợp | “Ticket ngắn hạn được Redis lưu tạm và chỉ tiêu thụ một lần.” |
| 5.4.3 | FCM payload được parse thành điều hướng nghiệp vụ | `modules/notification/lib/src/notification/utils/fcm_service.dart`; `notification_route_parser.dart` | Tích hợp mobile | “Payload không hợp lệ không tạo route tùy ý.” |
| 5.4.4 | Ba nguồn lịch được map sang `ScheduleItem` | `modules/ioffice/lib/src/schedule/providers/schedule.dart`; `models/hrm_leave_mapper.dart`; `models/hrm_business_trip_mapper.dart` | Phần mobile tích hợp | “Mobile hợp nhất mô hình hiển thị, không tạo CSDL lịch liên miền.” |
| 5.3 hồ sơ | Bảng profile/request/detail/file và thuộc tính | `docs/chapter5/hrm-live-schema.dbml`; `chapter5-scoped.dbml` | HRM hiện hữu | “Quan hệ `shcc`/`request_id` là logical khi DB không đặt FK vật lý.” |
| 5.3 nghỉ phép | PK `(shcc, nam)` tồn tại; lịch và workflow phục vụ phiếu | Live DB constraint `tcns_so_nghi_phep_nam_pk`; `hrm-live-schema.dbml` | HRM hiện hữu; cơ chế concurrency được bổ sung/kiểm chứng | “Khóa dòng/advisory lock là invariant nghiệp vụ do backend duy trì.” |
| 5.3 iOffice | `mission_report(_batch)` có FK vật lý đến `mission_general`; attendance không có unique composite | `ioffice-live-schema.dbml`; `chapter5-scoped.dbml` | iOffice hiện hữu | “Chỉ hai FK trên được gọi là FK vật lý; các liên hệ khác cần nêu là logical.” |

## Claim loại trừ

- Không trình bày CAS/LDAP như cơ chế xác thực của mobile trừ khi đúng luồng source được mô tả.
- Không đưa KHCN, ký số hoặc WebRTC vào phạm vi hiện thực.
- Không cam kết FCM/Kafka giao đúng một lần hay người dùng luôn nhận thông báo.
- Không gọi quan hệ logical trong DBML là foreign key vật lý.
