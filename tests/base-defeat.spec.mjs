import { test, expect } from "@playwright/test";
import { ALIEN_TYPES } from "../src/aliens.js";
import { GAME_CONFIG } from "../src/config.js";

test("a base breach immediately ends the run and locks game controls", async ({
  page,
}) => {
  await page.clock.install();
  await page.goto("/");

  const canvas = page.locator("canvas");
  const status = page.getByRole("status").filter({ hasText: "Defeat" });
  const placeTower = page.getByRole("button", { name: /place economy tower/i });
  const balance = page.getByLabel("Energy balance");
  const readGame = async () => {
    const { game } = await import("/sketch.js");
    return { looping: game.isLooping(), frame: game.frameCount };
  };

  await expect(canvas).toBeVisible();
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
  // Alien speed is measured in pixels per frame at 60 frames per second.
  const pixelsPerSecond = ALIEN_TYPES.basic.speed * 60;
  const halfwayAcrossBoardMs =
    (GAME_CONFIG.boardWidth / 2 / pixelsPerSecond) * 1000;
  await page.clock.fastForward(Math.floor(halfwayAcrossBoardMs));
  await expect(status).toHaveCount(0);
  await expect(placeTower).toBeEnabled();

  // Select a tower before the breach so a later board click could spend Energy.
  await canvas.click({ position: { x: 90, y: 160 } });
  const previousBalance = await balance.textContent();
  // A full canvas width covers the remaining travel, including the spawn margin.
  const acrossCanvasMs = (GAME_CONFIG.width / pixelsPerSecond) * 1000;
  await page.clock.fastForward(Math.ceil(acrossCanvasMs));
  await expect(status).toHaveText(/alien breached the base/i);
  await expect(placeTower).toBeDisabled();
  const ended = await page.evaluate(readGame);
  expect(ended.looping).toBe(false);

  await canvas.click({
    position: { x: GAME_CONFIG.boardX + 10, y: GAME_CONFIG.boardY + 10 },
  });
  await page.clock.fastForward(1_000);
  await expect(balance).toHaveText(previousBalance);
  expect(await page.evaluate(readGame)).toEqual(ended);
});
