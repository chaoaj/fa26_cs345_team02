// The three basic roles from basictowers, with the artwork from battlefieldlayout.
import { ENERGY_CONFIG } from "./config.js";

export const TOWER_TYPES = {
  butterfly: {
    name: "Attacker",
    cost: 5,
    sprite: "butterfly.gif",
    durability: 3,
    projectileDamage: 1,
    projectileSpeed: 5,
    projectileFireRate: { intervalMs: 2500},
  },
  cocoon: {
    name: "Blocker",
    cost: 5,
    sprite: "cocoon.png",
    durability: 10,
  },
  worm: {
    ...ENERGY_CONFIG.economyTower,
    sprite: "worm.gif",
    durability: 2,
  },
};

// Placeholder balance values
const FIRE_INTERVAL_STEP_MS = 250;
const MIN_FIRE_INTERVAL_MS = 250;

// Existing constructor names are retained for teammates adding combat later.
export function newBasicAttacker(
  durabilityLevel = 0,
  damageLevel = 0,
  speedLevel = 0,
  fireRateLevel = 0,
) {
  const base = TOWER_TYPES.butterfly;
  return {
    ...base,
    durability: base.durability + durabilityLevel,
    projectileDamage: base.projectileDamage + damageLevel,
    projectileSpeed: base.projectileSpeed + speedLevel,
    projectileFireRate: {
      ...base.projectileFireRate,
      intervalMs: Math.max(
        MIN_FIRE_INTERVAL_MS,
        base.projectileFireRate.intervalMs -
          fireRateLevel * FIRE_INTERVAL_STEP_MS,
      ),
    },
  };
}

export function newBasicBlocker(durabilityLevel = 0) {
  return {
    ...TOWER_TYPES.cocoon,
    durability: TOWER_TYPES.cocoon.durability + durabilityLevel,
  };
}

export function newBasicEconomy(durabilityLevel = 0) {
  return {
    ...TOWER_TYPES.worm,
    production: { ...TOWER_TYPES.worm.production },
    durability: TOWER_TYPES.worm.durability + durabilityLevel,
  };
}
