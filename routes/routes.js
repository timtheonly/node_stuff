exports.setup=function(app,handlers){
 app.get('/',function(req,res){
	res.render('index');
});

app.get('/invoice',handlers.invoice.list);
app.get('/invoice/:id',handlers.invoice.view);

app.get('/client/:id',handlers.client.view);
app.get('/client',handlers.client.list);   
};