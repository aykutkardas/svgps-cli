import { readFileSync, writeFileSync } from "fs";

import { parse } from "svgps";
import * as recursiveReaddir from "recursive-readdir";

import toSlug from "./utils/toSlug";

import { Template } from "./types";

export async function parseDirectory(
  inputPath: string,
  outputPath: string,
  template?: Template
) {
  const isIcomoon = template === "icomoon";

  const inputDirContents = await recursiveReaddir(inputPath);
  const svgFiles = inputDirContents.filter((filepath) =>
    filepath.endsWith(".svg")
  );

  const icons = [];

  for (const filepath of svgFiles) {
    const fileName = filepath.split("/").pop();
    const content = readFileSync(filepath, "utf8");
    const iconData = parse(content, { template });

    iconData.properties = { name: toSlug(fileName) };

    icons.push(iconData);
  }

  const iconsData = isIcomoon
    ? {
        generatorSource: "svgps.app",
        IcoMoonType: "selection",
        icons,
      }
    : icons;

  writeFileSync(outputPath, JSON.stringify(iconsData, null, 2));
}
