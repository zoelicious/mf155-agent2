import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "fix: typo in error message (introduced three new typos, one in the fix itself)";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
