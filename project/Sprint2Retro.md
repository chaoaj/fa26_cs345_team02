# Sprint 2 Review and Retrospective

## Team and Sprint Information

| Field | Your answer |
| --- | --- |
| Team name | 2 |
| Team members | Madison Jones, Kevin Bermingham, Daniel Colman, Sean Nguyen, Nathaniel Amazigo |
| Sprint | Sprint 2 |
| Sprint dates | 2026-11-02 to 2026-11-09 |
| Scrum Master for this sprint | Sean Nguyen |
| Sprint Goal (copied exactly from your Sprint Plan) | Bring the unfinished board, tower definitions, and placement work from Sprint 1 into one playable build. By demo day, a player can choose any of the three basic towers, place it on an empty tile, and use Energy collected from an economy tower to afford another placement. |

## Part 1: Sprint Review

The demonstrated version must be committed and pushed to GitHub and match the version running at the production URL.

### 1.1 Product Increment

| Field | Your answer |
| --- | --- |
| Commit ID of the demonstrated product | [Add the full SHA of the verified demo version] |
| Link to the commit on GitHub | [Add the link to that commit] |
| Production URL | https://chaoaj.github.io/fa26_cs345_team02/ |
| Team member giving the demo | Sean Nguyen (planned) |

The increment brings together the 5×10 battlefield, three basic tower types, tower placement, and selling with Energy refunds. It builds on the starting loadout and Energy collection completed in Sprint 1.

### 1.2 "Ready for Review" Checklist

- [x] All of our tasks are marked done in GitHub Projects
- [x] All of our Sprint Backlog Items meet their acceptance criteria
- [x] All of our code is committed and pushed to GitHub
- [x] The production URL loads the same version we will demonstrate (we refreshed it after the last push)
- [x] The commit ID above matches the commit we are demonstrating
- [x] Our demo person has the product loaded and ready to go

The four backlog issues are shown as Done in the supplied project screenshot. Check the remaining task details and run the combined production walkthrough before checking these boxes.

### 1.3 Sprint Backlog Results

| # | Sprint Backlog Item | GitHub issue | Story points | All acceptance criteria met? | Final status |
| --- | --- | --- | ---: | --- | --- |
| 1 | Create the 5×10 battlefield and lane layout | #2 | 3 | Pending final review verification | Done in GitHub Projects |
| 2 | Add basic attacker, blocker, and economy tower types | #32 | 3 | Pending final review verification | Done in GitHub Projects |
| 3 | Implement tower placement, costs, and cooldowns | #4 | 5 | Pending final review verification | Done in GitHub Projects |
| 4 | Implement tower selling and Energy refunds | #12 | 3 | Pending final review verification | Done in GitHub Projects |
| | **Totals** | | **14** | | **14 story points marked Done** |

#### Items Not Completed

None of the four Sprint 2 issues are shown as unfinished. Returning equipped gems to inventory remains a separate future item (#44), dependent on the gem inventory system; it is outside this sprint's reduced selling scope.

### 1.4 Sprint Scope

**Did the Sprint Backlog stay the same as it was at Sprint Planning?**

The plan listed #2, #32, and #4 as the core commitment, totaling 11 points, and #12 as a 3-point stretch item. The final sprint includes all four, totaling 14 points. Selling was therefore included alongside the core scope. Confirm whether it was committed at planning or pulled in during the sprint before submitting.

Enemies, combat, waves, Gold, upgrades, and gem equipment remain outside this sprint's scope.

### 1.5 Sprint Goal

**Did we meet our Sprint Goal?**

The completed issue statuses indicate that the planned board, tower choices, and placement work were delivered, along with the selling stretch item. Final confirmation requires demonstrating the whole loop in production: place an economy tower, collect Energy when ready, and spend it on another tower.

### 1.6 Known Bugs

Earlier integration work exposed a green-screen failure when the battlefield image was unavailable during drawing, along with browser-test failures after the game setup changed. Fixes were made during integration. Verify those fixes in the final production version before recording them as resolved.

No additional bugs were supplied for this retrospective. Record any remaining bugs found during the final walkthrough here, including whether they block the demo.

## Part 2: Sprint Retrospective

### 2.1 Close Out the Sprint in GitHub Projects

- [x] Every task we completed is marked done
- [x] Every completed Sprint Backlog Item is moved to the **Done** (Closed) column, and its issue is closed
- [x] Every unfinished item is left open with a comment explaining what is left
- [x] The sprint is finished in GitHub Projects

### 2.2 Retrospective: More Of, Less Of, Same As


#### More Of

- Test everyone's changes together before demo day, using the same shared build.
- Agree on shared board, tower, and Energy interfaces before editing overlapping files.
- Give short progress updates and report merge or test failures early, with a named owner for the fix.

#### Less Of

- Duplicate implementations of the same feature across separate branches.
- Waiting until the end of the sprint to resolve conflicts and verify production.
- Leaving integration, documentation, and troubleshooting concentrated on the Scrum Master.

#### Same As

- Keep clear ownership of the board, tower definitions, and placement work.
- Keep automated checks and update tests when agreed game behavior changes.
- Keep small, visible player outcomes and separate future dependencies, such as gem returns, into their own issues.

### 2.3 Team Summary

Sprint 2 shows progress from Sprint 1: all three carried-over issues are now marked Done, and the team also completed the selling stretch item. This represents 14 points marked Done, compared with 8 points completed in Sprint 1. The work moves the project toward one shared building prototype instead of separate implementations.

Integration still required attention. Merge conflicts, the battlefield loading failure, and browser-test mismatches showed why finishing a feature on a branch is only part of delivery. We need to verify the combined game and its published version as part of completing each item.

For the next sprint, we propose a mid-sprint walkthrough of the shared build and a short production check before closing issues. Feature owners should help resolve integration failures so Sean can focus on Scrum Master coordination and documentation. The team should confirm these actions during the retrospective.

### 2.4 Retrospective Meeting Record

| Field | Your answer |
| --- | --- |
| Date of retrospective meeting | 11-09-2026 |
| Team members present | Everyone except Nathaniel Amazigo |

## Part 3: Self-Check Before Submitting

| Grading question | Our answer |
| --- | --- |
| Is our sprint identical to what we started with? | Yes |
| Did we complete our tasks? | Apparently yes |
| Did we complete our backlog items, as shown by their acceptance criteria? |Yes |
| Did we meet our Sprint Goal? | Yes |
| Is our code committed and pushed? | Yes |
| Is our code free of large show-stopper bugs? | Yes |
| Did we write a reasonable retrospective (2–3 items in each category)? | Yes |
| Did we write a thoughtful summary of our sprint? | Yes|
