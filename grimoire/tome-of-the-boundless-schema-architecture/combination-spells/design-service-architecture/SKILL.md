---
id: design-service-architecture
name: Design Service Architecture
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
class: Orchestration · Synthesis
target: Service or feature architecture request
tags: [architecture, service, api, data-flow]
composes:
  - define-system-boundaries
  - design-api-contract
  - model-data-flow
---

# Design Service Architecture

## Prerequisites

- `define-system-boundaries` is available.
- `design-api-contract` is available.
- `model-data-flow` is available.
- Service goals, consumers, and major data flows are known.

## Execution Pipeline

1. Define system boundaries and ownership.
2. Model data sources, transformations, and destinations.
3. Design the service API contract.
4. Reconcile interfaces, data flow, failure behavior, and operational needs.

## Core Effect

Produce a coherent service architecture with boundaries, data flow, and API contract.

## Constraints & Limits

- MUST preserve ownership and failure decisions from each composed skill.
- MUST resolve contradictions before emitting the design.
- MUST NOT hide cross-boundary dependencies.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every API operation maps to an owned capability and data flow.
- VERIFY errors, retries, and dependencies are represented.
- EMIT the architecture, contracts, tradeoffs, and open decisions.
