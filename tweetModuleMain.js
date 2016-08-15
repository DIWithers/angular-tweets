var tweetMain = angular.module("tweetMain", ["ngRoute"]);

tweetMain.controller("tweetControllerMain", function($scope, $html) {

});
tweetMain.directive()

tweetMain.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
	templareUrl: 'views/olympics.html',
	controller: 'tweetControllerMain'
	
	});

	$routeProvider.when('/', {
	controller: 'tweetControllerMain',
	templareUrl: ''
	});

});