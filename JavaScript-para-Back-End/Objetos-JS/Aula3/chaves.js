const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144455550"],
};
console.log(cliente.telefone);

cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1227,
    apartamento: true,
    complemento: "ap 934",
}];

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.")
}