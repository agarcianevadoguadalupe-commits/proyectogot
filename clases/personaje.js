class Personaje {
    nombre;
    edad;
    estaVivo;
    casa;
    arma;

    // ── Constructor ──
    constructor(nombre, edad, estaVivo, casa) {
        this.nombre = nombre;
        this.edad = edad;
        this.estaVivo = estaVivo;
        this.casa = casa;
    }

    // ── Getters ──
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

    // ── Setters ──
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

    // Presentarse
    presentarse() {
        console.log("Soy " + this.nombre + " de la Casa " + this.casa.getNombre() + ".");
    }

    // Morir
    morir() {
        this.estaVivo = false;
        console.log(this.nombre + " ha muerto");
    }

    // Equipar un arma
    equiparArma(arma) {
        setArma(arma);
        console.log(this.nombre + " ha equipado el arma " + arma.getNombre() + ".");
    }
}