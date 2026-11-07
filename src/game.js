import { ENERGY_CONFIG, GAME_CONFIG } from "./config.js";
import { createEnergySystem } from "./energy.js";
import { createEnergyView } from "./energy-view.js";
import { createBattlefieldLayout } from "./battlefield-layout.js";
import { TOWER_TYPES } from "./towers.js";
import { createSellButton } from "./sellbutton.js";

export function createGame(
  energy = createEnergySystem({
    initialEnergy: ENERGY_CONFIG.initialEnergy,
  }),
) {
  const view = createEnergyView(energy);
  const battlefield = createBattlefieldLayout();
  const sellButton = createSellButton();
  const sprites = {};
  let backgroundImg;
  let imageError = "";
  const sidebarWidth = 180;
  const boardX = sidebarWidth + 325 * (1196 / 1376);
  const boardY = 250;
  const boardWidth = 715 * (1196 / 1376);
  const boardHeight = 365;
  const tileWidth = boardWidth / GAME_CONFIG.cols;
  const tileHeight = boardHeight / GAME_CONFIG.rows;
  const choices = Object.entries(TOWER_TYPES);

  const game = new window.p5((p) => {
    function loadImages() {
      p.loadImage(
        new URL("../images/background/bugalienbackdrop.png", import.meta.url)
          .href,
        (image) => {
          backgroundImg = image;
        },
        imageLoadFailed,
      );
      for (const [type, definition] of choices) {
        p.loadImage(
          new URL("../images/bugs/" + definition.sprite, import.meta.url).href,
          (image) => {
            sprites[type] = image;
          },
          imageLoadFailed,
        );
      }
      p.loadImage(
        new URL("../images/symbols/sellbutton.png", import.meta.url).href,
        (image) => {
          sellButton.setImage(image);
        },
        imageLoadFailed,
      );
      p.loadImage(
        new URL("../images/symbols/sellbutton-dark.png", import.meta.url).href,
        (image) => {
          sellButton.setActiveImage(image);
        },
        imageLoadFailed,
      );
    }

    function imageLoadFailed() {
      imageError = "Could not load battlefield artwork. Refresh to try again.";
    }

    function imagesReady() {
      return Boolean(backgroundImg) && choices.every(([type]) => sprites[type]);
    }

    p.setup = () => {
      p.createCanvas(GAME_CONFIG.width, GAME_CONFIG.height);
      p.imageMode(p.CENTER);
      loadImages();
      p.describe(
        "Five lanes and ten columns. Select a tower in the sidebar, then click an empty tile. Click a ready economy tower to collect Energy.",
      );
    };

    p.draw = () => {
      p.background(25, 65, 40);
      view.update();
      if (!imagesReady()) {
        p.push();
        p.fill(255);
        p.noStroke();
        p.textSize(20);
        p.textAlign(p.LEFT, p.TOP);
        p.text(imageError || "Loading battlefield…", 24, 24);
        p.pop();
        return;
      }
      p.image(
        backgroundImg,
        sidebarWidth + (p.width - sidebarWidth) / 2,
        p.height / 2,
        p.width - sidebarWidth,
        p.height,
      );
      drawSidebar();
      drawPlacedTowers();
      drawPreview();
      drawSellButton();
    };

    function drawSidebar() {
      p.noStroke();
      p.fill(25, 65, 40);
      p.rect(0, 0, sidebarWidth, p.height);
      p.stroke(100, 150, 90);
      p.strokeWeight(3);
      p.line(sidebarWidth, 0, sidebarWidth, p.height);
      p.noStroke();
      p.fill(255, 220, 60);
      p.circle(35, 40, 30);
      p.fill(255);
      p.textSize(19);
      p.textAlign(p.LEFT, p.CENTER);
      p.text(energy.getBalance(), 60, 40);
      choices.forEach(([type, definition], index) => {
        const y = 160 + index * 115;
        p.push();
        p.rectMode(p.CENTER);
        p.stroke(battlefield.curUnit === type ? "#ffdc32" : "#829664");
        p.strokeWeight(battlefield.curUnit === type ? 4 : 2);
        p.fill(energy.canAfford(definition.cost) ? "#d7d7a5" : "#8a9276");
        p.rect(90, y, 110, 95, 10);
        p.image(sprites[type], 90, y - 10, 55, 55);
        p.noStroke();
        p.fill(35);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(14);
        p.text(definition.name, 90, y + 24);
        p.text(definition.cost + " Energy", 90, y + 41);
        p.pop();
      });
    }

    function drawPlacedTowers() {
      const readiness = new Map(
        energy.getTowers().map((tower) => [tower.id, tower.ready]),
      );
      for (const tower of battlefield.placedUnits) {
        const x = boardX + tower.col * tileWidth + tileWidth / 2;
        const y = boardY + tower.row * tileHeight + tileHeight / 2;
        p.image(sprites[tower.type], x, y, 60, 60);
        if (readiness.get(tower.id)) {
          p.noFill();
          p.stroke(255, 220, 60);
          p.strokeWeight(3);
          p.circle(x, y, 64);
        }
      }
    }

    function drawPreview() {
      const col = Math.floor((p.mouseX - boardX) / tileWidth);
      const row = Math.floor((p.mouseY - boardY) / tileHeight);
      if (
        battlefield.curUnit === null ||
        col < 0 ||
        col >= GAME_CONFIG.cols ||
        row < 0 ||
        row >= GAME_CONFIG.rows
      )
        return;
      p.push();
      p.tint(255, 150);
      p.image(
        sprites[battlefield.curUnit],
        boardX + col * tileWidth + tileWidth / 2,
        boardY + row * tileHeight + tileHeight / 2,
        60,
        60,
      );
      p.pop();
    }

    function drawSellButton() {
      // Draw the large button
      if (sellButton.isSellingMode() && sellButton.getActiveImage()) {
        p.image(sellButton.getActiveImage(), p.width - 45, 45, 70, 70);
      } else if (sellButton.getImage()) {
        p.image(sellButton.getImage(), p.width - 45, 45, 70, 70);
      }

      // Draw the small cursor icon
      if (sellButton.isSellingMode() && sellButton.getActiveImage()) {
        p.image(
          sellButton.getActiveImage(),
          p.mouseX + 18,
          p.mouseY + 18,
          25,
          25,
        );
      }
    }

    p.mousePressed = () => {
      if (!imagesReady()) return;

      // Check if sell button was clicked
      if (p.mouseButton === p.LEFT && checkSellButtonClick()) {
        sellButton.toggleSellingMode();
        return;
      }

      // Right-click cancels selling mode
      if (p.mouseButton === p.RIGHT) {
        sellButton.cancelSellingMode();
        battlefield.curUnit = null;
        return;
      }

      if (p.mouseButton !== p.LEFT) return;

      // Handle selling towers
      if (sellButton.isSellingMode()) {
        const col = Math.floor((p.mouseX - boardX) / tileWidth);
        const row = Math.floor((p.mouseY - boardY) / tileHeight);

        if (
          col < 0 ||
          col >= GAME_CONFIG.cols ||
          row < 0 ||
          row >= GAME_CONFIG.rows
        )
          return;

        const index = battlefield.placedUnits.findIndex(
          (tower) => tower.row === row && tower.col === col,
        );

        if (index === -1) return;

        const tower = battlefield.placedUnits[index];

        // Calculate 50% refund, rounded down
        const refund = Math.floor(TOWER_TYPES[tower.type].cost * 0.5);

        if (energy.removeTower(tower.id)) {
          energy.addEnergy(refund);
          battlefield.placedUnits.splice(index, 1);
          sellButton.cancelSellingMode();
        }

        return;
      }

      // DOM controls are handled by their own click listeners.
      if (
        p.mouseX < 0 ||
        p.mouseX >= p.width ||
        p.mouseY < 0 ||
        p.mouseY >= p.height
      )
        return;
      if (p.mouseButton === p.RIGHT) {
        battlefield.curUnit = null;
        return;
      }
      if (p.mouseButton !== p.LEFT) return;
      for (let index = 0; index < choices.length; index++) {
        const [type, definition] = choices[index];
        const cardY = 160 + index * 115;
        if (
          p.mouseX >= 35 &&
          p.mouseX <= 145 &&
          p.mouseY >= cardY - 47.5 &&
          p.mouseY <= cardY + 47.5
        ) {
          if (energy.canAfford(definition.cost)) battlefield.curUnit = type;
          return;
        }
      }
      const col = Math.floor((p.mouseX - boardX) / tileWidth);
      const row = Math.floor((p.mouseY - boardY) / tileHeight);
      if (
        col < 0 ||
        col >= GAME_CONFIG.cols ||
        row < 0 ||
        row >= GAME_CONFIG.rows
      )
        return;
      const id = "tile-" + row + "-" + col;
      const occupied = battlefield.placedUnits.some((tower) => tower.id === id);
      if (occupied) {
        energy.collect(id);
        return;
      }
      if (battlefield.curUnit === null) return;
      const type = battlefield.curUnit;
      if (energy.placeTower(id, TOWER_TYPES[type])) {
        battlefield.placedUnits.push({ id, row, col, type });
        battlefield.curUnit = null;
      }

      function checkSellButtonClick() {
        return (
          p.mouseX >= p.width - 80 &&
          p.mouseX <= p.width - 10 &&
          p.mouseY >= 10 &&
          p.mouseY <= 80
        );
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
