"use strict";
let operacoes ={
    soma: function(numero1, numero2){
        return numero1+numero2;
    },
    sub: function(numero1, numero2){
            return numero1-numero2;
        },
    mult: function(numero1, numero2){
            return numero1*numero2;
        },
    div: function(numero1, numero2){
            return numero1/numero2;
    }

}
module.exports = operacoes;