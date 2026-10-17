---
id: validate-input-boundaries
name: Validate Input Boundaries
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
class: Validation / Audit · Sanitization
target: Input schema, endpoint, parser, or data boundary
tags: [security, input, validation, sanitization]
---

# Validate Input Boundaries

## Prerequisites

- EXPECT input sources, schemas, trust levels, and processing paths.
- ASSERT validation and encoding conventions when available.

## Execution Pipeline

1. Identify every external and cross-boundary input.
2. Check type, size, range, format, encoding, and allowed values.
3. Check validation order, error handling, and downstream assumptions.
4. Identify injection, parser, traversal, and deserialization risks.

## Core Effect

Produce an input boundary assessment with concrete validation and handling changes.

## Constraints & Limits

- MUST validate at the trust boundary and enforce constraints server-side.
- MUST define safe handling for malformed input.
- MUST NOT treat client-side validation as a security control.
- SHOULD use allowlists where the valid set is known.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every boundary has explicit validation rules.
- VERIFY rejected input cannot reach unsafe processing paths.
- EMIT findings, test cases, and remediation steps.
