
var mysql = require('mysql');
var connectionInfo1 = {
	host:"localhost",
	user:"invoice_user",
	password:"qTnHHeXLKXvYJabs",
	database:"invoice"
};

var connectionInfo2 = {
	host:"192.168.1.4",
	user:"daniel-pc",
	password:"fujitsu",
	database:"invoice"
};
var connection = mysql.createConnection(connectionInfo1);
exports.view = function(req, res){
	connection.query('select * from client where client_id=?', req.params.id, function(err, results){
		if(err)
		{
			console.log('query error: ' +err.code);
			if(err.fatal){process.exit(1);}
		}
		resultString = JSON.stringify(results);
		resultString = resultString.substring(1,resultString.length-1);
		res.render('client',JSON.parse(resultString));
	});
};

exports.list = function(req,res){
	connection.query('select * from client',function(err,results){
		var returnval = Object();
		if(err)
		{
			console.log('query error: ' +err.code);
			if(err.fatal){process.exit(1);}
		}
		returnval['clients'] = results;
		res.render('clients',returnval);
	});
};