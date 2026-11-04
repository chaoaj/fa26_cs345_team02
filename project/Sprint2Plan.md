# Sprint 2 · Connect the Board, Towers, and Energy

### Bugs vs. Aliens

> **Sprint outcome:** One playable build where a player places towers on the 5×10 board, collects Energy, and spends it to build again.

| Sprint items | Proposed story points | Proposed task hours |
| :----------: | :-------------------: | :-----------------: |
|    **3**     |        **11**         |       **16**        |

With the selling stretch item, the proposed total is 4 items, 14 points, and 20 hours.

---

## Team & Sprint Information

| Field                      | Your answer                                                                    |
| -------------------------- | ------------------------------------------------------------------------------ |
| Team name                  | Team 2                                                                         |
| Team members               | Madison Jones, Kevin Bermingham, Daniel Colman, Sean Nguyen, Nathaniel Amazigo |
| Project                    | Bugs vs. Aliens                                                                |
| Sprint                     | Sprint 2                                                                       |
| Sprint start date          | 2026-11-02                                                                     |
| Sprint end date (demo day) | 2026-11-09                                                                     |
| GitHub Projects link       | https://github.com/users/chaoaj/projects/6                                     |

---

## 1. Sprint Goal

> Bring the unfinished board, tower definitions, and placement work from Sprint 1 into one playable build. By demo day, a player can choose any of the three basic towers, place it on an empty tile, and use Energy collected from an economy tower to afford another placement.

### 1.1 Value to Stakeholders

Players can see which towers they can afford, choose where to place them, and understand why an attempted placement failed. The instructor can try the full build-and-collect loop in one version of the game and give feedback on tower costs, cooldowns, and placement before combat is added.

### 1.2 Scope at a Glance

| Deliver this sprint                                                       | Build in later sprints                              |
| ------------------------------------------------------------------------- | --------------------------------------------------- |
| One shared five-lane, ten-column board                                    | Enemies, combat, waves, and win/lose conditions     |
| Selectable attacker, blocker, and economy towers                          | Attacker and blocker combat behavior                |
| Placement on empty tiles with Energy costs, cooldowns, and feedback       | Gold, upgrades, rewards, and merchants              |
| Connect the completed starting loadout and Energy collection to the board | Gem inventory, sockets, and returning equipped gems |
| Stretch: sell a tower and preview its Energy refund                       | Selling during combat, pending a team decision      |

> [!IMPORTANT]
> **Prototype collection:** Connect the timed click-to-collect behavior from #33 to placed economy towers. The full economy will apply the active, unpaused combat rule when the wave system is available.

---

## 2. GitHub Projects Checklist

- [ ] Verify the Sprint 2 iteration and its dates.
- [ ] Move #2, #4, and #32 into Sprint 2. Keep the completed Sprint 1 issues in Done.
- [ ] Confirm the proposed estimates and owner availability with the team. Add any missing acceptance criteria to the issues.
- [ ] Copy the task breakdown into each selected issue's comments with an hour estimate and a named owner for every task.
- [ ] Verify the selected issues are In Progress when the sprint starts, following the course template.
- [ ] Add #12 to the iteration only if the team pulls the stretch item.
- [ ] Before the review, verify the demo commit matches the published production build.

---

## 3. Sprint Backlog Items

The Sprint 1 retrospective records 8 of 19 points completed. Separate implementations of the board, placement, and tower definitions kept the team from demonstrating a unified grid. Issues #2, #4, and #32 carry over so the team can resolve those integration gaps. The completed starting loadout (#3) and Energy system (#33) are dependencies for the demo.

| Issue                                                        | Player outcome                                                                     | Exported status |            Proposed points | Planned hours |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------- | --------------- | -------------------------: | ------------: |
| [#2](https://github.com/chaoaj/fa26_cs345_team02/issues/2)   | I can see five lanes and ten columns and identify where to place towers.           | In Progress     |                          3 |             4 |
| [#32](https://github.com/chaoaj/fa26_cs345_team02/issues/32) | I can distinguish and select an attacker, blocker, or economy tower.               | In Progress     |                          3 |             4 |
| [#4](https://github.com/chaoaj/fa26_cs345_team02/issues/4)   | I can place affordable towers on empty tiles and see why an invalid attempt fails. | In Progress     |                          5 |             8 |
| **Proposed core scope**                                      |                                                                                    |                 |                     **11** |        **16** |
| [#12](https://github.com/chaoaj/fa26_cs345_team02/issues/12) | I can sell a placed tower, preview the refund, and rebuild on the freed tile.      | In Progress     | 3 (proposed reduced scope) |             4 |
| **Total if stretch is pulled**                               |                                                                                    |                 |                     **14** |        **20** |

The core estimate covers the remaining work, including one hour for team QA and one hour for Scrum Master duties. Reassess #12 at the mid-sprint check. Pull it in only after the core walkthrough works and the team agrees to move gem returns to the [separate issue draft](Issue-ReturnEquippedGems.md). Gem returns depend on #16 and stay in the product backlog.

### 3.1 Acceptance Criteria

- [ ] #2 shows one five-lane, ten-column grid. Clicks identify the correct tile, including at the edges.
- [ ] #32 offers recognizable attacker, blocker, and economy choices with their configured costs.
- [ ] #4 places each valid tower once and deducts its cost once. Occupied tiles, insufficient Energy, and cooldowns reject placement without a charge and show feedback.
- [ ] The integrated build starts with the existing loadout. A ready economy tower can be collected and the Energy spent on another tower.
- [ ] If #12 is pulled, the refund preview matches the actual refund, repeat sale attempts grant nothing, and a new tower can be built on the freed tile. Demonstrate selling in the prototype's build phase. Decide combat selling separately before adding waves.

---

## 4. Work Distribution

| Issue       | Task                                                                                      | Proposed owner    | Hours |
| ----------- | ----------------------------------------------------------------------------------------- | ----------------- | ----: |
| #2          | Resolve the merge conflict and bring the existing 5×10 grid into the shared build                                   | Kevin Bermingham  |     2 |
| #2          | Verify tile lookup at edges and confirm the grid is ready for production                 | Kevin Bermingham  |     2 |
| #32         | Consolidate attacker, blocker, and economy definitions and their costs                    | Daniel Colman     |     2 |
| #32         | Connect the definitions to selection and verify the three types are distinguishable       | Daniel Colman     |     2 |
| #4          | Connect selection and empty-tile validation to the shared board                           | Madison Jones     |     2 |
| #4          | Connect placement to the existing Energy spending operation and feedback                  | Madison Jones     |     2 |
| #4          | Finish cooldown behavior and verify rejected placements leave board and Energy unchanged  | Madison Jones |     2 |
| Team QA | Run the combined build walkthrough and report integration failures | Nathaniel Amazigo | 1 |
| Scrum Master | Update sprint documentation, confirm assignments, and track blockers | Sean Nguyen | 1 |
| #12 stretch | Remove the sold tower, free the tile, and refund half the original cost rounded down once | Kevin Bermingham |     2 |
| #12 stretch | Show the refund preview and verify sale and rebuilding in the combined build              | Kevin Bermingham       |     2 |

| Member            | Core tasks | Core hours | Hours with stretch |
| ----------------- | ---------: | ---------: | -----------------: |
| Kevin Bermingham | 2 | 4 | 8 |
| Daniel Colman     |          2 |          4 |                  4 |
| Madison Jones | 3 | 6 | 6 |
| Nathaniel Amazigo | 1 | 1 | 1 |
| Sean Nguyen | 1 | 1 | 1 |
| **Total** | **9** |     **16** |             **20** |

**Work split.** Kevin built the battlefield grid. A merge conflict kept it out of production. He will resolve that conflict for #2 and own #12 if the team pulls in selling, since selling needs to free a tile on the grid he built. Madison owns placement and cooldowns on #4. Nathaniel has a separate team QA task, and Sean has one planned hour for Scrum Master coordination and documentation.

**Coordination.** At kickoff, agree on which board and tower files to keep, how a tile is identified, and which function charges Energy. Use the owners in the table to coordinate changes to those files. At the mid-sprint check, have everyone open the same development build and test one placement together. Record any integration blockers and their owners in GitHub Projects.

---

## 5. Demo Walkthrough

1. Open a fresh run on the production demo URL. Point out the 5×10 grid, starting Energy, and the three tower choices with their costs.
2. Select and place an economy tower on an empty tile. Show that the balance drops by its displayed cost once.
3. Try to place on the occupied tile, then demonstrate an active cooldown and insufficient Energy. Show the feedback and verify each failed attempt leaves the board and balance as they were.
4. Collect from the economy tower once it is ready. Show the balance increase and use that Energy to place an attacker and a blocker, collecting again if needed.
5. If #12 is included, preview the refund, sell a tower, verify the refund matches the preview, and rebuild on the freed tile.

---

## 6. Definition of Done

- Each selected issue meets its acceptance criteria in the combined build. A teammate other than the task owner verifies the result.
- The demo walkthrough passes from a fresh run, including correct Energy deductions and feedback for rejected placements.
- Each issue records the agreed story points, named task owners, hour estimates, and actual progress in GitHub Projects.
- The team records the demo commit and verifies that the published production URL runs that version.
- Any unfinished item remains open with a note describing the remaining work and its owner.

---
