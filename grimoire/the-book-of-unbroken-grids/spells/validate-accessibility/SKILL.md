---
id: validate-accessibility
name: Validate Accessibility
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
class: Validation / Audit
target: UI component, page, or interaction flow
tags: [ui, accessibility, semantics, keyboard]
---

# Validate Accessibility

## Attributes & Metadata

- **Rank:** B
- **Strategy:** Inspect, test, classify, remediate
- **Target:** UI component, page, or interaction flow

## Preconditions

- EXPECT component markup, implementation, or an accessible interaction description.
- ASSERT known user actions and supported states.
- REJECT claims of compliance without inspectable structure or behavior.

## Execution Pipeline

1. Inspect semantic structure, names, roles, and states.
2. Check keyboard navigation, focus order, and focus visibility.
3. Check labels, contrast, errors, status messages, and responsive zoom behavior.
4. Classify violations by impact and provide targeted fixes.

## Core Effect

Produce an accessibility assessment with concrete remediation steps.

## Constraints & Limits

- MUST prefer native HTML semantics over unnecessary ARIA.
- MUST ensure every interactive control has an accessible name.
- MUST support keyboard operation for all essential actions.
- MUST NOT claim full compliance from static inspection alone.
- SHOULD identify the applicable WCAG criterion when known.

## Example Invocation

**Input:** Apply this skill to a representative engineering request within its stated target.

**Output:** The defined artifact, verification results, and known limitations.

## Post-Execution Verification

- ENSURE each finding includes impact, location, and remediation.
- VERIFY all essential actions have a keyboard path.
- EMIT findings grouped by severity and verification method.
