const {
    calcularHorasDeProjeto,    
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calculo do valor do projeto", () => {
    test("Dada uma lista de funcionalidades, valida quantas horas por projeto", () => {
        // setup
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
          ];

          // ação
          const result = calcularHorasDeProjeto(funcionalidades);

          // verificação
          expect(result).toBe(72);
    })
})
