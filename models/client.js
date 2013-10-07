
var connection = require('../lib/db').connection;
exports.view = function(req, res){
	connection.query('select * from client where client_id=?', req.params.id, function(err, results){
		if(err)
		{
			console.log('query error: ' +err.code);
			if(err.fatal){process.exit(1);}
		}
		var resultString="";
		resultString = JSON.stringify(results);
		resultString = resultString.substring(1,resultString.length-1);
		results = JSON.parse(resultString);
		results.title = 'client'
		res.render('client',results);
	});
};

exports.list = function(req,res){
	connection.query('select * from client',function(err,results){
		if(err)
		{
			console.log('query error: ' +err.code);
			if(err.fatal){process.exit(1);}
		}
		res.render('clients',{title:'clients',clients:results});
	});
};