module.exports = {

	toLowerCase: function (val) {
		return val.toLowerCase();
	},

	firstCharacterToUpperCase: function (val) {
		return val.charAt(0).toUpperCase() + val.substring(1).toLowerCase();
	}

}