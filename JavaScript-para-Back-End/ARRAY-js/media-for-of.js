const medias = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of medias) {
    somaDasNotas += nota;
}

const media = somaDasNotas / medias.length;

console.log(`A média das notas é ${media}!`);