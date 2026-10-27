# Bugs vs. Aliens · GitHub Issue Backlog

> **Sprint 1 goal:** Build a five-lane battlefield where players select and place basic towers, collect Energy, and spend Energy to build more.

| Total issue drafts | Selected for Sprint 1 | Proposed Sprint 1 points | Proposed task hours |
| :---: | :---: | :---: | :---: |
| **31** | **5** | **16** | **20** |

> [!NOTE]
> These are ready-to-copy issue drafts, not published GitHub issues. PBI identifiers are stable backlog references, not GitHub issue numbers. All story points are proposed team estimates. Items estimated at 8 points should be refined and potentially split before sprint selection.

## How to use

1. Use each section's **Title** as the GitHub issue title.
2. Copy its User story, Acceptance criteria, References, and Refinement notes into the issue body.
3. Apply suggested labels and set story points in GitHub Projects. Use the **iteration field** to select Sprint 1; a sprint label alone does not assign an iteration.
4. For the five Sprint 1 issues, copy the task table into an issue comment and assign named team members.

### Scope and priorities

- **Sprint 1:** PBI-01, PBI-02, PBI-03, PBI-30, and PBI-31 only. Attackers and blockers are placeable definitions; combat comes later.
- **Later backlog:** Enemies, combat, waves, Gold, selling, upgrades, gems, rewards, merchants, pause, results, and the full restart flow remain in scope for future planning.
- **P0:** Foundation. **P1:** Remaining required systems. **P2:** Onboarding and visual polish. Priority does not automatically assign a sprint.
- **Theme:** Bug defenders protect a colony from aliens. Distinct placeholders are sufficient for Sprint 1; final visuals are PBI-29.

### Ownership boundaries

| PBI | Responsibility |
| --- | --- |
| 01 | Battlefield and tile coordinates |
| 02 | Starting availability and resources |
| 03 | Selection, placement, and cooldowns |
| 30 · New | Tower definitions and distinct placeholder appearances |
| 31 · New | Energy balance, prototype collection, and shared spending |
| 07 · Later | Full two-currency economy and combat-only income |
| 11 · Later | Complete HUD extending the initial controls |
| 12 · Later | Full six-role tower roster and behaviors |

The timed click-to-collect interaction in PBI-31 is a proposed prototype choice. Final passive production must still pause outside active, unpaused combat. Cross-references below describe integration needs, not a mandatory sequence for implementing every feature in an issue.

## Backlog at a glance

| PBI | Issue title | Points, proposed | Iteration |
| --- | --- | ---: | --- |
| [PBI-01](#pbi-01) | Create the 5×10 battlefield and lane layout | 3 | Sprint 1 |
| [PBI-02](#pbi-02) | Initialize each run with a consistent starting loadout | 2 | Sprint 1 |
| [PBI-03](#pbi-03) | Implement tower placement, costs, and cooldowns | 5 | Sprint 1 |
| [PBI-04](#pbi-04) | Implement enemy movement and base-line defeat | 3 | Unscheduled |
| [PBI-05](#pbi-05) | Implement automatic same-lane tower attacks | 5 | Unscheduled |
| [PBI-06](#pbi-06) | Implement blocking, tower damage, and destruction | 5 | Unscheduled |
| [PBI-07](#pbi-07) | Implement Energy and Gold income and spending | 5 | Unscheduled |
| [PBI-08](#pbi-08) | Implement manual wave starts and the five-stage run | 8 | Unscheduled |
| [PBI-09](#pbi-09) | Implement wave completion and persistent board state | 5 | Unscheduled |
| [PBI-10](#pbi-10) | Implement tower selling and Energy refunds | 3 | Unscheduled |
| [PBI-11](#pbi-11) | Build the combat HUD and placement feedback | 5 | Unscheduled |
| [PBI-12](#pbi-12) | Add the six tower roles and their combat behaviors | 8 | Unscheduled |
| [PBI-13](#pbi-13) | Implement tower-type upgrades between waves | 5 | Unscheduled |
| [PBI-14](#pbi-14) | Implement gem inventory, equipment, and sockets | 5 | Unscheduled |
| [PBI-15](#pbi-15) | Implement one-of-three post-wave reward selection | 5 | Unscheduled |
| [PBI-16](#pbi-16) | Implement reward rarities and eligibility filtering | 3 | Unscheduled |
| [PBI-17](#pbi-17) | Implement passive bonuses that last for one run | 3 | Unscheduled |
| [PBI-18](#pbi-18) | Add enemy roles and special enemy behaviors | 8 | Unscheduled |
| [PBI-19](#pbi-19) | Implement elite encounters and distinct boss abilities | 8 | Unscheduled |
| [PBI-20](#pbi-20) | Guarantee new high-rarity tower options after non-final bosses | 3 | Unscheduled |
| [PBI-21](#pbi-21) | Implement merchants before elite and boss waves | 5 | Unscheduled |
| [PBI-22](#pbi-22) | Implement increasing wave difficulty and new enemy types | 8 | Unscheduled |
| [PBI-23](#pbi-23) | Randomize rewards, merchant stock, and enemy formations | 5 | Unscheduled |
| [PBI-24](#pbi-24) | Display an incoming-wave preview during preparation | 3 | Unscheduled |
| [PBI-25](#pbi-25) | Implement pause and resume | 3 | Unscheduled |
| [PBI-26](#pbi-26) | Display victory, defeat, and run statistics | 5 | Unscheduled |
| [PBI-27](#pbi-27) | Reset all run state when starting a new run | 5 | Unscheduled |
| [PBI-28](#pbi-28) | Add brief starting instructions | 2 | Unscheduled |
| [PBI-29](#pbi-29) | Create distinct bug-defender and alien-enemy visuals | 5 | Unscheduled |
| [PBI-30](#pbi-30) | Add basic attacker, blocker, and economy tower types | 3 | Sprint 1 |
| [PBI-31](#pbi-31) | Implement basic Energy collection and tower spending | 3 | Sprint 1 |

---

## PBI-01

**Title:** Create the 5×10 battlefield and lane layout

| Planning field | Value |
| --- | --- |
| Story points | 3 — proposed |
| Iteration | Sprint 1 — selected in plan; assignment pending |
| Suggested labels | `enhancement`, `priority: P0`, `area: board` |
| Related implementation items | None |

### User story

As a player, I want a clearly displayed five-lane battlefield so that I can plan where to place defenders.

### Acceptance criteria

- [ ] Display exactly five rows and ten columns with visible tile boundaries.
- [ ] Identify the colony/base side on the left and enemy-entry side on the right.
- [ ] Make each tile individually addressable for placement.

### References

- Backlog: PBI-01
- Source requirements: 1

### Refinement notes

This issue provides the board. Enemy spawning and movement belong to PBI-04.

### Task comment for Sprint 1

Hour estimates are proposed. Replace Unassigned with actual team members.

| Task | Hours | Assignee |
| --- | ---: | --- |
| Render the grid and tile coordinates | 3 | Unassigned |
| Add side indicators and verify grid layout | 1 | Unassigned |

**Total:** 4 hours.

---

## PBI-02

**Title:** Initialize each run with a consistent starting loadout

| Planning field | Value |
| --- | --- |
| Story points | 2 — proposed |
| Iteration | Sprint 1 — selected in plan; assignment pending |
| Suggested labels | `enhancement`, `priority: P0`, `area: towers` |
| Related implementation items | PBI-30, PBI-31 |

### User story

As a player, I want to begin with basic tower choices and starting Energy so that I can set up my defense.

### Acceptance criteria

- [ ] Make the attacker, blocker, and economy tower available when the prototype opens.
- [ ] Provide starting Energy sufficient to place at least one of each starting type.
- [ ] Show the available types in a visible selection pool.
- [ ] Keep each unlocked tower type selectable for repeated placement.

### References

- Backlog: PBI-02
- Source requirements: 5, 10

### Refinement notes

Use the tower definitions from PBI-30 and Energy balance from PBI-31. This issue initializes them; it does not duplicate tower implementation or resource collection. Full new-run reset remains PBI-27.

### Task comment for Sprint 1

Hour estimates are proposed. Replace Unassigned with actual team members.

| Task | Hours | Assignee |
| --- | ---: | --- |
| Configure the starting loadout and initial Energy | 1 | Unassigned |
| Connect the tower selection pool and verify initialization | 1 | Unassigned |

**Total:** 2 hours.

---

## PBI-03

**Title:** Implement tower placement, costs, and cooldowns

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Sprint 1 — selected in plan; assignment pending |
| Suggested labels | `enhancement`, `priority: P0`, `area: towers` |
| Related implementation items | PBI-01, PBI-02, PBI-30, PBI-31 |

### User story

As a player, I want to place available towers on empty tiles so that I can build my defense.

### Acceptance criteria

- [ ] Select an unlocked tower type and place its matching visual on an empty board tile.
- [ ] Allow at most one tower per tile.
- [ ] Require sufficient Energy and a ready placement cooldown; show the selected tower cost and cooldown readiness.
- [ ] A successful placement spends its Energy cost exactly once and starts the cooldown.
- [ ] Invalid placement gives clear feedback and spends no Energy.

### References

- Backlog: PBI-03
- Source requirements: 1, 5, 6, 15

### Refinement notes

Use the shared spending operation from PBI-31. Selling is PBI-10. Sprint 1 is a building prototype with no wave phases; rules for placement during combat remain to be confirmed when waves are added.

### Task comment for Sprint 1

Hour estimates are proposed. Replace Unassigned with actual team members.

| Task | Hours | Assignee |
| --- | ---: | --- |
| Implement selection, tile placement, and occupancy checks | 4 | Unassigned |
| Connect Energy spending, cooldowns, feedback, and placement verification | 2 | Unassigned |

**Total:** 6 hours.

---

## PBI-04

**Title:** Implement enemy movement and base-line defeat

| Planning field | Value |
| --- | --- |
| Story points | 3 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P0`, `area: enemies` |
| Related implementation items | PBI-01 |

### User story

As a player, I want to see enemies advance toward my colony, so that I can understand and respond to threats.

### Acceptance criteria

- [ ] Enemies spawn on the right and move left in their assigned lanes
- [ ] Any enemy crossing the base line immediately ends the run in defeat.

### References

- Backlog: PBI-04
- Source requirements: 1, 4

---

## PBI-05

**Title:** Implement automatic same-lane tower attacks

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P0`, `area: combat` |
| Related implementation items | PBI-04, PBI-30 |

### User story

As a player, I want to have basic attackers fight automatically, so that I can focus on placement and strategy.

### Acceptance criteria

- [ ] Basic attackers target enemies ahead in their own lane
- [ ] Damage and attack timing follow displayed stats
- [ ] Dead enemies stop acting and are removed.

### References

- Backlog: PBI-05
- Source requirements: 3

---

## PBI-06

**Title:** Implement blocking, tower damage, and destruction

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P0`, `area: combat` |
| Related implementation items | PBI-04, PBI-30 |

### User story

As a player, I want to use durable defenders to stop enemies, so that I can protect vulnerable towers.

### Acceptance criteria

- [ ] Enemies stop to attack blockers before moving on
- [ ] Tower health decreases with damage
- [ ] Destroyed towers leave an empty tile and give no refund
- [ ] Surviving towers heal between waves.

### References

- Backlog: PBI-06
- Source requirements: 3, 6

### Refinement notes

Define how enemies interact with non-blocker towers.

---

## PBI-07

**Title:** Implement Energy and Gold income and spending

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P0`, `area: economy` |
| Related implementation items | PBI-31, PBI-08 |

### User story

As a player, I want to earn and spend Energy and Gold separately, so that I can balance defense with long-term growth.

### Acceptance criteria

- [ ] Energy pays for placement and comes from starting reserves, fixed combat income, and economy towers
- [ ] Gold pays for upgrades and merchant purchases and comes from kills and wave completion
- [ ] Both balances carry over
- [ ] Passive income runs only during active, unpaused combat.

### References

- Backlog: PBI-07
- Source requirements: 10

### Refinement notes

Set starting balances, fixed combat income, economy-tower income, and Gold rewards.

Extend PBI-31 with Gold, fixed combat Energy income, carryover, and combat-phase income rules. Reuse its Energy balance and spending operation. PBI-31 alone does not complete this issue.

---

## PBI-08

**Title:** Implement manual wave starts and the five-stage run

| Planning field | Value |
| --- | --- |
| Story points | 8 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P0`, `area: progression` |
| Related implementation items | PBI-04 |

### User story

As a player, I want to start each wave when ready, so that I can finish preparing my board.

### Acceptance criteria

- [ ] Each wave waits for an explicit Start Wave action
- [ ] The run contains five stages of three waves
- [ ] Display current stage and wave
- [ ] Wave 3 of each stage includes an elite or boss and wave 15 includes the final boss.

### References

- Backlog: PBI-08
- Source requirements: 2, 15

---

## PBI-09

**Title:** Implement wave completion and persistent board state

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P0`, `area: progression` |
| Related implementation items | PBI-05, PBI-06, PBI-08 |

### User story

As a player, I want to advance only after every threat is cleared, so that I can avoid ending battles prematurely.

### Acceptance criteria

- [ ] A wave clears only when scheduled spawns are complete and all enemies, including boss summons, are dead
- [ ] Grant its completion Gold once
- [ ] Preserve surviving towers and their upgrades across waves and stages.

### References

- Backlog: PBI-09
- Source requirements: 2, 3, 6, 10

---

## PBI-10

**Title:** Implement tower selling and Energy refunds

| Planning field | Value |
| --- | --- |
| Story points | 3 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P0`, `area: towers` |
| Related implementation items | PBI-03, PBI-31 |

### User story

As a player, I want to sell a placed tower, so that I can recover resources and change my formation.

### Acceptance criteria

- [ ] Selling removes the tower and refunds floor(50% of its placement cost) in Energy
- [ ] Display the refund before sale
- [ ] Moving a tower requires selling and rebuilding
- [ ] Return equipped gems to inventory.

### References

- Backlog: PBI-10
- Source requirements: 6, 9

### Refinement notes

Decide whether selling is allowed during active combat.

---

## PBI-11

**Title:** Build the combat HUD and placement feedback

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P0`, `area: ui` |
| Related implementation items | PBI-02, PBI-03, PBI-08, PBI-14 |

### User story

As a player, I want to see essential information while playing, so that I can make informed decisions.

### Acceptance criteria

- [ ] Show the board, tower pool, Energy, Gold, gem inventory, stage, and wave
- [ ] Show boss health while relevant
- [ ] Tower descriptions list costs, stats, and effects
- [ ] Distinguish valid and invalid placement targets clearly.

### References

- Backlog: PBI-11
- Source requirements: 15

### Refinement notes

Extend the tower pool, cost/cooldown feedback, and Energy display delivered by PBI-02, PBI-03, PBI-30, and PBI-31. Add the full game HUD without duplicating those controls. This broader issue remains outside Sprint 1.

---

## PBI-12

**Title:** Add the six tower roles and their combat behaviors

| Planning field | Value |
| --- | --- |
| Story points | 8 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: towers` |
| Related implementation items | PBI-05, PBI-06, PBI-07, PBI-30 |

### User story

As a player, I want to choose defenders with different strengths, so that I can create complementary builds.

### Acceptance criteria

- [ ] Provide single-target, area-damage, blocking, slowing/control, support, and resource-generation roles
- [ ] Explain each role's strength and weakness
- [ ] Special towers can affect adjacent lanes or areas as described
- [ ] Economy and support towers occupy normal board tiles.

### References

- Backlog: PBI-12
- Source requirements: 3, 7

### Refinement notes

Extend PBI-30 beyond its three tower definitions. Use PBI-05 and PBI-06 for basic combat behavior and PBI-07 for final resource-generation rules. Sprint 1 tower definitions do not complete the six-role roster.

---

## PBI-13

**Title:** Implement tower-type upgrades between waves

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: upgrades` |
| Related implementation items | PBI-07, PBI-30 |

### User story

As a player, I want to upgrade a tower type between waves, so that I can strengthen every copy efficiently.

### Acceptance criteria

- [ ] Spend Gold during preparation to progress through defined levels
- [ ] Preview cost and resulting stats before purchase
- [ ] Apply upgrades to every existing and future copy of that type
- [ ] Supported changes include damage, attack speed, durability, control, or income as appropriate.

### References

- Backlog: PBI-13
- Source requirements: 8

### Refinement notes

Define the upgrade levels, their costs, and stat changes.

---

## PBI-14

**Title:** Implement gem inventory, equipment, and sockets

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: gems` |
| Related implementation items | PBI-13, PBI-30 |

### User story

As a player, I want to equip and remove gems during preparation, so that I can customize individual defenders.

### Acceptance criteria

- [ ] Each placed tower starts with one socket and can reach three through leveling
- [ ] Gems provide their described damage, attack-speed, slow, or income effects
- [ ] A gem occupies only one tower at a time
- [ ] Removal returns it to inventory
- [ ] Selling or destruction returns every equipped gem.

### References

- Backlog: PBI-14
- Source requirements: 9

### Refinement notes

Define how leveling unlocks the second and third sockets and how gem effects combine with upgrades.

---

## PBI-15

**Title:** Implement one-of-three post-wave reward selection

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: rewards` |
| Related implementation items | PBI-09 |

### User story

As a player, I want to choose one of three rewards, so that I can shape my build after each battle.

### Acceptance criteria

- [ ] After each cleared wave except wave 15, present exactly three options and grant only the selected one
- [ ] Eligible rewards include tower unlocks, gems, upgrades, currency, and run-long passive bonuses
- [ ] Selected tower unlocks immediately join the reusable tower pool.

### References

- Backlog: PBI-15
- Source requirements: 11, 12

---

## PBI-16

**Title:** Implement reward rarities and eligibility filtering

| Planning field | Value |
| --- | --- |
| Story points | 3 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: rewards` |
| Related implementation items | PBI-15 |

### User story

As a player, I want to receive useful rewards with clear rarities, so that I can make meaningful choices.

### Acceptance criteria

- [ ] Use Common, Uncommon, Rare, Epic, and Legendary
- [ ] Common has the highest configured appearance frequency
- [ ] Exclude already-owned tower unlocks and upgrades that cannot be applied or are already at maximum level
- [ ] Display rarity and effects before selection.

### References

- Backlog: PBI-16
- Source requirements: 11, 15

### Refinement notes

Set rarity weights while keeping Common most frequent.

---

## PBI-17

**Title:** Implement passive bonuses that last for one run

| Planning field | Value |
| --- | --- |
| Story points | 3 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: rewards` |
| Related implementation items | PBI-15 |

### User story

As a player, I want to choose persistent passive benefits, so that I can develop a distinct run strategy.

### Acceptance criteria

- [ ] A selected passive reward applies its displayed effect for the remainder of the current run
- [ ] Its effect persists through preparation, waves, and stages
- [ ] Describe its effect and clear it when starting a new run.

### References

- Backlog: PBI-17
- Source requirements: 11, 15

---

## PBI-18

**Title:** Add enemy roles and special enemy behaviors

| Planning field | Value |
| --- | --- |
| Story points | 8 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: enemies` |
| Related implementation items | PBI-04 |

### User story

As a player, I want to face enemies with different behaviors, so that I can adapt my defenses.

### Acceptance criteria

- [ ] Provide basic walkers, fast units, armored units, and at least one special type such as a ranged attacker or summoner
- [ ] Their displayed traits produce distinct combat behavior
- [ ] Summons participate in wave-completion checks.

### References

- Backlog: PBI-18
- Source requirements: 3, 14

---

## PBI-19

**Title:** Implement elite encounters and distinct boss abilities

| Planning field | Value |
| --- | --- |
| Story points | 8 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: bosses` |
| Related implementation items | PBI-05, PBI-06, PBI-08, PBI-18 |

### User story

As a player, I want to face recognizable major threats, so that I can test my build at stage milestones.

### Acceptance criteria

- [ ] Every stage's third wave contains an elite or boss
- [ ] Bosses have distinct abilities with visible cues
- [ ] Show relevant boss health
- [ ] Wave 15 features the final boss
- [ ] Defeating a boss does not clear surviving enemies or summons automatically.

### References

- Backlog: PBI-19
- Source requirements: 2, 3, 14, 15

---

## PBI-20

**Title:** Guarantee new high-rarity tower options after non-final bosses

| Planning field | Value |
| --- | --- |
| Story points | 3 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: rewards` |
| Related implementation items | PBI-16, PBI-19 |

### User story

As a player, I want to receive a strong new tower option after a boss, so that I can expand my build choices.

### Acceptance criteria

- [ ] Reward selections after waves 3, 6, 9, and 12 include at least one unowned Rare, Epic, or Legendary tower
- [ ] Choosing it unlocks that type
- [ ] Maintain enough eligible tower content to satisfy all four guarantees
- [ ] Wave 15 provides victory instead of rewards.

### References

- Backlog: PBI-20
- Source requirements: 11, 12

---

## PBI-21

**Title:** Implement merchants before elite and boss waves

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: merchant` |
| Related implementation items | PBI-07, PBI-08, PBI-16 |

### User story

As a player, I want to shop before elite and boss waves, so that I can prepare for the upcoming challenge.

### Acceptance criteria

- [ ] During preparation before waves 3, 6, 9, 12, and 15, offer random stock drawn from tower unlocks, gems, upgrades, and Energy
- [ ] Prices are in Gold and effects are visible
- [ ] At least one option is affordable at entry
- [ ] Allow leaving without buying
- [ ] Purchases deduct Gold and grant their listed contents.

### References

- Backlog: PBI-21
- Source requirements: 13

### Refinement notes

Resolve the zero-Gold case so at least one item remains affordable without violating the economy rules.

---

## PBI-22

**Title:** Implement increasing wave difficulty and new enemy types

| Planning field | Value |
| --- | --- |
| Story points | 8 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: progression` |
| Related implementation items | PBI-08, PBI-18, PBI-19 |

### User story

As a player, I want to face increasingly demanding waves, so that I can experience a growing challenge.

### Acceptance criteria

- [ ] Each successive wave increases challenge through group size, toughness, formations, or abilities
- [ ] Stages 2–5 each introduce at least one new enemy type while retaining earlier types in the encounter pool
- [ ] All 15 wave definitions follow the progression.

### References

- Backlog: PBI-22
- Source requirements: 12, 14

---

## PBI-23

**Title:** Randomize rewards, merchant stock, and enemy formations

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: replayability` |
| Related implementation items | PBI-16, PBI-21, PBI-22 |

### User story

As a player, I want to encounter different rewards, shops, and formations, so that I can discover new strategies on replay.

### Acceptance criteria

- [ ] Reward options, merchant stock, and enemy formations can vary between runs
- [ ] Starting loadout remains consistent
- [ ] Generation always preserves eligibility, boss-reward, affordability, and stage-progression rules.

### References

- Backlog: PBI-23
- Source requirements: 5, 11–14

---

## PBI-24

**Title:** Display an incoming-wave preview during preparation

| Planning field | Value |
| --- | --- |
| Story points | 3 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: ui` |
| Related implementation items | PBI-08, PBI-19 |

### User story

As a player, I want to inspect enemies before starting a wave, so that I can prepare an appropriate defense.

### Acceptance criteria

- [ ] Before every wave, show its incoming enemy types
- [ ] For boss waves, describe boss abilities
- [ ] Preview content matches the encounter that starts
- [ ] Preparation remains available while reviewing it.

### References

- Backlog: PBI-24
- Source requirements: 15

---

## PBI-25

**Title:** Implement pause and resume

| Planning field | Value |
| --- | --- |
| Story points | 3 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: gameplay` |
| Related implementation items | PBI-07, PBI-08 |

### User story

As a player, I want to pause an active game, so that I can step away without changing the battle.

### Acceptance criteria

- [ ] Pause freezes movement, attacks, spawning, combat timers, and passive income
- [ ] Resume continues from the same state
- [ ] Preparation, rewards, and shopping do not generate passive income.

### References

- Backlog: PBI-25
- Source requirements: 10, 15

---

## PBI-26

**Title:** Display victory, defeat, and run statistics

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: ui` |
| Related implementation items | PBI-04, PBI-09, PBI-19 |

### User story

As a player, I want to see a clear summary when the run ends, so that I can understand my performance.

### Acceptance criteria

- [ ] Any base-line breach immediately produces defeat
- [ ] Victory requires defeating the final boss and every remaining enemy after scheduled spawns finish
- [ ] Show outcome, waves survived, enemies defeated, and towers acquired
- [ ] Provide a New Run button.

### References

- Backlog: PBI-26
- Source requirements: 3, 4

### Refinement notes

Agree on statistics definitions. Suggested: waves survived = waves cleared; enemies defeated includes summons; towers acquired counts distinct unlocked types, including the starting three.

---

## PBI-27

**Title:** Reset all run state when starting a new run

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P1`, `area: gameplay` |
| Related implementation items | PBI-02, PBI-03, PBI-07, PBI-13, PBI-14, PBI-17 |

### User story

As a player, I want to start a completely fresh run, so that I can play again without leftover advantages.

### Acceptance criteria

- [ ] New Run resets the board, currencies, acquired tower types, gems, type upgrades, passive bonuses, placement cooldowns, enemies, statistics, and progression
- [ ] Restore the defined starting loadout and resources.

### References

- Backlog: PBI-27
- Source requirements: 4, 5, 15

---

## PBI-28

**Title:** Add brief starting instructions

| Planning field | Value |
| --- | --- |
| Story points | 2 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P2`, `area: onboarding` |
| Related implementation items | PBI-03, PBI-07, PBI-08, PBI-10, PBI-13, PBI-14, PBI-25 |

### User story

As a player, I want to learn the essential controls and rules, so that I can begin without reading a long guide.

### Acceptance criteria

- [ ] Provide brief instructions covering selection and placement, Energy versus Gold, manual wave start, selling, upgrades and gems, pausing, and base-line defeat
- [ ] Make the instructions dismissible.

### References

- Backlog: PBI-28
- Source requirements: 15

---

## PBI-29

**Title:** Create distinct bug-defender and alien-enemy visuals

| Planning field | Value |
| --- | --- |
| Story points | 5 — proposed |
| Iteration | Unscheduled — later backlog |
| Suggested labels | `enhancement`, `priority: P2`, `area: art` |
| Related implementation items | PBI-18, PBI-30 |

### User story

As a player, I want to recognize defenders and enemies immediately, so that I can read the battlefield during busy combat.

### Acceptance criteria

- [ ] Use bug defenders protecting a colony from alien enemies
- [ ] Keep the two factions' silhouettes clearly distinct
- [ ] Distinguish tower roles and enemy roles consistently, including when several units appear together.

### References

- Backlog: PBI-29
- Source requirements: Project vision; final visual theme

### Refinement notes

Sprint 1 uses distinct placeholder tower visuals from PBI-30. This issue delivers the complete faction and role visual treatment later.

---

## PBI-30

**Title:** Add basic attacker, blocker, and economy tower types

| Planning field | Value |
| --- | --- |
| Story points | 3 — proposed |
| Iteration | Sprint 1 — selected in plan; assignment pending |
| Suggested labels | `enhancement`, `priority: P0`, `area: towers` |
| Related implementation items | None |

### User story

As a player, I want distinct attacker, blocker, and economy towers so that I can recognize their intended roles when building.

### Acceptance criteria

- [ ] Provide three reusable tower types: attacker, blocker, and economy.
- [ ] Give each type a distinct placeholder appearance, name, configurable Energy cost, and short role description.
- [ ] Placed towers retain their type and occupy a board tile.
- [ ] Expose the economy tower for the collection interaction in PBI-31.

### References

- Backlog: PBI-30
- Source requirements: 5, 7; revised Sprint 1 scope

### Refinement notes

Sprint 1 defines and displays the types. Attacking is PBI-05; blocking, damage, and destruction are PBI-06; the complete six-role roster is PBI-12. Final artwork is PBI-29.

### Task comment for Sprint 1

Hour estimates are proposed. Replace Unassigned with actual team members.

| Task | Hours | Assignee |
| --- | ---: | --- |
| Define the three tower types and configurable properties | 2 | Unassigned |
| Add distinct placeholder visuals and role descriptions | 2 | Unassigned |

**Total:** 4 hours.

---

## PBI-31

**Title:** Implement basic Energy collection and tower spending

| Planning field | Value |
| --- | --- |
| Story points | 3 — proposed |
| Iteration | Sprint 1 — selected in plan; assignment pending |
| Suggested labels | `enhancement`, `priority: P0`, `area: economy` |
| Related implementation items | PBI-30 |

### User story

As a player, I want to collect Energy and spend it on towers so that resources limit how much I can build.

### Acceptance criteria

- [ ] Display the current Energy balance and update it immediately after collection or spending.
- [ ] For the prototype, a placed economy tower becomes ready after a configurable interval; clicking a ready tower grants a configured Energy amount and restarts that interval.
- [ ] Clicking before readiness grants no Energy; each ready cycle can be collected only once.
- [ ] Provide a shared affordability/spending operation for placement; insufficient funds never produce a negative balance.
- [ ] Collecting Energy can make a previously unaffordable tower affordable.
- [ ] Successful tower placement deducts its configured cost exactly once.

### References

- Backlog: PBI-31
- Source requirements: 5, 6, 10; revised Sprint 1 scope

### Refinement notes

The timed click-to-collect interaction is a proposed prototype implementation, pending team agreement. It does not require enemies, waves, or Gold. When PBI-07 integrates the full economy, enforce the final requirement that passive production runs only during active, unpaused combat and stops during preparation, rewards, shopping, and pause screens. PBI-02 sets the initial balance; PBI-03 calls the spending operation.

### Task comment for Sprint 1

Hour estimates are proposed. Replace Unassigned with actual team members.

| Task | Hours | Assignee |
| --- | ---: | --- |
| Implement the Energy balance, collection cycle, and spending operation | 3 | Unassigned |
| Connect the counter and verify collection/spending in the integrated build | 1 | Unassigned |

**Total:** 4 hours.

---

