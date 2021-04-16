"use strict";
let express = require('express'); // importando o modulo express recem instalado
let app = express();
let path = require('path'); // caminho

// usando o framework jade
// ================= jade ===================
app.set('view engine', 'jade');
app.get('/', function (requisicao, resposta) {
    resposta.render('index', {
        titulo: 'Minha pagina',
        cabecalho: 'Olá mundo',
        paragrafo1: 'isso é uma frase',
        paragrafo2: 'essa é uma outra frase'
    })
});
// ================== fim ===================

// ================== express ===============
// requisições 
app.get('/home', (requisicao, resposta) => {
    resposta.sendFile(path.join(__dirname + '/home.html'))
});

app.get('/login', (requisicao, resposta) => {
    resposta.send("Bem vindo ao login!");
});

app.get('/logout', (requisicao, resposta) => {
    resposta.send("Bem vindo ao logout!");
});

// ================== fim =====================

// apontamento para a porta
app.listen(process.env.port || 3000);
console.log("Web server em execução.")

// para funcionar é preciso instalat alguns frameworks
// npm install jade
// npm install express --save