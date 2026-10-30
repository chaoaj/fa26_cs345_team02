# 🧩 One game, many files

`sketch.js` starts the production game. `dev/sketch.js` starts the development
pages. Their game modules are separate to follow the class's development and
production workflow. Work in `dev/` first, then promote finished work separately.

```text
sketch.js                  ← production entry
  └─ src/game.js           ← production game
dev/sketch.js              ← development entry
  └─ dev/src/game.js       ← development game and Energy UI
  └─ dev/src/energy.js     ← Energy operations
  └─ dev/src/config.js     ← prototype settings
```

The examples below explain the production starter's imports. Use the same
pattern inside `dev/src/`; see [the Energy guide](energy-prototype.md) for its API.

## Export it, then import it

`src/config.js` shares a value using `export`:

```js
export const GAME_CONFIG = {
  width: 400,
  height: 400,
  backgroundColor: 220,
};
```

`src/game.js` uses it with `import`:

```js
import { GAME_CONFIG } from "./config.js";
```

`sketch.js` imports a function and calls it to start the game:

```js
import { createGame } from "./src/game.js";

export const game = createGame();
```

The browser loads imported files automatically. You only need the entry file in
HTML, with `type="module"`. Keep the `.js` extension and use paths relative to
the file doing the import: `./` means this folder; `../` means one folder up.
Launch with `npm start` so the browser can load the modules through the server.

## Add your next file

For example, create `src/enemy.js`:

```js
export function drawEnemy(p) {
  p.circle(100, 100, 30);
}
```

Then in `src/game.js`, import it at the top:

```js
import { drawEnemy } from "./enemy.js";
```

Call it **inside** `p.draw`, after the background:

```js
p.draw = () => {
  p.background(GAME_CONFIG.backgroundColor);
  drawEnemy(p);
};
```

We use p5's **instance mode**: `p` is your drawing toolkit, so write
`p.circle(...)`, `p.createCanvas(...)`, and `p.mouseX`. Pass `p` to another file
when it needs to draw. No type annotations are required; use ordinary JavaScript.

As features grow, add files such as `board.js`, `tower.js`, and `enemy.js` under
`src/`. Imports work like ordinary JavaScript imports in React; this setup runs
them directly in the browser, without a build step.

References: [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
and [p5 instance mode](https://p5js.org/reference/p5/p5/).
