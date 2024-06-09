const {
    calcularValorPorHora, 
} = require("../../dominio/calculadora/Hora/valorHora");

describe("Conjunto de testes na função calcularValorPorHora", () => {
    test("valida funcao calcular por hora", () => { 
        const rendaMensal = 5000;
        const result = Math.ceil(rendaMensal / (8 * 22)); // Corrigido aqui

        expect(calcularValorPorHora(rendaMensal)).toBe(result);
    });

    test("forçar o teste a passar", () => {
        const rendaMensal =  5000;
        const result = 29;

        expect(calcularValorPorHora(rendaMensal)).toBe(result);
    });

    //  test("forçar o teste a falhar", () => {
    //     const rendaMensal =  5000;
    //      const result = 30;

    //    expect(calcularValorPorHora(rendaMensal)).toBe(result);
    // });
});
