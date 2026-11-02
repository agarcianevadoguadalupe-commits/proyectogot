import { casa as Casa } from "./clases/casa.js";
import { Arma } from "./clases/arma.js";
import { batalla as Batalla } from "./clases/batalla.js";
import { guerrero as Guerrero } from "./clases/personajesEspeciales/guerrero.js";
import { consejero as Consejero } from "./clases/personajesEspeciales/consejero.js";
import { dragon as Dragon } from "./clases/personajesEspeciales/dragon.js";
import { khaleesi as Khaleesi } from "./clases/personajesEspeciales/khaleesi.js";
import { caminanteBlanco as CaminanteBlanco } from "./clases/personajesEspeciales/caminanteBlanco.js";

// --------------------------------------------------
// 1. Crear casas y armas
// --------------------------------------------------
const casaStark = new Casa("Stark", "El invierno se acerca");
const casaTargaryen = new Casa("Targaryen", "Fuego y Sangre");
const casaLannister = new Casa("Lannister", "Oye mi rugido");
const garra = new Arma("Garra", 50, "acero valyrio");
const hacha = new Arma("Hacha del Norte", 40, "hierro");

// --------------------------------------------------
// 2. Crear guerreros de la Casa Stark
// --------------------------------------------------
const jon = new Guerrero("Jon Snow", 25, true, casaStark, garra);
const tormund = new Guerrero("Tormund", 30, true, casaStark, hacha);
const edd = new Guerrero("Edd", 28, true, casaStark, hacha);
casaStark.agregarMiembro(jon);
casaStark.agregarMiembro(tormund);
casaStark.agregarMiembro(edd);

// --------------------------------------------------
// 3. Crear a Khaleesi y sus dragones
// --------------------------------------------------
const tyrion = new Consejero("Tyrion Lannister", 40, true, casaLannister, "estrategia");
const drogon = new Dragon("Drogon", 5, true, casaTargaryen, 60, "fuego");
const viserion = new Dragon("Viserion", 5, true, casaTargaryen, 55, "fuego");
const rhaegal = new Dragon("Rhaegal", 5, true, casaTargaryen, 50, "fuego");
const khaleesi = new Khaleesi("Daenerys Targaryen", 29, true, casaTargaryen, [drogon, viserion, rhaegal], tyrion);

// --------------------------------------------------
// 4. Crear ejército de Caminantes Blancos
// --------------------------------------------------
const caminante1 = new CaminanteBlanco("Caminante 1", 35);
const caminante2 = new CaminanteBlanco("Caminante 2", 40);
const caminante3 = new CaminanteBlanco("Caminante 3", 30);
const caminante4 = new CaminanteBlanco("Caminante 4", 50);

const ejercitoCaminantes = [caminante1, caminante2, caminante3, caminante4];

// --------------------------------------------------
// 5. Función para iniciar la batalla final
// --------------------------------------------------
const batallaFinal = new Batalla();
batallaFinal.batallaFinal(casaStark, khaleesi, ejercitoCaminantes);