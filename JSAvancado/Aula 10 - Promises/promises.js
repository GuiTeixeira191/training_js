//PROMISES TEM 4 ESTADOS: 
//PENDENTE(CRIADA, MAS NAO EXECUTADA) INICIAL
//REALIZADA(TEVE SUCESSO NA EXECUÇÃO) RESOLVE
//RECUSADA(TEVE FALHA NA EXECUÇÃO) REJECT
//ESTABELECIDA(REALIZADA OU RECUSADA)


//VAI DAR UM ERRO SE POR FALSE, AINDA PRECISA TRATAR O ERRO


/* const pressetarFerramentas = false
const tirarZeroPeca = false

const rodarMaquina = (pressetarFerramentas, tirarZeroPeca) => {
    return new Promise ((resolve, reject) => {
        if (pressetarFerramentas && tirarZeroPeca){
            console.log('Pondo a máquina para rodar')
            resolve()
        }else {
            console.log('É necessário pressetar antes de rodar a máquina')
            reject()
        }
    })
} 

const deuPau = (pressetarFerramentas, tirarZeroPeca) => {
    if (pressetarFerramentas && tirarZeroPeca) {
        console.log('Peça esta zerada!')
    }if (!pressetarFerramentas) {
        console.log("Precisa pressetar essa ferramenta ae!")
    }if (!tirarZeroPeca) {
        console.log("Precisa tirar o zero peça ae!")
    }
    return;
}

rodarMaquina(pressetarFerramentas, tirarZeroPeca) */

const rodarMaquina = (pressetarFerramentas, tirarZeroPeca) => {
    return new Promise ((resolve, reject) => {
        if (pressetarFerramentas && tirarZeroPeca){
            console.log('Pondo a máquina para rodar')
            resolve(true)
        }else {
            console.log('É necessário pressetar antes de rodar a máquina')
            reject(false)
        }
    })
}

const pressetarFerramentas = true
const tirarZeroPeca = true

rodarMaquina(pressetarFerramentas, tirarZeroPeca)
.then(function(resultado) {
    deuPau(resultado)
})
.catch(function(erro) {
    deuPau(erro)
})

const deuPau = (rodarMaquina) => {
    if (rodarMaquina) {
        console.log('Peça esta zerada!')
    }else{
        console.log('Deu pau!')
    }
    return;
}


deuPau(pressetarFerramentas, tirarZeroPeca)