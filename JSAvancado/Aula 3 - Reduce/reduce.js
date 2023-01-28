const ordens = [
    {cliente: 'Roberto', tipo: 'compra', quantidade: 56, ativo: 'ITUB4'},
    {cliente: 'Ricardo', tipo: 'compra', quantidade: 76, ativo: 'HGLG11'},
    {cliente: 'Rafael', tipo: 'venda', quantidade: 21, ativo: 'KNRI11'}
]



// let quantidadeOrdens = 0
// for (let i = 0; i < ordens.length; i++) {
//     quantidadeOrdens += ordens[i].quantidade
// }

// console.log(quantidadeOrdens) 


let quantidadeOrdens = ordens.reduce((somaOrdens, ordem) => {
    return somaOrdens + ordem.quantidade
}, 0)

console.log(quantidadeOrdens) 