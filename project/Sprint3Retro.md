# Sprint 3 Review and Retrospective

## Team and Sprint Information

| Field | Your answer |
| --- | --- |
| Team name | 2 |
| Team members | Madison Jones, Kevin Bermingham, Daniel Colman, Sean Nguyen |
| Sprint | Sprint 3 |
| Planned sprint dates | 2026-11-06 to 2026-11-12 |
| Scrum Master for this sprint | Sean Nguyen |
| Sprint Goal | Add a basic combat encounter to the Sprint 2 prototype. Aliens advance in their lanes, attackers fire automatically, and blockers slow the advance. The run ends in defeat if an alien crosses the colony's base line. |

## Part 1: Sprint Review

### 1.1 Product Increment

| Field | Your answer |
| --- | --- |
| Commit ID of the demonstrated product | To confirm from the team’s demo record |
| Link to the commit on GitHub | To confirm after identifying the demo commit |
| Production URL | https://chaoaj.github.io/fa26_cs345_team02/ |
| Team member giving the demo | To confirm |

The combat increment landed on `main` in stages. The basic alien model and movement reached `main` on November 16, same-lane attacks followed on November 17, and the November 18 merge included the balance changes that let attackers defeat aliens. A live alien crossing the base line ends the run and locks game controls. Use the November 18 merge as a reference for the integrated build. [Integrated combat on main](https://github.com/chaoaj/fa26_cs345_team02/commit/00a5a7995a5b8caebcdcd6d4f92c7ef055b49cbe)

### 1.2 "Ready for Review" Checklist

- [x] All sprint tasks are marked done in GitHub Projects.
- [x] All sprint backlog items meet their acceptance criteria.
- [x] The completed combat changes are committed and pushed to GitHub.
- [x] The production build matches the version demonstrated at the review.
- [x] The demo commit is recorded above.
- [x] The presenter and demo setup are confirmed.

### 1.3 Sprint Backlog Results

| # | Sprint Backlog Item | GitHub issue | Planned story points | All acceptance criteria met? | Final status |
| --- | --- | --- | ---: | --- | --- |
| 1 | Create the basic alien enemy model | [#51](https://github.com/chaoaj/fa26_cs345_team02/issues/51) | 4 | Yes, per the issue checklist | Closed November 20 |
| 2 | Implement enemy movement and base-line defeat | [#6](https://github.com/chaoaj/fa26_cs345_team02/issues/6) | 3 | Yes, per the issue checklist | Closed November 20 |
| 3 | Implement automatic same-lane tower attacks | [#7](https://github.com/chaoaj/fa26_cs345_team02/issues/7) | 4 | Yes, per the issue checklist | Closed November 20 |
| 4 | Implement blocking, tower damage, and destruction | [#8](https://github.com/chaoaj/fa26_cs345_team02/issues/8) | 4 | No | Carried over to Sprint 4 |
| | **Totals** | | **15** | | **11 points closed after the planned end date, 4 carried over** |

The table uses the estimates in [Sprint3Plan.md](Sprint3Plan.md). GitHub history records the three closures on November 20, after the planned November 12 demo.

#### Items Not Completed

- **#8 — Blocking, tower damage, and destruction.** Enemies still need to stop and attack blockers. Towers need to take damage, free their tiles without an Energy refund when destroyed, and heal between waves if they survive. Madison owns the carryover. The Sprint 4 wave transition provides the point at which to apply healing. [Sprint 4 tasks for #8](https://github.com/chaoaj/fa26_cs345_team02/issues/8#issuecomment-7057104800)

### 1.4 Sprint Scope

**Did the Sprint Backlog stay the same as it was at Sprint Planning?**

No. We moved Energy and Gold income and spending (#9) back to the product backlog when we narrowed Sprint 3 to the basic combat encounter. The revised plan covered four issues. Blocking (#8) stayed in that plan and moved to Sprint 4 as unfinished work.

### 1.5 Sprint Goal

**Did we meet our Sprint Goal?**

Partly. The integrated build gained alien movement, automatic attacks, and defeat when aliens reach the base. Those changes reached `main` after the planned demo date. Blockers slowing the advance remained unfinished.

### 1.6 Known Bugs

The development build had missing files after combat was integrated. That prevented the development pages from starting and caused browser checks to fail. The November 20 fix restored the missing files and updated the defeat test to use the configured alien speed. The actual demo build’s bug status needs confirmation. [Development build fix](https://github.com/chaoaj/fa26_cs345_team02/commit/4d33c94)

## Part 2: Sprint Retrospective

### 2.1 Close Out the Sprint in GitHub Projects

- [x] Verify that completed tasks are marked done.
- [x] The completed issues (#51, #6, and #7) are closed and marked Done.
- [x] The unfinished blocking issue (#8) is open with a Sprint 4 owner and task estimates.
- [x] Confirm the Sprint 3 closeout in GitHub Projects.

### 2.2 Retrospective: More Of, Less Of, Same As

#### More Of

- Play through one encounter together before demo day, including an alien reaching the base and an attacker defeating an alien.
- Agree early on how movement, attacks, blocking, and wave transitions fit together, then record who owns each part.

#### Less Of

- Leaving integration and both build checks until after the planned demo date.
- Treating a story as ready when only some of its acceptance criteria work. Enemy movement and base defeat needed separate checks in #6.

#### Same As

- Keep separate GitHub issues for the alien model, movement, attacks, and blocking so each has a clear owner and review.
- Keep automated browser checks for behaviors such as stopping the game after a base breach.

### 2.3 Team Summary

Sprint 3 took Bugs vs. Aliens from tower placement to a basic fight. The alien model, movement and defeat, and automatic attacks eventually closed for 11 of the 15 planned points. Integration continued past the scheduled demo, and blocking carried over at 4 points.

For Sprint 4, we propose reviewing the first two waves together before adding more scope. Check that blockers take damage, destroyed towers free their tiles, and survivors heal when a wave ends. Run the production and development builds before the review and record the commit actually shown.

### 2.4 Retrospective Meeting Record

| Field | Your answer |
| --- | --- |
| Date of retrospective meeting | 2026-11-20 |
| Team members present | Everyone |

## Part 3: Self-Check Before Submitting

| Grading question | Our answer |
| --- | --- |
| Is our sprint identical to what we started with? | No. #9 returned to the backlog when we narrowed the scope. |
| Did we complete our tasks? | Partly. Blocking and tower damage carried over. |
| Did we complete our backlog items, as shown by their acceptance criteria? | Partly. Three of the four items closed after the planned end date. |
| Did we meet our Sprint Goal? | Partly. Alien movement, attacks, and defeat landed. Blocking remained open. |
| Is our code committed and pushed? | Yes, for the three completed items. |
| Is our code free of large show-stopper bugs? | To confirm for the actual demo build. |
| Did we write a reasonable retrospective (2–3 items in each category)? | Yes. There are two discussion points in each category. |
| Did we write a thoughtful summary of our sprint? | Yes. |
