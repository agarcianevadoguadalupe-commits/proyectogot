export class Arma {
    #nombre;
    #dano;
    #tipo;

    // Constructor
    constructor(nombre, dano, tipo) {
        this.#nombre = nombre;
        this.#dano = dano;
        this.#tipo = tipo;
    }

    // Getters
    get getNombre() {
        return this.#nombre;
    }

    get getDano() {
        return this.#dano;
    }

    get getTipo() {
        return this.#tipo;
    }

    // Setters
    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    set setDano(dano) {
        this.#dano = dano;
    }

    set setTipo(tipo) {
        this.#tipo = tipo;
    }

    // Descripción
    descripcion() {
        console.log(this.#nombre + " (" + this.#tipo + ") - daño: " + this.#dano);
    }
}