const readline = require('readline-sync')

function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm(){
        return readline.question('Insira um termo de busca para o Wikipedia: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['Quem é', 'O que é', 'A história de']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Selecione uma opção: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        return selectedPrefixText
    }

    console.log(content)
}

start()