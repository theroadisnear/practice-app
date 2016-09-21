var chatApp = angular.module('chatApp', []);

function mainController($scope, $http) {
	$scope.formData = {};

	$http.get('/api/1/user')
	.success(function(data) {
		$scope.users = data.users;
		console.log(data);
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});
}