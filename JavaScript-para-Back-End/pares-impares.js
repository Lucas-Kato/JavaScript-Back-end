const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

const pessoa = {
    nome: 'Kato',
    idade: 25
}
const pessoaComTelefone = {...pessoa,telefone: 99999999};

const { idade } = pessoa

function imprimirDados({nome, idade}) {
    console.log(nome, idade);
}

imprimirDados(pessoa)
