(function () {
	'use strict';
	angular.module('app').controller('Account.MainController', Controller);

	function Controller($window, UserService, MessageService) {
		var vm = this;

		vm.user = null;
		vm.saveUser = saveUser;
		vm.deleteUser = deleteUser;

		initController();

		//Initialize user information
		function initController() {
			UserService.GetCurrent().then(function (user) {
				vm.user = user;
			});
		}

		//
		function saveUser() {
			UserService.Save(vm.user)
				.then(function () {
					MessageService.Success('User saved');
				})
				.catch(function (error) {
					MessageService.Error(error);
				});
		}

		//
		function deleteUser() {
			UserService.Delete(vm.user._id)
				.then(function () {
					$window.location = '/login';
				})
				.catch(function (error) {
					MessageService.Error(error);
				});
		}
	}
})();
/*
angular.module('UserCtrl', []).controller('UserController', function ($scope) {

	$scope.message = 'Tama na please!';

});
*/