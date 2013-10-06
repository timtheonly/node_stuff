var connection = require('../lib/db').connection;

exports.view = function(req, res){
		connection.query('select * from invoices where invoiceID=?',req.params.id, function(err, results){
			if(err)
			{
				console.log('query error: '+ err.code);
				if(err.fatal){process.exit(1);}
			}
			var resultString="";
			resultString = JSON.stringify(results);
			resultString = resultString.substring(1,resultString.length-1);			
			res.render('invoice',JSON.parse(resultString));
		});
};