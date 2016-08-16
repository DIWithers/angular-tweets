tweetApp.controller("tweetController", function($scope, $http, $location, $routeParams) {
// console.log($scope);

	console.log($routeParams);
	if ($routeParams.searchTerm) {
		var searchTerm = $routeParams.searchTerm;
	}
	else {
		var searchTerm = 'trump';
	}

	$http({
		method: "GET",
		url: "http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=" + searchTerm
	}).then(function successFunction(tweetData) {
		$scope.tweets = tweetData.data.statuses;
		// console.log(tweetData.data.statuses);

	}, function failureFunction(tweetData) {
		// console.log(tweetData);

	});
	$http({
		method: "GET",
		url: "http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=hillaryclinton"
	}).then(function successFunction(hillaryTweetData) {
		$scope.hillaryTweets = hillaryTweetData.data.statuses;
		console.log(hillaryTweetData.data.statuses);

	}, function failureFunction(tweetData) {
		// console.log(hillaryTweetData);

	});
	$http({
		method: "GET",
		url: "http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=berniesanders"
	}).then(function successFunction(bernieTweetData) {
		$scope.bernieTweets = bernieTweetData.data.statuses;
		console.log(bernieTweetData.data.statuses);

	}, function failureFunction(tweetData) {
		// console.log(hillaryTweetData);

	});
	
	

	
});
tweetApp.factory('myFactory', function(){
    var factory = {};

    factory.getVar = function(){
        return this.variable;
    }

    factory.setVar = function(data){
        this.variable = data;
    }
    
    return factory;
});

tweetApp.controller('MainController', function($scope, myFactory){
    myFactory.setVar("this is a variable");
});

tweetApp.controller('AnotherController', function($scope, myFactory){
    console.log(myFactory.getVar());
    // "this is a variable"
})