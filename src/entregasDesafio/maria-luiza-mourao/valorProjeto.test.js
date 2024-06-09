const {
    calcularValorTotalProjeto
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote");

describe("Validar o valor total do pacote" , () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue("pacote_basico");
    });

    test("Validar valor total do projeto de acordo com as funcionalidades e valor hora de desenvolvedora", () => {
        const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        ];

        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(resultado).toBe(3696);
    });

});