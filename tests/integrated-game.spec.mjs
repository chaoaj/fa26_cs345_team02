import { test, expect } from "@playwright/test";
import * as productionSettings from "../src/config.js";
import * as developmentSettings from "../dev/src/config.js";
import { TOWER_TYPES as productionTowers } from "../src/towers.js";
import { TOWER_TYPES as developmentTowers } from "../dev/src/towers.js";

for (const path of ["/", "/index-dev.html", "/dev/"]) {
  test(`${path} integrates the sidebar, grid, and one Energy balance`, async ({
    page,
  }) => {
    const { ENERGY_CONFIG, GAME_CONFIG } =
      path === "/" ? productionSettings : developmentSettings;
    const towers = path === "/" ? productionTowers : developmentTowers;
    let expectedBalance = ENERGY_CONFIG.initialEnergy;
    await page.clock.install();
    await page.goto(path);
    const canvas = page.locator("canvas");
    const balance = page.getByLabel("Energy balance");
    await expect(canvas).toBeVisible();
    await expect(balance).toHaveText(String(expectedBalance));
    // Wait for the actual sidebar artwork before interacting with the canvas.
    await expect
      .poll(() =>
        canvas.evaluate((element, width) => {
          const scale = element.width / width;
          return Array.from(
            element.getContext("2d").getImageData(40 * scale, 160 * scale, 1, 1)
              .data,
          );
        }, GAME_CONFIG.width),
      )
      .toEqual([215, 215, 165, 255]);

    const { boardX, boardY, boardWidth, boardHeight, rows, cols } = GAME_CONFIG;
    const tileWidth = boardWidth / cols;
    const tileY = boardY + boardHeight / rows / 2;
    await canvas.click({ position: { x: 90, y: 160 } });
    await canvas.click({ position: { x: boardX + tileWidth / 2, y: tileY } });
    expectedBalance -= towers.butterfly.cost;
    await expect(balance).toHaveText(String(expectedBalance));

    // Occupied and outside tiles must never spend Energy.
    await canvas.click({ position: { x: 90, y: 160 } });
    await canvas.click({ position: { x: boardX + tileWidth / 2, y: tileY } });
    await canvas.click({ position: { x: boardX - 1, y: tileY } });
    await expect(balance).toHaveText(String(expectedBalance));

    // Place an economy tower, then collect only once after its interval.
    await canvas.click({ position: { x: 90, y: 390 } });
    const economyTile = { x: boardX + tileWidth * 1.5, y: tileY };
    await canvas.click({ position: economyTile });
    expectedBalance -= towers.worm.cost;
    await expect(balance).toHaveText(String(expectedBalance));
    await canvas.click({ position: economyTile });
    await expect(balance).toHaveText(String(expectedBalance));
    await page.clock.runFor(towers.worm.production.intervalMs + 100);
    await canvas.click({ position: economyTile });
    expectedBalance += towers.worm.production.amount;
    await expect(balance).toHaveText(String(expectedBalance));
    await canvas.click({ position: economyTile });
    await expect(balance).toHaveText(String(expectedBalance));

    await canvas.click({ position: { x: 90, y: 275 } });
    await canvas.click({ position: { x: boardX + tileWidth * 2.5, y: tileY } });
    expectedBalance -= towers.cocoon.cost;
    await expect(balance).toHaveText(String(expectedBalance));
  });
}
