---
id: design-state-management
name: Design State Management
rank: B
version: 1.0.0
status: active
author: Dion
maintainers:
  - Dion
contributors: []
created: 2026-10-17
updated: 2026-10-17
effort: medium
estimated_tokens: 2000-4000
class: Synthesis
target: Application state requirements or implementation
tags: [architecture, state, lifecycle, consistency]
---

# Design State Management

## Prerequisites

- EXPECT state sources, consumers, lifecycle events, and consistency needs.
- ASSERT whether state is local, shared, remote, cached, or derived.

## Execution Pipeline

1. Classify state by owner, lifetime, mutability, and source of truth.
2. Define transitions, invalidation, synchronization, and recovery.
3. Select the smallest suitable storage and update pattern.
4. Document stale, loading, empty, and failure behavior.

## Core Effect

Produce a state model that limits coupling and makes lifecycle behavior explicit.

## Constraints & Limits

- MUST identify one source of truth for each state value.
- MUST separate derived state from persisted state.
- MUST NOT introduce shared state without a sharing requirement.
- SHOULD keep state ownership close to its consumers.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every state transition has an owner and trigger.
- VERIFY invalidation and recovery behavior.
- EMIT the state model and implementation recommendation.
