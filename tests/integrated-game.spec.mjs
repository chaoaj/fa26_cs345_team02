import { test, expect } from "@playwright/test";

for (const path of ["/", "/index-dev.html", "/dev/"]) {
  test(`${path} integrates the sidebar, grid, and one Energy balance`, async ({
    page,
  }) => {
    await page.clock.install();
    await page.goto(path);
    const canvas = page.locator("canvas");
    const balance = page.getByLabel("Energy balance");
    await expect(canvas).toBeVisible();
    await expect(balance).toHaveText("300");
    // Wait for the actual sidebar artwork before interacting with the canvas.
    await expect
      .poll(() =>
        canvas.evaluate((element) => {
          const scale = element.width / 1376;
          return Array.from(
            element.getContext("2d").getImageData(40 * scale, 160 * scale, 1, 1)
              .data,
          );
        }),
      )
      .toEqual([215, 215, 165, 255]);

    // Starting-loadout's board geometry is retained, with all three roles.
    const boardX = 180 + 325 * (1196 / 1376);
    const tileWidth = (715 * (1196 / 1376)) / 10;
    const tileY = 250 + 365 / 10;
    await canvas.click({ position: { x: 90, y: 160 } });
    await canvas.click({ position: { x: boardX + tileWidth / 2, y: tileY } });
    await expect(balance).toHaveText("295");

    // Occupied and outside tiles must never spend Energy.
    await canvas.click({ position: { x: 90, y: 160 } });
    await canvas.click({ position: { x: boardX + tileWidth / 2, y: tileY } });
    await canvas.click({ position: { x: boardX - 1, y: tileY } });
    await expect(balance).toHaveText("295");

    // Place an economy tower, then collect only once after its interval.
    await canvas.click({ position: { x: 90, y: 390 } });
    const economyTile = { x: boardX + tileWidth * 1.5, y: tileY };
    await canvas.click({ position: economyTile });
    await expect(balance).toHaveText("290");
    await canvas.click({ position: economyTile });
    await expect(balance).toHaveText("290");
    await page.clock.runFor(5100);
    await canvas.click({ position: economyTile });
    await expect(balance).toHaveText("300");
    await canvas.click({ position: economyTile });
    await expect(balance).toHaveText("300");

    await canvas.click({ position: { x: 90, y: 275 } });
    await canvas.click({ position: { x: boardX + tileWidth * 2.5, y: tileY } });
    await expect(balance).toHaveText("295");
  });
}
