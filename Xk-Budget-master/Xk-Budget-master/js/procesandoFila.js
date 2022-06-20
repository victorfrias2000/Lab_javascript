
function capitalize(x) {
    return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
}

function procesarFila(fila) {

    //var fila ="   luiS, BLANCO"
    var arreglo = fila.split(",")
    var nombre = arreglo[0].trim()
    var apellido = arreglo[1].trim()
    return capitalize(apellido) + " " + capitalize(nombre)

}

function encabezadoEvento(evento, lugar) {
    return `Descripcion Evento: ${evento}  ||  Lugar Evento : ${lugar} `
}

function limpiarNombreParticipante(nombbre,apellido) {
    return `${apellido.trim().toUpperCase()}, ${nombbre.trim().toLowerCase()}`    
}

function miRecetaFavorita(tituloRecta, ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5, ingrediente6) {
    return `MI BOlSA DE COMIDA   : ${tituloRecta} 
    INGREDIENTES  : ${ingrediente1} ,${ingrediente2} ,${ingrediente3} ,${ingrediente4} ,${ingrediente5} ,${ingrediente6}`
}

var recepcionEvento = encabezadoEvento("Lectura de Poemas", " Sala A")
var nombreParticipanteEvento = limpiarNombreParticipante("    ana","     perez")

var receta = miRecetaFavorita(" PAN CON CHOCOLATE ", " AZUCAR", " CANELA", " CLAVO DULCE", " CHOCOLATE", " LECHE")

var fila ="          victor , alcantara              "

console.log(recepcionEvento)

console.log(nombreParticipanteEvento)

console.log(receta)

console.log(procesarFila(fila))