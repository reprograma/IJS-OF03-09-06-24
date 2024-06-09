const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");
describe("calcularValorPorHora", () => {
  it("should validate the function calculate hour value", () => {
    const rendaMensal = 5000;
    const resultado = Math.ceil(rendaMensal / (8 * 22));

    expect(calcularValorPorHora(rendaMensal)).toEqual(resultado);
  });
  it("should force test to pass", () => {
    const rendaMensal = 5000;
    const resultado = calcularValorPorHora(rendaMensal);

    expect(resultado).toBe(29);
  });

  /* it('should force test to fail', () => {
        const rendaMensal = 5000
        const resultado = calcularValorPorHora(rendaMensal)    

        expect(resultado).toBe(30)
  }); */
});
