const recebido = '{"produto":"Monitor","preco":900,"estoque":4}';

const produto = JSON.parse(recebido);
produto.preco = produto.preco * 0.9;
produto.estoque = produto.estoque - 1;

const json = JSON.stringify(produto);

console.log(typeof produto);
console.log(json);
console.log(typeof json);
