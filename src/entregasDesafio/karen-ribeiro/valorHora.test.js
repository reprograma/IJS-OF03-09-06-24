const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe("calcularValorPorHora", () => {

    test("validando cálculo valor por Hora", () => {
        //setup
        const rendaMensal = 5000;

        //adiciono as informações necessárias para executar o teste:

        //ação

        const result = Math.ceil(rendaMensal / (22 * 8)); //pega o menor valor inteiro do resultado

        //verificação
        expect(calcularValorPorHora(rendaMensal)).toBe(result); //espero que o resultado seja igual ao valor esperado

    });

    //Forçar o teste a passar

    test("forçar o teste a passar", () => {
        //setup
        const rendaMensal = 5000;

        //adiciono as informações necessárias para executar o teste:

        //ação

        const result = Math.ceil(rendaMensal / (22 * 8)); //pega o menor valor inteiro do resultado

        //verificação
        expect(calcularValorPorHora(rendaMensal)).toBe(result); //espero que o resultado seja igual ao valor esperado

    
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

