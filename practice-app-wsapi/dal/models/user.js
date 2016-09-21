module.exports = function (mongoose) {
	var setter = require('../setter');

	var userSchema = new mongoose.Schema({
		_id: mongoose.Schema.ObjectId,
		username: { type: String, required: true, unique: true, lowercase: true},
		password: { type: String, required: true },
		name: { 
			last: { type: String, required: true, set: setter.firstCharacterToUpperCase},
			first: { type: String, required: true, set: setter.firstCharacterToUpperCase}, 
			middle: { type: String, required: true, set: setter.firstCharacterToUpperCase}
			}
	});

	return module.exports = mongoose.model('User', userSchema);
}