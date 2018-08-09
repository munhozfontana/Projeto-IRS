//Controle de do moduloIQS, tras todos os modulosIQS do banco
module.exports.modulosIQS = function (application, req, res) {

    var conexaoPool = application.config.conexaoBD();
    var model = new application.app.models.modulosIQSDAO(conexaoPool);

    model.listaModuloIQS(function (error, result) {
        
        if (error) {
            console.log(error);
            res.status(400).send(error);
        }
        res.status(200).send(result);
    });
}