const express = require('express');
var consign = require('consign');

const app = express();


consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('config/dbConnectionGestor.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;