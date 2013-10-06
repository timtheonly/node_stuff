
var connection = require('../lib/db').connection;
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