
document.getElementById('botao').addEventListener('click', () => {
    sortearUmaCarta()
})

//URL PARA BUSCAR O BARALHO SORTEADO

async function criarBaralho(){
    const urlBaralho = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const respostaFetch = await fetch(urlBaralho) // OBJETO COMO RESPOSTA
    return await respostaFetch.json() //TRANSFORMA O CORPO DO BARALHO EM JSON, PARA PEGAR  OS ITENS DO OBJETO COMO O ID
}



async function cartaDoBaralho(deck_id){
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}


async function sortearUmaCarta(){
    const baralho = await criarBaralho()
    const carta = await cartaDoBaralho(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta').src = imagemCarta
}

sortearUmaCarta()
console.log('Segue o fluxo')