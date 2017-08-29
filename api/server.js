var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// jpotth@umich.edu
const api_key = 'key-de0e99a9c93f0ca9d21974742be45b81';
const domain = 'tronixdata.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', function (req, res) {
	res.send('Hello World!');
});

app.post('/api/sendmail', function (req, res) {
	console.log('Received a post at /api/sendmail with req data: ', req.body);

	mailgun.messages().send(req.body, function(error, body) {
		console.log('body: ', body);
		console.log('error: ', error);
	});

	res.send('You have reached: POST /sendmail');
});


app.listen(3001, function () {
	console.log('Example app listening on port 3001!');
});
