/*
const user = {
    name: "victo rmanuel",
    lastNmae: "alcantara",
    age: 41,

    showFUllName() {
        return "victo manuel de las pinas"
    }

}

console.log(user.showFUllName())*/


const clubes = {
    //propiedads del objecto
    dojo: "Sensei VU",
    ciudad: "Inmaculada",
    dojo_1: "Sensei Sato",
    ciudad_2: "Tokio",

    deporte: {
        nombre: "Judo",
        origen: "Japón",
    },

    setdeporte: function (nombre,origen) {
        this.deporte.nombre =nombre;
        this.deporte.origen =origen;
    },

    //funcion dentro del objecto
    setClube: function (dojo, ciudad) {
        this.dojo = dojo;
        this.ciudad = ciudad;
    },
    //funcion dentro del objecto
    getClube: function () {
        return `${this.dojo}, ${this.ciudad}`
    }
}

clubes.setdeporte("BOXEO","RD");
clubes.setClube("AGUILAS DEL CIBAO", "SANTO DOMINGO")
console.log(`Club de ${clubes.deporte.nombres} ${clubes.getClube()}`)