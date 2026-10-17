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
  if (ask && (await ask("Install this skill? [y/N] ")).toLowerCase() !== "y") return;
  const targetRoot = defaultSkillDirectory(projectRoot);
  if (skill.combination && skill.composes.length > 0 && ask) {
    const dependencies = skill.composes
      .map((id) => findSkill(catalog, id));
    const missing = skill.composes.filter((id, index) => !dependencies[index]);
    if (missing.length > 0) throw new Error(`Missing prerequisites: ${missing.join(", ")}`);
    if ((await ask("Install prerequisites too? [Y/n] ")).toLowerCase() !== "n") {
      for (const dependency of dependencies) await installSkill(dependency, targetRoot, { overwrite: false });
    }
  }
  const result = await installSkill(skill, targetRoot, { overwrite: false });
  if (result.skipped) {
    console.log(`Already installed: ${result.target}`);
  } else {
    console.log(`Installed: ${result.target}`);
  }
  if (ask) {
    const instructions = await ask("Create .agents/grimoire-skills.md? [Y/n] ");
    if (instructions.toLowerCase() !== "n") {
      const result = await writeManagedInstructions(projectRoot, "separate");
      console.log(result.skipped ? `Skipped existing file: ${result.path}` : `Created: ${result.path}`);
    }
  }
}

async function interactive(catalog) {
  const { reader, ask } = await promptUser();
  try {
    const action = await choose(ask, "What would you like to do?", [
      "Browse grimoires", "Browse skills", "Install a skill", "Exit"
    ]);
    if (action === "Browse grimoires") {
      [...new Set(catalog.map((skill) => skill.grimoire))].forEach((name) => console.log(name));
    } else if (action === "Browse skills") {
      catalog.forEach(printSkill);
    } else if (action === "Install a skill") {
      const selected = await choose(ask, "Choose a skill", catalog.map((skill) => `${skill.name} [${skill.id}]`));
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
    let entries = [];
    try { entries = await fs.readdir(directory); } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    return entries.forEach((entry) => console.log(entry));
  }
  if (command === "update") {
    const directory = defaultSkillDirectory(projectRoot);
    let entries = [];
    try { entries = await fs.readdir(directory); } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    let updated = 0;
    let skipped = 0;
    for (const id of entries) {
      const skill = findSkill(catalog, id);
      if (!skill) continue;
      const installedFile = path.join(directory, id, "SKILL.md");
      const packaged = await fs.readFile(path.join(skill.source, "SKILL.md"), "utf8");
      let installed = null;
      try { installed = await fs.readFile(installedFile, "utf8"); } catch {}
      if (installed !== null && installed !== packaged) {
        console.log(`Skipped locally modified skill: ${id}`);
        skipped += 1;
        continue;
      }
      await installSkill(skill, directory, { overwrite: true });
      updated += 1;
    }
    return console.log(`Updated ${updated} skills; skipped ${skipped} locally modified skills.`);
  }
  if (command === "validate") return console.log(`Catalog loaded: ${catalog.length} skills.`);
  throw new Error(`Unknown command: ${command}`);
}
