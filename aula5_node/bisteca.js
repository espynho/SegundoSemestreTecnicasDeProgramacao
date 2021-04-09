/*
module.exports.mensagem = function(msg, nome){
    console.log("Olá" + nome + " " + msg);

};
*/
/*
module.exports = {
    // chave:valor
    "nome":"James",
    "sobrenome":"Bond",
    "apelido":"007"
}
*/
module.exports = function(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomecompleto = function(){
        return this.nome + " " + this.sobrenome;
    }
}