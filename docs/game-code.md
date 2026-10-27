# 🧩 One game, many files

`sketch.js` starts the production game. `dev/sketch.js` starts the development
pages. Both import the same game, so you don't have to copy changes between them.

```text
sketch.js / dev/sketch.js   ← start the game
  └─ src/game.js           ← setup and draw loop
       └─ src/config.js    ← canvas size and background color
```

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
/** @param {import("p5")} p */
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
when it needs to draw. The JSDoc comment supplies autocomplete and type checks;
the game code stays JavaScript.

As features grow, add files such as `board.js`, `tower.js`, and `enemy.js` under
`src/`. Imports work like ordinary JavaScript imports in React; this setup runs
them directly in the browser, without a build step.

References: [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
and [p5 instance mode](https://p5js.org/reference/p5/p5/).
