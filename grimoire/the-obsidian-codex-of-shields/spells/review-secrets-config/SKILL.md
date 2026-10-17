---
id: review-secrets-config
name: Review Secrets and Configuration
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
class: Validation / Audit · Sanitization
target: Configuration, deployment settings, or repository
tags: [security, secrets, configuration, deployment]
---

# Review Secrets and Configuration

## Prerequisites

- EXPECT repository, deployment configuration, or environment definitions.
- ASSERT secret sources and deployment environments are known.

## Execution Pipeline

1. Identify credentials, keys, tokens, private data, and security settings.
2. Check storage, exposure, access, rotation, and environment separation.
3. Detect committed secrets, unsafe defaults, verbose errors, and permissive settings.
4. Recommend removal, rotation, or configuration changes.

## Core Effect

Produce a secrets and security configuration review.

## Constraints & Limits

- MUST NOT print or reproduce secret values.
- MUST treat exposed credentials as compromised until rotated.
- MUST separate development, test, and production configuration.
- SHOULD use managed secret storage where available.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE findings identify locations without exposing values.
- VERIFY unsafe defaults and committed secrets are addressed.
- EMIT findings, rotation actions, and configuration corrections.
