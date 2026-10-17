---
id: review-architecture
name: Review Architecture
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
class: Validation / Audit
target: Architecture proposal or existing system
tags: [architecture, review, tradeoffs, risk]
---

# Review Architecture

## Prerequisites

- EXPECT an architecture, system diagram, or implementation structure.
- ASSERT goals, constraints, quality attributes, and known tradeoffs.

## Execution Pipeline

1. Compare boundaries and dependencies against stated responsibilities.
2. Review coupling, cohesion, scalability, reliability, and operability.
3. Identify violated constraints, hidden dependencies, and risky assumptions.
4. Prioritize findings and propose targeted alternatives.

## Core Effect

Produce an evidence-based architecture review with risks and recommendations.

## Constraints & Limits

- MUST separate observed facts, assumptions, and recommendations.
- MUST explain the tradeoff behind each material recommendation.
- MUST NOT recommend broad rewrites without a specific failure or constraint.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every finding has evidence, impact, and priority.
- VERIFY recommendations address the stated goals.
- EMIT the review, tradeoffs, and open decisions.
