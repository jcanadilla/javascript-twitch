/**
	Elementos de control del flujo:

	- IF/ELSE
	- SWITCH CASE
	
	BUCLES:

	- FOR
	- WHILE
	- DO WHILE

	*/
console.log('------------------------------------')
console.log('--------- CONTROL DE FLUJO ---------');

let a = true;

if (a) {
	console.log('"A" es verdadero');
} else {
	console.log('"A" es falso');
}

// let color = 'rojo';
// let color = 'verde';
let color = 'amarillo';

switch (color) {
	case 'rojo':
		console.log('El color es rojo');
		break;

	case 'verde':
		console.log('El color es verde');
		break;
	default:
		console.log('No es ni rojo ni verde');
		break;
}

console.log('------------------------------------')
console.log('------------  BUCLES  --------------');

for (let index = 0; index < 5; index++) {
	console.log('BUCLE FOR - El número es el: ', index);
}

console.log("\n\n");

let whileCounter = 5;
while (whileCounter > 0) {
	console.log('BUCLE WHILE - El número es el: ', whileCounter);
	whileCounter--;
}

console.log("\n\n");

let doCounter = 5;
do {
	console.log('BUCLE DO-WHILE - El número es el: ', doCounter);
	doCounter--;
} while (doCounter > 0);

