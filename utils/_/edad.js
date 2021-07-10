
const logger = require('../../utils/logger');

module.exports = (fecha) => {
	// Ahora
	const now = new Date();
	
	// Parámetro fecha como tipo Date
	const date = new Date(fecha);

	const millisDate = date.valueOf();
	const millisNow = now.valueOf();

	let millisFromDate;
	if (millisDate > millisNow) {
		millisFromDate =  millisDate - millisNow;
	} else {
		millisFromDate = millisNow - millisDate;
	}
	
	const timeFromDate = ( ( (millisFromDate / 1000) / 60 ) / 60) /24;

	return timeFromDate;
}
