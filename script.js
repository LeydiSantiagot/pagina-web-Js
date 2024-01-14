//importar objetos del archivo ciudades

import { barcelona, roma, paris, londres } from "./ciudades.js";


//obtener los elementos del DOM  DOCUMENT OBJECT 

let enlaces = document.querySelectorAll('a')
let tituloElement = document.getElementById('titulo')
let subtituloElement = document.getElementById('subtitulo')
let parrafoElement = document.getElementById('parrafo')


//agregar un evento 
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function (){
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });

        this.classList.add('active')

        //obtener contenido correspondiente
        let contenido = obtenerContenido(this.textContent)

        //Mostrar contenido en DOM
        tituloElement.innerHTML= contenido.titulo
        subtituloElement.innerHTML= contenido.subtitulo
        parrafoElement.innerHTML = contenido.parrafo
    })
})

//funcion para traer la info de ciudades.js
//la variable enlace es un string que se pasa por parametro
function obtenerContenido(enlace){
    let contenido= {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    //asi se obtiene el objeto del string que corresponde
    return contenido[enlace]
}
