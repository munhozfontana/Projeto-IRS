function GestoresDAO(connection) {
    this._connection = connection;
}

GestoresDAO.prototype.listaGestorById = function (cpf, callback) {
    this._connection.query(`SELECT * FROM "ISaudeRadar".gestores WHERE cpf = '${cpf}'`, callback);
}

module.exports = function () {
    return GestoresDAO;
}