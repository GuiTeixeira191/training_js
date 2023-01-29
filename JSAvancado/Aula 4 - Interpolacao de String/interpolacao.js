//SEM INTERPOLAÇÃO

// const informacoesPessoais = ( primeiroNome, ultimoNome, idade) => {
//     return 'Primeiro nome: ' + primeiroNome + ', último nome: ' + ultimoNome + ', idade: ' + idade
// }

// console.log(informacoesPessoais('Guilherme', 'Teixeira', 30))

//COM INTERPOLAÇÃO

const informacoesPessoais = (primeiroNome, ultimoNome, idade) => {
    return `Primeiro nome: ${primeiroNome}, último nome: ${ultimoNome}, idade: ${idade}`
}

console.log(informacoesPessoais('Guilherme', 'Teixeira', 30))

//É POSSIVEL USAR DENTRO DO CONSOLE LOG, COMO ESSA SIMPLES SOMA POR EXEMPLO

console.log(`10 + 20 = ${10 + 20}`)