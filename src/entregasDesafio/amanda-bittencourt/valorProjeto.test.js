const {calcularValorTotalProjeto} = require("../../dominio/calculadora/Projeto/valorProjeto")

const pacote = require("../../dominio/calculadora/Projeto/pacote.js")
jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("", ()=>{
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue("pacote_basico")
    });
    test("", ()=>{
        //setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina"
        ];


        //acao
        const valorHora = 70;
        const result = calcularValorTotalProjeto(funcionalidades,valorHora)


        //verificacao
        expect(result).toBe(3696);
    })
})