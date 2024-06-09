const {
    calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora")

describe ("calcularValorPorHora", () => {

    test ("Validando Cálculo de Média", () => {
        const rendaMensal = 5000;
        const result = Math.ceil(5000/ (8 * 22));
        expect(calcularValorPorHora(rendaMensal)).toBe(result);
    
    });

    test("Forçando o Teste a passar", () => {
        const rendaMensal = 5000;
        const result = 29;
        expect(calcularValorPorHora(rendaMensal)).toBe(result);
    });

    // test("Forçando o Teste a falhar", () => {
    //     const rendaMensal = 5000;
    //     const result = 22;
    //     expect(calcularValorPorHora(rendaMensal)).toBe(result);
    // });

})

