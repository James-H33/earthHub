var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Collections = require('./models/collectionsModel');

var collectionRoutes = require('./routes/collectionRoutes');

// Ports
var port = process.env.PORT || 27017;
var portIP = process.env.IP;

// mongoose.connect('mongodb://localhost/earth-hub');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.use(collectionRoutes);

app.get('/', function(req, res) {
  res.redirect('/home');
});

app.get('/home', function(req, res) {
  res.render('index');
});


app.listen(port, portIP, function() {
  console.log("Server has started...");
});
