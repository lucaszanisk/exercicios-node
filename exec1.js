// Desenvolver uma aplicação Node.js que receba quatro números reais digitados pelo usuário, calcule e exiba a valor da média desses números.

const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

numList = [];

function addNumber() {
  teclado.question('Digite um número: ', (num1) => {
    numList.push(parseInt(num1));
    if (numList.length < 4) {
      addNumber();
    } else {
      sum = numList.reduce(
        (prevValue, currentValue) => prevValue + currentValue
      );
      console.log(
        ` A soma do array '${numList}' é ${sum} e sua média é '${
          sum / numList.length
        }' `
      );
      teclado.close();
    }
  });
}

addNumber();
