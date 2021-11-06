const { post: postFN } = require('axios');
const { JSPasteError } = require('../util');
const { baseURL } = require('../constants');
const deleteMethod = require('./delete');

module.exports = async (
	body = JSPasteError(
		'No body provided for the document.',
		'INVALID_PARAMS_PROVIDED'
	),
	deleteTime
) => {
	const res = await postFN(`${baseURL}/documents`, body).catch((error) => {
		if (error.response)
			return JSPasteError(
				`An error occurred while making the request on JSPaste.publish function: ${
					error.response.status
				} ${
					error.response.data.message
						? error.response.data.message
						: error.message
				}`,
				'ERROR_ON_REQUEST'
			);

		return JSPasteError(
			`An unknown error occurred while making the request on JSPaste.publish function: ${error}`,
			'UNKNOWN_ERROR_ON_REQUEST'
		);
	});

	const data = res.data;

	if (deleteTime) {
		if (isNaN(deleteTime))
			return JSPasteError(
				'Invalid time provided on JSPaste.publish function.',
				'TIME_IS_NOT_A_NUMBER'
			);

		setTimeout(async () => {
			await deleteMethod(data.key, data.secret);
		}, deleteTime);
	}


	return { url: `${baseURL}/${data.key}`, ...data };
};
