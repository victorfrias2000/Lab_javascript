var expresionRegular = /as/i;
var cadenaCaracteres = "pAsa";

if (expresionRegular.test(cadenaCaracteres)) {
    console.log(true)
} else {
    console.log(false)
}

cadenaCaracteres = "ald1"

expresionRegular = new RegExp('^[abc]l[0-9]')

var resultado =cadenaCaracteres.match(expresionRegular)

console.log(resultado)
/*hola mundo*/
