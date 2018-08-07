module.exports = function (application) {

    // rostas de gestores
    application.get('/gestor/:cpf', function (req, res) {
        application.app.controllers.gestores.gestor(application, req, res);
    });

// rostas para listar todas as instituicoes dos gestores
    application.get('/gestorInstituicao', function (req, res) {
        application.app.controllers.gestores.instituicoesGestor(application, req, res);
    });

// inserir novo gestor
    application.post('/gestorNovo', function (req, res) {
        console.log('asd')
        application.app.controllers.gestores.novoGestor(application, req, res);
    });
}
