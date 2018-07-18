function InstituicaoSaudeDAO(connection) {
    this._connection = connection;
}


InstituicaoSaudeDAO.prototype.getEstado = function (callback) {
    this._connection.query("SELECT DISTINCT dbgeral.tb_uf.id_uf, dbgeral.tb_uf.uf_sigla FROM dfdwp.td_instituicao inner JOIN dbgeral.tb_municipio   ON dbgeral.tb_municipio.id_municipio = dfdwp.td_instituicao.id_municipio  inner JOIN dbgeral.tb_uf ON dbgeral.tb_municipio.id_uf = dbgeral.tb_uf.id_uf;", callback);
}

InstituicaoSaudeDAO.prototype.getMunicipio = function (callback) {
    this._connection.query("SELECT DISTINCT dbgeral.tb_municipio.id_municipio, dbgeral.tb_municipio.no_municipio FROM dfdwp.td_instituicao  INNER JOIN dbgeral.tb_municipio ON dbgeral.tb_municipio.id_municipio = dfdwp.td_instituicao.id_municipio", callback);
}

InstituicaoSaudeDAO.prototype.getTipoUnidade = function (callback) {
    this._connection.query("SELECT * FROM dfdwp.td_tipo_unidade", callback);
}

InstituicaoSaudeDAO.prototype.getInstituicao = function (callback) {
    this._connection.query("SELECT no_fantasia, id_unidade from dfdwp.td_instituicao where no_fantasia is not null", callback);
}


InstituicaoSaudeDAO.prototype.getEstadosAtualizados = function (ufId, callback) {
    this._connection.query(`SELECT dbGeral.tb_uf.id_uf, dbGeral.tb_uf.uf_sigla, dbgeral.tb_municipio.id_municipio, dbgeral.tb_municipio.no_municipio, dfdwp.td_instituicao.no_bairro, dfdwp.td_instituicao.id_unidade, dfdwp.td_instituicao.no_fantasia, dfdwp.td_tipo_unidade.id_tipo_unidade, dfdwp.td_tipo_unidade.ds_tipo_unidade FROM dfdwp.td_instituicao   inner JOIN dbgeral.tb_municipio  ON dbgeral.tb_municipio.id_municipio = dfdwp.td_instituicao.id_municipio  inner JOIN dfdwp.td_tipo_unidade   ON dfdwp.td_instituicao.id_tipo_unidade = dfdwp.td_tipo_unidade.id_tipo_unidade inner JOIN dbgeral.tb_uf ON dbGeral.tb_uf.id_uf = dbgeral.tb_municipio.id_uf where dbGeral.tb_uf.id_uf = '${ufId}'`, callback);
}

InstituicaoSaudeDAO.prototype.getMunicipiosAtualizados = function (municipioId, callback) {
    this._connection.query(`SELECT dbGeral.tb_uf.id_uf, dbGeral.tb_uf.uf_sigla, dbgeral.tb_municipio.id_municipio, dbgeral.tb_municipio.no_municipio, dfdwp.td_instituicao.no_bairro, dfdwp.td_instituicao.id_unidade, dfdwp.td_instituicao.no_fantasia, dfdwp.td_tipo_unidade.id_tipo_unidade, dfdwp.td_tipo_unidade.ds_tipo_unidade FROM dfdwp.td_instituicao   inner JOIN dbgeral.tb_municipio  ON dbgeral.tb_municipio.id_municipio = dfdwp.td_instituicao.id_municipio  inner JOIN dfdwp.td_tipo_unidade   ON dfdwp.td_instituicao.id_tipo_unidade = dfdwp.td_tipo_unidade.id_tipo_unidade inner JOIN dbgeral.tb_uf ON dbGeral.tb_uf.id_uf = dbgeral.tb_municipio.id_uf  where dfdwp.td_instituicao.id_municipio = '${municipioId}'`, callback);
}

InstituicaoSaudeDAO.prototype.getTipoInstituicaoAtualizada = function (tipoId, callback) {
    this._connection.query(`SELECT dbGeral.tb_uf.id_uf, dbGeral.tb_uf.uf_sigla, dbgeral.tb_municipio.id_municipio, dbgeral.tb_municipio.no_municipio, dfdwp.td_instituicao.no_bairro, dfdwp.td_instituicao.id_unidade, dfdwp.td_instituicao.no_fantasia, dfdwp.td_tipo_unidade.id_tipo_unidade, dfdwp.td_tipo_unidade.ds_tipo_unidade FROM dfdwp.td_instituicao   inner JOIN dbgeral.tb_municipio  ON dbgeral.tb_municipio.id_municipio = dfdwp.td_instituicao.id_municipio  inner JOIN dfdwp.td_tipo_unidade   ON dfdwp.td_instituicao.id_tipo_unidade = dfdwp.td_tipo_unidade.id_tipo_unidade inner JOIN dbgeral.tb_uf ON dbGeral.tb_uf.id_uf = dbgeral.tb_municipio.id_uf where dfdwp.td_tipo_unidade.id_tipo_unidade = '${tipoId}'`, callback);
}

InstituicaoSaudeDAO.prototype.getTipoInstituicaoAtualizadaUf = function (tipoId, idMunicipio,  callback) {
    this._connection.query(`SELECT dbGeral.tb_uf.id_uf, dbGeral.tb_uf.uf_sigla, dbgeral.tb_municipio.id_municipio, dbgeral.tb_municipio.no_municipio, dfdwp.td_instituicao.no_bairro, dfdwp.td_instituicao.id_unidade, dfdwp.td_instituicao.no_fantasia, dfdwp.td_tipo_unidade.id_tipo_unidade, dfdwp.td_tipo_unidade.ds_tipo_unidade FROM dfdwp.td_instituicao   inner JOIN dbgeral.tb_municipio  ON dbgeral.tb_municipio.id_municipio = dfdwp.td_instituicao.id_municipio  inner JOIN dfdwp.td_tipo_unidade   ON dfdwp.td_instituicao.id_tipo_unidade = dfdwp.td_tipo_unidade.id_tipo_unidade inner JOIN dbgeral.tb_uf ON dbGeral.tb_uf.id_uf = dbgeral.tb_municipio.id_uf  where dfdwp.td_tipo_unidade.id_tipo_unidade =  '${tipoId}' and dbgeral.tb_municipio.id_municipio = '${idMunicipio}'`, callback);
}

InstituicaoSaudeDAO.prototype.getInstituicaoAtualizada = function (instituicaoId, callback) {
    this._connection.query(`SELECT dbGeral.tb_uf.id_uf, dbGeral.tb_uf.uf_sigla, dbgeral.tb_municipio.id_municipio, dbgeral.tb_municipio.no_municipio, dfdwp.td_instituicao.no_bairro, dfdwp.td_instituicao.id_unidade, dfdwp.td_instituicao.no_fantasia, dfdwp.td_tipo_unidade.id_tipo_unidade, dfdwp.td_tipo_unidade.ds_tipo_unidade FROM dfdwp.td_instituicao   inner JOIN dbgeral.tb_municipio  ON dbgeral.tb_municipio.id_municipio = dfdwp.td_instituicao.id_municipio  inner JOIN dfdwp.td_tipo_unidade   ON dfdwp.td_instituicao.id_tipo_unidade = dfdwp.td_tipo_unidade.id_tipo_unidade inner JOIN dbgeral.tb_uf ON dbGeral.tb_uf.id_uf = dbgeral.tb_municipio.id_uf   where dfdwp.td_instituicao.id_unidade = '${instituicaoId}'`, callback);
}


module.exports = function () {
    return InstituicaoSaudeDAO;
}
