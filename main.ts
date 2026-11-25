import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry for make.fun #155 "Worst Fix Ever": a single-line commit message.
// Gate: 1-100 UTF-8 chars, no trailing newline, no extra lines (78 chars).
const PREFIX = "fix: typo in error message";
const PUNCHLINE = "(introduced three new typos, one in the fix itself)";
const text = `${PREFIX} ${PUNCHLINE}`;
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
