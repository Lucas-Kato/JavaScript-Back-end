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

for (let chave in cliente ) {
    let tipo = typeof cliente[chave];
    if(tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);

    }
}