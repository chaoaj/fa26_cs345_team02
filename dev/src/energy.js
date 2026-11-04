function requireEnergy(value, name) {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new RangeError(`${name} must be a nonnegative safe integer.`);
  }
}

// Shared prototype economy. The caller owns tile validation and placement IDs.
export function createEnergySystem({
  initialEnergy,
  now = () => performance.now(),
}) {
  requireEnergy(initialEnergy, "Initial Energy");
  let balance = initialEnergy;

  const towers = new Map();

  const listeners = new Set();
  const notify = () => listeners.forEach((listener) => listener());

  function canAfford(cost) {
    requireEnergy(cost, "Cost");
    return balance >= cost;
  }

  // Shared spending operation; false means no balance change.
  function trySpend(cost) {
    if (!canAfford(cost)) return false;
    balance -= cost;
    notify();
    return true;
  }

  function addEnergy(amount) {
    requireEnergy(amount, "Collected Energy");
    requireEnergy(balance + amount, "Resulting balance");
    balance += amount;
    notify();
  }

  // Call after validating the location. Reusing an ID never spends twice.
  function placeTower(id, definition) {
    if (!id.trim()) throw new Error("Placement needs a nonempty ID.");
    if (towers.has(id)) return false;
    const { name, cost, production } = definition;
    requireEnergy(cost, "Tower cost");
    if (production) {
      if (
        !Number.isFinite(production.intervalMs) ||
        production.intervalMs <= 0
      ) {
        throw new RangeError(
          "Collection interval must be positive and finite.",
        );
      }
      requireEnergy(production.amount, "Production amount");
    }
    if (!canAfford(cost)) return false;
    // Copy settings so later edits cannot change an already placed tower's cycle.
    const settings = {
      name,
      cost,
      ...(production && { production: { ...production } }),
    };
    towers.set(id, {
      id,
      definition: settings,
      readyAt: production ? now() + production.intervalMs : null,
    });
    return trySpend(cost);
  }

  function collect(id) {
    const tower = towers.get(id);
    const production = tower?.definition.production;
    if (!tower || !production || tower.readyAt === null) return false;
    const time = now();
    if (time < tower.readyAt) return false;
    requireEnergy(balance + production.amount, "Resulting balance");
    // Consume readiness before notifying anyone: even repeated clicks pay once.
    tower.readyAt = time + production.intervalMs;
    addEnergy(production.amount);
    return true;
  }

  function getTowers() {
    const time = now();
    return [...towers.values()].map(({ id, definition, readyAt }) => ({
      id,
      name: definition.name,
      energyAmount: definition.production?.amount ?? 0,
      remainingMs: readyAt === null ? null : Math.max(0, readyAt - time),
      ready: readyAt !== null && time >= readyAt,
    }));
  }

  // Subscribe to balance/placement changes; read time readiness via getTowers.
  function subscribe(listener) {
    listeners.add(listener);
    listener();
    return () => {
      listeners.delete(listener);
    };
  }

  return {
    getBalance: () => balance,
    canAfford,
    trySpend,
    addEnergy,
    placeTower,
    collect,
    getTowers,
    subscribe,
  };
}
