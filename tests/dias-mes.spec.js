

const folder = require('../utils/folder');
const jugadorFolder = folder.pathJugador();

const cuantosDiasTiene = require(`${jugadorFolder}/dias-mes.js`);


describe('¿Cuántos dias tiene el mes?', () => {
	
	test('Puede recibir el mes como numero siendo 0 Enero', () => {
		const febrero = 2;
		const diasFebrero = cuantosDiasTiene(febrero);
		expect(diasFebrero).toBe(28);

		const enero = 1;
		const diasEnero = cuantosDiasTiene(enero);
		expect(diasEnero).toBe(31);
	});

	test('Puede recibir el mes como string ("enero")', () => {
		const febrero = 'Febrero';
		const diasFebrero = cuantosDiasTiene(febrero);
		expect(diasFebrero).toBe(28);

		const enero = 'Enero';
		const diasEnero = cuantosDiasTiene(enero);
		expect(diasEnero).toBe(31);
	});

});