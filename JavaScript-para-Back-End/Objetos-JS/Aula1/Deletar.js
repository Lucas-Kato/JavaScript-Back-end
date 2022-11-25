const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: 20,
    aliado: {
        nome: "Saruman",
        classe: "mago",

    },
    status: "desaparecido"
};

delete objPersonagem.aliado;
delete objPersonagem["status"];
 
 console.log(objPersonagem.aliado);
 console.log(objPersonagem.status);

 const delProp = delete objPersonagem.aliado;
 const delPropInexistente = delete objPersonagem ["endereço"]

 console.log(delProp);
 console.log(delPropInexistente);

 console.log(objPersonagem);

 