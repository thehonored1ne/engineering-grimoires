import fs from "node:fs/promises";
import path from "node:path";

export function defaultSkillDirectory(projectRoot) {
  return path.join(projectRoot, ".agents", "skills");
}

function safeSkillId(id) {
  return typeof id === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id);
}

export async function installSkill(skill, targetRoot, { overwrite = false, combination = skill.combination } = {}) {
  if (!safeSkillId(skill.id)) throw new Error(`Unsafe skill ID: ${skill.id}`);
  const root = path.resolve(targetRoot);
  const target = path.join(root, combination ? "combination-spells" : "", skill.id);
  const relative = path.relative(root, target);
  if (relative.startsWith("..") || path.isAbsolute(relative)) throw new Error(`Invalid skill destination: ${target}`);
  let exists = false;
  try { await fs.access(target); exists = true; } catch {}
  if (exists && !overwrite) return { target, skipped: true };
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.cp(skill.source, target, { recursive: true, force: true });
  return { target, skipped: false };
}
