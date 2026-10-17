---
id: analyze-layout-geometry
name: Analyze Layout Geometry
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
target: UI layout, screenshot, or component specification
tags: [ui, layout, geometry, spacing]
---

# Analyze Layout Geometry

## Attributes & Metadata

- **Rank:** C
- **Strategy:** Inspect, measure, report
- **Target:** UI layout, screenshot, or component specification

## Preconditions

- EXPECT a layout, screenshot, or component specification.
- ASSERT viewport dimensions and relevant design tokens when available.
- REJECT inputs without enough visual or structural information to assess geometry.

## Execution Pipeline

1. Identify containers, alignment axes, and layout boundaries.
2. Measure spacing, sizing, proportions, and gaps.
3. Compare values against stated or inferred design tokens.
4. Report inconsistencies and corrective changes.

## Core Effect

Produce a concise geometry assessment with actionable layout corrections.

## Constraints & Limits

- MUST distinguish measured values from estimates.
- MUST preserve intentional hierarchy and alignment.
- MUST NOT recommend arbitrary spacing without a stated basis.
- SHOULD identify the smallest structural change that resolves each issue.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every reported issue identifies its affected element.
- VERIFY recommendations address alignment, sizing, or spacing directly.
- EMIT findings grouped by severity and location.
