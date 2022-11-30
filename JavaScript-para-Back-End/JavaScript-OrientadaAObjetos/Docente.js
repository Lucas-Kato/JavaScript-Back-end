import User from "./User.js"

class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} aprovando no curso ${curso}.`
    }
}

const novoDocente = new Docente('Kato', 'kato@.com', '77/77/7777')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Kato', 'Java'))