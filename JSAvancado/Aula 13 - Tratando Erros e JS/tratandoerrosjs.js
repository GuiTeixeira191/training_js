// TRY CATCH SERVE PARA TRATAR ERROS
// SERVE PARA QUANQUER TIPO DE CÓDIGO, NÃO SOMENTE PROMISE


const passou15Min = false


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

async function processoDeCozinharOvo() {
    try{                                            //ABRE UM BLOCO PARA TESTAR ERROS
        const cozinhandoOvo = await cozinharOvo()
        const comendoOvo = await comerOOvo(cozinhandoOvo)
        const descansando = await descansar(comendoOvo)
        const voltandoATrabalhar = await voltarATrabalhar(descansando)
    }catch(err){                                    //O CATCH VAI PEGAR O PARAMETRO DO REJECT, NO CASO ESTA FALSE
        console.log(err)
    }finally{
        console.log('Bloco finally sempre vai ser executado(por último), independente do resultado to try/catch')
    }
    
}

processoDeCozinharOvo()