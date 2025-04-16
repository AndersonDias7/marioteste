/* 3 jeitos de criar variaveis
    - var / jeito antigo - NÃO USE
    - let -> VOCE pode alterar depois
    - const -> constante  */

    const form = document.querySelector(".formulario-fale-conosco")
    const masc = document.querySelector(".mascara-formulario")

    function mostrarForm () {
        form.style.left = "50%"
        form.style.transform = "translateX(-50%)"
        masc.style.visibility = "visible"
        
        
    }
    function esconderForm (){
        form.style.left = "-300px"
        form.style.transform = "translateX(0)"
        masc.style.visibility = "hidden"
        
        
        
    } 


