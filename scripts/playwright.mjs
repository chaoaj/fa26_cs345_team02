import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
// Keep installation and test runs in the same place, including GUI Git clients.
const browserPath = fileURLToPath(
  new URL("../.cache/ms-playwright", import.meta.url),
);
const result = spawnSync(
  process.execPath,
  [require.resolve("@playwright/test/cli"), ...process.argv.slice(2)],
  {
    stdio: "inherit",
    env: { ...process.env, PLAYWRIGHT_BROWSERS_PATH: browserPath },
  },
);

if (result.error) console.error(result.error.message);
process.exit(result.status ?? 1);
