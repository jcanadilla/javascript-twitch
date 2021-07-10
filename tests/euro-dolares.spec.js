
const folder = require('../utils/folder');
const jugadorFolder = folder.pathJugador();

const cambiador = require(`${jugadorFolder}/euro-dolares.js`);

describe('Cambio de euros a dólares', () => {
	
	test('permite pasar de euros a dólares', () => {
		const dolar = 1.19;
		const euros = 20;

		const dolares = cambiador(euros);

		expect(dolares).toBe(euros * dolar);
	});

});
