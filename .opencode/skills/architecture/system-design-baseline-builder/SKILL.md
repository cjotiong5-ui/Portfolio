---
name: system-design-baseline-builder
description: Defines measurable architecture drivers and constraints before system design, including module/crate/package structuring guidance. Edits architecture docs only.
---

# System Design Baseline Builder

**Goal:** Create or update one durable source of truth for the project's architecture-driving requirements and constraints. Change only the approved architecture document; do not design the solution, review a plan, audit implementation, edit product code, or invent missing targets.

**Execution contract:** The checklist defines completion. Track each item internally as `PENDING`, `PROVEN` with evidence, `CLEARED` with evidence its condition is absent, or `UNPROVEN` with a gap; reading, delegation, or tool failure is not proof. Reconcile after each section. Before returning, resolve all `PENDING`, count only `PROVEN` and `CLEARED`, and apply verdict and approval rules to every gap.
Preserve intent, scope, and existing authorization. Continue authorized work; ask only for consequential unresolved choices or required external approval. Scale depth to material risk without skipping checks. Preserve dependency and safety order; otherwise choose an appropriate verification method.
Accept equivalent user or repository evidence; no other skill, named artifact, or complete lifecycle is required. Preserve source requirement and decision IDs. Bind reused evidence to relevant source versions, dirty changes, configuration, and environment; invalidate only affected claims.
On continuation, reconcile task, authorization, current state, and unresolved evidence. For long work, return a compact continuation record or update an already authorized artifact; read-only skills do not persist it. Distinguish artifact readiness, verified behavior, and external-action authority.
Prepare authorized work before required approval. If blocked by an instruction, cite its exact source and unresolved boundary; do not invent approval gates from caution.


## Tool Routing

| Need | Preferred capability | Fallback |
|---|---|---|
| Repository rules and document conventions | Native file reads plus focused search | User-provided convention with an explicit limitation |
| Existing requirements and architecture artifacts | Narrow repository search and direct reads | Conversation evidence marked with its source |
| Current workload or service evidence | Metrics, dashboards, logs, manifests, or checked-in reports | Mark `UNKNOWN`; never manufacture production numbers |
| Current external limits or standards | Official documentation or specifications | Mark the claim `UNVERIFIED` |
| Document mutation | Minimal patch to the approved Markdown artifact | Return `BLOCKED` if no safe writable path is authorized |

Use external research only when a time-sensitive fact changes a constraint. Do not browse for values that must come from product owners, operators, the repository, or measured workload.

## Artifact Rules

- Prefer an existing unambiguous architecture-requirements document.
- Otherwise use `docs/architecture/system-design-baseline.md`.
- Read before writing, preserve unrelated content, and update facts in place instead of creating parallel truth.
- Classify applicability separately as `APPLICABLE` or `NOT_APPLICABLE`, with evidence for exclusions.
- Rank each applicable item as `DRIVER`, `SUPPORTING`, or `INFORMATIONAL`.
- Classify evidence separately as `CONFIRMED`, `ASSUMED`, or `UNKNOWN`.
- Separate observed current values, required targets, hard limits, and future evolution triggers.
- Express quality attributes through observable scenarios and response measures; record undecided targets as missing decisions rather than inventing numbers.
- Treat the baseline as versioned project knowledge, not an immutable promise.

## Checklist

### 1. Establish Scope and Destination

- [ ] Resolve the project, business outcome, intended readers, approved documentation scope, and language.
- [ ] Read applicable repository instructions and inspect Git state so unrelated changes remain untouched.
- [ ] Search for existing requirement, architecture, SLO, recovery, security, cost, and ownership documents.
- [ ] Select one canonical artifact: reuse a clear equivalent or choose the default path; explain why no duplicate will be created.
- [ ] Return `BLOCKED` if the destination is ambiguous and choosing one could split project truth.

### 2. Build the Evidence Ledger

- [ ] Collect business goals, actors, journeys, scope, non-goals, and decision horizon with their sources and confidence for the driver analysis; do not create a second context inventory.
- [ ] Record sources for current workload, data volume, service behavior, platform limits, and existing commitments.
- [ ] Separate repository facts from stakeholder choices and estimates.
- [ ] Detect contradictions between documents, code, configuration, and stated requirements; preserve both claims until resolved.
- [ ] Ask only for choices whose absence materially changes architecture; mark all other gaps `UNKNOWN`.

### 3. Define and Prioritize Architecture Drivers

- [ ] **Business and scope:** Record actors, critical journeys, business horizon, scope, non-goals, and externally committed outcomes.
- [ ] **Demand and data scale:** Record current and target users, rates, concurrency, payloads, growth, retention, and forecast horizon where relevant.
- [ ] **User-observable service quality:** Define SLIs and SLOs for availability, latency, throughput, error rate, correctness, or freshness with measurement windows.
- [ ] **Data semantics and recovery:** Define consistency, ordering, idempotency, reconciliation, durability, backup, RTO, RPO, and acceptable data loss at affected boundaries.
- [ ] **Security, privacy, and compliance:** Define trust boundaries, data classification, residency, access, audit, and destructive-action constraints.
- [ ] **Operations and economics:** Define ownership, operational capacity, cost envelope, supported regions, delivery cadence, and platform or vendor constraints.
- [ ] **Evolution:** Record thresholds, business events, or evidence that justify revisiting an assumption, target, or deferred capability.
- [ ] Separate applicability, criticality, and evidence status; do not use `UNKNOWN` to mean unimportant or `NOT_APPLICABLE`.
- [ ] Prioritize the few scenarios most likely to shape architecture and express each as source/stimulus/environment/artifact/response/measure.

### 4. Write the Baseline

- [ ] Create or update the artifact with: identity and status; business context; scope and non-goals; critical scenarios; workload and data; quality targets; recovery; consistency; security; cost and operations; constraints; assumptions and unknowns; review triggers.
- [ ] Give material parameters their theme, applicability, criticality, evidence status, value/range, source, owner, as-of date, and review trigger. State shared metadata once with explicit inheritance; use `UNKNOWN` for missing ownership or values.
- [ ] Keep calculations reproducible and label estimates separately from observed measurements.
- [ ] Link shared architecture artifacts only by repository path or document title; never require a particular workflow or tool.
- [ ] Preserve historical context needed to understand changed requirements instead of silently rewriting prior commitments.

### 5. Validate and Report

- [ ] Re-read the written artifact and verify that no unknown was converted into a confident fact.
- [ ] Check that targets are measurable, internally consistent, and proportionate to the evidenced business horizon.
- [ ] Check that every architecture-critical gap has an owner or exact next evidence action.
- [ ] Link architecture drivers to their source product requirements; preserve the product source as owner of functional rules rather than copying a second requirements baseline.
- [ ] Use `READY` only when the baseline is usable for decisions and no material unknown lacks a safe handling rule; use `INCOMPLETE` for a useful artifact with consequential open drivers; use `BLOCKED` when scope, authority, or destination prevents safe creation.

## Self-Check

- [ ] **Reconcile before returning.** Check item-level evidence, requirement coverage, contradictions, scope, verdict, and applicable cleanup. Correct the report or authorized artifacts. Reuse valid evidence; do not automatically rescan the repository or rerun successful commands. Repeat checks only for relevant changes, failures, or unresolved evidence. Disclose remaining gaps.

## Output Contract

Report in the user's language, in this order; retain all five fields and state each fact once. Small results may use one line per field; omit empty tables and do not copy linked artifacts:

1. **Result:** Skill-specific verdict and supported outcome.
2. **Scope:** Reviewed/changed scope, exclusions, baseline, and material assumptions.
3. **Evidence:** Skill-specific fields below; distinguish facts, inferences, and unverified claims. Link artifacts; use tables when useful.
4. **Verification:** Checks/results, unavailable evidence, and applicable cleanup/external state.
5. **Completion:** `Checklist: X/Y complete`; `Incomplete: None` or each `UNPROVEN` item's reason, outcome impact, and exact next action; residual risks and required decisions.

**Skill-specific evidence:** Artifact path, established drivers and prioritized quality scenarios, applicable constraints, and changed sections. The artifact owns the driver register: theme/parameter, applicability, criticality, evidence status, value/measure, source/owner, as-of date, and review trigger. Summarize only decision-changing gaps; do not copy the register into the response.

---

## Enrichment: module/crate structuring (from architecture-foundation)

# Architecture Foundation

## Overview

Use this skill to turn an architecture discussion into explicit boundaries,
contracts, validation gates, and a small execution plan. The goal is not to copy
an admired project, but to identify the project's shape and choose the minimum
architecture that keeps ownership, effects, errors, and tests clear.
For large existing repos, first explain the architecture they already have,
then decide whether the work is boundary creation, boundary completion, or
boundary deletion.

## When To Use

- The user asks "what architecture should this use?", "is this stacked work?",
  "make a complete spec", "design the runtime", or "compare good libraries".
- The change touches runtime, state ownership, adapters, plugins, event loops,
  rendering, schedulers, persistence, or cross-module contracts.
- A repo has many issues/PRs that look individually valid but may not converge
  on one architecture.
- A mature repo has duplicated paths, compatibility shims, generated configs,
  workflow definitions, or docs that may disagree about the source of truth.
- A new skill, framework, library, or large feature needs a foundation guide
  before implementation.

Do not use this for small, local fixes where the existing architecture is
obvious and no boundary decision is needed.

## Workflow

1. Search first.
- Inspect existing architecture docs, entrypoints, manifests, module trees,
  public APIs, open issues/PRs, and tests before proposing new structure.
- If the user names a reference project, verify current source or official docs
  before treating it as evidence.
- For existing repos, also inspect generated/config artifacts, migration files,
  background workers, cron jobs, adapters, and the largest files/tests.

2. Classify the project shape.
- Simple library: stable API plus internal implementation.
- CLI or developer tool: command layer, core operations, IO adapters, reporter.
- API gateway or model router: transport, auth/accounting, routing policy,
  provider adapters, billing/settlement, observability.
- Long-running runtime: state root, scheduler, drivers, observability, shutdown.
- Lifecycle/composition framework: dependency graph, construction phase,
  runtime hooks, rollback, shutdown, and test harness.
- Event/cache/reconcile controller: watch/list input, cache/projection,
  queue/backpressure, worker/reconciler, retry, and drain.
- Config/module platform: canonical config, adapters, module lifecycle,
  reload order, rollback, cleanup, and plugin host interfaces.
- UI or app shell: state ownership, event protocol, renderer/platform boundary,
  headless tests.
- Service framework: domain core, application services, transport, storage,
  middleware, error-to-response boundary.
- Agent or workflow system: task model, scheduler, provider adapters, event log,
  replay/test harness.

3. Choose one primary state ownership model.
- App-owned entities and handles for native UI/editor runtimes.
- State plus typed message for enumerated UI/application workflows.
- Virtual DOM/signals when renderer portability and declarative UI dominate.
- Typed state or service-instance state for services and middleware.
- Event log plus projection/outbox for workflows, billing, async jobs, and
  reconciliation systems.
- World/resource/system model only when data-parallel ECS is a product fit.
- Snapshot database or input facts for incremental analysis tools.
- Streaming pipeline for one-shot CLI tools and batch processors.

4. Draw the foundation boundaries.
- `product/app`: entrypoints, user workflows, product-specific orchestration.
- `core/domain`: pure models, invariants, decisions, typed errors, no IO.
- `runtime/application`: lifecycle, scheduling, event dispatch, state mutation.
- `adapters/backends`: OS, renderer, provider, filesystem, network, database.
- `plugins/components`: optional capabilities behind explicit contracts.
- `testing/headless`: deterministic drivers, fake adapters, contract tests.

5. Audit existing boundary health before adding tasks.
- Name the current source of truth for each contract: code, database table,
  SQL seed, JSON/YAML config, generated docs, or external provider contract.
- Mark duplicated paths as `intentional bridge`, `legacy compatibility`, or
  `accidental fork`; require an exit condition for compatibility paths.
- Prefer a convergence/deletion plan over a new abstraction when the existing
  architecture is directionally correct but half migrated.
- Treat generated files and docs as consumers unless the repo explicitly makes
  them authoritative.

6. Write the contracts before tasks.
- Ownership: who owns state, handles, resources, caches, and mutation rights.
- Lifecycle: init, ready, run/tick/frame/request, shutdown, cleanup.
- Effect contract: which layer may persist, call providers, bill, publish
  messages, mutate projections, or only emit effects for another layer.
- Event/action: how external events become typed commands/messages/actions.
- Effects: which layer may touch IO, processes, network, OS handles, GPU, DOM,
  databases, or providers.
- Error policy: what is recoverable, user-visible, fatal, diagnostic-only, or
  converted at a boundary.
- Config/resources: build-time, startup-time, runtime; owner and invalidation.
- Observability: logs, metrics, traces, queue depth, frame/runtime telemetry.
- Tests: unit, contract, headless, fake adapter, integration, platform/E2E.

7. Produce a spec, not just a diagram.
- Use `references/spec-template.md` when the user needs a durable artifact.
- Include non-goals and "do not copy" notes from reference projects.
- For every reference project, separate `borrow` from `do_not_copy`; borrow
  boundary contracts, not scale artifacts, global registries, generated
  machinery, historical migrations, or domain-specific complexity.
- Convert the spec into P0/P1/P2 work where each task maps to one contract.
- If issues/PRs already exist, map them to the contracts and identify gaps.

## Decision Rules

- Prefer a thin adapter around a mature runtime when the product does not need
  to own that runtime.
- Split crates/modules only for stable API boundaries, side-effect isolation,
  compile-time isolation, independent tests, or real reuse.
- In existing repos, do not split crates/packages first when the real problem is
  duplicated source-of-truth, an unfinished migration, or missing closed-loop
  tests.
- Keep core free of platform handles, event loops, renderer handles, webviews,
  database clients, HTTP requests, process spawning, and environment reads.
- Make hidden global state illegal unless it is deliberately modeled as typed
  runtime state or a scoped resource.
- Do not let plugins become architecture escape hatches. Each plugin needs API,
  config/permissions when relevant, lifecycle, errors, and tests.
- Do not accept silent degradation. Missing capability must be an explicit
  unsupported error, diagnostic, or blank result according to the contract.

## Output Shape

For quick answers, return:

```text
verdict:
chosen_shape:
state_owner:
boundaries:
contracts:
migration_debt:
validation:
risks:
next_steps:
```

For durable planning, create or update an architecture spec with:

```text
objective
current evidence
reference models considered
chosen architecture
boundary map
source-of-truth map
contract matrix
compatibility/deletion plan
issue/PR map
validation matrix
P0/P1/P2 roadmap
open questions
```

## Red Flags

- A proposed module cannot say which boundary it belongs to.
- The design names a trait/config/cache/plugin but does not wire it into
  startup, lifecycle, or tests.
- Two state ownership models are mixed without an explicit bridge.
- Two files, configs, SQL seeds, or docs claim to be the source of truth for the
  same product contract.
- A compatibility shim or legacy path has no owner, test, telemetry, or removal
  condition.
- Platform callbacks directly mutate core state.
- Errors become warnings plus fallback for user-visible behavior.
- Tests only cover the final UI/CLI and cannot drive the runtime headlessly.
- The plan says "match X project" but cannot state what not to copy.

## References

- Read `references/rust-architecture-patterns.md` when designing Rust crates,
  runtimes, UI frameworks, app shells, schedulers, services, or developer tools.
- Read `references/go-architecture-patterns.md` when designing Go modules,
  packages, services, ports/adapters, context-aware APIs, or concurrency flows.
- Read `references/spec-template.md` when producing a repo-facing spec.
- Use `agents/openai.yaml` only when a separate architecture review agent is
  needed for cross-checking the chosen boundaries or migration plan.

## Quality Gate (folded in from slopbuster)
