// The three basic roles from basictowers, with the artwork from battlefieldlayout.
import { ENERGY_CONFIG } from "./config.js";

export const TOWER_TYPES = {
  butterfly: {
    name: "Attacker",
    cost: 5,
    sprite: "butterfly.gif",
    durability: 3,
    projectileDamage: 1,
    projectileSpeed: 1,
    projectileFireRate: 1,
  },
  cocoon: {
    name: "Blocker",
    cost: 5,
    sprite: "cacoon.png",
    durability: 10,
  },
  worm: {
    ...ENERGY_CONFIG.economyTower,
    sprite: "worm.gif",
    durability: 2,
  },
};

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
    projectileFireRate: base.projectileFireRate + fireRateLevel,
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
