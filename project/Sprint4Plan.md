# Sprint 4 · Build the Wave and Upgrade Loop

### Bugs vs. Aliens

> **Sprint outcome:** Players prepare their defense, start waves, earn Gold, and upgrade towers between battles while their surviving board carries forward.

| Core items in progress | Story points | Planned hours |
| ---: | ---: | ---: |
| **6** | **33** | **44** |

With the wave-preview stretch item, the total becomes **7 items, 36 points, and 48 hours**.

## Team and Sprint Information

| Field | Your answer |
| --- | --- |
| Team name | Team 2 |
| Team members | Madison Jones, Kevin Bermingham, Daniel Colman, Sean Nguyen |
| Project | Bugs vs. Aliens |
| Sprint | Sprint 4 |
| Sprint start date | 2026-11-20 |
| Sprint end date (demo day) | 2026-12-04 |
| Scrum Master | Sean Nguyen |
| GitHub Projects link | [Sprint 4 board](https://github.com/users/chaoaj/projects/6/views/1?filterQuery=sprint%3A%22Sprint+4%22) |

## 1. Sprint Goal

> Build a connected wave-and-upgrade loop across five stages of three waves. Players choose when to start combat, earn and spend Energy and Gold, keep surviving towers between waves, and buy tower-type upgrades during preparation.

### 1.1 Value to Stakeholders

Players can make decisions that matter across several battles, including when to build and when to save Gold for upgrades. The instructor can evaluate progression, resource balance, and tower survival in one playable build.

### 1.2 Starting Point and Scope

Sprint 4 builds on the completed movement and defeat (#6), automatic attacks (#7), and basic alien model (#51). Blocking and tower destruction (#8) carry over into Sprint 4. The board now shows #8, #9, #10, #11, #15, and #27 as **In Progress**.

The 44 planned hours include 40 hours for the six issues and 4 hours for integration testing and Scrum Master work. Confirm team availability across the Thanksgiving break.

| Deliver this sprint | Later backlog |
| --- | --- |
| Finish blocking, tower damage, destruction, and between-wave healing | Additional tower roles (#14), gems (#16), and gem returns (#44) |
| Manual starts, 15-wave stage structure, and milestone enemies | Full enemy roster (#20), distinct boss abilities (#21), difficulty progression (#24), and results/statistics (#28) |
| Wave completion, persistent towers, and type upgrades | Post-wave reward selection and rarity systems (#17–#19, #22) |
| Energy/Gold rules and pause/resume | Full HUD (#13), merchant screens (#23), broader randomization (#25), and full run reset (#29) |

Incoming-wave preview (#26) is a stretch item in the product backlog. Pull it into Sprint 4 if the first two waves work together and Daniel and Kevin have four hours available between them.

**Encounter scope.** #10 still requires an elite or boss on each stage's third wave and a final boss on wave 15. Include configurable milestone enemy variants and a clear final-boss identity in its encounter definitions. Distinct boss abilities remain in #21. The proposed work replaces the earlier draft's broad promise of semi-randomized levels with defined encounters for this sprint.

**Economy integration.** #9 supplies the shared Gold spending operation used by upgrades and future merchant purchases. Verify merchant-style spending through that operation while the merchant screen remains in #23. Start with the existing 300 Energy. Set the remaining income rates, Gold rewards, upgrade costs, and stat changes together before integration.

## 2. GitHub Projects Setup Checklist

- [x] Verify the Sprint 4 iteration runs from November 20 to December 4.
- [x] Assign all six core issues to Sprint 4 and set them to In Progress.
- [x] Verify the issue assignees and Story points on the board.
- [x] Record task owners and estimated hours in the issue comments, including #26's stretch plan.
- [ ] Confirm team availability across the Thanksgiving break.
- [ ] Confirm the shared phase, enemy defeat, wave-clear, and upgrade interfaces.

## 3. Sprint Backlog Summary

| GitHub issue | Player outcome | Assignees | Board status | Story points | Task hours |
| --- | --- | --- | --- | ---: | ---: |
| [#8](https://github.com/chaoaj/fa26_cs345_team02/issues/8) | My blockers hold enemies back, take damage, and leave reusable tiles when destroyed. | Madison Jones | In Progress | 4 | [5](https://github.com/chaoaj/fa26_cs345_team02/issues/8#issuecomment-7057104800) |
| [#10](https://github.com/chaoaj/fa26_cs345_team02/issues/10) | I start each wave when ready and progress through five stages. | Daniel Colman | In Progress | 8 | [10](https://github.com/chaoaj/fa26_cs345_team02/issues/10#issuecomment-7057171360) |
| [#11](https://github.com/chaoaj/fa26_cs345_team02/issues/11) | I advance after all threats are cleared and keep surviving towers. | Madison Jones | In Progress | 5 | [7](https://github.com/chaoaj/fa26_cs345_team02/issues/11#issuecomment-7057173822) |
| [#9](https://github.com/chaoaj/fa26_cs345_team02/issues/9) | I earn and spend Energy and Gold separately across battles. | Sean Nguyen | In Progress | 8 | [6](https://github.com/chaoaj/fa26_cs345_team02/issues/9#issuecomment-7057167559) |
| [#15](https://github.com/chaoaj/fa26_cs345_team02/issues/15) | I spend Gold between waves to improve every copy of a tower type. | Kevin Bermingham | In Progress | 5 | [7](https://github.com/chaoaj/fa26_cs345_team02/issues/15#issuecomment-7057174317) |
| [#27](https://github.com/chaoaj/fa26_cs345_team02/issues/27) | I pause combat and resume from the same state. | Daniel Colman and Kevin Bermingham | In Progress | 3 | [5](https://github.com/chaoaj/fa26_cs345_team02/issues/27#issuecomment-7057150939) |
| **Core feature total** | | | | **33** | **40** |
| Integration QA and Scrum Master support | | Kevin Bermingham and Sean Nguyen | | | **4** |
| **Core sprint total** | | | | **33** | **44** |
| [#26 — stretch](https://github.com/chaoaj/fa26_cs345_team02/issues/26) | I inspect the incoming enemies before starting a wave. | Daniel Colman and Kevin Bermingham | Product Backlog Items | 3 | [4](https://github.com/chaoaj/fa26_cs345_team02/issues/26#issuecomment-7057176267) |

### 3.1 #8 — Blocking, Tower Damage, and Destruction

**User story:** As a player, I want durable defenders to stop enemies so I can protect vulnerable towers.

**Acceptance criteria**

- [ ] Enemies stop to attack blockers before moving on.
- [ ] Tower health decreases with damage.
- [ ] Destroyed towers leave an empty tile and give no refund.
- [ ] Surviving towers heal between waves.

| Task | Owner | Hours |
| --- | --- | ---: |
| Define interaction with non-blocker towers and implement blocker contact and enemy attack timing | Madison Jones | 2 |
| Apply tower damage and destruction, free tiles without refunds, and resume enemy movement | Madison Jones | 2 |
| Connect between-wave healing and verify destruction, healing, and tile reuse | Madison Jones | 1 |

### 3.2 #10 — Manual Wave Starts and the Five-Stage Run

**User story:** As a player, I want to start each wave when ready so I can finish preparing my board.

**Acceptance criteria**

- [ ] Each wave waits for an explicit Start Wave action.
- [ ] The run contains five stages of three waves.
- [ ] The current stage and wave are displayed.
- [ ] Each stage's third wave includes an elite or boss, and wave 15 includes the final boss.

| Task | Owner | Hours |
| --- | --- | ---: |
| Define all 15 encounters, including scheduled spawns and milestone enemy variants | Daniel Colman | 4 |
| Replace startup test spawns with preparation, Start Wave, stage/wave display, and spawn scheduling | Daniel Colman | 3 |
| Integrate progression with #11 and verify all stages, repeated start clicks, and final-wave termination | Daniel Colman | 3 |

### 3.3 #11 — Wave Completion and Persistent Board State

**User story:** As a player, I want to advance only after every threat is cleared so battles cannot end prematurely.

**Acceptance criteria**

- [ ] A wave clears only after scheduled spawns finish and every enemy, including boss summons, is dead.
- [ ] Completion Gold is granted exactly once per wave.
- [ ] Surviving towers and their upgrades persist across waves and stages.

| Task | Owner | Hours |
| --- | --- | ---: |
| Track pending spawns and live enemies, including any summons, and emit one clear event | Madison Jones | 3 |
| Preserve surviving board state and upgrades, invoke healing, and connect the one-time Gold reward | Madison Jones | 2 |
| Verify delayed spawns, repeated clear checks, stage transitions, and preservation of upgraded towers | Madison Jones | 2 |

### 3.4 #9 — Energy and Gold Income and Spending

**User story:** As a player, I want to earn and spend Energy and Gold separately so I can balance defense with long-term growth.

**Acceptance criteria**

- [ ] Energy pays for placement and comes from starting reserves, fixed combat income, and economy towers.
- [ ] Gold pays for upgrades and merchant purchases and comes from kills and wave completion.
- [ ] Both balances carry over.
- [ ] Passive income runs only during active, unpaused combat.

| Task | Owner | Hours |
| --- | --- | ---: |
| Add separate balances and shared affordability/spending operations, reusing existing Energy logic | Sean Nguyen | 2 |
| Connect configurable combat Energy, economy-tower production, one-time kill rewards, and wave rewards | Sean Nguyen | 2 |
| Verify carryover, immediate balance updates, rejected spending, and phase/pause income restrictions | Sean Nguyen | 2 |

### 3.5 #15 — Tower-Type Upgrades Between Waves

**User story:** As a player, I want to upgrade a tower type between waves so every copy becomes stronger.

**Acceptance criteria**

- [ ] Gold can be spent during preparation to progress through defined upgrade levels.
- [ ] Cost and resulting stats are previewed before purchase.
- [ ] Upgrades apply to every existing and future copy of that tower type.
- [ ] Changes support damage, attack speed, durability, control, or income as appropriate to the type.

| Task | Owner | Hours |
| --- | --- | ---: |
| Define upgrade levels, costs, stat changes, and shared per-type upgrade state for the available tower types | Kevin Bermingham | 3 |
| Build the preparation purchase/preview interaction and use #9's Gold spending operation | Kevin Bermingham | 2 |
| Verify existing/future copies, combat purchase rejection, insufficient Gold, maximum levels, and persistence | Kevin Bermingham | 2 |

### 3.6 #27 — Pause and Resume

**User story:** As a player, I want to pause an active game so I can step away without changing the battle.

**Acceptance criteria**

- [ ] Pause freezes movement, attacks, spawning, combat timers, and passive income.
- [ ] Resume continues from the same state.
- [ ] Preparation, rewards, and shopping generate no passive income.

| Task | Owner | Hours |
| --- | --- | ---: |
| Connect pause/resume controls to the shared phase and freeze spawning, movement, attacks, and timers | Daniel Colman | 2 |
| Verify income freezes, repeated pause/resume, and that paused time creates no catch-up rewards or attacks | Kevin Bermingham | 2 |
| Verify preparation and the rewards/shopping phase gates block passive income | Kevin Bermingham | 1 |

### 3.7 #26 — Incoming-Wave Preview (Stretch)

**User story:** As a player, I want to inspect incoming enemies so I can prepare an appropriate defense.

**Acceptance criteria**

- [ ] Before every wave, show its incoming enemy types.
- [ ] Describe boss abilities for boss waves.
- [ ] Preview content matches the encounter that starts.
- [ ] Preparation remains available while reviewing the preview.

| Task | Owner | Hours |
| --- | --- | ---: |
| Derive preview content from the same encounter definitions used for spawning | Daniel Colman | 2 |
| Display the preview and verify enemy descriptions, boss ability information, and preparation controls | Kevin Bermingham | 2 |

If an encounter has no special ability, say so accurately in its preview. Pull this item after the core loop works.

## 4. Work Distribution

| Team member | Work | Tasks | Core hours | Hours with stretch |
| --- | --- | ---: | ---: | ---: |
| Madison Jones | Blocking and tower damage (#8, 5 h) and wave completion and board persistence (#11, 7 h) | 6 | 12 | 12 |
| Daniel Colman | Manual wave starts and stages (#10, 10 h) and pause implementation (#27, 2 h) | 4 | 12 | 14 |
| Kevin Bermingham | Tower upgrades (#15, 7 h), pause verification (#27, 3 h), and integration QA (2 h) | 6 | 12 | 14 |
| Sean Nguyen | Energy and Gold (#9, 6 h) and Scrum Master coordination and documentation (2 h) | 4 | 8 | 8 |
| **Team total** | | **20** | **44** | **48** |

The #11 task comment records Kevin's integration testing, and the #9 task comment records Sean's Scrum Master work. The stretch item adds two hours each for Daniel and Kevin.

### 4.1 Integration and Schedule

| Date | Target |
| --- | --- |
| November 20–22 | Confirm capacity, estimates, and interfaces. Daniel defines encounters and phases. Sean defines currency operations. Madison finishes the blocking foundation. Kevin defines upgrade data. |
| November 23–25 | Integrate the first two waves with placement, combat, wave completion, Gold rewards, and upgrades. Test this loop together before the holiday break. |
| November 26–29 | Use each member's agreed availability for remaining implementation and review. Report blockers in the issue comments. |
| November 30 | Run the core loop together, inspect every acceptance criterion, and decide whether capacity remains for #26. |
| December 1–3 | Verify the full 15-wave structure, pause behavior, persistent upgrades, and one-time rewards. Fix integration failures and check production. |
| December 4 | Demonstrate the recorded production commit and complete the sprint review. |

Agree on one phase owner in #10. #11 emits a wave-clear event once, #9 owns balance changes, and #15 owns upgrade state. #8 and #11 coordinate healing. Use game-time timers so pausing cannot trigger a burst of missed actions on resume.

## 5. Demo Walkthrough

1. Open a fresh run and show starting Energy, Gold, stage/wave, and preparation controls. Place a blocker and attacker before starting.
2. Start wave 1. Show lane combat, blocker damage, and Gold awarded once when an enemy dies.
3. Pause while enemies and timers are active. Show that movement, attacks, spawning, and passive income freeze, then resume from the same state.
4. Clear the wave. Show that it waits for all scheduled spawns and enemies, grants completion Gold once, heals surviving towers, and returns to preparation.
5. Preview and buy a tower-type upgrade. Show the Gold deduction and changed stats on an existing tower, then place another copy with the same upgrade.
6. Start the next wave and show the board, balances, and upgrades carry over. Demonstrate a destroyed tower's freed tile and lack of refund.
7. Show milestone encounters and the final boss through a rehearsed run or a clearly identified demo setup. Verify all 15 wave definitions and that the final encounter completes without starting wave 16.
8. If #26 is included, compare the incoming-wave preview with the encounter that actually starts.

## 6. Definition of Done

- Every selected issue meets its acceptance criteria in the combined build and is checked by a teammate.
- Repeated kill, clear, or purchase processing cannot duplicate rewards, charges, or upgrades.
- Failed purchases preserve balances. Pausing and preparation stop passive income.
- The full wave sequence, board persistence, upgrades, and existing base-defeat behavior pass verification.
- GitHub Projects records the agreed points, task owners, hour estimates, and actual completion status.
- The demonstrated commit is pushed and matches the published production build.
- Unfinished criteria remain documented on open issues for the sprint review.
