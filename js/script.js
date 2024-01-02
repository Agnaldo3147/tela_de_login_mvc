var definicoes = document.querySelector('.definicoes')
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

const FuncaoDefinicoes = ()=>{
    if(todas_definicoes.style.display == 'block'){
    
        todas_definicoes.style.display = 'none'
            
        }else{
            todas_definicoes.style.display = 'block'

        }
    }


idioma.addEventListener('click', ()=>{

    FuncaoIdioma()

})
definicoes.addEventListener('click', ()=>{

    FuncaoDefinicoes()

})
retirar_def.addEventListener('click', ()=>{

    todas_definicoes.style.display = 'none'

})

fechar_aba.addEventListener('click', ()=>{
    FuncaoIdioma()
})

ofuscar_tela.addEventListener('click', ()=>{
    FuncaoIdioma()
})