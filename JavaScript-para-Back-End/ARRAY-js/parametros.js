//parametros de função

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

//parametros x argumentos

//orgem dos parametros

function nomeIdade(nome, idade) {
    return `meu nomr é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(40, "Kato"))

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}
            //2     //2
function soma(num1, num2) {
    return num1 + num2;
}
                            //9         //6    
//console.log(multiplica(soma(4, 5), soma(3, 3)));

console.log(multiplica(soma(4, 5)));

