//Controle de gestores, retorna os dados do gestor de acordo com id
module.exports.gestor = function (application, req, res) {

    var cpf = req.params.cpf;

    var conexaoPool = application.config.conexaoBD();
    var model = new application.app.models.gestoresDAO(conexaoPool);

    model.listaGestorById(cpf, function (error, result) {
        
        if (error) {
            console.log(error);
            res.status(400).send(error);
        }
        res.status(200).send(result.rows);
    });
}
//Controle de gestores, insere os dados do gestor e retornar falha ou sucesso
module.exports.novoGestor = function (application, req, res) {
    var gestor = req.body;

    var conexaoPool = application.config.conexaoBD();
    var model = new application.app.models.gestoresDAO(conexaoPool);

    model.cadastrarGestorById(gestor, function (error, result) {
        
        if (error) {
            console.log(error);
            res.status(400).send(error);
        }
        res.status(200).send(result);
    });
}
//Controle de gestores, lista todas as instituicoes dos gestores
module.exports.instituicoesGestor = function (application, req, res) {

    var conexaoPool = application.config.conexaoBD();
    var model = new application.app.models.gestoresDAO(conexaoPool);

    model.listaInstituicoesById(function (error, result) {
        
        if (error) {
            console.log(error);
            res.status(400).send(error);
        }
        res.status(200).send(result.rows);
    });
}

