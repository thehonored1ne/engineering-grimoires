import path from "node:path";
import process from "node:process";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { loadCatalog, findSkill } from "./catalog.js";
import { defaultSkillDirectory, installSkill } from "./installer.js";
import { writeManagedInstructions } from "./agents-file.js";
import { choose, promptUser } from "./prompts.js";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const projectRoot = process.cwd();

function printBanner() {
  console.log(`
   ____       _                 _
  / ___|_ __ (_)_ __ ___   ___ (_)___  _ __ ___  ___
 | |  _| '_ \| | '__/ _ \ / _ \| / __|| '__/ _ \/ __|
 | |_| | | | | | | | (_) | (_) | \__ \| | |  __/\__ \\
  \____|_| |_|_|_|  \___/ \___/|_|___/|_|  \___||___/

  Engineering Grimoires
`);
}

async function installedSkillIds(directory) {
  const ids = [];
  let entries = [];
  try { entries = await fs.readdir(directory, { withFileTypes: true }); } catch (error) {
    if (error.code === "ENOENT") return ids;
    throw error;
  }
  for (const entry of entries) {
    if (entry.isDirectory() && entry.name === "combination-spells") {
      const combinations = await fs.readdir(path.join(directory, entry.name), { withFileTypes: true });
      combinations.filter((item) => item.isDirectory()).forEach((item) => ids.push(item.name));
    } else if (entry.isDirectory()) {
      ids.push(entry.name);
    }
  }
  return ids;
}

function printSkill(skill) {
  console.log(`\n${skill.name} (${skill.id})`);
  console.log(`Grimoire: ${skill.grimoire}`);
  console.log(`Type: ${skill.combination ? "Combination spell" : "Skill"}`);
  console.log(`Rank: ${skill.rank} | Status: ${skill.status} | Author: ${skill.author}`);
}

async function install(catalog, query, ask) {
  const skill = findSkill(catalog, query);
  if (!skill) throw new Error(`Skill not found: ${query}`);
  printSkill(skill);
  if (skill.combination) {
    console.log(`\nPrerequisites: ${skill.composes.join(", ") || "see skill file"}`);
  }
  if (ask && !["", "y", "yes"].includes((await ask("Install this skill? [Y/n] ")).trim().toLowerCase())) return;
  const targetRoot = defaultSkillDirectory(projectRoot);
  if (skill.combination && skill.composes.length > 0 && ask) {
    const dependencies = skill.composes
      .map((id) => findSkill(catalog, id));
    const missing = skill.composes.filter((id, index) => !dependencies[index]);
    if (missing.length > 0) throw new Error(`Missing prerequisites: ${missing.join(", ")}`);
    if ((await ask("Install prerequisites too? [Y/n] ")).toLowerCase() !== "n") {
      for (const dependency of dependencies) await installSkill(dependency, targetRoot, { overwrite: false, combination: false });
    }
  }
  const result = await installSkill(skill, targetRoot, { overwrite: false, combination: skill.combination });
  if (result.skipped) {
    console.log(`Already installed: ${result.target}`);
  } else {
    console.log(`Installed: ${result.target}`);
  }
  if (ask) {
    const instructions = await ask("Create .agents/grimoire-skills.md? [Y/n] ");
    if (!["n", "no"].includes(instructions.trim().toLowerCase())) {
      const result = await writeManagedInstructions(projectRoot, "separate");
      console.log(result.skipped ? `Skipped existing file: ${result.path}` : `Created: ${result.path}`);
    }
  }
}

async function interactive(catalog) {
  const { reader, ask } = await promptUser();
  try {
    printBanner();
    const action = await choose(ask, "What would you like to do?", [
      "Browse grimoires", "Browse individual skills", "Browse combination spells", "Install a skill", "Exit"
    ]);
    if (action === "Browse grimoires") {
      [...new Set(catalog.map((skill) => skill.grimoire))].forEach((name) => console.log(name));
    } else if (action === "Browse individual skills" || action === "Browse combination spells") {
      const combination = action === "Browse combination spells";
      const choices = [...new Set(catalog.filter((skill) => skill.combination === combination).map((skill) => skill.grimoire))];
      const grimoire = await choose(ask, "Choose a grimoire", choices);
      if (grimoire) catalog.filter((skill) => skill.grimoire === grimoire && skill.combination === combination).forEach(printSkill);
    } else if (action === "Install a skill") {
      const type = await choose(ask, "What would you like to install?", ["Individual skill", "Combination spell"]);
      const combination = type === "Combination spell";
      const available = catalog.filter((skill) => skill.combination === combination);
      const grimoire = await choose(ask, "Choose a grimoire", [...new Set(available.map((skill) => skill.grimoire))]);
      const selected = grimoire && await choose(ask, "Choose a skill", available.filter((skill) => skill.grimoire === grimoire).map((skill) => `${skill.name} [${skill.id}]`));
      if (selected) await install(catalog, selected.match(/\[(.+)\]$/)[1], ask);
    }
  } finally {
    reader.close();
  }
}

export async function main() {
  const catalog = await loadCatalog(packageRoot);
  const [command, query] = process.argv.slice(2);
  if (!command) return interactive(catalog);
  if (command === "list") return catalog.forEach(printSkill);
  if (command === "search") return catalog.filter((skill) => `${skill.id} ${skill.name} ${skill.grimoire}`.toLowerCase().includes((query ?? "").toLowerCase())).forEach(printSkill);
  if (command === "install") return install(catalog, query, null);
  if (command === "installed") {
    const directory = defaultSkillDirectory(projectRoot);
    return (await installedSkillIds(directory)).forEach((id) => console.log(id));
  }
  if (command === "update") {
    const directory = defaultSkillDirectory(projectRoot);
    const entries = await installedSkillIds(directory);
    let updated = 0;
    let skipped = 0;
    for (const id of entries) {
      const skill = findSkill(catalog, id);
      if (!skill) continue;
      const installedRoot = skill.combination ? path.join(directory, "combination-spells") : directory;
      const installedFile = path.join(installedRoot, id, "SKILL.md");
      const packaged = await fs.readFile(path.join(skill.source, "SKILL.md"), "utf8");
      let installed = null;
      try { installed = await fs.readFile(installedFile, "utf8"); } catch {}
      if (installed !== null && installed !== packaged) {
        console.log(`Skipped locally modified skill: ${id}`);
        skipped += 1;
        continue;
      }
      await installSkill(skill, directory, { overwrite: true, combination: skill.combination });
      updated += 1;
    }
    return console.log(`Updated ${updated} skills; skipped ${skipped} locally modified skills.`);
  }
  if (command === "validate") return console.log(`Catalog loaded: ${catalog.length} skills.`);
  throw new Error(`Unknown command: ${command}`);
}
