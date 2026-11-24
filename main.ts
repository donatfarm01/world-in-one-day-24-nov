// "The World in One Day - 24 November 2026": a dense one-page newspaper
// front page rendered in advance (see draw.py) and shipped as entry.png
// beside this file. The program's only job is to place that image at the
// grader's output path, deterministically: the same input bytes produce the
// same output bytes on every run, with no network and no randomness.
//
// Run outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node 22, standard library only - no dependencies, nothing installed.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SOURCE = join(HERE, "entry.png");
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const TARGET = join(OUT_DIR, "entry.png");

const bytes = readFileSync(SOURCE);

// The gate caps the entry at 1 MiB (1,048,576 bytes) and 1024 x 1024 px.
// Fail loudly instead of silently shipping an image the gate would reject.
if (bytes.length > 1_048_576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB gate`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(TARGET, bytes);
