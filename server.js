var express = require('express');
var app = express();
var HTTP_PORT = 3000;

var middleware = require('./middleware.js');

// specify middleware up top or it will never run
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About your thing...');
});

app.use(express.static(__dirname + '/public'));

app.listen(HTTP_PORT, function () {
	console.log('Express server started on port '+HTTP_PORT+'!');
});