---
id: audit-existing-ui-component
name: Audit Existing UI Component (UI)
rank: A
version: 1.0.0
status: active
domain: UI
author: Dion
maintainers:
  - Dion
contributors: []
created: 2026-10-17
updated: 2026-10-17
effort: high
estimated_tokens: 4000-8000
class: Orchestration · Validation / Audit
target: Existing UI component or implementation
tags: [ui, audit, accessibility, responsive, consistency]
composes:
  - analyze-layout-geometry
  - validate-accessibility
  - optimize-responsive-layout
  - review-visual-consistency
---

# Audit Existing UI Component (UI)

## Prerequisites

- `analyze-layout-geometry` is available.
- `validate-accessibility` is available.
- `optimize-responsive-layout` is available.
- `review-visual-consistency` is available.
- The component implementation or rendered output is available.
- Supported viewports and project design references are known.

## Execution Pipeline

1. Analyze layout geometry and structural alignment.
2. Review visual consistency against project references.
3. Audit accessibility semantics and interaction behavior.
4. Check responsive behavior across supported viewports.
5. Consolidate findings by severity, effort, and dependency.

## Core Effect

Produce a prioritized engineering audit of an existing UI component.

## Constraints & Limits

- MUST preserve evidence from every composed skill.
- MUST separate observed defects from recommendations.
- MUST NOT claim compliance without sufficient inspection.
- SHOULD identify dependencies between corrective actions.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE every finding has evidence, impact, and a recommended action.
- VERIFY duplicate findings are merged.
- EMIT a prioritized audit report and remaining limitations.
