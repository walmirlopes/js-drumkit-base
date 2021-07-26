/*Cria um evento para escutar a interação do usuário com a página recebendo como
primeiro parâmetro o tipo de evento e passando o evento com suas funções como segundo parâmetro*/
document.body.addEventListener('keyup', (event) => {
    //chamada da função playSound e conversão do valor recebido para lowerCase
    playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value

    if (song !== '') {
        let songArray = song.split('')
        playComposition(songArray)
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if (audioElement) {
        audioElement.currentTime = 0  //reseta tempo de execução
        audioElement.play() //executa efeito sonoro da variável
    }

    if (!audioElement) {
        //console.log('Elemento Inválido')
    }

    if (keyElement) {
        keyElement.classList.add('active')

        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300)
    }
}

function playComposition(songArray) {
    let wait = 0

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)

        wait += 250;
    }
}