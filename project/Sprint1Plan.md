# Sprint 1 · Build the Foundation

### Bugs vs. Aliens

> **Sprint outcome:** A five-lane board where players choose towers, collect Energy, and build a defense.

| Sprint items | Proposed story points | Proposed task hours |
| :----------: | :-------------------: | :-----------------: |
|    **5**     |        **16**         |       **20**        |

---

## Team & Sprint Information

| Field                      | Your answer                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- |
| Team name                  | Team 2                                                                        |
| Team members               | Madison Jones, Kevin Bermingham, Daniel Colman, Sean Nguyen,Nathaniel Amazigo |
| Project                    | Bugs vs. Aliens                                                               |
| Sprint                     | Sprint 1                                                                      |
| Sprint start date          | T2026-10-23                                                                   |
| Sprint end date (demo day) | 2026-10-30                                                                    |
| GitHub Projects link       | https://github.com/users/chaoaj/projects/6                                    |

---

## 1. Sprint Goal

> Build a **5×10 defense-building prototype** where players can place **attackers, blockers, and economy towers**, collect **Energy**, and spend it on more towers.

### 1.1 Value to Stakeholders

Players can try the game's basic building interaction and understand the tradeoff between tower placement and available resources. The team can learn the development tools and GitHub workflow while delivering a small, integrated foundation.

### 1.2 Scope at a Glance

| Deliver this sprint                   | Build in later sprints               |
| ------------------------------------- | ------------------------------------ |
| Five lanes × ten columns              | Enemies, combat, and waves           |
| Three recognizable tower types        | Win/lose conditions                  |
| Tower selection and placement         | Gold, selling, and upgrades          |
| Placement costs and cooldowns         | Gems, rewards, and merchants         |
| Energy collection and balance display | Attacker and blocker combat behavior |

> [!IMPORTANT]
> **Prototype collection assumption:** Use a simple timed, click-to-collect interaction on economy towers. This keeps resource collection demonstrable without adding a wave system. This is a proposed prototype interaction, not a change to the final game's requirement that passive production occurs only during active, unpaused combat. Integrate that phase restriction when implementing the full economy.

---

## 2. GitHub Projects Checklist

- [x] Created a Sprint iteration named "Sprint 1" in GitHub Projects.
- [x] Moved all five selected issues into Sprint 1.
- [x] Every selected issue has a team-agreed story-point estimate.
- [x] Every selected issue has acceptance criteria.
- [ ] Every selected issue has tasks with hour estimates and named assignees in its comments.
- [x] Started the sprint by setting every selected issue to In Progress, following the professor's template.

---

## 3. The Five Sprint Items

Use the existing issues for PBI-01, PBI-02, and PBI-03. Add two new, narrowly scoped issues for basic tower types and basic Energy. PBI-30 and PBI-31 are proposed backlog identifiers following the existing 29 items, not actual GitHub issue numbers.

PBI-30 provides the three tower definitions; PBI-02 makes them available at startup; PBI-03 places them; PBI-31 owns the shared Energy balance and collection/spending operations.

| #   | Sprint Backlog Item (user story)                                                                                               | Story points, proposed | GitHub issue          |
| --- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------: | --------------------- |
| 1   | As a player, I want a clearly displayed five-lane battlefield so that I can plan where to place defenders.                     |                      3 | To be linked — PBI-01 |
| 2   | As a player, I want to begin with basic tower choices and starting Energy so that I can set up my defense.                     |                      2 | To be linked — PBI-02 |
| 3   | As a player, I want to place available towers on empty tiles so that I can build my defense.                                   |                      5 | To be linked — PBI-03 |
| 4   | As a player, I want distinct attacker, blocker, and economy towers so that I can recognize their intended roles when building. |                      3 | To be linked — PBI-30 |
| 5   | As a player, I want to collect Energy and spend it on towers so that resources limit how much I can build.                     |                      3 | To be linked — PBI-31 |
|     | **Total story points**                                                                                                         |                 **16** |                       |

The new items deliver only the initial tower and resource foundation. The full tower-role PBI-12 and two-currency economy PBI-07 remain open for their broader scope.

---

## 4. Work Distribution

Assign the tasks in Section 5 to actual team members, then replace the unassigned row with one row per person. These estimates total 10 tasks and 20 hours, including verification; they do not establish team capacity.

| Team member       | Tasks assigned (count) | Total hours |
| ----------------- | ---------------------: | ----------: |
| Madison Jones     |    Issue #3 & Issue #4 |           4 |
| Kevin Bermingham  |               Issue #2 |           4 |
| Daniel Colman     |              Issue #32 |           4 |
| Sean Nguyen       |    Issue #33 and setup |           4 |
| Nathaniel Amazigo |               Issue #4 |           4 |
| **Team total**    |                  **6** |      **20** |

**Is the work split fairly?** Yes

---

## 5. Demo Walkthrough

1. Open the prototype and show the five-lane, ten-column board.
2. Show the attacker, blocker, and economy tower choices, their costs, and starting Energy.
3. Place one of each tower and show the correct Energy deductions.
4. Attempt placement on an occupied tile and verify no Energy is spent.
5. Demonstrate cooldown feedback and rejection of an unaffordable placement.
6. Wait for an economy tower to become ready, collect its Energy, and use the increased balance to place another tower.

---

## 6. Definition of Done

- Each selected issue satisfies its acceptance criteria.
- The five features work together in the shared build.
- Another team member reviews the changes.
- The demo works without blocking errors.
- GitHub records actual progress, story points, tasks, hour estimates, and named assignees.
- The team confirms the proposed resource-collection interaction and initial balance values before implementation.

---
