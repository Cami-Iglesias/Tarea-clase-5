
const botonAceptar = document.querySelector('#boton-aceptar');

botonAceptar.onclick = function () {
  
    const nombreDeUsuario = document.querySelector('#nombre').value;
    const apellidoDelUsuario = document.querySelector('#apellido').value;
    const edadDelUsuario = document.querySelector ('#edad-usuario').value;

  document.querySelector ('h1').innerText = "Bienvenid@, " + nombreDeUsuario + "!";

    const formulario = "El usuario se llama " + nombreDeUsuario + " " + apellidoDelUsuario + " y tiene " + edadDelUsuario + " años de edad.";  
  
  document.querySelector('#informacion-usuario').innerText = formulario;
  
  console.log(formulario);

}