#!/usr/bin/env node
// Deliberately says nothing that can go stale: no version, no tag, no counts.
// Whoever reads this got here by mistake and needs a route, not a number.
console.error(
  "aglaya-tokens-version: this npm name is a placeholder, not a tool.\n" +
  "\n" +
  "The real version checker ships inside @aglaya/design-tokens, which is\n" +
  "installed from a git tag, not from npm:\n" +
  "\n" +
  "  # newest tag:\n" +
  "  git ls-remote --tags https://github.com/ibaifernandez/aglaya-design-system.git\n" +
  "\n" +
  "  npm install \"git+https://github.com/ibaifernandez/aglaya-design-system.git#<tag>\"\n" +
  "  npm exec --no -- aglaya-tokens-version\n" +
  "\n" +
  "`--no` runs the binary that package installed and refuses to fetch anything."
);
process.exit(1);
