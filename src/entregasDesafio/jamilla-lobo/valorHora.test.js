const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("calcularValorPorHora", () => {
  test("valida calculo da media", () => {
    const rendaMensal = 5000;
    const result = Math.ceil(rendaMensal / (8 * 22));

    expect(calcularValorPorHora(rendaMensal)).toBe(result);
  });

  test("forcar o test a passar", () => {
    const rendaMensal = 5000;
    const result = 29;

    expect(calcularValorPorHora(rendaMensal)).toBe(result);
  });

  //   test("forcar o test a falhar", () => {
  //     const rendaMensal = 5000;
  //     const result = 30;

  //     expect(calcularValorPorHora(rendaMensal)).toBe(result);
  //   });
});
