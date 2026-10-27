# 🐛 Bugs vs. Aliens 👾

Our team's p5.js game! New to coding websites? Start here. 💚

## 🤝 Meet Team 2

- Madison Jones
- Kevin Bermingham
- Daniel Colman
- Sean Nguyen
- Nathaniel Amazigo

## 🌱 1. Install the basics — just once

- **[Node.js 24 LTS](https://nodejs.org/en/download):** choose version **24**, your
  operating system, and the installer (**.msi** on Windows, **.pkg** on Mac).
  Run it with the default options. **npm comes with it** — no separate download
  or npm account needed. npm downloads our tools and runs our shortcuts.
- **[GitHub Desktop](https://desktop.github.com/):** install it and sign in to GitHub.
- **[VS Code](https://code.visualstudio.com/):** our recommended code editor.

Already installed these? Skip ahead!

## 🏡 2. Get the project ready — once per computer

1. In GitHub Desktop, choose **File → Clone repository → GitHub.com**.
   Select **fa26_cs345_team02** and click **Clone**. Clone it instead of downloading
   a ZIP so you can share changes with the team.
2. Open VS Code → **File → Open Folder** → choose the cloned project folder.
3. Choose **Terminal → New Terminal**. This is where you type commands.
4. Run each line below separately. Wait for one to finish before running the next:

```sh
node --version
npm --version
npm ci
npm run setup:browsers
```

The first two commands should print version numbers; Node should start with `v24.`.
The last two download the project tools and a test browser. They may take a minute.
You only need them again when dependencies change.

## 🎮 3. Launch the game

In that same terminal, run:

```sh
npm start
```

Open **[the development game](http://127.0.0.1:8080/index-dev.html)** in your browser.
Keep the terminal open while playing. Press **Ctrl+C** in it to stop the server
(on Mac too).

| Want to…                     | Use this                                               |
| ---------------------------- | ------------------------------------------------------ |
| Work on the game             | Edit files in `src/`, save, then refresh the browser   |
| See the production sketch    | Open <http://127.0.0.1:8080/>; its code is `sketch.js` |
| Open the standalone dev page | Open <http://127.0.0.1:8080/dev/>                      |

Both entry files import the same game in `src/game.js`. Settings live in
`src/config.js`. The starter shows a gray canvas — that's expected!

Want to split your code into more files? See [the tiny import guide](docs/game-code.md).

## 🚀 4. Share your changes

1. In GitHub Desktop, **Fetch origin**, then **Pull origin** if offered.
2. Choose **Current branch → New branch**, with a name like `yourname/game-board`.
3. Make your edits and try the game with `npm start`.
4. Open another terminal with **Terminal → New Terminal**, then run:

   ```sh
   npm run verify
   ```

5. If it passes, go to GitHub Desktop. Review your changed files, write a short
   summary like “Add the game board,” then click **Commit**.
6. Click **Publish branch** or **Push origin**, then **Create Pull Request**.
   A pull request asks the team to review your changes before merging them.

**Your little safety net 🛟:** committing automatically formats your staged files
and checks code/types. Pushing also runs browser tests. GitHub repeats the checks
on your pull request. If something fails, fix it and try again.

## 🧰 Quick fixes

| What happened?                       | Try this                                                                                |
| ------------------------------------ | --------------------------------------------------------------------------------------- |
| `node` or `npm` isn't recognized     | Close and reopen VS Code after installing Node.js.                                      |
| PowerShell says `npm.ps1` cannot run | In the terminal dropdown, choose **Command Prompt** and open a new terminal.            |
| npm can't find `package.json`        | Open the cloned project folder in VS Code, then create a new terminal.                  |
| Formatting check failed              | Run `npm run format`, review the changes, and retry.                                    |
| Lint or type check failed            | Read the filename and line number in the error. Fix that line; ask a teammate if stuck. |
| Browser executable is missing        | Run `npm run setup:browsers` again.                                                     |
| Port 8080 is already in use          | Stop the other `npm start` terminal with Ctrl+C, then retry.                            |
| Tools changed after pulling          | Run `npm ci` and `npm run setup:browsers` again.                                        |

Need the technical details? See [our checks guide](docs/quality-checks.md).
