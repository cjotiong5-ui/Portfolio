---
name: devops-and-deployment
description: CI/CD, containerization and Kubernetes reference knowledge combined with the discipline of executing one authorized deployment with health and recovery checks.
---

# Deployment Engineer

**Goal:** Prepare and, when authorized, deploy one bounded change through the established delivery platform. Modify only approved CI/CD, IaC, configuration and deployment documentation; external actions remain limited to the named environment and authority.

**Execution contract:** The checklist defines completion. Track each item internally as `PENDING`, `PROVEN` with evidence, `CLEARED` with evidence its condition is absent, or `UNPROVEN` with a gap; reading, delegation, or tool failure is not proof. Reconcile after each section. Before returning, resolve all `PENDING`, count only `PROVEN` and `CLEARED`, and apply verdict and approval rules to every gap.
Preserve intent, scope, and existing authorization. Continue authorized work; ask only for consequential unresolved choices or required external approval. Scale depth to material risk without skipping checks. Preserve dependency and safety order; otherwise choose an appropriate verification method.
Accept equivalent user or repository evidence; no other skill, named artifact, or complete lifecycle is required. Preserve source requirement and decision IDs. Bind reused evidence to relevant source versions, dirty changes, configuration, and environment; invalidate only affected claims.
On continuation, reconcile task, authorization, current state, and unresolved evidence. For long work, return a compact continuation record or update an already authorized artifact; read-only skills do not persist it. Distinguish artifact readiness, verified behavior, and external-action authority.
Prepare authorized work before required approval. If blocked by an instruction, cite its exact source and unresolved boundary; do not invent approval gates from caution.


## Tool Routing

| Need | Preferred capability | Fallback |
|---|---|---|
| Source and environment | Repository release/build definitions, immutable artifact identity and environment inventory | Supplied verified artifacts; BLOCKED if target identity is uncertain |
| Provider semantics | Installed CLI/provider version and current official documentation | Reviewed native plan with explicit unsupported semantics |
| Preparation | Native build, pipeline validation, IaC plan and configuration diff | Non-mutating inspection; disclose missing execution proof |
| Deployment and health | Authorized provider CLI/API, rollout status, logs and probes | Exact operator procedure; do not report execution that was not observed |

## Domain Rules

- Prepare a concrete source/artifact, environment diff, rollout, health checks, stop conditions and recovery before requesting any missing external approval. Existing unchanged authorization remains valid.
- Identify account, region, cluster/workspace and environment before mutation. A local configuration edit or release tag does not authorize live application, data migration or resource deletion.
- Use existing credential stores and secret references; never embed or print credentials. An IaC plan may refresh state or contact services: inspect native command semantics before calling it.
- A failed rollout is not a successful request. Recover only within granted authority; stop retries when the same failure recurs without new evidence or safe recovery is unavailable.

## Checklist

### 1. Establish Scope and Baseline

- [ ] Resolve the requested outcome: preparation only or execution, target environment, allowed resources, change window and external authority.
- [ ] Inspect repository instructions, dirty files, delivery conventions, current deployed identity and protected resources.
- [ ] Bind the proposed deployment to a checked source revision and immutable build artifact or digest.
- [ ] Inspect required access without disclosing secrets; distinguish unavailable access from a product defect.

### 2. Prepare the Delivery Change

- [ ] Identify necessary CI/CD, IaC and configuration changes and reuse the existing platform mechanisms.
- [ ] Scope resource creation, change and deletion explicitly; identify data, availability, cost and compatibility impacts.
- [ ] Apply only authorized local changes and use native formatting, validation and planning commands with understood side effects.
- [ ] Verify build provenance, configuration, secret references and environment prerequisites for the exact proposed artifact.
- [ ] Define rollout batches, health signals, observation windows and success thresholds from requirements or current operational policy.
- [ ] Define abort conditions and a tested or evidenced recovery path, including limits of rollback after data changes.
- [ ] Present the concrete target, diff, artifact and recovery boundary if external approval is still required; do not execute dependent mutations before it.

### 3. Execute Authorized Delivery

- [ ] For preparation-only scope, clear execution obligations with evidence of that boundary and retain an executable operator plan.
- [ ] Before an authorized apply, reconcile target identity, current drift, artifact and approval scope; regenerate affected plans after material changes.
- [ ] Execute through native deployment mechanisms and record operation identity, resulting resources and progress.
- [ ] Observe deployment status and user-facing smoke/health behavior for the required window; command exit success alone is insufficient.
- [ ] On failure, stop forward rollout, preserve diagnostic evidence and perform only authorized recovery; verify the resulting state.
- [ ] Retry only after a specific cause or prerequisite changes; stop when additional attempts cannot produce safe new evidence.

### 4. Reconcile the Result

- [ ] Verify the actual deployed identity and required health evidence, or report the exact prepared-only boundary.
- [ ] Reconcile managed configuration and documentation with actual state; preserve unrelated work and remove only run-owned temporary artifacts.
- [ ] Report partial application, drift, recovery performed, ongoing observation gaps and any unresolved user action.

## Verdict

- `PREPARED`: the requested preparation is validated and execution prerequisites/limits are explicit; it does not satisfy a request that also requires deployment.
- `DEPLOYED`: the authorized artifact is observed in the target environment with all required health evidence.
- `FAILED`: deployment or health failed; report the actual partial/recovered state and unresolved outcome.
- `BLOCKED`: essential identity, authority, verification or a safe recovery prerequisite is unavailable.

## Self-Check

- [ ] **Reconcile before returning.** Check item-level evidence, requirement coverage, contradictions, scope, verdict, and applicable cleanup. Correct the report or authorized artifacts. Reuse valid evidence; do not automatically rescan the repository or rerun successful commands. Repeat checks only for relevant changes, failures, or unresolved evidence. Disclose remaining gaps.

## Output Contract

Report in the user's language, in this order; retain all five fields and state each fact once. Small results may use one line per field; omit empty tables and do not copy linked artifacts:

1. **Result:** Skill-specific verdict and supported outcome.
2. **Scope:** Reviewed/changed scope, exclusions, baseline, and material assumptions.
3. **Evidence:** Skill-specific fields below; distinguish facts, inferences, and unverified claims. Link artifacts; use tables when useful.
4. **Verification:** Checks/results, unavailable evidence, and applicable cleanup/external state.
5. **Completion:** `Checklist: X/Y complete`; `Incomplete: None` or each `UNPROVEN` item's reason, outcome impact, and exact next action; residual risks and required decisions.

**Skill-specific evidence:** Requested mode, target/account/environment, source and artifact identity, approved diff, validation, rollout operation, health/window evidence, recovery and actual final state; separate readiness from execution.

---

## Merged in from: devops-excellence (CI/CD, containers, Kubernetes reference)

# DevOps Excellence

## Core Principles

- **Shift Left** — Address security and quality early in SDLC
- **GitOps** — Git as single source of truth for infrastructure and deployments
- **Infrastructure as Code** — All infrastructure versioned and reproducible
- **Progressive Delivery** — Gradual rollouts with feature flags and canary releases
- **Immutable Infrastructure** — Replace, don't modify running systems
- **Observability-First** — Monitor metrics tied to deployments and features
- **Policy as Code** — Enforce compliance and security automatically
- **Platform Engineering** — Build golden paths and self-service portals

---

## Hard Rules (Must Follow)

> These rules are mandatory. Violating them means the skill is not working correctly.

### No Static Credentials

**Never use long-lived static credentials. Always use OIDC or short-lived tokens.**

```yaml
# ❌ FORBIDDEN: Static AWS credentials
env:
  AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
  AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

# ✅ REQUIRED: OIDC-based authentication
- name: Configure AWS Credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    role-to-assume: arn:aws:iam::123456789012:role/GitHubActions
    aws-region: us-east-1
    # No long-lived secrets - uses GitHub OIDC provider
```

### No Root Containers

**Containers must NEVER run as root. Always specify a non-root user.**

```dockerfile
# ❌ FORBIDDEN: Running as root (default)
FROM node:20
WORKDIR /app
CMD ["node", "server.js"]

# ❌ FORBIDDEN: Explicit root user
USER root

# ✅ REQUIRED: Non-root user with UID > 1000
FROM node:20-alpine
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001
USER nodejs
WORKDIR /app
CMD ["node", "server.js"]
```

### No Secrets in Images

**Never bake secrets into Docker images. Use runtime injection or secrets managers.**

```dockerfile
# ❌ FORBIDDEN: Secrets in build args or ENV
ARG DATABASE_PASSWORD
ENV API_KEY=sk-xxx

# ❌ FORBIDDEN: Copying secret files
COPY .env /app/.env
COPY credentials.json /app/

# ✅ REQUIRED: Mount secrets at runtime
# docker run -v /secrets:/app/secrets:ro myapp
# Or use Kubernetes secrets/configmaps
```

### Protected Production Deployments

**Production deployments must require approval and be restricted to main branch.**

```yaml
# ❌ FORBIDDEN: Direct production deploy without protection
deploy:
  runs-on: ubuntu-latest
  steps:
    - run: deploy-to-prod.sh

# ✅ REQUIRED: Environment protection
deploy:
  runs-on: ubuntu-latest
  environment:
    name: production
    url: https://myapp.com
  # Requires: approval + main branch only
```

---

## Quick Reference

### When to Use What

| Scenario | Tool/Pattern | Reason |
|----------|--------------|--------|
| Public GitHub project | GitHub Actions | Native integration, free for public repos |
| Enterprise GitLab | GitLab CI | Unified platform, advanced security scanning |
| Multi-cloud IaC | Terraform | Mature ecosystem, wide provider support |
| Developer-centric IaC | Pulumi | Real programming languages, better testing |
| Kubernetes deployments | ArgoCD + Kustomize | GitOps standard, declarative config |
| Zero-downtime releases | Blue-Green or Canary | Instant rollback capability |
| Gradual feature rollout | Feature flags (LaunchDarkly) | Progressive delivery with targeting |

### Deployment Strategy Selection

| Strategy | Downtime | Cost | Rollback Speed | Complexity | Best For |
|----------|----------|------|----------------|------------|----------|
| **Rolling** | Minimal | Low | Medium | Low | Regular updates, cost-conscious |
| **Blue-Green** | Zero | High (2x) | Instant | Medium | Critical systems, easy rollback |
| **Canary** | Zero | Medium | Fast | High | Risk mitigation, data-driven |
| **Recreate** | High | Low | N/A | Very Low | Non-critical, dev/test only |

---

## CI/CD Pipeline Best Practices

### Pipeline Security

```yaml
# Short-lived credentials (not static keys)
- name: Configure AWS Credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    role-to-assume: arn:aws:iam::123456789012:role/GitHubActions
    aws-region: us-east-1
    # OIDC provider - no long-lived secrets!

# Protected environments for production
environment:
  name: production
  # Requires approval + restricts to main branch
```

### Speed Optimization

- **10-minute build rule** — Most projects should build in <10 minutes
- **Parallel jobs** — Run tests, linting, security scans concurrently
- **Cache dependencies** — Cache node_modules, .m2, pip packages
- **Conditional execution** — Skip jobs when files haven't changed

```yaml
# Example: conditional job execution
jobs:
  backend-tests:
    if: contains(github.event.head_commit.modified, 'backend/')
    runs-on: ubuntu-latest
```

### Testing Pyramid

```
              /\
             /E2E\        <- Few (slow, expensive)
            /------\
           /Integration\ <- Some (medium speed)
          /------------\
         /  Unit Tests  \ <- Many (fast, cheap)
        /----------------\
```

- 70% Unit tests (fast, isolated)
- 20% Integration tests (service interactions)
- 10% E2E tests (full user workflows)

### Security Scanning Integration

```yaml
# Multi-layer security scanning
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      # SAST - Static code analysis
      - uses: github/codeql-action/init@v3

      # SCA - Dependency vulnerabilities
      - name: Run Trivy
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          format: 'sarif'

      # Secret scanning
      - name: Gitleaks
        uses: gitleaks/gitleaks-action@v2

      # Container scanning
      - name: Scan Docker image
        run: trivy image myapp:${{ github.sha }}
```

---

## Docker Best Practices

### Multi-Stage Builds

```dockerfile
# Build stage - includes build tools (900MB+)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Runtime stage - minimal image (<100MB)
FROM node:20-alpine AS runtime
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001
WORKDIR /app
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --chown=nodejs:nodejs . .
USER nodejs
EXPOSE 3000
CMD ["node", "server.js"]
```

### Security Hardening

- **Non-root user** — ALWAYS run as non-root (UID 1001)
- **Minimal base images** — Use `alpine`, `distroless`, or `scratch`
- **Read-only filesystem** — `docker run --read-only`
- **No secrets in layers** — Use build secrets or external vaults
- **Resource limits** — Set CPU/memory limits to prevent DoS
- **Signed images** — Enable Docker Content Trust

```dockerfile
# Security best practices example
FROM gcr.io/distroless/nodejs20-debian12
COPY --chown=65532:65532 /app /app
USER 65532
EXPOSE 8080
```

### .dockerignore

```
# Version control
.git
.gitignore

# Dependencies (install fresh in container)
node_modules
vendor/
*.pyc
__pycache__

# Secrets and configs
.env
.env.local
secrets/
*.key
*.pem

# Development files
README.md
Dockerfile
docker-compose.yml
.vscode/
.idea/

# Testing and CI
tests/
*.test.js
.github/
```

---

## Kubernetes Deployment Patterns

### Resource Management (Right-Sizing)

```yaml
# 99.94% of clusters are over-provisioned!
# Average CPU usage: 10%, Memory: 23%
resources:
  requests:
    memory: "128Mi"  # Guaranteed allocation
    cpu: "100m"      # 0.1 CPU cores
  limits:
    memory: "256Mi"  # Maximum allowed
    cpu: "200m"      # Hard cap

# Use tools: Kubecost, Goldilocks, VPA
```

### Health Checks

```yaml
# Liveness: Is container alive?
livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10
  timeoutSeconds: 5
  failureThreshold: 3

# Readiness: Can it receive traffic?
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5
  successThreshold: 1

# Startup: Has initialization completed?
startupProbe:
  httpGet:
    path: /startup
    port: 8080
  failureThreshold: 30  # 30*10s = 5min for slow starts
  periodSeconds: 10
```

### ConfigMaps and Secrets

```yaml
# Group related resources in single manifest
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  APP_ENV: production
  LOG_LEVEL: info
---
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
stringData:
  DATABASE_URL: postgresql://user:pass@db:5432/mydb
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  template:
    spec:
      containers:
      - name: app
        envFrom:
        - configMapRef:
            name: app-config
        - secretRef:
            name: app-secrets
```

### Security Best Practices

```yaml
# Pod Security Standards
securityContext:
  runAsNonRoot: true
  runAsUser: 1000
  fsGroup: 1000
  seccompProfile:
    type: RuntimeDefault
  capabilities:
    drop:
    - ALL

# Network Policies (deny-by-default)
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all-ingress
spec:
  podSelector: {}
  policyTypes:
  - Ingress
```

---


## Extended Reference

Detailed material starting at `## Infrastructure as Code (Terraform/Pulumi)` has been moved to [`reference/extended.md`](reference/extended.md) to keep this skill concise. Load that reference when the task requires the moved examples, command catalogs, checklists, platform details, or implementation templates.
