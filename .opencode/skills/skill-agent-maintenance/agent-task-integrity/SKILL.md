---
name: agent-task-integrity
description: Guards long, ambiguous, or stateful AI-agent work from drift and hallucination across task kickoff, execution, review and retrospective.
---

# Flowguard

## Overview

Use this skill as the single lifecycle entrypoint for agent work that can drift, lose context, or become expensive. It routes the task, verifies current state, runs bounded execution loops, and leaves a resumable handoff.

This skill coordinates other skills; it does not replace them. Use task-specific skills such as `systematic-debugging`, `comprehensive-testing`, `codex-retrospective`, or `vibeguard` only when their trigger is clearly met.

## Operating Contract

- Do not start a long autonomous loop until route, scope, and stop conditions are explicit.
- Do not treat memory, summaries, or handoffs as current truth until repo, git, files, runtime, or remote state is verified.
- Do not claim completion without fresh verification evidence from the current session.
- Do not expand scope, touch destructive surfaces, or cross file-ownership lanes without stopping to re-route.
- Re-state the primary objective and a plan of no more than five steps before major phase changes.
- Prefer one controlling checkpoint over many specialized workflow fragments when the task risk is context loss, drift, or compounding errors.
- Before commit, push, PR, merge, or applying agent-generated changes outside the already-approved scope, call `review-gate` or produce the same review pack and wait for explicit human approval.

## Route First

Choose one route before editing files or running a long loop:

| Route | Use When | Action |
|---|---|---|
| `execute_direct` | Goal, context, constraints, and done-when are clear; scope is small or verification is cheap. | Work directly with short checkpoints. |
| `plan_first` | Work spans many files, sessions, agents, architecture decisions, migrations, or risky sequencing. | Create a brief execution plan or use the relevant planning skill before edits. |
| `clarify_first` | Goal, target files, constraints, done-when, destructive permission, production impact, or ownership is unclear. | Ask the smallest blocking question before continuing. |

Do not hide ambiguity inside assumptions. If a wrong assumption would cause large rewrites, production risk, data loss, credential exposure, or wasted long-loop cost, use `clarify_first`.

## Startup

1. Search first for existing files, skills, plans, or prior artifacts that may already cover the task.
2. Load every applicable `AGENTS.md` for files that may be edited.
3. Run the state snapshot when working in a repo or resuming. Resolve it from the installed Flowguard skill directory, not from the target repo:

```bash
# From the installed flowguard skill directory, the directory containing this SKILL.md:
scripts/workflow_state_snapshot.sh /path/to/target/repo
```

When already in the target repo, pass `.` as the target to the installed script, for example `/path/to/installed/flowguard/scripts/workflow_state_snapshot.sh .`.

4. If the task continues previous work, treat memory and summaries as hints only. Verify cwd, git branch, dirty files, relevant artifacts, and runtime state before relying on them.
5. Capture the four task elements: goal, context, constraints, and done-when. If one is missing and risky, clarify.

## Preflight Contract

Before substantial work, write or state the compact preflight:

```text
route:
goal:
context:
constraints:
done_when:
out_of_scope:
verification_commands:
stop_conditions:
handoff_location:
objective_restatement:
plan_5_steps_or_less:
```

For short direct tasks, this can be one concise paragraph. For long tasks, make it explicit and keep it available for compaction or resume.

## Execution Loop

Use a step-test-update loop:

1. Select one current step with owned files and an expected check.
2. Re-state how the step supports the primary objective.
3. Announce the edit boundary before changing files.
4. Make the smallest useful change.
5. Run focused verification for that step when feasible.
6. Record a checkpoint with changed files, command results, decisions, blockers, context audit, and next step.

Stop and re-evaluate when any condition occurs:

- The same fix fails 3 times.
- Scope expands beyond the preflight.
- Required data is missing or stale.
- A tool result conflicts with the plan.
- Tests or builds fail for reasons unrelated to the current hypothesis.
- The user sends a newer instruction that changes priority.
- Token, tool-call, wall-time, or external-cost budget is exceeded.

## Failure Modes

- **Assumption drift**: the route says `execute_direct`, but new evidence shows missing goal, constraints, or done-when. Stop and re-route.
- **Summary-of-summary loss**: compaction or handoff omits modified files, decisions, or verification commands. Rebuild state from local truth before editing.
- **Stale memory**: remembered project facts conflict with current files, git, runtime, or GitHub state. Use current evidence.
- **Silent tool failure**: an empty, partial, or "close enough" tool result becomes input for later steps. Mark it as a blocker or rerun with a narrower check.
- **Parallel merge risk**: two lanes need the same writable file. Collapse to one integration owner before continuing.

## Verification Gate

Do not claim completion from expectation or older output. Report fresh evidence from this session.

Pick checks from the repo, `AGENTS.md`, and changed surface. Common defaults:

| Stack | Before Completion | Before Submission |
|---|---|---|
| Rust | `cargo check` | `cargo test` |
| TypeScript | `npx tsc --noEmit` | project test command |
| Go | `go build ./...` | `go test ./...` |
| Python | focused import/type/lint check if present | `pytest` |

If a check cannot run, say why and name the nearest useful fallback that did run.

## Review Gate

Before landing agent-generated changes, produce a concise review pack or use the
`review-gate` skill. The pack must include intent, diff summary, changed files,
risks, verification, open questions, and the exact action needing approval.
Human approval for one action does not automatically authorize a different
action such as merge.

## Handoff And Resume

Read `references/state-contract.md` when asked to create a handoff, resume after compaction, continue a previous task, or prepare automation.

Required handoff fields:

- modified files
- constraint set or SPEC
- verification command and result
- key decisions
- current priority
- L1-L7 rule summary when VibeGuard applies
- context audit: keep, externalize, discard, and stale/conflicting inputs
- review gate decision when changes are ready to land
- blockers and next action

Resume must start by comparing the handoff with current local truth. If cwd, branch, files, tests, or user priority changed, update the plan before editing.

## Multi-Agent Rule

Use parallel agents only when file ownership is disjoint and merge ownership is explicit. A delegation must name:

- agent or lane
- writable files or directories
- read-only context
- expected output artifact
- verification owner
- merge owner
- stop conditions

If two agents need to write the same file, do not run them in parallel.

## Automation Boundary

Skill workflows are manual first. Automate only after the workflow has been manually validated on real tasks. Scheduled automation should start as read-only: state scans, handoff drafts, stale-worktree reports, or verification summaries. Code edits, deploys, credential changes, or PR submissions require explicit user intent unless a separate trusted automation contract exists.

## Resources

- `scripts/workflow_state_snapshot.sh <path>`: read-only snapshot for cwd, git state, nearby agent instructions, dirty files, and likely verification commands.
- `references/state-contract.md`: templates for preflight, checkpoints, handoff, resume, loop guards, and automation readiness.
- `review-gate`: review pack and explicit human approval before landing agent-generated diffs.

---

## Merged in from: vibeguard (anti-hallucination for task kickoff/review/retrospective)

# VibeGuard

Lightweight VibeGuard for everyday use inside Spellbook.

This skill helps with three moments where AI-assisted work usually drifts:
- before implementation starts
- while review findings are being prioritized
- after regressions or avoidable mistakes happen

## What This Skill Includes

- A task contract checklist for scoping work before coding
- A scoring matrix for prioritizing findings with evidence
- A weekly review template for regression and guardrail retrospectives

## Hard Boundaries

This skill is intentionally lightweight.

It does:
- guide task kickoff
- structure review output
- make risk tradeoffs explicit

It does not:
- install hooks
- run guard scripts automatically
- patch global Claude or Codex configuration
- claim that full VibeGuard enforcement is active

If the user asks for automated interception, repo-level rules, or environment setup, escalate to the full VibeGuard repository and tooling.

## When To Use It

Trigger this skill when the user asks for:
- anti-hallucination guardrails
- task startup checks
- review scoring or triage
- regression prevention
- retrospective templates
- "vibeguard" by name

## Workflow

### 1. Start With The Task Contract

Open [`references/task-contract.yaml`](./references/task-contract.yaml) and confirm:
- goal
- source of truth
- acceptance criteria
- scope

Do not move into implementation until these are concrete.

### 2. Score Findings Before Acting

Open [`references/scoring-matrix.md`](./references/scoring-matrix.md) and score each finding on:
- impact
- effort
- risk
- confidence

Use the score to separate urgent fixes from weak guesses.

### 3. Pick The Right Delivery Mode

- 1-2 files: implement directly once the contract is clear
- 3-5 files: write a short spec or step plan first
- 6+ files: produce a full design/spec and staged execution plan

### 4. Review The Failure, Not Just The Symptom

If something regressed, identify which defense failed:
- scope control
- source-of-truth validation
- verification depth
- review prioritization
- missing guardrail

Then capture the follow-up in [`references/review-template.md`](./references/review-template.md).

## Expected Outputs

Depending on the request, produce one of these:
- a filled task contract
- a scored findings table with priorities
- a short regression review or weekly retrospective

## Reference Files

- [`references/task-contract.yaml`](./references/task-contract.yaml) - kickoff checklist
- [`references/scoring-matrix.md`](./references/scoring-matrix.md) - prioritization model
- [`references/review-template.md`](./references/review-template.md) - retrospective template
