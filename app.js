
var express = require('express');
var app = express();

var UserModel = require('./models/user');
var InvoiceModel = require('./models/invoice');
var ClientModel = require('./models/client');

var handlers ={user: UserModel, invoice:  InvoiceModel,client: ClientModel }

var hbs = require('hbs');
var routes = require('./routes/routes');
app.use(express.static(__dirname + '/public'));
app.set('view engine','html');
app.engine('html',hbs.__express);

require('./routes/routes').setup(app,handlers);

app.listen(process.env.PORT, process.env.IP);
