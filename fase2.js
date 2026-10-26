import { casa } from "./clases/casa.js";
import { Arma } from "./clases/arma.js";
import { Reino } from "./clases/Reino.js";
import { guerrero } from "./clases/personajesEspeciales/guerrero.js";
import { consejero } from "./clases/personajesEspeciales/consejero.js";
import { rey } from "./clases/personajesEspeciales/rey.js";

// Casas
const stark = new casa("Stark", "Se acerca el invierno");
const lannister = new casa("Lannister", "Oye mi rugido");

// Arma (solo la tiene el guerrero)
const garra = new Arma("Garra", 25, "espada");

// Personajes
const jon = new guerrero("Jon Snow", 25, true, stark, garra);
const tyrion = new consejero("Tyrion Lannister", 35, true, lannister, "estrategia política");
const robert = new rey("Robert Baratheon", 45, true, lannister, 15);

// Reino: el rey es un objeto de la clase rey
const reino = new Reino("Poniente");
reino.setRey(robert);

// Jon Snow (guerrero)
jon.presentarse();
jon.luchar();
jon.entrenar();

// Tyrion Lannister (consejero)
tyrion.presentarse();
tyrion.luchar();
tyrion.aconsejar(robert);

// Robert Baratheon (rey)
robert.presentarse();
robert.gobernar();
robert.luchar();