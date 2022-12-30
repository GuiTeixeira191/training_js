//FUNÇOES QUE RECEBEM OU RETORNAM OUTRAS FUNCOES
//EXEMPLO 1
const calcularAnoDeNasciment = function (idade, mesDeNascimento, imprimir ) {
    const mesAtual = 12
    let anoDeNascimento = 2022 - idade
    if(mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log('Seu ano de nascimento é : ' + anoDeNascimento)
}

calcularAnoDeNasciment(30, 2, imprimirAnoDeNascimento )

//EXEMPLO 2
function multiplicar(multiplicador){
    return function(numero){
            return numero * multiplicador
        }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadriplicar = multiplicar(4)

console.log(dobrar(3))
console.log(triplicar(3))
console.log(quadriplicar(3))