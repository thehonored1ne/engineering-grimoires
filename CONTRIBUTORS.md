# Contributors and Contribution Guide

The Grimoire Skill Library is an open collection of reusable software engineering skills.

## How to Contribute

1. Fork the repository and create a focused branch.
2. Choose an existing grimoire or propose a new one.
3. Add or update the relevant skill files.
4. Update the owning glossary and any affected indexes.
5. Add yourself to the contributor list below.
6. Run the validator:

   ```powershell
   .\tools\validate-library.ps1
   ```

7. Open a pull request with a clear summary and validation result.

## Adding a Skill

Store individual skills at:

```text
grimoire/<grimoire>/spells/<skill-id>/SKILL.md
```

Combination spells belong at:

```text
grimoire/<grimoire>/combination-spells/<skill-id>/SKILL.md
```

Every skill must include:

- Valid YAML metadata.
- `author`, `created`, and `updated` fields.
- Preconditions and rejection conditions.
- An ordered execution pipeline.
- Constraints and post-execution verification.
- An example invocation.

Use lowercase kebab case for skill IDs and name skills with an action and object, such as `validate-input-boundaries`.

When creating a grimoire, use a lowercase kebab case directory name based on its title and append a short domain suffix, such as `the-book-of-unbroken-grids-ui`. Update `grimoire/index.md` and every affected link when renaming one.

## Combination Spells

Combination spells must:

- Include a `Prerequisites` section.
- List source skills in `composes` metadata.
- Define the execution order and handoff between skills.
- Explain the final combined output.

## Pull Requests

Keep pull requests focused. Include:

- What changed.
- Why the change is needed.
- Which indexes or glossaries were updated.
- Validator output.
- Known limitations or follow-up work.

Do not include secrets, credentials, private data, or generated installation artifacts.

## Attribution

Preserve the original `author` when revising a skill. Add revisers to `contributors` and current owners to `maintainers`. Update the skill's `updated` date for every accepted change.

## Contributors

| Name | Handle | Contributions |
| :--- | :--- | :--- |
| Dion | — | Initial library, grimoires, skills, combination spells, and CLI. |
