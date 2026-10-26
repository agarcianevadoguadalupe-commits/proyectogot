import { Personaje } from "../personaje.js";

export class rey extends Personaje {
    aniosReinado;

    // Constructor
    constructor(nombre, edad, estaVivo, casa, aniosReinado) {
        super(nombre, edad, estaVivo, casa);
        this.aniosReinado = aniosReinado;
    }

    // Getter
    getAniosReinado() {
        return this.aniosReinado;
    }

    // Setter
    setAniosReinado(aniosReinado) {
        this.aniosReinado = aniosReinado;
    }

    // Funcion luchar
    luchar() {
        console.log(`${this.nombre} lidera la batalla y anima a sus tropas.`);
    }

    // Funcion gobernar
    gobernar() {
        console.log(`${this.nombre} gobierna con sabiduría desde hace ${this.aniosReinado} años.`);
    }
}