
const folder = require('../utils/folder');

const jugadorFolder = folder.pathJugador();

describe('suma', () => {

	test('Puede sumar dos números', () => {

		const suma = require(`${jugadorFolder}/suma.js`);
		const a = 1;
		const b = 2;

		const resultado = suma(a, b);
		expect(resultado).toBe(3);
	});

	test('Puede sumar tres números', () => {
		const suma = require(`${jugadorFolder}/suma.js`);
		const a = 1;
		const b = 2;
		const c = 3;

		const resultado = suma(a, b, c);
		expect(resultado).toBe(6);
	})

});
