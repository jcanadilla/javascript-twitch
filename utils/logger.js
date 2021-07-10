
const logger = require('pino')({
	prettyPrint: {
		levelFirst: true,
		translateTime: true
	},
	level: 'debug'
});

module.exports = logger;
