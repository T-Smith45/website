# Vertical Slice Implementation

Use this skill when implementing a requested feature or vertical slice in an existing codebase.

## Objective

Implement the requested vertical slice end-to-end with the smallest viable change that satisfies the requested behavior.

Prefer completing the feature within the project's existing architecture and conventions rather than improving or redesigning surrounding code.

## Autonomy

Make reasonable implementation decisions without asking for clarification about routine implementation details.

Only stop for clarification when the requested behavior is materially ambiguous or proceeding would require a significant architectural, persistence, dependency, or product decision.

## Project Conventions

Before making changes:

1. Inspect the relevant existing feature or nearest equivalent implementation.
2. Identify the project's established conventions for:
   - folder and file organization
   - request and response models
   - validation
   - dependency injection
   - persistence
   - error handling
   - testing
3. Follow those conventions unless the requested feature explicitly requires otherwise.

Use the nearest equivalent implementation as the primary example for how the new slice should be structured.

Prefer consistency with the existing project over introducing a theoretically cleaner pattern.

## Working From a Plan

When a planning agent provides an implementation plan:

1. Treat the plan as the intended scope and implementation direction.
2. Verify its assumptions against the actual codebase.
3. Follow the plan where it matches the repository and requested behavior.
4. Make reasonable local adjustments when necessary to fit existing conventions.
5. Do not expand the plan into unrelated work.
6. Flag material deviations in the completion report.

Do not restart the planning process unless the plan contains a material blocker or incorrect assumption.

## Scope Discipline

Prefer the smallest viable implementation.

Do not introduce any of the following without explicit approval:

- speculative abstractions
- generalized frameworks for hypothetical future features
- new third-party dependencies
- architecture changes
- database schema changes or migrations
- unrelated refactors
- broad cleanup
- renaming unrelated types or files
- stylistic changes outside the affected slice

If existing code is imperfect but sufficient for the requested feature, leave it alone.

Do not combine feature implementation with opportunistic refactoring.

## Implementation

Implement the complete vertical slice required for the requested behavior.

This may include, where applicable:

- endpoint or external entry point
- request and response contracts
- validation
- application behavior
- domain behavior
- persistence interaction
- dependency registration
- error handling
- tests

Do not create layers that the existing project does not already use.

Keep changes localized to the feature whenever practical.

## Testing

Add behavioral tests that prove the requested behavior.

Test externally meaningful behavior rather than implementation details.

Prefer coverage such as:

- valid input produces the expected result
- invalid input produces the expected failure
- meaningful edge cases behave correctly
- persistence or domain effects occur as expected
- existing behavior affected by the feature remains intact

Add only the minimum integration coverage necessary to prove the feature works through its real application boundary.

Do not duplicate identical behavior across excessive unit and integration tests.

## Verification

Before finishing:

1. Run the relevant behavioral or unit tests.
2. Run the relevant integration tests.
3. Run the affected project or solution build.
4. Fix failures caused by the implementation.
5. Do not silently ignore failures.

Prefer the narrowest relevant commands first.

Run broader test suites only when justified by the scope of the change or normal repository workflow.

If an unrelated existing failure prevents complete verification, report it explicitly.

## Completion Report

At the end, provide:

### Summary

Briefly explain what was implemented.

### Important Diff

Show the important changes.

Focus on:

- behavior added
- important contracts
- domain or persistence effects
- tests added
- architecture-relevant changes

Do not dump every mechanical edit.

### Verification

Report the commands run and whether they passed.

### Plan Deviations

Identify any material deviation from the supplied plan and explain why it was necessary.

If there were no meaningful deviations, say so.

### Assumptions / Review

Flag implementation assumptions, tradeoffs, or decisions that deserve review.

Do not invent concerns merely to fill the section.

## Development Workflow

Keep these phases separate:

1. Plan
2. Implement
3. Review / Refactor

During implementation, do not perform speculative cleanup or broad refactoring.

Those belong to a separate review task.

## Guiding Principle

When choosing between:

- a small change that satisfies the requested behavior
- a more extensible or architecturally elaborate solution

choose the small change unless the current requirements clearly justify the additional complexity.