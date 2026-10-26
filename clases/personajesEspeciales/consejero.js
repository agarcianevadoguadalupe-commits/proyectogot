export class consejero {
    nombre;
    edad;
    estaVivo;
    casa;
    especialidad;

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

    getEspecialidad() {
        return this.especialidad;
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

    setEspecialidad(especialidad) {
        this.especialidad = especialidad;
    }

     // Funcion luchar
    luchar() {
        console.log(`${this.nombre} no lucha con armas, sino con palabras e inteligencia.`);
    }
}