import { guerrero } from "./personajesEspeciales/guerrero.js";

export class batalla {
    #muertos = [];
    #enCurso = false;

    constructor() {}

    // Guerreros de una casa que pueden luchar (excluye no guerreros y personajes no vivos)
    #guerrerosVivos(casa) {
        return casa.getMiembros.filter(m => m instanceof guerrero && m.getEstaVivo);
    }

    iniciarBatalla(casaA, casaB) {
        if (this.#enCurso) {
            console.log("Ya hay una batalla en curso.");
            return;
        }

        if (casaA === casaB) {
            console.log("Una casa no puede enfrentarse a sí misma.");
            return;
        }

        this.#enCurso = true;

        console.log("Iniciamos la lucha...");

        console.log(`Los guerreros que pelearán de la casa ${casaA.getNombre} serán los siguientes:`);
        let guerrerosA = this.#guerrerosVivos(casaA);
        console.log(guerrerosA);

        console.log(`Los guerreros que pelearán de la casa ${casaB.getNombre} serán los siguientes:`);
        let guerrerosB = this.#guerrerosVivos(casaB);
        console.log(guerrerosB);

        while (guerrerosA.length > 0 && guerrerosB.length > 0) {
            this.enfrentamiento(guerrerosA[0], guerrerosB[0], casaA, casaB);

            guerrerosA = this.#guerrerosVivos(casaA);
            guerrerosB = this.#guerrerosVivos(casaB);
        }

        if (guerrerosA.length === 0) {
            console.log(`La casa ${casaB.getNombre} ha sido la ganadora`);
        } else {
            console.log(`La casa ${casaA.getNombre} ha sido la ganadora`);
        }

        // Resumen final
        this.mostrarGuerrerosMuertosEnCombate();
        this.mostrarSupervivientes(casaA, casaB);

        this.#enCurso = false;
    }

    mostrarGuerrerosMuertosEnCombate() {
        console.log("Guerreros muertos en combate:");
        console.log(this.#muertos);
    }

    mostrarSupervivientes(casaA, casaB) {
        const vivos = [...this.#guerrerosVivos(casaA), ...this.#guerrerosVivos(casaB)]
            .filter(m => !this.#muertos.includes(m));
        console.log("Supervivientes:");
        console.log(vivos);
    }

    enfrentamiento(guerreroA, guerreroB, casaA, casaB) {
        console.log(`Nuevo enfrentamiento: ${guerreroA.getNombre} VS ${guerreroB.getNombre}`);

        while (guerreroA.getVida > 0 && guerreroB.getVida > 0) {
            guerreroA.atacar(guerreroB);

            if (guerreroB.getVida > 0) {
                guerreroB.atacar(guerreroA);
            }
        }

        if (guerreroA.getVida <= 0) {
            this.#muertos.push(guerreroA);
            casaA.setMiembros = casaA.getMiembros.filter(m => m !== guerreroA);
        } else {
            this.#muertos.push(guerreroB);
            casaB.setMiembros = casaB.getMiembros.filter(m => m !== guerreroB);
        }

        console.log(`${guerreroA.getNombre}: ${guerreroA.getVida} | ${guerreroB.getNombre}: ${guerreroB.getVida}`);
    }
}