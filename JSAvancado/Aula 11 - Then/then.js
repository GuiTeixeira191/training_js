
//THEN SERVER PRA CHAMAR OUTRA FUNÇÃO(QUE RETORNA PROMISE) ASSIM QUE OUTRA ACABA
//USADO QUANDO UMA FUNÇÃO DEPENDE QUE UMA ANTERIOR SEJA EXECUTADA PARA QUE ELE FUNCIONE
//FUNÇÕES ENCADEADAS

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

cozinharOvo()
.then(() => {
    return comerOOvo()
})
.then(() => {
    return descansar()
})
.then(() => {
    return voltarATrabalhar()
})