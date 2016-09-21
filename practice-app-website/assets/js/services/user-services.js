(function () {
	'use strict';
	angular.module('app').factory('UserService', Service);

	function Service($http, $q) {
		var service = {};
		//will move to Constants
		var url = 'localhost:3000/api/1/';

		service.GetCurrentUser = GetCurrentUser;
		service.GetAllUser = GetAllUser;
		service.GetByUserId = GetByUserId;
		service.GetByUsername = GetByUsername;
		service.CreateUser = CreateUser;
		service.UpdateUser = UpdateUser;
		service.DeleteUser = DeleteUser;

		return service;

		function GetCurrentUser() {
			return $http.get(url + 'users/current').then(handleSuccess, handleError);
		}

		function GetAllUser() {
			return $http.get(url + 'users').then(handleSuccess, handleError);
		}

		function GetByUserId(_id) {
			return $http.get(url + 'users/' + _id).then(handleSuccess, handleError);
		}

		function GetByUsername(username) {
			return $http.get(url + 'users/' + username).then(handleSuccess, handleError);
		}

		function CreateUser(user) {
			return $http.post(url + 'users/create', user).then(handleSuccess, handleError);
		}

		function UpdateUser(user) {
			return $http.put(url + 'users/update/' + user._id, user).then(handleSuccess, handleError);
		}

		function Delete(_id) {
			return $http.put(url + 'users/delete/' + _id).then(handleSuccess, handleError);
		}

		//private functions
		function handleSuccess(res) {
			return res.data;
		}

		function handleError(res) {
			return $q.reject(res.data);
		}
	}
})();

/*
angular.module('UserServices', []).factory('User', ['$http', function ($http) {

	return {
		//Get all users
		get: function () {
			return $http.get('localhost:3000/api/1/user');
		}  
	}
}]);
*/