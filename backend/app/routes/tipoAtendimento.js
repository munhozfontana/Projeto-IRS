// Rota para requisição dos dados da pagina tipo de atendimento

module.exports = function (application) {
    application.get('/tipoAtendimento/profissional', function (req, res) {
        application.app.controllers.tipoAtendimento.profissional(application, req, res);
    });
}