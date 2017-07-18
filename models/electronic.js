var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var elecschema = new Schema({
	imagePath: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	model: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Electronic', elecschema);