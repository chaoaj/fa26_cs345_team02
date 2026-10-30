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

export const GAME_CONFIG = {
  width: 1920,
  height: 1080,

  rows: 5,
  cols: 10,

  cellWidth: 130,
  cellHeight: 125,

  gridStartX: 330,
  gridStartY: 320
};

export const SHOP_CONFIG = {
  butterflyCost: 50,
  wormCost: 75,
  cocoonCost: 100,
  width: 256,
  height: 64,
}
