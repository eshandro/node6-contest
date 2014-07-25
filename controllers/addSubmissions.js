var submissions = require('../models/submissions.js');

var Submission = function(name, url, title, description, votes) {
	this.name = name;
	this.url = url;
	this.title = title;
	this.description = description;
	this.votes = votes;
};


module.exports = Submission;
