"use strict";
const operacoes = require('./matematica');
// Criar um modulo com as 4 operações matematicas em m arquivo chamado matematica.js
// No arquivo script.js invocar as operações

// =========== modulos =================================
let operacao = require('./matematica'); // variavel
let paridade = require('./paridade'); // função
let carro = require('./carro'); // classe

// =========== funções =================================
let res = operacoes.soma(5,6);
console.log("O resultado da soma é : " + res);

let par = paridade(res);

let c1 = new carro('Toyota',2019,'Yaris'); // instanciei um objeto
c1.verificaAno();



