//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!


const botonAceptar = document.querySelector('#boton-aceptar');

botonAceptar.onclick = function () {
  
    const nombreDeUsuario = document.querySelector('#nombre').value;
    const apellidoDelUsuario = document.querySelector('#apellido').value;
    const edadDelUsuario = document.querySelector ('#edad-usuario').value;

  document.querySelector ('h1').innerText = "Bienvenid@, " + nombreDeUsuario;

    const formulario = "El usuario se llama " + nombreDeUsuario + " " + apellidoDelUsuario + "y tiene " + edadDelUsuario + " años de edad.";  
  
  document.querySelector('#informacion-usuario').innerText = formulario;
  
  console.log(formulario);

}