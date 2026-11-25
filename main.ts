import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry for make.fun #155 "Worst Fix Ever": a single-line commit message.
// Gate: 1-100 UTF-8 chars, no trailing newline, no extra lines (78 chars).
// The message is assembled from parts so each fragment stays readable.
const VERB = "fix:";
const SUBJECT = "typo";
const WHERE = "in error message";
const CONFESSION = "(introduced three new typos,";
const TWIST = "one in the fix itself)";
const text = [VERB, SUBJECT, WHERE, CONFESSION, TWIST].join(" ");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
