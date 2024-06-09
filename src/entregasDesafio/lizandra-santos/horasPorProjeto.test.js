const { calcularHorasDeProjeto, } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Cálculo de quantidade de horas por projeto", () => {

    test("Dada uma lista de funcionalidade, valida quantas horas por projeto", () => {

        //setup

        const listaDeFuncionalidades = [

            'setup',

            'responsividade',

            'construcao_1_pagina',

            'construcao_1_pagina',

            'construcao_1_pagina',

            'formulario',

            'ssr',

        ]

        //açao

        const result = calcularHorasDeProjeto(listaDeFuncionalidades);

        //verificação

        expect(result).toBe(72);

    });

});