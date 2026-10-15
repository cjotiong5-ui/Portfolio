---
name: skill-router
description: Use this FIRST on any ESOES CampusFlow problem, bug, feature, request, or task to auto-select the best 1 to 5 skills from the .opencode skills library. Discovers every available skill live instead of relying on a fixed list, classifies the problem, picks one primary plus minimal supporting skills, loads them in the right order, and reports what it chose and why. Trigger before picking a skill by hand or starting work on anything in this repo - Flask route or API, SQLite schema change or migration, auth / JWT / OAuth / CSRF, student-portal UI or responsive breakage, dashboard or block section bug, failing test, performance, PythonAnywhere deployment, docs or paper, refactor, code review or audit.
metadata:
  command-name: skill-router
  user-invocable: "true"
---

# Skill Router

Pick the right skills for an ESOES CampusFlow task, then get out of the way.

## Scope

This skill **selects and orchestrates only**. It does not implement the fix,
does not edit application code, and does not produce a design of its own. Once
the skill chain is chosen, normal work happens.

**Never hardcode a list of skill names.** Skills are added and removed
constantly. Every run re-discovers what exists.

---

## Step 0 - Understand the problem

Before routing, pin down what the task actually is. Read enough of the repo to
answer:

- What is the observable symptom or the requested outcome?
- Which layer is involved: `backend/`, `db.py`, `structures/`,
  `student-portal/`, `scripts/`, or deployment config?
- Is it a defect, a new capability, a change request, or a question?
- Is there a concrete failing test, error, or reproduction?

Do not route on the user's wording alone. "Dashboard is broken" could be a
schema issue, a Flask route issue, or a CSS issue. Two minutes of reading beats
guessing at the skill chain.

If the problem is still genuinely ambiguous after looking, ask one focused
question. Do not stall the whole task on it.

---

## Step 1 - Discover every skill, live

Skills live in **`ESOES ORIGINAL/.opencode/skills/<category>/<skill>/SKILL.md`**.
The repo root contains one folder named `ESOES ORIGINAL` **with a space** -
always quote it.

Read **only the frontmatter** (name + description) of every skill first. Do not
load skill bodies yet; that wastes context.

Glob to locate them:

```
.opencode/skills/**/SKILL.md
```

Then read the headers in one pass. On this Windows repo:

```powershell
$base = "ESOES ORIGINAL\.opencode\skills"
Get-ChildItem -Recurse -Filter "SKILL.md" -Path $base | Sort-Object FullName | ForEach-Object {
  $l = @(Get-Content -LiteralPath $_.FullName -Encoding UTF8)
  $n = ($l | Select-String '^name:\s*(.+)$' | Select-Object -First 1).Matches.Groups[1].Value.Trim()
  $i = ($l | Select-String '^description:' | Select-Object -First 1).LineNumber - 1
  $d = $l[$i] -replace '^description:\s*',''
  if ($d -match '^>') {
    $b = @(); for ($j = $i + 1; $j -lt $l.Count; $j++) { if ($l[$j] -match '^\S') { break }; $b += $l[$j] }
    $d = ($b -join ' ')
  }
  "{0} :: {1}" -f $n, ($d -replace '\s+',' ')
}
```

POSIX fallback:

```bash
find "ESOES ORIGINAL/.opencode/skills" -name SKILL.md | sort | \
  while read -r f; do
    awk '/^name:/{n=$0} /^description:/{d=$0} END{print n" :: "d}' "$f"
  done
```

Notes on discovery:

- `ESOES ORIGINAL/.agent/skills/` and `ESOES ORIGINAL/Skills/` are **mirrors**
  of the same library. If a skill appears only there, judge it by name and
  category and prefer the `.opencode` copy. Do not treat a mirror-only skill as
  a separate skill.
- A few skills have non-UTF8 frontmatter and print as mojibake. If a
  description is unreadable, read that file's frontmatter directly and judge
  from its name and category folder.
- Ignore this skill when ranking its own candidates.

---

## Step 2 - Classify the problem

Assign one or more categories. Multi-category is normal and expected.

| Category | Typical triggers in this repo |
| --- | --- |
| bug / debugging | "doesn't work", wrong result, error, regression |
| new feature | "add", "build", new endpoint or page or field |
| frontend / UI / responsive | `student-portal/`, layout, mobile, CSS, dashboard rendering |
| backend / Flask route / API | `backend/routes/`, `app.py`, endpoint, request/response |
| database / SQLite / schema / migration | `db.py`, table, column, index, ALTER TABLE, seed |
| auth / security / OAuth / JWT / CSRF | login, session, token, decorator, origin check, CORS |
| testing / verification | `scripts/test_*.py`, `run_all_tests.py`, coverage |
| performance | slow, timeout, N+1, capacity |
| deployment | PythonAnywhere, `deploy.sh`, reload, env vars |
| docs / paper / report | README, thesis, documentation, report |
| refactor / code review / audit | cleanup, duplication, "review this", health check |

Category folders in the library (`architecture`, `database-persistence`,
`security`, `testing-qa`, ...) are a useful prior, not a rule. Trust the
description over the folder.

---

## Step 3 - Score, then pick

Match the problem's categories and literal keywords (route names, filenames,
table names, error strings) against each skill's `name` and `description`.

- **PRIMARY** - highest overall match. Carries the main body of the work.
- **SUPPORTING** - added only when it clearly adds a distinct capability that
  the primary does not already cover (e.g. a schema change skill plus a
  migration-safety skill).

### Hard limits

- **Minimum 1, maximum 5 skills per task.**
- Normal task: **2 to 3**. Go to 4 or 5 only for genuinely multi-layer work
  (a bug touching database + Flask route + portal UI).
- **Never pick a skill to hit a number.** If one skill is enough, use one.
- If two skills overlap, keep the **more specific** one and drop the other.
- Prefer a skill whose description explicitly names this stack over a
  generic-sounding one. `systematic-debugging` beats a generic "debugging" skill
  for a bug; `data-contract-migrations` beats `database-patterns` for an ALTER
  TABLE, because it is the narrower job.
- A language skill for Go, Rust, Zig, TypeScript, React, or HarmonyOS is almost
  always the wrong pick here. ESOES is Flask + SQLite + vanilla
  HTML/CSS/JS. `python-project` and `react-development` are borderline - use
  only if the code really is React or a packaged Python project.

---

## Step 4 - Load and order

Only now load the full bodies of the chosen skills, in this order:

1. **Inspect / understand** - diagnosis, audit, architecture, exploration
2. **Plan** - delivery plan, test strategy, migration plan, review
3. **Implement** - surgical change, feature, refactor
4. **Verify** - tests, pre-merge gate, acceptance evidence
5. **Report** - summarise what changed and what was actually proven

Skip a stage that does not apply. A one-line CSS fix does not need a delivery
plan.

**Conflict rule:** if two selected skills give contradictory instructions, the
repo rules always win - `AGENTS.md`, then the ESOES constraints in Step 5 of
this skill. When a skill conflicts with a repo rule, follow the repo rule and
say so in one line.

---

## Step 5 - Report before working

Print this short block, then proceed. Keep it tight.

```
Skills picked: <skill-a> (primary), <skill-b>, <skill-c>
Why:
  <skill-a> - <one plain sentence>
  <skill-b> - <one plain sentence>
Skipped:
  <skill-x> - <one short reason>
```

Omit `Skipped` when nothing was a near-miss.

---

## Step 6 - Fallback

If nothing fits, do not force a bad match.

```
Skills picked: none
Why: no skill in .opencode/skills covers <what the task needs>.
Missing skill: <one line, e.g. "a Flask routing / REST endpoint skill for backend/routes/*">
```

Then continue the task with normal senior-dev behaviour: read the code, follow
the existing patterns, make the smallest safe change, verify it.

---

## ESOES constraints this router enforces

These override anything a selected skill says.

- **No new libraries** for things the repo does by hand: stdlib `sqlite3`,
  custom ES256 JWT, hand-rolled auth decorators, `structures/dsa.py`.
- **No route prefixes.** Do not invent `/api/v1/...`.
- **Never edit `.min.js` or `*.bundle.min.css`.** They are build artifacts of
  `npm run build:frontend`.
- **No data-dropping migrations.** Additive, backfilled, reversible.
- **Always quote `"ESOES ORIGINAL"`** in commands.
- **`.github/workflows/` belongs at the git root**, never inside
  `ESOES ORIGINAL/`.
- Never commit `.env`, `school.db*`, or `keys/`.
- No git operations unless the user explicitly asks.
- Smallest safe change, reuse existing patterns, no over-engineering.

## Honesty rules

- Never claim something works unless it was actually verified.
- The live-server suites (`test_admin_extras`, `test_block_sections`,
  `test_bulk_upload`, `test_eligibility`, `test_section_visibility_assignment`)
  read `ESOES_BASE` and fail with `URLError [WinError 10061]` when `app.py` is
  not running. **Confirm the server was up before calling that a real
  failure.**
- Run `scripts/run_all_tests.py` for the whole suite; never roll your own loop
  over `scripts/test_*.py`.
- Rebuild frontend assets (`npm run build:frontend`) before judging any
  frontend test.
- If a dry run, a skill load, or a verification step could not be completed,
  say exactly what was checked and what was not.
