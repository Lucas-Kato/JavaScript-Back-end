const alunos =["João", "Juliana", "Caio", 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(alunos) {
  if (listaDeAlunosEMedias[0].includes(alunos)) {
    const [aluno, media] = listaDeAlunosEMedias

    const indice = aluno.indexOf(alunos);
    const mediaDoAluno = media[indice];

    console.log(`${alunos} tem a média ${mediaDoAluno}.`);
  }else{
    console.log("Aluno não encontrado!")
  }

}

exibeNomeENota("Ana");