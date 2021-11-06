const deleteMethod = require('./methods/delete');
const existsMethod = require('./methods/exists');
const getMethod = require('./methods/get');
const publishMethod = require('./methods/publish');
const constants = require('./constants');

module.exports = {
	delete: deleteMethod,
	exists: existsMethod,
	get: getMethod,
	publish: publishMethod,
	package: constants.info
};
