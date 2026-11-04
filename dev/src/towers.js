// BASIC TOWER CLASSES

// Attacker
const BASIC_ATTACKER_NAME = ""; // replace with real tower name
const BASIC_ATTACKER_SPRITE = ""; // replace with sprite file
const BASIC_ATTACKER_DESCRIPTION =
  "A basic offensive tower that shoots projectiles at incoming enemies.";

const BASIC_ATTACKER_ENERGY_COST_BASE = 5; // the starting energy cost
let basicAttackerEnergyCostLevel = 0; // the "level" of the energy cost stat, which you can level up with Gold at the end of a round
let basicAttackerEnergyCost =
  BASIC_ATTACKER_ENERGY_COST_BASE - basicAttackerEnergyCostLevel; // the actual energy cost which gets reduced with each level

const BASIC_ATTACKER_DURABILITY_BASE = 3; // the base durability
let basicAttackerDurabilityLevel = 0; // the level of the durability stat

const BASIC_ATTACKER_PROJECTILE_DAMAGE_BASE = 1; // the base damage of the projectile
let basicAttackerProjectileDamageLevel = 0;

const BASIC_ATTACKER_PROJECTILE_SPEED_BASE = 1; //the base speed of the projectile
let basicAttackerProjectileSpeedLevel = 0;

const BASIC_ATTACKER_PROJECTILE_FIRE_RATE_BASE = 1; //the base fire rate of the projectile
let basicAttackerProjectileFireRateLevel = 0;

// placed attacker
/**
 * @param {number} durabilityLevel
 * @param {number} damageLevel
 * @param {number} speedLevel
 * @param {number} fireRateLevel
 */
function newBasicAttacker(
  durabilityLevel,
  damageLevel,
  speedLevel,
  fireRateLevel,
) {
  let basicAttackerDurability =
    BASIC_ATTACKER_DURABILITY_BASE + durabilityLevel;

  let basicAttackerProjectileDamage =
    BASIC_ATTACKER_PROJECTILE_DAMAGE_BASE + damageLevel;

  let basicAttackerProjectileSpeed =
    BASIC_ATTACKER_PROJECTILE_SPEED_BASE + speedLevel;

  let basicAttackerProjectileFireRate =
    BASIC_ATTACKER_PROJECTILE_FIRE_RATE_BASE + fireRateLevel;
}

// Blocker
const BASIC_BLOCKER_NAME = ""; // replace with real tower name
const BASIC_BLOCKER_SPRITE = ""; // replace with sprite file
const BASIC_BLOCKER_DESCRIPTION =
  "A basic defensive tower that stops enemies in their tracks.";

const BASIC_BLOCKER_ENERGY_COST_BASE = 5; // the starting energy cost
let basicBlockerEnergyCostLevel = 0; // the "level" of the energy cost stat, which you can level up with Gold at the end of a round
let basicBlockerEnergyCost =
  BASIC_BLOCKER_ENERGY_COST_BASE - basicBlockerEnergyCostLevel; // the actual energy cost which gets reduced with each level

const BASIC_BLOCKER_DURABILITY_BASE = 10; // the base durability
let basicBlockerDurabilityLevel = 0;

// placed blocker
/**
 * @param {number} durabilityLevel
 */
function newBasicBlocker(durabilityLevel) {
  let basicBlockerDurability = BASIC_BLOCKER_DURABILITY_BASE + durabilityLevel;
}

// Economy
const BASIC_ECO_NAME = ""; // replace with real tower name
const BASIC_ECO_SPRITE = ""; // replace with sprite file
const BASIC_ECO_DESCRIPTION =
  "Generates energy that you can use to place more towers.";

const BASIC_ECO_ENERGY_COST_BASE = 5; // the starting energy cost
let basicEcoEnergyCostLevel = 0; // the "level" of the energy cost stat, which you can level up with Gold at the end of a round
let basicEcoEnergyCost = BASIC_ECO_ENERGY_COST_BASE - basicEcoEnergyCostLevel; // the actual energy cost which gets reduced with each level

const BASIC_ECO_DURABILITY_BASE = 2; // the base durability
let basicEcoDurabilityLevel = 0;

const BASIC_ECO_GEN_RATE_BASE = 10; // the base rate of energy generation
let basicEcoGenRateLevel = 0;
let basicEcoGenRate = BASIC_ECO_GEN_RATE_BASE - basicEcoGenRateLevel;

// placed economy
/**
 * @param {number} durabilityLevel
 */
function newBasicEconomy(durabilityLevel) {
  let basicEcoDurability = BASIC_ECO_DURABILITY_BASE + durabilityLevel;
}
