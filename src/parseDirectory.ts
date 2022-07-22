import { readFileSync, writeFileSync } from "fs";

import { parse } from "svgps";
import * as recursiveReaddir from "recursive-readdir";
import toSlug from "./utils/toSlug";

export async function parseDirectory(inputPath: string, outputPath: string) {
  const inputDirContents = await recursiveReaddir(inputPath);
  const svgFiles = inputDirContents.filter((filepath) =>
    filepath.endsWith(".svg")
  );

  const icons = [];

  for (const filepath of svgFiles) {
    const fileName = filepath.split("/").pop();
    const content = readFileSync(filepath, "utf8");
    const iconData = parse(content);

    iconData.properties = { name: toSlug(fileName) };

    icons.push(iconData);
  }

  writeFileSync(outputPath, JSON.stringify(icons, null, 2));
}
