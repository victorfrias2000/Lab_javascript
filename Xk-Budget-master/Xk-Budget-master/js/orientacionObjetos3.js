const cliente01 = {
    nombre: "juan",
    apellido:"perez",
    edad:   45,
    domicilio:"paseo del rey 1400",
    localidad: "capitalfederal"
}

for(var propiedades in cliente01){
    console.log(propiedades,cliente01[propiedades])
}