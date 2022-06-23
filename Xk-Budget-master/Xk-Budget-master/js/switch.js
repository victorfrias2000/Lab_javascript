var color = "verde"
/*
if (color == "rojo") {
    console.log("FF0000");

} else if (color == "negro") {
    console.log("000000");

} else if (color == "azul") {
    console.log("0000FF");

} else {
    console.log("???");
}*/

//Usando switch
switch (color) {
    case "rojo":
        console.log("FF0000")
        break;
    case "negro":
        console.log("000000")
        break;
    case "azul":
        console.log("0000FF")
        break;
    default:
        console.log("???")
        break;
}

function saludo(nombre, apellido, evento, genero, minutosQueFaltan) {
    var msgGenero = "";

    if (genero == "masculino") {
        msgGenero = "Bienvenido :"
    } else
        msgGenero = "Bienvenida :"

    return `${msgGenero} ${nombre.trim().toUpperCase()}, ${apellido.trim().toUpperCase()}, recuerda hoy el evento : ${evento}, ${parseInt(minutosQueFaltan)} horas`
}

var horariosEvento = saludo("victo david            ", "reyes manzueta          ", "montar bicicleta ", "masculino", "150")

console.log(horariosEvento)