import fs from "node:fs/promises";
import path from "node:path";

const start = "<!-- BEGIN GRIMOIRE-SKILLS MANAGED BLOCK -->";
const end = "<!-- END GRIMOIRE-SKILLS MANAGED BLOCK -->";
const block = `${start}\n\n## Grimoire Skills\n\nInstalled skills are located in .agents/skills/. Read each skill's SKILL.md before using it. Combination spells require their listed prerequisites.\n\n${end}\n`;

export async function writeManagedInstructions(projectRoot, mode = "separate") {
  const agentsPath = path.join(projectRoot, "Agents.md");
  if (mode === "none") return null;

  if (mode === "separate") {
    const directory = path.join(projectRoot, ".agents");
    await fs.mkdir(directory, { recursive: true });
    const target = path.join(directory, "grimoire-skills.md");
    try {
      const existing = await fs.readFile(target, "utf8");
      if (existing !== block) return { path: target, skipped: true };
      return { path: target, skipped: false };
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    await fs.writeFile(target, block, "utf8");
    return { path: target, skipped: false };
  }

  let existing = "";
  try { existing = await fs.readFile(agentsPath, "utf8"); } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  const blockPattern = new RegExp(`${start}[\\s\\S]*?${end}\\r?\\n?`, "m");
  const output = blockPattern.test(existing)
    ? existing.replace(blockPattern, block)
    : `${existing.trimEnd()}${existing ? "\n\n" : ""}${block}`;
  await fs.writeFile(agentsPath, output, "utf8");
  return agentsPath;
}
