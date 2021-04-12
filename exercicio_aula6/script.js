"use strict"
const operacoes = require('./calculo'); // importação do codigo das operações matematicas
let http = require('http'); // modulo que vem dentro no node
let url = require('url'); 

/* para teste de importação das operações matematicas
let res = operacoes.soma(5,6);
console.log(res);
*/

// criando um servidor
http.createServer(function(requisicao, resposta){
    resposta.writeHead(200,{'Content-Type':'text/html'});
    resposta.write("O loko meu!!!");
    //let q  = url.parse(requisicao.url, true).query;
    //let soma = Number(q.n1+q.n2);
    //let soma = parseInt(q.n1) + parseInt(q.n2);
    //let txt = "Numeros recebidos " + soma;
    //resposta.write(requisicao.url);
    //resposta.end(txt);
    resposta.end();

}).listen(3000);