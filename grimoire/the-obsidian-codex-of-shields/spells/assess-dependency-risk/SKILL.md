---
id: assess-dependency-risk
name: Assess Dependency Risk
rank: C
version: 1.0.0
status: active
author: Dion
maintainers:
  - Dion
contributors: []
created: 2026-10-17
updated: 2026-10-17
effort: low
estimated_tokens: 1000-2000
class: Validation / Audit
target: Dependency manifest, lockfile, or build configuration
tags: [security, dependencies, supply-chain, packages]
---

# Assess Dependency Risk

## Prerequisites

- EXPECT dependency manifests and lockfiles for the target project.
- ASSERT package sources, supported versions, and update policy when available.

## Execution Pipeline

1. Inventory direct, transitive, optional, and build-time dependencies.
2. Check versions, advisories, source integrity, and maintenance signals.
3. Identify excessive permissions, unused packages, and unpinned ranges.
4. Prioritize upgrades, removals, isolation, or compensating controls.

## Core Effect

Produce a dependency risk assessment with actionable remediation.

## Constraints & Limits

- MUST distinguish confirmed advisories from heuristic risk signals.
- MUST account for runtime and build-time exposure.
- MUST NOT recommend upgrades without checking compatibility impact.
- SHOULD minimize dependency count and privilege.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every high-risk dependency has an action or documented exception.
- VERIFY lockfile and manifest consistency.
- EMIT findings, affected versions, and remediation options.
