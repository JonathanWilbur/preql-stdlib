const fs = require("fs");
const yaml = require("js-yaml");
const preql = require("preql-core");

test("all types are valid", async () => {
    const docs = yaml.safeLoadAll(fs.readFileSync("./dist/index.yaml", { encoding: "utf8" }));
    const namespaces = await preql.indexObjects(docs);
    const geResponse = await preql.getEntries(namespaces.default);
    expect(geResponse).toBeTruthy();
});
