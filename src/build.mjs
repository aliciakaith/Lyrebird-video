// Inlines shared CSS + motion library into each frame source → compositions/<name>.html
// Usage: node src/build.mjs
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = readFileSync(join(root, "src/base.css"), "utf8");
const lib = readFileSync(join(root, "src/lib.js"), "utf8");
const words = readFileSync(join(root, "voiceover-words.json"), "utf8");
mkdirSync(join(root, "compositions"), { recursive: true });

for (const f of readdirSync(join(root, "src/frames")).filter((n) => n.endsWith(".html"))) {
  const src = readFileSync(join(root, "src/frames", f), "utf8");
  const out = src
    .replace("/*@CSS*/", () => css)
    .replace("/*@LIB*/", () => lib)
    .replace("/*@WORDS*/", () => words.replace(/\s+/g, " "));
  writeFileSync(join(root, "compositions", f), out);
  console.log("built compositions/" + f);
}
