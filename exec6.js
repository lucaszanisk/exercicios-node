// A partir dos lados de um retângulo ou quadrado, digitados pelo usuário, elaborar uma aplicação que calcule e exiba o valor da área da figura e informe se esta é um retângulo ou um quadrado. Lembrando que a área é obtida pela multiplicação da base (L) pela altura (A).

const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

teclado.question('Digite a base do quadrilátero: ', (base) => {
  teclado.question('Digite a altura do quadriláreto: ', (altura) => {
    var area = parseInt(base) * parseInt(altura);
    if (base === altura) {
      console.log(
        `A área do quadrilátero é: ${area}, sendo assim, ele é um quadrado`
      );
    } else {
      console.log(
        `A área do quadrilátero é: ${area}, sendo assim, ele é um retangulo`
      );
    }
    teclado.close();
  });
});
