---
name: documentation-auditor
description: Audits documentation and comments for trust, coverage, consistency and freshness against a concrete comment/docstring standard; read-only.
---

# Documentation Auditor

**Goal:** Audit documentation as a read-only evidence system: can a new contributor, operator, user, or coding agent find the right source, trust its claims, and act without hidden context? Review both standalone documents and code comments where they carry public or operational knowledge.

**Execution contract:** The checklist defines completion. Track each item internally as `PENDING`, `PROVEN` with evidence, `CLEARED` with evidence its condition is absent, or `UNPROVEN` with a gap; reading, delegation, or tool failure is not proof. Reconcile after each section. Before returning, resolve all `PENDING`, count only `PROVEN` and `CLEARED`, and apply verdict and approval rules to every gap.
Preserve intent, scope, and existing authorization. Continue authorized work; ask only for consequential unresolved choices or required external approval. Scale depth to material risk without skipping checks. Preserve dependency and safety order; otherwise choose an appropriate verification method.
Accept equivalent user or repository evidence; no other skill, named artifact, or complete lifecycle is required. Preserve source requirement and decision IDs. Bind reused evidence to relevant source versions, dirty changes, configuration, and environment; invalidate only affected claims.
On continuation, reconcile task, authorization, current state, and unresolved evidence. For long work, return a compact continuation record or update an already authorized artifact; read-only skills do not persist it. Distinguish artifact readiness, verified behavior, and external-action authority.
Prepare authorized work before required approval. If blocked by an instruction, cite its exact source and unresolved boundary; do not invent approval gates from caution.


## Tool Routing

| Need | Preferred tool | Use it when | Fallback |
|---|---|---|---|
| Document inventory and hierarchy | Native file listing with narrow patterns | Establishing documentation surfaces, generated areas, and navigation structure | Repository tree and known entry documents |
| Links, repeated terms, claims, and contradictions | Native text search, then focused reads | Finding references, stale names, duplicated guidance, paths, commands, and configuration keys | Manual cross-document comparison |
| Code and configuration truth | Native code search, manifests, schemas, and direct file reads | A document claims that a path, option, endpoint, behavior, or default exists | Execute a safe inspection command when text is insufficient |
| Freshness and ownership | Git log, blame, and diff | Determining when a claim changed, whether a document tracks active code, or who owns a convention | Current code and explicit ownership files |
| Commands and examples | Shell in non-mutating or dry-run mode | Verifying help text, command existence, config parsing, generated output, or example syntax | Inspect command registration and tests; mark runtime proof unavailable |
| External facts | Official documentation, specifications, and release notes | A current external API, version, standard, or platform behavior affects correctness | Primary-source web research; otherwise mark `UNVERIFIED` |

Do not run commands that publish, migrate, deploy, write production state, or rewrite documentation. Generated caches are acceptable only when permitted and disclosed.

## Evidence Rules

| Claim type | Required evidence |
|---|---|
| Repository path, symbol, command, configuration, endpoint, or default | Current repository or safe command output |
| External API, version, standard, or compatibility statement | Official source matching the relevant version |
| Count or coverage statement | Reproducible query with scope and exclusions |
| Historical rationale | Current decision record or history that still matches implementation |
| Recommendation | A demonstrated reader failure, contradiction, maintenance cost, or operational risk |

Absence of documentation is a finding only when a real audience needs the missing knowledge. Judge stale and missing guidance by the reader failure or harm they cause.

## Checklist

### 1. Establish Scope and Audiences

- [ ] Identify documentation entrypoints, public docs, maintainer docs, operational runbooks, generated references, examples, and code-comment surfaces in scope.
- [ ] Identify intended audiences and their concrete tasks: understand, install, configure, operate, troubleshoot, extend, or verify the system.
- [ ] Read applicable repository instructions and detect documentation ownership, generation commands, language policy, and source-of-truth conventions.
- [ ] Separate authored documents from generated, vendored, archived, temporary, and example content before scoring defects.
- [ ] Classify each target as entrypoint/index, reference, how-to, explanation, decision record, generated output, or example; prioritize canonical and claim-dense documents before navigation-only files.
- [ ] Define which code, configuration, schemas, tests, and external contracts can verify documentation claims.
- [ ] Keep the audit read-only and record any unavailable source, command, or environment as a limitation.

### 2. Check Structure and Discoverability

- [ ] Verify that the root entry document explains purpose, supported use, prerequisites, installation path, and navigation appropriate to its audience.
- [ ] Check hierarchy, headings, table of contents, local navigation, cross-links, anchors, and predictable placement of related material.
- [ ] Verify local paths and anchors, including case sensitivity, and inspect external redirects for a wrong or unavailable destination; a working intentional redirect is not a defect.
- [ ] Identify orphan documents, duplicate entrypoints, circular navigation, deep chains, and important content reachable only by repository search.
- [ ] Check that concepts have one canonical owner and that secondary documents link rather than fork rules, thresholds, or procedures.
- [ ] Verify that generated documentation names its generator and does not invite hand editing that will be overwritten.
- [ ] Check whether large documents can be split or compressed without hiding the sequence or context needed to act safely.

### 3. Check Relevance, Coverage, and Consistency

- [ ] Compare each document's title, scope statement, and intended audience with its actual content.
- [ ] Judge content by document kind: indexes route without duplicating detail, references optimize exact lookup, how-to guides are safely sequenced, explanations build the right mental model, and decision records preserve context, decision, alternatives, and consequences.
- [ ] Flag filler, repeated summaries, speculative narration, generic generated prose, and ceremonial sections that do not help the intended audience decide or act.
- [ ] Prefer durable intent, contracts, constraints, and operations over copied implementation or business logic; retain only minimal verified code or command examples needed to act safely.
- [ ] Identify off-topic content, scope creep, unexplained prerequisites, hidden assumptions, and sections that no longer support an active task.
- [ ] Check coverage of public behavior, configuration, deployment, migrations, failure recovery, security-sensitive operation, and extension points where applicable.
- [ ] Trace requirements and architecture statements across documents; report contradictions and ambiguous ownership rather than choosing silently.
- [ ] Find obsolete future-tense plans, completed TODOs, removed features, legacy compatibility guidance, old directory layouts, and stale screenshots or examples.
- [ ] Check terminology, entity names, identifiers, capitalization, and lifecycle states for consistency with code and across documents.
- [ ] Verify that warnings, prerequisites, destructive actions, rollback steps, and failure outcomes appear at the point where readers need them.
- [ ] In always-loaded agent instructions, identify redundant formatting prose already enforced by tooling and path-specific detail that can move to supported scoped files. Preserve discovery, non-obvious requirements, and host compatibility.

### 4. Verify Facts and Examples

- [ ] Extract material claims about paths, files, symbols, versions, counts, commands, flags, environment variables, configuration keys, ports, endpoints, schemas, and defaults.
- [ ] Build a normalized claim ledger before verification and group repeated claims by subject so one repository check can expose both stale copies and cross-document contradictions.
- [ ] Verify each claim against current repository evidence or a safe command; record the exact source and scope of the check.
- [ ] Resolve installed versions from manifests and lockfiles before consulting external documentation or claiming current support.
- [ ] Use official sources for external APIs, deprecations, security standards, platform limits, and compatibility statements.
- [ ] Execute examples only in a safe local or disposable context; otherwise inspect parsing, tests, and expected output and mark them statically verified.
- [ ] Check examples for missing imports, placeholders presented as real values, invalid paths, unsafe secrets, obsolete syntax, and output that no longer matches behavior.
- [ ] Interpret examples, templates, future plans, and external references in their declared context. Verify conditional guidance for supported prerequisites even when currently disabled; do not judge a hypothetical example as deployed behavior.
- [ ] Verify numeric counts with a reproducible query and documented exclusions; avoid preserving aggregate counts that will drift without automation.
- [ ] Recommend moving change-prone versions, paths, defaults, inventories, generated output, and status snapshots to authoritative code, configuration, or generated sources where practical; otherwise identify the source, scope, and owner or generation/update trigger needed to prevent silent staleness.
- [ ] Apply the research-to-action gate: external guidance becomes a finding only when it proves a concrete in-repository defect or risk.

### 5. Review Comments and Produce the Report

- [ ] Check comments and docstrings for useful rationale, invariants, contracts, side effects, failure behavior, and non-obvious constraints.
- [ ] For documented deliberate simplifications with material limits, verify supported bounds, an observable revisit trigger, and what to reconsider. Report missing bounds or triggers, exceeded limits, and overdue reviews with evidence and impact; require no special marker and do not label undocumented routine code as debt.
- [ ] Match docstrings for public or non-obvious interfaces against the current signature, parameters, return value, raised errors, side effects, nullability, and lifecycle obligations.
- [ ] Flag syntax narration, obsolete history, dead code, false promises, and information better expressed by names or types; preserve historical rationale that still explains a constraint or prevents a known regression.
- [ ] Check public interfaces for documentation required by the language or ecosystem and for examples that match the actual contract.
- [ ] Filter intentional audience simplification, framework convention, generated prose, and accepted legacy constraints before reporting.
- [ ] Classify every in-scope document or comment surface as `KEEP`, `ADD`, `UPDATE`, `DELETE`, or `MERGE`; recommend deletion or consolidation only when canonical coverage preserves every required audience task and contract.
- [ ] Apply the materiality gate: require concrete reader error, blocked task, unsafe action, contradiction, or recurring maintenance cost at evidenced scale. Reject taste, theoretical purity, generic practice, hypothetical scale, and reasonable alternatives; require the outcome or constraint, not a preferred implementation.
- [ ] **External correction evidence:** Ground external corrections in version-matched official contracts, using primary engineering sources for unresolved tradeoffs. Cite the supported mechanism; local evidence suffices for local defects.
- [ ] For each accepted finding, identify the owning documentation surface, affected reader outcome, and evidence that a correction would restore trust; do not turn recommendations into authorized edits.
- [ ] Classify findings as `P0`-`P3` based on the harm caused by wrong action, inability to operate, maintenance drift, or minor friction.
- [ ] Use `BLOCKED` when a safety-critical claim, required audience journey, or authoritative source cannot be verified without a credible fallback; use `FAIL` when evidence proves unsafe guidance, an inoperable required journey, or an unresolved `P0/P1`; use `CONCERNS` only for material non-blocking trust gaps, and `PASS` only when required claims and journeys are verified with no material finding.

## Self-Check

- [ ] **Reconcile before returning.** Check item-level evidence, requirement coverage, contradictions, scope, verdict, and applicable cleanup. Correct the report or authorized artifacts. Reuse valid evidence; do not automatically rescan the repository or rerun successful commands. Repeat checks only for relevant changes, failures, or unresolved evidence. Disclose remaining gaps.

## Output Contract

Report in the user's language, in this order; retain all five fields and state each fact once. Small results may use one line per field; omit empty tables and do not copy linked artifacts:

1. **Result:** Skill-specific verdict and supported outcome.
2. **Scope:** Reviewed/changed scope, exclusions, baseline, and material assumptions.
3. **Evidence:** Skill-specific fields below; distinguish facts, inferences, and unverified claims. Link artifacts; use tables when useful.
4. **Verification:** Checks/results, unavailable evidence, and applicable cleanup/external state.
5. **Completion:** `Checklist: X/Y complete`; `Incomplete: None` or each `UNPROVEN` item's reason, outcome impact, and exact next action; residual risks and required decisions.

**Skill-specific evidence:** Documentation audiences and journeys; structure, coverage, accuracy, durability/SSOT, and comment trust. Record `KEEP / ADD / UPDATE / DELETE / MERGE` per in-scope surface. Findings need priority, document location, verifying evidence, affected audience, material impact, unacceptable tradeoff, and minimal correction or canonical owner; allow equivalent structures. Distinguish unverified claims from proven defects.

## Quality Gate (folded in from slopbuster)

### Code Comments

# Code Rules: Comment Anti-Patterns

18 patterns of useless LLM-generated code comments. The test for any comment: remove it and see if understanding drops. If it doesn't, the comment was noise.

---

## 1. Tautological Comments
Restates what the code already says.

```python
# Bad
counter += 1  # Increment counter by one

# Good — comment explains WHY, not WHAT
counter += 1  # Rate-limit: max 3 retries per window
```

## 2. Captain Obvious Docstrings
Repeats the type signature in prose instead of documenting exceptions, side effects, or non-obvious behavior.

```python
# Bad
def get_user(user_id: int) -> User:
    """Gets a user by their user ID and returns a User object."""

# Good
def get_user(user_id: int) -> User:
    """Raises NotFoundError if user was soft-deleted in the last 30 days."""
```

## 3. Section Banner Headers
Decorative dividers like `# === INITIALIZATION ===` are relics of pre-IDE navigation. If your function needs section headers, split it into smaller functions.

```python
# Bad
# ============ CONFIGURATION ============
config = load_config()
# ============ VALIDATION ============
validate(config)

# Good — just split the function
```

## 4. Narrating Obvious Intent
Explains why a list comprehension or dictionary was chosen when the pattern is self-evident.

```python
# Bad
# Use a dictionary for O(1) lookups
cache = {}

# Good — only comment when the choice is counterintuitive
# Dict, not set — we need the insertion order for replay
cache = {}
```

## 5. Hedge Comments
Vague TODOs and disclaimers. Either cite a ticket or delete it.

```python
# Bad
# TODO: Consider refactoring this later
# TODO: Might want to add error handling

# Good
# TODO(sarah): handle empty list — breaks callers in routes/users.py (#1234)
```

## 6. Standard Language Feature Explanations
Describes try-except blocks, decorators, or built-ins as if the reader is a beginner.

```python
# Bad
try:  # Try to execute the following code
    result = fetch_data()
except Exception as e:  # Catch any exceptions that occur
    log(e)

# Good — no comment needed for standard patterns
```

## 7. Inline Variable Restatement
Comments that restate a self-documenting variable name.

```typescript
// Bad
const maxRetries = 3; // Maximum number of retries

// Good — the name IS the documentation
const maxRetries = 3;
```

## 8. Philosophical Prose
Describes importance rather than mechanics. Belongs in slides, not source code.

```python
# Bad
# This function is the cornerstone of our data pipeline,
# ensuring the integrity and reliability of our system.

# Good
# Deduplicates events by idempotency key before writing to the WAL.
```

## 9. "We" Language
"We validate input", "We then process the data" — signals chain-of-thought from generation, not documentation from maintenance.

```python
# Bad
# We first validate the input parameters
# We then transform the data into the required format

# Good
# Rejects payloads missing required fields (see schema v2.3)
```

## 10. Changelog Comments
Documents what the code "used to do." That history belongs in git commits, not inline.

```python
# Bad
# Previously used MD5, switched to SHA-256 for security
# Old implementation returned None, now raises ValueError

# Good — this info lives in git blame
```

## 11. Multi-Line One-Liners
Expands simple remarks into verbose blocks for false thoroughness.

```python
# Bad
# This variable stores the maximum number of connection
# attempts that the system will make before giving up
# and returning an error to the caller.
max_attempts = 5

# Good
max_attempts = 5  # give up after 5 tries
```

## 12. ALL-CAPS Emphasis
IMPORTANT, NOTE, WARNING used without structural enforcement. If it's truly important, enforce it in code (assertions, types, lints), not in comments.

```python
# Bad
# IMPORTANT: This must be called before initialize()
# NOTE: Do not modify this value directly

# Good — enforce structurally
assert not self._initialized, "configure() must precede initialize()"
```

## 13. Vague TODOs
No owner, no specifics, no ticket reference.

```python
# Bad
# TODO: Add error handling
# TODO: Improve performance

# Good
# TODO(jake): batch inserts — single-row writes timeout at >1k events (#4521)
```

## 14. Redundant Type Comments
Duplicates information already in the type annotation.

```python
# Bad
data: dict  # Dictionary containing the response data
count: int  # Integer count of items

# Good — let annotations carry type info
data: dict  # Maps vendor_id -> last_sync_timestamp
```

## 15. Boilerplate License Headers
Full license blocks on every file. Use single-line SPDX identifiers instead.

```python
# Bad
# Copyright (c) 2024 Acme Corp. All rights reserved.
# Licensed under the MIT License. See LICENSE file...
# [20 more lines]

# Good
# SPDX-License-Identifier: MIT
```

## 16. Transitional Narration
Chain-of-thought bleeding into code. "Now we can proceed to..."

```python
# Bad
# Now that we have the validated input, we can proceed to process it
result = process(validated_input)

# Good — no narration needed
result = process(validated_input)
```

## 17. Symmetrical Closing Comments
Marking block ends when the block is visible.

```python
# Bad
if condition:
    # ... lots of code ...
# end if

# Good — if the block is too long to see both ends, extract a function
```

## 18. Complimentary Self-Commentary
Claims the code is "clean," "robust," "elegant," or "well-structured." Adjectives are not evidence.

```python
# Bad
# Clean implementation of the observer pattern

# Good — the code speaks for itself, or it doesn't
```

---

## What Comments SHOULD Do

Good comments convey information the code cannot:

- **Non-obvious business logic:** regulatory constraints, domain quirks, product decisions
- **Known workarounds:** why code is intentionally ugly and what breaks if you "fix" it
- **Performance traps:** why a seemingly naive approach is actually faster
- **External references:** issue trackers, RFCs, vendor docs justifying decisions
- **Intentional omissions:** code deliberately NOT handling a case
- **Unsafe invariants:** assumptions not enforced by the type system

### Code Docstrings

# Code Rules: Docstring Anti-Patterns

8 patterns where LLMs produce mechanical documentation instead of useful communication. Core principle: **good docstrings are asymmetric — they document what is surprising, constrained, or dangerous, and skip what is obvious.**

---

## 1. Tautological Summaries

Repeats the function name as a sentence.

```python
# Bad
def get_user(user_id: int) -> User:
    """Get a user by user ID."""

# Good — tells you what the signature can't
def get_user(user_id: int) -> User:
    """Raises NotFoundError for soft-deleted users (deleted < 30 days ago).
    Returns None for hard-deleted users."""
```

## 2. Type Redundancy

Documents types already declared in annotations. The type is carried by the signature; the docstring should carry meaning.

```python
# Bad
def calculate_total(items: list[Item], tax_rate: float) -> float:
    """Calculate the total.
    Args:
        items: A list of Item objects.
        tax_rate: A float representing the tax rate.
    Returns:
        A float representing the total."""

# Good
def calculate_total(items: list[Item], tax_rate: float) -> float:
    """Rounds to 2 decimal places. Tax applied after discounts.
    Empty list returns 0.0, not raises."""
```

## 3. Weak Openings

Wastes the most valuable line on "This function..." or "This class..."

```python
# Bad
def retry(fn, max_attempts=3):
    """This function retries a callable up to max_attempts times."""

# Good — lead with the action
def retry(fn, max_attempts=3):
    """Retry with exponential backoff. Raises after max_attempts consecutive failures."""
```

## 4. JSDoc Noise (TypeScript)

Restates types in @param tags when TypeScript already declares them.

```typescript
// Bad
/**
 * @param userId - The user's ID (string)
 * @param options - Configuration options (object)
 * @returns The user object (User)
 */
function getUser(userId: string, options: Options): User

// Good
/**
 * Throws if user was deactivated. Pass `includeDeleted: true` to override.
 * Rate-limited to 100 req/min per API key.
 */
function getUser(userId: string, options: Options): User
```

## 5. Explaining Language Constructs

Assumes readers need a tutorial on the language itself.

```rust
// Bad
/// Returns an Option<User> which is either Some(User) if found or None if not.

// Good — document when None actually occurs
/// Returns None if the user was purged (>90 days deleted). Soft-deleted
/// users return Some with `active: false`.
```

## 6. Filler Phrases

"Please note," "it is important to," "it should be noted that" — padding.

```python
# Bad
def connect(host: str, port: int):
    """Establishes a connection. Please note that the connection
    timeout is 30 seconds. It is important to note that this
    function is not thread-safe."""

# Good
def connect(host: str, port: int):
    """Not thread-safe. Timeout: 30s. Raises ConnectionError on failure."""
```

## 7. Trivial Examples

Demonstrates obvious behavior instead of revealing gotchas.

```python
# Bad
def add(a: int, b: int) -> int:
    """Add two numbers.
    Example:
        >>> add(2, 3)
        5"""

# Good — examples that reveal edge cases
def parse_date(s: str) -> date:
    """Examples:
        >>> parse_date("2024-01-01")  # ISO format
        date(2024, 1, 1)
        >>> parse_date("Jan 1, 2024")  # Also accepts informal
        date(2024, 1, 1)
        >>> parse_date("tomorrow")  # Raises — no relative dates
        ValueError: relative dates not supported"""
```

## 8. Happy-Path Focus

Describes the straightforward case in detail while burying constraints, side effects, and failure modes.

```python
# Bad
def save_user(user: User) -> None:
    """Saves the user to the database."""

# Good — what readers can't infer from the code
def save_user(user: User) -> None:
    """Writes to primary DB and enqueues replication event.
    Blocks until primary write confirms. Replication is async —
    read-after-write on replicas may see stale data for ~500ms.
    Raises IntegrityError if email already exists (case-insensitive)."""
```

---

## The Docstring Test

For every docstring, ask: **"Does this tell me something the signature and function name don't?"**

If yes → keep it.
If no → delete it or rewrite to cover: constraints, failure modes, side effects, performance characteristics, or invariants the type system can't express.
