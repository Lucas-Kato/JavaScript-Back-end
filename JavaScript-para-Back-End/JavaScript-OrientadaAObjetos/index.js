import User from "./User.js"
import Admin from "./admin.js"
import Docente from "./Docente.js"

const novoUser = new User('Kato', "kato@.com" , "99/99/9999")
console.log(novoUser.exibirInfos())

const novoAdmim = new Admin('Rodrigo', 'rodrigo@.com', '99/99/9999')
console.log(novoAdmim.nome)
novoAdmim.nome = "André"
console.log(novoAdmim.nome)

