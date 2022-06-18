
function capitalize(x) {
    return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
}

function procesarFila(fila) {

    //var fila ="   luiS, BLANCO"
    var arreglo = fila.split(",")
    var nombre = arreglo[0].trim()
    var apellido = arreglo[1].trim()
    return capitalize(nombre) + " " + capitalize(apellido)

}

function miRecetaFavorita(tituloRecta, ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5) {
    var miRecta = (`MI BOSA DE COMIDA   : ${tituloRecta}
    INGREDIENTES  : ${ingrediente1} ,${ingrediente2} ,${ingrediente3} ,${ingrediente4} ,${ingrediente5}`)
    return miRecta
}

var receta = miRecetaFavorita(" PAN CON CHOCOLATE "," AZUCAR"," CANELA"," CLAVO DULCE"," CHOCOLATE"," LECHE")

console.log(receta)

//console.log(procesarFila(fila))