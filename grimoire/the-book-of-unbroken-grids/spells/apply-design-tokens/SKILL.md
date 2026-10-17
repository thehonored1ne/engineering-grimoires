---
id: apply-design-tokens
name: Apply Design Tokens
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
class: Transformation
target: UI styles or component implementation
tags: [ui, styling, tokens, consistency]
---

# Apply Design Tokens

## Prerequisites

- EXPECT an existing token set or documented design values.
- ASSERT token names, scopes, and supported themes when available.

## Execution Pipeline

1. Identify raw colors, spacing, typography, sizing, and elevation values.
2. Map values to existing tokens.
3. Replace unsupported or duplicated values with the closest valid token.
4. Report values with no suitable token.

## Core Effect

Align UI styles with the project’s design token system.

## Constraints & Limits

- MUST reuse existing tokens before introducing new values.
- MUST preserve contrast and hierarchy.
- MUST NOT create aliases that duplicate existing tokens.
- SHOULD propose new tokens only when a reusable value is missing.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE changed values resolve to valid tokens.
- VERIFY states and themes retain sufficient contrast.
- EMIT changed mappings and proposed tokens.
