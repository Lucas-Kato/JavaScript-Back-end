const medias = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let i = 0; i < medias.length; i++) {
    somaDasNotas += medias[i];
}

//const media = somaDasNotas / medias.length;

//console.log(`A média das notas é ${media}!`);

const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];

let media = 0

for (let i=0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        media += notasGerais[i][j] / notasGerais.length;
    }
}

console.log(media);

