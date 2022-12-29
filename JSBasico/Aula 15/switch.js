let nomeFilme = 'Senhor dos Aneis'

//ATENÇÃO COM OS ':' E OS 'BREACKS'

switch(nomeFilme){  //PRIMEIRO TIPO DE SWITCH
    case 'Vingadores' :
        console.log('É o filme dos Vingadores')
        break
    case 'Senhor dos Aneis' :
        console.log('É o filme dos Senhor dos Aneis')
        break
    case 'Harry Potter' :
        console.log('É o filme dos Harry Potter')
        break
    default :
        console.log('É outro filme')
}

let avaliacao = 5 

switch(avaliacao){ //SEGUNDO TIPO DE SWITCH, MULTI CASOS
    case 0:
    case 1:
        console.log('O filme é ruim')
        break
    case 2:
    case 3:
        console.log('O filme é mediano')
        break
    case 4:
    case 5:
        console.log('O filme é excelente')
        break
    default:
        console.log('Nota não aplicável')
}