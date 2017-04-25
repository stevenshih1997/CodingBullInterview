var express = require('express');
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser');

var mainpage = require('./Page/page');

var mongodb = 'mongodb://localhost:27017/test';


var app = express();

mongoose.connect(mongodb);
// Routes


app.use('/page', mainpage);


app.get('/page', function(req, res) {
  res.sendFile(__dirname + '/public/mainpage.html');
});



app.use(express.static(__dirname + '/public'));






app.listen(3000);




