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
	console.log(addSubmission)
	var name = req.body.name;
	var url = req.body.url;
	var title = req.body.title;
	var descr = req.body.description;
	var newSubmission = new addSubmission(name, url, title, descr);
	console.log(newSubmission)
	submissions.push(newSubmission);
	console.log(submissions)
	res.send(JSON.stringify(newSubmission));
})

/*var test = function() {
	console.log(addSubmission);
}
test();
*/
var server = app.listen(3417, function() {
	console.log('Express server listening on port ' + server.address().port);
});
