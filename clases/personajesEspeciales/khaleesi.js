import { Personaje } from "../personaje.js";

export class khaleesi extends Personaje {
    #dragones;
    #consejero;

    // Constructor
    constructor(nombre, edad, estaVivo, casa, dragones, consejero = "Tyrion Lannister") {
        super(nombre, edad, estaVivo, casa);
        this.#dragones = dragones;
        this.#consejero = consejero;
    }

    // Getter
    get getDragones() {
        return this.#dragones;
    }

    get getConsejero() {
        return this.#consejero;
    }

    // Setter
    set setDragones(dragones) {
        this.#dragones = dragones;
    }

    set setConsejero(consejero) {
        this.#consejero = consejero;
    }
}