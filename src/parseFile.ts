import { readFileSync, writeFileSync } from "fs";

import { parse } from "svgps";

import { Template } from "./types";

export function parseFile(
  inputPath: string,
  outputPath: string,
  template?: Template
) {
  const content = readFileSync(inputPath, "utf8");
  const iconData = parse(content, { template });

  writeFileSync(outputPath, JSON.stringify(iconData, null, 2));
}
