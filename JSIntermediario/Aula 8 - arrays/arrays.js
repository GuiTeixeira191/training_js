//ITERAR, OU REPETIR UMA AÇÃO, COM LAÇO E ARRAY
let frutas = ['maça', 'banana', 'pera', 'laranja']
console.log(frutas.length)

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

//USANDO FOREACH
frutas.forEach(function(item) {
    console.table('Fruta: ' + item)  
})

//METODOS PUSH(ADICIONAR O ITEM AO FINAL DO ARRAY
frutas.push('manga')
console.log(frutas)

//METODOS POP(REMOVE O ITEM AO FINAL DO ARRAY
frutas.pop()
console.log(frutas)

//METODOS SHIFT(REMOVE O PRIMEIRO ITEM DO ARRAY
frutas.shift()
console.log(frutas)

//METODOS UNSHIFT(ADICIONA UM ITEM NO INICIO DO ARRAY
frutas.unshift('morango')
console.log(frutas)

//INDEXOF PROCURA O INDEX DE UMA ARRAY
let posicaoBanana = frutas.indexOf('banana')
console.log(posicaoBanana)