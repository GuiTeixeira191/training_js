const pressetarFerramentas = false

const olaMundo = () => {
    new Promise ((resolve, reject) => {
        if(pressetarFerramentas) {
            console.log('Tudo pressetado, pode rodar!')
            resolve()
        }else{
            console.log('Precisa pressetar!')
            reject(false)
        }
    })
}

olaMundo()