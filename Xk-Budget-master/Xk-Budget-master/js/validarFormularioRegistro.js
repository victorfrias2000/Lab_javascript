//limpiar los erroes d notificacion

function limpiarErrores() {
  var errores = document.getElementsByClassName("error");
  for (var i = 0; i < errores.length; i++) {
    errores[i].innerHTML = "";
  }
}

function validar(formulario) {

  limpiarErrores();

  //se valida el campo nombre no este en blanco
  if (formulario.nombre.value.trim().length == 0) {
    document.getElementById("errorNombre").innerText = " * Campo obligatorio";
    formulario.nombre.focus();

    return false;

  }
  //se valida que el cambpo debe tener al menos tres caracteres
  if (formulario.nombre.value.trim().length < 3) {
    document.getElementById("errorNombre").innerText = " * Campo obligatorio";
    formulario.nombre.focus();

    return false;
  }

  let correo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

  if (!correo.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Email Incorrecto";
    formulario.email.focus();
ww
    return false;
  }
  //validar campo contrasena no este vacio
  if (formulario.contrasena.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText = " * campo obligatrio";
    formulario.contrasena.focus();

    return false;
  }

  //validar contrasena debe tener al menos 6 carracteres
  if (formulario.contrasena.value.trim().length < 6) {
    document.getElementById("errorContrasena").innerText = "Campo inválido (Mínimo 6 caracteres)";
    formulario.contrasena.focus();

    return false;
  }
    //se valida que el campo confirmar contrasena sea igual a contrasena
  if (formulario.contrasena.value != formulario.confirmacion.value){
    document.getElementById("errorConfirmacion").innerText = "Contrasena no coinciden";
    formulario.confirmacion.focus();

    return false;
  }

  if (formulario.genero.value =="") {
      document.getElementById("errorGenero").innerText ="Campo obligatorio";
      
      return false;
  }

  if (formulario.pais.value =="") {
    document.getElementById("errorPais").innerText = "Campo obligatorio";
    
    return false;

  }

  if (!formulario.terminos.checked) {
    document.getElementById("errorTerminos").innerText = "Debe aceptar los términos y condiciones";
    document.terminos.focus();

    return false;
    
  }

  alert("Datos enviados");

  return true;

}
