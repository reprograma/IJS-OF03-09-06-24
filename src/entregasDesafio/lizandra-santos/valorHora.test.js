const { calcularValorPorHora, } = require("../../dominio/calculadora/Hora/valorHora")


describe("calcularValorPorHora", () => {


    test("valida função do cálculo de valor por hora", () => {
        const rendaMensal = 5000;
        const result = Math.ceil(5000/(8*22));
    
      
        expect(calcularValorPorHora(rendaMensal)).toBe(result)
    
    
    });
});

test("forçar o teste a passar", () => {
    //setup
    const rendaMensal = 5000;
    const result = 29;

    expect(calcularValorPorHora(rendaMensal)).toBe(result)


});

// test("forçar o teste a falhar", () => {
//     //setup
//     const rendaMensal = 5000;
//     const result = 30;

//     //verificação
//     expect(calcularValorPorHora(rendaMensal)).toBe(result)


// });


