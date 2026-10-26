export class casa {
    #nombre;
    #lema;
    #miembros = [];

    // Constructor
    constructor(nombre, lema) {
        this.#nombre = nombre;
        this.#lema = lema;
    }

    // Getters
    get getNombre() {
        return this.#nombre;
    }

    get getLema() {
        return this.#lema;
    }

    get getMiembros() {
        return this.#miembros;
    }

    // Setters
    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    set setLema(lema) {
        this.#lema = lema;
    }

    set setMiembros(miembros) {
        this.#miembros = miembros;
    }

    // Añadir un miembro
    agregarMiembro(personaje) {
        this.#miembros.push(personaje);
        console.log(personaje.getNombre + " ha sido añadido a la Casa " + this.#nombre + ".");
    }

    // Ver los miembros
    listarMiembros() {
        console.log("Miembros de la Casa " + this.#nombre + ":");
        for (let i = 0; i < this.#miembros.length; i++) {
            console.log("- " + this.#miembros[i].getNombre);
        }
    }
}