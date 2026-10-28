// BASIC TOWER CLASSES

// Attacker
const BASIC_ATTACKER_NAME = ""; // replace with real tower name
const BASIC_ATTACKER_SPRITE = "" // replace with sprite file

const BASIC_ATTACKER_ENERGY_COST_BASE = 5; // the starting energy cost
let basicAttackerEnergyCostLevel = 0; // the "level" of the energy cost stat, which you can level up with Gold at the end of a round
let basicAttackerEnergyCost = BASIC_ATTACKER_ENERGY_COST_BASE - basicAttackerEnergyCostLevel; // the actual energy cost which gets reduced with each level

const BASIC_ATTACKER_DURABILITY_BASE = 3; // the base durability
let basicAttackerDurabilityLevel = 0; // the level of the durability stat
let basicAttackerDurability = BASIC_ATTACKER_DURABILITY_BASE + basicAttackerDurabilityLevel; // the actual durability

const BASIC_ATTACKER_PROJECTILE_DAMAGE_BASE = 1; // the base damage of the projectile
let basicAttackerProjectileDamageLevel = 0;
let basicAttackerProjectileDamage = BASIC_ATTACKER_PROJECTILE_DAMAGE_BASE + basicAttackerProjectileDamageLevel;

const BASIC_ATTACKER_PROJECTILE_SPEED_BASE = 1; //the base speed of the projectile
let basicAttackerProjectileSpeedLevel = 0;
let basicAttackerProjectileSpeed = BASIC_ATTACKER_PROJECTILE_SPEED_BASE + basicAttackerProjectileSpeedLevel;

const BASIC_ATTACKER_PROJECTILE_FIRERATE_BASE = 1; //the base firerate of the projectile
let basicAttackerProjectileFireRateLevel = 0;
let basicAttackerProjectileFireRate = BASIC_ATTACKER_PROJECTILE_FIRERATE_BASE + basicAttackerProjectileFireRateLevel;

// Blocker
const BASIC_BLOCKER_DURABILITY_BASE = 10; // the base durability
let basicBlockerDurabilityLevel = 0;
let basicBlockerDurability = BASIC_BLOCKER_DURABILITY_BASE + basicBlockerDurabilityLevel;

// Economy
const BASIC_ECO_DURABILITY_BASE = 2; // the base durability
let basicEcoDurabilityLevel = 0;
let basicEcoDurability = BASIC_ECO_DURABILITY_BASE + basicEcoDurabilityLevel;

const BASIC_ECO_GEN_RATE_BASE = 10; // the base rate of energy generation
let basicEcoGenRateLevel = 0;
let basicEcoGenRate = BASIC_ECO_GEN_RATE_BASE - basicEcoGenRateLevel;