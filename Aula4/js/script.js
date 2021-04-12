"use strict"
let nome ="global";


function minhaFuncao(){
    let nome = "local"
    document.write(nome);
}

function outraFuncao(){
    document.write(nome)
}

minhaFuncao();
outraFuncao();