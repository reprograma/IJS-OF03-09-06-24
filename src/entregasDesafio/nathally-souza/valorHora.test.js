const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");
const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES,
} = require("../../dominio/calculadora/constantes/constantes");

describe("valor hora", () => {
    /**
     * Gerar um número aleatório para a renda entre 1000 e 100000
     * @public
    */
   const geraRenda = () => Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
  
   it("deve retornar o valor cobrado por hora para ter a renda planejada", () => {
    const renda = geraRenda()
    const valorEsperado = Math.ceil(
      renda / (HORAS_POR_DIA * DIAS_UTEIS_NO_MES)
    );
    expect(calcularValorPorHora(renda)).toBe(valorEsperado);
  });

    it("deve falhar ao usar um valor diferente do que a renda planejada", () => {
        const renda = geraRenda()
        const valorEsperado = Math.ceil(
        renda / (HORAS_POR_DIA * DIAS_UTEIS_NO_MES)
        );
        expect(calcularValorPorHora(renda/10)).not.toBe(valorEsperado);
    });
});
