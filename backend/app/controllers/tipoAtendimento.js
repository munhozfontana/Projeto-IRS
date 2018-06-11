//Controle de insituição, caso sucesso, retorna o profissional do esquema
module.exports.profissional = function (application, req, res) {

    var conexaoPool = application.config.dbConnection();
    var model = new application.app.models.profissionalDAO(conexaoPool);

    model.getProfissional(function (error, result) {
        
        if (error) {
            console.log(error);
            res.status(400).send(error);
        }
        res.status(200).send(result.rows);
    });
}