//SINCRONO: SEGUE UMA ORDEM LINEAR DE CIMA PARA BAIXO

//ASSINCRONA: EXECUÇAO INDEPENDENTE DO FLUXO, OU SEJA, PODE PASSAR PARA A LINHA POSTERIOR, SEM EXECUTAR A ATUAL

//EXEMPLO SINCRONO DE PASSAR UM CAFÉ

/* const ferverAgua = () =>{
    console.log('Colocar água para ferver')
}

const prepararCafe = () => {
    console.log('Pegar pó, açúcar, filtro e a garrafa')
    console.log('Colocar o pó no filtro')
    console.log('Colocar o açúcar na água')
    console.log('Colocar o filtro na garrafa')
}

const passarCafé = () => {
    console.log('Passar o café')
}

ferverAgua()
prepararCafe()
passarCafé()
 */


//EXEMPLO ASSINCRONO DE PASSAR UM CAFÉ
const ferverAgua = () =>{
    console.log('Colocar água para ferver')
    setTimeout(()=>{
        passarCafé()
    }, 3000 )
}

const prepararCafe = () => {
    console.log('Pegar pó, açúcar, filtro e a garrafa')
    console.log('Colocar o pó no filtro')
    console.log('Colocar o açúcar na água')
    console.log('Colocar o filtro na garrafa')
}

const passarCafé = () => {
    console.log('Passar o café')
}

ferverAgua()
prepararCafe()