var id = "COMP18S_";
var version = ".midoc";

//COMP18S_1_Interactiva_V1.midoc

class ElementoInstruccional {

    //construcctor de la clase
    constructor(identificador, tipo, versión) {
        this.identificador = identificador;
        this.tipo = tipo;
        this.versión = versión
    }

    getNombreArchivo() {
        return (`${id}${this.identificador}_${this.tipo}_${this.versión}${version}`);
    }

}

var a1 = new ElementoInstruccional("1", "interactiva", "v1");
var a2 = new ElementoInstruccional("2", "ejercicio", "v2")
var a3 = new ElementoInstruccional("3", "laboratorio", "v1")

console.log(a1.getNombreArchivo());
console.log(a2.getNombreArchivo());
console.log(a3.getNombreArchivo());