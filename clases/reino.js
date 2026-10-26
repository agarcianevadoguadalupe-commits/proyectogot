export class Reino {
    #nombre;
    #casas = [];
    #rey;

    // Constructor
    constructor(nombre) {
        this.#nombre = nombre;
    }

    // Getters
    get getNombre() {
        return this.#nombre;
    }

    get getCasas() {
        return this.#casas;
    }

    get getRey() {
        return this.#rey;
    }

    // Setters
    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    set setCasas(casas) {
        this.#casas = casas;
    }

    set setRey(rey) {
        this.#rey = rey;
    }

    // Agregar una casa
    agregarCasa(casa) {
        this.#casas.push(casa);
        console.log("La Casa " + casa.getNombre + " ha sido añadida al Reino de " + this.#nombre + ".");
    }

    // Proclamar rey
    proclamarRey(rey) {
        this.#rey = rey;
        console.log(rey.getNombre + " ha sido proclamado rey de " + this.#nombre + ".");
    }

    // Listar las casas
    listarCasas() {
        console.log("Casas del Reino de " + this.#nombre + ":");
        for (let i = 0; i < this.#casas.length; i++) {
            console.log("- Casa " + this.#casas[i].getNombre);
        }
    }

    // Mostrar información del rey
    mostrarRey() {
        console.log("Rey actual:");
        console.log("El rey actual es " + this.#rey.getNombre + " de la Casa " + this.#rey.getCasa.getNombre + ".");
    }
}