---
id: model-data-flow
name: Model Data Flow
rank: B
version: 1.0.0
status: active
domain: Architecture
author: Dion
maintainers:
  - Dion
contributors: []
created: 2026-10-17
updated: 2026-10-17
effort: medium
estimated_tokens: 2000-4000
class: Extraction · Synthesis
target: Feature requirements or system design
tags: [architecture, data, flow, dependencies]
---

# Model Data Flow

## Prerequisites

- EXPECT a feature, workflow, or system behavior to trace.
- ASSERT data sources, transformations, destinations, and retention needs are available.

## Execution Pipeline

1. Identify sources, consumers, transformations, and storage points.
2. Trace synchronous and asynchronous paths.
3. Mark ownership, trust boundaries, failure paths, and retries.
4. Identify duplicate, stale, or unnecessary transfers.

## Core Effect

Produce a data flow model that exposes dependencies, ownership, and failure behavior.

## Constraints & Limits

- MUST identify sensitive data and its handling path.
- MUST distinguish source of truth from derived data.
- MUST NOT assume delivery, ordering, or consistency without evidence.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every data path has a source and destination.
- VERIFY failure and retry behavior is represented.
- EMIT the flow model and risk areas.
