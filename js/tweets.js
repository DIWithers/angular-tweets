var tweets = [];


	function Tweet (title, userName, postContent, img, postTime) {
		this.title = title;
		this.userName = userName;
		this.postContent = postContent;
		this.img = img;
		this.postTime = postTime;
		this.getTimeSince = function(theDate){
			//Put in some logic to determine the largest denomination of time
			var timeSince = (theDate - this.postTime) / 1000;
			if (timeSince > secondsInAYear) {
				var secondsInAYear = 31536000;
				var textToPost = Math/floor(timeSince/secondsInAYear);
			}
			
		}
	}
Tweet.prototype.getTimeSince = function(theDate) {
	return (theDate - this.postTime) / 1000;
	}


var tweet1 = new Tweet('This is the title', 'dc4life', 'This is some content',
	'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500',1471351423825);
var tweet2 = new Tweet('This is the title', 'dc4life', 'This is the content for my second post',
	'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500',1471351423825);

// tweets.push(tweet1);
// tweets.push(tweet2);
// or
// tweets = [tweet1, tweet2];
// console.log(tweet1.getTimeSince(Date.now()));
// console.log(tweet2.getTimeSince(Date.now()));