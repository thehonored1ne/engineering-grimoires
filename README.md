# Engineering Skill Library

This repository contains reusable software engineering skills grouped into themed grimoires and distributed through the `engineering-grimoires` npm package.

## Install the CLI

```bash
npm install -g engineering-grimoires
grimoire
```

The CLI installs selected skills into the current project's `.agents/skills/` directory. It never overwrites an existing `Agents.md`; it can create a separate `.agents/grimoire-skills.md` instruction file.

Useful commands:

```bash
grimoire list
grimoire search accessibility
grimoire install validate-accessibility
grimoire installed
grimoire update
```

## Start Here

1. Browse [the Grimoire Index](grimoire/index.md).
2. Open a grimoire glossary to find its skills.
3. Read the linked `SKILL.md` before using a skill.
4. Use combination spells for workflows that compose multiple skills.
5. Review [the dependency graph](grimoire/dependency-graph.md) to understand composed workflows.

Grimoire directories include a domain suffix so they remain recognizable when copied or installed:

```text
the-book-of-unbroken-grids-ui
tome-of-the-boundless-schema-architecture
the-obsidian-codex-of-shields-security
```

Each skill declares a semantic version, lifecycle status, and example invocation. See [the changelog](CHANGELOG.md) for library changes.

## Structure

```text
grimoire/
├── index.md
├── glossary.md
└── <grimoire>/
    ├── glossary.md
    ├── spells/<skill>/SKILL.md
    └── combination-spells/<skill>/SKILL.md
```

The interactive runner separates individual skills from combination spells, asks for a grimoire before listing them, and reports completed actions. Press Enter at yes/no prompts to accept the default answer.

## Contributing

Read [Agents.md](Agents.md) before adding or changing a grimoire or skill. Run the library validator after structural changes:

```powershell
.\tools\validate-library.ps1
```
