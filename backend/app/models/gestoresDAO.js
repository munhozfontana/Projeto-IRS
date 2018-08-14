function GestoresDAO(connection) {
    this._connection = connection;
}

GestoresDAO.prototype.listarEstados = function (callback) {
    this._connection.query(`SELECT id_uf, uf_sigla, dbgeral.tb_regiao.no_regiao FROM dbgeral.tb_uf INNER JOIN dbgeral.tb_regiao ON dbgeral.tb_uf.id_regiao = dbgeral.tb_regiao.id_regiao `, callback);
}

GestoresDAO.prototype.listarMunicipios = function (params, callback) {
    this._connection.query(`SELECT id_municipio, no_mun_completo FROM dbgeral.tb_municipio where id_uf = '${params.id_uf}' `, callback);
}

GestoresDAO.prototype.listaGestores = function (callback) {
    this._connection.query(`SELECT * FROM sistemagestaodb.gestores`, callback);
}

GestoresDAO.prototype.listaGestor = function (cpf, callback) {
    this._connection.query(`SELECT * FROM sistemagestaodb.gestores WHERE cpf = '${cpf}'`, callback);
}

GestoresDAO.prototype.listaInstituicoes = function (callback) {
    this._connection.query(`SELECT * FROM sistemagestaodb.instituicoes`, callback);
}

GestoresDAO.prototype.cadastrarGestor = function (gestor, callback) {
    this._connection.query(`INSERT INTO sistemagestaodb.gestores(cpf, nome, login, password, cargo, funcao, cnpj) VALUES (${gestor.cpf}, '${gestor.nome}', '${gestor.login}', '${gestor.password}', '${gestor.cargo}', '${gestor.funcao}', ${gestor.cnpj});`, callback);
}

GestoresDAO.prototype.atualizarGestor = function (params, gestor, callback) {
    this._connection.query(`UPDATE sistemagestaodb.gestores SET nome = '${gestor.nome}', login = '${gestor.login}', password = '${gestor.password}', cargo = '${gestor.cargo}', funcao = '${gestor.funcao}' WHERE (cpf = '${params.cpf}') and (cnpj = '${gestor.cnpj}');`, callback);
}

GestoresDAO.prototype.removeGestor = function (params, callback) {
    this._connection.query(`
    DELETE FROM sistemagestaodb.endereco WHERE (cpf = '${params.cpf}'); 
    DELETE FROM sistemagestaodb.contatos WHERE (cpf = '${params.cpf}'); 
    DELETE FROM sistemagestaodb.gestores WHERE (cpf = '${params.cpf}');`, callback);
}

GestoresDAO.prototype.listaEndereco = function (params, callback) {
    this._connection.query(`SELECT * FROM sistemagestaodb.endereco where cpf = '${params.cpf}'`, callback);
}

GestoresDAO.prototype.novoEndereco = function (endereco, callback) {
    this._connection.query(`INSERT INTO sistemagestaodb.endereco (endereco, numero, bairro, complemento, uf, municipio, cep, cpf) VALUES ('${endereco.endereco}', '${endereco.numero}', '${endereco.bairro}', '${endereco.complemento}', '${endereco.uf}', '${endereco.municipio}', '${endereco.cep}', '${endereco.cpf}');`, callback);
}

GestoresDAO.prototype.atualizaEndereco = function (params, endereco, callback) {
    this._connection.query(`UPDATE sistemagestaodb.endereco SET endereco = '${endereco.endereco}', numero = '${endereco.numero}', bairro = '${endereco.bairro}', complemento = '${endereco.complemento}', uf = '${endereco.uf}', municipio = '${endereco.municipio}', cep = '${endereco.cep}' WHERE cpf = '${params.cpf}';`, callback);
}

GestoresDAO.prototype.listaContato = function (params, callback) {
    this._connection.query(`SELECT * FROM sistemagestaodb.contatos where cpf = ${params.cpf};`, callback);
}
GestoresDAO.prototype.cadastrarContato = function (contato, callback) {
    this._connection.query(`INSERT INTO sistemagestaodb.contatos (email, telefone, telefone2, cpf) VALUES ('${contato.email}', '${contato.telefone}', '${contato.telefone2}', '${contato.cpf}' );`, callback);
}
GestoresDAO.prototype.atualizaContato = function (params, contato, callback) {
    this._connection.query(`UPDATE sistemagestaodb.contatos SET email = '${contato.email}', telefone = '${contato.telefone}', telefone2 = '${contato.telefone2}' WHERE cpf = '${params.cpf}';`, callback);
}

module.exports = function () {
    return GestoresDAO;
}