const listaLivros = require("./arrayOrdenado");

function busca(array, de, ate, valorBuscado) {

    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];
    
    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
    }

    if (valorBuscado > atual.preco) {
        return busca(array, ate, meio + 1, valorBuscado)
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 30));