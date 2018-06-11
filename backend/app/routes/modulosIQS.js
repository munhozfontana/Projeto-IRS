// rostas de modulosIQS
module.exports = function (application) {
    application.get('/modulosIQS', function (req, res) {
        application.app.controllers.modulosIQS.modulosIQS(application, req, res);
    });
}