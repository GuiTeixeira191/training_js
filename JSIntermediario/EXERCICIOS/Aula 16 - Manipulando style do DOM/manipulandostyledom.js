function alterarEstilo1() {
    let posts = document.getElementsByClassName('text')

    console.log(posts)

    let primeiroPost = posts[0]

    console.log(primeiroPost)

    primeiroPost.style.backgroundColor = 'red'
}

function alterarEstilo2() {
    let textoPosts = document.getElementsByClassName('text')

    let segundoPost = textoPosts[1]

    segundoPost.classList.add('fonte-grande')
}