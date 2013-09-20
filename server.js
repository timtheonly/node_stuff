var express = require('express');
var app = express();
var hbs = require('hbs');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host:"192.168.1.4",
	user:"daniel-pc",
	password:"fujitsu",
	database:"invoice"
});

var query;
app.set('view engine','html');
app.engine('html',hbs.__express);

app.get('/',function(req,res){
	res.sendfile('./views/index.html');
});
app.get('/invoice/:id',function(req,res){
	query = connection.query('select * from invoices where invoiceID=?',req.params.id, function(err, results){
		if(err)
		{
			console.log('query error: '+ err.code);
		}
		res.render('invoice',{dateSubmitted:"fri jul"});
		console.log(results);
	});
});
app.listen(8080);
