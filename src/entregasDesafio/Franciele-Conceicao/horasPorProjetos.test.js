const {calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Cálculo de quantidade de horas por projeto", () => {
    test("Dada uma lista de funcionalidades, valida quantas horas por projetos", () => {

        const listaDeFuncionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ];
        const result = calcularHorasDeProjeto(listaDeFuncionalidades);
        expect(result).toBe(72);
    })

})
