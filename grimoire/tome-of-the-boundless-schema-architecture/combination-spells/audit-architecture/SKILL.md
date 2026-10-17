---
id: audit-architecture
name: Audit Architecture
rank: A
version: 1.0.0
status: active
domain: Architecture
author: Dion
maintainers:
  - Dion
contributors: []
created: 2026-10-17
updated: 2026-10-17
effort: high
estimated_tokens: 4000-8000
class: Orchestration · Validation / Audit
target: Existing system architecture
tags: [architecture, audit, state, dependencies]
composes:
  - review-architecture
  - define-system-boundaries
  - model-data-flow
  - design-state-management
---

# Audit Architecture

## Prerequisites

- `review-architecture` is available.
- `define-system-boundaries` is available.
- `model-data-flow` is available.
- `design-state-management` is available.
- The existing architecture and its operating constraints are available.

## Execution Pipeline

1. Map boundaries and ownership.
2. Trace data flow and state lifecycle.
3. Review coupling, failure behavior, and quality attributes.
4. Consolidate findings by impact, confidence, and remediation effort.

## Core Effect

Produce a prioritized architecture audit with evidence and corrective options.

## Constraints & Limits

- MUST distinguish observed behavior from inferred design intent.
- MUST retain evidence from every composed skill.
- MUST NOT recommend changes without identifying the affected boundary or flow.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE duplicate findings are merged.
- VERIFY every finding has evidence, impact, and remediation.
- EMIT the audit and unresolved questions.
