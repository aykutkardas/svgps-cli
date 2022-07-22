import * as fs from "fs";

import { program } from "commander";

import { parseFile } from "./parseFile";
import { parseDirectory } from "./parseDirectory";

async function main() {
  program
    .option("--file", "Parse single file")
    .argument("<input>", "input directory or file path")
    .argument("<output>", "output directory or file path");

  program.parse();

  const [input, output] = program.args;
  const options = program.opts();

  const outputPath = output.endsWith(".json")
    ? output.substring(0, output.lastIndexOf("/"))
    : output;

  if (!fs.existsSync(input)) throw "Input path does not exist!";
  if (!fs.existsSync(outputPath)) throw "Output path does not exist!";

  if (options.file) {
    parseFile(input, output);
  } else {
    parseDirectory(input, output);
  }
}

main().catch(console.error);
