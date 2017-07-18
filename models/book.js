var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookschema = new Schema({
	imagePath: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Book', bookschema);