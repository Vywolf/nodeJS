var express = require('express'),
    wines = require('./wines/wines')
    bodyParser  = require("body-parser");
 
var app = express();

app.use(bodyParser.json());
app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);
 
app.listen(3000);
console.log('Listening on port 3000...');