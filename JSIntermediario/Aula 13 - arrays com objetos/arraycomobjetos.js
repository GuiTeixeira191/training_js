let videoGames = {
    nome: 'Xbox',
    valor: 3000,
    jogos: [
        {name: 'Smite'},
        {name: 'Diablo'},
        {name: 'Fall Out'}
    ]
}

let jogo4 = {
    nome: 'Fifa'
}

videoGames.jogos.push(jogo4) // ADICIONANDO NOVO ITEM(JOGO4) AO ARRAY

console.log(videoGames)

// OBJETO DENTRO DE UM OBJETO
let cliente = {
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000, 
        pedido: [
            {nome: 'Fifa'},
        ]
    }
}

console.log(cliente.ultimoPedido.pedido)