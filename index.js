
const game = require('./utils/game');
const logger = require('./utils/logger');
const wait = require('./utils/wait');

const { env } = process;
const { JUGADOR } = env;

(async () => {
	
	logger.info(`¡${JUGADOR}, bienvenido a mi juego de programación en Javascript!\n`);
	logger.info('Vamos a ver qué tal lo has hecho:');
	
	const puntuacion = await game();

	if (puntuacion >= 80) {
		logger.info('Enhorabuena %s. ¡Tu puntuación es de: %d puntos! ¡Ha sido increíble!', JUGADOR, puntuacion);
	}
	
	if (puntuacion >= 50 && puntuacion < 80) {
		logger.info('Enhorabuena %s. ¡Tu puntuación es de: %d puntos! ¡No está nada mal pero puedes mejorar!', JUGADOR, puntuacion);
	}
	
	if (puntuacion < 50) {
		logger.info('Enhorabuena %s. ¡Tu puntuación es de: %d puntos! ¡Sigue practicando!', JUGADOR, puntuacion);
	}
	
})();
