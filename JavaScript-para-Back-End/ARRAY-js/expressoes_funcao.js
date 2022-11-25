// declaração de função

function minhaFuncao(param) {
    //bloco de código
}

//minhaFuncao("param")

//expressão de funcção

//const soma = function(num1 , num2) {return num1 + num2}
//console.log(soma(1, 1));


// diferença principal : HOISTING
//funções e var são "listados" no topo

console.log(apresentar());

function apresentar() {
    return "Olá";
}

console.log(soma(1, 1))
const soma = function(num1, num2) {return num1 + num2}

