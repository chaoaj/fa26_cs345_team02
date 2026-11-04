// Prototype defaults only. PBI-02 can supply the agreed starting balance later.
export const ENERGY_CONFIG = {
  initialEnergy: 10,
  economyTower: {
    name: "Economy tower",
    cost: 5,
    production: { intervalMs: 5000, amount: 10 },
  },
  demoTower: { name: "Demo tower", cost: 15 },
};
