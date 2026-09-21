# Rewrite Chapter 5 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Chapter 5 with an evidence-based system-design chapter following the approved 5.1--5.5 layout.

**Architecture:** Keep the chapter split by reader concern: system context, software components, data design, and integration mechanisms. Treat HRM and iOffice as existing source systems; identify additions and integrations without claiming unsupported implementation details.

**Tech Stack:** LaTeX, existing report image assets, project evidence packs.

**Spec:** User-approved Chapter 5 layout in the conversation on 2026-09-18.

## Global Constraints

- 5.1 contains only system-level components and integration boundaries.
- State ownership at every detailed HRM, iOffice, database, and integration discussion.
- Do not claim implementation details unless supported by `docs/ARCHITECTURE_SCOPE.md`, `docs/01_GATE0_EVIDENCE_INDEX.md`, or a cited source snapshot.
- Retain CSDL as the chapter's largest substantive section; do not turn it into a full data dictionary.

---

### Task 1: Reframe chapter entry and overall architecture

**Files:**
- Modify: `Chapter5/index.tex`
- Modify: `Chapter5/section1.tex`

- [ ] Replace the current technology-heavy introduction with the approved scope and chapter sequence.
- [ ] Write 5.1.1 and 5.1.2 using the existing overall-system figure only as a system-context figure.
- [ ] Verify no unsupported Kafka, Redis, CAS, LDAP, controller, or package detail remains in 5.1.

### Task 2: Write component and authentication design

**Files:**
- Create: `Chapter5/section2.tex`

- [ ] Write 5.2.1--5.2.4 with the monorepo and backend boundaries supported by the architecture scope.
- [ ] Identify inherited versus added/integrated components in each backend subsection.
- [ ] Use a text diagram where an image asset is not available; do not fabricate a figure.

### Task 3: Restructure database design

**Files:**
- Modify: `Chapter5/section3.tex`

- [ ] Write 5.3.1--5.3.7 around entities, relationships, constraints, rationale, and ownership.
- [ ] Retain only named tables and data models supported by report evidence.
- [ ] Use the targeted ERD as the overview and avoid claims of whole-database coverage or unverified normal forms.

### Task 4: Add integration mechanisms and chapter conclusion

**Files:**
- Create: `Chapter5/section4.tex`
- Modify: `Chapter5/index.tex`

- [ ] Write 5.4.1--5.4.4 for multi-domain authentication, one-time-ticket SSO, notifications, and unified calendar.
- [ ] Add 5.5 as a concise transition to Chapter 6.
- [ ] Include detail about Redis/Kafka only in the SSO/notification mechanisms where evidence supports it.

### Task 5: Compile and review

**Files:**
- Verify: `main.tex`

- [ ] Run the repository's LaTeX build command or `latexmk` if available.
- [ ] Inspect the log for undefined references, missing figures, and LaTeX errors.
- [ ] Review `git diff --check` and `git diff -- Chapter5` for unrelated edits and obsolete claims.
