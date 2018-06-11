// rostas de gestores
module.exports = function (application) {
    application.get('/gestor/:cpf', function (req, res) {
        application.app.controllers.gestores.gestor(application, req, res);
    });
}