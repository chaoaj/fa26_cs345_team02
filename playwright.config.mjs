import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://127.0.0.1:8081",
    // CI uses preinstalled Chrome; local runs keep the project-local Chromium.
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "http-server . -a 127.0.0.1 -p 8081 -c-1",
    url: "http://127.0.0.1:8081",
    reuseExistingServer: false,
  },
});
