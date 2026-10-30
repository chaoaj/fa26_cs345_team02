//import { GAME_CONFIG } from "./config.js";

export function createGame() {
  return new window.p5((p) => {
    /** @type {any} */
    let backgroundImg;

    /** @type {any} */
    let butterflyImg;

    /** @type {any} */
    let wormImg;

    let energy = 300;
    const towerCost = 100;
    /** @type {string | null} */
    let selectedTower = null;

    // Approximate boundaries of the soil grid in the background
    const sidebarWidth = 180;

    const boardY = 250;
    const boardWidth = 715 * (1196 / 1376);
    const boardHeight = 365;

    const boardX = sidebarWidth + 325 * (1196 / 1376);

    const cols = 10;
    const rows = 5;
    const tileWidth = boardWidth / cols;
    const tileHeight = boardHeight / rows;

    /** @type {{row: number, col: number, type: string}[]} */
    const towers = [];

    p.preload = () => {
      backgroundImg = p.loadImage("/libraries/game_background.png");
      butterflyImg = p.loadImage("/libraries/butterfly.gif");
      wormImg = p.loadImage("/libraries/Worm.gif");
    };

    p.setup = () => {
      p.createCanvas(1376, 774);
      p.imageMode(p.CENTER);
    };

    p.draw = () => {
      p.background(25, 65, 40);

      // Draw background on the right
      p.image(
        backgroundImg,
        sidebarWidth + (p.width - sidebarWidth) / 2,
        p.height / 2,
        p.width - sidebarWidth,
        p.height,
      );

      drawSidebar();
      drawPlacedTowers();

      // DEBUG: Show placement boundaries
      //p.noFill();
      //p.stroke(255, 0, 0);
      //p.strokeWeight(3);
      //p.rect(boardX, boardY, boardWidth, boardHeight);
    };

    function drawSidebar() {
      // Sidebar background
      p.noStroke();
      p.fill(25, 65, 40);
      p.rect(0, 0, sidebarWidth, p.height);

      // Sidebar divider
      p.stroke(100, 150, 90);
      p.strokeWeight(3);
      p.line(sidebarWidth, 0, sidebarWidth, p.height);

      // Energy display
      p.noStroke();
      p.fill(255, 220, 60);
      p.circle(35, 40, 30);

      p.fill(255);
      p.textSize(19);
      p.textAlign(p.LEFT, p.CENTER);
      p.text(energy, 60, 40);

      // Tower card backgrounds
      drawTowerCard(90, 160, butterflyImg, "butterfly");
      drawTowerCard(90, 275, wormImg, "worm");
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {any} img
     * @param {string | null} type
     */
    function drawTowerCard(x, y, img, type) {
      p.push();

      // Highlight selected tower
      if (selectedTower === type) {
        p.stroke(255, 220, 50);
        p.strokeWeight(4);
      } else {
        p.stroke(130, 150, 100);
        p.strokeWeight(2);
      }

      p.fill(215, 215, 165);
      p.rectMode(p.CENTER);
      p.rect(x, y, 110, 95, 10);

      // Character sprite
      p.image(img, x, y - 10, 55, 55);

      // Tower cost
      p.noStroke();
      p.fill(35);
      p.textAlign(p.CENTER, p.CENTER);
      p.textSize(16);
      p.text("100 ☀", x, y + 33);

      p.pop();
    }

    function drawPlacedTowers() {
      for (let i = 0; i < towers.length; i++) {
        const tower = towers[i];

        const x = boardX + tower.col * tileWidth + tileWidth / 2;
        const y = boardY + tower.row * tileHeight + tileHeight / 2;

        const img = tower.type === "butterfly" ? butterflyImg : wormImg;

        p.image(img, x, y, 60, 60);
      }
    }

    p.mousePressed = () => {
      // Select butterfly
      if (
        p.mouseX >= 35 &&
        p.mouseX <= 145 &&
        p.mouseY >= 112 &&
        p.mouseY <= 208
      ) {
        if (energy >= towerCost) {
          selectedTower = "butterfly";
        }
        return;
      }

      // Select worm
      if (
        p.mouseX >= 35 &&
        p.mouseX <= 145 &&
        p.mouseY >= 227 &&
        p.mouseY <= 323
      ) {
        if (energy >= towerCost) {
          selectedTower = "worm";
        }
        return;
      }

      // Place selected character on the soil grid
      if (
        selectedTower !== null &&
        p.mouseX >= boardX &&
        p.mouseX < boardX + boardWidth &&
        p.mouseY >= boardY &&
        p.mouseY < boardY + boardHeight
      ) {
        const col = Math.floor((p.mouseX - boardX) / tileWidth);
        const row = Math.floor((p.mouseY - boardY) / tileHeight);

        let occupied = false;

        for (let i = 0; i < towers.length; i++) {
          if (towers[i].row === row && towers[i].col === col) {
            occupied = true;
            break;
          }
        }

        if (!occupied && energy >= towerCost) {
          towers.push({
            row: row,
            col: col,
            type: selectedTower,
          });

          energy -= towerCost;
          selectedTower = null;
        }
      }
    };
  });
}
