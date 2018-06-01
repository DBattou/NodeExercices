console.log('-- note.js -- ');

const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title, 
		body
	};

	try {
		var noteString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(noteString);
	} catch (error) {

	}

	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	}
};

var getAll = () => {
	console.log('Listing alle the notes');
}

var getNote = (title) => {
	console.log('Reading notes : ', title);
};

var removeNote = (title) => {
	console.log('Removing notes : ', title);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};