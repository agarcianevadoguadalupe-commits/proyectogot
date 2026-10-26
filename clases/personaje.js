export class Personaje {
    #nombre;
    #edad;
    #estaVivo;
    #casa;

    // ── Constructor ──
    constructor(nombre, edad, estaVivo, casa) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#estaVivo = estaVivo;
        this.#casa = casa;
    }

    // ── Getters ──
    get getNombre() {
        return this.#nombre;
    }

    get getEdad() {
        return this.#edad;
    }

    get getEstaVivo() {
        return this.#estaVivo;
    }

    get getCasa() {
        return this.#casa;
    }

    // ── Setters ──
    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    set setEdad(edad) {
        this.#edad = edad;
    }

    set setEstaVivo(estaVivo) {
        this.#estaVivo = estaVivo;
    }

    set setCasa(casa) {
        this.#casa = casa;
    }

    // Presentarse
    presentarse() {
        console.log("Soy " + this.#nombre + " de la Casa " + this.#casa.getNombre + ".");
    }

    // Morir
    morir() {
        this.#estaVivo = false;
        console.log(this.#nombre + " ha muerto");
    }
}