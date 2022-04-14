// A Lei de Ohm define que a resistência (R) de um condutor é obtida através da divisão da tensão aplicada (V) dividida pela intensidade de corrente elétrica (A). Desta forma, a partir de uma tensão e uma corrente, digitadas pelo usuário, calcular e mostrar o valor da resistência.

const readline = require('readline');

teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

teclado.question('Qual a tensão aplicada? ', (v) => {
  teclado.question('Qual a intensidade da corrente elétrica? ', (a) => {
    var r = v / a;
    if (r > 1) {
      console.log(`A resistência é de ${r}ohms`);
    } else {
      console.log(`A resistência é de ${r}ohm`);
    }
    teclado.close();
  });
});
