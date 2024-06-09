const {
    calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

 describe ("calcularValorPorHora", () => {
    test("Valida a função cálculo por hora", () => {
        const rendaMensal = 5000;
        const resultado = Math.ceil(rendaMensal / (8 * 22));
        expect(calcularValorPorHora(rendaMensal)).toBe(resultado);
    });

    test("Forçar o teste a passar", () => {
        const rendaMensal = 5000;
        const resultado = 29;
        expect(calcularValorPorHora(rendaMensal)).toBe(resultado);
    });


    test("forçar o teste a falhar", () => {
        const rendaMensal = 5000;
        const resultado = 30;
        expect(calcularValorPorHora(rendaMensal)).toBe(resultado);  

    });
});
