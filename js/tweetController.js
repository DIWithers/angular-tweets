tweetApp.controller("tweetController", function($scope, $http) {
	$scope.test = "I am working";
	$scope.tweets =  tweets;


	$http({
		method: "GET",
		url: "http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=trump"
	}).then(function successFunction(tweetData) {
		$scope.tweets = tweetData.data.statuses;
		console.log(tweetData.data.statuses);

	}, function failureFunction(tweetData) {
		console.log(tweetData);

	});
	
});