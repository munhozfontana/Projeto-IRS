var app = require('./config/server');

// Configuração da porta
const port = 1994
app.listen(port, function () {
    console.log(`Server run on port ${port}`);
});