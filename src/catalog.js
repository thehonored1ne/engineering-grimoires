import fs from "node:fs/promises";
import path from "node:path";

const frontMatter = (text) => {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const fields = {};
  if (!match) return fields;
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([a-z_]+):\s*(.*)$/);
    if (field) fields[field[1]] = field[2].trim();
  }
  return fields;
};

const walk = async (directory) => {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(target));
    else if (entry.name === "SKILL.md") files.push(target);
  }
  return files;
};

export async function loadCatalog(root) {
  const base = path.join(root, "grimoire");
  const files = await walk(base);
  return Promise.all(files.map(async (file) => {
    const content = await fs.readFile(file, "utf8");
    const relative = path.relative(base, file);
    const parts = relative.split(path.sep);
    const combination = parts.includes("combination-spells");
    const grimoire = parts[0];
    const meta = frontMatter(content);
    const composes = [...content.matchAll(/^composes:\s*\r?\n((?:\s+-\s+.+\r?\n?)+)/gm)]
      .flatMap((match) => [...match[1].matchAll(/^\s+-\s+(.+)$/gm)].map((item) => item[1].trim()));
    return {
      id: meta.id,
      name: meta.name,
      rank: meta.rank,
      status: meta.status,
      class: meta.class,
      author: meta.author,
      combination,
      grimoire,
      source: path.dirname(file),
      file,
      content,
      composes
    };
  }));
}

export function findSkill(catalog, query) {
  const normalized = query.toLowerCase();
  return catalog.find((skill) => skill.id?.toLowerCase() === normalized)
    ?? catalog.find((skill) => skill.name?.toLowerCase() === normalized);
}
