"use strict";
let http = require('http'); // modulo que vem dentro no node
let url = require('url'); 

// criando um servidor
http.createServer(function(requisicao, resposta){
    resposta.writeHead(200,{'Content-Type':'text/html'});
    //resposta.write("Ola mundo !!!");
    let q  = url.parse(requisicao.url, true).query;
    //let soma = Number(q.n1+q.n2);
    let soma = parseInt(q.n1) + parseInt(q.n2);
    let txt = "Numeros recebidos " + soma;
    //resposta.write(requisicao.url);
    resposta.end(txt);
}).listen(3000);