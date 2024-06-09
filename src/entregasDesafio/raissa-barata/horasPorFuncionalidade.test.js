const { calcularHorasDeProjeto }  = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("CalculaHorasDeProjeto", () => {
    test("Dado uma lista de funcionalidades, validar quantas horas pro projeto", () => {
        const listaFuncionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
          ]

        const resultado = calcularHorasDeProjeto(listaFuncionalidades);

        expect(resultado).toBe(72)
    })
    test("Dado uma lista de funcionalidades, forçar o erro na moemento de validar quantas horas pro projeto", () => {
        const listaFuncionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
          ]

        const resultado = calcularHorasDeProjeto(listaFuncionalidades);
        const valorResultadoErrado = 68

         expect(resultado).not.toBe(valorResultadoErrado)
    })
})