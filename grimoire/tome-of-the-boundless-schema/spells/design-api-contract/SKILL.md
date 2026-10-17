---
id: design-api-contract
name: Design API Contract
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
target: Service requirements or API change
tags: [architecture, api, contract, integration]
---

# Design API Contract

## Prerequisites

- EXPECT consumer needs, service responsibilities, and data examples.
- ASSERT transport, authentication, and error conventions when available.

## Execution Pipeline

1. Define resources, operations, inputs, outputs, and errors.
2. Specify validation, idempotency, pagination, and versioning needs.
3. Document authorization and observable side effects.
4. Produce example requests and responses.

## Core Effect

Produce an explicit API contract that consumers and implementers can use independently.

## Constraints & Limits

- MUST define success and failure responses.
- MUST make compatibility and versioning behavior explicit.
- MUST NOT expose internal storage models without a clear contract reason.
- SHOULD prefer consistent conventions over endpoint-specific behavior.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every operation has inputs, outputs, errors, and authorization rules.
- VERIFY examples match the defined schema.
- EMIT the contract and compatibility notes.
