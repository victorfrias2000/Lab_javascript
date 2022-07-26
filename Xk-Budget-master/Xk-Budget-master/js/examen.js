var estudiantes = [
	{
	nombre: "Anton",
	nota: 19
	},
	{nombre: "Victoria",
	nota: 20,
	},
	{
	nombre: "Elena",
	nota: 15
	}]

    var premio = estudiantes.filter (x => {
        return x.nota >= 19
    })


var flores = ["petunia","orquidea"];

var masFlores = ["margarita"];

masFlores = flores;

flores[2] = "acacia";

console.log(flores);

console.log(masFlores);


var esIngeniero = true;
var tieneRecomendacion = false;
var tieneExperienciaLaboral = true;
if (!esIngeniero) {
	if (!tieneExperienciaLaboral) {
		console.log("Rechazado");
	}
	else {
		console.log("En estudio");
	}
}
else {
	if (tieneRecomendacion) {
		console.log("Admitido");
	}
	else {
		console.log("Admitido condicional");
	}
}


var baile = "Hip-Hop";
var baile2 = baile;
baile2 = "Samba";
console.log(baile);
console.log(baile2);
//console.log(premio)

var nombreEmpleado = "alcantarara"
var anuncio = "Estimado  ${nombreEmpleado}, mañana se realizará el simulacro de prueba de la alarma contra incendios";
console.log(anuncio)

var fechacurso = new Date (2019,3,4);
console.log (fechacurso.toDateString());