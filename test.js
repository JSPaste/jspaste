(async () => {
	const jsp = require('./index');
	console.log(jsp);

    console.log(await jsp.publish('Hello world!'));
})();