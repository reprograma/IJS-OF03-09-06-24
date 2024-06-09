const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora")


describe("calcularValorPorHora", () => {
  test("valida função cálculo valor por hora", () => {
    //setup //add as infos necessárias para executar o teste
    const rendaMensal = 5000;

    //ação //
    const result = Math.ceil(5000 / (8 * 22));
  
    //verificação
    expect(calcularValorPorHora(rendaMensal)).toBe(result);

  });
  //Forçar o teste a passar
  test("forçar o teste a passar", () => {
    //setup
    const rendaMensal = 5000;
    const result = 29;

    expect(calcularValorPorHora(rendaMensal)).toBe(result);
  });
  //forçar o teste a falhar
  // test("forçar o teste a falhar", () => {
  //   //setup
  //   const rendaMensal = 5000;
  //   const result = 30;

  //   expect(calcularValorPorHora(rendaMensal)).toBe(result);
  // });

});





