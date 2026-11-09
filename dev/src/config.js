export const ENERGY_CONFIG = {
  initialEnergy: 300,
  economyTower: {
    name: "Economy tower",
    cost: 5,
    production: { intervalMs: 5000, amount: 1 },
  },
  demoTower: { name: "Demo tower", cost: 15 },
};

export const GAME_CONFIG = {
  sidebarWidth: 180,
  boardX: 180 + 331 * (1372 / 1552),
  boardY: 201,
  boardWidth: 980,
  boardHeight: 490,
  width: 1552,
  height: 770,
  rows: 5,
  cols: 10,
};
