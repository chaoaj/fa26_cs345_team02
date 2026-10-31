# Sprint 1 Review and Retrospective

> **How to use this template:** Make a copy named for your sprint (for example `Sprint1Retro.md`). Replace every `[bracketed placeholder]` with your team's information. Delete the instruction lines (they start with ✏️) and the example at the end before you submit. Commit and push this file with your final code.

## Team and Sprint Information

| Field | Your answer |
| --- | --- |
| Team name | 2 |
| Team members | Madison Jones, Kevin Bermingham, Daniel Colman, Sean Nguyen, Nathaniel Amazigo |
| Sprint | Sprint 1 |
| Sprint dates | 2026-10-23 to 2026-10-30 |
| Scrum Master for this sprint | Sean Nguyen |
| Sprint Goal (copied exactly from your Sprint Plan) | Build a **5×10 defense-building prototype** where players can place **attackers, blockers, and economy towers**, collect **Energy**, and spend it on more towers. |

## Part 1: Sprint Review

At the Sprint Review you demonstrate your product to the stakeholder (your instructor). The version you demonstrate must be committed and pushed to GitHub, and it must be identical to what is running at your production URL.

### 1.1 Product Increment

✏️ _When your product is "ready" (see the checklist in 1.2), record the commit you will demonstrate._

✏️ _To find the commit ID:_

- _In GitHub Desktop, open the **History** tab, select your latest commit, and copy its ID (right-click the commit and choose **Copy SHA**)._
- _On GitHub.com, go to your repository, select **Commits**, and use the copy button next to the commit._
- _From a terminal in your repository, run `git rev-parse HEAD`._

| Field | Your answer |
| --- | --- |
| Commit ID of the demonstrated product | daf76fa3fe0f8ffed5eb305e64cdcf558b21c6ae |
| Link to the commit on GitHub | https://github.com/chaoaj/fa26_cs345_team02/commit/daf76fa3fe0f8ffed5eb305e64cdcf558b21c6ae |
| Production URL | https://chaoaj.github.io/fa26_cs345_team02/ |
| Team member giving the demo | Sean Nguyen |

### 1.2 "Ready for Review" Checklist

- [x] All of our tasks are marked done in GitHub Projects
- [x] All of our Sprint Backlog Items meet their acceptance criteria
- [x] All of our code is committed and pushed to GitHub
- [x] The production URL loads the same version we will demonstrate (we refreshed it after the last push)
- [x] The commit ID above matches the commit we are demonstrating
- [x] Our demo person has the product loaded and ready to go

### 1.3 Sprint Backlog Results

| # | Sprint Backlog Item | GitHub issue | Story points | All acceptance criteria met? | Final status |
| --- | --- | --- | ---: | --- | --- |
| 1 | Implement basic Energy collection and tower spending | #33 | 3 | Yes | Done |
| 2 | Set up code quality checks and a beginner-friendly workflow | #34 | 3 | Yes | Done |
| 3 | Initialize each run with a consistent starting loadout | #3 | 2 | Yes | Done |
| 4 | Create the 5×10 battlefield and lane layout | #2 | 3 | No | Not completed |
| 5 | Implement tower placement, costs, and cooldowns | #4 | 5 | No | Not completed |
| 6 | Add basic attacker, blocker, and economy tower types | #32 | 3 | No | Not completed |
|  | **Totals** |  | **19** |  | **8 story points completed** |

#### Items Not Completed

- **Item 4 — Battlefield and lane layout:** The 5×10 battlefield was implemented differently by different team members. The code still needs to be unified into a consistent structure.
- **Item 5 — Tower placement, costs, and cooldowns:** Partially implemented, but the different implementations need to be consolidated.
- **Item 6 — Tower types:** Implemented, but the code still needs to be unified and consolidated.

### 1.4 Sprint Scope

**Did the Sprint Backlog stay the same as it was at Sprint Planning?**

No. We changed some acceptance criteria and added backlog items during the sprint.

### 1.5 Sprint Goal

**Did we meet our Sprint Goal?**

We did not meet the Sprint Goal. We intended to demonstrate the 5×10 battlefield to the stakeholder, but we failed to deliver a unified, working grid.

### 1.6 Known Bugs

No known code-related bugs were identified during development.

## Part 2: Sprint Retrospective

### 2.1 Close Out the Sprint in GitHub Projects

- [x] Every task we completed is marked done
- [x] Every completed Sprint Backlog Item is moved to the **Done** (Closed) column, and its issue is closed
- [x] Every unfinished item is left open with a comment explaining what is left
- [x] The sprint is finished in GitHub Projects

### 2.2 Retrospective: More Of, Less Of, Same As

No meeting was held because of the lack of cooperation.

#### More Of

- More meetings
- More participation

#### Less Of

- Duplicated work and conflicting implementations.
- Lack of responses

#### Same As

- Timely code delivery
- Structured commit workflow

### 2.3 Team Summary

The sprint did not achieve its goal, with more than 50% of the planned story points left incomplete. Limited cooperation and communication between the Scrum Master and team members were the main contributing factors.

### 2.4 Retrospective Meeting Record

| Field | Your answer |
| --- | --- |
| Date of retrospective meeting | 2026-10-30 |
| Team members present | Sean Nguyen, Daniel Colman |

## Part 3: Self-Check Before Submitting

| Grading question | Our answer |
| --- | --- |
| Is our sprint identical to what we started with? | Yes |
| Did we complete our tasks? | Partly |
| Did we complete our backlog items, as shown by their acceptance criteria? | Yes |
| Did we meet our Sprint Goal? | No |
| Is our code committed and pushed? | Yes |
| Is our code free of large show-stopper bugs? | Yes |
| Did we write a reasonable retrospective (2–3 items in each category)? | Yes |
| Did we write a thoughtful summary of our sprint? | Yes |
