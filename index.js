var express = require('express');
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser');

var mainpage = require('./Page/page');

var mongodb = 'mongodb://interview:interview@ds119091.mlab.com:19091/interview';


var app = express();

mongoose.connect(mongodb);
// Routes

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/page', mainpage);


app.get('/page', function(req, res) {
  res.sendFile(__dirname + '/public/mainpage.html');
});

app.get('/page/posts', function(req, res) {
  res.sendFile(__dirname + '/public/posts.html');
});


app.use(express.static(__dirname + '/public'));






app.listen(3000);




