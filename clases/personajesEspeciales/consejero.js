import { Personaje } from "../personaje.js";

export class consejero extends Personaje {
    especialidad;

    // Constructor
    constructor(nombre, edad, estaVivo, casa, especialidad) {
        super(nombre, edad, estaVivo, casa);
        this.especialidad = especialidad;
    }

    // Getter
    getEspecialidad() {
        return this.especialidad;
    }

    // Setter
    setEspecialidad(especialidad) {
        this.especialidad = especialidad;
    }

    // Funcion luchar
    luchar() {
        console.log(`${this.nombre} no lucha con armas, sino con palabras e inteligencia`);
    }

    // Funcion aconsejar
    aconsejar(rey) {
        console.log(`${this.nombre} aconseja a ${rey.getNombre()} sobre ${this.especialidad}.`);
    }
}