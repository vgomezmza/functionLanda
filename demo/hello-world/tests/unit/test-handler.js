'use strict';

const app = require('../../app.js');
const sort = require('../../appsortArray.js');
const div = require('../../appdivString.js');
const chai = require('chai');
const { assert } = require('chai');
const expect = chai.expect;

var event, context;


describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await app.lambdaHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("hello world");
        // expect(response.location).to.be.an("string");
    });
});


//const cadena={"separador":"/","cadena":"hola /Javier/ Gomez"};
event = {"target": [9,3,67,7,12,45,1,100]}; 
describe('Tests sort', function () {
    
        it('function sort expected', async() => {
            const result = await sort.handler(event);
            //assert.typeOf(event, Array);

            
        });

});

event = {
    "separador": "/",
    "cadena": "la misma cuenta que tienen /permisos/ para"
  }; 
describe('Tests div', function () {
    
            
    it('function div expected', async() => {
        const result = await div.handler(event);
 
    });

});



// describe('Tests div', function () {
//     it('verifies successful response', async () => {
//         const result = await div.Handler(event, context)

       
//     });
// });