const MisVehiculos = [
    {
        ESTADO: "NUEVO",
        MARCA: "HONDA",
        MODELO: "CIVIC",
        ANO: 2008,
        PRESIO: 350,
        COMBUSTIBLE: "GASOLINA",
        TRASION:"4WD",
        TRASMISION:"MECANICA"
    },

    {
        ESTADO: "USADO",
        MARCA: "TOYOTA",
        MODELO: "COROLLA",
        ANO: 1994,
        PRESIO: 175,
        COMBUSTIBLE: "GASOLINA",
        TRASION:"DELANTERA",
        TRASMISION:"AUTOMATICA"
    },

    {
        ESTADO: "NUEVO",
        MARCA: "HYUNDAI",
        MODELO: "SONATA",
        ANO: 2022,
        PRESIO: 175,
        COMBUSTIBLE: "LPI",
        TRASION:"AWD",
        TRASMISION:"SEMI AUTOMATICA"
    },

    {
        ESTADO: "NUEVO",
        MARCA: "HYUNDAI",
        MODELO: "ELANTRA",
        ANO: 2018,
        PRESIO: 175,
        COMBUSTIBLE: "GASOLINA",
        TRASION:"2WD",
        TRASMISION:"AUTOMATICA"
    },


]

//console.log(MisVehiculos.MARCA[0])
var newVehiculo = MisVehiculos.filter((vehiculo) =>{
    //console.log(car.MARCA,index)
    return "la marca del carro es: ",vehiculo.MARCA == "HONDA"
})

console.log(newVehiculo)





/*
let MisCoche = MisVehiculos.filter(items => items.TRASMISION =="SEMI AUTOMATICA")
console.log(MisCoche)*/