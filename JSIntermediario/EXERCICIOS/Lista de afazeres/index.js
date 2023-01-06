function adicionarTarefa() {
    let inputTarefa = document.getElementsByName('tarefa')
    let tarefaInserida = inputTarefa[0].value
    let novasTarefas = document.getElementById('itemlista')
    
    novasTarefas.innerHTML += `<li>${tarefaInserida}</li>`
}

function removerTarefa() {
    let removeTarefa = document.getElementById('itemlista')
    if (removeTarefa.lenght > 0) {
        removeTarefa.removeChild(removeTarefa.lastChild)
    }
}