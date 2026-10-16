const alunos = [
  { nome: "ana", media: 8.5 },
  { nome: "bruno", media: 6 },
  { nome: "carla", media: 7.5 },
  { nome: "davi", media: 9 }
];

const listarAprovados = (lista, mediaMinima = 7) =>
  lista
    .filter(a => a.media >= mediaMinima)
    .map(a => a.nome.toUpperCase());

console.log(listarAprovados(alunos));
console.log(listarAprovados(alunos, 8));
