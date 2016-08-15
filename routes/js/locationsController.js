//Attach another controller to our app. This is not used unless the router loads it. 
// The router loads it when the .when is true
navRoutes.controller("locationsController", function($scope) {
	$scope.message = "Test Locations";
});