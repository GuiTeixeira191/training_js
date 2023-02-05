// VEIO PARA SUBSTITUIR O THEN

const passou15Min = true


const cozinharOvo = () => {
    return new Promise ((resolve, reject) => {
        if (passou15Min) {
            console.log('O ovo já está pronto')
            resolve(true)
        }else{
            console.log('Espere dar 15min'),
            reject(false)
        }
    })
}

const comerOOvo = () => {
    return new Promise((resolve, reject) => {
        if (passou15Min) {
            console.log('Coma o ovo!')
            resolve(true)
        }else{
            console.log('Espere cozinhar pra comer!')
            reject(false)
        }
    })
}

const descansar = () => {
    return new Promise((resolve) => {
        console.log('Barriga cheia, vamos descansar')
        resolve(true)
    }) 
}

const voltarATrabalhar = () => {
    return new Promise ((resolve) => {
        console.log('Vamos voltar a trabalhar agora!')
        resolve(true)
    })
}

// cozinharOvo()
// .then(() => {
//     return comerOOvo()
// })
// .then(() => {
//     return descansar()
// })
// .then(() => {
//     return voltarATrabalhar()
// })

async function processoDeCozinharOvo() {
    const cozinhandoOvo = await cozinharOvo()
    const comendoOvo = await comerOOvo(cozinhandoOvo)
    const descansando = await descansar(comendoOvo)
    const voltandoATrabalhar = await voltarATrabalhar(descansando)
    
}

processoDeCozinharOvo()