const express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

const gmapskey = process.env.GMAPS_API_KEY;

app.listen(process.env.PORT || 80);

var dVar = [];

app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.post('/', function(req, res) {
	var long = req.body.long;
	var lat = req.body.lat;
	var date = new Date();
	console.log(long, lat)
	dVar[dVar.lenght] = '"lat": "' + lat + '", "lng": "' + long + '"';
	console.log('fierro') 
})

app.get('/', function(req, res) {
	console.log(dVar)
	res.render('pages/map', {datos: dVar[0], apikey: gmapskey})
})