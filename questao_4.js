const alunos = [
  { nome: "Ana", media: 8.5 },
  { nome: "Bruno", media: 6 },
  { nome: "Carla", media: 9 },
  { nome: "Davi", media: 5.5 }
];

console.log(alunos.find(a => a.media < 7).nome);
console.log(alunos.some(a => a.media >= 9));
console.log(alunos.every(a => a.media >= 7));
