const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe("calcularValorPorHora", () => {

    test("validando cálculo valor por Hora", () => {
        
        const rendaMensal = 5000;
        const result = Math.ceil(rendaMensal / (22 * 8)); 

        expect(calcularValorPorHora(rendaMensal)).toBe(result); 

    });

    

    test("forçar o teste a passar", () => {
        
        const rendaMensal = 5000;
        const result = Math.ceil(rendaMensal / (22 * 8)); 

        expect(calcularValorPorHora(rendaMensal)).toBe(result); 

    
    })

    //Forçar o teste a falhar

    // test("forçar o teste a falhar", () => {
    //     //setup
    //     const rendaMensal = 5000;

    //     //adiciono as informações necessárias para executar o teste:

    //     //ação

    //     const result = 30; //pega o menor valor inteiro do resultado

    //     //verificação
    //     expect(calcularValorPorHora(rendaMensal)).toBe(result); //espero que o resultado seja igual ao valor esperado

    // })

})

