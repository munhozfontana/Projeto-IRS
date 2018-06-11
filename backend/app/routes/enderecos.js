// rostas de gestores
module.exports = function (application) {
    application.get('/endereco/:cpf', function (req, res) {
        application.app.controllers.enderecos.endereco(application, req, res);
    });
}