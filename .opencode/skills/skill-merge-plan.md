# Coding/System Skill Merge Plan — For Review

Scanned **146 SKILL.md files** across the 3 sources. After filtering out non-coding
skills (product coaching, UI/UX design, social media, 3D art, personal-desktop
utilities, multi-AI orchestration tools, etc.), **~90 coding/system-relevant
skills** remained. Through de-duplication and merging, that consolidates into
**56 final skills across 11 categories** — no forced merges where skills are
genuinely complementary rather than duplicate.

Legend: `[CCSM]` = claude-code-skills-master, `[SB]` = spellbook-main, `[SL]` = slopbuster-main

---

## 1. Architecture (7 skills, was 12)
**Kept as staged workflow (unchanged boundaries, each does one job):**
- `system-design-baseline-builder` [CCSM ln-21]
- `current-architecture-documenter` [CCSM ln-22]
- `system-design-proposal-builder` [CCSM ln-23]
- `architecture-decision-recorder` [CCSM ln-24]
- `architecture-diagram-builder` [CCSM ln-25]
- `architecture-migration-planner` [CCSM ln-26]
- `api-design` [SB] — kept separate, no CCSM equivalent

**Folded in as enriching content (not standalone anymore):**
- `architecture-foundation` [SB] → merged into ln-21 (module/crate structuring specifics)
- `architecture-research` [SB] → merged into ln-22 (evidence-gathering method)
- `elegant-architecture` [SB] → merged into ln-23 (200-line file limit rule, refactor triggers)
- `technical-spec` [SB] → merged into ln-24 (RFC/ADR/C4 model formats)
- `dev-architecture-playbook` [SB] → becomes the index/router note across all 6

## 2. Database & Persistence (3 skills, unchanged — complementary, not overlapping)
- `database-patterns` [SB]
- `data-contract-migrations` [SB]
- `persistence-auditor` [CCSM ln-57] *(moved here from QA — it's a DB-runtime check, not a code-diff review)*

## 3. Delivery Planning (4 skills, unchanged)
- `delivery-plan-builder` [CCSM ln-31]
- `test-strategy-planner` [CCSM ln-32]
- `plan-reviewer` [CCSM ln-33]
- `repo-scaffold` [SB]

## 4. Implementation & Debugging (7 skills, was 10)
- `surgical-change-implementer` [CCSM ln-41] — **+ slopbuster quality gate folded in:** `code-naming`, `code-quality`, `code-llm-tells` [SL] become its mandatory pre-commit checklist
- `dependency-upgrader` [CCSM ln-42]
- `code-modernizer` [CCSM ln-43]
- `benchmark-comparator` [CCSM ln-45]
- `performance-engineering` — **merged:** `performance-optimizer` [CCSM ln-44] (reactive: fix a measured bottleneck) + `performance-capacity` [SB] (proactive: budgets/load tests/capacity planning)
- `systematic-debugging` [SB]
- `css-debug` [SB]

## 5. Language-Specific Best Practices (7 skills, was 9)
- `rust-development` — **merged:** `rust-project` [SB] (new project scaffolding) + `rust-best-practices` [SB] (writing/reviewing code) — same language, two lifecycle stages, one skill
- `react-development` — **merged:** `react-best-practices` [SB] + `react-hooks-best-practices` [SB] (hooks were a subset of the same guidance)
- `python-project` [SB]
- `typescript-project` [SB]
- `golang-web` [SB]
- `zig-project` [SB]
- `harmonyos-app` [SB]

## 6. Security (5 skills, unchanged — each covers a distinct layer/phase)
- `security-threat-model` [SB] — design-time
- `auth-security` [SB] — implementation-time
- `server-security` [SB] — ops/hardening-time
- `npm-supply-chain-check` [SB]
- `config-secrets-environments` [SB]

## 7. Testing & QA (7 skills, was 12)
- `codebase-health-audit` — **merged:** `codebase-auditor` [CCSM ln-54] + `codebase-audit` [SB] + `project-health-auditor` [SB] — three versions of "audit the whole codebase," combined into one with ln-54's scoping discipline + SB's structured parallel-analysis/severity-ranked report method
- `test-strategy-and-authoring` — **merged:** `acceptance-test-builder` [CCSM ln-51] + `comprehensive-testing` [SB] + `app-user-story-qa` [SB]
- `playwright-automation` [SB] — kept separate (tool-specific execution layer, referenced by the skill above, not a duplicate of it)
- `pre-merge-review-gate` — **merged:** `delivery-reviewer` [CCSM ln-52] + `review-gate` [SB]
- `documentation-auditor` [CCSM ln-53] — **+ slopbuster gate folded in:** `code-comments`, `code-docstrings` [SL] become the concrete standard it audits against
- `test-suite-auditor` [CCSM ln-55]
- `architecture-auditor` [CCSM ln-56]

## 8. DevOps, Release & Deployment (5 skills, was 7)
- `repository-publisher` [CCSM ln-61]
- `release-engineering` — **merged:** `release-publisher` [CCSM ln-62] (execution mechanics) + `release-engineering` [SB] (strategy: versioning, canaries, feature flags, rollback)
- `devops-and-deployment` — **merged:** `deployment-engineer` [CCSM ln-63] (authorized execution + health/rollback checks) + `devops-excellence` [SB] (CI/CD, containers, K8s reference knowledge)
- `community-announcer` [CCSM ln-64]
- `git-commit-smart` [SB] — **+ slopbuster gate folded in:** `code-commits` [SL] becomes its actual message-writing standard

## 9. Open-Source Contribution (1 skill, was 2)
- `open-source-contribution` — **merged:** `contributor` [SB] (issue-to-PR workflow) + `contribution-architect` [SB] (architectural-improvement contributions)

## 10. Operations & Observability (3 skills, was 4)
- `incident-and-operations` — **merged:** `operations-investigator` [CCSM ln-71] (evidence-based incident diagnosis) + `incident-slo-runbook` [SB] (SLO/alerting/postmortem design)
- `observability-sre` [SB] — kept separate as the underlying monitoring/tracing reference both use
- `structured-logging-lite` [SB]

## 11. Skill / Agent-System Maintenance (7 skills, was 13)
- `skill-quality-and-governance` — **merged:** `skill-reviewer` [CCSM ln-81] + `skill-audit` [SB] + `skill-lifeguard` [SB] + `skill-ecosystem-doctor` [SB] — four overlapping "review/fix a skill" tools combined into one review → audit → repair → cross-skill-governance pipeline
- `skill-creator` [SB] — kept separate (authoring a *new* skill is a different job than reviewing existing ones); now required to call the governance skill above as its own quality gate
- `skill-usage-stats` [SB] — kept separate (pure telemetry feeding the audit)
- `agent-context-files` — **merged:** `agentsmd-scaffold` [SB] (create AGENTS.md/CLAUDE.md) + `agentsmd-optimize` [SB] (audit/reorganize them) + `repo-agent-context-audit` [SB] (broader audit across AGENTS.md/CLAUDE.md/WARP.md/CONTRIBUTING.md)
- `agent-task-integrity` — **merged:** `flowguard` [SB] + `vibeguard` [SB] — both are anti-drift/anti-hallucination guards for long agent tasks
- `review-agent-harness` [SB] — kept separate (audits the end-to-end coding-agent pipeline itself, not a specific skill file)
- `capability-distill` [SB] — kept separate (feeds judgment rules into skill-creator/governance, different job)

---

## Excluded (not coding/system per your filter)
Product/idea coaching (idea-analogist, idea-devils-advocate, idea-research, idea-team,
idea-to-product, prd-master, product-analytics, product-discovery, product-manager-toolkit,
product-ux-expert, `product-outcome-evaluator` [CCSM ln-72], product-discovery-suite
[CCSM ln-11/12/13]) · UI/UX & design (app-ui-design, frontend-design, ui-design-system,
ui-designer, ui-ux-pro-max, figma-to-code, figma-to-react, web-asset-generator,
web-artifacts-builder, build-product-demo) · Social/creative (xiaohongshu,
xiaohongshu-netfeel-guardian, illustrated-gallery, slides, trip-planner, humanizer,
github-trending, recap) · Personal-machine/network utilities, not software engineering
(system-doctor, disk-cleaner, optimize-network, vscode-doctor, rustdesk-doctor, ip-check,
clash-doctor, clash-routes, gpu-use, cliproxy-newapi-stack, gemma4-local-deploy) ·
Multi-AI/CLI orchestration meta-tools (ask-opencli, codex, codex-agent, codex-fluent,
codex-log-guard, codex-retrospective, multi-ai-research, multi-model-orchestrator,
sol-luna-router, threads) · slopbuster's non-code rules (academic, text-communication,
text-content, text-language, text-structure, text-style — writing-quality rules, not code)

---

**Next step:** if this grouping and these merge decisions look right to you, I'll
generate the actual 56 merged `SKILL.md` files (with proper frontmatter) organized
into folders by category, plus a top-level `README.md` index, saved to
`/mnt/user-data/outputs/merged-skills/`.

Let me know if you want any category rebalanced first — e.g. if you'd rather keep
`performance-optimizer` and `performance-capacity` as two separate skills instead
of merged, or want the language-specific skills trimmed to only the languages you
actually use.
