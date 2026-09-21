# Chapter 5 Mermaid and Schema Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace provisional Chapter 5 diagrams with evidence-based Mermaid figures, document the actual FE/BE folder structures, and deepen database design through verified ERDs and selected schema tables.

**Architecture:** Mermaid source files are the editable source of truth; rendered PNG files are LaTeX assets. The architecture overview stays system-level but explicitly includes Redis as the short-lived SSO-ticket and Web-session store connected to HRM Backend. Database content is split by data ownership and verified relationships, never by guessed columns.

**Tech Stack:** Mermaid CLI/Puppeteer renderer already used in `image/uml/`, PNG, LaTeX, existing report evidence packs.

**Spec:** User-approved Chapter 5 layout in conversation; user amendment on 2026-09-19 to retain Redis in the overall architecture.

## Global Constraints

- Keep Redis in Hình 5.1 only as HRM Backend's short-lived SSO ticket/Web-session store; do not add its internal implementation or Kafka there.
- Derive every Mermaid entity, relation, field, PK, FK and constraint from an evidence pack or the actual schema; unknown facts are omitted.
- Record HRM and iOffice ownership in each data diagram and accompanying schema table.
- Use Mermaid source (`.mmd`) plus rendered PNG; never leave a diagram only as inline LaTeX text.
- Preserve the existing chapter scope: MyHCMUT Mobile integrates HRM and iOffice, it does not replace them.

---

### Task 1: Establish diagram inventory and verified data dictionary

**Files:**
- Create: `docs/chapter5/diagram-data-evidence.md`
- Inspect: `docs/01_GATE0_EVIDENCE_INDEX.md`, `docs/DAP_AN_DOI_CHIEU_THUC_TE.md`, `docs/03_REQUIREMENT_PACK_PROFILE.md`, `docs/04_REQUIREMENT_PACK_LEAVE.md`, `docs/05_REQUIREMENT_PACK_NOTIFICATION.md`

**Produces:** An evidence matrix mapping every planned diagram node/edge and schema-table field to a document location; entries without evidence are explicitly excluded.

- [ ] List the required figures: system context, mobile monorepo, HRM boundary, iOffice boundary, SSO sequence, notification/deep-link flow, unified calendar, data overview, and each eligible data group.
- [ ] Record Redis as `SSO ticket + Web session`, TTL no greater than 60 seconds, with atomic consumption via `GETDEL`.
- [ ] Record the verified leave relations: `tcns_nghi_phep_dang_ky`, `tcns_lich_ca_nhan`, `tcns_quy_trinh`, `tcns_quy_trinh_history`, `tcns_quy_trinh_user`, `tcns_so_nghi_phep_nam`, and `fw_file`.
- [ ] Record notification relations: `fw_notification`, `fw_notification_target`, `fw_notification_logs`, and `fw_user_device_token`.
- [ ] For profile, business trip and iOffice, distinguish verified table names from merely confirmed business concepts; omit column-level schemas when evidence is incomplete.

### Task 2: Create and render Mermaid architecture figures

**Files:**
- Create: `image/architecture/chapter5-overall.mmd`
- Create: `image/architecture/chapter5-mobile.mmd`
- Create: `image/architecture/chapter5-hrm.mmd`
- Create: `image/architecture/chapter5-ioffice.mmd`
- Create: corresponding `.png` files under `image/architecture/`
- Modify: `Chapter5/section1.tex`
- Modify: `Chapter5/section2.tex`

**Consumes:** Evidence matrix from Task 1.

**Produces:** Four rendered figures referenced from LaTeX with captions and labels.

- [ ] Draw Hình 5.1 with MyHCMUT Mobile, Authentication Service, HRM Backend, iOffice Backend, HRM Web, HRM/iOffice databases, FCM, and Redis.
- [ ] Draw Redis only as a supporting store connected to HRM Backend and label its limited responsibility; omit Kafka, CAS/LDAP, controllers and client libraries.
- [ ] Draw Hình 5.2 with `apps/myhcmut`, the three business modules, `packages/core`, `packages/shared`, and the feature flow View → Provider/Notifier → Repository/Service → Data source/API.
- [ ] Draw Hình 5.3 and 5.4 as boundaries between source backend, mobile-facing extension/integration, and owned data; do not invent an MVC layer tree.
- [ ] Render each `.mmd` with the repository's Mermaid/Puppeteer configuration and replace provisional boxed LaTeX diagrams with `\includegraphics` calls.

### Task 3: Add FE and BE folder-tree listings

**Files:**
- Modify: `Chapter5/section2.tex`

**Consumes:** Folder mapping in `docs/ARCHITECTURE_SCOPE.md`.

**Produces:** Two concise, source-accurate directory trees and explanatory prose.

- [ ] Add a FE tree headed by `apps/myhcmut`, `modules/hrm`, `modules/ioffice`, `modules/notification`, `packages/core`, and `packages/shared`; show only paths with a report-relevant responsibility.
- [ ] Add a BE tree headed by the verified `hrm-be` and `ioffice-be` integration areas; mark existing source-system modules separately from mobile extensions or integrations.
- [ ] Match the DATN Khoa pattern (monospaced tree followed by short bullets), but avoid copying its unrelated names or claiming a full source tree.

### Task 4: Create verified ERDs and schema tables

**Files:**
- Create: `image/erd/chapter5-data-overview.mmd`
- Create: `image/erd/chapter5-leave.mmd`
- Create: `image/erd/chapter5-notification.mmd`
- Create: rendered PNGs under `image/erd/`
- Modify: `Chapter5/section3.tex`

**Consumes:** Evidence matrix from Task 1.

**Produces:** One ownership-aware data overview, detailed leave and notification ERDs, and selected schema tables in LaTeX.

- [ ] Draw the overview ERD as bounded groups, not a fictitious single database: HRM profile/leave/business trip, iOffice documents/tasks/schedule, and mobile-support notification data.
- [ ] Draw the leave ERD with verified lifecycle and relation edges; document the state guard on `tcns_nghi_phep_dang_ky`, advisory lock scope and final leave-balance row lock in prose/table notes.
- [ ] Draw the notification ERD with the notification-to-target fan-out and delayed logs; document device-token upsert only if its uniqueness key is verified.
- [ ] Add schema tables only for entities whose field names, meaning and constraints are confirmed. Each table must show field, type only when verified, PK/FK/constraint, meaning, ownership and evidence reference.
- [ ] Keep profile/business-trip/iOffice at relationship-level where their schema fields cannot be verified; identify this limitation explicitly rather than fabricating a table schema.

### Task 5: Integrate, render-QA and compile

**Files:**
- Verify: `Chapter5/index.tex`, `Chapter5/section1.tex`, `Chapter5/section2.tex`, `Chapter5/section3.tex`, `Chapter5/section4.tex`, `main.tex`

- [ ] Build `main.tex` with `latexmk -g -pdf -interaction=nonstopmode -halt-on-error main.tex`.
- [ ] Inspect every new PNG at original size and rendered Chapter 5 pages for unreadable labels, clipping, or cross-page figure/caption separation.
- [ ] Run `git diff --check`; review the final Chapter 5 diff and verify no old provisional boxed diagrams or unsupported ERD claims remain.
