
const logger = require('pino')({
	prettyPrint: {
		levelFirst: true,
		translateTime: true
	},
});

module.exports = logger;
