import { test, expect } from "@playwright/test";

for (const path of ["/", "/index-dev.html", "/dev/"]) {
  test(`${path} loads the sketch and runs the draw loop`, async ({ page }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
      if (message.text().includes("Multiple readback operations")) {
        errors.push(message.text());
      }
    });
    page.on("requestfailed", (request) => {
      errors.push(`${request.url()}: ${request.failure()?.errorText}`);
    });
    page.on("response", (response) => {
      if (response.status() >= 400) {
        errors.push(`${response.status()} ${response.url()}`);
      }
    });

    const response = await page.goto(path);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("canvas")).toBeVisible();
    await page.waitForFunction(async () => {
      const entry = globalThis.document.querySelector('script[type="module"]');
      const { game } = await import(entry.src);
      return game.frameCount >= 3;
    });
    // Running frames alone cannot detect a blank green battlefield.
    await expect
      .poll(() =>
        page.locator("canvas").evaluate((canvas) => {
          const context = canvas.getContext("2d");
          const colors = new Set();
          for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 15; col++) {
              const pixel = context.getImageData(
                Math.floor(canvas.width * (0.22 + col * 0.04)),
                Math.floor(canvas.height * (0.14 + row * 0.07)),
                1,
                1,
              ).data;
              colors.add(`${pixel[0]},${pixel[1]},${pixel[2]}`);
            }
          }
          return colors.size;
        }),
      )
      .toBeGreaterThan(20);
    expect(errors).toEqual([]);
  });
}
