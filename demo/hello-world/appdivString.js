// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://izjw3brt4g.execute-api.us-east-1.amazonaws.com/default/mySortArray
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 *
 */


exports.handler = async (event) => {
    
    var {separador,cadena}=event;
       
    if ( typeof(separador)!== undefined && separador.length > 0 )
    {
    let puntero1=cadena.indexOf(separador)+1;
    let puntero2=cadena.indexOf(separador,puntero1+1);
        return cadena.substr(puntero1,puntero2-puntero1)
    }
    else {
        return "Error de Datos";
    }
};

