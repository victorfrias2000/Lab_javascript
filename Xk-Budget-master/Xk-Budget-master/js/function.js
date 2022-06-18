/*function saludar(nombre) {
    return `!hola ${nombre}!`
}

console.log(saludar("jose Motero"))*/

//declaraicon de variables 
var music1 = ' hola mundo'
var music2 = ' la nina esta llorando'
var music3 = ' the noise mix'
var music4 = ' la loca en el muelle de zanbla'
var music5 = ' la noche =>yoscar zarante'


//funcion con parametros
function sumar(a, b) {
    return a + b
}

//FUNCION SIN PARAMETROS
function noParametros() {
    return console.log("hola mundo progrador QA")
}

//play list 
function music(nameMusic) {
    return nameMusic
}

// función que transforma horas y minutos a minutos
function totalMinutos(horas, minutos) {
    var cantidad = (horas * 60) + minutos
    return cantidad
}

//calcula la cantidad de dinero recolectado dado un costo y la cantidad de participantes.
function cantidadRecolectadaSimpleme(costo, cantidad) {
    var resultadoCantidadSimple = (costo * cantidad)
    return resultadoCantidadSimple
}

var cantidadRecolectada = cantidadRecolectadaSimpleme(10, 5)

var convertirHorasMinutos = totalMinutos(5, 25)

var playList = music(music5)

var resultado = sumar(10, 6)

console.log("la suma es : " + resultado)

console.log(`Mi lista de canciones preferidas es :  ${playList}`)

console.log(`Cantidad de Minutos es  : ${convertirHorasMinutos}`)

console.log(`cantidad de dinero recolectado por participantes es  : ${cantidadRecolectada}`)