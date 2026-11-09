import { test, expect } from "@playwright/test";
import { createEnergySystem } from "../dev/src/energy.js";
import { ENERGY_CONFIG } from "../dev/src/config.js";

const economyTower = {
  name: "Economy tower",
  cost: 5,
  production: { intervalMs: 1000, amount: 10 },
};

test("affordability and shared spending never allow a negative balance", () => {
  const energy = createEnergySystem({ initialEnergy: 5 });
  expect(energy.canAfford(6)).toBe(false);
  expect(energy.trySpend(6)).toBe(false);
  expect(energy.getBalance()).toBe(5);
  expect(energy.trySpend(5)).toBe(true);
  expect(energy.getBalance()).toBe(0);
  expect(energy.trySpend(1)).toBe(false);
});

test("a placement deducts once and cannot be repeated with the same ID", () => {
  const energy = createEnergySystem({ initialEnergy: 10 });
  expect(energy.placeTower("tile-1", economyTower)).toBe(true);
  expect(energy.getBalance()).toBe(5);
  expect(energy.placeTower("tile-1", economyTower)).toBe(false);
  expect(energy.getBalance()).toBe(5);
  expect(energy.getTowers()).toHaveLength(1);
});

test("an unaffordable placement creates no tower and starts no timer", () => {
  const energy = createEnergySystem({ initialEnergy: 4 });
  expect(energy.placeTower("tile-1", economyTower)).toBe(false);
  expect(energy.getTowers()).toHaveLength(0);
  expect(energy.collect("tile-1")).toBe(false);
  expect(energy.getBalance()).toBe(4);
});

test("collection is ready at the boundary, pays once, and restarts from collection", () => {
  let time = 0;
  const energy = createEnergySystem({ initialEnergy: 10, now: () => time });
  energy.placeTower("tile-1", economyTower);
  time = 999;
  expect(energy.collect("tile-1")).toBe(false);
  expect(energy.getBalance()).toBe(5);
  time = 1000;
  expect(energy.getTowers()[0].ready).toBe(true);
  expect(energy.collect("tile-1")).toBe(true);
  expect(energy.collect("tile-1")).toBe(false);
  expect(energy.getBalance()).toBe(15);
  // Waiting several intervals does not accumulate uncollected payouts.
  time = 9000;
  expect(energy.collect("tile-1")).toBe(true);
  expect(energy.getBalance()).toBe(25);
  time = 9999;
  expect(energy.collect("tile-1")).toBe(false);
  time = 10000;
  expect(energy.collect("tile-1")).toBe(true);
});

test("each economy tower has its own cycle and collection enables spending", () => {
  let time = 0;
  const energy = createEnergySystem({ initialEnergy: 10, now: () => time });
  energy.placeTower("tile-1", economyTower);
  time = 500;
  energy.placeTower("tile-2", economyTower);
  expect(energy.canAfford(10)).toBe(false);
  time = 1000;
  expect(energy.collect("tile-2")).toBe(false);
  expect(energy.collect("tile-1")).toBe(true);
  expect(energy.canAfford(10)).toBe(true);
  expect(energy.placeTower("tile-3", { name: "Attacker", cost: 10 })).toBe(
    true,
  );
  expect(energy.getBalance()).toBe(0);
  expect(energy.collect("tile-3")).toBe(false);
  time = 1500;
  expect(energy.collect("tile-2")).toBe(true);
});

test("subscribers see balance changes immediately and can unsubscribe", () => {
  const energy = createEnergySystem({ initialEnergy: 10 });
  const balances = [];
  const unsubscribe = energy.subscribe(() =>
    balances.push(energy.getBalance()),
  );
  energy.trySpend(5);
  energy.addEnergy(10);
  expect(balances).toEqual([10, 5, 15]);
  unsubscribe();
  energy.trySpend(1);
  expect(balances).toEqual([10, 5, 15]);
});

test("invalid amounts and production settings cannot corrupt Energy", () => {
  const energy = createEnergySystem({ initialEnergy: 10 });
  for (const value of [-1, NaN, Infinity, 1.5]) {
    expect(() => energy.trySpend(value)).toThrow();
    expect(() => energy.addEnergy(value)).toThrow();
  }
  expect(() =>
    energy.placeTower("bad", {
      name: "Invalid",
      cost: 5,
      production: { intervalMs: 0, amount: 10 },
    }),
  ).toThrow();
  expect(energy.getBalance()).toBe(10);
  expect(energy.getTowers()).toHaveLength(0);
});

for (const path of ["/index-dev.html", "/dev/"]) {
  test(`${path} displays collection, affordability, and spending immediately`, async ({
    page,
  }) => {
    await page.clock.install();
    await page.goto(path);
    const { economyTower, demoTower } = ENERGY_CONFIG;
    const beforeCollection = Math.max(
      0,
      demoTower.cost - economyTower.production.amount,
    );
    const startingBalance = beforeCollection + economyTower.cost;
    const afterCollection = beforeCollection + economyTower.production.amount;
    const balance = page.getByLabel("Energy balance");
    await expect(balance).toHaveText(String(ENERGY_CONFIG.initialEnergy));
    // Exercise low funds independently of the configured starting loadout.
    await page.evaluate(async (targetBalance) => {
      const entry = globalThis.document.querySelector('script[type="module"]');
      const { energy } = await import(entry.src);
      const difference = energy.getBalance() - targetBalance;
      if (difference >= 0) energy.trySpend(difference);
      else energy.addEnergy(-difference);
    }, startingBalance);
    const economy = page.getByRole("button", {
      name: `Place ${economyTower.name.toLowerCase()} (${economyTower.cost} Energy)`,
      exact: true,
    });
    const demo = page.getByRole("button", {
      name: `Place ${demoTower.name.toLowerCase()} (${demoTower.cost} Energy)`,
      exact: true,
    });
    await expect(balance).toHaveText(String(startingBalance));
    await economy.click();
    await expect(balance).toHaveText(String(beforeCollection));
    await expect(demo).toBeDisabled();
    await expect(
      page.getByRole("button", { name: /Economy tower: ready in/ }),
    ).toBeDisabled();
    await page.clock.runFor(economyTower.production.intervalMs + 100);
    const collect = page.getByRole("button", {
      name: `Collect ${economyTower.production.amount} Energy`,
      exact: true,
    });
    await collect.click();
    await expect(balance).toHaveText(String(afterCollection));
    await expect(collect).toHaveCount(0);
    await expect(demo).toBeEnabled();
    await demo.click();
    await expect(balance).toHaveText(String(afterCollection - demoTower.cost));
    await expect(demo).toBeDisabled();
    await expect(economy).toBeDisabled();
  });
}
