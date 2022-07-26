class Evento {
    constructor(id, nombre, cantidadAsistentes, precioPorAsistente) {
        this.id = id;
        this.nombre = nombre;
        this.cantidadAsistentes = cantidadAsistentes;
        this.precioPorAsistente = precioPorAsistente;
    }

    getEnlace() {
        return `/evento/${this.id}`
    }

    getDineroTotalRecaudado() {
        return `${this.cantidadAsistentes * this.precioPorAsistente}`
    }
}

var evento1 = new Evento(1,"evento",12,5)
console.log(evento1.getEnlace())
console.log(evento1.getDineroTotalRecaudado())