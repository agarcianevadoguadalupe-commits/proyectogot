import { Personaje } from "../personaje.js";

export class caminanteBlanco extends Personaje {
    #vida;
    #poderHelado;

    // Constructor (Tienen casa porque estarán en "la casa" de caminantes blancos)
    constructor(nombre, poderHelado, casa) {
        super(nombre, 0, true, casa);
        this.#vida = 100;
        this.#poderHelado = poderHelado;
    }

    // Getter
    get getVida() {
        return this.#vida;
    }

    get getPoderHelado() {
        return this.#poderHelado;
    }

    // Setter
    set setVida(vida) {
        this.#vida = vida;
    }

    set setPoderHelado(poderHelado) {
        this.#poderHelado = poderHelado;
    }

    // Funcion atacar
    atacar(objetivo) {
        console.log(this.getNombre + " ataca a " + objetivo.getNombre + " con su poder helado causando " + this.#poderHelado + " puntos de daño.");
        objetivo.recibirDano(this.#poderHelado);
    }

    // Funcion recibirDano
    recibirDano(puntos, fuente) {
        if (fuente.getTipoAtaque === "fuego") {
            // Fuego de dragón: muere automáticamente
            this.#vida = 0;
            this.morir();
        } else if (fuente.getTipo === "acero valyrio") {
            this.#vida -= puntos;
            if (this.#vida <= 0) {
                this.#vida = 0;
                this.morir();
            }
        } else {
            console.log(this.getNombre + " no sufre ningún daño con " + fuente.getNombre + ".");
        }
    }

    // Funcion morir
    morir() {
        this.setEstaVivo = false;
        console.log(this.getNombre + " se ha desvanecido.");
    }
}