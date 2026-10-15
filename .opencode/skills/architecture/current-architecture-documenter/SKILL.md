---
name: current-architecture-documenter
description: Documents current architecture from implementation evidence using a rigorous evidence-gathering method; does not propose a target or audit fitness.
---

# Current Architecture Documenter

**Goal:** Produce a trustworthy snapshot of the architecture implemented in the checked-out repository. Document what exists and how it behaves; do not score it, prescribe a target architecture, repair code, or turn intended diagrams into facts.

**Execution contract:** The checklist defines completion. Track each item internally as `PENDING`, `PROVEN` with evidence, `CLEARED` with evidence its condition is absent, or `UNPROVEN` with a gap; reading, delegation, or tool failure is not proof. Reconcile after each section. Before returning, resolve all `PENDING`, count only `PROVEN` and `CLEARED`, and apply verdict and approval rules to every gap.
Preserve intent, scope, and existing authorization. Continue authorized work; ask only for consequential unresolved choices or required external approval. Scale depth to material risk without skipping checks. Preserve dependency and safety order; otherwise choose an appropriate verification method.
Accept equivalent user or repository evidence; no other skill, named artifact, or complete lifecycle is required. Preserve source requirement and decision IDs. Bind reused evidence to relevant source versions, dirty changes, configuration, and environment; invalidate only affected claims.
On continuation, reconcile task, authorization, current state, and unresolved evidence. For long work, return a compact continuation record or update an already authorized artifact; read-only skills do not persist it. Distinguish artifact readiness, verified behavior, and external-action authority.
Prepare authorized work before required approval. If blocked by an instruction, cite its exact source and unresolved boundary; do not invent approval gates from caution.


## Tool Routing

| Need | Preferred capability | Fallback |
|---|---|---|
| Snapshot identity and worktree state | Git status, branch, remote, and HEAD | Record the supplied snapshot as `UNVERIFIED` |
| Structure and configuration | Native listing, search, manifests, and direct file reads | Narrow manual inspection |
| Symbols, dependencies, and consumers | Language intelligence or resolved dependency tooling | Search definitions, registrations, imports, and callers |
| Runtime and deployment topology | Entrypoints, IaC, containers, CI, configuration, and runtime evidence | Mark deployment relationships `UNKNOWN` |
| Document mutation | Minimal patch to the approved architecture document | Return `BLOCKED` if no writable path is authorized |

Prefer local evidence over remote repository state. A path, diagram, or naming convention is a lead until executable wiring or an authoritative contract confirms it.

## Artifact Rules

- Reuse a clear current-state architecture document; otherwise use `docs/architecture/current-state.md`.
- Anchor the document to remote, branch, HEAD, worktree state, and observation date.
- Cite material claims with file paths, symbols, commands, or configuration keys.
- Label claims `OBSERVED`, `DOCUMENTED`, `INFERRED`, or `UNKNOWN`.
- Separate actual structure from intended target design and from audit findings.
- Map the declared system scope at a coarse level first, then deepen only what explains its critical behavior; do not expand a bounded request into a repository-wide inventory.
- Prefer responsibility-oriented descriptions over exhaustive file inventories.
- Record the evidence cutoff so readers can distinguish uninspected scope from genuine absence.
- Keep volatile counts or inventories only when they affect architectural understanding.

## Checklist

### 1. Establish the Documentation Contract

- [ ] Resolve repository scope, intended readers, approved destination, required depth, and language.
- [ ] Read repository instructions and record snapshot identity plus dirty-worktree limitations.
- [ ] Search for existing current-state, baseline, target-design, decision, diagram, and deployment artifacts.
- [ ] Reuse an unambiguous current-state document or select the default path without duplicating project knowledge.
- [ ] Keep the run read-only except for the approved architecture document.

### 2. Map the System Breadth

- [ ] Identify languages, frameworks, package roots, generated surfaces, and canonical build or run commands from manifests and CI.
- [ ] Identify users, external systems, entrypoints, applications, services, processes, workers, scheduled jobs, and deployment units.
- [ ] Map major domains or modules, responsibilities, ownership, and dependency direction.
- [ ] Map data stores, caches, queues, files, external APIs, schemas, and systems of record.
- [ ] Record public interfaces, runtime discovery, registration, configuration composition, and environment boundaries.
- [ ] Record build, deploy, scale, and failure boundaries without inferring independence from directory names.

### 3. Trace Critical Behavior

- [ ] Select representative critical flows based on business importance and architectural reach.
- [ ] Trace each flow from actor or trigger through entrypoint, runtime coordination, domain behavior, persistence or integration, and observable outcome.
- [ ] Record synchronous and asynchronous hops, transaction ownership, consistency, retry, timeout, idempotency, and error propagation where evidenced.
- [ ] Describe deployment, startup, shutdown, health, observability, and recovery paths visible from repository evidence.
- [ ] Deepen only subsystems whose complexity or uncertainty affects architectural understanding; keep ordinary implementation detail out of the architecture document.

### 4. Write the Current-State Artifact

- [ ] Write snapshot identity, system context, component inventory, responsibilities, dependency and data flow, runtime topology, critical flows, deployment, ownership, and evidence index.
- [ ] Include the minimum useful diagrams inline or link existing diagram artifacts by path.
- [ ] Distinguish observed implementation from documented intent and explicitly list drift or contradictions without assigning severity.
- [ ] Mark remote-only, runtime-only, organizational, or production facts `UNKNOWN` unless supplied authoritative evidence establishes them; distinguish declared deployment configuration from observed live topology.
- [ ] Preserve sourced manually maintained context with its evidence status; document contradictions and label unsupported historical claims instead of inheriting them as observed facts.

### 5. Verify and Report

- [ ] Verify every citation against inspected snapshot evidence and remove unsupported claims; reopen sources only if they changed or the prior inspection did not establish the claim.
- [ ] Confirm the map explains how critical behavior is discovered, executed, persisted, and deployed.
- [ ] Confirm abstraction levels are not mixed and names remain consistent across prose and diagrams.
- [ ] Bind the current-state account to the inspected revision and relevant dirty/configuration state; identify changes that would make a documented boundary stale.
- [ ] Use `DOCUMENTED` when the snapshot is evidence-backed and useful; use `INCONCLUSIVE` when material topology remains unknown; use `BLOCKED` when repository identity, scope, or destination cannot be established safely.

## Self-Check

- [ ] **Reconcile before returning.** Check item-level evidence, requirement coverage, contradictions, scope, verdict, and applicable cleanup. Correct the report or authorized artifacts. Reuse valid evidence; do not automatically rescan the repository or rerun successful commands. Repeat checks only for relevant changes, failures, or unresolved evidence. Disclose remaining gaps.

## Output Contract

Report in the user's language, in this order; retain all five fields and state each fact once. Small results may use one line per field; omit empty tables and do not copy linked artifacts:

1. **Result:** Skill-specific verdict and supported outcome.
2. **Scope:** Reviewed/changed scope, exclusions, baseline, and material assumptions.
3. **Evidence:** Skill-specific fields below; distinguish facts, inferences, and unverified claims. Link artifacts; use tables when useful.
4. **Verification:** Checks/results, unavailable evidence, and applicable cleanup/external state.
5. **Completion:** `Checklist: X/Y complete`; `Incomplete: None` or each `UNPROVEN` item's reason, outcome impact, and exact next action; residual risks and required decisions.

**Skill-specific evidence:** Artifact path and snapshot identity (remote, branch, HEAD, worktree, date); mapped context, modules, runtime/deployment, data/interfaces, ownership, and critical flows. Identify changed sections/diagrams and claims or areas needing runtime, organizational, or external confirmation with status, inspected evidence, and exact next action.

---

## Enrichment: evidence-gathering method (from architecture-research)

# Architecture Research

Understand how real systems work before committing to a technical direction.
Produce a decision artifact backed by inspectable evidence, not a feature table,
vendor narrative, or speculative target architecture.

Read both references before completing decision-grade work:

- [Architecture lenses](references/architecture-lenses.md) explains how to
  inspect ownership, authority, wiring, lifecycle, recovery, trade-offs, and
  adoption risk.
- [Evidence matrix and decision template](references/evidence-matrix.md)
  provides the output structure.

## Operating Contract

- Direct actions: read-only discovery, source inspection, local experiments,
  decision recovery, comparison, and drafting within the requested access path.
- Escalate before: paid API use, new accounts or legal terms, publication of
  non-public findings, remote mutations, or an unauthorized production choice.
- Evidence-backed pushback: challenge category errors, unsupported architecture
  claims, false equivalence, and premature hyperscale design with cited facts.
- Feedback loop: test decisive claims, record unknowns and reversal evidence,
  then re-open the decision when its review trigger fires.

### Scope and handoff

Use this skill for four related tasks:

- **Landscape research**: identify and compare relevant systems or approaches.
- **System archaeology**: reconstruct how a system actually works from source,
  deployment material, tests, runtime evidence, and authoritative documents.
- **Architecture decision**: choose whether to adopt, adapt, build, defer, or
  retain the current system.
- **Decision reassessment**: recover an earlier decision, check whether its
  assumptions still hold, and keep or revise it using current evidence.

This skill owns external research, evidence, comparison, and the decision
boundary. Once a direction is selected, hand detailed internal boundaries,
contracts, and target architecture to `architecture-foundation`. Use
`product-discovery` for customer or market validation without a technical
decision question.

Respect the requested access path and repository instructions. Never expose
credentials or reproduce private implementation details in a public artifact.

Do not invoke this workflow for a small bug fix, rename, formatting change,
routine dependency use, or when the foundational technology is explicitly fixed
by the user or nearest repository instructions.

## Workflow

### 1. State the decision question

Before searching, write a compact research brief:

- User outcome and the exact capability the system must own.
- Current boundary, missing layer, and the decision to make.
- One or more representative quality scenarios: stimulus, operating condition,
  expected response, and measurable success.
- Constraints that matter now: scale horizon, freshness, latency, quality,
  privacy, deployment, budget, licensing, data ownership, and team capacity.
- Explicit non-goals and the cost of making no change.

Scale research depth to decision risk. Reversible component choices need less
evidence than a new source of truth, data platform, hosted dependency, or
one-way migration.

Challenge category errors early. A browser, API wrapper, scraper, search index,
agent runtime, and answer engine can share a surface while owning different
capabilities.

### 2. Recover existing context without inheriting its claims

When prior decisions, incidents, chats, ADRs, or benchmarks exist, extract:

- The decision and alternatives considered at the time.
- Assumptions, constraints, unresolved unknowns, and promised validation.
- What was actually implemented and what happened in operation.
- Which facts are stale, contradicted, or were never verified.

Prefer focused summaries, exact excerpts, decision records, and runtime
artifacts over loading whole conversation archives. Treat prior conclusions as
leads until their evidence is re-opened.

### 3. Select representative alternatives

Search before proposing architecture. Include only alternatives that can change
the decision:

- Maintained open-source systems with inspectable source and deployment paths.
- Commercial systems with authoritative technical material.
- Standards, public datasets, protocols, and lower-level reusable components.
- The current system and the option to make no change.

Classify each candidate as direct, adjacent, component, or non-comparable.
Do not pad the comparison to reach an arbitrary count. Decide the possible
reuse unit: whole system, subsystem, component, protocol, data model, or pattern.

### 4. Build an evidence ledger

Prefer primary evidence in this order:

1. Source code, tests, manifests, schemas, releases, and reproducible runtime
   behavior.
2. Official technical documentation, papers, standards, patents, and
   engineering posts.
3. Official product, license, and pricing material for product-level claims.
4. Independent measurements whose method, date, and environment are visible.

For current products, dependencies, pricing, licenses, or architecture, browse
and record the date or revision. Use secondary sources only to locate primary
evidence or to add clearly attributed independent evaluation.

Tag every decision-relevant claim:

- **Verified**: directly supported by cited code, documentation, or measurement.
- **Inferred**: supported by evidence but not stated directly; include the
  reasoning and confidence.
- **Unknown**: not revealed by available evidence; say what would resolve it.

Preserve contradictions. A public SDK, plugin, or MCP server proves an interface
exists; it does not prove that the underlying data, model, index, scheduler, or
hosted control plane is open or independently reproducible.

### 5. Trace the real system

Apply the relevant lenses from
[architecture-lenses.md](references/architecture-lenses.md). At minimum answer:

- What is the end-to-end path from input to user-visible result?
- Who owns each data, control, and operational boundary?
- What is authoritative, what is derived, and what is only ephemeral?
- What survives restart, and how are stale or divergent states reconciled?
- Is each claimed capability merely declared, actually implemented, wired into
  the live path, exercised, and measured?
- Which decisions are sensitivity or trade-off points for the named scenarios?

Inspect open-source implementation, tests, releases, and self-host deployment,
not only the README. For closed systems, draw a visible boundary around the
public surface and keep the hidden core unknown.

### 6. Test decision-relevant claims

When practical, run the same small representative workload against viable
options. Define before running:

- Question, candidate versions, corpus or scenario, and expected result.
- Scoring rule, environment, hardware, commands, and raw result location.
- Failure behavior and recovery test when statefulness is part of the decision.

Measure the property that can change the decision: coverage, correctness,
freshness, extraction fidelity, latency, throughput, resource use, operability,
or recovery. A component existing in source is not evidence that the production
path uses it.

If a fair test cannot run, state the missing credential, dataset, environment,
or budget and retain the uncertainty. Do not turn a vendor benchmark or demo
into local proof.

### 7. Evaluate adoption reality

For an adoption candidate, check more than technical fit:

- Maintenance and release activity, governance, contributor concentration, and
  response to security or correctness issues.
- License obligations, distribution model, deployment complexity, upgrade path,
  and operational ownership.
- Supply-chain posture, tests, release provenance, and dependency risk where
  relevant.
- Unit cost, switching cost, lock-in, and the exit path if the project or vendor
  changes direction.

Automated project-health or security scores are leads, not final truth. Inspect
the checks, their applicability, and counterevidence.

### 8. Make and bound the decision

Choose one disposition for each useful idea:

- **Adopt**: use the existing solution substantially as supplied.
- **Adapt**: reuse a bounded unit while owning the differentiating layer.
- **Build**: implement because ownership is itself required or candidates fail
  a named constraint.
- **Defer**: evidence is insufficient or the capability is not needed now.
- **Retain**: keep the current system because change is not yet justified.

Tie the recommendation to the research brief and quality scenarios. State:

- Selected direction, reuse unit, and accepted quality trade-offs.
- Rejected alternatives and what should not be copied.
- Risks, unknowns, and evidence that would reverse the decision.
- Smallest validation milestone and observable success condition.
- Exit path or review trigger for assumptions likely to change.
- Inputs for `architecture-foundation`: selected components, constraints,
  ownership decisions, unresolved questions, and prohibited dependencies.

A long-term ambition can justify staged validation, but not speculative layers
in the current implementation.

## Common failure modes

- Comparing feature names instead of system boundaries and scenarios.
- Treating self-hostable orchestration as ownership of upstream data or models.
- Equating a database row with a recoverable workflow or authoritative state.
- Counting declared modules without checking wiring, execution, and measurement.
- Assuming a public client repository contains a commercial product's core.
- Copying hyperscale architecture before proving a bounded workload.
- Ignoring acquisition, provenance, lifecycle, recovery, and evaluation while
  focusing only on algorithms or storage.
- Ranking choices with invented precision or unconfirmed weights.
- Treating repository popularity or an automated score as adoption proof.
- Hiding unknowns behind confident prose or silently degrading when research
  access fails.

## Done when

The decision artifact contains:

- A bounded decision question, scenarios, constraints, and no-change baseline.
- Candidate classification and a named reuse unit for viable options.
- An evidence ledger with citations and verified/inferred/unknown labels.
- End-to-end, ownership, authority, recovery, and capability-maturity analysis.
- Trade-offs and decision-relevant tests, or an explicit test blocker.
- Adoption viability when a third-party dependency is recommended.
- An adopt/adapt/build/defer/retain decision, rejected alternatives, accepted
  risks, reversal evidence, exit or review trigger, and smallest milestone.

Before claiming completion, re-open decisive sources, check dates and revisions,
and run repository-required validation for any changed files.
