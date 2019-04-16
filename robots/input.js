const readLine = require('readline-sync');
const state = require('./state.js');
function robot() {

    const content = {
        maximumSentences: 7
    }

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();
    state.save(content);

    function askAndReturnSearchTerm() {
        return readLine.question("search term: ");
    }

    function askAndReturnPrefix() {
        const prefixes = ["Who is", "What is", "The history of"];
        const selectedPrefixIndex = readLine.keyInSelect(prefixes, "select one option: ");
        const selelectedPrefixText = prefixes[selectedPrefixIndex];
        return selelectedPrefixText;
    }
}

module.exports = robot;