//SLICE, FATIAR, SEM AFETAR O ORIGINAL
let frutas = ['banana', 'maça', 'pera', 'abacaxi']
let extrairFrutas = frutas.slice(1,3)

console.log(extrairFrutas)
console.log(frutas)

//SPLICE, REMENDAR OU COSTURAR, REMOVER UM ITEM PELA POSIÇAO DO INDEX
let extrairFrutas2 = frutas.splice(1, 2)
console.log(extrairFrutas2)

//ADICIONANDO ITEM AO ARRAY SIMULTANEAMENTE
let removerEAdicionarFrutas = frutas.splice(1, 2, 'goiaba', 'morango')
console.log(frutas)