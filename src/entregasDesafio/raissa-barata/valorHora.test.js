const { calcularValorPorHora }  = require("../../dominio/calculadora/Hora/valorHora")

describe("calculaValorPorHora ", () => {
    test( "valida função cáculo valor de média", () => {
        const rendaMensal = 5000;
        const resultado = Math.ceil(rendaMensal / (8 * 22))

        expect(calcularValorPorHora(rendaMensal)).toBe((resultado))     
     });
    test( "Força o teste a passar", () => {
        const rendaMensal = 5000;
        const resultado = 29;

        expect(calcularValorPorHora(rendaMensal)).toBe(resultado);
    });

    it("Verifica erro executar o teste com valor errado", () => {
        const rendaMensal = 5000;
        const resultado = 30;

        expect(calcularValorPorHora(rendaMensal)).not.toBe(resultado);
    })
})