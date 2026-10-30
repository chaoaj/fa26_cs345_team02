# ⚡ Energy prototype (PBI-31)

Run `npm start`, then open `/index-dev.html` or `/dev/`.

1. Start with 10 Energy and place an economy tower for 5.
2. Wait 5 seconds, then click **Collect 10 Energy**.
3. The balance becomes 15 and the demo tower becomes affordable.
4. Place that tower; the balance becomes 0.

The buttons demonstrate the Energy integration before the real board exists.
They are not the final tower selection or placement system. Production remains
unchanged; all implementation files are under `dev/`.

## Settings and integration

`dev/src/config.js` contains temporary starting Energy, costs, production amount,
and collection interval. PBI-02 should supply the agreed starting balance.
`dev/towers.js` is a separate, unfinished tower-definition draft and is untouched.

`createEnergySystem({ initialEnergy, now? })` in `dev/src/energy.js` provides:

| Operation                    | Purpose                                                     |
| ---------------------------- | ----------------------------------------------------------- |
| `getBalance()`               | Read the shared balance                                     |
| `canAfford(cost)`            | Check a cost without spending                               |
| `trySpend(cost)`             | Spend once, or return false without changing the balance    |
| `placeTower(id, definition)` | Register a placement and spend its cost once                |
| `collect(id)`                | Collect a ready economy tower once and restart its interval |
| `getTowers()`                | Read snapshots with readiness and remaining time            |
| `subscribe(listener)`        | Update the HUD immediately; returns an unsubscribe function |
| `addEnergy(amount)`          | Credit validated Energy from another source                 |

For PBI-03, first validate the tile and all placement constraints, then call
`placeTower` with a stable, unique placement ID. Create the visual tower only if
it returns true. Do not also call `trySpend`: `placeTower` already does that.
Use `trySpend` for purchases that are not registered tower placements.
Callbacks observe the updated balance and placement together.

A tower definition is `{ name, cost, production?: { intervalMs, amount } }`.
Every tower has its own cycle. Waiting longer does not stack payouts. No Energy
is granted automatically, and early/repeated collection attempts return false.
Use a new ID for a genuinely new placement; removal/replacement is not implemented.

## Prototype scope

Timed click-to-collect is provisional, pending team agreement. There are no
enemies, waves, Gold, combat phases, or pause handling here. For PBI-07, replace
the prototype clock with active-combat time and enforce the final production
rules for preparation, rewards, shopping, and pause before enabling full economy.
Do not treat this wall-clock prototype as the final passive production system.

`tests/energy.spec.mjs` covers spending, duplicate placements, independent timers,
readiness boundaries, one payout per cycle, invalid settings, HUD updates, and
collection making a tower affordable.
