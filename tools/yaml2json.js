#!/usr/local/bin/node
const fs = require("fs");
const yaml = require("js-yaml");

const docs = yaml.safeLoadAll(fs.readFileSync("./dist/index.yaml", { encoding: "utf8" }));
fs.writeFileSync("./dist/index.json", JSON.stringify(docs));
