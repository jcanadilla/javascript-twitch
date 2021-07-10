/**
	Los operadores son elementos que permiten realizar cálculos lógicos y aritméticos con variables.
	Por ejemplo:
	- ||   => OR
	- &&   => AND
	- !==  => Distinto
	- ===  => Igual
	- <    => Menor
	- <=   => Menor o igual
	- >    => Mayor
	- >=   => Mayor o igual
	- ?    => Ternario (Elvis operator)
	- !    => Negación
	- =    => Igualación
	- += / ++  => Incremento
	- -= / --  => Decremento
	- *    => Multiplicación
	- /    => División
	- +    => Suma
	- -    => Resta
*/

// Lógica
const OR = true || false; // ¿Qué valor tendrá la variable OR?
const AND = true && false; // ¿Qué valor tendrá AND?

const verdadero = true;
const falso = false;

const esVerdad = verdadero !== falso; // ¿Qué valdrá esVerdad?
const esMentira = verdadero === falso; // ¿Qué valdrá esMentira?

const misterio = verdadero === !falso; // ¿Qué valdrá misterio?

// Numéricos
const a = 5;
const b = 10;
const esMayor = a >= b; // ¿Seguro? ¿Qué valdrá esMayor?
const esMenor = a <= b; // ¿Seguro? ¿Qué valdrá esMenor?

// Incremento
let c = 5; // No vale hacer la rima
c += a; // ¿Cuanto valdrá?

// Decremento
let d = c;
d -= b; // ¿Cuanto vale d?

console.log('OR: ', OR);
console.log('AND: ', AND);

console.log('Es verdad: ', esVerdad);
console.log('Es mentira: ', esMentira);
console.log('Misterio: ', misterio);

console.log('Es mayor: ', esMayor);
console.log('Es menor: ', esMenor);

console.log('C: ', c);
console.log('D: ', d);
