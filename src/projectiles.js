// Auto-fire attacks. Attackers fire on their own timer; projectiles travel
// along one lane and damage the first alien they reach.
//
// This file has no p5 or DOM code, so tests can import it directly.

// aliens.js moves things by "speed per frame at 60 FPS"; projectiles match it.
const FRAME_MS = 1000 / 60;
// Roughly half of the 45px alien sprite.
const HIT_RADIUS = 22;

export function newProjectile({ lane, x, y, damage, speed }) {
  return {
    lane,
    x,
    y,
    prevX: x,
    damage,
    speed,
    spent: false,

    update(deltaTime) {
      this.prevX = this.x;
      this.x += this.speed * (deltaTime / FRAME_MS);
    },
  };
}

// Counts every attacker's cooldown down and returns the projectiles fired this
// frame. `units` are the entries in battlefield.placedUnits; the cooldown is
// stored on each entry as `cooldownMs`, so selling a tower removes its timer.
//
// An attacker with nothing to shoot stays ready (cooldown 0) and fires on the
// first frame a target appears, like an economy tower that is ready to collect.
export function tickAttackers({
  units,
  towerTypes,
  aliens,
  deltaTime,
  positionOf,
  rightEdge,
}) {
  const fired = [];
  for (const unit of units) {
    const type = towerTypes[unit.type];
    const intervalMs = type?.projectileFireRate?.intervalMs;
    if (!intervalMs) continue; // not an attacker

    // First tick after placement starts a full cycle.
    unit.cooldownMs = Math.max(0, (unit.cooldownMs ?? intervalMs) - deltaTime);
    if (unit.cooldownMs > 0) continue;

    const { x, y } = positionOf(unit);
    const hasTarget = aliens.some(
      (alien) =>
        !alien.defeated &&
        alien.lane === unit.row &&
        alien.x > x &&
        alien.x <= rightEdge,
    );
    if (!hasTarget) continue;

    fired.push(
      newProjectile({
        lane: unit.row,
        x,
        y,
        damage: type.projectileDamage,
        speed: type.projectileSpeed,
      }),
    );
    unit.cooldownMs = intervalMs;
  }
  return fired;
}

// Moves projectiles, applies hits, and removes spent ones from the array.
// A projectile hits the nearest live alien in its lane that it passed through
// this frame, then disappears. One that leaves the board also disappears.
export function updateProjectiles(projectiles, aliens, deltaTime, rightEdge) {
  for (const projectile of projectiles) {
    projectile.update(deltaTime);

    let target = null;
    for (const alien of aliens) {
      if (alien.defeated || alien.lane !== projectile.lane) continue;
      if (
        alien.x - HIT_RADIUS > projectile.x ||
        alien.x + HIT_RADIUS < projectile.prevX
      ) {
        continue;
      }
      if (!target || alien.x < target.x) target = alien;
    }

    if (target) {
      target.takeDamage(projectile.damage);
      projectile.spent = true;
    } else if (projectile.x > rightEdge) {
      projectile.spent = true;
    }
  }

  for (let index = projectiles.length - 1; index >= 0; index--) {
    if (projectiles[index].spent) projectiles.splice(index, 1);
  }
}
