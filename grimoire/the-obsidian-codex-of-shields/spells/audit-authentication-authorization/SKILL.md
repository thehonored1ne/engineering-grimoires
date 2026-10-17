---
id: audit-authentication-authorization
name: Audit Authentication and Authorization
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
class: Validation / Audit
target: Identity, session, or access-control implementation
tags: [security, authentication, authorization, access-control]
---

# Audit Authentication and Authorization

## Prerequisites

- EXPECT identity flows, protected resources, roles, and permission rules.
- ASSERT session, token, and account recovery behavior when applicable.

## Execution Pipeline

1. Trace login, logout, session, token, and recovery flows.
2. Map resources to required permissions and ownership checks.
3. Check privilege escalation, enumeration, replay, expiry, and revocation risks.
4. Prioritize control gaps and corrective actions.

## Core Effect

Produce an identity and access-control audit with evidence and remediation.

## Constraints & Limits

- MUST enforce authorization at every protected resource boundary.
- MUST distinguish authentication from authorization.
- MUST NOT infer permission from client-controlled state.
- SHOULD use least privilege and deny-by-default behavior.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE each protected action has an authorization rule.
- VERIFY unauthorized, expired, and revoked credentials fail safely.
- EMIT findings with affected roles, resources, and controls.
