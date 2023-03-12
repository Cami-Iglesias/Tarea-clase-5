//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



const botonCalcularTotal = document.querySelector ('#boton-calcular-total');
const botonSumar = document.querySelector("#boton-sumar");



let horasTotales;
let minutosTotales;
let segundosTotales;

botonSumar.onclick = function(){
    const horasVideo = document.querySelector("#horas").value;
    const minutosVideo = document.querySelector("#minutos").vaule;
    const segundosVideo = document.querySelector("#segundos").value;

    horasTotales = sumarHoras (horasVideo);
    minutosTotales = sumarMinutos (minutosVideo);
    segundosTotales= sumarSegundos (segundosVideo);

}

function sumarHoras (horasVideo){
    horasTotales += horasVideo;
}
function sumarMinutos (minutosVideo){
    minutosTotales += minutosVideo;
}
function sumarSegundos (segundosVideo){
    segundosTotales += segundosVideo;
}



botonCalcularTotal.onclick = function (horasTotales,minutosTotales,segundosTotales){
    let horas;
    let minutos;
    let segundos;
    if (segundosTotales>= 60){
        minutos = trunc(segundosTotales / 60);
        segundos = segundosTotales % 60;
        minutosTotales += minutos;
    }else{
        segundos = segundosTotales;
    }

    if (minutosTotales>= 60){
        horas = trunc(minutosTotales / 60);
        minutos = minutosTotales % 60;
        horasTotales += horas;
    }else{
        minutos = minutosTotales;
    }


    let mensaje = document.querySelector("#resultado").innerText;
    mensaje = `El tiempo total de los videos del curso es:  ${horasTotales}:${minutos}:${segundos}`;


}