const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("Testa valor total do projeto", () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue("pacote_basico")
    });

    test("Retorna valor total correto do projeto de acordo com as funcionalidades e o valor hora da desenvolvedora", () => {
        const valorProjetoCorreto = 2464;
        const valorHora = 70;
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
        ];

        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
        expect(resultado).toBe(valorProjetoCorreto);
    });

    test("Retorna valor errado no valor total do projeto de acordo com as funcionalidades e o valor hora da desenvolvedora", () => {
        const valorProjetoErrado = 3696;
        const valorHora = 70;
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
        ];

        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
        expect(resultado).not.toBe(valorProjetoErrado);
    });
});
