//Controle de gestores, retorna os dados do gestor de acordo com id
module.exports.gestor = function (application, req, res) {

    var cpf = req.params.cpf;

    var conexaoPool = application.config.dbConnectionGestor();
    var model = new application.app.models.gestoresDAO(conexaoPool);

    model.listaGestorById(cpf, function (error, result) {
        
        if (error) {
            console.log(error);
            res.status(400).send(error);
        }
        res.status(200).send(result.rows);
    });
}