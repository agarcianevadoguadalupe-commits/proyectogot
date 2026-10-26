export class Reino {
    nombre;
    casas = [];
    rey;

    // Constructor
    constructor(nombre) {
        this.nombre = nombre;
    }

    // Getters
    getNombre() {
        return this.nombre;
    }

    getCasas() {
        return this.casas;
    }

    getRey() {
        return this.rey;
    }

    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setCasas(casas) {
        this.casas = casas;
    }

    setRey(rey) {
        this.rey = rey;
    }

    // Agregar una casa
    agregarCasa(casa) {
        this.casas.push(casa);
        console.log("La Casa " + casa.getNombre() + " ha sido añadida al Reino de " + this.nombre + ".");
    }

    // Proclamar rey
    proclamarRey(personaje) {
        this.rey = personaje;
        console.log(personaje.getNombre() + " ha sido proclamado rey de " + this.nombre + ".");
    }

    // Listar las casas
    listarCasas() {
        console.log("Casas del Reino de " + this.nombre + ":");
        for (let i = 0; i < this.casas.length; i++) {
            console.log("- Casa " + this.casas[i].getNombre());
        }
    }

    // Mostrar información del rey
    mostrarRey() {
        console.log("Rey actual:");
        console.log("El rey actual es " + this.rey.getNombre() + " de la Casa " + this.rey.getCasa().getNombre() + ".");
    }
}