
var paisvisit; //creamos la variable de pais visitado

function aceptado(event) {
  alert('Aceptado')
}

function saludo(event) {
  alert('hola mundo')
}
var btnAceptar = document.getElementById('boton-aceptar');


btnAceptar.addEventListener("click",aceptado);
btnAceptar.addEventListener("click",saludo)

function visitaPais(formulario) {  
  if (formulario.pais.value == "") {  // si el select no selecciona un pais te lanza una alerta
      alert("País es obligatorio");
      return false;
  } else {
  if (formulario.pais.value == "RD") { // si el value del select es 1 guarda argentina
      paisvisit = "DOMINICAN REPUBLIC";
      localStorage.setItem("pais", paisvisit); // guarda argentina en localstorage en "pais"
  }
  if (formulario.pais.value == "AF") { // si el value del select es 2 guarda Brasil
      paisvisit = "Afganistán";
      localStorage.setItem("pais", paisvisit); // guarda Brasil en localstorage en "pais"
  }
  if (formulario.pais.value == "DE") { // si el value del select es 3 guarda Chile
      paisvisit = "Alemania";
      localStorage.setItem("pais", paisvisit); // guarda Chile en localstorage en "pais"
  }
      return true;
  }
}

function mostrarPaís() {
  var paisObt = localStorage.getItem('pais') // para llamar el dato guardado
    document.getElementById("ultimoPaisVisitado").innerHTML = paisObt;
  }

  function saludo(){
    console.log('hola victor alcantara')
  }

  function conectar() {
    document.getElementById("mensaje").innerHTML ='Conectado...';
  }
mostrarPaís()