const app = require('express')(),
	  consign = require('consign'),
	  cors = require('cors');
	  
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    next();
});

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('config/dbConnectionGestor.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;