function InstituicaoSaudeDAO(connection) {
    this._connection = connection;

}

InstituicaoSaudeDAO.prototype.getEstado = function (callback) {
    this._connection.query("SELECT id_uf, no_uf_completo FROM dbgeral.tb_uf", callback);
}

InstituicaoSaudeDAO.prototype.getMunicipio = function (callback) {
    this._connection.query("SELECT id_municipio, no_mun_completo, id_uf FROM dbgeral.tb_municipio", callback);
}

InstituicaoSaudeDAO.prototype.getTipoUnidade = function (callback) {
    this._connection.query("SELECT * FROM dfdwp.td_tipo_unidade", callback);
}

InstituicaoSaudeDAO.prototype.getInstituicao = function (callback) {
    this._connection.query("SELECT id_municipio, no_bairro, no_fantasia, id_tipo_unidade FROM dfdwp.td_instituicao", callback);
}



module.exports = function () {
    return InstituicaoSaudeDAO;
}
