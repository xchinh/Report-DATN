# RUN MANIFEST — DATN-TEST-01-20260922-1619

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản | `TEST-01` — Tái lập bộ kiểm thử hiện có |
| Hành vi | `NFR-05-B03` |
| Thời gian | 22/09/2026, 16:19–16:24 (`Asia/Ho_Chi_Minh`) |
| Người thực hiện | AI agent trong local isolated worktrees; kết quả chờ người dùng xác nhận trước khi đưa vào Chương 6–7 |
| Hệ điều hành | Linux x86_64 |
| Flutter / Dart | Flutter `3.41.5`; Dart `3.11.3` |
| Node / Yarn | Node `22.22.2`; Yarn `1.22.22` |
| Redis | Container tạm `redis:7-alpine`, chỉ bind `127.0.0.1:6379`, đã dừng và xóa sau lần chạy |
| Dữ liệu nghiệp vụ | Không sử dụng; chỉ chạy unit/widget test cục bộ |

## Snapshot mã nguồn

| Repository | Commit | Trạng thái |
| --- | --- | --- |
| `myhcmut-mobile` | `4fe5d9cbd92e971f0b4b75ebfd308e7a8486d079` | Detached clean worktree |
| `hrm-be` | `87e17bcd2bb8b3058e279e5ecb49d8bcedd5f20d` | Detached clean worktree; dùng `models.template.ts` làm `models.ts` bị ignore để module test có thể import |
| `hrm-fe` | `83caf6488be3f3f83eee783b8ec8ef832a8e02d0` | Detached clean worktree; dependency đọc tĩnh của test SSO |
| `ioffice-be` | `53f069a366f7d465253b6fceedeea25a01bec176` | Detached clean worktree; dependency đọc tĩnh của test SSO |
| `ioffice-fe` | `bf27e36a796a3b072a12f2aa02f6c27fa34a7e7e` | Detached clean worktree; dependency đọc tĩnh không được liệt kê trong kế hoạch ban đầu |

## Dependency metadata

- Snapshot mobile không theo dõi `pubspec.lock`; `melos bootstrap` đã sinh lock cục bộ có SHA-256 `42875901b308264e53533d0cf237a2f902da87155d90287ea0ceb34aedff3ea5`.
- `hrm-be/yarn.lock` có SHA-256 `dd43ccf31414aa366074bbf75f3082e80030961e8385416e342171a9d7b74e81`.
- Không có mật khẩu, token, cookie hoặc dữ liệu nhân sự trong artifact của lần chạy.

## Vị trí bằng chứng

Log thô được giữ ngoài Git tại `.superpowers/sdd/04_test_execution_plan/artifacts/TEST-01/`. Tài liệu kết quả đã khử dữ liệu nhạy cảm nằm tại `TEST-01/result.md` trong cùng run này.
