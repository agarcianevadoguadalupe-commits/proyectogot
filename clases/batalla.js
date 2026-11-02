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
        const vivos = [...this.#guerrerosVivos(casaA), ...this.#guerrerosVivos(casaB)].filter(m => !this.#muertos.includes(m));
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
    
    // Batalla Final
    // Devuelve solo los personajes vivos de una lista
    #vivos(lista) {
        const vivos = [];
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].getEstaVivo) {
                vivos.push(lista[i]);
            }
        }
        return vivos;
    }

    batallaFinal(casa, khaleesi, ejercitoCaminantes) {
        // Ejército aliado: guerreros de la casa + dragones de Daenerys
        const aliados = this.#guerrerosVivos(casa).concat(khaleesi.getDragones);
        let ronda = 1;

        console.log("¡COMIENZA LA BATALLA FINAL!");
        console.log(`La casa ${casa.getNombre} y los dragones de ${khaleesi.getNombre} se enfrentan a los Caminantes Blancos.`);

        console.log(`Los guerreros que pelearán de la casa ${casa.getNombre} serán los siguientes:`);
        console.log(this.#guerrerosVivos(casa));

        while (this.#vivos(aliados).length > 0 && this.#vivos(ejercitoCaminantes).length > 0) {
            console.log(`Ronda ${ronda}:`);

            // Atacan los aliados
            const aliadosVivos = this.#vivos(aliados);
            for (let i = 0; i < aliadosVivos.length; i++) {
                const enemigos = this.#vivos(ejercitoCaminantes);
                if (enemigos.length > 0) {
                    const posicion = Math.floor(Math.random() * enemigos.length);
                    aliadosVivos[i].atacar(enemigos[posicion]);
                }
            }

            // Atacan los caminantes blancos
            const caminantesVivos = this.#vivos(ejercitoCaminantes);
            for (let i = 0; i < caminantesVivos.length; i++) {
                const objetivos = this.#vivos(aliados);
                if (objetivos.length > 0) {
                    const posicion = Math.floor(Math.random() * objetivos.length);
                    caminantesVivos[i].atacar(objetivos[posicion]);
                }
            }

            ronda++;
        }

        // Resultado
        if (this.#vivos(ejercitoCaminantes).length === 0) {
            console.log(`¡El fuego ha vencido al hielo! La casa ${casa.getNombre} y los dragones han salvado Poniente.`);
        } else {
            console.log(`¡El hielo ha vencido! La noche eterna cae sobre Poniente y sobre la casa ${casa.getNombre}.`);
        }

        console.log("Supervivientes aliados:");
        console.log(this.#vivos(aliados));
        console.log("Caminantes blancos supervivientes:");
        console.log(this.#vivos(ejercitoCaminantes));
    }
}