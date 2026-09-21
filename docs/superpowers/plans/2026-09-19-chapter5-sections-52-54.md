# Chapter 5.2–5.4 Writing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Hoàn thiện các mục 5.2–5.4 của Chương 5 bằng nội dung có thể bảo vệ, cây thư mục rút gọn và DBML tách theo phân hệ; báo cáo chỉ chừa vị trí chèn hình để người viết tự dán hình sau.

**Architecture:** Nội dung được viết theo ba lớp bằng chứng: source tree/cấu hình hiện hành, schema PostgreSQL live đã trích xuất, và API/luồng tích hợp được truy vết. Mỗi vị trí hình có caption và `label` cụ thể để người viết chèn ảnh sau; cây thư mục chỉ minh họa tổ chức mã nguồn trong phạm vi đề tài, không thay thế sơ đồ kiến trúc.

**Tech Stack:** LaTeX; DBML (`.dbml`, dùng với dbdiagram); Flutter/Dart monorepo; Node.js/TypeScript HRM và iOffice; PostgreSQL; Redis; Firebase Cloud Messaging.

**Spec:** `Chapter5/index.tex`, `Chapter5/section2.tex`, `Chapter5/section3.tex`, `Chapter5/section4.tex`; `docs/chapter5/chapter5-scoped.dbml`.

## Global Constraints

- Chỉ tuyên bố kiến trúc, bảng, constraint và ownership đã có bằng chứng từ source/config/schema live.
- Sơ đồ tổng thể không hiển thị implementation detail; Redis chỉ biểu diễn vai trò session/ticket ngắn hạn đã xác minh.
- Cây thư mục tối đa 3–4 tầng, bỏ build artifact, dependency, test fixture và thư mục ngoài phạm vi mobile.
- Phân biệt bằng văn bản: phần kế thừa, phần tích hợp, phần bổ sung/điều chỉnh bởi đề tài.
- `Ref` ghi chú là logical trong DBML không được mô tả là foreign key vật lý.
- Không ghi bí mật, URL nội bộ, token, thông tin cá nhân thật hoặc nội dung cấu hình nhạy cảm vào báo cáo/hình.
- Không đưa KHCN, ký số hoặc meetings/WebRTC vào phạm vi hiện thực nếu không có backend/service xác nhận.

## Review Focus

- Ownership: mọi câu “nhóm xây dựng/bổ sung” phải dẫn tới commit, module mới hoặc thay đổi có thể đối chiếu; nếu không, dùng “kế thừa/tích hợp”.
- DB constraint: PK/FK/UNIQUE/NOT NULL vật lý phải khớp live schema; state guard và row lock phải gọi là ràng buộc nghiệp vụ do backend đảm bảo.
- Diagram scope: sơ đồ toàn hệ thống phải còn đọc được ở một trang A4; chi tiết kỹ thuật chỉ nằm ở hình của đúng mục.
- Tree accuracy: mỗi thư mục xuất hiện trong hình phải tồn tại ở revision được báo cáo; không tự suy ra “layer” từ tên thư mục.
- Integration failure: SSO ticket hết hạn/đã dùng, FCM payload sai/target không tồn tại, và lỗi khi một nguồn lịch không phản hồi phải có mô tả xử lý đúng implementation.

---

## File structure and artifacts

| Artifact | Responsibility |
|---|---|
| `Chapter5/section2.tex` | Nội dung 5.2: mobile, HRM, iOffice, xác thực; tham chiếu hình kiến trúc và cây thư mục. |
| `Chapter5/section3.tex` | Nội dung 5.3: tổng quan dữ liệu, ERD theo phân hệ, constraint và reasoning. |
| `Chapter5/section4.tex` | Nội dung 5.4: xác thực đa backend, SSO ticket, notification/deep link, lịch đa nguồn. |
| `Chapter5/section2.tex`, `section3.tex`, `section4.tex` | Chứa block chờ chèn hình có caption/label và mô tả ngay trước/sau hình. |
| `docs/chapter5/chapter5-scoped.dbml` | DBML tổng hợp, dùng làm nguồn để tách các phân hệ. |
| `docs/chapter5/schema-profile.dbml` | DBML hồ sơ cá nhân và yêu cầu thay đổi hồ sơ. |
| `docs/chapter5/schema-leave.dbml` | DBML nghỉ phép, workflow và số dư phép. |
| `docs/chapter5/schema-business-trip.dbml` | DBML đăng ký/quá trình công tác. |
| `docs/chapter5/schema-ioffice.dbml` | DBML văn bản, nhiệm vụ, lịch và điểm danh iOffice. |
| `docs/chapter5/schema-notification.dbml` | DBML notification và device token. |

### Task 1: Lập hồ sơ bằng chứng và ma trận ownership

**Files:**
- Create: `docs/chapter5/chapter5-evidence-and-ownership.md`
- Read: `/home/xchinh/workspace/myhcmut-mobile`, `/home/xchinh/workspace/hrm-be`, `/home/xchinh/workspace/ioffice-be`
- Read: `docs/chapter5/hrm-live-schema.dbml`, `docs/chapter5/ioffice-live-schema.dbml`, `docs/chapter5/chapter5-scoped.dbml`

**Produces:** Một bảng cho từng nội dung 5.2–5.4 gồm: claim, nguồn kiểm chứng, ownership (`kế thừa`, `tích hợp`, `bổ sung/điều chỉnh`), và câu viết an toàn.

- [ ] Liệt kê các thư mục thực tế của FE, HRM BE và iOffice BE bằng `tree`/`rg --files`; ghi revision hoặc ngày truy xuất.
- [ ] Truy vết source của bốn integration problem: multi-domain auth, One-Time Ticket SSO, notification/deep link và unified calendar.
- [ ] Đọc config/service/model để phân loại Redis, FCM và các database table có trong phạm vi.
- [ ] Ghi evidence path ở mức file + symbol/module; không sao chép secret hay `.env` value.
- [ ] Với mỗi claim chưa đủ bằng chứng, gắn nhãn `không đưa vào báo cáo` hoặc chuyển thành `giới hạn/hướng phát triển`.
- [ ] Kiểm tra: không có claim nào trong section 2–4 mà không có dòng tương ứng trong ma trận.

### Task 2: Viết mục 5.2.1 — kiến trúc MyHCMUT Mobile và cây thư mục FE

**Files:**
- Modify: `Chapter5/section2.tex`
- Modify/Create: `image/architecture/chapter5-mobile.mmd`, `image/architecture/chapter5-mobile-tree.mmd`
- Output: PNG/SVG tương ứng trong `image/architecture/`

**Produces:** Một sơ đồ kiến trúc mobile và một hình cây monorepo rút gọn, kèm 3–5 đoạn giải thích.

- [ ] Chọn các thư mục thực có ý nghĩa kiến trúc: `apps/myhcmut`, `modules/hrm`, `modules/ioffice`, `modules/notification`, `packages/core`, `packages/shared`.
- [ ] Lập nội dung cây thư mục ở tối đa bốn tầng; mỗi nhánh phải tồn tại thật. Không đưa `build`, `.dart_tool`, dependency cache hoặc file cấu hình không giải thích kiến trúc.
- [ ] Chừa block hình cho dependency flow của feature điển hình: `View → Provider/Notifier → Repository/Service → Data source/API`; chỉ dùng tên lớp nếu source thể hiện đúng mẫu đó.
- [ ] Viết mở mục: mobile là client/điểm truy cập thống nhất, không phải nơi sở hữu dữ liệu nghiệp vụ HRM/iOffice.
- [ ] Giải thích lần lượt Application, Business Modules, Core và Shared bằng trách nhiệm, không liệt kê package.
- [ ] Chèn hai vị trí hình, caption và `\label`; đoạn sau hình chỉ giải thích các nhánh đã được minh họa.
- [ ] Kiểm tra: mọi thư mục trong nội dung cây xuất hiện trong `rg --files` của monorepo; biên dịch LaTeX không lỗi tham chiếu hình.

### Task 3: Viết mục 5.2.2–5.2.3 — HRM/iOffice Backend và cây thư mục BE

**Files:**
- Modify: `Chapter5/section2.tex`
- Modify/Create: `image/architecture/chapter5-hrm.mmd`, `image/architecture/chapter5-hrm-tree.mmd`, `image/architecture/chapter5-ioffice.mmd`, `image/architecture/chapter5-ioffice-tree.mmd`
- Output: PNG/SVG tương ứng trong `image/architecture/`

**Produces:** Hai cặp hình architecture/tree và các đoạn phân biệt rõ phần kế thừa–tích hợp–bổ sung.

- [ ] Xác nhận từng backend có route/middleware/controller/service/model/data access thực tế hay tên tương đương; dùng tên source thực, không ép thành pattern lý thuyết.
- [ ] Chừa vị trí hình kiến trúc HRM giới hạn ở hồ sơ, nghỉ phép, công tác và API phục vụ mobile.
- [ ] Chừa vị trí hình kiến trúc iOffice giới hạn ở văn bản, nhiệm vụ, lịch, điểm danh/báo vắng.
- [ ] Viết một cây thư mục rút gọn cho mỗi backend theo module nghiệp vụ và lớp kỹ thuật đã kiểm chứng.
- [ ] Viết theo ba nhãn ownership cho từng backend; không nói nhóm “xây dựng toàn bộ HRM/iOffice” nếu không có bằng chứng.
- [ ] Với mỗi vị trí hình, giải thích request path trong một đoạn ngắn: request → kiểm tra → điều phối nghiệp vụ → data access → response.
- [ ] Kiểm tra: tree không chứa module ngoài scope; terminology của text khớp tên folder/module trong hình.

### Task 4: Viết mục 5.2.4 — xác thực ứng dụng

**Files:**
- Modify: `Chapter5/section2.tex`
- Create only if verified: `image/architecture/chapter5-auth-flow.mmd`

**Produces:** Nội dung xác thực có boundary rõ ràng, không suy đoán CAS/LDAP hay cơ chế token.

- [ ] Truy vết request đăng nhập từ mobile đến Authentication Service, hình thức response và nơi mobile lưu credential.
- [ ] Truy vết cách HRM/iOffice nhận credential và nơi backend quyết định authorization.
- [ ] Viết 2–3 đoạn nêu trách nhiệm: mobile gửi/lưu/sử dụng credential; backend xác thực và kiểm tra quyền.
- [ ] Chỉ chừa vị trí sequence diagram khi bước trao đổi đủ rõ trong source; nếu không, dùng mô tả 5.4.1 làm nội dung chính và không tạo hình trùng lặp.
- [ ] Kiểm tra: không nhắc CAS, LDAP, refresh token hoặc claim cụ thể nếu không có implementation evidence.

### Task 5: Viết mục 5.3 — tổng quan và ERD theo nhóm dữ liệu

**Files:**
- Modify: `Chapter5/section3.tex`
- Read: `docs/chapter5/chapter5-scoped.dbml`
- Modify/Create: `image/erd/chapter5-data-overview.mmd`, `chapter5-profile.mmd`, `chapter5-leave.mmd`, `chapter5-business-trip.mmd`, `chapter5-ioffice.mmd`, `chapter5-notification.mmd`

**Produces:** ERD tổng quan và ERD chi tiết theo các phân hệ, kèm phân tích dữ liệu chứ không phải data dictionary.

- [ ] Chừa vị trí ERD tổng quan chỉ gồm thực thể liên quan mobile: profile, leave, business trip, iOffice document/mission/schedule, notification.
- [ ] Tách `schema-profile.dbml`; viết về `staff_ly_lich`, request, request detail/file và quan hệ hồ sơ chính thức–đề xuất thay đổi.
- [ ] Tách `schema-leave.dbml`; viết về phiếu, lịch cá nhân, workflow/history, số dư phép năm; nêu PK `(shcc, nam)` và row lock là business invariant, không phải một cột database.
- [ ] Tách `schema-business-trip.dbml`; viết về phiếu, thành viên, kế hoạch, quá trình công tác; nêu rõ bảng kế hoạch hiện hữu không có PK vật lý nếu DBML chứa bảng này.
- [ ] Tách `schema-ioffice.dbml`; viết về văn bản, distribution đa hình, nhiệm vụ phân cấp, lịch và attendance. Không mô tả `distributed_id` như FK đơn vì nó phụ thuộc `distributed_type`.
- [ ] Tách `schema-notification.dbml` nếu đủ giá trị; mô tả token thiết bị, notification, target và log đọc/xóa.
- [ ] Viết mục 5.3.7 theo ba decision: workflow state/history, JSONB profile change và cây `mission_outlined.parent_id`; giữ decision nào có schema/source xác nhận.
- [ ] Kiểm tra: so sánh cột/constraint nêu trong văn bản với scoped DBML và live DBML; cấm thêm FK/UNIQUE không tồn tại.

### Task 6: Viết mục 5.4.1 — xác thực đa backend

**Files:**
- Modify: `Chapter5/section4.tex`
- Create: `image/architecture/chapter5-multidomain-auth.mmd`

**Produces:** Một hình luồng chọn backend/credential và nội dung về failure/authorization boundary.

- [ ] Xác minh interceptor/service tương ứng, các domain được xử lý và header/credential thực sự được dùng.
- [ ] Chừa vị trí hình: mobile request → auth material selection → HRM/iOffice/Authentication Service → response/error.
- [ ] Viết về xử lý lỗi xác thực chỉ khi source thể hiện; tách lỗi network khỏi lỗi unauthorized nếu UI/provider có phân biệt.
- [ ] Kết luận rõ backend là nơi authorization cuối cùng, mobile không thay backend quyết định quyền.
- [ ] Kiểm tra: tên `MultiDomainAuthInterceptor` chỉ xuất hiện nếu source có đúng implementation đó.

### Task 7: Viết mục 5.4.2 — One-Time Ticket SSO

**Files:**
- Modify: `Chapter5/section4.tex`
- Create: `image/architecture/chapter5-sso-ticket.mmd`

**Produces:** Sequence diagram và đoạn phân tích vòng đời ticket có Redis ở đúng phạm vi.

- [ ] Truy vết endpoint sinh ticket, cấu trúc key/value, TTL, cách liên kết user/session và cách ticket bị tiêu thụ.
- [ ] Chừa vị trí sequence diagram theo thứ tự: Mobile → HRM Backend → Redis ticket store → WebView → Web Backend → Web session.
- [ ] Viết các tình huống: ticket hợp lệ, hết TTL, đã bị dùng; không hứa hẹn an toàn tuyệt đối.
- [ ] Chỉ nêu `GETDEL` hoặc thao tác nguyên tử cụ thể khi service/backend test xác nhận.
- [ ] Kiểm tra: Redis không bị mô tả là primary database hay cache dữ liệu HRM/iOffice lâu dài.

### Task 8: Viết mục 5.4.3–5.4.4 — notification/deep link và lịch đa nguồn

**Files:**
- Modify: `Chapter5/section4.tex`
- Create: `image/architecture/chapter5-notification.mmd`, `image/architecture/chapter5-unified-calendar.mmd`

**Produces:** Hai hình tích hợp và nội dung mô tả mapping, điều hướng, lỗi.

- [ ] Truy vết payload FCM, metadata/target parser, mapping GoRouter và màn hình đích.
- [ ] Chừa vị trí hình luồng: nghiệp vụ → xử lý bất đồng bộ hiện hữu → FCM → mobile → target parser → GoRouter → màn hình. Chỉ hiển thị Kafka nếu cần giải thích điểm bất đồng bộ đã được xác minh.
- [ ] Viết failure case payload thiếu/sai hoặc đối tượng đã bị xóa: thông báo vẫn hiển thị/dẫn về fallback tùy đúng implementation.
- [ ] Truy vết các model trả về từ iOffice schedule, HRM leave và HRM business trip; xác nhận mapper/adapter và convention ID trước khi mô tả.
- [ ] Chừa vị trí hình ba nguồn → mapper/adapter riêng → `ScheduleItemModel` (hoặc tên source thực) → calendar UI.
- [ ] Viết cách phân biệt loại event, merge danh sách, xử lý lỗi một nguồn và định danh liên nguồn đúng source.
- [ ] Kiểm tra: không nêu delivery guarantee của Kafka/FCM vượt quá những gì implementation đảm bảo.

### Task 9: Biên tập, render và kiểm tra đối chiếu cuối

**Files:**
- Modify: `Chapter5/section2.tex`, `Chapter5/section3.tex`, `Chapter5/section4.tex`
- Review: mọi `.dbml`, vị trí chèn hình và `main.tex`

**Produces:** Chương 5.2–5.4 có thể biên dịch, hình khớp caption/reference và nội dung có ownership rõ.

- [ ] Đặt caption theo mô hình “Hình 5.x. …”, `\label` duy nhất và tham chiếu `Hình~\ref{...}` trong đoạn giải thích gần nhất.
- [ ] Rà từng mục theo công thức: mục đích → hình → thành phần/luồng → ràng buộc/quyết định → ownership hoặc giới hạn.
- [ ] Kiểm tra mọi block chèn hình có filename dự kiến, caption và `label`; người viết có thể thay file hình mà không phải sửa nội dung.
- [ ] Chạy build LaTeX của `main.tex` tối thiểu hai lần để cập nhật reference; kiểm tra lỗi missing file, overfull box nghiêm trọng và undefined reference.
- [ ] Chạy `git diff --check`; kiểm tra chỉ có Chương 5, diagrams và tài liệu bằng chứng/DBML được thay đổi.
- [ ] Đọc lại với câu hỏi bảo vệ: “phần nào kế thừa?”, “Redis dùng làm gì?”, “constraint nào là DB và constraint nào do backend?”, “lịch hợp nhất xử lý khác schema thế nào?”.

## Self-review

**Spec coverage:** 5.2 được bao phủ bởi Tasks 2–4; 5.3 bởi Task 5; 5.4 bởi Tasks 6–8; chất lượng render, ownership và đối chiếu evidence bởi Tasks 1 và 9.

**Deliberate exclusions:** Không thêm API catalog, data dictionary toàn bộ, Kafka internals, CAS/LDAP, hay architecture của module không nằm trong phạm vi nghiệm thu.

**Verification:** Tasks 1, 5 và 9 kiểm tra source/schema/diagram/LaTeX. Các failure case thuộc SSO, notification và calendar được kiểm tra tại Tasks 7–8.
