
var express = require('express');
var app = express();

var user = require('./models/user');
var invoice = require('./models/invoice');
var client = require('./models/client');

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

app.listen(process.env.PORT, process.env.IP);
