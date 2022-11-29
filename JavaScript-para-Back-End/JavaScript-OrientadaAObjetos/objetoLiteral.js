const user = {
    nome: "Kato",
    email: "lindinho@.com",
    nascimento: "99/99/9999",
    role: "estudandte",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Pavão",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log("curso criado!")
    }
}

    Object.setPrototypeOf(admin, user)
    admin.criarCurso()
    admin.exibirInfos()






