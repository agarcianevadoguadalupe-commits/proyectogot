export class guerrero {
    nombre;
    edad;
    estaVivo;
    casa;
    arma;

    // Getters
    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getEstaVivo() {
        return this.estaVivo;
    }

    getCasa() {
        return this.casa;
    }

    getArma() {
        return this.arma;
    }

    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setEdad(edad) {
        this.edad = edad;
    }

    setEstaVivo(estaVivo) {
        this.estaVivo = estaVivo;
    }

    setCasa(casa) {
        this.casa = casa;
    }

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
        console.log(`${this.nombre} ataca con su ${this.arma.nombre}, causando ${this.arma.dano} puntos.`);
    }
}