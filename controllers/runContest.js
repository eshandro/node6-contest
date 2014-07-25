var submissions = require('../models/submissions.js');
var contest = require('../models/contestTracking.js');

var roundCounter = 1;

var runContest = { 
	addVideos: function(roundCounter) {

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