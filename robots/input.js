const readLine = require('readline-sync');
const state = require('./state.js');

function robot() {

    const content = {
        maximumSentences: 7,

    }
    content.lang = askAndReturnLanguage();
    content.prefix = askAndReturnPrefix();
    content.searchTerm = askAndReturnSearchTerm();
    state.save(content);

    function askAndReturnLanguage() {
        const languages = ["pt", "en", "es", "fr"];
        const selectedLanguageIndex = readLine.keyInSelect(languages, "select the language: ");
        const selelectedLanguageText = languages[selectedLanguageIndex];
        console.log(selelectedLanguageText)


        return selelectedLanguageText;
    }

    function askAndReturnSearchTerm() {
        if (content.lang == 'pt') {
            return readLine.question("termo da pesquisa: ");
        } else if (content.lang == 'es') {
            return readLine.question("término de búsqueda: ");
        } else if (content.lang == 'fr') {
            return readLine.question("terme de recherche: ");
        } else {
            return readLine.question("search term: ");
        }
    }

    function askAndReturnPrefix() {
        prefixes = [];
        text = "select one option: ";

        if (content.lang == 'pt') {
            prefixes = ["Quem e", "O Que e", "A historia de"];
            text = "Selecione uma opcao: ";

        } else if (content.lang == 'es') {
            prefixes = ["quien es", "Que es", "la historia de"];
            text = "seleccione una opcion: ";

        } else if (content.lang == 'fr') {
            prefixes = ["c est qui", "quel est", "histoire de"];
            text = "selectionnez une option: ";

        } else {
            prefixes = ["Who is", "What is", "The history of"];
            text = "select one option: ";
        }

        const selectedPrefixIndex = readLine.keyInSelect(prefixes, text);
        const selelectedPrefixText = prefixes[selectedPrefixIndex];
        return selelectedPrefixText;

    }
}

module.exports = robot;