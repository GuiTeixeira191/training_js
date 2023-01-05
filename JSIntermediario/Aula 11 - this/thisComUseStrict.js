// 'use strict' BLOQUEIA O ESCOPO GLOBAL, PARA QUE NAO INTERFIRA NO ESCOPO LOCAL

console.log(this)
console.log(window)
console.log(window === this)

this.name = 'Guilherme'

function saudar1() {
    console.log('this no contexto da função', this)
    // console.log('Olá, ' + this.name) FUNCIONA SEM O 'USE STRICT' NO INICIO DO CÓDIGO
}

saudar1()


/// O THIS SE TORNA O PROPRIO METODO DENTRO DE UM OBJETO, NO CASO ABAIXO THIS=usuario

let usuario = {
    name: 'Rodrigo',
    saudar2: function() {
        console.log('this no contexto do método')
        console.log('this.name no contexto do metodo', this.name)
    }
}

usuario.saudar2()


///

let comida = {
    name: 'brocolis',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozimento) {
    this.temperatura = temperaturaDeCozimento
}

comida.cozinhar(100)

console.log(comida)