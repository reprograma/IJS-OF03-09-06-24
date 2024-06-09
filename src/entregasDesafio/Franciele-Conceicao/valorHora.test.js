const {
    calcularValorPorHora,

} = require("..//../dominio/calculadora/Hora/valorHora")


describe("calcularValorPorHora", () => {
    test("Validando função cálculo valor por hora", () => {

        const rendaMensal = 5000;

        const result = Math.ceil(5000 / (8 * 22));

        expect(calcularValorPorHora(rendaMensal)).toBe(result);

    })

    test("forçar o teste a passar", () => {

        const rendaMensal = 5000;
        const result = 29;

        expect(calcularValorPorHora(rendaMensal)).toBe(result);
    })
    
    test("Calcula o valor por hora para um valor baixo de renda mensal", () => {
        const rendaMensal = 2000;
        const horasPorDia = 8;
        const diasPorMes = 22;
        const resultadoEsperado = Math.ceil(rendaMensal / (horasPorDia * diasPorMes));

        expect(calcularValorPorHora(rendaMensal)).toBe(resultadoEsperado);
    });

    test("Calcula o valor por hora com uma renda mensal diferente", () => {
        const rendaMensal = 6000;
        const horasPorDia = 8;
        const diasPorMes = 22;
        const resultadoEsperado = Math.ceil(rendaMensal / (horasPorDia * diasPorMes));

        expect(calcularValorPorHora(rendaMensal)).toBe(resultadoEsperado);
    });

})



