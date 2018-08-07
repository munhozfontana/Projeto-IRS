function GestoresDAO(connection) {
    this._connection = connection;
}

GestoresDAO.prototype.listaGestorById = function (cpf, callback) {
    this._connection.query(`SELECT * FROM "ISaudeRadar".gestores WHERE cpf = '${cpf}'`, callback);
}

GestoresDAO.prototype.listaInstituicoesById = function ( callback) {
    this._connection.query(`SELECT * FROM "ISaudeRadar".instituicoes `, callback);
}

GestoresDAO.prototype.cadastrarGestorById = function (gestor, callback) {
    console.log(gestor)
    this._connection.query(`INSERT INTO "ISaudeRadar".gestores(	cpf, nome, login, password, cargo, funcao, cnpj) VALUES (${gestor.cpf}, '${gestor.nome}', '${gestor.login}', '${gestor.password}', '${gestor.cargo}', '${gestor.funcao}', ${gestor.cnpj});`, callback);
}

module.exports = function () {
    return GestoresDAO;
}