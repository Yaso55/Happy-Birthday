import { readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const publicDir = join(process.cwd(), ".output", "public");
const assetsDir = join(publicDir, "assets");
const assets = await readdir(assetsDir);
const js = assets.find((file) => /^index-.*\.js$/.test(file));
const css = assets.find((file) => /^styles-.*\.css$/.test(file));

if (!js || !css) {
  throw new Error("Could not find generated client assets for GitHub Pages.");
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rema - A Birthday Comeback Experience</title>
    <link rel="stylesheet" href="./assets/${css}" />
  </head>
  <body>
    <script type="module" src="./assets/${js}"></script>
  </body>
</html>
`;

await writeFile(join(publicDir, "index.html"), html);
await writeFile(join(publicDir, "404.html"), html);
console.log(`Created Pages entry using ${js} and ${css}`);
