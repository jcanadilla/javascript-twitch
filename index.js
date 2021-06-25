
const logger = require('./utils/logger');

const { env } = process;
const { JUGADOR } = env;

logger.info(`¡${JUGADOR}, bienvenido a mi juego de programación en Javascript!`);
