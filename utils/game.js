const path = require('path');
const jest = require('jest');
const logger = require('./logger');

module.exports = async () => {

	const projectRootPath = path.resolve(`${__dirname}/../`);

	// Add any Jest configuration options here
	const jestConfig = {
		roots: ['./tests'],
		testRegex: '\\.spec\\.js$',
		useStderr: true,
		verbose: true,
	};

	// Run the Jest asynchronously
	let results;
	try {
		({ results } = await jest.runCLI(jestConfig, [projectRootPath]));
	} catch (error) {
		logger.error({ error });
		throw error;
	}

	return ((results.numPassedTests * 100) / results.numTotalTests);

}
