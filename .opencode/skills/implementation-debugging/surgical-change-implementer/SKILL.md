---
name: surgical-change-implementer
description: Implements one scoped feature or fix through the smallest complete solution, with a mandatory naming/quality/anti-slop checklist folded in; not upgrades or performance tuning.
---

# Surgical Change Implementer

**Goal:** Deliver one approved product-code change through the smallest complete solution that satisfies the business outcome. Remove superseded code and avoid speculative abstraction, duplicate mechanisms, and custom infrastructure already provided by the repository or platform.

**Execution contract:** The checklist defines completion. Track each item internally as `PENDING`, `PROVEN` with evidence, `CLEARED` with evidence its condition is absent, or `UNPROVEN` with a gap; reading, delegation, or tool failure is not proof. Reconcile after each section. Before returning, resolve all `PENDING`, count only `PROVEN` and `CLEARED`, and apply verdict and approval rules to every gap.
Preserve intent, scope, and existing authorization. Continue authorized work; ask only for consequential unresolved choices or required external approval. Scale depth to material risk without skipping checks. Preserve dependency and safety order; otherwise choose an appropriate verification method.
Accept equivalent user or repository evidence; no other skill, named artifact, or complete lifecycle is required. Preserve source requirement and decision IDs. Bind reused evidence to relevant source versions, dirty changes, configuration, and environment; invalidate only affected claims.
On continuation, reconcile task, authorization, current state, and unresolved evidence. For long work, return a compact continuation record or update an already authorized artifact; read-only skills do not persist it. Distinguish artifact readiness, verified behavior, and external-action authority.
Prepare authorized work before required approval. If blocked by an instruction, cite its exact source and unresolved boundary; do not invent approval gates from caution.


## Tool Routing

| Need | Preferred capability | Fallback |
|---|---|---|
| Scope and repository policy | User request, linked task or plan, repository instructions, Git status, and focused diff | State bounded assumptions; stop if a choice would materially change product intent |
| Runtime ownership and impact | Language server, host-native code intelligence, traces, schemas, routes, and configuration | Narrow symbol and text search followed by direct reads of definitions and consumers |
| Existing capability | Repository code, manifests, lockfiles, platform APIs, and installed dependency source | Current official documentation and primary sources; mark uncertain claims `UNVERIFIED` |
| Safe implementation | Focused editor, native formatter, package manager, and generation commands | Minimal manual patch that preserves user changes and generated-file ownership |
| Verification | Repository-defined build, lint, type, test, smoke, and runtime checks | Smallest reproducible check that proves the protected contract; disclose coverage gaps |
| External semantics | Official documentation, specifications, security advisories, registries, and upstream source | Primary-source technical material; use secondary expert guidance only for tradeoffs |

Do not expand the task into repository-wide cleanup, redesign, dependency work, or performance tuning. Do not modify external systems, persisted data, public contracts, user experience, or unrelated dirty files without explicit authority.

## Core Rules

- Surgical does not mean superficial. Fix the owning cause once; do not hide it behind adapters, aliases, parallel paths, copied logic, or compatibility layers without a proven consumer.
- Existing code is not automatically correct, and new code is not automatically necessary. Subtraction, configuration, or no code can be the best implementation.
- Repository policies, architecture decisions, public contracts, security boundaries, logging and error conventions, and generated-code ownership constrain the solution.
- Research a concrete semantic or design uncertainty before coding. Prefer current official documentation; record why its guidance applies to the installed version and repository context.
- Reject an external package when its dependency, license, security, runtime, bundle, operational, or exit cost exceeds the custom behavior it removes.
- Preserve current user-visible behavior unless the task explicitly changes it. Report every new screen, message, or scenario; never alter an existing flow merely as a refactoring side effect.
- Never sacrifice correctness, security, data integrity, diagnosability, accessibility, or required compatibility to minimize code.

## Checklist

### 1. Establish the Change Contract

- [ ] Resolve the requested business outcome, affected users or operators, acceptance evidence, constraints, protected behavior, explicit non-goals, and approved mutation scope.
- [ ] Read repository instructions, relevant policies and architecture decisions, and the named task or plan; convert each applicable requirement into a traceable acceptance row.
- [ ] Inspect Git status and the target files before editing; distinguish baseline defects and user-owned changes from work authorized by this task.
- [ ] Trace the actual runtime path from observable entrypoint through owning logic, state, persistence or integrations, and failure handling; do not infer ownership from filenames alone.
- [ ] Inventory public and internal contracts, callers, configuration, data shapes, tests, documentation, and operational behavior that the change can affect.
- [ ] Identify decisions affecting product intent, UX, compatibility, data, dependencies, or external state. Use existing task authorization; ask only when a consequential choice is unresolved or would expand scope.
- [ ] Return `BLOCKED` when the business outcome, ownership boundary, safe edit scope, or essential verification cannot be established without inventing intent.

### 2. Choose the Smallest Complete Solution

- [ ] Test `NO_CHANGE`: verify whether the outcome already holds without edits; a usage explanation may suffice. Documentation or configuration edits belong to `DELETE_OR_CONFIGURE` and require verification as changes.
- [ ] Test `DELETE_OR_CONFIGURE`: identify an obsolete path, wrong default, redundant state, feature flag, registration, or configuration that can be removed or corrected directly.
- [ ] Test `REUSE_LOCAL`: search for the repository's canonical helper, component, service, policy, type, enum, constant, error, or integration before adding another concept.
- [ ] Test `USE_PLATFORM_OR_STDLIB`: verify whether the language, runtime, browser, database, framework, or deployment platform already owns the required generic behavior.
- [ ] Test `REUSE_INSTALLED`: inspect declared dependencies and their supported APIs before proposing a new package or custom mechanism.
- [ ] Consider `ADOPT_DEPENDENCY` only when remaining behavior is generic and material; verify current official guidance, maintenance, security, license, compatibility, transitive cost, and removal path.
- [ ] Use `MINIMAL_CUSTOM` for irreducible product policy or a documented capability or lifecycle-cost gap; name the invariant and why applicable simpler options are insufficient.
- [ ] Stop searching when a candidate completely satisfies the contract at acceptable lifecycle cost; clear later rungs as unnecessary. Compare credible candidates by total complexity and risk, recording the chosen rung and rejected applicable simpler options.
- [ ] Challenge the proposed design for symptom patches, duplicated ownership, speculative extension points, premature abstraction, hidden state, avoidable branching, and temporary compatibility that lacks a real consumer.
- [ ] Define the coherent edit set, deletion set, verification, and rollback boundary before changing code.

### 3. Implement Surgically

- [ ] Change the canonical owning boundary once and update only the consumers required for a complete end-to-end result.
- [ ] Follow repository conventions for naming, types, constants, enums, configuration, errors, logging, security, accessibility, concurrency, transactions, and resource lifecycle.
- [ ] Keep product policy explicit and centralized; do not scatter magic values, duplicated route or event keys, parallel allowlists, or derived state with multiple owners.
- [ ] Use existing dependency and generation workflows; do not hand-edit lockfiles or generated artifacts, add convenience wrappers around already clear APIs, or copy third-party implementation code.
- [ ] Before removal, verify allegedly unused paths against dynamic imports, reflection, registries, configuration, generation, scripts, optional features, and external consumers; static search alone cannot authorize deletion.
- [ ] Remove obsolete branches, helpers, adapters, aliases, flags, exports, configuration, dependencies, documentation, and tests made unnecessary by the retained design.
- [ ] Preserve compatibility only for a verified consumer; make every temporary bridge narrow, observable, owned, time-bounded by a removal trigger, and explicit in the report.
- [ ] For deliberate simplifications with material, non-obvious limits, record current contract fit, supported bounds, an observable revisit trigger, and what to reconsider in a local comment or existing decision record within scope. Do not invent thresholds, mandate markers or registries, or document routine simplicity.
- [ ] Inspect the diff during implementation for unrelated formatting, opportunistic refactoring, accidental UX or contract changes, debug artifacts, and net-new code unsupported by the change contract.

### 4. Build Proportionate Evidence

- [ ] Map each acceptance row and material regression risk to existing evidence before adding tests; assess likelihood, impact, detectability, and blast radius.
- [ ] Choose exactly one portfolio action per affected test or gap: `KEEP`, `ADD`, `UPDATE`, `MERGE`, `DELETE`, or justified `NO_TEST`; remove superseded and low-value testware in the approved scope.
- [ ] **Test value and boundary:** Require every test to detect a concrete defect in this product's business logic and name the protected business outcome. Prefer E2E through user or external-system boundaries; use integration or unit tests only for business scenarios difficult to exercise reliably through E2E. Reject platform, trivial-wiring, implementation-detail, and duplicate proof with no distinct business failure signal.

- [ ] **UI test locators:** Use stable project-native semantic locators (roles, accessible names, labels) or explicit IDs/test hooks according to the observable contract and locale strategy. Avoid styling, position, timing, and incidental structure. Treat exact-copy assertions separately when copy is a requirement; do not require product edits solely to add hooks when a robust semantic locator exists.
- [ ] Give temporary characterization or migration tests an owner and retirement trigger; keep quarantine explicit and never count skipped, flaky, or unproven evidence as passing.
- [ ] Run focused checks after the coherent edit, then the repository-required build, lint, type, test, smoke, packaging, and application-start gates relevant to the affected path.
- [ ] Exercise meaningful failure, boundary, authorization, transaction, concurrency, or rollback behavior when the change contract makes it material.

### 5. Prove Completeness and Finalize

- [ ] Trace every applicable task or plan requirement to the final code path and observed result; do not infer completion from a clean build or the presence of changed files.
- [ ] Search for stale names, old mechanisms, duplicate routes or registrations, dead exports, compatibility aliases, obsolete configuration and documentation, and unnecessary tests within the affected capability.
- [ ] Review the complete diff against the approved scope and explain every changed file; remove changes that do not contribute to the business outcome or required evidence.
- [ ] Verify the retained solution remains the simplest complete rung after implementation; collapse wrappers, intermediate states, and abstractions that no longer protect a demonstrated invariant.
- [ ] If verification fails, distinguish baseline/environment failures from change-caused defects; repair the latter within scope and rerun affected checks. Keep working until acceptance passes or a concrete prerequisite prevents progress. Mark `KEEP` only with passing required evidence; use `DISCARD` and revert only run-owned edits when the approach is unsuitable or cannot be completed safely, preserving user work.
- [ ] Preserve unrelated user work, clean only run-owned temporary artifacts, and confirm no unapproved external or persisted state changed.
- [ ] Verify the delivered increment works with its required consumers and prior increments; reconcile changed requirements against dependent implementation and acceptance evidence before claiming completeness.
- [ ] Use `DELIVERED` for a kept, fully implemented and verified outcome; `NO_CHANGE` only when the requested outcome already holds without edits; `BLOCKED` when a required decision, proof, safe completion, or restoration path is unavailable. A discarded attempt is not a satisfied request: report the unresolved outcome and restoration state.

## Self-Check

- [ ] **Reconcile before returning.** Check item-level evidence, requirement coverage, contradictions, scope, verdict, and applicable cleanup. Correct the report or authorized artifacts. Reuse valid evidence; do not automatically rescan the repository or rerun successful commands. Repeat checks only for relevant changes, failures, or unresolved evidence. Disclose remaining gaps.

## Output Contract

Report in the user's language, in this order; retain all five fields and state each fact once. Small results may use one line per field; omit empty tables and do not copy linked artifacts:

1. **Result:** Skill-specific verdict and supported outcome.
2. **Scope:** Reviewed/changed scope, exclusions, baseline, and material assumptions.
3. **Evidence:** Skill-specific fields below; distinguish facts, inferences, and unverified claims. Link artifacts; use tables when useful.
4. **Verification:** Checks/results, unavailable evidence, and applicable cleanup/external state.
5. **Completion:** `Checklist: X/Y complete`; `Incomplete: None` or each `UNPROVEN` item's reason, outcome impact, and exact next action; residual risks and required decisions.

**Skill-specific evidence:** Business outcome, protected behavior, mutation scope, non-goals, and affected runtime path. Record selected solution rung and evidence for rejecting applicable simpler options. Map acceptance requirement → owning change → observed evidence → result. Include additions/removals, justified compatibility, test portfolio actions and independent oracles, required gates, deviations, cleanup, and unresolved risks; distinguish an already-satisfied request from an unsuccessful reverted attempt.

## Quality Gate (folded in from slopbuster)

### Code Naming

# Code Rules: Naming Anti-Patterns

14 systematic naming problems where LLMs deviate from production code standards. Core principle: **name length should scale with scope.** A three-line variable can be three characters; an exported type needs unambiguous clarity.

---

## 1. Verbose Compound Names Describing Type, Not Concept

```python
# Bad — narrates the container
userDataObject = {}
listOfUsers = []
responseString = ""

# Good — names the concept
user = {}
users = []
body = ""
```

## 2. Manager/Handler/Helper/Util/Service Suffix Abuse

Semantically empty suffixes that hide unclear responsibility.

```python
# Bad
class UserManager: ...
class DataHandler: ...
class StringHelper: ...

# Good — name the precise role
class UserPool: ...      # if it's a pool
class UserRegistry: ...  # if it's a registry
class UserSession: ...   # if it manages sessions
```

## 3. Comprehensive/Enhanced/Advanced/Improved Prefixes

Flattery adjectives that convey zero information.

```python
# Bad
class EnhancedLogger: ...
class AdvancedParser: ...
class ImprovedValidator: ...

# Good — what's actually different?
class StructuredLogger: ...   # it outputs structured JSON
class StreamingParser: ...    # it parses incrementally
```

## 4. Initialize vs Init vs Setup Variation

LLMs default to full words; communities standardize abbreviations.

```python
# Bad (in Python/JS communities)
def initialize_database(): ...

# Good — use the short form your community uses
def init_db(): ...
```

## 5. Boolean Variables Lacking Question Form

```python
# Bad — reads awkwardly in conditionals
if isUserAuthenticated and hasPermissionToAccess:

# Good — past participles and adjectives
if authenticated and authorized:
```

## 6. Process/Handle/Perform/Execute/Facilitate as Verbs

Safe but generic verbs that describe activities, not outcomes.

```python
# Bad
def process_data(data): ...
def handle_request(req): ...
def perform_validation(input): ...

# Good — domain-specific verbs
def parse_csv(data): ...
def route_request(req): ...
def validate_schema(input): ...
```

## 7. Acronym Avoidance

One of the most consistent LLM signals across languages. LLMs spell out abbreviations that every developer abbreviates.

```python
# Bad
configuration = load_configuration()
database_connection = get_database_connection()
identifier = generate_identifier()

# Good — use community abbreviations
cfg = load_config()
db = get_db_conn()
id = gen_id()
```

Community-standard abbreviations: `id`, `cfg`, `config`, `db`, `auth`, `tmp`, `max`, `min`, `app`, `ctx`, `err`, `req`, `res`, `msg`, `fn`, `impl`, `cls`, `exc`

## 8. Mirrored Redundancy (Name Mirrors Type)

```typescript
// Bad — information appears twice
const userId: string = getUserId();
const isValid: boolean = validate(input);

// Good — let the annotation carry the type, the name carry the meaning
const id: string = getUserId();
const valid = validate(input);
```

## 9. Over-Specific Loop Variables

```python
# Bad
for currentItem in itemCollection:
    process(currentItem)

# Good — singular of collection name
for item in items:
    process(item)
```

## 10. "Result" as Catch-All

```python
# Bad — masks what was actually returned
result = fetch_user(id)
result2 = calculate_total(items)

# Good — name the returned data
user = fetch_user(id)
total = calculate_total(items)
```

## 11. Class Names Including "Class" or Abstract Nouns

```python
# Bad
class AbstractBaseProcessor: ...
class UserEntityClass: ...
class DataModelObject: ...

# Good
class Processor: ...
class User: ...
class Order: ...
```

## 12. Constants Describing Themselves

```python
# Bad — over-explains implementation details
MAX_RETRY_ATTEMPT_COUNT = 3
DEFAULT_TIMEOUT_VALUE_IN_SECONDS = 30

# Good — names the constraint
MAX_RETRIES = 3
TIMEOUT_SECS = 30
```

## 13. Callback and Handler Naming

```typescript
// Bad — documents what the syntax already shows
function handleButtonClickEvent(event: MouseEvent) { ... }

// Good — on + event; component provides the noun
function onClick(e: MouseEvent) { ... }
```

## 14. Generic File/Module Names

```
# Bad
utils.py, helpers.ts, common.rs, misc.go

# Good — name for responsibility
format.py, retry.ts, pool.rs, parse.go
```

---

## When to Break These Rules

**Short variables in tight scope:** `i`, `j`, `x`, `y` are correct in numeric loops and formulas where scope is tiny and purpose is obvious. LLMs avoid these even when appropriate.

**Mutability signals:** Some communities use conventions like trailing `_` for mutable accumulators. Respect these.

**Language-specific idioms:** Rust uses `impl`, `fn`, `cfg`. Python uses `cls`, `exc`. Go uses `ctx`, `err`. TypeScript uses `el`, `cb`. Match the community, not the dictionary.

### Code Quality

# Code Rules: Quality Anti-Patterns

LLM patterns in error handling, API design, and tests. Three domains, one theme: **LLMs optimize for code review appearance; humans optimize for maintainability shaped by production incidents.**

---

## Error Handling

### Broad Exception Catches
```python
# Bad — hides the actual failure
try:
    result = fetch_and_process(data)
except Exception as e:
    logger.error("Something went wrong")
    return None

# Good — catch what you know how to handle
try:
    result = fetch_and_process(data)
except ConnectionTimeout:
    return cached_result(data)  # graceful degradation
except ValidationError as e:
    raise BadRequest(f"field {e.field}: {e.message}")
# Let everything else propagate
```

### Generic Error Messages
```python
# Bad
raise ValueError("Invalid input")

# Good — include the offending value and the constraint
raise ValueError(f"user_id must be positive, got {user_id}")
```

### Catch-and-Log-and-Reraise
```python
# Bad — duplicate log entries across every layer
try:
    process(data)
except Exception as e:
    logger.error(f"Error: {e}")
    raise

# Good — log at the boundary that handles the error, not every intermediate layer
```

### Silent None Returns
```python
# Bad — caller has no idea something failed
def get_user(id):
    try:
        return db.fetch(id)
    except:
        return None

# Good — let the caller decide how to handle failure
def get_user(id) -> User:
    return db.fetch(id)  # raises NotFoundError
```

### "Fail Gracefully" Without Specifics
"Fail gracefully" in a comment means nothing. Specify: what returns? What gets skipped? What does the user see?

### Mixed Error Signaling
Pick exceptions OR error codes per layer. Mixing both forces defensive programming everywhere.

---

## API Design (Key patterns)

### Boolean Parameters
```python
# Bad — what does True mean here?
get_users(include_deleted=True, active_only=False)

# Good — separate functions with clear names
get_active_users()
get_deleted_users()
```

### God Functions
```python
# Bad — validation + persistence + notification in one function
def create_user(data):
    validate(data)
    user = db.insert(data)
    send_welcome_email(user)
    notify_admin(user)
    update_metrics(user)
    return user

# Good — separate concerns
def create_user(data) -> User:
    user = User.from_validated(validate(data))
    db.insert(user)
    return user
# Notification and metrics happen via events/hooks
```

### Premature Abstraction
```python
# Bad — interface with one implementation
class StorageProvider(ABC):
    @abstractmethod
    def save(self, data): ...

class S3Storage(StorageProvider):
    def save(self, data): ...

# Good — just use the concrete class until you need a second one
class S3Storage:
    def save(self, data): ...
```

### Over-Returning
```python
# Bad — wraps everything in metadata
def create_user(data):
    return {"success": True, "data": user, "timestamp": now(), "request_id": rid}

# Good — return what you created
def create_user(data) -> User:
    return user
```

---

## Test Patterns (Key patterns)

### Happy-Path Only
LLMs typically test only the success case. Real test suites cover boundaries.

```python
# Bad — only tests the golden path
def test_login():
    result = login("valid@email.com", "correct_password")
    assert result.success

# Good — test the edges
def test_login_rejects_expired_password():
    ...
def test_login_locks_after_5_failures():
    ...
def test_login_handles_unicode_email():
    ...
```

### Asserting Existence Instead of Values
```python
# Bad — only confirms something was returned
assert user is not None
assert len(results) > 0

# Good — verify actual values
assert user.id == expected_id
assert user.email == "test@example.com"
assert len(results) == 3
```

### Mock-Heavy Tests
Five `@patch` decorators on a unit test means you're testing the mock setup, not the behavior.

```python
# Bad
@patch("module.db")
@patch("module.cache")
@patch("module.logger")
@patch("module.metrics")
@patch("module.notifications")
def test_create_user(mock_notif, mock_metrics, mock_log, mock_cache, mock_db):
    ...

# Good — test through real boundaries
def test_create_user(test_db, test_cache):
    user = create_user(valid_data, db=test_db, cache=test_cache)
    assert test_db.get(user.id) == user
```

### Test Names Describing Functions, Not Behavior
```python
# Bad
def test_calculate_total():
    ...

# Good — describes the scenario and expected outcome
def test_total_excludes_cancelled_items():
    ...
def test_total_applies_tax_after_discounts():
    ...
```

### Placeholder Test Data
LLMs love `"john.doe@example.com"`, `"SecurePassword123!"`, and `"4111111111111111"`. Use minimal, relevant data.

```python
# Bad
user = User(
    name="John Doe",
    email="john.doe@example.com",
    phone="+1-555-0123",
    address="123 Main St",
    city="Springfield",
    # ... 15 more fields
)

# Good — only specify fields relevant to this test
user = make_user(email="expired@test.com", password_changed_at=days_ago(91))
```

### Code Llm Tells

# Code Rules: Structural LLM Tells

16 patterns that distinguish AI-generated code from human-written code at a structural level. These aren't about individual lines — they're about how the code is organized and what context it lacks.

---

## Structural Patterns

### 1. Commented-Out Alternatives
LLMs leave "Option 1" / "Option 2" comments showing their uncertainty.

```python
# Bad — reflects generation, not design
# Option 1: Use a list comprehension
# results = [process(x) for x in data]
# Option 2: Use map
results = list(map(process, data))
```

Just pick one. Delete the alternatives.

### 2. Perfectly Symmetrical Code
Start/stop functions, open/close handlers, enable/disable toggles that mirror each other perfectly. Real code is asymmetric — teardown usually has edge cases that setup doesn't.

```python
# Suspiciously perfect
def start():
    self.running = True
    self.connect()
    self.subscribe()

def stop():
    self.unsubscribe()
    self.disconnect()
    self.running = False

# Real code — teardown handles partial states
def stop():
    if self._subscribed:
        try:
            self.unsubscribe()
        except AlreadyUnsubscribed:
            pass  # idempotent shutdown
    if self._connected:
        self.disconnect(timeout=5)
    self.running = False
```

### 3. Pass + TODO Stubs
Scaffolded code with empty implementations.

```python
# Bad
def handle_error(self, error):
    pass  # TODO: implement error handling
```

Either implement it or don't create the function yet.

### 4. Tutorial-Style "You Can Also..." Comments
```python
# Bad
config = load_yaml("config.yml")
# You can also use JSON: config = load_json("config.json")
# Or environment variables: config = from_env()
```

This is documentation for a tutorial, not for a codebase.

### 5. SQL Column Comments Restating Column Names
```sql
-- Bad
CREATE TABLE users (
    user_id INT,          -- The user's ID
    user_name VARCHAR,    -- The user's name
    created_at TIMESTAMP  -- When the user was created
);

-- Good — document business constraints
CREATE TABLE users (
    user_id INT,          -- assigned by auth provider, not sequential
    user_name VARCHAR,    -- display name, not login — can contain spaces
    created_at TIMESTAMP  -- UTC; backfilled to 2020-01-01 for legacy accounts
);
```

### 6. Step-Numbered Comments
```python
# Bad
# Step 1: Load the data
data = load()
# Step 2: Validate the data
validate(data)
# Step 3: Process the data
process(data)
# Step 4: Save the results
save(results)
```

If the code reads sequentially, it doesn't need a narrator.

### 7. Canonical Placeholder Values
`"4111111111111111"`, `"john.doe@example.com"`, `"SecurePassword123!"`, `"Lorem ipsum"`, `"123 Main St"` — LLMs reach for the same test data every time.

### 8. Defensive Null-Checks on Typed Parameters
```typescript
// Bad — if the type says User, trust it
function greet(user: User): string {
    if (!user) throw new Error("User is required");
    if (!user.name) throw new Error("User name is required");
    return `Hello, ${user.name}`;
}

// Good — trust your types at internal boundaries
function greet(user: User): string {
    return `Hello, ${user.name}`;
}
```

Validate at system boundaries (user input, external APIs). Trust types internally.

### 9. `__all__` Listing Every Class
```python
# Bad — lists everything, defeats the purpose
__all__ = ["User", "UserManager", "UserValidator", "UserSerializer",
           "UserFactory", "UserRepository", "UserService"]

# Good — only export the public API surface
__all__ = ["User", "create_user", "get_user"]
```

### 10. Generic Variable Reuse
```python
# Bad — "result" used for completely different types
result = fetch_users()
result = calculate_totals(result)
result = format_report(result)
```

Name each intermediate value for what it actually is.

---

## What Human Code Has That LLM Code Doesn't

### External References
Human code links to the outside world:
```python
# Workaround for https://github.com/psycopg/psycopg2/issues/1293
# See RFC 7807 for error response format
# Matches behavior specified in JIRA-4521
```

### TODOs With Owners and Dates
```python
# TODO(sarah, 2024-03-15): remove after migration completes
# HACK: works around stale cache — revisit after #4521 ships
```

### Known Limitations Documented Honestly
```python
# Overcounts by ~2% due to eventual consistency lag between
# the write primary and read replica. Acceptable for dashboard
# metrics; do NOT use for billing calculations.
```

### Personality and Frustration
```python
# I have mass-accepted this suggestion 3 times and it's wrong every time.
# Don't "fix" this — the API really does return a string here.
# Yes, this looks wrong. See the 47-message Slack thread in #backend.
```

---

## Language-Specific Tells

| Language | LLM Tell |
|----------|----------|
| Python | Outdated `typing` imports (`List`, `Dict`) in 3.10+ code |
| TypeScript | Overuse of `interface` where `type` is more appropriate |
| Rust | Excessive `.clone()` calls to satisfy the borrow checker |
| Go | Error wrapping at every single layer |
| Java | Everything is a class, even things that should be functions |

The core insight: **LLMs optimize for code review appearance. Humans optimize for maintainability shaped by production incidents.**
