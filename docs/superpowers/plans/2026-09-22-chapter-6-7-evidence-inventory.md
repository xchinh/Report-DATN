# Chapter 6–7 Evidence Inventory Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce the three approved Stage A working documents that trace the current Chapter 1/4 scope to implementation evidence, classify existing test evidence by committed behavior, and derive a reviewable backlog without changing LaTeX or running new tests.

**Architecture:** Treat current Chapter 1 and Chapter 4 as the scope authority, Chapter 5 as the design cross-reference, and pinned source commits plus preserved test artifacts as implementation/test evidence. Build `01` first, derive behavior-level rows in `02`, then derive `03` only from rows explicitly marked “Cần bổ sung”; never infer a stronger conclusion from a lower evidence tier.

**Tech Stack:** Markdown, LaTeX source inspection, Git, GitNexus, `rg`, `git show`, existing Gate 0/audit documents.

**Spec:** `docs/superpowers/specs/2026-09-22-chapter-6-7-evidence-inventory-design.md`

## Global Constraints

- Stage A creates only `01_uc_fr_implementation_matrix.md`, `02_test_evidence_gap_matrix.md`, and `03_proposed_test_backlog.md` under `docs/chapter6-7-evidence/`.
- Do not modify Chapter 6, Chapter 7, or any other LaTeX file.
- Do not write, modify, or run tests during Stage A.
- Do not create new UC/FR/business rules; behavior decomposition may only restate commitments already present in current Chapter 1/4.
- Current Chapter 4 IDs override legacy mappings in `docs/02_SCOPE_CLAIM_TRACEABILITY.md`; legacy rows may be used only as evidence leads and must be remapped to current IDs.
- Regex comparison is only a discovery aid; completion requires manual confirmation that every official requirement has an actual matrix row with implementation status and evidence or a reason for waiting.
- GitNexus is only a lead-finding tool. Every report-version claim must be revalidated with `git show`, `git ls-tree`, or equivalent reads at the pinned commit.
- Keep implementation paths, commits, APIs, and code details in the internal inventory; do not treat them as mandatory Chapter 6 content.
- Keep evidence status separate from the decision to add testing.
- Label Gate 0 results as historical unless evidence metadata applies directly to the report version.
- Never record passwords, tokens, cookies, personnel data, or environment secrets.
- Use `apply_patch` for all document edits.
- Before every commit, stage only the intended files and run GitNexus `detect_changes` with `repo: "Report-DATN"`, `scope: "staged"`, and the current worktree path.

## Review Focus

- Current Chapter 4 defines three leave UCs, while the legacy traceability document defines ten; inventory rows must use the current three IDs and preserve legacy references only as internal evidence leads.
- A source file or UI screenshot proves implementation existence, not correct authorization, state transition, or end-to-end behavior.
- Gate 0 counts `427 = 370 + 57` are historical evidence and must not be presented as a fresh unified run.
- A WebView flow may be complete when current requirements explicitly commit to reuse of the existing Web function.
- Missing environment, role, command, or artifact metadata must lower evidence status rather than being silently inferred.
- Test source proves test existence only. Assign Pass/Fail solely from a preserved run result; use “Chưa xác định kết quả chạy” when run history is unknown and `Not Run` only when non-execution is confirmed.

---

## File Structure

- Create `docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md`: scope ledger and requirement-to-implementation traceability.
- Create `docs/chapter6-7-evidence/02_test_evidence_gap_matrix.md`: one row per committed behavior, existing evidence metadata, risk, and test-addition decision.
- Create `docs/chapter6-7-evidence/03_proposed_test_backlog.md`: only gaps from `02` marked “Cần bổ sung”, ordered P0/P1/P2.
- Do not create `04_test_execution_plan.md` in Stage A; Stage B creates it after the user reviews the first three documents.

### Task 1: Create the Stage A evidence workspace and document contracts

**Files:**
- Create: `docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md`
- Create: `docs/chapter6-7-evidence/02_test_evidence_gap_matrix.md`
- Create: `docs/chapter6-7-evidence/03_proposed_test_backlog.md`

**Interfaces:**
- Consumes: `docs/superpowers/specs/2026-09-22-chapter-6-7-evidence-inventory-design.md`
- Produces: Stable table schemas and controlled vocabularies used by every later task.

- [ ] **Step 1: Confirm the report worktree is clean and record the execution baseline**

Run:

```bash
git status --short
git branch --show-current
git rev-parse HEAD
```

Expected: no unrelated changes; branch and HEAD are copied into the “Mốc kiểm kê” section of all three documents.

If `git status --short` shows pre-existing changes outside this plan, stop and report them to the user. Do not stash, reset, checkout, or overwrite them. Record the current HEAD as `Commit nền Stage A`; do not hard-code an older plan/spec commit.

- [ ] **Step 2: Create the directory and the `01` document contract**

Use `apply_patch` to add a document with these sections:

```markdown
# MA TRẬN TRUY VẾT UC/FR – HIỆN THỰC

## 1. Mốc kiểm kê và nguồn thẩm quyền
## 2. Quy ước trạng thái
## 3. Mục tiêu và phạm vi chưa ánh xạ thành UC/FR
## 4. Ma trận UC/FR – hiện thực
## 5. Yêu cầu phi chức năng
## 6. Xung đột hoặc điểm chờ xác minh
```

Use the exact matrix columns from Spec §6.1. In Section 3, record supporting scope items such as authentication, notifications, and Web reuse without inventing new requirement IDs.

- [ ] **Step 3: Create the `02` document contract**

Use `apply_patch` to add:

```markdown
# MA TRẬN KHOẢNG TRỐNG BẰNG CHỨNG KIỂM THỬ

## 1. Mốc kiểm kê
## 2. Quy ước hành vi, bằng chứng và kết quả
## 3. Ma trận hành vi – bằng chứng
## 4. Tổng hợp theo UC/FR
## 5. Kết quả lịch sử và giới hạn tái lập
## 6. Điểm chờ xác minh
```

Use the exact columns from Spec §6.2. Define result values as Pass, Fail, Blocked, Not Run, Invalid; define evidence values as Đủ, Hạn chế, Chưa kiểm thử; define decisions as Cần bổ sung, Không cần bổ sung trong đợt này, Chờ xác minh.

- [ ] **Step 4: Create the `03` document contract**

Use `apply_patch` to add:

```markdown
# DANH SÁCH KIỂM THỬ ĐỀ XUẤT

## 1. Nguồn tạo backlog
## 2. Quy tắc ưu tiên
## 3. Danh sách P0
## 4. Danh sách P1
## 5. Danh sách P2
## 6. Điều kiện chuyển sang Giai đoạn B
```

Use the exact columns from Spec §6.3. State that every backlog row must point to a row in `02`; an empty priority section is valid and must say “Không có mục được chọn sau kiểm kê” rather than contain a placeholder.

- [ ] **Step 5: Verify schemas and prohibited scope**

Run:

```bash
rg -n '^#|Mục tiêu|UC/FR|Trạng thái hiện thực|Trạng thái bằng chứng|Quyết định bổ sung|Giới hạn kết luận' docs/chapter6-7-evidence
rg -n 'Chapter6|Chapter7|04_test_execution_plan' docs/chapter6-7-evidence
git diff --check
```

Expected: all required sections/columns are present; references to Chapter 6/7 or `04` are explanatory only; no whitespace errors.

- [ ] **Step 6: Review and commit the contracts**

Stage only the three files, run GitNexus `detect_changes(scope="staged")`, confirm documentation-only low risk, then commit:

```bash
git add docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md \
        docs/chapter6-7-evidence/02_test_evidence_gap_matrix.md \
        docs/chapter6-7-evidence/03_proposed_test_backlog.md
git commit -m "docs(thesis): scaffold chapter 6-7 evidence inventory"
```

### Task 2: Populate the authoritative requirement and scope ledger

**Files:**
- Modify: `docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md`

**Interfaces:**
- Consumes: `Chapter1/section1.tex`, all `Chapter4/**/*.tex`, Task 1 schema.
- Produces: Complete current requirement inventory and behavior/acceptance statements for later implementation verification.

- [ ] **Step 1: Extract the authoritative current IDs**

Run:

```bash
rg -o --no-filename '((UC|FR)-[A-Z]+-[0-9]+|NFR-[0-9]+)' Chapter4 | sort -u > /tmp/ch4_requirement_ids.txt
sed -n '1,240p' /tmp/ch4_requirement_ids.txt
```

Expected current groups include profile (`PRO`), leave (`LEV`), business trip (`BTR`), office (`OFF`), schedule (`SCH`), and `NFR-01` through `NFR-05`.

- [ ] **Step 2: Record Chapter 1 objectives and scope boundaries**

Read:

```bash
sed -n '39,116p' Chapter1/section1.tex
```

Update Sections 1 and 3 of `01` with the exact goals, business domains, Web reuse statement, and the rule that HRM/iOffice remain source systems. Do not create synthetic UC/FR IDs for authentication, notifications, or WebView support.

- [ ] **Step 3: Record profile requirements and committed behaviors**

Read `Chapter4/section2/profile/index.tex` completely. Add FR-PRO-01..03 and UC-PRO-01..03 rows. Acceptance behavior must distinguish profile lookup, Web HRM handoff/update, and authorized review of proposed changes.

- [ ] **Step 4: Record leave requirements and committed behaviors**

Read `Chapter4/section2/leave/index.tex` completely. Add FR-LEV-01..04 and UC-LEV-01..03 rows. Preserve the current wizard-three-step contract and the current UC grouping; do not copy the legacy ten-UC decomposition as current scope.

- [ ] **Step 5: Record business-trip requirements and committed behaviors**

Read `Chapter4/section2/business_trip/index.tex` completely. Add FR-BTR-01..04 and UC-BTR-01..03 rows, including the five-step wizard, recall/resubmit behavior, authority checks, and state-change exception already specified.

- [ ] **Step 6: Record office, mission, schedule, and NFR requirements**

Read `Chapter4/section2/ioffice_schedule/index.tex` and `Chapter4/section3.tex` completely. Add FR-OFF-01..02, FR-SCH-01..02, UC-OFF-01, UC-SCH-01..02, and NFR-01..05. Keep the combined current UC-OFF-01 instead of importing legacy separate iOffice UC IDs.

- [ ] **Step 7: Verify complete coverage without extra IDs**

Run:

```bash
rg -o --no-filename '((UC|FR)-[A-Z]+-[0-9]+|NFR-[0-9]+)' docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md | sort -u > /tmp/inventory_requirement_ids.txt
comm -23 /tmp/ch4_requirement_ids.txt /tmp/inventory_requirement_ids.txt
comm -13 /tmp/ch4_requirement_ids.txt /tmp/inventory_requirement_ids.txt
```

Expected: the first command produces no missing IDs. Any extra ID must be a quoted legacy reference inside the conflict section, not a new inventory requirement; explicitly review and annotate each extra.

- [ ] **Step 8: Manually verify actual data rows, not mere text occurrences**

For every line in `/tmp/ch4_requirement_ids.txt`, locate an anchored table row in `01` and read the full row:

```bash
while IFS= read -r requirement_id; do
  rg -n "^\\| ${requirement_id} \\|" docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md \
    || echo "MISSING DATA ROW: ${requirement_id}"
done < /tmp/ch4_requirement_ids.txt
```

Expected: no `MISSING DATA ROW`. Manually confirm each matching row contains a scope value, implementation status, and internal evidence or a concrete “Chờ xác minh” reason. A code appearing only in prose, examples, or conflict notes does not count.

- [ ] **Step 9: Commit the scope ledger**

Run `git diff --check`, stage `01`, run GitNexus `detect_changes(scope="staged")`, then commit:

```bash
git add docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md
git commit -m "docs(thesis): inventory chapter 4 requirements"
```

### Task 3: Verify HRM, authentication, notification, and Web implementation evidence

**Files:**
- Modify: `docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md`

**Interfaces:**
- Consumes: Task 2 rows; Chapter 5; pinned mobile/HRM source commits; GitNexus queries.
- Produces: Implementation statuses and internal evidence for profile, leave, business trip, authentication, notifications, and Web reuse.

- [ ] **Step 1: Validate pinned commits without changing source worktrees**

Run:

```bash
git -C /home/xchinh/workspace/myhcmut-mobile cat-file -e 4fe5d9c^{commit}
git -C /home/xchinh/workspace/hrm-be cat-file -e 38745a26^{commit}
git -C /home/xchinh/workspace/hrm-fe cat-file -e 83caf648^{commit}
```

Expected: all commits resolve. If one does not resolve, mark the related evidence “Chờ xác minh”; do not substitute current HEAD silently.

- [ ] **Step 2: Map design sections to current requirement groups**

Read `Chapter5/section1.tex`, `Chapter5/section2.tex`, `Chapter5/section3.tex`, and `Chapter5/section4.tex`. Add exact section labels to the “Thiết kế liên quan” column; record conflicts rather than editing Chapter 5.

- [ ] **Step 3: Query implementation flows before opening individual symbols**

Use GitNexus `query` against `myhcmut-mobile` and `hrm-be` for:

```text
profile lookup update WebView approval
leave create draft validate submit approve recall
business trip create submit approve recall
authentication token WebView one-time ticket
notification FCM deep link routing
```

For every relevant result, use `context` on the selected symbol before citing file/function evidence. Record repository, pinned commit, symbol/file, and which committed behavior it supports.

Treat every GitNexus result as a search lead only. Before recording evidence, confirm that the file and behavior exist at the pinned commit with `git ls-tree` and `git show`. If the indexed revision differs, do not cite the GitNexus flow as direct evidence.

- [ ] **Step 4: Verify pinned-source content without checkout**

Use read-only commands such as:

```bash
git -C /home/xchinh/workspace/myhcmut-mobile ls-tree -r --name-only 4fe5d9c | rg 'profile|time_off|business_trip|notification|webview|auth'
git -C /home/xchinh/workspace/hrm-be ls-tree -r --name-only 38745a26 | rg 'tcns_nghi_phep|tcns_dang_ky_cong_tac|fw_auth|notification'
git -C /home/xchinh/workspace/hrm-fe ls-tree -r --name-only 83caf648 | rg 'sso|ticket|history|profile|ly-lich'
```

Use `git show <commit>:<path>` for the exact files selected from these lists. Do not cite working-tree-only content as baseline evidence.

- [ ] **Step 5: Assign implementation status per requirement**

For each HRM/current supporting-scope row, record Native/WebView/Kết hợp, implementation evidence, limitations, and one allowed conclusion. A WebView implementation is “Hoàn thành trong phạm vi” when the current requirement explicitly commits to Web reuse and the handoff flow exists; it is not downgraded merely for using WebView.

- [ ] **Step 6: Commit HRM-side implementation evidence**

Run `git diff --check`, stage `01`, run GitNexus `detect_changes(scope="staged")`, then commit:

```bash
git add docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md
git commit -m "docs(thesis): verify HRM implementation evidence"
```

### Task 4: Verify iOffice, mission, schedule, and cross-source calendar evidence

**Files:**
- Modify: `docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md`

**Interfaces:**
- Consumes: Task 2 rows, Chapter 5 integration design, pinned mobile source, available iOffice source snapshot.
- Produces: Completed implementation matrix for all current functional and non-functional requirements.

- [ ] **Step 1: Validate source availability and commit identity**

Run:

```bash
test -d /home/xchinh/workspace/ioffice-be && git -C /home/xchinh/workspace/ioffice-be cat-file -e 53f069a366f7d465253b6fceedeea25a01bec176^{commit}
git -C /home/xchinh/workspace/myhcmut-mobile cat-file -e 4fe5d9c^{commit}
```

If iOffice source or commit is unavailable, use the source snapshot and preserved artifacts only, and mark direct source verification “Chờ xác minh”.

- [ ] **Step 2: Locate current mobile implementation at the pinned commit**

Run:

```bash
git -C /home/xchinh/workspace/myhcmut-mobile ls-tree -r --name-only 4fe5d9c | rg 'incoming|outgoing|mission|task|schedule|attendance|calendar'
```

Inspect exact pinned files with `git show`. Record evidence for document lookup, mission lookup/reporting, attendance/absence, and the three-source calendar.

- [ ] **Step 3: Verify backend routes and data behavior**

Use native `rg`/`git show` against the pinned iOffice commit for routes selected from Chapter 5 and current UC flows. Do not infer backend authorization from a hidden mobile button. Record server-side evidence only when the route/middleware/handler is directly visible.

- [ ] **Step 4: Complete NFR implementation observations**

For NFR-01..05, record only observable implementation support and limits. Do not mark an NFR fully satisfied from architectural intent alone; use “Một phần” or “Chờ xác minh” where runtime/measurement evidence is required.

- [ ] **Step 5: Review all incomplete or conflicting rows**

Run:

```bash
rg -n 'Chờ xác minh|Một phần|Ngoài phạm vi|xung đột|legacy|lịch sử' docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md
```

Expected: every match has a concrete reason and an allowed-conclusion limit.

- [ ] **Step 6: Commit the complete implementation matrix**

Run `git diff --check`, stage `01`, run GitNexus `detect_changes(scope="staged")`, then commit:

```bash
git add docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md
git commit -m "docs(thesis): complete implementation traceability"
```

### Task 5: Inventory existing tests and classify evidence per committed behavior

**Files:**
- Modify: `docs/chapter6-7-evidence/02_test_evidence_gap_matrix.md`

**Interfaces:**
- Consumes: completed `01`; `docs/01_GATE0_EVIDENCE_INDEX.md`; `docs/12_BASELINE_REPRODUCIBILITY_AUDIT.md`; `docs/13_CURRENT_SOURCE_SNAPSHOT.md`; pinned test trees.
- Produces: Behavior-level evidence matrix with separate evidence status, risk, and add-test decision.

- [ ] **Step 1: Enumerate pinned mobile and backend test files without running them**

Run:

```bash
git -C /home/xchinh/workspace/myhcmut-mobile ls-tree -r --name-only 4fe5d9c | rg '/test/.*_test\.dart$' > /tmp/mobile_test_files.txt
git -C /home/xchinh/workspace/hrm-be ls-tree -r --name-only 38745a26 | rg 'test/.*\.(test|spec)\.(ts|js)$' > /tmp/hrm_test_files.txt
sed -n '1,260p' /tmp/mobile_test_files.txt
sed -n '1,220p' /tmp/hrm_test_files.txt
```

These commands enumerate evidence candidates only; they do not execute tests.

- [ ] **Step 2: Reconcile historical test metadata**

Read completely:

```bash
sed -n '1,260p' docs/01_GATE0_EVIDENCE_INDEX.md
sed -n '1,220p' docs/12_BASELINE_REPRODUCIBILITY_AUDIT.md
sed -n '1,140p' docs/13_CURRENT_SOURCE_SNAPSHOT.md
```

Record `427/427`, `370`, and `57` as Gate 0 historical results; record `53/53` as a later conditional run with its own commit/environment. Do not merge them.

- [ ] **Step 3: Decompose each current UC/FR into committed behaviors**

Use the acceptance statements in `01` and assign internal behavior IDs such as `UC-LEV-03-B01`. These rows describe committed behaviors only. Do not promote an inferred error, concurrency, security, or load scenario into a new behavior requirement.

When a proposed scenario is not stated directly in Chapter 4, populate the mandatory “Căn cứ lựa chọn kịch bản” column with the committed behavior it verifies and the concrete consequence of leaving that behavior unchecked. A scenario without this trace is excluded from `02` and `03`.

- [ ] **Step 4: Map each existing test or manual artifact to the behavior it actually proves**

Inspect test source with `git show`; do not infer coverage from filenames. For manual scenarios, require version, environment, role, data, expected/actual result, and artifact location. When metadata is missing, classify the evidence as “Hạn chế”.

Record result source separately:

- Test code with no run artifact: test exists; result is “Chưa xác định kết quả chạy”.
- Historical log: preserve its result and label it historical baseline.
- Direct report-version run artifact: preserve its result and complete metadata.
- Confirmed never run: use `Not Run`.

Never assign `Pass` from test source alone.

- [ ] **Step 5: Assign result, applicability, risk, and decision independently**

For every behavior row:

- Result: Pass, Fail, Blocked, Not Run, or Invalid.
- Result may also be “Chưa xác định kết quả chạy” when run history is unknown.
- Applicability: direct report version or historical baseline.
- Evidence: Đủ, Hạn chế, or Chưa kiểm thử.
- Risk: Cao, Trung bình, or Thấp with one-sentence consequence.
- Decision: Cần bổ sung, Không cần bổ sung trong đợt này, or Chờ xác minh.

Do not treat a low-risk “Không cần bổ sung” decision as evidence.

- [ ] **Step 6: Add UC/FR summaries and historical limitations**

A UC/FR summary is “Đủ bằng chứng” only when its committed high-risk/core behaviors have suitable direct evidence. In Section 5, state why historical Gate 0 totals do not prove full current requirement coverage.

- [ ] **Step 7: Verify every in-scope behavior has a row**

Run:

```bash
rg -n '^\| (UC|FR|NFR)-' docs/chapter6-7-evidence/02_test_evidence_gap_matrix.md
rg -n 'Đủ bằng chứng|Bằng chứng hạn chế|Chưa kiểm thử|Cần bổ sung|Không cần bổ sung trong đợt này|Chờ xác minh' docs/chapter6-7-evidence/02_test_evidence_gap_matrix.md
git diff --check
```

Expected: no committed behavior is omitted, and every row has both an evidence status and a separate decision.

- [ ] **Step 8: Commit the evidence-gap matrix**

Stage `02`, run GitNexus `detect_changes(scope="staged")`, then commit:

```bash
git add docs/chapter6-7-evidence/02_test_evidence_gap_matrix.md
git commit -m "docs(thesis): classify existing test evidence"
```

### Task 6: Derive the proposed test backlog without executing tests

**Files:**
- Modify: `docs/chapter6-7-evidence/03_proposed_test_backlog.md`

**Interfaces:**
- Consumes: every `02` row whose decision is “Cần bổ sung”.
- Produces: Reviewable P0/P1/P2 backlog for later Stage B planning.

- [ ] **Step 1: Extract the selected gaps**

Run:

```bash
rg -n 'Cần bổ sung' docs/chapter6-7-evidence/02_test_evidence_gap_matrix.md
```

Expected: this list is the complete input; do not add speculative scenarios absent from `02`.

- [ ] **Step 2: Assign P0/P1/P2 from the approved rules**

Assign P0 to missing evidence for core flows, authorization, state transitions, or data integrity; P1 to important integration/error behavior affecting conclusions; P2 to accepted lower-risk gaps. Preserve the original behavior ID and risk rationale.

- [ ] **Step 3: Write each backlog row with an observable expected result**

For every selected row, specify scenario outline, suitable test form, roles/data/environment needed, expected result, evidence to save, and the minimum stop condition. Do not include passwords, tokens, or real personnel data.

- [ ] **Step 4: Verify backlog provenance**

Run:

```bash
rg -o --no-filename '((UC|FR)-[A-Z]+-[0-9]+-B[0-9]+|NFR-[0-9]+-B[0-9]+)' docs/chapter6-7-evidence/02_test_evidence_gap_matrix.md | sort -u > /tmp/gap_behavior_ids.txt
rg -o --no-filename '((UC|FR)-[A-Z]+-[0-9]+-B[0-9]+|NFR-[0-9]+-B[0-9]+)' docs/chapter6-7-evidence/03_proposed_test_backlog.md | sort -u > /tmp/backlog_behavior_ids.txt
comm -13 /tmp/gap_behavior_ids.txt /tmp/backlog_behavior_ids.txt
```

Expected: no backlog-only behavior ID. Manually confirm every backlog behavior is marked “Cần bổ sung” in `02`.

- [ ] **Step 5: Commit the proposed backlog**

Run `git diff --check`, stage `03`, run GitNexus `detect_changes(scope="staged")`, then commit:

```bash
git add docs/chapter6-7-evidence/03_proposed_test_backlog.md
git commit -m "docs(thesis): propose prioritized evidence tests"
```

### Task 7: Perform Stage A cross-document review and handoff

**Files:**
- Modify only if corrections are required:
  - `docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md`
  - `docs/chapter6-7-evidence/02_test_evidence_gap_matrix.md`
  - `docs/chapter6-7-evidence/03_proposed_test_backlog.md`

**Interfaces:**
- Consumes: all Stage A outputs and the approved spec.
- Produces: reviewed inventory ready for user approval before Stage B.

- [ ] **Step 1: Re-run current requirement coverage checks**

Run:

```bash
rg -o --no-filename '((UC|FR)-[A-Z]+-[0-9]+|NFR-[0-9]+)' Chapter4 | sort -u > /tmp/ch4_requirement_ids.txt
while IFS= read -r requirement_id; do
  rg -n "^\\| ${requirement_id} \\|" docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md \
    || echo "MISSING DATA ROW: ${requirement_id}"
done < /tmp/ch4_requirement_ids.txt
```

Expected: no `MISSING DATA ROW`; then manually inspect every returned row for non-empty status and evidence/reason fields.

- [ ] **Step 2: Check classification separation and evidence language**

Run:

```bash
rg -n 'hoàn thành toàn diện|kiểm chứng đầy đủ|triệt để|vượt trội|100% an toàn|bug-free' docs/chapter6-7-evidence
rg -n 'Gate 0|lịch sử|Trực tiếp cho phiên bản báo cáo|Bằng chứng hạn chế|Chưa kiểm thử' docs/chapter6-7-evidence
```

Expected: no unsupported absolute claim; every Gate 0 result is labeled historical; direct evidence has version metadata.

- [ ] **Step 3: Scan for placeholders and sensitive material**

Run:

```bash
rg -n 'T[B]D|TO[D]O|FIX[M]E|điền sau|bổ sung sau' docs/chapter6-7-evidence
rg -n '(Bearer [A-Za-z0-9._-]+|password\s*[:=]|refresh[_-]?token\s*[:=]|connect\.sid\s*=)' docs/chapter6-7-evidence
```

Expected: no matches. Generic words such as “token” may appear only as architectural terms without secret values.

- [ ] **Step 4: Confirm Stage A did not expand scope**

Run:

```bash
stage_a_base=$(sed -n 's/^- Commit nền Stage A: `\([^`]*\)`.*/\1/p' docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md)
test -n "$stage_a_base"
git diff "$stage_a_base" --name-only
```

Expected: `docs/chapter6-7-evidence/01..03` only; no LaTeX, source, test, plan/spec, or `04` file after the recorded Stage A base.

- [ ] **Step 5: Review final diff and commit corrections if necessary**

Run:

```bash
git diff --check
git status --short
```

If review fixes were required, stage only `01..03`, run GitNexus `detect_changes(scope="staged")`, and commit:

```bash
git add docs/chapter6-7-evidence/01_uc_fr_implementation_matrix.md \
        docs/chapter6-7-evidence/02_test_evidence_gap_matrix.md \
        docs/chapter6-7-evidence/03_proposed_test_backlog.md
git commit -m "docs(thesis): finalize evidence inventory review"
```

- [ ] **Step 6: Stop at the Stage A approval gate**

Report the three document paths, source commits examined, unresolved conflicts, counts of Đủ/Hạn chế/Chưa kiểm thử, and P0/P1/P2 backlog counts. Do not create `04`, run tests, or edit Chapters 6–7 until the user approves Stage A.
