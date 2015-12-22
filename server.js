var express = require('express');
var app = express();
var HTTP_PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + '  >>  ' + new Date().toString() + '  >>  ' + req.method + '  ' + req.originalUrl);
		next();
	}
};

// specify middleware up top or it will never run
// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About your thing...');
});

//console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.listen(HTTP_PORT, function () {
	console.log('Express server started on port '+HTTP_PORT+'!');
});