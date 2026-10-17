---
id: model-interaction-states
name: Model Interaction States (UI)
rank: B
version: 1.0.0
status: active
domain: UI
author: Dion
maintainers:
  - Dion
contributors: []
created: 2026-10-17
updated: 2026-10-17
effort: medium
estimated_tokens: 2000-4000
class: Synthesis
target: Interactive UI component or flow
tags: [ui, interaction, state, feedback]
---

# Model Interaction States (UI)

## Prerequisites

- EXPECT a component or flow with defined user actions.
- ASSERT success, failure, loading, disabled, and empty conditions where applicable.

## Execution Pipeline

1. List user actions and resulting state changes.
2. Define initial, pending, success, failure, empty, disabled, and recovery states.
3. Map visible feedback, focus behavior, and available actions for each state.
4. Identify conflicting or unreachable states.

## Core Effect

Produce a complete interaction state model for implementation and review.

## Constraints & Limits

- MUST define feedback for actions that change state.
- MUST preserve user input during recoverable failures.
- MUST NOT leave loading, error, or disabled states ambiguous.
- SHOULD define recovery paths for failed actions.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every action has a defined result.
- VERIFY state transitions have no contradictory outputs.
- EMIT a state table and unresolved decisions.
