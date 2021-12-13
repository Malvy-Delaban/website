"use strict";

const fs = require("fs");
const pathIn =
  process.argv.length > 2
    ? process.argv[2]
    : "./src/assets/games/game-list.json";
const route = process.argv.length > 3 ? process.argv[3] : "test";
const pathOut =
    process.argv.length > 4
        ? process.argv[4]
        : "./routes.txt";
const rawdata = fs.readFileSync(pathIn);
const { games } = JSON.parse(rawdata);

fs.writeFileSync(pathOut, games.map((game) => `${route}/${game.id}`).join("\n"))