import { createEnergyView } from "./energy-view.js";
import { createBattlefieldLayout } from "./battlefield-layout.js"
import { GAME_CONFIG } from "./config.js";

export function createGame(energy) {
  const view = createEnergyView(energy);
  const battlefield = createBattlefieldLayout();

  const game = new window.p5((p) => {

    p.preload = () => {
      battlefield.butterflyShop = p.loadImage("images/bugs/butterfly_buying.png");
      battlefield.wormShop = p.loadImage("images/bugs/worm_buying.png");
      battlefield.cocoonShop = p.loadImage("images/bugs/cacoon_buying.png");
      battlefield.butterfly = p.loadImage("images/bugs/butterfly.png");
      battlefield.worm = p.loadImage("images/bugs/worm.png");
      battlefield.cocoon = p.loadImage("images/bugs/cacoon.png");
    }

    p.mousePressed = () => {
      if (p.mouseButton === p.LEFT) {
        if (p.mouseX >= 0 && p.mouseX < 64 && p.mouseY >= 0 && p.mouseY < 64) {
          battlefield.curUnit = "butterfly";
        } else if (p.mouseX >= 64 && p.mouseX < 128 && p.mouseY >= 0 && p.mouseY < 64) {
          battlefield.curUnit = "worm";
        } else if (p.mouseX >= 128 && p.mouseX < 192 && p.mouseY >= 0 && p.mouseY < 64) {
          battlefield.curUnit = "cocoon";
        }

        // Place unit on grid
        const col = Math.floor((p.mouseX - GAME_CONFIG.gridStartX) / GAME_CONFIG.cellWidth);
        const row = Math.floor((p.mouseY - GAME_CONFIG.gridStartY) / GAME_CONFIG.cellHeight);
        

        if (battlefield.curUnit != null && row >= 0 && row < GAME_CONFIG.rows && col >= 0 && col < GAME_CONFIG.cols)  {
          const cellTaken = battlefield.placedUnits.some(placed => placed.row === row && placed.col === col);
          if (!cellTaken && battlefield.curUnit !== null && row >= 0 && row < GAME_CONFIG.rows && col >= 0 && col < GAME_CONFIG.cols) {
          battlefield.placedUnits.push({
            row: row,
            col: col,
            unit: battlefield.curUnit
          });
        }
      }
    }

      if (p.mouseButton === p.RIGHT) {
        battlefield.curUnit = null;
      }
    }
    p.setup = () => {
      p.createCanvas(GAME_CONFIG.width, GAME_CONFIG.height);
      p.describe(
        "Energy collection prototype. Use the buttons above the canvas.",
      );
    };
    p.draw = () => {
      //p.background(220);
      view.update();

      

      p.clear(); //to redraw background

      p.image(battlefield.butterflyShop, 0, 0, 64, 64);
      p.image(battlefield.wormShop, 64, 0, 64, 64);
      p.image(battlefield.cocoonShop, 128, 0, 64, 64);

      const currentCol = Math.floor((p.mouseX - GAME_CONFIG.gridStartX) / GAME_CONFIG.cellWidth);
      const currentRow = Math.floor((p.mouseY - GAME_CONFIG.gridStartY) / GAME_CONFIG.cellHeight);

      for (const placed of battlefield.placedUnits) {

        const x = GAME_CONFIG.gridStartX +
            placed.col * GAME_CONFIG.cellWidth;

        const y = GAME_CONFIG.gridStartY +
            placed.row * GAME_CONFIG.cellHeight;

        if (placed.unit === "butterfly") {
          p.image(battlefield.butterfly, x, y,
          GAME_CONFIG.cellWidth,
          GAME_CONFIG.cellHeight);
        }
        else if (placed.unit === "worm") {
          p.image(battlefield.worm, x, y,
          GAME_CONFIG.cellWidth,
          GAME_CONFIG.cellHeight);
        }
        else if (placed.unit === "cocoon") {
        p.image(battlefield.cocoon, x, y,
        GAME_CONFIG.cellWidth,
        GAME_CONFIG.cellHeight);
        }
      }
      for (let row = 0; row < GAME_CONFIG.rows; row++) {
        for (let col = 0; col < GAME_CONFIG.cols; col++) {

          const x = GAME_CONFIG.gridStartX + col * GAME_CONFIG.cellWidth;
          const y = GAME_CONFIG.gridStartY + row * GAME_CONFIG.cellHeight;

          if (battlefield.curUnit != null && row === currentRow && col === currentCol) {
            p.tint(255, 150);

            if (battlefield.curUnit === "butterfly") {
              p.image(
                battlefield.butterfly,
                x,
                y,
                GAME_CONFIG.cellWidth,
                GAME_CONFIG.cellHeight
              );
            } else if (battlefield.curUnit === "worm") {
              p.image(
                battlefield.worm,
                x,
                y,
                GAME_CONFIG.cellWidth,
                GAME_CONFIG.cellHeight
              );
            } else if (battlefield.curUnit === "cocoon") {
              p.image(
                battlefield.cocoon,
                x,
                y,
                GAME_CONFIG.cellWidth,
                GAME_CONFIG.cellHeight
                );
            }

            p.noTint();
          }

          p.noStroke();
        }
      }

    };
  });
  const remove = game.remove.bind(game);
  game.remove = () => {
    view.destroy();
    remove();
  };
  return game;
}
