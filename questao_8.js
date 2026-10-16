function aplicarOperacao(a, b, operacao) {
  return operacao(a, b);
}

function soma(x, y) {
  return x + y;
}

function multiplicacao(x, y) {
  return x * y;
}

console.log(aplicarOperacao(8, 2, soma));
console.log(aplicarOperacao(8, 2, multiplicacao));
console.log(aplicarOperacao(8, 2, (x, y) => x - y));
