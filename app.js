var express = require('express');
var bodyParser = require('body-parser');
var submissions = require('./models/submissions.js');
var Submission = require('./controllers/addSubmissions.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/formsubmit', function(req, res) {
	var name = req.body.name;
	var url = req.body.url;
	var title = req.body.title;
	var descr = req.body.description;
	var newSubmission = new Submission(name, url, title, descr);
	if(submissions.length < 8) {
		submissions.push(newSubmission);
	}
	else {
		res.send('/', '<p>Max number of submissions reached</p>')
	}
	res.render('current-submissions')

})

var server = app.listen(3417, function() {
	console.log('Express server listening on port ' + server.address().port);
});
