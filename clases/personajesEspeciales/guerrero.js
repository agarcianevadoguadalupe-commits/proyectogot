import { Personaje } from "../personaje.js";

export class guerrero extends Personaje {
    #arma;

    // Constructor
    constructor(nombre, edad, estaVivo, casa, arma) {
        super(nombre, edad, estaVivo, casa);
        this.#arma = arma;
    }

    // Getter
    get getArma() {
        return this.#arma;
    }

    // Setter
    set setArma(arma) {
        this.#arma = arma;
    }

    // Equipar un arma
    equiparArma(arma) {
        this.setArma = arma;
        console.log(this.getNombre + " ha equipado el arma " + arma.getNombre + ".");
    }

    // Funcion luchar
    luchar() {
        console.log(`${this.getNombre} ataca con su ${this.#arma.getNombre}, causando ${this.#arma.getDano} puntos de daño.`);
    }

    // Funcion entrenar
    entrenar() {
        console.log(`${this.getNombre} se entrena sin descanso para la próxima batalla.`);
    }
}