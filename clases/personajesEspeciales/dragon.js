import { Personaje } from "../personaje.js";
import { caminanteBlanco } from "./caminanteBlanco.js";

export class dragon extends Personaje{
    #poder;
    #tipoAtaque;
    #vida;

    // Constructor
    constructor(nombre, edad, estaVivo, casa, poder, tipoAtaque) {
        super(nombre, edad, estaVivo, casa);
        this.#poder = poder;
        this.#tipoAtaque = tipoAtaque;
        this.#vida = 1000;
    }

    // Getter
    get getPoder() {
        return this.#poder;
    }

    get getTipoAtaque() {
        return this.#tipoAtaque;
    }

    get getVida() {
        return this.#vida;
    }

    // Setter
    set setPoder(poder) {
        this.#poder = poder;
    }

    set setTipoAtaque(tipoAtaque) {
        this.#tipoAtaque = tipoAtaque;
    }

    set setVida(vida) {
        this.#vida = vida;
    }

    // Funcion Atacar
    atacar(objetivo) {
        if (objetivo instanceof caminanteBlanco) {
            console.log(this.getNombre + " ataca a " + objetivo.getNombre + " con fuego de dragón y lo elimina por completo.");
            objetivo.recibirDano(objetivo.getVida);
        } else {
            const dano = this.#poder;
            console.log(this.getNombre + " ataca a " + objetivo.getNombre + " causando " + dano + " puntos de daño.");
            objetivo.recibirDano(dano);
        }
    }

    // Funcion recibirDano
    recibirDano(puntos) {
        this.#vida -= puntos;
        if (this.#vida <= 0) {
            this.#vida = 0;
            this.morir();
        }
    }
}