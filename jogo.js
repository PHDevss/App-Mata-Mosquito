let altura = window.innerHeight
let largura = window.innerWidth


function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

function posicaoRandomica(){

    // Removendo mosquito anterior caso exista
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
    }
    // Fim
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    // criar o elemento html
    
    let mosquito = document.createElement('img')
    mosquito.src="imagens/mosca.png"
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    
    document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random()*3)
    switch (classe) {
        case 0: 
            return 'mosquito1'
        case 1: 
            return 'mosquito2'    
        case 2: 
            return 'mosquito3'   
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random()*2)
    switch (classe) {
        case 0: 
            return 'ladoA'
        case 1: 
            return 'ladoB'     
    }
}

