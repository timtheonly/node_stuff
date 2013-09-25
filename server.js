
var express = require('express');
var app = express();

var user = require('./routes/user');
var invoice = require('./routes/invoice');
var client = require('./routes/client');

var hbs = require('hbs');
app.use(express.static(__dirname + '/public'));
app.set('view engine','html');
app.engine('html',hbs.__express);

app.get('/',function(req,res){
	res.render('index');
});

app.get('/invoice/:id',invoice.view);
app.get('/client/:id',client.view);
app.get('/client',client.list);

app.listen(8000);
