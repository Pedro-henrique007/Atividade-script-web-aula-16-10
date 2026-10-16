const funcionarios = [
  { nome: "Lia", setor: "TI" },
  { nome: "Rui", setor: "RH" },
  { nome: "Ana", setor: "TI" },
  { nome: "Caio", setor: "Vendas" }
];

const nomesTI = funcionarios
  .filter(f => f.setor === "TI")
  .map(f => f.nome);

console.log(nomesTI);
console.log(funcionarios.length);
