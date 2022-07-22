import { readFileSync, writeFileSync } from "fs";

import { parse } from "svgps";

export function parseFile(inputPath: string, outputPath: string) {
  const content = readFileSync(inputPath, "utf8");
  const iconData = JSON.stringify(parse(content), null, 2);
  writeFileSync(outputPath, iconData);
}
