import { Personaje } from "../personaje.js";

export class guerrero extends Personaje {
    #arma;
    #vida;

    // Constructor
    constructor(nombre, edad, estaVivo, casa, arma) {
        super(nombre, edad, estaVivo, casa);
        this.#arma = arma;
        this.#vida = 100;
    }

    // Getter
    get getArma() {
        return this.#arma;
    }

    get getVida() {
        return this.#vida;
    }

    // Setter
    set setArma(arma) {
        this.#arma = arma;
    }

    set setVida(vida) {
        this.#vida = vida;
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

    // Fase 3
    recibirDano(puntos) {
        this.#vida -= puntos;
        if (this.#vida <= 0) {
            this.#vida = 0;
            this.morir();
        }
    }

    atacar(objetivo) {
        const dano = Math.floor(this.#arma.getDano * (0.7 + Math.random() * 0.6)); // entre 70% y 130% del daño base
        console.log(`${this.getNombre} ataca a ${objetivo.getNombre} causando ${dano} puntos de daño.`);
        objetivo.recibirDano(dano);
    }
}