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
    let retorno  = url.parse(requisicao.url, true).query;
    //let soma = Number(q.n1+q.n2);
    //let soma = parseInt(q.n1) + parseInt(q.n2);
    let entrada1 = parseInt(retorno.numero1); // variavel recebendo numero vindo do formulario
    let entrada2 = parseInt(retorno.numero2); // variavel recebendo numero vindo do formulario
    let operacao = retorno.operacao; // variavel recebendo valor do formulario
    
    let resultado ;
    switch(operacao){
        case 'somar':
            resultado = operacoes.soma(entrada1,entrada2);
            resposta.write("Resultado da soma: " + resultado);
            break;
        case 'sub':
            resultado = operacoes.subtracao(entrada1,entrada2);
            resposta.write("Resultado da subtração: " + resultado);
            break;
        case 'mul':
            resultado = operacoes.multiplicacao(entrada1,entrada2);
            resposta.write("Resultado da multiplicação: " + resultado);
            break;
        case 'div':
            resultado = operacoes.divisao(entrada1,entrada2);
            resposta.write("Resultado da divisão: " + resultado);
            break;
    }
    
   // let soma = operacoes.soma(entrada1,entrada2);

    console.log(resultado);
    
    

    //let txt = "Numeros recebidos " + soma;
    //resposta.write(requisicao.url);
    //resposta.end(txt);
    resposta.end();

}).listen(3000);