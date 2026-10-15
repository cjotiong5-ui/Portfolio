---
name: git-commit-smart
description: Generates meaningful, conventional commit messages from diff analysis, following a concrete anti-slop commit-message standard.
---

# Smart Git Commit

> Inspired by [claude-code-plugins-plus](https://github.com/jeremylongshore/claude-code-plugins-plus)

## Purpose

Automatically generate meaningful commit messages by analyzing staged changes, following conventional commit format.

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, no code change |
| `refactor` | Code change, no new feature or fix |
| `perf` | Performance improvement |
| `test` | Adding/updating tests |
| `chore` | Maintenance tasks |
| `ci` | CI/CD changes |
| `build` | Build system changes |

### Scope

Optional, indicates the section of codebase:
- `auth`, `api`, `ui`, `db`, `config`, etc.

### Subject

- Imperative mood ("add" not "added")
- No period at end
- Max 50 characters
- Lowercase

### Body

- Explain WHAT and WHY, not HOW
- Wrap at 72 characters
- Separate from subject with blank line

### Footer

- Breaking changes: `BREAKING CHANGE: description`
- Issue references: `Closes #123`, `Fixes #456`

## Workflow

### 1. Analyze Changes

```bash
# View staged changes
git diff --staged

# View changed files
git diff --staged --name-only

# View stats
git diff --staged --stat
```

### 2. Determine Type

Based on changes:
- New files with features → `feat`
- Modified files fixing issues → `fix`
- Only .md files → `docs`
- Only test files → `test`
- package.json, configs → `chore` or `build`

### 3. Identify Scope

Look at file paths:
- `src/auth/*` → scope: `auth`
- `src/api/*` → scope: `api`
- `tests/*` → scope: `test`
- Multiple areas → omit scope or use broader term

### 4. Write Subject

Summarize the change:
```
feat(auth): add OAuth2 login support
fix(api): handle null response in user endpoint
docs: update README with installation steps
refactor(db): extract query builder to separate module
```

### 5. Write Body (if needed)

For complex changes:
```
feat(auth): add OAuth2 login support

Implement OAuth2 authentication flow with support for
Google and GitHub providers. This allows users to sign
in without creating a separate account.

- Add OAuth2 client configuration
- Implement callback handlers
- Store OAuth tokens securely
- Add provider selection UI
```

## Examples

### Simple Feature
```
feat(ui): add dark mode toggle
```

### Bug Fix with Issue Reference
```
fix(api): prevent duplicate user creation

Check for existing email before inserting new user record.
Race condition could cause duplicate entries when requests
arrived simultaneously.

Fixes #234
```

### Breaking Change
```
feat(api)!: change response format to JSON:API

BREAKING CHANGE: All API responses now follow JSON:API
specification. Clients must update their parsers.

Migration guide: docs/migration-v2.md
```

### Multiple Files, Single Purpose
```
refactor: extract validation logic to shared module

Move duplicate validation code from controllers to
a shared validation module. Reduces code duplication
and ensures consistent validation across endpoints.
```

## Anti-Patterns to Avoid

```
❌ "fix stuff"
❌ "update code"
❌ "WIP"
❌ "changes"
❌ "fixed bug"
❌ "misc updates"
❌ Commits with 50+ files and vague message
```

## Best Practices

1. **Atomic commits** - One logical change per commit
2. **Meaningful messages** - Future you will thank present you
3. **Reference issues** - Link to tickets/issues when relevant
4. **Review before commit** - `git diff --staged` always
5. **Don't commit secrets** - Check for API keys, passwords

## Quick Reference

```bash
# Stage specific files
git add <file>

# Stage all changes
git add -A

# Interactive staging
git add -p

# Commit with message
git commit -m "type(scope): subject"

# Commit with body
git commit -m "type(scope): subject" -m "body paragraph"

# Amend last commit
git commit --amend
```

## Quality Gate (folded in from slopbuster)

### Code Commits

# Code Rules: Commit Message Anti-Patterns

10 patterns that make commit messages obviously LLM-generated. The fundamental rule: commits are imperative by convention. The subject is always "this commit." Read it as: "If applied, this commit will ___."

---

## 1. Vague Verbs

```
# Bad
improve authentication flow
enhance error handling
refactor codebase structure
update various components

# Good — name the thing and what you did to it
reject expired OAuth tokens at middleware boundary
return 429 instead of 500 on rate-limit breach
extract token validation into standalone module
```

"Improve," "enhance," "refactor," and "update" without a target are content-free.

## 2. "Various" and "Several"

```
# Bad
fix various bugs in the authentication module
update several dependencies

# Good — one commit per fix
fix null pointer when session cookie is missing
fix timezone offset in JWT expiry check
bump express from 4.18.2 to 4.19.0
```

"Various" means "I bundled changes that should be separate commits."

## 3. Passive Voice

```
# Bad
authentication was updated to support OAuth
error handling was improved in the API layer

# Good — imperative mood
add OAuth support to authentication
return structured errors from API endpoints
```

## 4. Unnecessary Capitalization

```
# Bad
Update User Authentication Flow With New Token Validation

# Good — lowercase except proper nouns and acronyms
update user auth flow with new token validation
```

LLMs write commit messages like presentation slide titles.

## 5. Past Tense

```
# Bad
added error handling to the payment module
fixed the login bug

# Good — imperative, present tense
add error handling to payment module
fix login redirect loop on expired session
```

## 6. "In Order To"

```
# Bad
refactor auth module in order to improve testability

# Good
refactor auth module for testability
```

The phrase always collapses. Cut it.

## 7. Misleading Bodies

The diff shows WHAT changed. The body explains WHY.

```
# Bad body — restates the diff
Changed the timeout from 30 to 60 seconds in the config file.
Updated the retry count from 3 to 5.

# Good body — explains the reasoning
Production logs showed 12% of requests timing out at 30s
during peak hours (18:00-20:00 UTC). 60s covers p99 latency
with 10s headroom. See incident #4521.
```

## 8. Incorrect Emoji/Type Prefixes

```
# Bad — wrong type for the change
feat: fix null pointer in auth
refactor: add new payment endpoint

# Good — accurate types
fix: null pointer when session cookie is missing
feat: add Stripe payment endpoint
```

If you're not sure which conventional commit type to use, `fix:` and `chore:` are safe defaults.

## 9. False WIP Labels

```
# Bad — marks completed work as in-progress
WIP: add user authentication

# Good — only use WIP if work is genuinely incomplete
WIP: add user auth — token refresh not yet implemented
```

## 10. Redundant "Initial"

```
# Bad
initial implementation of user authentication
initial commit for the project

# Good — every commit is initial for something
add user authentication with JWT tokens
scaffold project with Next.js 15 and TypeScript
```

---

## The Good Commit Test

A commit message passes if:
- You can understand what changed without reading the diff
- It's under 72 characters (first line)
- It uses imperative mood
- It names the specific thing that changed
- The body (if present) explains WHY, not WHAT
