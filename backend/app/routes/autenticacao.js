// module.exports = function(app){
//     var autenticar = app.api.autenticar;

//     app.route('/autentica')
//         .post(autenticar.autentica);

//     app.use('/irs/*', autenticar.verificaToken);
// }

module.exports = function (application) {
    application.post('/autentica', function (req, res) {
        application.app.controllers.autenticar.autentica(application, req, res);
    });

    // application.use('/irs/*', autenticar.verificaToken);
}