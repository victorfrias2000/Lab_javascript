/*function GestionarEstudiante(estudiante,nota1,nota2,Gestion) {
    var resGestion = Gestion(nota1,nota2);
    console.log(`Nombre Completo del Estudiante: ${estudiante} ${resGestion}`);
}

function Promedio(nota1, nota2) {
    return (nota1 + nota2) / 2;
}
GestionarEstudiante('Jose Carrillo', 18, 20, Promedio);*/

const arregloDelDoble = [1, 2, 3, 4, 5];

const operacines = arregloDelDoble.map(operacionMatematica)

const numberImpares = arregloDelDoble.filter(numerosImpares)

function operacionMatematica(operacines) {
    return operacines * 2;
}

function numerosImpares(numberImpares) {
    return numberImpares % 2 == 1;
}

function dobleImpar(arreglos) {
    var resultado = arreglos.map(x => {
        if (x % 2 !== 0) {
            return x * 2
        } else {
            return x / 2
        }
    })
    return resultado
}

console.log(operacines)
console.log(numberImpares)
console.log(dobleImpar(arregloDelDoble))
