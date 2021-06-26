const path = require('path');

const { env } = process;
const { JUGADOR = 'TechCoder5' } = env;


module.exports = {

	pathJugador: () => {
		return path.resolve(`${__dirname}/../jugadores/${JUGADOR}`);
	},

}
