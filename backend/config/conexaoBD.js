//Carrega o modulo do mysql.
const mysql = require('mysql');

//Cria a conexão com o Banco de Dados.
const connectMYSQL = () => {
	return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'sistemagestaodb'
	});
};

//Retorna a conexão.
module.exports = () => {
	return connectMYSQL;
};