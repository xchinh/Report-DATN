# Báo Cáo Thiết Lập Git Worktree & Baseline Môi Trường (00A_BRANCH_BASELINE)

**Ngày thực hiện:** 2026-09-09  
**Người thực hiện / Subagent:** Branch Guardian  
**Dự án:** Hardening Concurrency & Advisory Lock cho Hệ Thống HRM (`hrm-be`)  

---

## 1. Bảng Thông Số Thiết Lập Git & Worktree

| Thông số | Giá trị chi tiết | Ghi chú |
| :--- | :--- | :--- |
| **Workspace chính (Main Repo)** | `/home/xchinh/workspace/hrm-be` | Thư mục làm việc đang chứa uncommitted code |
| **Target Branch** | `chinh-dev` | Nhánh phát triển chính hiện tại |
| **Target HEAD Commit** | `15a6e321b93e35fbf18f7ecca883188b1cd3ae46` (`15a6e321`) | `chore: Update config and module implementations` |
| **Refactor Branch** | `refactor/check-trung-lich-advisory-lock` | Nhánh mới tách trực tiếp từ commit `15a6e321` |
| **Worktree Path** | `/home/xchinh/workspace/hrm-be-worktree-concurrency` | Thư mục cô lập hoàn toàn cho tác vụ concurrency |
| **Trạng thái Worktree** | `working tree clean` | Không có file rác, sẵn sàng refactor |

---

## 2. Kiểm Kê Uncommitted Changes Trên Workspace Chính (`hrm-be`)

Workspace chính tại `/home/xchinh/workspace/hrm-be` hiện đang có các tệp chưa commit liên quan đến các tính năng khác (SSO, profile, tracking log). **Branch Guardian đã bảo toàn 100% nguyên trạng, tuyệt đối không can thiệp hay xoá sửa các thay đổi này.**

### 2.1. Modified Files (6 tệp)
1. `.env.local`
2. `config/app/core.ts`
3. `config/lib/session.ts`
4. `modules/_default/fw_auth/controller.ts`
5. `modules/_default/fw_tracking_log/tracking_filter.ts`
6. `modules/md_staff/staff_ly_lich/controller/profile.controller.ts`

### 2.2. Deleted Files (2 tệp)
1. `modules/md_staff/staff_qua_trinh_cong_tac/controller/vtvl.controller.ts`
2. `modules/md_staff/staff_qua_trinh_cong_tac/model/staff_vi_tri_viec_lam.model.ts`

### 2.3. Untracked Files (4 tệp)
1. `modules/_default/fw_auth/sso_registry.ts`
2. `test/unit/sso_phase0.unit.test.ts`
3. `test/unit/sso_phase1.unit.test.ts`
4. `test/unit/sso_phase7.unit.test.ts`

---

## 3. Cấu Hình Môi Trường & Dependencies Trong Worktree

Để các agent refactor và test runner (`vitest`, `tsc`) hoạt động đầy đủ mà không chiếm dụng thừa dung lượng ổ đĩa hay gây xung đột index:

| Tài nguyên / Tệp | Phương thức thiết lập | Mục đích |
| :--- | :--- | :--- |
| `node_modules` | Symlink trỏ về `/home/xchinh/workspace/hrm-be/node_modules` | Kế thừa 644 node modules đầy đủ mà không cần `npm install` lại |
| `.git/info/exclude` | Thêm rule `node_modules` | Ngăn git nhận diện symlink như untracked file |
| `.env` | Sao chép từ `hrm-be/.env` | Chứa biến môi trường cơ sở |
| `.env.local` | Giữ nguyên bản gốc của commit `15a6e321` | Đảm bảo tính clean của git status trong worktree |
| `.env.test` | Sao chép từ `hrm-be/.env.test` | Phục vụ chạy suite kiểm thử tích hợp và unit test |
| `config/databases/models.ts` | Sao chép từ `hrm-be/config/databases/models.ts` | Cung cấp TypeORM / Sequelize schema definitions đã generate |

---

## 4. Xác Nhận Kiểm Thử Môi Trường (Sanity Check)

1. **Git Isolation Verification:**
   - Lệnh `git worktree list` hiển thị 2 working trees hoạt động độc lập:
     - `/home/xchinh/workspace/hrm-be` [chinh-dev]
     - `/home/xchinh/workspace/hrm-be-worktree-concurrency` [refactor/check-trung-lich-advisory-lock]
   - Mọi commit/thay đổi mã nguồn trong worktree sẽ không ảnh hưởng đến working directory của `chinh-dev`.

2. **Test Suite Execution Verification:**
   - Chạy lệnh `npm run test:unit` trong worktree thành công khởi động `vitest v4.1.10`.
   - Kết quả đồng nhất với kết quả của commit gốc trên môi trường chính (`khen_thuong`, `qt_chuc_vu` passed; các suite độc lập khác giữ nguyên hiện trạng).

---

## 5. Kết Luận & Bàn Giao

Môi trường worktree tại `/home/xchinh/workspace/hrm-be-worktree-concurrency` trên nhánh `refactor/check-trung-lich-advisory-lock` đã đạt trạng thái **SẴN SÀNG TUYỆT ĐỐI (100% READY)** để Lead Orchestrator và các subagent tiếp theo tiến hành:
1. Phân tích chi tiết xung đột lịch (Check trùng lịch & Race conditions).
2. Thiết kế và triển khai cơ chế PostgreSQL Transactional Advisory Locks (`pg_advisory_xact_lock`).
3. Viết kiểm thử tự động xác minh tính bất biến dữ liệu khi xử lý đồng thời.
