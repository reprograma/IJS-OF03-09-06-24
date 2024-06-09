const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("conjunto de testes para calcular o valor total do projeto", () => {

    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue("pacote_basico");
    })

    test("calcula valor final do projeto", () => {
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
          ];
        const valorHora = 70;
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(3696);

    });
    
    

});