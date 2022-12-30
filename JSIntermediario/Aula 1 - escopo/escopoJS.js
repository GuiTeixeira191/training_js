
//ESCOPO DE BLOCO, FUNCIONA POIS FOI DECLARADO VARIAVEL DENTRO DO BLOCO
if(true){
    const mensagem1 = 'Olá'
    console.log(mensagem1)
}

//ESCOPO DE BLOCO, NÃO FUNCIONA POIS FOI DECLARADO VARIAVEL FORA DO BLOCO(USANDO VAR FUNCIONA)
// if(true){
//     console.log(mensagem1)
// }
// const mensagem1 = 'Olá'

//ESCOPO DE FUNÇÃO
function falar(){
    var mensagem2 = 'Olá Mundo'
    console.log(mensagem2)
}
falar()

//ESCOPO GLOBAL(VER TAG SCRIPT NO HTML), DECLARADA, SERVE PARA TODO O CODIGO. ATENÇÃO DEVE SER DECLARADA PRIMEIRO NO HTML
console.log(url)