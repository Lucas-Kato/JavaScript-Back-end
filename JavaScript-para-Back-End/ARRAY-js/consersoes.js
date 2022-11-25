// Tipo de dado
//booleanos

// conversão impícita
const numero = 789;
const numeroString = Number("456a")
console.log(numero == numeroString);
console.log(numero === numeroString);

//Numer()
//String()
console.log(numero + Number(numeroString));

console.log(numero + numeroString);

//convesão explícita


let telefone = 12341234;
console.log("O telefone é" + String(telefone));

let telefone = 12341234;
console.log("O telefone é " + telefone.toString());

let usuarioConectado = false;
console.log(String(usuarioConectado));

usuarioConectado = true;
console.log(String(usuarioConectado));

//Number
let largura = "10";
let altura = "5";

console.log(Number(largura)*Number(altura));

let largura = "10";
let altura = "5";

console.log(+ largura * + altura);

let meuNome = "leonardo";
console.log(Number(meuNome));
console.log(+ meuNome);

let usuarioConectado = false;
console.log(Number(usuarioConectado));

usuarioConectado = true;
console.log(Number(usuarioConectado));