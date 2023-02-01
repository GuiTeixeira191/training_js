//FUNÇAO ASSINCRONA, NAO PRECISA DECLARAR ESSA FUNÇÃO, SÓ CHAMAR. DEFINA O TEMPO EM MILISEGUNDOS
setTimeout(() =>{
    alert('set Time Out')
}, 5000)

//FUNÇAO ASSINCRONA, NAO PRECISA DECLARAR ESSA FUNÇÃO, SÓ CHAMAR. DEFINA O INTERVALO EM MILISEGUNDOS
setInterval(()=> {
    console.log('Set interval')
}, 3000)

//PARA INTERROMPER O SETINTERVAL, PRECISA CHAMAR O ID DELE, DECLARANDO-O EM OUTRA FUNÇÃO. EM SEGUIDA CHAME O CLEARINTERVAL

const pararIntervalo = setInterval(()=> {
    console.log('Set interval com ID')
}, 3000)

clearInterval(pararIntervalo)
