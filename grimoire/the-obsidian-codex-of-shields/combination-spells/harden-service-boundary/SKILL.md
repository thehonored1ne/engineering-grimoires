---
id: harden-service-boundary
name: Harden Service Boundary
rank: A
version: 1.0.0
status: active
author: Dion
maintainers:
  - Dion
contributors: []
created: 2026-10-17
updated: 2026-10-17
effort: high
estimated_tokens: 4000-8000
class: Orchestration · Transformation
target: Service endpoint or external integration
tags: [security, service, boundary, hardening]
composes:
  - validate-input-boundaries
  - audit-authentication-authorization
  - assess-dependency-risk
---

# Harden Service Boundary

## Prerequisites

- `validate-input-boundaries` is available.
- `audit-authentication-authorization` is available.
- `assess-dependency-risk` is available.
- Service endpoints, identity rules, and dependency manifests are available.

## Execution Pipeline

1. Validate all external inputs and parser boundaries.
2. Enforce authentication, authorization, and ownership checks.
3. Assess runtime and build-time dependency exposure.
4. Apply prioritized hardening changes.
5. Verify rejected, unauthorized, and dependency-risk paths.

## Core Effect

Produce a hardened service boundary with documented controls and residual risks.

## Constraints & Limits

- MUST apply controls at the server or service boundary.
- MUST preserve valid behavior while rejecting unsafe requests.
- MUST NOT rely on client-side checks for protection.
- SHOULD use the smallest change that closes the identified risk.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE input, identity, permission, and dependency controls are verified.
- VERIFY failure responses do not disclose sensitive details.
- EMIT changes, tests, residual risks, and rollback considerations.
