//Considerando um número inteiro digitado pelo usuário, calcular e exibir o valor da sua fatorial. Por exemplo, se o usuário digitar 4, temos que a fatorial é 4 x 3 x 2 x 1, isto é, 24.

const readline = require('readline');
const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

teclado.question('Digite um número para saber seu fatorial: ', (num) => {
  var fatorial = num;
  for (var i = 1; i < num; i++) {
    fatorial *= i;
  }
  console.log(fatorial);
  teclado.close();
});
