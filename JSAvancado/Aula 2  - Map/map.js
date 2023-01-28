let pessoas = [
    {nome: 'Roberto', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'Rafael', idade: 27}
]

// MÉTODO ANTIGO

// let nomePessoas = []
//     for (let i = 0; i < pessoas.length; i++) {
//         nomePessoas.push(pessoas[i].nome)
//     }

// console.log(nomePessoas)

//MÉTODO COM MAP´

const nomeDasPessoas = pessoas.map ( (pessoa) =>  pessoa.nome + ' tem ' + pessoa.idade + ' anos de idade!')

console.log(nomeDasPessoas)