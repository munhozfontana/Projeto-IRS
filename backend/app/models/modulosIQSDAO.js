function modulosIQSDAO(connection) {
    this._connection = connection;
}

modulosIQSDAO.prototype.listaModuloIQS = function (callback) {
    this._connection.query('SELECT * FROM "ISaudeRadar"."modulosIQS"', callback);
}

module.exports = function () {
    return modulosIQSDAO;
}