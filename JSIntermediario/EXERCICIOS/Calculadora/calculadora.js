function numeros (valor) {
    document.getElementById('resultado') += valor;
}

function oparation() {
    var opera = document.getElementById('resultado').value
    if ( opera == 0 ) {
        document.getElementById('resultado').value = "Sim oparacao"
    } else {
        document.getElementById('resultado').value = eval(opera)
    }
}

function resetar() {
    document.getElementById('resultado').value = ""
}