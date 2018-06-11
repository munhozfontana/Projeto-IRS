// Rota para requisição dos dados da pagina Instituição de saude

module.exports = function (application) {
    application.get('/instituicaoSaude/estados', function (req, res) {
        application.app.controllers.instituicaoSaude.estado(application, req, res);
    });
    application.get('/instituicaoSaude/municipios', function (req, res) {
        application.app.controllers.instituicaoSaude.municipio(application, req, res);
    });
    application.get('/instituicaoSaude/tipoInstituicao', function (req, res) {
        application.app.controllers.instituicaoSaude.tipoInstituicao(application, req, res);
    });
    application.get('/instituicaoSaude/instituicao', function (req, res) {
        application.app.controllers.instituicaoSaude.instituicao(application, req, res);
    });
}