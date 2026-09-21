# Bằng chứng sơ đồ và schema Chương 5

| Nhóm | Thành phần đã xác minh | Nguồn |
|---|---|---|
| SSO | Redis lưu One-Time Ticket tối đa 60 giây, tiêu thụ nguyên tử `GETDEL`; HRM Web đổi vé thành Web session | `DAP_AN_DOI_CHIEU_THUC_TE.md` §3.1; `ARCHITECTURE_SCOPE.md` dòng 161--163 |
| Nghỉ phép | `tcns_nghi_phep_dang_ky`, `tcns_lich_ca_nhan`, `tcns_quy_trinh`, `tcns_quy_trinh_history`, `tcns_quy_trinh_user`, `tcns_so_nghi_phep_nam`, `fw_file` | Model HRM; `04_REQUIREMENT_PACK_LEAVE.md` |
| Công tác | `tcns_dang_ky_cong_tac`, `tcns_dang_ky_cong_tac_tham_gia`, `tcns_dang_ky_cong_tac_ke_hoach`, `tcns_qua_trinh_di_cong_tac` | Model HRM |
| Hồ sơ | `staff_ly_lich`, `staff_ly_lich_request`, `staff_ly_lich_request_detail`, `staff_ly_lich_request_file` | Model HRM |
| iOffice | `eoffice_van_ban_den`, `eoffice_van_ban_di`, `eoffice_distribution`, `mission_general`, `mission_outlined`, `mission_member`, `mission_report_batch`, `mission_report`, `schedule_general`, `schedule_general_item`, `schedule_general_assign`, `schedule_meeting_attendance` | Model iOffice; `ioffice-live-schema.dbml` |
| Thông báo | `fw_notification`, `fw_notification_target`, `fw_notification_logs`, `fw_user_device_token` | Model HRM; `05_REQUIREMENT_PACK_NOTIFICATION.md` |

## Nguồn DBML dùng trong báo cáo

| Mục | Tệp DBML |
|---|---|
| 5.3.1 Tổng quan | `schema-overview.dbml` |
| 5.3.2 Hồ sơ | `schema-profile.dbml` |
| 5.3.3 Nghỉ phép | `schema-leave.dbml` |
| 5.3.4 Công tác | `schema-business_trip.dbml` |
| 5.3.5 Văn bản iOffice | `schema-ioffice-documents.dbml` |
| 5.3.5 Nhiệm vụ iOffice | `schema-ioffice-missions.dbml` |
| 5.3.5 Lịch và điểm danh iOffice | `schema-ioffice-schedule.dbml` |

Trong các DBML dùng cho báo cáo, quan hệ màu xanh (`#2563EB`) là FK vật lý đã được xác nhận; quan hệ màu cam (`#D97706`) là liên kết logic do backend duy trì. Các tệp này chỉ phục vụ trực quan hóa ERD, không dùng để sinh migration hoặc DDL.
