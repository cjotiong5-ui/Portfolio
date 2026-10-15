---
name: test-strategy-and-authoring
description: Builds and maintains scoped acceptance tests using a full TDD/test-pyramid framework and user-story-driven coverage tracking; does not repair product code.
---

# Acceptance Test Builder

**Goal:** Deliver the smallest trustworthy acceptance-test portfolio for stated requirements through a user- or external-system-observable boundary. Modify only approved tests and test documentation; implement justified additions, updates, merges, and deletions without repairing product code.

**Execution contract:** The checklist defines completion. Track each item internally as `PENDING`, `PROVEN` with evidence, `CLEARED` with evidence its condition is absent, or `UNPROVEN` with a gap; reading, delegation, or tool failure is not proof. Reconcile after each section. Before returning, resolve all `PENDING`, count only `PROVEN` and `CLEARED`, and apply verdict and approval rules to every gap.
Preserve intent, scope, and existing authorization. Continue authorized work; ask only for consequential unresolved choices or required external approval. Scale depth to material risk without skipping checks. Preserve dependency and safety order; otherwise choose an appropriate verification method.
Accept equivalent user or repository evidence; no other skill, named artifact, or complete lifecycle is required. Preserve source requirement and decision IDs. Bind reused evidence to relevant source versions, dirty changes, configuration, and environment; invalidate only affected claims.
On continuation, reconcile task, authorization, current state, and unresolved evidence. For long work, return a compact continuation record or update an already authorized artifact; read-only skills do not persist it. Distinguish artifact readiness, verified behavior, and external-action authority.
Prepare authorized work before required approval. If blocked by an instruction, cite its exact source and unresolved boundary; do not invent approval gates from caution.


## Tool Routing

| Need | Preferred tool | Use it when | Fallback |
|---|---|---|---|
| Workspace safety | Git status, diff, repository instructions, and branch or worktree inspection | Always before editing | Stop when user changes cannot be separated safely |
| Existing test conventions | File listing, search, manifests, runner configuration, CI, and focused reads | Selecting the project-native runner, layout, fixtures, and commands | Follow the nearest maintained test pattern |
| Behavior and wiring | Language server or host-native code intelligence | Locating observable entrypoints, registration, consumers, and state boundaries | Narrow search plus direct inspection |
| Test implementation | Native editing tools and project generators | Creating tests, fixtures, helpers, and narrowly required test documentation | Minimal project-consistent files; never hand-edit generated state |
| Observable execution | Repository-defined shell commands, browser, API client, CLI, or disposable integration environment | Proving UI, protocol, command, or durable state outcomes | Return `INCOMPLETE` with the exact missing check |
| External contract | Official version-matched documentation or specification | Expected behavior depends on a current external API or standard | Mark it `UNVERIFIED`; do not encode a guessed oracle |

Never run acceptance tests against production or an unapproved external target. Do not deploy, publish, migrate shared data, rotate credentials, or accept changed output merely to make a test pass.

## Evidence Rules

- Derive expected behavior from requirements, public contracts, examples, invariants, or an independent reference; never from the implementation calculation being tested.
- Prefer a terminal durable or user-visible outcome over an intermediate status, mock call, log line, or internal method result.
- Use golden files or snapshots only for deterministic, reviewable contracts. Updating expected output is a specification change, not test verification.
- Make setup, data allocation, execution, cleanup, and rerun behavior reproducible; preserve the first failure before retries or cleanup obscure it.
- A passing command proves only the environment and scenarios it actually exercised. State every excluded cell and unavailable boundary.

- Treat `KEEP`, `ADD`, `UPDATE`, `MERGE`, `DELETE`, and `NO_TEST` as portfolio decisions, distinct from execution results. Do not default to `ADD` when existing evidence, consolidation, retirement, or accepted residual risk is the better answer.
- Delete or merge only when the test basis is obsolete or evidence shows that all still-required unique material behavior, failure modes, oracle strength, and useful failure localization remain covered.

## Checklist

### 1. Establish the Change Boundary

- [ ] Resolve the requirements, acceptance criteria, actor, protected outcome, observable contract, explicit non-goals, approved portfolio decisions, allowed test paths, and allowed test-documentation paths; label inferred experience qualities as assumptions.
- [ ] Read applicable repository instructions and inspect Git state, untracked files, generated areas, and existing user changes before editing.
- [ ] Detect the project-native runner, directory layout, naming, fixtures, setup, cleanup, environment configuration, and CI invocation.
- [ ] Inventory existing tests affected by the requirement or contract and map their actual oracles before creating a new test.
- [ ] Map each requirement to the boundary that can prove it: UI, API, CLI, message, integration, file, or durable state.
- [ ] Identify credentials, services, accounts, ports, devices, browsers, datasets, and destructive effects required by the scenarios.
- [ ] Return `BLOCKED` before editing when no safe target, reliable expected contract, or separable workspace exists.

### 2. Design Reproducible Acceptance Evidence

- [ ] Define the protected outcome, defect class, setup, action, terminal outcome, independent oracle, expected evidence, and cleanup for every requirement.
- [ ] Confirm or derive one portfolio action per affected test and material risk. When no approved strategy exists, justify the action from impact, plausible failure, uniqueness, trust, and maintenance cost; record `NO_TEST` with existing proof, another control, or accepted residual risk.
- [ ] **Test value and boundary:** Require every test to detect a concrete defect in this product's business logic and name the protected business outcome. Prefer E2E through user or external-system boundaries; use integration or unit tests only for business scenarios difficult to exercise reliably through E2E. Reject platform, trivial-wiring, implementation-detail, and duplicate proof with no distinct business failure signal.
- [ ] Include invalid, authorization, boundary, partial-failure, retry, idempotency, recovery, and compatibility behavior only when it can materially change the protected outcome.
- [ ] Allocate unique or namespaced test data and control clock, randomness, locale, ordering, and concurrency where they affect reproducibility.
- [ ] Use real dependencies or approved emulators when mocks would bypass the behavior under acceptance; pin versions and verify readiness and reset behavior.
- [ ] For deterministic output, derive golden or diff expectations from an independent contract and keep the artifact small enough to review.
- [ ] For nondeterministic output, assert stable invariants and semantic fields instead of normalizing away failures or snapshotting noise.
- [ ] **UI test locators:** Use stable project-native semantic locators (roles, accessible names, labels) or explicit IDs/test hooks according to the observable contract and locale strategy. Avoid styling, position, timing, and incidental structure. Treat exact-copy assertions separately when copy is a requirement; do not require product edits solely to add hooks when a robust semantic locator exists.
- [ ] Define the required or diagnostic gate and a review or retirement trigger when evidence is temporary, compatibility-bound, incident-specific, or coupled to a changing contract.

### 3. Implement within Test Scope

- [ ] Create or update tests in the existing project layout with behavioral names and failure messages that identify the violated requirement, protected outcome, and detected defect.
- [ ] Implement approved `MERGE` and `DELETE` actions without leaving superseded tests, fixtures, snapshots, helpers, registrations, or CI entries; preserve replacement traceability in repository-native paths, names, tags, or task evidence.
- [ ] Reuse maintained fixtures and helpers only when their defaults and side effects remain visible; avoid a new abstraction for one scenario.
- [ ] Make setup fail fast on missing prerequisites and make cleanup safe after success, assertion failure, timeout, cancellation, or partial setup.
- [ ] Keep tests rerunnable and idempotent; do not depend on execution order or silently reuse state from a previous run.
- [ ] Add the narrowest required test documentation only when contributors otherwise cannot configure, run, interpret, or clean up the new evidence.
- [ ] Do not edit production code, weaken assertions, broaden timeouts without evidence, skip failing cases, or regenerate expected artifacts to obtain a pass.
- [ ] Inspect the diff for unrelated formatting, generated churn, secrets, environment-specific paths, and changes outside the approved scope.

### 4. Execute and Preserve Evidence

- [ ] Run the smallest affected scenario first, then the relevant suite and required repository gate when available; when actions only remove evidence, run the replacement or nearest retained proof.
- [ ] Record command, working directory, environment class, target, versions, exit status, duration, artifacts, and actual scenarios executed. No selected tests or all-skipped output cannot prove acceptance.
- [ ] Preserve the first failing output, seed, order, request, response, screenshot, diff, or durable state needed to reproduce the defect.
- [ ] Distinguish product failure, test defect, environment failure, unavailable dependency, and flaky evidence before changing the test.
- [ ] If a valid test exposes a product defect, retain the failing acceptance evidence and report the smallest reproduction; never repair product code. Continue independent in-scope test work when safe.
- [ ] Verify cleanup and rerun at least the affected scenario when state ownership or idempotency is material.
- [ ] Avoid retries unless they diagnose nondeterminism; a retry must not convert the initial failure into a silent pass.

### 5. Finalize without Overclaiming

- [ ] Map every requirement and protected outcome to its final test path or `NONE`, command or alternative control, oracle or accepted risk, and result as `PASS`, `FAIL`, `BLOCKED`, or `UNPROVEN`.
- [ ] Reconcile planned and actual portfolio actions, including justified deviations, and report the net count of tests added, updated, merged, and deleted without treating counts as quality targets.
- [ ] Preserve source acceptance identifiers and expected behavior independently of implementation; report selected/executed/skipped scope and never accept zero executed relevant tests as proof.
- [ ] Use `COMPLETE` when all approved portfolio actions are implemented and required evidence records a trustworthy `PASS` or product `FAIL`, or a justified `NO_TEST` control. Unresolved test defects are not completed evidence; this verdict does not certify product correctness.
- [ ] Use `INCOMPLETE` when safe work remains unfinished or environment, dependency, test defects, or interruption prevents trustworthy execution; state the exact remaining action or check.
- [ ] Use `BLOCKED` when actions cannot be implemented safely, requirements lack a reliable oracle, or the workspace cannot be protected.

## Self-Check

- [ ] **Reconcile before returning.** Check item-level evidence, requirement coverage, contradictions, scope, verdict, and applicable cleanup. Correct the report or authorized artifacts. Reuse valid evidence; do not automatically rescan the repository or rerun successful commands. Repeat checks only for relevant changes, failures, or unresolved evidence. Disclose remaining gaps.

## Output Contract

Report in the user's language, in this order; retain all five fields and state each fact once. Small results may use one line per field; omit empty tables and do not copy linked artifacts:

1. **Result:** Skill-specific verdict and supported outcome.
2. **Scope:** Reviewed/changed scope, exclusions, baseline, and material assumptions.
3. **Evidence:** Skill-specific fields below; distinguish facts, inferences, and unverified claims. Link artifacts; use tables when useful.
4. **Verification:** Checks/results, unavailable evidence, and applicable cleanup/external state.
5. **Completion:** `Checklist: X/Y complete`; `Incomplete: None` or each `UNPROVEN` item's reason, outcome impact, and exact next action; residual risks and required decisions.

**Skill-specific evidence:** Requirement/protected outcome → existing evidence → portfolio action → final test path or `NONE` → independent oracle/command → gate/result → retirement trigger. List changed test/documentation files, replacement evidence for consolidation/deletion, net portfolio effect, exact commands and artifacts, retained product-failure reproductions, cleanup, unavailable environments, and excluded cells. Evidence completion does not imply product correctness.

---

## Merged in from: comprehensive-testing (TDD/test-pyramid framework)

# Comprehensive Testing

> Based on [Anthropic's Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices) and community patterns

## Core Philosophy

> "Claude performs best when it has a clear target to iterate against—a test case provides concrete success criteria."

Testing is not about proving code works; it's about **designing code that is testable** and **documenting expected behavior**.

---

## Test Pyramid

```
        /\
       /  \        E2E Tests (10%)
      /----\       - Full user flows
     /      \      - Slowest, most brittle
    /--------\
   /          \    Integration Tests (20%)
  /------------\   - Component interaction
 /              \  - Real dependencies
/----------------\
       Unit Tests (70%)
       - Single function/method
       - Fast, isolated, many
```

| Level | Speed | Scope | When to Use |
|-------|-------|-------|-------------|
| Unit | <10ms | Single function | All logic |
| Integration | <1s | Multiple components | APIs, DB |
| E2E | <30s | Full flow | Critical paths |

---

## TDD Workflow (Anthropic Recommended)

### The 6-Step Process

```
1. WRITE TESTS FIRST
   ↓
2. VERIFY TESTS FAIL
   ↓
3. COMMIT TEST SUITE
   ↓
4. IMPLEMENT CODE
   ↓
5. VERIFY WITH SUBAGENT
   ↓
6. COMMIT IMPLEMENTATION
```

### Step 1: Write Tests First

```markdown
Be EXPLICIT about TDD to avoid mock implementations:

"I want to implement [feature] using TDD.
First, write tests for [expected behavior] with these input/output pairs:
- Input: X → Expected: Y
- Input: A → Expected: B
Do NOT create any implementation yet."
```

### Step 2: Verify Tests Fail

```bash
# Run tests and confirm they fail for the RIGHT reason
npm test  # or pytest, go test, etc.

# Expected: "function not found" or "undefined"
# NOT: syntax error, wrong import
```

### Step 3: Commit Test Suite

```bash
git add tests/
git commit -m "test: Add tests for [feature] (RED phase)"
```

### Step 4: Implement Incrementally

```markdown
"Now implement the code to make these tests pass.
Do NOT modify the tests.
Run tests after each change until all pass."
```

Claude will enter an autonomous loop:
```
Write code → Run tests → Analyze failures → Adjust → Repeat
```

### Step 5: Verify with Subagent

```markdown
"Use a subagent to independently verify the implementation:
- Is it overfitting to tests?
- Are edge cases handled?
- Is the code maintainable?"
```

### Step 6: Commit Implementation

```bash
git add src/
git commit -m "feat: Implement [feature] (GREEN phase)"
```

---

## Test Structure Patterns

### AAA Pattern (Arrange-Act-Assert)

```typescript
describe('UserService', () => {
  it('should create user with valid email', async () => {
    // Arrange - Setup test data and dependencies
    const userRepo = new InMemoryUserRepository();
    const service = new UserService(userRepo);
    const input = { email: 'test@example.com', name: 'Test' };

    // Act - Execute the code under test
    const user = await service.create(input);

    // Assert - Verify the results
    expect(user.email).toBe('test@example.com');
    expect(user.id).toBeDefined();
    expect(await userRepo.findById(user.id)).toEqual(user);
  });
});
```

### Given-When-Then Pattern

```python
def test_order_total_with_discount():
    """
    Given an order with items totaling $100
    When a 20% discount is applied
    Then the total should be $80
    """
    # Given
    order = Order()
    order.add_item(Item(price=50))
    order.add_item(Item(price=50))

    # When
    order.apply_discount(Percentage(20))

    # Then
    assert order.total == Money(80)
```

---

## Framework Best Practices

### Jest / Vitest (JavaScript/TypeScript)

```typescript
// Structure
describe('ModuleName', () => {
  describe('methodName', () => {
    it('should [expected behavior] when [condition]', () => {});
  });
});

// Setup/Teardown
beforeAll(async () => { /* one-time setup */ });
beforeEach(() => { /* per-test setup */ });
afterEach(() => { /* per-test cleanup */ });
afterAll(async () => { /* one-time cleanup */ });

// Async testing
it('handles async operations', async () => {
  const result = await asyncFunction();
  expect(result).toBe(expected);
});

// Error testing
it('throws on invalid input', () => {
  expect(() => validate(null)).toThrow('Input required');
});

// Snapshot testing (use sparingly)
it('renders correctly', () => {
  const tree = renderer.create(<Component />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Table-driven tests
it.each([
  [1, 1, 2],
  [2, 2, 4],
  [0, 0, 0],
])('add(%i, %i) = %i', (a, b, expected) => {
  expect(add(a, b)).toBe(expected);
});
```

**vitest.config.ts:**
```typescript
export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 80,
        branches: 70,
        functions: 80,
      },
    },
  },
});
```

### pytest (Python)

```python
import pytest
from mymodule import Calculator

# Fixtures for dependency injection
@pytest.fixture
def calculator():
    return Calculator()

@pytest.fixture
def database():
    db = TestDatabase()
    yield db
    db.cleanup()

# Parametrized tests
@pytest.mark.parametrize("a,b,expected", [
    (1, 1, 2),
    (2, 2, 4),
    (0, 0, 0),
    (-1, 1, 0),
])
def test_add(calculator, a, b, expected):
    assert calculator.add(a, b) == expected

# Exception testing
def test_divide_by_zero(calculator):
    with pytest.raises(ZeroDivisionError):
        calculator.divide(1, 0)

# Async testing
@pytest.mark.asyncio
async def test_async_operation():
    result = await async_function()
    assert result == expected

# Markers for categorization
@pytest.mark.slow
@pytest.mark.integration
def test_database_connection(database):
    assert database.is_connected()
```

**conftest.py:**
```python
import pytest

@pytest.fixture(scope="session")
def database_url():
    return "postgresql://test:test@localhost/test"

@pytest.fixture(autouse=True)
def reset_database(database):
    yield
    database.rollback()
```

**pytest.ini:**
```ini
[pytest]
testpaths = tests
python_files = test_*.py
python_functions = test_*
addopts = -v --cov=src --cov-report=term-missing
markers =
    slow: marks tests as slow
    integration: marks tests as integration tests
```

### Go Testing

```go
package mypackage

import (
    "testing"
    "github.com/stretchr/testify/assert"
    "github.com/stretchr/testify/require"
)

func TestAdd(t *testing.T) {
    tests := []struct {
        name     string
        a, b     int
        expected int
    }{
        {"positive numbers", 1, 2, 3},
        {"zero values", 0, 0, 0},
        {"negative numbers", -1, -2, -3},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            result := Add(tt.a, tt.b)
            assert.Equal(t, tt.expected, result)
        })
    }
}

// Table-driven with subtests
func TestUserService_Create(t *testing.T) {
    t.Run("creates user with valid input", func(t *testing.T) {
        repo := NewInMemoryRepo()
        svc := NewUserService(repo)

        user, err := svc.Create(CreateUserInput{Email: "test@example.com"})

        require.NoError(t, err)
        assert.NotEmpty(t, user.ID)
        assert.Equal(t, "test@example.com", user.Email)
    })

    t.Run("returns error for invalid email", func(t *testing.T) {
        repo := NewInMemoryRepo()
        svc := NewUserService(repo)

        _, err := svc.Create(CreateUserInput{Email: "invalid"})

        require.Error(t, err)
        assert.Contains(t, err.Error(), "invalid email")
    })
}
```

---

## Mock Strategy

### When to Mock

| Scenario | Mock? | Reason |
|----------|-------|--------|
| External APIs | ✅ Yes | Slow, unreliable, costs money |
| Time/Date | ✅ Yes | Non-deterministic |
| Random | ✅ Yes | Non-deterministic |
| Database (unit) | ✅ Yes | Slow, complex setup |
| Database (integration) | ❌ No | Test real behavior |
| Your own code | ⚠️ Rarely | Prefer real implementations |
| File system | ⚠️ Depends | Use temp dirs when possible |

### How to Mock

```typescript
// Jest - Mock module
jest.mock('./emailService', () => ({
  sendEmail: jest.fn().mockResolvedValue({ success: true }),
}));

// Jest - Mock function
const mockCallback = jest.fn();
mockCallback.mockReturnValue(42);

// Vitest - Spy
import { vi } from 'vitest';
const spy = vi.spyOn(console, 'log');

// Time mocking
beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2024-01-01'));
});

afterEach(() => {
  vi.useRealTimers();
});
```

```python
# pytest - Mock with unittest.mock
from unittest.mock import Mock, patch, MagicMock

@patch('mymodule.external_api.fetch')
def test_with_mocked_api(mock_fetch):
    mock_fetch.return_value = {'data': 'mocked'}
    result = my_function()
    assert result == expected
    mock_fetch.assert_called_once_with('expected_arg')

# Fixture-based mock
@pytest.fixture
def mock_email_service():
    service = Mock()
    service.send.return_value = True
    return service
```

### Prefer Test Doubles Over Mocks

```typescript
// ❌ Heavy mocking
const mockRepo = {
  findById: jest.fn().mockResolvedValue({ id: '1', name: 'Test' }),
  save: jest.fn().mockResolvedValue(undefined),
  delete: jest.fn().mockResolvedValue(undefined),
};

// ✅ In-memory implementation (test double)
class InMemoryUserRepository implements UserRepository {
  private users: Map<string, User> = new Map();

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async save(user: User): Promise<User> {
    this.users.set(user.id, user);
    return user;
  }

  async delete(id: string): Promise<void> {
    this.users.delete(id);
  }
}
```

---


## Extended Reference

Detailed material starting at `## Boundary Testing` has been moved to [`reference/extended.md`](reference/extended.md) to keep this skill concise. Load that reference when the task requires the moved examples, command catalogs, checklists, platform details, or implementation templates.

---

## Merged in from: app-user-story-qa (feature-inventory/user-story coverage tracking)

# App User Story QA

## Purpose

Use this skill to turn a broad "test every feature in this app" request into a controlled loop with one source of truth. Anchor every feature to code, track expected behavior in a canonical spreadsheet, run tests against each user story, and classify failures. Apply fixes only when the current request explicitly authorizes them.

## Route

Use `plan_first` for most runs. Switch to `clarify_first` only when the app boundary, writable checkout, production risk, or acceptance criteria are unclear enough that a wrong assumption would waste substantial work.

Before editing:

1. Run a repo state snapshot: current path, branch, latest remote, dirty files, open PRs when relevant.
2. If the checkout is dirty or user work is present, first decide which state the user asked to test. Preserve current user work in the isolated test worktree when the request targets the working tree; use a clean base only when the user asked for the base branch.
3. Read applicable repo instructions such as `AGENTS.md`, `README`, architecture docs, and feature entrypoints.
4. Search for existing QA trackers before creating a new one.
5. Define the app boundary by user-facing surfaces, not internal helper functions.

## Operating Contract

Select one mode before editing production code:

- `report_only` is the default for audit, inventory, test, diagnose, or tracker requests. It may create or update the requested canonical tracker and run tests, but it must not change product behavior.
- `apply_fixes` requires the current user request to explicitly ask for fixes. It covers only defects already reproduced and classified within the agreed app boundary. Earlier approval and a generic request to "test everything" do not authorize fixes.

If the mode is ambiguous, use `report_only` and record proposed fixes in the tracker.

Direct actions:
- Inventory local code and docs, create or update the single canonical tracker, run local tests, and document failures.
- In `apply_fixes` only, fix narrow in-scope logistical or UX defects and add focused coverage when user-observable behavior changes.

Escalate before:
- Testing production systems, using paid external services, changing credentials or deployment state, deleting user data, or broadening the app boundary beyond the user's request.
- Editing shared test infrastructure, weakening assertions, or changing product requirements instead of the implementation.

Evidence-backed pushback:
- Challenge requests to skip the tracker, mark untested rows as passed, or fix symptoms without reproducing the failure. Cite the tracker row, command output, code anchor, or missing environment precondition.

Feedback loop:
- Promote repeated setup failures, brittle manual paths, or recurring test gaps into tracker notes, scripts, docs, or follow-up issues instead of leaving them only in chat.

## Gotchas

- Do not create scattered notes or duplicate trackers. One canonical tracker is the audit log.
- Do not invent expected behavior from product hopes. Expected behavior comes from current code, docs, and visible user surfaces.
- Do not mark a feature passed from stale output. Fresh evidence from the current session is required.
- Do not "fix" environment blockers unless the user asked for environment repair.
- Do not infer fix authorization from words such as "audit", "test", "check", or "create a tracker". Keep those runs in `report_only`.

## Canonical Tracker

Create or update exactly one tracker. Prefer a real spreadsheet when the runtime supports it; otherwise use a CSV and treat it as the canonical spreadsheet. Do not scatter status across side reports.

Use these columns:

```csv
Feature ID,Surface,Feature / capability,User story,Expected behavior based on code,Code anchors,Initial test approach,Initial test command or route,Status,Test result,Errors,Fix status,Retest result,Notes
```

Rules:

- Assign stable IDs such as `F001`, `F002`.
- Require at least one code anchor per row. A row without an anchor is not complete.
- Write expected behavior from current code and docs, not from aspirational specs.
- Keep the tracker parseable: validate CSV/spreadsheet row widths after edits.
- Update the tracker during the loop, not only at the end.

## Status Values

Use a small, consistent status set:

- `Not Tested`
- `Passed`
- `Failed - Product`
- `Failed - UX`
- `Failed - Logistical`
- `Failed - Test Infra`
- `Blocked - Env`
- `Fixed`
- `Passed after fix`

Use `Failed - Logistical` for repo-owned setup, script, port, packaging, or local workflow defects that block a valid user path.
Use `Blocked - Env` for local machine issues such as missing credentials, occupied services outside the repo, stale PATH binaries, or unavailable optional runtimes. Do not "fix" the user's environment unless they explicitly ask.

## Defect Taxonomy

Classify every failure before fixing:

- `Product`: implemented behavior violates the user story or loses data.
- `UX`: behavior works but the user path is confusing, brittle, or poorly surfaced.
- `Logistical`: scripts, ports, setup, packaging, or local workflow make valid behavior hard to exercise.
- `Test Infra`: the test itself is flaky, racy, or asserts the wrong contract.
- `Env`: external setup blocks execution and is not a repo defect.

Fix only defects that are in scope for the task. Record out-of-scope defects in the tracker with clear rationale.

## Workflow

### 1. Inventory

Map all user-visible surfaces first:

- CLI commands and flags
- Web or desktop UI routes
- API endpoints
- background jobs or hooks that affect users
- plugin, package, install, or release surfaces
- import/export, backup, migration, and governance flows

For each feature, record the user story as:

```text
As a <user>, I want <capability>, so <outcome>.
```

Keep stories practical. Do not create rows for private helpers unless the user can observe the behavior through a surface.

### 2. Test

For every tracker row, choose the strongest feasible evidence:

- direct smoke test for the user path
- focused unit or integration test for the exact contract
- broad regression suite when a feature is already covered there
- manual or browser test when automation is missing

Record the command, route, or manual steps in the tracker. Fresh output from the current session is required before marking a row passed.

### 3. Fix

In `report_only`, record the reproduced defect, evidence, and proposed fix, then continue testing without editing production code.

In `apply_fixes`, state the exact defect and files being changed before editing. Keep fixes narrow:

- For UX defects, fix production code and add or update focused coverage.
- For product defects, record the evidence and escalate unless the user's request explicitly authorizes product behavior fixes.
- For logistical defects, improve scripts, defaults, setup checks, or error messages.
- For test-infra defects, preserve the behavior contract and fix the fixture or race.
- Do not weaken assertions to make the suite pass.

Stop and re-evaluate after three failed attempts on the same defect.

### 4. Retest

After each fix:

1. Rerun the focused failing test or smoke.
2. Rerun the relevant broader gate for the touched surface.
3. Update `Fix status` and `Retest result`.
4. Keep the original error text or summary in `Errors` so the tracker remains an audit log.

Before completion, run the repo's required formatting, build, typecheck, lint, and test commands when practical.

## Completion Gate

Finish only when:

- every feature row has a user story, expected behavior, code anchors, and a status;
- every `Failed` row is fixed and retested in `apply_fixes`, or is explicitly recorded as proposed, out of scope, or blocked with evidence in `report_only`;
- every applied fix has a retest result;
- the tracker validates structurally;
- the final answer names the tracker path, changed files, defects found, fixes made, and verification commands.

If the repo has existing dirty work that is not yours, mention the isolated worktree or scope boundary in the final answer.
