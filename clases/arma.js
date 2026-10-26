class Arma {
    nombre;
    dano;
    tipo;

    // Constructor
    constructor(nombre, dano, tipo) {
        this.nombre = nombre;
        this.dano = dano;
        this.tipo = tipo;
    }

    // Getters
    getNombre() {
        return this.nombre;
    }

    getDano() {
        return this.dano;
    }

    getTipo() {
        return this.tipo;
    }

    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setDano(dano) {
        this.dano = dano;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    // Descripción
    descripcion() {
        console.log(this.nombre + " (" + this.tipo + ") - daño: " + this.dano);
    }
}