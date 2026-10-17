---
id: threat-model-feature
name: Threat Model Feature
rank: B
version: 1.0.0
status: active
domain: Security
author: Dion
maintainers:
  - Dion
contributors: []
created: 2026-10-17
updated: 2026-10-17
effort: medium
estimated_tokens: 2000-4000
class: Validation / Audit
target: Feature design, data flow, or architecture
tags: [security, threat-model, risk, trust-boundary]
---

# Threat Model Feature

## Prerequisites

- EXPECT feature purpose, actors, data, and system boundaries.
- ASSERT sensitive assets and trust boundaries are identifiable.

## Execution Pipeline

1. Identify assets, actors, entry points, and trust boundaries.
2. Enumerate abuse cases and likely attack paths.
3. Assess impact, likelihood, and existing controls.
4. Prioritize mitigations by risk reduction and implementation effort.

## Core Effect

Produce a focused threat model with prioritized security mitigations.

## Constraints & Limits

- MUST distinguish threats, vulnerabilities, and impacts.
- MUST identify assumptions behind each risk rating.
- MUST NOT claim complete coverage from an isolated feature review.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every critical asset and entry point has a threat assessment.
- VERIFY mitigations map to specific threats.
- EMIT the threat model, risk ratings, and open questions.
