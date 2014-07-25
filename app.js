var express = require('express');
var bodyParser = require('body-parser');
var submissions = require('./models/submissions.js');
var addSubmission = require('./controllers/addSubmissions.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/formsubmit', function(req, res) {
	console.log(req.body)
	var name = req.body.name;
	var url = req.body.url;
	var title = req.body.title;
	var descr = req.body.description;
	res.send(name, url, title, descr)
/*	var newSubmission = new Submission(name, url, title, descr);
	submissions.push(newSubmission);*/
})

var server = app.listen(3417, function() {
	console.log('Express server listening on port ' + server.address().port);
});
