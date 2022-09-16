// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://iideay0du9.execute-api.us-east-1.amazonaws.com/default/mySeparadorString
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *

 *
 */

exports.handler = async (event)=>{
    var inputarray = event.target;
    if (inputarray instanceof Array){
        var outputArray=inputarray.sort(function(a,b){
            return a-b;
        });

        return JSON.stringify(outputArray);
    }
    else {
         return "Target is not arry";
    }
}

