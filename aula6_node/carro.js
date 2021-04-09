"use strict";

module.exports = function(marca, ano, modelo){
    this.marca = marca;
    this.ano = ano;
    this.modelo = modelo;

    this.verificaAno = function(){
        if(ano > 2000)
            console.log("A marca é " + marca);
        else
        console.log("O modelo é " + modelo);
    }

}