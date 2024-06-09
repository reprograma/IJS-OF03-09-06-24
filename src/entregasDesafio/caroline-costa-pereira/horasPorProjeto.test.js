const {
    calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Cálculo da quantidade de horas por projeto", () => {
    test("Dada uma lista de funcionalidades, valida quantas horas por projeto", () => {
        const listaDeFuncionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ];

        const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

        expect(resultado).toBe(72);
    });

    test("Dada uma lista de funcionalidades inválidas, calcula quantas horas por projeto", () => {
        const listaDeFuncionalidades = [
            'passear_com_os_cachorros', 
            'dormir_cedo'
        ];

        const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

        expect(resultado).toBe(NaN);
    });
});
