import { readFileSync, writeFileSync } from "fs";

import parse from "svgps";

import { Template } from "./types";

export function parseFile(
  inputPath: string,
  outputPath: string,
  template?: Template
) {
  const content = readFileSync(inputPath, "utf8");
  const iconData = JSON.stringify(parse(content, { template }), null, 2);

  writeFileSync(outputPath, iconData);
}
