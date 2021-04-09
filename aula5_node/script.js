"use strict";
// teste ======================
/*
function somar(a,b)
{
    return a+b
}

console.log(somar(1,2))
*/
// servidor =====================
/*
let http = require("http");
http.createServer(function(req, resp){
 // criar o cabeçalho html
 resp.writeHead(200,{"Content-Type":"text/plain"});
 resp.write("olá Mundo !!!!");
 resp.end()
}).listen(3000);
*/
//let meumodulo = require("./log");
// meumodulo.info();
//let meumodulo = require("./bisteca");
//meumodulo.mensagem("bom dia"," Pedro");
//console.log(meumodulo.apelido);
//console.log(meumodulo);
/*
if(meumodulo.apelido=="007"){
    console.log("É o cara");
}
*/
/*
let agente = require("./bisteca");
let a1 = new agente("James","Bond");
let nomecompleto = a1.nomecompleto();
console.log(nomecompleto);
*/
let exercicio = require("./matematica");

let resultado = exercicio.soma(2,3);
console.log("A soma é: "+resultado);

resultado = exercicio.div(2,3);
console.log("A divisão é: "+resultado);

resultado = exercicio.sub(2,3);
console.log("A subtração é: "+resultado);

resultado = exercicio.mult(2,3);
console.log("A multiplicação é: "+resultado);

