// Considerando que a aprovação de um aluno em determinada disciplina requer uma média final maior ou igual a 6,0 (seis), elaborar um programa que receba duas notas, realize o cálculo da média e exiba o valor calculado, indicando se o aluno está aprovado ou reprovado.

const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

teclado.question('Digite a nota A do aluno: ', (notaA) => {
  teclado.question('Digite a nota B do aluno: ', (notaB) => {
    var media = (parseInt(notaA) + parseInt(notaB)) / 2;
    media > 6
      ? console.log(`A média do aluno é: ${media}, APROVADO =)`)
      : console.log(`A média do aluno é: ${media}, REPROVADO =(`);
    teclado.close();
  });
});
