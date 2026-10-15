---
name: skill-quality-and-governance
description: Reviews, audits, repairs and governs agent skills end-to-end: instruction/trigger review, audit and measurement, brittle-skill repair via a Reliable Skill Contract, and cross-skill duplication/governance.
---

# Skill Reviewer

**Goal:** Review skill quality and configured distribution surfaces without modifying reviewed source or external systems. Distinguish static contract assurance from observed execution behavior.

**Execution contract:** The checklist defines completion. Track each item internally as `PENDING`, `PROVEN` with evidence, `CLEARED` with evidence its condition is absent, or `UNPROVEN` with a gap; reading, delegation, or tool failure is not proof. Reconcile after each section. Before returning, resolve all `PENDING`, count only `PROVEN` and `CLEARED`, and apply verdict and approval rules to every gap.
Preserve intent, scope, and existing authorization. Continue authorized work; ask only for consequential unresolved choices or required external approval. Scale depth to material risk without skipping checks. Preserve dependency and safety order; otherwise choose an appropriate verification method.
Accept equivalent user or repository evidence; no other skill, named artifact, or complete lifecycle is required. Preserve source requirement and decision IDs. Bind reused evidence to relevant source versions, dirty changes, configuration, and environment; invalidate only affected claims.
On continuation, reconcile task, authorization, current state, and unresolved evidence. For long work, return a compact continuation record or update an already authorized artifact; read-only skills do not persist it. Distinguish artifact readiness, verified behavior, and external-action authority.
Prepare authorized work before required approval. If blocked by an instruction, cite its exact source and unresolved boundary; do not invent approval gates from caution.


## Tool Routing

| Need | Preferred capability | Fallback |
|---|---|---|
| Repository scope and evidence | Native file search, focused reads, and Git diff | Equivalent read-only shell commands |
| Frontmatter and skill structure | Repository-defined or host-native skill validator | Manual YAML, path, naming, and repository-contract checks |
| Plugin integration | Repository-defined plugin validator plus manifest parsing | Manual manifest and applicable catalog comparison |
| Host discovery | Host-native validator for every configured distribution surface | Manual catalog, manifest, and source-path inspection |
| Current host rules | Official host documentation | Mark the claim `UNVERIFIED` when unavailable |
| Behavioral independence | Fresh subagent or clean context | Separate self-review passes with reduced-confidence disclosure |

Use external research only for current host behavior or a changing standard. Do not use web sources to override the repository's actual files, installed versions, or local validation output.

Tool absence is not itself a skill defect. Apply the documented fallback and use `BLOCKED` only when the missing capability prevents a reliable verdict.

## Checklist

### Establish scope and evidence

- [ ] Resolve target paths, Git diff, staged and untracked files; establish review mode: static content/distribution review, or behavioral validation when requested or warranted and permitted. Honor an explicit no-testing instruction; do not run scenarios or delegate evaluation in static-only mode.
- [ ] Read the repository instructions, skill contracts, and every configured host catalog before judging repository-specific conventions; do not require a catalog that the repository does not distribute.
- [ ] Separate primary skills from manifests, catalogs, and documentation affected by the same change.
- [ ] Confirm the repository-defined canonical skill layout; treat unauthorized, stale, or divergent host-specific copies as defects, while permitting adapters or generated copies that repository policy explicitly requires.
- [ ] Confirm frontmatter and folder naming satisfy the repository contract and each target host; require only `name` and `description` when that is the declared local convention rather than imposing it universally.
- [ ] Check that each description states the capability, positive trigger, and important near-negative boundary.
- [ ] Check that descriptions stay within the host limit and avoid claims broader than the workflow supports.
- [ ] Confirm each skill is standalone: no required skill, MCP server, tracker, coordinator, worker, or shared runtime.
- [ ] Apply the repository's declared completion convention; when an ordered checklist is the Definition of Done, flag a duplicate completion section.
- [ ] Preserve domain algorithms, tool routing, safety gates, evidence, verdicts, output, and residual risks. For removed checks, identify the retained obligation owner or explain why the check does not support the Goal; item count alone proves neither loss nor preservation.
- [ ] Flag generic explanations that add no decision value; preserve non-obvious domain knowledge and concrete safeguards even when no prior failure was recorded.
- [ ] Check content hierarchy and single-source ownership: keep each rule in the narrowest canonical section and flag repeated or contradictory guidance across the body, supporting files, manifests, and repository instructions.
- [ ] Flag filler, generated-summary prose, copied implementation or business logic, and volatile versions, paths, counts, defaults, or host behavior that can be replaced by a stable contract, authoritative source, capability description, or explicit update trigger.
- [ ] Verify every required capability has an available tool path, a credible fallback, or an explicit `BLOCKED` outcome.
- [ ] Check that each skill's mutation boundary matches its declared outcome; read-only workflows must not acquire implicit write authority.
- [ ] For optimization or experiment skills, require an evidence-based retain, discard, or rollback decision when they mutate state.
- [ ] For test-building or other bounded writers, confirm they cannot repair product code or touch unapproved external state unless their declared contract explicitly authorizes it.
- [ ] Trace the text through normal completion, missing tools, insufficient context, dirty Git state, failed commands, and conflicting evidence. Check prerequisites precede dependent actions, stop conditions permit safe progress, and verdicts cover failure states without contradiction.
- [ ] Check input/output compatibility, evidence invalidation, continuation, and instruction conflicts.
- [ ] Check that the output contract distinguishes facts, inferences, missing evidence, verdict, and residual risk.
- [ ] Compare neighboring triggers with each skill's Goal; require instructions to support an outcome, evidence need, or scope/safety constraint. Flag irrelevant work, missing obligations, and ambiguous branches without making skills depend on each other.

### Repository Validation

- [ ] Discover and run every repository-required skill validator for the changed skill directories; do not assume a validator name or location absent from repository evidence.
- [ ] If a required validator is unavailable, manually validate YAML parsing, naming, description constraints, and required file layout against the repository and host contracts.
- [ ] Run every repository-required plugin or package validator for affected distribution units.
- [ ] Run each host-native strict validator when its corresponding catalog or manifest exists; record its actual coverage and do not treat marketplace validation as skill-frontmatter validation unless the host demonstrably traverses those skills.
- [ ] Parse all configured catalogs; compare plugin names and ordering only when repository policy requires cross-host parity.
- [ ] Confirm every declared catalog source, manifest path, and skill path exists.
- [ ] Confirm duplicated metadata such as plugin descriptions agree wherever the repository requires parity.
- [ ] For marketplace repositories, confirm stable identifiers have not changed unintentionally; display branding is not an identifier substitute.
- [ ] Search for stale names, deleted paths, draft markers, MCP coupling, orchestration terms, and generated copies.
- [ ] Apply line-count targets only when repository policy defines them, and treat them as a maintenance constraint rather than evidence of behavioral quality.

### Behavioral Review When In Scope

- [ ] Apply this phase only when behavioral execution is in scope and authorized; otherwise mark its execution-only items `CLEARED` with the scope reason and state that behavior was not tested. Static inspection does not prove activation or execution quality.
- [ ] Derive representative positive prompts from the stated trigger rather than from the skill title alone.
- [ ] Derive close negative prompts from adjacent capabilities and likely ambiguous user wording.
- [ ] Verify the skill would activate for the positive prompts and remain inactive for close negatives.
- [ ] Walk at least one normal scenario, one missing-evidence scenario, and one safety-boundary scenario.
- [ ] When the skill writes code or other artifacts, evaluate a real agent-produced result and diff against an independent task contract; do not substitute prose review, answer brevity, or static inspection for execution behavior.
- [ ] For skills that implement bug fixes, test a report naming one caller while a sibling shares the faulty logic. Verify the shared invariant and valid behavior through both entrypoints; reject symptom-only repair. Keep the sibling oracle out of the task prompt.
- [ ] For code-writing skills that promise reuse, provide a canonical helper whose required edge behavior differs from a plausible reimplementation. Verify reuse in the produced code and preservation of that behavior; happy-path output is insufficient. Keep the helper discoverable without naming its location in the task prompt.
- [ ] Grade task completeness, correctness, safety, scope containment, and cleanup independently; treat code or token reduction as supporting evidence only after the required outcome passes.
- [ ] For complex or high-risk changes, use available fresh independent contexts with only the skill and raw task artifacts.
- [ ] Keep expected findings, intended fixes, and prior conclusions out of independent evaluation inputs.
- [ ] Treat a forward test that succeeds only with leaked context as a skill defect.
- [ ] Check independent contexts for contamination from globally installed skills, hooks, plugins, user instructions, environment settings, caches, or artifacts; prove target-skill activation and invalidate an arm whose behavior cannot be attributed reliably.
- [ ] Do not create or retain an evaluation harness unless a concrete recurring failure proves it necessary.

### Evidence Rules

- [ ] Cite each finding to an exact file and the smallest useful line or section.
- [ ] Distinguish validator failures from manual concerns and speculative improvements.
- [ ] Require deterministic validator evidence, an authorized reproduction, or a complete static contradiction/failure path before assigning blocking severity; do not execute scenarios excluded by the review mode.
- [ ] Record commands executed, exit status, and material output without exposing secrets.
- [ ] Report coverage gaps when a required host or clean-context test cannot be run. Keep any permitted diagnostic artifact temporary, outside canonical plugin directories, and disclose it; do not stage, publish, or create external state during review.

## Verdict

- `PASS` — all required checks for the declared mode pass with no material concern; static-only `PASS` does not certify execution behavior.
- `PASS WITH CONCERNS` — no confirmed blocking defect in the reviewed scope, but bounded non-blocking uncertainty remains; do not infer untested publication or behavioral readiness.
- `FAIL` — a confirmed defect can cause wrong triggering, unsafe behavior, broken installation, or an invalid contract.
- `BLOCKED` — required evidence or tooling is unavailable and no credible fallback exists.

## Self-Check

- [ ] **Reconcile before returning.** Check item-level evidence, requirement coverage, contradictions, scope, verdict, and applicable cleanup. Correct the report or authorized artifacts. Reuse valid evidence; do not automatically rescan the repository or rerun successful commands. Repeat checks only for relevant changes, failures, or unresolved evidence. Disclose remaining gaps.

## Output Contract

Report in the user's language, in this order; retain all five fields and state each fact once. Small results may use one line per field; omit empty tables and do not copy linked artifacts:

1. **Result:** Skill-specific verdict and supported outcome.
2. **Scope:** Reviewed/changed scope, exclusions, baseline, and material assumptions.
3. **Evidence:** Skill-specific fields below; distinguish facts, inferences, and unverified claims. Link artifacts; use tables when useful.
4. **Verification:** Checks/results, unavailable evidence, and applicable cleanup/external state.
5. **Completion:** `Checklist: X/Y complete`; `Incomplete: None` or each `UNPROVEN` item's reason, outcome impact, and exact next action; residual risks and required decisions.

**Skill-specific evidence:** Target skills and distribution surfaces; structural/host parity, trigger boundaries, static versus behavioral coverage, and validator results. Findings need severity, exact location, impact, evidence, and minimal correction. Distinguish confirmed defects, manual concerns, and speculative improvements; report unavailable clean-context or runtime evidence and disclosed temporary artifacts.

---

## Merged in from: skill-audit (audit/design/categorize/distribute/measure)

# Skill Audit

Use this skill to audit existing skills, turn workflow knowledge into useful
agent skills, and review skill libraries at the strategy level. It complements
`skill-creator`: use this skill to decide what a skill should be, how it should
fit a library, and what needs improvement; use `skill-creator` when the user
wants the concrete SKILL.md implementation and eval loop.

This workflow is based on Anthropic's June 3, 2026 blog post, "Lessons from
building Claude Code: How we use skills":
https://claude.com/blog/lessons-from-building-claude-code-how-we-use-skills

## Core Principle

A good skill is not "some markdown about a topic." It is a compact extension
point that gives the agent non-obvious domain knowledge, reusable files,
deterministic helpers, setup rules, verification habits, and guardrails at the
moment they matter.

## Workflow

### 1. Decide Whether This Should Be A Skill

Create or improve a skill only when at least one of these is true:

- The workflow repeats often enough that users should not re-explain it.
- The agent regularly makes the same domain-specific mistake.
- The work needs local scripts, templates, examples, assets, hooks, or setup.
- The output must follow a stable structure or verification path.
- The knowledge is team-specific, product-specific, infrastructure-specific, or
  otherwise not inferable from general model knowledge.

Do not make a skill when the content only restates obvious coding behavior,
generic best practices, or one-off instructions.

### 2. Classify The Skill

Read `references/skill-taxonomy.md` and classify the candidate into exactly one
primary category. If it appears to span several categories, tighten the scope or
split it.

Report:
- Primary category
- Secondary category, if truly needed
- Why this category is the cleanest fit
- What would make the skill too broad

### 3. Draft A Skill Brief

Use `assets/skill-brief-template.md` for the output. Fill it with:

- Trigger description written for the model, not as a human-facing summary
- High-signal knowledge the model would not otherwise know
- Gotchas and failure modes
- Autonomy boundaries: what the skill may do directly, and what must be
  escalated before acting
- Evidence-backed pushback rules: when the agent should challenge the proposed
  path and what evidence it must cite
- Feedback loop: where repeated corrections, false-success signals, or manual
  recovery steps should be promoted
- Progressive disclosure map: SKILL.md vs references vs scripts vs assets
- Setup requirements or config questions
- Verification strategy
- Reliable Skill Contract coverage for high-value workflow skills
- Distribution path
- Measurement plan

### 4. Design Progressive Disclosure

Keep `SKILL.md` focused on activation, decisions, and the main workflow. Move
details into support files:

- `references/` for tables, API conventions, taxonomy, playbooks, and long docs
- `scripts/` for deterministic actions or repetitive checks
- `assets/` for templates, report formats, starter files, or examples
- `agents/` for specialized subagent prompts when the repo supports them
- `evals/` for realistic prompts and objective assertions

Tell the agent exactly when to read each support file.

### 5. Add Operational Design

Read `references/writing-and-operations.md` when deciding:

- Whether a setup step or config file is needed
- Whether the skill should remember past runs
- Whether scripts or hooks would improve reliability
- Whether the skill belongs in a repo, a shared plugin, or a marketplace
- What usage signals indicate undertriggering, overtriggering, or decay

### 6. Hand Off To Implementation

When the user wants the skill built, pass the brief into `skill-creator` and ask
it to implement the files, generate realistic test prompts, and run validation.

If editing an existing skill, include the exact file paths and the smallest
content changes needed. Do not rewrite unrelated skill behavior.

### 7. Check The Reliable Skill Contract

For agent-workflow, delivery, PR, automation, or high-impact skills, use
`skill-lifeguard` or apply the same five-element score:

- explicit negative examples
- verification checkpoints
- machine-checkable done conditions
- replay or smoke hooks with a log-to-patch loop
- drift signal detection

Report each element as `present`, `partial`, `missing`, or `deferred`. A missing
element is not always a blocker, but it must be visible in the brief and patch
plan.

## Output Format

For advisory requests, answer with:

1. Decision: create, improve, split, merge, or do not create
2. Category: one primary taxonomy category
3. Skill brief: filled from the template
4. Implementation notes: files to create/edit and validation commands
5. Reliable Skill Contract score, when applicable
6. Risks: overbreadth, obviousness, missing setup, missing verification, or weak
   trigger description

For repository work, actually create or update the files, then run the repo's
skill validation command.

## Gotchas

- Do not make a knowledge dump. Convert article or team knowledge into decisions,
  checklists, templates, and verification.
- Do not put all details in SKILL.md. Long reference material belongs in support
  files.
- Do not write a description as a marketing summary. It must name concrete user
  phrases and contexts that should trigger the skill.
- Do not railroad the agent with brittle instructions. Provide defaults,
  decision criteria, and escape hatches.
- Do not ship a skill without at least a lightweight way to tell if it worked:
  validation commands, example prompts, expected artifacts, or usage metrics.
- Do not encode vague autonomy such as "be proactive." Name the direct actions,
  escalation boundaries, and end-state checks that should change behavior.
- Do not call a brittle skill "reliable" without negative examples,
  checkpoints, done conditions, replay or smoke hooks, and drift signals.

---

## Merged in from: skill-lifeguard (Reliable Skill Contract repair)

# Skill Lifeguard

Use this skill to make an existing or new skill self-maintaining enough for real
agent work. It complements `skill-audit` and `skill-creator`: use this skill for
the reliability contract, then use those skills for library fit and authoring.

Read `references/examples.md` when you need example contract wording. Use
`assets/reliable-contract-template.md` when drafting a reusable section.

## Reliable Skill Contract

Every high-value workflow skill should either include these five elements or
record why an element is intentionally deferred:

| Element | Required Evidence |
| --- | --- |
| Explicit negative examples | Named forbidden behaviors and concrete alternatives. |
| Verification checkpoints | Pass/fail checks after important phases, not only at the end. |
| Machine-checkable done conditions | Commands, assertions, artifacts, or state queries from the current session. |
| Replay or smoke hooks | A small way to rerun or sample the workflow, plus a log-to-patch loop. |
| Drift signal detection | Observable signs that the skill is stale, undertriggering, overtriggering, or producing false success. |

## Workflow

1. Search before creating or moving skill files.
2. Read the target skill and nearby docs that define its expected workflow.
3. Classify the skill maturity:
   - `manual`: workflow still needs human validation.
   - `skill`: manually validated and packaged as reusable instructions.
   - `automation`: repeatedly reliable and safe enough for scheduled or hook-driven use.
4. Score the five contract elements as `present`, `partial`, `missing`, or `deferred`.
5. Patch the smallest durable home: `SKILL.md` for routing and boundaries,
   `references/` for long examples, `scripts/` for deterministic checks,
   `assets/` or `templates/` for reusable report shapes.
6. Run repository validation and any skill-specific smoke check.

## Operating Contract

- Direct actions: audit skill files, draft contract gaps, patch local skill
  instructions, and run local validation.
- Escalate before: publishing skills, installing into user runtime directories,
  deleting user files, changing secrets, or promoting manual workflows into
  scheduled automation.
- Evidence-backed pushback: refuse reliability claims that lack fresh
  verification, replay hooks, or drift signals.
- Feedback loop: turn repeated corrections, false-success signals, or failed
  smoke runs into a skill patch and rerun validation.

## Gotchas

- A checklist without pass/fail evidence is not a checkpoint.
- A warning-only fallback can hide missing data; fail loud when output would be
  incomplete or misleading.
- A one-time successful manual run is not automation maturity.

## Output

For audits, lead with findings:

```text
reliable_skill_contract:
- target:
- maturity:
- score:
  negative_examples:
  verification_checkpoints:
  machine_done_conditions:
  replay_or_smoke_hooks:
  drift_signals:
- blocking_gaps:
- patch_plan:
- verification:
```

For edits, keep the patch scoped to the missing contract elements. Do not
rewrite the skill's domain behavior unless the reliability gap requires it.

## Negative Examples

Reject these patterns and name the safer alternative:

- "Verify by saying it should work." Use a fresh command, fixture, or state
  query instead.
- "Swallow a failed helper and continue with a generic fallback." Surface the
  failure or mark the workflow blocked.
- "Add a broad reminder to be careful." Add a concrete forbidden behavior and
  an allowed replacement.
- "Automate a workflow that has never passed manually." Keep it in `manual`
  maturity and add smoke checks first.

## Checkpoints

Place checkpoints where a future agent could otherwise drift:

- after startup discovery and applicable instructions are read
- before edits that touch high-context files or generated metadata
- after each deterministic verification command
- before commit, push, PR, merge, or automation
- after a failure log produces a skill patch

## Drift Signals

Treat these as evidence to patch the skill:

- users repeat the same correction
- the skill triggers for the wrong task boundary
- the skill fails to trigger for its primary phrase
- the expected verification command no longer exists
- output format changes without downstream docs or examples changing
- a silent fallback hides missing data, auth, files, or external state

## Verification

For Spellbook skills, run:

```bash
python3 ./scripts/validate_skills.py --check
python3 ./scripts/audit_skill_quality.py skill-name
```

If the skill owns scripts, also run the relevant syntax check or fixture. Report
missing prerequisites instead of marking the contract complete.

---

## Merged in from: skill-ecosystem-doctor (cross-runtime governance/duplication)

# Skill Ecosystem Doctor

Treat the local Skill collection as a governed software supply chain. Audit first,
plan repairs from evidence, apply only authorized changes, and finish with fresh
cross-runtime verification and a durable handoff.

This workflow is at `skill` maturity, not unattended `automation` maturity. Do
not schedule or silently apply repairs.

## Trigger boundary

Questions such as “Did Studio load or start these Skills?” belong to Studio's
own configuration, projections, and runtime inventory. Inspect that
project/runtime directly. Invoke this Doctor only when the user explicitly asks
for cross-runtime or cross-scope ownership, projection, exposure, lifecycle, or
repair governance.

## Select the mode

| User intent | Mode | Routing |
|---|---|---|
| Inspect, review, inventory, or diagnose | `audit` | `execute_direct`; read-only |
| Explain what should change | `plan` | `plan_first`; no mutations |
| Fix, unify, quarantine, or retire | `repair` | `plan_first`; explicit scope and rollback |
| Recheck an existing governance file | `verify` | `execute_direct`; read-only |
| Rotate credentials, rewrite history, push, publish, or change remotes | external action | `clarify_first` unless the current request grants that exact action |

If the request mixes modes, run `audit` before `repair`. Do not infer repair
authorization from a request to inspect or diagnose.

## Operating Contract

- **Direct actions:** read-only discovery, deterministic audits, report drafts,
  and local validation.
- **Escalate before:** destructive changes, credential actions, history
  rewriting, remote publication, or any mutation not named by the current
  repair request.
- **Evidence-backed pushback:** challenge a proposed source, deletion, or
  completion claim only with paths, state queries, tests, ownership records, or
  a concrete data-loss or security risk.
- **Feedback loop:** promote repeated false positives, runtime-layout changes,
  and manual recovery steps into checks, fixtures, references, or evals.

## 1. Discover before creating

1. Search active roots and source repositories before creating a Skill,
   governance file, script, alias, or projection.
2. Locate every applicable `AGENTS.md` or equivalent before editing a source
   repository.
3. Read [runtime contracts](references/runtime-contracts.md) and classify each
   path as canonical source, managed projection, generated cache, or unknown.
4. Record the task goal, context, constraints, done-when conditions, dirty
   worktrees, runtime versions, and unavailable external permissions.
5. If work will span many files or sessions, use `flowguard` and keep the
   handoff outside parent context.

Common roots are discovery candidates, not declarations. Verify them on the
current machine; no data means unknown, not a guessed source relationship.

## 2. Run the deterministic audit

Use an existing governance file when one exists. Otherwise read
[the governance schema](references/governance-schema.md), adapt
[the example](assets/skill-governance.example.json) from discovered facts, and
show the proposed configuration before writing it.

The Doctor accepts both its portable schema and the deployed Loom-style
`SKILL_GOVERNANCE_POLICY.json`; do not create a second policy when the latter
already exists.

For a large deployed catalog, prefer `default_scope: "review"` with an explicit
`global_allowlist`. Keep specialist Skills in named `profiles`, bind profiles to
project roots only when needed, and enforce an `exposure_budget`. A retained
profile Skill is still canonical and usable on demand; it is not globally
injected until a declared profile scope projects it.

From this Skill directory, run:

```bash
python3 scripts/ecosystem_doctor.py --governance ./skill-ecosystem-governance.json
python3 scripts/ecosystem_doctor.py --governance ./skill-ecosystem-governance.json --json
```

Use `--skip-loom` only when Loom is intentionally outside scope. A missing Loom
binary is an error when Loom validation is requested. Use `--fail-on-warn` for a
strict release gate.

For the deployed policy, run the exposure reconciler without `--apply` first:

```bash
python3 scripts/ecosystem_reconcile.py \
  --registry ~/.loom-registry \
  --policy ~/.loom-registry/SKILL_GOVERNANCE_POLICY.json
```

The dry-run reports trigger hardening, global/project/profile/review exposure,
catalog budgets, plugin-state changes, and stale registry state. Run the same
command with `--apply` only during an explicitly authorized `repair` run. Plugin
configuration receives a timestamped backup before its exact boolean values are
changed. Re-run the dry-run afterward and require an empty plan.

If the policy declares exact progressive-disclosure splits, inspect them with:

```bash
python3 scripts/ecosystem_split.py \
  --registry ~/.loom-registry \
  --policy ~/.loom-registry/SKILL_GOVERNANCE_POLICY.json
```

Use `--apply` only after reviewing the extracted headings and destinations.

The audit checks:

- broken roots, links, and local support-file references
- source directories that look like Skills but have no `SKILL.md`
- declared-name versus directory-name mismatches
- divergent active projections for the same declared name
- dynamic project/worktree projections and additional declared source roots
- physical runtime copies without an exact source pin
- drift in pinned composite materializations
- active retired, quarantined, or projection-denied Skills
- active references to retired entry points
- high-confidence secret-like literals without printing their values
- missing per-Skill governance decisions when decision coverage is enabled
- review-by-default coverage, named profile bindings, and global catalog budgets
- declared enabled/disabled plugin state without rewriting unrelated TOML
- Loom health, projection drift, and pending remote synchronization

When the request concerns Skills that stopped triggering, aged out, or depend
on possibly dead external projects, also read
[lifecycle drift](references/lifecycle-drift.md). Treat missing maintenance
metadata as unknown evidence, not proof that a Skill is unhealthy.

Treat test-fixture secret patterns as visible warnings, not silent allowlists.

## 3. Classify findings

Order repairs by security, logic, data integrity, source lineage, and naming.
Separate facts from decisions:

- A digest conflict proves different content; it does not prove which copy is
  correct.
- A physical copy proves unmanaged materialization; it does not prove deletion
  is safe.
- A secret pattern proves local exposure risk; it does not prove account-side
  rotation occurred.
- A healthy projection proves installed consistency; it does not prove the
  upstream source is committed or remotely backed up.

Read [the remediation playbook](references/remediation-playbook.md) before
planning mutations.

## 4. Produce a repair plan

For every proposed action, record:

- finding and evidence
- owning source repository or unresolved owner
- exact writable files or paths
- authorization level
- reversible alternative and quarantine path
- repository-specific tests
- cross-runtime verification
- stop condition

Use disjoint file ownership for any parallel work. Do not let two agents edit a
shared registry, lockfile, manifest, or high-context file.

## 5. Apply only approved repairs

Safe direct actions are read-only inspection, report generation, local tests,
and drafting a plan. During an authorized `repair` run:

- prefer an independent clean Git worktree for source edits
- patch the canonical source, then regenerate managed outputs
- quarantine before removal and record original path plus digest
- preserve unrelated dirty worktree changes
- migrate genuinely neutral assets before retiring an entry point
- leave review and unbound profile Skills canonical but unprojected
- remove retired registrations, rules, references, projections, and installer
  sources without creating compatibility aliases
- update generated registries through their owning generator
- stop if the same hypothesis fails three times

Keep usage evidence read-only. When classification depends on local invocation
history, run `skill-usage-stats` or its governance matrix report, then return
here for exposure changes.

Never print secrets, overwrite unknown user content, use force push, rewrite
history, or claim external credential rotation without direct evidence.

## 6. Verify and hand off

Run verification from the current session:

1. Run targeted tests for each changed source repository.
2. Run each repository's build and full test gate when applicable.
3. Re-run `ecosystem_doctor.py` and require zero errors.
4. Re-run `ecosystem_reconcile.py` without `--apply` and require no planned changes.
5. Classify every remaining warning with evidence; do not suppress it merely to
   reach a clean count.
6. Start a fresh Codex session and confirm the active Skill catalog stays within
   its declared count/description budget without truncation warnings.
7. Confirm every runtime the policy governs — Codex, Claude, and any of
   `gemini`/`cursor` named in `projection_runtimes` or
   `managed_global_sources[].runtimes` — resolves the intended source or exact
   pin. Check each runtime's Skill home: Codex uses `~/.agents/skills` while
   Codex configuration remains under `~/.codex`.
   When `projection_runtimes` is explicitly empty, verify every declared
   `managed_projection` inventory root instead and require a zero-link
   reconciliation plan.
8. For retired Skills, scan all active paths and test the relevant installer so
   reinstall does not restore them.
9. Run `git diff --check` in every changed Git worktree.
10. Fill [the remediation log template](assets/remediation-log-template.md).

Use [the eval cases](evals/evals.json) when forward-testing trigger boundaries,
read-only behavior, secret redaction, retirement, or dirty-worktree handling.

If commit, push, PR, merge, or landing is requested, prepare a review pack. Use
`review-gate` when installed; otherwise present the same evidence and wait for
explicit approval unless the current request grants that exact action.

## Done when

- canonical ownership is explicit for every in-scope active Skill
- active projections have no unresolved content conflicts or broken resources
- active global Skills and descriptions fit the declared exposure budget
- retired and denied names have no active path or invocation reference
- high-confidence embedded-secret findings are cleared or explicitly blocked
- lifecycle claims distinguish verified, stale, unknown, and externally blocked evidence
- every mutation has a rollback or quarantine record
- fresh source-specific tests and the ecosystem audit pass
- the final reconcile dry-run is empty
- residual warnings and external actions are listed without overstating closure

## Gotchas, negative examples, and drift signals

- Do not choose the newest-looking fork automatically. Compare source history,
  contracts, tests, and ownership first.
- Do not turn a read-only audit into a bulk cleanup. Produce a repair plan.
- Do not replace quarantine with recursive deletion. Preserve a recoverable copy.
- Do not accept “should work” as verification. Run fresh commands.
- Do not automate this workflow after one successful machine repair. Promote
  only repeatedly stable, deterministic, read-only checks to scheduling.

Patch this Skill when the validator no longer understands an installed layout,
the same false positive recurs, a runtime changes projection semantics, or users
repeat the same safety correction.
