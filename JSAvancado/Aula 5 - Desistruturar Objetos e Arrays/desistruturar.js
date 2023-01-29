//MANEIRA ANTIGA DE DESISTRUTURAR UM OBJETO
// let pessoa = {nome:'Guilherme', sobrenome:'Teixeira', idade: 30}

// let nome = pessoa.nome
// let idade = pessoa.idade
// let sobrenome = pessoa.sobrenome

// console.log(`Nome ${nome} ${sobrenome}, ${idade} anos` )


//DESISTRUTURAÇÃO DE UM OBJETO
let pessoa = {nome:'Guilherme', sobrenome:'Teixeira', idade: 30}

let { nome, idade, sobrenome} = pessoa

console.log(`Nome ${nome} ${sobrenome}, ${idade} anos` )

//DESISTRUTURAÇÃO DE UM ARRAY

const numeros = [1,2,3]

const [um,dois,tres, quatro] = numeros

console.log(um)
console.log(dois)
console.log(tres)
console.log(quatro) //ESSE VAI DAR UNDEFINED PQ NAO TEM UM QUARTO NUMERO NO INDEX 
