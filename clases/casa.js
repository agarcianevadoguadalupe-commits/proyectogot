class casa {
    nombre;
    lema;
    miembros = [];

    // Constructor
    constructor(nombre, lema) {
        this.nombre = nombre;
        this.lema = lema;
    }

    // Getters
    getNombre() {
        return this.nombre;
    }

    getLema() {
        return this.lema;
    }

    getMiembros() {
        return this.miembros;
    }

    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setLema(lema) {
        this.lema = lema;
    }

    setMiembros(miembros) {
        this.miembros = miembros;
    }

    // Añadir un miembro
    agregarMiembro(personaje) {
        this.miembros.push(personaje);
        console.log(personaje.getNombre() + " ha sido añadido a la Casa " + this.nombre + ".");
    }

    // Ver los miembros
    listarMiembros() {
        console.log("Miembros de la Casa " + this.nombre + ":");
        for (let i = 0; i < this.miembros.length; i++) {
            console.log("- " + this.miembros[i].getNombre());
        }
    }
}