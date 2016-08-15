var tweetApp = angular.module("tweetApp", ["ngRoute"]);

tweetApp.directive("customMenu", function() { //camelCase when defined, snake-case when called
	return {
		restrict: "E", //E = Element, A = Attribute, C = Class, M = Comment
		// template: "Hello, Class! I'm an arrtibute! {{test}}",
		templateUrl: "views/menu.html"
	}
});

tweetApp.config(function($routeProvider) {
	// at '/', load home.html with home controller
	$routeProvider.when("/", {
		templateUrl: "views/home.html",
		controller: "home.controller"
	});
	$routeProvider.when("/trump", {
		templateUrl: "views/home.html",
		controller: "trumpController"
	});
	$routeProvider.when("/hillary", {
		templateUrl: "views/home.html",
		controller: "hillaryController"
	});
	$routeProvider.otherwise("/"); 

});
