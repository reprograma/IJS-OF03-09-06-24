const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("Conjunto de testes calcularValorPorHora", () => {
  test("Valida cálculo do valor por hora", () => {
    const rendaMensal = 5000;

    const resultado = Math.ceil(rendaMensal / (8 * 22));

    expect(calcularValorPorHora(rendaMensal)).toBe(resultado);
  });

  test("forçar o teste a passar", () => {
    const rendaMensal = 5000;
    const resultado = 29;

    expect(calcularValorPorHora(rendaMensal)).toBe(resultado);
  });

  // test("forçar o teste a falhar", () => {
  //   const rendaMensal = 5000;
  //   const result = 30;

  //   expect(calcularValorPorHora(rendaMensal)).toBe(result);
  // });

  test("Valida cálculo do valor por hora com renda mensal zero", () => {
    const rendaMensal = 0;
    const resultado = Math.ceil(rendaMensal / (HORAS_POR_DIA * DIAS_UTEIS_NO_MES));

    expect(calcularValorPorHora(rendaMensal)).toBe(resultado);
  });

  test("Valida cálculo do valor por hora com renda mensal negativa", () => {
    const rendaMensal = -3000;
    const resultado = Math.ceil(rendaMensal / (HORAS_POR_DIA * DIAS_UTEIS_NO_MES));

    expect(calcularValorPorHora(rendaMensal)).toBe(resultado);
  });

  test("Valida cálculo do valor por hora com renda mensal muito alta", () => {
    const rendaMensal = 1000000;
    const resultado = Math.ceil(rendaMensal / (HORAS_POR_DIA * DIAS_UTEIS_NO_MES));

    expect(calcularValorPorHora(rendaMensal)).toBe(resultado);
  });

  test("Valida cálculo do valor por hora com renda mensal diferente", () => {
    const rendaMensal = 7500;
    const resultado = Math.ceil(rendaMensal / (HORAS_POR_DIA * DIAS_UTEIS_NO_MES));

    expect(calcularValorPorHora(rendaMensal)).toBe(resultado);
  });
});
