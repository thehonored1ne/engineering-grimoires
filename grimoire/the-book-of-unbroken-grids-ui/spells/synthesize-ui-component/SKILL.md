---
id: synthesize-ui-component
name: Synthesize UI Component
rank: B
version: 1.0.0
status: active
domain: UI
author: Dion
maintainers:
  - Dion
contributors: []
created: 2026-10-17
updated: 2026-10-17
effort: medium
estimated_tokens: 2000-4000
class: Synthesis
target: UI component specification or implementation request
tags: [ui, component, layout, accessibility]
---

# Synthesize UI Component

## Attributes & Metadata

- **Rank:** B
- **Token budget:** 2000–4000
- **Strategy:** Analyze, design, implement, verify
- **Target:** UI component specification or implementation request

## Preconditions

- EXPECT component purpose, content, and interaction requirements.
- ASSERT framework, styling system, and project conventions when implementation is requested.
- REJECT requests missing enough information to define component behavior or structure.

## Execution Pipeline

1. Extract content, states, interactions, and responsive requirements.
2. Define component structure, properties, and state transitions.
3. Implement using the project’s existing patterns and primitives.
4. Apply responsive layout and accessibility semantics.
5. Verify states, keyboard behavior, and visual hierarchy.

## Core Effect

Produce a reusable UI component design or implementation that matches the stated requirements and project conventions.

## Constraints & Limits

- MUST preserve existing design tokens and component conventions.
- MUST define loading, empty, error, disabled, and interactive states when applicable.
- MUST support semantic markup, keyboard access, and visible focus.
- MUST NOT introduce unnecessary dependencies or duplicate existing components.
- SHOULD keep component responsibilities narrow and inputs explicit.
- NEVER hide required content from assistive technologies.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE the component renders its required content and states.
- VERIFY responsive behavior at supported viewport sizes.
- VERIFY keyboard navigation, focus visibility, and accessible names.
- EMIT the component, usage example, and known limitations.
