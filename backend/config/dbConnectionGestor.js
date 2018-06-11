const pg = require('pg');

//conexão com o banco
var connectionPG = function(){
	const config = {
        host: 'localhost',
        user: 'postgres',
        database: 'IRadarSaude',
        password: 'root',
        port: 5432
    };
    return pool = new pg.Pool(config);
}
module.exports = function () {
    return connectionPG;
}