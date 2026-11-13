export const ALIEN_TYPES = {
  basic: {
    name: "Basic Alien",
    sprite: "alien.gif",
    durability: 10,
    damage: 1,
    speed: 1,
    attackInterval: 1000,
    goldReward: 5,
  },
};

let nextAlienId = 1;

export function newBasicAlien(
  lane,
  x,
  y,
  durabilityLevel = 0,
  damageLevel = 0,
  speedLevel = 0,
) {
  const base = ALIEN_TYPES.basic;
  const maxHealth = base.durability + durabilityLevel;

  return {
    id: "alien-" + nextAlienId++,
    name: base.name,
    sprite: base.sprite,

    lane,
    x,
    y,

    maxHealth,
    health: maxHealth,
    damage: base.damage + damageLevel,
    speed: base.speed + speedLevel,
    attackInterval: base.attackInterval,
    goldReward: base.goldReward,

    defeated: false,

    update(deltaTime) {
      if (this.defeated) return;

      this.x -= this.speed * (deltaTime / (1000 / 60));
    },

    takeDamage(amount) {
      if (this.defeated || !Number.isFinite(amount) || amount <= 0) {
        return false;
      }

      this.health = Math.max(0, this.health - amount);

      if (this.health === 0) {
        this.defeated = true;
        return true;
      }

      return false;
    },
  };
}
