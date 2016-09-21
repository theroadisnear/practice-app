(function () {
	'use strict';
	angular.module('app', ['ui.router']).config(config).run(run);

	function config($stateProvider, $urlRouterProvider) {
		//default route
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '../templates/home.html',
				controller: 'Home.MainController',
				controllerAs: 'vm',
				data: { activeTab: 'home'}
			})
			.state('account', {
				url: '/account',
				templateUrl: '../templates/account.html',
				controller: 'Account.MainController',
				controllerAs: 'vm',
				data: { activeTab: 'account'}
			});
	}

	function run($http, $rootScope, $window) {
		//JWT token as default auth header
		$http.default.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;
		
		//update active tab on state change
		$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
			$rootScope.activeTab = toState.data.activeTab;
		});
	}

	/*
	$(function() {
		//get JWT token from server
		$.get('localhost:3000/api/1/app/token', function (token) {
			window.jwtToken = token;

			angular.bootstrap(document, ['app']);
		})
	});
	*/
})();

/*
angular.module('ryxApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'UserCtrl', 'UserServices']);
*/