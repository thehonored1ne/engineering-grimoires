---
id: define-system-boundaries
name: Define System Boundaries
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
target: System requirements or existing architecture
tags: [architecture, boundaries, ownership, dependencies]
---

# Define System Boundaries

## Prerequisites

- EXPECT system goals, major capabilities, or an existing architecture.
- ASSERT actors, data owners, and external dependencies are identifiable.

## Execution Pipeline

1. Identify capabilities, actors, data owners, and external systems.
2. Group responsibilities into cohesive boundaries.
3. Define interfaces and ownership between boundaries.
4. Record trust, failure, and change boundaries.

## Core Effect

Produce a system boundary model with ownership and interface responsibilities.

## Constraints & Limits

- MUST assign ownership for each critical capability and data set.
- MUST expose cross-boundary communication explicitly.
- MUST NOT create boundaries without a responsibility or change reason.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every capability has one primary owner.
- VERIFY boundary interfaces identify inputs, outputs, and failure behavior.
- EMIT the boundary map and unresolved decisions.
