import { Personaje } from "../personaje.js";

export class guerrero extends Personaje {
    arma;

    // Constructor
    constructor(nombre, edad, estaVivo, casa, arma) {
        super(nombre, edad, estaVivo, casa);
        this.arma = arma;
    }

    // Getter
    getArma() {
        return this.arma;
    }

    // Setter
    setArma(arma) {
        this.arma = arma;
    }

    // Equipar un arma
    equiparArma(arma) {
        this.setArma(arma);
        console.log(this.nombre + " ha equipado el arma " + arma.getNombre() + ".");
    }

    // Funcion luchar
    luchar() {
        console.log(`${this.nombre} ataca con su ${this.arma.nombre}, causando ${this.arma.dano} puntos de daño.`);
    }

    // Funcion entrenar
    entrenar() {
        console.log(`${this.nombre} se entrena sin descanso para la próxima batalla.`);
    }
}