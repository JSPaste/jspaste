const { delete: deleteFN } = require('axios');
const { JSPasteError } = require('../util');
const { baseURL } = require('../constants');

module.exports = async (
	key = JSPasteError(
		'No key provided for the document.',
		'INVALID_PARAMS_PROVIDED'
	),
	secret = JSPasteError(
		'No secret provided for the document.',
		'INVALID_PARAMS_PROVIDED'
	)
) => {
	await deleteFN(
		`${baseURL}/documents/${key}`,
		{ headers: { secret: secret } }
	).catch((error) => {
		if (error.response)
			return JSPasteError(
				`An error occurred while making the request on JSPaste.delete function: ${
					error.response.status
				} ${
					error.response.data.message
						? error.response.data.message
						: error.message
				}`,
				'ERROR_ON_REQUEST'
			);

		return JSPasteError(
			`An unknown error occurred while making the request on JSPaste.delete function: ${error}`,
			'UNKNOWN_ERROR_ON_REQUEST'
		);
	});

	return true;
};
