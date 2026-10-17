---
id: compose-accessible-responsive-component
name: Compose Accessible Responsive Component (UI)
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
class: Orchestration · Synthesis
target: UI component request or implementation
tags: [ui, component, responsive, accessibility, composition]
composes:
  - synthesize-ui-component
  - analyze-layout-geometry
  - validate-accessibility
  - optimize-responsive-layout
---

# Compose Accessible Responsive Component (UI)

## Prerequisites

- `synthesize-ui-component` is available.
- `analyze-layout-geometry` is available.
- `validate-accessibility` is available.
- `optimize-responsive-layout` is available.
- Component purpose, content, interactions, and supported viewports are defined.

## Execution Pipeline

1. Synthesize the component structure and behavior.
2. Analyze its layout geometry.
3. Optimize responsive behavior across supported viewports.
4. Validate semantics, keyboard access, focus, and accessible states.
5. Consolidate findings and emit the final component or implementation plan.

## Core Effect

Produce a reusable UI component that preserves structure, layout quality, responsive behavior, and accessibility requirements.

## Constraints & Limits

- MUST preserve the output and constraints of each composed skill.
- MUST resolve conflicts before producing the final result.
- MUST NOT skip a composed skill without recording the reason.
- SHOULD reuse existing project primitives, tokens, and conventions.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE all composed skills completed or have documented exceptions.
- VERIFY content, layout, responsive behavior, and accessibility as one result.
- EMIT the final component, usage example, verification summary, and limitations.
