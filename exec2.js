// Desenvolver um programa para uma determinada loja que precisa calcular o preço de venda de um produto. O cálculo deverá ser efetuado através da multiplicação do preço unitário pela quantidade vendida e, posteriormente, subtrair o valor do desconto. Considerar todas as variáveis do tipo de dado real, que serão digitadas pelo usuário.

const readline = require('readline');

teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

teclado.question('Digite o preço unitário do produto: ', (precoUnitario) => {
  teclado.question('Digite a quantidade vendida: ', (quantVendida) => {
    teclado.question('Digite o valor do desconto que deseja: ', (desconto) => {
      var precoVenda = precoUnitario * quantVendida - desconto;
      console.log(`O preço de venda será: ${precoVenda}`);
      teclado.close();
    });
  });
});
