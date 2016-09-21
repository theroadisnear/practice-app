(function () {
	'use strict';
	angular.module('app').controller('Home.MainController', Controller);

	function Controller(UserService) {
		var vm = this;
		this.message = "Hello World";
		vm.user = null;

		initController();

		function initController() {
			UserService.GetCurrent().then(function (user) {
				vm.user = user;
			});
		}
	}
})();
/*
angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.message = "Mahal kita";

});
*/