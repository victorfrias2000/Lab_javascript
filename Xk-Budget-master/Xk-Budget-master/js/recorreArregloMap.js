var trabajo = [
    { nombre: "victor", apellido: "ALCANTARA", dept: "TIC", puesto: "QA", salrioContratado: 1500 },
    { nombre: "JOSE", apellido: "MORALES", dept: "TIC", puesto: "DEVELOPER", salrioContratado: 2000 },
    { nombre: "DAVID", apellido: "ENCARNACION", dept: "GESTION HUMANA", puesto: "DIGITADOR", salrioContratado: 950 },
    { nombre: "JADE", apellido: "REYES", dept: "CONTABILIDAD", puesto: "AUXILIAR", salrioContratado: 1200 },
    { nombre: "AMELIA", apellido: "MARTINEZ", dept: "OPERACIONES", puesto: "SERVICIO AL CLIENTE", salrioContratado: 600 },
    { nombre: "JOEL", apellido: "MORALES", dept: "CONSERGE", puesto: "LIMPIEZA", salrioContratado: 350 },
    { nombre: "BRAYAN", apellido: "GUZMAN", dept: "TIC", puesto: "ANALISTA", salrioContratado: 2000 },
]
var newEmpleado = trabajo.map((empleado) => {
    return "hola " + empleado.nombre
})

var newLIst = trabajo.filter(function (empleado) {
    return empleado.salrioContratado <= 1000
})

console.log(newLIst)