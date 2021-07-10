
const folder = require('../utils/folder');
const jugadorFolder = folder.pathJugador();

const edad = require(`${jugadorFolder}/edad.js`);

describe('Edad', () => {

	test('Edad en días con fecha anterior a hoy', () => {
		const fechaNacimiento = 'Jan 21, 1993';

		// Ahora
		const now = new Date();

		// Parámetro fecha como tipo Date
		const date = new Date(fechaNacimiento);

		const millisDate = date.valueOf();
		const millisNow = now.valueOf();

		const millisFromDate = millisNow - millisDate;

		const timeFromDate = Math.floor((((millisFromDate / 1000) / 60) / 60) / 24);

		const dias = edad(fechaNacimiento);
		expect(Math.floor(dias)).toBe(timeFromDate);
	});

	test('Edad en días con fecha posterior a hoy', () => {
		const fechaNacimiento = 'Jan 21, 2023';

		// Ahora
		const now = new Date();

		// Parámetro fecha como tipo Date
		const date = new Date(fechaNacimiento);

		const millisDate = date.valueOf();
		const millisNow = now.valueOf();

		const millisFromDate = millisDate - millisNow;

		const timeFromDate = Math.floor((((millisFromDate / 1000) / 60) / 60) / 24);

		const dias = edad(fechaNacimiento);
		expect(Math.floor(dias)).toBe(timeFromDate);
	});

	test('Edad en días con fecha igual a hoy', () => {

		// Ahora
		const now = new Date();

		// Parámetro fecha como tipo Date
		const date = new Date();

		const millisDate = date.valueOf();
		const millisNow = now.valueOf();

		const millisFromDate = millisDate - millisNow;

		const timeFromDate = Math.floor((((millisFromDate / 1000) / 60) / 60) / 24);

		const dias = edad(now.toDateString());
		expect(Math.floor(dias)).toBe(timeFromDate);
	});

});
