let baseCalculo = [
  [1903.99, 0, 0.0],
  [2826.65, 7.5, 142.8],
  [3751.05, 15, 354.8],
  [4664.68, 22.5, 636.13],
  [4664.69, 27.5, 869.36],
];

function calculoDesconto(valor) {
  while (valor <= 1903.99) {
    return {
      aliquota: 0,
      parc: 0,
    };
  }
  while (valor > 1903.99 && valor < 2826.65) {
    return {
      aliquota: 7.5 / 100,
      parc: 142.8,
    };
  }
  while (valor > 2826.66 && valor < 3751.05) {
    return {
      aliquota: 15 / 100,
      parc: 354.8,
    };
  }
  while (valor > 3751.06 && valor < 4664.68) {
    return {
      aliquota: 22.5 / 100,
      parc: 636.13,
    };
  }
  while (valor >= 4664.69) {
    return {
      aliquota: 27.5 / 100,
      parc: 869.36,
    };
  }
}

const salario = prompt("Qual valor da sua renda mensal?");
const base = calculoDesconto(salario);
console.log(salario * base.aliquota - base.parc);
