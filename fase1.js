import { Personaje } from "./clases/personaje.js";
import { casa } from "./clases/casa.js";
import { Reino } from "./clases/reino.js";
import { Arma } from "./clases/arma.js";

// Crear las instancias
const reino = new Reino("Poniente");

const stark = new casa("Stark", "Se acerca el invierno");
const lannister = new casa("Lannister", "Oye mi rugido");

const garra = new Arma("Garra", 25, "espada");
const aguja = new Arma("Aguja", 15, "espada");

const jon = new Personaje("Jon Snow", 25, true, stark);
const arya = new Personaje("Arya Stark", 18, true, stark);
const jaime = new Personaje("Jaime Lannister", 40, true, lannister);

// Añadir las casas al reino
reino.agregarCasa(stark);
reino.agregarCasa(lannister);

// Equipar las armas
jon.equiparArma(garra);
arya.equiparArma(aguja);

// Añadir los miembros a sus casas
stark.agregarMiembro(jon);
stark.agregarMiembro(arya);
lannister.agregarMiembro(jaime);

// Proclamar al rey
reino.proclamarRey(jaime);

// Listar casas y mostrar el rey
reino.listarCasas();
reino.mostrarRey();

// Miembros de la Casa Stark
console.log("Miembros de la Casa Stark:");
stark.listarMiembros();

// Presentaciones
console.log("Presentaciones:");
jon.presentarse();
arya.presentarse();
jaime.presentarse();

// Armas
console.log("Armas:");
garra.descripcion();
aguja.descripcion();