// input 1 = valor
// input 2 = prefixo (k = kilo, M = megas, G = gigas, T = teras)
// resultado = valor do input 1 nos demais prefixos

const readline = require('readline');

teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

teclado.question('Digite o valor a ser convertido: ', (value) => {
  teclado.question('Digite o prefixo do valor: ', (prefix) => {
    switch (prefix) {
      case 'k':
        console.log(
          `${value / 1000} M, ${value / 1000000} G, ${value / 1000000000} T`
        );
        break;

      case 'm':
        console.log(
          `${value * 1000} k, ${value * 0.001} G, ${value * 0.000001} T`
        );
        break;

      case 'g':
        console.log(
          `${value * 1000000} k, ${value * 1000} M, ${value / 1000} T`
        );

        break;

      case 't':
        console.log(
          `${value * 1000000000} k, ${value * 1000000} M, ${value * 1000} G`
        );

        break;
    }
    teclado.close();
  });
});
