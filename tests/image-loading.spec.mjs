import { test, expect } from "@playwright/test";

for (const path of ["/", "/index-dev.html", "/dev/"]) {
  test(`${path} keeps drawing while artwork loads, then displays the battlefield`, async ({
    page,
  }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    let releaseImages;
    const imagesHeld = new Promise((resolve) => {
      releaseImages = resolve;
    });
    await page.route("**/images/**", async (route) => {
      await imagesHeld;
      await route.continue();
    });

    try {
      await page.goto(path, { waitUntil: "domcontentloaded" });
      await expect(page.locator("canvas")).toBeVisible();
      // The draw loop must survive even when all four images are unavailable.
      await page.waitForFunction(async () => {
        const entry = globalThis.document.querySelector(
          'script[type="module"]',
        );
        const { game } = await import(entry.src);
        return game.frameCount >= 3;
      });
      expect(errors).toEqual([]);
      releaseImages();
      await expect
        .poll(() =>
          page.locator("canvas").evaluate((canvas) => {
            const scale = canvas.width / 1376;
            const pixel = canvas
              .getContext("2d")
              .getImageData(600 * scale, 350 * scale, 1, 1).data;
            return Array.from(pixel);
          }),
        )
        .not.toEqual([25, 65, 40, 255]);
      expect(errors).toEqual([]);
    } finally {
      releaseImages();
      await page.unrouteAll({ behavior: "wait" });
    }
  });
}
