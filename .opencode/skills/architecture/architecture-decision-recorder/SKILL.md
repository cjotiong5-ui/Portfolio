---
name: architecture-decision-recorder
description: Records one architecture decision with alternatives, consequences and status, using RFC/ADR/C4 formats; does not design the whole system.
---

# Architecture Decision Recorder

**Goal:** Preserve the context, forces, alternatives, decision, and consequences of one architecturally significant choice in a compact durable record. Change only approved decision documentation; do not design the whole system, approve a decision silently, delete history, audit code, or implement the choice.

**Execution contract:** The checklist defines completion. Track each item internally as `PENDING`, `PROVEN` with evidence, `CLEARED` with evidence its condition is absent, or `UNPROVEN` with a gap; reading, delegation, or tool failure is not proof. Reconcile after each section. Before returning, resolve all `PENDING`, count only `PROVEN` and `CLEARED`, and apply verdict and approval rules to every gap.
Preserve intent, scope, and existing authorization. Continue authorized work; ask only for consequential unresolved choices or required external approval. Scale depth to material risk without skipping checks. Preserve dependency and safety order; otherwise choose an appropriate verification method.
Accept equivalent user or repository evidence; no other skill, named artifact, or complete lifecycle is required. Preserve source requirement and decision IDs. Bind reused evidence to relevant source versions, dirty changes, configuration, and environment; invalidate only affected claims.
On continuation, reconcile task, authorization, current state, and unresolved evidence. For long work, return a compact continuation record or update an already authorized artifact; read-only skills do not persist it. Distinguish artifact readiness, verified behavior, and external-action authority.
Prepare authorized work before required approval. If blocked by an instruction, cite its exact source and unresolved boundary; do not invent approval gates from caution.


## Tool Routing

| Need | Preferred capability | Fallback |
|---|---|---|
| Existing decision convention | Repository search and direct document reads | Use the default path and compact format |
| Decision drivers | Requirements, architecture artifacts, implementation evidence, and stakeholder statements | Mark unsupported drivers `UNKNOWN` |
| Alternatives and external claims | Repository evidence plus current official sources | Mark time-sensitive claims `UNVERIFIED` |
| Sequence and supersession | Existing filenames, indexes, and decision links | Return `BLOCKED` rather than reuse a number |
| Document mutation | Minimal patch to one approved decision record and necessary supersession links | Return `BLOCKED` if authority or path is unclear |

One record captures one decision. If the request contains independent decisions with different drivers or lifecycles, split them only with explicit approval.

## Artifact Rules

- Reuse the repository's established ADR convention when one exists.
- Otherwise use `docs/architecture/decisions/NNNN-<slug>.md` with the next unused monotonic number.
- Never renumber, delete, or rewrite the decision and rationale of historical records. Permit scoped status and supersession-link updates under the rules below; distinguish evolving proposed drafts from accepted history.
- Default a new record to `Proposed`.
- Use `Accepted` only after explicit confirmation from an authorized decision-maker.
- A proposed replacement links to the current decision without changing its effective status. Mark the old record `Superseded` and link both directions only after the replacement is explicitly accepted; preserve historical content.
- Keep the record short enough to review as a single decision.
- Preserve the rationale a future maintainer needs to reconsider it safely.
- Label retrospective records explicitly; do not imply that documentation created after implementation was prior approval.
- Separate evidence needed before acceptance from monitoring required after adoption.
- Prefer stable repository references over conversation, branch-local, or ephemeral links.

## Checklist

### 1. Establish the Decision Contract

- [ ] Resolve the exact decision, scope, owner or deciders, affected system, and why the choice is architecturally significant.
- [ ] Read repository instructions, Git state, and existing decision conventions.
- [ ] Search for duplicate, conflicting, deprecated, or superseding decisions before allocating a new record.
- [ ] Confirm the request is one decision rather than a broad design or implementation plan.
- [ ] Resolve the approved status; default to `Proposed` when acceptance is not explicit.

### 2. Gather Context and Forces

- [ ] State the current context and problem in value-neutral language.
- [ ] Extract business drivers, quality attributes, constraints, assumptions, and decision horizon from available evidence.
- [ ] Identify affected boundaries, contracts, data, security, operations, cost, ownership, and migration implications.
- [ ] Separate present facts from forecasts and preferences.
- [ ] Record contradictions or missing evidence that could change the choice.

### 3. Evaluate Alternatives

- [ ] Include the status quo and the simplest credible option unless they are demonstrably infeasible.
- [ ] For an open choice, compare materially different credible alternatives; for retrospective records, include only evidenced historical options and mark missing rationale unknown.
- [ ] Compare options against the same drivers: correctness, quality targets, complexity, reversibility, cost, operations, team fit, and evolution.
- [ ] State why each rejected alternative loses in this context without claiming universal inferiority.
- [ ] Record sensitivity or review triggers that would make a rejected option preferable later.

### 4. Record the Decision

- [ ] Write title, status, date, deciders or owner, context, drivers, considered options, decision, consequences, validation, and review triggers.
- [ ] State the decision in active, testable language and name what remains deliberately undecided.
- [ ] Record positive, negative, and neutral consequences plus accepted risks.
- [ ] Link affected requirements, designs, diagrams, interfaces, migration documents, or issues by stable repository reference.
- [ ] Apply the Artifact Rules for proposed or accepted supersession; verify links and preserve prior rationale.

### 5. Validate and Report

- [ ] Confirm the record contains one decision and can be understood without conversation history.
- [ ] Confirm consequential claims have evidence or labelled assumptions/unknowns with validation actions; never invent historical rationale or rejected alternatives for a retrospective record.
- [ ] Confirm `Accepted` was not assigned without explicit authority.
- [ ] Identify the requirements, interfaces, and downstream decisions affected by this decision or its supersession; preserve the accepted/proposed distinction and historical rationale.
- [ ] Use `RECORDED` when the record and status are valid; use `INCOMPLETE` when material context or required acceptance authority remains unresolved; a complete explicitly Proposed record does not require acceptance to be `RECORDED`; use `BLOCKED` for ambiguous scope, unsafe numbering, conflicting ownership, or no writable destination.

## Self-Check

- [ ] **Reconcile before returning.** Check item-level evidence, requirement coverage, contradictions, scope, verdict, and applicable cleanup. Correct the report or authorized artifacts. Reuse valid evidence; do not automatically rescan the repository or rerun successful commands. Repeat checks only for relevant changes, failures, or unresolved evidence. Disclose remaining gaps.

## Output Contract

Report in the user's language, in this order; retain all five fields and state each fact once. Small results may use one line per field; omit empty tables and do not copy linked artifacts:

1. **Result:** Skill-specific verdict and supported outcome.
2. **Scope:** Reviewed/changed scope, exclusions, baseline, and material assumptions.
3. **Evidence:** Skill-specific fields below; distinguish facts, inferences, and unverified claims. Link artifacts; use tables when useful.
4. **Verification:** Checks/results, unavailable evidence, and applicable cleanup/external state.
5. **Completion:** `Checklist: X/Y complete`; `Incomplete: None` or each `UNPROVEN` item's reason, outcome impact, and exact next action; residual risks and required decisions.

**Skill-specific evidence:** Artifact path, decision identity/status/owner, selected option, alternatives, consequences, evidence, and acceptance/validation needs. Report links or status changes to historical records, preserving their rationale; identify unresolved choices and review triggers without implying acceptance of a proposal.

---

## Enrichment: RFC / ADR / C4 documentation formats (from technical-spec)

# Technical Specification & Design Documents

> Expert guidance for writing effective technical design documents, RFCs, Architecture Decision Records, and technology evaluation frameworks.

## Core Philosophy

- **Write before code** — Design documents prevent costly rework and align teams
- **Living documents** — Keep docs updated as the system evolves
- **Clarity over completeness** — Simple, direct language reduces cognitive load
- **Diagrams as code** — Version-controlled, maintainable architecture diagrams
- **Decisions over descriptions** — Document why, not just what

---

## Hard Rules (Must Follow)

> These rules are mandatory. Violating them means the skill is not working correctly.

### Alternatives Required

**Every design document must include at least 2 alternative solutions.**

```markdown
❌ FORBIDDEN:
## Solution
We will use PostgreSQL for the database.
(No alternatives considered)

✅ REQUIRED:
## Proposed Solution
PostgreSQL for primary database.

## Alternatives Considered

### Option A: PostgreSQL (Recommended)
**Pros**: ACID compliance, JSON support, mature ecosystem
**Cons**: Vertical scaling limits
**Decision**: Chosen for reliability and team expertise

### Option B: MongoDB
**Pros**: Horizontal scaling, flexible schema
**Cons**: Eventual consistency, less familiar to team
**Decision**: Rejected due to consistency requirements

### Option C: DynamoDB
**Pros**: Serverless, auto-scaling
**Cons**: Vendor lock-in, complex query patterns
**Decision**: Rejected due to query flexibility needs
```

### Diagrams Required

**System designs must include architecture diagrams. No text-only descriptions.**

```markdown
❌ FORBIDDEN:
"The user sends a request to the API, which talks to the database
and returns a response."

✅ REQUIRED:
Include at least one of:
- C4 Context/Container diagram
- Sequence diagram for key flows
- Data flow diagram

Example (Mermaid):
```mermaid
sequenceDiagram
    Client->>API: POST /orders
    API->>Auth: Validate token
    Auth-->>API: User context
    API->>DB: Create order
    DB-->>API: Order ID
    API-->>Client: 201 Created
```
```

### Success Metrics Defined

**Every design must include measurable success criteria.**

```markdown
❌ FORBIDDEN:
## Goals
- Make the system faster
- Improve reliability
- Better user experience

✅ REQUIRED:
## Success Metrics

| Metric | Current | Target | Measurement |
|--------|---------|--------|-------------|
| API Latency (P95) | 500ms | <200ms | Prometheus histogram |
| Availability | 99.5% | 99.9% | Uptime monitoring |
| Error Rate | 2% | <0.1% | Error tracking |
| Throughput | 1K req/s | 10K req/s | Load testing |
```

### Risks and Mitigations

**All designs must identify risks and their mitigations.**

```markdown
❌ FORBIDDEN:
(No risk section, assuming everything will work)

✅ REQUIRED:
## Risks & Mitigations

| Risk | Severity | Likelihood | Mitigation |
|------|----------|------------|------------|
| Database migration fails | High | Medium | Backup + rollback plan, test in staging |
| Third-party API unavailable | Medium | Low | Circuit breaker, fallback cache |
| Team lacks expertise | Medium | Medium | Pair programming, external review |
| Scope creep | High | High | Fixed scope document, change control |
```

---

## When to Use This Skill

| Scenario | Document Type | Complexity |
|----------|--------------|------------|
| New feature design | Technical Design Doc | Medium-High |
| System architecture | C4 Model Diagrams | Medium |
| Major technical decision | Architecture Decision Record (ADR) | Low-Medium |
| Cross-team proposal | RFC (Request for Comments) | Medium-High |
| Technology evaluation | Tech Selection Matrix | Medium |
| API contract | OpenAPI/AsyncAPI Spec | Low-Medium |

---

## Document Types Overview

### Technical Design Document (TDD)
**Purpose**: Blueprint for implementing a feature or system
**Audience**: Engineers, technical leads
**When**: Before implementing significant features
**Sections**: Problem, solution, alternatives, risks, timeline

### RFC (Request for Comments)
**Purpose**: Proposal for discussion and feedback
**Audience**: Cross-functional teams
**When**: Need consensus on technical direction
**Sections**: Problem statement, proposal, trade-offs, open questions

### Architecture Decision Record (ADR)
**Purpose**: Document a single architectural decision
**Audience**: Current and future engineers
**When**: Any architecturally significant choice
**Sections**: Context, decision, consequences, status

### C4 Model Diagrams
**Purpose**: Visualize system architecture at multiple zoom levels
**Audience**: Technical and non-technical stakeholders
**When**: Communicating system structure
**Levels**: Context, Container, Component, Code

---

## Essential Document Sections

### 1. Front Matter

```markdown
# Title: User Authentication System

**Author**: Jane Doe
**Status**: Proposed | In Review | Approved | Implemented
**Created**: 2025-12-18
**Last Updated**: 2025-12-18
**Reviewers**: @tech-lead, @security-team
```

### 2. Problem Statement (The "Why")

```markdown
## Problem

**Current State**: Users authenticate via legacy session cookies, no MFA support.
**Impact**: 23% of security incidents related to compromised credentials.
**Constraint**: Must support 10K concurrent users, <200ms login latency.
**Goal**: Implement secure, scalable authentication with MFA and OAuth support.
```

### 3. Proposed Solution (The "What")

```markdown
## Solution

Implement JWT-based authentication with:
- Access tokens (15min TTL) + Refresh tokens (7 day TTL)
- TOTP-based MFA (Google Authenticator compatible)
- OAuth 2.0 providers (Google, GitHub)
- Redis for token blacklist and session management

### High-Level Design

[Include C4 Container diagram here]

### Data Flow

1. User submits credentials → Auth Service validates
2. Auth Service generates JWT pair, stores refresh token in Redis
3. Client includes access token in Authorization header
4. API Gateway validates token, extracts user context
5. On expiry, client exchanges refresh token for new access token
```

### 4. Alternatives Considered

```markdown
## Alternatives

### Option A: Session-based authentication
**Pros**: Simpler implementation, server-side revocation
**Cons**: Doesn't scale horizontally, higher latency
**Decision**: Rejected - doesn't meet scalability requirements

### Option B: Auth0 (3rd party)
**Pros**: Battle-tested, feature-complete
**Cons**: $500/month cost, vendor lock-in
**Decision**: Deferred - revisit if team velocity insufficient
```

### 5. Risk Assessment

```markdown
## Risks & Mitigations

| Risk | Severity | Likelihood | Mitigation |
|------|----------|------------|------------|
| JWT secret leak | Critical | Low | Rotate secrets quarterly, use HSM |
| Token theft (XSS) | High | Medium | HttpOnly cookies, CSP headers |
| Redis downtime | High | Low | Fallback to stateless validation |
| Clock skew issues | Medium | Medium | Use `nbf` claim, allow 5min tolerance |
```

### 6. Implementation Plan

```markdown
## Work Breakdown

### Phase 1: Core Authentication (Week 1-2)
- [ ] JWT generation/validation service
- [ ] Password hashing (bcrypt)
- [ ] User repository interface
- [ ] Unit tests + integration tests

### Phase 2: MFA (Week 3)
- [ ] TOTP secret generation
- [ ] QR code generation
- [ ] Verification endpoint
- [ ] Backup codes

### Phase 3: OAuth (Week 4)
- [ ] Google OAuth integration
- [ ] GitHub OAuth integration
- [ ] Account linking flow

### Success Metrics
- 100% test coverage for auth logic
- <100ms token validation latency
- Zero security vulnerabilities in audit
```

### 7. Open Questions

```markdown
## Open Questions

1. **Token storage**: Should refresh tokens be in httpOnly cookie or localStorage?
   - **Recommendation**: Cookie (XSS protection), need CSRF mitigation

2. **MFA enforcement**: Opt-in or mandatory for all users?
   - **Requires**: Product team decision

3. **Session limits**: Should we limit concurrent sessions per user?
   - **Impact**: Redis storage requirements, UX complexity
```

---

## Best Practices

### Clarity & Language

```markdown
✅ DO:
- Use simple, direct language
- Define acronyms on first use
- Include diagrams for complex flows
- Use tables for comparisons
- Provide concrete examples

❌ DON'T:
- Use jargon without explanation
- Write walls of text
- Assume prior knowledge
- Skip the "why" behind decisions
- Create docs that become stale
```

### Diagrams

**Mermaid (Simple flows)**
```mermaid
sequenceDiagram
    Client->>API: POST /login
    API->>DB: Validate credentials
    DB-->>API: User data
    API->>Redis: Store session
    API-->>Client: JWT token
```

**PlantUML with C4 (Architecture)**
```plantuml
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

System_Boundary(c1, "Auth System") {
    Container(api, "API Gateway", "Node.js", "Routes requests")
    Container(auth, "Auth Service", "Go", "Handles authentication")
    ContainerDb(redis, "Redis", "Cache", "Sessions & tokens")
}

Person(user, "User")
user -> api : Login request
api -> auth : Validate
auth -> redis : Store token
@enduml
```

### Structure & Templates

**Use consistent templates across your organization:**
- Technical Design Doc → `templates/design-doc-template.md`
- ADR → `templates/adr-template.md`
- Technology evaluation → `reference/tech-selection.md`

### Version Control

```bash
# Store docs with code
docs/
├── architecture/
│   ├── ADRs/
│   │   ├── 001-database-selection.md
│   │   └── 002-api-authentication.md
│   └── diagrams/
│       └── c4-system-context.puml
├── design/
│   └── auth-system-design.md
└── rfcs/
    └── 2025-01-user-authentication.md
```

---

## Traceability & Maintenance

### Link Requirements to Decisions

```markdown
## Requirements Traceability

| Requirement | Design Element | Implementation | Tests |
|-------------|---------------|----------------|-------|
| REQ-001: MFA support | Auth Service TOTP module | `auth/totp.go` | `auth/totp_test.go` |
| REQ-002: OAuth login | OAuth provider adapter | `auth/oauth.go` | `auth/oauth_test.go` |
| REQ-003: <100ms latency | Redis token cache | `middleware/jwt.go` | `benchmark/auth_bench.go` |
```

### Document Lifecycle

```markdown
## Document Status

- **Proposed**: Initial draft, seeking feedback
- **In Review**: Under review by stakeholders
- **Approved**: Accepted, ready for implementation
- **Implemented**: Fully implemented
- **Deprecated**: No longer valid, superseded by ADR-XXX
```

### Review Process

**Before implementation:**
1. Author writes design doc
2. Share with team for async review (2-3 days)
3. Schedule 30-45min readout meeting
4. Address feedback, update doc
5. Get sign-off from tech lead + security (if needed)

**After implementation:**
- Review doc 1 month post-launch
- Update with actual learnings
- Document what changed and why

---

## Anti-Patterns to Avoid

```markdown
❌ Design as justification
   - Don't write docs after implementation to justify decisions
   - Write BEFORE to think through design

❌ Too much detail
   - Don't document every function and variable
   - Focus on system-level design, not line-by-line code

❌ Spec-first waterfall
   - Don't spend months on perfect design
   - Write enough to start, iterate as you learn

❌ Stale documentation
   - Don't let docs drift from reality
   - Update or delete outdated docs

❌ No alternatives analysis
   - Don't present only one solution
   - Show you considered trade-offs

❌ Missing success criteria
   - Don't forget to define "done"
   - Include measurable success metrics
```

---

## Checklist

### Before Writing
- [ ] Understood the problem and constraints
- [ ] Identified stakeholders and reviewers
- [ ] Selected appropriate document type
- [ ] Gathered context (existing systems, data, metrics)

### During Writing
- [ ] Clear problem statement with impact
- [ ] Proposed solution with diagrams
- [ ] Alternatives considered with trade-offs
- [ ] Risk assessment with mitigations
- [ ] Success criteria defined
- [ ] Work breakdown with timeline
- [ ] Open questions documented

### Before Publishing
- [ ] Spell check and grammar review
- [ ] All diagrams render correctly
- [ ] Links are valid
- [ ] Acronyms defined
- [ ] Code examples are tested
- [ ] Requested reviewers identified

### After Implementation
- [ ] Document updated with learnings
- [ ] Status changed to "Implemented"
- [ ] Related ADRs created for key decisions
- [ ] Runbook/operational docs created if needed

---


## Extended Reference

Detailed material starting at `## Quick Reference Card` has been moved to [`reference/extended.md`](reference/extended.md) to keep this skill concise. Load that reference when the task requires the moved examples, command catalogs, checklists, platform details, or implementation templates.
