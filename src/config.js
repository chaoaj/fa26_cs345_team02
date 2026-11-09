export const ENERGY_CONFIG = {
  initialEnergy: 300,
  economyTower: {
    name: "Economy tower",
    cost: 5,
    production: { intervalMs: 5000, amount: 10 },
  },
  demoTower: { name: "Demo tower", cost: 15 },
};

export const GAME_CONFIG = {
  sidebarWidth: 180,
  boardX: 180 + 325 * (1196 / 1376),
  boardY: 250,
  boardWidth: 715 * (1196 / 1376),
  boardHeight: 365,
  width: 1376,
  height: 774,
  rows: 5,
  cols: 10,
};
