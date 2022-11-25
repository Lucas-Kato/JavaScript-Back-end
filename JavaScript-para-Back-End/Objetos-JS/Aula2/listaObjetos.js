const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144455550"],
};
console.log(cliente.telefone);

cliente.endereços = [{
    rua: "R. Joseph Climber",
    numero: 1227,
    apartamento: true,
    complemento: "ap 934",
}];

cliente.endereços.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
    
});

const listaApenasApartamentos = cliente.endereços.filter((endereço) => endereço.apartamento === true)

console.log(listaApenasApartamentos);