const pessoas = ['Guilherme', 'Raquel', 'Isabella']
console.log(...pessoas) // SPREAD OPERATOR SÃO OS TRES PONTOS

//SERVE PARA CONCATENAR 2 ARRAYS

let pessoas1 = ['João', 'Maria', 'José']
let pessoas2 = ['Sara', 'Aline', 'Suelen']

//MODO ANTIGO

//pessoas1= pessoas1.concat(pessoas2)

//COM SPREAD OPERATOR

pessoas1 = [...pessoas1, ...pessoas2]

console.log(pessoas1)

//CLONAR OBJETO

const pessoas3 = {nome: 'Guilherme', idade: 30}

const objetoClonado = { ...pessoas3}

console.log(objetoClonado)
console.log(pessoas3)
