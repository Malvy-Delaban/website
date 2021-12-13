const fs = require("fs");
// const routes = require("./src/app/app-routing.module.ts").routes;

const raw = fs.readFileSync("./routes.txt", "utf8");
const routesAngular = fs.readFileSync(
  "./src/app/app-routing.module.ts",
  "utf8"
);
const routes = Array.from(
  routesAngular.matchAll(/^\s{2}\{path: '(.*)'\s,.*$/gm),
  (m) => m[1]
).filter((r) => r !== "**" && !r.includes(":"));
const routesArray = raw.split("\n");
const origin =
  process.argv.length > 2 ? process.argv[2] : "https://malvy-delaban.fr/";
const pathOut =
  process.argv.length > 3 ? process.argv[3] : "./docs/sitemap.txt";

console.log(routes.map((r) => `${origin}${r}`));
const sitemap = [
  ...routes.map((r) => `${origin}${r}`),
  ...routesArray.map((r) => `${origin}${r}`),
].join("\n");
fs.writeFileSync(pathOut, sitemap);
