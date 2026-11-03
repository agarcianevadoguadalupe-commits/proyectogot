import { Casa } from "./Casa.js"

export class almacen {
    #casa;
    #cantidadRecursos = new Map([]);

    constructor(casa) {
        this.#casa = casa;
    }

    // Setter
    set setCasa(casa) {
        this.#casa = casa;
    }

    // Getter
    get getCasa() {
        return this.#casa;
    }

    // Funciones
    anadirRecurso(recurso, cantidad) {
        if (this.#cantidadRecursos.has(recurso)) {
            this.#cantidadRecursos.set(recurso, this.#cantidadRecursos.get(recurso) + cantidad);
        } else {
            this.#cantidadRecursos.set(recurso, cantidad);
        }
    }

    retirarRecurso(recurso) {
        if (this.#cantidadRecursos.has(recurso)) {
            this.#cantidadRecursos.delete(recurso);
            console.log(`El recurso ${recurso} se ha eliminado por completo.`);
        } else {
            console.log(`El recurso ${recurso} no existe.`);
        }
    }

    retirarCantidad(recurso, cantidad) {
        if (this.#cantidadRecursos.has(recurso)) {
            if (this.#cantidadRecursos.get(recurso) > cantidad) {
                this.#cantidadRecursos.set(recurso, this.#cantidadRecursos.get(recurso) - cantidad);
            } else {
                console.log(`La cantidad a retirar es mayor que la existente.`);
            }
        } else {
            console.log(`El recurso ${recurso} no existe.`);
        }
    }

    // Necesario para transferir de un almacen a otro en envío.
    obtenerCantidad(recurso) {
        if (this.#cantidadRecursos.has(recurso)) {
            return this.#cantidadRecursos.get(recurso);
        } else {
            return 0;
        }
    }

}