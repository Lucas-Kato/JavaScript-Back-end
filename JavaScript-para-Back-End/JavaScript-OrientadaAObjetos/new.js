// function User(nome, email)  {
//     // this.nome = nome
//     this.email = email

//     this.exibirInfos = function() {
//         return `${this.nome}, ${this.email}`
//     }
// }

// //const novoUser = new User('Kato', 'kato@.com')
// //console.log(novoUser.exibirInfos())


// function Admin(role) {
//     User.call(this, 'Kato', 'kato@.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')

// console.log(novoUser.role)
// console.log(novoUser.exibirInfos())

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },

    exibirInfos: function() {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Kato', 'kato@.com')
console.log(novoUser.exibirInfos())

// console.log(user.isPrototypeOf(novoUser))