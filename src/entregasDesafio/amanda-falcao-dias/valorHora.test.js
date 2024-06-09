const {
  calcularValorPorHora,
} = require('../../dominio/calculadora/Hora/valorHora.js');

describe('calcularValorPorHora', () => {
  test('valida cálculo da média', () => {
    const rendaMensal = 5000;
    const resultado = Math.ceil(rendaMensal / (8 * 22));
    expect(calcularValorPorHora(rendaMensal)).toBe(resultado);
  });

  test('força o teste a passar', () => {
    const rendaMensal = 5000;
    const resultado = 29;
    expect(calcularValorPorHora(rendaMensal)).toBe(resultado);
  });

  // test('força o teste a falhar', () => {
  //   const rendaMensal = 5000;
  //   const resultado = 30;
  //   expect(calcularValorPorHora(rendaMensal)).toBe(resultado);
  // });
});
