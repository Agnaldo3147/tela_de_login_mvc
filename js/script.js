var definicoes = document.querySelector('.definicoes')
var header = document.querySelector('.header')
var main = document.querySelector('.main')
var idioma = document.querySelector('.idioma')
var idiomas_desponiveis = document.querySelector('.idiomas_desponiveis')
var retirar_def = document.querySelector('.retirar_def')
var todas_definicoes = document.querySelector('.todas_definicoes')
var ofuscar_tela = document.querySelector('.ofuscar_tela')
var fechar_aba = document.querySelector('.fechar_aba')


const FuncaoIdioma = ()=>{
    if(idiomas_desponiveis.style.display == 'block'){
    
        idiomas_desponiveis.style.display = 'none'
        ofuscar_tela.style.display = 'none'
            
        }else{
            idiomas_desponiveis.style.display = 'block'
            ofuscar_tela.style.display = 'block'
        }
    }
    var teste = true

const FuncaoDefinicoes = ()=>{
    todas_definicoes.classList.add('motrar_todas_def')
    todas_definicoes.classList.remove('esconder_todas_def')
}


idioma.addEventListener('click', ()=>{

    FuncaoIdioma()

})

header.addEventListener('click', ()=>{
    
    todas_definicoes.classList.add('esconder_todas_def')
    
})
main.addEventListener('click', ()=>{
    
    todas_definicoes.classList.add('esconder_todas_def')
    
})
definicoes.addEventListener('click', (evt)=>{
    FuncaoDefinicoes() 
    todas_definicoes.classList.remove('esconder_todas_def')
    evt.stopPropagation()
})


fechar_aba.addEventListener('click', ()=>{
    FuncaoIdioma()
})

ofuscar_tela.addEventListener('click', ()=>{
    FuncaoIdioma()
})


//EXECUTANDO UMA PROMISE


const logo_promise = document.querySelector('.logo_promise')

    var promise = new Promise((deu_certo, deu_errado)=>{
    let Tempo = 2500

    setTimeout(()=>{
        deu_certo(logo_promise)
    }, Tempo)
    })

    promise.then((retorno)=>{
        retorno.style.display = 'none'
    })



