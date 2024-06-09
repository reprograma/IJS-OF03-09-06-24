const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");

const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("", () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue("pacote_basico");
    });

    test("", () => {
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
        ]

        const valorHora = 70;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toBe(3696)

    })
})