
const folder = require('../utils/folder');
const jugadorFolder = folder.pathJugador();

const suma = require(`${jugadorFolder}/suma.js`);

describe('suma', () => {

	test('Puede sumar dos números', () => {

		const a = 1;
		const b = 2;

		const resultado = suma(a, b);
		expect(resultado).toBe(3);
	});

	test('Puede sumar tres números', () => {
		const a = 1;
		const b = 2;
		const c = 3;

		const resultado = suma(a, b, c);
		expect(resultado).toBe(6);
	})

	test('Puede sumar numeros enteros como string', () => {
		const a = "1";
		const b = "2";

		const resultado = suma(a, b);
		expect(resultado).toBe(3);
	})

	test('Puede sumar numeros reales como string', () => {
		const a = "1.5";
		const b = "2.5";

		const resultado = suma(a, b);
		expect(resultado).toBe(4);
	})

});
