const { get: getFN } = require('axios');
const { JSPasteError } = require('../util');
const { baseURL } = require('../constants');

module.exports = async (
	key = JSPasteError(
		'No key provided for the document.',
		'INVALID_PARAMS_PROVIDED'
	)
) => {
	const res = await getFN(`${baseURL}/documents/${key}`).catch((error) => {
		if (error.response)
			return JSPasteError(
				`An error occurred while making the request on JSPaste.get function: ${
					error.response.status
				} ${
					error.response.data.message
						? error.response.data.message
						: error.message
				}`,
				'ERROR_ON_REQUEST'
			);

		return JSPasteError(
			`An unknown error occurred while making the request on JSPaste.get function: ${error}`,
			'UNKNOWN_ERROR_ON_REQUEST'
		);
	});

	return res.data.data;
};
