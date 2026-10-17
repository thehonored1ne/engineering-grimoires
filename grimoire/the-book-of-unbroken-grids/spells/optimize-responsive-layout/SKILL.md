---
id: optimize-responsive-layout
name: Optimize Responsive Layout
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
class: Transformation
target: Responsive UI implementation or layout specification
tags: [ui, responsive, layout, mobile]
---

# Optimize Responsive Layout

## Attributes & Metadata

- **Rank:** B
- **Strategy:** Inspect, model, adjust, verify
- **Target:** Responsive UI implementation or layout specification

## Preconditions

- EXPECT supported viewport ranges and primary content priorities.
- ASSERT the existing layout system, breakpoints, and design tokens when available.
- REJECT changes that optimize one viewport by breaking required content or behavior elsewhere.

## Execution Pipeline

1. Identify overflow, wrapping, collision, and hierarchy failures.
2. Define content-driven layout rules and breakpoint behavior.
3. Adjust containers, grids, flex rules, typography, and media sizing.
4. Verify key states across supported viewport ranges.

## Core Effect

Produce a responsive layout that preserves content hierarchy and interaction quality across viewport sizes.

## Constraints & Limits

- MUST prioritize content and interaction requirements over fixed dimensions.
- MUST preserve readable text and usable controls at supported sizes.
- MUST NOT add breakpoints without a layout failure or content requirement.
- SHOULD use fluid sizing before breakpoint-specific overrides.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE no required content overflows or becomes inaccessible.
- VERIFY layout behavior at minimum, maximum, and intermediate widths.
- VERIFY touch targets, focus order, and text wrapping.
- EMIT changed rules, tested viewports, and remaining limitations.
