# Quality checks

The game uses browser JavaScript and the existing p5 runtime. Node.js 24 and npm
are development tools; the deployed game does not need a Node server or build.

## Commands

| Command                  | Purpose                                         |
| ------------------------ | ----------------------------------------------- |
| `npm start`              | Serve the game locally on port 8080             |
| `npm run check`          | Check formatting and lint without editing files |
| `npm run verify`         | Run all checks and browser tests                |
| `npm run format`         | Apply consistent formatting                     |
| `npm run lint:fix`       | Apply available lint fixes                      |
| `npm test`               | Run Chromium smoke tests                        |
| `npm run setup:browsers` | Install the browser used by the tests           |
| `npm run test:ui`        | Open the interactive browser test runner        |

## What runs automatically

Husky connects Git events to our npm commands. It does not inspect the game
itself; ESLint, Prettier, and Playwright do that work. A command that
fails stops the commit or push, leaving your changes available to fix and retry.

- **Commit:** Husky runs lint-staged (ESLint/Prettier on staged files).
  Partially staged files are supported.
- **Push:** the full `npm run verify` gate runs. Chromium must be installed.
  Tests use their own server on port 8081, so your game can keep running on 8080.
- **GitHub:** the Quality workflow runs on pushes and pull requests using `npm ci`.
  It uses Chrome preinstalled on GitHub's Ubuntu 24.04 runner, avoiding browser
  and OS package downloads. Failed tests upload traces in the workflow's artifacts.

`npm ci` activates hooks through the `prepare` script. Run `npm run prepare` if
hooks need reinstalling. Node/npm must be on the PATH used by your Git client;
restart GitHub Desktop after installing Node. On Linux, browser setup may require
`npm run setup:browsers -- --with-deps`.

Browser installation and tests use `scripts/playwright.mjs` to store Chromium
in the ignored `.cache/ms-playwright/` folder inside this project. This keeps
terminal and GitHub Desktop runs consistent. Run `npm run setup:browsers` after
cloning or updating Playwright. Do not commit the downloaded browser files.
CI selects the installed Chrome channel with `PLAYWRIGHT_CHANNEL=chrome`;
local runs use the pinned Chromium download by default.

On Windows, both hooks use `npm.cmd` so GitHub Desktop does not accidentally
launch WSL through npm's Bash wrapper. macOS and Linux use `npm` as usual.

## Writing JavaScript

Use ordinary JavaScript. Type checking is disabled, so teammates do not need
type annotations or fixes for implicit `any`. The p5 declarations are retained
for editor hints only. Browser scripts use ES modules and p5 instance mode;
see [the import guide](game-code.md).

Define callbacks on the p5 instance (`p.setup`, `p.draw`, `p.mousePressed`). Use
`p.createCanvas`, `p.background`, etc. inside them. `types/p5-browser.d.ts`
describes the p5 constructor loaded by HTML; it contains no runtime code.

ESLint catches unused variables, unknown names, and loose equality. Browser tests
check startup and gameplay scenarios. Put Node tooling and browser tests in `.mjs` files.

Vendored `libraries/` files and generated reports are excluded from the source
checks. The team's `project/` planning documents are excluded from formatting.
Keep `package-lock.json` committed; `node_modules/` and test reports stay ignored.
Dependabot proposes monthly tooling and GitHub Actions updates.

The initial tests open all three game entry pages, require a visible canvas and
several animation frames, and fail on JavaScript errors and failed requests.
Add gameplay assertions in `tests/` as the board, towers, and enemies are built.
Startup tests alone do not verify game rules.

## Repository admin: enforce reviews and checks

After the workflow runs on GitHub once, add a ruleset for the default branch:

1. Require a pull request and at least one approving review.
2. Require the Quality workflow's **Lint, types, and browser tests** status check.
3. Block force pushes and branch deletion.

Local hooks can be bypassed. A required GitHub check enforces the shared gate.
These repository settings must be enabled separately by an admin.
The existing status name is retained for compatibility with branch rules; the
job now runs formatting, lint, and browser tests without type checking.

Tool references: [Husky](https://typicode.github.io/husky/),
[Prettier commit hooks](https://prettier.io/docs/precommit),
[Playwright test servers](https://playwright.dev/docs/test-webserver).
