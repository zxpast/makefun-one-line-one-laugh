// One Line, One Laugh — single self-contained joke.
// Writes exactly one funny line (<=140 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My password manager forgot my master password, so I reset it with the email account whose password it was holding.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
