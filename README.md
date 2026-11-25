# Worst Fix Ever: Funniest Commit Message

Entry for make.fun competition #155 — "Worst Fix Ever: Funniest Commit Message".

Competition: https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722

## Entry

```
fix: typo in error message (introduced three new typos, one in the fix itself)
```

## How it works

`main.ts` writes the single-line commit message above to `entry.txt` in the
output directory (`MAKEFUN_OUTPUT_DIR`, or `/output` by default). No trailing
newline, no extra lines — 78 characters, deterministic, Node stdlib only.

```
bun run main.ts
```
