export class rey {
    nombre;
    edad;
    estaVivo;
    casa;
    aniosReinado;

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

    getAniosReinado() {
        return this.aniosReinado;
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

    setAniosReinado(aniosReinado) {
        this.aniosReinado = aniosReinado;
    }

    // Funcion luchar
    luchar() {
        console.log(`${this.nombre} no lucha en persona, ordena a los ejércitos de la Casa ${this.casa.getNombre()} desde el trono.`);
    }
}