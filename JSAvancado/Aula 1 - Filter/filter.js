let pessoas = [
    {nome: 'Roberto', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'Rafael', idade: 27}
]

//JEITO ANTIGO

/* const pessoasCom33Anos = []
for (let i = 0; i < pessoas.length; i++){
    if (pessoas[i].idade === 33) {
        pessoasCom33Anos.push(pessoas[i])
    }
}
 */

//NOVO MÉTODO, COM FILTER, MAIS FACIL E MAIS USADO

const pessoasCom33Anos = pessoas.filter((pessoa) =>{
    return pessoa.idade === 33
} )

console.log(pessoasCom33Anos)
