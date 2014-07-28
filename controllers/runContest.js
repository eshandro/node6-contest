var submissions = require('../models/submissions.js');
var contest = require('../models/contestTracking.js');



var runContest = { 
	roundCounter: 0,

	startContest: function() {
		this.roundCounter = 0;
		startVideos = [];
		var contestVideo1 = {
			url: submissions[this.roundCounter].url,
			title: submissions[this.roundCounter].title
		}
		this.roundCounter++
		var contestVideo2 = {
			url: submissions[this.roundCounter].url,
			title: submissions[this.roundCounter].title
		}		
		this.roundCounter++
		startVideos.push(contestVideo1);
		startVideos.push(contestVideo2);
		return startVideos;
	},

	nextVideos: function(roundCounter) {
		if (this.roundCounter < 8) {
			var contestVideo = submissions[roundCounter].url;
			this.roundCounter++;
			console.log(this.roundCounter)
			console.log(contestVideo)
			return contestVideo;
		}
		else {
			this.roundCounter = 0;
		}
	},

	addVote: function(id) {
		submissions[id].vote++
	},

	determineWinner: function(id1, id2) {
		if(submissions[id1].vote > submissions[id2].vote) {
			contest.winners.push(submissions[id1]);
			contest.losers.push(submissions[id2]);
		}
		contest.winners.push(submissions[id2]);
		contest.losers.push(submissions[id1]);		
	}
}

module.exports = runContest