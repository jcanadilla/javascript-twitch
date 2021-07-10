
const folder = require('../utils/folder');
const jugadorFolder = folder.pathJugador();

const mayorDeEdad = require(`${jugadorFolder}/mayor-edad.js`);

describe('¿Eres mayor de edad?', () => {
	test('Tiene que permitir averigurar si un usuario es >= 18 años', () => {
		
		const usuario = {
			nombre: 'Tech',
			edad: 28
		};

		const esMayor = mayorDeEdad(usuario);
		expect(esMayor).toBe(true);
	});
});