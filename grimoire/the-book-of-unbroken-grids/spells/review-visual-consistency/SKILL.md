---
id: review-visual-consistency
name: Review Visual Consistency
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
target: UI component, page, screenshot, or design reference
tags: [ui, visual, consistency, review]
---

# Review Visual Consistency

## Prerequisites

- EXPECT a UI artifact and a project reference, token set, or established component pattern.
- ASSERT the target viewport and relevant state when reviewing a rendered result.

## Execution Pipeline

1. Compare typography, color, spacing, borders, radii, elevation, and iconography.
2. Identify deviations from project patterns.
3. Classify deviations by visibility and user impact.
4. Recommend the smallest corrective changes.

## Core Effect

Produce a focused visual consistency review with actionable corrections.

## Constraints & Limits

- MUST distinguish visual defects from intentional variation.
- MUST use project references as the comparison basis.
- MUST NOT recommend changes without identifying the affected element.
- SHOULD prioritize repeated or high-visibility inconsistencies.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every finding includes location, evidence, and correction.
- VERIFY recommendations preserve hierarchy and usability.
- EMIT findings grouped by priority.
