import { Personaje } from "../personaje.js";

export class consejero extends Personaje {
    #especialidad;

    // Constructor
    constructor(nombre, edad, estaVivo, casa, especialidad) {
        super(nombre, edad, estaVivo, casa);
        this.#especialidad = especialidad;
    }

    // Getter
    get getEspecialidad() {
        return this.#especialidad;
    }

    // Setter
    set setEspecialidad(especialidad) {
        this.#especialidad = especialidad;
    }

    // Funcion luchar
    luchar() {
        console.log(`${this.getNombre} no lucha con armas, sino con palabras e inteligencia`);
    }

    // Funcion aconsejar
    aconsejar(rey) {
        console.log(`${this.getNombre} aconseja a ${rey.getNombre} sobre ${this.#especialidad}.`);
    }
}