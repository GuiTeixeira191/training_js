function adicionarComentario() {
    let inputComentario = document.getElementsByName('novo-comentario') // PUXEI A TAG INPUT PELO NAME
    let textoDigitado = inputComentario[0].value // PEGUEI O VALOR DENTRO DO INDEX 0 NO INPUT
    let novosComentarios = document.getElementById('novos-comentarios') // PEGUEI A DIV VAZIA PARA INSERIR OS COMENTARIOS(HTML)

    novosComentarios.innerHTML += `<p>Comentário novo:  ${textoDigitado} </p>` // INSERI O HTML(COMENTARIOS)
}