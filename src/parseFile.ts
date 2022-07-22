import { readFileSync, writeFileSync } from "fs";

import { parse, convertToIcomoonFormat } from "svgps";

import { Template } from "./types";

export function parseFile(
  inputPath: string,
  outputPath: string,
  template?: Template
) {
  const isIcomoon = template === "icomoon";
  const content = readFileSync(inputPath, "utf8");
  const iconData = JSON.stringify(parse(content), null, 2);

  writeFileSync(
    outputPath,
    isIcomoon ? convertToIcomoonFormat(iconData) : iconData
  );
}
