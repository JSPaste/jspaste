const { get: getFN } = require('axios');
const { JSPasteError } = require('../util');
const { baseURL } = require('../constants');

module.exports = async (
	key = JSPasteError(
		'No key provided for the document.',
		'INVALID_PARAMS_PROVIDED'
	)
) => {
	const res = await getFN(`${baseURL}/documents/${key}`).catch(() => false);

	return Boolean(res);
};
