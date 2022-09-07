//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const botonCalcularTotal = document.querySelector ('#boton-calcular-total');

botonCalcularTotal.onclick = function () {
    let horasDeVideo = document.querySelector (".horas");
    let minutosDeVideo = document.querySelector (".minutos");
    let segundosDeVideo = document.querySelector (".segundos");

    /*const horasSegundos = horasDeVideo * 3600;
    const minutosSegundos = minutosDeVideo * 60;
    const segundos = segundos + minutosSegundos + horasSegundos;
    */
    
    
    
    
   

    document.querySelector("#resultado").innerText = `${minutosTotales} : ${horasTotales}`
  
    return false;
   
}