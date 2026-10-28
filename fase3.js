import { casa as Casa } from './clases/casa.js';
import { Arma } from './clases/arma.js';
import { guerrero as Guerrero } from './clases/personajesEspeciales/guerrero.js';
import { batalla as Batalla } from './clases/batalla.js';

// === CASAS ENFRENTADAS ===
const casaStark = new Casa('Stark', 'El invierno se acerca');
const casaLannister = new Casa('Lannister', 'Oye mi rugido');

// === ARMAS ===
const garra = new Arma('Garra', 90);
const aguja = new Arma('Aguja', 70);
const espadaLarga = new Arma('Espada Larga', 85);
const ballesta = new Arma('Ballesta', 75);
const filoRojo = new Arma('Filo Rojo', 88);
const lanzaDeCaza = new Arma('Lanza de Caza', 60);
const hachaDelNorte = new Arma('Hacha del Norte', 80);

// === GUERREROS STARK ===
const jon = new Guerrero('Jon Snow', 25, true, casaStark, garra);
const arya = new Guerrero('Arya Stark', 18, true, casaStark, aguja);
// Robb no participa en esta batalla, igual que en el caso de prueba original.
const robb = new Guerrero('Robb Stark', 22, false, casaStark, espadaLarga);
const brienne = new Guerrero('Brienne de Tarth', 30, true, casaStark, hachaDelNorte);

// === GUERREROS LANNISTER ===
const jaime = new Guerrero('Jaime Lannister', 32, true, casaLannister, filoRojo);
const cersei = new Guerrero('Cersei Lannister', 34, true, casaLannister, lanzaDeCaza);
const tyrion = new Guerrero('Tyrion Lannister', 30, true, casaLannister, ballesta);
const gregor = new Guerrero('Gregor Clegane', 38, true, casaLannister, hachaDelNorte);

// === LOS EJÉRCITOS SE PREPARAN ===
// Ocultamos los avisos de alta para que la consola empiece directamente con la batalla.
const logOriginal = console.log;
console.log = () => {};

casaStark.agregarMiembro(jon);
casaStark.agregarMiembro(arya);
casaStark.agregarMiembro(robb);
casaStark.agregarMiembro(brienne);

casaLannister.agregarMiembro(jaime);
casaLannister.agregarMiembro(cersei);
casaLannister.agregarMiembro(tyrion);
casaLannister.agregarMiembro(gregor);

console.log = logOriginal;

const batallaDelNorte = new Batalla();
batallaDelNorte.iniciarBatalla(casaStark, casaLannister);