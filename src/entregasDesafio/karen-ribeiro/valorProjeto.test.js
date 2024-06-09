const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js');

describe("validar valor total do projeto", () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue("pacote_basico");
    });
    test ("Valida valor total do projeto de acordo com as funcionalidades e valor hora da desenvolvedora", () => {
        
        const funcionalidades = ["setup",
        "responsividade",  
        "construcao_1_pagina",  
        "construcao_1_pagina",  
        "construcao_1_pagina"
        ];
        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(resultado).toBe(3696);
    });
});