var tweetApp = angular.module("tweetApp", ["ngRoute"]);

tweetApp.directive("tweetHello", function() { //camelCase when defined, snake-case when called
	return {
		restrict: "E", //E = Element, A = Attribute, C = Class, M = Comment
		template: "Hello, Class!"
	}
});

tweetApp.directive("helloAttr", function() { //camelCase when defined, snake-case when called
	return {
		restrict: "A", //E = Element, A = Attribute, C = Class, M = Comment
		// template: "Hello, Class! I'm an arrtibute! {{test}}",
		templateUrl: "views/hello.html"
	}
});

tweetApp.directive("helloClass", function() { //camelCase when defined, snake-case when called
	return {
		restrict: "C", //E = Element, A = Attribute, C = Class, M = Comment
		template: "Hello, Class! I'm another type of class!"
	}
});

tweetApp.directive("turnMeBlue", function() {
	return {
		link: function($scope, element, attrs) {
			element.bind("mouseenter", function() {
				element.css("color", $scope.myColor);
				console.log(attrs);
			});
			element.bind("mouseleave", function() {
				element.css("color", "black");
			});
		}
	}
});