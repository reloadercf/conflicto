// importar
import logica from "./script.js"
// acceder al dom
const botonmagico=document.querySelector(".botonmagico")
const estrellas=document.querySelector(".estrellas")
const titulo=document.querySelector(".titulo")

botonmagico.addEventListener('click',function(){
    titulo.innerHTML=`<marquee>${logica.generarEstrella(estrellas.value)}</marquee>`
})
