//Controle de estado, caso sucesso, retorna o estado do esquema dbgeral.tb_uf
module.exports.estado = function (application, req, res) {

    var conexaoPool = application.config.dbConnection();
    var model = new application.app.models.instituicaoSaudeDAO(conexaoPool);

    model.getEstado(function (error, result) {
        if (error) {
            console.log(error);
            res.status(400).send(error);
        }
        
        res.status(200).json(result);
    });
}

//Controle de municipio, caso sucesso, retorna o estado do esquema dbgeral.tb_municipio
module.exports.municipio = function (application, req, res) {

    var conexaoPool = application.config.dbConnection();
    var model = new application.app.models.instituicaoSaudeDAO(conexaoPool);

    model.getMunicipio(function (error, result) {
        if (error) {
            console.log(error);
            res.status(400).send(error);
        }

        res.status(200).json(result);
    });
}

//Controle de tipo de insituição, caso sucesso, retorna o estado do esquema dfdwp.td_tipo_unidade
module.exports.tipoInstituicao = function (application, req, res) {

    var conexaoPool = application.config.dbConnection();
    var model = new application.app.models.instituicaoSaudeDAO(conexaoPool);

    model.getTipoUnidade(function (error, result) {
        if (error) {
            console.log(error);
            res.status(400).send(error);
        }
        res.status(200).json(result);
    });
}

//Controle de insituição, caso sucesso, retorna o estado do esquema dfdwp.td_instituicao
module.exports.instituicao = function (application, req, res) {

    var conexaoPool = application.config.dbConnection();
    var model = new application.app.models.instituicaoSaudeDAO(conexaoPool);

    model.getInstituicao(function (error, result) {
        if (error) {
            console.log(error);
            res.status(400).send(error);
        }
        res.status(200).json(result);
    });
}
