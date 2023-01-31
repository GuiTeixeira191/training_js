const incentivarQuester = (mensagem, ...nomesQuester) => {
    nomesQuester.map((nomeQuester) => console.log(`${mensagem} ${nomeQuester}`)) //O PARAMETRO REST(TRES PONTOS) DEVE SER O ULTIMO SEMPRE
}

incentivarQuester('Parabéns pelo seu aniversário', 'Guilherme', 'Raquel', 'Isabella') //CADA NOME VAI SE IMPRESSO NOVAMENTE COM A MESMA FRASE