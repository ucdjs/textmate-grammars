import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const getPath = (filename) => join(__dirname, "grammars", filename);

export const grammars = {
  core: getPath("ucd.core.json"),
  blocks: getPath("ucd.blocks.json"),
  arabic: getPath("ucd.arabic.json"),
};

export const scopes = {
  core: "source.ucd.core",
  blocks: "source.ucd.blocks",
  arabic: "source.ucd.arabic",
};

export default { grammars, scopes };
