function modulosIRSDAO(connection) {
    this._connection = connection;
}

modulosIRSDAO.prototype.listaModuloIRS = function (callback) {
    this._connection.query('SELECT * FROM "ISaudeRadar"."modulosIRS"', callback);
}

module.exports = function () {
    return modulosIRSDAO;
}