import { test, expect } from "@playwright/test";

for (const path of ["/", "/index-dev.html", "/dev/"]) {
  test(`${path} loads the sketch and runs the draw loop`, async ({ page }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
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
    expect(errors).toEqual([]);
  });
}
