const rp = require("request-promise");

function buscaNumero(numero) {

    var options = {
        uri: "http://apilayer.net/api/validate?access_key=fc006320efe15253ac2b9b3f04679387&number=" + numero,
        json: true

    }
    console.log("uri: " + options.uri);
    return rp(options);
}

module.exports = buscaNumero;