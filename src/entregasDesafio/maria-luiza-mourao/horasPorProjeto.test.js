const {
    calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe ("Cálculo de Quantidade de Horas por Projeto ", () => {

    test ("Dada uma lista de funcionalidades, valida quantas horas por projeto ", () => {
        const listaFuncionalidades = [
        'setup',
        'responsividade',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'formulario',
        'ssr'
        ];

        const result = calcularHorasDeProjeto(listaFuncionalidades);

        expect(calcularHorasDeProjeto(listaFuncionalidades)).toBe(72);
    
    });

})

