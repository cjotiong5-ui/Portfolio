---
name: codebase-health-audit
description: Audits cross-cutting codebase health, security, maintainability, dependencies and technical debt using a structured parallel-analysis, severity-ranked report method; not a single-change review.
---

# Codebase Auditor

**Goal:** Perform a broad, read-only production-code health audit. Find concrete cross-cutting failure, security, delivery, and maintenance risks without turning detector matches or personal style preferences into findings. Do not substitute for documentation trust, test-portfolio, whole-architecture, or persistence-specific review.

**Execution contract:** The checklist defines completion. Track each item internally as `PENDING`, `PROVEN` with evidence, `CLEARED` with evidence its condition is absent, or `UNPROVEN` with a gap; reading, delegation, or tool failure is not proof. Reconcile after each section. Before returning, resolve all `PENDING`, count only `PROVEN` and `CLEARED`, and apply verdict and approval rules to every gap.
Preserve intent, scope, and existing authorization. Continue authorized work; ask only for consequential unresolved choices or required external approval. Scale depth to material risk without skipping checks. Preserve dependency and safety order; otherwise choose an appropriate verification method.
Accept equivalent user or repository evidence; no other skill, named artifact, or complete lifecycle is required. Preserve source requirement and decision IDs. Bind reused evidence to relevant source versions, dirty changes, configuration, and environment; invalidate only affected claims.
On continuation, reconcile task, authorization, current state, and unresolved evidence. For long work, return a compact continuation record or update an already authorized artifact; read-only skills do not persist it. Distinguish artifact readiness, verified behavior, and external-action authority.
Prepare authorized work before required approval. If blocked by an instruction, cite its exact source and unresolved boundary; do not invent approval gates from caution.


## Tool Routing

| Need | Preferred tool | Use it when | Fallback |
|---|---|---|---|
| Repository map and stack detection | Native file listing, manifests, build files, and repository instructions | Establishing scope, generated areas, entrypoints, supported runtimes, and commands | Targeted tree inspection and known entrypoints |
| Symbols, callers, ownership, and data flow | Language server or host-native code intelligence | A finding depends on symbol identity, references, overrides, route wiring, or cross-file behavior | Narrow text search plus direct inspection of every relevant match |
| Current changes and historical context | Git status, diff, log, and blame | Separating current work, regressions, intentional constraints, and dead compatibility paths | Current implementation and explicit decision records |
| Delivery health | Repository-defined build, lint, type, test, and smoke commands | Establishing whether the project can ship in its documented environment | Inspect CI and scripts; mark execution unavailable |
| Dependency and security state | Native package-manager audit, manifests, lockfiles, and official advisories | Checking known vulnerabilities, unsupported versions, and dependency health | Official registry and vendor sources; never guess severity |
| Runtime evidence | Existing logs, metrics, traces, profiles, and diagnostics | Static analysis cannot establish frequency, reachability, or operational impact | Call-path analysis with an explicit static-only limitation |
| Current external behavior | Official specifications, vendor documentation, and release notes | A finding depends on current API, runtime, or standard behavior | Primary-source web research; otherwise mark `UNVERIFIED` |

Start with summary-level discovery and narrow before reading deeply. Run only repository-defined or clearly safe diagnostic commands; never publish, deploy, migrate production data, rotate secrets, or rewrite files during the audit.

## Evidence Rules

- A pattern match is a candidate, not a finding. Confirm reachability, context, and consequence.
- Runtime failure or deterministic command output outweighs static suspicion; static evidence remains valid when execution is unavailable and the limitation is explicit.
- Generated, vendored, fixture, migration-history, and intentionally compatible code require context-specific treatment.
- External best practice is actionable only when it addresses a concrete repository defect or risk.
- Score or count only findings with distinct root causes; deduplicate symptoms that share one correction.

## Checklist

### 1. Establish Scope and Baseline

- [ ] Detect languages, frameworks, package managers, entrypoints, deployment model, generated areas, and the repository's supported verification commands.
- [ ] Classify each runtime surface as long-running service, CLI, library, job, serverless function, or platform-managed component before requiring probes, telemetry, signal handling, or shutdown behavior.
- [ ] Read applicable instructions and identify security boundaries, critical business paths, public interfaces, and irreversible operations.
- [ ] Inspect Git state so the audit does not overwrite, misattribute, or ignore unrelated user changes.
- [ ] Establish feasible build, lint, type, test, and smoke baselines; record executed scope, environment, exit status, and evidence. Verify required work ran rather than succeeding with no selected tests or skipped gates.
- [ ] Define exclusions and depth based on risk rather than scanning every file with equal effort.
- [ ] Keep the audit read-only. Allow only permitted caches and build artifacts and disclose them when created.

### 2. Audit Security and Delivery Boundaries

- [ ] Search for committed secrets, unsafe credential patterns, sensitive defaults, debug bypasses, and accidental exposure through logs or errors.
- [ ] For credential findings, never expose the raw value: distinguish live material from placeholders, fixtures, examples, and allowlisted fingerprints; report only the type, location, and redacted evidence, and recommend revocation, rotation, or history remediation only for confirmed exposure without performing it during the audit.
- [ ] Trace untrusted input into SQL, shell, templates, HTML, file paths, URLs, deserialization, redirects, and other injection-sensitive sinks.
- [ ] Check authentication, authorization, tenant or ownership isolation, privilege transitions, insecure direct object access, and default-deny behavior.
- [ ] Check validation at trust boundaries, canonicalization, size and rate limits, unsafe file operations, and destructive-action confirmation or guards.
- [ ] Verify security findings against actual call paths, framework behavior, configuration, and current official guidance before assigning severity.
- [ ] Inspect compiler, linter, type checker, tests, packaging, and CI configuration for skipped gates, ignored failures, environment drift, and non-reproducible delivery.
- [ ] Verify that successful packaging produces the intended entrypoints, assets, metadata, target platform, and deployable artifact; exit code zero alone does not prove a shippable build.
- [ ] Find stale skip, quarantine, allow-failure, continue-on-error, and warning-suppression paths that make required signals appear green.
- [ ] Check configuration completeness, required environment validation, unsafe fallbacks, missing examples, and differences between local, CI, and deployment settings.

### 3. Audit Maintainability and Dependencies

- [ ] Find evidence-backed duplication across functions, handlers, modules, configuration, and integration code; distinguish shared domain concepts from coincidental similarity.
- [ ] Identify over-abstraction, unused extension points, excessive factories or wrappers, parallel mechanisms, and custom utilities that duplicate declared platform capabilities.
- [ ] Before merging duplication or removing an abstraction, check lifecycle and ownership boundaries, intentional decoupling, dependency injection or test seams, framework requirements, public extension contracts, and expected independent evolution.
- [ ] Inspect complexity hotspots, long methods, god modules, deep nesting, excessive parameters, boolean-mode APIs, misleading names, and mixed responsibilities.
- [ ] Check algorithms for early-exit mistakes, duplicate-key loss, boundary errors, unbounded work, repeated scans, mutation during iteration, and hidden shared state.
- [ ] Check hardcoded operational values, URLs, timeouts, limits, identifiers, and environment-specific behavior that should be explicit configuration or named policy.
- [ ] Trace one concept across external contracts, DTOs, services, persistence, and storage; flag synonym or casing drift only when no explicit serializer, code-generation, or ORM boundary mapping explains it.
- [ ] Audit dependency vulnerabilities, support status, license or runtime constraints, duplicate packages, unused packages, and credible replacement or removal opportunities.
- [ ] Match advisories to the resolved version and deployment, then classify exposure as confirmed, unknown, or not applicable using reachability and exploit conditions; an unavailable call path cannot clear an affected component.
- [ ] Recommend native, existing-dependency, or external replacements only after checking required feature parity, migration surface, maintenance, license, security history, and domain-specific behavior.
- [ ] Find unreachable code, unused imports and exports, commented-out implementations, obsolete flags, dead compatibility shims, and replacement code left beside its successor.
- [ ] Confirm dead-code findings against reflection, registration, framework discovery, configuration, serialization, templates, and external entrypoints before reporting deletion as safe.

### 4. Audit Diagnosability, Concurrency, and Lifecycle

- [ ] Check whether logs are structured, correctly leveled, actionable, correlated across a request or job, and free of secrets and excessive payload data.
- [ ] Verify that correlation context crosses outbound calls, queues, retries, scheduled work, and detached async boundaries instead of existing only in the first request log.
- [ ] Check metrics, traces, health signals, and error context for critical paths; require observability only where operators need it to detect or diagnose failure.
- [ ] Trace shared mutable state, lock ordering, atomicity, async task ownership, cancellation, retries, and race windows on reachable concurrent paths.
- [ ] Inspect read-modify-write across await or yield points and build a resource/accessor timeline for shared files, subprocesses, terminal or OS resources, and repeated user triggers; include accessors outside the current process.
- [ ] Check blocking I/O or synchronous waits in async paths, unbounded concurrency, orphan tasks, deadlocks, TOCTOU hazards, and thread-unsafe resources.
- [ ] Inspect startup ordering, dependency readiness, configuration validation, fail-fast behavior, signal handling, graceful shutdown, and in-flight work draining.
- [ ] Inventory resources acquired during startup and runtime, then match each to idempotent cleanup in safe reverse dependency order on success, failure, timeout, cancellation, and repeated shutdown signals.
- [ ] Verify host-specific probe semantics: liveness failure should justify restart, readiness governs traffic eligibility, and startup checks protect initialization. Avoid dependency-triggered restart cascades and probes that create material load or side effects.

### 5. Validate Findings and Report

- [ ] Research external APIs, standards, vulnerabilities, and runtime behavior only when they can change a finding, using official sources matching the relevant version.
- [ ] Filter framework conventions, generated code, bounded administrative paths, tests, examples, and documented tradeoffs before confirming a candidate.
- [ ] Reproduce high-severity issues with a safe command, test, minimal call trace, or complete static failure path whenever possible.
- [ ] Apply the materiality gate: require concrete failure, security, delivery, operability, or recurring maintenance impact at evidenced scale. Reject taste, theoretical purity, generic practice, hypothetical scale, and reasonable alternatives; require the outcome or constraint, not a preferred implementation.
- [ ] **External correction evidence:** Ground external corrections in version-matched official contracts, using primary engineering sources for unresolved tradeoffs. Cite the supported mechanism; local evidence suffices for local defects.
- [ ] For each accepted finding, identify the bounded owning capability and observable correction evidence so remediation can proceed without repeating the audit or authorizing unrelated cleanup.
- [ ] Classify findings as `P0`-`P3` based on exploitability, data or availability impact, delivery blockage, recurrence, and remediation urgency.
- [ ] Order remediation by risk reduction and dependency, not by file order or detector category.
- [ ] Use `BLOCKED` when a required safety environment, high-risk behavior, or authoritative contract cannot be verified without a credible fallback; use `FAIL` for an evidenced unresolved `P0/P1`, required failing delivery gate, or demonstrated unsafe behavior; use `CONCERNS` only for verified non-blocking risks, and `PASS` only when required checks complete with no material finding.

## Self-Check

- [ ] **Reconcile before returning.** Check item-level evidence, requirement coverage, contradictions, scope, verdict, and applicable cleanup. Correct the report or authorized artifacts. Reuse valid evidence; do not automatically rescan the repository or rerun successful commands. Repeat checks only for relevant changes, failures, or unresolved evidence. Disclose remaining gaps.

## Output Contract

Report in the user's language, in this order; retain all five fields and state each fact once. Small results may use one line per field; omit empty tables and do not copy linked artifacts:

1. **Result:** Skill-specific verdict and supported outcome.
2. **Scope:** Reviewed/changed scope, exclusions, baseline, and material assumptions.
3. **Evidence:** Skill-specific fields below; distinguish facts, inferences, and unverified claims. Link artifacts; use tables when useful.
4. **Verification:** Checks/results, unavailable evidence, and applicable cleanup/external state.
5. **Completion:** `Checklist: X/Y complete`; `Incomplete: None` or each `UNPROVEN` item's reason, outcome impact, and exact next action; residual risks and required decisions.

**Skill-specific evidence:** Security, delivery, maintainability/dependencies, diagnosability, concurrency, and lifecycle evidence. Findings need priority, location, trigger or failure path, confidence, material impact, unacceptable tradeoff, and minimal remediation with expected effort; allow equivalent valid solutions. Order remediation by prerequisites and risk reduction, not detector count.

---

## Merged in from: codebase-audit (parallel structured analysis method)

# Codebase Audit — Adaptive Deep Analysis

Comprehensive codebase audit that adapts its agent configuration to the project's tech stack, forces structured findings, adversarially verifies Critical/High findings before they enter the report, diffs against the previous audit's ledger (resolved / still-open / new), and outputs a severity-sorted report plus a phased repair roadmap.

## Core Principles

1. **READ-ONLY** — Audit agents must never create, modify, or delete files in the target. Every agent prompt starts with the read-only preamble in `references/agent-prompts.md`.
2. **Inherit the session model** — Omit the `model` param on all agents so they inherit the session model (usually the strongest available). Only override *upward* if the session model is clearly weak for cross-file reasoning. Never hardcode a specific model name in this skill.
3. **Depth over breadth** — Fewer agents with broader merged scopes beat many shallow agents. Each agent traces issues across file boundaries.
4. **Adaptive** — Agent count and dimensions vary by stack and mode.
5. **Verified findings** — Critical/High findings must survive an adversarial verify pass. Medium findings pass through but are labeled `unverified` in the report.

## Operating Contract

- Direct actions: read-only inspection, local dependency audits, report writing under the target, and ledger updates under `<target>/.audit/` after the user invokes this skill.
- Escalate before: editing audited project source files, dependency manifests, `.gitignore`, CI config, remote issues, PR state, or anything outside the requested audit/report scope.
- Evidence-backed pushback: challenge "all clear" or "resolved" only with file evidence, dependency-audit output, verifier results, or ledger spot-checks.
- Feedback loop: promote repeated misses into prompt updates, ledger matching rules, or fixture eval cases rather than leaving them as session-only notes.

## Gotchas

- Dependency-audit commands must run from `{TARGET_DIR}`, not the assistant's incidental cwd.
- Finder agents must not read `evals/expected-findings.json` or eval README files when auditing the planted-bug fixture.
- A previous ledger miss is not proof that a finding was resolved; spot-check the file before marking an old finding `resolved`.

## Modes

| Mode | Trigger | Agents | Verify pass | Ledger |
|------|---------|--------|-------------|--------|
| **full** (default) | plain invocation, "全面审查" | 3–5 by stack (+ optional dims) | yes | yes |
| **quick** | "quick" in args, "快速体检" | 2 (Silent Degradation & Security; Data Integrity & Registry) | no — all findings labeled `unverified` | yes |

**Optional dimensions** (full mode only, enable when user asks or the repo obviously needs them):
- `tests` — test quality: assertion strength, skip markers, coverage of critical paths (Agent 6)
- `concurrency` — races, blocking calls in async, leaked tasks/goroutines (Agent 7)

## Workflow

### Phase 0: Detect & Prepare

1. **Stack detection**: `package.json`/`tsconfig.json` → TS/JS; `pyproject.toml`/`requirements.txt` → Python; `Cargo.toml` → Rust; `go.mod` → Go; multiple → full-stack.
2. **Size estimate**: `tokei <target>` (fallback: `find <target> -name '*.<ext>' | xargs wc -l`), excluding vendored/generated code. If effective size ≥ 400K LOC, split each agent's scope by top-level directory and note the split in the report.
3. **Exclusions** (always, in every agent prompt): `node_modules/`, `vendor/`, `target/`, `dist/`, `build/`, `.git/`, lockfiles, generated code.
4. **Ledger**: read `<target>/.audit/findings.json` if it exists — this is the previous audit baseline (format: `references/ledger-format.md`).
5. **Deterministic dependency audit**: from `{TARGET_DIR}` (never the assistant's incidental cwd), run each matching tool and feed raw output to the Error Handling & Security prompt:
   - Rust: `cargo audit`
   - Node: `npm audit`
   - Python metadata (`pyproject.toml` / `setup.py`): `pip-audit .`
   - Python requirements (`requirements.txt`): `pip-audit -r requirements.txt`
   - Python fallback with no project files: `pip-audit .`
   - Go: `govulncheck ./...`
   If a required tool is unavailable, the report must state `依赖审计降级跳过: <tool>`; never omit the degradation silently.

### Phase 1: Assemble Dimensions

Pick the configuration by detected stack. Full prompt templates in `references/agent-prompts.md`; prepend the read-only preamble and inject `{TARGET_DIR}` / `{STACK_INFO}` into each.

**Full-Stack (5 agents)** — frontend + backend both present:

| # | Dimension | Scope (merged) |
|---|-----------|----------------|
| 1 | Frontend-Backend Contract | Type consistency + rendering pipeline + serialization boundaries. Reads BOTH sides. |
| 2 | Data Integrity & Flow | End-to-end pipeline tracing, field dropping, declaration-execution gaps, registry coverage alignment. |
| 3 | Error Handling & Security | Silent degradation, exception patterns, secrets, injection, unsafe deserialization. |
| 4 | Architecture & Code Quality | Layer violations, god objects, duplication/drift, extension cost, registry cross-reference. |
| 5 | Config & Persistence | Config completeness, cache key/integrity, DB schema, temp files, state persistence. |

**Backend-Only (4 agents)**: replace #1 with "API Contract & Data Integrity" (which absorbs #2's data-flow/registry scope — do NOT also dispatch #2); keep #3–#5.
**Frontend-Only (3 agents)**: Component Architecture & Rendering; Error Handling & Code Quality; Config & Build.
**Quick mode (2 agents)**: Silent Degradation & Security (= #3); Data Integrity & Registry (= #2 core).

Fallback-path agent types (when using the Agent tool instead of Workflow): agent availability is environment-specific — check the subagent registry visible in the current session and use only type names that appear there. Never invent aliases (there is no generic `reviewer` type). If no specialized type matches, use `general-purpose` (or the environment's default catch-all) for every dimension; the prompts are self-contained. See the example mapping in `references/agent-prompts.md`.

### Phase 2: Orchestrate

**Preferred — Workflow tool** (skill invocation is the user's opt-in): use the script in `references/workflow-template.md`. It schema-forces every finder's output into structured findings, then pipelines each dimension's Critical/High findings straight into adversarial verify agents (no barrier — verification starts while other dimensions are still scanning).

**Fallback — Agent tool** (if Workflow is unavailable): launch all finder agents in a SINGLE message; prompts already demand the same JSON output. After they return, launch one verify agent per Critical/High finding (also batched in one message), using the verify prompt from `references/workflow-template.md`.

### Phase 3: Dedup & Ledger Diff

Dedup:
- Same file + same line → merge.
- Same root cause found by multiple agents → keep the most detailed, note cross-agent confirmation (raises confidence).
- Severity conflicts → use the highest.

Verification results:
- `confirmed=false` findings do NOT enter the main report; list them in an appendix "Refuted by verification" with the refutation reason (keeps the work auditable).
- Verifier failed/absent → keep the finding, label `unverified`.

Ledger diff (skip if no previous ledger — everything is `new`):
- Match previous ↔ current findings by **(category, file, root-cause summary)** — never by line number (lines drift).
- Previous finding with no current match → open the file and spot-check before marking `resolved`; if still present but missed, re-add as `still-open`.
- Classify every current finding: `new` / `still-open`.
- Write the updated ledger to `<target>/.audit/findings.json`. If the repo is tracked and `.audit/` isn't ignored, suggest adding it to `.gitignore` (don't edit `.gitignore` yourself).

### Phase 4: Report

Write the full report to `<target>/audit-report-YYYY-MM-DD.md`, then post a chat summary: counts per severity, top Criticals, ledger delta (N resolved / N still-open / N new), dependency-audit status, and the roadmap.

Report body requirements:
- Use Chinese for problem descriptions, impact analysis, and repair advice; keep code identifiers, paths, and error messages in their original form.
- Separate each finding into fact / inference / recommendation: the finding itself is a fact with `file:line`; impact is an inference with confidence; repair advice is a recommendation with stated assumptions.
- Inferred-only findings cannot be higher than Medium unless a verifier confirms user-visible or security impact.

Report structure:

```markdown
# [Project] Codebase Audit Report
> Date / Target / Stack / Mode / Agents / Dependency audit / Previous audit: date or "none"

## Summary
| Level | Count | Verified | Key Areas |

## Delta vs Previous Audit   (omit if first audit)
Resolved: N (list) | Still-open: N | New: N

## Critical (Fix Immediately)
Per finding: file:line, code snippet, risk, fix suggestion, verify status.

## High / P1 (Fix This Week)     — grouped by category
## Medium / P2 (Plan to Fix)     — labeled unverified where applicable

## Refuted by Verification       — appendix: finding + refutation reason

## Repair Roadmap
| Phase | Scope | Est. Files |
```

## Severity Classification

| Level | Criteria |
|-------|----------|
| **Critical** | Data loss, rendering failure, security vulnerability, complete feature breakage affecting users NOW |
| **High/P1** | Silent degradation (user sees wrong/incomplete output), type mismatches causing data truncation, missing config causing empty output, architectural violations blocking development |
| **Medium/P2** | Code duplication, inconsistent patterns, suboptimal error handling, tech debt that slows development but doesn't break features |

## References

- `references/agent-prompts.md` — read-only preamble + prompt templates (Agents 1–7)
- `references/stack-patterns.md` — per-stack search patterns
- `references/workflow-template.md` — Workflow script, finding/verdict schemas, verify prompt
- `references/ledger-format.md` — ledger JSON schema and matching rules
- `evals/` — planted-bug fixture; evals measure recall against `evals/expected-findings.json`

---

## Merged in from: project-health-auditor (dependency/tech-debt lens)

# Project Health Auditor

> Inspired by [claude-code-plugins-plus](https://github.com/jeremylongshore/claude-code-plugins-plus)

## Purpose

Analyze codebase health across multiple dimensions: code quality, dependencies, security, testing, documentation, and architecture.

## Audit Categories

### 1. Code Quality

#### Complexity Analysis

```bash
# Count lines per file (identify large files)
find src -name "*.ts" -o -name "*.js" | xargs wc -l | sort -n

# Find long functions (over 50 lines)
# Check for deeply nested code
# Identify duplicate code patterns
```

#### Code Smells

| Smell | Indicator | Action |
|-------|-----------|--------|
| Long files | >500 lines | Split into modules |
| Long functions | >50 lines | Extract methods |
| Deep nesting | >4 levels | Flatten logic |
| Many parameters | >5 params | Use objects |
| Duplicate code | Similar blocks | Extract shared |
| Dead code | Unused exports | Remove |
| Magic numbers | Hardcoded values | Use constants |

#### Checklist

```markdown
## Code Quality Audit
- [ ] No files over 500 lines
- [ ] No functions over 50 lines
- [ ] No nesting deeper than 4 levels
- [ ] No functions with >5 parameters
- [ ] No obvious code duplication
- [ ] No dead/unused code
- [ ] Consistent naming conventions
- [ ] Proper error handling
```

### 2. Dependencies

#### Dependency Health

```bash
# Check outdated packages (npm)
npm outdated

# Check for vulnerabilities
npm audit

# Analyze bundle size
npx webpack-bundle-analyzer

# Check unused dependencies
npx depcheck
```

#### Evaluation Criteria

| Metric | Healthy | Warning | Critical |
|--------|---------|---------|----------|
| Outdated (major) | 0 | 1-3 | >3 |
| Outdated (minor) | <5 | 5-10 | >10 |
| Vulnerabilities | 0 | Low/Med | High/Crit |
| Unused deps | 0 | 1-3 | >3 |
| Bundle size | <500KB | 500KB-1MB | >1MB |

#### Checklist

```markdown
## Dependencies Audit
- [ ] No critical vulnerabilities
- [ ] No high vulnerabilities
- [ ] <3 major version updates pending
- [ ] No unused dependencies
- [ ] Lock file in sync
- [ ] Bundle size reasonable
```

### 3. Security

#### Security Checks

```bash
# Check for secrets in code
grep -r "password\|secret\|api_key\|token" --include="*.ts" --include="*.js"

# Check for hardcoded credentials
grep -r "Bearer \|Basic " --include="*.ts"

# Check .env is gitignored
cat .gitignore | grep ".env"
```

#### Security Audit Points

| Check | Concern | Solution |
|-------|---------|----------|
| Secrets in code | Credential exposure | Use env vars |
| .env committed | Secret leak | Add to .gitignore |
| SQL strings | SQL injection | Use parameterized queries |
| User input in HTML | XSS | Sanitize/escape |
| Outdated deps | Known vulns | Update regularly |
| No rate limiting | DoS | Add rate limits |
| No input validation | Injection | Validate all inputs |

#### Checklist

```markdown
## Security Audit
- [ ] No hardcoded secrets
- [ ] .env files gitignored
- [ ] Dependencies scanned for vulns
- [ ] Input validation in place
- [ ] Output encoding for XSS
- [ ] SQL injection prevention
- [ ] Authentication implemented
- [ ] Authorization checks exist
```

### 4. Testing

#### Test Coverage Analysis

```bash
# Run tests with coverage (npm/jest)
npm test -- --coverage

# Run tests with coverage (pytest)
pytest --cov=src --cov-report=html
```

#### Coverage Standards

| Metric | Good | Acceptable | Poor |
|--------|------|------------|------|
| Line coverage | >80% | 60-80% | <60% |
| Branch coverage | >70% | 50-70% | <50% |
| Function coverage | >80% | 60-80% | <60% |

#### Checklist

```markdown
## Testing Audit
- [ ] Unit tests exist
- [ ] Integration tests exist
- [ ] Line coverage >60%
- [ ] Critical paths tested
- [ ] Edge cases covered
- [ ] Tests run in CI
- [ ] Test execution <5 min
- [ ] No flaky tests
```

### 5. Documentation

#### Documentation Inventory

```bash
# Check for README
ls README.md

# Check for API docs
ls docs/ || ls documentation/

# Check for inline docs (JSDoc, docstrings)
grep -r "@param\|@returns\|Args:\|Returns:" src/
```

#### Documentation Standards

| Doc Type | Purpose | Required |
|----------|---------|----------|
| README.md | Project overview | Always |
| CONTRIBUTING.md | Contribution guide | Open source |
| API docs | Endpoint reference | APIs |
| Code comments | Complex logic | As needed |
| Architecture docs | System design | Large projects |
| CHANGELOG.md | Version history | Libraries |

#### Checklist

```markdown
## Documentation Audit
- [ ] README exists and current
- [ ] Installation instructions
- [ ] Usage examples
- [ ] API documentation
- [ ] Contributing guide
- [ ] License specified
- [ ] Complex code documented
```

### 6. Architecture

#### Architecture Review

| Aspect | Check | Concern |
|--------|-------|---------|
| Coupling | Import chains | Tight coupling |
| Cohesion | Module size | God modules |
| Layers | Directory structure | Layer violations |
| Dependencies | Package.json | Circular deps |
| Config | Hardcoded values | Environment issues |

#### Common Issues

```markdown
## Architecture Smells
- Circular dependencies
- God classes/modules
- Feature envy (cross-module reaching)
- Shotgun surgery (changes touch many files)
- Inappropriate intimacy (modules know too much)
```

#### Checklist

```markdown
## Architecture Audit
- [ ] Clear module boundaries
- [ ] No circular dependencies
- [ ] Proper layer separation
- [ ] Configuration externalized
- [ ] Environment-specific settings
- [ ] Scalability considered
- [ ] Single responsibility
```

## Health Report Template

```markdown
# Project Health Report

**Project:** [Name]
**Date:** [Date]
**Auditor:** Claude

## Summary

| Category | Score | Status |
|----------|-------|--------|
| Code Quality | X/10 | 🟢/🟡/🔴 |
| Dependencies | X/10 | 🟢/🟡/🔴 |
| Security | X/10 | 🟢/🟡/🔴 |
| Testing | X/10 | 🟢/🟡/🔴 |
| Documentation | X/10 | 🟢/🟡/🔴 |
| Architecture | X/10 | 🟢/🟡/🔴 |
| **Overall** | **X/10** | **Status** |

## Critical Issues (Fix Immediately)
1. [Issue description]
2. [Issue description]

## High Priority (Fix Soon)
1. [Issue description]
2. [Issue description]

## Recommendations
1. [Recommendation]
2. [Recommendation]

## Technical Debt
- [Debt item with estimated effort]
- [Debt item with estimated effort]
```

## Quick Commands

```bash
# Full audit script
echo "=== Code Stats ===" && cloc src/
echo "=== Dependencies ===" && npm outdated
echo "=== Security ===" && npm audit
echo "=== Test Coverage ===" && npm test -- --coverage
echo "=== TODO/FIXME ===" && grep -r "TODO\|FIXME" src/
```
