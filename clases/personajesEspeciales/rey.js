import { Personaje } from "../personaje.js";

export class rey extends Personaje {
    #aniosReinado;

    // Constructor
    constructor(nombre, edad, estaVivo, casa, aniosReinado) {
        super(nombre, edad, estaVivo, casa);
        this.#aniosReinado = aniosReinado;
    }

    // Getter
    get getAniosReinado() {
        return this.#aniosReinado;
    }

    // Setter
    set setAniosReinado(aniosReinado) {
        this.#aniosReinado = aniosReinado;
    }

    // Funcion luchar
    luchar() {
        console.log(`${this.getNombre} lidera la batalla y anima a sus tropas.`);
    }

    // Funcion gobernar
    gobernar() {
        console.log(`${this.getNombre} gobierna con sabiduría desde hace ${this.#aniosReinado} años.`);
    }
}