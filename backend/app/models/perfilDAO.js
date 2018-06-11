function PerfilDAO(connection) {
    this._connection = connection;
}

PerfilDAO.prototype.listaPerfis = function (callback) {
    this._connection.query('SELECT * FROM "ISaudeRadar".perfis', callback);
}

module.exports = function () {
    return PerfilDAO;
}