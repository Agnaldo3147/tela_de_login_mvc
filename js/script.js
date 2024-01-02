var idiomas_desponiveis = document.querySelector('.idiomas_desponiveis')
var definicoes = document.querySelector('.definicoes')
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


definicoes.addEventListener('click', ()=>{

    FuncaoIdioma()

})

fechar_aba.addEventListener('click', ()=>{
    FuncaoIdioma()
})

ofuscar_tela.addEventListener('click', ()=>{
    FuncaoIdioma()
})