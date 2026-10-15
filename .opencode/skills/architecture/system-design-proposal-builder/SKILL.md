---
name: system-design-proposal-builder
description: Designs target system boundaries, contracts and tradeoffs from requirements, including strict file-size/refactor discipline; does not plan tasks or implement.
---

# System Design Proposal Builder

**Goal:** Create a proportionate, evidence-backed target system design that turns requirements into explicit boundaries, contracts, data flow, failure behavior, operations, and tradeoffs. Change only the approved design document; do not implement, audit, or approve the delivery.

**Execution contract:** The checklist defines completion. Track each item internally as `PENDING`, `PROVEN` with evidence, `CLEARED` with evidence its condition is absent, or `UNPROVEN` with a gap; reading, delegation, or tool failure is not proof. Reconcile after each section. Before returning, resolve all `PENDING`, count only `PROVEN` and `CLEARED`, and apply verdict and approval rules to every gap.
Preserve intent, scope, and existing authorization. Continue authorized work; ask only for consequential unresolved choices or required external approval. Scale depth to material risk without skipping checks. Preserve dependency and safety order; otherwise choose an appropriate verification method.
Accept equivalent user or repository evidence; no other skill, named artifact, or complete lifecycle is required. Preserve source requirement and decision IDs. Bind reused evidence to relevant source versions, dirty changes, configuration, and environment; invalidate only affected claims.
On continuation, reconcile task, authorization, current state, and unresolved evidence. For long work, return a compact continuation record or update an already authorized artifact; read-only skills do not persist it. Distinguish artifact readiness, verified behavior, and external-action authority.
Prepare authorized work before required approval. If blocked by an instruction, cite its exact source and unresolved boundary; do not invent approval gates from caution.


## Tool Routing

| Need | Preferred capability | Fallback |
|---|---|---|
| Requirements and constraints | Approved requirements, baseline, decisions, and direct stakeholder input | Mark material gaps and ask the smallest decision question |
| Current implementation and conventions | Repository search, manifests, entrypoints, and architecture artifacts | Treat as greenfield only when the user or repository establishes that fact; otherwise mark current state `UNKNOWN` and return `REVISE` or `BLOCKED` when the gap can change boundaries, compatibility, or migration |
| External capabilities and limits | Current official documentation and specifications | Mark claims `UNVERIFIED`; avoid vendor-dependent commitment |
| Estimates | Reproducible arithmetic from sourced workload assumptions | Use ranges and sensitivity; never present estimates as measurements |
| Document mutation | Minimal patch to the approved target-design artifact | Return `BLOCKED` if scope or path is unsafe |

Use patterns as candidate solutions, not goals. Introduce infrastructure only when a requirement, failure mode, ownership boundary, or measured horizon pays for its lifecycle cost.

## Artifact Rules

- Reuse a clear target-design document; otherwise use `docs/architecture/target-design.md`.
- Read available baseline, current-state, decision, interface, diagram, and migration artifacts by path; none is mandatory.
- Label facts, assumptions, estimates, proposed decisions, and unresolved choices separately.
- Compare credible alternatives for consequential decisions, including the simplest feasible option; when constraints permit only one, document why rather than inventing another.
- Prefer reversible choices and the simplest topology fitting the system. For a new application, consider a modular monolith before independent services; do not force that shape onto libraries, plugins, or an established topology.
- Do not silently change an accepted decision; record the conflict and required governance action.

## Checklist

### 1. Frame the Design

- [ ] Resolve business outcome, actors, journeys, scope, non-goals, horizon, readers, language, and the approved canonical destination before editing.
- [ ] Read repository instructions and inspect relevant architecture artifacts and current implementation.
- [ ] Extract functional requirements and measurable quality drivers, preserving their source and status.
- [ ] Identify architecture-critical unknowns and ask only questions whose answers change the target shape.
- [ ] Return `BLOCKED` when a required business boundary or safety constraint cannot be responsibly assumed.

### 2. Estimate Before Choosing Components

- [ ] Estimate average and peak request or event rates, concurrency, payload and bandwidth, storage growth, retention, and recovery volume where relevant.
- [ ] Show formulas, ranges, growth horizon, and assumptions; identify the variables that can reverse a choice.
- [ ] Identify likely first bottlenecks and explicit thresholds for deferred scaling mechanisms.
- [ ] Separate availability, latency, durability, consistency, security, cost, and operability requirements from implementation preferences.
- [ ] Reject speculative scale and list complex mechanisms intentionally deferred.

### 3. Define Domains, Data, and Contracts

- [ ] Map business capabilities, domains or modules, ownership, invariants, and allowed dependency direction.
- [ ] Define systems of record, data models at architecture depth, lifecycle, retention, consistency, and transaction boundaries.
- [ ] Define public APIs, events, commands, schemas, errors, idempotency, ordering, versioning, and compatibility expectations.
- [ ] Define trust boundaries, identities, authorization, sensitive data, secrets, abuse controls, and audit needs proportionate to risk.
- [ ] Keep framework and vendor details outside the core model unless they are genuine constraints.

### 4. Build HLD and Critical LLD

- [ ] Describe system context, deployable units, stores, queues, external systems, responsibilities, and labeled data flows.
- [ ] Trace success, overload, dependency failure, partial failure, retry, timeout, degradation, recovery, and cancellation for critical journeys.
- [ ] Deep-dive only components whose correctness, scale, security, or reversibility risk warrants implementation-level detail.
- [ ] Define observability, SLI measurement points, health, deployment strategy, rollback, backup, and operator actions.
- [ ] Define ownership, team impact, cost drivers, and operational burden for the proposed topology.

### 5. Decide and Validate

- [ ] Compare credible alternatives against requirements, estimates, failure behavior, complexity, cost, migration, and future triggers.
- [ ] State selected and rejected options with consequences, sensitivity points, and assumptions that would reopen the decision.
- [ ] Identify significant decisions that deserve their own compact decision records without requiring another workflow.
- [ ] Define architecture acceptance evidence appropriate to each material driver: contract checks, load/failure experiments, security validation, recovery proof, or observability signals. Specify prerequisites and pass criteria; do not execute them during design.
- [ ] Outline current-to-target implications and compatibility needs without expanding into a full implementation plan.

### 6. Write and Report

- [ ] Write context, drivers, estimates, domains, contracts, HLD, critical LLD, failure and operations model, security, alternatives, decisions, validation, open questions, and evolution triggers.
- [ ] Preserve existing content outside the approved scope and link shared artifacts only by document path or title.
- [ ] Re-read the proposal for unsupported facts, hidden decisions, mixed abstraction, and unjustified machinery.
- [ ] Demonstrate that each material design boundary is implementable: link source requirements to contracts, data, failure behavior, unresolved choices, and acceptance evidence; distinguish a ready proposal from an accepted decision.
- [ ] Use `READY` only when the design is decision-complete enough for implementation planning; use `REVISE` for material but solvable gaps; use `BLOCKED` when required intent, evidence, authority, or destination is unavailable.

## Self-Check

- [ ] **Reconcile before returning.** Check item-level evidence, requirement coverage, contradictions, scope, verdict, and applicable cleanup. Correct the report or authorized artifacts. Reuse valid evidence; do not automatically rescan the repository or rerun successful commands. Repeat checks only for relevant changes, failures, or unresolved evidence. Disclose remaining gaps.

## Output Contract

Report in the user's language, in this order; retain all five fields and state each fact once. Small results may use one line per field; omit empty tables and do not copy linked artifacts:

1. **Result:** Skill-specific verdict and supported outcome.
2. **Scope:** Reviewed/changed scope, exclusions, baseline, and material assumptions.
3. **Evidence:** Skill-specific fields below; distinguish facts, inferences, and unverified claims. Link artifacts; use tables when useful.
4. **Verification:** Checks/results, unavailable evidence, and applicable cleanup/external state.
5. **Completion:** `Checklist: X/Y complete`; `Incomplete: None` or each `UNPROVEN` item's reason, outcome impact, and exact next action; residual risks and required decisions.

**Skill-specific evidence:** Artifact path; requirements, estimates, boundaries, contracts, HLD/critical LLD, selected decisions, alternatives, evidence, and reopen triggers. Summarize validation/transition needs, compatibility, rollout, rollback, observability, and only unresolved choices that affect implementation planning.

---

## Enrichment: file-size limits and refactor triggers (from elegant-architecture)

# Elegant Architecture

## Core Principles

- **200-line limit** — No file exceeds 200 lines of code
- **Split when exceeded** — Convert to folder or multiple files
- **Plan first, code later** — Design architecture before implementation
- **Single responsibility** — Each module does one thing well
- **Real tests only** — No mocks, test actual behavior

## Execution Flow

### 1. Analyze Requirements

```markdown
Before writing any code:
- List all features/functionalities needed
- Estimate code volume for each module
- Identify shared components
- Map dependencies between modules
```

### 2. Design File Structure

```markdown
When estimated lines > 200:
- Convert file to folder with index
- Split by sub-functionality
- Extract shared utilities

Example transformation:
```

```
# Before (user.ts - 400+ lines)
user.ts

# After (user/ folder)
user/
├── index.ts        # Public exports
├── types.ts        # Interfaces, types
├── validation.ts   # Input validation
├── repository.ts   # Data access
└── service.ts      # Business logic
```

### 3. Define Interfaces First

```typescript
// Define contracts before implementation
interface UserService {
  create(input: CreateUserInput): Promise<User>;
  findById(id: string): Promise<User | null>;
  update(id: string, input: UpdateUserInput): Promise<User>;
  delete(id: string): Promise<void>;
}

interface UserRepository {
  save(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  delete(id: string): Promise<void>;
}
```

### 4. Implement Incrementally

```markdown
For each module:
1. Create type definitions
2. Implement core logic
3. Add error handling
4. Write tests
5. Verify line count < 200
```

### 5. Test Without Mocks

```typescript
// ❌ Avoid: Mock everything
const mockRepo = jest.fn();
const service = new UserService(mockRepo);

// ✅ Prefer: Real implementations
const testDb = createTestDatabase();
const repo = new UserRepository(testDb);
const service = new UserService(repo);

// Test actual behavior
const user = await service.create({ email: 'test@example.com' });
const found = await service.findById(user.id);
expect(found).toEqual(user);
```

## Design Patterns

### Modular Design

```
src/
├── modules/
│   ├── auth/
│   │   ├── index.ts
│   │   ├── types.ts
│   │   ├── service.ts
│   │   └── middleware.ts
│   ├── user/
│   │   ├── index.ts
│   │   ├── types.ts
│   │   ├── service.ts
│   │   └── repository.ts
│   └── order/
│       ├── index.ts
│       ├── types.ts
│       ├── service.ts
│       └── repository.ts
├── shared/
│   ├── database/
│   ├── errors/
│   └── utils/
└── index.ts
```

### Dependency Injection

```typescript
// Decouple components via constructor injection
class OrderService {
  constructor(
    private readonly orderRepo: OrderRepository,
    private readonly userService: UserService,
    private readonly paymentGateway: PaymentGateway
  ) {}

  async createOrder(userId: string, items: OrderItem[]): Promise<Order> {
    const user = await this.userService.findById(userId);
    if (!user) throw new NotFoundError('User', userId);

    const order = Order.create(user, items);
    await this.paymentGateway.charge(user, order.total);
    return this.orderRepo.save(order);
  }
}

// Wire up in composition root
const orderService = new OrderService(
  new PostgresOrderRepository(db),
  new UserService(userRepo),
  new StripePaymentGateway(stripeClient)
);
```

### Factory Pattern

```typescript
// Complex object creation
class NotificationFactory {
  create(type: NotificationType, data: NotificationData): Notification {
    switch (type) {
      case 'email':
        return new EmailNotification(data, this.emailClient);
      case 'sms':
        return new SmsNotification(data, this.smsClient);
      case 'push':
        return new PushNotification(data, this.pushClient);
      default:
        throw new Error(`Unknown notification type: ${type}`);
    }
  }
}
```

### Strategy Pattern

```typescript
// Replaceable algorithms
interface PricingStrategy {
  calculate(order: Order): Money;
}

class StandardPricing implements PricingStrategy {
  calculate(order: Order): Money {
    return order.items.reduce((sum, item) => sum.add(item.price), Money.zero());
  }
}

class DiscountPricing implements PricingStrategy {
  constructor(private readonly discount: Percentage) {}

  calculate(order: Order): Money {
    const standard = new StandardPricing().calculate(order);
    return standard.subtract(standard.multiply(this.discount));
  }
}

class OrderProcessor {
  constructor(private pricing: PricingStrategy) {}

  setPricing(strategy: PricingStrategy) {
    this.pricing = strategy;
  }

  process(order: Order): ProcessedOrder {
    const total = this.pricing.calculate(order);
    return { ...order, total };
  }
}
```

## File Splitting Guidelines

### When to Split

| Indicator | Action |
|-----------|--------|
| File > 200 lines | Split immediately |
| File > 150 lines | Plan split |
| 3+ distinct responsibilities | Split by responsibility |
| Shared types growing | Extract to types.ts |
| Utility functions accumulating | Extract to utils.ts |

### How to Split

```markdown
1. Identify logical boundaries
2. Create folder with same name as file
3. Move related code to separate files
4. Create index.ts for public exports
5. Update imports in dependent files
```

### Naming Conventions

```
module/
├── index.ts          # Public API exports
├── types.ts          # Interfaces, types, enums
├── constants.ts      # Configuration, magic values
├── utils.ts          # Helper functions
├── service.ts        # Business logic
├── repository.ts     # Data access
├── validation.ts     # Input validation
└── errors.ts         # Custom errors
```

## Architecture Checklist

```markdown
## Pre-Implementation
- [ ] Requirements analyzed
- [ ] Code volume estimated
- [ ] File structure designed
- [ ] Interfaces defined
- [ ] Dependencies mapped

## Implementation
- [ ] Each file < 200 lines
- [ ] Single responsibility per module
- [ ] Dependencies injected
- [ ] Error handling complete
- [ ] No hardcoded values

## Testing
- [ ] Real implementations used
- [ ] No mocks for core logic
- [ ] Edge cases covered
- [ ] Integration tests exist

## Review
- [ ] Architecture documented
- [ ] Public APIs clear
- [ ] No circular dependencies
- [ ] Easy to extend
```

## Anti-Patterns to Avoid

```markdown
❌ God files (500+ lines doing everything)
❌ Mocking everything in tests
❌ Coding before planning
❌ Tight coupling between modules
❌ Hardcoded configuration
❌ Circular dependencies
❌ Unclear module boundaries
```

## Key Principles

1. **Measure twice, cut once** — Plan architecture before coding
2. **Small is beautiful** — 200 lines max, no exceptions
3. **Test reality** — Real tests catch real bugs
4. **Inject dependencies** — Loose coupling, easy testing
5. **Single purpose** — One reason to change per module
