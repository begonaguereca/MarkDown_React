var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.post('/translate', function (req, res) {
  console.log("i am inside the server", req.body)


});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
