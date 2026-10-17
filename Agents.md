# Engineering Skill Library

## Purpose

This repository stores reusable software engineering skills organized into domain-specific grimoires.

## Skill Structure

Each skill lives at:

```text
grimoire/<grimoire>/spells/<skill>/SKILL.md
```

Combination skills live at:

```text
grimoire/<grimoire>/combination-spells/<skill>/SKILL.md
```

Each `SKILL.md` must include:

- YAML metadata with `id`, `name`, `rank`, `class`, `target`, and `tags`.
- `version` and `status` metadata.
- `author`, `created`, and `updated` metadata.
- Optional `effort`, `estimated_tokens`, and `composes` metadata when applicable.
- Preconditions and rejection conditions.
- An ordered execution pipeline.
- Core effect.
- Constraints using MUST, MUST NOT, SHOULD, and NEVER.
- Post-execution verification.

## Naming Rules

- Use lowercase kebab case for directories and skill IDs.
- Name skills with an action and object, such as `synthesize-ui-component`.
- Keep names specific and operational.

## Grimoire Naming Convention

Every grimoire title MUST use one of these forms:

- `The Book of [Arcane Noun]`
- `Tome of the [Epithet]`
- `The [Adjective] Codex of [Concept]`

Grimoire titles MUST:

- Use three to six words.
- Use English fantasy metaphors instead of technical jargon.
- Include a one-sentence lore subtitle describing the domain.
- Avoid framework, language, database, and protocol names.

Grimoire directory names MUST use lowercase kebab case based on the title.

## Authoring Rules

- Describe one clear engineering capability per skill.
- Use direct, technical language.
- State required inputs and expected outputs.
- Reuse existing project conventions and dependencies.
- Do not add unsupported assumptions.
- Keep constraints testable.

## Version and Status

- Use semantic versions in the form `MAJOR.MINOR.PATCH`.
- Increment `MAJOR` for breaking input, output, or behavior changes.
- Increment `MINOR` for backward-compatible capabilities or constraints.
- Increment `PATCH` for corrections and clarifications.
- Use `draft`, `active`, `deprecated`, or `archived` for status.
- Record the creator in `author`.
- Keep the original author; add current owners to `maintainers`.
- Add meaningful revisers to `contributors`.
- Set `created` once and update `updated` whenever the skill changes.

## Invocation Examples

Every skill MUST include an `Example Invocation` section with a representative input and expected output.

## Combination Skills

Combination skills compose existing skills into a larger workflow or new capability.

- Store them in the grimoire that owns the resulting capability.
- Store them under that grimoire's `combination-spells/` directory.
- Include a `Prerequisites` section before the execution pipeline.
- List every required skill, input, dependency, and condition in `Prerequisites`.
- Set `class` to `Orchestration`, `Synthesis`, or both.
- List source skills in a `composes` metadata field.
- Define the order, handoff data, and final output.

Example:

```yaml
class: Orchestration · Synthesis
composes:
  - synthesize-ui-component
  - validate-accessibility
```

## Updating Indexes

- Add new grimoires to `grimoire/index.md`.
- Add new skills to the owning grimoire's `glossary.md`.
- Keep shared definitions in `grimoire/glossary.md`.
- Keep repository rules in this file.

## Attribution

- Add contributors to `CONTRIBUTORS.md`.
- Set `author`, `created`, and `updated` in every skill.
- Preserve existing authorship when revising a skill.
- Add maintainers when ownership changes.
