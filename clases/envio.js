import { Almacen } from "./almacen.js"

export class envio {
    #idEnvio;
    #transporte;

    constructor(idEnvio, transporte) {
        this.#idEnvio = idEnvio;
        this.#transporte = transporte;
    }

    // Setter
    set setIdEnvio(idEnvio) {
        this.#idEnvio = idEnvio;
    }

    set setTransporte(transporte) {
        this.#transporte;
    }

    // Getter
    get getIdEnvio() {
        
    }
}
export class Envio {
    #idEnvio;
    #transporte;

    constructor(idEnvio, transporte) {
        this.#idEnvio = idEnvio;
        this.#transporte = transporte;
    }

    // Setter
    set setIdEnvio(idEnvio) {
        this.#idEnvio = idEnvio;
    }

    set setTransporte(transporte) {
        this.#transporte = transporte;
    }

    // Getter
    get getIdEnvio() {
        return this.#idEnvio;
    }

    get getTransporte() {
        return this.#transporte;
    }

    transferirRecursos(almacen1, almacen2, recurso, cantidad) {
        console.log(`Se transferirá el recurso ${recurso} en una cantidad de ${cantidad}`);

        const disponible = almacen1.obtenerCantidad(recurso);

        if (disponible >= cantidad) {
            almacen1.retirarCantidad(recurso, cantidad);
            almacen2.anadirRecurso(recurso, cantidad);
        } else {
            console.log(`El almacén origen solo tiene ${disponible} de ${recurso}`);
        }
    }
    
}