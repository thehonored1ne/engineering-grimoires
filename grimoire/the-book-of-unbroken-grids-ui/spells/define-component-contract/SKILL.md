---
id: define-component-contract
name: Define Component Contract
rank: C
version: 1.0.0
status: active
domain: UI
author: Dion
maintainers:
  - Dion
contributors: []
created: 2026-10-17
updated: 2026-10-17
effort: low
estimated_tokens: 1000-2000
class: Extraction · Synthesis
target: UI component requirements or implementation
tags: [ui, component, api, props]
---

# Define Component Contract

## Prerequisites

- EXPECT a component purpose, usage context, or existing implementation.
- ASSERT required content, interactions, and states are identifiable.

## Execution Pipeline

1. Extract inputs, outputs, states, events, and accessibility requirements.
2. Define the smallest useful public API.
3. Specify defaults, constraints, and usage examples.

## Core Effect

Produce a clear component contract that separates public behavior from implementation details.

## Constraints & Limits

- MUST make required and optional inputs explicit.
- MUST define state and event behavior.
- MUST NOT expose internal implementation details unnecessarily.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every required behavior maps to a contract field.
- VERIFY the contract supports the stated use cases.
- EMIT the contract, examples, and open questions.
