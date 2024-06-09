const { HORAS_POR_FUNCIONALIDADE } = require("../../dominio/calculadora/constantes/constantes");
const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("conjunto de testes para calcular a quantidade de horas por projeto", () => {

    test("calcular quantidade de horas", () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
          ];

        const resultado = HORAS_POR_FUNCIONALIDADE.setup + HORAS_POR_FUNCIONALIDADE.responsividade
        + (3 * HORAS_POR_FUNCIONALIDADE.construcao_1_pagina) + HORAS_POR_FUNCIONALIDADE.formulario
        + HORAS_POR_FUNCIONALIDADE.ssr;
        expect(calcularHorasDeProjeto(funcionalidades)).toBe(resultado);
    })

    test("forçar o teste a passar", () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
          ];

        const resultado = 64;
        expect(calcularHorasDeProjeto(funcionalidades)).toBe(resultado);
    })

});