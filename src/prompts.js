import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export async function promptUser() {
  const reader = readline.createInterface({ input, output });
  const ask = (question) => reader.question(question);
  return { reader, ask };
}

export async function choose(ask, title, options) {
  console.log(`\n${title}`);
  options.forEach((option, index) => console.log(`${index + 1}. ${option}`));
  const answer = Number(await ask("Choose a number: ")) - 1;
  return options[answer] ?? null;
}
