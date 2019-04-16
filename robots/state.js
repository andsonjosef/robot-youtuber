const fs = require('fs');
const contentFilePatch = "./content.json";

function save(content) {
    const contentString = JSON.stringify(content);
    return fs.writeFileSync(contentFilePatch, contentString);
}

function load() {
    const fileBuffer = fs.readFileSync(contentFilePatch, 'utf-8');
    const contentJson = JSON.parse(fileBuffer);
    return contentJson;
}

module.exports = {
    save,
    load
}