console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Baptiste', 1, 'Baptiste', 1 ,2 ,3 ,4])
console.log(filteredArray);


// console.log(_.isString(true));
// console.log(_.isString('Battou'));
 
// var result = notes.add(5-5, -80/0);
// console.log('Result : ' + result);

// var result = notes.addNote();
// console.log(result);

// fs.appendFile('greetings.txt',
// 	`Hellow ${user.username} ! You are ${notes.age}\n`,
// 	function (err) {
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });

// fs.appendFile('greetings.txt', 'Coucou ' + user.username + '\n', function (err) {
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });

//var user = os.userInfo();











