import { ENERGY_CONFIG } from "./config.js";

export function createEnergyView(energy) {
  const root = document.createElement("section");
  root.className = "energy-demo";
  root.innerHTML = `
    <h1>Energy lab ⚡</h1>
    <p>Prototype: place a tower, wait, then click to collect.</p>
    <p class="energy-balance">Energy: <output aria-label="Energy balance" aria-live="polite"></output></p>
    <div class="energy-actions"></div>
    <p role="status">Place an economy tower to start collecting Energy.</p>
    <div class="energy-towers" aria-label="Placed towers"></div>
  `;
  document.body.prepend(root);
  const balance = root.querySelector("output");
  const actions = root.querySelector(".energy-actions");
  const status = root.querySelector('[role="status"]');
  const list = root.querySelector(".energy-towers");
  const cards = new Map();
  let nextId = 1;
  const choices = [ENERGY_CONFIG.economyTower, ENERGY_CONFIG.demoTower].map(
    (definition) => {
      const button = document.createElement("button");
      button.textContent = `Place ${definition.name.toLowerCase()} (${definition.cost} Energy)`;
      button.addEventListener("click", () => {
        // Demo placement only; PBI-03 will validate board tiles and provide their IDs.
        if (energy.placeTower(`demo-${nextId}`, definition)) {
          nextId++;
          status.textContent = `${definition.name} placed. Spent ${definition.cost} Energy.`;
        }
      });
      actions.append(button);
      return { button, definition };
    },
  );

  function update() {
    const nextBalance = String(energy.getBalance());
    if (balance.value !== nextBalance) balance.value = nextBalance;
    for (const { button, definition } of choices) {
      button.disabled = !energy.canAfford(definition.cost);
    }
    for (const tower of energy.getTowers()) {
      let card = cards.get(tower.id);
      if (!card) {
        card = document.createElement("button");
        card.addEventListener("click", () => {
          if (energy.collect(tower.id)) {
            status.textContent = `Collected ${tower.energyAmount} Energy.`;
          }
        });
        cards.set(tower.id, card);
        list.append(card);
      }
      card.disabled = !tower.ready;
      const label =
        tower.remainingMs === null
          ? `${tower.name} placed`
          : tower.ready
            ? `Collect ${tower.energyAmount} Energy`
            : `${tower.name}: ready in ${Math.ceil(tower.remainingMs / 1000)}s`;
      if (card.textContent !== label) card.textContent = label;
    }
  }
  const unsubscribe = energy.subscribe(update);
  return {
    update,
    destroy: () => {
      unsubscribe();
      root.remove();
    },
  };
}
