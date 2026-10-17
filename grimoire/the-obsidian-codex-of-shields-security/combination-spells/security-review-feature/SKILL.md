---
id: security-review-feature
name: Security Review Feature
rank: A
version: 1.0.0
status: active
domain: Security
author: Dion
maintainers:
  - Dion
contributors: []
created: 2026-10-17
updated: 2026-10-17
effort: high
estimated_tokens: 4000-8000
class: Orchestration · Validation / Audit
target: Feature design or implementation
tags: [security, feature, audit, threat-model]
composes:
  - threat-model-feature
  - validate-input-boundaries
  - audit-authentication-authorization
  - review-secrets-config
---

# Security Review Feature

## Prerequisites

- `threat-model-feature` is available.
- `validate-input-boundaries` is available.
- `audit-authentication-authorization` is available.
- `review-secrets-config` is available.
- Feature flows, data, identities, and deployment configuration are available.

## Execution Pipeline

1. Model feature threats, assets, actors, and attack paths.
2. Validate external and cross-boundary inputs.
3. Audit authentication, authorization, and resource ownership.
4. Review secrets and security configuration.
5. Consolidate findings by severity, exploitability, and remediation effort.

## Core Effect

Produce a prioritized security review for a feature from design through deployment configuration.

## Constraints & Limits

- MUST preserve evidence from every composed skill.
- MUST separate confirmed findings from assumptions.
- MUST NOT expose secrets or claim complete coverage without defined scope.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every critical asset, input, and protected action is covered.
- VERIFY duplicate findings are merged and severity is justified.
- EMIT findings, remediation, verification steps, and limitations.
