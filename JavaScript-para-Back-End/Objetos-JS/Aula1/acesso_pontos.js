const cliente = {
    nome: "Andre",
    idade: 32,
    CPF: "11122233344",
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
console.log(`Os 3 primerios digitos do CPF são ${cliente.CPF.substring(0, 3)}`);