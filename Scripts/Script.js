//-------------------------------------------------- Funciones Regulares --------------------------------------------------

//OF_ON_background


let ActiveModeWhile = document.querySelector(".ActiveMode_While"); 
let Remove_ico_black = document.querySelector(".Mode_black");
let Add_ico_while = document.querySelector(".Mode_While");
let modoOscuro = false;
let modeIco = false;



ActiveModeWhile.addEventListener("click", () => {
if(!modoOscuro){    
document.documentElement.style.setProperty('--colorFonts','black')
document.documentElement.style.setProperty('--colorbackground','#fff')
document.documentElement.style.setProperty('--conteinerbackground','#626262')
Remove_ico_black.classList.add("Mode_ico_display_none")
Add_ico_while.classList.remove("Mode_ico_display_none")

}else{
    document.documentElement.style.setProperty('--colorFonts','#fff')
    document.documentElement.style.setProperty('--colorbackground','#010101')
    document.documentElement.style.setProperty('--conteinerbackground','#121212')
    Remove_ico_black.classList.remove("Mode_ico_display_none")
    Add_ico_while.classList.add("Mode_ico_display_none")

}
//invertir_ es la clave en un evento infinito
modoOscuro = !modoOscuro;
})



//menu deploy

// Seleccionamos el div y el botón por su ID
let elemento = document.querySelector(".menu_seeker");
let boton = document.getElementById("Button-MenuClose-Inp");

// Agregamos un evento click al botón
boton.addEventListener("click", function() {
  // Insertamos la clase 'nuevo-estilo' al div
  elemento.classList.toggle("Remove");
});


