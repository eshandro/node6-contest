var express = require('express');
var bodyParser = require('body-parser');
var submissions = require('./models/submissions.js');
var Submission = require('./controllers/addSubmissions.js');
var runContest = require('./controllers/runContest.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	if (submissions.length < 8) {
		res.render('index');
	}
	else {
		res.render('contest-full');
	}
});

app.post('/formsubmit', function(req, res) {
	var name = req.body.name;
	var url = req.body.url;
	// Gets needed part of url to embed the youtube video on view video page
	var index = url.indexOf('=');
	url = url.slice(index+1);

	var title = req.body.title;
	var descr = req.body.description;
	var newSubmission = new Submission(name, url, title, descr);
	if(submissions.length < 8) {
		submissions.push(newSubmission);
		res.redirect('/entries')
	}
	else {
		res.redirect('/contest-full')
	}
})

app.get('/entries', function(req,res) {
	res.render('current-submissions', {
		currentSubmissions: submissions
	})	
})

app.get('/contest-full', function(req, res) {
	res.render('contest-full');
})

// Preloading videos for testing
submissions.push(new Submission('Bob', 'AsrsrlPrWmM', 'Is the the best Tiger Woods Video Ever', 'Tiger Woods video'))
submissions.push(new Submission('George', 'jCIP_WzhBg8', 'Funny professional golfer bloopers', 'Pro golfer mistakes'))
submissions.push(new Submission('Susie', 'z70XlpjnEb8', 'Charl Schwartzel shot off the road', 'Amazing golf shot'))
submissions.push(new Submission('Sara', 'blonNcv1yas', 'Tiger Woods - Pro Am swing footage', 'Tiger Woods swing footage'))
submissions.push(new Submission('Timmy', 'EIcKQkzqgok', 'Top 10 PGA Tour 2013', 'Best moments PGA 2013'))
submissions.push(new Submission('Dave', 'DyrY97vaDis', 'Rory McIlroy - Golf swing slow mo', 'Rory McIlroy slow-mo golf swing'))
submissions.push(new Submission('Stasia', 'FQGCAbxswzE', 'Top 5 Wild and Crazy Tiger Woods golf shots', 'Crazy golf shots by Tiger Woods'))

var server = app.listen(3417, function() {
	console.log('Express server listening on port ' + server.address().port);
});
