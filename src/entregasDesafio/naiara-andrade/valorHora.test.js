const {
    calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("calcularValorPorHora", () => {
    test("valida cálculo da média", () => {
        const rendaMensal = 5000;
        const result = Math.ceil(rendaMensal / (8*22));

        expect(calcularValorPorHora(rendaMensal)).toBe(result);
    });
    
    // forçar o teste a passar
    test("forar o teste a passar", () =>{
        const rendaMensal = 5000;
        const result = 29;

        expect(calcularValorPorHora(rendaMensal)).toBe(result);
    });

    // forçar o teste a falhar
    // test("forçar o teste a falhar", () => {
    //     const rendaMensal = 5000;
    //     const result = 30;

    //     expect(calcularValorPorHora(rendaMensal)).toBe(result);
    // });

});
