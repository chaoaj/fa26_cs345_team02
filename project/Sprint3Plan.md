# Sprint 3 · Bring the Battlefield to Life

### Bugs vs. Aliens

> **Sprint outcome:** One playable encounter where basic aliens advance across the board, attackers fire, and blockers hold the line.

| Sprint items | Story points | Planned task hours |
| ---: | ---: | ---: |
| **4** | **15** | **18** |

## Team & Sprint Information

| Field | Your answer |
| --- | --- |
| Team name | Team 2 |
| Team members | Madison Jones, Kevin Bermingham, Daniel Colman, Sean Nguyen, Nathaniel Amazigo |
| Project | Bugs vs. Aliens |
| Sprint | Sprint 3 |
| Sprint start date | 2026-11-06 |
| Sprint end date (demo day) | 2026-11-12 |
| GitHub Projects link | [Team 2 project](https://github.com/users/chaoaj/projects/6) |

## 1. Sprint Goal

> Add a basic combat encounter to the Sprint 2 prototype. Aliens advance in their lanes, attackers fire automatically, and blockers slow the advance. The run ends in defeat if an alien crosses the colony's base line.

### 1.1 Value to Stakeholders

Players can see how tower placement affects a fight. The instructor can try a short encounter and give feedback on alien movement, tower attacks, and blocking before the team builds the full run.

### 1.2 Scope at a Glance

| Deliver this sprint | Separate backlog work |
| --- | --- |
| One basic alien walker with shared health, movement, and combat stats | More enemy types, elites, and bosses |
| Lane movement, base defeat, automatic attacks, and blocker interactions | Full five-stage run and wave progression (#10, #11) |

Energy and Gold income and spending ([#9](https://github.com/chaoaj/fa26_cs345_team02/issues/9)) moves back to the product backlog to fit the time available. Use the existing Sprint 2 Energy rules for placement. A small test encounter can exercise combat and between-wave healing while the full wave flow is pending.

## 2. GitHub Projects Checklist

- [x] Confirm the Sprint 3 iteration dates and issue assignments.
- [x] The four issues are shown as In Progress in the supplied board view.
- [x] The four GitHub issues have acceptance criteria and assignees.
- [x] Confirm that the card numbers below match the **Story points** field.
- [x] Confirm the proposed task hours and copy each issue's task breakdown into its GitHub issue comments.

## 3. Sprint Backlog Summary

The point estimates use the numbers shown on the supplied cards. Task hours are separate estimates for planning.

| GitHub issue | Sprint Backlog Item | Board assignee | Story points |
| --- | --- | --- | ---: |
| [#51](https://github.com/chaoaj/fa26_cs345_team02/issues/51) | Create the basic alien enemy model | Kevin Bermingham | 4 |
| [#6](https://github.com/chaoaj/fa26_cs345_team02/issues/6) | Implement enemy movement and base-line defeat | Kevin Bermingham and Sean Nguyen | 3 |
| [#7](https://github.com/chaoaj/fa26_cs345_team02/issues/7) | Implement automatic same-lane tower attacks | Daniel Colman | 4 |
| [#8](https://github.com/chaoaj/fa26_cs345_team02/issues/8) | Implement blocking, tower damage, and destruction | Madison Jones | 4 |
| | **Total** | | **15** |

### 3.1 #51 — Basic alien enemy model

**User story:** As a player, I want a basic alien that towers can target and defeat so combat behaves consistently.

**Acceptance criteria:**

- [ ] One reusable model defines a basic walker with configurable health, movement speed, attack damage, attack interval, and Gold reward.
- [ ] A walker spawns at a given lane and position, with its own identity, position, and current health.
- [ ] The walker has a placeholder visual that is easy to distinguish from a tower.
- [ ] Damage reduces health; at zero health the alien is defeated and can no longer be targeted.
- [ ] Movement, combat, and economy code can read the walker's lane, position, combat stats, and defeated state.

| Task | Owner | Hours |
| --- | --- | ---: |
| Define the walker stats and create independent enemy instances | Kevin Bermingham | 2 |
| Draw the placeholder and verify damage and defeat behavior | Kevin Bermingham | 2 |

### 3.2 #6 — Enemy movement and base-line defeat

**User story:** As a player, I want aliens to advance toward my colony so I can spot and respond to threats.

**Acceptance criteria:**

- [ ] Aliens spawn on the right and move left in their assigned lanes.
- [ ] Any alien that crosses the colony's base line immediately ends the run in defeat.

| Task | Owner | Hours |
| --- | --- | ---: |
| Connect right-side spawning and leftward movement to the shared walker model | Kevin Bermingham | 2 |
| Detect base breaches and trigger defeat | Kevin Bermingham | 1 |
| Verify right-side spawning, lane movement, and immediate defeat after a breach | Sean Nguyen | 1 |

### 3.3 #7 — Automatic same-lane tower attacks

**User story:** As a player, I want attackers to fight automatically so I can focus on tower placement.

**Acceptance criteria:**

- [ ] Basic attackers automatically target enemies ahead of them in their own lane.
- [ ] Damage and attack timing match the displayed tower stats.
- [ ] Defeated enemies stop acting and are removed from the board.

| Task | Owner | Hours |
| --- | --- | ---: |
| Implement target selection and attacks using each tower's stats | Daniel Colman | 2 |
| Remove defeated aliens and verify lane, direction, and timing rules | Daniel Colman | 2 |

### 3.4 #8 — Blocking, tower damage, and destruction

**User story:** As a player, I want blockers to hold enemies back so my other towers have time to fight.

**Acceptance criteria:**

- [ ] Aliens stop to attack blockers, then resume movement when the blocker is gone.
- [ ] Damage reduces tower health. Destroyed towers free their tiles and give no Energy refund.
- [ ] Surviving towers heal between waves.

| Task | Owner | Hours |
| --- | --- | ---: |
| Agree on how aliens handle non-blocker towers and implement blocker contact and attack timing | Madison Jones | 2 |
| Apply tower damage, free destroyed towers' tiles, and connect healing to the between-wave transition | Madison Jones | 2 |
| Verify that enemies resume movement and destruction grants no refund | Madison Jones | 1 |

## 4. Work Distribution

| Team member | Issue or support work | Tasks | Hours |
| --- | --- | ---: | ---: |
| Kevin Bermingham | #51 and #6 | 4 | 7 |
| Daniel Colman | #7 | 2 | 4 |
| Madison Jones | #8 | 3 | 5 |
| Sean Nguyen | #6 verification and Scrum Master coordination | 2 | 2 |
| **Team total** | | **11** | **18** |

Sean has two hours for coordination and documentation in addition to the #6 verification task.

Kevin works on both enemy issues because they share the same model. Agree on the walker fields and defeated state early so Daniel and Madison can connect their combat work to it. During integration, verify that defeated aliens stop acting and disappear.

## 5. Demo Walkthrough

1. Place an attacker and a blocker, then start a small encounter. Show aliens entering from the right.
2. Show the attacker firing at an alien ahead in its lane. Confirm the defeated alien stops acting and disappears.
3. Let another alien attack a blocker. Show the blocker take damage, its tile clear without a refund on destruction, and the alien resume moving.
4. End a test encounter with a damaged tower still standing. Show it heal when the game enters the between-wave state.
5. Let an alien reach the base line in a separate attempt. Show that the run immediately ends in defeat.

## 6. Definition of Done

- The four issues meet their acceptance criteria in the shared build, with a teammate checking each result.
- The walkthrough passes in the combined game, including between-wave healing in the test encounter.
- Every issue has task owners and hour estimates recorded in GitHub Projects. Unfinished work stays open with a clear next step.
- The team records the demo commit and verifies that production runs the version being shown.
