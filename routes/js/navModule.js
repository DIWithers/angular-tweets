// Assign a variable to our angular.module. We //PASTE REST FROM GIT
// If angular can't find the module included in the routes script, it will crash.

var navRoutes = angular.module("navRoutes",["ngRoute", "ngAnimate"]);
// Assign a controller to our main module. This will never go away.
navRoutes.controller("navController", function($scope, $http) {
	$scope.message = "This is the navController!";
});


// Attach a config to our module. Specifically bring in the $routeProvider.
// This service is available b/c of the ngRoute above.
// It has a "when" method. It watches the URL and when there is a match it fires a callback.
// It will set the templateUrl which will go into the ng-view in the view.
// It will set the controller to that view.
// As a last resort we have an 'otherwise' that catches the rest

navRoutes.config(function($routeProvider){ //part of angular-route, added 
	$routeProvider.when("/locations", { //from ngRoute dependency
		templateUrl: "templates/locations.html",
		controller: "locationsController"
	});
	$routeProvider.when("/contact", {
		templateUrl: "templates/contact.html",
		controller: "contactController"
	});
	$routeProvider.when("/about", {
		templateUrl: "templates/about.html",
		controller: "aboutController"
	});
	$routeProvider.otherwise("/about");
		
	

});