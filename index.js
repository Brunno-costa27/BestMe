const perguntas = [
    "O que eu aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou mais feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const perguntar = ( index = 0 ) => {
    process.stdout.write("\n\n" + perguntas[index] + " > ")
}

perguntar()

const respostas = []
process.stdin.on('data', data => {
    respostas.push(data.toString().trim())
    if(respostas.length < perguntas.length){
        perguntar(respostas.length)
    }else{
        console.log(respostas)
        process.exit() 
    }
})

process.on('exit', () => {
    console.log(`
    Bacana, Brunno!

    O que você aprendeu hoje foi:
    ${respostas[0]}

    O que te aborreceu e você poderia melhorar foi:
    ${respostas[1]}

    O que te deixou feliz hoje:
    ${respostas[2]}

    você ajudou ${respostas[3]} pessoas hoje!!!

    volte amanhã para novas reflexões
    `)
})