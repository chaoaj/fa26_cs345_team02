import { createGame } from "./src/game.js";
import { createEnergySystem } from "./src/energy.js";
import { ENERGY_CONFIG } from "./src/config.js";

export const energy = createEnergySystem({
  initialEnergy: ENERGY_CONFIG.initialEnergy,
});
export const game = createGame(energy);
