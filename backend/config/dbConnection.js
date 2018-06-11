const pg = require('pg');

//conexão com o banco
var connPG = function(){
	const config = {
        host: 'quality_saude.postgresql.dbaas.com.br',
        user: 'quality_saude',
        database: 'quality_saude',
        password: 'CwnCeNzz7104U7',
        port: 5432
    };
    return pool = new pg.Pool(config);
}
module.exports = function () {
    return connPG;
}