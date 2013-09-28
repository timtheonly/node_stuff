var mysql = require('mysql');

/*
 * Rename this to db.js and add your database 
 * info
 */
var connectionInfo1 = {
	host:"fakehost",
	user:"db_user_1",
	password:"password",
	database:"db1"
};

exports.connection = mysql.createConnection(connectionInfo1);
