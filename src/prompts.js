import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export async function promptUser() {
  const reader = readline.createInterface({ input, output });
  const ask = (question) => reader.question(question);
  return { reader, ask };
}

export async function choose(ask, title, options, { back = false } = {}) {
  console.log(`\n${title}`);
  options.forEach((option, index) => console.log(`${index + 1}. ${option}`));
  if (back) console.log("0. Back");
  while (true) {
    const input = (await ask(`Choose a number${back ? " (0 to go back)" : ""} (or q to cancel): `)).trim().toLowerCase();
    if (input === "q") return null;
    if (back && input === "0") return null;
    const answer = Number(input) - 1;
    if (Number.isInteger(answer) && answer >= 0 && answer < options.length) return options[answer];
    console.log(`Invalid choice. Enter one of the listed numbers${back ? ", 0 to go back" : ""}, or q to cancel.`);
  }
}
