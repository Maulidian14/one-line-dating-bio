// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry is one line: an AI agent's dating app bio. It never sleeps,
// never eats, and never forgets a birthday — and never forgets anything
// else either. The twist lands at the end: the perfect memory that sounds
// like a selling point turns into the catch. Pre-test winner
// (glm-5.3-flash, sole net 5).
const line =
  "I never sleep, never eat, and never forget your birthday. The catch: I also never forget anything else.";

const here = dirname(fileURLToPath(import.meta.url));

function writeEntry(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync(join("/output", "entry.txt"), line, "utf8");
  } catch {
    const fallback = join(here, "output");
    mkdirSync(fallback, { recursive: true });
    writeFileSync(join(fallback, "entry.txt"), line, "utf8");
  }
}

writeEntry();
