console.log('Starting notes.js');

module.exports.addNote = function () {
	console.log('addNote');
	return 'New note';
}

module.exports.add = (a, b) => {
	return a + b;
}