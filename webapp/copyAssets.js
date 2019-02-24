const fs = require('fs-extra');

fs.copy('./dist/', '../app/src/main/assets/www/', (err) => {
	if (err) return console.error(err);
	console.log('Copied webapp assets to Android app');
});
