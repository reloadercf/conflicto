/// toda la logica
const logica ={
    generarEstrella,
    /*
    algo:function(){

    },
    edad:25,
    vivo:true,
    perfil:{
        musica:"foster the people"
    }
    */
}
// declaracion
function generarEstrella(numeroEstrellas){
    let resultadoEstrellas=""
    for(let totalestrellas=0; totalestrellas<numeroEstrellas; totalestrellas++){
        resultadoEstrellas+="*"
    }
    return resultadoEstrellas
}

export default logica