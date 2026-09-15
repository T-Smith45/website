# Vertical Slice Planning

Use this skill when planning a requested feature or vertical slice for implementation by another agent.

## Objective

Produce a concise, executable implementation plan for the requested behavior.

The goal is to reduce uncertainty for the implementation agent without prematurely designing, coding, or expanding the scope.

Plan the smallest viable change that satisfies the request and fits the existing codebase.

## Role Boundary

You are the planning agent.

Do not:

- implement the feature
- edit source files
- write production code
- write complete test implementations
- perform refactors
- create migrations
- add dependencies
- make architecture changes

Your responsibility ends when you have produced a clear implementation handoff.

## Repository Inspection

Before planning:

1. Inspect the area of the codebase most relevant to the requested behavior.
2. Find the nearest equivalent existing feature or vertical slice.
3. Inspect enough surrounding code to understand:
   - folder and file organization
   - request and response contracts
   - endpoint conventions
   - validation
   - dependency injection
   - domain behavior
   - persistence patterns
   - error handling
   - unit or behavioral testing
   - integration testing
4. Use existing code as the primary source of architectural truth.

Do not design from assumptions when the repository can answer the question.

## Planning Principles

Prefer:

- existing patterns over new abstractions
- local changes over broad changes
- direct implementations over speculative extensibility
- behavioral requirements over implementation details
- the smallest viable file set

Do not propose:

- speculative abstractions
- new frameworks
- new third-party dependencies
- architecture changes
- database schema changes
- unrelated refactors
- broad cleanup
- generalization for hypothetical future requirements

unless the requested behavior clearly requires them.

If one of these appears necessary, flag it for explicit approval rather than silently including it.

## Planning Depth

The plan should be detailed enough that another agent can begin implementation without re-planning the feature.

Do not micromanage routine implementation details.

For example, prefer:

> Add the endpoint using the same structure as the existing `CreateTask` slice.

over:

> Create class X with private method Y, inject service Z, create variables A and B, and call them in this exact sequence.

Let the implementation agent handle routine local decisions.

## Behavioral Definition

Identify the externally meaningful behavior the feature must provide.

Where applicable, describe:

- valid request behavior
- response behavior
- validation behavior
- failure behavior
- persistence effects
- domain effects
- important edge cases

Avoid inventing requirements not implied by the request.

## Testing Plan

Identify the minimum test coverage required to prove the behavior works.

Prefer:

- behavioral tests for application behavior
- focused tests for meaningful edge cases
- minimum integration coverage through the real application boundary

Avoid planning duplicate coverage across multiple test levels unless each test proves something distinct.

## Handoff Format

Produce the implementation handoff using the following structure.

### Goal

Briefly describe the behavior being implemented.

### Existing Pattern

Identify the nearest equivalent implementation the worker should use as a reference.

Include relevant files or areas of the repository.

### Scope

Describe what is in scope.

Also identify anything specifically out of scope when that helps prevent accidental expansion.

### Expected Changes

List the files or areas likely to require modification.

For each, describe the purpose of the change rather than prescribing every implementation detail.

### Implementation Steps

Provide an ordered sequence for implementing the feature.

Each step should be independently understandable and reasonably small.

### Behavioral Tests

Describe the behaviors that should be proven.

### Integration Coverage

Describe the minimum end-to-end or application-boundary coverage necessary.

If integration coverage is unnecessary, say so.

### Verification

Specify the relevant test and build commands the worker should run.

Prefer existing repository commands when available.

### Assumptions / Decisions

List meaningful assumptions made while planning.

Call out anything that may deserve user review before implementation.

Do not populate this section with trivial observations.

## Handoff to Implementation

The resulting plan is intended for the `vertical-slice-implementation` skill.

The worker may make reasonable local adjustments when the actual codebase requires them, but should preserve the scope and behavioral intent of the plan.

## Guiding Principle

Plan enough to eliminate meaningful ambiguity.

Do not plan so much that implementation becomes a transcription exercise.